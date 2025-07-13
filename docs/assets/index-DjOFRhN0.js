(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function _v(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vh={exports:{}},Ga={},Mh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function LT(){if(dy)return Ce;dy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,$={};function D(V,K,pe){this.props=V,this.context=K,this.refs=$,this.updater=pe||N}D.prototype.isReactComponent={},D.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},D.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function q(){}q.prototype=D.prototype;function J(V,K,pe){this.props=V,this.context=K,this.refs=$,this.updater=pe||N}var Q=J.prototype=new q;Q.constructor=J,L(Q,D.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,_e=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(V,K,pe){var Pe,Re={},Le=null,je=null;if(K!=null)for(Pe in K.ref!==void 0&&(je=K.ref),K.key!==void 0&&(Le=""+K.key),K)_e.call(K,Pe)&&!x.hasOwnProperty(Pe)&&(Re[Pe]=K[Pe]);var ze=arguments.length-2;if(ze===1)Re.children=pe;else if(1<ze){for(var qe=Array(ze),wt=0;wt<ze;wt++)qe[wt]=arguments[wt+2];Re.children=qe}if(V&&V.defaultProps)for(Pe in ze=V.defaultProps,ze)Re[Pe]===void 0&&(Re[Pe]=ze[Pe]);return{$$typeof:n,type:V,key:Le,ref:je,props:Re,_owner:Te.current}}function k(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return K[pe]})}var M=/\/+/g;function P(V,K){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):K.toString(36)}function ot(V,K,pe,Pe,Re){var Le=typeof V;(Le==="undefined"||Le==="boolean")&&(V=null);var je=!1;if(V===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(V.$$typeof){case n:case e:je=!0}}if(je)return je=V,Re=Re(je),V=Pe===""?"."+P(je,0):Pe,oe(Re)?(pe="",V!=null&&(pe=V.replace(M,"$&/")+"/"),ot(Re,K,pe,"",function(wt){return wt})):Re!=null&&(C(Re)&&(Re=k(Re,pe+(!Re.key||je&&je.key===Re.key?"":(""+Re.key).replace(M,"$&/")+"/")+V)),K.push(Re)),1;if(je=0,Pe=Pe===""?".":Pe+":",oe(V))for(var ze=0;ze<V.length;ze++){Le=V[ze];var qe=Pe+P(Le,ze);je+=ot(Le,K,pe,qe,Re)}else if(qe=I(V),typeof qe=="function")for(V=qe.call(V),ze=0;!(Le=V.next()).done;)Le=Le.value,qe=Pe+P(Le,ze++),je+=ot(Le,K,pe,qe,Re);else if(Le==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return je}function Dt(V,K,pe){if(V==null)return V;var Pe=[],Re=0;return ot(V,Pe,"","",function(Le){return K.call(pe,Le,Re++)}),Pe}function Lt(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var We={current:null},ie={transition:null},me={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Te};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(V,K,pe){Dt(V,function(){K.apply(this,arguments)},pe)},count:function(V){var K=0;return Dt(V,function(){K++}),K},toArray:function(V){return Dt(V,function(K){return K})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=D,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=J,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=ae,Ce.cloneElement=function(V,K,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Pe=L({},V.props),Re=V.key,Le=V.ref,je=V._owner;if(K!=null){if(K.ref!==void 0&&(Le=K.ref,je=Te.current),K.key!==void 0&&(Re=""+K.key),V.type&&V.type.defaultProps)var ze=V.type.defaultProps;for(qe in K)_e.call(K,qe)&&!x.hasOwnProperty(qe)&&(Pe[qe]=K[qe]===void 0&&ze!==void 0?ze[qe]:K[qe])}var qe=arguments.length-2;if(qe===1)Pe.children=pe;else if(1<qe){ze=Array(qe);for(var wt=0;wt<qe;wt++)ze[wt]=arguments[wt+2];Pe.children=ze}return{$$typeof:n,type:V.type,key:Re,ref:Le,props:Pe,_owner:je}},Ce.createContext=function(V){return V={$$typeof:f,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Ce.createElement=S,Ce.createFactory=function(V){var K=S.bind(null,V);return K.type=V,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:h,render:V}},Ce.isValidElement=C,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Lt}},Ce.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},Ce.startTransition=function(V){var K=ie.transition;ie.transition={};try{V()}finally{ie.transition=K}},Ce.unstable_act=ae,Ce.useCallback=function(V,K){return We.current.useCallback(V,K)},Ce.useContext=function(V){return We.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return We.current.useDeferredValue(V)},Ce.useEffect=function(V,K){return We.current.useEffect(V,K)},Ce.useId=function(){return We.current.useId()},Ce.useImperativeHandle=function(V,K,pe){return We.current.useImperativeHandle(V,K,pe)},Ce.useInsertionEffect=function(V,K){return We.current.useInsertionEffect(V,K)},Ce.useLayoutEffect=function(V,K){return We.current.useLayoutEffect(V,K)},Ce.useMemo=function(V,K){return We.current.useMemo(V,K)},Ce.useReducer=function(V,K,pe){return We.current.useReducer(V,K,pe)},Ce.useRef=function(V){return We.current.useRef(V)},Ce.useState=function(V){return We.current.useState(V)},Ce.useSyncExternalStore=function(V,K,pe){return We.current.useSyncExternalStore(V,K,pe)},Ce.useTransition=function(){return We.current.useTransition()},Ce.version="18.3.1",Ce}var py;function Jd(){return py||(py=1,Mh.exports=LT()),Mh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function VT(){if(my)return Ga;my=1;var n=Jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(h,p,y){var E,T={},I=null,N=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)i.call(p,E)&&!a.hasOwnProperty(E)&&(T[E]=p[E]);if(h&&h.defaultProps)for(E in p=h.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:h,key:I,ref:N,props:T,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=f,Ga.jsxs=f,Ga}var gy;function MT(){return gy||(gy=1,Vh.exports=VT()),Vh.exports}var B=MT(),Ku={},Fh={exports:{}},nn={},Uh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function FT(){return yy||(yy=1,function(n){function e(ie,me){var ae=ie.length;ie.push(me);e:for(;0<ae;){var V=ae-1>>>1,K=ie[V];if(0<o(K,me))ie[V]=me,ie[ae]=K,ae=V;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var me=ie[0],ae=ie.pop();if(ae!==me){ie[0]=ae;e:for(var V=0,K=ie.length,pe=K>>>1;V<pe;){var Pe=2*(V+1)-1,Re=ie[Pe],Le=Pe+1,je=ie[Le];if(0>o(Re,ae))Le<K&&0>o(je,Re)?(ie[V]=je,ie[Le]=ae,V=Le):(ie[V]=Re,ie[Pe]=ae,V=Pe);else if(Le<K&&0>o(je,ae))ie[V]=je,ie[Le]=ae,V=Le;else break e}}return me}function o(ie,me){var ae=ie.sortIndex-me.sortIndex;return ae!==0?ae:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],y=[],E=1,T=null,I=3,N=!1,L=!1,$=!1,D=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(ie){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ie)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function oe(ie){if($=!1,Q(ie),!L)if(t(p)!==null)L=!0,Lt(_e);else{var me=t(y);me!==null&&We(oe,me.startTime-ie)}}function _e(ie,me){L=!1,$&&($=!1,q(S),S=-1),N=!0;var ae=I;try{for(Q(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ie&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var K=V(T.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),Q(me)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var Pe=t(y);Pe!==null&&We(oe,Pe.startTime-me),pe=!1}return pe}finally{T=null,I=ae,N=!1}}var Te=!1,x=null,S=-1,k=5,C=-1;function O(){return!(n.unstable_now()-C<k)}function M(){if(x!==null){var ie=n.unstable_now();C=ie;var me=!0;try{me=x(!0,ie)}finally{me?P():(Te=!1,x=null)}}else Te=!1}var P;if(typeof J=="function")P=function(){J(M)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Dt=ot.port2;ot.port1.onmessage=M,P=function(){Dt.postMessage(null)}}else P=function(){D(M,0)};function Lt(ie){x=ie,Te||(Te=!0,P())}function We(ie,me){S=D(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){L||N||(L=!0,Lt(_e))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var ae=I;I=me;try{return ie()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=I;I=ie;try{return me()}finally{I=ae}},n.unstable_scheduleCallback=function(ie,me,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,ie){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,ie={id:E++,callback:me,priorityLevel:ie,startTime:ae,expirationTime:K,sortIndex:-1},ae>V?(ie.sortIndex=ae,e(y,ie),t(p)===null&&ie===t(y)&&($?(q(S),S=-1):$=!0,We(oe,ae-V))):(ie.sortIndex=K,e(p,ie),L||N||(L=!0,Lt(_e))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var me=I;return function(){var ae=I;I=me;try{return ie.apply(this,arguments)}finally{I=ae}}}}(jh)),jh}var _y;function UT(){return _y||(_y=1,Uh.exports=FT()),Uh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function jT(){if(vy)return nn;vy=1;var n=Jd(),e=UT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){f(r,s),f(r+"Capture",s)}function f(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function N(r,s,l,c){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,l,c){if(s===null||typeof s>"u"||N(r,s,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,l,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];D[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,J);D[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,J);D[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,J);D[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function Q(r,s,l,c){var d=D.hasOwnProperty(s)?D[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,l,d,c)&&(l=null),c||d===null?I(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):d.mustUseProperty?r[d.propertyName]=l===null?d.type===3?!1:"":l:(s=d.attributeName,c=d.attributeNamespace,l===null?r.removeAttribute(s):(d=d.type,l=d===3||d===4&&l===!0?"":""+l,c?r.setAttributeNS(c,s,l):r.setAttribute(s,l))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var pe=!1;function Pe(r,s){if(!r||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,A=g.length-1;1<=v&&0<=A&&d[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==g[A]){var R=`
`+d[v].replace(" at new "," at ");return r.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",r.displayName)),R}while(1<=v&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?K(r):""}function Re(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Pe(r.type,!1),r;case 11:return r=Pe(r.type.render,!1),r;case 1:return r=Pe(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Te:return"Portal";case k:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case ot:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case C:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=qe(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=wt(r))}function Cs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return r&&(c=qe(r)?r.checked?"true":"false":r.value),r=c,r!==l?(s.setValue(r),!0):!1}function Kr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function zi(r,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function xs(r,s){var l=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;l=ze(s.value!=null?s.value:l),r._wrapperState={initialChecked:c,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Zo(r,s){s=s.checked,s!=null&&Q(r,"checked",s,!1)}function ea(r,s){Zo(r,s);var l=ze(s.value),c=s.type;if(l!=null)c==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ns(r,s.type,l):s.hasOwnProperty("defaultValue")&&Ns(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Ns(r,s,l){(s!=="number"||Kr(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var mr=Array.isArray;function gr(r,s,l,c){if(r=r.options,s){s={};for(var d=0;d<l.length;d++)s["$"+l[d]]=!0;for(l=0;l<r.length;l++)d=s.hasOwnProperty("$"+r[l].value),r[l].selected!==d&&(r[l].selected=d),d&&c&&(r[l].defaultSelected=!0)}else{for(l=""+ze(l),s=null,d=0;d<r.length;d++){if(r[d].value===l){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ta(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bs(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(mr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:ze(l)}}function Os(r,s){var l=ze(s.value),c=ze(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),c!=null&&(r.defaultValue=""+c)}function na(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,ra=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,l,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Qr(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$i=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){$i.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function ia(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function sa(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var c=l.indexOf("--")===0,d=ia(l,s[l],c);l==="float"&&(l="cssFloat"),c?r.setProperty(l,d):r[l]=d}}var oa=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(r,s){if(s){if(oa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function la(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function Ds(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ls=null,pn=null,Wn=null;function Vs(r){if(r=ba(r)){if(typeof Ls!="function")throw Error(t(280));var s=r.stateNode;s&&(s=uu(s),Ls(r.stateNode,r.type,s))}}function Hn(r){pn?Wn?Wn.push(r):Wn=[r]:pn=r}function ua(){if(pn){var r=pn,s=Wn;if(Wn=pn=null,Vs(r),s)for(r=0;r<s.length;r++)Vs(s[r])}}function Hi(r,s){return r(s)}function ca(){}var _r=!1;function fa(r,s,l){if(_r)return r(s,l);_r=!0;try{return Hi(r,s,l)}finally{_r=!1,(pn!==null||Wn!==null)&&(ca(),ua())}}function at(r,s){var l=r.stateNode;if(l===null)return null;var c=uu(l);if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ms=!1;if(h)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Ms=!1}function qi(r,s,l,c,d,g,v,A,R){var z=Array.prototype.slice.call(arguments,3);try{s.apply(l,z)}catch(X){this.onError(X)}}var Gi=!1,Fs=null,Rn=!1,ha=null,cf={onError:function(r){Gi=!0,Fs=r}};function Us(r,s,l,c,d,g,v,A,R){Gi=!1,Fs=null,qi.apply(cf,arguments)}function Dl(r,s,l,c,d,g,v,A,R){if(Us.apply(this,arguments),Gi){if(Gi){var z=Fs;Gi=!1,Fs=null}else throw Error(t(198));Rn||(Rn=!0,ha=z)}}function Cn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Ki(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Cn(r)!==r)throw Error(t(188))}function Ll(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,c=s;;){var d=l.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){l=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===l)return xn(d),r;if(g===c)return xn(d),s;g=g.sibling}throw Error(t(188))}if(l.return!==c.return)l=d,c=g;else{for(var v=!1,A=d.child;A;){if(A===l){v=!0,l=d,c=g;break}if(A===c){v=!0,c=d,l=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===l){v=!0,l=g,c=d;break}if(A===c){v=!0,c=g,l=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function da(r){return r=Ll(r),r!==null?js(r):null}function js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=js(r);if(s!==null)return s;r=r.sibling}return null}var zs=e.unstable_scheduleCallback,pa=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,ff=e.unstable_requestPaint,Ge=e.unstable_now,Ml=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,Yr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ma=e.unstable_LowPriority,Fl=e.unstable_IdlePriority,Yi=null,sn=null;function Ul(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Yi,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:zl,ga=Math.log,jl=Math.LN2;function zl(r){return r>>>=0,r===0?32:31-(ga(r)/jl|0)|0}var Bs=64,$s=4194304;function Xr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Xi(r,s){var l=r.pendingLanes;if(l===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=l&268435455;if(v!==0){var A=v&~d;A!==0?c=Xr(A):(g&=v,g!==0&&(c=Xr(g)))}else v=l&~d,v!==0?c=Xr(v):g!==0&&(c=Xr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if(c&4&&(c|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)l=31-Ht(s),d=1<<l,c|=r[l],s&=~d;return c}function hf(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var l=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Ht(g),A=1<<v,R=d[v];R===-1?(!(A&l)||A&c)&&(d[v]=hf(A,s)):R<=s&&(r.expiredLanes|=A),g&=~A}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ji(){var r=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),r}function Jr(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function Zr(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=l}function He(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<l;){var d=31-Ht(l),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,l&=~g}}function ei(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var c=31-Ht(l),d=1<<c;d&s|r[c]&s&&(r[c]|=s),l&=~d}}var Oe=0;function ti(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Bl,Ws,$l,Wl,Hl,ya=!1,qn=[],Pt=null,Nn=null,bn=null,ni=new Map,gn=new Map,Gn=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(r,s){switch(r){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ni.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Qt(r,s,l,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=ba(s),s!==null&&Ws(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function pf(r,s,l,c,d){switch(s){case"focusin":return Pt=Qt(Pt,r,s,l,c,d),!0;case"dragenter":return Nn=Qt(Nn,r,s,l,c,d),!0;case"mouseover":return bn=Qt(bn,r,s,l,c,d),!0;case"pointerover":var g=d.pointerId;return ni.set(g,Qt(ni.get(g)||null,r,s,l,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Qt(gn.get(g)||null,r,s,l,c,d)),!0}return!1}function Gl(r){var s=rs(r.target);if(s!==null){var l=Cn(s);if(l!==null){if(s=l.tag,s===13){if(s=Ki(l),s!==null){r.blockedOn=s,Hl(r.priority,function(){$l(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Hs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var c=new l.constructor(l.type,l);Wi=c,l.target.dispatchEvent(c),Wi=null}else return s=ba(l),s!==null&&Ws(s),r.blockedOn=l,!1;s.shift()}return!0}function Zi(r,s,l){Er(r)&&l.delete(s)}function Kl(){ya=!1,Pt!==null&&Er(Pt)&&(Pt=null),Nn!==null&&Er(Nn)&&(Nn=null),bn!==null&&Er(bn)&&(bn=null),ni.forEach(Zi),gn.forEach(Zi)}function On(r,s){r.blockedOn===s&&(r.blockedOn=null,ya||(ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kl)))}function Dn(r){function s(d){return On(d,r)}if(0<qn.length){On(qn[0],r);for(var l=1;l<qn.length;l++){var c=qn[l];c.blockedOn===r&&(c.blockedOn=null)}}for(Pt!==null&&On(Pt,r),Nn!==null&&On(Nn,r),bn!==null&&On(bn,r),ni.forEach(s),gn.forEach(s),l=0;l<Gn.length;l++)c=Gn[l],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(l=Gn[0],l.blockedOn===null);)Gl(l),l.blockedOn===null&&Gn.shift()}var wr=oe.ReactCurrentBatchConfig,ri=!0;function Je(r,s,l,c){var d=Oe,g=wr.transition;wr.transition=null;try{Oe=1,_a(r,s,l,c)}finally{Oe=d,wr.transition=g}}function mf(r,s,l,c){var d=Oe,g=wr.transition;wr.transition=null;try{Oe=4,_a(r,s,l,c)}finally{Oe=d,wr.transition=g}}function _a(r,s,l,c){if(ri){var d=Hs(r,s,l,c);if(d===null)kf(r,s,c,es,l),ql(r,c);else if(pf(d,r,s,l,c))c.stopPropagation();else if(ql(r,c),s&4&&-1<df.indexOf(r)){for(;d!==null;){var g=ba(d);if(g!==null&&Bl(g),g=Hs(r,s,l,c),g===null&&kf(r,s,c,es,l),g===d)break;d=g}d!==null&&c.stopPropagation()}else kf(r,s,c,null,l)}}var es=null;function Hs(r,s,l,c){if(es=null,r=Ds(c),r=rs(r),r!==null)if(s=Cn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Ki(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return es=r,null}function va(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ml()){case Qi:return 1;case Yr:return 4;case mn:case ma:return 16;case Fl:return 536870912;default:return 16}default:return 16}}var an=null,qs=null,Yt=null;function Ea(){if(Yt)return Yt;var r,s=qs,l=s.length,c,d="value"in an?an.value:an.textContent,g=d.length;for(r=0;r<l&&s[r]===d[r];r++);var v=l-r;for(c=1;c<=v&&s[l-c]===d[g-c];c++);return Yt=d.slice(r,1<c?1-c:void 0)}function Gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Kn(){return!0}function wa(){return!1}function Rt(r){function s(l,c,d,g,v){this._reactName=l,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(l=r[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Kn:wa,this.isPropagationStopped=wa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Rt(Ln),Qn=ae({},Ln,{view:0,detail:0}),gf=Rt(Qn),Qs,Tr,ii,ts=ae({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ii&&(ii&&r.type==="mousemove"?(Qs=r.screenX-ii.screenX,Tr=r.screenY-ii.screenY):Tr=Qs=0,ii=r),Qs)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Ys=Rt(ts),Ta=ae({},ts,{dataTransfer:0}),Ql=Rt(Ta),Xs=ae({},Qn,{relatedTarget:0}),Js=Rt(Xs),Yl=ae({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=Rt(Yl),Xl=ae({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Jl=Rt(Xl),Zl=ae({},Ln,{data:0}),Ia=Rt(Zl),Zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=eu[r])?!!s[r]:!1}function Yn(){return tu}var u=ae({},Qn,{key:function(r){if(r.key){var s=Zs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(r){return r.type==="keypress"?Gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Rt(u),_=ae({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Rt(_),F=ae({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),H=Rt(F),re=ae({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Rt(re),mt=ae({},ts,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Rt(mt),Tt=[9,13,27,32],ct=h&&"CompositionEvent"in window,yn=null;h&&"documentMode"in document&&(yn=document.documentMode);var ln=h&&"TextEvent"in window&&!yn,ns=h&&(!ct||yn&&8<yn&&11>=yn),eo=" ",am=!1;function lm(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var to=!1;function b0(r,s){switch(r){case"compositionend":return um(s);case"keypress":return s.which!==32?null:(am=!0,eo);case"textInput":return r=s.data,r===eo&&am?null:r;default:return null}}function O0(r,s){if(to)return r==="compositionend"||!ct&&lm(r,s)?(r=Ea(),Yt=qs=an=null,to=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ns&&s.locale!=="ko"?null:s.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!D0[r.type]:s==="textarea"}function fm(r,s,l,c){Hn(c),s=ou(s,"onChange"),0<s.length&&(l=new Ks("onChange","change",null,l,c),r.push({event:l,listeners:s}))}var Sa=null,Aa=null;function L0(r){Cm(r,0)}function nu(r){var s=oo(r);if(Cs(s))return r}function V0(r,s){if(r==="change")return s}var hm=!1;if(h){var yf;if(h){var _f="oninput"in document;if(!_f){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),_f=typeof dm.oninput=="function"}yf=_f}else yf=!1;hm=yf&&(!document.documentMode||9<document.documentMode)}function pm(){Sa&&(Sa.detachEvent("onpropertychange",mm),Aa=Sa=null)}function mm(r){if(r.propertyName==="value"&&nu(Aa)){var s=[];fm(s,Aa,r,Ds(r)),fa(L0,s)}}function M0(r,s,l){r==="focusin"?(pm(),Sa=s,Aa=l,Sa.attachEvent("onpropertychange",mm)):r==="focusout"&&pm()}function F0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(Aa)}function U0(r,s){if(r==="click")return nu(s)}function j0(r,s){if(r==="input"||r==="change")return nu(s)}function z0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vn=typeof Object.is=="function"?Object.is:z0;function ka(r,s){if(Vn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var d=l[c];if(!p.call(s,d)||!Vn(r[d],s[d]))return!1}return!0}function gm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ym(r,s){var l=gm(r);r=0;for(var c;l;){if(l.nodeType===3){if(c=r+l.textContent.length,r<=s&&c>=s)return{node:l,offset:s-r};r=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=gm(l)}}function _m(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?_m(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function vm(){for(var r=window,s=Kr();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Kr(r.document)}return s}function vf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function B0(r){var s=vm(),l=r.focusedElem,c=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&_m(l.ownerDocument.documentElement,l)){if(c!==null&&vf(l)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=l.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=ym(l,g);var v=ym(l,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var $0=h&&"documentMode"in document&&11>=document.documentMode,no=null,Ef=null,Pa=null,wf=!1;function Em(r,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;wf||no==null||no!==Kr(c)||(c=no,"selectionStart"in c&&vf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&ka(Pa,c)||(Pa=c,c=ou(Ef,"onSelect"),0<c.length&&(s=new Ks("onSelect","select",null,s,l),r.push({event:s,listeners:c}),s.target=no)))}function ru(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var ro={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Tf={},wm={};h&&(wm=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function iu(r){if(Tf[r])return Tf[r];if(!ro[r])return r;var s=ro[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in wm)return Tf[r]=s[l];return r}var Tm=iu("animationend"),Im=iu("animationiteration"),Sm=iu("animationstart"),Am=iu("transitionend"),km=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(r,s){km.set(r,s),a(s,[r])}for(var If=0;If<Pm.length;If++){var Sf=Pm[If],W0=Sf.toLowerCase(),H0=Sf[0].toUpperCase()+Sf.slice(1);si(W0,"on"+H0)}si(Tm,"onAnimationEnd"),si(Im,"onAnimationIteration"),si(Sm,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Am,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Rm(r,s,l){var c=r.type||"unknown-event";r.currentTarget=l,Dl(c,s,void 0,r),r.currentTarget=null}function Cm(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var c=r[l],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],R=A.instance,z=A.currentTarget;if(A=A.listener,R!==g&&d.isPropagationStopped())break e;Rm(d,A,z),g=R}else for(v=0;v<c.length;v++){if(A=c[v],R=A.instance,z=A.currentTarget,A=A.listener,R!==g&&d.isPropagationStopped())break e;Rm(d,A,z),g=R}}}if(Rn)throw r=ha,Rn=!1,ha=null,r}function Qe(r,s){var l=s[bf];l===void 0&&(l=s[bf]=new Set);var c=r+"__bubble";l.has(c)||(xm(s,r,2,!1),l.add(c))}function Af(r,s,l){var c=0;s&&(c|=4),xm(l,r,c,s)}var su="_reactListening"+Math.random().toString(36).slice(2);function Ca(r){if(!r[su]){r[su]=!0,i.forEach(function(l){l!=="selectionchange"&&(q0.has(l)||Af(l,!1,r),Af(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[su]||(s[su]=!0,Af("selectionchange",!1,s))}}function xm(r,s,l,c){switch(va(s)){case 1:var d=Je;break;case 4:d=mf;break;default:d=_a}l=d.bind(null,s,l,r),d=void 0,!Ms||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,l,{capture:!0,passive:d}):r.addEventListener(s,l,!0):d!==void 0?r.addEventListener(s,l,{passive:d}):r.addEventListener(s,l,!1)}function kf(r,s,l,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;A!==null;){if(v=rs(A),v===null)return;if(R=v.tag,R===5||R===6){c=g=v;continue e}A=A.parentNode}}c=c.return}fa(function(){var z=g,X=Ds(l),Z=[];e:{var Y=km.get(r);if(Y!==void 0){var se=Ks,ce=r;switch(r){case"keypress":if(Gs(l)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=Js;break;case"focusout":ce="blur",se=Js;break;case"beforeblur":case"afterblur":se=Js;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=H;break;case Tm:case Im:case Sm:se=Ir;break;case Am:se=$e;break;case"scroll":se=gf;break;case"wheel":se=Ve;break;case"copy":case"cut":case"paste":se=Jl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var fe=(s&4)!==0,lt=!fe&&r==="scroll",U=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var b=z,j;b!==null;){j=b;var ne=j.stateNode;if(j.tag===5&&ne!==null&&(j=ne,U!==null&&(ne=at(b,U),ne!=null&&fe.push(xa(b,ne,j)))),lt)break;b=b.return}0<fe.length&&(Y=new se(Y,ce,null,l,X),Z.push({event:Y,listeners:fe}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&l!==Wi&&(ce=l.relatedTarget||l.fromElement)&&(rs(ce)||ce[Sr]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=l.relatedTarget||l.toElement,se=z,ce=ce?rs(ce):null,ce!==null&&(lt=Cn(ce),ce!==lt||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(fe=Ys,ne="onMouseLeave",U="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(fe=w,ne="onPointerLeave",U="onPointerEnter",b="pointer"),lt=se==null?Y:oo(se),j=ce==null?Y:oo(ce),Y=new fe(ne,b+"leave",se,l,X),Y.target=lt,Y.relatedTarget=j,ne=null,rs(X)===z&&(fe=new fe(U,b+"enter",ce,l,X),fe.target=j,fe.relatedTarget=lt,ne=fe),lt=ne,se&&ce)t:{for(fe=se,U=ce,b=0,j=fe;j;j=io(j))b++;for(j=0,ne=U;ne;ne=io(ne))j++;for(;0<b-j;)fe=io(fe),b--;for(;0<j-b;)U=io(U),j--;for(;b--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=io(fe),U=io(U)}fe=null}else fe=null;se!==null&&Nm(Z,Y,se,fe,!1),ce!==null&&lt!==null&&Nm(Z,lt,ce,fe,!0)}}e:{if(Y=z?oo(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var he=V0;else if(cm(Y))if(hm)he=j0;else{he=F0;var ge=M0}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(he=U0);if(he&&(he=he(r,z))){fm(Z,he,l,X);break e}ge&&ge(r,Y,z),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Ns(Y,"number",Y.value)}switch(ge=z?oo(z):window,r){case"focusin":(cm(ge)||ge.contentEditable==="true")&&(no=ge,Ef=z,Pa=null);break;case"focusout":Pa=Ef=no=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Em(Z,l,X);break;case"selectionchange":if($0)break;case"keydown":case"keyup":Em(Z,l,X)}var ye;if(ct)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else to?lm(r,l)&&(we="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(we="onCompositionStart");we&&(ns&&l.locale!=="ko"&&(to||we!=="onCompositionStart"?we==="onCompositionEnd"&&to&&(ye=Ea()):(an=X,qs="value"in an?an.value:an.textContent,to=!0)),ge=ou(z,we),0<ge.length&&(we=new Ia(we,r,null,l,X),Z.push({event:we,listeners:ge}),ye?we.data=ye:(ye=um(l),ye!==null&&(we.data=ye)))),(ye=ln?b0(r,l):O0(r,l))&&(z=ou(z,"onBeforeInput"),0<z.length&&(X=new Ia("onBeforeInput","beforeinput",null,l,X),Z.push({event:X,listeners:z}),X.data=ye))}Cm(Z,s)})}function xa(r,s,l){return{instance:r,listener:s,currentTarget:l}}function ou(r,s){for(var l=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=at(r,l),g!=null&&c.unshift(xa(r,g,d)),g=at(r,s),g!=null&&c.push(xa(r,g,d))),r=r.return}return c}function io(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Nm(r,s,l,c,d){for(var g=s._reactName,v=[];l!==null&&l!==c;){var A=l,R=A.alternate,z=A.stateNode;if(R!==null&&R===c)break;A.tag===5&&z!==null&&(A=z,d?(R=at(l,g),R!=null&&v.unshift(xa(l,R,A))):d||(R=at(l,g),R!=null&&v.push(xa(l,R,A)))),l=l.return}v.length!==0&&r.push({event:s,listeners:v})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function bm(r){return(typeof r=="string"?r:""+r).replace(G0,`
`).replace(K0,"")}function au(r,s,l){if(s=bm(s),bm(r)!==s&&l)throw Error(t(425))}function lu(){}var Pf=null,Rf=null;function Cf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(r){return Om.resolve(null).then(r).catch(X0)}:xf;function X0(r){setTimeout(function(){throw r})}function Nf(r,s){var l=s,c=0;do{var d=l.nextSibling;if(r.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(c===0){r.removeChild(d),Dn(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=d}while(l);Dn(s)}function oi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Dm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var so=Math.random().toString(36).slice(2),Xn="__reactFiber$"+so,Na="__reactProps$"+so,Sr="__reactContainer$"+so,bf="__reactEvents$"+so,J0="__reactListeners$"+so,Z0="__reactHandles$"+so;function rs(r){var s=r[Xn];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Sr]||l[Xn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Dm(r);r!==null;){if(l=r[Xn])return l;r=Dm(r)}return s}r=l,l=r.parentNode}return null}function ba(r){return r=r[Xn]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function oo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[Na]||null}var Of=[],ao=-1;function ai(r){return{current:r}}function Ye(r){0>ao||(r.current=Of[ao],Of[ao]=null,ao--)}function Ke(r,s){ao++,Of[ao]=r.current,r.current=s}var li={},Vt=ai(li),Xt=ai(!1),is=li;function lo(r,s){var l=r.type.contextTypes;if(!l)return li;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in l)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function cu(){Ye(Xt),Ye(Vt)}function Lm(r,s,l){if(Vt.current!==li)throw Error(t(168));Ke(Vt,s),Ke(Xt,l)}function Vm(r,s,l){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,je(r)||"Unknown",d));return ae({},l,c)}function fu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||li,is=Vt.current,Ke(Vt,r),Ke(Xt,Xt.current),!0}function Mm(r,s,l){var c=r.stateNode;if(!c)throw Error(t(169));l?(r=Vm(r,s,is),c.__reactInternalMemoizedMergedChildContext=r,Ye(Xt),Ye(Vt),Ke(Vt,r)):Ye(Xt),Ke(Xt,l)}var Ar=null,hu=!1,Df=!1;function Fm(r){Ar===null?Ar=[r]:Ar.push(r)}function eT(r){hu=!0,Fm(r)}function ui(){if(!Df&&Ar!==null){Df=!0;var r=0,s=Oe;try{var l=Ar;for(Oe=1;r<l.length;r++){var c=l[r];do c=c(!0);while(c!==null)}Ar=null,hu=!1}catch(d){throw Ar!==null&&(Ar=Ar.slice(r+1)),zs(Qi,ui),d}finally{Oe=s,Df=!1}}return null}var uo=[],co=0,du=null,pu=0,_n=[],vn=0,ss=null,kr=1,Pr="";function os(r,s){uo[co++]=pu,uo[co++]=du,du=r,pu=s}function Um(r,s,l){_n[vn++]=kr,_n[vn++]=Pr,_n[vn++]=ss,ss=r;var c=kr;r=Pr;var d=32-Ht(c)-1;c&=~(1<<d),l+=1;var g=32-Ht(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,kr=1<<32-Ht(s)+d|l<<d|c,Pr=g+r}else kr=1<<g|l<<d|c,Pr=r}function Lf(r){r.return!==null&&(os(r,1),Um(r,1,0))}function Vf(r){for(;r===du;)du=uo[--co],uo[co]=null,pu=uo[--co],uo[co]=null;for(;r===ss;)ss=_n[--vn],_n[vn]=null,Pr=_n[--vn],_n[vn]=null,kr=_n[--vn],_n[vn]=null}var un=null,cn=null,Ze=!1,Mn=null;function jm(r,s){var l=In(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function zm(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=oi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ss!==null?{id:kr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=In(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,un=r,cn=null,!0):!1;default:return!1}}function Mf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ff(r){if(Ze){var s=cn;if(s){var l=s;if(!zm(r,s)){if(Mf(r))throw Error(t(418));s=oi(l.nextSibling);var c=un;s&&zm(r,s)?jm(c,l):(r.flags=r.flags&-4097|2,Ze=!1,un=r)}}else{if(Mf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,un=r}}}function Bm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function mu(r){if(r!==un)return!1;if(!Ze)return Bm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Cf(r.type,r.memoizedProps)),s&&(s=cn)){if(Mf(r))throw $m(),Error(t(418));for(;s;)jm(r,s),s=oi(s.nextSibling)}if(Bm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){cn=oi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?oi(r.stateNode.nextSibling):null;return!0}function $m(){for(var r=cn;r;)r=oi(r.nextSibling)}function fo(){cn=un=null,Ze=!1}function Uf(r){Mn===null?Mn=[r]:Mn.push(r)}var tT=oe.ReactCurrentBatchConfig;function Oa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=d.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function gu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Wm(r){var s=r._init;return s(r._payload)}function Hm(r){function s(U,b){if(r){var j=U.deletions;j===null?(U.deletions=[b],U.flags|=16):j.push(b)}}function l(U,b){if(!r)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function c(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function d(U,b){return U=yi(U,b),U.index=0,U.sibling=null,U}function g(U,b,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<b?(U.flags|=2,b):j):(U.flags|=2,b)):(U.flags|=1048576,b)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,b,j,ne){return b===null||b.tag!==6?(b=xh(j,U.mode,ne),b.return=U,b):(b=d(b,j),b.return=U,b)}function R(U,b,j,ne){var he=j.type;return he===x?X(U,b,j.props.children,ne,j.key):b!==null&&(b.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Wm(he)===b.type)?(ne=d(b,j.props),ne.ref=Oa(U,b,j),ne.return=U,ne):(ne=ju(j.type,j.key,j.props,null,U.mode,ne),ne.ref=Oa(U,b,j),ne.return=U,ne)}function z(U,b,j,ne){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=Nh(j,U.mode,ne),b.return=U,b):(b=d(b,j.children||[]),b.return=U,b)}function X(U,b,j,ne,he){return b===null||b.tag!==7?(b=ps(j,U.mode,ne,he),b.return=U,b):(b=d(b,j),b.return=U,b)}function Z(U,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=xh(""+b,U.mode,j),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _e:return j=ju(b.type,b.key,b.props,null,U.mode,j),j.ref=Oa(U,null,b),j.return=U,j;case Te:return b=Nh(b,U.mode,j),b.return=U,b;case Lt:var ne=b._init;return Z(U,ne(b._payload),j)}if(mr(b)||me(b))return b=ps(b,U.mode,j,null),b.return=U,b;gu(U,b)}return null}function Y(U,b,j,ne){var he=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:A(U,b,""+j,ne);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _e:return j.key===he?R(U,b,j,ne):null;case Te:return j.key===he?z(U,b,j,ne):null;case Lt:return he=j._init,Y(U,b,he(j._payload),ne)}if(mr(j)||me(j))return he!==null?null:X(U,b,j,ne,null);gu(U,j)}return null}function se(U,b,j,ne,he){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(j)||null,A(b,U,""+ne,he);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case _e:return U=U.get(ne.key===null?j:ne.key)||null,R(b,U,ne,he);case Te:return U=U.get(ne.key===null?j:ne.key)||null,z(b,U,ne,he);case Lt:var ge=ne._init;return se(U,b,j,ge(ne._payload),he)}if(mr(ne)||me(ne))return U=U.get(j)||null,X(b,U,ne,he,null);gu(b,ne)}return null}function ce(U,b,j,ne){for(var he=null,ge=null,ye=b,we=b=0,At=null;ye!==null&&we<j.length;we++){ye.index>we?(At=ye,ye=null):At=ye.sibling;var Ue=Y(U,ye,j[we],ne);if(Ue===null){ye===null&&(ye=At);break}r&&ye&&Ue.alternate===null&&s(U,ye),b=g(Ue,b,we),ge===null?he=Ue:ge.sibling=Ue,ge=Ue,ye=At}if(we===j.length)return l(U,ye),Ze&&os(U,we),he;if(ye===null){for(;we<j.length;we++)ye=Z(U,j[we],ne),ye!==null&&(b=g(ye,b,we),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ze&&os(U,we),he}for(ye=c(U,ye);we<j.length;we++)At=se(ye,U,we,j[we],ne),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?we:At.key),b=g(At,b,we),ge===null?he=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(_i){return s(U,_i)}),Ze&&os(U,we),he}function fe(U,b,j,ne){var he=me(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ge=he=null,ye=b,we=b=0,At=null,Ue=j.next();ye!==null&&!Ue.done;we++,Ue=j.next()){ye.index>we?(At=ye,ye=null):At=ye.sibling;var _i=Y(U,ye,Ue.value,ne);if(_i===null){ye===null&&(ye=At);break}r&&ye&&_i.alternate===null&&s(U,ye),b=g(_i,b,we),ge===null?he=_i:ge.sibling=_i,ge=_i,ye=At}if(Ue.done)return l(U,ye),Ze&&os(U,we),he;if(ye===null){for(;!Ue.done;we++,Ue=j.next())Ue=Z(U,Ue.value,ne),Ue!==null&&(b=g(Ue,b,we),ge===null?he=Ue:ge.sibling=Ue,ge=Ue);return Ze&&os(U,we),he}for(ye=c(U,ye);!Ue.done;we++,Ue=j.next())Ue=se(ye,U,we,Ue.value,ne),Ue!==null&&(r&&Ue.alternate!==null&&ye.delete(Ue.key===null?we:Ue.key),b=g(Ue,b,we),ge===null?he=Ue:ge.sibling=Ue,ge=Ue);return r&&ye.forEach(function(DT){return s(U,DT)}),Ze&&os(U,we),he}function lt(U,b,j,ne){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case _e:e:{for(var he=j.key,ge=b;ge!==null;){if(ge.key===he){if(he=j.type,he===x){if(ge.tag===7){l(U,ge.sibling),b=d(ge,j.props.children),b.return=U,U=b;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Wm(he)===ge.type){l(U,ge.sibling),b=d(ge,j.props),b.ref=Oa(U,ge,j),b.return=U,U=b;break e}l(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===x?(b=ps(j.props.children,U.mode,ne,j.key),b.return=U,U=b):(ne=ju(j.type,j.key,j.props,null,U.mode,ne),ne.ref=Oa(U,b,j),ne.return=U,U=ne)}return v(U);case Te:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){l(U,b.sibling),b=d(b,j.children||[]),b.return=U,U=b;break e}else{l(U,b);break}else s(U,b);b=b.sibling}b=Nh(j,U.mode,ne),b.return=U,U=b}return v(U);case Lt:return ge=j._init,lt(U,b,ge(j._payload),ne)}if(mr(j))return ce(U,b,j,ne);if(me(j))return fe(U,b,j,ne);gu(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(l(U,b.sibling),b=d(b,j),b.return=U,U=b):(l(U,b),b=xh(j,U.mode,ne),b.return=U,U=b),v(U)):l(U,b)}return lt}var ho=Hm(!0),qm=Hm(!1),yu=ai(null),_u=null,po=null,jf=null;function zf(){jf=po=_u=null}function Bf(r){var s=yu.current;Ye(yu),r._currentValue=s}function $f(r,s,l){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===l)break;r=r.return}}function mo(r,s){_u=r,jf=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Zt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(jf!==r)if(r={context:r,memoizedValue:s,next:null},po===null){if(_u===null)throw Error(t(308));po=r,_u.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return s}var as=null;function Wf(r){as===null?as=[r]:as.push(r)}function Gm(r,s,l,c){var d=s.interleaved;return d===null?(l.next=l,Wf(s)):(l.next=d.next,d.next=l),s.interleaved=l,Rr(r,c)}function Rr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var ci=!1;function Hf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function fi(r,s,l){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Fe&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Rr(r,l)}return d=c.interleaved,d===null?(s.next=s,Wf(c)):(s.next=d.next,d.next=s),c.interleaved=s,Rr(r,l)}function vu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,l|=c,s.lanes=l,ei(r,l)}}function Qm(r,s){var l=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var d=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var v={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?d=g=v:g=g.next=v,l=l.next}while(l!==null);g===null?d=g=s:g=g.next=s}else d=g=s;l={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Eu(r,s,l,c){var d=r.updateQueue;ci=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var R=A,z=R.next;R.next=null,v===null?g=z:v.next=z,v=R;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==v&&(A===null?X.firstBaseUpdate=z:A.next=z,X.lastBaseUpdate=R))}if(g!==null){var Z=d.baseState;v=0,X=z=R=null,A=g;do{var Y=A.lane,se=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,fe=A;switch(Y=s,se=l,fe.tag){case 1:if(ce=fe.payload,typeof ce=="function"){Z=ce.call(se,Z,Y);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=fe.payload,Y=typeof ce=="function"?ce.call(se,Z,Y):ce,Y==null)break e;Z=ae({},Z,Y);break e;case 2:ci=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else se={eventTime:se,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(z=X=se,R=Z):X=X.next=se,v|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(R=Z),d.baseState=R,d.firstBaseUpdate=z,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);cs|=v,r.lanes=v,r.memoizedState=Z}}function Ym(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=l,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Da={},Jn=ai(Da),La=ai(Da),Va=ai(Da);function ls(r){if(r===Da)throw Error(t(174));return r}function qf(r,s){switch(Ke(Va,s),Ke(La,r),Ke(Jn,Da),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ye(Jn),Ke(Jn,s)}function go(){Ye(Jn),Ye(La),Ye(Va)}function Xm(r){ls(Va.current);var s=ls(Jn.current),l=pt(s,r.type);s!==l&&(Ke(La,r),Ke(Jn,l))}function Gf(r){La.current===r&&(Ye(Jn),Ye(La))}var et=ai(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Kf=[];function Qf(){for(var r=0;r<Kf.length;r++)Kf[r]._workInProgressVersionPrimary=null;Kf.length=0}var Tu=oe.ReactCurrentDispatcher,Yf=oe.ReactCurrentBatchConfig,us=0,tt=null,gt=null,It=null,Iu=!1,Ma=!1,Fa=0,nT=0;function Mt(){throw Error(t(321))}function Xf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Vn(r[l],s[l]))return!1;return!0}function Jf(r,s,l,c,d,g){if(us=g,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tu.current=r===null||r.memoizedState===null?oT:aT,r=l(c,d),Ma){g=0;do{if(Ma=!1,Fa=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,Tu.current=lT,r=l(c,d)}while(Ma)}if(Tu.current=ku,s=gt!==null&&gt.next!==null,us=0,It=gt=tt=null,Iu=!1,s)throw Error(t(300));return r}function Zf(){var r=Fa!==0;return Fa=0,r}function Zn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=r:It=It.next=r,It}function wn(){if(gt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?tt.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?tt.memoizedState=It=r:It=It.next=r}return It}function Ua(r,s){return typeof s=="function"?s(r):s}function eh(r){var s=wn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var c=gt,d=c.baseQueue,g=l.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,l.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=v=null,R=null,z=g;do{var X=z.lane;if((us&X)===X)R!==null&&(R=R.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var Z={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};R===null?(A=R=Z,v=c):R=R.next=Z,tt.lanes|=X,cs|=X}z=z.next}while(z!==null&&z!==g);R===null?v=c:R.next=A,Vn(c,s.memoizedState)||(Zt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=R,l.lastRenderedState=c}if(r=l.interleaved,r!==null){d=r;do g=d.lane,tt.lanes|=g,cs|=g,d=d.next;while(d!==r)}else d===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function th(r){var s=wn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var c=l.dispatch,d=l.pending,g=s.memoizedState;if(d!==null){l.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Vn(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function Jm(){}function Zm(r,s){var l=tt,c=wn(),d=s(),g=!Vn(c.memoizedState,d);if(g&&(c.memoizedState=d,Zt=!0),c=c.queue,nh(ng.bind(null,l,c,r),[r]),c.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(l.flags|=2048,ja(9,tg.bind(null,l,c,d,s),void 0,null),St===null)throw Error(t(349));us&30||eg(l,s,d)}return d}function eg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function tg(r,s,l,c){s.value=l,s.getSnapshot=c,rg(s)&&ig(r)}function ng(r,s,l){return l(function(){rg(s)&&ig(r)})}function rg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Vn(r,l)}catch{return!0}}function ig(r){var s=Rr(r,1);s!==null&&zn(s,r,1,-1)}function sg(r){var s=Zn();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:r},s.queue=r,r=r.dispatch=sT.bind(null,tt,r),[s.memoizedState,r]}function ja(r,s,l,c){return r={tag:r,create:s,destroy:l,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(c=l.next,l.next=r,r.next=c,s.lastEffect=r)),r}function og(){return wn().memoizedState}function Su(r,s,l,c){var d=Zn();tt.flags|=r,d.memoizedState=ja(1|s,l,void 0,c===void 0?null:c)}function Au(r,s,l,c){var d=wn();c=c===void 0?null:c;var g=void 0;if(gt!==null){var v=gt.memoizedState;if(g=v.destroy,c!==null&&Xf(c,v.deps)){d.memoizedState=ja(s,l,g,c);return}}tt.flags|=r,d.memoizedState=ja(1|s,l,g,c)}function ag(r,s){return Su(8390656,8,r,s)}function nh(r,s){return Au(2048,8,r,s)}function lg(r,s){return Au(4,2,r,s)}function ug(r,s){return Au(4,4,r,s)}function cg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function fg(r,s,l){return l=l!=null?l.concat([r]):null,Au(4,4,cg.bind(null,s,r),l)}function rh(){}function hg(r,s){var l=wn();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Xf(s,c[1])?c[0]:(l.memoizedState=[r,s],r)}function dg(r,s){var l=wn();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Xf(s,c[1])?c[0]:(r=r(),l.memoizedState=[r,s],r)}function pg(r,s,l){return us&21?(Vn(l,s)||(l=Ji(),tt.lanes|=l,cs|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=l)}function rT(r,s){var l=Oe;Oe=l!==0&&4>l?l:4,r(!0);var c=Yf.transition;Yf.transition={};try{r(!1),s()}finally{Oe=l,Yf.transition=c}}function mg(){return wn().memoizedState}function iT(r,s,l){var c=mi(r);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},gg(r))yg(s,l);else if(l=Gm(r,s,l,c),l!==null){var d=Kt();zn(l,r,c,d),_g(l,s,c)}}function sT(r,s,l){var c=mi(r),d={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(gg(r))yg(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,l);if(d.hasEagerState=!0,d.eagerState=A,Vn(A,v)){var R=s.interleaved;R===null?(d.next=d,Wf(s)):(d.next=R.next,R.next=d),s.interleaved=d;return}}catch{}finally{}l=Gm(r,s,d,c),l!==null&&(d=Kt(),zn(l,r,c,d),_g(l,s,c))}}function gg(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function yg(r,s){Ma=Iu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function _g(r,s,l){if(l&4194240){var c=s.lanes;c&=r.pendingLanes,l|=c,s.lanes=l,ei(r,l)}}var ku={readContext:En,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},oT={readContext:En,useCallback:function(r,s){return Zn().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:ag,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Su(4194308,4,cg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Su(4194308,4,r,s)},useInsertionEffect:function(r,s){return Su(4,2,r,s)},useMemo:function(r,s){var l=Zn();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var c=Zn();return s=l!==void 0?l(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=iT.bind(null,tt,r),[c.memoizedState,r]},useRef:function(r){var s=Zn();return r={current:r},s.memoizedState=r},useState:sg,useDebugValue:rh,useDeferredValue:function(r){return Zn().memoizedState=r},useTransition:function(){var r=sg(!1),s=r[0];return r=rT.bind(null,r[1]),Zn().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var c=tt,d=Zn();if(Ze){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),St===null)throw Error(t(349));us&30||eg(c,s,l)}d.memoizedState=l;var g={value:l,getSnapshot:s};return d.queue=g,ag(ng.bind(null,c,g,r),[r]),c.flags|=2048,ja(9,tg.bind(null,c,g,l,s),void 0,null),l},useId:function(){var r=Zn(),s=St.identifierPrefix;if(Ze){var l=Pr,c=kr;l=(c&~(1<<32-Ht(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Fa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=nT++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},aT={readContext:En,useCallback:hg,useContext:En,useEffect:nh,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:eh,useRef:og,useState:function(){return eh(Ua)},useDebugValue:rh,useDeferredValue:function(r){var s=wn();return pg(s,gt.memoizedState,r)},useTransition:function(){var r=eh(Ua)[0],s=wn().memoizedState;return[r,s]},useMutableSource:Jm,useSyncExternalStore:Zm,useId:mg,unstable_isNewReconciler:!1},lT={readContext:En,useCallback:hg,useContext:En,useEffect:nh,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:th,useRef:og,useState:function(){return th(Ua)},useDebugValue:rh,useDeferredValue:function(r){var s=wn();return gt===null?s.memoizedState=r:pg(s,gt.memoizedState,r)},useTransition:function(){var r=th(Ua)[0],s=wn().memoizedState;return[r,s]},useMutableSource:Jm,useSyncExternalStore:Zm,useId:mg,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function ih(r,s,l,c){s=r.memoizedState,l=l(c,s),l=l==null?s:ae({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Pu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var c=Kt(),d=mi(r),g=Cr(c,d);g.payload=s,l!=null&&(g.callback=l),s=fi(r,g,d),s!==null&&(zn(s,r,d,c),vu(s,r,d))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var c=Kt(),d=mi(r),g=Cr(c,d);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=fi(r,g,d),s!==null&&(zn(s,r,d,c),vu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Kt(),c=mi(r),d=Cr(l,c);d.tag=2,s!=null&&(d.callback=s),s=fi(r,d,c),s!==null&&(zn(s,r,c,l),vu(s,r,c))}};function vg(r,s,l,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ka(l,c)||!ka(d,g):!0}function Eg(r,s,l){var c=!1,d=li,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(d=Jt(s)?is:Vt.current,c=s.contextTypes,g=(c=c!=null)?lo(r,d):li),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function wg(r,s,l,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==r&&Pu.enqueueReplaceState(s,s.state,null)}function sh(r,s,l,c){var d=r.stateNode;d.props=l,d.state=r.memoizedState,d.refs={},Hf(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=En(g):(g=Jt(s)?is:Vt.current,d.context=lo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ih(r,s,g,l),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Pu.enqueueReplaceState(d,d.state,null),Eu(r,l,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function yo(r,s){try{var l="",c=s;do l+=Re(c),c=c.return;while(c);var d=l}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function oh(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function ah(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var uT=typeof WeakMap=="function"?WeakMap:Map;function Tg(r,s,l){l=Cr(-1,l),l.tag=3,l.payload={element:null};var c=s.value;return l.callback=function(){Du||(Du=!0,Th=c),ah(r,s)},l}function Ig(r,s,l){l=Cr(-1,l),l.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;l.payload=function(){return c(d)},l.callback=function(){ah(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){ah(r,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),l}function Sg(r,s,l){var c=r.pingCache;if(c===null){c=r.pingCache=new uT;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(l)||(d.add(l),r=IT.bind(null,r,s,l),s.then(r,r))}function Ag(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function kg(r,s,l,c,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Cr(-1,1),s.tag=2,fi(l,s,1))),l.lanes|=1),r)}var cT=oe.ReactCurrentOwner,Zt=!1;function Gt(r,s,l,c){s.child=r===null?qm(s,null,l,c):ho(s,r.child,l,c)}function Pg(r,s,l,c,d){l=l.render;var g=s.ref;return mo(s,d),c=Jf(r,s,l,c,g,d),l=Zf(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Ze&&l&&Lf(s),s.flags|=1,Gt(r,s,c,d),s.child)}function Rg(r,s,l,c,d){if(r===null){var g=l.type;return typeof g=="function"&&!Ch(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Cg(r,s,g,c,d)):(r=ju(l.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&d)){var v=g.memoizedProps;if(l=l.compare,l=l!==null?l:ka,l(v,c)&&r.ref===s.ref)return xr(r,s,d)}return s.flags|=1,r=yi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Cg(r,s,l,c,d){if(r!==null){var g=r.memoizedProps;if(ka(g,c)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)r.flags&131072&&(Zt=!0);else return s.lanes=r.lanes,xr(r,s,d)}return lh(r,s,l,c,d)}function xg(r,s,l){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(vo,fn),fn|=l;else{if(!(l&1073741824))return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(vo,fn),fn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:l,Ke(vo,fn),fn|=c}else g!==null?(c=g.baseLanes|l,s.memoizedState=null):c=l,Ke(vo,fn),fn|=c;return Gt(r,s,d,l),s.child}function Ng(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function lh(r,s,l,c,d){var g=Jt(l)?is:Vt.current;return g=lo(s,g),mo(s,d),l=Jf(r,s,l,c,g,d),c=Zf(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Ze&&c&&Lf(s),s.flags|=1,Gt(r,s,l,d),s.child)}function bg(r,s,l,c,d){if(Jt(l)){var g=!0;fu(s)}else g=!1;if(mo(s,d),s.stateNode===null)Cu(r,s),Eg(s,l,c),sh(s,l,c,d),c=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var R=v.context,z=l.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Jt(l)?is:Vt.current,z=lo(s,z));var X=l.getDerivedStateFromProps,Z=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";Z||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||R!==z)&&wg(s,v,c,z),ci=!1;var Y=s.memoizedState;v.state=Y,Eu(s,c,v,d),R=s.memoizedState,A!==c||Y!==R||Xt.current||ci?(typeof X=="function"&&(ih(s,l,X,c),R=s.memoizedState),(A=ci||vg(s,l,A,c,Y,R,z))?(Z||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=R),v.props=c,v.state=R,v.context=z,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Km(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Fn(s.type,A),v.props=z,Z=s.pendingProps,Y=v.context,R=l.contextType,typeof R=="object"&&R!==null?R=En(R):(R=Jt(l)?is:Vt.current,R=lo(s,R));var se=l.getDerivedStateFromProps;(X=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==Z||Y!==R)&&wg(s,v,c,R),ci=!1,Y=s.memoizedState,v.state=Y,Eu(s,c,v,d);var ce=s.memoizedState;A!==Z||Y!==ce||Xt.current||ci?(typeof se=="function"&&(ih(s,l,se,c),ce=s.memoizedState),(z=ci||vg(s,l,z,c,Y,ce,R)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,R)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=R,c=z):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return uh(r,s,l,c,g,d)}function uh(r,s,l,c,d,g){Ng(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Mm(s,l,!1),xr(r,s,g);c=s.stateNode,cT.current=s;var A=v&&typeof l.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=ho(s,r.child,null,g),s.child=ho(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=c.state,d&&Mm(s,l,!0),s.child}function Og(r){var s=r.stateNode;s.pendingContext?Lm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Lm(r,s.context,!1),qf(r,s.containerInfo)}function Dg(r,s,l,c,d){return fo(),Uf(d),s.flags|=256,Gt(r,s,l,c),s.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function fh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Lg(r,s,l){var c=s.pendingProps,d=et.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(et,d&1),r===null)return Ff(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=zu(v,c,0,null),r=ps(r,c,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=fh(l),s.memoizedState=ch,r):hh(s,v));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return fT(r,s,v,c,A,d,l);if(g){g=c.fallback,v=s.mode,d=r.child,A=d.sibling;var R={mode:"hidden",children:c.children};return!(v&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=R,s.deletions=null):(c=yi(d,R),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=yi(A,g):(g=ps(g,v,l,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?fh(l):{baseLanes:v.baseLanes|l,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~l,s.memoizedState=ch,c}return g=r.child,r=g.sibling,c=yi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=l),c.return=s,c.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=c,s.memoizedState=null,c}function hh(r,s){return s=zu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ru(r,s,l,c){return c!==null&&Uf(c),ho(s,r.child,null,l),r=hh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function fT(r,s,l,c,d,g,v){if(l)return s.flags&256?(s.flags&=-257,c=oh(Error(t(422))),Ru(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=zu({mode:"visible",children:c.children},d,0,null),g=ps(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&ho(s,r.child,null,v),s.child.memoizedState=fh(v),s.memoizedState=ch,g);if(!(s.mode&1))return Ru(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=oh(g,c,void 0),Ru(r,s,v,c)}if(A=(v&r.childLanes)!==0,Zt||A){if(c=St,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Rr(r,d),zn(c,r,d,-1))}return Rh(),c=oh(Error(t(421))),Ru(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=ST.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,cn=oi(d.nextSibling),un=s,Ze=!0,Mn=null,r!==null&&(_n[vn++]=kr,_n[vn++]=Pr,_n[vn++]=ss,kr=r.id,Pr=r.overflow,ss=s),s=hh(s,c.children),s.flags|=4096,s)}function Vg(r,s,l){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),$f(r.return,s,l)}function dh(r,s,l,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=d)}function Mg(r,s,l){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Gt(r,s,c.children,l),c=et.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Vg(r,l,s);else if(r.tag===19)Vg(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(et,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(l=s.child,d=null;l!==null;)r=l.alternate,r!==null&&wu(r)===null&&(d=l),l=l.sibling;l=d,l===null?(d=s.child,s.child=null):(d=l.sibling,l.sibling=null),dh(s,!1,d,l,g);break;case"backwards":for(l=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&wu(r)===null){s.child=d;break}r=d.sibling,d.sibling=l,l=d,d=r}dh(s,!0,l,null,g);break;case"together":dh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function xr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),cs|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=yi(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=yi(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function hT(r,s,l){switch(s.tag){case 3:Og(s),fo();break;case 5:Xm(s);break;case 1:Jt(s.type)&&fu(s);break;case 4:qf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(yu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(et,et.current&1),s.flags|=128,null):l&s.child.childLanes?Lg(r,s,l):(Ke(et,et.current&1),r=xr(r,s,l),r!==null?r.sibling:null);Ke(et,et.current&1);break;case 19:if(c=(l&s.childLanes)!==0,r.flags&128){if(c)return Mg(r,s,l);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,xg(r,s,l)}return xr(r,s,l)}var Fg,ph,Ug,jg;Fg=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ph=function(){},Ug=function(r,s,l,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ls(Jn.current);var g=null;switch(l){case"input":d=zi(r,d),c=zi(r,c),g=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":d=ta(r,d),c=ta(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=lu)}aa(l,c);var v;l=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(v in A)A.hasOwnProperty(v)&&(l||(l={}),l[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var R=c[z];if(A=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&R!==A&&(R!=null||A!=null))if(z==="style")if(A){for(v in A)!A.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(l||(l={}),l[v]="");for(v in R)R.hasOwnProperty(v)&&A[v]!==R[v]&&(l||(l={}),l[v]=R[v])}else l||(g||(g=[]),g.push(z,l)),l=R;else z==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,A=A?A.__html:void 0,R!=null&&A!==R&&(g=g||[]).push(z,R)):z==="children"?typeof R!="string"&&typeof R!="number"||(g=g||[]).push(z,""+R):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(R!=null&&z==="onScroll"&&Qe("scroll",r),g||A===R||(g=[])):(g=g||[]).push(z,R))}l&&(g=g||[]).push("style",l);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},jg=function(r,s,l,c){l!==c&&(s.flags|=4)};function za(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,c=0;if(s)for(var d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=l,s}function dT(r,s,l){var c=s.pendingProps;switch(Vf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Jt(s.type)&&cu(),Ft(s),null;case 3:return c=s.stateNode,go(),Ye(Xt),Ye(Vt),Qf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(mu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Mn!==null&&(Ah(Mn),Mn=null))),ph(r,s),Ft(s),null;case 5:Gf(s);var d=ls(Va.current);if(l=s.type,r!==null&&s.stateNode!=null)Ug(r,s,l,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=ls(Jn.current),mu(s)){c=s.stateNode,l=s.type;var g=s.memoizedProps;switch(c[Xn]=s,c[Na]=g,r=(s.mode&1)!==0,l){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<Ra.length;d++)Qe(Ra[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":xs(c,g),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",c);break;case"textarea":bs(c,g),Qe("invalid",c)}aa(l,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&au(c.textContent,A,r),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&au(c.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Qe("scroll",c)}switch(l){case"input":pr(c),Ol(c,g,!0);break;case"textarea":pr(c),na(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=lu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(l,{is:c.is}):(r=v.createElement(l),l==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,l),r[Xn]=s,r[Na]=c,Fg(r,s,!1,!1),s.stateNode=r;e:{switch(v=la(l,c),l){case"dialog":Qe("cancel",r),Qe("close",r),d=c;break;case"iframe":case"object":case"embed":Qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<Ra.length;d++)Qe(Ra[d],r);d=c;break;case"source":Qe("error",r),d=c;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),d=c;break;case"details":Qe("toggle",r),d=c;break;case"input":xs(r,c),d=zi(r,c),Qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Qe("invalid",r);break;case"textarea":bs(r,c),d=ta(r,c),Qe("invalid",r);break;default:d=c}aa(l,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var R=A[g];g==="style"?sa(r,R):g==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ra(r,R)):g==="children"?typeof R=="string"?(l!=="textarea"||R!=="")&&Qr(r,R):typeof R=="number"&&Qr(r,""+R):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?R!=null&&g==="onScroll"&&Qe("scroll",r):R!=null&&Q(r,g,R,v))}switch(l){case"input":pr(r),Ol(r,c,!1);break;case"textarea":pr(r),na(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ze(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=lu)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)jg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(l=ls(Va.current),ls(Jn.current),mu(s)){if(c=s.stateNode,l=s.memoizedProps,c[Xn]=s,(g=c.nodeValue!==l)&&(r=un,r!==null))switch(r.tag){case 3:au(c.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(c.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Xn]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ye(et),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&cn!==null&&s.mode&1&&!(s.flags&128))$m(),fo(),s.flags|=98560,g=!1;else if(g=mu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Xn]=s}else fo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Mn!==null&&(Ah(Mn),Mn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||et.current&1?yt===0&&(yt=3):Rh())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return go(),ph(r,s),r===null&&Ca(s.stateNode.containerInfo),Ft(s),null;case 10:return Bf(s.type._context),Ft(s),null;case 17:return Jt(s.type)&&cu(),Ft(s),null;case 19:if(Ye(et),g=s.memoizedState,g===null)return Ft(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)za(g,!1);else{if(yt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=wu(r),v!==null){for(s.flags|=128,za(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=l,l=s.child;l!==null;)g=l,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ke(et,et.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>Eo&&(s.flags|=128,c=!0,za(g,!1),s.lanes=4194304)}else{if(!c)if(r=wu(v),r!==null){if(s.flags|=128,c=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ze)return Ft(s),null}else 2*Ge()-g.renderingStartTime>Eo&&l!==1073741824&&(s.flags|=128,c=!0,za(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(l=g.last,l!==null?l.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,l=et.current,Ke(et,c?l&1|2:l&1),s):(Ft(s),null);case 22:case 23:return Ph(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?fn&1073741824&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function pT(r,s){switch(Vf(s),s.tag){case 1:return Jt(s.type)&&cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return go(),Ye(Xt),Ye(Vt),Qf(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Gf(s),null;case 13:if(Ye(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));fo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(et),null;case 4:return go(),null;case 10:return Bf(s.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var xu=!1,Ut=!1,mT=typeof WeakSet=="function"?WeakSet:Set,ue=null;function _o(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){it(r,s,c)}else l.current=null}function mh(r,s,l){try{l()}catch(c){it(r,s,c)}}var zg=!1;function gT(r,s){if(Pf=ri,r=vm(),vf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var v=0,A=-1,R=-1,z=0,X=0,Z=r,Y=null;t:for(;;){for(var se;Z!==l||d!==0&&Z.nodeType!==3||(A=v+d),Z!==g||c!==0&&Z.nodeType!==3||(R=v+c),Z.nodeType===3&&(v+=Z.nodeValue.length),(se=Z.firstChild)!==null;)Y=Z,Z=se;for(;;){if(Z===r)break t;if(Y===l&&++z===d&&(A=v),Y===g&&++X===c&&(R=v),(se=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=se}l=A===-1||R===-1?null:{start:A,end:R}}else l=null}l=l||{start:0,end:0}}else l=null;for(Rf={focusedElem:r,selectionRange:l},ri=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var fe=ce.memoizedProps,lt=ce.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Fn(s.type,fe),lt);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){it(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=zg,zg=!1,ce}function Ba(r,s,l){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&mh(s,l,g)}d=d.next}while(d!==c)}}function Nu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var c=l.create;l.destroy=c()}l=l.next}while(l!==s)}}function gh(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function Bg(r){var s=r.alternate;s!==null&&(r.alternate=null,Bg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Xn],delete s[Na],delete s[bf],delete s[J0],delete s[Z0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function $g(r){return r.tag===5||r.tag===3||r.tag===4}function Wg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||$g(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function yh(r,s,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=lu));else if(c!==4&&(r=r.child,r!==null))for(yh(r,s,l),r=r.sibling;r!==null;)yh(r,s,l),r=r.sibling}function _h(r,s,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(_h(r,s,l),r=r.sibling;r!==null;)_h(r,s,l),r=r.sibling}var Ct=null,Un=!1;function hi(r,s,l){for(l=l.child;l!==null;)Hg(r,s,l),l=l.sibling}function Hg(r,s,l){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Yi,l)}catch{}switch(l.tag){case 5:Ut||_o(l,s);case 6:var c=Ct,d=Un;Ct=null,hi(r,s,l),Ct=c,Un=d,Ct!==null&&(Un?(r=Ct,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Ct.removeChild(l.stateNode));break;case 18:Ct!==null&&(Un?(r=Ct,l=l.stateNode,r.nodeType===8?Nf(r.parentNode,l):r.nodeType===1&&Nf(r,l),Dn(r)):Nf(Ct,l.stateNode));break;case 4:c=Ct,d=Un,Ct=l.stateNode.containerInfo,Un=!0,hi(r,s,l),Ct=c,Un=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&mh(l,s,v),d=d.next}while(d!==c)}hi(r,s,l);break;case 1:if(!Ut&&(_o(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(A){it(l,s,A)}hi(r,s,l);break;case 21:hi(r,s,l);break;case 22:l.mode&1?(Ut=(c=Ut)||l.memoizedState!==null,hi(r,s,l),Ut=c):hi(r,s,l);break;default:hi(r,s,l)}}function qg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new mT),s.forEach(function(c){var d=AT.bind(null,r,c);l.has(c)||(l.add(c),c.then(d,d))})}}function jn(r,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var d=l[c];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,Un=!1;break e;case 3:Ct=A.stateNode.containerInfo,Un=!0;break e;case 4:Ct=A.stateNode.containerInfo,Un=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));Hg(g,v,d),Ct=null,Un=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(z){it(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Gg(s,r),s=s.sibling}function Gg(r,s){var l=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(jn(s,r),er(r),c&4){try{Ba(3,r,r.return),Nu(3,r)}catch(fe){it(r,r.return,fe)}try{Ba(5,r,r.return)}catch(fe){it(r,r.return,fe)}}break;case 1:jn(s,r),er(r),c&512&&l!==null&&_o(l,l.return);break;case 5:if(jn(s,r),er(r),c&512&&l!==null&&_o(l,l.return),r.flags&32){var d=r.stateNode;try{Qr(d,"")}catch(fe){it(r,r.return,fe)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=l!==null?l.memoizedProps:g,A=r.type,R=r.updateQueue;if(r.updateQueue=null,R!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Zo(d,g),la(A,v);var z=la(A,g);for(v=0;v<R.length;v+=2){var X=R[v],Z=R[v+1];X==="style"?sa(d,Z):X==="dangerouslySetInnerHTML"?ra(d,Z):X==="children"?Qr(d,Z):Q(d,X,Z,z)}switch(A){case"input":ea(d,g);break;case"textarea":Os(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?gr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?gr(d,!!g.multiple,g.defaultValue,!0):gr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Na]=g}catch(fe){it(r,r.return,fe)}}break;case 6:if(jn(s,r),er(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(fe){it(r,r.return,fe)}}break;case 3:if(jn(s,r),er(r),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(fe){it(r,r.return,fe)}break;case 4:jn(s,r),er(r);break;case 13:jn(s,r),er(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(wh=Ge())),c&4&&qg(r);break;case 22:if(X=l!==null&&l.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||X,jn(s,r),Ut=z):jn(s,r),er(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&r.mode&1)for(ue=r,X=r.child;X!==null;){for(Z=ue=X;ue!==null;){switch(Y=ue,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ba(4,Y,Y.return);break;case 1:_o(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Y,l=Y.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(fe){it(c,l,fe)}}break;case 5:_o(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Yg(Z);continue}}se!==null?(se.return=Y,ue=se):Yg(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{d=Z.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,R=Z.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,A.style.display=ia("display",v))}catch(fe){it(r,r.return,fe)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(fe){it(r,r.return,fe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:jn(s,r),er(r),c&4&&qg(r);break;case 21:break;default:jn(s,r),er(r)}}function er(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if($g(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Qr(d,""),c.flags&=-33);var g=Wg(r);_h(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Wg(r);yh(r,A,v);break;default:throw Error(t(161))}}catch(R){it(r,r.return,R)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function yT(r,s,l){ue=r,Kg(r)}function Kg(r,s,l){for(var c=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||xu;if(!v){var A=d.alternate,R=A!==null&&A.memoizedState!==null||Ut;A=xu;var z=Ut;if(xu=v,(Ut=R)&&!z)for(ue=d;ue!==null;)v=ue,R=v.child,v.tag===22&&v.memoizedState!==null?Xg(d):R!==null?(R.return=v,ue=R):Xg(d);for(;g!==null;)ue=g,Kg(g),g=g.sibling;ue=d,xu=A,Ut=z}Qg(r)}else d.subtreeFlags&8772&&g!==null?(g.return=d,ue=g):Qg(r)}}function Qg(r){for(;ue!==null;){var s=ue;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ut||Nu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(l===null)c.componentDidMount();else{var d=s.elementType===s.type?l.memoizedProps:Fn(s.type,l.memoizedProps);c.componentDidUpdate(d,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Ym(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Ym(s,v,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var R=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&l.focus();break;case"img":R.src&&(l.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Dn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&gh(s)}catch(Y){it(s,s.return,Y)}}if(s===r){ue=null;break}if(l=s.sibling,l!==null){l.return=s.return,ue=l;break}ue=s.return}}function Yg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ue=l;break}ue=s.return}}function Xg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Nu(4,s)}catch(R){it(s,l,R)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(R){it(s,d,R)}}var g=s.return;try{gh(s)}catch(R){it(s,g,R)}break;case 5:var v=s.return;try{gh(s)}catch(R){it(s,v,R)}}}catch(R){it(s,s.return,R)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var _T=Math.ceil,bu=oe.ReactCurrentDispatcher,vh=oe.ReactCurrentOwner,Tn=oe.ReactCurrentBatchConfig,Fe=0,St=null,ft=null,xt=0,fn=0,vo=ai(0),yt=0,$a=null,cs=0,Ou=0,Eh=0,Wa=null,en=null,wh=0,Eo=1/0,Nr=null,Du=!1,Th=null,di=null,Lu=!1,pi=null,Vu=0,Ha=0,Ih=null,Mu=-1,Fu=0;function Kt(){return Fe&6?Ge():Mu!==-1?Mu:Mu=Ge()}function mi(r){return r.mode&1?Fe&2&&xt!==0?xt&-xt:tT.transition!==null?(Fu===0&&(Fu=Ji()),Fu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:va(r.type)),r):1}function zn(r,s,l,c){if(50<Ha)throw Ha=0,Ih=null,Error(t(185));Zr(r,l,c),(!(Fe&2)||r!==St)&&(r===St&&(!(Fe&2)&&(Ou|=l),yt===4&&gi(r,xt)),tn(r,c),l===1&&Fe===0&&!(s.mode&1)&&(Eo=Ge()+500,hu&&ui()))}function tn(r,s){var l=r.callbackNode;vr(r,s);var c=Xi(r,r===St?xt:0);if(c===0)l!==null&&pa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(l!=null&&pa(l),s===1)r.tag===0?eT(Zg.bind(null,r)):Fm(Zg.bind(null,r)),Y0(function(){!(Fe&6)&&ui()}),l=null;else{switch(ti(c)){case 1:l=Qi;break;case 4:l=Yr;break;case 16:l=mn;break;case 536870912:l=Fl;break;default:l=mn}l=ay(l,Jg.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Jg(r,s){if(Mu=-1,Fu=0,Fe&6)throw Error(t(327));var l=r.callbackNode;if(wo()&&r.callbackNode!==l)return null;var c=Xi(r,r===St?xt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Uu(r,c);else{s=c;var d=Fe;Fe|=2;var g=ty();(St!==r||xt!==s)&&(Nr=null,Eo=Ge()+500,hs(r,s));do try{wT();break}catch(A){ey(r,A)}while(!0);zf(),bu.current=g,Fe=d,ft!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(c=d,s=Sh(r,d))),s===1)throw l=$a,hs(r,0),gi(r,c),tn(r,Ge()),l;if(s===6)gi(r,c);else{if(d=r.current.alternate,!(c&30)&&!vT(d)&&(s=Uu(r,c),s===2&&(g=on(r),g!==0&&(c=g,s=Sh(r,g))),s===1))throw l=$a,hs(r,0),gi(r,c),tn(r,Ge()),l;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ds(r,en,Nr);break;case 3:if(gi(r,c),(c&130023424)===c&&(s=wh+500-Ge(),10<s)){if(Xi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=xf(ds.bind(null,r,en,Nr),s);break}ds(r,en,Nr);break;case 4:if(gi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-Ht(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_T(c/1960))-c,10<c){r.timeoutHandle=xf(ds.bind(null,r,en,Nr),c);break}ds(r,en,Nr);break;case 5:ds(r,en,Nr);break;default:throw Error(t(329))}}}return tn(r,Ge()),r.callbackNode===l?Jg.bind(null,r):null}function Sh(r,s){var l=Wa;return r.current.memoizedState.isDehydrated&&(hs(r,s).flags|=256),r=Uu(r,s),r!==2&&(s=en,en=l,s!==null&&Ah(s)),r}function Ah(r){en===null?en=r:en.push.apply(en,r)}function vT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var d=l[c],g=d.getSnapshot;d=d.value;try{if(!Vn(g(),d))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function gi(r,s){for(s&=~Eh,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Ht(s),c=1<<l;r[l]=-1,s&=~c}}function Zg(r){if(Fe&6)throw Error(t(327));wo();var s=Xi(r,0);if(!(s&1))return tn(r,Ge()),null;var l=Uu(r,s);if(r.tag!==0&&l===2){var c=on(r);c!==0&&(s=c,l=Sh(r,c))}if(l===1)throw l=$a,hs(r,0),gi(r,s),tn(r,Ge()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ds(r,en,Nr),tn(r,Ge()),null}function kh(r,s){var l=Fe;Fe|=1;try{return r(s)}finally{Fe=l,Fe===0&&(Eo=Ge()+500,hu&&ui())}}function fs(r){pi!==null&&pi.tag===0&&!(Fe&6)&&wo();var s=Fe;Fe|=1;var l=Tn.transition,c=Oe;try{if(Tn.transition=null,Oe=1,r)return r()}finally{Oe=c,Tn.transition=l,Fe=s,!(Fe&6)&&ui()}}function Ph(){fn=vo.current,Ye(vo)}function hs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,Q0(l)),ft!==null)for(l=ft.return;l!==null;){var c=l;switch(Vf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&cu();break;case 3:go(),Ye(Xt),Ye(Vt),Qf();break;case 5:Gf(c);break;case 4:go();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:Bf(c.type._context);break;case 22:case 23:Ph()}l=l.return}if(St=r,ft=r=yi(r.current,null),xt=fn=s,yt=0,$a=null,Eh=Ou=cs=0,en=Wa=null,as!==null){for(s=0;s<as.length;s++)if(l=as[s],c=l.interleaved,c!==null){l.interleaved=null;var d=c.next,g=l.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}l.pending=c}as=null}return r}function ey(r,s){do{var l=ft;try{if(zf(),Tu.current=ku,Iu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Iu=!1}if(us=0,It=gt=tt=null,Ma=!1,Fa=0,vh.current=null,l===null||l.return===null){yt=1,$a=s,ft=null;break}e:{var g=r,v=l.return,A=l,R=s;if(s=xt,A.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var z=R,X=A,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Ag(v);if(se!==null){se.flags&=-257,kg(se,v,A,g,s),se.mode&1&&Sg(g,z,s),s=se,R=z;var ce=s.updateQueue;if(ce===null){var fe=new Set;fe.add(R),s.updateQueue=fe}else ce.add(R);break e}else{if(!(s&1)){Sg(g,z,s),Rh();break e}R=Error(t(426))}}else if(Ze&&A.mode&1){var lt=Ag(v);if(lt!==null){!(lt.flags&65536)&&(lt.flags|=256),kg(lt,v,A,g,s),Uf(yo(R,A));break e}}g=R=yo(R,A),yt!==4&&(yt=2),Wa===null?Wa=[g]:Wa.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Tg(g,R,s);Qm(g,U);break e;case 1:A=R;var b=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(di===null||!di.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=Ig(g,A,s);Qm(g,ne);break e}}g=g.return}while(g!==null)}ry(l)}catch(he){s=he,ft===l&&l!==null&&(ft=l=l.return);continue}break}while(!0)}function ty(){var r=bu.current;return bu.current=ku,r===null?ku:r}function Rh(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!(cs&268435455)&&!(Ou&268435455)||gi(St,xt)}function Uu(r,s){var l=Fe;Fe|=2;var c=ty();(St!==r||xt!==s)&&(Nr=null,hs(r,s));do try{ET();break}catch(d){ey(r,d)}while(!0);if(zf(),Fe=l,bu.current=c,ft!==null)throw Error(t(261));return St=null,xt=0,yt}function ET(){for(;ft!==null;)ny(ft)}function wT(){for(;ft!==null&&!Vl();)ny(ft)}function ny(r){var s=oy(r.alternate,r,fn);r.memoizedProps=r.pendingProps,s===null?ry(r):ft=s,vh.current=null}function ry(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=pT(l,s),l!==null){l.flags&=32767,ft=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ft=null;return}}else if(l=dT(l,s,fn),l!==null){ft=l;return}if(s=s.sibling,s!==null){ft=s;return}ft=s=r}while(s!==null);yt===0&&(yt=5)}function ds(r,s,l){var c=Oe,d=Tn.transition;try{Tn.transition=null,Oe=1,TT(r,s,l,c)}finally{Tn.transition=d,Oe=c}return null}function TT(r,s,l,c){do wo();while(pi!==null);if(Fe&6)throw Error(t(327));l=r.finishedWork;var d=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if(He(r,g),r===St&&(ft=St=null,xt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Lu||(Lu=!0,ay(mn,function(){return wo(),null})),g=(l.flags&15990)!==0,l.subtreeFlags&15990||g){g=Tn.transition,Tn.transition=null;var v=Oe;Oe=1;var A=Fe;Fe|=4,vh.current=null,gT(r,l),Gg(l,r),B0(Rf),ri=!!Pf,Rf=Pf=null,r.current=l,yT(l),ff(),Fe=A,Oe=v,Tn.transition=g}else r.current=l;if(Lu&&(Lu=!1,pi=r,Vu=d),g=r.pendingLanes,g===0&&(di=null),Ul(l.stateNode),tn(r,Ge()),s!==null)for(c=r.onRecoverableError,l=0;l<s.length;l++)d=s[l],c(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,r=Th,Th=null,r;return Vu&1&&r.tag!==0&&wo(),g=r.pendingLanes,g&1?r===Ih?Ha++:(Ha=0,Ih=r):Ha=0,ui(),null}function wo(){if(pi!==null){var r=ti(Vu),s=Tn.transition,l=Oe;try{if(Tn.transition=null,Oe=16>r?16:r,pi===null)var c=!1;else{if(r=pi,pi=null,Vu=0,Fe&6)throw Error(t(331));var d=Fe;for(Fe|=4,ue=r.current;ue!==null;){var g=ue,v=g.child;if(ue.flags&16){var A=g.deletions;if(A!==null){for(var R=0;R<A.length;R++){var z=A[R];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:Ba(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,ue=Z;else for(;ue!==null;){X=ue;var Y=X.sibling,se=X.return;if(Bg(X),X===z){ue=null;break}if(Y!==null){Y.return=se,ue=Y;break}ue=se}}}var ce=g.alternate;if(ce!==null){var fe=ce.child;if(fe!==null){ce.child=null;do{var lt=fe.sibling;fe.sibling=null,fe=lt}while(fe!==null)}}ue=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ue=v;else e:for(;ue!==null;){if(g=ue,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ba(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ue=U;break e}ue=g.return}}var b=r.current;for(ue=b;ue!==null;){v=ue;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,ue=j;else e:for(v=b;ue!==null;){if(A=ue,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Nu(9,A)}}catch(he){it(A,A.return,he)}if(A===v){ue=null;break e}var ne=A.sibling;if(ne!==null){ne.return=A.return,ue=ne;break e}ue=A.return}}if(Fe=d,ui(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Yi,r)}catch{}c=!0}return c}finally{Oe=l,Tn.transition=s}}return!1}function iy(r,s,l){s=yo(l,s),s=Tg(r,s,1),r=fi(r,s,1),s=Kt(),r!==null&&(Zr(r,1,s),tn(r,s))}function it(r,s,l){if(r.tag===3)iy(r,r,l);else for(;s!==null;){if(s.tag===3){iy(s,r,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){r=yo(l,r),r=Ig(s,r,1),s=fi(s,r,1),r=Kt(),s!==null&&(Zr(s,1,r),tn(s,r));break}}s=s.return}}function IT(r,s,l){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&l,St===r&&(xt&l)===l&&(yt===4||yt===3&&(xt&130023424)===xt&&500>Ge()-wh?hs(r,0):Eh|=l),tn(r,s)}function sy(r,s){s===0&&(r.mode&1?(s=$s,$s<<=1,!($s&130023424)&&($s=4194304)):s=1);var l=Kt();r=Rr(r,s),r!==null&&(Zr(r,s,l),tn(r,l))}function ST(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),sy(r,l)}function AT(r,s){var l=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(l=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),sy(r,l)}var oy;oy=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return Zt=!1,hT(r,s,l);Zt=!!(r.flags&131072)}else Zt=!1,Ze&&s.flags&1048576&&Um(s,pu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Cu(r,s),r=s.pendingProps;var d=lo(s,Vt.current);mo(s,l),d=Jf(null,s,c,r,d,l);var g=Zf();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(g=!0,fu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hf(s),d.updater=Pu,s.stateNode=d,d._reactInternals=s,sh(s,c,r,l),s=uh(null,s,c,!0,g,l)):(s.tag=0,Ze&&g&&Lf(s),Gt(null,s,d,l),s=s.child),s;case 16:c=s.elementType;e:{switch(Cu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=PT(c),r=Fn(c,r),d){case 0:s=lh(null,s,c,r,l);break e;case 1:s=bg(null,s,c,r,l);break e;case 11:s=Pg(null,s,c,r,l);break e;case 14:s=Rg(null,s,c,Fn(c.type,r),l);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),lh(r,s,c,d,l);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),bg(r,s,c,d,l);case 3:e:{if(Og(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Km(r,s),Eu(s,c,null,l);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=yo(Error(t(423)),s),s=Dg(r,s,c,l,d);break e}else if(c!==d){d=yo(Error(t(424)),s),s=Dg(r,s,c,l,d);break e}else for(cn=oi(s.stateNode.containerInfo.firstChild),un=s,Ze=!0,Mn=null,l=qm(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(fo(),c===d){s=xr(r,s,l);break e}Gt(r,s,c,l)}s=s.child}return s;case 5:return Xm(s),r===null&&Ff(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,Cf(c,d)?v=null:g!==null&&Cf(c,g)&&(s.flags|=32),Ng(r,s),Gt(r,s,v,l),s.child;case 6:return r===null&&Ff(s),null;case 13:return Lg(r,s,l);case 4:return qf(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ho(s,null,c,l):Gt(r,s,c,l),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Pg(r,s,c,d,l);case 7:return Gt(r,s,s.pendingProps,l),s.child;case 8:return Gt(r,s,s.pendingProps.children,l),s.child;case 12:return Gt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,Ke(yu,c._currentValue),c._currentValue=v,g!==null)if(Vn(g.value,v)){if(g.children===d.children&&!Xt.current){s=xr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var R=A.firstContext;R!==null;){if(R.context===c){if(g.tag===1){R=Cr(-1,l&-l),R.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?R.next=R:(R.next=X.next,X.next=R),z.pending=R}}g.lanes|=l,R=g.alternate,R!==null&&(R.lanes|=l),$f(g.return,l,s),A.lanes|=l;break}R=R.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=l,A=v.alternate,A!==null&&(A.lanes|=l),$f(v,l,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Gt(r,s,d.children,l),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,mo(s,l),d=En(d),c=c(d),s.flags|=1,Gt(r,s,c,l),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),Rg(r,s,c,d,l);case 15:return Cg(r,s,s.type,s.pendingProps,l);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Cu(r,s),s.tag=1,Jt(c)?(r=!0,fu(s)):r=!1,mo(s,l),Eg(s,c,d),sh(s,c,d,l),uh(null,s,c,!0,r,l);case 19:return Mg(r,s,l);case 22:return xg(r,s,l)}throw Error(t(156,s.tag))};function ay(r,s){return zs(r,s)}function kT(r,s,l,c){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,l,c){return new kT(r,s,l,c)}function Ch(r){return r=r.prototype,!(!r||!r.isReactComponent)}function PT(r){if(typeof r=="function")return Ch(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Dt)return 14}return 2}function yi(r,s){var l=r.alternate;return l===null?(l=In(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function ju(r,s,l,c,d,g){var v=2;if(c=r,typeof r=="function")Ch(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case x:return ps(l.children,d,g,s);case S:v=8,d|=8;break;case k:return r=In(12,l,s,d|2),r.elementType=k,r.lanes=g,r;case P:return r=In(13,l,s,d),r.elementType=P,r.lanes=g,r;case ot:return r=In(19,l,s,d),r.elementType=ot,r.lanes=g,r;case We:return zu(l,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case C:v=10;break e;case O:v=9;break e;case M:v=11;break e;case Dt:v=14;break e;case Lt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(v,l,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ps(r,s,l,c){return r=In(7,r,c,s),r.lanes=l,r}function zu(r,s,l,c){return r=In(22,r,c,s),r.elementType=We,r.lanes=l,r.stateNode={isHidden:!1},r}function xh(r,s,l){return r=In(6,r,null,s),r.lanes=l,r}function Nh(r,s,l){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function RT(r,s,l,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bh(r,s,l,c,d,g,v,A,R){return r=new RT(r,s,l,A,R),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(g),r}function CT(r,s,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:s,implementation:l}}function ly(r){if(!r)return li;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Jt(l))return Vm(r,l,s)}return s}function uy(r,s,l,c,d,g,v,A,R){return r=bh(l,c,!0,r,d,g,v,A,R),r.context=ly(null),l=r.current,c=Kt(),d=mi(l),g=Cr(c,d),g.callback=s??null,fi(l,g,d),r.current.lanes=d,Zr(r,d,c),tn(r,c),r}function Bu(r,s,l,c){var d=s.current,g=Kt(),v=mi(d);return l=ly(l),s.context===null?s.context=l:s.pendingContext=l,s=Cr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=fi(d,s,v),r!==null&&(zn(r,d,v,g),vu(r,d,v)),v}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function cy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Oh(r,s){cy(r,s),(r=r.alternate)&&cy(r,s)}function xT(){return null}var fy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Dh(r){this._internalRoot=r}Wu.prototype.render=Dh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bu(r,s,null,null)},Wu.prototype.unmount=Dh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;fs(function(){Bu(null,r,null,null)}),s[Sr]=null}};function Wu(r){this._internalRoot=r}Wu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Wl();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Gn.length&&s!==0&&s<Gn[l].priority;l++);Gn.splice(l,0,r),l===0&&Gl(r)}};function Lh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Hu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hy(){}function NT(r,s,l,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=$u(v);g.call(z)}}var v=uy(s,c,r,0,null,!1,!1,"",hy);return r._reactRootContainer=v,r[Sr]=v.current,Ca(r.nodeType===8?r.parentNode:r),fs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=$u(R);A.call(z)}}var R=bh(r,0,!1,null,null,!1,!1,"",hy);return r._reactRootContainer=R,r[Sr]=R.current,Ca(r.nodeType===8?r.parentNode:r),fs(function(){Bu(s,R,l,c)}),R}function qu(r,s,l,c,d){var g=l._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var A=d;d=function(){var R=$u(v);A.call(R)}}Bu(s,v,r,d)}else v=NT(l,s,r,d,c);return $u(v)}Bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Xr(s.pendingLanes);l!==0&&(ei(s,l|1),tn(s,Ge()),!(Fe&6)&&(Eo=Ge()+500,ui()))}break;case 13:fs(function(){var c=Rr(r,1);if(c!==null){var d=Kt();zn(c,r,1,d)}}),Oh(r,1)}},Ws=function(r){if(r.tag===13){var s=Rr(r,134217728);if(s!==null){var l=Kt();zn(s,r,134217728,l)}Oh(r,134217728)}},$l=function(r){if(r.tag===13){var s=mi(r),l=Rr(r,s);if(l!==null){var c=Kt();zn(l,r,s,c)}Oh(r,s)}},Wl=function(){return Oe},Hl=function(r,s){var l=Oe;try{return Oe=r,s()}finally{Oe=l}},Ls=function(r,s,l){switch(s){case"input":if(ea(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==r&&c.form===r.form){var d=uu(c);if(!d)throw Error(t(90));Cs(c),ea(c,d)}}}break;case"textarea":Os(r,l);break;case"select":s=l.value,s!=null&&gr(r,!!l.multiple,s,!1)}},Hi=kh,ca=fs;var bT={usingClientEntryPoint:!1,Events:[ba,oo,uu,Hn,ua,kh]},qa={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OT={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=da(r),r===null?null:r.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||xT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Yi=Gu.inject(OT),sn=Gu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bT,nn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(s))throw Error(t(200));return CT(r,s,null,l)},nn.createRoot=function(r,s){if(!Lh(r))throw Error(t(299));var l=!1,c="",d=fy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=bh(r,1,!1,null,null,l,!1,c,d),r[Sr]=s.current,Ca(r.nodeType===8?r.parentNode:r),new Dh(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=da(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return fs(r)},nn.hydrate=function(r,s,l){if(!Hu(s))throw Error(t(200));return qu(null,r,s,!0,l)},nn.hydrateRoot=function(r,s,l){if(!Lh(r))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,d=!1,g="",v=fy;if(l!=null&&(l.unstable_strictMode===!0&&(d=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(v=l.onRecoverableError)),s=uy(s,null,r,1,l??null,d,!1,g,v),r[Sr]=s.current,Ca(r),c)for(r=0;r<c.length;r++)l=c[r],d=l._getVersion,d=d(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,d]:s.mutableSourceEagerHydrationData.push(l,d);return new Wu(s)},nn.render=function(r,s,l){if(!Hu(s))throw Error(t(200));return qu(null,r,s,!1,l)},nn.unmountComponentAtNode=function(r){if(!Hu(r))throw Error(t(40));return r._reactRootContainer?(fs(function(){qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},nn.unstable_batchedUpdates=kh,nn.unstable_renderSubtreeIntoContainer=function(r,s,l,c){if(!Hu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return qu(r,s,l,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var Ey;function zT(){if(Ey)return Fh.exports;Ey=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fh.exports=jT(),Fh.exports}var wy;function BT(){if(wy)return Ku;wy=1;var n=zT();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var $T=BT(),W=Jd();const vv=_v(W);var Ty={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],f=n[t++],h=n[t++],p=((o&7)<<18|(a&63)<<12|(f&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],f=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|f&63)}}return e.join("")},wv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],f=o+1<n.length,h=f?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=a>>2,T=(a&3)<<4|h>>4;let I=(h&15)<<2|y>>6,N=y&63;p||(N=64,f||(I=64)),i.push(t[E],t[T],t[I],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ev(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||h==null||y==null||T==null)throw new HT;const I=a<<2|h>>4;if(i.push(I),y!==64){const N=h<<4&240|y>>2;if(i.push(N),T!==64){const L=y<<6&192|T;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qT=function(n){const e=Ev(n);return wv.encodeByteArray(e,!0)},yc=function(n){return qT(n).replace(/\./g,"")},Tv=function(n){try{return wv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=()=>GT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof Ty>"u")return;const n=Ty.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},YT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tv(n[1]);return e&&JSON.parse(e)},jc=()=>{try{return KT()||QT()||YT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Iv=n=>{var e,t;return(t=(e=jc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},XT=n=>{const e=Iv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Sv=()=>{var n;return(n=jc())===null||n===void 0?void 0:n.config},Av=n=>{var e;return(e=jc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yc(JSON.stringify(t)),yc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function tI(){var n;const e=(n=jc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oI(){return!tI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="FirebaseError";class qr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=uI,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vl.prototype.create)}}class vl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],f=a?cI(a,i):"Error",h=`${this.serviceName}: ${f} (${o}).`;return new qr(o,h,i)}}function cI(n,e){return n.replace(fI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const fI=/\{\$([^}]+)}/g;function hI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _c(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],f=e[o];if(Iy(a)&&Iy(f)){if(!_c(a,f))return!1}else if(a!==f)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Iy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function dI(n,e){const t=new pI(n,e);return t.subscribe.bind(t)}class pI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");mI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=zh),o.error===void 0&&(o.error=zh),o.complete===void 0&&(o.complete=zh);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n){return n&&n._delegate?n._delegate:n}class Es{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new JT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,f]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);i===h&&f.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const f=this.instances.get(o);return f&&e(f,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(n){return n===ms?void 0:n}function _I(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const EI={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},wI=Ne.INFO,TI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},II=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=TI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zd{constructor(e){this.name=e,this._logLevel=wI,this._logHandler=II,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const SI=(n,e)=>e.some(t=>n instanceof t);let Sy,Ay;function AI(){return Sy||(Sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kI(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kv=new WeakMap,ud=new WeakMap,Pv=new WeakMap,Bh=new WeakMap,ep=new WeakMap;function PI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",f)},a=()=>{t(ki(n.result)),o()},f=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&kv.set(t,n)}).catch(()=>{}),ep.set(e,n),e}function RI(n){if(ud.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",f),n.removeEventListener("abort",f)},a=()=>{t(),o()},f=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",f),n.addEventListener("abort",f)});ud.set(n,e)}let cd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ud.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function CI(n){cd=n(cd)}function xI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call($h(this),e,...t);return Pv.set(i,e.sort?e.sort():[e]),ki(i)}:kI().includes(n)?function(...e){return n.apply($h(this),e),ki(kv.get(this))}:function(...e){return ki(n.apply($h(this),e))}}function NI(n){return typeof n=="function"?xI(n):(n instanceof IDBTransaction&&RI(n),SI(n,AI())?new Proxy(n,cd):n)}function ki(n){if(n instanceof IDBRequest)return PI(n);if(Bh.has(n))return Bh.get(n);const e=NI(n);return e!==n&&(Bh.set(n,e),ep.set(e,n)),e}const $h=n=>ep.get(n);function bI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const f=indexedDB.open(n,e),h=ki(f);return i&&f.addEventListener("upgradeneeded",p=>{i(ki(f.result),p.oldVersion,p.newVersion,ki(f.transaction),p)}),t&&f.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const OI=["get","getKey","getAll","getAllKeys","count"],DI=["put","add","delete","clear"],Wh=new Map;function ky(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=DI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||OI.includes(t)))return;const a=async function(f,...h){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return Wh.set(e,a),a}CI(n=>({...n,get:(e,t,i)=>ky(e,t)||n.get(e,t,i),has:(e,t)=>!!ky(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(VI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function VI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",Py="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Zd("@firebase/app"),MI="@firebase/app-compat",FI="@firebase/analytics-compat",UI="@firebase/analytics",jI="@firebase/app-check-compat",zI="@firebase/app-check",BI="@firebase/auth",$I="@firebase/auth-compat",WI="@firebase/database",HI="@firebase/data-connect",qI="@firebase/database-compat",GI="@firebase/functions",KI="@firebase/functions-compat",QI="@firebase/installations",YI="@firebase/installations-compat",XI="@firebase/messaging",JI="@firebase/messaging-compat",ZI="@firebase/performance",eS="@firebase/performance-compat",tS="@firebase/remote-config",nS="@firebase/remote-config-compat",rS="@firebase/storage",iS="@firebase/storage-compat",sS="@firebase/firestore",oS="@firebase/vertexai",aS="@firebase/firestore-compat",lS="firebase",uS="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="[DEFAULT]",cS={[fd]:"fire-core",[MI]:"fire-core-compat",[UI]:"fire-analytics",[FI]:"fire-analytics-compat",[zI]:"fire-app-check",[jI]:"fire-app-check-compat",[BI]:"fire-auth",[$I]:"fire-auth-compat",[WI]:"fire-rtdb",[HI]:"fire-data-connect",[qI]:"fire-rtdb-compat",[GI]:"fire-fn",[KI]:"fire-fn-compat",[QI]:"fire-iid",[YI]:"fire-iid-compat",[XI]:"fire-fcm",[JI]:"fire-fcm-compat",[ZI]:"fire-perf",[eS]:"fire-perf-compat",[tS]:"fire-rc",[nS]:"fire-rc-compat",[rS]:"fire-gcs",[iS]:"fire-gcs-compat",[sS]:"fire-fst",[aS]:"fire-fst-compat",[oS]:"fire-vertex","fire-js":"fire-js",[lS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map,fS=new Map,dd=new Map;function Ry(n,e){try{n.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Do(n){const e=n.name;if(dd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,n);for(const t of vc.values())Ry(t,n);for(const t of fS.values())Ry(t,n);return!0}function tp(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Or(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pi=new vl("app","Firebase",hS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=uS;function Rv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Pi.create("bad-app-name",{appName:String(o)});if(t||(t=Sv()),!t)throw Pi.create("no-options");const a=vc.get(o);if(a){if(_c(t,a.options)&&_c(i,a.config))return a;throw Pi.create("duplicate-app",{appName:o})}const f=new vI(o);for(const p of dd.values())f.addComponent(p);const h=new dS(t,i,f);return vc.set(o,h),h}function Cv(n=hd){const e=vc.get(n);if(!e&&n===hd&&Sv())return Rv();if(!e)throw Pi.create("no-app",{appName:n});return e}function Ri(n,e,t){var i;let o=(i=cS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),f=e.match(/\s|\//);if(a||f){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&f&&h.push("and"),f&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}Do(new Es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="firebase-heartbeat-database",mS=1,al="firebase-heartbeat-store";let Hh=null;function xv(){return Hh||(Hh=bI(pS,mS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pi.create("idb-open",{originalErrorMessage:n.message})})),Hh}async function gS(n){try{const t=(await xv()).transaction(al),i=await t.objectStore(al).get(Nv(n));return await t.done,i}catch(e){if(e instanceof qr)jr.warn(e.message);else{const t=Pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Cy(n,e){try{const i=(await xv()).transaction(al,"readwrite");await i.objectStore(al).put(e,Nv(n)),await i.done}catch(t){if(t instanceof qr)jr.warn(t.message);else{const i=Pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function Nv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=1024,_S=30*24*60*60*1e3;class vS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(f=>f.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const h=new Date(f.date).valueOf();return Date.now()-h<=_S}),this._storage.overwrite(this._heartbeatsCache))}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xy(),{heartbeatsToSend:i,unsentEntries:o}=ES(this._heartbeatsCache.heartbeats),a=yc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return jr.warn(t),""}}}function xy(){return new Date().toISOString().substring(0,10)}function ES(n,e=yS){const t=[];let i=n.slice();for(const o of n){const a=t.find(f=>f.agent===o.agent);if(a){if(a.dates.push(o.date),Ny(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ny(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class wS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ny(n){return yc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(n){Do(new Es("platform-logger",e=>new LI(e),"PRIVATE")),Do(new Es("heartbeat",e=>new vS(e),"PRIVATE")),Ri(fd,Py,n),Ri(fd,Py,"esm2017"),Ri("fire-js","")}TS("");var IS="firebase",SS="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri(IS,SS,"app");function np(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AS=bv,Ov=new vl("auth","Firebase",bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Zd("@firebase/auth");function kS(n,...e){Ec.logLevel<=Ne.WARN&&Ec.warn(`Auth (${Wo}): ${n}`,...e)}function ic(n,...e){Ec.logLevel<=Ne.ERROR&&Ec.error(`Auth (${Wo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n,...e){throw ip(n,...e)}function $n(n,...e){return ip(n,...e)}function rp(n,e,t){const i=Object.assign(Object.assign({},AS()),{[e]:t});return new vl("auth","Firebase",i).create(e,{appName:n.name})}function vs(n){return rp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&lr(n,"argument-error"),rp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ip(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ov.create(n,...e)}function Ie(n,e,...t){if(!n)throw ip(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ic(e),new Error(e)}function zr(n,e){n||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function RS(){return by()==="http:"||by()==="https:"}function by(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RS()||rI()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=eI()||iI()}get(){return CS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new wl(3e4,6e4);function op(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ho(n,e,t,i,o={}){return Lv(n,o,async()=>{let a={},f={};i&&(e==="GET"?f=i:a={body:JSON.stringify(i)});const h=El(Object.assign({key:n.config.apiKey},f)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return nI()||(y.referrerPolicy="no-referrer"),Dv.fetch()(Vv(n,n.config.apiHost,t,h),y)})}async function Lv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},NS),e);try{const o=new DS(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await a.json();if("needConfirmation"in f)throw Qu(n,"account-exists-with-different-credential",f);if(a.ok&&!("errorMessage"in f))return f;{const h=a.ok?f.errorMessage:f.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",f);if(p==="USER_DISABLED")throw Qu(n,"user-disabled",f);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw rp(n,E,y);lr(n,E)}}catch(o){if(o instanceof qr)throw o;lr(n,"network-request-failed",{message:String(o)})}}async function OS(n,e,t,i,o={}){const a=await Ho(n,e,t,i,o);return"mfaPendingCredential"in a&&lr(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Vv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?sp(n.config,o):`${n.config.apiScheme}://${o}`}class DS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i($n(this.auth,"network-request-failed")),bS.get())})}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=$n(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(n,e){return Ho(n,"POST","/v1/accounts:delete",e)}async function Mv(n,e){return Ho(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(n,e=!1){const t=kn(n),i=await t.getIdToken(e),o=ap(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,f=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:el(qh(o.auth_time)),issuedAtTime:el(qh(o.iat)),expirationTime:el(qh(o.exp)),signInProvider:f||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function qh(n){return Number(n)*1e3}function ap(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const o=Tv(t);return o?JSON.parse(o):(ic("Failed to decode base64 JWT payload"),null)}catch(o){return ic("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Oy(n){const e=ap(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qr&&MS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function MS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ll(n,Mv(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const f=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Fv(a.providerUserInfo):[],h=jS(n.providerData,f),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),E=p?y:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new md(a.createdAt,a.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function US(n){const e=kn(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Fv(n){return n.map(e=>{var{providerId:t}=e,i=np(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(n,e){const t=await Lv(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,f=Vv(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Dv.fetch()(f,{method:"POST",headers:h,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function BS(n,e){return Ho(n,"POST","/v2/accounts:revokeToken",op(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Oy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await zS(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,f=new Co;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),f.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),a&&(Ie(typeof a=="number","internal-error",{appName:e}),f.expirationTime=a),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=np(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new md(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VS(this,e)}reload(){return US(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Or(this.auth.app))return Promise.reject(vs(this.auth));const e=await this.getIdToken();return await ll(this,LS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,f,h,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,L=(f=t.photoURL)!==null&&f!==void 0?f:void 0,$=(h=t.tenantId)!==null&&h!==void 0?h:void 0,D=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Q,emailVerified:oe,isAnonymous:_e,providerData:Te,stsTokenManager:x}=t;Ie(Q&&x,e,"internal-error");const S=Co.fromJSON(this.name,x);Ie(typeof Q=="string",e,"internal-error"),vi(T,e.name),vi(I,e.name),Ie(typeof oe=="boolean",e,"internal-error"),Ie(typeof _e=="boolean",e,"internal-error"),vi(N,e.name),vi(L,e.name),vi($,e.name),vi(D,e.name),vi(q,e.name),vi(J,e.name);const k=new Lr({uid:Q,auth:e,email:I,emailVerified:oe,displayName:T,isAnonymous:_e,photoURL:L,phoneNumber:N,tenantId:$,stsTokenManager:S,createdAt:q,lastLoginAt:J});return Te&&Array.isArray(Te)&&(k.providerData=Te.map(C=>Object.assign({},C))),D&&(k._redirectEventId=D),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const a=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Fv(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new Co;h.updateFromIdToken(i);const p=new Lr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new md(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Map;function Vr(n){zr(n instanceof Function,"Expected a class definition");let e=Dy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uv.type="NONE";const Ly=Uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n,e,t){return`firebase:${n}:${e}:${t}`}class xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=sc(this.userKey,o.apiKey,a),this.fullPersistenceKey=sc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xo(Vr(Ly),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Vr(Ly);const f=sc(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const E=await y._get(f);if(E){const T=Lr._fromJSON(e,E);y!==a&&(h=T),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new xo(a,e,i):(a=p[0],h&&await a._set(f,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(f)}catch{}})),new xo(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(qv(e))return"Webos";if(zv(e))return"Safari";if((e.includes("chrome/")||Bv(e))&&!e.includes("edge/"))return"Chrome";if(Wv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function jv(n=$t()){return/firefox\//i.test(n)}function zv(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bv(n=$t()){return/crios\//i.test(n)}function $v(n=$t()){return/iemobile/i.test(n)}function Wv(n=$t()){return/android/i.test(n)}function Hv(n=$t()){return/blackberry/i.test(n)}function qv(n=$t()){return/webos/i.test(n)}function lp(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $S(n=$t()){var e;return lp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WS(){return sI()&&document.documentMode===10}function Gv(n=$t()){return lp(n)||Wv(n)||qv(n)||Hv(n)||/windows phone/i.test(n)||$v(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n,e=[]){let t;switch(n){case"Browser":t=Vy($t());break;case"Worker":t=`${Vy($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((f,h)=>{try{const p=e(a);f(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(n,e={}){return Ho(n,"GET","/v2/passwordPolicy",op(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=6;class KS{constructor(e){var t,i,o,a;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=f.minPasswordLength)!==null&&t!==void 0?t:GS,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,f,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new My(this),this.idTokenSubscription=new My(this),this.beforeStateQueue=new HS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mv(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Or(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===h)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Or(this.app))return Promise.reject(vs(this));const t=e?kn(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Or(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Or(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qS(this),t=new KS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await BS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let f=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(h,this,"internal-error"),h.then(()=>{f||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{f=!0,p()}}else{const p=e.addObserver(t);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zc(n){return kn(n)}class My{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YS(n){up=n}function XS(n){return up.loadJS(n)}function JS(){return up.gapiScript}function ZS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(n,e){const t=tp(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(_c(a,e??{}))return o;lr(o,"already-initialized")}return t.initialize({options:e})}function t1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function n1(n,e,t){const i=zc(n);Ie(i._canInitEmulator,i,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=Qv(e),{host:f,port:h}=r1(e),p=h===null?"":`:${h}`;i.config.emulator={url:`${a}//${f}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:f,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),i1()}function Qv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function r1(n){const e=Qv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:Fy(i.substr(a.length+1))}}else{const[a,f]=i.split(":");return{host:a,port:Fy(f)}}}function Fy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function i1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(n,e){return OS(n,"POST","/v1/accounts:signInWithIdp",op(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="http://localhost";class ws extends Yv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=np(t,["providerId","signInMethod"]);if(!i||!o)return null;const f=new ws(i,o);return f.idToken=a.idToken||void 0,f.accessToken=a.accessToken||void 0,f.secret=a.secret,f.nonce=a.nonce,f.pendingToken=a.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,No(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:s1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Tl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return br.credential(t,i)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Tl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Tl{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Lr._fromIdTokenResponse(e,i,o),f=Uy(i);return new Lo({user:a,providerId:f,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Uy(i);return new Lo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Uy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends qr{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Tc(e,t,i,o)}}function Xv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,a,e,i):a})}async function o1(n,e,t=!1){const i=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(n,e,t=!1){const{auth:i}=n;if(Or(i.app))return Promise.reject(vs(i));const o="reauthenticate";try{const a=await ll(n,Xv(i,o,e,n),t);Ie(a.idToken,i,"internal-error");const f=ap(a.idToken);Ie(f,i,"internal-error");const{sub:h}=f;return Ie(n.uid===h,i,"user-mismatch"),Lo._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&lr(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(n,e,t=!1){if(Or(n.app))return Promise.reject(vs(n));const i="signIn",o=await Xv(n,i,e),a=await Lo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}function u1(n,e,t,i){return kn(n).onIdTokenChanged(e,t,i)}function c1(n,e,t){return kn(n).beforeAuthStateChanged(e,t)}function f1(n,e,t,i){return kn(n).onAuthStateChanged(e,t,i)}function h1(n){return kn(n).signOut()}const Ic="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=1e3,p1=10;class Zv extends Jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,h,p)=>{this.notifyListeners(f,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(i);!t&&this.localCache[i]===f||this.notifyListeners(i,f)},a=this.storage.getItem(i);WS()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,p1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zv.type="LOCAL";const m1=Zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends Jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eE.type="SESSION";const tE=eE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Bc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(f).map(async y=>y(t.origin,a)),p=await g1(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,f;return new Promise((h,p)=>{const y=fp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);f={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(I.data.response);break;default:clearTimeout(E),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function _1(n){sr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function w1(){return nE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="firebaseLocalStorageDb",T1=1,Sc="firebaseLocalStorage",iE="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $c(n,e){return n.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function I1(){const n=indexedDB.deleteDatabase(rE);return new Il(n).toPromise()}function gd(){const n=indexedDB.open(rE,T1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sc,{keyPath:iE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sc)?e(i):(i.close(),await I1(),e(await gd()))})})}async function jy(n,e,t){const i=$c(n,!0).put({[iE]:e,value:t});return new Il(i).toPromise()}async function S1(n,e){const t=$c(n,!1).get(e),i=await new Il(t).toPromise();return i===void 0?null:i.value}function zy(n,e){const t=$c(n,!0).delete(e);return new Il(t).toPromise()}const A1=800,k1=3;class sE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>k1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bc._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new y1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await jy(e,Ic,"1"),await zy(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>jy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>S1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=$c(o,!1).getAll();return new Il(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sE.type="LOCAL";const P1=sE;new wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n,e){return e?Vr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp extends Yv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R1(n){return l1(n.auth,new hp(n),n.bypassAuthState)}function C1(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),a1(t,new hp(n),n.bypassAuthState)}async function x1(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),o1(t,new hp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:f,type:h}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R1;case"linkViaPopup":case"linkViaRedirect":return x1;case"reauthViaPopup":case"reauthViaRedirect":return C1;default:lr(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new wl(2e3,1e4);async function b1(n,e,t){if(Or(n.app))return Promise.reject($n(n,"operation-not-supported-in-this-environment"));const i=zc(n);PS(n,e,cp);const o=oE(i,t);return new gs(i,"signInViaPopup",e,o).executeNotNull()}class gs extends aE{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N1.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="pendingRedirect",oc=new Map;class D1 extends aE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await L1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L1(n,e){const t=F1(e),i=M1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function V1(n,e){oc.set(n._key(),e)}function M1(n){return Vr(n._redirectPersistence)}function F1(n){return sc(O1,n.config.apiKey,n.name)}async function U1(n,e,t=!1){if(Or(n.app))return Promise.reject(vs(n));const i=zc(n),o=oE(i,e),f=await new D1(i,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await i._persistUserIfCurrent(f.user),await i._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=10*60*1e3;class z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!lE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError($n(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j1&&this.cachedEventUids.clear(),this.cachedEventUids.has(By(e))}saveEventToCache(e){this.cachedEventUids.add(By(e)),this.lastProcessedEventTime=Date.now()}}function By(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(n,e={}){return Ho(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function q1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $1(n);for(const t of e)try{if(G1(t))return}catch{}lr(n,"unauthorized-domain")}function G1(n){const e=pd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===i}if(!H1.test(t))return!1;if(W1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=new wl(3e4,6e4);function $y(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Q1(n){return new Promise((e,t)=>{var i,o,a;function f(){$y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$y(),t($n(n,"network-request-failed"))},timeout:K1.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=sr().gapi)===null||a===void 0)&&a.load)f();else{const h=ZS("iframefcb");return sr()[h]=()=>{gapi.load?f():t($n(n,"network-request-failed"))},XS(`${JS()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw ac=null,e})}let ac=null;function Y1(n){return ac=ac||Q1(n),ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new wl(5e3,15e3),J1="__/auth/iframe",Z1="emulator/auth/iframe",eA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nA(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sp(e,Z1):`https://${n.config.authDomain}/${J1}`,i={apiKey:e.apiKey,appName:n.name,v:Wo},o=tA.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${El(i).slice(1)}`}async function rA(n){const e=await Y1(n),t=sr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:nA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eA,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const f=$n(n,"network-request-failed"),h=sr().setTimeout(()=>{a(f)},X1.get());function p(){sr().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{a(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sA=500,oA=600,aA="_blank",lA="http://localhost";class Wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(n,e,t,i=sA,o=oA){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},iA),{width:i.toString(),height:o.toString(),top:a,left:f}),y=$t().toLowerCase();t&&(h=Bv(y)?aA:t),jv(y)&&(e=e||lA,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[N,L])=>`${I}${N}=${L},`,"");if($S(y)&&h!=="_self")return cA(e||"",h),new Wy(null);const T=window.open(e||"",h,E);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new Wy(T)}function cA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="__/auth/handler",hA="emulator/auth/handler",dA=encodeURIComponent("fac");async function Hy(n,e,t,i,o,a){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Wo,eventId:o};if(e instanceof cp){e.setDefaultLanguage(n.languageCode),f.providerId=e.providerId||"",hI(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))f[E]=T}if(e instanceof Tl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(f.scopes=E.join(","))}n.tenantId&&(f.tid=n.tenantId);const h=f;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const p=await n._getAppCheckToken(),y=p?`#${dA}=${encodeURIComponent(p)}`:"";return`${pA(n)}?${El(h).slice(1)}${y}`}function pA({config:n}){return n.emulator?sp(n,hA):`https://${n.authDomain}/${fA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tE,this._completeRedirectFn=U1,this._overrideRedirectResult=V1}async _openPopup(e,t,i,o){var a;zr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const f=await Hy(e,t,i,pd(),o);return uA(e,f,fp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await Hy(e,t,i,pd(),o);return _1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(zr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rA(e),i=new z1(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gh,{type:Gh},o=>{var a;const f=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Gh];f!==void 0&&t(!!f),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=q1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gv()||zv()||lp()}}const gA=mA;var qy="@firebase/auth",Gy="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vA(n){Do(new Es("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:f,authDomain:h}=i.options;Ie(f&&!f.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:f,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(n)},y=new QS(i,o,a,p);return t1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Do(new Es("auth-internal",e=>{const t=zc(e.getProvider("auth").getImmediate());return(i=>new yA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri(qy,Gy,_A(n)),Ri(qy,Gy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=5*60,wA=Av("authIdTokenMaxAge")||EA;let Ky=null;const TA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wA)return;const o=t==null?void 0:t.token;Ky!==o&&(Ky=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function IA(n=Cv()){const e=tp(n,"auth");if(e.isInitialized())return e.getImmediate();const t=e1(n,{popupRedirectResolver:gA,persistence:[P1,m1,tE]}),i=Av("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const f=TA(a.toString());c1(t,f,()=>f(t.currentUser)),u1(t,h=>f(h))}}const o=Iv("auth");return o&&n1(t,`http://${o}`),t}function SA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}YS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=$n("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",SA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vA("Browser");var Qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ci,uE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function k(){}k.prototype=S.prototype,x.D=S.prototype,x.prototype=new k,x.prototype.constructor=x,x.C=function(C,O,M){for(var P=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)P[ot-2]=arguments[ot];return S.prototype[O].apply(C,P)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,k){k||(k=0);var C=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)C[O]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(O=0;16>O;++O)C[O]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=x.g[0],k=x.g[1],O=x.g[2];var M=x.g[3],P=S+(M^k&(O^M))+C[0]+3614090360&4294967295;S=k+(P<<7&4294967295|P>>>25),P=M+(O^S&(k^O))+C[1]+3905402710&4294967295,M=S+(P<<12&4294967295|P>>>20),P=O+(k^M&(S^k))+C[2]+606105819&4294967295,O=M+(P<<17&4294967295|P>>>15),P=k+(S^O&(M^S))+C[3]+3250441966&4294967295,k=O+(P<<22&4294967295|P>>>10),P=S+(M^k&(O^M))+C[4]+4118548399&4294967295,S=k+(P<<7&4294967295|P>>>25),P=M+(O^S&(k^O))+C[5]+1200080426&4294967295,M=S+(P<<12&4294967295|P>>>20),P=O+(k^M&(S^k))+C[6]+2821735955&4294967295,O=M+(P<<17&4294967295|P>>>15),P=k+(S^O&(M^S))+C[7]+4249261313&4294967295,k=O+(P<<22&4294967295|P>>>10),P=S+(M^k&(O^M))+C[8]+1770035416&4294967295,S=k+(P<<7&4294967295|P>>>25),P=M+(O^S&(k^O))+C[9]+2336552879&4294967295,M=S+(P<<12&4294967295|P>>>20),P=O+(k^M&(S^k))+C[10]+4294925233&4294967295,O=M+(P<<17&4294967295|P>>>15),P=k+(S^O&(M^S))+C[11]+2304563134&4294967295,k=O+(P<<22&4294967295|P>>>10),P=S+(M^k&(O^M))+C[12]+1804603682&4294967295,S=k+(P<<7&4294967295|P>>>25),P=M+(O^S&(k^O))+C[13]+4254626195&4294967295,M=S+(P<<12&4294967295|P>>>20),P=O+(k^M&(S^k))+C[14]+2792965006&4294967295,O=M+(P<<17&4294967295|P>>>15),P=k+(S^O&(M^S))+C[15]+1236535329&4294967295,k=O+(P<<22&4294967295|P>>>10),P=S+(O^M&(k^O))+C[1]+4129170786&4294967295,S=k+(P<<5&4294967295|P>>>27),P=M+(k^O&(S^k))+C[6]+3225465664&4294967295,M=S+(P<<9&4294967295|P>>>23),P=O+(S^k&(M^S))+C[11]+643717713&4294967295,O=M+(P<<14&4294967295|P>>>18),P=k+(M^S&(O^M))+C[0]+3921069994&4294967295,k=O+(P<<20&4294967295|P>>>12),P=S+(O^M&(k^O))+C[5]+3593408605&4294967295,S=k+(P<<5&4294967295|P>>>27),P=M+(k^O&(S^k))+C[10]+38016083&4294967295,M=S+(P<<9&4294967295|P>>>23),P=O+(S^k&(M^S))+C[15]+3634488961&4294967295,O=M+(P<<14&4294967295|P>>>18),P=k+(M^S&(O^M))+C[4]+3889429448&4294967295,k=O+(P<<20&4294967295|P>>>12),P=S+(O^M&(k^O))+C[9]+568446438&4294967295,S=k+(P<<5&4294967295|P>>>27),P=M+(k^O&(S^k))+C[14]+3275163606&4294967295,M=S+(P<<9&4294967295|P>>>23),P=O+(S^k&(M^S))+C[3]+4107603335&4294967295,O=M+(P<<14&4294967295|P>>>18),P=k+(M^S&(O^M))+C[8]+1163531501&4294967295,k=O+(P<<20&4294967295|P>>>12),P=S+(O^M&(k^O))+C[13]+2850285829&4294967295,S=k+(P<<5&4294967295|P>>>27),P=M+(k^O&(S^k))+C[2]+4243563512&4294967295,M=S+(P<<9&4294967295|P>>>23),P=O+(S^k&(M^S))+C[7]+1735328473&4294967295,O=M+(P<<14&4294967295|P>>>18),P=k+(M^S&(O^M))+C[12]+2368359562&4294967295,k=O+(P<<20&4294967295|P>>>12),P=S+(k^O^M)+C[5]+4294588738&4294967295,S=k+(P<<4&4294967295|P>>>28),P=M+(S^k^O)+C[8]+2272392833&4294967295,M=S+(P<<11&4294967295|P>>>21),P=O+(M^S^k)+C[11]+1839030562&4294967295,O=M+(P<<16&4294967295|P>>>16),P=k+(O^M^S)+C[14]+4259657740&4294967295,k=O+(P<<23&4294967295|P>>>9),P=S+(k^O^M)+C[1]+2763975236&4294967295,S=k+(P<<4&4294967295|P>>>28),P=M+(S^k^O)+C[4]+1272893353&4294967295,M=S+(P<<11&4294967295|P>>>21),P=O+(M^S^k)+C[7]+4139469664&4294967295,O=M+(P<<16&4294967295|P>>>16),P=k+(O^M^S)+C[10]+3200236656&4294967295,k=O+(P<<23&4294967295|P>>>9),P=S+(k^O^M)+C[13]+681279174&4294967295,S=k+(P<<4&4294967295|P>>>28),P=M+(S^k^O)+C[0]+3936430074&4294967295,M=S+(P<<11&4294967295|P>>>21),P=O+(M^S^k)+C[3]+3572445317&4294967295,O=M+(P<<16&4294967295|P>>>16),P=k+(O^M^S)+C[6]+76029189&4294967295,k=O+(P<<23&4294967295|P>>>9),P=S+(k^O^M)+C[9]+3654602809&4294967295,S=k+(P<<4&4294967295|P>>>28),P=M+(S^k^O)+C[12]+3873151461&4294967295,M=S+(P<<11&4294967295|P>>>21),P=O+(M^S^k)+C[15]+530742520&4294967295,O=M+(P<<16&4294967295|P>>>16),P=k+(O^M^S)+C[2]+3299628645&4294967295,k=O+(P<<23&4294967295|P>>>9),P=S+(O^(k|~M))+C[0]+4096336452&4294967295,S=k+(P<<6&4294967295|P>>>26),P=M+(k^(S|~O))+C[7]+1126891415&4294967295,M=S+(P<<10&4294967295|P>>>22),P=O+(S^(M|~k))+C[14]+2878612391&4294967295,O=M+(P<<15&4294967295|P>>>17),P=k+(M^(O|~S))+C[5]+4237533241&4294967295,k=O+(P<<21&4294967295|P>>>11),P=S+(O^(k|~M))+C[12]+1700485571&4294967295,S=k+(P<<6&4294967295|P>>>26),P=M+(k^(S|~O))+C[3]+2399980690&4294967295,M=S+(P<<10&4294967295|P>>>22),P=O+(S^(M|~k))+C[10]+4293915773&4294967295,O=M+(P<<15&4294967295|P>>>17),P=k+(M^(O|~S))+C[1]+2240044497&4294967295,k=O+(P<<21&4294967295|P>>>11),P=S+(O^(k|~M))+C[8]+1873313359&4294967295,S=k+(P<<6&4294967295|P>>>26),P=M+(k^(S|~O))+C[15]+4264355552&4294967295,M=S+(P<<10&4294967295|P>>>22),P=O+(S^(M|~k))+C[6]+2734768916&4294967295,O=M+(P<<15&4294967295|P>>>17),P=k+(M^(O|~S))+C[13]+1309151649&4294967295,k=O+(P<<21&4294967295|P>>>11),P=S+(O^(k|~M))+C[4]+4149444226&4294967295,S=k+(P<<6&4294967295|P>>>26),P=M+(k^(S|~O))+C[11]+3174756917&4294967295,M=S+(P<<10&4294967295|P>>>22),P=O+(S^(M|~k))+C[2]+718787259&4294967295,O=M+(P<<15&4294967295|P>>>17),P=k+(M^(O|~S))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(P<<21&4294967295|P>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var k=S-this.blockSize,C=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=k;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(C[O++]=x.charCodeAt(M++),O==this.blockSize){o(this,C),O=0;break}}else for(;M<S;)if(C[O++]=x[M++],O==this.blockSize){o(this,C),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var k=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=k&255,k/=256;for(this.u(x),x=Array(16),S=k=0;4>S;++S)for(var C=0;32>C;C+=8)x[k++]=this.g[S]>>>C&255;return x};function a(x,S){var k=h;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=S(x)}function f(x,S){this.h=S;for(var k=[],C=!0,O=x.length-1;0<=O;O--){var M=x[O]|0;C&&M==S||(k[O]=M,C=!1)}this.g=k}var h={};function p(x){return-128<=x&&128>x?a(x,function(S){return new f([S|0],0>S?-1:0)}):new f([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return D(y(-x));for(var S=[],k=1,C=0;x>=k;C++)S[C]=x/k|0,k*=4294967296;return new f(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return D(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=y(Math.pow(S,8)),C=T,O=0;O<x.length;O+=8){var M=Math.min(8,x.length-O),P=parseInt(x.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),C=C.j(M).add(y(P))):(C=C.j(k),C=C.add(y(P)))}return C}var T=p(0),I=p(1),N=p(16777216);n=f.prototype,n.m=function(){if($(this))return-D(this).m();for(var x=0,S=1,k=0;k<this.g.length;k++){var C=this.i(k);x+=(0<=C?C:4294967296+C)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(L(this))return"0";if($(this))return"-"+D(this).toString(x);for(var S=y(Math.pow(x,6)),k=this,C="";;){var O=oe(k,S).g;k=q(k,O.j(S));var M=((0<k.g.length?k.g[0]:k.h)>>>0).toString(x);if(k=O,L(k))return M+C;for(;6>M.length;)M="0"+M;C=M+C}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function L(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function $(x){return x.h==-1}n.l=function(x){return x=q(this,x),$(x)?-1:L(x)?0:1};function D(x){for(var S=x.g.length,k=[],C=0;C<S;C++)k[C]=~x.g[C];return new f(k,~x.h).add(I)}n.abs=function(){return $(this)?D(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0,O=0;O<=S;O++){var M=C+(this.i(O)&65535)+(x.i(O)&65535),P=(M>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);C=P>>>16,M&=65535,P&=65535,k[O]=P<<16|M}return new f(k,k[k.length-1]&-2147483648?-1:0)};function q(x,S){return x.add(D(S))}n.j=function(x){if(L(this)||L(x))return T;if($(this))return $(x)?D(this).j(D(x)):D(D(this).j(x));if($(x))return D(this.j(D(x)));if(0>this.l(N)&&0>x.l(N))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,k=[],C=0;C<2*S;C++)k[C]=0;for(C=0;C<this.g.length;C++)for(var O=0;O<x.g.length;O++){var M=this.i(C)>>>16,P=this.i(C)&65535,ot=x.i(O)>>>16,Dt=x.i(O)&65535;k[2*C+2*O]+=P*Dt,J(k,2*C+2*O),k[2*C+2*O+1]+=M*Dt,J(k,2*C+2*O+1),k[2*C+2*O+1]+=P*ot,J(k,2*C+2*O+1),k[2*C+2*O+2]+=M*ot,J(k,2*C+2*O+2)}for(C=0;C<S;C++)k[C]=k[2*C+1]<<16|k[2*C];for(C=S;C<2*S;C++)k[C]=0;return new f(k,0)};function J(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function Q(x,S){this.g=x,this.h=S}function oe(x,S){if(L(S))throw Error("division by zero");if(L(x))return new Q(T,T);if($(x))return S=oe(D(x),S),new Q(D(S.g),D(S.h));if($(S))return S=oe(x,D(S)),new Q(D(S.g),S.h);if(30<x.g.length){if($(x)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var k=I,C=S;0>=C.l(x);)k=_e(k),C=_e(C);var O=Te(k,1),M=Te(C,1);for(C=Te(C,2),k=Te(k,2);!L(C);){var P=M.add(C);0>=P.l(x)&&(O=O.add(k),M=P),C=Te(C,1),k=Te(k,1)}return S=q(x,O.j(S)),new Q(O,S)}for(O=T;0<=x.l(S);){for(k=Math.max(1,Math.floor(x.m()/S.m())),C=Math.ceil(Math.log(k)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),M=y(k),P=M.j(S);$(P)||0<P.l(x);)k-=C,M=y(k),P=M.j(S);L(M)&&(M=I),O=O.add(M),x=q(x,P)}return new Q(O,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0;C<S;C++)k[C]=this.i(C)&x.i(C);return new f(k,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0;C<S;C++)k[C]=this.i(C)|x.i(C);return new f(k,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0;C<S;C++)k[C]=this.i(C)^x.i(C);return new f(k,this.h^x.h)};function _e(x){for(var S=x.g.length+1,k=[],C=0;C<S;C++)k[C]=x.i(C)<<1|x.i(C-1)>>>31;return new f(k,x.h)}function Te(x,S){var k=S>>5;S%=32;for(var C=x.g.length-k,O=[],M=0;M<C;M++)O[M]=0<S?x.i(M+k)>>>S|x.i(M+k+1)<<32-S:x.i(M+k);return new f(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,uE=i,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Ci=f}).apply(typeof Qy<"u"?Qy:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cE,Ya,fE,lc,yd,hE,dE,pE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function L(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,H){for(var re=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)re[$e-2]=arguments[$e];return m.prototype[F].apply(w,re)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function D(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,H=w.length||0;u.length=F+H;for(let re=0;re<H;re++)u[F+re]=w[re]}else u.push(w)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function Q(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function oe(u){return oe[" "](u),u}oe[" "]=function(){};var _e=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Te(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function x(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let H=0;H<k.length;H++)_=k[H],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){h.setTimeout(()=>{throw u},0)}function P(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ot{constructor(){this.h=this.g=null}add(m,_){const w=Dt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new q(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let We,ie=!1,me=new ot,ae=()=>{const u=h.Promise.resolve(void 0);We=()=>{u.then(V)}};var V=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(_){M(_)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u}();function Re(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_e){e:{try{oe(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}L(Re,pe);var Le={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),ze=0;function qe(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++ze,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,w,F){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var re=Kr(u,m,w,F);return-1<re?(m=u[re],_||(m.fa=!1)):(m=new qe(m,this.src,H,!!w,F),m.fa=_,u.push(m)),m};function Cs(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),H;(H=0<=F)&&Array.prototype.splice.call(w,F,1),H&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Kr(u,m,_,w){for(var F=0;F<u.length;++F){var H=u[F];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==w)return F}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),xs={};function Zo(u,m,_,w,F){if(Array.isArray(m)){for(var H=0;H<m.length;H++)Zo(u,m[H],_,w,F);return null}return _=na(_),u&&u[je]?u.K(m,_,y(w)?!!w.capture:!1,F):ea(u,m,_,!1,w,F)}function ea(u,m,_,w,F,H){if(!m)throw Error("Invalid event type");var re=y(F)?!!F.capture:!!F,$e=bs(u);if($e||(u[zi]=$e=new pr(u)),_=$e.add(m,_,w,re,H),_.proxy)return _;if(w=Ol(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Pe||(F=re),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(gr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ol(){function u(_){return m.call(u.src,u.listener,_)}const m=ta;return u}function Ns(u,m,_,w,F){if(Array.isArray(m))for(var H=0;H<m.length;H++)Ns(u,m[H],_,w,F);else w=y(w)?!!w.capture:!!w,_=na(_),u&&u[je]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=Kr(H,_,w,F),-1<_&&(wt(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Kr(m,_,w,F)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[je])Cs(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(gr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=bs(m))?(Cs(_,u),_.h==0&&(_.src=null,m[zi]=null)):wt(u)}}}function gr(u){return u in xs?xs[u]:xs[u]="on"+u}function ta(u,m){if(u.da)u=!0;else{m=new Re(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&mr(u),u=_.call(w,m)}return u}function bs(u){return u=u[zi],u instanceof pr?u:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(u){return typeof u=="function"?u:(u[Os]||(u[Os]=function(m){return u.handleEvent(m)}),u[Os])}function dt(){K.call(this),this.i=new pr(this),this.M=this,this.F=null}L(dt,K),dt.prototype[je]=!0,dt.prototype.removeEventListener=function(u,m,_,w){Ns(this,u,m,_,w)};function pt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(w,u),C(m,F)}if(F=!0,_)for(var H=_.length-1;0<=H;H--){var re=m.g=_[H];F=yr(re,w,!0,m)&&F}if(re=m.g=u,F=yr(re,w,!0,m)&&F,F=yr(re,w,!1,m)&&F,_)for(H=0;H<_.length;H++)re=m.g=_[H],F=yr(re,w,!1,m)&&F}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)wt(_[w]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},dt.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function yr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,H=0;H<m.length;++H){var re=m[H];if(re&&!re.da&&re.capture==_){var $e=re.listener,mt=re.ha||re.src;re.fa&&Cs(u.i,re),F=$e.call(mt,w)!==!1&&F}}return F&&!w.defaultPrevented}function ra(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function Qr(u){u.g=ra(()=>{u.g=null,u.i&&(u.i=!1,Qr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Bi extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Qr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(u){K.call(this),this.h=u,this.g={}}L($i,K);var ia=[];function sa(u){Te(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}$i.prototype.N=function(){$i.aa.N.call(this),sa(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oa=h.JSON.stringify,aa=h.JSON.parse,la=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Wi(){}Wi.prototype.h=null;function Ds(u){return u.h||(u.h=u.i())}function Ls(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){pe.call(this,"d")}L(Wn,pe);function Vs(){pe.call(this,"c")}L(Vs,pe);var Hn={},ua=null;function Hi(){return ua=ua||new dt}Hn.La="serverreachability";function ca(u){pe.call(this,Hn.La,u)}L(ca,pe);function _r(u){const m=Hi();pt(m,new ca(m))}Hn.STAT_EVENT="statevent";function fa(u,m){pe.call(this,Hn.STAT_EVENT,u),this.stat=m}L(fa,pe);function at(u){const m=Hi();pt(m,new fa(m,u))}Hn.Ma="timingevent";function Ms(u,m){pe.call(this,Hn.Ma,u),this.size=m}L(Ms,pe);function Pn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function Gi(u,m,_,w,F,H){u.info(function(){if(u.g)if(H)for(var re="",$e=H.split("&"),mt=0;mt<$e.length;mt++){var Ve=$e[mt].split("=");if(1<Ve.length){var Tt=Ve[0];Ve=Ve[1];var ct=Tt.split("_");re=2<=ct.length&&ct[1]=="type"?re+(Tt+"="+Ve+"&"):re+(Tt+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+re})}function Fs(u,m,_,w,F,H,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+H+" "+re})}function Rn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+cf(u,_)+(w?" "+w:"")})}function ha(u,m){u.info(function(){return"TIMEOUT: "+m})}qi.prototype.info=function(){};function cf(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var H=F[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return oa(_)}catch{return m}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Ki(){}L(Ki,Wi),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},Cn=new Ki;function xn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var da={},js={};function zs(u,m,_){u.L=1,u.v=ei(on(m)),u.m=_,u.P=!0,pa(u,null)}function pa(u,m){u.F=Date.now(),Ge(u),u.A=on(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ni(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Ll,u.g=Zl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Bi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(ia[0]=F.toString()),F=ia);for(var H=0;H<F.length;H++){var re=Zo(_,F[H],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),Gi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Yt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Ea(this.g)))){this.J||ct!=4||m==7||(m==8||0>=yn?_r(3):_r(2)),Qi(this);var _=this.g.Z();this.X=_;t:if(Vl(this)){var w=Ea(this.g);u="";var F=w.length,H=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Yr(this);var re="";break t}this.h.i=new h.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(H&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,Fs(this.i,this.u,this.A,this.l,this.R,ct,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,mt=this.g;if(($e=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J($e)){var Ve=$e;break t}}Ve=null}if(_=Ve)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ma(this,_);else{this.o=!1,this.s=3,at(12),mn(this),Yr(this);break e}}if(this.P){_=!0;let ln;for(;!this.J&&this.C<re.length;)if(ln=ff(this,re),ln==js){ct==4&&(this.s=4,at(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==da){this.s=4,at(15),Rn(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,ln,null),ma(this,ln);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||re.length!=0||this.h.h||(this.s=1,at(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,re,"[Invalid Chunked Response]"),mn(this),Yr(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Ta(Tt),Tt.M=!0,at(11))}}else Rn(this.i,this.l,re,null),ma(this,re);ct==4&&mn(this),this.o&&!this.J&&(ct==4?Js(this.j,this):(this.o=!1,Ge(this)))}else Gs(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),mn(this),Yr(this)}}}catch{}finally{}};function Vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ff(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?js:(_=Number(m.substring(_,w)),isNaN(_)?da:(w+=1,w+_>m.length?js:(m=m.slice(w,w+_),u.C=w+_,m)))}xn.prototype.cancel=function(){this.J=!0,mn(this)};function Ge(u){u.S=Date.now()+u.I,Ml(u,u.I)}function Ml(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(I(u.ba,u),m)}function Qi(u){u.B&&(h.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ha(this.i,this.A),this.L!=2&&(_r(),at(17)),mn(this),this.s=2,Yr(this)):Ml(this,this.S-u)};function Yr(u){u.j.G==0||u.J||Js(u.j,u)}function mn(u){Qi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,sa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ma(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Xs(_),Ln(_);else break e;Ys(_),at(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(I(_.Za,_),6e3));if(1>=Ul(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Xs(_),!J(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Ve=F[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Tt=Ve[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const ct=Ve[4];ct!=null&&(_.Aa=ct,_.j.info("SVER="+_.Aa));const yn=Ve[5];yn!=null&&typeof yn=="number"&&0<yn&&(w=1.5*yn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const ln=u.g;if(ln){const ns=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var H=w.h;H.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ga(H,H.h),H.h=null))}if(w.D){const eo=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(w.ya=eo,He(w.I,w.D,eo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var re=u;if(w.qa=Jl(w,w.J?w.ia:null,w.W),re.K){jl(w.h,re);var $e=re,mt=w.L;mt&&($e.I=mt),$e.B&&(Qi($e),Ge($e)),w.g=re}else ts(w);0<_.i.length&&Qn(_)}else Ve[0]!="stop"&&Ve[0]!="close"||Ir(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Ir(_,7):Rt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}_r(4)}catch{}}var Fl=class{constructor(u,m){this.g=u,this.map=m}};function Yi(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ul(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ga(u,m){u.g?u.g.add(m):u.h=m}function jl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Yi.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function Bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function $s(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Xr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=$s(u),w=Bs(u),F=w.length,H=0;H<F;H++)m.call(void 0,w[H],_&&_[H],u)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hf(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var H=u[_].substring(0,w);F=u[_].substring(w+1)}else H=u[_];m(H,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Ji(this,u.j),this.o=u.o,this.g=u.g,Jr(this,u.s),this.l=u.l;var m=u.i,_=new qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Zr(this,_),this.m=u.m}else u&&(m=String(u).match(Xi))?(this.h=!1,Ji(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),Jr(this,m[4]),this.l=Oe(m[5]||"",!0),Zr(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}vr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ti(m,Ws,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ti(m,Ws,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ti(_,_.charAt(0)=="/"?Wl:$l,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ti(_,ya)),u.join("")};function on(u){return new vr(u)}function Ji(u,m,_){u.j=_?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Jr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Zr(u,m,_){m instanceof qn?(u.i=m,Gn(u.i,u.h)):(_||(m=ti(m,Hl)),u.i=new qn(m,u.h))}function He(u,m,_){u.i.set(m,_)}function ei(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ti(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Bl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ws=/[#\/\?@]/g,$l=/[#\?:]/g,Wl=/[#\?]/g,Hl=/[#\?@]/g,ya=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&hf(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=qn.prototype,n.add=function(u,m){Pt(this),this.i=null,u=gn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Nn(u,m){Pt(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function bn(u,m){return Pt(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){Pt(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){Pt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let H=0;H<F.length;H++)_.push(m[w])}return _},n.V=function(u){Pt(this);let m=[];if(typeof u=="string")bn(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Pt(this),this.i=null,u=gn(this,u),bn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ni(u,m,_){Nn(u,m),0<_.length&&(u.i=null,u.g.set(gn(u,m),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const H=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var F=H;re[w]!==""&&(F+="="+encodeURIComponent(String(re[w]))),u.push(F)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Gn(u,m){m&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(Nn(this,w),ni(this,F,_))},u)),u.j=m}function df(u,m){const _=new qi;if(h.Image){const w=new Image;w.onload=N(Qt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=N(Qt,_,"TestLoadImage: error",!1,m,w),w.onabort=N(Qt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=N(Qt,_,"TestLoadImage: timeout",!1,m,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function ql(u,m){const _=new qi,w=new AbortController,F=setTimeout(()=>{w.abort(),Qt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(H=>{clearTimeout(F),H.ok?Qt(_,"TestPingServer: ok",!0,m):Qt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Qt(_,"TestPingServer: error",!1,m)})}function Qt(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function pf(){this.g=new la}function Gl(u,m,_){const w=_||"";try{Xr(u,function(F,H){let re=F;y(F)&&(re=oa(F)),m.push(w+H+"="+encodeURIComponent(re))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}L(Er,Wi),Er.prototype.g=function(){return new Zi(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function Zi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Zi,dt),n=Zi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?On(this):Dn(this),this.readyState==3&&Kl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},n.Qa=function(u){this.g&&(this.response=u,On(this))},n.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let m="";return Te(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function ri(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=wr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):He(u,m,_))}function Je(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Je,dt);var mf=/^https?$/i,_a=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ds(this.o):Ds(Cn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){es(this,H);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())_.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),F=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(_a,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of _)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){es(this,H)}};function es(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Hs(u),an(u)}function Hs(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},n.bb=function(){va(this)};function va(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)ra(u.Ea,0,u);else if(pt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=re===0){var F=String(u.D).match(Xi)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),w=!mf.test(F?F.toLowerCase():"")}_=w}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var H=2<Yt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Hs(u)}}finally{an(u)}}}}function an(u,m){if(u.g){qs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=w}catch{}}}function qs(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),aa(m)}};function Ea(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Gs(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(J(u[w]))continue;var _=O(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[F]||[];m[F]=H,H.push(_)}x(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function wa(u){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,u),this.cb=Kn("retryDelaySeedMs",1e4,u),this.Wa=Kn("forwardChannelMaxRetries",2,u),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(u&&u.concurrentRequestLimit),this.Da=new pf,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){at(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Jl(this,null,this.W),Qn(this)};function Rt(u){if(Ks(u),u.G==3){var m=u.U++,_=on(u.I);if(He(_,"SID",u.K),He(_,"RID",m),He(_,"TYPE","terminate"),Tr(u,_),m=new xn(u,u.j,m),m.L=2,m.v=ei(on(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.v,_=!0),_||(m.g=Zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}Xl(u)}function Ln(u){u.g&&(Ta(u),u.g.cancel(),u.g=null)}function Ks(u){Ln(u),u.u&&(h.clearTimeout(u.u),u.u=null),Xs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function Qn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;We||ae(),ie||(We(),ie=!0),me.add(m,u),u.B=0}}function gf(u,m){return Ul(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(I(u.Ga,u,m),Yl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new xn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),C(H,this.S)):H=this.S),this.m!==null||this.O||(F.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ii(this,F,m),_=on(this.I),He(_,"RID",u),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Tr(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(wr(H)))+"&"+m:this.m&&ri(_,this.m,H)),ga(this.h,F),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",m),He(_,"SID","null"),F.T=!0,zs(F,_,null)):zs(F,_,m),this.G=2}}else this.G==3&&(u?Qs(this,u):this.i.length==0||sn(this.h)||Qs(this))};function Qs(u,m){var _;m?_=m.l:_=u.U++;const w=on(u.I);He(w,"SID",u.K),He(w,"RID",_),He(w,"AID",u.T),Tr(u,w),u.m&&u.o&&ri(w,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ii(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ga(u.h,_),zs(_,w,m)}function Tr(u,m){u.H&&Te(u.H,function(_,w){He(m,w,_)}),u.l&&Xr({},function(_,w){He(m,w,_)})}function ii(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let H=-1;for(;;){const re=["count="+_];H==-1?0<_?(H=F[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let $e=!0;for(let mt=0;mt<_;mt++){let Ve=F[mt].g;const Tt=F[mt].map;if(Ve-=H,0>Ve)H=Math.max(0,F[mt].g-100),$e=!1;else try{Gl(Tt,re,"req"+Ve+"_")}catch{w&&w(Tt)}}if($e){w=re.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function ts(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;We||ae(),ie||(We(),ie=!0),me.add(m,u),u.v=0}}function Ys(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(I(u.Fa,u),Yl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Ln(this),Ql(this))};function Ta(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);He(m,"RID","rpc"),He(m,"SID",u.K),He(m,"AID",u.T),He(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(m,"TO",u.ja),He(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&ri(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ei(on(m)),_.m=null,_.P=!0,pa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Ys(this),at(19))};function Xs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Js(u,m){var _=null;if(u.g==m){Xs(u),Ta(u),u.g=null;var w=2}else if(Ht(u.h,m))_=m.D,jl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=Hi(),pt(w,new Ms(w,_)),Qn(u)}else ts(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&gf(u,m)||w==2&&Ys(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function Yl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const F=!w;w=new vr(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ji(w,"https"),ei(w),F?df(w.toString(),_):ql(w.toString(),_)}else at(2);u.G=0,u.l&&u.l.sa(m),Xl(u),Ks(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Xl(u){if(u.G=0,u.ka=[],u.l){const m=zl(u.h);(m.length!=0||u.i.length!=0)&&(D(u.ka,m),D(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Jl(u,m,_){var w=_ instanceof vr?on(_):new vr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Jr(w,w.s);else{var F=h.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var H=new vr(null);w&&Ji(H,w),m&&(H.g=m),F&&Jr(H,F),_&&(H.l=_),w=H}return _=u.D,m=u.ya,_&&m&&He(w,_,m),He(w,"VER",u.la),Tr(u,w),w}function Zl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Er({eb:_})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ia(){}n=Ia.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zs(){}Zs.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){dt.call(this),this.g=new wa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Yn(this)}L(qt,dt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Rt(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=oa(u),u=_);m.i.push(new Fl(m.Ya++,u)),m.G==3&&Qn(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,qt.aa.N.call(this)};function eu(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}L(eu,Wn);function tu(){Vs.call(this),this.status=1}L(tu,Vs);function Yn(u){this.g=u}L(Yn,Ia),Yn.prototype.ua=function(){pt(this.g,"a")},Yn.prototype.ta=function(u){pt(this.g,new eu(u))},Yn.prototype.sa=function(u){pt(this.g,new tu)},Yn.prototype.ra=function(){pt(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,pE=function(){return new Zs},dE=function(){return Hi()},hE=Hn,yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,lc=Us,Dl.COMPLETE="complete",fE=Dl,Ls.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ya=Ls,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,cE=Je}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const Yy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Zd("@firebase/firestore");function To(){return Ts.logLevel}function le(n,...e){if(Ts.logLevel<=Ne.DEBUG){const t=e.map(dp);Ts.debug(`Firestore (${qo}): ${n}`,...t)}}function Br(n,...e){if(Ts.logLevel<=Ne.ERROR){const t=e.map(dp);Ts.error(`Firestore (${qo}): ${n}`,...t)}}function Vo(n,...e){if(Ts.logLevel<=Ne.WARN){const t=e.map(dp);Ts.warn(`Firestore (${qo}): ${n}`,...t)}}function dp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function Be(n,e){n||Se()}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends qr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class kA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PA{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new xi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new xi,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},h=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new xi)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new mE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new zt(e)}}class RA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class CA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new RA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=a=>{a.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const f=a.token!==this.R;return this.R=a.token,le("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new xA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=bA(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Mo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ve(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new vt(0,0))}static max(){return new Ae(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(),i===void 0?i=e.length-t:i>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=tr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=tr.isNumericId(e),o=tr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ci.fromString(e.substring(4,e.length-2))}}class st extends tr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new st(t)}static emptyPath(){return new st([])}}const OA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends tr{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return OA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new ve(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let f=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new ve(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ve(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(f=!f,o++):h!=="."||f?(i+=h,o++):(a(),o++)}if(a(),f)throw new ve(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(st.fromString(e))}static fromName(e){return new Ee(st.fromString(e).popFirst(5))}static empty(){return new Ee(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new st(e.slice()))}}function DA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new Ni(o,Ee.empty(),e)}function LA(n){return new Ni(n.readTime,n.key,-1)}class Ni{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ni(Ae.min(),Ee.empty(),-1)}static max(){return new Ni(Ae.max(),Ee.empty(),-1)}}function VA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==MA)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,a=0,f=!1;e.forEach(h=>{++o,h.next(()=>{++a,f&&a===o&&t()},p=>i(p))}),f=!0,a===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const a=e.length,f=new Array(a);let h=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next(E=>{f[y]=E,++h,h===a&&i(f)},E=>o(E))}})}static doWhile(e,t){return new G((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function UA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ko(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wc.oe=-1;function Hc(n){return n==null}function Ac(n){return n===0&&1/n==-1/0}function jA(n){return typeof n=="number"&&Number.isInteger(n)&&!Ac(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xy(e)),e=BA(n.get(t),e);return Xy(e)}function BA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function Xy(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function As(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}}class Xu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=a??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,i,o,a){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new Et(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new _E("Invalid base64 string: "+a):a}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let a="";for(let f=0;f<o.length;++f)a+=String.fromCharCode(o[f]);return a}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const $A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(n){if(Be(!!n),typeof n=="string"){let e=0;const t=$A.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Oi(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function qc(n){const e=n.mapValue.fields.__previous_value__;return pp(e)?qc(e):e}function ul(n){const e=bi(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t,i,o,a,f,h,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=f,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y}}class cl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={mapValue:{}};function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pp(n)?4:qA(n)?9007199254740991:HA(n)?10:11:Se()}function ur(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ul(n).isEqual(ul(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const f=bi(o.timestampValue),h=bi(a.timestampValue);return f.seconds===h.seconds&&f.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Oi(o.bytesValue).isEqual(Oi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return ut(o.geoPointValue.latitude)===ut(a.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return ut(o.integerValue)===ut(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const f=ut(o.doubleValue),h=ut(a.doubleValue);return f===h?Ac(f)===Ac(h):isNaN(f)&&isNaN(h)}return!1}(n,e);case 9:return Mo(n.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(o,a){const f=o.mapValue.fields||{},h=a.mapValue.fields||{};if(Jy(f)!==Jy(h))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(h[p]===void 0||!ur(f[p],h[p])))return!1;return!0}(n,e);default:return Se()}}function fl(n,e){return(n.values||[]).find(t=>ur(t,e))!==void 0}function Fo(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(a,f){const h=ut(a.integerValue||a.doubleValue),p=ut(f.integerValue||f.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,e);case 3:return e_(n.timestampValue,e.timestampValue);case 4:return e_(ul(n),ul(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(a,f){const h=Oi(a),p=Oi(f);return h.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(a,f){const h=a.split("/"),p=f.split("/");for(let y=0;y<h.length&&y<p.length;y++){const E=De(h[y],p[y]);if(E!==0)return E}return De(h.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,f){const h=De(ut(a.latitude),ut(f.latitude));return h!==0?h:De(ut(a.longitude),ut(f.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return t_(n.arrayValue,e.arrayValue);case 10:return function(a,f){var h,p,y,E;const T=a.fields||{},I=f.fields||{},N=(h=T.value)===null||h===void 0?void 0:h.arrayValue,L=(p=I.value)===null||p===void 0?void 0:p.arrayValue,$=De(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((E=L==null?void 0:L.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:t_(N,L)}(n.mapValue,e.mapValue);case 11:return function(a,f){if(a===Ju.mapValue&&f===Ju.mapValue)return 0;if(a===Ju.mapValue)return 1;if(f===Ju.mapValue)return-1;const h=a.fields||{},p=Object.keys(h),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const I=De(p[T],E[T]);if(I!==0)return I;const N=Fo(h[p[T]],y[E[T]]);if(N!==0)return N}return De(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Se()}}function e_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=bi(n),i=bi(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function t_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=Fo(t[o],i[o]);if(a)return a}return De(t.length,i.length)}function Uo(n){return _d(n)}function _d(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=bi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Oi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=_d(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const f of i)a?a=!1:o+=",",o+=`${f}:${_d(t.fields[f])}`;return o+"}"}(n.mapValue):Se()}function uc(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qc(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return Oi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+uc(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return As(i.fields,(a,f)=>{o+=a.length+uc(f)}),o}(n.mapValue);default:throw Se()}}function vd(n){return!!n&&"integerValue"in n}function mp(n){return!!n&&"arrayValue"in n}function n_(n){return!!n&&"nullValue"in n}function r_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function HA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function tl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return As(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=tl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach((f,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}f?i[h.lastSegment()]=tl(f):o.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){As(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new Sn(tl(this.value))}}function vE(n){const e=[];return As(n.fields,(t,i)=>{const o=new bt([t]);if(cc(i)){const a=vE(i.mapValue).fields;if(a.length===0)e.push(o);else for(const f of a)e.push(o.child(f))}else e.push(o)}),new Bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,a,f,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=f,this.documentState=h}static newInvalidDocument(e){return new Bt(e,0,Ae.min(),Ae.min(),Ae.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ae.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ae.min(),Ae.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ae.min(),Ae.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.position=e,this.inclusive=t}}function i_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],f=n.position[o];if(a.field.isKeyField()?i=Ee.comparator(Ee.fromName(f.referenceValue),t.key):i=Fo(f,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function s_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ur(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t="asc"){this.field=e,this.dir=t}}function GA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{}class _t extends EE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new QA(e,t,i):t==="array-contains"?new JA(e,i):t==="in"?new ZA(e,i):t==="not-in"?new ek(e,i):t==="array-contains-any"?new tk(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new YA(e,i):new XA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends EE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new cr(e,t)}matches(e){return wE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wE(n){return n.op==="and"}function TE(n){return KA(n)&&wE(n)}function KA(n){for(const e of n.filters)if(e instanceof cr)return!1;return!0}function Ed(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Uo(n.value);if(TE(n))return n.filters.map(e=>Ed(e)).join(",");{const e=n.filters.map(t=>Ed(t)).join(",");return`${n.op}(${e})`}}function IE(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)}(n,e):n instanceof cr?function(i,o){return o instanceof cr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,f,h)=>a&&IE(f,o.filters[h]),!0):!1}(n,e):void Se()}function SE(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Uo(t.value)}`}(n):n instanceof cr?function(t){return t.op.toString()+" {"+t.getFilters().map(SE).join(" ,")+"}"}(n):"Filter"}class QA extends _t{constructor(e,t,i){super(e,t,i),this.key=Ee.fromName(i.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class YA extends _t{constructor(e,t){super(e,"in",t),this.keys=AE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class XA extends _t{constructor(e,t){super(e,"not-in",t),this.keys=AE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function AE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ee.fromName(i.referenceValue))}class JA extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mp(t)&&fl(t.arrayValue,this.value)}}class ZA extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fl(this.value.arrayValue,t)}}class ek extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fl(this.value.arrayValue,t)}}class tk extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>fl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t=null,i=[],o=[],a=null,f=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=f,this.endAt=h,this.ue=null}}function o_(n,e=null,t=[],i=[],o=null,a=null,f=null){return new nk(n,e,t,i,o,a,f)}function gp(n){const e=ke(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ed(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Uo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Uo(i)).join(",")),e.ue=t}return e.ue}function yp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!GA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!IE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!s_(n.startAt,e.startAt)&&s_(n.endAt,e.endAt)}function wd(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t=null,i=[],o=[],a=null,f="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=f,this.startAt=h,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rk(n,e,t,i,o,a,f,h){return new Gc(n,e,t,i,o,a,f,h)}function _p(n){return new Gc(n)}function a_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ik(n){return n.collectionGroup!==null}function nl(n){const e=ke(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let h=new Et(bt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(h=h.add(y.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Pc(a,i))}),t.has(bt.keyField().canonicalString())||e.ce.push(new Pc(bt.keyField(),i))}return e.ce}function or(n){const e=ke(n);return e.le||(e.le=sk(e,nl(n))),e.le}function sk(n,e){if(n.limitType==="F")return o_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Pc(o.field,a)});const t=n.endAt?new kc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new kc(n.startAt.position,n.startAt.inclusive):null;return o_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Td(n,e,t){return new Gc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kc(n,e){return yp(or(n),or(e))&&n.limitType===e.limitType}function kE(n){return`${gp(or(n))}|lt:${n.limitType}`}function Io(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>SE(o)).join(", ")}]`),Hc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Uo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Uo(o)).join(",")),`Target(${i})`}(or(n))}; limitType=${n.limitType})`}function Qc(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):Ee.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of nl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(f,h,p){const y=i_(f,h,p);return f.inclusive?y<=0:y<0}(i.startAt,nl(i),o)||i.endAt&&!function(f,h,p){const y=i_(f,h,p);return f.inclusive?y>=0:y>0}(i.endAt,nl(i),o))}(n,e)}function ok(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function PE(n){return(e,t)=>{let i=!1;for(const o of nl(n)){const a=ak(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function ak(n,e,t){const i=n.field.isKeyField()?Ee.comparator(e.key,t.key):function(a,f,h){const p=f.data.field(a),y=h.data.field(a);return p!==null&&y!==null?Fo(p,y):Se()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return yE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new rt(Ee.comparator);function $r(){return lk}const RE=new rt(Ee.comparator);function Xa(...n){let e=RE;for(const t of n)e=e.insert(t.key,t);return e}function CE(n){let e=RE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ys(){return rl()}function xE(){return rl()}function rl(){return new ks(n=>n.toString(),(n,e)=>n.isEqual(e))}const uk=new rt(Ee.comparator),ck=new Et(Ee.comparator);function be(...n){let e=ck;for(const t of n)e=e.add(t);return e}const fk=new Et(De);function hk(){return fk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function NE(n){return{integerValue:""+n}}function dk(n,e){return jA(e)?NE(e):vp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this._=void 0}}function pk(n,e,t){return n instanceof Rc?function(o,a){const f={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&pp(a)&&(a=qc(a)),a&&(f.fields.__previous_value__=a),{mapValue:f}}(t,e):n instanceof hl?OE(n,e):n instanceof dl?DE(n,e):function(o,a){const f=bE(o,a),h=l_(f)+l_(o.Pe);return vd(f)&&vd(o.Pe)?NE(h):vp(o.serializer,h)}(n,e)}function mk(n,e,t){return n instanceof hl?OE(n,e):n instanceof dl?DE(n,e):t}function bE(n,e){return n instanceof Cc?function(i){return vd(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Rc extends Yc{}class hl extends Yc{constructor(e){super(),this.elements=e}}function OE(n,e){const t=LE(e);for(const i of n.elements)t.some(o=>ur(o,i))||t.push(i);return{arrayValue:{values:t}}}class dl extends Yc{constructor(e){super(),this.elements=e}}function DE(n,e){let t=LE(e);for(const i of n.elements)t=t.filter(o=>!ur(o,i));return{arrayValue:{values:t}}}class Cc extends Yc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function l_(n){return ut(n.integerValue||n.doubleValue)}function LE(n){return mp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function gk(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof hl&&o instanceof hl||i instanceof dl&&o instanceof dl?Mo(i.elements,o.elements,ur):i instanceof Cc&&o instanceof Cc?ur(i.Pe,o.Pe):i instanceof Rc&&o instanceof Rc}(n.transform,e.transform)}class yk{constructor(e,t){this.version=e,this.transformResults=t}}class Mr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mr}static exists(e){return new Mr(void 0,e)}static updateTime(e){return new Mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xc{}function VE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new FE(n.key,Mr.none()):new Sl(n.key,n.data,Mr.none());{const t=n.data,i=Sn.empty();let o=new Et(bt.comparator);for(let a of e.fields)if(!o.has(a)){let f=t.field(a);f===null&&a.length>1&&(a=a.popLast(),f=t.field(a)),f===null?i.delete(a):i.set(a,f),o=o.add(a)}return new Ps(n.key,i,new Bn(o.toArray()),Mr.none())}}function _k(n,e,t){n instanceof Sl?function(o,a,f){const h=o.value.clone(),p=c_(o.fieldTransforms,a,f.transformResults);h.setAll(p),a.convertToFoundDocument(f.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ps?function(o,a,f){if(!fc(o.precondition,a))return void a.convertToUnknownDocument(f.version);const h=c_(o.fieldTransforms,a,f.transformResults),p=a.data;p.setAll(ME(o)),p.setAll(h),a.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(n,e,t):function(o,a,f){a.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function il(n,e,t,i){return n instanceof Sl?function(a,f,h,p){if(!fc(a.precondition,f))return h;const y=a.value.clone(),E=f_(a.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ps?function(a,f,h,p){if(!fc(a.precondition,f))return h;const y=f_(a.fieldTransforms,p,f),E=f.data;return E.setAll(ME(a)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(a,f,h){return fc(a.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):h}(n,e,t)}function vk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=bE(i.transform,o||null);a!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,a))}return t||null}function u_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Mo(i,o,(a,f)=>gk(a,f))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Sl extends Xc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ps extends Xc{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ME(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function c_(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],f=a.transform,h=e.data.field(a.field);i.set(a.field,mk(f,h,t[o]))}return i}function f_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,f=t.data.field(o.field);i.set(o.field,pk(a,f,e))}return i}class FE extends Xc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ek extends Xc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&_k(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=xE();return this.mutations.forEach(o=>{const a=e.get(o.key),f=a.overlayedDocument;let h=this.applyToLocalView(f,a.mutatedFields);h=t.has(o.key)?null:h;const p=VE(f,h);p!==null&&i.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(t,i)=>u_(t,i))&&Mo(this.baseMutations,e.baseMutations,(t,i)=>u_(t,i))}}class Ep{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=function(){return uk}();const a=e.mutations;for(let f=0;f<a.length;f++)o=o.insert(a[f].key,i[f].version);return new Ep(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Me;function Sk(n){switch(n){default:return Se();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function UE(n){if(n===void 0)return Br("GRPC error has no .code"),ee.UNKNOWN;switch(n){case ht.OK:return ee.OK;case ht.CANCELLED:return ee.CANCELLED;case ht.UNKNOWN:return ee.UNKNOWN;case ht.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ht.INTERNAL:return ee.INTERNAL;case ht.UNAVAILABLE:return ee.UNAVAILABLE;case ht.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ht.NOT_FOUND:return ee.NOT_FOUND;case ht.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ht.ABORTED:return ee.ABORTED;case ht.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ht.DATA_LOSS:return ee.DATA_LOSS;default:return Se()}}(Me=ht||(ht={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new Ci([4294967295,4294967295],0);function h_(n){const e=Ak().encode(n),t=new uE;return t.update(e),new Uint8Array(t.digest())}function d_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ci([t,i],0),new Ci([o,a],0)]}class wp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ci.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ci.fromNumber(i)));return o.compare(kk)===1&&(o=new Ci([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=h_(e),[i,o]=d_(t);for(let a=0;a<this.hashCount;a++){const f=this.de(i,o,a);if(!this.Ee(f))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),f=new wp(a,o,t);return i.forEach(h=>f.insert(h)),f}insert(e){if(this.Te===0)return;const t=h_(e),[i,o]=d_(t);for(let a=0;a<this.hashCount;a++){const f=this.de(i,o,a);this.Ae(f)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Jc(Ae.min(),o,new rt(De),$r(),be())}}class Al{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Al(i,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class jE{constructor(e,t){this.targetId=e,this.me=t}}class zE{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class p_{constructor(){this.fe=0,this.ge=m_(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),i=be();return this.ge.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se()}}),new Al(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=m_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Pk{constructor(e){this.Be=e,this.Le=new Map,this.ke=$r(),this.qe=Zu(),this.Qe=Zu(),this.Ke=new rt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const a=o.target;if(wd(a))if(i===0){const f=new Ee(a.path);this.We(t,f,Bt.newNoDocument(f,Ae.min()))}else Be(i===1);else{const f=this.Ze(t);if(f!==i){const h=this.Xe(e),p=h?this.et(h,e,f):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let f,h;try{f=Oi(i).toUint8Array()}catch(p){if(p instanceof _E)return Vo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new wp(f,o,a)}catch(p){return Vo(p instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.Te===0?null:h}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const f=this.Be.nt(),h=`projects/${f.projectId}/databases/${f.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.We(t,a,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((a,f)=>{const h=this.Ye(f);if(h){if(a.current&&wd(h.target)){const p=new Ee(h.target.path);this.st(p).has(f)||this.ot(f,p)||this.We(f,p,Bt.newNoDocument(p,e))}a.be&&(t.set(f,a.ve()),a.Ce())}});let i=be();this.Qe.forEach((a,f)=>{let h=!0;f.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(a))}),this.ke.forEach((a,f)=>f.setReadTime(e));const o=new Jc(e,t,this.Ke,this.ke,i);return this.ke=$r(),this.qe=Zu(),this.Qe=Zu(),this.Ke=new rt(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new p_,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new p_),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Zu(){return new rt(Ee.comparator)}function m_(){return new rt(Ee.comparator)}const Rk={asc:"ASCENDING",desc:"DESCENDING"},Ck={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xk={and:"AND",or:"OR"};class Nk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Id(n,e){return n.useProto3Json||Hc(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bk(n,e){return xc(n,e.toTimestamp())}function ar(n){return Be(!!n),Ae.fromTimestamp(function(t){const i=bi(t);return new vt(i.seconds,i.nanos)}(n))}function Tp(n,e){return Sd(n,e).canonicalString()}function Sd(n,e){const t=function(o){return new st(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $E(n){const e=st.fromString(n);return Be(KE(e)),e}function Ad(n,e){return Tp(n.databaseId,e.path)}function Kh(n,e){const t=$E(e);if(t.get(1)!==n.databaseId.projectId)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(HE(t))}function WE(n,e){return Tp(n.databaseId,e)}function Ok(n){const e=$E(n);return e.length===4?st.emptyPath():HE(e)}function kd(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function HE(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function g_(n,e,t){return{name:Ad(n,e),fields:t.value.mapValue.fields}}function Dk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(y,E){return y.useProto3Json?(Be(E===void 0||typeof E=="string"),Ot.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ot.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),f=e.targetChange.cause,h=f&&function(y){const E=y.code===void 0?ee.UNKNOWN:UE(y.code);return new ve(E,y.message||"")}(f);t=new zE(i,o,a,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Kh(n,i.document.name),a=ar(i.document.updateTime),f=i.document.createTime?ar(i.document.createTime):Ae.min(),h=new Sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,a,f,h),y=i.targetIds||[],E=i.removedTargetIds||[];t=new hc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Kh(n,i.document),a=i.readTime?ar(i.readTime):Ae.min(),f=Bt.newNoDocument(o,a),h=i.removedTargetIds||[];t=new hc([],h,f.key,f)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Kh(n,i.document),a=i.removedTargetIds||[];t=new hc([],a,o,null)}else{if(!("filter"in e))return Se();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,f=new Ik(o,a),h=i.targetId;t=new jE(h,f)}}return t}function Lk(n,e){let t;if(e instanceof Sl)t={update:g_(n,e.key,e.value)};else if(e instanceof FE)t={delete:Ad(n,e.key)};else if(e instanceof Ps)t={update:g_(n,e.key,e.data),updateMask:Wk(e.fieldMask)};else{if(!(e instanceof Ek))return Se();t={verify:Ad(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,f){const h=f.transform;if(h instanceof Rc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof dl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Cc)return{fieldPath:f.field.canonicalString(),increment:h.Pe};throw Se()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:bk(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se()}(n,e.precondition)),t}function Vk(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(o,a){let f=o.updateTime?ar(o.updateTime):ar(a);return f.isEqual(Ae.min())&&(f=ar(a)),new yk(f,o.transformResults||[])}(t,e))):[]}function Mk(n,e){return{documents:[WE(n,e.path)]}}function Fk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=WE(n,o);const a=function(y){if(y.length!==0)return GE(cr.create(y,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const f=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:So(I.field),direction:zk(I.dir)}}(E))}(e.orderBy);f&&(t.structuredQuery.orderBy=f);const h=Id(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Uk(n){let e=Ok(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let a=[];t.where&&(a=function(T){const I=qE(T);return I instanceof cr&&TE(I)?I.getFilters():[I]}(t.where));let f=[];t.orderBy&&(f=function(T){return T.map(I=>function(L){return new Pc(Ao(L.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(I))}(t.orderBy));let h=null;t.limit&&(h=function(T){let I;return I=typeof T=="object"?T.value:T,Hc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,N=T.values||[];return new kc(N,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,N=T.values||[];return new kc(N,I)}(t.endAt)),rk(e,o,f,a,h,"F",p,y)}function jk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ao(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ao(t.unaryFilter.field);return _t.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ao(t.unaryFilter.field);return _t.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(Ao(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return cr.create(t.compositeFilter.filters.map(i=>qE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(n):Se()}function zk(n){return Rk[n]}function Bk(n){return Ck[n]}function $k(n){return xk[n]}function So(n){return{fieldPath:n.canonicalString()}}function Ao(n){return bt.fromServerFormat(n.fieldPath)}function GE(n){return n instanceof _t?function(t){if(t.op==="=="){if(r_(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(n_(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(r_(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(n_(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:Bk(t.op),value:t.value}}}(n):n instanceof cr?function(t){const i=t.getFilters().map(o=>GE(o));return i.length===1?i[0]:{compositeFilter:{op:$k(t.op),filters:i}}}(n):Se()}function Wk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function KE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,i,o,a=Ae.min(),f=Ae.min(),h=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.ht=e}}function qk(n){const e=Uk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Td(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.ln=new Kk}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ni.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class Kk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(st.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(41943040,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new jo(0)}static Qn(){return new jo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class Qk{constructor(e){this.Gn=e,this.buffer=new Et(__),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();__(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Yk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ko(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Go(t)}await this.Yn(3e5)})}}class Xk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Wc.oe);const i=new Qk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(y_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),y_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,a,f,h,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,h=Date.now(),this.removeTargets(e,i,t))).next(T=>(a=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),To()<=Ne.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(h-f)+`ms
	Removed ${a} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function Jk(n,e){return new Xk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.changes=new ks(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&il(i.mutation,o,Bn.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,be()).next(()=>i))}getLocalViewOfDocuments(e,t,i=be()){const o=ys();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let f=Xa();return a.forEach((h,p)=>{f=f.insert(h,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,be()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((f,h)=>{t.set(f,h)})})}computeViews(e,t,i,o){let a=$r();const f=rl(),h=function(){return rl()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ps)?a=a.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),il(E.mutation,y,E.mutation.getFieldMask(),vt.now())):f.set(y.key,Bn.empty())}),this.recalculateAndSaveOverlays(e,a).next(p=>(p.forEach((y,E)=>f.set(y,E)),t.forEach((y,E)=>{var T;return h.set(y,new eP(E,(T=f.get(y))!==null&&T!==void 0?T:null))}),h))}recalculateAndSaveOverlays(e,t){const i=rl();let o=new rt((f,h)=>f-h),a=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const h of f)h.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||Bn.empty();E=h.applyToLocalView(y,E),i.set(p,E);const T=(o.get(h.batchId)||be()).add(p);o=o.insert(h.batchId,T)})}).next(()=>{const f=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,E=p.value,T=xE();E.forEach(I=>{if(!a.has(I)){const N=VE(t.get(I),i.get(I));N!==null&&T.set(I,N),a=a.add(I)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(f)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(f){return Ee.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ik(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const f=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):G.resolve(ys());let h=-1,p=a;return f.next(y=>G.forEach(y,(E,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),a.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{p=p.insert(E,I)}))).next(()=>this.populateOverlays(e,y,a)).next(()=>this.computeViews(e,p,y,be())).next(E=>({batchId:h,changes:CE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let f=Xa();return this.indexManager.getCollectionParents(e,a).next(h=>G.forEach(h,p=>{const y=function(T,I){return new Gc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,I)=>{f=f.insert(T,I)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(f=>(a=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(f=>{a.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Bt.newInvalidDocument(E)))});let h=Xa();return f.forEach((p,y)=>{const E=a.get(p);E!==void 0&&il(E.mutation,y,Bn.empty(),vt.now()),Qc(t,y)&&(h=h.insert(p,y))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:qk(o.bundledQuery),readTime:ar(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.overlays=new rt(Ee.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return G.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.Tt(e,t,a)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),a=t.length+1,f=new Ee(t.child("")),h=this.overlays.getIteratorFrom(f);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new rt((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=a.get(y.largestBatchId);E===null&&(E=ys(),a=a.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const h=ys(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>h.set(y,E)),!(h.size()>=o)););return G.resolve(h)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const f=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(i.key,new Tk(t,i));let a=this.dr.get(t);a===void 0&&(a=be(),this.dr.set(t,a)),this.dr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.Er=new Et(kt.Ar),this.Rr=new Et(kt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new kt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new kt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new Ee(new st([])),i=new kt(t,e),o=new kt(t,e+1),a=[];return this.Rr.forEachInRange([i,o],f=>{this.gr(f),a.push(f.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Ee(new st([])),i=new kt(t,e),o=new kt(t,e+1);let a=be();return this.Rr.forEachInRange([i,o],f=>{a=a.add(f.key)}),a}containsKey(e){const t=new kt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class kt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Ee.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(kt.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new wk(a,t,i,o);this.mutationQueue.push(f);for(const h of o)this.vr=this.vr.add(new kt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return G.resolve(f)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),a=o<0?0:o;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([i,o],f=>{const h=this.Cr(f.br);a.push(h)}),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(De);return t.forEach(o=>{const a=new kt(o,0),f=new kt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,f],h=>{i=i.add(h.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;Ee.isDocumentKey(a)||(a=a.child(""));const f=new kt(new Ee(a),0);let h=new Et(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.br)),!0)},f),G.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const a=new kt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new kt(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.Nr=e,this.docs=function(){return new rt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,f=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:f}),this.size+=f-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Bt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=$r();const f=t.path,h=new Ee(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||VA(LA(E),i)<=0||(o.has(E.key)||Qc(t,E))&&(a=a.insert(E.key,E.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Se()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new aP(this)}getSize(e){return G.resolve(this.size)}}class aP extends Zk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.persistence=e,this.Lr=new ks(t=>gp(t),yp),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ip,this.targetCount=0,this.Qr=jo.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Lr.forEach((f,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Lr.delete(f),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),G.waitFor(a).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(f=>{a.push(o.markPotentiallyOrphaned(e,f))}),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Wc(0),this.Ur=!1,this.Ur=!0,this.Wr=new iP,this.referenceDelegate=e(this),this.Gr=new lP(this),this.indexManager=new Gk,this.remoteDocumentCache=function(o){return new oP(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new Hk(t),this.jr=new nP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new sP(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new uP(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(a=>this.referenceDelegate.Jr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class uP extends FA{constructor(e){super(),this.currentSequenceNumber=e}}class Sp{constructor(e){this.persistence=e,this.Zr=new Ip,this.Xr=null}static ei(e){return new Sp(e)}get ti(){if(this.Xr)return this.Xr;throw Se()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.ti.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=Ee.fromPath(i);return this.ni(e,o).next(a=>{a||t.removeEntry(o,Ae.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Nc{constructor(e,t){this.persistence=e,this.ri=new ks(i=>zA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=Jk(this,t)}static ei(e,t){return new Nc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(a=>a?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.Br(e,f=>this.ir(e,f,t).next(h=>{h||(i++,a.removeEntry(f,Ae.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=be(),o=be();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Ap(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return oI()?8:UA($t())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.Xi(e,t).next(f=>{a.result=f}).next(()=>{if(!a.result)return this.es(e,t,o,i).next(f=>{a.result=f})}).next(()=>{if(a.result)return;const f=new cP;return this.ts(e,t,f).next(h=>{if(a.result=h,this.Hi)return this.ns(e,t,f,h.size)})}).next(()=>a.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(To()<=Ne.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(To()<=Ne.DEBUG&&le("QueryEngine","Query:",Io(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(To()<=Ne.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):G.resolve())}Xi(e,t){if(a_(t))return G.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Td(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const f=be(...a);return this.Zi.getDocuments(e,f).next(h=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,h);return this.ss(t,y,f,p.readTime)?this.Xi(e,Td(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return a_(t)||o.isEqual(Ae.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(a=>{const f=this.rs(t,a);return this.ss(t,f,i,o)?G.resolve(null):(To()<=Ne.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.os(e,f,t,DA(o,-1)).next(h=>h))})}rs(e,t){let i=new Et(PE(e));return t.forEach((o,a)=>{Qc(e,a)&&(i=i.add(a))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ts(e,t,i){return To()<=Ne.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Io(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ni.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(f=>{a=a.insert(f.key,f)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(De),this.cs=new ks(a=>gp(a),yp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function dP(n,e,t,i){return new hP(n,e,t,i)}async function YE(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const f=[],h=[];let p=be();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of a){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:f,addedBatchIds:h}))})})}function pP(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,p,y,E){const T=y.batch,I=T.keys();let N=G.resolve();return I.forEach(L=>{N=N.next(()=>E.getEntry(p,L)).next($=>{const D=y.docVersions.get(L);Be(D!==null),$.version.compareTo(D)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))})}),N.next(()=>h.mutationQueue.removeMutationBatch(p,T))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let p=be();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function XE(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function mP(n,e){const t=ke(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const f=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const h=[];e.targetChanges.forEach((E,T)=>{const I=o.get(T);if(!I)return;h.push(t.Gr.removeMatchingKeys(a,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(a,E.addedDocuments,T)));let N=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(Ot.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(E.resumeToken,i)),o=o.insert(T,N),function($,D,q){return $.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(I,N,E)&&h.push(t.Gr.updateTargetData(a,N))});let p=$r(),y=be();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,E))}),h.push(gP(a,f,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(Ae.min())){const E=t.Gr.getLastRemoteSnapshotVersion(a).next(T=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,i));h.push(E)}return G.waitFor(h).next(()=>f.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,p,y)).next(()=>p)}).then(a=>(t.us=o,a))}function gP(n,e,t){let i=be(),o=be();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let f=$r();return t.forEach((h,p)=>{const y=a.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(h,p.readTime),f=f.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(h,p)):le("LocalStore","Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)}),{Is:f,ds:o}})}function yP(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function _P(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(a=>a?(o=a,G.resolve(o)):t.Gr.allocateTargetId(i).next(f=>(o=new Si(e,f,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Pd(n,e,t){const i=ke(n),o=i.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,f=>i.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!Ko(f))throw f;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${f}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function v_(n,e,t){const i=ke(n);let o=Ae.min(),a=be();return i.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const T=ke(p),I=T.cs.get(E);return I!==void 0?G.resolve(T.us.get(I)):T.Gr.getTargetData(y,E)}(i,f,or(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(f,h.targetId).next(p=>{a=p})}).next(()=>i._s.getDocumentsMatchingQuery(f,e,t?o:Ae.min(),t?a:be())).next(h=>(vP(i,ok(e),h),{documents:h,Es:a})))}function vP(n,e,t){let i=n.ls.get(e)||Ae.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.ls.set(e,i)}class E_{constructor(){this.activeTargetIds=hk()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EP{constructor(){this._o=new E_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new E_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec=null;function Qh(){return ec===null?ec=function(){return 268435456+Math.round(2147483648*Math.random())}():ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class SP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}Oo(t,i,o,a,f){const h=Qh(),p=this.No(t,i.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${h}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,a,f),this.Lo(t,p,y,o).then(E=>(le("RestConnection",`Received RPC '${t}' ${h}: `,E),E),E=>{throw Vo("RestConnection",`RPC '${t}' ${h} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,a,f,h){return this.Oo(t,i,o,a,f)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,f)=>t[f]=a),o&&o.headers.forEach((a,f)=>t[f]=a)}No(t,i){const o=TP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const a=Qh();return new Promise((f,h)=>{const p=new cE;p.setWithCredentials(!0),p.listenOnce(fE.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case lc.NO_ERROR:const E=p.getResponseJson();le(jt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(E)),f(E);break;case lc.TIMEOUT:le(jt,`RPC '${e}' ${a} timed out`),h(new ve(ee.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const T=p.getStatus();if(le(jt,`RPC '${e}' ${a} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const L=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(q)>=0?q:ee.UNKNOWN}(N.status);h(new ve(L,N.message))}else h(new ve(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new ve(ee.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{le(jt,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(o);le(jt,`RPC '${e}' ${a} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Qh(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=pE(),h=dE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=a.join("");le(jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=f.createWebChannel(E,p);let I=!1,N=!1;const L=new IP({Eo:D=>{N?le(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(I||(le(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),le(jt,`RPC '${e}' stream ${o} sending:`,D),T.send(D))},Ao:()=>T.close()}),$=(D,q,J)=>{D.listen(q,Q=>{try{J(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return $(T,Ya.EventType.OPEN,()=>{N||(le(jt,`RPC '${e}' stream ${o} transport opened.`),L.So())}),$(T,Ya.EventType.CLOSE,()=>{N||(N=!0,le(jt,`RPC '${e}' stream ${o} transport closed`),L.Do())}),$(T,Ya.EventType.ERROR,D=>{N||(N=!0,Vo(jt,`RPC '${e}' stream ${o} transport errored:`,D),L.Do(new ve(ee.UNAVAILABLE,"The operation could not be completed")))}),$(T,Ya.EventType.MESSAGE,D=>{var q;if(!N){const J=D.data[0];Be(!!J);const Q=J,oe=(Q==null?void 0:Q.error)||((q=Q[0])===null||q===void 0?void 0:q.error);if(oe){le(jt,`RPC '${e}' stream ${o} received error:`,oe);const _e=oe.status;let Te=function(k){const C=ht[k];if(C!==void 0)return UE(C)}(_e),x=oe.message;Te===void 0&&(Te=ee.INTERNAL,x="Unknown error status: "+_e+" with message "+oe.message),N=!0,L.Do(new ve(Te,x)),T.close()}else le(jt,`RPC '${e}' stream ${o} received:`,J),L.vo(J)}}),$(h,hE.STAT_EVENT,D=>{D.stat===yd.PROXY?le(jt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===yd.NOPROXY&&le(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.bo()},0),L}}function Yh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){return new Nk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,i=1e3,o=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t,i,o,a,f,h,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=a,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new JE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ve(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AP extends ZE{constructor(e,t,i,o,a,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,f),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Dk(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ae.min();const f=a.targetChange;return f.targetIds&&f.targetIds.length?Ae.min():f.readTime?ar(f.readTime):Ae.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=kd(this.serializer),t.addTarget=function(a,f){let h;const p=f.target;if(h=wd(p)?{documents:Mk(a,p)}:{query:Fk(a,p).ct},h.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){h.resumeToken=BE(a,f.resumeToken);const y=Id(a,f.expectedCount);y!==null&&(h.expectedCount=y)}else if(f.snapshotVersion.compareTo(Ae.min())>0){h.readTime=xc(a,f.snapshotVersion.toTimestamp());const y=Id(a,f.expectedCount);y!==null&&(h.expectedCount=y)}return h}(this.serializer,e);const i=jk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=kd(this.serializer),t.removeTarget=e,this.c_(t)}}class kP extends ZE{constructor(e,t,i,o,a,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,f),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Vk(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=kd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Lk(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,f])=>this.connection.Oo(e,Sd(t,i),o,a,f)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ve(ee.UNKNOWN,a.toString())})}ko(e,t,i,o,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,h])=>this.connection.ko(e,Sd(t,i),o,f,h,a)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ve(ee.UNKNOWN,f.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class RP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Br(t),this.C_=!1):le("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(f=>{i.enqueueAndForget(async()=>{Rs(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=ke(p);y.k_.add(4),await kl(y),y.K_.set("Unknown"),y.k_.delete(4),await ef(y)}(this))})}),this.K_=new RP(i,o)}}async function ef(n){if(Rs(n))for(const e of n.q_)await e(!0)}async function kl(n){for(const e of n.q_)await e(!1)}function ew(n,e){const t=ke(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Cp(t)?Rp(t):Qo(t).s_()&&Pp(t,e))}function kp(n,e){const t=ke(n),i=Qo(t);t.L_.delete(e),i.s_()&&tw(t,e),t.L_.size===0&&(i.s_()?i.a_():Rs(t)&&t.K_.set("Unknown"))}function Pp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(n).V_(e)}function tw(n,e){n.U_.xe(e),Qo(n).m_(e)}function Rp(n){n.U_=new Pk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Qo(n).start(),n.K_.F_()}function Cp(n){return Rs(n)&&!Qo(n).i_()&&n.L_.size>0}function Rs(n){return ke(n).k_.size===0}function nw(n){n.U_=void 0}async function xP(n){n.K_.set("Online")}async function NP(n){n.L_.forEach((e,t)=>{Pp(n,e)})}async function bP(n,e){nw(n),Cp(n)?(n.K_.O_(e),Rp(n)):n.K_.set("Unknown")}async function OP(n,e,t){if(n.K_.set("Online"),e instanceof zE&&e.state===2&&e.cause)try{await async function(o,a){const f=a.cause;for(const h of a.targetIds)o.L_.has(h)&&(await o.remoteSyncer.rejectListen(h,f),o.L_.delete(h),o.U_.removeTarget(h))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bc(n,i)}else if(e instanceof hc?n.U_.$e(e):e instanceof jE?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ae.min()))try{const i=await XE(n.localStore);t.compareTo(i)>=0&&await function(a,f){const h=a.U_.it(f);return h.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=a.L_.get(y);E&&a.L_.set(y,E.withResumeToken(p.resumeToken,f))}}),h.targetMismatches.forEach((p,y)=>{const E=a.L_.get(p);if(!E)return;a.L_.set(p,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),tw(a,p);const T=new Si(E.target,p,y,E.sequenceNumber);Pp(a,T)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await bc(n,i)}}async function bc(n,e,t){if(!Ko(e))throw e;n.k_.add(1),await kl(n),n.K_.set("Offline"),t||(t=()=>XE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await ef(n)})}function rw(n,e){return e().catch(t=>bc(n,t,e))}async function tf(n){const e=ke(n),t=Li(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;DP(e);)try{const o=await yP(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,LP(e,o)}catch(o){await bc(e,o)}iw(e)&&sw(e)}function DP(n){return Rs(n)&&n.B_.length<10}function LP(n,e){n.B_.push(e);const t=Li(n);t.s_()&&t.f_&&t.g_(e.mutations)}function iw(n){return Rs(n)&&!Li(n).i_()&&n.B_.length>0}function sw(n){Li(n).start()}async function VP(n){Li(n).w_()}async function MP(n){const e=Li(n);for(const t of n.B_)e.g_(t.mutations)}async function FP(n,e,t){const i=n.B_.shift(),o=Ep.from(i,e,t);await rw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await tf(n)}async function UP(n,e){e&&Li(n).f_&&await async function(i,o){if(function(f){return Sk(f)&&f!==ee.ABORTED}(o.code)){const a=i.B_.shift();Li(i).__(),await rw(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await tf(i)}}(n,e),iw(n)&&sw(n)}async function T_(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const i=Rs(t);t.k_.add(3),await kl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ef(t)}async function jP(n,e){const t=ke(n);e?(t.k_.delete(2),await ef(t)):e||(t.k_.add(2),await kl(t),t.K_.set("Unknown"))}function Qo(n){return n.W_||(n.W_=function(t,i,o){const a=ke(t);return a.b_(),new AP(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:xP.bind(null,n),mo:NP.bind(null,n),po:bP.bind(null,n),R_:OP.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Cp(n)?Rp(n):n.K_.set("Unknown")):(await n.W_.stop(),nw(n))})),n.W_}function Li(n){return n.G_||(n.G_=function(t,i,o){const a=ke(t);return a.b_(),new kP(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:VP.bind(null,n),po:UP.bind(null,n),p_:MP.bind(null,n),y_:FP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await tf(n)):(await n.G_.stop(),n.B_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const f=Date.now()+i,h=new xp(e,t,f,o,a);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Ko(n))return new ve(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ee.comparator(t.key,i.key):(t,i)=>Ee.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new bo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.z_=new rt(Ee.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Se():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class zo{constructor(e,t,i,o,a,f,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=f,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const f=[];return t.forEach(h=>{f.push({type:0,doc:h})}),new zo(e,t,bo.emptySet(t),f,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class BP{constructor(){this.queries=S_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=ke(t),a=o.queries;o.queries=S_(),a.forEach((f,h)=>{for(const p of h.J_)p.onError(i)})})(this,new ve(ee.ABORTED,"Firestore shutting down"))}}function S_(){return new ks(n=>kE(n),Kc)}async function $P(n,e){const t=ke(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Y_()&&e.Z_()&&(i=2):(a=new zP,i=e.Z_()?0:1);try{switch(i){case 0:a.H_=await t.onListen(o,!0);break;case 1:a.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const h=Np(f,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&bp(t)}async function WP(n,e){const t=ke(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const f=a.J_.indexOf(e);f>=0&&(a.J_.splice(f,1),a.J_.length===0?o=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function HP(n,e){const t=ke(n);let i=!1;for(const o of e){const a=o.query,f=t.queries.get(a);if(f){for(const h of f.J_)h.ta(o)&&(i=!0);f.H_=o}}i&&bp(t)}function qP(n,e,t){const i=ke(n),o=i.queries.get(e);if(o)for(const a of o.J_)a.onError(t);i.queries.delete(e)}function bp(n){n.X_.forEach(e=>{e.next()})}var Rd,A_;(A_=Rd||(Rd={})).na="default",A_.Cache="cache";class GP{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Rd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.key=e}}class aw{constructor(e){this.key=e}}class KP{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=PE(e),this.ma=new bo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new I_,o=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,f=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const I=o.get(E),N=Qc(this.query,T)?T:null,L=!!I&&this.mutatedKeys.has(I.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let D=!1;I&&N?I.data.isEqual(N.data)?L!==$&&(i.track({type:3,doc:N}),D=!0):this.ya(I,N)||(i.track({type:2,doc:N}),D=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(h=!0)):!I&&N?(i.track({type:0,doc:N}),D=!0):I&&!N&&(i.track({type:1,doc:I}),D=!0,(p||y)&&(h=!0)),D&&(N?(f=f.add(N),a=$?a.add(E):a.delete(E)):(f=f.delete(E),a=a.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),a=a.delete(E.key),i.track({type:1,doc:E})}return{ma:f,pa:i,ss:h,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const f=e.pa.j_();f.sort((E,T)=>function(N,L){const $=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return $(N)-$(L)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const h=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,f.length!==0||y?{snapshot:new zo(this.query,e.ma,a,f,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new I_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new aw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new ow(i))}),t}va(e){this.Ea=e.Es,this.Ra=be();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return zo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class QP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class YP{constructor(e){this.key=e,this.Fa=!1}}class XP{constructor(e,t,i,o,a,f){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=f,this.Ma={},this.xa=new ks(h=>kE(h),Kc),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(Ee.comparator),this.La=new Map,this.ka=new Ip,this.qa={},this.Qa=new Map,this.Ka=jo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function JP(n,e,t=!0){const i=dw(n);let o;const a=i.xa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Ca()):o=await lw(i,e,t,!0),o}async function ZP(n,e){const t=dw(n);await lw(t,e,!0,!1)}async function lw(n,e,t,i){const o=await _P(n.localStore,or(e)),a=o.targetId,f=n.sharedClientState.addLocalQueryTarget(a,t);let h;return i&&(h=await eR(n,e,a,f==="current",o.resumeToken)),n.isPrimaryClient&&t&&ew(n.remoteStore,o),h}async function eR(n,e,t,i,o){n.Ua=(T,I,N)=>async function($,D,q,J){let Q=D.view.ga(q);Q.ss&&(Q=await v_($.localStore,D.query,!1).then(({documents:x})=>D.view.ga(x,Q)));const oe=J&&J.targetChanges.get(D.targetId),_e=J&&J.targetMismatches.get(D.targetId)!=null,Te=D.view.applyChanges(Q,$.isPrimaryClient,oe,_e);return P_($,D.targetId,Te.ba),Te.snapshot}(n,T,I,N);const a=await v_(n.localStore,e,!0),f=new KP(e,a.Es),h=f.ga(a.documents),p=Al.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=f.applyChanges(h,n.isPrimaryClient,p);P_(n,t,y.ba);const E=new QP(e,t,f);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function tR(n,e,t){const i=ke(n),o=i.xa.get(e),a=i.Oa.get(o.targetId);if(a.length>1)return i.Oa.set(o.targetId,a.filter(f=>!Kc(f,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Pd(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&kp(i.remoteStore,o.targetId),Cd(i,o.targetId)}).catch(Go)):(Cd(i,o.targetId),await Pd(i.localStore,o.targetId,!0))}async function nR(n,e){const t=ke(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),kp(t.remoteStore,i.targetId))}async function rR(n,e,t){const i=cR(n);try{const o=await function(f,h){const p=ke(f),y=vt.now(),E=h.reduce((N,L)=>N.add(L.key),be());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let L=$r(),$=be();return p.hs.getEntries(N,E).next(D=>{L=D,L.forEach((q,J)=>{J.isValidDocument()||($=$.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,L)).next(D=>{T=D;const q=[];for(const J of h){const Q=vk(J,T.get(J.key).overlayedDocument);Q!=null&&q.push(new Ps(J.key,Q,vE(Q.value.mapValue),Mr.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,q,h)}).next(D=>{I=D;const q=D.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(N,D.batchId,q)})}).then(()=>({batchId:I.batchId,changes:CE(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(f,h,p){let y=f.qa[f.currentUser.toKey()];y||(y=new rt(De)),y=y.insert(h,p),f.qa[f.currentUser.toKey()]=y}(i,o.batchId,t),await Pl(i,o.changes),await tf(i.remoteStore)}catch(o){const a=Np(o,"Failed to persist write");t.reject(a)}}async function uw(n,e){const t=ke(n);try{const i=await mP(t.localStore,e);e.targetChanges.forEach((o,a)=>{const f=t.La.get(a);f&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Fa=!0:o.modifiedDocuments.size>0?Be(f.Fa):o.removedDocuments.size>0&&(Be(f.Fa),f.Fa=!1))}),await Pl(t,i,e)}catch(i){await Go(i)}}function k_(n,e,t){const i=ke(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((a,f)=>{const h=f.view.ea(e);h.snapshot&&o.push(h.snapshot)}),function(f,h){const p=ke(f);p.onlineState=h;let y=!1;p.queries.forEach((E,T)=>{for(const I of T.J_)I.ea(h)&&(y=!0)}),y&&bp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function iR(n,e,t){const i=ke(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),a=o&&o.key;if(a){let f=new rt(Ee.comparator);f=f.insert(a,Bt.newNoDocument(a,Ae.min()));const h=be().add(a),p=new Jc(Ae.min(),new Map,new rt(De),f,h);await uw(i,p),i.Ba=i.Ba.remove(a),i.La.delete(e),Op(i)}else await Pd(i.localStore,e,!1).then(()=>Cd(i,e,t)).catch(Go)}async function sR(n,e){const t=ke(n),i=e.batch.batchId;try{const o=await pP(t.localStore,e);fw(t,i,null),cw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Pl(t,o)}catch(o){await Go(o)}}async function oR(n,e,t){const i=ke(n);try{const o=await function(f,h){const p=ke(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,h).next(T=>(Be(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);fw(i,e,t),cw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Pl(i,o)}catch(o){await Go(o)}}function cw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function fw(n,e,t){const i=ke(n);let o=i.qa[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Cd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||hw(n,i)})}function hw(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(kp(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Op(n))}function P_(n,e,t){for(const i of t)i instanceof ow?(n.ka.addReference(i.key,e),aR(n,i)):i instanceof aw?(le("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||hw(n,i.key)):Se()}function aR(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(i),Op(n))}function Op(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new Ee(st.fromString(e)),i=n.Ka.next();n.La.set(i,new YP(t)),n.Ba=n.Ba.insert(t,i),ew(n.remoteStore,new Si(or(_p(t.path)),i,"TargetPurposeLimboResolution",Wc.oe))}}async function Pl(n,e,t){const i=ke(n),o=[],a=[],f=[];i.xa.isEmpty()||(i.xa.forEach((h,p)=>{f.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Ap.zi(p.targetId,y);a.push(T)}}))}),await Promise.all(f),i.Ma.R_(o),await async function(p,y){const E=ke(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,I=>G.forEach(I.Wi,N=>E.persistence.referenceDelegate.addReference(T,I.targetId,N)).next(()=>G.forEach(I.Gi,N=>E.persistence.referenceDelegate.removeReference(T,I.targetId,N)))))}catch(T){if(!Ko(T))throw T;le("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const N=E.us.get(I),L=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(L);E.us=E.us.insert(I,$)}}}(i.localStore,a))}async function lR(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await YE(t.localStore,e);t.currentUser=e,function(a,f){a.Qa.forEach(h=>{h.forEach(p=>{p.reject(new ve(ee.CANCELLED,f))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Pl(t,i.Ts)}}function uR(n,e){const t=ke(n),i=t.La.get(e);if(i&&i.Fa)return be().add(i.key);{let o=be();const a=t.Oa.get(e);if(!a)return o;for(const f of a){const h=t.xa.get(f);o=o.unionWith(h.view.fa)}return o}}function dw(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iR.bind(null,e),e.Ma.R_=HP.bind(null,e.eventManager),e.Ma.Wa=qP.bind(null,e.eventManager),e}function cR(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oR.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return dP(this.persistence,new fP,e.initialUser,this.serializer)}ja(e){return new QE(Sp.ei,this.serializer)}za(e){return new EP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class fR extends Oc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Be(this.persistence.referenceDelegate instanceof Nc);const i=this.persistence.referenceDelegate.garbageCollector;return new Yk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new QE(i=>Nc.ei(i,t),this.serializer)}}class xd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>k_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lR.bind(null,this.syncEngine),await jP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BP}()}createDatastore(e){const t=Zc(e.databaseInfo.databaseId),i=function(a){return new SP(a)}(e.databaseInfo);return function(a,f,h,p){return new PP(a,f,h,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,f,h){return new CP(i,o,a,f,h)}(this.localStore,this.datastore,e.asyncQueue,t=>k_(this.syncEngine,t,0),function(){return w_.p()?new w_:new wP}())}createSyncEngine(e,t){return function(o,a,f,h,p,y,E){const T=new XP(o,a,f,h,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=ke(o);le("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await kl(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xd.provider={build:()=>new xd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=gE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async f=>{le("FirestoreClient","Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(i,f=>(le("FirestoreClient","Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Np(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Xh(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await YE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function R_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pR(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>T_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>T_(e.remoteStore,o)),n._onlineComponents=e}async function pR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Vo("Error using user provided cache. Falling back to memory cache: "+t),await Xh(n,new Oc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await Xh(n,new fR(void 0));return n._offlineComponents}async function pw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await R_(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await R_(n,new xd))),n._onlineComponents}function mR(n){return pw(n).then(e=>e.syncEngine)}async function gR(n){const e=await pw(n),t=e.eventManager;return t.onListen=JP.bind(null,e.syncEngine),t.onUnlisten=tR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nR.bind(null,e.syncEngine),t}function yR(n,e,t={}){const i=new xi;return n.asyncQueue.enqueueAndForget(async()=>function(a,f,h,p,y){const E=new hR({next:I=>{E.eu(),f.enqueueAndForget(()=>WP(a,T));const N=I.docs.has(h);!N&&I.fromCache?y.reject(new ve(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&I.fromCache&&p&&p.source==="server"?y.reject(new ve(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new GP(_p(h.path),E,{includeMetadataChanges:!0,ua:!0});return $P(a,T)}(await gR(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n,e,t){if(!t)throw new ve(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vR(n,e,t,i){if(e===!0&&i===!0)throw new ve(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function x_(n){if(!Ee.isDocumentKey(n))throw new ve(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function pl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dp(n);throw new ve(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new AA;switch(i.type){case"firstParty":return new CA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ve(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=C_.get(t);i&&(le("ComponentProvider","Removing Datastore"),C_.delete(t),i.terminate())}(this),Promise.resolve()}}function ER(n,e,t,i={}){var o;const a=(n=pl(n,Lp))._getSettings(),f=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==f&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:f,ssl:!1})),i.mockUserToken){let h,p;if(typeof i.mockUserToken=="string")h=i.mockUserToken,p=zt.MOCK_USER;else{h=ZT(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ve(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new zt(y)}n._authCredentials=new kA(new mE(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vp(this.firestore,e,this._query)}}class An{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ml(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ml extends Vp{constructor(e,t,i){super(e,t,_p(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new Ee(e))}withConverter(e){return new ml(this.firestore,e,this._path)}}function gw(n,e,...t){if(n=kn(n),arguments.length===1&&(e=gE.newId()),_R("doc","path",e),n instanceof Lp){const i=st.fromString(e,...t);return x_(i),new An(n,null,new Ee(i))}{if(!(n instanceof An||n instanceof ml))throw new ve(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return x_(i),new An(n.firestore,n instanceof ml?n.converter:null,new Ee(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new JE(this,"async_queue_retry"),this.fu=()=>{const i=Yh();i&&le("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Yh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Yh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new xi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ko(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(f){let h=f.message||"";return f.stack&&(h=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),h}(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=xp.createAndSchedule(this,e,t,i,a=>this.Su(a));return this.Eu.push(o),o}pu(){this.Au&&Se()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Mp extends Lp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new b_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b_(e),this._firestoreClient=void 0,await e}}}function wR(n,e){const t=typeof n=="object"?n:Cv(),i=typeof n=="string"?n:"(default)",o=tp(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=XT("firestore");a&&ER(o,...a)}return o}function yw(n){if(n._terminated)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TR(n),n._firestoreClient}function TR(n){var e,t,i;const o=n._freezeSettings(),a=function(h,p,y,E){return new WA(h,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,mw(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new dR(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bo(Ot.fromBase64String(e))}catch(t){throw new ve(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bo(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/^__.*__$/;class SR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sl(e,this.data,t,this.fieldTransforms)}}function vw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class zp{constructor(e,t,i,o,a,f){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new zp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Dc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(vw(this.Mu)&&IR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class AR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Zc(e)}$u(e,t,i,o=!1){return new zp({Mu:e,methodName:t,Ku:i,path:bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kR(n){const e=n._freezeSettings(),t=Zc(n._databaseId);return new AR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function PR(n,e,t,i,o,a={}){const f=n.$u(a.merge||a.mergeFields?2:0,e,t,o);Iw("Data must be an object, but it was:",f,i);const h=ww(i,f);let p,y;if(a.merge)p=new Bn(f.fieldMask),y=f.fieldTransforms;else if(a.mergeFields){const E=[];for(const T of a.mergeFields){const I=RR(e,T,t);if(!f.contains(I))throw new ve(ee.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);xR(E,I)||E.push(I)}p=new Bn(E),y=f.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=f.fieldTransforms;return new SR(new Sn(h),p,y)}function Ew(n,e){if(Tw(n=kn(n)))return Iw("Unsupported field value:",e,n),ww(n,e);if(n instanceof _w)return function(i,o){if(!vw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const a=[];let f=0;for(const h of i){let p=Ew(h,o.ku(f));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),f++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=kn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return dk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=vt.fromDate(i);return{timestampValue:xc(o.serializer,a)}}if(i instanceof vt){const a=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xc(o.serializer,a)}}if(i instanceof Up)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Bo)return{bytesValue:BE(o.serializer,i._byteString)};if(i instanceof An){const a=o.databaseId,f=i.firestore._databaseId;if(!f.isEqual(a))throw o.qu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Tp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof jp)return function(f,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:f.toArray().map(p=>{if(typeof p!="number")throw h.qu("VectorValues must only contain numeric values.");return vp(h.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Dp(i)}`)}(n,e)}function ww(n,e){const t={};return yE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(n,(i,o)=>{const a=Ew(o,e.Ou(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function Tw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Up||n instanceof Bo||n instanceof An||n instanceof _w||n instanceof jp)}function Iw(n,e,t){if(!Tw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Dp(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function RR(n,e,t){if((e=kn(e))instanceof Fp)return e._internalPath;if(typeof e=="string")return Sw(n,e);throw Dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const CR=new RegExp("[~\\*/\\[\\]]");function Sw(n,e,t){if(e.search(CR)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Fp(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dc(n,e,t,i,o){const a=i&&!i.isEmpty(),f=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(a||f)&&(p+=" (found",a&&(p+=` in field ${i}`),f&&(p+=` in document ${o}`),p+=")"),new ve(ee.INVALID_ARGUMENT,h+n+p)}function xR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NR extends Aw{data(){return super.data()}}function kw(n,e){return typeof e=="string"?Sw(n,e):e instanceof Fp?e._internalPath:e._delegate._internalPath}class bR{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return As(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(f=>ut(f.doubleValue));return new jp(a)}convertGeoPoint(e){return new Up(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=qc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const t=bi(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);Be(KE(i));const o=new cl(i.get(1),i.get(3)),a=new Ee(i.popFirst(5));return o.isEqual(t)||Br(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pw extends Aw{constructor(e,t,i,o,a,f){super(e,t,i,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new LR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(kw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class LR extends Pw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(n){n=pl(n,An);const e=pl(n.firestore,Mp);return yR(yw(e),n._key).then(t=>jR(e,n,t))}class MR extends bR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,t)}}function FR(n,e,t){n=pl(n,An);const i=pl(n.firestore,Mp),o=OR(n.converter,e,t);return UR(i,[PR(kR(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Mr.none())])}function UR(n,e){return function(i,o){const a=new xi;return i.asyncQueue.enqueueAndForget(async()=>rR(await mR(i),o,a)),a.promise}(yw(n),e)}function jR(n,e,t){const i=t.docs.get(e._key),o=new MR(n);return new Pw(n,o,e._key,i,new DR(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){qo=o})(Wo),Do(new Es("firestore",(i,{instanceIdentifier:o,options:a})=>{const f=i.getProvider("app").getImmediate(),h=new Mp(new PA(i.getProvider("auth-internal")),new NA(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ve(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(y.options.projectId,E)}(f,o),f);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Ri(Yy,"4.7.6",e),Ri(Yy,"4.7.6","esm2017")})();const zR={apiKey:"AIzaSyBRTWsRqYZqc8db6Ad8ra0x1qc9xpdoZF0",authDomain:"multi-cinema.firebaseapp.com",projectId:"multi-cinema",storageBucket:"multi-cinema.firebasestorage.app",messagingSenderId:"129611887734",appId:"1:129611887734:web:114c2d1e061543c9b89b57"},Rw=Rv(zR),Bp=IA(Rw),Cw=wR(Rw),BR=new br,$R=async()=>{try{return(await b1(Bp,BR)).user}catch(n){return console.error("Ошибка при входе через Google:",n),null}},WR=async()=>{try{await h1(Bp)}catch(n){console.error("Ошибка при выходе:",n)}},HR=async(n,e)=>{try{const t=gw(Cw,"users",n);await FR(t,{likedMovies:e},{merge:!0})}catch(t){console.error("Ошибка при сохранении лайкнутых фильмов:",t)}},qR=async n=>{try{const e=gw(Cw,"users",n),t=await VR(e);return t.exists()?t.data().likedMovies:[]}catch(e){return console.error("Ошибка при загрузке лайкнутых фильмов:",e),[]}},GR=n=>{const[e,t]=W.useState([]);return W.useEffect(()=>{n&&(async()=>{const a=await qR(n.uid);t(a)})()},[n]),W.useEffect(()=>{n&&e.length>0&&HR(n.uid,e)},[e,n]),{likedMovies:e,toggleLike:o=>{e.some(a=>a.id===o.id)?t(e.filter(a=>a.id!==o.id)):t([...e,o])}}},KR=()=>{const[n,e]=W.useState(null);return W.useEffect(()=>{const t=f1(Bp,i=>{e(i)});return()=>t()},[]),{user:n}};function $p(){const[n,e]=W.useState(!0);return{isLoading:n,setIsLoading:e}}function QR(){const[n,e]=W.useState([]);return{data:n,setData:e}}function YR(){const[n,e]=W.useState("");return{filmName:n,setFilmName:e}}function XR(){const[n,e]=W.useState({});return{film:n,setFilm:e}}function JR(){const[n,e]=W.useState([]);return{collections:n,setCollections:e}}function ZR(){const[n,e]=W.useState({actual:0,all:0});return{pages:n,setPages:e}}function eC(){const[n,e]=W.useState("");return{link:n,setLink:e}}const xw=W.createContext(),tC=({children:n})=>{const{user:e}=KR(),{likedMovies:t,toggleLike:i}=GR(e),{isLoading:o,setIsLoading:a}=$p(),{data:f,setData:h}=QR(),{filmName:p,setFilmName:y}=YR(),{film:E,setFilm:T}=XR(),{collections:I,setCollections:N}=JR(),{pages:L,setPages:$}=ZR(),{link:D,setLink:q}=eC();return B.jsx(xw.Provider,{value:{user:e,likedMovies:t,toggleLike:i,isLoading:o,setIsLoading:a,data:f,setData:h,filmName:p,setFilmName:y,film:E,setFilm:T,collections:I,setCollections:N,pages:L,setPages:$,link:D,setLink:q},children:n})},hn=()=>W.useContext(xw);var Ka={},O_;function nC(){if(O_)return Ka;O_=1,Object.defineProperty(Ka,"__esModule",{value:!0}),Ka.parse=f,Ka.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function f(I,N){const L=new a,$=I.length;if($<2)return L;const D=(N==null?void 0:N.decode)||E;let q=0;do{const J=I.indexOf("=",q);if(J===-1)break;const Q=I.indexOf(";",q),oe=Q===-1?$:Q;if(J>oe){q=I.lastIndexOf(";",J-1)+1;continue}const _e=h(I,q,J),Te=p(I,J,_e),x=I.slice(_e,Te);if(L[x]===void 0){let S=h(I,J+1,oe),k=p(I,oe,S);const C=D(I.slice(S,k));L[x]=C}q=oe+1}while(q<$);return L}function h(I,N,L){do{const $=I.charCodeAt(N);if($!==32&&$!==9)return N}while(++N<L);return L}function p(I,N,L){for(;N>L;){const $=I.charCodeAt(--N);if($!==32&&$!==9)return N+1}return L}function y(I,N,L){const $=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const D=$(N);if(!e.test(D))throw new TypeError(`argument val is invalid: ${N}`);let q=I+"="+D;if(!L)return q;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);q+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);q+="; Domain="+L.domain}if(L.path){if(!i.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);q+="; Path="+L.path}if(L.expires){if(!T(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);q+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(q+="; HttpOnly"),L.secure&&(q+="; Secure"),L.partitioned&&(q+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return q}function E(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Ka}nC();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D_="popstate";function rC(n={}){function e(i,o){let{pathname:a,search:f,hash:h}=i.location;return Nd("",{pathname:a,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:gl(o)}return sC(e,t,null,n)}function nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function fr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iC(){return Math.random().toString(36).substring(2,10)}function L_(n,e){return{usr:n.state,key:n.key,idx:e}}function Nd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Yo(e):e,state:t,key:e&&e.key||i||iC()}}function gl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Yo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function sC(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,f=o.history,h="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function T(){h="POP";let D=E(),q=D==null?null:D-y;y=D,p&&p({action:h,location:$.location,delta:q})}function I(D,q){h="PUSH";let J=Nd($.location,D,q);y=E()+1;let Q=L_(J,y),oe=$.createHref(J);try{f.pushState(Q,"",oe)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(oe)}a&&p&&p({action:h,location:$.location,delta:1})}function N(D,q){h="REPLACE";let J=Nd($.location,D,q);y=E();let Q=L_(J,y),oe=$.createHref(J);f.replaceState(Q,"",oe),a&&p&&p({action:h,location:$.location,delta:0})}function L(D){let q=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof D=="string"?D:gl(D);return J=J.replace(/ $/,"%20"),nt(q,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,q)}let $={get action(){return h},get location(){return n(o,f)},listen(D){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(D_,T),p=D,()=>{o.removeEventListener(D_,T),p=null}},createHref(D){return e(o,D)},createURL:L,encodeLocation(D){let q=L(D);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:I,replace:N,go(D){return f.go(D)}};return $}function Nw(n,e,t="/"){return oC(n,e,t,!1)}function oC(n,e,t,i){let o=typeof e=="string"?Yo(e):e,a=Vi(o.pathname||"/",t);if(a==null)return null;let f=bw(n);aC(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let y=_C(a);h=gC(f[p],y,i)}return h}function bw(n,e=[],t=[],i=""){let o=(a,f,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:f,route:a};p.relativePath.startsWith("/")&&(nt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Fr([i,p.relativePath]),E=t.concat(p);a.children&&a.children.length>0&&(nt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),bw(a.children,e,E,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:pC(y,a.index),routesMeta:E})};return n.forEach((a,f)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))o(a,f);else for(let p of Ow(a.path))o(a,f,p)}),e}function Ow(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let f=Ow(i.join("/")),h=[];return h.push(...f.map(p=>p===""?a:[a,p].join("/"))),o&&h.push(...f),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function aC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:mC(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var lC=/^:[\w-]+$/,uC=3,cC=2,fC=1,hC=10,dC=-2,V_=n=>n==="*";function pC(n,e){let t=n.split("/"),i=t.length;return t.some(V_)&&(i+=dC),e&&(i+=cC),t.filter(o=>!V_(o)).reduce((o,a)=>o+(lC.test(a)?uC:a===""?fC:hC),i)}function mC(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function gC(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",f=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,E=a==="/"?e:e.slice(a.length)||"/",T=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),f.push({params:o,pathname:Fr([a,T.pathname]),pathnameBase:TC(Fr([a,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(a=Fr([a,T.pathnameBase]))}return f}function Lc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=yC(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],f=a.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},I)=>{if(E==="*"){let L=h[I]||"";f=a.slice(0,a.length-L.length).replace(/(.)\/+$/,"$1")}const N=h[I];return T&&!N?y[E]=void 0:y[E]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:f,pattern:n}}function yC(n,e=!1,t=!0){fr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function _C(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Vi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function vC(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Yo(n):n;return{pathname:t?t.startsWith("/")?t:EC(t,e):e,search:IC(i),hash:SC(o)}}function EC(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Jh(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wC(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Dw(n){let e=wC(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Lw(n,e,t,i=!1){let o;typeof n=="string"?o=Yo(n):(o={...n},nt(!o.pathname||!o.pathname.includes("?"),Jh("?","pathname","search",o)),nt(!o.pathname||!o.pathname.includes("#"),Jh("#","pathname","hash",o)),nt(!o.search||!o.search.includes("#"),Jh("#","search","hash",o)));let a=n===""||o.pathname==="",f=a?"/":o.pathname,h;if(f==null)h=t;else{let T=e.length-1;if(!i&&f.startsWith("..")){let I=f.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}h=T>=0?e[T]:"/"}let p=vC(o,h),y=f&&f!=="/"&&f.endsWith("/"),E=(a||f===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Fr=n=>n.join("/").replace(/\/\/+/g,"/"),TC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),IC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,SC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function AC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Vw=["POST","PUT","PATCH","DELETE"];new Set(Vw);var kC=["GET",...Vw];new Set(kC);var Xo=W.createContext(null);Xo.displayName="DataRouter";var nf=W.createContext(null);nf.displayName="DataRouterState";var Mw=W.createContext({isTransitioning:!1});Mw.displayName="ViewTransition";var PC=W.createContext(new Map);PC.displayName="Fetchers";var RC=W.createContext(null);RC.displayName="Await";var hr=W.createContext(null);hr.displayName="Navigation";var Rl=W.createContext(null);Rl.displayName="Location";var dr=W.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var Wp=W.createContext(null);Wp.displayName="RouteError";function CC(n,{relative:e}={}){nt(Cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(hr),{hash:o,pathname:a,search:f}=xl(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:Fr([t,a])),i.createHref({pathname:h,search:f,hash:o})}function Cl(){return W.useContext(Rl)!=null}function ji(){return nt(Cl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(Rl).location}var Fw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uw(n){W.useContext(hr).static||W.useLayoutEffect(n)}function jw(){let{isDataRoute:n}=W.useContext(dr);return n?$C():xC()}function xC(){nt(Cl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Xo),{basename:e,navigator:t}=W.useContext(hr),{matches:i}=W.useContext(dr),{pathname:o}=ji(),a=JSON.stringify(Dw(i)),f=W.useRef(!1);return Uw(()=>{f.current=!0}),W.useCallback((p,y={})=>{if(fr(f.current,Fw),!f.current)return;if(typeof p=="number"){t.go(p);return}let E=Lw(p,JSON.parse(a),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Fr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,a,o,n])}W.createContext(null);function NC(){let{matches:n}=W.useContext(dr),e=n[n.length-1];return e?e.params:{}}function xl(n,{relative:e}={}){let{matches:t}=W.useContext(dr),{pathname:i}=ji(),o=JSON.stringify(Dw(t));return W.useMemo(()=>Lw(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function bC(n,e){return zw(n,e)}function zw(n,e,t,i){var J;nt(Cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:a}=W.useContext(hr),{matches:f}=W.useContext(dr),h=f[f.length-1],p=h?h.params:{},y=h?h.pathname:"/",E=h?h.pathnameBase:"/",T=h&&h.route;{let Q=T&&T.path||"";Bw(y,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let I=ji(),N;if(e){let Q=typeof e=="string"?Yo(e):e;nt(E==="/"||((J=Q.pathname)==null?void 0:J.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=I;let L=N.pathname||"/",$=L;if(E!=="/"){let Q=E.replace(/^\//,"").split("/");$="/"+L.replace(/^\//,"").split("/").slice(Q.length).join("/")}let D=!a&&t&&t.matches&&t.matches.length>0?t.matches:Nw(n,{pathname:$});fr(T||D!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),fr(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=MC(D&&D.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:Fr([E,o.encodeLocation?o.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?E:Fr([E,o.encodeLocation?o.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),f,t,i);return e&&q?W.createElement(Rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},q):q}function OC(){let n=BC(),e=AC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:a},"ErrorBoundary")," or"," ",W.createElement("code",{style:a},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,f)}var DC=W.createElement(OC,null),LC=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(dr.Provider,{value:this.props.routeContext},W.createElement(Wp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function VC({routeContext:n,match:e,children:t}){let i=W.useContext(Xo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(dr.Provider,{value:n},t)}function MC(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let p=o.findIndex(y=>y.route.id&&(a==null?void 0:a[y.route.id])!==void 0);nt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=p),y.route.id){let{loaderData:E,errors:T}=t,I=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){f=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,I=!1,N=null,L=null;t&&(T=a&&y.route.id?a[y.route.id]:void 0,N=y.route.errorElement||DC,f&&(h<0&&E===0?(Bw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,L=null):h===E&&(I=!0,L=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,E+1)),D=()=>{let q;return T?q=N:I?q=L:y.route.Component?q=W.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,W.createElement(VC,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:q})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?W.createElement(LC,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:D(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):D()},null)}function Hp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FC(n){let e=W.useContext(Xo);return nt(e,Hp(n)),e}function UC(n){let e=W.useContext(nf);return nt(e,Hp(n)),e}function jC(n){let e=W.useContext(dr);return nt(e,Hp(n)),e}function qp(n){let e=jC(n),t=e.matches[e.matches.length-1];return nt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function zC(){return qp("useRouteId")}function BC(){var i;let n=W.useContext(Wp),e=UC("useRouteError"),t=qp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function $C(){let{router:n}=FC("useNavigate"),e=qp("useNavigate"),t=W.useRef(!1);return Uw(()=>{t.current=!0}),W.useCallback(async(o,a={})=>{fr(t.current,Fw),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var M_={};function Bw(n,e,t){!e&&!M_[n]&&(M_[n]=!0,fr(!1,t))}W.memo(WC);function WC({routes:n,future:e,state:t}){return zw(n,void 0,t,e)}function ko(n){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HC({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){nt(!Cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),h=W.useMemo(()=>({basename:f,navigator:o,static:a,future:{}}),[f,o,a]);typeof t=="string"&&(t=Yo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:I="default"}=t,N=W.useMemo(()=>{let L=Vi(p,f);return L==null?null:{location:{pathname:L,search:y,hash:E,state:T,key:I},navigationType:i}},[f,p,y,E,T,I,i]);return fr(N!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:W.createElement(hr.Provider,{value:h},W.createElement(Rl.Provider,{children:e,value:N}))}function qC({children:n,location:e}){return bC(bd(n),e)}function bd(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let a=[...e,o];if(i.type===W.Fragment){t.push.apply(t,bd(i.props.children,a));return}nt(i.type===ko,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let f={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(f.children=bd(i.props.children,a)),t.push(f)}),t}var dc="get",pc="application/x-www-form-urlencoded";function rf(n){return n!=null&&typeof n.tagName=="string"}function GC(n){return rf(n)&&n.tagName.toLowerCase()==="button"}function KC(n){return rf(n)&&n.tagName.toLowerCase()==="form"}function QC(n){return rf(n)&&n.tagName.toLowerCase()==="input"}function YC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function XC(n,e){return n.button===0&&(!e||e==="_self")&&!YC(n)}var tc=null;function JC(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var ZC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zh(n){return n!=null&&!ZC.has(n)?(fr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pc}"`),null):n}function ex(n,e){let t,i,o,a,f;if(KC(n)){let h=n.getAttribute("action");i=h?Vi(h,e):null,t=n.getAttribute("method")||dc,o=Zh(n.getAttribute("enctype"))||pc,a=new FormData(n)}else if(GC(n)||QC(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(i=p?Vi(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||dc,o=Zh(n.getAttribute("formenctype"))||Zh(h.getAttribute("enctype"))||pc,a=new FormData(h,n),!JC()){let{name:y,type:E,value:T}=n;if(E==="image"){let I=y?`${y}.`:"";a.append(`${I}x`,"0"),a.append(`${I}y`,"0")}else y&&a.append(y,T)}}else{if(rf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=dc,i=null,o=pc,f=n}return a&&o==="text/plain"&&(f=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:f}}function Gp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function tx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function rx(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let f=await tx(a,t);return f.links?f.links():[]}return[]}));return ax(i.flat(1).filter(nx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function F_(n,e,t,i,o,a){let f=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,h=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,y)=>f(p,y)||h(p,y)):a==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||h(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function ix(n,e,{includeHydrateFallback:t}={}){return sx(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function sx(n){return[...new Set(n)]}function ox(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function ax(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(ox(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function lx(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ux(){let n=W.useContext(Xo);return Gp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function cx(){let n=W.useContext(nf);return Gp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Kp=W.createContext(void 0);Kp.displayName="FrameworkContext";function $w(){let n=W.useContext(Kp);return Gp(n,"You must render this element inside a <HydratedRouter> element"),n}function fx(n,e){let t=W.useContext(Kp),[i,o]=W.useState(!1),[a,f]=W.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,I=W.useRef(null);W.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let $=q=>{q.forEach(J=>{f(J.isIntersecting)})},D=new IntersectionObserver($,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[n]),W.useEffect(()=>{if(i){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[i]);let N=()=>{o(!0)},L=()=>{o(!1),f(!1)};return t?n!=="intent"?[a,I,{}]:[a,I,{onFocus:Qa(h,N),onBlur:Qa(p,L),onMouseEnter:Qa(y,N),onMouseLeave:Qa(E,L),onTouchStart:Qa(T,N)}]:[!1,I,{}]}function Qa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function hx({page:n,...e}){let{router:t}=ux(),i=W.useMemo(()=>Nw(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(px,{page:n,matches:i,...e}):null}function dx(n){let{manifest:e,routeModules:t}=$w(),[i,o]=W.useState([]);return W.useEffect(()=>{let a=!1;return rx(n,e,t).then(f=>{a||o(f)}),()=>{a=!0}},[n,e,t]),i}function px({page:n,matches:e,...t}){let i=ji(),{manifest:o,routeModules:a}=$w(),{loaderData:f,matches:h}=cx(),p=W.useMemo(()=>F_(n,e,h,o,i,"data"),[n,e,h,o,i]),y=W.useMemo(()=>F_(n,e,h,o,i,"assets"),[n,e,h,o,i]),E=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,L=!1;if(e.forEach(D=>{var J;let q=o.routes[D.route.id];!q||!q.hasLoader||(!p.some(Q=>Q.route.id===D.route.id)&&D.route.id in f&&((J=a[D.route.id])!=null&&J.shouldRevalidate)||q.hasClientLoader?L=!0:N.add(D.route.id))}),N.size===0)return[];let $=lx(n);return L&&N.size>0&&$.searchParams.set("_routes",e.filter(D=>N.has(D.route.id)).map(D=>D.route.id).join(",")),[$.pathname+$.search]},[f,i,o,p,e,n,a]),T=W.useMemo(()=>ix(y,o),[y,o]),I=dx(y);return W.createElement(W.Fragment,null,E.map(N=>W.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),T.map(N=>W.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),I.map(({key:N,link:L})=>W.createElement("link",{key:N,...L})))}function mx(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Ww=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ww&&(window.__reactRouterVersion="7.2.0")}catch{}function gx({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=rC({window:t,v5Compat:!0}));let o=i.current,[a,f]=W.useState({action:o.action,location:o.location}),h=W.useCallback(p=>{W.startTransition(()=>f(p))},[f]);return W.useLayoutEffect(()=>o.listen(h),[o,h]),W.createElement(HC,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var Hw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ai=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:f,state:h,target:p,to:y,preventScrollReset:E,viewTransition:T,...I},N){let{basename:L}=W.useContext(hr),$=typeof y=="string"&&Hw.test(y),D,q=!1;if(typeof y=="string"&&$&&(D=y,Ww))try{let k=new URL(window.location.href),C=y.startsWith("//")?new URL(k.protocol+y):new URL(y),O=Vi(C.pathname,L);C.origin===k.origin&&O!=null?y=O+C.search+C.hash:q=!0}catch{fr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=CC(y,{relative:o}),[Q,oe,_e]=fx(i,I),Te=Ex(y,{replace:f,state:h,target:p,preventScrollReset:E,relative:o,viewTransition:T});function x(k){e&&e(k),k.defaultPrevented||Te(k)}let S=W.createElement("a",{...I,..._e,href:D||J,onClick:q||a?e:x,ref:mx(N,oe),target:p,"data-discover":!$&&t==="render"?"true":void 0});return Q&&!$?W.createElement(W.Fragment,null,S,W.createElement(hx,{page:J})):S});Ai.displayName="Link";var yx=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:f,viewTransition:h,children:p,...y},E){let T=xl(f,{relative:y.relative}),I=ji(),N=W.useContext(nf),{navigator:L,basename:$}=W.useContext(hr),D=N!=null&&Ax(T)&&h===!0,q=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,J=I.pathname,Q=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,q=q.toLowerCase()),Q&&$&&(Q=Vi(Q,$)||Q);const oe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let _e=J===q||!o&&J.startsWith(q)&&J.charAt(oe)==="/",Te=Q!=null&&(Q===q||!o&&Q.startsWith(q)&&Q.charAt(q.length)==="/"),x={isActive:_e,isPending:Te,isTransitioning:D},S=_e?e:void 0,k;typeof i=="function"?k=i(x):k=[i,_e?"active":null,Te?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let C=typeof a=="function"?a(x):a;return W.createElement(Ai,{...y,"aria-current":S,className:k,ref:E,style:C,to:f,viewTransition:h},typeof p=="function"?p(x):p)});yx.displayName="NavLink";var _x=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:f=dc,action:h,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...I},N)=>{let L=Ix(),$=Sx(h,{relative:y}),D=f.toLowerCase()==="get"?"get":"post",q=typeof h=="string"&&Hw.test(h),J=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let oe=Q.nativeEvent.submitter,_e=(oe==null?void 0:oe.getAttribute("formmethod"))||f;L(oe||Q.currentTarget,{fetcherKey:e,method:_e,navigate:t,replace:o,state:a,relative:y,preventScrollReset:E,viewTransition:T})};return W.createElement("form",{ref:N,method:D,action:$,onSubmit:i?p:J,...I,"data-discover":!q&&n==="render"?"true":void 0})});_x.displayName="Form";function vx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qw(n){let e=W.useContext(Xo);return nt(e,vx(n)),e}function Ex(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:f}={}){let h=jw(),p=ji(),y=xl(n,{relative:a});return W.useCallback(E=>{if(XC(E,e)){E.preventDefault();let T=t!==void 0?t:gl(p)===gl(y);h(n,{replace:T,state:i,preventScrollReset:o,relative:a,viewTransition:f})}},[p,h,y,t,i,e,n,o,a,f])}var wx=0,Tx=()=>`__${String(++wx)}__`;function Ix(){let{router:n}=qw("useSubmit"),{basename:e}=W.useContext(hr),t=zC();return W.useCallback(async(i,o={})=>{let{action:a,method:f,encType:h,formData:p,body:y}=ex(i,e);if(o.navigate===!1){let E=o.fetcherKey||Tx();await n.fetch(E,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function Sx(n,{relative:e}={}){let{basename:t}=W.useContext(hr),i=W.useContext(dr);nt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...xl(n||".",{relative:e})},f=ji();if(n==null){a.search=f.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(E=>E==="")){h.delete("index"),p.filter(T=>T).forEach(T=>h.append("index",T));let E=h.toString();a.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Fr([t,a.pathname])),gl(a)}function Ax(n,e={}){let t=W.useContext(Mw);nt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=qw("useViewTransitionState"),o=xl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Vi(t.currentLocation.pathname,i)||t.currentLocation.pathname,f=Vi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Lc(o.pathname,f)!=null||Lc(o.pathname,a)!=null}new TextEncoder;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function kx(n,e,t){return(e=Rx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function U_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function te(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?U_(Object(t),!0).forEach(function(i){kx(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Px(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Rx(n){var e=Px(n,"string");return typeof e=="symbol"?e:e+""}const j_=()=>{};let Qp={},Gw={},Kw=null,Qw={mark:j_,measure:j_};try{typeof window<"u"&&(Qp=window),typeof document<"u"&&(Gw=document),typeof MutationObserver<"u"&&(Kw=MutationObserver),typeof performance<"u"&&(Qw=performance)}catch{}const{userAgent:z_=""}=Qp.navigator||{},Mi=Qp,Xe=Gw,B_=Kw,nc=Qw;Mi.document;const Gr=!!Xe.documentElement&&!!Xe.head&&typeof Xe.addEventListener=="function"&&typeof Xe.createElement=="function",Yw=~z_.indexOf("MSIE")||~z_.indexOf("Trident/");var Cx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Nx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Jw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Wt="classic",sf="duotone",bx="sharp",Ox="sharp-duotone",Zw=[Wt,sf,bx,Ox],Dx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Lx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Vx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Mx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Fx=["fak","fa-kit","fakd","fa-kit-duotone"],$_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ux=["kit"],jx={kit:{"fa-kit":"fak"}},zx=["fak","fakd"],Bx={kit:{fak:"fa-kit"}},W_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$x=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Wx=["fak","fa-kit","fakd","fa-kit-duotone"],Hx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},qx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Gx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Od={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Kx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Dd=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...$x,...Kx],Qx=["solid","regular","light","thin","duotone","brands"],e0=[1,2,3,4,5,6,7,8,9,10],Yx=e0.concat([11,12,13,14,15,16,17,18,19,20]),Xx=[...Object.keys(Gx),...Qx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rc.GROUP,rc.SWAP_OPACITY,rc.PRIMARY,rc.SECONDARY].concat(e0.map(n=>"".concat(n,"x"))).concat(Yx.map(n=>"w-".concat(n))),Jx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Wr="___FONT_AWESOME___",Ld=16,t0="fa",n0="svg-inline--fa",Is="data-fa-i2svg",Vd="data-fa-pseudo-element",Zx="data-fa-pseudo-element-pending",Yp="data-prefix",Xp="data-icon",H_="fontawesome-i2svg",eN="async",tN=["HTML","HEAD","STYLE","SCRIPT"],r0=(()=>{try{return!0}catch{return!1}})();function Nl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Wt]}})}const i0=te({},Xw);i0[Wt]=te(te(te(te({},{"fa-duotone":"duotone"}),Xw[Wt]),$_.kit),$_["kit-duotone"]);const nN=Nl(i0),Md=te({},Mx);Md[Wt]=te(te(te(te({},{duotone:"fad"}),Md[Wt]),W_.kit),W_["kit-duotone"]);const q_=Nl(Md),Fd=te({},Od);Fd[Wt]=te(te({},Fd[Wt]),Bx.kit);const Jp=Nl(Fd),Ud=te({},qx);Ud[Wt]=te(te({},Ud[Wt]),jx.kit);Nl(Ud);const rN=Cx,s0="fa-layers-text",iN=xx,sN=te({},Dx);Nl(sN);const oN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ed=Nx,aN=[...Ux,...Xx],sl=Mi.FontAwesomeConfig||{};function lN(n){var e=Xe.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function uN(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Xe&&typeof Xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const o=uN(lN(t));o!=null&&(sl[i]=o)});const o0={styleDefault:"solid",familyDefault:Wt,cssPrefix:t0,replacementClass:n0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sl.familyPrefix&&(sl.cssPrefix=sl.familyPrefix);const $o=te(te({},o0),sl);$o.autoReplaceSvg||($o.observeMutations=!1);const de={};Object.keys(o0).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){$o[n]=e,ol.forEach(t=>t(de))},get:function(){return $o[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){$o.cssPrefix=n,ol.forEach(e=>e(de))},get:function(){return $o.cssPrefix}});Mi.FontAwesomeConfig=de;const ol=[];function cN(n){return ol.push(n),()=>{ol.splice(ol.indexOf(n),1)}}const Ei=Ld,rr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fN(n){if(!n||!Gr)return;const e=Xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=Xe.head.childNodes;let i=null;for(let o=t.length-1;o>-1;o--){const a=t[o],f=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(i=a)}return Xe.head.insertBefore(e,i),n}const hN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yl(){let n=12,e="";for(;n-- >0;)e+=hN[Math.random()*62|0];return e}function Jo(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Zp(n){return n.classList?Jo(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function a0(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dN(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(a0(n[t]),'" '),"").trim()}function of(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function em(n){return n.size!==rr.size||n.x!==rr.x||n.y!==rr.y||n.rotate!==rr.rotate||n.flipX||n.flipY}function pN(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const o={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(a," ").concat(f," ").concat(h)},y={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:p,path:y}}function mN(n){let{transform:e,width:t=Ld,height:i=Ld,startCentered:o=!1}=n,a="";return o&&Yw?a+="translate(".concat(e.x/Ei-t/2,"em, ").concat(e.y/Ei-i/2,"em) "):o?a+="translate(calc(-50% + ".concat(e.x/Ei,"em), calc(-50% + ").concat(e.y/Ei,"em)) "):a+="translate(".concat(e.x/Ei,"em, ").concat(e.y/Ei,"em) "),a+="scale(".concat(e.size/Ei*(e.flipX?-1:1),", ").concat(e.size/Ei*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var gN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function l0(){const n=t0,e=n0,t=de.cssPrefix,i=de.replacementClass;let o=gN;if(t!==n||i!==e){const a=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(a,".".concat(t,"-")).replace(f,"--".concat(t,"-")).replace(h,".".concat(i))}return o}let G_=!1;function td(){de.autoAddCss&&!G_&&(fN(l0()),G_=!0)}var yN={mixout(){return{dom:{css:l0,insertCss:td}}},hooks(){return{beforeDOMElementCreation(){td()},beforeI2svg(){td()}}}};const Hr=Mi||{};Hr[Wr]||(Hr[Wr]={});Hr[Wr].styles||(Hr[Wr].styles={});Hr[Wr].hooks||(Hr[Wr].hooks={});Hr[Wr].shims||(Hr[Wr].shims=[]);var ir=Hr[Wr];const u0=[],c0=function(){Xe.removeEventListener("DOMContentLoaded",c0),Vc=1,u0.map(n=>n())};let Vc=!1;Gr&&(Vc=(Xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xe.readyState),Vc||Xe.addEventListener("DOMContentLoaded",c0));function _N(n){Gr&&(Vc?setTimeout(n,0):u0.push(n))}function bl(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?a0(n):"<".concat(e," ").concat(dN(t),">").concat(i.map(bl).join(""),"</").concat(e,">")}function K_(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var nd=function(e,t,i,o){var a=Object.keys(e),f=a.length,h=t,p,y,E;for(i===void 0?(p=1,E=e[a[0]]):(p=0,E=i);p<f;p++)y=a[p],E=h(E,e[y],y,e);return E};function vN(n){const e=[];let t=0;const i=n.length;for(;t<i;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<i){const a=n.charCodeAt(t++);(a&64512)==56320?e.push(((o&1023)<<10)+(a&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function jd(n){const e=vN(n);return e.length===1?e[0].toString(16):null}function EN(n,e){const t=n.length;let i=n.charCodeAt(e),o;return i>=55296&&i<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function Q_(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function zd(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,o=Q_(e);typeof ir.hooks.addPack=="function"&&!i?ir.hooks.addPack(n,Q_(e)):ir.styles[n]=te(te({},ir.styles[n]||{}),o),n==="fas"&&zd("fa",e)}const{styles:_l,shims:wN}=ir,f0=Object.keys(Jp),TN=f0.reduce((n,e)=>(n[e]=Object.keys(Jp[e]),n),{});let tm=null,h0={},d0={},p0={},m0={},g0={};function IN(n){return~aN.indexOf(n)}function SN(n,e){const t=e.split("-"),i=t[0],o=t.slice(1).join("-");return i===n&&o!==""&&!IN(o)?o:null}const y0=()=>{const n=i=>nd(_l,(o,a,f)=>(o[f]=nd(a,i,{}),o),{});h0=n((i,o,a)=>(o[3]&&(i[o[3]]=a),o[2]&&o[2].filter(h=>typeof h=="number").forEach(h=>{i[h.toString(16)]=a}),i)),d0=n((i,o,a)=>(i[a]=a,o[2]&&o[2].filter(h=>typeof h=="string").forEach(h=>{i[h]=a}),i)),g0=n((i,o,a)=>{const f=o[2];return i[a]=a,f.forEach(h=>{i[h]=a}),i});const e="far"in _l||de.autoFetchSvg,t=nd(wN,(i,o)=>{const a=o[0];let f=o[1];const h=o[2];return f==="far"&&!e&&(f="fas"),typeof a=="string"&&(i.names[a]={prefix:f,iconName:h}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:f,iconName:h}),i},{names:{},unicodes:{}});p0=t.names,m0=t.unicodes,tm=af(de.styleDefault,{family:de.familyDefault})};cN(n=>{tm=af(n.styleDefault,{family:de.familyDefault})});y0();function nm(n,e){return(h0[n]||{})[e]}function AN(n,e){return(d0[n]||{})[e]}function _s(n,e){return(g0[n]||{})[e]}function _0(n){return p0[n]||{prefix:null,iconName:null}}function kN(n){const e=m0[n],t=nm("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Fi(){return tm}const v0=()=>({prefix:null,iconName:null,rest:[]});function PN(n){let e=Wt;const t=f0.reduce((i,o)=>(i[o]="".concat(de.cssPrefix,"-").concat(o),i),{});return Zw.forEach(i=>{(n.includes(t[i])||n.some(o=>TN[i].includes(o)))&&(e=i)}),e}function af(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Wt}=e,i=nN[t][n];if(t===sf&&!n)return"fad";const o=q_[t][n]||q_[t][i],a=n in ir.styles?n:null;return o||a||null}function RN(n){let e=[],t=null;return n.forEach(i=>{const o=SN(de.cssPrefix,i);o?t=o:i&&e.push(i)}),{iconName:t,rest:e}}function Y_(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function lf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const o=Dd.concat(Wx),a=Y_(n.filter(T=>o.includes(T))),f=Y_(n.filter(T=>!Dd.includes(T))),h=a.filter(T=>(i=T,!Jw.includes(T))),[p=null]=h,y=PN(a),E=te(te({},RN(f)),{},{prefix:af(p,{family:y})});return te(te(te({},E),bN({values:n,family:y,styles:_l,config:de,canonical:E,givenPrefix:i})),CN(t,i,E))}function CN(n,e,t){let{prefix:i,iconName:o}=t;if(n||!i||!o)return{prefix:i,iconName:o};const a=e==="fa"?_0(o):{},f=_s(i,o);return o=a.iconName||f||o,i=a.prefix||i,i==="far"&&!_l.far&&_l.fas&&!de.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const xN=Zw.filter(n=>n!==Wt||n!==sf),NN=Object.keys(Od).filter(n=>n!==Wt).map(n=>Object.keys(Od[n])).flat();function bN(n){const{values:e,family:t,canonical:i,givenPrefix:o="",styles:a={},config:f={}}=n,h=t===sf,p=e.includes("fa-duotone")||e.includes("fad"),y=f.familyDefault==="duotone",E=i.prefix==="fad"||i.prefix==="fa-duotone";if(!h&&(p||y||E)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&xN.includes(t)&&(Object.keys(a).find(I=>NN.includes(I))||f.autoFetchSvg)){const I=Vx.get(t).defaultShortPrefixId;i.prefix=I,i.iconName=_s(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=Fi()||"fas"),i}class ON{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(a=>{this.definitions[a]=te(te({},this.definitions[a]||{}),o[a]),zd(a,o[a]);const f=Jp[Wt][a];f&&zd(f,o[a]),y0()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(o=>{const{prefix:a,iconName:f,icon:h}=i[o],p=h[2];e[a]||(e[a]={}),p.length>0&&p.forEach(y=>{typeof y=="string"&&(e[a][y]=h)}),e[a][f]=h}),e}}let X_=[],Po={};const Oo={},DN=Object.keys(Oo);function LN(n,e){let{mixoutsTo:t}=e;return X_=n,Po={},Object.keys(Oo).forEach(i=>{DN.indexOf(i)===-1&&delete Oo[i]}),X_.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(a=>{typeof o[a]=="function"&&(t[a]=o[a]),typeof o[a]=="object"&&Object.keys(o[a]).forEach(f=>{t[a]||(t[a]={}),t[a][f]=o[a][f]})}),i.hooks){const a=i.hooks();Object.keys(a).forEach(f=>{Po[f]||(Po[f]=[]),Po[f].push(a[f])})}i.provides&&i.provides(Oo)}),t}function Bd(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];return(Po[n]||[]).forEach(f=>{e=f.apply(null,[e,...i])}),e}function Ss(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Po[n]||[]).forEach(a=>{a.apply(null,t)})}function Ui(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oo[n]?Oo[n].apply(null,e):void 0}function $d(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Fi();if(e)return e=_s(t,e)||e,K_(E0.definitions,t,e)||K_(ir.styles,t,e)}const E0=new ON,VN=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,Ss("noAuto")},MN={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gr?(Ss("beforeI2svg",n),Ui("pseudoElements2svg",n),Ui("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,_N(()=>{UN({autoReplaceSvgRoot:e}),Ss("watch",n)})}},FN={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:_s(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=af(n[0]);return{prefix:t,iconName:_s(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(rN))){const e=lf(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Fi(),iconName:_s(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Fi();return{prefix:e,iconName:_s(e,n)||n}}}},dn={noAuto:VN,config:de,dom:MN,parse:FN,library:E0,findIconDefinition:$d,toHtml:bl},UN=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Xe}=n;(Object.keys(ir.styles).length>0||de.autoFetchSvg)&&Gr&&de.autoReplaceSvg&&dn.dom.i2svg({node:e})};function uf(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>bl(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Gr)return;const t=Xe.createElement("div");return t.innerHTML=n.html,t.children}}),n}function jN(n){let{children:e,main:t,mask:i,attributes:o,styles:a,transform:f}=n;if(em(f)&&t.found&&!i.found){const{width:h,height:p}=t,y={x:h/p/2,y:.5};o.style=of(te(te({},a),{},{"transform-origin":"".concat(y.x+f.x/16,"em ").concat(y.y+f.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function zN(n){let{prefix:e,iconName:t,children:i,attributes:o,symbol:a}=n;const f=a===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},o),{},{id:f}),children:i}]}]}function rm(n){const{icons:{main:e,mask:t},prefix:i,iconName:o,transform:a,symbol:f,title:h,maskId:p,titleId:y,extra:E,watchable:T=!1}=n,{width:I,height:N}=t.found?t:e,L=zx.includes(i),$=[de.replacementClass,o?"".concat(de.cssPrefix,"-").concat(o):""].filter(_e=>E.classes.indexOf(_e)===-1).filter(_e=>_e!==""||!!_e).concat(E.classes).join(" ");let D={children:[],attributes:te(te({},E.attributes),{},{"data-prefix":i,"data-icon":o,class:$,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})};const q=L&&!~E.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};T&&(D.attributes[Is]=""),h&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(y||yl())},children:[h]}),delete D.attributes.title);const J=te(te({},D),{},{prefix:i,iconName:o,main:e,mask:t,maskId:p,transform:a,symbol:f,styles:te(te({},q),E.styles)}),{children:Q,attributes:oe}=t.found&&e.found?Ui("generateAbstractMask",J)||{children:[],attributes:{}}:Ui("generateAbstractIcon",J)||{children:[],attributes:{}};return J.children=Q,J.attributes=oe,f?zN(J):jN(J)}function J_(n){const{content:e,width:t,height:i,transform:o,title:a,extra:f,watchable:h=!1}=n,p=te(te(te({},f.attributes),a?{title:a}:{}),{},{class:f.classes.join(" ")});h&&(p[Is]="");const y=te({},f.styles);em(o)&&(y.transform=mN({transform:o,startCentered:!0,width:t,height:i}),y["-webkit-transform"]=y.transform);const E=of(y);E.length>0&&(p.style=E);const T=[];return T.push({tag:"span",attributes:p,children:[e]}),a&&T.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),T}function BN(n){const{content:e,title:t,extra:i}=n,o=te(te(te({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),a=of(i.styles);a.length>0&&(o.style=a);const f=[];return f.push({tag:"span",attributes:o,children:[e]}),t&&f.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),f}const{styles:rd}=ir;function Wd(n){const e=n[0],t=n[1],[i]=n.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(ed.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(ed.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(ed.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:o}}const $N={found:!1,width:512,height:512};function WN(n,e){!r0&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Hd(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=Fi()),new Promise((i,o)=>{if(t==="fa"){const a=_0(n)||{};n=a.iconName||n,e=a.prefix||e}if(n&&e&&rd[e]&&rd[e][n]){const a=rd[e][n];return i(Wd(a))}WN(n,e),i(te(te({},$N),{},{icon:de.showMissingIcons&&n?Ui("missingIconAbstract")||{}:{}}))})}const Z_=()=>{},qd=de.measurePerformance&&nc&&nc.mark&&nc.measure?nc:{mark:Z_,measure:Z_},Za='FA "6.7.2"',HN=n=>(qd.mark("".concat(Za," ").concat(n," begins")),()=>w0(n)),w0=n=>{qd.mark("".concat(Za," ").concat(n," ends")),qd.measure("".concat(Za," ").concat(n),"".concat(Za," ").concat(n," begins"),"".concat(Za," ").concat(n," ends"))};var im={begin:HN,end:w0};const mc=()=>{};function ev(n){return typeof(n.getAttribute?n.getAttribute(Is):null)=="string"}function qN(n){const e=n.getAttribute?n.getAttribute(Yp):null,t=n.getAttribute?n.getAttribute(Xp):null;return e&&t}function GN(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function KN(){return de.autoReplaceSvg===!0?gc.replace:gc[de.autoReplaceSvg]||gc.replace}function QN(n){return Xe.createElementNS("http://www.w3.org/2000/svg",n)}function YN(n){return Xe.createElement(n)}function T0(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?QN:YN}=e;if(typeof n=="string")return Xe.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(a){i.setAttribute(a,n.attributes[a])}),(n.children||[]).forEach(function(a){i.appendChild(T0(a,{ceFn:t}))}),i}function XN(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const gc={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(T0(t),e)}),e.getAttribute(Is)===null&&de.keepOriginalSource){let t=Xe.createComment(XN(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Zp(e).indexOf(de.replacementClass))return gc.replace(n);const i=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const a=t[0].attributes.class.split(" ").reduce((f,h)=>(h===de.replacementClass||h.match(i)?f.toSvg.push(h):f.toNode.push(h),f),{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}const o=t.map(a=>bl(a)).join(`
`);e.setAttribute(Is,""),e.innerHTML=o}};function tv(n){n()}function I0(n,e){const t=typeof e=="function"?e:mc;if(n.length===0)t();else{let i=tv;de.mutateApproach===eN&&(i=Mi.requestAnimationFrame||tv),i(()=>{const o=KN(),a=im.begin("mutate");n.map(o),a(),t()})}}let sm=!1;function S0(){sm=!0}function Gd(){sm=!1}let Mc=null;function nv(n){if(!B_||!de.observeMutations)return;const{treeCallback:e=mc,nodeCallback:t=mc,pseudoElementsCallback:i=mc,observeMutationsRoot:o=Xe}=n;Mc=new B_(a=>{if(sm)return;const f=Fi();Jo(a).forEach(h=>{if(h.type==="childList"&&h.addedNodes.length>0&&!ev(h.addedNodes[0])&&(de.searchPseudoElements&&i(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&de.searchPseudoElements&&i(h.target.parentNode),h.type==="attributes"&&ev(h.target)&&~oN.indexOf(h.attributeName))if(h.attributeName==="class"&&qN(h.target)){const{prefix:p,iconName:y}=lf(Zp(h.target));h.target.setAttribute(Yp,p||f),y&&h.target.setAttribute(Xp,y)}else GN(h.target)&&t(h.target)})}),Gr&&Mc.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function JN(){Mc&&Mc.disconnect()}function ZN(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,o)=>{const a=o.split(":"),f=a[0],h=a.slice(1);return f&&h.length>0&&(i[f]=h.join(":").trim()),i},{})),t}function e2(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let o=lf(Zp(n));return o.prefix||(o.prefix=Fi()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=AN(o.prefix,n.innerText)||nm(o.prefix,jd(n.innerText))),!o.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function t2(n){const e=Jo(n.attributes).reduce((o,a)=>(o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(i||yl()):(e["aria-hidden"]="true",e.focusable="false")),e}function n2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:o}=e2(n),a=t2(n),f=Bd("parseNodeAttributes",{},n);let h=e.styleParser?ZN(n):[];return te({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:rr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:h,attributes:a}},f)}const{styles:r2}=ir;function A0(n){const e=de.autoReplaceSvg==="nest"?rv(n,{styleParser:!1}):rv(n);return~e.extra.classes.indexOf(s0)?Ui("generateLayersText",n,e):Ui("generateSvgReplacementMutation",n,e)}function i2(){return[...Fx,...Dd]}function iv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gr)return Promise.resolve();const t=Xe.documentElement.classList,i=E=>t.add("".concat(H_,"-").concat(E)),o=E=>t.remove("".concat(H_,"-").concat(E)),a=de.autoFetchSvg?i2():Jw.concat(Object.keys(r2));a.includes("fa")||a.push("fa");const f=[".".concat(s0,":not([").concat(Is,"])")].concat(a.map(E=>".".concat(E,":not([").concat(Is,"])"))).join(", ");if(f.length===0)return Promise.resolve();let h=[];try{h=Jo(n.querySelectorAll(f))}catch{}if(h.length>0)i("pending"),o("complete");else return Promise.resolve();const p=im.begin("onTree"),y=h.reduce((E,T)=>{try{const I=A0(T);I&&E.push(I)}catch(I){r0||I.name==="MissingIcon"&&console.error(I)}return E},[]);return new Promise((E,T)=>{Promise.all(y).then(I=>{I0(I,()=>{i("active"),i("complete"),o("pending"),typeof e=="function"&&e(),p(),E()})}).catch(I=>{p(),T(I)})})}function s2(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A0(n).then(t=>{t&&I0([t],e)})}function o2(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:$d(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:$d(o||{})),n(i,te(te({},t),{},{mask:o}))}}const a2=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=rr,symbol:i=!1,mask:o=null,maskId:a=null,title:f=null,titleId:h=null,classes:p=[],attributes:y={},styles:E={}}=e;if(!n)return;const{prefix:T,iconName:I,icon:N}=n;return uf(te({type:"icon"},n),()=>(Ss("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(f?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(h||yl()):(y["aria-hidden"]="true",y.focusable="false")),rm({icons:{main:Wd(N),mask:o?Wd(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:I,transform:te(te({},rr),t),symbol:i,title:f,maskId:a,titleId:h,extra:{attributes:y,styles:E,classes:p}})))};var l2={mixout(){return{icon:o2(a2)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=iv,n.nodeCallback=s2,n}}},provides(n){n.i2svg=function(e){const{node:t=Xe,callback:i=()=>{}}=e;return iv(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:o,titleId:a,prefix:f,transform:h,symbol:p,mask:y,maskId:E,extra:T}=t;return new Promise((I,N)=>{Promise.all([Hd(i,f),y.iconName?Hd(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(L=>{let[$,D]=L;I([e,rm({icons:{main:$,mask:D},prefix:f,iconName:i,transform:h,symbol:p,maskId:E,title:o,titleId:a,extra:T,watchable:!0})])}).catch(N)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:o,transform:a,styles:f}=e;const h=of(f);h.length>0&&(i.style=h);let p;return em(a)&&(p=Ui("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),t.push(p||o.icon),{children:t,attributes:i}}}},u2={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return uf({type:"layer"},()=>{Ss("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(o=>{Array.isArray(o)?o.map(a=>{i=i.concat(a.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},c2={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:o={},styles:a={}}=e;return uf({type:"counter",content:n},()=>(Ss("beforeDOMElementCreation",{content:n,params:e}),BN({content:n.toString(),title:t,extra:{attributes:o,styles:a,classes:["".concat(de.cssPrefix,"-layers-counter"),...i]}})))}}}},f2={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=rr,title:i=null,classes:o=[],attributes:a={},styles:f={}}=e;return uf({type:"text",content:n},()=>(Ss("beforeDOMElementCreation",{content:n,params:e}),J_({content:n,transform:te(te({},rr),t),title:i,extra:{attributes:a,styles:f,classes:["".concat(de.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:o,extra:a}=t;let f=null,h=null;if(Yw){const p=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();f=y.width/p,h=y.height/p}return de.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,J_({content:e.innerHTML,width:f,height:h,transform:o,title:i,extra:a,watchable:!0})])}}};const h2=new RegExp('"',"ug"),sv=[1105920,1112319],ov=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),Lx),Jx),Hx),Kd=Object.keys(ov).reduce((n,e)=>(n[e.toLowerCase()]=ov[e],n),{}),d2=Object.keys(Kd).reduce((n,e)=>{const t=Kd[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function p2(n){const e=n.replace(h2,""),t=EN(e,0),i=t>=sv[0]&&t<=sv[1],o=e.length===2?e[0]===e[1]:!1;return{value:jd(o?e[0]:e),isSecondary:i||o}}function m2(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),o=isNaN(i)?"normal":i;return(Kd[t]||{})[o]||d2[t]}function av(n,e){const t="".concat(Zx).concat(e.replace(":","-"));return new Promise((i,o)=>{if(n.getAttribute(t)!==null)return i();const f=Jo(n.children).filter(I=>I.getAttribute(Vd)===e)[0],h=Mi.getComputedStyle(n,e),p=h.getPropertyValue("font-family"),y=p.match(iN),E=h.getPropertyValue("font-weight"),T=h.getPropertyValue("content");if(f&&!y)return n.removeChild(f),i();if(y&&T!=="none"&&T!==""){const I=h.getPropertyValue("content");let N=m2(p,E);const{value:L,isSecondary:$}=p2(I),D=y[0].startsWith("FontAwesome");let q=nm(N,L),J=q;if(D){const Q=kN(L);Q.iconName&&Q.prefix&&(q=Q.iconName,N=Q.prefix)}if(q&&!$&&(!f||f.getAttribute(Yp)!==N||f.getAttribute(Xp)!==J)){n.setAttribute(t,J),f&&n.removeChild(f);const Q=n2(),{extra:oe}=Q;oe.attributes[Vd]=e,Hd(q,N).then(_e=>{const Te=rm(te(te({},Q),{},{icons:{main:_e,mask:v0()},prefix:N,iconName:J,extra:oe,watchable:!0})),x=Xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(x,n.firstChild):n.appendChild(x),x.outerHTML=Te.map(S=>bl(S)).join(`
`),n.removeAttribute(t),i()}).catch(o)}else i()}else i()})}function g2(n){return Promise.all([av(n,"::before"),av(n,"::after")])}function y2(n){return n.parentNode!==document.head&&!~tN.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Vd)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function lv(n){if(Gr)return new Promise((e,t)=>{const i=Jo(n.querySelectorAll("*")).filter(y2).map(g2),o=im.begin("searchPseudoElements");S0(),Promise.all(i).then(()=>{o(),Gd(),e()}).catch(()=>{o(),Gd(),t()})})}var _2={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=lv,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=Xe}=e;de.searchPseudoElements&&lv(t)}}};let uv=!1;var v2={mixout(){return{dom:{unwatch(){S0(),uv=!0}}}},hooks(){return{bootstrap(){nv(Bd("mutationObserverCallbacks",{}))},noAuto(){JN()},watch(n){const{observeMutationsRoot:e}=n;uv?Gd():nv(Bd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const cv=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const o=i.toLowerCase().split("-"),a=o[0];let f=o.slice(1).join("-");if(a&&f==="h")return t.flipX=!0,t;if(a&&f==="v")return t.flipY=!0,t;if(f=parseFloat(f),isNaN(f))return t;switch(a){case"grow":t.size=t.size+f;break;case"shrink":t.size=t.size-f;break;case"left":t.x=t.x-f;break;case"right":t.x=t.x+f;break;case"up":t.y=t.y-f;break;case"down":t.y=t.y+f;break;case"rotate":t.rotate=t.rotate+f;break}return t},e)};var E2={mixout(){return{parse:{transform:n=>cv(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=cv(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:o,iconWidth:a}=e;const f={transform:"translate(".concat(o/2," 256)")},h="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),y="rotate(".concat(i.rotate," 0 0)"),E={transform:"".concat(h," ").concat(p," ").concat(y)},T={transform:"translate(".concat(a/2*-1," -256)")},I={outer:f,inner:E,path:T};return{tag:"g",attributes:te({},I.outer),children:[{tag:"g",attributes:te({},I.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),I.path)}]}]}}}};const id={x:0,y:0,width:"100%",height:"100%"};function fv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function w2(n){return n.tag==="g"?n.children:[n]}var T2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?lf(t.split(" ").map(o=>o.trim())):v0();return i.prefix||(i.prefix=Fi()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:o,mask:a,maskId:f,transform:h}=e;const{width:p,icon:y}=o,{width:E,icon:T}=a,I=pN({transform:h,containerWidth:E,iconWidth:p}),N={tag:"rect",attributes:te(te({},id),{},{fill:"white"})},L=y.children?{children:y.children.map(fv)}:{},$={tag:"g",attributes:te({},I.inner),children:[fv(te({tag:y.tag,attributes:te(te({},y.attributes),I.path)},L))]},D={tag:"g",attributes:te({},I.outer),children:[$]},q="mask-".concat(f||yl()),J="clip-".concat(f||yl()),Q={tag:"mask",attributes:te(te({},id),{},{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,D]},oe={tag:"defs",children:[{tag:"clipPath",attributes:{id:J},children:w2(T)},Q]};return t.push(oe,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(J,")"),mask:"url(#".concat(q,")")},id)}),{children:t,attributes:i}}}},I2={provides(n){let e=!1;Mi.matchMedia&&(e=Mi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=te(te({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:te(te({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:te(te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},a),{},{values:"1;0;1;1;0;1;"})}),t.push(f),t.push({tag:"path",attributes:te(te({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},a),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},S2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},A2=[yN,l2,u2,c2,f2,_2,v2,E2,T2,I2,S2];LN(A2,{mixoutsTo:dn});dn.noAuto;dn.config;dn.library;dn.dom;const Qd=dn.parse;dn.findIconDefinition;dn.toHtml;const k2=dn.icon;dn.layer;dn.text;dn.counter;var sd={exports:{}},od,hv;function P2(){if(hv)return od;hv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return od=n,od}var ad,dv;function R2(){if(dv)return ad;dv=1;var n=P2();function e(){}function t(){}return t.resetWarningCache=e,ad=function(){function i(f,h,p,y,E,T){if(T!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}i.isRequired=i;function o(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},ad}var pv;function C2(){return pv||(pv=1,sd.exports=R2()()),sd.exports}var x2=C2();const xe=_v(x2);function mv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function nr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(t),!0).forEach(function(i){Ro(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):mv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Fc(n){"@babel/helpers - typeof";return Fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fc(n)}function Ro(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N2(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function b2(n,e){if(n==null)return{};var t=N2(n,e),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Yd(n){return O2(n)||D2(n)||L2(n)||V2()}function O2(n){if(Array.isArray(n))return Xd(n)}function D2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function L2(n,e){if(n){if(typeof n=="string")return Xd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xd(n,e)}}function Xd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function V2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M2(n){var e,t=n.beat,i=n.fade,o=n.beatFade,a=n.bounce,f=n.shake,h=n.flash,p=n.spin,y=n.spinPulse,E=n.spinReverse,T=n.pulse,I=n.fixedWidth,N=n.inverse,L=n.border,$=n.listItem,D=n.flip,q=n.size,J=n.rotation,Q=n.pull,oe=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":f,"fa-flash":h,"fa-spin":p,"fa-spin-reverse":E,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":I,"fa-inverse":N,"fa-border":L,"fa-li":$,"fa-flip":D===!0,"fa-flip-horizontal":D==="horizontal"||D==="both","fa-flip-vertical":D==="vertical"||D==="both"},Ro(e,"fa-".concat(q),typeof q<"u"&&q!==null),Ro(e,"fa-rotate-".concat(J),typeof J<"u"&&J!==null&&J!==0),Ro(e,"fa-pull-".concat(Q),typeof Q<"u"&&Q!==null),Ro(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(oe).map(function(_e){return oe[_e]?_e:null}).filter(function(_e){return _e})}function F2(n){return n=n-0,n===n}function k0(n){return F2(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var U2=["style"];function j2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function z2(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),o=k0(t.slice(0,i)),a=t.slice(i+1).trim();return o.startsWith("webkit")?e[j2(o)]=a:e[o]=a,e},{})}function P0(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(p){return P0(n,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,y){var E=e.attributes[y];switch(y){case"class":p.attrs.className=E,delete e.attributes.class;break;case"style":p.attrs.style=z2(E);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=E:p.attrs[k0(y)]=E}return p},{attrs:{}}),a=t.style,f=a===void 0?{}:a,h=b2(t,U2);return o.attrs.style=nr(nr({},o.attrs.style),f),n.apply(void 0,[e.tag,nr(nr({},o.attrs),h)].concat(Yd(i)))}var R0=!1;try{R0=!0}catch{}function B2(){if(!R0&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function gv(n){if(n&&Fc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Qd.icon)return Qd.icon(n);if(n===null)return null;if(n&&Fc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function ld(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ro({},n,e):{}}var yv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},om=vv.forwardRef(function(n,e){var t=nr(nr({},yv),n),i=t.icon,o=t.mask,a=t.symbol,f=t.className,h=t.title,p=t.titleId,y=t.maskId,E=gv(i),T=ld("classes",[].concat(Yd(M2(t)),Yd((f||"").split(" ")))),I=ld("transform",typeof t.transform=="string"?Qd.transform(t.transform):t.transform),N=ld("mask",gv(o)),L=k2(E,nr(nr(nr(nr({},T),I),N),{},{symbol:a,title:h,titleId:p,maskId:y}));if(!L)return B2("Could not find icon",E),null;var $=L.abstract,D={ref:e};return Object.keys(t).forEach(function(q){yv.hasOwnProperty(q)||(D[q]=t[q])}),$2($[0],D)});om.displayName="FontAwesomeIcon";om.propTypes={beat:xe.bool,border:xe.bool,beatFade:xe.bool,bounce:xe.bool,className:xe.string,fade:xe.bool,flash:xe.bool,mask:xe.oneOfType([xe.object,xe.array,xe.string]),maskId:xe.string,fixedWidth:xe.bool,inverse:xe.bool,flip:xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xe.oneOfType([xe.object,xe.array,xe.string]),listItem:xe.bool,pull:xe.oneOf(["right","left"]),pulse:xe.bool,rotation:xe.oneOf([0,90,180,270]),shake:xe.bool,size:xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xe.bool,spinPulse:xe.bool,spinReverse:xe.bool,symbol:xe.oneOfType([xe.bool,xe.string]),title:xe.string,titleId:xe.string,transform:xe.oneOfType([xe.string,xe.object]),swapOpacity:xe.bool};var $2=P0.bind(null,vv.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const W2={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]};function H2(){const{user:n}=hn();return B.jsxs("header",{className:"header",children:[B.jsx(Ai,{to:"/",className:"link",children:B.jsx("div",{className:"logo",children:"Multi Cinema"})}),B.jsxs("div",{className:"search",children:[B.jsxs(Ai,{to:"/my-films",className:"link my-watch",children:[B.jsx(om,{icon:W2}),B.jsx("span",{children:"Мои фильмы"})]}),n?B.jsx(Ai,{to:"/profile",className:"link user",children:B.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"user__avatar",title:n.displayName})}):B.jsx(Ai,{to:"/profile",className:"link",children:"Войти"})]})]})}function q2(){var t;const{likedMovies:n}=hn(),e=n[n.length-1];return B.jsx(B.Fragment,{children:n.length>1&&B.jsx("section",{className:"continue-watch",children:B.jsxs("div",{className:"container",children:[B.jsx("h2",{className:"title-2",children:"Продолжить просмотр"}),B.jsxs("div",{className:"continue-watch__item",children:[B.jsx(Ai,{to:`/movie/${e.id}`,state:{data:e},className:"film__link",children:(t=e.poster)!=null&&t.url?B.jsx("img",{src:e.poster.url,alt:e.name,className:"continue-watch__poster"}):B.jsx("div",{className:"continue-watch__poster",children:"Not found"})}),B.jsx("h3",{className:"continue-watch__name film__name",children:e.name})]})]})})})}const Ur=["84S4SNX-Y084WMK-K7FV73W-8G8P6MH","5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER"],C0=async(n,e,t,i,o=1)=>{function a(h){t(p=>({...p,actual:h.page,all:h.pages}))}let f;for(let h=0;h<Ur.length;h++)try{const p={method:"GET",headers:{accept:"application/json","X-API-KEY":Ur[h]}},y=await fetch("https://api.kinopoisk.dev/v1.3/movie?"+new URLSearchParams({page:o.toString(),limit:"25",sortField:"votes.imdb",sortType:"-1",name:n}),p);if(!y.ok){if(y.status===401||y.status===403){console.log(`API key ${h} failed, trying next key...`);continue}throw new Error(`API request failed with status ${y.status}`)}f=await y.json();break}catch(p){if(console.error(`Error with API key ${h}:`,p),h===Ur.length-1)throw new Error("All API keys failed")}f&&(a(f),e(f.docs)),i(!1)},G2=async(n,e,t)=>{for(let i=0;i<Ur.length;i++)try{const o={method:"GET",headers:{accept:"application/json","X-API-KEY":Ur[i]}},a=await fetch(`https://api.kinopoisk.dev/v1.4/movie/${n}`,o);if(!a.ok){if(a.status===401||a.status===403){console.log(`API key ${i} failed, trying next key...`);continue}throw new Error(`API request failed with status ${a.status}`)}const f=await a.json();e(f),t(!1);return}catch(o){if(console.error(`Error with API key ${i}:`,o),i===Ur.length-1)throw t(!1),new Error("All API keys failed")}},K2=async(n,e)=>{for(let t=0;t<Ur.length;t++)try{const i={method:"GET",headers:{accept:"application/json","X-API-KEY":Ur[t]}},[o,a]=await Promise.all([fetch("https://api.kinopoisk.dev/v1.4/movie?"+new URLSearchParams({page:"1",limit:"25",sortField:"votes.await",sortType:"-1","votes.await":"1000-6666666",year:new Date().getFullYear(),status:"completed"}),i),fetch("https://api.kinopoisk.dev/v1.4/movie?"+new URLSearchParams({page:"1",limit:"25",sortField:"votes.imdb",sortType:"-1",isSeries:"true",year:`${new Date().getFullYear()-5}-${new Date().getFullYear()}`}),i)]);if(!o.ok||!a.ok){if(o.status===401||o.status===403||a.status===401||a.status===403){console.log(`API key ${t} failed, trying next key...`);continue}throw new Error(`API request failed with status ${o.status}/${a.status}`)}const f=await o.json(),h=await a.json();n([f.docs,h.docs]),e(!1);return}catch(i){if(console.error(`Error with API key ${t}:`,i),t===Ur.length-1)throw e(!1),new Error("All API keys failed")}};function x0({}){const{setFilmName:n,setData:e,setPages:t,setIsLoading:i}=hn(),[o,a]=W.useState(""),f=jw(),h=W.useCallback(p=>{p.preventDefault(),i(!0),n(o),C0(o,e,t,i),f("/search-result")},[o,n,e,t,i,f]);return B.jsx("section",{className:"search-form",children:B.jsx("div",{className:"container",children:B.jsxs("form",{className:"form",onSubmit:h,children:[B.jsx("input",{className:"form__input",type:"text",value:o,placeholder:"Поиск",onChange:p=>a(p.target.value)}),B.jsx("button",{className:"form__btn",children:"Искать"})]})})})}const Q2="/milti-cinema-react/assets/loader-Q1L3BIgD.gif",Uc=W.memo(function({film:e}){var p,y;const{likedMovies:t,toggleLike:i}=hn(),[o,a]=W.useState(!0),f=W.useCallback(()=>{i(e)},[e,i]),h=W.useCallback(()=>{a(!1)},[]);return B.jsxs("div",{className:"film","data-id":e.id,children:[B.jsxs(Ai,{to:`/movie/${e.id}`,state:{data:e},className:"film__link",children:[o&&((p=e.poster)==null?void 0:p.url)&&B.jsx("div",{className:"film__img--preloadder-wrapper",children:B.jsx("img",{className:"film__img--preloadder",src:Q2,alt:"Loading..."})}),(y=e.poster)!=null&&y.url?B.jsx("img",{className:"film__img",src:e.poster.url,alt:e.name,style:{display:o?"none":"block"},onLoad:h}):B.jsx("div",{className:"film__img",children:"Not found"})]}),B.jsx("h3",{className:"film__name",children:e.name}),B.jsx("button",{onClick:f,className:"film__like",children:t.some(E=>E.id===e.id)?"❤️":"🤍"})]})}),Y2=W.memo(function(){const{collections:e,setCollections:t}=hn(),{isLoading:i,setIsLoading:o}=$p();return W.useEffect(()=>{if(e.length>0)return o(!1);K2(t,o)},[e]),B.jsx("section",{className:"film-collections",children:B.jsx("div",{className:"container",children:!i&&B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"collections-serials",children:[B.jsx("h2",{className:"title-2",children:"Популярные сериалы"}),B.jsx("div",{className:"collections-serials__wrapper",children:e[1].map(a=>a.poster&&a.poster.url&&B.jsx(Uc,{film:a},a.id))})]}),B.jsxs("div",{className:"collections-new",children:[B.jsx("h2",{className:"title-2",children:"Ожидаемые"}),B.jsx("div",{className:"collections-new__wrapper",children:e[0].map(a=>a.poster&&a.poster.url&&B.jsx(Uc,{film:a},a.id))})]})]})})})});function X2(){return B.jsxs("main",{className:"main",children:[B.jsx(q2,{}),B.jsx(x0,{}),B.jsx(Y2,{})]})}function J2(){const{filmName:n,setData:e,pages:t,setPages:i,setIsLoading:o}=hn(),a=W.useCallback(p=>{o(!0),C0(n,e,i,o,p),window.scrollTo(0,0)}),f=W.useMemo(()=>{const p=[1],y=(t==null?void 0:t.actual)||1,E=(t==null?void 0:t.all)||1;if(y<4)for(let T=2,I=0;T<E&&I<3;T++,I++)p.push(T);else{y-1<2&&p.push("..."),p.push("...");for(let T=y-1,I=0;T<E&&I<3;T++,I++)p.push(T)}return E-y>2&&p.push("..."),E!==1&&p.push(E),p},[t==null?void 0:t.actual,t==null?void 0:t.all]),h=W.useCallback(p=>{a(p)},[a]);return B.jsx(B.Fragment,{children:B.jsx("div",{className:"pagination",children:B.jsx("ul",{className:"pagination__list",children:f.map((p,y)=>p==="..."?B.jsx("li",{className:"pagination__item",children:"..."},`ellipsis-${y}`):p!==t.actual?B.jsx("li",{className:"pagination__item",children:B.jsx("button",{className:"pagination__btn",onClick:()=>h(p),children:p})},`page-${p}`):B.jsx("li",{className:"pagination__item",children:B.jsx("button",{className:"pagination__btn active",children:p})},`active-${p}`))})})})}function Z2(){const{data:n,isLoading:e}=hn();return e?B.jsx("div",{className:"film-list",children:"Загрузка фильмов..."}):B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"film-list",children:n.map(t=>B.jsx(Uc,{film:t},t.id))}),B.jsx(J2,{})]})}function eb({}){const{data:n}=hn();return B.jsx("section",{className:"search-res",children:B.jsx("div",{className:"container",children:B.jsxs("div",{className:"search-res__items",children:[B.jsx(x0,{}),n.length>0&&B.jsx(Z2,{})]})})})}function tb({kpId:n}){const{link:e,setLink:t}=hn();W.useEffect(()=>{i()},[]);const i=async()=>{const o={method:"GET",headers:{accept:"application/json"}},a=await fetch("https://api1573848848.apicollaps.cc/franchise/details?"+new URLSearchParams({token:"eedefb541aeba871dcfc756e6b31c02e",kinopoisk_id:n}),o);let f=await a.json();f&&(console.log(a,f),t(f.iframe_url))};return B.jsx("div",{className:"kinobox_player movie__player",children:B.jsx("iframe",{id:"inlineFrameExample",title:"Inline Frame Map",width:"100%",height:"600px",frameborder:"1",allowfullscreen:"true",src:e})})}const nb=W.memo(function(){var h,p;const e=ji(),{film:t,setFilm:i}=hn(),{isLoading:o,setIsLoading:a}=$p(),{id:f}=NC();return W.useEffect(()=>{var y;if((y=e.state)!=null&&y.data){i(e.state.data),a(!1);return}G2(f,i,a)},[e.state]),o?B.jsx("div",{children:"Загрузка..."}):B.jsx(B.Fragment,{children:B.jsxs("section",{className:"movie","data-id":t.id,children:[t.backdrop&&t.backdrop.url&&t.logo&&t.logo.url?B.jsx(B.Fragment,{children:B.jsxs("div",{className:"movie__backdrop",children:[B.jsx("img",{className:"movie__backdrop--img",src:t.backdrop.url,alt:t.name}),B.jsx("img",{className:"movie__backdrop--logo",src:t.logo.url,alt:t.name})]})}):(h=t.backdrop)!=null&&h.url?B.jsx(B.Fragment,{children:B.jsxs("div",{className:"movie__backdrop",children:[B.jsx("img",{className:"movie__backdrop--img",src:t.backdrop.url,alt:t.name}),B.jsx("h3",{className:"movie__backdrop--name",children:t.name})]})}):(p=t.logo)!=null&&p.url?B.jsx(B.Fragment,{children:B.jsx("div",{className:"movie__backdrop",children:B.jsx("img",{className:"movie__backdrop--logo",src:t.logo.url,alt:t.name})})}):B.jsx(B.Fragment,{children:B.jsx("div",{className:"movie__backdrop",children:B.jsx("h3",{className:"movie__backdrop--name",children:t.name})})}),B.jsxs("div",{className:"movie__container",children:[B.jsxs("div",{className:"movie__info",children:[t.poster&&t.poster.url&&B.jsx("img",{className:"movie__img",src:t.poster.url,alt:t.name}),B.jsxs("div",{className:"movie__info--wrapper",children:[t.year&&B.jsxs("div",{className:"movie__year",children:["Год выхода: ",t.year," г."]}),t.genres.length>0&&B.jsxs("div",{className:"movie__genres",children:["Жанры: ",t.genres.map(y=>`${y.name} `)]}),!!t.movieLength&&B.jsxs("div",{className:"movie__movieLength",children:["Продолжительность: ",t.movieLength," мин."]}),t.rating.imdb!==0&&B.jsxs("div",{className:"movie__rating",children:["Рейтинг: ",t.rating.imdb]}),!!t.ageRating&&B.jsxs("div",{className:"movie__ageRating",children:["Возрастной рейтинг: ",t.ageRating,"+"]}),!!t.description&&B.jsx("div",{className:"movie__description",children:t.description})]})]}),B.jsx(tb,{kpId:t.id})]})]})})});function N0(){const{user:n}=hn();return B.jsx("div",{className:"auth",children:n?B.jsx("button",{className:"profile__btn",onClick:WR,children:"Выйти"}):B.jsx("button",{className:"profile__btn",onClick:$R,children:"Войти через Google"})})}function rb(){const{user:n,likedMovies:e,toggleLike:t}=hn();return console.log(e),B.jsx("section",{className:"my-films",children:B.jsx("div",{className:"container",children:n?B.jsxs(B.Fragment,{children:[B.jsx("h2",{className:"title-2",children:"Вы смотрите"}),B.jsx("div",{className:"my-films__items",children:e.map(i=>B.jsx(Uc,{film:i,toggleLike:t},i.id))})]}):B.jsxs(B.Fragment,{children:[B.jsx("div",{children:"Вы не авторизованы"}),B.jsx(N0,{user:n})]})})})}function ib(){const{user:n}=hn();return B.jsx("section",{className:"profile-page",children:B.jsx("div",{className:"container",children:B.jsxs("div",{className:"profile",children:[n?B.jsxs(B.Fragment,{children:[B.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"profile__avatar"}),B.jsx("div",{className:"profile__name",children:n.displayName}),B.jsx("div",{className:"profile__email",children:n.email})]}):B.jsx("div",{children:"Вы не авторизованы"}),B.jsx(N0,{})]})})})}function sb(){return B.jsx(gx,{basename:"/milti-cinema-react/",children:B.jsxs("div",{className:"App",children:[B.jsx(H2,{}),B.jsxs(qC,{children:[B.jsx(ko,{path:"/",element:B.jsx(X2,{})}),B.jsx(ko,{path:"/profile",element:B.jsx(ib,{})}),B.jsx(ko,{path:"/search-result",element:B.jsx(eb,{})}),B.jsx(ko,{path:"/movie/:id",element:B.jsx(nb,{})}),B.jsx(ko,{path:"/my-films",element:B.jsx(rb,{})})]})]})})}$T.createRoot(document.getElementById("root")).render(B.jsx(tC,{children:B.jsx(sb,{})}));
