const fs = require('fs')
const path = require('path')

class CreateRoutes {
    constructor() {
        this.routes = [];
        this.init()
    }

    init() {
        switch (process.env.NODE_ENV) {
            case "development":
                console.log(process.env.NODE_ENV);
                this.processStart()
                break;
            case "bug":
                console.log(process.env.NODE_ENV);
                this.processStart(false)
                break;
        }
    }

    processStart(is_dev = true) {
        if (is_dev) {
            const componentPath = path.resolve(__dirname, '..', 'src/packages/');
            fs.readdirSync(componentPath).forEach((item) => {
                const url = path.resolve(componentPath, item);
                const state = fs.statSync(url);
                if (state.isDirectory()) {
                    console.log(item);
                }
            })
        }
    }
}

new CreateRoutes()
