const path = require("path");
const createRenderer = require('./mdRenderer')
const fs = require('fs-extra')
const mdRenderer = createRenderer()
const marked = require('marked')
const camelCase = require('lodash/camelCase')
module.exports = async function docLoader(content, pathSrc) {
    const env = process.env.NODE_ENV
    const pathObj = path.resolve(__dirname, '..')
    const relativeUrl = pathSrc.replace(pathObj + '/', '')
    return convertMdDoc(content, relativeUrl, env)
}

async function convertMdDoc(text, url, env = 'development') {
    const forceShowAnchor = !!~ text.search('<!--anchor:on-->')
    const tokens = marked.lexer(text);

    //处理 md 的demo
    const demosIndex = tokens.findIndex(
        (token) => token.type === 'code' && token.lang === 'demo'
    )
    // 处理右侧 导航标题
    let demoInfos = []
    if (~ demosIndex) {
        demoInfos = await resolveDemoInfos(tokens[demosIndex].text, url, env)
        tokens.splice(demosIndex, 1, {
            type: 'html',
            pre: false,
            text: createDemosTemplate(demoInfos)
        })
    }
    const docMainTemplate = marked.parser(tokens, {
        gfm: true,
        renderer: mdRenderer
    })
    const docTemplate = `
            <template>
              <div class="doc" >
               ${ docMainTemplate }
              </div>
              <div class="catalogue-box"></div>
            </template>`

    // 处理 script
    const components = [];
    const docScript = await createScript(demoInfos, components, url, forceShowAnchor)
    return `${ docTemplate }\n\n${ docScript }`
}

async function resolveDemoInfos(literal, url, env) {
    const ids = literal
        .split('\n')
        .map((line) => line.trim())
        .filter((id) => id.length)
    const infos = []
    for (const id of ids) {
        const debug = id.includes('debug') || id.includes('Debug')
        if (env === 'production' && debug) {
            continue
        }
        const fileName = `${ id }.demo.md`
        const variable = `${ camelCase(id) }Demo`
        infos.push({
            id,
            variable,
            fileName,
            title: await resolveDemoTitle(fileName, url),
            tag: `<${ variable } />`,
            debug
        })
    }
    return infos
}

async function resolveDemoTitle(fileName, demoEntryPath) {
    const pathObj = path.resolve(__dirname, '..')
    const demoStr = await fs.readFile(
        path.resolve(pathObj, demoEntryPath, '..', fileName),
        'utf-8'
    )
    return demoStr.match(/# ([^\n]+)/)[1]
}

function createDemosTemplate(demoInfos) {
    return `<component-demos>
                ${ demoInfos.map(({tag}) => tag).join('\n') }
            </component-demos>`
}


async function createScript(demoInfos, components = [], url, forceShowAnchor) {

    // 处理合并 components
    const importRes = demoInfos.map(({variable, fileName}) => `import ${ variable } from './${ fileName }'`)
        .concat(components.map(
            (component) => `import ${ camelCase(component) } from './${ component }'`
        ))
        .join('\n');
    // 处理组件注册名
    const componentStmts = demoInfos
        .map(({variable}) => variable)
        .concat(components)
        .join(',\n')

    return `<script >
             ${ importRes }
             export  default {
                   components: {
                    ${ componentStmts }
                  },
             }
</script>`
}
