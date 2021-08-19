const chalk = require('chalk')
const path = require('path')
const inquirer = require('inquirer');
const fs = require('fs')
const endOfLine = require('os').EOL

async function getAlias() {
    return new Promise((resolve => {
        function recursion() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'alias',
                    message: '中文名'
                }
            ]).then(v => {
                const {alias} = v;
                alias ? resolve(alias) : recursion()
            })
        }

        recursion()
    }))
}

function crateComponent() {
    return new Promise(async (resolve, reject) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'workFile',
                message: '请输入component名字'
            },
        ])
            .then(async v => {
                const {workFile} = v;
                if (!workFile) {
                    await crateComponent();
                    return
                }
                await getAlias().then(async alias => {
                    const pathUrl = path.resolve(__dirname, '../', `src/packages/${ workFile }/`,)
                    const scssUrl = path.resolve(__dirname, '../', `src/styles/packages/`,)
                    console.log(chalk.greenBright(pathUrl + '\\' + 'index.js'))
                    const is_exist = fs.existsSync(path.resolve(__dirname, '../', `src/packages/${ workFile }/`));
                    if (is_exist) {
                        console.log(chalk.red('>> 此组件已经存在'))
                    } else {
                        await disposeComponentPath({workFile}).then(async start => {
                            if (start) {
                                const file = path.resolve(__dirname, '../', `src/packages/${ workFile }`);
                                fs.mkdirSync(file)
                                let src = fs.mkdirSync(file + '\\' + 'src', {recursive: true})
                                const disposeTemplateRes = disposeTemplate(workFile, 'js')

                                console.log(chalk.greenBright(`>> 创建入口文件`))
                                console.log(chalk.greenBright(`>> 写入模板`))
                                await new Promise(resolve => {
                                    writeTemplate(pathUrl + '\\' + 'index.js', disposeTemplateRes, (err) => {
                                        if (err) {
                                            console.log(err);
                                            return
                                        }
                                        console.log(chalk.greenBright(`ok!`))
                                        resolve()
                                    })
                                })

                                console.log(chalk.greenBright(`>> create scss file`))
                                writeTemplate(scssUrl + '\\' + `${ workFile }.scss`, '@import "../constant/const";', (err) => {
                                    if (err) {
                                        console.log(err);
                                        return
                                    }
                                    console.log(chalk.greenBright(`>> 已创建${ workFile }.scss`))
                                    console.log(chalk.greenBright(`>> 正在导出到入口`))
                                    const scssEntry = path.resolve(__dirname, '../', `src/styles/index.scss`,)
                                    fs.appendFile(scssEntry, `@import "packages/${ workFile }";`, () => {
                                        console.log(chalk.greenBright(`>> 已完成`))
                                        resolve({
                                            component: workFile,
                                            alias: alias
                                        })
                                    })
                                })
                            }
                        })
                    }
                })
            })
    })
}

function disposeTemplate(workFile, type = 'js') {
    let pag = `import ${ workFile } from './src/${ workFile }.vue';${ endOfLine }`
    pag += `${ workFile }.install = function (Vue) {
Vue.component(${ workFile }.name, ${ workFile })
};
export default ${ workFile }
                            `
    return pag
}

function writeTemplate(path, template, callback) {
    fs.writeFile(path, template, (err) => {
        callback && callback()
    })
}

function disposeComponentPath({workFile}) {
    return new Promise((resolve, reject) => {
        try {
            const componentPath = path.resolve(__dirname, '..', 'components.json');
            fs.readFile(componentPath, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return
                }
                const reversalData = JSON.parse(data);
                reversalData[workFile] = `src/packages/${ workFile }/index.js`;
                fs.writeFile(componentPath, JSON.stringify(reversalData), (err, data) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    resolve('ok!')
                })
            })
        } catch (err) {
            console.log(chalk.redBright('》》 生成组件路径失败！'))
            reject(err)
        }

    })
}

async function start() {
    let RunComponent = await crateComponent()
    return [RunComponent]
}

// start().then((data) => {
//     console.log(data);
// })

fn()

function fn() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'is',
            default: false,
            message: '是否更新到路由'
        }
    ]).then((data) => {
        console.log(__dirname);
        console.log(data);
    })
}
