const chalk = require('chalk')
const path = require('path')
const inquirer = require('inquirer');
const fs = require('fs')
const renderString = require('json-templater/string');
const endOfLine =require('os').EOL
class task {
    constructor() {

    }

    async crateComponent() {
        return new Promise(async (resolve, reject) => {
            const res = inquirer.prompt([{
                type: 'input',
                name: 'workFile',
                message: '请输入component名字'
            }]).then(async v => {
                const {workFile} = v;
                const pathUrl = path.resolve(__dirname, '../', `src/packages/${ workFile }/`,)
                console.log(chalk.green(pathUrl + '\\' + 'index.js'))
                const is_exist = fs.existsSync(path.resolve(__dirname, '../', `src/packages/${ workFile }/`));

                if (is_exist) {
                    console.log(chalk.red('此目录已经存在'))
                    return
                } else {
                    const file = path.resolve(__dirname, '../', `src/packages/${ workFile }`);
                    fs.mkdirSync(file)
                    let pag = `import ${ workFile } from './src/${ workFile }.vue';${endOfLine}`
                    pag += `${ workFile }.install = function (Vue) {
Vue.component(${ workFile }.name, ${ workFile })
};
export default ${ workFile }
                            `
                    fs.writeFile(pathUrl + '\\' + 'index.js', pag, (err) => {
                        console.log(err);
                    })
                }

                console.log(chalk.green(`================================================`))
                console.log(chalk.green(`=   生成组件入口文件成功(build files success) =`))
                console.log(chalk.green(`================================================`))
            })
        })
    }
}

const Task = new task();

async function start() {
    await Task.crateComponent()
}

start()
