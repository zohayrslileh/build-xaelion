"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const express_1=require("graphql-http/lib/use/express"),schema_1=require("#/Tools/Graphql/schema"),Resolver_1=__importDefault(require("./Resolver"));exports.default=(0,express_1.createHandler)({schema:(0,schema_1.importSchema)(__dirname,"schema.gql"),rootValue:Resolver_1.default});