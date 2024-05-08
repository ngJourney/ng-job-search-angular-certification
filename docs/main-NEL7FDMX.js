import{f as Le,g as Pe,i as Re,k as Te,l as Ae,m as Ce,n as qe}from"./chunk-OQ56LEPH.js";import{Ra as ue,Ta as U,U as xe,Ua as z,Va as Se,a as x,b as S,c as le,fb as K,g,jb as Ee,kb as de,za as ce}from"./chunk-USJSRBLR.js";var Oe=[{path:"jobs",loadComponent:()=>import("./chunk-QCEYCM3W.js").then(e=>e.JobComponent)},{path:"jobs/:id",loadComponent:()=>import("./chunk-AL6XBUAD.js").then(e=>e.DetailedJobComponent)},{path:"favorites",loadComponent:()=>import("./chunk-XYGGOR3C.js").then(e=>e.FavoriteJobComponent)},{path:"error",loadComponent:()=>import("./chunk-23DFNBC3.js").then(e=>e.ErrorComponent)},{path:"**",redirectTo:"/jobs"}];var Ie={providers:[Ce(Oe),Le()]};var zt=()=>["/jobs"],Kt=()=>["/favorites"],We=(()=>{let t=class t{constructor(){this.title="ng-job-search"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=xe({type:t,selectors:[["app-root"]],standalone:!0,features:[Ee],decls:9,vars:4,consts:[[1,"wrapper"],["routerLinkActive","active",3,"routerLink"],[1,"outlet-wrapper"]],template:function(i,s){i&1&&(U(0,"div",0),K(1," Find Your Job "),U(2,"ul")(3,"button",1),K(4,"Jobs"),z(),U(5,"button",1),K(6," Favorites "),z()()(),U(7,"div",2),Se(8,"router-outlet"),z()),i&2&&(ce(3),ue("routerLink",de(2,zt)),ce(2),ue("routerLink",de(3,Kt)))},dependencies:[Re,qe,Te,Ae],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:3rem}.wrapper[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{min-width:200px}.outlet-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}"]});let e=t;return e})();var Yt=/(%?)(%([sdijo]))/g;function Jt(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;let n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function B(e,...t){if(t.length===0)return e;let n=0,r=e.replace(Yt,(i,s,o,c)=>{let a=t[n],l=Jt(a,c);return s?i:(n++,l)});return n<t.length&&(r+=` ${t.slice(n).join(" ")}`),r=r.replace(/%{2,2}/g,"%"),r}var Vt=2;function Xt(e){if(!e.stack)return;let t=e.stack.split(`
`);t.splice(1,Vt),e.stack=t.join(`
`)}var Qt=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=B(e,...t),Xt(this)}},T=(e,t,...n)=>{if(!e)throw new Qt(t,...n)};T.as=(e,t,n,...r)=>{if(!t){let i=r.length===0?n:B(n,r),s;try{s=Reflect.construct(e,[i])}catch{s=e(i)}throw s}};var Zt="[MSW]";function pe(e,...t){let n=B(e,...t);return`${Zt} ${n}`}function en(e,...t){console.warn(pe(e,...t))}function tn(e,...t){console.error(pe(e,...t))}var y={formatMessage:pe,warn:en,error:tn};var nn=/[\/\\]msw[\/\\]src[\/\\](.+)/,rn=/(node_modules)?[\/\\]lib[\/\\](core|browser|node|native|iife)[\/\\]|^[^\/\\]*$/;function De(e){let t=e.stack;if(!t)return;let r=t.split(`
`).slice(1).find(s=>!(nn.test(s)||rn.test(s)));return r?r.replace(/\s*at [^()]*\(([^)]+)\)/,"$1").replace(/^@/,""):void 0}function Me(e){return e?typeof e[Symbol.iterator]=="function":!1}var Y=(()=>{class e{static cache=new WeakMap;info;isUsed;resolver;resolverGenerator;resolverGeneratorResult;options;constructor(n){this.resolver=n.resolver,this.options=n.options;let r=De(new Error);this.info=S(x({},n.info),{callFrame:r}),this.isUsed=!1}parse(n){return g(this,null,function*(){return{}})}test(n){return g(this,null,function*(){let r=yield this.parse({request:n.request,resolutionContext:n.resolutionContext});return this.predicate({request:n.request,parsedResult:r,resolutionContext:n.resolutionContext})})}extendResolverArgs(n){return{}}cloneRequestOrGetFromCache(n){let r=e.cache.get(n);if(typeof r<"u")return r;let i=n.clone();return e.cache.set(n,i),i}run(n){return g(this,null,function*(){if(this.isUsed&&this.options?.once)return null;let r=this.cloneRequestOrGetFromCache(n.request),i=yield this.parse({request:n.request,resolutionContext:n.resolutionContext});if(!this.predicate({request:n.request,parsedResult:i,resolutionContext:n.resolutionContext})||this.isUsed&&this.options?.once)return null;this.isUsed=!0;let o=this.wrapResolver(this.resolver),c=this.extendResolverArgs({request:n.request,parsedResult:i}),l=yield o(S(x({},c),{requestId:n.requestId,request:n.request})).catch(p=>{if(p instanceof Response)return p;throw p});return this.createExecutionResult({request:r,requestId:n.requestId,response:l,parsedResult:i})})}wrapResolver(n){return r=>g(this,null,function*(){let i=this.resolverGenerator||(yield n(r));if(Me(i)){this.isUsed=!1;let{value:s,done:o}=i[Symbol.iterator]().next(),c=yield s;return o&&(this.isUsed=!0),!c&&o?(T(this.resolverGeneratorResult,"Failed to returned a previously stored generator response: the value is not a valid Response."),this.resolverGeneratorResult.clone()):(this.resolverGenerator||(this.resolverGenerator=i),c&&(this.resolverGeneratorResult=c?.clone()),c)}return i})}createExecutionResult(n){return{handler:this,request:n.request,requestId:n.requestId,response:n.response,parsedResult:n.parsedResult}}}return e})();var _e=e=>g(void 0,null,function*(){try{return{error:null,data:yield e().catch(n=>{throw n})}}catch(t){return{error:t,data:null}}});var je=i=>g(void 0,[i],function*({request:e,requestId:t,handlers:n,resolutionContext:r}){let s=null,o=null;for(let c of n)if(o=yield c.run({request:e,requestId:t,resolutionContext:r}),o!==null&&(s=c),o?.response)break;return s?{handler:s,parsedResult:o?.parsedResult,response:o?.response}:null});function J(e){if(typeof location>"u")return e.toString();let t=e instanceof URL?e:new URL(e);return t.origin===location.origin?t.pathname:t.origin+t.pathname}function Ne(e,t="warn"){return g(this,null,function*(){let n=new URL(e.url),r=J(n),i=`intercepted a request without a matching request handler:

  \u2022 ${e.method} ${r}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`;function s(o){switch(o){case"error":throw y.error("Error: %s",i),new Error(y.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));case"warn":{y.warn("Warning: %s",i);break}case"bypass":break;default:throw new Error(y.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',o))}}if(typeof t=="function"){t(e,{warning:s.bind(null,"warn"),error:s.bind(null,"error")});return}n.protocol!=="file:"&&s(t)})}var on=Object.create,Fe=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyNames,an=Object.getPrototypeOf,ln=Object.prototype.hasOwnProperty,cn=(e,t)=>function(){return t||(0,e[$e(e)[0]])((t={exports:{}}).exports,t),t.exports},un=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of $e(t))!ln.call(e,i)&&i!==n&&Fe(e,i,{get:()=>t[i],enumerable:!(r=sn(t,i))||r.enumerable});return e},dn=(e,t,n)=>(n=e!=null?on(an(e)):{},un(t||!e||!e.__esModule?Fe(n,"default",{value:e,enumerable:!0}):n,e)),pn=cn({"node_modules/set-cookie-parser/lib/set-cookie.js"(e,t){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function r(a){return typeof a=="string"&&!!a.trim()}function i(a,l){var u=a.split(";").filter(r),p=u.shift(),d=s(p),m=d.name,f=d.value;l=l?Object.assign({},n,l):n;try{f=l.decodeValues?decodeURIComponent(f):f}catch(v){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+f+"'. Set options.decodeValues to false to disable this feature.",v)}var h={name:m,value:f};return u.forEach(function(v){var b=v.split("="),w=b.shift().trimLeft().toLowerCase(),L=b.join("=");w==="expires"?h.expires=new Date(L):w==="max-age"?h.maxAge=parseInt(L,10):w==="secure"?h.secure=!0:w==="httponly"?h.httpOnly=!0:w==="samesite"?h.sameSite=L:h[w]=L}),h}function s(a){var l="",u="",p=a.split("=");return p.length>1?(l=p.shift(),u=p.join("=")):u=a,{name:l,value:u}}function o(a,l){if(l=l?Object.assign({},n,l):n,!a)return l.map?{}:[];if(a.headers)if(typeof a.headers.getSetCookie=="function")a=a.headers.getSetCookie();else if(a.headers["set-cookie"])a=a.headers["set-cookie"];else{var u=a.headers[Object.keys(a.headers).find(function(d){return d.toLowerCase()==="set-cookie"})];!u&&a.headers.cookie&&!l.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),a=u}if(Array.isArray(a)||(a=[a]),l=l?Object.assign({},n,l):n,l.map){var p={};return a.filter(r).reduce(function(d,m){var f=i(m,l);return d[f.name]=f,d},p)}else return a.filter(r).map(function(d){return i(d,l)})}function c(a){if(Array.isArray(a))return a;if(typeof a!="string")return[];var l=[],u=0,p,d,m,f,h;function v(){for(;u<a.length&&/\s/.test(a.charAt(u));)u+=1;return u<a.length}function b(){return d=a.charAt(u),d!=="="&&d!==";"&&d!==","}for(;u<a.length;){for(p=u,h=!1;v();)if(d=a.charAt(u),d===","){for(m=u,u+=1,v(),f=u;u<a.length&&b();)u+=1;u<a.length&&a.charAt(u)==="="?(h=!0,u=f,l.push(a.substring(p,m)),p=u):u=m+1}else u+=1;(!h||u>=a.length)&&l.push(a.substring(p,a.length))}return l}t.exports=o,t.exports.parse=o,t.exports.parseString=i,t.exports.splitCookiesString=c}}),He=dn(pn()),D="MSW_COOKIE_STORE";function Ue(){try{if(localStorage==null)return!1;let e=D+"_test";return localStorage.setItem(e,"test"),localStorage.getItem(e),localStorage.removeItem(e),!0}catch{return!1}}function Be(e,t){try{return e[t],!0}catch{return!1}}var hn=class{constructor(){this.store=new Map}add(e,t){if(Be(e,"credentials")&&e.credentials==="omit")return;let n=new URL(e.url),r=t.headers.get("set-cookie");if(!r)return;let i=Date.now(),s=(0,He.parse)(r).map(l=>{var u=l,{maxAge:c}=u,a=le(u,["maxAge"]);return S(x({},a),{expires:c===void 0?a.expires:new Date(i+c*1e3),maxAge:c})}),o=this.store.get(n.origin)||new Map;s.forEach(c=>{this.store.set(n.origin,o.set(c.name,c))})}get(e){this.deleteExpiredCookies();let t=new URL(e.url),n=this.store.get(t.origin)||new Map;if(!Be(e,"credentials"))return n;switch(e.credentials){case"include":return typeof document>"u"||(0,He.parse)(document.cookie).forEach(i=>{n.set(i.name,i)}),n;case"same-origin":return n;default:return new Map}}getAll(){return this.deleteExpiredCookies(),this.store}deleteAll(e){let t=new URL(e.url);this.store.delete(t.origin)}clear(){this.store.clear()}hydrate(){if(!Ue())return;let e=localStorage.getItem(D);if(e)try{JSON.parse(e).forEach(([n,r])=>{this.store.set(n,new Map(r.map(c=>{var[i,a]=c,l=a,{expires:s}=l,o=le(l,["expires"]);return[i,s===void 0?o:S(x({},o),{expires:new Date(s)})]})))})}catch(t){console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${D}").

Stored value:
${localStorage.getItem(D)}

Thrown exception:
${t}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`),localStorage.removeItem(D)}}persist(){if(!Ue())return;let e=Array.from(this.store.entries()).map(([t,n])=>[t,Array.from(n.entries())]);localStorage.setItem(D,JSON.stringify(e))}deleteExpiredCookies(){let e=Date.now();this.store.forEach((t,n)=>{t.forEach(({expires:r,name:i})=>{r!==void 0&&r.getTime()<=e&&t.delete(i)}),t.size===0&&this.store.delete(n)})}},M=new hn;function Ge(e,t){M.add(S(x({},e),{url:e.url.toString()}),t),M.persist()}function V(e,t,n,r,i,s){return g(this,null,function*(){if(i.emit("request:start",{request:e,requestId:t}),e.headers.get("x-msw-intention")==="bypass"){i.emit("request:end",{request:e,requestId:t}),s?.onPassthroughResponse?.(e);return}let o=yield _e(()=>je({request:e,requestId:t,handlers:n,resolutionContext:s?.resolutionContext}));if(o.error)throw i.emit("unhandledException",{error:o.error,request:e,requestId:t}),o.error;if(!o.data){yield Ne(e,r.onUnhandledRequest),i.emit("request:unhandled",{request:e,requestId:t}),i.emit("request:end",{request:e,requestId:t}),s?.onPassthroughResponse?.(e);return}let{response:c}=o.data;if(!c){i.emit("request:end",{request:e,requestId:t}),s?.onPassthroughResponse?.(e);return}if(c.status===302&&c.headers.get("x-msw-intention")==="passthrough"){i.emit("request:end",{request:e,requestId:t}),s?.onPassthroughResponse?.(e);return}Ge(e,c),i.emit("request:match",{request:e,requestId:t});let a=o.data,l=s?.transformResponse?.(c)||c;return s?.onMockedResponse?.(l,a),i.emit("request:end",{request:e,requestId:t}),l})}function ze(e){return{status:e.status,statusText:e.statusText,headers:Object.fromEntries(e.headers.entries())}}function he(e){return e!=null&&typeof e=="object"&&!Array.isArray(e)}function me(e,t){return Object.entries(t).reduce((n,[r,i])=>{let s=n[r];return Array.isArray(s)&&Array.isArray(i)?(n[r]=s.concat(i),n):he(s)&&he(i)?(n[r]=me(s,i),n):(n[r]=i,n)},Object.assign({},e))}var mn=class extends Error{constructor(e,t,n){super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),this.emitter=e,this.type=t,this.count=n,this.name="MaxListenersExceededWarning"}},Ke=class{static listenerCount(e,t){return e.listenerCount(t)}constructor(){this.events=new Map,this.maxListeners=Ke.defaultMaxListeners,this.hasWarnedAboutPotentialMemoryLeak=!1}_emitInternalEvent(e,t,n){this.emit(e,t,n)}_getListeners(e){return Array.prototype.concat.apply([],this.events.get(e))||[]}_removeListener(e,t){let n=e.indexOf(t);return n>-1&&e.splice(n,1),[]}_wrapOnceListener(e,t){let n=(...r)=>(this.removeListener(e,n),t.apply(this,r));return Object.defineProperty(n,"name",{value:t.name}),n}setMaxListeners(e){return this.maxListeners=e,this}getMaxListeners(){return this.maxListeners}eventNames(){return Array.from(this.events.keys())}emit(e,...t){let n=this._getListeners(e);return n.forEach(r=>{r.apply(this,t)}),n.length>0}addListener(e,t){this._emitInternalEvent("newListener",e,t);let n=this._getListeners(e).concat(t);if(this.events.set(e,n),this.maxListeners>0&&this.listenerCount(e)>this.maxListeners&&!this.hasWarnedAboutPotentialMemoryLeak){this.hasWarnedAboutPotentialMemoryLeak=!0;let r=new mn(this,e,this.listenerCount(e));console.warn(r)}return this}on(e,t){return this.addListener(e,t)}once(e,t){return this.addListener(e,this._wrapOnceListener(e,t))}prependListener(e,t){let n=this._getListeners(e);if(n.length>0){let r=[t].concat(n);this.events.set(e,r)}else this.events.set(e,n.concat(t));return this}prependOnceListener(e,t){return this.prependListener(e,this._wrapOnceListener(e,t))}removeListener(e,t){let n=this._getListeners(e);return n.length>0&&(this._removeListener(n,t),this.events.set(e,n),this._emitInternalEvent("removeListener",e,t)),this}off(e,t){return this.removeListener(e,t)}removeAllListeners(e){return e?this.events.delete(e):this.events.clear(),this}listeners(e){return Array.from(this._getListeners(e))}listenerCount(e){return this._getListeners(e).length}rawListeners(e){return this.listeners(e)}},F=Ke;F.defaultMaxListeners=10;function Ye(e,t){let n=e.emit;if(n._isPiped)return;let r=function(s,...o){return t.emit(s,...o),n.call(this,s,...o)};r._isPiped=!0,e.emit=r}function Je(e){let t=[...e];return Object.freeze(t),t}var X=class{subscriptions=[];dispose(){return g(this,null,function*(){yield Promise.all(this.subscriptions.map(t=>t()))})}};var ge=class{constructor(t){this.initialHandlers=t,this.handlers=[...t]}handlers;prepend(t){this.handlers.unshift(...t)}reset(t){this.handlers=t.length>0?[...t]:[...this.initialHandlers]}currentHandlers(){return this.handlers}},Q=class extends X{handlersController;emitter;publicEmitter;events;constructor(...t){super(),T(this.validateHandlers(t),y.formatMessage("Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?")),this.handlersController=new ge(t),this.emitter=new F,this.publicEmitter=new F,Ye(this.emitter,this.publicEmitter),this.events=this.createLifeCycleEvents(),this.subscriptions.push(()=>{this.emitter.removeAllListeners(),this.publicEmitter.removeAllListeners()})}validateHandlers(t){return t.every(n=>!Array.isArray(n))}use(...t){T(this.validateHandlers(t),y.formatMessage('Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?')),this.handlersController.prepend(t)}restoreHandlers(){this.handlersController.currentHandlers().forEach(t=>{t.isUsed=!1})}resetHandlers(...t){this.handlersController.reset(t)}listHandlers(){return Je(this.handlersController.currentHandlers())}createLifeCycleEvents(){return{on:(...t)=>this.publicEmitter.on(...t),removeListener:(...t)=>this.publicEmitter.removeListener(...t),removeAllListeners:(...t)=>this.publicEmitter.removeAllListeners(...t)}}};var gn=/(%?)(%([sdijo]))/g;function fn(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;let n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function G(e,...t){if(t.length===0)return e;let n=0,r=e.replace(gn,(i,s,o,c)=>{let a=t[n],l=fn(a,c);return s?i:(n++,l)});return n<t.length&&(r+=` ${t.slice(n).join(" ")}`),r=r.replace(/%{2,2}/g,"%"),r}var vn=2;function yn(e){if(!e.stack)return;let t=e.stack.split(`
`);t.splice(1,vn),e.stack=t.join(`
`)}var bn=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=G(e,...t),yn(this)}},I=(e,t,...n)=>{if(!e)throw new bn(t,...n)};I.as=(e,t,n,...r)=>{if(!t){let i=r.length===0?n:G(n,r),s;try{s=Reflect.construct(e,[i])}catch{s=e(i)}throw s}};function we(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){let e=process.type;return e==="renderer"||e==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var Z=e=>g(void 0,null,function*(){try{return{error:null,data:yield e().catch(n=>{throw n})}}catch(t){return{error:t,data:null}}});function wn(e){return new URL(e,location.href).href}function fe(e,t,n){return[e.active,e.installing,e.waiting].filter(o=>o!=null).find(o=>n(o.scriptURL,t))||null}var kn=(r,...i)=>g(void 0,[r,...i],function*(e,t={},n){let s=wn(e),o=yield navigator.serviceWorker.getRegistrations().then(l=>l.filter(u=>fe(u,s,n)));!navigator.serviceWorker.controller&&o.length>0&&location.reload();let[c]=o;if(c)return c.update().then(()=>[fe(c,s,n),c]);let a=yield Z(()=>g(void 0,null,function*(){let l=yield navigator.serviceWorker.register(e,t);return[fe(l,s,n),l]}));if(a.error){if(a.error.message.includes("(404)")){let u=new URL(t?.scope||"/",location.href);throw new Error(y.formatMessage(`Failed to register a Service Worker for scope ('${u.href}') with script ('${s}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`))}throw new Error(y.formatMessage(`Failed to register the Service Worker:

%s`,a.error.message))}return a.data});function rt(e={}){if(e.quiet)return;let t=e.message||"Mocking enabled.";console.groupCollapsed(`%c${y.formatMessage(t)}`,"color:orangered;font-weight:bold;"),console.log("%cDocumentation: %chttps://mswjs.io/docs","font-weight:bold","font-weight:normal"),console.log("Found an issue? https://github.com/mswjs/msw/issues"),e.workerUrl&&console.log("Worker script URL:",e.workerUrl),e.workerScope&&console.log("Worker scope:",e.workerScope),console.groupEnd()}function xn(e,t){return g(this,null,function*(){if(e.workerChannel.send("MOCK_ACTIVATE"),yield e.events.once("MOCKING_ENABLED"),e.isMockingEnabled){y.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.');return}e.isMockingEnabled=!0,rt({quiet:t.quiet,workerScope:e.registration?.scope,workerUrl:e.worker?.scriptURL})})}var Sn=class{constructor(e){this.port=e}postMessage(e,...t){let[n,r]=t;this.port.postMessage({type:e,data:n},{transfer:r})}};function En(e){if(!["HEAD","GET"].includes(e.method))return e.body}function Ln(e){return new Request(e.url,S(x({},e),{body:En(e)}))}var Pn=(e,t)=>(n,r)=>g(void 0,null,function*(){let i=new Sn(n.ports[0]),s=r.payload.id,o=Ln(r.payload),c=o.clone(),a=o.clone();Y.cache.set(o,a),e.requests.set(s,a);try{let l;yield V(o,s,e.getRequestHandlers(),t,e.emitter,{onPassthroughResponse(){i.postMessage("NOT_FOUND")},onMockedResponse(m,f){return g(this,arguments,function*(u,{handler:p,parsedResult:d}){let h=u.clone(),v=u.clone(),b=ze(u);if(e.supports.readableStreamTransfer){let w=u.body;i.postMessage("MOCK_RESPONSE",S(x({},b),{body:w}),w?[w]:void 0)}else{let w=u.body===null?null:yield h.arrayBuffer();i.postMessage("MOCK_RESPONSE",S(x({},b),{body:w}))}t.quiet||e.emitter.once("response:mocked",()=>{p.log({request:c,response:v,parsedResult:d})})})}})}catch(l){l instanceof Error&&(y.error(`Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,o.method,o.url,l.stack??l),i.postMessage("MOCK_RESPONSE",{status:500,statusText:"Request Handler Error",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l.name,message:l.message,stack:l.stack})}))}});function Rn(e,t){return g(this,null,function*(){e.workerChannel.send("INTEGRITY_CHECK_REQUEST");let{payload:n}=yield e.events.once("INTEGRITY_CHECK_RESPONSE");if(n!=="223d191a56023cd36aa88c802961b911")throw new Error(`Currently active Service Worker (${n}) is behind the latest published one (223d191a56023cd36aa88c802961b911).`);return t})}var Tn=new TextEncoder;function An(e){return Tn.encode(e)}function Cn(e,t){return new TextDecoder(t).decode(e)}function qn(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}var On=new Set([101,103,204,205,304]);function it(e){return On.has(e)}var In=Object.defineProperty,Wn=(e,t)=>{for(var n in t)In(e,n,{get:t[n],enumerable:!0})},ve={};Wn(ve,{blue:()=>Mn,gray:()=>ye,green:()=>jn,red:()=>_n,yellow:()=>Dn});function Dn(e){return`\x1B[33m${e}\x1B[0m`}function Mn(e){return`\x1B[34m${e}\x1B[0m`}function ye(e){return`\x1B[90m${e}\x1B[0m`}function _n(e){return`\x1B[31m${e}\x1B[0m`}function jn(e){return`\x1B[32m${e}\x1B[0m`}var ee=we(),ot=class{constructor(e){this.name=e,this.prefix=`[${this.name}]`;let t=Ve("DEBUG"),n=Ve("LOG_LEVEL");t==="1"||t==="true"||typeof t<"u"&&this.name.startsWith(t)?(this.debug=$(n,"debug")?P:this.debug,this.info=$(n,"info")?P:this.info,this.success=$(n,"success")?P:this.success,this.warning=$(n,"warning")?P:this.warning,this.error=$(n,"error")?P:this.error):(this.info=P,this.success=P,this.warning=P,this.error=P,this.only=P)}prefix;extend(e){return new ot(`${this.name}:${e}`)}debug(e,...t){this.logEntry({level:"debug",message:ye(e),positionals:t,prefix:this.prefix,colors:{prefix:"gray"}})}info(e,...t){this.logEntry({level:"info",message:e,positionals:t,prefix:this.prefix,colors:{prefix:"blue"}});let n=new Nn;return(r,...i)=>{n.measure(),this.logEntry({level:"info",message:`${r} ${ye(`${n.deltaTime}ms`)}`,positionals:i,prefix:this.prefix,colors:{prefix:"blue"}})}}success(e,...t){this.logEntry({level:"info",message:e,positionals:t,prefix:`\u2714 ${this.prefix}`,colors:{timestamp:"green",prefix:"green"}})}warning(e,...t){this.logEntry({level:"warning",message:e,positionals:t,prefix:`\u26A0 ${this.prefix}`,colors:{timestamp:"yellow",prefix:"yellow"}})}error(e,...t){this.logEntry({level:"error",message:e,positionals:t,prefix:`\u2716 ${this.prefix}`,colors:{timestamp:"red",prefix:"red"}})}only(e){e()}createEntry(e,t){return{timestamp:new Date,level:e,message:t}}logEntry(e){let{level:t,message:n,prefix:r,colors:i,positionals:s=[]}=e,o=this.createEntry(t,n),c=i?.timestamp||"gray",a=i?.prefix||"gray",l={timestamp:ve[c],prefix:ve[a]};this.getWriter(t)([l.timestamp(this.formatTimestamp(o.timestamp))].concat(r!=null?l.prefix(r):[]).concat(Xe(n)).join(" "),...s.map(Xe))}formatTimestamp(e){return`${e.toLocaleTimeString("en-GB")}:${e.getMilliseconds()}`}getWriter(e){switch(e){case"debug":case"success":case"info":return Hn;case"warning":return Un;case"error":return Bn}}},Nn=class{startTime;endTime;deltaTime;constructor(){this.startTime=performance.now()}measure(){this.endTime=performance.now();let e=this.endTime-this.startTime;this.deltaTime=e.toFixed(2)}},P=()=>{};function Hn(e,...t){if(ee){process.stdout.write(G(e,...t)+`
`);return}console.log(e,...t)}function Un(e,...t){if(ee){process.stderr.write(G(e,...t)+`
`);return}console.warn(e,...t)}function Bn(e,...t){if(ee){process.stderr.write(G(e,...t)+`
`);return}console.error(e,...t)}function Ve(e){return ee?process.env[e]:globalThis[e]?.toString()}function $(e,t){return e!==void 0&&e!==t}function Xe(e){return typeof e>"u"?"undefined":e===null?"null":typeof e=="string"?e:typeof e=="object"?JSON.stringify(e):e.toString()}var Fn=class extends Error{constructor(e,t,n){super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),this.emitter=e,this.type=t,this.count=n,this.name="MaxListenersExceededWarning"}},st=class{static listenerCount(e,t){return e.listenerCount(t)}constructor(){this.events=new Map,this.maxListeners=st.defaultMaxListeners,this.hasWarnedAboutPotentialMemoryLeak=!1}_emitInternalEvent(e,t,n){this.emit(e,t,n)}_getListeners(e){return Array.prototype.concat.apply([],this.events.get(e))||[]}_removeListener(e,t){let n=e.indexOf(t);return n>-1&&e.splice(n,1),[]}_wrapOnceListener(e,t){let n=(...r)=>(this.removeListener(e,n),t.apply(this,r));return Object.defineProperty(n,"name",{value:t.name}),n}setMaxListeners(e){return this.maxListeners=e,this}getMaxListeners(){return this.maxListeners}eventNames(){return Array.from(this.events.keys())}emit(e,...t){let n=this._getListeners(e);return n.forEach(r=>{r.apply(this,t)}),n.length>0}addListener(e,t){this._emitInternalEvent("newListener",e,t);let n=this._getListeners(e).concat(t);if(this.events.set(e,n),this.maxListeners>0&&this.listenerCount(e)>this.maxListeners&&!this.hasWarnedAboutPotentialMemoryLeak){this.hasWarnedAboutPotentialMemoryLeak=!0;let r=new Fn(this,e,this.listenerCount(e));console.warn(r)}return this}on(e,t){return this.addListener(e,t)}once(e,t){return this.addListener(e,this._wrapOnceListener(e,t))}prependListener(e,t){let n=this._getListeners(e);if(n.length>0){let r=[t].concat(n);this.events.set(e,r)}else this.events.set(e,n.concat(t));return this}prependOnceListener(e,t){return this.prependListener(e,this._wrapOnceListener(e,t))}removeListener(e,t){let n=this._getListeners(e);return n.length>0&&(this._removeListener(n,t),this.events.set(e,n),this._emitInternalEvent("removeListener",e,t)),this}off(e,t){return this.removeListener(e,t)}removeAllListeners(e){return e?this.events.delete(e):this.events.clear(),this}listeners(e){return Array.from(this._getListeners(e))}listenerCount(e){return this._getListeners(e).length}rawListeners(e){return this.listeners(e)}},at=st;at.defaultMaxListeners=10;var j=Symbol("isPatchedModule");function Qe(e){return globalThis[e]||void 0}function $n(e,t){globalThis[e]=t}function Gn(e){delete globalThis[e]}var ke=class{constructor(e){this.symbol=e,this.readyState="INACTIVE",this.emitter=new at,this.subscriptions=[],this.logger=new ot(e.description),this.emitter.setMaxListeners(0),this.logger.info("constructing the interceptor...")}checkEnvironment(){return!0}apply(){let e=this.logger.extend("apply");if(e.info("applying the interceptor..."),this.readyState==="APPLIED"){e.info("intercepted already applied!");return}if(!this.checkEnvironment()){e.info("the interceptor cannot be applied in this environment!");return}this.readyState="APPLYING";let n=this.getInstance();if(n){e.info("found a running instance, reusing..."),this.on=(r,i)=>(e.info('proxying the "%s" listener',r),n.emitter.addListener(r,i),this.subscriptions.push(()=>{n.emitter.removeListener(r,i),e.info('removed proxied "%s" listener!',r)}),this),this.readyState="APPLIED";return}e.info("no running instance found, setting up a new instance..."),this.setup(),this.setInstance(),this.readyState="APPLIED"}setup(){}on(e,t){let n=this.logger.extend("on");return this.readyState==="DISPOSING"||this.readyState==="DISPOSED"?(n.info("cannot listen to events, already disposed!"),this):(n.info('adding "%s" event listener:',e,t),this.emitter.on(e,t),this)}once(e,t){return this.emitter.once(e,t),this}off(e,t){return this.emitter.off(e,t),this}removeAllListeners(e){return this.emitter.removeAllListeners(e),this}dispose(){let e=this.logger.extend("dispose");if(this.readyState==="DISPOSED"){e.info("cannot dispose, already disposed!");return}if(e.info("disposing the interceptor..."),this.readyState="DISPOSING",!this.getInstance()){e.info("no interceptors running, skipping dispose...");return}if(this.clearInstance(),e.info("global symbol deleted:",Qe(this.symbol)),this.subscriptions.length>0){e.info("disposing of %d subscriptions...",this.subscriptions.length);for(let t of this.subscriptions)t();this.subscriptions=[],e.info("disposed of all subscriptions!",this.subscriptions.length)}this.emitter.removeAllListeners(),e.info("destroyed the listener!"),this.readyState="DISPOSED"}getInstance(){var e;let t=Qe(this.symbol);return this.logger.info("retrieved global instance:",(e=t?.constructor)==null?void 0:e.name),t}setInstance(){$n(this.symbol,this),this.logger.info("set global instance!",this.symbol.description)}clearInstance(){Gn(this.symbol),this.logger.info("cleared global instance!",this.symbol.description)}},be=class extends ke{constructor(e){be.symbol=Symbol(e.name),super(be.symbol),this.interceptors=e.interceptors}setup(){let e=this.logger.extend("setup");e.info("applying all %d interceptors...",this.interceptors.length);for(let t of this.interceptors)e.info('applying "%s" interceptor...',t.constructor.name),t.apply(),e.info("adding interceptor dispose subscription"),this.subscriptions.push(()=>t.dispose())}on(e,t){for(let n of this.interceptors)n.on(e,t);return this}once(e,t){for(let n of this.interceptors)n.once(e,t);return this}off(e,t){for(let n of this.interceptors)n.off(e,t);return this}removeAllListeners(e){for(let t of this.interceptors)t.removeAllListeners(e);return this}};function zn(e){return(t,n)=>{let{payload:r}=n,{requestId:i}=r,s=e.requests.get(i);if(e.requests.delete(i),r.type?.includes("opaque"))return;let o=r.status===0?Response.error():new Response(it(r.status)?null:r.body,r);o.url||Object.defineProperty(o,"url",{value:s.url,enumerable:!0,writable:!1}),e.emitter.emit(r.isMockedResponse?"response:mocked":"response:bypass",{response:o,request:s,requestId:r.requestId})}}function Kn(e,t){!t?.quiet&&!location.href.startsWith(e.scope)&&y.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`)}var Yn=e=>function(n,r){return g(this,null,function*(){e.events.removeAllListeners(),e.workerChannel.on("REQUEST",Pn(e,n)),e.workerChannel.on("RESPONSE",zn(e));let o=yield kn(n.serviceWorker.url,n.serviceWorker.options,n.findWorker),[c,a]=o;if(!c){let u=r?.findWorker?y.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,n.serviceWorker.url):y.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,n.serviceWorker.url,location.host);throw new Error(u)}e.worker=c,e.registration=a,e.events.addListener(window,"beforeunload",()=>{c.state!=="redundant"&&e.workerChannel.send("CLIENT_CLOSED"),window.clearInterval(e.keepAliveInterval)});let l=yield Z(()=>Rn(e,c));return l.error&&y.error(`Detected outdated Service Worker: ${l.error.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `),e.keepAliveInterval=window.setInterval(()=>e.workerChannel.send("KEEPALIVE_REQUEST"),5e3),Kn(a,e.startOptions),a}).then(o=>g(this,null,function*(){let c=o.installing||o.waiting;return c&&(yield new Promise(a=>{c.addEventListener("statechange",()=>{if(c.state==="activated")return a()})})),yield xn(e,n).catch(a=>{throw new Error(`Failed to enable mocking: ${a?.message}`)}),o}))};function lt(e={}){e.quiet||console.log(`%c${y.formatMessage("Mocking disabled.")}`,"color:orangered;font-weight:bold;")}var Jn=e=>function(){if(!e.isMockingEnabled){y.warn('Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.');return}e.workerChannel.send("MOCK_DEACTIVATE"),e.isMockingEnabled=!1,window.clearInterval(e.keepAliveInterval),lt({quiet:e.startOptions?.quiet})},Vn={serviceWorker:{url:"/mockServiceWorker.js",options:null},quiet:!1,waitUntilReady:!0,onUnhandledRequest:"warn",findWorker(e,t){return e===t}};function Xn(){let e=(t,n)=>{e.state="pending",e.resolve=r=>{if(e.state!=="pending")return;e.result=r;let i=s=>(e.state="fulfilled",s);return t(r instanceof Promise?r:Promise.resolve(r).then(i))},e.reject=r=>{if(e.state==="pending")return queueMicrotask(()=>{e.state="rejected"}),n(e.rejectionReason=r)}};return e}var ct=class extends Promise{#e;resolve;reject;constructor(e=null){let t=Xn();super((n,r)=>{t(n,r),e?.(t.resolve,t.reject)}),this.#e=t,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(e,t){return this.#t(super.then(e,t))}catch(e){return this.#t(super.catch(e))}finally(e){return this.#t(super.finally(e))}#t(e){return Object.defineProperties(e,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}};function ut(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}var Qn=class{constructor(e){this.request=e,this.responsePromise=new ct}respondWith(e){I(this.responsePromise.state==="pending",'Failed to respond to "%s %s" request: the "request" event has already been responded to.',this.request.method,this.request.url),this.responsePromise.resolve(e)}};function dt(e){let t=new Qn(e);return Reflect.set(e,"respondWith",t.respondWith.bind(t)),{interactiveRequest:e,requestController:t}}function pt(e,t,...n){return g(this,null,function*(){let r=e.listeners(t);if(r.length!==0)for(let i of r)yield i.apply(e,n)})}function Zn(e,t){try{return e[t],!0}catch{return!1}}function er(e){try{return new URL(e),!0}catch{return!1}}var ht=class extends ke{constructor(){super(ht.symbol)}checkEnvironment(){return typeof globalThis<"u"&&typeof globalThis.fetch<"u"}setup(){let e=globalThis.fetch;I(!e[j],'Failed to patch the "fetch" module: already patched.'),globalThis.fetch=(t,n)=>g(this,null,function*(){var r;let i=ut(),s=typeof t=="string"&&typeof location<"u"&&!er(t)?new URL(t,location.origin):t,o=new Request(s,n);this.logger.info("[%s] %s",o.method,o.url);let{interactiveRequest:c,requestController:a}=dt(o);this.logger.info('emitting the "request" event for %d listener(s)...',this.emitter.listenerCount("request")),this.emitter.once("request",({requestId:m})=>{m===i&&a.responsePromise.state==="pending"&&a.responsePromise.resolve(void 0)}),this.logger.info("awaiting for the mocked response...");let l=c.signal,u=new ct;l&&l.addEventListener("abort",()=>{u.reject(l.reason)},{once:!0});let p=yield Z(()=>g(this,null,function*(){let m=pt(this.emitter,"request",{request:c,requestId:i});yield Promise.race([u,m,a.responsePromise]),this.logger.info("all request listeners have been resolved!");let f=yield a.responsePromise;return this.logger.info("event.respondWith called with:",f),f}));if(u.state==="rejected")return Promise.reject(u.rejectionReason);if(p.error)return Promise.reject(Ze(p.error));let d=p.data;if(d&&!((r=o.signal)!=null&&r.aborted)){if(this.logger.info("received mocked response:",d),Zn(d,"type")&&d.type==="error")return this.logger.info("received a network error response, rejecting the request promise..."),Promise.reject(Ze(d));let m=d.clone();return this.emitter.emit("response",{response:m,isMockedResponse:!0,request:c,requestId:i}),Object.defineProperty(d,"url",{writable:!1,enumerable:!0,configurable:!1,value:o.url}),d}return this.logger.info("no mocked response received!"),e(o).then(m=>{let f=m.clone();return this.logger.info("original fetch performed",f),this.emitter.emit("response",{response:f,isMockedResponse:!1,request:c,requestId:i}),m})}),Object.defineProperty(globalThis.fetch,j,{enumerable:!0,configurable:!0,value:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis.fetch,j,{value:void 0}),globalThis.fetch=e,this.logger.info('restored native "globalThis.fetch"!',globalThis.fetch.name)})}},mt=ht;mt.symbol=Symbol("fetch");function Ze(e){return Object.assign(new TypeError("Failed to fetch"),{cause:e})}function tr(e,t){let n=new Uint8Array(e.byteLength+t.byteLength);return n.set(e,0),n.set(t,e.byteLength),n}var gt=class{constructor(e,t){this.AT_TARGET=0,this.BUBBLING_PHASE=0,this.CAPTURING_PHASE=0,this.NONE=0,this.type="",this.srcElement=null,this.currentTarget=null,this.eventPhase=0,this.isTrusted=!0,this.composed=!1,this.cancelable=!0,this.defaultPrevented=!1,this.bubbles=!0,this.lengthComputable=!0,this.loaded=0,this.total=0,this.cancelBubble=!1,this.returnValue=!0,this.type=e,this.target=t?.target||null,this.currentTarget=t?.currentTarget||null,this.timeStamp=Date.now()}composedPath(){return[]}initEvent(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n}preventDefault(){this.defaultPrevented=!0}stopPropagation(){}stopImmediatePropagation(){}},nr=class extends gt{constructor(e,t){super(e),this.lengthComputable=t?.lengthComputable||!1,this.composed=t?.composed||!1,this.loaded=t?.loaded||0,this.total=t?.total||0}},rr=typeof ProgressEvent<"u";function ir(e,t,n){let r=["error","progress","loadstart","loadend","load","timeout","abort"],i=rr?ProgressEvent:nr;return r.includes(t)?new i(t,{lengthComputable:!0,loaded:n?.loaded||0,total:n?.total||0}):new gt(t,{target:e,currentTarget:e})}function ft(e,t){if(!(t in e))return null;if(Object.prototype.hasOwnProperty.call(e,t))return e;let r=Reflect.getPrototypeOf(e);return r?ft(r,t):null}function et(e,t){return new Proxy(e,or(t))}function or(e){let{constructorCall:t,methodCall:n,getProperty:r,setProperty:i}=e,s={};return typeof t<"u"&&(s.construct=function(o,c,a){let l=Reflect.construct.bind(null,o,c,a);return t.call(a,c,l)}),s.set=function(o,c,a){let l=()=>{let u=ft(o,c)||o,p=Reflect.getOwnPropertyDescriptor(u,c);return typeof p?.set<"u"?(p.set.apply(o,[a]),!0):Reflect.defineProperty(u,c,{writable:!0,enumerable:!0,configurable:!0,value:a})};return typeof i<"u"?i.call(o,[c,a],l):l()},s.get=function(o,c,a){let l=()=>o[c],u=typeof r<"u"?r.call(o,[c,a],l):l();return typeof u=="function"?(...p)=>{let d=u.bind(o,...p);return typeof n<"u"?n.call(o,[c,p],d):d()}:u},s}function sr(e){return["application/xhtml+xml","application/xml","image/svg+xml","text/html","text/xml"].some(n=>e.startsWith(n))}function ar(e){try{return JSON.parse(e)}catch{return null}}function lr(e,t){let n=it(e.status)?null:t;return new Response(n,{status:e.status,statusText:e.statusText,headers:cr(e.getAllResponseHeaders())})}function cr(e){let t=new Headers,n=e.split(/[\r\n]+/);for(let r of n){if(r.trim()==="")continue;let[i,...s]=r.split(": "),o=s.join(": ");t.append(i,o)}return t}var tt=Symbol("isMockedResponse"),ur=we(),dr=class{constructor(e,t){this.initialRequest=e,this.logger=t,this.method="GET",this.url=null,this.events=new Map,this.requestId=ut(),this.requestHeaders=new Headers,this.responseBuffer=new Uint8Array,this.request=et(e,{setProperty:([n,r],i)=>{switch(n){case"ontimeout":{let s=n.slice(2);return this.request.addEventListener(s,r),i()}default:return i()}},methodCall:([n,r],i)=>{var s;switch(n){case"open":{let[o,c]=r;return typeof c>"u"?(this.method="GET",this.url=nt(o)):(this.method=o,this.url=nt(c)),this.logger=this.logger.extend(`${this.method} ${this.url.href}`),this.logger.info("open",this.method,this.url.href),i()}case"addEventListener":{let[o,c]=r;return this.registerEvent(o,c),this.logger.info("addEventListener",o,c),i()}case"setRequestHeader":{let[o,c]=r;return this.requestHeaders.set(o,c),this.logger.info("setRequestHeader",o,c),i()}case"send":{let[o]=r;o!=null&&(this.requestBody=typeof o=="string"?An(o):o),this.request.addEventListener("load",()=>{if(typeof this.onResponse<"u"){let l=lr(this.request,this.request.response);this.onResponse.call(this,{response:l,isMockedResponse:tt in this.request,request:c,requestId:this.requestId})}});let c=this.toFetchApiRequest();(((s=this.onRequest)==null?void 0:s.call(this,{request:c,requestId:this.requestId}))||Promise.resolve()).finally(()=>{if(this.request.readyState<this.request.LOADING)return this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...",this.request.readyState),ur&&this.request.setRequestHeader("X-Request-Id",this.requestId),i()});break}default:return i()}}})}registerEvent(e,t){let r=(this.events.get(e)||[]).concat(t);this.events.set(e,r),this.logger.info('registered event "%s"',e,t)}respondWith(e){this.logger.info("responding with a mocked response: %d %s",e.status,e.statusText),_(this.request,tt,!0),_(this.request,"status",e.status),_(this.request,"statusText",e.statusText),_(this.request,"responseURL",this.url.href),this.request.getResponseHeader=new Proxy(this.request.getResponseHeader,{apply:(r,i,s)=>{if(this.logger.info("getResponseHeader",s[0]),this.request.readyState<this.request.HEADERS_RECEIVED)return this.logger.info("headers not received yet, returning null"),null;let o=e.headers.get(s[0]);return this.logger.info('resolved response header "%s" to',s[0],o),o}}),this.request.getAllResponseHeaders=new Proxy(this.request.getAllResponseHeaders,{apply:()=>{if(this.logger.info("getAllResponseHeaders"),this.request.readyState<this.request.HEADERS_RECEIVED)return this.logger.info("headers not received yet, returning empty string"),"";let i=Array.from(e.headers.entries()).map(([s,o])=>`${s}: ${o}`).join(`\r
`);return this.logger.info("resolved all response headers to",i),i}}),Object.defineProperties(this.request,{response:{enumerable:!0,configurable:!1,get:()=>this.response},responseText:{enumerable:!0,configurable:!1,get:()=>this.responseText},responseXML:{enumerable:!0,configurable:!1,get:()=>this.responseXML}});let t=e.headers.has("Content-Length")?Number(e.headers.get("Content-Length")):void 0;this.logger.info("calculated response body length",t),this.trigger("loadstart",{loaded:0,total:t}),this.setReadyState(this.request.HEADERS_RECEIVED),this.setReadyState(this.request.LOADING);let n=()=>{this.logger.info("finalizing the mocked response..."),this.setReadyState(this.request.DONE),this.trigger("load",{loaded:this.responseBuffer.byteLength,total:t}),this.trigger("loadend",{loaded:this.responseBuffer.byteLength,total:t})};if(e.body){this.logger.info("mocked response has body, streaming...");let r=e.body.getReader(),i=()=>g(this,null,function*(){let{value:s,done:o}=yield r.read();if(o){this.logger.info("response body stream done!"),n();return}s&&(this.logger.info("read response body chunk:",s),this.responseBuffer=tr(this.responseBuffer,s),this.trigger("progress",{loaded:this.responseBuffer.byteLength,total:t})),i()});i()}else n()}responseBufferToText(){return Cn(this.responseBuffer)}get response(){if(this.logger.info("getResponse (responseType: %s)",this.request.responseType),this.request.readyState!==this.request.DONE)return null;switch(this.request.responseType){case"json":{let e=ar(this.responseBufferToText());return this.logger.info("resolved response JSON",e),e}case"arraybuffer":{let e=qn(this.responseBuffer);return this.logger.info("resolved response ArrayBuffer",e),e}case"blob":{let e=this.request.getResponseHeader("Content-Type")||"text/plain",t=new Blob([this.responseBufferToText()],{type:e});return this.logger.info("resolved response Blob (mime type: %s)",t,e),t}default:{let e=this.responseBufferToText();return this.logger.info('resolving "%s" response type as text',this.request.responseType,e),e}}}get responseText(){if(I(this.request.responseType===""||this.request.responseType==="text","InvalidStateError: The object is in invalid state."),this.request.readyState!==this.request.LOADING&&this.request.readyState!==this.request.DONE)return"";let e=this.responseBufferToText();return this.logger.info('getResponseText: "%s"',e),e}get responseXML(){if(I(this.request.responseType===""||this.request.responseType==="document","InvalidStateError: The object is in invalid state."),this.request.readyState!==this.request.DONE)return null;let e=this.request.getResponseHeader("Content-Type")||"";return typeof DOMParser>"u"?(console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."),null):sr(e)?new DOMParser().parseFromString(this.responseBufferToText(),e):null}errorWith(e){this.logger.info("responding with an error"),this.setReadyState(this.request.DONE),this.trigger("error"),this.trigger("loadend")}setReadyState(e){if(this.logger.info("setReadyState: %d -> %d",this.request.readyState,e),this.request.readyState===e){this.logger.info("ready state identical, skipping transition...");return}_(this.request,"readyState",e),this.logger.info("set readyState to: %d",e),e!==this.request.UNSENT&&(this.logger.info('triggerring "readystatechange" event...'),this.trigger("readystatechange"))}trigger(e,t){let n=this.request[`on${e}`],r=ir(this.request,e,t);this.logger.info('trigger "%s"',e,t||""),typeof n=="function"&&(this.logger.info('found a direct "%s" callback, calling...',e),n.call(this.request,r));for(let[i,s]of this.events)i===e&&(this.logger.info('found %d listener(s) for "%s" event, calling...',s.length,e),s.forEach(o=>o.call(this.request,r)))}toFetchApiRequest(){this.logger.info("converting request to a Fetch API Request...");let e=new Request(this.url.href,{method:this.method,headers:this.requestHeaders,credentials:this.request.withCredentials?"include":"same-origin",body:["GET","HEAD"].includes(this.method)?null:this.requestBody}),t=et(e.headers,{methodCall:([n,r],i)=>{switch(n){case"append":case"set":{let[s,o]=r;this.request.setRequestHeader(s,o);break}case"delete":{let[s]=r;console.warn(`XMLHttpRequest: Cannot remove a "${s}" header from the Fetch API representation of the "${e.method} ${e.url}" request. XMLHttpRequest headers cannot be removed.`);break}}return i()}});return _(e,"headers",t),this.logger.info("converted request to a Fetch API Request!",e),e}};function nt(e){return typeof location>"u"?new URL(e):new URL(e.toString(),location.href)}function _(e,t,n){Reflect.defineProperty(e,t,{writable:!0,enumerable:!0,value:n})}function pr({emitter:e,logger:t}){return new Proxy(globalThis.XMLHttpRequest,{construct(r,i,s){t.info("constructed new XMLHttpRequest");let o=Reflect.construct(r,i,s),c=Object.getOwnPropertyDescriptors(r.prototype);for(let l in c)Reflect.defineProperty(o,l,c[l]);let a=new dr(o,t);return a.onRequest=function(p){return g(this,arguments,function*({request:l,requestId:u}){let{interactiveRequest:d,requestController:m}=dt(l);this.logger.info("awaiting mocked response..."),e.once("request",({requestId:v})=>{v===u&&m.responsePromise.state==="pending"&&m.respondWith(void 0)});let f=yield Z(()=>g(this,null,function*(){this.logger.info('emitting the "request" event for %s listener(s)...',e.listenerCount("request")),yield pt(e,"request",{request:d,requestId:u}),this.logger.info('all "request" listeners settled!');let v=yield m.responsePromise;return this.logger.info("event.respondWith called with:",v),v}));if(f.error){this.logger.info("request listener threw an exception, aborting request...",f.error),a.errorWith(f.error);return}let h=f.data;if(typeof h<"u"){if(this.logger.info("received mocked response: %d %s",h.status,h.statusText),h.type==="error"){this.logger.info("received a network error response, rejecting the request promise..."),a.errorWith(new TypeError("Network error"));return}return a.respondWith(h)}this.logger.info("no mocked response received, performing request as-is...")})},a.onResponse=function(m){return g(this,arguments,function*({response:l,isMockedResponse:u,request:p,requestId:d}){this.logger.info('emitting the "response" event for %s listener(s)...',e.listenerCount("response")),e.emit("response",{response:l,isMockedResponse:u,request:p,requestId:d})})},a.request}})}var vt=class extends ke{constructor(){super(vt.interceptorSymbol)}checkEnvironment(){return typeof globalThis.XMLHttpRequest<"u"}setup(){let e=this.logger.extend("setup");e.info('patching "XMLHttpRequest" module...');let t=globalThis.XMLHttpRequest;I(!t[j],'Failed to patch the "XMLHttpRequest" module: already patched.'),globalThis.XMLHttpRequest=pr({emitter:this.emitter,logger:this.logger}),e.info('native "XMLHttpRequest" module patched!',globalThis.XMLHttpRequest.name),Object.defineProperty(globalThis.XMLHttpRequest,j,{enumerable:!0,configurable:!0,value:!0}),this.subscriptions.push(()=>{Object.defineProperty(globalThis.XMLHttpRequest,j,{value:void 0}),globalThis.XMLHttpRequest=t,e.info('native "XMLHttpRequest" module restored!',globalThis.XMLHttpRequest.name)})}},yt=vt;yt.interceptorSymbol=Symbol("xhr");function hr(e,t){let n=new be({name:"fallback",interceptors:[new mt,new yt]});return n.on("request",s=>g(this,[s],function*({request:r,requestId:i}){let o=r.clone(),c=yield V(r,i,e.getRequestHandlers(),t,e.emitter,{onMockedResponse(a,{handler:l,parsedResult:u}){t.quiet||e.emitter.once("response:mocked",({response:p})=>{l.log({request:o,response:p,parsedResult:u})})}});c&&r.respondWith(c)})),n.on("response",({response:r,isMockedResponse:i,request:s,requestId:o})=>{e.emitter.emit(i?"response:mocked":"response:bypass",{response:r,request:s,requestId:o})}),n.apply(),n}function mr(e){return function(n){return g(this,null,function*(){e.fallbackInterceptor=hr(e,n),rt({message:"Mocking enabled (fallback mode).",quiet:n.quiet})})}}function gr(e){return function(){e.fallbackInterceptor?.dispose(),lt({quiet:e.startOptions?.quiet})}}function fr(){try{let e=new ReadableStream({start:n=>n.close()});return new MessageChannel().port1.postMessage(e,[e]),!0}catch{return!1}}var vr=class extends Q{context;startHandler=null;stopHandler=null;listeners;constructor(...e){super(...e),I(!we(),y.formatMessage("Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead.")),this.listeners=[],this.context=this.createWorkerContext()}createWorkerContext(){let e={isMockingEnabled:!1,startOptions:null,worker:null,getRequestHandlers:()=>this.handlersController.currentHandlers(),registration:null,requests:new Map,emitter:this.emitter,workerChannel:{on:(t,n)=>{this.context.events.addListener(navigator.serviceWorker,"message",r=>{if(r.source!==this.context.worker)return;let i=r.data;i&&i.type===t&&n(r,i)})},send:t=>{this.context.worker?.postMessage(t)}},events:{addListener:(t,n,r)=>(t.addEventListener(n,r),this.listeners.push({eventType:n,target:t,callback:r}),()=>{t.removeEventListener(n,r)}),removeAllListeners:()=>{for(let{target:t,eventType:n,callback:r}of this.listeners)t.removeEventListener(n,r);this.listeners=[]},once:t=>{let n=[];return new Promise((r,i)=>{let s=o=>{try{let c=o.data;c.type===t&&r(c)}catch(c){i(c)}};n.push(this.context.events.addListener(navigator.serviceWorker,"message",s),this.context.events.addListener(navigator.serviceWorker,"messageerror",i))}).finally(()=>{n.forEach(r=>r())})}},supports:{serviceWorkerApi:!("serviceWorker"in navigator)||location.protocol==="file:",readableStreamTransfer:fr()}};return this.startHandler=e.supports.serviceWorkerApi?mr(e):Yn(e),this.stopHandler=e.supports.serviceWorkerApi?gr(e):Jn(e),e}start(){return g(this,arguments,function*(e={}){return e.waitUntilReady===!0&&y.warn('The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'),this.context.startOptions=me(Vn,e),yield this.startHandler(this.context.startOptions,e)})}stop(){super.dispose(),this.context.events.removeAllListeners(),this.context.emitter.removeAllListeners(),this.stopHandler()}};function bt(...e){return new vr(...e)}function wt(){T(typeof URL<"u",y.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function kt(e,t){return e.toLowerCase()===t.toLowerCase()}function xt(e){return e<300?"#69AB32":e<400?"#F0BB4B":"#E95F5D"}function St(){let e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()].map(String).map(t=>t.slice(0,2)).map(t=>t.padStart(2,"0")).join(":")}function Et(e){return g(this,null,function*(){let n=yield e.clone().text();return{url:new URL(e.url),method:e.method,headers:Object.fromEntries(e.headers.entries()),body:n}})}var yr=Object.create,Lt=Object.defineProperty,br=Object.getOwnPropertyDescriptor,Pt=Object.getOwnPropertyNames,wr=Object.getPrototypeOf,kr=Object.prototype.hasOwnProperty,Rt=(e,t)=>function(){return t||(0,e[Pt(e)[0]])((t={exports:{}}).exports,t),t.exports},xr=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Pt(t))!kr.call(e,i)&&i!==n&&Lt(e,i,{get:()=>t[i],enumerable:!(r=br(t,i))||r.enumerable});return e},Sr=(e,t,n)=>(n=e!=null?yr(wr(e)):{},xr(t||!e||!e.__esModule?Lt(n,"default",{value:e,enumerable:!0}):n,e)),Er=Rt({"node_modules/statuses/codes.json"(e,t){t.exports={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}}}),Lr=Rt({"node_modules/statuses/index.js"(e,t){"use strict";var n=Er();t.exports=c,c.message=n,c.code=r(n),c.codes=i(n),c.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},c.empty={204:!0,205:!0,304:!0},c.retry={502:!0,503:!0,504:!0};function r(a){var l={};return Object.keys(a).forEach(function(p){var d=a[p],m=Number(p);l[d.toLowerCase()]=m}),l}function i(a){return Object.keys(a).map(function(u){return Number(u)})}function s(a){var l=a.toLowerCase();if(!Object.prototype.hasOwnProperty.call(c.code,l))throw new Error('invalid status message: "'+a+'"');return c.code[l]}function o(a){if(!Object.prototype.hasOwnProperty.call(c.message,a))throw new Error("invalid status code: "+a);return c.message[a]}function c(a){if(typeof a=="number")return o(a);if(typeof a!="string")throw new TypeError("code must be a number or string");var l=parseInt(a,10);return isNaN(l)?s(a):o(l)}}}),Pr=Sr(Lr(),1),te=Pr.default;var{message:Rr}=te;function Tt(e){return g(this,null,function*(){let t=e.clone(),n=yield t.text(),r=t.status||200,i=t.statusText||Rr[r]||"OK";return{status:r,statusText:i,headers:Object.fromEntries(t.headers.entries()),body:n}})}function Tr(e){for(var t=[],n=0;n<e.length;){var r=e[n];if(r==="*"||r==="+"||r==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(r==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(r==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(r==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(r===":"){for(var i="",s=n+1;s<e.length;){var o=e.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){i+=e[s++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:i}),n=s;continue}if(r==="("){var c=1,a="",s=n+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){a+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(n));if(!a)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:a}),n=s;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}function Ar(e,t){t===void 0&&(t={});for(var n=Tr(e),r=t.prefixes,i=r===void 0?"./":r,s="[^".concat(N(t.delimiter||"/#?"),"]+?"),o=[],c=0,a=0,l="",u=function(E){if(a<n.length&&n[a].type===E)return n[a++].value},p=function(E){var q=u(E);if(q!==void 0)return q;var O=n[a],se=O.type,ae=O.index;throw new TypeError("Unexpected ".concat(se," at ").concat(ae,", expected ").concat(E))},d=function(){for(var E="",q;q=u("CHAR")||u("ESCAPED_CHAR");)E+=q;return E};a<n.length;){var m=u("CHAR"),f=u("NAME"),h=u("PATTERN");if(f||h){var v=m||"";i.indexOf(v)===-1&&(l+=v,v=""),l&&(o.push(l),l=""),o.push({name:f||c++,prefix:v,suffix:"",pattern:h||s,modifier:u("MODIFIER")||""});continue}var b=m||u("ESCAPED_CHAR");if(b){l+=b;continue}l&&(o.push(l),l="");var w=u("OPEN");if(w){var v=d(),L=u("NAME")||"",k=u("PATTERN")||"",C=d();p("CLOSE"),o.push({name:L||(k?c++:""),pattern:L&&!k?s:k,prefix:v,suffix:C,modifier:u("MODIFIER")||""});continue}p("END")}return o}function At(e,t){var n=[],r=qt(e,n,t);return Cr(r,n,t)}function Cr(e,t,n){n===void 0&&(n={});var r=n.decode,i=r===void 0?function(s){return s}:r;return function(s){var o=e.exec(s);if(!o)return!1;for(var c=o[0],a=o.index,l=Object.create(null),u=function(d){if(o[d]===void 0)return"continue";var m=t[d-1];m.modifier==="*"||m.modifier==="+"?l[m.name]=o[d].split(m.prefix+m.suffix).map(function(f){return i(f,m)}):l[m.name]=i(o[d],m)},p=1;p<o.length;p++)u(p);return{path:c,index:a,params:l}}}function N(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ct(e){return e&&e.sensitive?"":"i"}function qr(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=n.exec(e.source);i;)t.push({name:i[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),i=n.exec(e.source);return e}function Or(e,t,n){var r=e.map(function(i){return qt(i,t,n).source});return new RegExp("(?:".concat(r.join("|"),")"),Ct(n))}function Ir(e,t,n){return Wr(Ar(e,n),t,n)}function Wr(e,t,n){n===void 0&&(n={});for(var r=n.strict,i=r===void 0?!1:r,s=n.start,o=s===void 0?!0:s,c=n.end,a=c===void 0?!0:c,l=n.encode,u=l===void 0?function(ae){return ae}:l,p=n.delimiter,d=p===void 0?"/#?":p,m=n.endsWith,f=m===void 0?"":m,h="[".concat(N(f),"]|$"),v="[".concat(N(d),"]"),b=o?"^":"",w=0,L=e;w<L.length;w++){var k=L[w];if(typeof k=="string")b+=N(u(k));else{var C=N(u(k.prefix)),E=N(u(k.suffix));if(k.pattern)if(t&&t.push(k),C||E)if(k.modifier==="+"||k.modifier==="*"){var q=k.modifier==="*"?"?":"";b+="(?:".concat(C,"((?:").concat(k.pattern,")(?:").concat(E).concat(C,"(?:").concat(k.pattern,"))*)").concat(E,")").concat(q)}else b+="(?:".concat(C,"(").concat(k.pattern,")").concat(E,")").concat(k.modifier);else k.modifier==="+"||k.modifier==="*"?b+="((?:".concat(k.pattern,")").concat(k.modifier,")"):b+="(".concat(k.pattern,")").concat(k.modifier);else b+="(?:".concat(C).concat(E,")").concat(k.modifier)}}if(a)i||(b+="".concat(v,"?")),b+=n.endsWith?"(?=".concat(h,")"):"$";else{var O=e[e.length-1],se=typeof O=="string"?v.indexOf(O[O.length-1])>-1:O===void 0;i||(b+="(?:".concat(v,"(?=").concat(h,"))?")),se||(b+="(?=".concat(v,"|").concat(h,")"))}return new RegExp(b,Ct(n))}function qt(e,t,n){return e instanceof RegExp?qr(e,t):Array.isArray(e)?Or(e,t,n):Ir(e,t,n)}var ns=new TextEncoder;function Ot(){if(typeof navigator<"u"&&navigator.product==="ReactNative")return!0;if(typeof process<"u"){let e=process.type;return e==="renderer"||e==="worker"?!1:!!(process.versions&&process.versions.node)}return!1}var Dr=Object.defineProperty,Mr=(e,t)=>{for(var n in t)Dr(e,n,{get:t[n],enumerable:!0})},_r={};Mr(_r,{blue:()=>Nr,gray:()=>Hr,green:()=>Br,red:()=>Ur,yellow:()=>jr});function jr(e){return`\x1B[33m${e}\x1B[0m`}function Nr(e){return`\x1B[34m${e}\x1B[0m`}function Hr(e){return`\x1B[90m${e}\x1B[0m`}function Ur(e){return`\x1B[31m${e}\x1B[0m`}function Br(e){return`\x1B[32m${e}\x1B[0m`}var as=Ot();var Fr=Symbol("isPatchedModule");function It(e,t=!0){return[t&&e.origin,e.pathname].filter(Boolean).join("")}var $r=/[\?|#].*$/g;function Wt(e){return new URL(`/${e}`,"http://localhost").searchParams}function ne(e){return e.replace($r,"")}function Dt(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}function Mt(e,t){if(Dt(e)||e.startsWith("*"))return e;let n=t||typeof document<"u"&&document.baseURI;return n?decodeURI(new URL(encodeURI(e),n).href):e}function _t(e,t){if(e instanceof RegExp)return e;let n=Mt(e,t);return ne(n)}function Gr(e){return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(t,n,r)=>{let i="(.*)";return n?n.startsWith(":")?`${n}${r}`:`${n}${i}`:i}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function jt(e,t,n){let r=_t(t,n),i=typeof r=="string"?Gr(r):r,s=It(e),o=At(i,{decode:decodeURIComponent})(s),c=o&&o.params||{};return{matches:o!==!1,params:c}}var zr=Object.create,Nt=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyNames,Yr=Object.getPrototypeOf,Jr=Object.prototype.hasOwnProperty,Vr=(e,t)=>function(){return t||(0,e[Ht(e)[0]])((t={exports:{}}).exports,t),t.exports},Xr=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ht(t))!Jr.call(e,i)&&i!==n&&Nt(e,i,{get:()=>t[i],enumerable:!(r=Kr(t,i))||r.enumerable});return e},Qr=(e,t,n)=>(n=e!=null?zr(Yr(e)):{},Xr(t||!e||!e.__esModule?Nt(n,"default",{value:e,enumerable:!0}):n,e)),Zr=Vr({"node_modules/cookie/index.js"(e){"use strict";e.parse=r,e.serialize=i;var t=Object.prototype.toString,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function r(l,u){if(typeof l!="string")throw new TypeError("argument str must be a string");for(var p={},d=u||{},m=d.decode||s,f=0;f<l.length;){var h=l.indexOf("=",f);if(h===-1)break;var v=l.indexOf(";",f);if(v===-1)v=l.length;else if(v<h){f=l.lastIndexOf(";",h-1)+1;continue}var b=l.slice(f,h).trim();if(p[b]===void 0){var w=l.slice(h+1,v).trim();w.charCodeAt(0)===34&&(w=w.slice(1,-1)),p[b]=a(w,m)}f=v+1}return p}function i(l,u,p){var d=p||{},m=d.encode||o;if(typeof m!="function")throw new TypeError("option encode is invalid");if(!n.test(l))throw new TypeError("argument name is invalid");var f=m(u);if(f&&!n.test(f))throw new TypeError("argument val is invalid");var h=l+"="+f;if(d.maxAge!=null){var v=d.maxAge-0;if(isNaN(v)||!isFinite(v))throw new TypeError("option maxAge is invalid");h+="; Max-Age="+Math.floor(v)}if(d.domain){if(!n.test(d.domain))throw new TypeError("option domain is invalid");h+="; Domain="+d.domain}if(d.path){if(!n.test(d.path))throw new TypeError("option path is invalid");h+="; Path="+d.path}if(d.expires){var b=d.expires;if(!c(b)||isNaN(b.valueOf()))throw new TypeError("option expires is invalid");h+="; Expires="+b.toUTCString()}if(d.httpOnly&&(h+="; HttpOnly"),d.secure&&(h+="; Secure"),d.priority){var w=typeof d.priority=="string"?d.priority.toLowerCase():d.priority;switch(w){case"low":h+="; Priority=Low";break;case"medium":h+="; Priority=Medium";break;case"high":h+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(d.sameSite){var L=typeof d.sameSite=="string"?d.sameSite.toLowerCase():d.sameSite;switch(L){case!0:h+="; SameSite=Strict";break;case"lax":h+="; SameSite=Lax";break;case"strict":h+="; SameSite=Strict";break;case"none":h+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return h}function s(l){return l.indexOf("%")!==-1?decodeURIComponent(l):l}function o(l){return encodeURIComponent(l)}function c(l){return t.call(l)==="[object Date]"||l instanceof Date}function a(l,u){try{return u(l)}catch{return l}}}}),ei=Qr(Zr(),1),re=ei.default;function Ut(){return re.parse(document.cookie)}function ti(e){if(typeof document>"u"||typeof location>"u")return{};switch(e.credentials){case"same-origin":{let t=new URL(e.url);return location.origin===t.origin?Ut():{}}case"include":return Ut();default:return{}}}function Bt(e){let t=e.headers.get("cookie"),n=t?re.parse(t):{};M.hydrate();let r=Array.from(M.get(e)?.entries()).reduce((o,[c,{value:a}])=>Object.assign(o,{[c.trim()]:a}),{}),i=ti(e),s=x(x({},i),r);for(let[o,c]of Object.entries(s))e.headers.append("cookie",re.serialize(o,c));return x(x({},s),n)}var R=(e=>(e.HEAD="HEAD",e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.DELETE="DELETE",e))(R||{}),ie=class extends Y{constructor(t,n,r,i){super({info:{header:`${t} ${n}`,path:n,method:t},resolver:r,options:i}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){let{method:t,path:n}=this.info;if(n instanceof RegExp||ne(n)===n)return;let i=Wt(n),s=[];i.forEach((o,c)=>{s.push(c)}),y.warn(`Found a redundant usage of query parameters in the request handler URL for "${t} ${n}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`)}parse(t){return g(this,null,function*(){let n=new URL(t.request.url),r=jt(n,this.info.path,t.resolutionContext?.baseUrl),i=Bt(t.request);return{match:r,cookies:i}})}predicate(t){let n=this.matchMethod(t.request.method),r=t.parsedResult.match.matches;return n&&r}matchMethod(t){return this.info.method instanceof RegExp?this.info.method.test(t):kt(this.info.method,t)}extendResolverArgs(t){return{params:t.parsedResult.match?.params||{},cookies:t.parsedResult.cookies}}log(t){return g(this,null,function*(){let n=J(t.request.url),r=yield Et(t.request),i=yield Tt(t.response),s=xt(i.status);console.groupCollapsed(y.formatMessage(`${St()} ${t.request.method} ${n} (%c${i.status} ${i.statusText}%c)`),`color:${s}`,"color:inherit"),console.log("Request",r),console.log("Handler:",this),console.log("Response",i),console.groupEnd()})}};function A(e){return(t,n,r={})=>new ie(e,t,n,r)}var oe={all:A(/.+/),head:A(R.HEAD),get:A(R.GET),post:A(R.POST),put:A(R.PUT),delete:A(R.DELETE),patch:A(R.PATCH),options:A(R.OPTIONS)};var{message:ni}=te;function W(e={}){let t=e?.status||200,n=e?.statusText||ni[t]||"",r=new Headers(e?.headers);return S(x({},e),{headers:r,status:t,statusText:n})}function Ft(e,t){if(t.type&&Object.defineProperty(e,"type",{value:t.type,enumerable:!0,writable:!1}),typeof document<"u"){let n=t.headers.get("Set-Cookie")?.split(",")||[];for(let r of n)document.cookie=r}return e}var H=class e extends Response{constructor(t,n){let r=W(n);super(t,r),Ft(this,r)}static text(t,n){let r=W(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/plain"),r.headers.has("Content-Length")||r.headers.set("Content-Length",t?t.length.toString():"0"),new e(t,r)}static json(t,n){let r=W(n);r.headers.has("Content-Type")||r.headers.set("Content-Type","application/json");let i=JSON.stringify(t);return r.headers.has("Content-Length")||r.headers.set("Content-Length",i?i.length.toString():"0"),new e(i,r)}static xml(t,n){let r=W(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/xml"),new e(t,r)}static arrayBuffer(t,n){let r=W(n);return t&&r.headers.set("Content-Length",t.byteLength.toString()),new e(t,r)}static formData(t,n){return new e(t,W(n))}};wt();var $t={75278:{id:75278,companyName:"Scroll.io",title:"People Operations Manager (Chinese / English)",companyLogo:"https://interstate21.com/job-search-app/scroll-io.jpg",reference:"75278-people-operations-specialist-chinese-and-english",location:"EMEA,  Europe",industries:["HR &amp; Recruiting"],types:["full-time"],description:`<div class="section page-centered" data-qa="job-description">
<div class="section page-centered" data-qa="job-description">
<div>We are looking for a People Operations Manager who will provide essential support for our globally distributed remote team. The role includes administrative assistance, coordinating global internal events, and facilitating various People programs. The ideal candidate should possess strong attention-to-detail and organizational skills, along with the ability to effectively manage multiple concurrent projects and tasks in a fast-paced and rapidly growing environment.</div>
<div></div>
<div>We value individuals who have a meticulous and professional approach, understanding how to support each team&#8217;s growth and scalability. A positive attitude, strong ownership mentality, and excellent communication skills are essential. At Scroll, we prioritize our employee relationships and strive to provide the best experience from onboarding to becoming a Scroll alumni.</div>
</div>
<div class="section page-centered">
<div>
<h2>Responsibilities:</h2>
<ul>
<li>Serve as the primary point of contact for employees worldwide, addressing their HR needs.</li>
<li>Collaborate closely with the People Lead and leadership teams to ensure HR compliance (e.g. EOR/PEO), manage Employee Relations, execute People Programs and Projects, oversee the end-to-end HR tech stack, and handle HR reporting.</li>
<li>Take charge of the compensation program, including conducting compensation reviews, internal parity assessments, and salary benchmarking. This involves data collection and analysis to support well-informed decision-making.</li>
<li>Lead the effort to enhance HR policies and processes, ensuring alignment with legal requirements and industry best practices.</li>
<li>Drive HR change management initiatives, involving effective communication of changes, gathering feedback, addressing concerns, and continuously enhancing HR practices.</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Qualifications:</h2>
<ul>
<li>6+ years of experience in a fast-paced People Operations or HR management role.</li>
<li>Proficiency in both written and spoken Chinese and English, facilitating effective communication with a global employee base.</li>
<li>Experience in dynamic, fast-paced business environments, such as blockchain, deep tech, or global remote startup settings.</li>
<li>Comfort with adapting to and utilizing multiple tech platforms, with a quick ability to learn and effectively operate new systems as needed.</li>
<li>Strong attention to detail, ensuring accuracy and quality in all tasks and deliverables.</li>
<li>A team player mindset, proactivity, and the ability to thrive in a fast-paced, high-performance environment.</li>
<li>Excellent interpersonal skills, including the ability to manage complex relationships and engage in difficult conversations.</li>
<li>Demonstrated ability to navigate ambiguity and autonomously manage responsibilities, showcasing flexibility in scheduling and effective problem-solving.</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Benefits:</h2>
<ul>
<li>Work from anywhere with flexible hours</li>
<li>Generous paid time off</li>
<li>Home office set up</li>
<li>Annual growth budget</li>
<li>Coworking membership allowance</li>
<li>Private healthcare in selected countries</li>
<li>Competitive salary package</li>
</ul>
</div>
</div>
</div>`,publishDate:"2024-02-24 08:35:13"},80831:{id:80831,companyName:"SmartLogic",title:"Software Developer",companyLogo:"https://interstate21.com/job-search-app/SmartLogic.jpg",reference:"80831-software-developer-10",location:"USA",industries:["Programming"],types:["full-time"],description:`<section>
<div class="parsedHtml__content--OWD2W">
<p>We are seeking a Software Developer with a successful track record in the planning, implementation, testing, and maintenance of custom software using Ruby on Rails and/or Phoenix/Elixir.</p>
<p>SmartLogic is an experienced and growing custom software development consultancy successfully serving clients since 2005. We are deeply committed to our team, our clients, and the communities where we work. Some of our recent company initiatives include\xA0leading on youth workforce development,\xA0software developer apprenticeships, our\xA0Elixir Wizards |&gt; conference, and the\xA0Baltimore Women in Tech micro grants program. We look forward to reviewing your application and starting a conversation about a fulfilling career with SmartLogic.</p>
<p>Our typical projects last anywhere from one month to several months. A few of our clients have worked with us continuously since 2010. Our clients range from large nonprofits to startups to local governments to small/medium businesses: check out our\xA0case studies\xA0for more information on our work.</p>
<p>As a Software Developer at SmartLogic, we work to minimize context switching so you can focus on writing great software. We accomplish this by working to ensure our developers are assigned to one client assignment at a time, though occasionally you may be assigned to more than one project.</p>
<h2>Responsibilities:</h2>
<ul>
<li>Write concise, maintainable, and well-tested code using Ruby on Rails and/or Phoenix/Elixir</li>
<li>Work collaboratively with a team of project managers, product designers, and developers for 40 hours per week</li>
<li>Collaborate on project management to ensure satisfied clients and happy developers</li>
<li>As a consultancy, our staff record and submit time on a weekly basis</li>
<li>Contribute to the technical improvement and success of SmartLogic\u2019s software development and expertise</li>
<li>Participate in ongoing professional development to continually hone engineering skill</li>
</ul>
</div>
</section>
<section>
<h2 class="styles__h2--p4pBC JobBreakdown__section-heading--38xCJ styles__emphasis--3da4O"><strong class="styles__strong--2kqW6">Requirements:</strong></h2>
<div class="parsedHtml__content--OWD2W">
<ul>
<li>Professional experience in Ruby on Rails and/or Phoenix/Elixir, and a motivation to learn and improve your software development capabilities related to these technologies</li>
<li>Experience communicating with clients and translating technical issues to non-technical stakeholders</li>
<li>Prior professional experience demonstrating your ability to be a team player and to proactively communicate your needs</li>
<li>Experience decomposing client requirements into actionable implementation</li>
<li>Proficiency or an interest in Flutter for mobile app development</li>
<li>Comfort with participating in agile ceremonies such as standups, grooming sessions, and sprint reviews</li>
</ul>
</div>
</section>
<section>
<h2 class="styles__h2--p4pBC JobBreakdown__section-heading--38xCJ styles__emphasis--3da4O"><strong class="styles__strong--2kqW6">Benefits:</strong></h2>
<div class="parsedHtml__content--OWD2W">
<p>The SmartLogic career map outlines three levels of software developer and how a developer progresses from one level to the next. The salary bands for the three levels are as follows:</p>
<ul>
<li>Junior Developer: $60,000 to $90,000</li>
<li>Mid Developer: $85,000 to $115,000</li>
<li>Senior Developer: $110,000 to $140,000</li>
</ul>
<p>This position is fully remote and you may work from anywhere in the United States. We offer health, dental, and vision insurance, unlimited PTO, unlimited sick leave, paid parental leave and a 3% matching SIMPLE IRA program.</p>
<p>New employees are allowed a one-time $500 home office set-up allowance. Additionally, every employee is offered $600 annually towards work-from-home expenses.</p>
<p>SmartLogic is committed to professional development and community involvement. We provide ample opportunity for learning through dedicated professional development days, participation in conferences (we took our whole team to ElixirConf in 2022), and company-supplied access to books and other resources. We organize events, meetups, and invest in our local and online communities.</p>
<p>As a remote-first organization, we work intentionally to build a supportive culture in a virtual environment. We do this through various means, including Side Project Club, Coffee Chat, a weekly all-hands meeting, various slack channels (e.g. for #food, #fitness, #family, #mindfulness, #books, and more), doling out virtual tacos, monthly women+ coffee chats, virtual happy hours, and more.</p>
</div>
</section>`,publishDate:"2024-02-24 08:33:26"},91478:{id:91478,companyName:"Anonos",title:"Product Content Marketer (f/m/d)",companyLogo:"https://interstate21.com/job-search-app/Anonos.jpg",reference:"91478-product-content-marketer-f-m-d",location:"Germany",industries:["Copywriting &amp; Content"],types:["full-time"],description:`<div class="styles--2BkR3" data-ui="job-description">
<div>
<p>We are a global data privacy technology company founded in 2013. We understand that organizations want to innovate, without getting into legal hot water. We allow them to do exactly that: use their data, without the drama.</p>
<p>We pride ourselves on our dynamic and inclusive company culture that values continuous learning, open communication, and a collaborative mindset. Our commitment to practices like Radical Candor, communication-based on honest and direct feedback while maintaining mutual respect and care, strengthens our work environment. We believe that our team members are at the heart of our success, and we are dedicated to creating an atmosphere where each individual can thrive and contribute to delivering cutting-edge software and data privacy solutions. Our culture is built upon a foundation of shared values, which guide our interactions and shape our work.</p>
<p>Join us to make a difference for organizations at the intersection of privacy, technology, and data. Learn more at\xA0www.anonos.com</p>
<h2>About the role:</h2>
<p>Anonos is seeking a product content creator and marketer. The ideal candidate will be experienced in crafting compelling narratives and marketing strategies around our product offerings and partner relationships to drive brand awareness and engagement effectively.</p>
<p>They will have a deep understanding of the B2B industry, tech privacy, and AI industry and be able to use this knowledge to drive engagement effectively, nurture leads, communicate our product to prospects and key partners, and increase the reach of our marketing activities. We\u2019re seeking someone with a proven track record of creating and managing product content for B2B (SaaS) companies.</p>
<p>This is a part-time (approx. 30 hours per week) position on a freelance basis with the potential to transition into a full-time role.</p>
<h2>Responsibilities:</h2>
<ul>
<li>Develop and promote industry-aligned product content in various formats (webpages, blog posts, whitepapers, etc.) that effectively communicates our product offerings to prospective customers and key partners.</li>
<li>Assist the Head of Content in implementing a content plan designed to nurture leads and broaden brand reach and engagement.</li>
<li>Collaborate with design, product, sales, and other internal teams to develop product-focused content.</li>
<li>Measure and report the performance of content marketing campaigns and assess against goals (ROI and KPIs).</li>
<li>Have knowledge and actively use SEO best practices to maximize content effectiveness and contribute to increasing organic traffic.</li>
<li>Stay up-to-date with industry developments and generate new ideas to draw the audience\u2019s attention.</li>
</ul>
</div>
</div>
<div class="styles--2kg4_" data-ui="job-requirements">
<h2>Requirements:</h2>
<div>
<ul>
<li>3-5 years of product content marketing experience within a SaaS industry (with an emphasis on product content marketing).</li>
<li>Solid understanding of content-related KPIs, SEO, and analytics.</li>
<li>Good knowledge of the data privacy technology field.</li>
<li>Excellent verbal and written communication skills (English).</li>
<li>Ability to work in a fast-paced, deadline-driven environment.</li>
<li>Ability to work independently and meet tight deadlines.</li>
</ul>
</div>
</div>`,publishDate:"2024-02-24 08:32:37"},94525:{id:94525,companyName:"ServiceNow",title:"Sr. Public Sector Account Executive - SLED",companyLogo:"https://interstate21.com/job-search-app/ServiceNow.png",reference:"94525-sr-enterprise-account-executive-telco-media",location:"Canada,  USA",industries:["Sales"],types:["full-time"],description:`<section id="st-companyDescription" class="job-section">
<div class="wysiwyg">
<section id="st-companyDescription" class="job-section">
<div class="wysiwyg">
<section id="st-companyDescription" class="job-section">
<div class="wysiwyg">
<p>At ServiceNow, our technology makes the world work for everyone, and our people make it possible. We move fast because the world can\u2019t wait, and we innovate in ways no one else can for our customers and communities. By joining ServiceNow, you are part of an ambitious team of change makers who have a restless curiosity and a drive for ingenuity. We know that your best work happens when you live your best life and share your unique talents, so we do everything we can to make that possible. We dream big together, supporting each other to make our individual and collective dreams come true. The future is ours, and it starts with you.</p>
<p>With more than 7,700+ customers, we serve approximately 85% of the Fortune 500\xAE, and we&#8217;re proud to be one of FORTUNE 100 Best Companies to Work For\xAE and World&#8217;s Most Admired Companies\u2122.</p>
<p>Learn more on\xA0Life at Now blog\xA0and\xA0hear from our employees\xA0about their experiences working at ServiceNow.</p>
<p>Unsure if you meet all the qualifications of a job description but are deeply excited about the role? We still encourage you to apply! At ServiceNow, we are committed to creating an inclusive environment where all voices are heard, valued, and respected. We welcome all candidates, including individuals from non-traditional, varied backgrounds, that might not come from a typical path connected to this role. We believe skills and experience are transferrable, and the desire to dream big makes for great candidates.</p>
</div>
</section>
<section id="st-description" class="job-section">
<div>
<h2 class="title">Job Description</h2>
</div>
<div class="wysiwyg">
<p>You will produce new business sales revenue from a SaaS license model. You will accomplish this through account planning, territory planning, researching prospect customers, using business development strategies and completing field-based sales activities within a defined set of prospects, territory or vertical.</p>
<p><strong>What you get to do in this role</strong></p>
<ul>
<li>Develop relationships with multiple C-suite personas (e.g., CFO, CIO, COO, CDO) across all product sales</li>
<li>Oversee client relationship mapping to the account team, orchestrating an account strategy while leading across a broad virtual team (Solutions Consultants, Solutions Specialist, Success resources, Partners and Marketing, etc.)</li>
<li>Be a trusted advisor to your customers by understanding their business and advising on how ServiceNow can help help their IT roadmap</li>
<li>Identify the right specialist/ support resources to bring into a deal, at the right time</li>
</ul>
</div>
</section>
<section id="st-qualifications" class="job-section">
<div>
<h2 class="title">Qualifications</h2>
</div>
<div class="wysiwyg">
<p><strong>To be successful in this role you have</strong></p>
<ul>
<li>10+ years of sales experience within software OR solutions sales organization</li>
<li>Experience establishing trusted relationships with current and prospective clients and other teams</li>
<li>Experience producing new business, negotiate deals, and maintain healthy C-Level relationships</li>
<li>Experience achieving sales targets</li>
<li>The ability to understand the &#8220;bigger picture&#8221; and our plans around IT</li>
<li>Experience promoting a customer success focus in a &#8220;win as a team&#8221; environment</li>
<li>Willingness to travel up to 50%</li>
</ul>
<p>For positions in New York City, we offer a base pay of $136,600 &#8211; $225,400, plus equity (when applicable), variable/incentive compensation and benefits. Sales positions generally offer a competitive On Target Earnings (OTE) incentive compensation structure. Please note that the base pay shown is a guideline, and individual total compensation will vary based on factors such as qualifications, skill level, competencies and work location. We also offer health plans, including flexible spending accounts, a 401(k) Plan with company match, ESPP, matching donations, a flexible time away plan and family leave programs.\u202F Compensation is based on the geographic location in which the role is located and is subject to change based on work location.</p>
</div>
</section>
<section id="st-additionalInformation" class="job-section">
<div>
<h2 class="title">Additional Information</h2>
</div>
<div class="wysiwyg">
<p>ServiceNow is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.</p>
</div>
</section>
</div>
</section>
</div>
</section>`,publishDate:"2024-02-24 08:31:30"},94536:{id:94536,companyName:"DuckDuckGo",title:"Principal Site Reliability Engineer",companyLogo:"https://interstate21.com/job-search-app/DuckDuckGo.png",reference:"94536-principal-site-reliability-engineer",location:"Anywhere",industries:["Software Engineering"],types:["full-time"],description:`<p>Hi, we\u2019re DuckDuckGo, the Internet privacy company for everyone who wants to take back their privacy now. For over a decade, we&#8217;ve been building our all-in-one product, developing new privacy technology, and working with policymakers to make online privacy simple and accessible for all.</p>
<p>Our app is now downloaded more than 78M times a year, and our private search engine packaged with it has become the #2 search engine on mobile in the United States and 18 other countries, including the United Kingdom, Canada, Australia, Germany, and the Netherlands. Oh, and we&#8217;ve been profitable since 2014, with revenue exceeding $100 million a year! Now, we\u2019re rolling out a suite of new privacy solutions, including\xA0Email Protection,\xA0App Tracking Protection\xA0and our first-ever Desktop Apps for\xA0Mac<a href="https://spreadprivacy.com/introducing-duckduckgo-for-mac/" target="_blank" rel="noopener">\xA0</a>and\xA0Windows.</p>
<p>We\u2019re looking for a\xA0<strong>Principal Site Reliability Engineer</strong>\xA0to help shape our all-in-one privacy solution and join our mission to show the world that protecting your privacy online can be simple.</p>
<h2><strong>The Opportunity</strong></h2>
<p>In this highly technical role, you&#8217;ll act as a hands-on leader and engineering partner for one of our key strategic objectives (search or similar), pragmatically navigating cross-functional interests to help us execute our vision with urgency.</p>
<p>You&#8217;ll focus on hands-on technical work, diving deep into our stack to understand and optimize complex systems and user interactions, participate in SRE on-call rotation, triaging production issues and defining appropriate remediation, and help shape the future technical direction of our stack, all while keeping privacy at the forefront as you improve reliability and performance.</p>
<p>You&#8217;ll also advise engineers on the SRE team and beyond, nurturing their growth and collaborating closely with other developers throughout the end-to-end development cycle across technical design, implementation, QA, review, and release.</p>
<h2><strong>What You Will Bring to DuckDuckGo</strong></h2>
<ul>
<li>10+ years of experience in SRE focused roles responsible for supporting, scaling and ensuring reliability of large-scale end-to-end infrastructures.</li>
<li>4+ years of experience in roles of comparable seniority (Principal, Director, etc.) with a proven track record of proposing and executing strategic infrastructure work.</li>
<li>Ability to root cause sources of instability of high-traffic, distributed systems.</li>
<li>Skilled at managing complex solutions and delivering in pragmatic ways.</li>
<li>Deep experience working with Linux and web technologies.</li>
<li>Experience participating in a 24&#215;7 on-call rotation for large-scale deployment.</li>
<li>Advanced programming experience, preferably in a high-level language like Perl or Python.</li>
<li>Ability to provide technical advisory for other engineers to help them grow and deliver high quality work faster.</li>
</ul>
<h2><strong>How We Will Support You</strong></h2>
<p>Our core values &#8212; build trust, question assumptions, and validate direction &#8212; underpin how we work day-to-day and the support we give our team members. We strive to empower our team members to be self-directed and self-motivated in their work.</p>
<ul>
<li><strong>Remote First, Always</strong>: We&#8217;ve always been a fully distributed company with team members all over the world. We trust you to get your work done wherever, and whenever.</li>
<li><strong>Commitment to Personal Growth:</strong>\xA0Every team member has an annual budget of $1,250 USD to invest in their professional development. For team members in designated leadership roles, we offer reimbursement for leadership coaching services. The reimbursement amount varies by professional level. Every team member also has a dedicated Career Advisor, who serves as a guide to help you develop your strengths, identify your motivations, and understand your opportunities for growth.</li>
<li><strong>Leadership:</strong>\xA0We have many different types of leaders and possible combinations of leadership roles, so you can grow your career in a way that aligns best with your personal goals. You can seek additional leadership roles by being directly responsible for projects, taking ownership of areas of the company, developing and maintaining internal processes, or pursuing advisory roles.</li>
<li><strong>Work/Life Balance:\xA0</strong>Team members have the freedom and flexibility to organize their own work schedules. We want you to thrive both in and out of the office. We trust you to use good judgment and take the time off that you need to bring your best self to work.</li>
</ul>
<h2><strong>Compensation</strong></h2>
<p>Annual compensation: $220,000 &#8211; $242,000 USD and stock options. Compensation is the same within a professional level, regardless of geographic location or functional area, and the compensation for each professional level is transparent across the organization.</p>`,publishDate:"2024-02-24 08:23:28"},96513:{id:96513,companyName:"Luxury Presence",title:"Sr. Backend Engineer - Canada",companyLogo:"https://interstate21.com/job-search-app/Luxury.jpg",reference:"96513-sr-software-engineer-latam",location:"Canada",industries:["Software Engineering"],types:["full-time"],description:`<div class="section page-centered" data-qa="job-description">
<div class="section page-centered" data-qa="job-description">
<div class="section page-centered" data-qa="job-description">
<div><b>Luxury Presence</b>\xA0is the fastest-growing digital platform for agents, teams, and brokerages. Their award-winning real estate websites, modern marketing solutions, and AI-powered mobile platform help agents attract more business, work more efficiently, and serve their clients. Since launching in 2016, Luxury Presence has been trusted by more than 10,000 real estate professionals, including over 20 Wall Street Journal Top 100 agents.</div>
<h2><b>Who is the Platform Squad?</b></h2>
<div>The Platform squad is a new squad being formed to support our product squads. This squad owns critical service implementations such as Authentication/Authorization in addition to user-facing pieces of our applications like our CMS and our React component library. Teams such as Website Product will regularly interact with Platform and rely on their APIs and packages.</div>
</div>
<div class="section page-centered">
<div>
<h2>What you will do as a Sr. Backend Engineer</h2>
<ul>
<li>Design, build, test, and deploy the cloud-native platform and microservices/API to be consumed by our platform and clients</li>
<li>Partner with architecture and external development teams to design reusable frameworks and technical solutions</li>
<li>Partner with Frontend Developers to create new user-facing features and build reusable code and libraries for future use</li>
<li>Participate in the evaluation of emerging technology and tools</li>
<li>Optimize application for maximum speed and scalability</li>
<li>Conduct code reviews for peers and mentor junior Engineers</li>
<li>Iterate on our framework for rendering and building a common of libraries and components</li>
<li>Participate in squad ceremonies and team events (lunch &amp; learn, brainstorms, etc.)</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Skills And Qualifications</h2>
<ul>
<li>5+ year experience developing backend web applications. Bonus points for experience with TypeScript on NodeJS</li>
<li>Experience with data-driven architecture and systems design, RESTful APIs, microservices architecture. Test Driven Development experience is a plus!</li>
<li>Strong experience in designing optimal system integration with data persistence layers, including use of ORMs, SQL and APIs to interact with RDBMS, NoSQL and other data storage systems</li>
<li>Experienced working with enterprise frameworks like Spring Boot, .net Core or equivalent with a solid understanding of concepts like dependency injection</li>
<li>Strong understanding and implementation of cloud-native architectures (AWS serverless or containers preferred) at scale in production</li>
<li>Demonstrated understanding and implementation of software design principles such as SOLID and DI</li>
<li>Experience with Software as a Service (SaaS), multi-tenancy application development</li>
<li>Experience working in a Continuous Integration / Continuous Delivery (CICD) model, including Github and CI pipeline automation tools</li>
<li>Proven success working in Agile environments (Scrum, Kanban, etc.)</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Our Technology Stack</h2>
<ul>
<li>React / StyledComponents / Apollo / SingleSPA</li>
<li>Node/Typescript Microservices</li>
<li>Python ETLs</li>
<li>Postgres / ElasticSearch / DynamoDB</li>
<li>AWS / Kubernetes / Lambda</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Interview Process</h2>
<ul>
<li>We do a quick, 3 step, fully virtual interview process.</li>
<li>1st &#8211; Engineering Craft Interview (Deep Dive Technical) &#8211; 1 Hour</li>
<li>2nd &#8211; Engineering Craft Interview (Technical Breadth) &#8211; 1 Hour</li>
<li>3rd &#8211; Culture &amp; Values Interview &#8211; 1 Hour</li>
</ul>
</div>
</div>
<div class="section page-centered" data-qa="closing-description">
<div>Who we are: Luxury Presence is the real estate industry&#8217;s most powerful marketing platform, providing award winning websites and cutting edge tech to the world\u2019s top agents.</div>
<div></div>
<div>Founded in 2016 by Stanford Business School alumni Malte Kramer, Luxury Presence currently serves over 9,000 clients in the U.S. and Canada with its SaaS model \u2014 including over 20 of the top 100 WSJ real estate agents and teams. In addition, Luxury Presence is the official website partner to some of the industry&#8217;s most powerful brokerages.</div>
</div>
</div>
</div>`,publishDate:"2024-02-24 08:15:36"},96515:{id:96515,companyName:"Twitch",title:"Director - Communications",companyLogo:"https://interstate21.com/job-search-app/Twitch.jpg",reference:"96515-director-communications",location:"USA",industries:["Marketing &amp; Sales"],types:["full-time"],description:`<p>Twitch is the world&#8217;s biggest live streaming service, with global communities built around gaming, entertainment, music, sports, cooking, and more. It is where thousands of communities come together for whatever, every day.</p>
<p>We&#8217;re about community, inside and out. You&#8217;ll find coworkers who are eager to team up, collaborate, and smash (or elegantly solve) problems together. We&#8217;re on a quest to empower live communities, so if this sounds good to you, see what we&#8217;re up to on\xA0LinkedIn\xA0and\xA0Twitter, and discover the projects we&#8217;re solving on our\xA0Blog. Be sure to explore our\xA0Interviewing Guide\xA0and\xA0Instagram\xA0channel to learn how to ace our interview process.</p>
<h2>About the Role:</h2>
<p>The Director of Communications will lead a global team responsible for shaping the stories that are told about Twitch. You will oversee all aspects of Twitch&#8217;s global communications function; develop a global strategy, set the teams&#8217; priorities, and craft narratives and messaging for external and internal audiences alike. You will work closely with our CEO and the broader executive team to increase Twitch&#8217;s brand awareness, defend &amp; protect our reputation, and amplify our creators&#8217; stories and the unique opportunity on Twitch.</p>
<p>You are curious about how things work, make the complex seem simple and bring compelling stories to life with few details. You&#8217;re a strong people manager with experience developing talent and managing agencies. You spot issues before they happen and will push the business proactively to protect against potential risk or exposure. You&#8217;re also a practiced storyteller who will explore new approaches to reach key audiences, including the Twitch Community, the media, regulators, advertisers, and employees. You know how to balance competing priorities and make decisions about trade offs quickly.</p>
<p>This role will report to the CMO and be a part of the marketing leadership team.</p>
<p>This role may be remote in the US, with a preference for location in San Francisco, CA; Los Angeles, CA; Irvine, CA; Seattle, WA; New York, NY.</p>
<h2><strong>You Will:</strong></h2>
<ul>
<li>Inspire and develop a team of Comms professionals to tell cohesive and compelling narratives to press, the community, and Twitch employees</li>
<li>Direct and implement global communications strategies that promote Twitch, our service and offerings, and the community</li>
<li>Identify opportunities to engage creators and viewers around current events or other company/cultural or industry moments</li>
<li>Advise on strategic business decisions and direct company response on crises and emerging issues</li>
<li>Establish an understanding of Twitch&#8217;s community, product, and business</li>
<li>Be a trusted, strategic advisor to peers and executives</li>
<li>Work globally, and oversee roster of agencies</li>
</ul>
<h2>You Have:</h2>
<ul>
<li>10+ years of experience in public relations, including experience working in-house</li>
<li>Established relationships with a broad range of media and outlets</li>
<li>Experience leading campaigns or programs around entertainment, content or talent/creator storytelling</li>
<li>Excellent written and oral communication skills and comfort being a company spokesperson</li>
<li>Sound business judgment in sometimes ambiguous situations and environments</li>
<li>Enthusiasm for Twitch and our community</li>
</ul>
<h2>Bonus Points:</h2>
<ul>
<li>Passion for creators or experience as one yourself</li>
</ul>
<h2>Perks:</h2>
<ul>
<li>Medical, Dental, Vision &amp; Disability Insurance</li>
<li>401(k)</li>
<li>Maternity &amp; Parental Leave</li>
<li>Flexible PTO</li>
<li>Amazon Employee Discount</li>
<li>Monthly Contribution &amp; Discounts for Wellness Related Activities &amp; Programs (e.g., gym memberships, off-site massages)</li>
</ul>
<p><em>We are an equal opportunity employer and value diversity at Twitch. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</em></p>
<p><em>Pursuant to the San Francisco Fair Chance Ordinance, we will consider for employment qualified applicants with arrest and conviction records.</em></p>
<p><em>Pursuant to the Los Angeles Fair Chance Ordinance, we will consider for employment qualified applicants with arrest and conviction records.</em></p>`,publishDate:"2024-02-24 08:14:43"},98595:{id:98595,companyName:"Subspace Network",title:"Head of Product",companyLogo:"https://interstate21.com/job-search-app/Subspace.jpg",reference:"98595-head-of-product-6",location:"Anywhere",industries:["Product &amp; Operations"],types:["full-time"],description:`<div class="section page-centered" data-qa="job-description">
<div>Subspace is an early stage, venture backed startup, pioneering the next generation of decentralized technologies, envisioning a future where AI seamlessly integrates with Web3, redefining digital identities and payments.</div>
<div></div>
<div><b>The Subspace Network:\xA0</b>The Subspace Network, set to launch its mainnet early next year, is a groundbreaking, radically decentralized layer-one blockchain underpinned by an innovative proof-of-archival storage (PoAS) consensus mechanism. Our work is rooted in original research, supported by the US National Science Foundation. For more insights into our vision and technology, please visit our website and explore the technical whitepaper. This technology serves as the foundation for reimagining the relationship between humans and AI, driving the emergence of a new digital era.</div>
<div></div>
<div><b>Our Vision:</b>\xA0Our vision extends beyond traditional blockchain paradigms. We are reimagining the user experience of Web3, envisioning a world where every individual interacts with the internet through AI-driven agents effortlessly, handling complex tasks from identity verification to payment execution. At the core of our mission lies Humaic Intelligence (HI) and Humaic Labs, pioneering a human-centric approach to AI, championing collaboration, and ensuring universal access.</div>
<h2><b>Your Role</b></h2>
<div>As the Head of Product at Subspace Labs, you will play a pivotal role in bringing this vision to reality\xA0 through leading and owning the end-to-end product development, strategy, and adoption of Subspace as the world\u2019s autonomous identity and payment network, built to connect every human and AI on the planet. Reporting directly to our Chief Technology Officer and collaborating closely with our visionary Founder Jeremiah Wagstaff, you will be at the forefront of our product development efforts. You will lead and mentor a team of 10+ engineers, designers, and product managers, fostering a collaborative environment that thrives on creativity and innovation.</div>
</div>
<div class="section page-centered">
<div>
<h2>Responsibilities:</h2>
<ul>
<li><b>Translate Vision into Reality:</b>\xA0Partner closely with the CEO and CTO to translate our product vision into actionable requirements, technical specifications, and robust implementation plans that align with our overall strategy.</li>
<li><b>Product Roadmap Ownership:\xA0</b>Develop and own our product roadmap, ensuring alignment with budget, timeline, and resource constraints, while staying responsive to evolving user needs.</li>
<li><b>Team Leadership:\xA0</b>Lead, manage, and nurture a dynamic product team comprising over 10 engineers, designers, and product managers.</li>
<li><b>Experiment-Driven Decision-Making:\xA0</b>hypotheses and experiment-driven product management, making sure decisions are based on data, gut feeling/ user feedback, while ensuring alignment among stakeholders and product managers.</li>
<li><b>Lean Roadmapping</b>:\xA0 Drive agile roadmap with flexible OKRs, remaining adaptable to accommodate iterative adjustments, ensuring responsiveness to evolving market dynamics and user feedback.</li>
<li><b>Cross-Functional Collaboration:\xA0</b>Work closely with cross-functional teams within the organization, including engineering, operations, community, and marketing, to prioritize and plan product development efforts.</li>
<li><b>Community Engagement:</b>\xA0Foster open product development by collaborating with product champions across the organization and community, gathering insights into user needs and pain points.</li>
</ul>
<h2>Key Requirements</h2>
</div>
</div>
<div class="section page-centered">
<ul>
<li><b>3-5 years of Web3 and AI Product Management:</b>\xA0Extensive experience in product management within the Web3 and AI spaces, preferably within startup or decentralized environments.</li>
<li><b>Blockchain Expertise:</b>\xA0In-depth knowledge of blockchain technology, particularly in the application layer, with a focus on developer- and user-facing products and services.</li>
<li><b>Lean Product Roadmap Lifecycle Management:\xA0</b>Proven track record in managing the end-to-end product development life cycle in a fast-paced, iterative startup environment.</li>
<li><b>User Research and Testing:\xA0</b>\xA0Familiarity with user research and testing methodologies.</li>
</ul>
</div>
<div class="section page-centered">
<div>
<h2>Bonus Experience</h2>
<ul>
<li><b>Blockchain and AI Specific KPIs:</b>\xA0Skill in identifying and tracking key performance indicators (KPIs) specific to blockchain and AI applications.</li>
<li><b>Smart Contract Development:\xA0</b>Prior experience in smart contract development and decentralized applications (dApps).</li>
<li><b>Project Management Proficiency:\xA0</b>Ability to manage multiple projects concurrently, balancing quality and productivity under pressure, utilizing various project management methodologies.</li>
</ul>
</div>
</div>
<div class="section page-centered" data-qa="closing-description">
<h2><b>To apply</b></h2>
<div>We believe in seeing your skills in action. In addition to your resume, please provide a sample of your work that demonstrates your expertise in blockchain, cryptocurrency, or related fields. This could be a whitepaper, a project proposal, a case study, or any other relevant work that showcases your abilities.</div>
</div>`,publishDate:"2024-02-24 08:34:28"},98596:{id:98596,companyName:"Kraken",title:"Live Support Specialist - Mexico",companyLogo:"https://interstate21.com/job-search-app/Kraken.png",reference:"98596-live-support-specialist-mexico",location:"Mexico",industries:["Customer Success"],types:["full-time"],description:`<p>Our Krakenites are a world-class team with crypto conviction, united by our desire to discover and unlock the potential of crypto and blockchain technology.</p>
<p><strong>What makes us different?</strong></p>
<p>Kraken is a mission-focused company rooted in crypto values. As a Krakenite, you\u2019ll join us on our mission to accelerate the global adoption of crypto, so that everyone can achieve financial freedom and inclusion. For over a decade, Kraken\u2019s focus on our mission and crypto ethos has attracted many of the most talented crypto experts in the world.</p>
<p>As a fully remote company, we have Krakenites in 60+ countries who speak over 50 languages. Krakenites are industry pioneers who develop premium crypto products for experienced traders, institutions, and newcomers to the space. Kraken is committed to\xA0industry-leading security,\xA0crypto education, and\xA0world-class client support\xA0through our products like\xA0Kraken Pro,\xA0Kraken NFT, and\xA0Kraken Futures.</p>
<h2>The Team</h2>
<p>By combining in-depth crypto knowledge, a passion for the industry, and a strong technical background, our Live Support team plays a strong role in our success and ability to deliver world class support. The Live Support team is critical in our mission of bringing crypto to every corner of the world, and is full of bright, charismatic individuals with a knack for helping others. Not only are they bright, but also vigilant and in-touch with the ever changing crypto world. Our Live Support team is incredibly adaptable, adjusting workflows and processes in matters of minutes to accommodate our clients\u2019 requests and ensure that their Kraken experience is something to remember. In many cases, the Live Support team is the first point of contact for our clients, and it is our duty to leave a fantastic impression, while making sure inquiries are handled directly or escalated to the appropriate specialists.</p>
<p><strong>This is a fully remote role requiring English and either Spanish or French fluency, based in Mexico.\xA0 You must be willing to work evenings and weekends.</strong></p>
<p>We&#8217;re seeking passionate, security-first client experience wizards who are absolutely pumped about digital assets!</p>
<p>Imagine this: You&#8217;re part of a dynamic, top-tier team of client experience all-stars, working full-time and remotely. But here&#8217;s the kicker: Our mission is what fuels our fire! We&#8217;re talking about an unwavering commitment to making the crypto universe a better place for each Kraken client by providing a 6 star client experience on each interaction!</p>
<h2><strong>The Opportunity</strong></h2>
<ul>
<li><strong>Client Interaction:\xA0</strong>Handle frontline client interactions through phone support and chat, prioritizing swift issue resolution and exceptional client care</li>
<li><strong>Comprehensive Training:</strong>\xA0Participate in rigorous training sessions spanning diverse topics, embracing a growth-oriented mindset for continuous learning about the industry, our extensive product line, and service offerings</li>
<li><strong>Performance Excellence:</strong>\xA0Attain performance targets established by your Team Lead/Supervisor, aligning with Kraken\u2019s overarching objectives</li>
<li><strong>Crypto Market Expertise:</strong>\xA0Leverage your crypto market knowledge to tackle intricate challenges within a dynamic environment</li>
<li><strong>Ongoing Support:</strong>\xA0Engage in regular one-on-one video sessions and coaching with your Team Lead</li>
</ul>
<h2><strong>Skills you should HODL</strong></h2>
<ul>
<li><strong>Security and Privacy Focus:</strong>\xA0Prioritize security and privacy for Kraken and our clients</li>
<li><strong>Mission-Driven:</strong>\xA0Motivated by Kraken&#8217;s mission and driven to create a seamless support experience for our diverse global client base</li>
<li><strong>Flexibility:</strong>\xA0This is a full-time, 100% remote role, with various schedules and weekends required</li>
<li><strong>Language Proficiency:</strong>\xA0Fluent in English and either Spanish or French</li>
<li><strong>Crypto Proficiency:\xA0</strong>Possess a deep understanding of the digital asset industry and a strong knowledge of cryptocurrencies and trading</li>
<li><strong>Client Support Experience:</strong>\xA0Minimum of 1 year of experience in providing phone support, email, and/or instant messaging support to clients</li>
<li><strong>Effective Communication:</strong>\xA0Excellent communication skills</li>
<li><strong>Adaptability:</strong>\xA0Ability to thrive in a fast-paced environment</li>
</ul>
<h2><strong>Interested so far? Here\u2019s how the hiring process will look</strong></h2>
<ul>
<li>Pre-screen assessment &#8211; around crypto and client support (to be completed in 72 hours)</li>
<li>Video screen with our Talent Acquisition team (30 minutes)</li>
<li>Interview with the team (60 minutes)</li>
<li>Final interview with team managers/directors (60 minutes)</li>
</ul>
<p>Kraken is powered by people from around the world and we celebrate all Krakenites for their diverse talents, backgrounds, contributions and unique perspectives. We hire strictly based on merit, meaning we seek out the candidates with the right abilities, knowledge, and skills considered the most suitable for the job. We encourage you to apply for roles where you don&#8217;t fully meet the listed requirements, especially if you&#8217;re passionate or knowledgable about crypto!</p>`,publishDate:"2024-02-24 08:36:13"},103528:{id:103528,companyName:"Subspace Network",title:"AI Partnerships & Business Development Lead",companyLogo:"https://interstate21.com/job-search-app/Subspace.jpg",reference:"103528-ai-partnerships-business-development-lead",location:"Anywhere",industries:["Business Development"],types:["full-time"],description:`<div class="section page-centered" data-qa="job-description">
<div>We are seeking a\xA0<b>Partnerships and Business Development Lead</b>\xA0to join our globally distributed and rapidly growing team at the forefront of revolutionizing the AI &gt;&lt; Web3 Landscape.</div>
<div></div>
<div>Subspace Labs is an early-stage, venture-backed startup pioneering a new category at the intersection of AI and Web3 as we approach our upcoming network launch. The Subspace Network is a radically decentralized, next-generation layer one blockchain powered by an innovative proof-of-archival storage (PoAS) consensus mechanism. Our project serves as a foundation for global collaboration between humans and AI, ushering in a new era of possibilities. Subspace is based on original research funded by the US National Science Foundation.\xA0 To learn more, visit our\xA0website\xA0and read the\xA0technical whitepaper.</div>
<div></div>
<div>As Partnerships Lead at Subspace,\xA0 you will play a pivotal role in driving our business development and ecosystem growth efforts as we approach our upcoming mainnet launch and announcement of our new AI arm. You will do this by establishing new strategic partnerships and business development opportunities with industry leaders in the AI community ( ie: AI startups, companies, and developer communities) and decentralized technology spaces (ie: Protocols, L1s, DAOs), as well as maintaining pre-established relationships with our existing partners.</div>
<div></div>
<div>As a key member of our leadership team, you will work alongside key stakeholders, namely our CMO, Head of Product, and Ecosystem Lead to ensure a cohesive and compelling marketing and communications strategy. Your ability to balance strategic planning with hands-on execution will be essential to your success in this role.</div>
</div>
<div class="section page-centered">
<div>
<h2>Responsibilities:</h2>
<ul>
<li><b>Partner with Subspace Leadership Team</b>: Work closely with our CMO and Product/ Ecosystem Leads to identify key narratives, disseminate brand messaging and grow market awareness.</li>
<li><b>Establish\xA0</b><i><b>New\xA0</b></i><b>Strategic Partnerships:</b>\xA0Identify, establish and manage strategic partnerships with leading\xA0 AI and web3 teams.</li>
<li><b>Partnership and Collaboration Management:</b>\xA0Oversee collaboration efforts with partners, ensuring joint projects are executed effectively and that mutual benefits are maximized.</li>
<li><b>AI Developer Community Engagement:\xA0</b>Drive user growth and brand awareness within the broader AI Developer Ecosystem.</li>
<li><b>AI Market Analysis &gt; Informed Strategic Proposals :\xA0</b>Stay updated on the latest developments, trends and opportunities in the AI, blockchain and decentralized technology sectors and utilize new data to propose strategy (ie: collaborations, product direction, messaging).</li>
<li><b>Business Development:\xA0</b>Identify and actively pursue new business growth opportunities in AI and web3 industries. These could be new markets, products or services.</li>
<li><b>Events and Networking:\xA0</b>Represent the company at relevant industry events, webinars and conferences, driving brand awareness and networking with potential partners.</li>
<li><b>Negotiation:\xA0</b>Lead negotiations with partners and stakeholders, ensuring agreements are beneficial and in line with the company&#8217;s goals and values.</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Requirements:</h2>
<ul>
<li><b>Travel Flexibility :</b>\xA0Ability to travel to Palo Alto on a monthly basis and general travel flexibility\xA0 to attend industry conferences and other networking events.</li>
<li><b>Established AI Network:\xA0</b>Established network of contacts, ideally in both the AI and web3 spaces.</li>
<li><b>AI Domain Knowledge:\xA0</b>Deep understanding of Agentic AI, Identity, blockchain, and decentralized technologies, along with their applications and implications for various industries.</li>
<li><b>Proven Success, Driving High Impact Partnerships:\xA0</b>Proven success in identifying and building strategic, high impact partnerships, in line with company goals.\xA0Proven ability to negotiate and finalize agreements with partners.</li>
<li><b>Early Stage Startup Experience:</b>\xA0Prior experience bootstrapping or growing an early stage technology startup in our space, ideally as an early hire or founding team member.</li>
<li><b>Presentation Skills:\xA0</b>Excellent presentation skills, with the ability to represent the company to external partners and build brand awareness at industry meetups, conferences and other networking\xA0events.</li>
<li><b>Distributed (Remote) Team Environment:</b>\xA0Strong ability to work in a globally distributed team environment, coordinating with multiple internal stakeholders across various time zones.</li>
</ul>
<h2><b>What We Offer</b></h2>
<ul>
<li>The ability to work from anywhere in the world</li>
<li>A competitive salary with generous equity and token grants</li>
<li>Medical, dental, and vision insurance (US-based only)</li>
<li>A unique opportunity to shape the future of the internet</li>
<li>Team off-sites in various locations around the globe</li>
</ul>
</div>
</div>`,publishDate:"2024-02-24 08:13:21"},103529:{id:103529,companyName:"Lumen Technologies",title:"Lead Talent Management Consultant",companyLogo:"https://interstate21.com/job-search-app/Lumen.jpg",reference:"103529-lead-talent-management-consultant",location:"USA",industries:["HR &amp; Recruiting"],types:["full-time"],description:`<p>Lumen connects the world. We are igniting business growth by connecting people, data and applications \u2013 quickly, securely, and effortlessly. Together, we are building a culture and company from the people up \u2013 committed to teamwork, trust and transparency. People power progress. We\u2019re looking for top-tier talent and offer the flexibility you need to thrive and deliver lasting impact. Join us as we digitally connect the world and shape the future.</p>
<div>
<div>
<div>
<h2><b>The Role</b></h2>
</div>
<div>
<p>Lumen is seeking a talented and motivated individual to join our team as a Talent Management Analyst with a focus on the performance management process and many future growth opportunities.\xA0\xA0 As a part of our organization, you will play a crucial role in designing, implementing, and optimizing our performance management strategies to ensure a high-performing workforce. This position requires a general understanding of talent management practices, analytical skills, and the ability to leverage data to drive business outcomes.</p>
</div>
</div>
<div>
<div>
<h2><b>The Main Responsibilities</b></h2>
</div>
<div>
<p>Here are some of the exciting things you will do as a Talent Management Consultant at Lumen:</p>
<p>1. Execute Performance Management at Lumen: Collaborate with cross-functional teams to deliver an effective performance management process aligned with organizational goals. Analyze existing performance management systems, identify gaps, and continuously improve the process.</p>
<p>2. Performance Data Analysis and Performance Module system support: Partner with HRIS to build out and support performance modules within our HRIS system.\xA0 Utilize data analytics to review and analyze performance-related data such as employee productivity, engagement, and talent potential. Identify trends, patterns, and areas requiring improvement, and provide actionable insights to the management. Use data-driven recommendations to enhance individual and team performance, improve talent development strategies, and optimize overall organizational productivity.</p>
<p>3. Training and Development: Collaborate with HR and learning teams to design and deliver training programs focused on enhancing performance management capabilities for managers and employees. Develop tools, resources, and guides to support effective performance conversations, goal-setting, and feedback processes. Continuously assess the effectiveness of training initiatives and make necessary improvements to ensure maximum impact on employee performance and development.</p>
</div>
</div>
<div>
<div>
<h2><b>What you get from Lumen:</b></h2>
</div>
<div>
<ul>
<li>Awesome talent management experience with much room to grow and progress at Lumen</li>
<li>Work with a great team of fun and engaging professionals</li>
<li>Lots of flexibility in where you work</li>
<li>Access to great resources and tools and flexibility to implement and enhance systems and processes</li>
</ul>
</div>
</div>
<div>
<div>
<h2><b>What We Look For in a Candidate</b></h2>
</div>
<div>
<ul>
<li>Bachelor\u2019s degree in human resources, Business Administration, or a related field. A master&#8217;s degree would be an advantage.</li>
<li>Foundational understanding of talent management and performance management best practices, as well as industry trends.</li>
<li>Proficiency in data analysis, utilizing data visualization tools, and strong Excel skills.</li>
<li>Excellent interpersonal and communication skills to effectively collaborate with various stakeholders and present complex concepts in a clear and concise manner.</li>
<li>A passion to break things, try new things, to make things better, and have a sense of humor when everything doesn\u2019t go as planned.</li>
</ul>
</div>
</div>
<div>
<div>
<h2><b>Compensation</b></h2>
</div>
<div>
<p>The starting salary for this role differs based on the employee&#8217;s primary work location. Employees typically do not start at the top of the range, though compensation depends on each individual&#8217;s qualifications.</p>
<p><u><b>Location Based Pay Ranges</b></u></p>
<p><b>$80510 &#8211; $100635</b>\xA0in these states: AR, ID, KY, LA, ME, MS, NE, SC, and SD.<br />
<b>$84740 &#8211; $105923</b>\xA0in these states: AZ, AL, FL, GA, IN, IA, KS, MO, MT, NM, ND, OH, OK, PA, TN, UT, VT, WV, WI, and WY.<br />
<b>$88980 &#8211; $111218</b>\xA0in these states: CO, HI, MI, MN, NV, NH, NC, OR, and RI.<br />
<b>$93210 &#8211; $116513</b>\xA0in these states: AK, CA, CT, DE, DC, IL, MD, MA, NJ, NY, TX, VA, and WA.</p>
<p>As with the pay range variety that&#8217;s based on the region of a country, specific offers are determined by various factors such as experience, education, skills, certifications and other business needs.</p>
<h2><b>Background Screening</b></h2>
<p>If you are selected for a position, there will be a background screen, which may include checks for criminal records and/or motor vehicle reports and/or drug screening, depending on the position requirements. For more information on these checks, please refer to the Post Offer section of our\xA0FAQ page. Job-related concerns identified during the background screening may disqualify you from the new position or your current role. Background results will be evaluated on a case-by-case basis.<br />
Pursuant to the San Francisco Fair Chance Ordinance, we will consider for employment qualified applicants with arrest and conviction records.</p>
</div>
</div>
</div>`,publishDate:"2024-02-24 08:19:52"},103530:{id:103530,companyName:"Sonatype",title:"Senior Technical Support Engineer",companyLogo:"https://interstate21.com/job-search-app/Sonatype.jpg",reference:"103530-senior-technical-support-engineer",location:"Australia",industries:["Technical Support"],types:["full-time"],description:`<div class="section page-centered" data-qa="job-description">
<div>Sonatype is the software supply chain management company. We&#8217;re on a mission to change how the world innovates by making software development easier. From running the world&#8217;s largest repository of Java open-source components (Maven Central) to inventing componentized software development and then software supply chain management to creating the only solution that stops malicious open-source malware in its tracks, we&#8217;re constantly leading the industry while helping thousands of customers manage open source every day.</div>
<div></div>
<div>Already used by 15 million developers, we have lofty goals for our technology to be in the hands of every engineering team. And we need you to do that.</div>
<div></div>
<div>At Sonatype we take a different approach to product support. Our worldwide team consists of talented technical contributors who see product support as an engineering challenge. We write code which lets us quickly replicate customer environments, analyze data from customer systems to pinpoint problems, replicate issues from recorded activity, and more. Our team members work directly with development teams, sales, and customer success to ensure the best possible customer experience. There are lots of interesting technical challenges to solve every day, and many opportunities to learn new skills and technologies. Does this sound interesting? Great, we\u2019re hiring now!</div>
<div></div>
<div>In this role you will provide advanced product support to customers dealing with complex issues surrounding the use of Sonatype products and solutions and the many environments they run in. Our Senior Technical Support Engineers have a long-term career path that enables them to grow into Principal Engineer and Support Manager roles.</div>
</div>
<div class="section page-centered">
<div>
<h2>What You&#8217;ll Do</h2>
<ul>
<li>Debug, and troubleshoot incidents with Sonatype products and solutions</li>
<li>Reproduce defects and file actionable issues for product engineering Replicate customer deployment environments for testing (docker, AWS, Azure, Kubernetes, and more)</li>
<li>Mentor less experienced support engineers. Represent Technical Support and customer interests in Engineering and Product Management discussions</li>
<li>Assist product management in developing and prioritizing enhancement lists. Summarize, communicate, and escalate customer experiences to management. Contribute to and maintain our Knowledge Base</li>
<li>Contribute to our diagnostic tools and utilities, and create new ones</li>
<li>Respond to customer inquiries via support cases, email, chat, and phone</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Who You Are</h2>
<ul>
<li>5+ years experience supporting complex enterprise software solutions</li>
<li>Ability to read and understand Java code.</li>
<li>Experience with testing and/or development of Java based web applications.</li>
<li>Experience with SQL databases (PostgreSQL is a plus)</li>
<li>Good Linux command line skills</li>
<li>Experience with networking (Sockets, HTTP, LDAP, proxies/firewalls, SSL)</li>
<li>Experience with scripting languages (Python, Bash, Groovy, etc.)</li>
<li>Exceptional communication skills &#8211; written and verbal</li>
<li>Experience with 1 or more application servers (e.g. Tomcat, Apache, IIS, NGINX etc.)</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Preferred NOT Required</h2>
<ul>
<li>SCM and CI/CD and associated tools (Jenkins, Bamboo, etc.)</li>
<li>Debugging certificate-based mutual TLS and SSL authentication</li>
<li>Experience analyzing network traces using tools such as wireshark or tcpdump</li>
<li>Component management build tools (Ant, Maven, npm, NuGet etc.)Container technologies (Docker, Kubernetes, etc.)SQL and databases (H2 and Postgres in particular)Sonatype, jFrog, Snyk, Whitesource or similar products</li>
<li>Software development (JAVA in particular)LDAP and SAMLDeployment/Configuration of Cloud platforms such AWS, Azure and GCP</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Things We&#8217;re Proud Of</h2>
<ul>
<li>2023 Fast Company Best Places for Innovators</li>
<li>2023 Leader in Forrester-Wave for Software Compensation Analysis</li>
<li>2023 Gartner&#8217;s Magic Quadrant</li>
<li>2023 Software Report&#8217;s Top 100 Software Companies</li>
<li>2023 BuiltIn Best Places to Work</li>
<li>2022 Frost &amp; Sullivan Technology Innovation Leader Award</li>
<li>2022 PeerSpot Silver Peer Award in Software Composition Analysis</li>
<li>2022 Tech Ascension Best DevOps Security Solution Award</li>
<li>2022 NVCT Cyber Company of the Year</li>
<li>Company Wellness Week &#8211; We shut down company operations for a week to enable all employees to spend time pursuing personal growth and enjoying much needed and deserved rest.</li>
<li>Diversity &amp; Inclusion Working Groups</li>
<li>Parental Leave Policy</li>
<li>Paid Volunteer Time Off (VTO)</li>
</ul>
</div>
</div>`,publishDate:"2024-02-24 08:22:27"},103531:{id:103531,companyName:"Hopper",title:"Finance and Strategy Senior Analyst",companyLogo:"https://interstate21.com/job-search-app/Hopper.jpg",reference:"103531-finance-and-strategy-senior-analyst",location:"Spain",industries:["Finance &amp; Legal"],types:["full-time"],description:`<div class="section page-centered" data-qa="job-description">
<div>As a Finance and Strategy Analyst, your day-to-day job will be to help our business leaders make sound business and financial decisions.\xA0You will need to have a deep understanding of our customers and business drivers, allowing you to help steer Hopper\u2019s growth and product strategy.</div>
<div></div>
<div>To succeed in this role, you need to be able to understand the big picture, while also being unafraid to dive into the details and numbers. You also need to understand SQL and have experience with data visualization tools.</div>
</div>
<div class="section page-centered">
<div>
<h2>What would your day-to-day look like:</h2>
<ul>
<li>Give weekly brief on company performance, assessing growth and addressing problem areas</li>
<li>Help business leaders make better strategic decisions by enabling them through data and deep understanding of financial trade-offs, across both our B2B and B2C product organizations</li>
<li>Create, update and maintain financial models, budgets and forecasts</li>
<li>Build out business reporting metrics and dashboards</li>
<li>Prepare internal reports for business leaders to support decision making</li>
<li>Perform analysis of financial and operational drivers to craft our short and long term strategic plan</li>
<li>Work on finance related optimization initiatives</li>
<li>Collaborate with multiple areas of the business to accurately reflect recent trends in all modeling and financial reporting</li>
<li>Automate reporting and build insights using SQL / Big Query</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>An ideal candidate has:</h2>
<ul>
<li>A degree in Business, Strategy, Finance, Math, Statistics, Economics, or other quantitative discipline</li>
<li>3-5 years of experience in a top tier tech company, consulting firm, or venture capital firm</li>
<li>Entrepreneurial spirit, ability to work autonomously</li>
<li>Technology industry experience is a strong plus</li>
<li>Experience working in FP&amp;A or strategic finance</li>
<li>Strong analytical and creative problem-solving skills, with strong modeling experience</li>
<li>Very comfortable working in SQL, expertise is a plus</li>
<li>Microsoft Office/Google Suite proficiency</li>
<li>Enthusiasm and curiosity for conducting research and answering hard questions with data</li>
</ul>
</div>
</div>
<div class="section page-centered">
<div>
<h2>Perks and benefits of working with us:</h2>
<ul>
<li>Well-funded and proven startup with large ambitions, competitive salary and stock options</li>
<li>Unlimited PTO</li>
<li>Hopper covers the cost of employee premiums for private medical and dental coverage via Cigna</li>
<li>Wellness &amp; Telework &#8211; Hopper offers a monthly cash allowances for both</li>
<li>Carrot Cash travel stipend</li>
<li>Flexport All Access Pass OR Work-from-home stipend</li>
<li>Entrepreneurial culture where pushing limits and taking risks is everyday business</li>
<li>Open communication with management and company leadership</li>
<li>Small, dynamic teams = massive impact</li>
</ul>
</div>
</div>
<div class="section page-centered" data-qa="closing-description">
<h2><b>More about Hopper</b></h2>
<div>At Hopper, we are on a mission to become the leading travel platform globally \u2013 powering Hopper\u2019s mobile app, website and our B2B business, HTS (Hopper Technology Solutions). By leveraging massive amounts of data and advanced machine learning algorithms, Hopper combines its world-class travel agency offering with proprietary fintech products to bring transparency, flexibility and savings to travelers globally. We have developed several unique fintech solutions that address everything from pricing volatility to trip disruptions \u2013 helping people travel better and save more on their trips.</div>
<div></div>
<div>The Hopper platform serves hundreds of millions of travelers globally and continues to capture market share around the world. Ranked the third largest online travel agency in North America, the Hopper app has been downloaded over 120 million times and has become largely popular among younger travelers \u2013 with 70% of its users being Gen Z and millennials.</div>
<div></div>
<div>While everyone knows us as the Gen Z and Millennial travel app, Hopper has evolved to become much more than that. In recent years, we\u2019ve grown into a global travel agency and travel fintech provider that powers some of the world\u2019s largest brands.</div>
<div></div>
<div>Through\xA0HTS, our B2B division, the company supercharges its partners\u2019 direct channels by integrating our fintech products on their sites or powering end-to-end travel portals. Today, our partners include leading travel brands like Capital One, Nubank, Air Canada and many more.</div>
</div>`,publishDate:"2024-02-24 08:26:24"},103532:{id:103532,companyName:"Webflow",title:"Technical Support Associate",companyLogo:"https://interstate21.com/job-search-app/Webflow.jpg",reference:"103532-technical-support-associate",location:"Australia,  New Zealand",industries:["Technical Support"],types:["full-time"],description:`<p>At Webflow, our mission is to bring development superpowers to everyone. Webflow is the leading visual development platform for building powerful websites without writing code. By combining modern web development technologies into one platform, Webflow enables people to build websites visually, saving engineering time, while clean code seamlessly generates in the background. From independent designers and creative agencies to Fortune 500 companies, millions worldwide use Webflow to be more nimble, creative, and collaborative. It\u2019s the web, made better.</p>
<p>We\u2019re looking for a Technical Support Associate to help empower our customers to do their best work and make Webflow the best product possible. Candidates can work\xA0<strong>either Weekdays (Mon &#8211;\xA0 Fri) or Weekends (Wed &#8211; Sun).</strong></p>
<h2><strong>About the role\xA0</strong></h2>
<ul>
<li><strong>Location: Australia/New Zealand</strong></li>
<li>Required time zones: APAC (Australia/New Zealand)</li>
<li>Type: Full Time</li>
<li>The cash compensation for this role is tailored to align with the cost of labor in different geographic markets. The base pay for this role ranges from AUD 97,300 &#8211; 105,000 for candidates based in Australia &amp; NZD 75,000 &#8211; 86,200 for candidates based in New Zealand. The specific base pay within the range will be determined by the candidate\u2019s geographic location, job-related experience, knowledge, qualifications, and skills.</li>
<li>Reporting<strong>\xA0</strong>to the Manager or Senior Manager of Customer Support</li>
<li>Application Deadline: Wednesday, March 13, 2024</li>
</ul>
<p>As a Technical Support Associate, you\u2019ll \u2026</p>
<ul>
<li>Provide consistently high-quality customer experiences for all Webflow customers</li>
<li>Help customers in support queues using applications including but not limited to Zendesk and Jira</li>
<li>File bugs, troubleshoot product issues, and collaborate with the team to provide an excellent customer experience</li>
<li>Advocate for our customers and work closely with your team and manager to find areas of improvement within our product and services.</li>
</ul>
<p>In addition to the responsibilities outlined above, at Webflow we will support you in identifying where your interests and development opportunities lie and we&#8217;ll help you incorporate them into your role.</p>
<h2><strong>About you\xA0</strong></h2>
<p>You\u2019ll thrive as a Technical Support Associate if you:</p>
<ul>
<li>Have demonstrated experience with providing high-touch customer support over email, phones and live chat in SAAS or technical customer service</li>
<li>Possess a deep understanding of Webflow products or have experience with other web design tools or platforms</li>
<li>Understand HTML, CSS, DNS or have advanced understanding of Webflow</li>
<li>Exhibit analytical reasoning and critical thinking skills for technical troubleshooting</li>
<li>Have the ability to learn new digital tools quickly</li>
<li>Work autonomously, creatively, and kindly with your teammates while empowering and supporting those around you</li>
<li>Practice radical candor with your colleagues to communicate clearly. You can start from the common ground as a great listener and work towards creative solutions with others</li>
<li>Advocate for others \u2013 including customers and colleagues \u2013 and you want to build a career in customer support!</li>
<li>Have demonstrated written and verbal communication skills in the English language</li>
</ul>
<p>Even if you don\u2019t meet 100% of the above qualifications, you should still seriously consider applying. Research shows that you may still be considered for a role if you meet just half of the requirements.</p>
<h2><strong>Our Core Behaviors:</strong><strong><br />
</strong></h2>
<ul>
<li><strong>Obsess over customer experience.</strong>\xA0We deeply understand\xA0<em>what</em>\xA0we\u2019re building and\xA0<em>who</em>\xA0we\u2019re building for and serving. We define the leading edge of what\u2019s possible in our industry and deliver the future for our customers.</li>
<li><strong>Move with heartfelt urgency.</strong>\xA0We have a healthy relationship with impatience, channeling it thoughtfully to show up better and faster for our customers and for each other. Time is the most limited thing we have, and we make the most of every moment.</li>
<li><strong>Say the hard thing with care.</strong>\xA0Our best work often comes from intelligent debate, critique, and even difficult conversations. We speak our minds and don\u2019t sugarcoat things \u2014 and we do so with respect, maturity, and care.</li>
<li><strong>Make your mark.</strong>\xA0We seek out new and unique ways to create meaningful impact, and we champion the same from our colleagues. We work as a\xA0<em>team</em>\xA0to get the job done, and we go out of our way to celebrate and reward those going above and beyond for our customers and our teammates.</li>
</ul>
<h2><strong>Benefits &amp; Wellness</strong></h2>
<p>Webflow has partnered with Remote.com to select and offer competitive country-specific\xA0benefits packages. Due to varying local packages and requirements, benefits globally do\xA0not necessarily mirror one another, but Webflow follows the practice of selecting premium\xA0benefits and covering the cost of team members and their dependent deduction costs.\xA0Perks and incentives are offered to benefits-eligible team members and any differences\xA0would occur if there are country-specific or compliance-related regulations.<em>.</em></p>
<h2><strong>Be you, with us</strong></h2>
<p>At Webflow, equality is a core tenet of our culture. We are\xA0committed\xA0to building an inclusive global team that represents a variety of backgrounds, perspectives, beliefs, and experiences. Employment decisions are made on the basis of job-related criteria without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, veteran status, or any other classification protected by applicable law.</p>
<h2><strong>Stay connected</strong></h2>
<p>Not ready to apply, but want to be part of the Webflow community? Consider following our story on our Webflow Blog, LinkedIn, Twitter, and/or Glassdoor.</p>
<h2><strong>Please note:</strong></h2>
<p><em>To join Webflow, you&#8217;ll need valid work authorization depending on the country of employment.</em></p>
<p><em>If you are extended an offer, that offer may be contingent upon your successful completion of a background check, which will be conducted in accordance with applicable laws. We may obtain one or more background screening reports about you, solely for employment purposes.</em></p>`,publishDate:"2024-02-24 08:28:17"},103533:{id:103533,companyName:"Twilio",title:"Sales Support Representative",companyLogo:"https://interstate21.com/job-search-app/Twilio.jpg",reference:"103533-sales-support-representative-3",location:"UK",industries:["Sales"],types:["full-time"],description:`<p>Twilio is looking for a Sales Support Representative to join the Strategic Sales team. We\u2019re looking for an intelligent, ambitious and talented individual who is keen to understand more about how large businesses operate; this role will provide insights on and windows into many aspects of Twilio\u2019s sales motion as well as supporting the Sales reps with day to day activities.</p>
<h2><strong>Responsibilities</strong></h2>
<p>This role will see you supporting the Strategic Account Executives to be more efficient in hitting quota.</p>
<ul>
<li>This individual is \u2018the glue\u2019 between many different functions within the organization.</li>
<li>Assisting Account Executives with numerous activities and processes along the entire sales cycle.</li>
<li>Prepare Pricing and Deal Structure, use and master internal pricing tools.</li>
<li>Engage with client stakeholders to ensure Proposal Bill Of Materials (OFs) are correct.</li>
<li>Work with internal stakeholders to ensure all aspects throughout the sales process are smooth (Deal Desk, Contracts, Legal, Pre-Sales, Security requests) and to ensure the BOM and Contracts are accurate. You will deal with people, data sets and processes.</li>
<li>Manage prioritization of key deals with Sales Management.</li>
<li>Update / Oversee CRM records of accounts</li>
<li>Support AEs to understand customers current usage and improvement opportunities (Monkey\xA0 Analytics for existing customers)</li>
<li>Support the AEs with administrative tasks linked to billing, invoicing and support.</li>
</ul>
<h2><strong>Qualifications\xA0</strong></h2>
<p>Not all applicants will have skills that match a job description exactly. Twilio values diverse experiences in other industries, and we encourage everyone who meets the required qualifications to apply. While having \u201Cdesired\u201D qualifications make for a strong candidate, we encourage applicants with alternative experiences to also apply. If your career is just starting or hasn&#8217;t followed a traditional path, don&#8217;t let that stop you from considering Twilio. We are always looking for people who will bring something new to the table!</p>
<h2><strong>Required:</strong></h2>
<ul>
<li>Highly communicative and can work in a team to support the wider goals of the sales function.</li>
<li>Experience working with G Drive and fluent in Google Docs, Google Sheets and Salesforce.</li>
<li>You don\u2019t need to have experience in a sales role, indeed this role has allowed previously individuals to pursue roles in Twilio in data analytics, sales or marketing however a desire to move into sales eventually is preferred.</li>
<li>Organizational skills are important and the ability to work in a fast paced environment. This is not a quota carrying role.</li>
</ul>
<p><strong>Fluent in English. Additional languages are a plus particularly German, French or Spanish.</strong></p>
<h2><strong>Location</strong></h2>
<p>This position is based remotely from the United Kingdom.</p>
<h2><strong>Travel\xA0</strong></h2>
<p>We prioritize connection and opportunities to build relationships with our customers and each other. For this role, approximately 20% travel is anticipated to help you connect in-person in a meaningful way.</p>
<h2><strong>What We Offer</strong></h2>
<p>There are many benefits to working at Twilio, including, in addition to competitive pay, things like generous time-off, ample parental and wellness leave, healthcare, a retirement savings program, and much more. Offerings vary by location.</p>
<h2><strong>Twilio thinks big. Do you?</strong></h2>
<p>We like to solve problems, take initiative, pitch in when needed, and are always up for trying new things. That&#8217;s why we seek out colleagues who embody our values \u2014 something we call\xA0Twilio Magic. Additionally, we empower employees to build\xA0positive change in their communities\xA0by supporting their volunteering and donation efforts.</p>
<p>So, if you&#8217;re ready to unleash your full potential, do your best work, and be the best version of yourself, apply now!</p>
<p><strong>Twilio is proud to be an equal opportunity employer.</strong></p>
<p>Twilio is proud to be an Equal Employment Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sex (including pregnancy, childbirth, reproductive health decisions, or related medical conditions), sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, genetic information, political views or activity, or other applicable legally protected characteristics. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law. Additionally, Twilio participates in the E-Verify program in certain locations, as required by law.</p>`,publishDate:"2024-02-24 08:30:27"}},ri=[{id:98596,companyName:"Kraken",title:"Live Support Specialist - Mexico",companyLogo:"https://interstate21.com/job-search-app/Kraken.png",reference:"98596-live-support-specialist-mexico"},{id:75278,companyName:"Scroll.io",title:"People Operations Manager (Chinese / English)",companyLogo:"https://interstate21.com/job-search-app/scroll-io.jpg",reference:"75278-people-operations-specialist-chinese-and-english"},{id:98595,companyName:"Subspace Network",title:"Head of Product",companyLogo:"https://interstate21.com/job-search-app/Subspace.jpg",reference:"98595-head-of-product-6"},{id:80831,companyName:"SmartLogic",title:"Software Developer",companyLogo:"https://interstate21.com/job-search-app/SmartLogic.jpg",reference:"80831-software-developer-10"},{id:91478,companyName:"Anonos",title:"Product Content Marketer (f/m/d)",companyLogo:"https://interstate21.com/job-search-app/Anonos.jpg",reference:"91478-product-content-marketer-f-m-d"},{id:94525,companyName:"ServiceNow",title:"Sr. Public Sector Account Executive - SLED",companyLogo:"https://interstate21.com/job-search-app/ServiceNow.png",reference:"94525-sr-enterprise-account-executive-telco-media"},{id:103533,companyName:"Twilio",title:"Sales Support Representative",companyLogo:"https://interstate21.com/job-search-app/Twilio.jpg",reference:"103533-sales-support-representative-3"},{id:103532,companyName:"Webflow",title:"Technical Support Associate",companyLogo:"https://interstate21.com/job-search-app/Webflow.jpg",reference:"103532-technical-support-associate"},{id:103531,companyName:"Hopper",title:"Finance and Strategy Senior Analyst",companyLogo:"https://interstate21.com/job-search-app/Hopper.jpg",reference:"103531-finance-and-strategy-senior-analyst"},{id:94536,companyName:"DuckDuckGo",title:"Principal Site Reliability Engineer",companyLogo:"https://interstate21.com/job-search-app/DuckDuckGo.png",reference:"94536-principal-site-reliability-engineer"},{id:103530,companyName:"Sonatype",title:"Senior Technical Support Engineer",companyLogo:"https://interstate21.com/job-search-app/Sonatype.jpg",reference:"103530-senior-technical-support-engineer"},{id:103529,companyName:"Lumen Technologies",title:"Lead Talent Management Consultant",companyLogo:"https://interstate21.com/job-search-app/Lumen.jpg",reference:"103529-lead-talent-management-consultant"},{id:96513,companyName:"Luxury Presence",title:"Sr. Backend Engineer - Canada",companyLogo:"https://interstate21.com/job-search-app/Luxury.jpg",reference:"96513-sr-software-engineer-latam"},{id:96515,companyName:"Twitch",title:"Director - Communications",companyLogo:"https://interstate21.com/job-search-app/Twitch.jpg",reference:"96515-director-communications"},{id:103528,companyName:"Subspace Network",title:"AI Partnerships & Business Development Lead",companyLogo:"https://interstate21.com/job-search-app/Subspace.jpg",reference:"103528-ai-partnerships-business-development-lead"}],Gt=[oe.get("/jobs/:id",({params:e})=>e.id in $t?H.json($t[e.id]):new H("",{status:404})),oe.get("/jobs",({request:e,params:t,cookies:n})=>H.json(ri))];bt(...Gt).start().then(()=>Pe(We,Ie)).catch(e=>console.error(e));
