"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class Router{name;action;deepRouter;constructor(t){this.deepRouter=t,this.route=this.route.bind(this),this.index=this.index.bind(this),this.other=this.other.bind(this),this.execute=this.execute.bind(this)}route(t,e){this.name===t&&(this.action=e)}index(t){void 0===this.name&&(this.action=t)}other(t){void 0===this.action&&(this.action=t)}execute(t,e={}){this.name=t[0],this.deepRouter(Object.assign(this,{execute:void 0}));var i,t=t.slice(1);this.action&&(this.action instanceof Router?this.action.execute(t,e):(i=this.action({params:t,flags:e}))?.default instanceof Function?i.default({params:t,flags:e}):i?.default instanceof Router&&i.default.execute(t,e))}}function router(t){return new Router(t)}exports.default=router;