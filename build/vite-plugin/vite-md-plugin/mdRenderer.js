const marked = require('marked')
const hl_js = require('highlight.js')

function codeRenderer() {
    const renderer = new marked.Renderer();
    const overrides = {
        //头部
        heading: (text, level) => {
            const id = text.replace(/ /g, '-');
            // return `<h${ level }>${ text }</h${ level }>\n`
            return `<h2>${text}</h2>\n`
        },
        //段落
        paragraph: (text) => {
            return `<p>${ text }</p>`
        },
        code(code) {
            const highlighted = hl_js.highlight(code).value
            let content;
            return content = `<div class="code"><pre v-pre>${ highlighted }</pre></div>`
        },
        table(header, body) {
            if (body) body = '<tbody>' + body + '</tbody>'
            return (
                '<div class="md-table-wrapper">' +
                '123' +
                '</div>'
            )
        },
    }

    Object.keys(overrides).forEach((key) => {
        renderer[key] = overrides[key]
    })
    return renderer
}

module.exports = codeRenderer
