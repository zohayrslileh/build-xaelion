"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const coinmarketcap_1=require("#/Core/Community/coinmarketcap"),fetch=async function(e,t){var c=!1,o=1,a=e.on("stop",()=>c=!0);try{do{var r=await(0,coinmarketcap_1.scrape)(t,o)}while(r&&e.socket.emit("fetch",r),o++,!c&&r)}finally{a()}e.socket.emit("stoped")};exports.default=fetch;