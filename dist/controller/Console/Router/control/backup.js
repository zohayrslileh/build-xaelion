"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const package_1=__importDefault(require("#/Configs/package")),Path_1=__importDefault(require("#/Tools/Files/Path")),xaelion_1=__importDefault(require("#/Configs/xaelion"));async function default_1(){var e="storage/backup",t=(new Date).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"}).replace(/[\/:]/g,"-");await(0,Path_1.default)().ignore([e,...xaelion_1.default.renewablePaths||[]]).compress(e+`/${package_1.default.name} (${t}).zip`)}exports.default=default_1;