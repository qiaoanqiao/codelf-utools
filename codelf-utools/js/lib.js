/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(d,r){"object"===typeof exports&&"undefined"!==typeof module?r(exports):"function"===typeof define&&define.amd?define(["exports"],r):(d=d||self,r(d.React={}))})(this,function(d){function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function w(a,b,c){this.props=a;this.context=b;this.refs=ba;this.updater=c||ca}function da(){}function L(a,b,c){this.props=a;this.context=b;this.refs=ba;this.updater=c||ca}function ea(a,b,c){var g,e={},fa=null,d=null;if(null!=b)for(g in void 0!==b.ref&&(d=b.ref),void 0!==b.key&&(fa=""+b.key),b)ha.call(b,g)&&!ia.hasOwnProperty(g)&&(e[g]=b[g]);var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){for(var k=Array(h),f=0;f<h;f++)k[f]=arguments[f+2];e.children=k}if(a&&a.defaultProps)for(g in h=a.defaultProps,
h)void 0===e[g]&&(e[g]=h[g]);return{$$typeof:x,type:a,key:fa,ref:d,props:e,_owner:M.current}}function va(a,b){return{$$typeof:x,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===x}function wa(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ja(a,b,c,g){if(C.length){var e=C.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=g;e.count=0;return e}return{result:a,keyPrefix:b,func:c,
context:g,count:0}}function ka(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>C.length&&C.push(a)}function O(a,b,c,g){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var d=!1;if(null===a)d=!0;else switch(e){case "string":case "number":d=!0;break;case "object":switch(a.$$typeof){case x:case xa:d=!0}}if(d)return c(g,a,""===b?"."+P(a,0):b),1;d=0;b=""===b?".":b+":";if(Array.isArray(a))for(var f=0;f<a.length;f++){e=a[f];var h=b+P(e,f);d+=O(e,h,c,g)}else if(null===a||
"object"!==typeof a?h=null:(h=la&&a[la]||a["@@iterator"],h="function"===typeof h?h:null),"function"===typeof h)for(a=h.call(a),f=0;!(e=a.next()).done;)e=e.value,h=b+P(e,f++),d+=O(e,h,c,g);else if("object"===e)throw c=""+a,Error(r(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return d}function Q(a,b,c){return null==a?0:O(a,"",b,c)}function P(a,b){return"object"===typeof a&&null!==a&&null!=a.key?wa(a.key):b.toString(36)}function ya(a,b,c){a.func.call(a.context,b,
a.count++)}function za(a,b,c){var g=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,g,c,function(a){return a}):null!=a&&(N(a)&&(a=va(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(ma,"$&/")+"/")+c)),g.push(a))}function R(a,b,c,g,e){var d="";null!=c&&(d=(""+c).replace(ma,"$&/")+"/");b=ja(b,d,g,e);Q(a,za,b);ka(b)}function t(){var a=na.current;if(null===a)throw Error(r(321));return a}function S(a,b){var c=a.length;a.push(b);a:for(;;){var g=c-1>>>1,e=a[g];if(void 0!==
e&&0<D(e,b))a[g]=b,a[c]=e,c=g;else break a}}function n(a){a=a[0];return void 0===a?null:a}function E(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var g=0,e=a.length;g<e;){var d=2*(g+1)-1,f=a[d],h=d+1,k=a[h];if(void 0!==f&&0>D(f,c))void 0!==k&&0>D(k,f)?(a[g]=k,a[h]=c,g=h):(a[g]=f,a[d]=c,g=d);else if(void 0!==k&&0>D(k,c))a[g]=k,a[h]=c,g=h;else break a}}return b}return null}function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function F(a){for(var b=n(u);null!==
b;){if(null===b.callback)E(u);else if(b.startTime<=a)E(u),b.sortIndex=b.expirationTime,S(p,b);else break;b=n(u)}}function T(a){y=!1;F(a);if(!v)if(null!==n(p))v=!0,z(U);else{var b=n(u);null!==b&&G(T,b.startTime-a)}}function U(a,b){v=!1;y&&(y=!1,V());H=!0;var c=m;try{F(b);for(l=n(p);null!==l&&(!(l.expirationTime>b)||a&&!W());){var g=l.callback;if(null!==g){l.callback=null;m=l.priorityLevel;var e=g(l.expirationTime<=b);b=q();"function"===typeof e?l.callback=e:l===n(p)&&E(p);F(b)}else E(p);l=n(p)}if(null!==
l)var d=!0;else{var f=n(u);null!==f&&G(T,f.startTime-b);d=!1}return d}finally{l=null,m=c,H=!1}}function oa(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var f="function"===typeof Symbol&&Symbol.for,x=f?Symbol.for("react.element"):60103,xa=f?Symbol.for("react.portal"):60106,Aa=f?Symbol.for("react.fragment"):60107,Ba=f?Symbol.for("react.strict_mode"):60108,Ca=f?Symbol.for("react.profiler"):60114,Da=f?Symbol.for("react.provider"):60109,
Ea=f?Symbol.for("react.context"):60110,Fa=f?Symbol.for("react.forward_ref"):60112,Ga=f?Symbol.for("react.suspense"):60113,Ha=f?Symbol.for("react.memo"):60115,Ia=f?Symbol.for("react.lazy"):60116,la="function"===typeof Symbol&&Symbol.iterator,pa=Object.getOwnPropertySymbols,Ja=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,I=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+
String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(g){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var g,e=1;e<arguments.length;e++){var d=Object(arguments[e]);
for(var f in d)Ja.call(d,f)&&(c[f]=d[f]);if(pa){g=pa(d);for(var h=0;h<g.length;h++)Ka.call(d,g[h])&&(c[g[h]]=d[g[h]])}}return c},ca={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,d){},enqueueSetState:function(a,b,c,d){}},ba={};w.prototype.isReactComponent={};w.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(r(85));this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=
function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};da.prototype=w.prototype;f=L.prototype=new da;f.constructor=L;I(f,w.prototype);f.isPureReactComponent=!0;var M={current:null},ha=Object.prototype.hasOwnProperty,ia={key:!0,ref:!0,__self:!0,__source:!0},ma=/\/+/g,C=[],na={current:null},X;if("undefined"===typeof window||"function"!==typeof MessageChannel){var A=null,qa=null,ra=function(){if(null!==A)try{var a=q();A(!0,a);A=null}catch(b){throw setTimeout(ra,0),b;}},La=Date.now();var q=
function(){return Date.now()-La};var z=function(a){null!==A?setTimeout(z,0,a):(A=a,setTimeout(ra,0))};var G=function(a,b){qa=setTimeout(a,b)};var V=function(){clearTimeout(qa)};var W=function(){return!1};f=X=function(){}}else{var Y=window.performance,sa=window.Date,Ma=window.setTimeout,Na=window.clearTimeout;"undefined"!==typeof console&&(f=window.cancelAnimationFrame,"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof f&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof Y&&"function"===typeof Y.now)q=function(){return Y.now()};else{var Oa=sa.now();q=function(){return sa.now()-Oa}}var J=!1,K=null,Z=-1,ta=5,ua=0;W=function(){return q()>=ua};f=function(){};X=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):
ta=0<a?Math.floor(1E3/a):5};var B=new MessageChannel,aa=B.port2;B.port1.onmessage=function(){if(null!==K){var a=q();ua=a+ta;try{K(!0,a)?aa.postMessage(null):(J=!1,K=null)}catch(b){throw aa.postMessage(null),b;}}else J=!1};z=function(a){K=a;J||(J=!0,aa.postMessage(null))};G=function(a,b){Z=Ma(function(){a(q())},b)};V=function(){Na(Z);Z=-1}}var p=[],u=[],Pa=1,l=null,m=3,H=!1,v=!1,y=!1,Qa=0;B={ReactCurrentDispatcher:na,ReactCurrentOwner:M,IsSomeRendererActing:{current:!1},assign:I};I(B,{Scheduler:{__proto__:null,
unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=m;m=a;try{return b()}finally{m=c}},unstable_next:function(a){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var c=m;m=b;try{return a()}finally{m=c}},unstable_scheduleCallback:function(a,b,c){var d=q();if("object"===typeof c&&null!==c){var e=c.delay;
e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:oa(a)}else c=oa(a),e=d;c=e+c;a={id:Pa++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,S(u,a),null===n(p)&&a===n(u)&&(y?V():y=!0,G(T,e-d))):(a.sortIndex=c,S(p,a),v||H||(v=!0,z(U)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=m;return function(){var c=m;m=b;try{return a.apply(this,arguments)}finally{m=c}}},unstable_getCurrentPriorityLevel:function(){return m},
unstable_shouldYield:function(){var a=q();F(a);var b=n(p);return b!==l&&null!==l&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<l.expirationTime||W()},unstable_requestPaint:f,unstable_continueExecution:function(){v||H||(v=!0,z(U))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return n(p)},get unstable_now(){return q},get unstable_forceFrameRate(){return X},unstable_Profiling:null},SchedulerTracing:{__proto__:null,__interactionsRef:null,__subscriberRef:null,
unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Qa},unstable_trace:function(a,b,c){return c()},unstable_wrap:function(a){return a},unstable_subscribe:function(a){},unstable_unsubscribe:function(a){}}});d.Children={map:function(a,b,c){if(null==a)return a;var d=[];R(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=ja(null,null,b,c);Q(a,ya,b);ka(b)},count:function(a){return Q(a,function(){return null},null)},
toArray:function(a){var b=[];R(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(r(143));return a}};d.Component=w;d.Fragment=Aa;d.Profiler=Ca;d.PureComponent=L;d.StrictMode=Ba;d.Suspense=Ga;d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B;d.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(r(267,a));var d=I({},a.props),e=a.key,f=a.ref,m=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,m=M.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var h=
a.type.defaultProps;for(k in b)ha.call(b,k)&&!ia.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==h?h[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){h=Array(k);for(var l=0;l<k;l++)h[l]=arguments[l+2];d.children=h}return{$$typeof:x,type:a.type,key:e,ref:f,props:d,_owner:m}};d.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:Ea,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Da,_context:a};return a.Consumer=
a};d.createElement=ea;d.createFactory=function(a){var b=ea.bind(null,a);b.type=a;return b};d.createRef=function(){return{current:null}};d.forwardRef=function(a){return{$$typeof:Fa,render:a}};d.isValidElement=N;d.lazy=function(a){return{$$typeof:Ia,_ctor:a,_status:-1,_result:null}};d.memo=function(a,b){return{$$typeof:Ha,type:a,compare:void 0===b?null:b}};d.useCallback=function(a,b){return t().useCallback(a,b)};d.useContext=function(a,b){return t().useContext(a,b)};d.useDebugValue=function(a,b){};
d.useEffect=function(a,b){return t().useEffect(a,b)};d.useImperativeHandle=function(a,b,c){return t().useImperativeHandle(a,b,c)};d.useLayoutEffect=function(a,b){return t().useLayoutEffect(a,b)};d.useMemo=function(a,b){return t().useMemo(a,b)};d.useReducer=function(a,b,c){return t().useReducer(a,b,c)};d.useRef=function(a){return t().useRef(a)};d.useState=function(a){return t().useState(a)};d.version="16.14.0"});

