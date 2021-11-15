const path = require('path')
const createRenderer = require('./mdRenderer')
const fs = require('fs-extra')
const marked = require('marked')
const mdRenderer = createRenderer()
module.exports = function mdLoader(content, pathSrc) {
    const pathObj = path.resolve(__dirname, '..')
    const relativeUrl = pathSrc.replace(pathObj + '/', '')
    return analysisMd(content, {relativeUrl, resourcePath: pathSrc})
}
let template = fs
    .readFileSync(path.resolve(__dirname, '../../../examples/views/docTemplate', 'componentTemplate.vue'))
    .toString();

function analysisMd(content, {resourcePath, relativeUrl}) {
    const tokens = marked.lexer(content);
    const parts = analysisTransform(tokens)
    const mergePart = mergeParts(parts)
    const fileName = getFileName(resourcePath)
    return genVueComponent(
        mergePart,
        fileName,
        relativeUrl
    )
}

function analysisTransform(tokens) {
    let template, style, title, script,des;
    const contentTokens = []
    contentTokens.links = tokens.links;
    for (const key of tokens) {
        switch (key.type) {
            case "heading":
                title = key.text;
                break;
            case "code":
                if (key.lang === 'js' || key.lang === 'script') script = key.text;
                if (key.lang === 'template' || key.lang === 'html') template = key.text;
                if (key.lang === 'style' || key.lang === 'css') style = key.text
                break;
            case 'html':
                if (key.text.includes('des-box')){
                    des = key.text
                }else {
                    contentTokens.push(key)
                }
                break;
            default:
                contentTokens.push(key)
        }
    }
    return {
        template,
        style,
        script,
        title,
        des,
        content: marked.parser(contentTokens, {
            renderer: mdRenderer
        })
    }
}

function mergeParts(parts) {
    const mergedParts = {
        ...parts
    }
    mergedParts.title = parts.title
    mergedParts.content = parts.content
    mergedParts.code = '';

    if (parts.template) {
        mergedParts.code += `<template>\n${ parts.template
            .split('\n')
            .map((line) => (line.length ? '  ' + line : line))
            .join('\n') }\n</template>`
    }

    if (parts.script) {
        if (parts.template) mergedParts.code += '\n\n'
        mergedParts.code += `<script setup>
${ parts.script }
</script>`
    }

    if (parts.style) {
        if (parts.template || parts.script) mergedParts.code += '\n\n'
        mergedParts.code += `<style>
${ parts.style }
</style>`
    }
    mergedParts.code = encodeURIComponent(mergedParts.code);
    return mergedParts
}

function getFileName(resourcePath) {
    //resourcePath  //E:/test/maker-test/src/demo/button.demo.md
    const dirs = resourcePath.split('/') //[ 'E:', 'test', 'maker-test', 'src', 'demo', 'button.demo.md' ]
    const fileNameWithExtension = dirs[dirs.length - 1] //button.demo.md
    return [fileNameWithExtension.split('.')[0], fileNameWithExtension] //[ 'button', 'button.demo.md' ]
}

function genVueComponent(parts, fileName, relativeUrl) {
    let src = template
    src = src.replace(/<!--DEMO_FILE_NAME-->/g, fileName)
    src = src.replace(/<!--URL-->/g, relativeUrl)
    if (parts.title) src = src.replace(/<!--TITLE_SLOT-->/g, parts.title)
    if (parts.code) src = src.replace(/<!--CODE_SLOT-->/, parts.code)
    if (parts.content) src = src.replace(/<!--CONTENT_SLOT-->/, parts.content)
    if (parts.script) src = src.replace(/<!--SCRIPT_SLOT-->/, `<script setup>${ parts.script }</script>`)
    if (parts.style) src = src.replace(/<!--STYLE_SLOT-->/, parts.style)
    if (parts.template) src = src.replace(/<!--DEMO_SLOT-->/, parts.template)
    if (parts.des) src = src.replace(/<!--DES_SLOT-->/, parts.des)
    return src.trim()
}
