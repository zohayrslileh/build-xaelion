"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Configs_1=require("#/Configs"),control=function({route:e}){e("-v",()=>require("./version")),e("backup",()=>require("./backup")),e("update",()=>require("./update")),Configs_1.DEV_MODE&&(e("watch",()=>require("./watch")),e("build",()=>require("./build")),e("production",()=>require("./production")))};exports.default=control;