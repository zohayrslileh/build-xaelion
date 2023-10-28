"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const promises_1=require("fs/promises"),Terminal_1=__importDefault(require("#/Tools/Console/Terminal")),tsconfig_1=__importDefault(require("#/Configs/tsconfig")),Path_1=__importDefault(require("#/Tools/Files/Path")),uglify_js_1=require("uglify-js"),path_1=require("path"),chalk_1=__importDefault(require("chalk"));async function default_1(){Terminal_1.default.break.step("Build Controller").break;var e=tsconfig_1.default.compilerOptions.baseUrl,t=tsconfig_1.default.compilerOptions.outDir;await(0,Path_1.default)(t,{force:!0}).clear(),Terminal_1.default.execute("npx tsc"),await(0,Path_1.default)(t).scan(async function({isDirectory:e,fullPath:t,subPath:i}){e||".js"!==(0,path_1.extname)(t)||(e=await(0,promises_1.readFile)(t,{encoding:"utf8"}),console.log("Minify: ",chalk_1.default.green(i)),await(0,promises_1.writeFile)(t,(0,uglify_js_1.minify)(e).code))}),await(0,Path_1.default)(e).ignore(["*.ts"]).copy(t)}exports.default=default_1;