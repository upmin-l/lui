const mdLoader = require('./getMdLoader')
const docLoader = require('./getEntryLoader')
const fs = require('fs-extra')
module.exports = async function getMdTransform(id) {
    const code = await fs.readFile(id, 'utf-8');
    if (id.endsWith('.demo.md')) {
        return mdLoader(code, id)
    } else if (id.endsWith('.md')) {
        return docLoader(code, id)
    }
}