/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(I,ea){"object"===typeof exports&&"undefined"!==typeof module?ea(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],ea):(I=I||self,ea(I.ReactDOM={},I.React))})(this,function(I,ea){function k(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function ji(a,b,c,d,e,f,g,h,m){yb=!1;gc=null;ki.apply(li,arguments)}function mi(a,b,c,d,e,f,g,h,m){ji.apply(this,arguments);if(yb){if(yb){var n=gc;yb=!1;gc=null}else throw Error(k(198));hc||(hc=!0,pd=n)}}function lf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=mf(c);mi(d,b,void 0,a);a.currentTarget=null}function nf(){if(ic)for(var a in cb){var b=cb[a],c=ic.indexOf(a);if(!(-1<c))throw Error(k(96,a));if(!jc[c]){if(!b.extractEvents)throw Error(k(97,a));jc[c]=b;c=b.eventTypes;for(var d in c){var e=
void 0;var f=c[d],g=b,h=d;if(qd.hasOwnProperty(h))throw Error(k(99,h));qd[h]=f;var m=f.phasedRegistrationNames;if(m){for(e in m)m.hasOwnProperty(e)&&of(m[e],g,h);e=!0}else f.registrationName?(of(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(k(98,d,a));}}}}function of(a,b,c){if(db[a])throw Error(k(100,a));db[a]=b;rd[a]=b.eventTypes[c].dependencies}function pf(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!cb.hasOwnProperty(c)||cb[c]!==d){if(cb[c])throw Error(k(102,c));cb[c]=
d;b=!0}}b&&nf()}function qf(a){if(a=rf(a)){if("function"!==typeof sd)throw Error(k(280));var b=a.stateNode;b&&(b=td(b),sd(a.stateNode,a.type,b))}}function sf(a){eb?fb?fb.push(a):fb=[a]:eb=a}function tf(){if(eb){var a=eb,b=fb;fb=eb=null;qf(a);if(b)for(a=0;a<b.length;a++)qf(b[a])}}function ud(){if(null!==eb||null!==fb)vd(),tf()}function uf(a,b,c){if(wd)return a(b,c);wd=!0;try{return vf(a,b,c)}finally{wd=!1,ud()}}function ni(a){if(wf.call(xf,a))return!0;if(wf.call(yf,a))return!1;if(oi.test(a))return xf[a]=
!0;yf[a]=!0;return!1}function pi(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function qi(a,b,c,d){if(null===b||"undefined"===typeof b||pi(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function L(a,
b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}function xd(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qi(b,c,e,d)&&(c=null),d||null===e?ni(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,
d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}function zb(a){if(null===a||"object"!==typeof a)return null;a=zf&&a[zf]||a["@@iterator"];return"function"===typeof a?a:null}function ri(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}function na(a){if(null==a)return null;
if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ma:return"Fragment";case gb:return"Portal";case kc:return"Profiler";case Af:return"StrictMode";case lc:return"Suspense";case yd:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Bf:return"Context.Consumer";case Cf:return"Context.Provider";case zd:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Ad:return na(a.type);
case Df:return na(a.render);case Ef:if(a=1===a._status?a._result:null)return na(a)}return null}function Bd(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=na(a.type);c=null;d&&(c=na(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(si,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}function va(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;
default:return""}}function Ff(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function ti(a){var b=Ff(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,
b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}}function mc(a){a._valueTracker||(a._valueTracker=ti(a))}function Gf(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ff(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Cd(a,b){var c=b.checked;return M({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=
c?c:a._wrapperState.initialChecked})}function Hf(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=va(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function If(a,b){b=b.checked;null!=b&&xd(a,"checked",b,!1)}function Dd(a,b){If(a,b);var c=va(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==
""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ed(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ed(a,b.type,va(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function Jf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=
b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function Ed(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function ui(a){var b="";ea.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Fd(a,b){a=M({children:void 0},b);if(b=ui(b.children))a.children=b;return a}function hb(a,b,c,d){a=a.options;if(b){b={};
for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+va(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Gd(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(k(91));return M({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}
function Kf(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(k(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(k(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:va(c)}}function Lf(a,b){var c=va(b.value),d=va(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Mf(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==
b&&null!==b&&(a.value=b)}function Nf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hd(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function nc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function oc(a){if(Id[a])return Id[a];
if(!ib[a])return a;var b=ib[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Of)return Id[a]=b[c];return a}function Jd(a){var b=Pf.get(a);void 0===b&&(b=new Map,Pf.set(a,b));return b}function Na(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Qf(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Rf(a){if(Na(a)!==
a)throw Error(k(188));}function vi(a){var b=a.alternate;if(!b){b=Na(a);if(null===b)throw Error(k(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Rf(e),a;if(f===d)return Rf(e),b;f=f.sibling}throw Error(k(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=
f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(k(189));}}if(c.alternate!==d)throw Error(k(190));}if(3!==c.tag)throw Error(k(188));return c.stateNode.current===c?a:b}function Sf(a){a=vi(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function jb(a,b){if(null==
b)throw Error(k(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Kd(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function pc(a){null!==a&&(Ab=jb(Ab,a));a=Ab;Ab=null;if(a){Kd(a,wi);if(Ab)throw Error(k(95));if(hc)throw a=pd,hc=!1,pd=null,a;}}function Ld(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:
a}function Tf(a){if(!wa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Uf(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>qc.length&&qc.push(a)}function Vf(a,b,c,d){if(qc.length){var e=qc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}function Wf(a){var b=
a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Bb(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Ld(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,m=0;m<jc.length;m++){var n=jc[m];n&&(n=n.extractEvents(d,b,f,e,g))&&(h=jb(h,n))}pc(h)}}function Md(a,
b,c){if(!c.has(a)){switch(a){case "scroll":Cb(b,"scroll",!0);break;case "focus":case "blur":Cb(b,"focus",!0);Cb(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":Tf(a)&&Cb(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===Db.indexOf(a)&&w(a,b)}c.set(a,null)}}function xi(a,b){var c=Jd(b);Nd.forEach(function(a){Md(a,b,c)});yi.forEach(function(a){Md(a,b,c)})}function Od(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,
container:d}}function Xf(a,b){switch(a){case "focus":case "blur":xa=null;break;case "dragenter":case "dragleave":ya=null;break;case "mouseover":case "mouseout":za=null;break;case "pointerover":case "pointerout":Eb.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fb.delete(b.pointerId)}}function Gb(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Od(b,c,d,e,f),null!==b&&(b=Hb(b),null!==b&&Yf(b)),a;a.eventSystemFlags|=d;return a}function zi(a,b,c,d,e){switch(b){case "focus":return xa=
Gb(xa,a,b,c,d,e),!0;case "dragenter":return ya=Gb(ya,a,b,c,d,e),!0;case "mouseover":return za=Gb(za,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Eb.set(f,Gb(Eb.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fb.set(f,Gb(Fb.get(f)||null,a,b,c,d,e)),!0}return!1}function Ai(a){var b=Bb(a.target);if(null!==b){var c=Na(b);if(null!==c)if(b=c.tag,13===b){if(b=Qf(c),null!==b){a.blockedOn=b;Pd(a.priority,function(){Bi(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=
3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function rc(a){if(null!==a.blockedOn)return!1;var b=Qd(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Hb(b);null!==c&&Yf(c);a.blockedOn=b;return!1}return!0}function Zf(a,b,c){rc(a)&&c.delete(b)}function Ci(){for(Rd=!1;0<fa.length;){var a=fa[0];if(null!==a.blockedOn){a=Hb(a.blockedOn);null!==a&&Di(a);break}var b=Qd(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:fa.shift()}null!==
xa&&rc(xa)&&(xa=null);null!==ya&&rc(ya)&&(ya=null);null!==za&&rc(za)&&(za=null);Eb.forEach(Zf);Fb.forEach(Zf)}function Ib(a,b){a.blockedOn===b&&(a.blockedOn=null,Rd||(Rd=!0,$f(ag,Ci)))}function bg(a){if(0<fa.length){Ib(fa[0],a);for(var b=1;b<fa.length;b++){var c=fa[b];c.blockedOn===a&&(c.blockedOn=null)}}null!==xa&&Ib(xa,a);null!==ya&&Ib(ya,a);null!==za&&Ib(za,a);b=function(b){return Ib(b,a)};Eb.forEach(b);Fb.forEach(b);for(b=0;b<Jb.length;b++)c=Jb[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Jb.length&&
(b=Jb[0],null===b.blockedOn);)Ai(b),null===b.blockedOn&&Jb.shift()}function Sd(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Td.set(d,b);cg.set(d,f);dg[e]=f}}function w(a,b){Cb(b,a,!1)}function Cb(a,b,c){var d=Td.get(b);switch(void 0===d?2:d){case 0:d=Ei.bind(null,b,1,a);break;case 1:d=Fi.bind(null,b,1,a);break;default:d=sc.bind(null,b,1,a)}c?a.addEventListener(b,
d,!0):a.addEventListener(b,d,!1)}function Ei(a,b,c,d){Oa||vd();var e=sc,f=Oa;Oa=!0;try{eg(e,a,b,c,d)}finally{(Oa=f)||ud()}}function Fi(a,b,c,d){Gi(Hi,sc.bind(null,a,b,c,d))}function sc(a,b,c,d){if(tc)if(0<fa.length&&-1<Nd.indexOf(a))a=Od(null,a,b,c,d),fa.push(a);else{var e=Qd(a,b,c,d);if(null===e)Xf(a,d);else if(-1<Nd.indexOf(a))a=Od(e,a,b,c,d),fa.push(a);else if(!zi(e,a,b,c,d)){Xf(a,d);a=Vf(a,d,null,b);try{uf(Wf,a)}finally{Uf(a)}}}}function Qd(a,b,c,d){c=Ld(d);c=Bb(c);if(null!==c){var e=Na(c);if(null===
e)c=null;else{var f=e.tag;if(13===f){c=Qf(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=Vf(a,d,c,b);try{uf(Wf,a)}finally{Uf(a)}return null}function fg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Kb.hasOwnProperty(a)&&Kb[a]?(""+b).trim():b+"px"}function gg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=fg(c,b[c],d);"float"===
c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function Ud(a,b){if(b){if(Ii[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(k(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(k(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(k(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(k(62,""));}}function Vd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function oa(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Jd(a);b=rd[b];for(var d=0;d<b.length;d++)Md(b[d],a,c)}function uc(){}function Wd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function hg(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ig(a,b){var c=hg(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,
offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=hg(c)}}function jg(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?jg(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function kg(){for(var a=window,b=Wd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Wd(a.document)}return b}
function Xd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function lg(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Yd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&
null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function kb(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function mg(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ng||c===Zd||c===$d){if(0===b)return a;b--}else c===og&&b++}a=a.previousSibling}return null}function Bb(a){var b=a[Aa];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Lb]||c[Aa]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=mg(a);null!==
a;){if(c=a[Aa])return c;a=mg(a)}return b}a=c;c=a.parentNode}return null}function Hb(a){a=a[Aa]||a[Lb];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pa(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(k(33));}function ae(a){return a[vc]||null}function pa(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function pg(a,b){var c=a.stateNode;if(!c)return null;var d=td(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=
!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(k(231,b,typeof c));return c}function qg(a,b,c){if(b=pg(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=jb(c._dispatchListeners,b),c._dispatchInstances=jb(c._dispatchInstances,a)}function Ji(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=pa(b);for(b=c.length;0<b--;)qg(c[b],
"captured",a);for(b=0;b<c.length;b++)qg(c[b],"bubbled",a)}}function be(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=pg(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=jb(c._dispatchListeners,b),c._dispatchInstances=jb(c._dispatchInstances,a))}function Ki(a){a&&a.dispatchConfig.registrationName&&be(a._targetInst,null,a)}function lb(a){Kd(a,Ji)}function rg(){if(wc)return wc;var a,b=ce,c=b.length,d,e="value"in Ba?Ba.value:Ba.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=
c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return wc=e.slice(a,1<d?1-d:void 0)}function xc(){return!0}function yc(){return!1}function R(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?xc:yc;this.isPropagationStopped=yc;return this}function Li(a,b,c,d){if(this.eventPool.length){var e=
this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function Mi(a){if(!(a instanceof this))throw Error(k(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function sg(a){a.eventPool=[];a.getPooled=Li;a.release=Mi}function tg(a,b){switch(a){case "keyup":return-1!==Ni.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function ug(a){a=a.detail;return"object"===typeof a&&"data"in
a?a.data:null}function Oi(a,b){switch(a){case "compositionend":return ug(b);case "keypress":if(32!==b.which)return null;vg=!0;return wg;case "textInput":return a=b.data,a===wg&&vg?null:a;default:return null}}function Pi(a,b){if(mb)return"compositionend"===a||!de&&tg(a,b)?(a=rg(),wc=ce=Ba=null,mb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return xg&&"ko"!==b.locale?null:b.data;default:return null}}function yg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qi[a.type]:"textarea"===b?!0:!1}function zg(a,b,c){a=R.getPooled(Ag.change,a,b,c);a.type="change";sf(c);lb(a);return a}function Ri(a){pc(a)}function zc(a){var b=Pa(a);if(Gf(b))return a}function Si(a,b){if("change"===a)return b}function Bg(){Mb&&(Mb.detachEvent("onpropertychange",Cg),Nb=Mb=null)}function Cg(a){if("value"===a.propertyName&&
zc(Nb))if(a=zg(Nb,a,Ld(a)),Oa)pc(a);else{Oa=!0;try{ee(Ri,a)}finally{Oa=!1,ud()}}}function Ti(a,b,c){"focus"===a?(Bg(),Mb=b,Nb=c,Mb.attachEvent("onpropertychange",Cg)):"blur"===a&&Bg()}function Ui(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return zc(Nb)}function Vi(a,b){if("click"===a)return zc(b)}function Wi(a,b){if("input"===a||"change"===a)return zc(b)}function Xi(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Yi[a])?!!b[a]:!1}function fe(a){return Xi}
function Zi(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function Ob(a,b){if(Qa(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!$i.call(b,c[d])||!Qa(a[c[d]],b[c[d]]))return!1;return!0}function Dg(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(ge||null==nb||nb!==Wd(c))return null;c=nb;"selectionStart"in c&&Xd(c)?c={start:c.selectionStart,
end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Pb&&Ob(Pb,c)?null:(Pb=c,a=R.getPooled(Eg.select,he,a,b),a.type="select",a.target=nb,lb(a),a)}function Ac(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function q(a,b){0>ob||(a.current=ie[ob],ie[ob]=null,ob--)}function y(a,b,c){ob++;
ie[ob]=a.current;a.current=b}function pb(a,b){var c=a.type.contextTypes;if(!c)return Ca;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Fg(a,b,c){if(B.current!==Ca)throw Error(k(168));y(B,b);y(G,c)}
function Gg(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(k(108,na(b)||"Unknown",e));return M({},c,{},d)}function Bc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Ca;Ra=B.current;y(B,a);y(G,G.current);return!0}function Hg(a,b,c){var d=a.stateNode;if(!d)throw Error(k(169));c?(a=Gg(a,b,Ra),d.__reactInternalMemoizedMergedChildContext=a,q(G),q(B),y(B,a)):q(G);y(G,c)}function Cc(){switch(aj()){case Dc:return 99;
case Ig:return 98;case Jg:return 97;case Kg:return 96;case Lg:return 95;default:throw Error(k(332));}}function Mg(a){switch(a){case 99:return Dc;case 98:return Ig;case 97:return Jg;case 96:return Kg;case 95:return Lg;default:throw Error(k(332));}}function Da(a,b){a=Mg(a);return bj(a,b)}function Ng(a,b,c){a=Mg(a);return je(a,b,c)}function Og(a){null===qa?(qa=[a],Ec=je(Dc,Pg)):qa.push(a);return Qg}function ha(){if(null!==Ec){var a=Ec;Ec=null;Rg(a)}Pg()}function Pg(){if(!ke&&null!==qa){ke=!0;var a=0;
try{var b=qa;Da(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});qa=null}catch(c){throw null!==qa&&(qa=qa.slice(a+1)),je(Dc,ha),c;}finally{ke=!1}}}function Fc(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function aa(a,b){if(a&&a.defaultProps){b=M({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function le(){Gc=qb=Hc=null}function me(a){var b=Ic.current;q(Ic);a.type._context._currentValue=b}function Sg(a,b){for(;null!==a;){var c=
a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function rb(a,b){Hc=a;Gc=qb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(ia=!0),a.firstContext=null)}function W(a,b){if(Gc!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Gc=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===qb){if(null===
Hc)throw Error(k(308));qb=b;Hc.dependencies={expirationTime:0,firstContext:b,responders:null}}else qb=qb.next=b}return a._currentValue}function ne(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function oe(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function Ea(a,b){a={expirationTime:a,suspenseConfig:b,tag:Tg,payload:null,callback:null,next:null};return a.next=
a}function Fa(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}function Ug(a,b){var c=a.alternate;null!==c&&oe(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}function Qb(a,b,c,d){var e=a.updateQueue;Ga=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&
(h.baseQueue=g))}if(null!==f){h=f.next;var m=e.baseState,n=0,k=null,ba=null,l=null;if(null!==h){var p=h;do{g=p.expirationTime;if(g<d){var t={expirationTime:p.expirationTime,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null};null===l?(ba=l=t,k=m):l=l.next=t;g>n&&(n=g)}else{null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null});Vg(g,p.suspenseConfig);a:{var q=a,r=p;g=b;t=c;switch(r.tag){case 1:q=
r.payload;if("function"===typeof q){m=q.call(t,m,g);break a}m=q;break a;case 3:q.effectTag=q.effectTag&-4097|64;case Tg:q=r.payload;g="function"===typeof q?q.call(t,m,g):q;if(null===g||void 0===g)break a;m=M({},m,g);break a;case Jc:Ga=!0}}null!==p.callback&&(a.effectTag|=32,g=e.effects,null===g?e.effects=[p]:g.push(p))}p=p.next;if(null===p||p===h)if(g=e.shared.pending,null===g)break;else p=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===l?k=m:l.next=ba;e.baseState=k;e.baseQueue=
l;Kc(n);a.expirationTime=n;a.memoizedState=m}}function Wg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(k(191,d));d.call(e)}}}function Lc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:M({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}function Xg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,
f,g):b.prototype&&b.prototype.isPureReactComponent?!Ob(c,d)||!Ob(e,f):!0}function Yg(a,b,c){var d=!1,e=Ca;var f=b.contextType;"object"===typeof f&&null!==f?f=W(f):(e=N(b)?Ra:B.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?pb(a,e):Ca);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Mc;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Zg(a,
b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Mc.enqueueReplaceState(b,b.state,null)}function pe(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=$g;ne(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=W(f):(f=N(b)?Ra:B.current,e.context=pb(a,f));Qb(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;
"function"===typeof f&&(Lc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Mc.enqueueReplaceState(e,e.state,null),Qb(a,c,e,d),e.state=a.memoizedState);"function"===
typeof e.componentDidMount&&(a.effectTag|=4)}function Rb(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(k(309));var d=c.stateNode}if(!d)throw Error(k(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===$g&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(k(284));if(!c._owner)throw Error(k(290,
a));}return a}function Nc(a,b){if("textarea"!==a.type)throw Error(k(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}function ah(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,
b),b=b.sibling;return a}function e(a,b){a=Sa(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=qe(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function m(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Rb(a,b,c),d.return=a,d;d=Oc(c.type,
c.key,c.props,null,a.mode,d);d.ref=Rb(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=re(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ha(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function ba(a,b,c){if("string"===typeof b||"number"===typeof b)return b=qe(""+b,a.mode,c),b.return=a,b;if("object"===
typeof b&&null!==b){switch(b.$$typeof){case Pc:return c=Oc(b.type,b.key,b.props,null,a.mode,c),c.ref=Rb(a,null,b),c.return=a,c;case gb:return b=re(b,a.mode,c),b.return=a,b}if(Qc(b)||zb(b))return b=Ha(b,a.mode,c,null),b.return=a,b;Nc(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Pc:return c.key===e?c.type===Ma?l(a,b,c.props.children,d,e):m(a,b,c,
d):null;case gb:return c.key===e?n(a,b,c,d):null}if(Qc(c)||zb(c))return null!==e?null:l(a,b,c,d,null);Nc(a,c)}return null}function t(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Pc:return a=a.get(null===d.key?c:d.key)||null,d.type===Ma?l(b,a,d.props.children,e,d.key):m(b,a,d,e);case gb:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(Qc(d)||zb(d))return a=a.get(c)||null,l(b,a,d,e,null);
Nc(b,d)}return null}function q(e,g,h,m){for(var n=null,k=null,l=g,r=g=0,C=null;null!==l&&r<h.length;r++){l.index>r?(C=l,l=null):C=l.sibling;var O=p(e,l,h[r],m);if(null===O){null===l&&(l=C);break}a&&l&&null===O.alternate&&b(e,l);g=f(O,g,r);null===k?n=O:k.sibling=O;k=O;l=C}if(r===h.length)return c(e,l),n;if(null===l){for(;r<h.length;r++)l=ba(e,h[r],m),null!==l&&(g=f(l,g,r),null===k?n=l:k.sibling=l,k=l);return n}for(l=d(e,l);r<h.length;r++)C=t(l,e,r,h[r],m),null!==C&&(a&&null!==C.alternate&&l.delete(null===
C.key?r:C.key),g=f(C,g,r),null===k?n=C:k.sibling=C,k=C);a&&l.forEach(function(a){return b(e,a)});return n}function w(e,g,h,n){var m=zb(h);if("function"!==typeof m)throw Error(k(150));h=m.call(h);if(null==h)throw Error(k(151));for(var l=m=null,r=g,C=g=0,O=null,v=h.next();null!==r&&!v.done;C++,v=h.next()){r.index>C?(O=r,r=null):O=r.sibling;var q=p(e,r,v.value,n);if(null===q){null===r&&(r=O);break}a&&r&&null===q.alternate&&b(e,r);g=f(q,g,C);null===l?m=q:l.sibling=q;l=q;r=O}if(v.done)return c(e,r),m;
if(null===r){for(;!v.done;C++,v=h.next())v=ba(e,v.value,n),null!==v&&(g=f(v,g,C),null===l?m=v:l.sibling=v,l=v);return m}for(r=d(e,r);!v.done;C++,v=h.next())v=t(r,e,C,v.value,n),null!==v&&(a&&null!==v.alternate&&r.delete(null===v.key?C:v.key),g=f(v,g,C),null===l?m=v:l.sibling=v,l=v);a&&r.forEach(function(a){return b(e,a)});return m}return function(a,d,f,h){var m="object"===typeof f&&null!==f&&f.type===Ma&&null===f.key;m&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case Pc:a:{n=
f.key;for(m=d;null!==m;){if(m.key===n){switch(m.tag){case 7:if(f.type===Ma){c(a,m.sibling);d=e(m,f.props.children);d.return=a;a=d;break a}break;default:if(m.elementType===f.type){c(a,m.sibling);d=e(m,f.props);d.ref=Rb(a,m,f);d.return=a;a=d;break a}}c(a,m);break}else b(a,m);m=m.sibling}f.type===Ma?(d=Ha(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Oc(f.type,f.key,f.props,null,a.mode,h),h.ref=Rb(a,d,f),h.return=a,a=h)}return g(a);case gb:a:{for(m=f.key;null!==d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===
f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=re(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=qe(f,a.mode,h),d.return=a,a=d),g(a);if(Qc(f))return q(a,d,f,h);if(zb(f))return w(a,d,f,h);n&&Nc(a,f);if("undefined"===typeof f&&!m)switch(a.tag){case 1:case 0:throw a=
a.type,Error(k(152,a.displayName||a.name||"Component"));}return c(a,d)}}function Ta(a){if(a===Sb)throw Error(k(174));return a}function se(a,b){y(Tb,b);y(Ub,a);y(ja,Sb);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Hd(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Hd(b,a)}q(ja);y(ja,b)}function tb(a){q(ja);q(Ub);q(Tb)}function bh(a){Ta(Tb.current);var b=Ta(ja.current);var c=Hd(b,a.type);b!==c&&(y(Ub,a),y(ja,c))}function te(a){Ub.current===
a&&(q(ja),q(Ub))}function Rc(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===$d||c.data===Zd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ue(a,b){return{responder:a,props:b}}
function S(){throw Error(k(321));}function ve(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Qa(a[c],b[c]))return!1;return!0}function we(a,b,c,d,e,f){Ia=f;z=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;Sc.current=null===a||null===a.memoizedState?dj:ej;a=c(d,e);if(b.expirationTime===Ia){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(k(301));f+=1;J=K=null;b.updateQueue=null;Sc.current=fj;a=c(d,e)}while(b.expirationTime===Ia)}Sc.current=Tc;b=null!==K&&null!==K.next;
Ia=0;J=K=z=null;Uc=!1;if(b)throw Error(k(300));return a}function ub(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===J?z.memoizedState=J=a:J=J.next=a;return J}function vb(){if(null===K){var a=z.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===J?z.memoizedState:J.next;if(null!==b)J=b,K=a;else{if(null===a)throw Error(k(310));K=a;a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===J?z.memoizedState=
J=a:J=J.next=a}return J}function Ua(a,b){return"function"===typeof b?b(a):b}function Vc(a,b,c){b=vb();c=b.queue;if(null===c)throw Error(k(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,m=e;do{var n=m.expirationTime;if(n<Ia){var l={expirationTime:m.expirationTime,suspenseConfig:m.suspenseConfig,action:m.action,eagerReducer:m.eagerReducer,eagerState:m.eagerState,
next:null};null===h?(g=h=l,f=d):h=h.next=l;n>z.expirationTime&&(z.expirationTime=n,Kc(n))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:m.suspenseConfig,action:m.action,eagerReducer:m.eagerReducer,eagerState:m.eagerState,next:null}),Vg(n,m.suspenseConfig),d=m.eagerReducer===a?m.eagerState:a(d,m.action);m=m.next}while(null!==m&&m!==e);null===h?f=d:h.next=g;Qa(d,b.memoizedState)||(ia=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,
c.dispatch]}function Wc(a,b,c){b=vb();c=b.queue;if(null===c)throw Error(k(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Qa(f,b.memoizedState)||(ia=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function xe(a){var b=ub();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Ua,
lastRenderedState:a};a=a.dispatch=ch.bind(null,z,a);return[b.memoizedState,a]}function ye(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=z.updateQueue;null===b?(b={lastEffect:null},z.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function dh(a){return vb().memoizedState}function ze(a,b,c,d){var e=ub();z.effectTag|=a;e.memoizedState=ye(1|b,c,void 0,void 0===d?null:d)}function Ae(a,b,c,d){var e=vb();
d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&ve(d,g.deps)){ye(b,c,f,d);return}}z.effectTag|=a;e.memoizedState=ye(1|b,c,f,d)}function eh(a,b){return ze(516,4,a,b)}function Xc(a,b){return Ae(516,4,a,b)}function fh(a,b){return Ae(4,2,a,b)}function gh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function hh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;
return Ae(4,2,gh.bind(null,b,a),c)}function Be(a,b){}function ih(a,b){ub().memoizedState=[a,void 0===b?null:b];return a}function Yc(a,b){var c=vb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ve(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function jh(a,b){var c=vb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ve(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Ce(a,b,c){var d=Cc();Da(98>d?98:d,function(){a(!0)});Da(97<d?97:d,function(){var d=
X.suspense;X.suspense=void 0===b?null:b;try{a(!1),c()}finally{X.suspense=d}})}function ch(a,b,c){var d=ka(),e=Vb.suspense;d=Va(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===z||null!==f&&f===z)Uc=!0,e.expirationTime=Ia,z.expirationTime=Ia;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,
h=f(g,c);e.eagerReducer=f;e.eagerState=h;if(Qa(h,g))return}catch(m){}finally{}Ja(a,d)}}function kh(a,b){var c=la(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function lh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?
null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function De(a){if(Wa){var b=Ka;if(b){var c=b;if(!lh(a,b)){b=kb(c.nextSibling);if(!b||!lh(a,b)){a.effectTag=a.effectTag&-1025|2;Wa=!1;ra=a;return}kh(ra,c)}ra=a;Ka=kb(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Wa=!1,ra=a}}function mh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ra=a}function Zc(a){if(a!==ra)return!1;if(!Wa)return mh(a),Wa=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==
b&&!Yd(b,a.memoizedProps))for(b=Ka;b;)kh(a,b),b=kb(b.nextSibling);mh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(k(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===og){if(0===b){Ka=kb(a.nextSibling);break a}b--}else c!==ng&&c!==Zd&&c!==$d||b++}a=a.nextSibling}Ka=null}}else Ka=ra?kb(a.stateNode.nextSibling):null;return!0}function Ee(){Ka=ra=null;Wa=!1}function T(a,b,c,d){b.child=null===a?Fe(b,null,c,d):wb(b,a.child,c,d)}function nh(a,
b,c,d,e){c=c.render;var f=b.ref;rb(b,e);d=we(a,b,c,d,f,e);if(null!==a&&!ia)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,d,e);return b.child}function oh(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ge(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ph(a,b,g,d,e,f);a=Oc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<
f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Ob,c(e,d)&&a.ref===b.ref))return sa(a,b,f);b.effectTag|=1;a=Sa(g,d);a.ref=b.ref;a.return=b;return b.child=a}function ph(a,b,c,d,e,f){return null!==a&&Ob(a.memoizedProps,d)&&a.ref===b.ref&&(ia=!1,e<f)?(b.expirationTime=a.expirationTime,sa(a,b,f)):He(a,b,c,d,f)}function qh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function He(a,b,c,d,e){var f=N(c)?Ra:B.current;f=pb(b,f);rb(b,e);c=we(a,b,c,d,f,e);if(null!==a&&!ia)return b.updateQueue=
a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,c,e);return b.child}function rh(a,b,c,d,e){if(N(c)){var f=!0;Bc(b)}else f=!1;rb(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Yg(b,c,d),pe(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var m=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=W(n):(n=N(c)?Ra:B.current,n=pb(b,n));var l=c.getDerivedStateFromProps,k="function"===
typeof l||"function"===typeof g.getSnapshotBeforeUpdate;k||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==n)&&Zg(b,g,d,n);Ga=!1;var p=b.memoizedState;g.state=p;Qb(b,d,g,e);m=b.memoizedState;h!==d||p!==m||G.current||Ga?("function"===typeof l&&(Lc(b,c,l,d),m=b.memoizedState),(h=Ga||Xg(b,c,h,d,p,m,n))?(k||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&
g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,oe(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:aa(b.type,h),m=g.context,n=c.contextType,"object"===typeof n&&null!==
n?n=W(n):(n=N(c)?Ra:B.current,n=pb(b,n)),l=c.getDerivedStateFromProps,(k="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==n)&&Zg(b,g,d,n),Ga=!1,m=b.memoizedState,g.state=m,Qb(b,d,g,e),p=b.memoizedState,h!==d||m!==p||G.current||Ga?("function"===typeof l&&(Lc(b,c,l,d),p=b.memoizedState),(l=Ga||Xg(b,c,h,d,m,p,n))?(k||"function"!==typeof g.UNSAFE_componentWillUpdate&&
"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,p,n),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,p,n)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===
a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=p),g.props=d,g.state=p,g.context=n,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return Ie(a,b,c,d,f,e)}function Ie(a,b,c,d,e,f){qh(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hg(b,c,!1),sa(a,b,f);d=b.stateNode;gj.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?
null:d.render();b.effectTag|=1;null!==a&&g?(b.child=wb(b,a.child,null,f),b.child=wb(b,null,h,f)):T(a,b,h,f);b.memoizedState=d.state;e&&Hg(b,c,!0);return b.child}function sh(a){var b=a.stateNode;b.pendingContext?Fg(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Fg(a,b.context,!1);se(a,b.containerInfo)}function th(a,b,c){var d=b.mode,e=b.pendingProps,f=D.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===
a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);y(D,f&1);if(null===a){void 0!==e.fallback&&De(b);if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;b.memoizedState=Je;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Fe(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;
c=Sa(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sa(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=Je;b.child=c;return d}c=wb(b,a.child,e.children,c);b.memoizedState=null;return b.child=c}a=a.child;if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==
a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=Je;b.child=e;return c}b.memoizedState=null;return b.child=wb(b,a,e.children,c)}function uh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);Sg(a.return,b)}function Ke(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,
lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}function vh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;T(a,b,d.children,c);d=D.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&uh(a,c);else if(19===a.tag)uh(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===
a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(D,d);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Rc(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ke(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Rc(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ke(b,
!0,c,null,f,b.lastEffect);break;case "together":Ke(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}function sa(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Kc(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(k(153));if(null!==b.child){a=b.child;c=Sa(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sa(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function $c(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function hj(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return N(b.type)&&(q(G),q(B)),
null;case 3:return tb(),q(G),q(B),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Zc(b)||(b.effectTag|=4),wh(b),null;case 5:te(b);c=Ta(Tb.current);var e=b.type;if(null!==a&&null!=b.stateNode)ij(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(k(166));return null}a=Ta(ja.current);if(Zc(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Aa]=b;d[vc]=f;switch(e){case "iframe":case "object":case "embed":w("load",
d);break;case "video":case "audio":for(a=0;a<Db.length;a++)w(Db[a],d);break;case "source":w("error",d);break;case "img":case "image":case "link":w("error",d);w("load",d);break;case "form":w("reset",d);w("submit",d);break;case "details":w("toggle",d);break;case "input":Hf(d,f);w("invalid",d);oa(c,"onChange");break;case "select":d._wrapperState={wasMultiple:!!f.multiple};w("invalid",d);oa(c,"onChange");break;case "textarea":Kf(d,f),w("invalid",d),oa(c,"onChange")}Ud(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=
f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):db.hasOwnProperty(g)&&null!=h&&oa(c,g)}switch(e){case "input":mc(d);Jf(d,f,!0);break;case "textarea":mc(d);Mf(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=uc)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=Nf(e));"http://www.w3.org/1999/xhtml"===
a?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Aa]=b;a[vc]=d;jj(a,b,!1,!1);b.stateNode=a;g=Vd(e,d);switch(e){case "iframe":case "object":case "embed":w("load",a);h=d;break;case "video":case "audio":for(h=0;h<Db.length;h++)w(Db[h],a);h=d;break;case "source":w("error",a);
h=d;break;case "img":case "image":case "link":w("error",a);w("load",a);h=d;break;case "form":w("reset",a);w("submit",a);h=d;break;case "details":w("toggle",a);h=d;break;case "input":Hf(a,d);h=Cd(a,d);w("invalid",a);oa(c,"onChange");break;case "option":h=Fd(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=M({},d,{value:void 0});w("invalid",a);oa(c,"onChange");break;case "textarea":Kf(a,d);h=Gd(a,d);w("invalid",a);oa(c,"onChange");break;default:h=d}Ud(e,h);var m=h;for(f in m)if(m.hasOwnProperty(f)){var n=
m[f];"style"===f?gg(a,n):"dangerouslySetInnerHTML"===f?(n=n?n.__html:void 0,null!=n&&xh(a,n)):"children"===f?"string"===typeof n?("textarea"!==e||""!==n)&&Wb(a,n):"number"===typeof n&&Wb(a,""+n):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(db.hasOwnProperty(f)?null!=n&&oa(c,f):null!=n&&xd(a,f,n,g))}switch(e){case "input":mc(a);Jf(a,d,!1);break;case "textarea":mc(a);Mf(a);break;case "option":null!=d.value&&a.setAttribute("value",""+va(d.value));break;case "select":a.multiple=
!!d.multiple;c=d.value;null!=c?hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=uc)}lg(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)kj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(k(166));c=Ta(Tb.current);Ta(ja.current);Zc(b)?(c=b.stateNode,d=b.memoizedProps,c[Aa]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?
c:c.ownerDocument).createTextNode(d),c[Aa]=b,b.stateNode=c)}return null;case 13:q(D);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Zc(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||
0!==(D.current&1))F===Xa&&(F=ad);else{if(F===Xa||F===ad)F=bd;0!==Xb&&null!==U&&(Ya(U,P),yh(U,Xb))}if(c||d)b.effectTag|=4;return null;case 4:return tb(),wh(b),null;case 10:return me(b),null;case 17:return N(b.type)&&(q(G),q(B)),null;case 19:q(D);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)$c(d,!1);else{if(F!==Xa||null!==a&&0!==(a.effectTag&64))for(f=b.child;null!==f;){a=Rc(f);if(null!==a){b.effectTag|=64;$c(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=
e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,
e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;y(D,D.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=Rc(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),$c(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*Y()-d.renderingStartTime>d.tailExpiration&&
1<c&&(b.effectTag|=64,e=!0,$c(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=Y()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=Y(),c.sibling=null,b=D.current,y(D,e?b&1|2:b&1),c):null}throw Error(k(156,b.tag));}function lj(a,b){switch(a.tag){case 1:return N(a.type)&&(q(G),q(B)),b=a.effectTag,b&4096?
(a.effectTag=b&-4097|64,a):null;case 3:tb();q(G);q(B);b=a.effectTag;if(0!==(b&64))throw Error(k(285));a.effectTag=b&-4097|64;return a;case 5:return te(a),null;case 13:return q(D),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return q(D),null;case 4:return tb(),null;case 10:return me(a),null;default:return null}}function Le(a,b){return{value:a,source:b,stack:Bd(b)}}function Me(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bd(c));null!==c&&na(c.type);b=b.value;null!==a&&1===a.tag&&
na(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function mj(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Za(a,c)}}function zh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Za(a,c)}else b.current=null}function nj(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===
b.type?c:aa(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(k(163));}function Ah(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Bh(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function oj(a,b,c,d){switch(c.tag){case 0:case 11:case 15:case 22:Bh(3,
c);return;case 1:a=c.stateNode;c.effectTag&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:aa(c.type,b.memoizedProps),a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Wg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Wg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.effectTag&4&&lg(c.type,c.memoizedProps)&&
a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&bg(c))));return;case 19:case 17:case 20:case 21:return}throw Error(k(163));}function Ch(a,b,c){"function"===typeof Ne&&Ne(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;Da(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Za(g,
h)}}a=a.next}while(a!==d)})}break;case 1:zh(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&mj(b,c);break;case 5:zh(b);break;case 4:Dh(a,b,c)}}function Eh(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Eh(b)}function Fh(a){return 5===a.tag||3===a.tag||4===a.tag}function Gh(a){a:{for(var b=a.return;null!==
b;){if(Fh(b)){var c=b;break a}b=b.return}throw Error(k(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(k(161));}c.effectTag&16&&(Wb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Fh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;
else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Oe(a,c,b):Pe(a,c,b)}function Oe(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=uc));else if(4!==d&&(a=a.child,null!==a))for(Oe(a,b,c),a=a.sibling;null!==a;)Oe(a,b,c),a=a.sibling}
function Pe(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Pe(a,b,c),a=a.sibling;null!==a;)Pe(a,b,c),a=a.sibling}function Dh(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(k(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=
a,m=d,n=c,l=m;;)if(Ch(h,l,n),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===m)break a;for(;null===l.sibling;){if(null===l.return||l.return===m)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}g?(h=f,m=d.stateNode,8===h.nodeType?h.parentNode.removeChild(m):h.removeChild(m)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ch(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===
b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}function Qe(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Ah(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[vc]=d;"input"===a&&"radio"===d.type&&null!=d.name&&If(c,d);Vd(a,e);b=Vd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],
h=f[e+1];"style"===g?gg(c,h):"dangerouslySetInnerHTML"===g?xh(c,h):"children"===g?Wb(c,h):xd(c,g,h,b)}switch(a){case "input":Dd(c,d);break;case "textarea":Lf(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?hb(c,!!d.multiple,d.defaultValue,!0):hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(k(162));b.stateNode.nodeValue=b.memoizedProps;
return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,bg(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,Re=Y());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=fg("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?
"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Hh(b);return;case 19:Hh(b);return;case 17:return}throw Error(k(163));}function Hh(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=
new pj);b.forEach(function(b){var d=qj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Ih(a,b,c){c=Ea(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){cd||(cd=!0,Se=d);Me(a,b)};return c}function Jh(a,b,c){c=Ea(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Me(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&
(null===La?La=new Set([this]):La.add(this),Me(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ka(){return(p&(ca|ma))!==H?1073741821-(Y()/10|0):0!==dd?dd:dd=1073741821-(Y()/10|0)}function Va(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=Cc();if(0===(b&4))return 99===d?1073741823:1073741822;if((p&ca)!==H)return P;if(null!==c)a=Fc(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=Fc(a,150,100);break;case 97:case 96:a=
Fc(a,5E3,250);break;case 95:a=2;break;default:throw Error(k(326));}null!==U&&a===P&&--a;return a}function ed(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&
(U===e&&(Kc(b),F===bd&&Ya(e,P)),yh(e,b));return e}function fd(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Kh(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}function V(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=Og(Te.bind(null,a));else{var b=fd(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=ka();
1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Qg&&Rg(c)}a.callbackExpirationTime=b;a.callbackPriority=d;b=1073741823===b?Og(Te.bind(null,a)):Ng(d,Lh.bind(null,a),{timeout:10*(1073741821-b)-Y()});a.callbackNode=b}}}function Lh(a,b){dd=0;if(b)return b=ka(),Ue(a,b),V(a),null;var c=fd(a);if(0!==c){b=a.callbackNode;if((p&(ca|ma))!==H)throw Error(k(327));
xb();a===U&&c===P||$a(a,c);if(null!==t){var d=p;p|=ca;var e=Mh();do try{rj();break}catch(h){Nh(a,h)}while(1);le();p=d;gd.current=e;if(F===hd)throw b=id,$a(a,c),Ya(a,c),V(a),b;if(null===t)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=F,U=null,d){case Xa:case hd:throw Error(k(345));case Oh:Ue(a,2<c?2:c);break;case ad:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ve(e));if(1073741823===ta&&(e=Re+Ph-Y(),10<e)){if(jd){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=
c;$a(a,c);break}}f=fd(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=We(ab.bind(null,a),e);break}ab(a);break;case bd:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ve(e));if(jd&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;$a(a,c);break}e=fd(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}1073741823!==Yb?d=10*(1073741821-Yb)-Y():1073741823===ta?d=0:(d=10*(1073741821-ta)-5E3,e=Y(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=
(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*sj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=We(ab.bind(null,a),d);break}ab(a);break;case Xe:if(1073741823!==ta&&null!==kd){f=ta;var g=kd;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=Y()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Ya(a,c);a.timeoutHandle=We(ab.bind(null,a),d);break}}ab(a);break;default:throw Error(k(329));}V(a);if(a.callbackNode===b)return Lh.bind(null,a)}}return null}function Te(a){var b=
a.lastExpiredTime;b=0!==b?b:1073741823;if((p&(ca|ma))!==H)throw Error(k(327));xb();a===U&&b===P||$a(a,b);if(null!==t){var c=p;p|=ca;var d=Mh();do try{tj();break}catch(e){Nh(a,e)}while(1);le();p=c;gd.current=d;if(F===hd)throw c=id,$a(a,b),Ya(a,b),V(a),c;if(null!==t)throw Error(k(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;ab(a);V(a)}return null}function uj(){if(null!==bb){var a=bb;bb=null;a.forEach(function(a,c){Ue(c,a);V(c)});ha()}}function Qh(a,b){var c=p;p|=1;try{return a(b)}finally{p=
c,p===H&&ha()}}function Rh(a,b){var c=p;p&=-2;p|=Ye;try{return a(b)}finally{p=c,p===H&&ha()}}function $a(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,vj(c));if(null!==t)for(c=t.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(q(G),q(B));break;case 3:tb();q(G);q(B);break;case 5:te(d);break;case 4:tb();break;case 13:q(D);break;case 19:q(D);break;case 10:me(d)}c=c.return}U=a;t=Sa(a.current,null);
P=b;F=Xa;id=null;Yb=ta=1073741823;kd=null;Xb=0;jd=!1}function Nh(a,b){do{try{le();Sc.current=Tc;if(Uc)for(var c=z.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}Ia=0;J=K=z=null;Uc=!1;if(null===t||null===t.return)return F=hd,id=b,t=null;a:{var e=a,f=t.return,g=t,h=b;b=P;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var m=h;if(0===(g.mode&2)){var n=g.alternate;n?(g.updateQueue=n.updateQueue,g.memoizedState=
n.memoizedState,g.expirationTime=n.expirationTime):(g.updateQueue=null,g.memoizedState=null)}var l=0!==(D.current&1),k=f;do{var p;if(p=13===k.tag){var q=k.memoizedState;if(null!==q)p=null!==q.dehydrated?!0:!1;else{var w=k.memoizedProps;p=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:l?!1:!0}}if(p){var y=k.updateQueue;if(null===y){var r=new Set;r.add(m);k.updateQueue=r}else y.add(m);if(0===(k.mode&2)){k.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var O=
Ea(1073741823,null);O.tag=Jc;Fa(g,O)}g.expirationTime=1073741823;break a}h=void 0;g=b;var v=e.pingCache;null===v?(v=e.pingCache=new wj,h=new Set,v.set(m,h)):(h=v.get(m),void 0===h&&(h=new Set,v.set(m,h)));if(!h.has(g)){h.add(g);var x=xj.bind(null,e,m,g);m.then(x,x)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);h=Error((na(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
Bd(g))}F!==Xe&&(F=Oh);h=Le(h,g);k=f;do{switch(k.tag){case 3:m=h;k.effectTag|=4096;k.expirationTime=b;var A=Ih(k,m,b);Ug(k,A);break a;case 1:m=h;var u=k.type,B=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof u.getDerivedStateFromError||null!==B&&"function"===typeof B.componentDidCatch&&(null===La||!La.has(B)))){k.effectTag|=4096;k.expirationTime=b;var H=Jh(k,m,b);Ug(k,H);break a}}k=k.return}while(null!==k)}t=Sh(t)}catch(cj){b=cj;continue}break}while(1)}function Mh(a){a=gd.current;gd.current=
Tc;return null===a?Tc:a}function Vg(a,b){a<ta&&2<a&&(ta=a);null!==b&&a<Yb&&2<a&&(Yb=a,kd=b)}function Kc(a){a>Xb&&(Xb=a)}function tj(){for(;null!==t;)t=Th(t)}function rj(){for(;null!==t&&!yj();)t=Th(t)}function Th(a){var b=zj(a.alternate,a,P);a.memoizedProps=a.pendingProps;null===b&&(b=Sh(a));Uh.current=null;return b}function Sh(a){t=a;do{var b=t.alternate;a=t.return;if(0===(t.effectTag&2048)){b=hj(b,t,P);if(1===P||1!==t.childExpirationTime){for(var c=0,d=t.child;null!==d;){var e=d.expirationTime,
f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}t.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=t.firstEffect),a.lastEffect=t.lastEffect),1<t.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=t:a.firstEffect=t,a.lastEffect=t))}else{b=lj(t);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=
2048)}b=t.sibling;if(null!==b)return b;t=a}while(null!==t);F===Xa&&(F=Xe);return null}function Ve(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function ab(a){var b=Cc();Da(99,Aj.bind(null,a,b));return null}function Aj(a,b){do xb();while(null!==Zb);if((p&(ca|ma))!==H)throw Error(k(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(k(177));a.callbackNode=null;a.callbackExpirationTime=
0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ve(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(t=U=null,P=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=p;p|=ma;Uh.current=null;Ze=tc;var g=kg();if(Xd(g)){if("selectionStart"in
g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var m=h.getSelection&&h.getSelection();if(m&&0!==m.rangeCount){h=m.anchorNode;var n=m.anchorOffset,q=m.focusNode;m=m.focusOffset;try{h.nodeType,q.nodeType}catch(sb){h=null;break a}var ba=0,w=-1,y=-1,B=0,D=0,r=g,z=null;b:for(;;){for(var v;;){r!==h||0!==n&&3!==r.nodeType||(w=ba+n);r!==q||0!==m&&3!==r.nodeType||(y=ba+m);3===r.nodeType&&(ba+=r.nodeValue.length);if(null===(v=r.firstChild))break;z=r;
r=v}for(;;){if(r===g)break b;z===h&&++B===n&&(w=ba);z===q&&++D===m&&(y=ba);if(null!==(v=r.nextSibling))break;r=z;z=r.parentNode}r=v}h=-1===w||-1===y?null:{start:w,end:y}}else h=null}h=h||{start:0,end:0}}else h=null;$e={activeElementDetached:null,focusedElem:g,selectionRange:h};tc=!1;l=e;do try{Bj()}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect}while(null!==l);l=e;do try{for(g=a,h=b;null!==l;){var x=l.effectTag;x&16&&Wb(l.stateNode,"");if(x&128){var A=l.alternate;if(null!==A){var u=
A.ref;null!==u&&("function"===typeof u?u(null):u.current=null)}}switch(x&1038){case 2:Gh(l);l.effectTag&=-3;break;case 6:Gh(l);l.effectTag&=-3;Qe(l.alternate,l);break;case 1024:l.effectTag&=-1025;break;case 1028:l.effectTag&=-1025;Qe(l.alternate,l);break;case 4:Qe(l.alternate,l);break;case 8:n=l,Dh(g,n,h),Eh(n)}l=l.nextEffect}}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect}while(null!==l);u=$e;A=kg();x=u.focusedElem;h=u.selectionRange;if(A!==x&&x&&x.ownerDocument&&jg(x.ownerDocument.documentElement,
x)){null!==h&&Xd(x)&&(A=h.start,u=h.end,void 0===u&&(u=A),"selectionStart"in x?(x.selectionStart=A,x.selectionEnd=Math.min(u,x.value.length)):(u=(A=x.ownerDocument||document)&&A.defaultView||window,u.getSelection&&(u=u.getSelection(),n=x.textContent.length,g=Math.min(h.start,n),h=void 0===h.end?g:Math.min(h.end,n),!u.extend&&g>h&&(n=h,h=g,g=n),n=ig(x,g),q=ig(x,h),n&&q&&(1!==u.rangeCount||u.anchorNode!==n.node||u.anchorOffset!==n.offset||u.focusNode!==q.node||u.focusOffset!==q.offset)&&(A=A.createRange(),
A.setStart(n.node,n.offset),u.removeAllRanges(),g>h?(u.addRange(A),u.extend(q.node,q.offset)):(A.setEnd(q.node,q.offset),u.addRange(A))))));A=[];for(u=x;u=u.parentNode;)1===u.nodeType&&A.push({element:u,left:u.scrollLeft,top:u.scrollTop});"function"===typeof x.focus&&x.focus();for(x=0;x<A.length;x++)u=A[x],u.element.scrollLeft=u.left,u.element.scrollTop=u.top}tc=!!Ze;$e=Ze=null;a.current=c;l=e;do try{for(x=a;null!==l;){var F=l.effectTag;F&36&&oj(x,l.alternate,l);if(F&128){A=void 0;var E=l.ref;if(null!==
E){var G=l.stateNode;switch(l.tag){case 5:A=G;break;default:A=G}"function"===typeof E?E(A):E.current=A}}l=l.nextEffect}}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect}while(null!==l);l=null;Cj();p=f}else a.current=c;if(ld)ld=!1,Zb=a,$b=b;else for(l=e;null!==l;)b=l.nextEffect,l.nextEffect=null,l=b;b=a.firstPendingTime;0===b&&(La=null);1073741823===b?a===af?ac++:(ac=0,af=a):ac=0;"function"===typeof bf&&bf(c.stateNode,d);V(a);if(cd)throw cd=!1,a=Se,Se=null,a;if((p&Ye)!==H)return null;
ha();return null}function Bj(){for(;null!==l;){var a=l.effectTag;0!==(a&256)&&nj(l.alternate,l);0===(a&512)||ld||(ld=!0,Ng(97,function(){xb();return null}));l=l.nextEffect}}function xb(){if(90!==$b){var a=97<$b?97:$b;$b=90;return Da(a,Dj)}}function Dj(){if(null===Zb)return!1;var a=Zb;Zb=null;if((p&(ca|ma))!==H)throw Error(k(331));var b=p;p|=ma;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Ah(5,c),Bh(5,c)}}catch(d){if(null===
a)throw Error(k(330));Za(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}p=b;ha();return!0}function Vh(a,b,c){b=Le(c,b);b=Ih(a,b,1073741823);Fa(a,b);a=ed(a,1073741823);null!==a&&V(a)}function Za(a,b){if(3===a.tag)Vh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Vh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===La||!La.has(d))){a=Le(b,a);a=Jh(c,a,1073741823);Fa(c,a);c=ed(c,1073741823);null!==
c&&V(c);break}}c=c.return}}function xj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&P===c?F===bd||F===ad&&1073741823===ta&&Y()-Re<Ph?$a(a,P):jd=!0:Kh(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,V(a)))}function qj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=ka(),b=Va(b,a,null));a=ed(a,b);null!==a&&V(a)}function Ej(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=
b.inject(a);bf=function(a,e){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(f){}};Ne=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}function Fj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=
null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Ge(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Gj(a){if("function"===typeof a)return Ge(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===zd)return 11;if(a===Ad)return 14}return 2}function Sa(a,b){var c=a.alternate;null===c?(c=la(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=
null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function Oc(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ge(a)&&(g=1);else if("string"===typeof a)g=
5;else a:switch(a){case Ma:return Ha(c.children,e,f,b);case Hj:g=8;e|=7;break;case Af:g=8;e|=1;break;case kc:return a=la(12,c,b,e|8),a.elementType=kc,a.type=kc,a.expirationTime=f,a;case lc:return a=la(13,c,b,e),a.type=lc,a.elementType=lc,a.expirationTime=f,a;case yd:return a=la(19,c,b,e),a.elementType=yd,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Cf:g=10;break a;case Bf:g=9;break a;case zd:g=11;break a;case Ad:g=14;break a;case Ef:g=16;d=null;break a;case Df:g=
22;break a}throw Error(k(130,null==a?a:typeof a,""));}b=la(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ha(a,b,c,d){a=la(7,a,d,b);a.expirationTime=c;return a}function qe(a,b,c){a=la(6,a,null,b);a.expirationTime=c;return a}function re(a,b,c){b=la(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Ij(a,b,c){this.tag=b;this.current=null;this.containerInfo=
a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Kh(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Ya(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;
c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}function yh(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Ue(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function md(a,b,c,d){var e=b.current,f=ka(),g=Vb.suspense;f=Va(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(Na(c)!==c||1!==c.tag)throw Error(k(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(N(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(k(171));}if(1===c.tag){var m=c.type;if(N(m)){c=Gg(c,m,h);break a}}c=h}else c=Ca;null===b.context?b.context=c:b.pendingContext=c;b=Ea(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Fa(e,b);Ja(e,f);return f}function cf(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Wh(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function df(a,b){Wh(a,b);(a=a.alternate)&&Wh(a,b)}function ef(a,b,c){c=null!=c&&!0===c.hydrate;var d=new Ij(a,b,c),e=la(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ne(e);a[Lb]=d.current;c&&0!==b&&
xi(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}function bc(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Jj(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ef(a,0,b?{hydrate:!0}:void 0)}function nd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;
if("function"===typeof e){var h=e;e=function(){var a=cf(g);h.call(a)}}md(b,g,a,e)}else{f=c._reactRootContainer=Jj(c,d);g=f._internalRoot;if("function"===typeof e){var m=e;e=function(){var a=cf(g);m.call(a)}}Rh(function(){md(b,g,a,e)})}return cf(g)}function Kj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:gb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Xh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;
if(!bc(b))throw Error(k(200));return Kj(a,b,null,c)}if(!ea)throw Error(k(227));var ki=function(a,b,c,d,e,f,g,h,m){var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n)}catch(C){this.onError(C)}},yb=!1,gc=null,hc=!1,pd=null,li={onError:function(a){yb=!0;gc=a}},td=null,rf=null,mf=null,ic=null,cb={},jc=[],qd={},db={},rd={},wa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),M=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,
sd=null,eb=null,fb=null,ee=function(a,b){return a(b)},eg=function(a,b,c,d,e){return a(b,c,d,e)},vd=function(){},vf=ee,Oa=!1,wd=!1,Z=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Lj=Z.unstable_cancelCallback,ff=Z.unstable_now,$f=Z.unstable_scheduleCallback,Mj=Z.unstable_shouldYield,Yh=Z.unstable_requestPaint,Pd=Z.unstable_runWithPriority,Nj=Z.unstable_getCurrentPriorityLevel,Oj=Z.unstable_ImmediatePriority,Zh=Z.unstable_UserBlockingPriority,ag=Z.unstable_NormalPriority,Pj=Z.unstable_LowPriority,
Qj=Z.unstable_IdlePriority,oi=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf=Object.prototype.hasOwnProperty,yf={},xf={},E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=
new L(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new L(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new L(a,2,!1,a.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new L(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=
new L(a,3,!1,a.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(a){E[a]=new L(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){E[a]=new L(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){E[a]=new L(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){E[a]=new L(a,5,!1,a.toLowerCase(),null,!1)});var gf=/[\-:]([a-z])/g,hf=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(gf,hf);E[b]=new L(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(gf,hf);E[b]=new L(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(gf,hf);E[b]=new L(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){E[a]=new L(a,1,!1,a.toLowerCase(),null,!1)});E.xlinkHref=new L("xlinkHref",1,
!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){E[a]=new L(a,1,!1,a.toLowerCase(),null,!0)});var da=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;da.hasOwnProperty("ReactCurrentDispatcher")||(da.ReactCurrentDispatcher={current:null});da.hasOwnProperty("ReactCurrentBatchConfig")||(da.ReactCurrentBatchConfig={suspense:null});var si=/^(.*)[\\\/]/,Q="function"===typeof Symbol&&Symbol.for,Pc=Q?Symbol.for("react.element"):60103,gb=Q?Symbol.for("react.portal"):
60106,Ma=Q?Symbol.for("react.fragment"):60107,Af=Q?Symbol.for("react.strict_mode"):60108,kc=Q?Symbol.for("react.profiler"):60114,Cf=Q?Symbol.for("react.provider"):60109,Bf=Q?Symbol.for("react.context"):60110,Hj=Q?Symbol.for("react.concurrent_mode"):60111,zd=Q?Symbol.for("react.forward_ref"):60112,lc=Q?Symbol.for("react.suspense"):60113,yd=Q?Symbol.for("react.suspense_list"):60120,Ad=Q?Symbol.for("react.memo"):60115,Ef=Q?Symbol.for("react.lazy"):60116,Df=Q?Symbol.for("react.block"):60121,zf="function"===
typeof Symbol&&Symbol.iterator,od,xh=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{od=od||document.createElement("div");od.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=od.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Wb=function(a,
b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},ib={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Id={},Of={};wa&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete ib.animationend.animation,delete ib.animationiteration.animation,delete ib.animationstart.animation),"TransitionEvent"in
window||delete ib.transitionend.transition);var $h=oc("animationend"),ai=oc("animationiteration"),bi=oc("animationstart"),ci=oc("transitionend"),Db="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new ("function"===typeof WeakMap?WeakMap:Map),Ab=null,wi=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;
if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)lf(a,b[d],c[d]);else b&&lf(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},qc=[],Rd=!1,fa=[],xa=null,ya=null,za=null,Eb=new Map,Fb=new Map,Jb=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
yi="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" "),dg={},cg=new Map,Td=new Map,Rj=["abort","abort",$h,"animationEnd",ai,"animationIteration",bi,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata",
"loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ci,"transitionEnd","waiting","waiting"];Sd("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Sd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Sd(Rj,2);(function(a,b){for(var c=0;c<a.length;c++)Td.set(a[c],b)})("change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),0);var Hi=Zh,Gi=Pd,tc=!0,Kb={animationIterationCount:!0,
borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,
strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sj=["Webkit","ms","Moz","O"];Object.keys(Kb).forEach(function(a){Sj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Kb[b]=Kb[a]})});var Ii=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ng="$",og="/$",$d="$?",Zd="$!",Ze=null,$e=null,We="function"===typeof setTimeout?setTimeout:void 0,vj="function"===
typeof clearTimeout?clearTimeout:void 0,jf=Math.random().toString(36).slice(2),Aa="__reactInternalInstance$"+jf,vc="__reactEventHandlers$"+jf,Lb="__reactContainere$"+jf,Ba=null,ce=null,wc=null;M(R.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==
typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){this.isPersistent=xc},isPersistent:yc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=yc;this._dispatchInstances=this._dispatchListeners=null}});R.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||
Date.now()},defaultPrevented:null,isTrusted:null};R.extend=function(a){function b(){return c.apply(this,arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;M(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=M({},c.Interface,a);b.extend=c.extend;sg(b);return b};sg(R);var Tj=R.extend({data:null}),Uj=R.extend({data:null}),Ni=[9,13,27,32],de=wa&&"CompositionEvent"in window,cc=null;wa&&"documentMode"in document&&(cc=document.documentMode);var Vj=wa&&"TextEvent"in window&&
!cc,xg=wa&&(!de||cc&&8<cc&&11>=cc),wg=String.fromCharCode(32),ua={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},
dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vg=!1,mb=!1,Wj={eventTypes:ua,extractEvents:function(a,b,c,d,e){var f;if(de)b:{switch(a){case "compositionstart":var g=ua.compositionStart;break b;case "compositionend":g=ua.compositionEnd;break b;case "compositionupdate":g=
ua.compositionUpdate;break b}g=void 0}else mb?tg(a,c)&&(g=ua.compositionEnd):"keydown"===a&&229===c.keyCode&&(g=ua.compositionStart);g?(xg&&"ko"!==c.locale&&(mb||g!==ua.compositionStart?g===ua.compositionEnd&&mb&&(f=rg()):(Ba=d,ce="value"in Ba?Ba.value:Ba.textContent,mb=!0)),e=Tj.getPooled(g,b,c,d),f?e.data=f:(f=ug(c),null!==f&&(e.data=f)),lb(e),f=e):f=null;(a=Vj?Oi(a,c):Pi(a,c))?(b=Uj.getPooled(ua.beforeInput,b,c,d),b.data=a,lb(b)):b=null;return null===f?b:null===b?f:[f,b]}},Qi={color:!0,date:!0,
datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ag={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},Mb=null,Nb=null,kf=!1;wa&&(kf=Tf("input")&&(!document.documentMode||9<document.documentMode));var Xj={eventTypes:Ag,_isInputEventSupported:kf,extractEvents:function(a,b,c,d,e){e=b?Pa(b):window;var f=
e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Si;else if(yg(e))if(kf)g=Wi;else{g=Ui;var h=Ti}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Vi);if(g&&(g=g(a,b)))return zg(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ed(e,"number",e.value)}},dc=R.extend({view:null,detail:null}),Yi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},di=0,ei=0,fi=!1,gi=!1,ec=dc.extend({screenX:null,
screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:fe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=di;di=a.screenX;return fi?"mousemove"===a.type?a.screenX-b:0:(fi=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=ei;ei=a.screenY;return gi?"mousemove"===
a.type?a.screenY-b:0:(gi=!0,0)}}),hi=ec.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fc={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout",
"pointerover"]}},Yj={eventTypes:fc,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Bb(b):null,null!==b){var h=Na(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var m=ec;var n=fc.mouseLeave;
var l=fc.mouseEnter;var k="mouse"}else if("pointerout"===a||"pointerover"===a)m=hi,n=fc.pointerLeave,l=fc.pointerEnter,k="pointer";a=null==g?f:Pa(g);f=null==b?f:Pa(b);n=m.getPooled(n,g,c,d);n.type=k+"leave";n.target=a;n.relatedTarget=f;c=m.getPooled(l,b,c,d);c.type=k+"enter";c.target=f;c.relatedTarget=a;d=g;k=b;if(d&&k)a:{m=d;l=k;g=0;for(a=m;a;a=pa(a))g++;a=0;for(b=l;b;b=pa(b))a++;for(;0<g-a;)m=pa(m),g--;for(;0<a-g;)l=pa(l),a--;for(;g--;){if(m===l||m===l.alternate)break a;m=pa(m);l=pa(l)}m=null}else m=
null;l=m;for(m=[];d&&d!==l;){g=d.alternate;if(null!==g&&g===l)break;m.push(d);d=pa(d)}for(d=[];k&&k!==l;){g=k.alternate;if(null!==g&&g===l)break;d.push(k);k=pa(k)}for(k=0;k<m.length;k++)be(m[k],"bubbled",n);for(k=d.length;0<k--;)be(d[k],"captured",c);return 0===(e&64)?[n]:[n,c]}},Qa="function"===typeof Object.is?Object.is:Zi,$i=Object.prototype.hasOwnProperty,Zj=wa&&"documentMode"in document&&11>=document.documentMode,Eg={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},
dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},nb=null,he=null,Pb=null,ge=!1,ak={eventTypes:Eg,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=Jd(e);f=rd.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pa(b):window;switch(a){case "focus":if(yg(e)||"true"===e.contentEditable)nb=e,he=b,Pb=null;break;case "blur":Pb=he=nb=null;
break;case "mousedown":ge=!0;break;case "contextmenu":case "mouseup":case "dragend":return ge=!1,Dg(c,d);case "selectionchange":if(Zj)break;case "keydown":case "keyup":return Dg(c,d)}return null}},bk=R.extend({animationName:null,elapsedTime:null,pseudoElement:null}),ck=R.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),dk=dc.extend({relatedTarget:null}),ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",
Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",
224:"Meta"},gk=dc.extend({key:function(a){if(a.key){var b=ek[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Ac(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?fk[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:fe,charCode:function(a){return"keypress"===a.type?Ac(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Ac(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),hk=ec.extend({dataTransfer:null}),ik=dc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:fe}),jk=R.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),kk=ec.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?
-a.wheelDelta:0},deltaZ:null,deltaMode:null}),lk={eventTypes:dg,extractEvents:function(a,b,c,d,e){e=cg.get(a);if(!e)return null;switch(a){case "keypress":if(0===Ac(c))return null;case "keydown":case "keyup":a=gk;break;case "blur":case "focus":a=dk;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=ec;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
hk;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=ik;break;case $h:case ai:case bi:a=bk;break;case ci:a=jk;break;case "scroll":a=dc;break;case "wheel":a=kk;break;case "copy":case "cut":case "paste":a=ck;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=hi;break;default:a=R}b=a.getPooled(e,b,c,d);lb(b);return b}};(function(a){if(ic)throw Error(k(101));
ic=Array.prototype.slice.call(a);nf()})("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){td=a;rf=b;mf=c})(ae,Hb,Pa);pf({SimpleEventPlugin:lk,EnterLeaveEventPlugin:Yj,ChangeEventPlugin:Xj,SelectEventPlugin:ak,BeforeInputEventPlugin:Wj});var ie=[],ob=-1,Ca={},B={current:Ca},G={current:!1},Ra=Ca,bj=Pd,je=$f,Rg=Lj,aj=Nj,Dc=Oj,Ig=Zh,Jg=ag,Kg=Pj,Lg=Qj,Qg={},yj=Mj,Cj=void 0!==Yh?Yh:function(){},qa=null,
Ec=null,ke=!1,ii=ff(),Y=1E4>ii?ff:function(){return ff()-ii},Ic={current:null},Hc=null,qb=null,Gc=null,Tg=0,Jc=2,Ga=!1,Vb=da.ReactCurrentBatchConfig,$g=(new ea.Component).refs,Mc={isMounted:function(a){return(a=a._reactInternalFiber)?Na(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ka(),e=Vb.suspense;d=Va(d,a,e);e=Ea(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ka(),e=Vb.suspense;
d=Va(d,a,e);e=Ea(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ka(),d=Vb.suspense;c=Va(c,a,d);d=Ea(c,d);d.tag=Jc;void 0!==b&&null!==b&&(d.callback=b);Fa(a,d);Ja(a,c)}},Qc=Array.isArray,wb=ah(!0),Fe=ah(!1),Sb={},ja={current:Sb},Ub={current:Sb},Tb={current:Sb},D={current:0},Sc=da.ReactCurrentDispatcher,X=da.ReactCurrentBatchConfig,Ia=0,z=null,K=null,J=null,Uc=!1,Tc={readContext:W,useCallback:S,useContext:S,
useEffect:S,useImperativeHandle:S,useLayoutEffect:S,useMemo:S,useReducer:S,useRef:S,useState:S,useDebugValue:S,useResponder:S,useDeferredValue:S,useTransition:S},dj={readContext:W,useCallback:ih,useContext:W,useEffect:eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ze(4,2,gh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ze(4,2,a,b)},useMemo:function(a,b){var c=ub();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=
ub();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=ch.bind(null,z,a);return[d.memoizedState,a]},useRef:function(a){var b=ub();a={current:a};return b.memoizedState=a},useState:xe,useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=xe(a),d=c[0],e=c[1];eh(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a)}finally{X.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
xe(!1),c=b[0];b=b[1];return[ih(Ce.bind(null,b,a),[b,a]),c]}},ej={readContext:W,useCallback:Yc,useContext:W,useEffect:Xc,useImperativeHandle:hh,useLayoutEffect:fh,useMemo:jh,useReducer:Vc,useRef:dh,useState:function(a){return Vc(Ua)},useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=Vc(Ua),d=c[0],e=c[1];Xc(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a)}finally{X.suspense=c}},[a,b]);return d},useTransition:function(a){var b=Vc(Ua),c=b[0];b=b[1];return[Yc(Ce.bind(null,
b,a),[b,a]),c]}},fj={readContext:W,useCallback:Yc,useContext:W,useEffect:Xc,useImperativeHandle:hh,useLayoutEffect:fh,useMemo:jh,useReducer:Wc,useRef:dh,useState:function(a){return Wc(Ua)},useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=Wc(Ua),d=c[0],e=c[1];Xc(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a)}finally{X.suspense=c}},[a,b]);return d},useTransition:function(a){var b=Wc(Ua),c=b[0];b=b[1];return[Yc(Ce.bind(null,b,a),[b,a]),c]}},ra=null,Ka=null,Wa=
!1,gj=da.ReactCurrentOwner,ia=!1,Je={dehydrated:null,retryTime:0};var jj=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};var wh=function(a){};var ij=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Ta(ja.current);a=null;switch(c){case "input":f=
Cd(g,f);d=Cd(g,d);a=[];break;case "option":f=Fd(g,f);d=Fd(g,d);a=[];break;case "select":f=M({},f,{value:void 0});d=M({},d,{value:void 0});a=[];break;case "textarea":f=Gd(g,f);d=Gd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=uc)}Ud(c,d);var h,m;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===h)for(m in g=f[h],g)g.hasOwnProperty(m)&&(c||(c={}),c[m]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==
h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(db.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var k=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&k!==g&&(null!=k||null!=g))if("style"===h)if(g){for(m in g)!g.hasOwnProperty(m)||k&&k.hasOwnProperty(m)||(c||(c={}),c[m]="");for(m in k)k.hasOwnProperty(m)&&g[m]!==k[m]&&(c||(c={}),c[m]=k[m])}else c||(a||(a=[]),a.push(h,c)),c=k;else"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,g=g?g.__html:void 0,null!=k&&g!==k&&(a=a||
[]).push(h,k)):"children"===h?g===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(h,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(db.hasOwnProperty(h)?(null!=k&&oa(e,h),a||g===k||(a=[])):(a=a||[]).push(h,k))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};var kj=function(a,b,c,d){c!==d&&(b.effectTag|=4)};var pj="function"===typeof WeakSet?WeakSet:Set,wj="function"===typeof WeakMap?WeakMap:Map,sj=Math.ceil,gd=da.ReactCurrentDispatcher,
Uh=da.ReactCurrentOwner,H=0,Ye=8,ca=16,ma=32,Xa=0,hd=1,Oh=2,ad=3,bd=4,Xe=5,p=H,U=null,t=null,P=0,F=Xa,id=null,ta=1073741823,Yb=1073741823,kd=null,Xb=0,jd=!1,Re=0,Ph=500,l=null,cd=!1,Se=null,La=null,ld=!1,Zb=null,$b=90,bb=null,ac=0,af=null,dd=0,Ja=function(a,b){if(50<ac)throw ac=0,af=null,Error(k(185));a=ed(a,b);if(null!==a){var c=Cc();1073741823===b?(p&Ye)!==H&&(p&(ca|ma))===H?Te(a):(V(a),p===H&&ha()):V(a);(p&4)===H||98!==c&&99!==c||(null===bb?bb=new Map([[a,b]]):(c=bb.get(a),(void 0===c||c>b)&&bb.set(a,
b)))}};var zj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||G.current)ia=!0;else{if(d<c){ia=!1;switch(b.tag){case 3:sh(b);Ee();break;case 5:bh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Bc(b);break;case 4:se(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;y(Ic,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return th(a,b,c);y(D,D.current&1);b=sa(a,b,c);return null!==b?b.sibling:null}y(D,D.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return vh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);y(D,D.current);if(!d)return null}return sa(a,b,c)}ia=!1}}else ia=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=pb(b,B.current);rb(b,c);e=we(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(N(d)){var f=!0;Bc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ne(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Lc(b,d,g,a);e.updater=Mc;b.stateNode=e;e._reactInternalFiber=b;pe(b,d,a,c);b=Ie(null,b,d,!0,f,c)}else b.tag=0,T(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ri(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Gj(e);a=aa(e,a);switch(f){case 0:b=He(null,b,e,a,c);break a;case 1:b=rh(null,b,e,a,c);break a;case 11:b=nh(null,b,e,a,c);break a;case 14:b=oh(null,b,e,aa(e.type,a),d,c);break a}throw Error(k(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),He(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),rh(a,b,d,e,c);
case 3:sh(b);d=b.updateQueue;if(null===a||null===d)throw Error(k(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;oe(a,b);Qb(b,d,null,c);d=b.memoizedState.element;if(d===e)Ee(),b=sa(a,b,c);else{if(e=b.stateNode.hydrate)Ka=kb(b.stateNode.containerInfo.firstChild),ra=b,e=Wa=!0;if(e)for(c=Fe(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else T(a,b,d,c),Ee();b=b.child}return b;case 5:return bh(b),null===a&&De(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Yd(d,e)?g=null:null!==f&&Yd(d,f)&&(b.effectTag|=16),qh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(T(a,b,g,c),b=b.child),b;case 6:return null===a&&De(b),null;case 13:return th(a,b,c);case 4:return se(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=wb(b,null,d,c):T(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),nh(a,b,d,e,c);case 7:return T(a,b,b.pendingProps,c),b.child;case 8:return T(a,
b,b.pendingProps.children,c),b.child;case 12:return T(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;y(Ic,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=Qa(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!G.current){b=sa(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var m=h.dependencies;if(null!==
m){g=h.child;for(var l=m.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Ea(c,null),l.tag=Jc,Fa(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);Sg(h.return,c);m.expirationTime<c&&(m.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}T(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,rb(b,c),e=W(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,T(a,b,d,c),b.child;case 14:return e=b.type,f=aa(e,b.pendingProps),f=aa(e.type,f),oh(a,b,e,f,d,c);case 15:return ph(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Bc(b)):a=!1,rb(b,c),Yg(b,d,e),pe(b,d,e,c),Ie(null,
b,d,!0,a,c);case 19:return vh(a,b,c)}throw Error(k(156,b.tag));};var bf=null,Ne=null,la=function(a,b,c,d){return new Fj(a,b,c,d)};ef.prototype.render=function(a){md(a,this._internalRoot,null,null)};ef.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;md(null,a,null,function(){b[Lb]=null})};var Di=function(a){if(13===a.tag){var b=Fc(ka(),150,100);Ja(a,b);df(a,b)}};var Yf=function(a){13===a.tag&&(Ja(a,3),df(a,3))};var Bi=function(a){if(13===a.tag){var b=ka();b=Va(b,a,null);Ja(a,
b);df(a,b)}};sd=function(a,b,c){switch(b){case "input":Dd(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ae(d);if(!e)throw Error(k(90));Gf(d);Dd(d,e)}}}break;case "textarea":Lf(a,c);break;case "select":b=c.value,null!=b&&hb(a,!!c.multiple,b,!1)}};(function(a,b,c,d){ee=a;eg=b;vd=c;vf=d})(Qh,function(a,b,c,d,e){var f=p;p|=4;
try{return Da(98,a.bind(null,b,c,d,e))}finally{p=f,p===H&&ha()}},function(){(p&(1|ca|ma))===H&&(uj(),xb())},function(a,b){var c=p;p|=2;try{return a(b)}finally{p=c,p===H&&ha()}});var mk={Events:[Hb,Pa,ae,pf,qd,lb,function(a){Kd(a,Ki)},sf,tf,sc,pc,xb,{current:!1}]};(function(a){var b=a.findFiberByHostInstance;return Ej(M({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:da.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Sf(a);
return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Bb,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;I.createPortal=Xh;I.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===
b){if("function"===typeof a.render)throw Error(k(188));throw Error(k(268,Object.keys(a)));}a=Sf(b);a=null===a?null:a.stateNode;return a};I.flushSync=function(a,b){if((p&(ca|ma))!==H)throw Error(k(187));var c=p;p|=1;try{return Da(99,a.bind(null,b))}finally{p=c,ha()}};I.hydrate=function(a,b,c){if(!bc(b))throw Error(k(200));return nd(null,a,b,!0,c)};I.render=function(a,b,c){if(!bc(b))throw Error(k(200));return nd(null,a,b,!1,c)};I.unmountComponentAtNode=function(a){if(!bc(a))throw Error(k(40));return a._reactRootContainer?
(Rh(function(){nd(null,null,a,!1,function(){a._reactRootContainer=null;a[Lb]=null})}),!0):!1};I.unstable_batchedUpdates=Qh;I.unstable_createPortal=function(a,b){return Xh(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};I.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!bc(c))throw Error(k(200));if(null==a||void 0===a._reactInternalFiber)throw Error(k(38));return nd(a,b,c,!1,d)};I.version="16.14.0"});

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={134:function(t,e,n){"use strict";n.d(e,{default:function(){return r}});var e=n(279),i=n.n(e),e=n(370),a=n.n(e),e=n(817),o=n.n(e);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=o()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==c(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&u(t.prototype,n),r&&u(t,r),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,i());var t,e,n,r=d(o);function o(t,e){var n;return function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return t=o,n=[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){t=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){t=y("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&f(t.prototype,e),n&&f(t,n),o}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var a=n(828);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var l=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!l.string(e))throw new TypeError("Second argument must be a String");if(!l.fn(n))throw new TypeError("Third argument must be a Function");if(l.node(t))return c=e,u=n,(a=t).addEventListener(c,u),{destroy:function(){a.removeEventListener(c,u)}};if(l.nodeList(t))return r=t,o=e,i=n,Array.prototype.forEach.call(r,function(t){t.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(t){t.removeEventListener(o,i)})}};if(l.string(t))return t=t,e=e,n=n,s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,u}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(134).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{}};return n[t](e,e.exports,r),e.exports}var n,o});
/**
 * @license
 * Copyright (C) 2006 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * some functions for browser-side pretty printing of code contained in html.
 *
 * <p>
 * For a fairly comprehensive set of languages see the
 * <a href="https://github.com/google/code-prettify#for-which-languages-does-it-work">README</a>
 * file that came with this source.  At a minimum, the lexer should work on a
 * number of languages including C and friends, Java, Python, Bash, SQL, HTML,
 * XML, CSS, Javascript, and Makefiles.  It works passably on Ruby, PHP and Awk
 * and a subset of Perl, but, because of commenting conventions, doesn't work on
 * Smalltalk, Lisp-like, or CAML-like languages without an explicit lang class.
 * <p>
 * Usage: <ol>
 * <li> include this source file in an html page via
 *   {@code <script type="text/javascript" src="/path/to/prettify.js"></script>}
 * <li> define style rules.  See the example page for examples.
 * <li> mark the {@code <pre>} and {@code <code>} tags in your source with
 *    {@code class=prettyprint.}
 *    You can also use the (html deprecated) {@code <xmp>} tag, but the pretty
 *    printer needs to do more substantial DOM manipulations to support that, so
 *    some css styles may not be preserved.
 * </ol>
 * That's it.  I wanted to keep the API as simple as possible, so there's no
 * need to specify which language the code is in, but if you wish, you can add
 * another class to the {@code <pre>} or {@code <code>} element to specify the
 * language, as in {@code <pre class="prettyprint lang-java">}.  Any class that
 * starts with "lang-" followed by a file extension, specifies the file type.
 * See the "lang-*.js" files in this directory for code that implements
 * per-language file handlers.
 * <p>
 * Change log:<br>
 * cbeust, 2006/08/22
 * <blockquote>
 *   Java annotations (start with "@") are now captured as literals ("lit")
 * </blockquote>
 * @requires console
 */

// JSLint declarations
/*global console, document, navigator, setTimeout, window, define */

/**
 * @typedef {!Array.<number|string>}
 * Alternating indices and the decorations that should be inserted there.
 * The indices are monotonically increasing.
 */
var DecorationsT;

/**
 * @typedef {!{
 *   sourceNode: !Element,
 *   pre: !(number|boolean),
 *   langExtension: ?string,
 *   numberLines: ?(number|boolean),
 *   sourceCode: ?string,
 *   spans: ?(Array.<number|Node>),
 *   basePos: ?number,
 *   decorations: ?DecorationsT
 * }}
 * <dl>
 *  <dt>sourceNode<dd>the element containing the source
 *  <dt>sourceCode<dd>source as plain text
 *  <dt>pre<dd>truthy if white-space in text nodes
 *     should be considered significant.
 *  <dt>spans<dd> alternating span start indices into source
 *     and the text node or element (e.g. {@code <BR>}) corresponding to that
 *     span.
 *  <dt>decorations<dd>an array of style classes preceded
 *     by the position at which they start in job.sourceCode in order
 *  <dt>basePos<dd>integer position of this.sourceCode in the larger chunk of
 *     source.
 * </dl>
 */
var JobT;

/**
 * @typedef {!{
 *   sourceCode: string,
 *   spans: !(Array.<number|Node>)
 * }}
 * <dl>
 *  <dt>sourceCode<dd>source as plain text
 *  <dt>spans<dd> alternating span start indices into source
 *     and the text node or element (e.g. {@code <BR>}) corresponding to that
 *     span.
 * </dl>
 */
var SourceSpansT;

/** @define {boolean} */
var IN_GLOBAL_SCOPE = true;


/**
 * {@type !{
 *   'createSimpleLexer': function (Array, Array): (function (JobT)),
 *   'registerLangHandler': function (function (JobT), Array.<string>),
 *   'PR_ATTRIB_NAME': string,
 *   'PR_ATTRIB_NAME': string,
 *   'PR_ATTRIB_VALUE': string,
 *   'PR_COMMENT': string,
 *   'PR_DECLARATION': string,
 *   'PR_KEYWORD': string,
 *   'PR_LITERAL': string,
 *   'PR_NOCODE': string,
 *   'PR_PLAIN': string,
 *   'PR_PUNCTUATION': string,
 *   'PR_SOURCE': string,
 *   'PR_STRING': string,
 *   'PR_TAG': string,
 *   'PR_TYPE': string,
 *   'prettyPrintOne': function (string, string, number|boolean),
 *   'prettyPrint': function (?function, ?(HTMLElement|HTMLDocument))
 * }}
 * @const
 */
var PR;

/**
 * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
 * UI events.
 * If set to {@code false}, {@code prettyPrint()} is synchronous.
 */
var PR_SHOULD_USE_CONTINUATION = true
if (typeof window !== 'undefined') {
  window['PR_SHOULD_USE_CONTINUATION'] = PR_SHOULD_USE_CONTINUATION;
}

/**
 * Pretty print a chunk of code.
 * @param {string} sourceCodeHtml The HTML to pretty print.
 * @param {string} opt_langExtension The language name to use.
 *     Typically, a filename extension like 'cpp' or 'java'.
 * @param {number|boolean} opt_numberLines True to number lines,
 *     or the 1-indexed number of the first line in sourceCodeHtml.
 * @return {string} code as html, but prettier
 */
var prettyPrintOne;
/**
 * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
 * {@code class=prettyprint} and prettify them.
 *
 * @param {Function} opt_whenDone called when prettifying is done.
 * @param {HTMLElement|HTMLDocument} opt_root an element or document
 *   containing all the elements to pretty print.
 *   Defaults to {@code document.body}.
 */
var prettyPrint;


(function () {
  var win = (typeof window !== 'undefined') ? window : {};
  // Keyword lists for various languages.
  // We use things that coerce to strings to make them compact when minified
  // and to defeat aggressive optimizers that fold large string constants.
  var FLOW_CONTROL_KEYWORDS = ["break,continue,do,else,for,if,return,while"];
  var C_KEYWORDS = [FLOW_CONTROL_KEYWORDS,"auto,case,char,const,default," +
      "double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed," +
      "sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];
  var COMMON_KEYWORDS = [C_KEYWORDS,"catch,class,delete,false,import," +
      "new,operator,private,protected,public,this,throw,true,try,typeof"];
  var CPP_KEYWORDS = [COMMON_KEYWORDS,"alignas,alignof,align_union,asm,axiom,bool," +
      "concept,concept_map,const_cast,constexpr,decltype,delegate," +
      "dynamic_cast,explicit,export,friend,generic,late_check," +
      "mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert," +
      "static_cast,template,typeid,typename,using,virtual,where"];
  var JAVA_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,assert,boolean,byte,extends,finally,final,implements,import," +
      "instanceof,interface,null,native,package,strictfp,super,synchronized," +
      "throws,transient"];
  var CSHARP_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending," +
      "dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface," +
      "internal,into,is,join,let,lock,null,object,out,override,orderby,params," +
      "partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong," +
      "unchecked,unsafe,ushort,value,var,virtual,where,yield"];
  var COFFEE_KEYWORDS = "all,and,by,catch,class,else,extends,false,finally," +
      "for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then," +
      "throw,true,try,unless,until,when,while,yes";
  var JSCRIPT_KEYWORDS = [COMMON_KEYWORDS,
      "abstract,async,await,constructor,debugger,enum,eval,export,from,function," +
      "get,import,implements,instanceof,interface,let,null,of,set,undefined," +
      "var,with,yield,Infinity,NaN"];
  var PERL_KEYWORDS = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for," +
      "goto,if,import,last,local,my,next,no,our,print,package,redo,require," +
      "sub,undef,unless,until,use,wantarray,while,BEGIN,END";
  var PYTHON_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "and,as,assert,class,def,del," +
      "elif,except,exec,finally,from,global,import,in,is,lambda," +
      "nonlocal,not,or,pass,print,raise,try,with,yield," +
      "False,True,None"];
  var RUBY_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "alias,and,begin,case,class," +
      "def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo," +
      "rescue,retry,self,super,then,true,undef,unless,until,when,yield," +
      "BEGIN,END"];
  var SH_KEYWORDS = [FLOW_CONTROL_KEYWORDS, "case,done,elif,esac,eval,fi," +
      "function,in,local,set,then,until"];
  var ALL_KEYWORDS = [
      CPP_KEYWORDS, CSHARP_KEYWORDS, JAVA_KEYWORDS, JSCRIPT_KEYWORDS,
      PERL_KEYWORDS, PYTHON_KEYWORDS, RUBY_KEYWORDS, SH_KEYWORDS];
  var C_TYPES = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;

  // token style names.  correspond to css classes
  /**
   * token style for a string literal
   * @const
   */
  var PR_STRING = 'str';
  /**
   * token style for a keyword
   * @const
   */
  var PR_KEYWORD = 'kwd';
  /**
   * token style for a comment
   * @const
   */
  var PR_COMMENT = 'com';
  /**
   * token style for a type
   * @const
   */
  var PR_TYPE = 'typ';
  /**
   * token style for a literal value.  e.g. 1, null, true.
   * @const
   */
  var PR_LITERAL = 'lit';
  /**
   * token style for a punctuation string.
   * @const
   */
  var PR_PUNCTUATION = 'pun';
  /**
   * token style for plain text.
   * @const
   */
  var PR_PLAIN = 'pln';

  /**
   * token style for an sgml tag.
   * @const
   */
  var PR_TAG = 'tag';
  /**
   * token style for a markup declaration such as a DOCTYPE.
   * @const
   */
  var PR_DECLARATION = 'dec';
  /**
   * token style for embedded source.
   * @const
   */
  var PR_SOURCE = 'src';
  /**
   * token style for an sgml attribute name.
   * @const
   */
  var PR_ATTRIB_NAME = 'atn';
  /**
   * token style for an sgml attribute value.
   * @const
   */
  var PR_ATTRIB_VALUE = 'atv';

  /**
   * A class that indicates a section of markup that is not code, e.g. to allow
   * embedding of line numbers within code listings.
   * @const
   */
  var PR_NOCODE = 'nocode';


  // Regex pattern below is automatically generated by regexpPrecederPatterns.pl
  // Do not modify, your changes will be erased.

  // CAVEAT: this does not properly handle the case where a regular
  // expression immediately follows another since a regular expression may
  // have flags for case-sensitivity and the like.  Having regexp tokens
  // adjacent is not valid in any language I'm aware of, so I'm punting.
  // TODO: maybe style special characters inside a regexp as punctuation.

  /**
   * A set of tokens that can precede a regular expression literal in
   * javascript
   * http://web.archive.org/web/20070717142515/http://www.mozilla.org/js/language/js20/rationale/syntax.html
   * has the full list, but I've removed ones that might be problematic when
   * seen in languages that don't support regular expression literals.
   *
   * Specifically, I've removed any keywords that can't precede a regexp
   * literal in a syntactically legal javascript program, and I've removed the
   * "in" keyword since it's not a keyword in many languages, and might be used
   * as a count of inches.
   *
   * The link above does not accurately describe EcmaScript rules since
   * it fails to distinguish between (a=++/b/i) and (a++/b/i) but it works
   * very well in practice.
   *
   * @private
   * @const
   */
  var REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*';


  /**
   * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
   * matches the union of the sets of strings matched by the input RegExp.
   * Since it matches globally, if the input strings have a start-of-input
   * anchor (/^.../), it is ignored for the purposes of unioning.
   * @param {Array.<RegExp>} regexs non multiline, non-global regexs.
   * @return {RegExp} a global regex.
   */
  function combinePrefixPatterns(regexs) {
    var capturedGroupIndex = 0;

    var needToFoldCase = false;
    var ignoreCase = false;
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.ignoreCase) {
        ignoreCase = true;
      } else if (/[a-z]/i.test(regex.source.replace(
                     /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
        needToFoldCase = true;
        ignoreCase = false;
        break;
      }
    }

    var escapeCharToCodeUnit = {
      'b': 8,
      't': 9,
      'n': 0xa,
      'v': 0xb,
      'f': 0xc,
      'r': 0xd
    };

    function decodeEscape(charsetPart) {
      var cc0 = charsetPart.charCodeAt(0);
      if (cc0 !== 92 /* \\ */) {
        return cc0;
      }
      var c1 = charsetPart.charAt(1);
      cc0 = escapeCharToCodeUnit[c1];
      if (cc0) {
        return cc0;
      } else if ('0' <= c1 && c1 <= '7') {
        return parseInt(charsetPart.substring(1), 8);
      } else if (c1 === 'u' || c1 === 'x') {
        return parseInt(charsetPart.substring(2), 16);
      } else {
        return charsetPart.charCodeAt(1);
      }
    }

    function encodeEscape(charCode) {
      if (charCode < 0x20) {
        return (charCode < 0x10 ? '\\x0' : '\\x') + charCode.toString(16);
      }
      var ch = String.fromCharCode(charCode);
      return (ch === '\\' || ch === '-' || ch === ']' || ch === '^')
          ? "\\" + ch : ch;
    }

    function caseFoldCharset(charSet) {
      var charsetParts = charSet.substring(1, charSet.length - 1).match(
          new RegExp(
              '\\\\u[0-9A-Fa-f]{4}'
              + '|\\\\x[0-9A-Fa-f]{2}'
              + '|\\\\[0-3][0-7]{0,2}'
              + '|\\\\[0-7]{1,2}'
              + '|\\\\[\\s\\S]'
              + '|-'
              + '|[^-\\\\]',
              'g'));
      var ranges = [];
      var inverse = charsetParts[0] === '^';

      var out = ['['];
      if (inverse) { out.push('^'); }

      for (var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i) {
        var p = charsetParts[i];
        if (/\\[bdsw]/i.test(p)) {  // Don't muck with named groups.
          out.push(p);
        } else {
          var start = decodeEscape(p);
          var end;
          if (i + 2 < n && '-' === charsetParts[i + 1]) {
            end = decodeEscape(charsetParts[i + 2]);
            i += 2;
          } else {
            end = start;
          }
          ranges.push([start, end]);
          // If the range might intersect letters, then expand it.
          // This case handling is too simplistic.
          // It does not deal with non-latin case folding.
          // It works for latin source code identifiers though.
          if (!(end < 65 || start > 122)) {
            if (!(end < 65 || start > 90)) {
              ranges.push([Math.max(65, start) | 32, Math.min(end, 90) | 32]);
            }
            if (!(end < 97 || start > 122)) {
              ranges.push([Math.max(97, start) & ~32, Math.min(end, 122) & ~32]);
            }
          }
        }
      }

      // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
      // -> [[1, 12], [14, 14], [16, 17]]
      ranges.sort(function (a, b) { return (a[0] - b[0]) || (b[1]  - a[1]); });
      var consolidatedRanges = [];
      var lastRange = [];
      for (var i = 0; i < ranges.length; ++i) {
        var range = ranges[i];
        if (range[0] <= lastRange[1] + 1) {
          lastRange[1] = Math.max(lastRange[1], range[1]);
        } else {
          consolidatedRanges.push(lastRange = range);
        }
      }

      for (var i = 0; i < consolidatedRanges.length; ++i) {
        var range = consolidatedRanges[i];
        out.push(encodeEscape(range[0]));
        if (range[1] > range[0]) {
          if (range[1] + 1 > range[0]) { out.push('-'); }
          out.push(encodeEscape(range[1]));
        }
      }
      out.push(']');
      return out.join('');
    }

    function allowAnywhereFoldCaseAndRenumberGroups(regex) {
      // Split into character sets, escape sequences, punctuation strings
      // like ('(', '(?:', ')', '^'), and runs of characters that do not
      // include any of the above.
      var parts = regex.source.match(
          new RegExp(
              '(?:'
              + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'  // a character set
              + '|\\\\u[A-Fa-f0-9]{4}'  // a unicode escape
              + '|\\\\x[A-Fa-f0-9]{2}'  // a hex escape
              + '|\\\\[0-9]+'  // a back-reference or octal escape
              + '|\\\\[^ux0-9]'  // other escape sequence
              + '|\\(\\?[:!=]'  // start of a non-capturing group
              + '|[\\(\\)\\^]'  // start/end of a group, or line start
              + '|[^\\x5B\\x5C\\(\\)\\^]+'  // run of other characters
              + ')',
              'g'));
      var n = parts.length;

      // Maps captured group numbers to the number they will occupy in
      // the output or to -1 if that has not been determined, or to
      // undefined if they need not be capturing in the output.
      var capturedGroups = [];

      // Walk over and identify back references to build the capturedGroups
      // mapping.
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          // groups are 1-indexed, so max group index is count of '('
          ++groupIndex;
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue) {
            if (decimalValue <= groupIndex) {
              capturedGroups[decimalValue] = -1;
            } else {
              // Replace with an unambiguous escape sequence so that
              // an octal escape sequence does not turn into a backreference
              // to a capturing group from an earlier regex.
              parts[i] = encodeEscape(decimalValue);
            }
          }
        }
      }

      // Renumber groups and reduce capturing groups to non-capturing groups
      // where possible.
      for (var i = 1; i < capturedGroups.length; ++i) {
        if (-1 === capturedGroups[i]) {
          capturedGroups[i] = ++capturedGroupIndex;
        }
      }
      for (var i = 0, groupIndex = 0; i < n; ++i) {
        var p = parts[i];
        if (p === '(') {
          ++groupIndex;
          if (!capturedGroups[groupIndex]) {
            parts[i] = '(?:';
          }
        } else if ('\\' === p.charAt(0)) {
          var decimalValue = +p.substring(1);
          if (decimalValue && decimalValue <= groupIndex) {
            parts[i] = '\\' + capturedGroups[decimalValue];
          }
        }
      }

      // Remove any prefix anchors so that the output will match anywhere.
      // ^^ really does mean an anchored match though.
      for (var i = 0; i < n; ++i) {
        if ('^' === parts[i] && '^' !== parts[i + 1]) { parts[i] = ''; }
      }

      // Expand letters to groups to handle mixing of case-sensitive and
      // case-insensitive patterns if necessary.
      if (regex.ignoreCase && needToFoldCase) {
        for (var i = 0; i < n; ++i) {
          var p = parts[i];
          var ch0 = p.charAt(0);
          if (p.length >= 2 && ch0 === '[') {
            parts[i] = caseFoldCharset(p);
          } else if (ch0 !== '\\') {
            // TODO: handle letters in numeric escapes.
            parts[i] = p.replace(
                /[a-zA-Z]/g,
                function (ch) {
                  var cc = ch.charCodeAt(0);
                  return '[' + String.fromCharCode(cc & ~32, cc | 32) + ']';
                });
          }
        }
      }

      return parts.join('');
    }

    var rewritten = [];
    for (var i = 0, n = regexs.length; i < n; ++i) {
      var regex = regexs[i];
      if (regex.global || regex.multiline) { throw new Error('' + regex); }
      rewritten.push(
          '(?:' + allowAnywhereFoldCaseAndRenumberGroups(regex) + ')');
    }

    return new RegExp(rewritten.join('|'), ignoreCase ? 'gi' : 'g');
  }


  /**
   * Split markup into a string of source code and an array mapping ranges in
   * that string to the text nodes in which they appear.
   *
   * <p>
   * The HTML DOM structure:</p>
   * <pre>
   * (Element   "p"
   *   (Element "b"
   *     (Text  "print "))       ; #1
   *   (Text    "'Hello '")      ; #2
   *   (Element "br")            ; #3
   *   (Text    "  + 'World';")) ; #4
   * </pre>
   * <p>
   * corresponds to the HTML
   * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
   *
   * <p>
   * It will produce the output:</p>
   * <pre>
   * {
   *   sourceCode: "print 'Hello '\n  + 'World';",
   *   //                     1          2
   *   //           012345678901234 5678901234567
   *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
   * }
   * </pre>
   * <p>
   * where #1 is a reference to the {@code "print "} text node above, and so
   * on for the other text nodes.
   * </p>
   *
   * <p>
   * The {@code} spans array is an array of pairs.  Even elements are the start
   * indices of substrings, and odd elements are the text nodes (or BR elements)
   * that contain the text for those substrings.
   * Substrings continue until the next index or the end of the source.
   * </p>
   *
   * @param {Node} node an HTML DOM subtree containing source-code.
   * @param {boolean|number} isPreformatted truthy if white-space in
   *    text nodes should be considered significant.
   * @return {SourceSpansT} source code and the nodes in which they occur.
   */
  function extractSourceSpans(node, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;

    var chunks = [];
    var length = 0;
    var spans = [];
    var k = 0;

    function walk(node) {
      var type = node.nodeType;
      if (type == 1) {  // Element
        if (nocode.test(node.className)) { return; }
        for (var child = node.firstChild; child; child = child.nextSibling) {
          walk(child);
        }
        var nodeName = node.nodeName.toLowerCase();
        if ('br' === nodeName || 'li' === nodeName) {
          chunks[k] = '\n';
          spans[k << 1] = length++;
          spans[(k++ << 1) | 1] = node;
        }
      } else if (type == 3 || type == 4) {  // Text
        var text = node.nodeValue;
        if (text.length) {
          if (!isPreformatted) {
            text = text.replace(/[ \t\r\n]+/g, ' ');
          } else {
            text = text.replace(/\r\n?/g, '\n');  // Normalize newlines.
          }
          // TODO: handle tabs here?
          chunks[k] = text;
          spans[k << 1] = length;
          length += text.length;
          spans[(k++ << 1) | 1] = node;
        }
      }
    }

    walk(node);

    return {
      sourceCode: chunks.join('').replace(/\n$/, ''),
      spans: spans
    };
  }


  /**
   * Apply the given language handler to sourceCode and add the resulting
   * decorations to out.
   * @param {!Element} sourceNode
   * @param {number} basePos the index of sourceCode within the chunk of source
   *    whose decorations are already present on out.
   * @param {string} sourceCode
   * @param {function(JobT)} langHandler
   * @param {DecorationsT} out
   */
  function appendDecorations(
      sourceNode, basePos, sourceCode, langHandler, out) {
    if (!sourceCode) { return; }
    /** @type {JobT} */
    var job = {
      sourceNode: sourceNode,
      pre: 1,
      langExtension: null,
      numberLines: null,
      sourceCode: sourceCode,
      spans: null,
      basePos: basePos,
      decorations: null
    };
    langHandler(job);
    out.push.apply(out, job.decorations);
  }

  var notWs = /\S/;

  /**
   * Given an element, if it contains only one child element and any text nodes
   * it contains contain only space characters, return the sole child element.
   * Otherwise returns undefined.
   * <p>
   * This is meant to return the CODE element in {@code <pre><code ...>} when
   * there is a single child element that contains all the non-space textual
   * content, but not to return anything where there are multiple child elements
   * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
   * is textual content.
   */
  function childContentWrapper(element) {
    var wrapper = undefined;
    for (var c = element.firstChild; c; c = c.nextSibling) {
      var type = c.nodeType;
      wrapper = (type === 1)  // Element Node
          ? (wrapper ? element : c)
          : (type === 3)  // Text Node
          ? (notWs.test(c.nodeValue) ? element : wrapper)
          : wrapper;
    }
    return wrapper === element ? undefined : wrapper;
  }

  /** Given triples of [style, pattern, context] returns a lexing function,
    * The lexing function interprets the patterns to find token boundaries and
    * returns a decoration list of the form
    * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
    * where index_n is an index into the sourceCode, and style_n is a style
    * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
    * all characters in sourceCode[index_n-1:index_n].
    *
    * The stylePatterns is a list whose elements have the form
    * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
    *
    * Style is a style constant like PR_PLAIN, or can be a string of the
    * form 'lang-FOO', where FOO is a language extension describing the
    * language of the portion of the token in $1 after pattern executes.
    * E.g., if style is 'lang-lisp', and group 1 contains the text
    * '(hello (world))', then that portion of the token will be passed to the
    * registered lisp handler for formatting.
    * The text before and after group 1 will be restyled using this decorator
    * so decorators should take care that this doesn't result in infinite
    * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
    * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
    * '<script>foo()<\/script>', which would cause the current decorator to
    * be called with '<script>' which would not match the same rule since
    * group 1 must not be empty, so it would be instead styled as PR_TAG by
    * the generic tag rule.  The handler registered for the 'js' extension would
    * then be called with 'foo()', and finally, the current decorator would
    * be called with '<\/script>' which would not match the original rule and
    * so the generic tag rule would identify it as a tag.
    *
    * Pattern must only match prefixes, and if it matches a prefix, then that
    * match is considered a token with the same style.
    *
    * Context is applied to the last non-whitespace, non-comment token
    * recognized.
    *
    * Shortcut is an optional string of characters, any of which, if the first
    * character, gurantee that this pattern and only this pattern matches.
    *
    * @param {Array} shortcutStylePatterns patterns that always start with
    *   a known character.  Must have a shortcut string.
    * @param {Array} fallthroughStylePatterns patterns that will be tried in
    *   order if the shortcut ones fail.  May have shortcuts.
    *
    * @return {function (JobT)} a function that takes an undecorated job and
    *   attaches a list of decorations.
    */
  function createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns) {
    var shortcuts = {};
    var tokenizer;
    (function () {
      var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);
      var allRegexs = [];
      var regexKeys = {};
      for (var i = 0, n = allPatterns.length; i < n; ++i) {
        var patternParts = allPatterns[i];
        var shortcutChars = patternParts[3];
        if (shortcutChars) {
          for (var c = shortcutChars.length; --c >= 0;) {
            shortcuts[shortcutChars.charAt(c)] = patternParts;
          }
        }
        var regex = patternParts[1];
        var k = '' + regex;
        if (!regexKeys.hasOwnProperty(k)) {
          allRegexs.push(regex);
          regexKeys[k] = null;
        }
      }
      allRegexs.push(/[\0-\uffff]/);
      tokenizer = combinePrefixPatterns(allRegexs);
    })();

    var nPatterns = fallthroughStylePatterns.length;

    /**
     * Lexes job.sourceCode and attaches an output array job.decorations of
     * style classes preceded by the position at which they start in
     * job.sourceCode in order.
     *
     * @type{function (JobT)}
     */
    var decorate = function (job) {
      var sourceCode = job.sourceCode, basePos = job.basePos;
      var sourceNode = job.sourceNode;
      /** Even entries are positions in source in ascending order.  Odd enties
        * are style markers (e.g., PR_COMMENT) that run from that position until
        * the end.
        * @type {DecorationsT}
        */
      var decorations = [basePos, PR_PLAIN];
      var pos = 0;  // index into sourceCode
      var tokens = sourceCode.match(tokenizer) || [];
      var styleCache = {};

      for (var ti = 0, nTokens = tokens.length; ti < nTokens; ++ti) {
        var token = tokens[ti];
        var style = styleCache[token];
        var match = void 0;

        var isEmbedded;
        if (typeof style === 'string') {
          isEmbedded = false;
        } else {
          var patternParts = shortcuts[token.charAt(0)];
          if (patternParts) {
            match = token.match(patternParts[1]);
            style = patternParts[0];
          } else {
            for (var i = 0; i < nPatterns; ++i) {
              patternParts = fallthroughStylePatterns[i];
              match = token.match(patternParts[1]);
              if (match) {
                style = patternParts[0];
                break;
              }
            }

            if (!match) {  // make sure that we make progress
              style = PR_PLAIN;
            }
          }

          isEmbedded = style.length >= 5 && 'lang-' === style.substring(0, 5);
          if (isEmbedded && !(match && typeof match[1] === 'string')) {
            isEmbedded = false;
            style = PR_SOURCE;
          }

          if (!isEmbedded) { styleCache[token] = style; }
        }

        var tokenStart = pos;
        pos += token.length;

        if (!isEmbedded) {
          decorations.push(basePos + tokenStart, style);
        } else {  // Treat group 1 as an embedded block of source code.
          var embeddedSource = match[1];
          var embeddedSourceStart = token.indexOf(embeddedSource);
          var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;
          if (match[2]) {
            // If embeddedSource can be blank, then it would match at the
            // beginning which would cause us to infinitely recurse on the
            // entire token, so we catch the right context in match[2].
            embeddedSourceEnd = token.length - match[2].length;
            embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;
          }
          var lang = style.substring(5);
          // Decorate the left of the embedded source
          appendDecorations(
              sourceNode,
              basePos + tokenStart,
              token.substring(0, embeddedSourceStart),
              decorate, decorations);
          // Decorate the embedded source
          appendDecorations(
              sourceNode,
              basePos + tokenStart + embeddedSourceStart,
              embeddedSource,
              langHandlerForExtension(lang, embeddedSource),
              decorations);
          // Decorate the right of the embedded section
          appendDecorations(
              sourceNode,
              basePos + tokenStart + embeddedSourceEnd,
              token.substring(embeddedSourceEnd),
              decorate, decorations);
        }
      }
      job.decorations = decorations;
    };
    return decorate;
  }

  /** returns a function that produces a list of decorations from source text.
    *
    * This code treats ", ', and ` as string delimiters, and \ as a string
    * escape.  It does not recognize perl's qq() style strings.
    * It has no special handling for double delimiter escapes as in basic, or
    * the tripled delimiters used in python, but should work on those regardless
    * although in those cases a single string literal may be broken up into
    * multiple adjacent string literals.
    *
    * It recognizes C, C++, and shell style comments.
    *
    * @param {Object} options a set of optional parameters.
    * @return {function (JobT)} a function that examines the source code
    *     in the input job and builds a decoration list which it attaches to
    *     the job.
    */
  function sourceDecorator(options) {
    var shortcutStylePatterns = [], fallthroughStylePatterns = [];
    if (options['tripleQuotedStrings']) {
      // '''multi-line-string''', 'single-line-string', and double-quoted
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
           null, '\'"']);
    } else if (options['multiLineStrings']) {
      // 'multi-line-string', "multi-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,  /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
           null, '\'"`']);
    } else {
      // 'single-line-string', "single-line-string"
      shortcutStylePatterns.push(
          [PR_STRING,
           /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
           null, '"\'']);
    }
    if (options['verbatimStrings']) {
      // verbatim-string-literal production from the C# grammar.  See issue 93.
      fallthroughStylePatterns.push(
          [PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
    }
    var hc = options['hashComments'];
    if (hc) {
      if (options['cStyleComments']) {
        if (hc > 1) {  // multiline hash comments
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#']);
        } else {
          // Stop C preprocessor declarations at an unclosed open comment
          shortcutStylePatterns.push(
              [PR_COMMENT, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
               null, '#']);
        }
        // #include <stdio.h>
        fallthroughStylePatterns.push(
            [PR_STRING,
             /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
             null]);
      } else {
        shortcutStylePatterns.push([PR_COMMENT, /^#[^\r\n]*/, null, '#']);
      }
    }
    if (options['cStyleComments']) {
      fallthroughStylePatterns.push([PR_COMMENT, /^\/\/[^\r\n]*/, null]);
      fallthroughStylePatterns.push(
          [PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
    }
    var regexLiterals = options['regexLiterals'];
    if (regexLiterals) {
      /**
       * @const
       */
      var regexExcls = regexLiterals > 1
        ? ''  // Multiline regex literals
        : '\n\r';
      /**
       * @const
       */
      var regexAny = regexExcls ? '.' : '[\\S\\s]';
      /**
       * @const
       */
      var REGEX_LITERAL = (
          // A regular expression literal starts with a slash that is
          // not followed by * or / so that it is not confused with
          // comments.
          '/(?=[^/*' + regexExcls + '])'
          // and then contains any number of raw characters,
          + '(?:[^/\\x5B\\x5C' + regexExcls + ']'
          // escape sequences (\x5C),
          +    '|\\x5C' + regexAny
          // or non-nesting character sets (\x5B\x5D);
          +    '|\\x5B(?:[^\\x5C\\x5D' + regexExcls + ']'
          +             '|\\x5C' + regexAny + ')*(?:\\x5D|$))+'
          // finally closed by a /.
          + '/');
      fallthroughStylePatterns.push(
          ['lang-regex',
           RegExp('^' + REGEXP_PRECEDER_PATTERN + '(' + REGEX_LITERAL + ')')
           ]);
    }

    var types = options['types'];
    if (types) {
      fallthroughStylePatterns.push([PR_TYPE, types]);
    }

    var keywords = ("" + options['keywords']).replace(/^ | $/g, '');
    if (keywords.length) {
      fallthroughStylePatterns.push(
          [PR_KEYWORD,
           new RegExp('^(?:' + keywords.replace(/[\s,]+/g, '|') + ')\\b'),
           null]);
    }

    shortcutStylePatterns.push([PR_PLAIN,       /^\s+/, null, ' \r\n\t\xA0']);

    var punctuation =
      // The Bash man page says

      // A word is a sequence of characters considered as a single
      // unit by GRUB. Words are separated by metacharacters,
      // which are the following plus space, tab, and newline: { }
      // | & $ ; < >
      // ...

      // A word beginning with # causes that word and all remaining
      // characters on that line to be ignored.

      // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
      // comment but empirically
      // $ echo {#}
      // {#}
      // $ echo \$#
      // $#
      // $ echo }#
      // }#

      // so /(?:^|[|&;<>\s])/ is more appropriate.

      // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
      // suggests that this definition is compatible with a
      // default mode that tries to use a single token definition
      // to recognize both bash/python style comments and C
      // preprocessor directives.

      // This definition of punctuation does not include # in the list of
      // follow-on exclusions, so # will not be broken before if preceeded
      // by a punctuation character.  We could try to exclude # after
      // [|&;<>] but that doesn't seem to cause many major problems.
      // If that does turn out to be a problem, we should change the below
      // when hc is truthy to include # in the run of punctuation characters
      // only when not followint [|&;<>].
      '^.[^\\s\\w.$@\'"`/\\\\]*';
    if (options['regexLiterals']) {
      punctuation += '(?!\s*\/)';
    }

    fallthroughStylePatterns.push(
        // TODO(mikesamuel): recognize non-latin letters and numerals in idents
        [PR_LITERAL,     /^@[a-z_$][a-z_$@0-9]*/i, null],
        [PR_TYPE,        /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null],
        [PR_PLAIN,       /^[a-z_$][a-z_$@0-9]*/i, null],
        [PR_LITERAL,
         new RegExp(
             '^(?:'
             // A hex number
             + '0x[a-f0-9]+'
             // or an octal or decimal number,
             + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
             // possibly in scientific notation
             + '(?:e[+\\-]?\\d+)?'
             + ')'
             // with an optional modifier like UL for unsigned long
             + '[a-z]*', 'i'),
         null, '0123456789'],
        // Don't treat escaped quotes in bash as starting strings.
        // See issue 144.
        [PR_PLAIN,       /^\\[\s\S]?/, null],
        [PR_PUNCTUATION, new RegExp(punctuation), null]);

    return createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);
  }

  var decorateSource = sourceDecorator({
        'keywords': ALL_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
      });

  /**
   * Given a DOM subtree, wraps it in a list, and puts each line into its own
   * list item.
   *
   * @param {Node} node modified in place.  Its content is pulled into an
   *     HTMLOListElement, and each line is moved into a separate list item.
   *     This requires cloning elements, so the input might not have unique
   *     IDs after numbering.
   * @param {number|null|boolean} startLineNum
   *     If truthy, coerced to an integer which is the 1-indexed line number
   *     of the first line of code.  The number of the first line will be
   *     attached to the list.
   * @param {boolean} isPreformatted true iff white-space in text nodes should
   *     be treated as significant.
   */
  function numberLines(node, startLineNum, isPreformatted) {
    var nocode = /(?:^|\s)nocode(?:\s|$)/;
    var lineBreak = /\r\n?|\n/;

    var document = node.ownerDocument;

    var li = document.createElement('li');
    while (node.firstChild) {
      li.appendChild(node.firstChild);
    }
    // An array of lines.  We split below, so this is initialized to one
    // un-split line.
    var listItems = [li];

    function walk(node) {
      var type = node.nodeType;
      if (type == 1 && !nocode.test(node.className)) {  // Element
        if ('br' === node.nodeName.toLowerCase()) {
          breakAfter(node);
          // Discard the <BR> since it is now flush against a </LI>.
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        } else {
          for (var child = node.firstChild; child; child = child.nextSibling) {
            walk(child);
          }
        }
      } else if ((type == 3 || type == 4) && isPreformatted) {  // Text
        var text = node.nodeValue;
        var match = text.match(lineBreak);
        if (match) {
          var firstLine = text.substring(0, match.index);
          node.nodeValue = firstLine;
          var tail = text.substring(match.index + match[0].length);
          if (tail) {
            var parent = node.parentNode;
            parent.insertBefore(
              document.createTextNode(tail), node.nextSibling);
          }
          breakAfter(node);
          if (!firstLine) {
            // Don't leave blank text nodes in the DOM.
            node.parentNode.removeChild(node);
          }
        }
      }
    }

    // Split a line after the given node.
    function breakAfter(lineEndNode) {
      // If there's nothing to the right, then we can skip ending the line
      // here, and move root-wards since splitting just before an end-tag
      // would require us to create a bunch of empty copies.
      while (!lineEndNode.nextSibling) {
        lineEndNode = lineEndNode.parentNode;
        if (!lineEndNode) { return; }
      }

      function breakLeftOf(limit, copy) {
        // Clone shallowly if this node needs to be on both sides of the break.
        var rightSide = copy ? limit.cloneNode(false) : limit;
        var parent = limit.parentNode;
        if (parent) {
          // We clone the parent chain.
          // This helps us resurrect important styling elements that cross lines.
          // E.g. in <i>Foo<br>Bar</i>
          // should be rewritten to <li><i>Foo</i></li><li><i>Bar</i></li>.
          var parentClone = breakLeftOf(parent, 1);
          // Move the clone and everything to the right of the original
          // onto the cloned parent.
          var next = limit.nextSibling;
          parentClone.appendChild(rightSide);
          for (var sibling = next; sibling; sibling = next) {
            next = sibling.nextSibling;
            parentClone.appendChild(sibling);
          }
        }
        return rightSide;
      }

      var copiedListItem = breakLeftOf(lineEndNode.nextSibling, 0);

      // Walk the parent chain until we reach an unattached LI.
      for (var parent;
           // Check nodeType since IE invents document fragments.
           (parent = copiedListItem.parentNode) && parent.nodeType === 1;) {
        copiedListItem = parent;
      }
      // Put it on the list of lines for later processing.
      listItems.push(copiedListItem);
    }

    // Split lines while there are lines left to split.
    for (var i = 0;  // Number of lines that have been split so far.
         i < listItems.length;  // length updated by breakAfter calls.
         ++i) {
      walk(listItems[i]);
    }

    // Make sure numeric indices show correctly.
    if (startLineNum === (startLineNum|0)) {
      listItems[0].setAttribute('value', startLineNum);
    }

    var ol = document.createElement('ol');
    ol.className = 'linenums';
    var offset = Math.max(0, ((startLineNum - 1 /* zero index */)) | 0) || 0;
    for (var i = 0, n = listItems.length; i < n; ++i) {
      li = listItems[i];
      // Stick a class on the LIs so that stylesheets can
      // color odd/even rows, or any other row pattern that
      // is co-prime with 10.
      li.className = 'L' + ((i + offset) % 10);
      if (!li.firstChild) {
        li.appendChild(document.createTextNode('\xA0'));
      }
      ol.appendChild(li);
    }

    node.appendChild(ol);
  }


  /**
   * Breaks {@code job.sourceCode} around style boundaries in
   * {@code job.decorations} and modifies {@code job.sourceNode} in place.
   * @param {JobT} job
   * @private
   */
  function recombineTagsAndDecorations(job) {
    var isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
    isIE8OrEarlier = isIE8OrEarlier && +isIE8OrEarlier[1] <= 8;
    var newlineRe = /\n/g;

    var source = job.sourceCode;
    var sourceLength = source.length;
    // Index into source after the last code-unit recombined.
    var sourceIndex = 0;

    var spans = job.spans;
    var nSpans = spans.length;
    // Index into spans after the last span which ends at or before sourceIndex.
    var spanIndex = 0;

    var decorations = job.decorations;
    var nDecorations = decorations.length;
    // Index into decorations after the last decoration which ends at or before
    // sourceIndex.
    var decorationIndex = 0;

    // Remove all zero-length decorations.
    decorations[nDecorations] = sourceLength;
    var decPos, i;
    for (i = decPos = 0; i < nDecorations;) {
      if (decorations[i] !== decorations[i + 2]) {
        decorations[decPos++] = decorations[i++];
        decorations[decPos++] = decorations[i++];
      } else {
        i += 2;
      }
    }
    nDecorations = decPos;

    // Simplify decorations.
    for (i = decPos = 0; i < nDecorations;) {
      var startPos = decorations[i];
      // Conflate all adjacent decorations that use the same style.
      var startDec = decorations[i + 1];
      var end = i + 2;
      while (end + 2 <= nDecorations && decorations[end + 1] === startDec) {
        end += 2;
      }
      decorations[decPos++] = startPos;
      decorations[decPos++] = startDec;
      i = end;
    }

    nDecorations = decorations.length = decPos;

    var sourceNode = job.sourceNode;
    var oldDisplay = "";
    if (sourceNode) {
      oldDisplay = sourceNode.style.display;
      sourceNode.style.display = 'none';
    }
    try {
      var decoration = null;
      while (spanIndex < nSpans) {
        var spanStart = spans[spanIndex];
        var spanEnd = /** @type{number} */ (spans[spanIndex + 2])
            || sourceLength;

        var decEnd = decorations[decorationIndex + 2] || sourceLength;

        var end = Math.min(spanEnd, decEnd);

        var textNode = /** @type{Node} */ (spans[spanIndex + 1]);
        var styledText;
        if (textNode.nodeType !== 1  // Don't muck with <BR>s or <LI>s
            // Don't introduce spans around empty text nodes.
            && (styledText = source.substring(sourceIndex, end))) {
          // This may seem bizarre, and it is.  Emitting LF on IE causes the
          // code to display with spaces instead of line breaks.
          // Emitting Windows standard issue linebreaks (CRLF) causes a blank
          // space to appear at the beginning of every line but the first.
          // Emitting an old Mac OS 9 line separator makes everything spiffy.
          if (isIE8OrEarlier) {
            styledText = styledText.replace(newlineRe, '\r');
          }
          textNode.nodeValue = styledText;
          var document = textNode.ownerDocument;
          var span = document.createElement('span');
          span.className = decorations[decorationIndex + 1];
          var parentNode = textNode.parentNode;
          parentNode.replaceChild(span, textNode);
          span.appendChild(textNode);
          if (sourceIndex < spanEnd) {  // Split off a text node.
            spans[spanIndex + 1] = textNode
                // TODO: Possibly optimize by using '' if there's no flicker.
                = document.createTextNode(source.substring(end, spanEnd));
            parentNode.insertBefore(textNode, span.nextSibling);
          }
        }

        sourceIndex = end;

        if (sourceIndex >= spanEnd) {
          spanIndex += 2;
        }
        if (sourceIndex >= decEnd) {
          decorationIndex += 2;
        }
      }
    } finally {
      if (sourceNode) {
        sourceNode.style.display = oldDisplay;
      }
    }
  }


  /** Maps language-specific file extensions to handlers. */
  var langHandlerRegistry = {};
  /** Register a language handler for the given file extensions.
    * @param {function (JobT)} handler a function from source code to a list
    *      of decorations.  Takes a single argument job which describes the
    *      state of the computation and attaches the decorations to it.
    * @param {Array.<string>} fileExtensions
    */
  function registerLangHandler(handler, fileExtensions) {
    for (var i = fileExtensions.length; --i >= 0;) {
      var ext = fileExtensions[i];
      if (!langHandlerRegistry.hasOwnProperty(ext)) {
        langHandlerRegistry[ext] = handler;
      } else if (win['console']) {
        console['warn']('cannot override language handler %s', ext);
      }
    }
  }
  function langHandlerForExtension(extension, source) {
    if (!(extension && langHandlerRegistry.hasOwnProperty(extension))) {
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = /^\s*</.test(source)
          ? 'default-markup'
          : 'default-code';
    }
    return langHandlerRegistry[extension];
  }
  registerLangHandler(decorateSource, ['default-code']);
  registerLangHandler(
      createSimpleLexer(
          [],
          [
           [PR_PLAIN,       /^[^<?]+/],
           [PR_DECLARATION, /^<!\w[^>]*(?:>|$)/],
           [PR_COMMENT,     /^<\!--[\s\S]*?(?:-\->|$)/],
           // Unescaped content in an unknown language
           ['lang-',        /^<\?([\s\S]+?)(?:\?>|$)/],
           ['lang-',        /^<%([\s\S]+?)(?:%>|$)/],
           [PR_PUNCTUATION, /^(?:<[%?]|[%?]>)/],
           ['lang-',        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
           // Unescaped content in javascript.  (Or possibly vbscript).
           ['lang-js',      /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
           // Contains unescaped stylesheet content
           ['lang-css',     /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
           ['lang-in.tag',  /^(<\/?[a-z][^<>]*>)/i]
          ]),
      ['default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl']);
  registerLangHandler(
      createSimpleLexer(
          [
           [PR_PLAIN,        /^[\s]+/, null, ' \t\r\n'],
           [PR_ATTRIB_VALUE, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, '\"\'']
           ],
          [
           [PR_TAG,          /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
           [PR_ATTRIB_NAME,  /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
           ['lang-uq.val',   /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
           [PR_PUNCTUATION,  /^[=<>\/]+/],
           ['lang-js',       /^on\w+\s*=\s*\"([^\"]+)\"/i],
           ['lang-js',       /^on\w+\s*=\s*\'([^\']+)\'/i],
           ['lang-js',       /^on\w+\s*=\s*([^\"\'>\s]+)/i],
           ['lang-css',      /^style\s*=\s*\"([^\"]+)\"/i],
           ['lang-css',      /^style\s*=\s*\'([^\']+)\'/i],
           ['lang-css',      /^style\s*=\s*([^\"\'>\s]+)/i]
           ]),
      ['in.tag']);
  registerLangHandler(
      createSimpleLexer([], [[PR_ATTRIB_VALUE, /^[\s\S]+/]]), ['uq.val']);
  registerLangHandler(sourceDecorator({
          'keywords': CPP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'types': C_TYPES
        }), ['c', 'cc', 'cpp', 'cxx', 'cyc', 'm']);
  registerLangHandler(sourceDecorator({
          'keywords': 'null,true,false'
        }), ['json']);
  registerLangHandler(sourceDecorator({
          'keywords': CSHARP_KEYWORDS,
          'hashComments': true,
          'cStyleComments': true,
          'verbatimStrings': true,
          'types': C_TYPES
        }), ['cs']);
  registerLangHandler(sourceDecorator({
          'keywords': JAVA_KEYWORDS,
          'cStyleComments': true
        }), ['java']);
  registerLangHandler(sourceDecorator({
          'keywords': SH_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true
        }), ['bash', 'bsh', 'csh', 'sh']);
  registerLangHandler(sourceDecorator({
          'keywords': PYTHON_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'tripleQuotedStrings': true
        }), ['cv', 'py', 'python']);
  registerLangHandler(sourceDecorator({
          'keywords': PERL_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': 2  // multiline regex literals
        }), ['perl', 'pl', 'pm']);
  registerLangHandler(sourceDecorator({
          'keywords': RUBY_KEYWORDS,
          'hashComments': true,
          'multiLineStrings': true,
          'regexLiterals': true
        }), ['rb', 'ruby']);
  registerLangHandler(sourceDecorator({
          'keywords': JSCRIPT_KEYWORDS,
          'cStyleComments': true,
          'regexLiterals': true
        }), ['javascript', 'js', 'ts', 'typescript']);
  registerLangHandler(sourceDecorator({
          'keywords': COFFEE_KEYWORDS,
          'hashComments': 3,  // ### style block comments
          'cStyleComments': true,
          'multilineStrings': true,
          'tripleQuotedStrings': true,
          'regexLiterals': true
        }), ['coffee']);
  registerLangHandler(
      createSimpleLexer([], [[PR_STRING, /^[\s\S]+/]]), ['regex']);

  /** @param {JobT} job */
  function applyDecorator(job) {
    var opt_langExtension = job.langExtension;

    try {
      // Extract tags, and convert the source code to plain text.
      var sourceAndSpans = extractSourceSpans(job.sourceNode, job.pre);
      /** Plain text. @type {string} */
      var source = sourceAndSpans.sourceCode;
      job.sourceCode = source;
      job.spans = sourceAndSpans.spans;
      job.basePos = 0;

      // Apply the appropriate language handler
      langHandlerForExtension(opt_langExtension, source)(job);

      // Integrate the decorations and tags back into the source code,
      // modifying the sourceNode in place.
      recombineTagsAndDecorations(job);
    } catch (e) {
      if (win['console']) {
        console['log'](e && e['stack'] || e);
      }
    }
  }

  /**
   * Pretty print a chunk of code.
   * @param sourceCodeHtml {string} The HTML to pretty print.
   * @param opt_langExtension {string} The language name to use.
   *     Typically, a filename extension like 'cpp' or 'java'.
   * @param opt_numberLines {number|boolean} True to number lines,
   *     or the 1-indexed number of the first line in sourceCodeHtml.
   */
  function $prettyPrintOne(sourceCodeHtml, opt_langExtension, opt_numberLines) {
    /** @type{number|boolean} */
    var nl = opt_numberLines || false;
    /** @type{string|null} */
    var langExtension = opt_langExtension || null;
    /** @type{!Element} */
    var container = document.createElement('div');
    // This could cause images to load and onload listeners to fire.
    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
    // We assume that the inner HTML is from a trusted source.
    // The pre-tag is required for IE8 which strips newlines from innerHTML
    // when it is injected into a <pre> tag.
    // http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie
    // http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript
    container.innerHTML = '<pre>' + sourceCodeHtml + '</pre>';
    container = /** @type{!Element} */(container.firstChild);
    if (nl) {
      numberLines(container, nl, true);
    }

    /** @type{JobT} */
    var job = {
      langExtension: langExtension,
      numberLines: nl,
      sourceNode: container,
      pre: 1,
      sourceCode: null,
      basePos: null,
      spans: null,
      decorations: null
    };
    applyDecorator(job);
    return container.innerHTML;
  }

   /**
    * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
    * {@code class=prettyprint} and prettify them.
    *
    * @param {Function} opt_whenDone called when prettifying is done.
    * @param {HTMLElement|HTMLDocument} opt_root an element or document
    *   containing all the elements to pretty print.
    *   Defaults to {@code document.body}.
    */
  function $prettyPrint(opt_whenDone, opt_root) {
    var root = opt_root || document.body;
    var doc = root.ownerDocument || document;
    function byTagName(tn) { return root.getElementsByTagName(tn); }
    // fetch a list of nodes to rewrite
    var codeSegments = [byTagName('pre'), byTagName('code'), byTagName('xmp')];
    var elements = [];
    for (var i = 0; i < codeSegments.length; ++i) {
      for (var j = 0, n = codeSegments[i].length; j < n; ++j) {
        elements.push(codeSegments[i][j]);
      }
    }
    codeSegments = null;

    var clock = Date;
    if (!clock['now']) {
      clock = { 'now': function () { return +(new Date); } };
    }

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    var k = 0;

    var langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/;
    var prettyPrintRe = /\bprettyprint\b/;
    var prettyPrintedRe = /\bprettyprinted\b/;
    var preformattedTagNameRe = /pre|xmp/i;
    var codeRe = /^code$/i;
    var preCodeXmpRe = /^(?:pre|code|xmp)$/i;
    var EMPTY = {};

    function doWork() {
      var endTime = (win['PR_SHOULD_USE_CONTINUATION'] ?
                     clock['now']() + 250 /* ms */ :
                     Infinity);
      for (; k < elements.length && clock['now']() < endTime; k++) {
        var cs = elements[k];

        // Look for a preceding comment like
        // <?prettify lang="..." linenums="..."?>
        var attrs = EMPTY;
        {
          for (var preceder = cs; (preceder = preceder.previousSibling);) {
            var nt = preceder.nodeType;
            // <?foo?> is parsed by HTML 5 to a comment node (8)
            // like <!--?foo?-->, but in XML is a processing instruction
            var value = (nt === 7 || nt === 8) && preceder.nodeValue;
            if (value
                ? !/^\??prettify\b/.test(value)
                : (nt !== 3 || /\S/.test(preceder.nodeValue))) {
              // Skip over white-space text nodes but not others.
              break;
            }
            if (value) {
              attrs = {};
              value.replace(
                  /\b(\w+)=([\w:.%+-]+)/g,
                function (_, name, value) { attrs[name] = value; });
              break;
            }
          }
        }

        var className = cs.className;
        if ((attrs !== EMPTY || prettyPrintRe.test(className))
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            && !prettyPrintedRe.test(className)) {

          // make sure this is not nested in an already prettified element
          var nested = false;
          for (var p = cs.parentNode; p; p = p.parentNode) {
            var tn = p.tagName;
            if (preCodeXmpRe.test(tn)
                && p.className && prettyPrintRe.test(p.className)) {
              nested = true;
              break;
            }
          }
          if (!nested) {
            // Mark done.  If we fail to prettyprint for whatever reason,
            // we shouldn't try again.
            cs.className += ' prettyprinted';

            // If the classes includes a language extensions, use it.
            // Language extensions can be specified like
            //     <pre class="prettyprint lang-cpp">
            // the language extension "cpp" is used to find a language handler
            // as passed to PR.registerLangHandler.
            // HTML5 recommends that a language be specified using "language-"
            // as the prefix instead.  Google Code Prettify supports both.
            // http://dev.w3.org/html5/spec-author-view/the-code-element.html
            var langExtension = attrs['lang'];
            if (!langExtension) {
              langExtension = className.match(langExtensionRe);
              // Support <pre class="prettyprint"><code class="language-c">
              var wrapper;
              if (!langExtension && (wrapper = childContentWrapper(cs))
                  && codeRe.test(wrapper.tagName)) {
                langExtension = wrapper.className.match(langExtensionRe);
              }

              if (langExtension) { langExtension = langExtension[1]; }
            }

            var preformatted;
            if (preformattedTagNameRe.test(cs.tagName)) {
              preformatted = 1;
            } else {
              var currentStyle = cs['currentStyle'];
              var defaultView = doc.defaultView;
              var whitespace = (
                  currentStyle
                  ? currentStyle['whiteSpace']
                  : (defaultView
                     && defaultView.getComputedStyle)
                  ? defaultView.getComputedStyle(cs, null)
                  .getPropertyValue('white-space')
                  : 0);
              preformatted = whitespace
                  && 'pre' === whitespace.substring(0, 3);
            }

            // Look for a class like linenums or linenums:<n> where <n> is the
            // 1-indexed number of the first line.
            var lineNums = attrs['linenums'];
            if (!(lineNums = lineNums === 'true' || +lineNums)) {
              lineNums = className.match(/\blinenums\b(?::(\d+))?/);
              lineNums =
                lineNums
                ? lineNums[1] && lineNums[1].length
                  ? +lineNums[1] : true
                : false;
            }
            if (lineNums) { numberLines(cs, lineNums, preformatted); }

            // do the pretty printing
            var prettyPrintingJob = {
              langExtension: langExtension,
              sourceNode: cs,
              numberLines: lineNums,
              pre: preformatted,
              sourceCode: null,
              basePos: null,
              spans: null,
              decorations: null
            };
            applyDecorator(prettyPrintingJob);
          }
        }
      }
      if (k < elements.length) {
        // finish up in a continuation
        win.setTimeout(doWork, 250);
      } else if ('function' === typeof opt_whenDone) {
        opt_whenDone();
      }
    }

    doWork();
  }

  /**
   * Contains functions for creating and registering new language handlers.
   * @type {Object}
   */
  var PR = win['PR'] = {
        'createSimpleLexer': createSimpleLexer,
        'registerLangHandler': registerLangHandler,
        'sourceDecorator': sourceDecorator,
        'PR_ATTRIB_NAME': PR_ATTRIB_NAME,
        'PR_ATTRIB_VALUE': PR_ATTRIB_VALUE,
        'PR_COMMENT': PR_COMMENT,
        'PR_DECLARATION': PR_DECLARATION,
        'PR_KEYWORD': PR_KEYWORD,
        'PR_LITERAL': PR_LITERAL,
        'PR_NOCODE': PR_NOCODE,
        'PR_PLAIN': PR_PLAIN,
        'PR_PUNCTUATION': PR_PUNCTUATION,
        'PR_SOURCE': PR_SOURCE,
        'PR_STRING': PR_STRING,
        'PR_TAG': PR_TAG,
        'PR_TYPE': PR_TYPE,
        'prettyPrintOne':
           IN_GLOBAL_SCOPE
             ? (win['prettyPrintOne'] = $prettyPrintOne)
             : (prettyPrintOne = $prettyPrintOne),
        'prettyPrint':
           IN_GLOBAL_SCOPE
             ? (win['prettyPrint'] = $prettyPrint)
             : (prettyPrint = $prettyPrint)
      };

  // Make PR available via the Asynchronous Module Definition (AMD) API.
  // Per https://github.com/amdjs/amdjs-api/wiki/AMD:
  // The Asynchronous Module Definition (AMD) API specifies a
  // mechanism for defining modules such that the module and its
  // dependencies can be asynchronously loaded.
  // ...
  // To allow a clear indicator that a global define function (as
  // needed for script src browser loading) conforms to the AMD API,
  // any global define function SHOULD have a property called "amd"
  // whose value is an object. This helps avoid conflict with any
  // other existing JavaScript code that could have defined a define()
  // function that does not conform to the AMD API.
  var define = win['define'];
  if (typeof define === "function" && define['amd']) {
    define("google-code-prettify", [], function () {
      return PR;
    });
  }
})();

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=i,this.iframesTimeout=o}return n(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(function(t){var n=e.filter(function(e){return e.contains(t)}).length>0;-1!==e.indexOf(t)||n||e.push(t)}),e}},{key:"getIframeContents",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var i=e.contentWindow;if(r=i.document,!i||!r)throw new Error("iframe inaccessible")}catch(e){n()}r&&t(r)}},{key:"isIframeBlank",value:function(e){var t=e.getAttribute("src").trim();return"about:blank"===e.contentWindow.location.href&&"about:blank"!==t&&t}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,i=!1,o=null,a=function a(){if(!i){i=!0,clearTimeout(o);try{r.isIframeBlank(e)||(e.removeEventListener("load",a),r.getIframeContents(e,t,n))}catch(e){n()}}};e.addEventListener("load",a),o=setTimeout(a,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(e){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,function(){return!0},function(e){r++,n.waitForIframes(e.querySelector("html"),function(){--r||t()})},function(e){e||t()})}},{key:"forEachIframe",value:function(t,n,r){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=t.querySelectorAll("iframe"),s=a.length,c=0;a=Array.prototype.slice.call(a);var u=function(){--s<=0&&o(c)};s||u(),a.forEach(function(t){e.matches(t,i.exclude)?u():i.onIframeReady(t,function(e){n(t)&&(c++,r(e)),u()},u)})}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:null===t?e.nextNode():e.nextNode()&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var i=!1,o=!1;return r.forEach(function(e,t){e.val===n&&(i=t,o=e.handled)}),this.compareNodeIframe(e,t,n)?(!1!==i||o?!1===i||o||(r[i].handled=!0):r.push({val:n,handled:!0}),!0):(!1===i&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var i=this;e.forEach(function(e){e.handled||i.getIframeContents(e.val,function(e){i.createInstanceOnIframe(e).forEachNode(t,n,r)})})}},{key:"iterateThroughNodes",value:function(e,t,n,r,i){for(var o,a=this,s=this.createIterator(t,e,r),c=[],u=[],l=void 0,h=void 0;void 0,o=a.getIteratorNode(s),h=o.prevNode,l=o.node;)this.iframes&&this.forEachIframe(t,function(e){return a.checkIframeFilter(l,h,e,c)},function(t){a.createInstanceOnIframe(t).forEachNode(e,function(e){return u.push(e)},r)}),u.push(l);u.forEach(function(e){n(e)}),this.iframes&&this.handleOpenIframes(c,e,n,r),i()}},{key:"forEachNode",value:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=this.getContexts(),a=o.length;a||i(),o.forEach(function(o){var s=function(){r.iterateThroughNodes(e,o,t,n,function(){--a<=0&&i()})};r.iframes?r.waitForIframes(o,s):s()})}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var i=!1;return n.every(function(t){return!r.call(e,t)||(i=!0,!1)}),i}return!1}}]),e}(),o=function(){function o(e){t(this,o),this.ctx=e,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(o,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===(void 0===r?"undefined":e(r))&&"function"==typeof r[n]&&r[n]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in t)if(t.hasOwnProperty(i)){var o=t[i],a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),s="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o);""!==a&&""!==s&&(e=e.replace(new RegExp("("+this.escapeStr(a)+"|"+this.escapeStr(s)+")","gm"+n),r+"("+this.processSynomyms(a)+"|"+this.processSynomyms(s)+")"+r))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,function(e){return"\\"===e.charAt(0)?"?":""})).replace(/(?:\\)*\*/g,function(e){return"\\"===e.charAt(0)?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach(function(i){n.every(function(n){if(-1!==n.indexOf(i)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("["+n+"]","gm"+t),"["+n+"]"),r.push(n)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,i="";switch(("string"==typeof n?[]:n.limiters).forEach(function(e){i+="|"+t.escapeStr(e)}),r){case"partially":default:return"()("+e+")";case"complementary":return"()([^"+(i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+e+"[^"+i+"]*)";case"exactly":return"(^|\\s"+i+")("+e+")(?=$|\\s"+i+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach(function(e){t.opt.separateWordSearch?e.split(" ").forEach(function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)}):e.trim()&&-1===n.indexOf(e)&&n.push(e)}),{keywords:n.sort(function(e,t){return t.length-e.length}),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort(function(e,t){return e.start-t.start}).forEach(function(e){var i=t.callNoMatchOnInvalidRanges(e,r),o=i.start,a=i.end;i.valid&&(e.start=o,e.length=a-o,n.push(e),r=a)}),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n=void 0,r=void 0,i=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?i=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:i}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r=void 0,i=!0,o=n.length,a=t-o,s=parseInt(e.start,10)-a;return(r=(s=s>o?o:s)+parseInt(e.length,10))>o&&(r=o,this.log("End range automatically set to the max value of "+o)),s<0||r-s<0||s>o||r>o?(i=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:i}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})},function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:n,nodes:r})})}},{key:"matchesExclude",value:function(e){return i.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),o=i.splitText(n-t),a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=i.textContent,i.parentNode.replaceChild(a,i),o}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,i){var o=this;e.nodes.every(function(a,s){var c=e.nodes[s+1];if(void 0===c||c.start>t){if(!r(a.node))return!1;var u=t-a.start,l=(n>a.end?a.end:n)-a.start,h=e.value.substr(0,a.start),f=e.value.substr(l+a.start);if(a.node=o.wrapRangeInTextNode(a.node,u,l),e.value=h+f,e.nodes.forEach(function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=l),e.nodes[n].end-=l)}),n-=l,i(a.node.previousSibling,a.start),!(n>a.end))return!1;t=a.end}return!0})}},{key:"wrapMatches",value:function(e,t,n,r,i){var o=this,a=0===t?0:t+1;this.getTextNodes(function(t){t.nodes.forEach(function(t){t=t.node;for(var i=void 0;null!==(i=e.exec(t.textContent))&&""!==i[a];)if(n(i[a],t)){var s=i.index;if(0!==a)for(var c=1;c<a;c++)s+=i[c].length;t=o.wrapRangeInTextNode(t,s,s+i[a].length),r(t.previousSibling),e.lastIndex=0}}),i()})}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,i){var o=this,a=0===t?0:t+1;this.getTextNodes(function(t){for(var s=void 0;null!==(s=e.exec(t.value))&&""!==s[a];){var c=s.index;if(0!==a)for(var u=1;u<a;u++)c+=s[u].length;var l=c+s[a].length;o.wrapRangeInMappedTextNode(t,c,l,function(e){return n(s[a],e)},function(t,n){e.lastIndex=n,r(t)})}i()})}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var i=this;this.getTextNodes(function(o){var a=o.value.length;e.forEach(function(e,r){var s=i.checkWhitespaceRanges(e,a,o.value),c=s.start,u=s.end;s.valid&&i.wrapRangeInMappedTextNode(o,c,u,function(n){return t(n,e,o.value.substring(c,u),r)},function(t){n(t,e)})}),r()})}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'+e+'"');var r=0,i="wrapMatches";this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),this[i](e,this.opt.ignoreGroups,function(e,t){return n.opt.filter(t,e,r)},function(e){r++,n.opt.each(e)},function(){0===r&&n.opt.noMatch(e),n.opt.done(r)})}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,i="wrapMatches",o=this.getSeparatedKeywords("string"==typeof e?[e]:e),a=o.keywords,s=o.length,c=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),0===s?this.opt.done(r):function e(t){var o=new RegExp(n.createRegExp(t),"gm"+c),u=0;n.log('Searching with expression "'+o+'"'),n[i](o,1,function(e,i){return n.opt.filter(i,t,r,u)},function(e){u++,r++,n.opt.each(e)},function(){0===u&&n.opt.noMatch(t),a[s-1]===t?n.opt.done(r):e(a[a.indexOf(t)+1])})}(a[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,i=this.checkRanges(e);i&&i.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(i)),this.wrapRangeFromIndex(i,function(e,t,r,i){return n.opt.filter(e,t,r,i)},function(e,t){r++,n.opt.each(e,t)},function(){n.opt.done(r)})):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(e){t.unwrapMatches(e)},function(e){var r=i.matches(e,n),o=t.matchesExclude(e);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),o}();return function(e){var t=this,n=new o(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}});
