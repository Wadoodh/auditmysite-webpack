(()=>{var e={79:e=>{e.exports=function(e){if("string"!=typeof e)return!1;var o=e.match(t);if(!o)return!1;var s=o[1];return!!s&&!(!n.test(s)&&!r.test(s))};var t=/^(?:\w+:)?\/\/(\S+)$/,n=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,r=/^[^\s\.]+\.\S{2,}$/}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t){return function(){return e.apply(t,arguments)}}const{toString:t}=Object.prototype,{getPrototypeOf:r}=Object,o=(s=Object.create(null),e=>{const n=t.call(e);return s[n]||(s[n]=n.slice(8,-1).toLowerCase())});var s;const i=e=>(e=e.toLowerCase(),t=>o(t)===e),a=e=>t=>typeof t===e,{isArray:c}=Array,l=a("undefined"),u=i("ArrayBuffer"),d=a("string"),f=a("function"),h=a("number"),p=e=>null!==e&&"object"==typeof e,m=e=>{if("object"!==o(e))return!1;const t=r(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=i("Date"),y=i("File"),w=i("Blob"),g=i("FileList"),E=i("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),c(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,R=e=>!l(e)&&e!==v,A=(I="undefined"!=typeof Uint8Array&&r(Uint8Array),e=>I&&e instanceof I);var I;const x=i("HTMLFormElement"),T=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),k=i("RegExp"),C=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},j="abcdefghijklmnopqrstuvwxyz",N="0123456789",P={DIGIT:N,ALPHA:j,ALPHA_DIGIT:j+j.toUpperCase()+N},B={isArray:c,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&f(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const n="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||t.call(e)===n||f(e.toString)&&e.toString()===n)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t},isString:d,isNumber:h,isBoolean:e=>!0===e||!1===e,isObject:p,isPlainObject:m,isUndefined:l,isDate:b,isFile:y,isBlob:w,isRegExp:k,isFunction:f,isStream:e=>p(e)&&f(e.pipe),isURLSearchParams:E,isTypedArray:A,isFileList:g,forEach:S,merge:function e(){const{caseless:t}=R(this)&&this||{},n={},r=(r,o)=>{const s=t&&O(n,o)||o;m(n[s])&&m(r)?n[s]=e(n[s],r):m(r)?n[s]=e({},r):c(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(t,n,r,{allOwnKeys:o}={})=>(S(n,((n,o)=>{r&&f(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,o)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&r(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:i,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(c(e))return e;let t=e.length;if(!h(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:x,hasOwnProperty:T,hasOwnProp:T,reduceDescriptors:C,freezeMethods:e=>{C(e,((t,n)=>{if(f(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];f(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return c(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:O,global:v,isContextDefined:R,ALPHABET:P,generateString:(e=16,t=P.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&f(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(p(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=c(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!l(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)}};function L(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}B.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _=L.prototype,U={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{U[e]={value:e}})),Object.defineProperties(L,U),Object.defineProperty(_,"isAxiosError",{value:!0}),L.from=(e,t,n,r,o,s)=>{const i=Object.create(_);return B.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),L.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const F=L;function D(e){return B.isPlainObject(e)||B.isArray(e)}function q(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function z(e,t,n){return e?e.concat(t).map((function(e,t){return e=q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const M=B.toFlatObject(B,{},null,(function(e){return/^is[A-Z]/.test(e)})),H=function(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!B.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(B.isDate(e))return e.toISOString();if(!a&&B.isBlob(e))throw new F("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(e)||B.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(B.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(B.isArray(e)&&function(e){return B.isArray(e)&&!e.some(D)}(e)||(B.isFileList(e)||B.endsWith(n,"[]"))&&(a=B.toArray(e)))return n=q(n),a.forEach((function(e,r){!B.isUndefined(e)&&null!==e&&t.append(!0===i?z([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!D(e)||(t.append(z(o,n,s),c(e)),!1)}const u=[],d=Object.assign(M,{defaultVisitor:l,convertValue:c,isVisitable:D});if(!B.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!B.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),B.forEach(n,(function(n,s){!0===(!(B.isUndefined(n)||null===n)&&o.call(t,n,B.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function J(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function W(e,t){this._pairs=[],e&&H(e,this,t)}const K=W.prototype;K.append=function(e,t){this._pairs.push([e,t])},K.toString=function(e){const t=e?function(t){return e.call(this,t,J)}:J;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const V=W;function G(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(e,t,n){if(!t)return e;const r=n&&n.encode||G,o=n&&n.serialize;let s;if(s=o?o(t,n):B.isURLSearchParams(t)?t.toString():new V(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const Q=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){B.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:V,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},ee=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&B.isArray(r)?r.length:s,a?(B.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&B.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&B.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,((e,r)=>{t(function(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},te={"Content-Type":void 0},ne={transitional:Z,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=B.isObject(e);if(o&&B.isHTMLForm(e)&&(e=new FormData(e)),B.isFormData(e))return r&&r?JSON.stringify(ee(e)):e;if(B.isArrayBuffer(e)||B.isBuffer(e)||B.isStream(e)||B.isFile(e)||B.isBlob(e))return e;if(B.isArrayBufferView(e))return e.buffer;if(B.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return H(e,new Y.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Y.isNode&&B.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=B.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return H(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(B.isString(e))try{return(0,JSON.parse)(e),B.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ne.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&B.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw F.from(e,F.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],(function(e){ne.headers[e]={}})),B.forEach(["post","put","patch"],(function(e){ne.headers[e]=B.merge(te)}));const re=ne,oe=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),se=Symbol("internals");function ie(e){return e&&String(e).trim().toLowerCase()}function ae(e){return!1===e||null==e?e:B.isArray(e)?e.map(ae):String(e)}function ce(e,t,n,r,o){return B.isFunction(r)?r.call(this,t,n):(o&&(t=n),B.isString(t)?B.isString(r)?-1!==t.indexOf(r):B.isRegExp(r)?r.test(t):void 0:void 0)}class le{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ie(t);if(!o)throw new Error("header name must be a non-empty string");const s=B.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ae(e))}const s=(e,t)=>B.forEach(e,((e,n)=>o(e,n,t)));return B.isPlainObject(e)||e instanceof this.constructor?s(e,t):B.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&oe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ie(e)){const n=B.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(B.isFunction(t))return t.call(this,e,n);if(B.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ie(e)){const n=B.findKey(this,e);return!(!n||void 0===this[n]||t&&!ce(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ie(e)){const o=B.findKey(n,e);!o||t&&!ce(0,n[o],o,t)||(delete n[o],r=!0)}}return B.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ce(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return B.forEach(this,((r,o)=>{const s=B.findKey(n,o);if(s)return t[s]=ae(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ae(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return B.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&B.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[se]=this[se]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ie(e);t[r]||(function(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return B.isArray(e)?e.forEach(r):r(e),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),B.freezeMethods(le.prototype),B.freezeMethods(le);const ue=le;function de(e,t){const n=this||re,r=t||n,o=ue.from(r.headers);let s=r.data;return B.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function fe(e){return!(!e||!e.__CANCEL__)}function he(e,t,n){F.call(this,null==e?"canceled":e,F.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(he,F,{__CANCEL__:!0});const pe=he,me=Y.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),B.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),B.isString(r)&&i.push("path="+r),B.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function be(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ye=Y.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=B.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function we(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const ge={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ue.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}B.isFormData(r)&&(Y.isStandardBrowserEnv||Y.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=be(e.baseURL,e.url);function u(){if(!c)return;const r=ue.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),X(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new F("Request aborted",F.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new F("Network Error",F.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new F(t,r.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,c)),c=null},Y.isStandardBrowserEnv){const t=(e.withCredentials||ye(l))&&e.xsrfCookieName&&me.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&B.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),B.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",we(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new pe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);d&&-1===Y.protocols.indexOf(d)?n(new F("Unsupported protocol "+d+":",F.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};B.forEach(ge,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function Ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pe(null,e)}function Se(e){return Ee(e),e.headers=ue.from(e.headers),e.data=de.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=B.isString(n)?ge[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new F(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(B.hasOwnProp(ge,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!B.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||re.adapter)(e).then((function(t){return Ee(e),t.data=de.call(e,e.transformResponse,t),t.headers=ue.from(t.headers),t}),(function(t){return fe(t)||(Ee(e),t&&t.response&&(t.response.data=de.call(e,e.transformResponse,t.response),t.response.headers=ue.from(t.response.headers))),Promise.reject(t)}))}const Oe=e=>e instanceof ue?e.toJSON():e;function ve(e,t){t=t||{};const n={};function r(e,t,n){return B.isPlainObject(e)&&B.isPlainObject(t)?B.merge.call({caseless:n},e,t):B.isPlainObject(t)?B.merge({},t):B.isArray(t)?t.slice():t}function o(e,t,n){return B.isUndefined(t)?B.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!B.isUndefined(t))return r(void 0,t)}function i(e,t){return B.isUndefined(t)?B.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Oe(e),Oe(t),!0)};return B.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);B.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Re={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Re[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ae={};Re.transitional=function(e,t,n){function r(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new F(r(o," has been removed"+(t?" in "+t:"")),F.ERR_DEPRECATED);return t&&!Ae[o]&&(Ae[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const Ie={assertOptions:function(e,t,n){if("object"!=typeof e)throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new F("option "+s+" must be "+n,F.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new F("Unknown option "+s,F.ERR_BAD_OPTION)}},validators:Re},xe=Ie.validators;class Te{constructor(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ve(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Ie.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),null!=r&&(B.isFunction(r)?t.paramsSerializer={serialize:r}:Ie.assertOptions(r,{encode:xe.function,serialize:xe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&B.merge(o.common,o[t.method]),s&&B.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ue.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Se.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=i.length;let f=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Se.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return X(be((e=ve(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}B.forEach(["delete","get","head","options"],(function(e){Te.prototype[e]=function(t,n){return this.request(ve(n||{},{method:e,url:t,data:(n||{}).data}))}})),B.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(ve(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Te.prototype[e]=t(),Te.prototype[e+"Form"]=t(!0)}));const ke=Te;class Ce{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new pe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ce((function(t){e=t})),cancel:e}}}const je=Ce,Ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ne).forEach((([e,t])=>{Ne[t]=e}));const Pe=Ne,Be=function t(n){const r=new ke(n),o=e(ke.prototype.request,r);return B.extend(o,ke.prototype,r,{allOwnKeys:!0}),B.extend(o,r,null,{allOwnKeys:!0}),o.create=function(e){return t(ve(n,e))},o}(re);Be.Axios=ke,Be.CanceledError=pe,Be.CancelToken=je,Be.isCancel=fe,Be.VERSION="1.3.5",Be.toFormData=H,Be.AxiosError=F,Be.Cancel=Be.CanceledError,Be.all=function(e){return Promise.all(e)},Be.spread=function(e){return function(t){return e.apply(null,t)}},Be.isAxiosError=function(e){return B.isObject(e)&&!0===e.isAxiosError},Be.mergeConfig=ve,Be.AxiosHeaders=ue,Be.formToJSON=e=>ee(B.isHTMLForm(e)?new FormData(e):e),Be.HttpStatusCode=Pe,Be.default=Be;const Le=Be;function _e(e,t){let n=[];const r={};function o(e,t){const n=e.findIndex((e=>e.id===t.id));return-1!==n?e[n]=t.score<e[n].score?t:e[n]:e.push(t),e}e.forEach((e=>{e.matchedAudits.forEach((e=>{e.score>=.9||o(n,e)}))})),t.forEach((e=>{e.matchedAudits.forEach((e=>{e.score>=.9||o(n,e)}))})),n.forEach((e=>{const t=e.belongsToAuditCategory.weight;r.hasOwnProperty(t)||(r[t]=[]),r[t].push(e)}));const s=Object.entries(r);return s.sort(((e,t)=>t[0]-e[0])),s.forEach((e=>{e.forEach((e=>{"object"==typeof e&&e.sort(((e,t)=>e.score-t.score))}))})),s}function Ue(e){const{lighthouseResult:{audits:t,categories:{performance:n}}}=e;let r=[];return n.auditRefs.forEach((e=>{e.hasOwnProperty("relevantAudits")&&(e.matchedAudits=[],r.push(e))})),r.forEach((e=>{e.relevantAudits.forEach((n=>{null!==t[n].score&&(t[n].belongsToAuditCategory={acronym:e.acronym,id:e.id,weight:e.weight},e.matchedAudits.push(t[n]))}))})),r.sort(((e,t)=>t.weight-e.weight)),r.forEach((e=>e.matchedAudits.sort(((e,t)=>e.score-t.score)))),r}function Fe(e){return e.reduce(((e,t)=>(e.push({[t[0]]:t[1]}),e)),[])}const De={"long-tasks":{showItems:!0,showSubItems:!1},"third-party-summary":{showItems:!0,showSubItems:!1},"third-party-facades":{showItems:!0,showSubItems:!1},"bootup-time":{showItems:!0,showSubItems:!1},"mainthread-work-breakdown":{showItems:!0,showSubItems:!1},"dom-size":{showItems:!0,showSubItems:!1},"duplicated-javascript":{showItems:!0,showSubItems:!1},"legacy-javascript":{showItems:!0,showSubItems:!1},viewport:{showItems:!0,showSubItems:!1},"server-response-time":{showItems:!0,showSubItems:!1},"render-blocking-resources":{showItems:!0,showSubItems:!1},redirects:{showItems:!0,showSubItems:!1},"critical-request-chains":{showItems:!0,showSubItems:!1},"uses-text-compression":{showItems:!0,showSubItems:!1},"uses-rel-preconnect":{showItems:!0,showSubItems:!1},"uses-rel-preload":{showItems:!0,showSubItems:!1},"font-display":{showItems:!0,showSubItems:!1},"unminified-javascript":{showItems:!0,showSubItems:!1},"unminified-css":{showItems:!0,showSubItems:!1},"unused-css-rules":{showItems:!0,showSubItems:!1},"largest-contentful-paint-element":{showItems:!0,showSubItems:!1},"prioritize-lcp-image":{showItems:!0,showSubItems:!1},"unused-javascript":{showItems:!0,showSubItems:!1},"efficient-animated-content":{showItems:!0,showSubItems:!1},"total-byte-weight":{showItems:!0,showSubItems:!1},"lcp-lazy-loaded":{showItems:!0,showSubItems:!1},"layout-shift-elements":{showItems:!0,showSubItems:!1},"non-composited-animations":{showItems:!0,showSubItems:!1},"unsized-images":{showItems:!0,showSubItems:!1}};let qe=null;const $e=()=>qe;function ze(e){const t=$e().getElementById(e.id);t?(t.setAttribute("contenteditable",!1),document.getElementById("results").append(t),De[e.id]&&function(e){let t=document.getElementById("results");const n=e.details;if(!n)return;let r=[],o=[],s=[],i=[],a=[];n.headings.forEach((e=>{const t=e.key||e.url,n=e.text||e.label||" ";r.push(t),o.push(n),s.push(e.subItemsHeading),e.hasOwnProperty("subItemsHeading")&&e.subItemsHeading.hasOwnProperty("itemType")&&a.push(e.subItemsHeading.itemType),i.push(e.itemType||e.valueType)}));let c=document.createElement("table");c.classList.add("styled-table");let l=Object.values(o);function u(e,t,n,r,o,s=!1){let a=e.insertCell();s&&a.classList.add("sub-item");let c=function(e,t){let n="";switch(e){case"ms":n=`${t.toFixed(0)} ms`;break;case"node":if(!t)break;n=`\n        <div>\n          <span>\n            ${t?.nodeLabel}\n          </span>\n        </div>`;break;case"link":n=`\n        <div>\n        ${t.text} — <a href="${t.url}" target="_blank">${t.url}</a>\n        </div>`;break;case"url":if(!t)break;n="object"==typeof t?`<a href="${t.url}" target="_blank">${t.url}</a>`:t.includes("https")?`<a href="${t}" target="_blank">${t}</a>`:t;break;case"source-location":n=`<a href="${t.location.url}" target="_blank">${t.location.url}</a>`;break;case"code":if(!t)break;n=t&&t.includes("https")?`<a href="${t}" target="_blank">${t}</a>`:t;break;case"bytes":if(!t)return"";n=`${(976562e-9*t).toFixed(2)} KiB`;break;case"timespanMs":n=`${t} ms`;break;default:n=t}return n}(o[r]||i[r],t[n]);if(("node"===o[r]||"url"===o[r]||"link"===o[r]||"code"===o[r]||t.hasOwnProperty("location")||t.hasOwnProperty("url"))&&c)a.innerHTML=c;else{let e=document.createTextNode(c||" ");a.appendChild(e)}}!function(t,n,o,s,i){n.forEach((n=>{let a=t.insertRow();if(r.forEach(((e,t)=>{u(a,n,e,t,o)})),n.hasOwnProperty("subItems")){if(!De[e.id].showSubItems)return;n.subItems.items.forEach((e=>{let n=t.insertRow();s.forEach(((t,r)=>{u(n,e,t?.key||"none",r,i,!0)}))}))}}))}(c,n.items,i,s,a),function(e,t){let n=e.createTHead().insertRow();for(let e of t){let t=document.createElement("th"),r=document.createTextNode(e);t.appendChild(r),n.appendChild(t)}}(c,l);const d=document.createElement("div");d.classList.add("table-wrapper"),d.append(c),t.append(d)}(e),function(e){const t=document.getElementById("toc"),n=document.createElement("a");n.href=`#${e.id}`,n.classList.add("u-text-link"),n.textContent=e.title,t.append(n)}(e)):alert(`No audit found on the /Components page for ${e.id}`)}function Me(e,t){const n=document.getElementById(e),r=document.getElementById(t);r.style.display="none",document.getElementById("results-left"),n.addEventListener("change",(function(e){e.stopPropagation();const t=r.getElementsByTagName("div");if("checkbox"===e.target.type){if(e.target.checked){const t=$e().getElementById(e.target.id).cloneNode(!0);r.append(t)}else r.querySelector(`#${e.target.id}`).remove();0===t.length?r.style.display="none":r.style.display="block",r.scrollIntoView(!1)}}))}function He(){document.getElementById("export-report").addEventListener("click",(async function(){this.classList.contains("cc-disabled")||(this.textContent="Generating...",this.classList.add("cc-disabled"),async function(e){try{const t=await fetch(e),n=await t.blob(),r=window.URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download="temp name",o.style.display="none",document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(r),document.body.removeChild(o)}catch(e){console.log("Error downloading PDF",e)}}((await async function(){const e=function(){const e=document.getElementById("results-left");return`\n    <html style="color: green;">\n      <head>\n      <link rel="stylesheet" href="${document.querySelector('link[rel="stylesheet"]').sheet.href}" />\n      <style>\n\n      .table-wrapper {\n        margin-bottom: 40px;\n      }\n  \n      .styled-table {\n        border-collapse: collapse;\n        font-size: 0.9rem;\n        font-family: sans-serif;\n        width: 100%;\n        border: 1px solid #ddd;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.01);\n      }\n  \n      .styled-table thead tr {\n        background-color: #ddd;\n        color: #000;\n        text-align: left;\n        white-space: nowrap;\n      }\n  \n      .styled-table th,\n      .styled-table td {\n        padding: 12px 15px;\n        word-break: break-all;\n      }\n  \n      .styled-table tbody tr {\n        border-bottom: 1px solid #ddd;\n      }\n  \n      .styled-table tbody tr:nth-of-type(even) {\n        background-color: #f3f3f3;\n      }\n  \n      .styled-table tbody tr:last-of-type {\n        border-bottom: 1px solid #ddd;\n      }\n  \n      .styled-table tbody tr.active-row {\n        font-weight: bold;\n        color: #ddd;\n      }\n  \n      .sub-item:first-child::before {\n        content: "↳";\n        margin-right: 8px;\n        color: rgba(128, 128, 128, 0.8);\n      }\n  \n      /* results block */\n  \n      .result-block:focus-visible {\n        outline: none;\n      }\n  \n      .result-block[contenteditable="true"] {\n        background-color: #ddd;\n      }\n      </style>\n      </head>\n      <body>\n      ${e.innerHTML}\n      </body>\n    </html>\n    `}(),{data:t}=await Le.post("https://dev--make-pdf--webflow-success.autocode.dev/",{markup:e});return t}()).FileUrl),this.textContent="Create new report",this.classList.remove("cc-disabled"))}))}const Je=!1;var We=n(79),Ke=n.n(We);function Ve(e){const t=new FormData(e.target).get("website-url"),n=function(e){return 0===e.length?(Ge("Enter a website"),!1):e.includes("http")||e.includes("https")?(Ge("Remove protocol i.e., http or https"),!1):!!Ke()("https://"+e)||(Ge("Invalid format provided"),!1)}(t);n&&async function(e){if(function(){const e=document.getElementById("loader"),t=document.getElementById("form");e.style.display="block",t.style.display="none"}(),Je){const{data:e}=await Le.get("http://localhost:4000/data"),{data:t}=await Le.get("http://localhost:4001/data");Fe(_e(Ue(e[0]),Ue(t[0]))).forEach((e=>{for(let t in e)e[t].forEach((e=>{ze(e)}))}))}else{const{data:t}=await Le.get("https://dev--desktop-psi-results--webflow-success.autocode.dev/",{params:{website:e,strategy:"desktop"}}),{data:n}=await Le.get("https://dev--desktop-psi-results--webflow-success.autocode.dev/",{params:{website:e,strategy:"mobile"}}),{desktop:r}=t,{mobile:o}=n;Fe(_e(Ue(r),Ue(o))).forEach((e=>{for(let t in e)e[t].forEach((e=>{ze(e)}))}))}document.getElementById("loader").style.display="none",document.getElementById("form-wrap").style.display="none",document.getElementById("results-wrapper").style.display="grid",document.getElementById("results").addEventListener("click",(e=>{if("edit-audit"!==e.target.id)return;const t=e.target.parentNode.getAttribute("contenteditable");e.target.parentNode.setAttribute("contenteditable","true"!==t)})),Me("manual-review-items","manual-review"),Me("screaming-frog-items","screaming-frog"),He(),function(){const e=document.getElementById("google-doc-link"),t=document.getElementById("google-doc-file-link");t.style.display="none",t.textContent="",e.addEventListener("input",(e=>{t.textContent=e.target.value,t.href=e.target.value,0===e.target.value.length?t.style.display="none":t.style.display="block"}))}(),Je||(window.onbeforeunload=()=>"Confirm refresh")}(t)}function Ge(e){const t=document.getElementById("form-error");t.textContent=e,t.classList.add("u-d-block")}!async function(){await async function(){const e=await fetch("https://ent-site-audit.webflow.io/components"),t=await e.text(),n=new DOMParser;qe=n.parseFromString(t,"text/html")}(),function(){const e=document.getElementById("website-url"),t=document.getElementById("form-error");e.addEventListener("input",(()=>{t.classList.contains("display-block")&&t.classList.remove("display-block")}))}(),Webflow.push((function(){$("#form").submit((function(e){return Ve(e),!1}))})),Webflow.push((()=>$("#manual-review-form").submit((()=>!1)))),Webflow.push((()=>$("#screaming-frog-form").submit((()=>!1))))}()})()})();