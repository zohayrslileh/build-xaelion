
/*
 |---------------------------------------------------------
 |  Define Development Environment
 |---------------------------------------------------------
 |  For development environment use "npx ts-node index.js"
 |  For production environment use "node index.js"
 |
 */
const DEV = process.execArgv.some(arg => arg.includes('ts-node'));

/*
 |-----------------------------
 |  Require Application
 |-----------------------------
 |
 |
 */
const application = require(DEV ? './source/controller' : './dist/controller');

application() // Done