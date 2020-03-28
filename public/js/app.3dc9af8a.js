(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d6d35":"c93b236f","chunk-2d2086b7":"7c2f367c","chunk-2d217357":"23f9545e","chunk-2d22d746":"02d1ec07","chunk-2d237582":"77be5340","chunk-7348bcfb":"9c171b62"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"mb-5"},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"primary"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Todoloper")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[e.isActive?e._e():n("b-nav-item",{attrs:{to:"/login"}},[e._v("Login")]),e.isActive?e._e():n("b-nav-item",{attrs:{to:"/register"}},[e._v("Register")]),e.isActive?n("b-nav-item",{attrs:{to:"/notes"}},[e._v("Notas")]):e._e()],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.isActive?n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v(e._s(e.user.name))])]},proxy:!0}],null,!1,210705957)},[e.isActive?n("b-dropdown-item",{attrs:{to:"/profile"}},[e._v("Profile")]):e._e(),n("b-dropdown-item",{on:{click:function(t){return e.logOut()}}},[e._v("Sign Out")])],1):e._e()],1)],1)],1)],1),n("router-view")],1)},a=[],u=n("5530"),c=n("2f62"),i={name:"App",methods:Object(u["a"])({},Object(c["b"])(["logOut","readToken"])),computed:Object(u["a"])({},Object(c["c"])(["isActive"]),{},Object(c["d"])(["user"])),created:function(){this.readToken()}},s=i,l=(n("5c0b"),n("2877")),f=Object(l["a"])(s,o,a,!1,null,null,null),d=f.exports,p=(n("45fc"),n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home container"},[n("h3",[e._v("Todo app with MongoDB Express VueJS and NodeJS")]),n("hr"),n("b-button",{staticClass:"btn-block",attrs:{to:"/notes",variant:"success"}},[e._v("Go to notes")])],1)},b=[],v={name:"Home",components:{}},h=v,g=Object(l["a"])(h,m,b,!1,null,null,null),k=g.exports,y=n("04e1"),O=n.n(y);r["default"].use(c["a"]);var _=new c["a"].Store({state:{user:"",token:localStorage.getItem("token")||"",userDB:""},mutations:{getUser:function(e,t){if(e.token=t,""===t)return e.userDB="";e.userDB=O()(t)},getUserObject:function(e,t){e.user=t}},actions:{saveUser:function(e,t){var n=e.commit;localStorage.setItem("token",t),n("getUser",t)},saveProfile:function(e,t){var n=e.commit;localStorage.setItem("user",JSON.stringify(t)),n("getUserObject",t)},logOut:function(e){var t=e.commit;t("getUser",""),localStorage.removeItem("token"),localStorage.removeItem("user"),S.push({name:"Login"})},readToken:function(e){var t=e.commit,n=localStorage.getItem("token");return t("getUser",n||"")}},modules:{},getters:{isActive:function(e){return!!e.token},user:function(e){return JSON.parse(e.user)}}});r["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/notes",name:"Notes",component:function(){return n.e("chunk-7348bcfb").then(n.bind(null,"0841"))},meta:{requireAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))},meta:{requireAuth:!0}},{path:"/profile/edit",name:"EditProfile",component:function(){return n.e("chunk-2d237582").then(n.bind(null,"fb5e"))},meta:{requireAuth:!0}}],j=new p["a"]({mode:"history",base:"/",routes:w});j.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requireAuth}));r&&""===_.state.token&&n({name:"Login"}),n()}));var S=j,A=n("5f5b"),P=(n("f9e3"),n("2dd8"),n("bc3a")),x=n.n(P),T=n("a7fe"),E=n.n(T);r["default"].use(A["a"]),r["default"].use(E.a,x.a),x.a.defaults.baseURL="https://mongo-express-vue-node.herokuapp.com/api",r["default"].config.productionTip=!1,new r["default"]({router:S,store:_,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.3dc9af8a.js.map