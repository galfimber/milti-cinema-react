(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function gv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lh={exports:{}},qa={},Vh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function O0(){if(fy)return Ce;fy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,W={};function D(L,K,pe){this.props=L,this.context=K,this.refs=W,this.updater=pe||N}D.prototype.isReactComponent={},D.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},D.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function H(){}H.prototype=D.prototype;function J(L,K,pe){this.props=L,this.context=K,this.refs=W,this.updater=pe||N}var Q=J.prototype=new H;Q.constructor=J,V(Q,D.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,_e=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(L,K,pe){var Re,Pe={},Le=null,je=null;if(K!=null)for(Re in K.ref!==void 0&&(je=K.ref),K.key!==void 0&&(Le=""+K.key),K)_e.call(K,Re)&&!x.hasOwnProperty(Re)&&(Pe[Re]=K[Re]);var ze=arguments.length-2;if(ze===1)Pe.children=pe;else if(1<ze){for(var qe=Array(ze),wt=0;wt<ze;wt++)qe[wt]=arguments[wt+2];Pe.children=qe}if(L&&L.defaultProps)for(Re in ze=L.defaultProps,ze)Pe[Re]===void 0&&(Pe[Re]=ze[Re]);return{$$typeof:n,type:L,key:Le,ref:je,props:Pe,_owner:Te.current}}function k(L,K){return{$$typeof:n,type:L.type,key:K,ref:L.ref,props:L.props,_owner:L._owner}}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return K[pe]})}var M=/\/+/g;function R(L,K){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):K.toString(36)}function ot(L,K,pe,Re,Pe){var Le=typeof L;(Le==="undefined"||Le==="boolean")&&(L=null);var je=!1;if(L===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(L.$$typeof){case n:case e:je=!0}}if(je)return je=L,Pe=Pe(je),L=Re===""?"."+R(je,0):Re,oe(Pe)?(pe="",L!=null&&(pe=L.replace(M,"$&/")+"/"),ot(Pe,K,pe,"",function(wt){return wt})):Pe!=null&&(C(Pe)&&(Pe=k(Pe,pe+(!Pe.key||je&&je.key===Pe.key?"":(""+Pe.key).replace(M,"$&/")+"/")+L)),K.push(Pe)),1;if(je=0,Re=Re===""?".":Re+":",oe(L))for(var ze=0;ze<L.length;ze++){Le=L[ze];var qe=Re+R(Le,ze);je+=ot(Le,K,pe,qe,Pe)}else if(qe=I(L),typeof qe=="function")for(L=qe.call(L),ze=0;!(Le=L.next()).done;)Le=Le.value,qe=Re+R(Le,ze++),je+=ot(Le,K,pe,qe,Pe);else if(Le==="object")throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return je}function Dt(L,K,pe){if(L==null)return L;var Re=[],Pe=0;return ot(L,Re,"","",function(Le){return K.call(pe,Le,Pe++)}),Re}function Lt(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var We={current:null},ie={transition:null},me={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Te};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(L,K,pe){Dt(L,function(){K.apply(this,arguments)},pe)},count:function(L){var K=0;return Dt(L,function(){K++}),K},toArray:function(L){return Dt(L,function(K){return K})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ce.Component=D,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=J,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=ae,Ce.cloneElement=function(L,K,pe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Re=V({},L.props),Pe=L.key,Le=L.ref,je=L._owner;if(K!=null){if(K.ref!==void 0&&(Le=K.ref,je=Te.current),K.key!==void 0&&(Pe=""+K.key),L.type&&L.type.defaultProps)var ze=L.type.defaultProps;for(qe in K)_e.call(K,qe)&&!x.hasOwnProperty(qe)&&(Re[qe]=K[qe]===void 0&&ze!==void 0?ze[qe]:K[qe])}var qe=arguments.length-2;if(qe===1)Re.children=pe;else if(1<qe){ze=Array(qe);for(var wt=0;wt<qe;wt++)ze[wt]=arguments[wt+2];Re.children=ze}return{$$typeof:n,type:L.type,key:Pe,ref:Le,props:Re,_owner:je}},Ce.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Ce.createElement=S,Ce.createFactory=function(L){var K=S.bind(null,L);return K.type=L,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(L){return{$$typeof:h,render:L}},Ce.isValidElement=C,Ce.lazy=function(L){return{$$typeof:E,_payload:{_status:-1,_result:L},_init:Lt}},Ce.memo=function(L,K){return{$$typeof:y,type:L,compare:K===void 0?null:K}},Ce.startTransition=function(L){var K=ie.transition;ie.transition={};try{L()}finally{ie.transition=K}},Ce.unstable_act=ae,Ce.useCallback=function(L,K){return We.current.useCallback(L,K)},Ce.useContext=function(L){return We.current.useContext(L)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(L){return We.current.useDeferredValue(L)},Ce.useEffect=function(L,K){return We.current.useEffect(L,K)},Ce.useId=function(){return We.current.useId()},Ce.useImperativeHandle=function(L,K,pe){return We.current.useImperativeHandle(L,K,pe)},Ce.useInsertionEffect=function(L,K){return We.current.useInsertionEffect(L,K)},Ce.useLayoutEffect=function(L,K){return We.current.useLayoutEffect(L,K)},Ce.useMemo=function(L,K){return We.current.useMemo(L,K)},Ce.useReducer=function(L,K,pe){return We.current.useReducer(L,K,pe)},Ce.useRef=function(L){return We.current.useRef(L)},Ce.useState=function(L){return We.current.useState(L)},Ce.useSyncExternalStore=function(L,K,pe){return We.current.useSyncExternalStore(L,K,pe)},Ce.useTransition=function(){return We.current.useTransition()},Ce.version="18.3.1",Ce}var hy;function Xd(){return hy||(hy=1,Vh.exports=O0()),Vh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function D0(){if(dy)return qa;dy=1;var n=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(h,p,y){var E,T={},I=null,N=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(h&&h.defaultProps)for(E in p=h.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:h,key:I,ref:N,props:T,_owner:o.current}}return qa.Fragment=t,qa.jsx=f,qa.jsxs=f,qa}var py;function L0(){return py||(py=1,Lh.exports=D0()),Lh.exports}var B=L0(),q=Xd();const yv=gv(q);var Gu={},Mh={exports:{}},nn={},Fh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function V0(){return my||(my=1,function(n){function e(ie,me){var ae=ie.length;ie.push(me);e:for(;0<ae;){var L=ae-1>>>1,K=ie[L];if(0<o(K,me))ie[L]=me,ie[ae]=K,ae=L;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var me=ie[0],ae=ie.pop();if(ae!==me){ie[0]=ae;e:for(var L=0,K=ie.length,pe=K>>>1;L<pe;){var Re=2*(L+1)-1,Pe=ie[Re],Le=Re+1,je=ie[Le];if(0>o(Pe,ae))Le<K&&0>o(je,Pe)?(ie[L]=je,ie[Le]=ae,L=Le):(ie[L]=Pe,ie[Re]=ae,L=Re);else if(Le<K&&0>o(je,ae))ie[L]=je,ie[Le]=ae,L=Le;else break e}}return me}function o(ie,me){var ae=ie.sortIndex-me.sortIndex;return ae!==0?ae:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],y=[],E=1,T=null,I=3,N=!1,V=!1,W=!1,D=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(ie){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ie)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function oe(ie){if(W=!1,Q(ie),!V)if(t(p)!==null)V=!0,Lt(_e);else{var me=t(y);me!==null&&We(oe,me.startTime-ie)}}function _e(ie,me){V=!1,W&&(W=!1,H(S),S=-1),N=!0;var ae=I;try{for(Q(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ie&&!O());){var L=T.callback;if(typeof L=="function"){T.callback=null,I=T.priorityLevel;var K=L(T.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),Q(me)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var Re=t(y);Re!==null&&We(oe,Re.startTime-me),pe=!1}return pe}finally{T=null,I=ae,N=!1}}var Te=!1,x=null,S=-1,k=5,C=-1;function O(){return!(n.unstable_now()-C<k)}function M(){if(x!==null){var ie=n.unstable_now();C=ie;var me=!0;try{me=x(!0,ie)}finally{me?R():(Te=!1,x=null)}}else Te=!1}var R;if(typeof J=="function")R=function(){J(M)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Dt=ot.port2;ot.port1.onmessage=M,R=function(){Dt.postMessage(null)}}else R=function(){D(M,0)};function Lt(ie){x=ie,Te||(Te=!0,R())}function We(ie,me){S=D(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){V||N||(V=!0,Lt(_e))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var ae=I;I=me;try{return ie()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=I;I=ie;try{return me()}finally{I=ae}},n.unstable_scheduleCallback=function(ie,me,ae){var L=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?L+ae:L):ae=L,ie){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,ie={id:E++,callback:me,priorityLevel:ie,startTime:ae,expirationTime:K,sortIndex:-1},ae>L?(ie.sortIndex=ae,e(y,ie),t(p)===null&&ie===t(y)&&(W?(H(S),S=-1):W=!0,We(oe,ae-L))):(ie.sortIndex=K,e(p,ie),V||N||(V=!0,Lt(_e))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var me=I;return function(){var ae=I;I=me;try{return ie.apply(this,arguments)}finally{I=ae}}}}(Uh)),Uh}var gy;function M0(){return gy||(gy=1,Fh.exports=V0()),Fh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function F0(){if(yy)return nn;yy=1;var n=Xd(),e=M0();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){f(r,s),f(r+"Capture",s)}function f(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function N(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,a,c){if(s===null||typeof s>"u"||N(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function W(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new W(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];D[s]=new W(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new W(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new W(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new W(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new W(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new W(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new W(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new W(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,J);D[s]=new W(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,J);D[s]=new W(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,J);D[s]=new W(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new W(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new W(r,1,!1,r.toLowerCase(),null,!0,!0)});function Q(r,s,a,c){var d=D.hasOwnProperty(s)?D[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,L;function K(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var pe=!1;function Re(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,A=g.length-1;1<=v&&0<=A&&d[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==g[A]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Pe(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Te:return"Portal";case k:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case ot:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case C:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=wt(r))}function Ps(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=qe(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Kr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ui(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Cs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ze(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Jo(r,s){s=s.checked,s!=null&&Q(r,"checked",s,!1)}function Zo(r,s){Jo(r,s);var a=ze(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?xs(r,s.type,a):s.hasOwnProperty("defaultValue")&&xs(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function bl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function xs(r,s,a){(s!=="number"||Kr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ze(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ea(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ns(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ze(a)}}function bs(r,s){var a=ze(s.value),c=ze(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function ta(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,na=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Qr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zi=["Webkit","ms","Moz","O"];Object.keys(ji).forEach(function(r){zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ji[s]=ji[r]})});function ra(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ji.hasOwnProperty(r)&&ji[r]?(""+s).trim():s+"px"}function ia(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ra(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var sa=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(r,s){if(s){if(sa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function aa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Os(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ds=null,dn=null,Wn=null;function Ls(r){if(r=Na(r)){if(typeof Ds!="function")throw Error(t(280));var s=r.stateNode;s&&(s=lu(s),Ds(r.stateNode,r.type,s))}}function Hn(r){dn?Wn?Wn.push(r):Wn=[r]:dn=r}function la(){if(dn){var r=dn,s=Wn;if(Wn=dn=null,Ls(r),s)for(r=0;r<s.length;r++)Ls(s[r])}}function $i(r,s){return r(s)}function ua(){}var _r=!1;function ca(r,s,a){if(_r)return r(s,a);_r=!0;try{return $i(r,s,a)}finally{_r=!1,(dn!==null||Wn!==null)&&(ua(),la())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var c=lu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Vs=!1;if(h)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Vs=!1}function Wi(r,s,a,c,d,g,v,A,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var Hi=!1,Ms=null,Rn=!1,fa=null,uf={onError:function(r){Hi=!0,Ms=r}};function Fs(r,s,a,c,d,g,v,A,P){Hi=!1,Ms=null,Wi.apply(uf,arguments)}function Ol(r,s,a,c,d,g,v,A,P){if(Fs.apply(this,arguments),Hi){if(Hi){var z=Ms;Hi=!1,Ms=null}else throw Error(t(198));Rn||(Rn=!0,fa=z)}}function Pn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function qi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Cn(r){if(Pn(r)!==r)throw Error(t(188))}function Dl(r){var s=r.alternate;if(!s){if(s=Pn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Cn(d),r;if(g===c)return Cn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=g;break}if(A===c){v=!0,c=d,a=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===a){v=!0,a=g,c=d;break}if(A===c){v=!0,c=g,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ha(r){return r=Dl(r),r!==null?Us(r):null}function Us(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Us(r);if(s!==null)return s;r=r.sibling}return null}var js=e.unstable_scheduleCallback,da=e.unstable_cancelCallback,Ll=e.unstable_shouldYield,cf=e.unstable_requestPaint,Ge=e.unstable_now,Vl=e.unstable_getCurrentPriorityLevel,Gi=e.unstable_ImmediatePriority,Yr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,pa=e.unstable_LowPriority,Ml=e.unstable_IdlePriority,Ki=null,sn=null;function Fl(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Ki,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:jl,ma=Math.log,Ul=Math.LN2;function jl(r){return r>>>=0,r===0?32:31-(ma(r)/Ul|0)|0}var zs=64,Bs=4194304;function Xr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Qi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Xr(A):(g&=v,g!==0&&(c=Xr(g)))}else v=a&~d,v!==0?c=Xr(v):g!==0&&(c=Xr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Ht(s),d=1<<a,c|=r[a],s&=~d;return c}function ff(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Ht(g),A=1<<v,P=d[v];P===-1?(!(A&a)||A&c)&&(d[v]=ff(A,s)):P<=s&&(r.expiredLanes|=A),g&=~A}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Yi(){var r=zs;return zs<<=1,!(zs&4194240)&&(zs=64),r}function Jr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Zr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Ht(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function ei(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Ht(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Oe=0;function ti(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var zl,$s,Bl,$l,Wl,ga=!1,qn=[],Rt=null,xn=null,Nn=null,ni=new Map,mn=new Map,Gn=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ni.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function Qt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Na(s),s!==null&&$s(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function df(r,s,a,c,d){switch(s){case"focusin":return Rt=Qt(Rt,r,s,a,c,d),!0;case"dragenter":return xn=Qt(xn,r,s,a,c,d),!0;case"mouseover":return Nn=Qt(Nn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return ni.set(g,Qt(ni.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,mn.set(g,Qt(mn.get(g)||null,r,s,a,c,d)),!0}return!1}function ql(r){var s=ts(r.target);if(s!==null){var a=Pn(s);if(a!==null){if(s=a.tag,s===13){if(s=qi(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){Bl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ws(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Bi=c,a.target.dispatchEvent(c),Bi=null}else return s=Na(a),s!==null&&$s(s),r.blockedOn=a,!1;s.shift()}return!0}function Xi(r,s,a){Er(r)&&a.delete(s)}function Gl(){ga=!1,Rt!==null&&Er(Rt)&&(Rt=null),xn!==null&&Er(xn)&&(xn=null),Nn!==null&&Er(Nn)&&(Nn=null),ni.forEach(Xi),mn.forEach(Xi)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,ga||(ga=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gl)))}function On(r){function s(d){return bn(d,r)}if(0<qn.length){bn(qn[0],r);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&bn(Rt,r),xn!==null&&bn(xn,r),Nn!==null&&bn(Nn,r),ni.forEach(s),mn.forEach(s),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)ql(a),a.blockedOn===null&&Gn.shift()}var wr=oe.ReactCurrentBatchConfig,ri=!0;function Je(r,s,a,c){var d=Oe,g=wr.transition;wr.transition=null;try{Oe=1,ya(r,s,a,c)}finally{Oe=d,wr.transition=g}}function pf(r,s,a,c){var d=Oe,g=wr.transition;wr.transition=null;try{Oe=4,ya(r,s,a,c)}finally{Oe=d,wr.transition=g}}function ya(r,s,a,c){if(ri){var d=Ws(r,s,a,c);if(d===null)Af(r,s,c,Ji,a),Hl(r,c);else if(df(d,r,s,a,c))c.stopPropagation();else if(Hl(r,c),s&4&&-1<hf.indexOf(r)){for(;d!==null;){var g=Na(d);if(g!==null&&zl(g),g=Ws(r,s,a,c),g===null&&Af(r,s,c,Ji,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Af(r,s,c,null,a)}}var Ji=null;function Ws(r,s,a,c){if(Ji=null,r=Os(c),r=ts(r),r!==null)if(s=Pn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=qi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ji=r,null}function _a(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vl()){case Gi:return 1;case Yr:return 4;case pn:case pa:return 16;case Ml:return 536870912;default:return 16}default:return 16}}var an=null,Hs=null,Yt=null;function va(){if(Yt)return Yt;var r,s=Hs,a=s.length,c,d="value"in an?an.value:an.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Yt=d.slice(r,1<c?1-c:void 0)}function qs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Kn(){return!0}function Ea(){return!1}function Pt(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Kn:Ea,this.isPropagationStopped=Ea,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),s}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Pt(Dn),Qn=ae({},Dn,{view:0,detail:0}),mf=Pt(Qn),Ks,Tr,ii,Zi=ae({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ii&&(ii&&r.type==="mousemove"?(Ks=r.screenX-ii.screenX,Tr=r.screenY-ii.screenY):Tr=Ks=0,ii=r),Ks)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Qs=Pt(Zi),wa=ae({},Zi,{dataTransfer:0}),Kl=Pt(wa),Ys=ae({},Qn,{relatedTarget:0}),Xs=Pt(Ys),Ql=ae({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=Pt(Ql),Yl=ae({},Dn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xl=Pt(Yl),Jl=ae({},Dn,{data:0}),Ta=Pt(Jl),Js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Zl[r])?!!s[r]:!1}function Yn(){return eu}var u=ae({},Qn,{key:function(r){if(r.key){var s=Js[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=qs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(r){return r.type==="keypress"?qs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Pt(u),_=ae({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Pt(_),F=ae({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),$=Pt(F),re=ae({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Pt(re),mt=ae({},Zi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Pt(mt),Tt=[9,13,27,32],ct=h&&"CompositionEvent"in window,gn=null;h&&"documentMode"in document&&(gn=document.documentMode);var ln=h&&"TextEvent"in window&&!gn,es=h&&(!ct||gn&&8<gn&&11>=gn),Zs=" ",sm=!1;function om(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var eo=!1;function xT(r,s){switch(r){case"compositionend":return am(s);case"keypress":return s.which!==32?null:(sm=!0,Zs);case"textInput":return r=s.data,r===Zs&&sm?null:r;default:return null}}function NT(r,s){if(eo)return r==="compositionend"||!ct&&om(r,s)?(r=va(),Yt=Hs=an=null,eo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return es&&s.locale!=="ko"?null:s.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!bT[r.type]:s==="textarea"}function um(r,s,a,c){Hn(c),s=su(s,"onChange"),0<s.length&&(a=new Gs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ia=null,Sa=null;function OT(r){Rm(r,0)}function tu(r){var s=so(r);if(Ps(s))return r}function DT(r,s){if(r==="change")return s}var cm=!1;if(h){var gf;if(h){var yf="oninput"in document;if(!yf){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),yf=typeof fm.oninput=="function"}gf=yf}else gf=!1;cm=gf&&(!document.documentMode||9<document.documentMode)}function hm(){Ia&&(Ia.detachEvent("onpropertychange",dm),Sa=Ia=null)}function dm(r){if(r.propertyName==="value"&&tu(Sa)){var s=[];um(s,Sa,r,Os(r)),ca(OT,s)}}function LT(r,s,a){r==="focusin"?(hm(),Ia=s,Sa=a,Ia.attachEvent("onpropertychange",dm)):r==="focusout"&&hm()}function VT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return tu(Sa)}function MT(r,s){if(r==="click")return tu(s)}function FT(r,s){if(r==="input"||r==="change")return tu(s)}function UT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:UT;function Aa(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Ln(r[d],s[d]))return!1}return!0}function pm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function mm(r,s){var a=pm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pm(a)}}function gm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?gm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function ym(){for(var r=window,s=Kr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Kr(r.document)}return s}function _f(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function jT(r){var s=ym(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&gm(a.ownerDocument.documentElement,a)){if(c!==null&&_f(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=mm(a,g);var v=mm(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var zT=h&&"documentMode"in document&&11>=document.documentMode,to=null,vf=null,ka=null,Ef=!1;function _m(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ef||to==null||to!==Kr(c)||(c=to,"selectionStart"in c&&_f(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Aa(ka,c)||(ka=c,c=su(vf,"onSelect"),0<c.length&&(s=new Gs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=to)))}function nu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var no={animationend:nu("Animation","AnimationEnd"),animationiteration:nu("Animation","AnimationIteration"),animationstart:nu("Animation","AnimationStart"),transitionend:nu("Transition","TransitionEnd")},wf={},vm={};h&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function ru(r){if(wf[r])return wf[r];if(!no[r])return r;var s=no[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in vm)return wf[r]=s[a];return r}var Em=ru("animationend"),wm=ru("animationiteration"),Tm=ru("animationstart"),Im=ru("transitionend"),Sm=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(r,s){Sm.set(r,s),l(s,[r])}for(var Tf=0;Tf<Am.length;Tf++){var If=Am[Tf],BT=If.toLowerCase(),$T=If[0].toUpperCase()+If.slice(1);si(BT,"on"+$T)}si(Em,"onAnimationEnd"),si(wm,"onAnimationIteration"),si(Tm,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Im,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function km(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Ol(c,s,void 0,r),r.currentTarget=null}function Rm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],P=A.instance,z=A.currentTarget;if(A=A.listener,P!==g&&d.isPropagationStopped())break e;km(d,A,z),g=P}else for(v=0;v<c.length;v++){if(A=c[v],P=A.instance,z=A.currentTarget,A=A.listener,P!==g&&d.isPropagationStopped())break e;km(d,A,z),g=P}}}if(Rn)throw r=fa,Rn=!1,fa=null,r}function Qe(r,s){var a=s[Nf];a===void 0&&(a=s[Nf]=new Set);var c=r+"__bubble";a.has(c)||(Pm(s,r,2,!1),a.add(c))}function Sf(r,s,a){var c=0;s&&(c|=4),Pm(a,r,c,s)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Pa(r){if(!r[iu]){r[iu]=!0,i.forEach(function(a){a!=="selectionchange"&&(WT.has(a)||Sf(a,!1,r),Sf(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[iu]||(s[iu]=!0,Sf("selectionchange",!1,s))}}function Pm(r,s,a,c){switch(_a(s)){case 1:var d=Je;break;case 4:d=pf;break;default:d=ya}a=d.bind(null,s,a,r),d=void 0,!Vs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Af(r,s,a,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;A!==null;){if(v=ts(A),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}A=A.parentNode}}c=c.return}ca(function(){var z=g,X=Os(a),Z=[];e:{var Y=Sm.get(r);if(Y!==void 0){var se=Gs,ce=r;switch(r){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=Xs;break;case"focusout":ce="blur",se=Xs;break;case"beforeblur":case"afterblur":se=Xs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case Em:case wm:case Tm:se=Ir;break;case Im:se=$e;break;case"scroll":se=mf;break;case"wheel":se=Ve;break;case"copy":case"cut":case"paste":se=Xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var fe=(s&4)!==0,lt=!fe&&r==="scroll",U=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var b=z,j;b!==null;){j=b;var ne=j.stateNode;if(j.tag===5&&ne!==null&&(j=ne,U!==null&&(ne=at(b,U),ne!=null&&fe.push(Ca(b,ne,j)))),lt)break;b=b.return}0<fe.length&&(Y=new se(Y,ce,null,a,X),Z.push({event:Y,listeners:fe}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&a!==Bi&&(ce=a.relatedTarget||a.fromElement)&&(ts(ce)||ce[Sr]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=z,ce=ce?ts(ce):null,ce!==null&&(lt=Pn(ce),ce!==lt||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(fe=Qs,ne="onMouseLeave",U="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(fe=w,ne="onPointerLeave",U="onPointerEnter",b="pointer"),lt=se==null?Y:so(se),j=ce==null?Y:so(ce),Y=new fe(ne,b+"leave",se,a,X),Y.target=lt,Y.relatedTarget=j,ne=null,ts(X)===z&&(fe=new fe(U,b+"enter",ce,a,X),fe.target=j,fe.relatedTarget=lt,ne=fe),lt=ne,se&&ce)t:{for(fe=se,U=ce,b=0,j=fe;j;j=ro(j))b++;for(j=0,ne=U;ne;ne=ro(ne))j++;for(;0<b-j;)fe=ro(fe),b--;for(;0<j-b;)U=ro(U),j--;for(;b--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=ro(fe),U=ro(U)}fe=null}else fe=null;se!==null&&Cm(Z,Y,se,fe,!1),ce!==null&&lt!==null&&Cm(Z,lt,ce,fe,!0)}}e:{if(Y=z?so(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var he=DT;else if(lm(Y))if(cm)he=FT;else{he=VT;var ge=LT}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(he=MT);if(he&&(he=he(r,z))){um(Z,he,a,X);break e}ge&&ge(r,Y,z),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&xs(Y,"number",Y.value)}switch(ge=z?so(z):window,r){case"focusin":(lm(ge)||ge.contentEditable==="true")&&(to=ge,vf=z,ka=null);break;case"focusout":ka=vf=to=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,_m(Z,a,X);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":_m(Z,a,X)}var ye;if(ct)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else eo?om(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(es&&a.locale!=="ko"&&(eo||we!=="onCompositionStart"?we==="onCompositionEnd"&&eo&&(ye=va()):(an=X,Hs="value"in an?an.value:an.textContent,eo=!0)),ge=su(z,we),0<ge.length&&(we=new Ta(we,r,null,a,X),Z.push({event:we,listeners:ge}),ye?we.data=ye:(ye=am(a),ye!==null&&(we.data=ye)))),(ye=ln?xT(r,a):NT(r,a))&&(z=su(z,"onBeforeInput"),0<z.length&&(X=new Ta("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:z}),X.data=ye))}Rm(Z,s)})}function Ca(r,s,a){return{instance:r,listener:s,currentTarget:a}}function su(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=at(r,a),g!=null&&c.unshift(Ca(r,g,d)),g=at(r,s),g!=null&&c.push(Ca(r,g,d))),r=r.return}return c}function ro(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Cm(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var A=a,P=A.alternate,z=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&z!==null&&(A=z,d?(P=at(a,g),P!=null&&v.unshift(Ca(a,P,A))):d||(P=at(a,g),P!=null&&v.push(Ca(a,P,A)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var HT=/\r\n?/g,qT=/\u0000|\uFFFD/g;function xm(r){return(typeof r=="string"?r:""+r).replace(HT,`
`).replace(qT,"")}function ou(r,s,a){if(s=xm(s),xm(r)!==s&&a)throw Error(t(425))}function au(){}var kf=null,Rf=null;function Pf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,KT=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(r){return Nm.resolve(null).then(r).catch(QT)}:Cf;function QT(r){setTimeout(function(){throw r})}function xf(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),On(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);On(s)}function oi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function bm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var io=Math.random().toString(36).slice(2),Xn="__reactFiber$"+io,xa="__reactProps$"+io,Sr="__reactContainer$"+io,Nf="__reactEvents$"+io,YT="__reactListeners$"+io,XT="__reactHandles$"+io;function ts(r){var s=r[Xn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[Xn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=bm(r);r!==null;){if(a=r[Xn])return a;r=bm(r)}return s}r=a,a=r.parentNode}return null}function Na(r){return r=r[Xn]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function so(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function lu(r){return r[xa]||null}var bf=[],oo=-1;function ai(r){return{current:r}}function Ye(r){0>oo||(r.current=bf[oo],bf[oo]=null,oo--)}function Ke(r,s){oo++,bf[oo]=r.current,r.current=s}var li={},Vt=ai(li),Xt=ai(!1),ns=li;function ao(r,s){var a=r.type.contextTypes;if(!a)return li;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function uu(){Ye(Xt),Ye(Vt)}function Om(r,s,a){if(Vt.current!==li)throw Error(t(168));Ke(Vt,s),Ke(Xt,a)}function Dm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,je(r)||"Unknown",d));return ae({},a,c)}function cu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||li,ns=Vt.current,Ke(Vt,r),Ke(Xt,Xt.current),!0}function Lm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Dm(r,s,ns),c.__reactInternalMemoizedMergedChildContext=r,Ye(Xt),Ye(Vt),Ke(Vt,r)):Ye(Xt),Ke(Xt,a)}var Ar=null,fu=!1,Of=!1;function Vm(r){Ar===null?Ar=[r]:Ar.push(r)}function JT(r){fu=!0,Vm(r)}function ui(){if(!Of&&Ar!==null){Of=!0;var r=0,s=Oe;try{var a=Ar;for(Oe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ar=null,fu=!1}catch(d){throw Ar!==null&&(Ar=Ar.slice(r+1)),js(Gi,ui),d}finally{Oe=s,Of=!1}}return null}var lo=[],uo=0,hu=null,du=0,yn=[],_n=0,rs=null,kr=1,Rr="";function is(r,s){lo[uo++]=du,lo[uo++]=hu,hu=r,du=s}function Mm(r,s,a){yn[_n++]=kr,yn[_n++]=Rr,yn[_n++]=rs,rs=r;var c=kr;r=Rr;var d=32-Ht(c)-1;c&=~(1<<d),a+=1;var g=32-Ht(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,kr=1<<32-Ht(s)+d|a<<d|c,Rr=g+r}else kr=1<<g|a<<d|c,Rr=r}function Df(r){r.return!==null&&(is(r,1),Mm(r,1,0))}function Lf(r){for(;r===hu;)hu=lo[--uo],lo[uo]=null,du=lo[--uo],lo[uo]=null;for(;r===rs;)rs=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null,kr=yn[--_n],yn[_n]=null}var un=null,cn=null,Ze=!1,Vn=null;function Fm(r,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Um(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=oi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=rs!==null?{id:kr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function Vf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Mf(r){if(Ze){var s=cn;if(s){var a=s;if(!Um(r,s)){if(Vf(r))throw Error(t(418));s=oi(a.nextSibling);var c=un;s&&Um(r,s)?Fm(c,a):(r.flags=r.flags&-4097|2,Ze=!1,un=r)}}else{if(Vf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,un=r}}}function jm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function pu(r){if(r!==un)return!1;if(!Ze)return jm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Pf(r.type,r.memoizedProps)),s&&(s=cn)){if(Vf(r))throw zm(),Error(t(418));for(;s;)Fm(r,s),s=oi(s.nextSibling)}if(jm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){cn=oi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?oi(r.stateNode.nextSibling):null;return!0}function zm(){for(var r=cn;r;)r=oi(r.nextSibling)}function co(){cn=un=null,Ze=!1}function Ff(r){Vn===null?Vn=[r]:Vn.push(r)}var ZT=oe.ReactCurrentBatchConfig;function ba(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=d.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function mu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Bm(r){var s=r._init;return s(r._payload)}function $m(r){function s(U,b){if(r){var j=U.deletions;j===null?(U.deletions=[b],U.flags|=16):j.push(b)}}function a(U,b){if(!r)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function c(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function d(U,b){return U=yi(U,b),U.index=0,U.sibling=null,U}function g(U,b,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<b?(U.flags|=2,b):j):(U.flags|=2,b)):(U.flags|=1048576,b)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,b,j,ne){return b===null||b.tag!==6?(b=Ch(j,U.mode,ne),b.return=U,b):(b=d(b,j),b.return=U,b)}function P(U,b,j,ne){var he=j.type;return he===x?X(U,b,j.props.children,ne,j.key):b!==null&&(b.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Bm(he)===b.type)?(ne=d(b,j.props),ne.ref=ba(U,b,j),ne.return=U,ne):(ne=Uu(j.type,j.key,j.props,null,U.mode,ne),ne.ref=ba(U,b,j),ne.return=U,ne)}function z(U,b,j,ne){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=xh(j,U.mode,ne),b.return=U,b):(b=d(b,j.children||[]),b.return=U,b)}function X(U,b,j,ne,he){return b===null||b.tag!==7?(b=hs(j,U.mode,ne,he),b.return=U,b):(b=d(b,j),b.return=U,b)}function Z(U,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Ch(""+b,U.mode,j),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _e:return j=Uu(b.type,b.key,b.props,null,U.mode,j),j.ref=ba(U,null,b),j.return=U,j;case Te:return b=xh(b,U.mode,j),b.return=U,b;case Lt:var ne=b._init;return Z(U,ne(b._payload),j)}if(mr(b)||me(b))return b=hs(b,U.mode,j,null),b.return=U,b;mu(U,b)}return null}function Y(U,b,j,ne){var he=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:A(U,b,""+j,ne);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _e:return j.key===he?P(U,b,j,ne):null;case Te:return j.key===he?z(U,b,j,ne):null;case Lt:return he=j._init,Y(U,b,he(j._payload),ne)}if(mr(j)||me(j))return he!==null?null:X(U,b,j,ne,null);mu(U,j)}return null}function se(U,b,j,ne,he){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(j)||null,A(b,U,""+ne,he);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case _e:return U=U.get(ne.key===null?j:ne.key)||null,P(b,U,ne,he);case Te:return U=U.get(ne.key===null?j:ne.key)||null,z(b,U,ne,he);case Lt:var ge=ne._init;return se(U,b,j,ge(ne._payload),he)}if(mr(ne)||me(ne))return U=U.get(j)||null,X(b,U,ne,he,null);mu(b,ne)}return null}function ce(U,b,j,ne){for(var he=null,ge=null,ye=b,we=b=0,At=null;ye!==null&&we<j.length;we++){ye.index>we?(At=ye,ye=null):At=ye.sibling;var Ue=Y(U,ye,j[we],ne);if(Ue===null){ye===null&&(ye=At);break}r&&ye&&Ue.alternate===null&&s(U,ye),b=g(Ue,b,we),ge===null?he=Ue:ge.sibling=Ue,ge=Ue,ye=At}if(we===j.length)return a(U,ye),Ze&&is(U,we),he;if(ye===null){for(;we<j.length;we++)ye=Z(U,j[we],ne),ye!==null&&(b=g(ye,b,we),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ze&&is(U,we),he}for(ye=c(U,ye);we<j.length;we++)At=se(ye,U,we,j[we],ne),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?we:At.key),b=g(At,b,we),ge===null?he=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(_i){return s(U,_i)}),Ze&&is(U,we),he}function fe(U,b,j,ne){var he=me(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ge=he=null,ye=b,we=b=0,At=null,Ue=j.next();ye!==null&&!Ue.done;we++,Ue=j.next()){ye.index>we?(At=ye,ye=null):At=ye.sibling;var _i=Y(U,ye,Ue.value,ne);if(_i===null){ye===null&&(ye=At);break}r&&ye&&_i.alternate===null&&s(U,ye),b=g(_i,b,we),ge===null?he=_i:ge.sibling=_i,ge=_i,ye=At}if(Ue.done)return a(U,ye),Ze&&is(U,we),he;if(ye===null){for(;!Ue.done;we++,Ue=j.next())Ue=Z(U,Ue.value,ne),Ue!==null&&(b=g(Ue,b,we),ge===null?he=Ue:ge.sibling=Ue,ge=Ue);return Ze&&is(U,we),he}for(ye=c(U,ye);!Ue.done;we++,Ue=j.next())Ue=se(ye,U,we,Ue.value,ne),Ue!==null&&(r&&Ue.alternate!==null&&ye.delete(Ue.key===null?we:Ue.key),b=g(Ue,b,we),ge===null?he=Ue:ge.sibling=Ue,ge=Ue);return r&&ye.forEach(function(b0){return s(U,b0)}),Ze&&is(U,we),he}function lt(U,b,j,ne){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case _e:e:{for(var he=j.key,ge=b;ge!==null;){if(ge.key===he){if(he=j.type,he===x){if(ge.tag===7){a(U,ge.sibling),b=d(ge,j.props.children),b.return=U,U=b;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Lt&&Bm(he)===ge.type){a(U,ge.sibling),b=d(ge,j.props),b.ref=ba(U,ge,j),b.return=U,U=b;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===x?(b=hs(j.props.children,U.mode,ne,j.key),b.return=U,U=b):(ne=Uu(j.type,j.key,j.props,null,U.mode,ne),ne.ref=ba(U,b,j),ne.return=U,U=ne)}return v(U);case Te:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(U,b.sibling),b=d(b,j.children||[]),b.return=U,U=b;break e}else{a(U,b);break}else s(U,b);b=b.sibling}b=xh(j,U.mode,ne),b.return=U,U=b}return v(U);case Lt:return ge=j._init,lt(U,b,ge(j._payload),ne)}if(mr(j))return ce(U,b,j,ne);if(me(j))return fe(U,b,j,ne);mu(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(U,b.sibling),b=d(b,j),b.return=U,U=b):(a(U,b),b=Ch(j,U.mode,ne),b.return=U,U=b),v(U)):a(U,b)}return lt}var fo=$m(!0),Wm=$m(!1),gu=ai(null),yu=null,ho=null,Uf=null;function jf(){Uf=ho=yu=null}function zf(r){var s=gu.current;Ye(gu),r._currentValue=s}function Bf(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function po(r,s){yu=r,Uf=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Zt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Uf!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(yu===null)throw Error(t(308));ho=r,yu.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var ss=null;function $f(r){ss===null?ss=[r]:ss.push(r)}function Hm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,$f(s)):(a.next=d.next,d.next=a),s.interleaved=a,Pr(r,c)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ci=!1;function Wf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function fi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Fe&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Pr(r,a)}return d=c.interleaved,d===null?(s.next=s,$f(c)):(s.next=d.next,d.next=s),c.interleaved=s,Pr(r,a)}function _u(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ei(r,a)}}function Gm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function vu(r,s,a,c){var d=r.updateQueue;ci=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,z=P.next;P.next=null,v===null?g=z:v.next=z,v=P;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==v&&(A===null?X.firstBaseUpdate=z:A.next=z,X.lastBaseUpdate=P))}if(g!==null){var Z=d.baseState;v=0,X=z=P=null,A=g;do{var Y=A.lane,se=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,fe=A;switch(Y=s,se=a,fe.tag){case 1:if(ce=fe.payload,typeof ce=="function"){Z=ce.call(se,Z,Y);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=fe.payload,Y=typeof ce=="function"?ce.call(se,Z,Y):ce,Y==null)break e;Z=ae({},Z,Y);break e;case 2:ci=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else se={eventTime:se,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(z=X=se,P=Z):X=X.next=se,v|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(P=Z),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);ls|=v,r.lanes=v,r.memoizedState=Z}}function Km(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Oa={},Jn=ai(Oa),Da=ai(Oa),La=ai(Oa);function os(r){if(r===Oa)throw Error(t(174));return r}function Hf(r,s){switch(Ke(La,s),Ke(Da,r),Ke(Jn,Oa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ye(Jn),Ke(Jn,s)}function mo(){Ye(Jn),Ye(Da),Ye(La)}function Qm(r){os(La.current);var s=os(Jn.current),a=pt(s,r.type);s!==a&&(Ke(Da,r),Ke(Jn,a))}function qf(r){Da.current===r&&(Ye(Jn),Ye(Da))}var et=ai(0);function Eu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gf=[];function Kf(){for(var r=0;r<Gf.length;r++)Gf[r]._workInProgressVersionPrimary=null;Gf.length=0}var wu=oe.ReactCurrentDispatcher,Qf=oe.ReactCurrentBatchConfig,as=0,tt=null,gt=null,It=null,Tu=!1,Va=!1,Ma=0,e0=0;function Mt(){throw Error(t(321))}function Yf(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function Xf(r,s,a,c,d,g){if(as=g,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,wu.current=r===null||r.memoizedState===null?i0:s0,r=a(c,d),Va){g=0;do{if(Va=!1,Ma=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,wu.current=o0,r=a(c,d)}while(Va)}if(wu.current=Au,s=gt!==null&&gt.next!==null,as=0,It=gt=tt=null,Tu=!1,s)throw Error(t(300));return r}function Jf(){var r=Ma!==0;return Ma=0,r}function Zn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=r:It=It.next=r,It}function En(){if(gt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?tt.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?tt.memoizedState=It=r:It=It.next=r}return It}function Fa(r,s){return typeof s=="function"?s(r):s}function Zf(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=v=null,P=null,z=g;do{var X=z.lane;if((as&X)===X)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var Z={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(A=P=Z,v=c):P=P.next=Z,tt.lanes|=X,ls|=X}z=z.next}while(z!==null&&z!==g);P===null?v=c:P.next=A,Ln(c,s.memoizedState)||(Zt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,tt.lanes|=g,ls|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function eh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Ln(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Ym(){}function Xm(r,s){var a=tt,c=En(),d=s(),g=!Ln(c.memoizedState,d);if(g&&(c.memoizedState=d,Zt=!0),c=c.queue,th(eg.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,Ua(9,Zm.bind(null,a,c,d,s),void 0,null),St===null)throw Error(t(349));as&30||Jm(a,s,d)}return d}function Jm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Zm(r,s,a,c){s.value=a,s.getSnapshot=c,tg(s)&&ng(r)}function eg(r,s,a){return a(function(){tg(s)&&ng(r)})}function tg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function ng(r){var s=Pr(r,1);s!==null&&jn(s,r,1,-1)}function rg(r){var s=Zn();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:r},s.queue=r,r=r.dispatch=r0.bind(null,tt,r),[s.memoizedState,r]}function Ua(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function ig(){return En().memoizedState}function Iu(r,s,a,c){var d=Zn();tt.flags|=r,d.memoizedState=Ua(1|s,a,void 0,c===void 0?null:c)}function Su(r,s,a,c){var d=En();c=c===void 0?null:c;var g=void 0;if(gt!==null){var v=gt.memoizedState;if(g=v.destroy,c!==null&&Yf(c,v.deps)){d.memoizedState=Ua(s,a,g,c);return}}tt.flags|=r,d.memoizedState=Ua(1|s,a,g,c)}function sg(r,s){return Iu(8390656,8,r,s)}function th(r,s){return Su(2048,8,r,s)}function og(r,s){return Su(4,2,r,s)}function ag(r,s){return Su(4,4,r,s)}function lg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ug(r,s,a){return a=a!=null?a.concat([r]):null,Su(4,4,lg.bind(null,s,r),a)}function nh(){}function cg(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Yf(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function fg(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Yf(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function hg(r,s,a){return as&21?(Ln(a,s)||(a=Yi(),tt.lanes|=a,ls|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a)}function t0(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var c=Qf.transition;Qf.transition={};try{r(!1),s()}finally{Oe=a,Qf.transition=c}}function dg(){return En().memoizedState}function n0(r,s,a){var c=mi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},pg(r))mg(s,a);else if(a=Hm(r,s,a,c),a!==null){var d=Kt();jn(a,r,c,d),gg(a,s,c)}}function r0(r,s,a){var c=mi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(pg(r))mg(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,a);if(d.hasEagerState=!0,d.eagerState=A,Ln(A,v)){var P=s.interleaved;P===null?(d.next=d,$f(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Hm(r,s,d,c),a!==null&&(d=Kt(),jn(a,r,c,d),gg(a,s,c))}}function pg(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function mg(r,s){Va=Tu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function gg(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ei(r,a)}}var Au={readContext:vn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},i0={readContext:vn,useCallback:function(r,s){return Zn().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:sg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Iu(4194308,4,lg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Iu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Iu(4,2,r,s)},useMemo:function(r,s){var a=Zn();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=Zn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=n0.bind(null,tt,r),[c.memoizedState,r]},useRef:function(r){var s=Zn();return r={current:r},s.memoizedState=r},useState:rg,useDebugValue:nh,useDeferredValue:function(r){return Zn().memoizedState=r},useTransition:function(){var r=rg(!1),s=r[0];return r=t0.bind(null,r[1]),Zn().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=tt,d=Zn();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));as&30||Jm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,sg(eg.bind(null,c,g,r),[r]),c.flags|=2048,Ua(9,Zm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=Zn(),s=St.identifierPrefix;if(Ze){var a=Rr,c=kr;a=(c&~(1<<32-Ht(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ma++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=e0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},s0={readContext:vn,useCallback:cg,useContext:vn,useEffect:th,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:ag,useMemo:fg,useReducer:Zf,useRef:ig,useState:function(){return Zf(Fa)},useDebugValue:nh,useDeferredValue:function(r){var s=En();return hg(s,gt.memoizedState,r)},useTransition:function(){var r=Zf(Fa)[0],s=En().memoizedState;return[r,s]},useMutableSource:Ym,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1},o0={readContext:vn,useCallback:cg,useContext:vn,useEffect:th,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:ag,useMemo:fg,useReducer:eh,useRef:ig,useState:function(){return eh(Fa)},useDebugValue:nh,useDeferredValue:function(r){var s=En();return gt===null?s.memoizedState=r:hg(s,gt.memoizedState,r)},useTransition:function(){var r=eh(Fa)[0],s=En().memoizedState;return[r,s]},useMutableSource:Ym,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function rh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ku={isMounted:function(r){return(r=r._reactInternals)?Pn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=mi(r),g=Cr(c,d);g.payload=s,a!=null&&(g.callback=a),s=fi(r,g,d),s!==null&&(jn(s,r,d,c),_u(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=mi(r),g=Cr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=fi(r,g,d),s!==null&&(jn(s,r,d,c),_u(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),c=mi(r),d=Cr(a,c);d.tag=2,s!=null&&(d.callback=s),s=fi(r,d,c),s!==null&&(jn(s,r,c,a),_u(s,r,c))}};function yg(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!Aa(a,c)||!Aa(d,g):!0}function _g(r,s,a){var c=!1,d=li,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(d=Jt(s)?ns:Vt.current,c=s.contextTypes,g=(c=c!=null)?ao(r,d):li),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ku,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function vg(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&ku.enqueueReplaceState(s,s.state,null)}function ih(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Wf(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=vn(g):(g=Jt(s)?ns:Vt.current,d.context=ao(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(rh(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&ku.enqueueReplaceState(d,d.state,null),vu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function go(r,s){try{var a="",c=s;do a+=Pe(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function sh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function oh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var a0=typeof WeakMap=="function"?WeakMap:Map;function Eg(r,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Ou||(Ou=!0,wh=c),oh(r,s)},a}function wg(r,s,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){oh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){oh(r,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Tg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new a0;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=w0.bind(null,r,s,a),s.then(r,r))}function Ig(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Sg(r,s,a,c,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,fi(a,s,1))),a.lanes|=1),r)}var l0=oe.ReactCurrentOwner,Zt=!1;function Gt(r,s,a,c){s.child=r===null?Wm(s,null,a,c):fo(s,r.child,a,c)}function Ag(r,s,a,c,d){a=a.render;var g=s.ref;return po(s,d),c=Xf(r,s,a,c,g,d),a=Jf(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Ze&&a&&Df(s),s.flags|=1,Gt(r,s,c,d),s.child)}function kg(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!Ph(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Rg(r,s,g,c,d)):(r=Uu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(v,c)&&r.ref===s.ref)return xr(r,s,d)}return s.flags|=1,r=yi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Rg(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(Aa(g,c)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)r.flags&131072&&(Zt=!0);else return s.lanes=r.lanes,xr(r,s,d)}return ah(r,s,a,c,d)}function Pg(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(_o,fn),fn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(_o,fn),fn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ke(_o,fn),fn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,Ke(_o,fn),fn|=c;return Gt(r,s,d,a),s.child}function Cg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ah(r,s,a,c,d){var g=Jt(a)?ns:Vt.current;return g=ao(s,g),po(s,d),a=Xf(r,s,a,c,g,d),c=Jf(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Ze&&c&&Df(s),s.flags|=1,Gt(r,s,a,d),s.child)}function xg(r,s,a,c,d){if(Jt(a)){var g=!0;cu(s)}else g=!1;if(po(s,d),s.stateNode===null)Pu(r,s),_g(s,a,c),ih(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=vn(z):(z=Jt(a)?ns:Vt.current,z=ao(s,z));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";Z||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||P!==z)&&vg(s,v,c,z),ci=!1;var Y=s.memoizedState;v.state=Y,vu(s,c,v,d),P=s.memoizedState,A!==c||Y!==P||Xt.current||ci?(typeof X=="function"&&(rh(s,a,X,c),P=s.memoizedState),(A=ci||yg(s,a,A,c,Y,P,z))?(Z||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=z,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,qm(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Mn(s.type,A),v.props=z,Z=s.pendingProps,Y=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=vn(P):(P=Jt(a)?ns:Vt.current,P=ao(s,P));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==Z||Y!==P)&&vg(s,v,c,P),ci=!1,Y=s.memoizedState,v.state=Y,vu(s,c,v,d);var ce=s.memoizedState;A!==Z||Y!==ce||Xt.current||ci?(typeof se=="function"&&(rh(s,a,se,c),ce=s.memoizedState),(z=ci||yg(s,a,z,c,Y,ce,P)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return lh(r,s,a,c,g,d)}function lh(r,s,a,c,d,g){Cg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Lm(s,a,!1),xr(r,s,g);c=s.stateNode,l0.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=fo(s,r.child,null,g),s.child=fo(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=c.state,d&&Lm(s,a,!0),s.child}function Ng(r){var s=r.stateNode;s.pendingContext?Om(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Om(r,s.context,!1),Hf(r,s.containerInfo)}function bg(r,s,a,c,d){return co(),Ff(d),s.flags|=256,Gt(r,s,a,c),s.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(r){return{baseLanes:r,cachePool:null,transitions:null}}function Og(r,s,a){var c=s.pendingProps,d=et.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(et,d&1),r===null)return Mf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=ju(v,c,0,null),r=hs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=ch(a),s.memoizedState=uh,r):fh(s,v));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return u0(r,s,v,c,A,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,A=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=yi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=yi(A,g):(g=hs(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?ch(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=uh,c}return g=r.child,r=g.sibling,c=yi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function fh(r,s){return s=ju({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ru(r,s,a,c){return c!==null&&Ff(c),fo(s,r.child,null,a),r=fh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function u0(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=sh(Error(t(422))),Ru(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=ju({mode:"visible",children:c.children},d,0,null),g=hs(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&fo(s,r.child,null,v),s.child.memoizedState=ch(v),s.memoizedState=uh,g);if(!(s.mode&1))return Ru(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=sh(g,c,void 0),Ru(r,s,v,c)}if(A=(v&r.childLanes)!==0,Zt||A){if(c=St,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Pr(r,d),jn(c,r,d,-1))}return Rh(),c=sh(Error(t(421))),Ru(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=T0.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,cn=oi(d.nextSibling),un=s,Ze=!0,Vn=null,r!==null&&(yn[_n++]=kr,yn[_n++]=Rr,yn[_n++]=rs,kr=r.id,Rr=r.overflow,rs=s),s=fh(s,c.children),s.flags|=4096,s)}function Dg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Bf(r.return,s,a)}function hh(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Lg(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Gt(r,s,c.children,a),c=et.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Dg(r,a,s);else if(r.tag===19)Dg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(et,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Eu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),hh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Eu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}hh(s,!0,a,null,g);break;case"together":hh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Pu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function xr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ls|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=yi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=yi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function c0(r,s,a){switch(s.tag){case 3:Ng(s),co();break;case 5:Qm(s);break;case 1:Jt(s.type)&&cu(s);break;case 4:Hf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(gu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(et,et.current&1),s.flags|=128,null):a&s.child.childLanes?Og(r,s,a):(Ke(et,et.current&1),r=xr(r,s,a),r!==null?r.sibling:null);Ke(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Lg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Pg(r,s,a)}return xr(r,s,a)}var Vg,dh,Mg,Fg;Vg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},dh=function(){},Mg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,os(Jn.current);var g=null;switch(a){case"input":d=Ui(r,d),c=Ui(r,c),g=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":d=ea(r,d),c=ea(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=au)}oa(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var P=c[z];if(A=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==A&&(P!=null||A!=null))if(z==="style")if(A){for(v in A)!A.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&A[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Qe("scroll",r),g||A===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Fg=function(r,s,a,c){a!==c&&(s.flags|=4)};function ja(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function f0(r,s,a){var c=s.pendingProps;switch(Lf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Jt(s.type)&&uu(),Ft(s),null;case 3:return c=s.stateNode,mo(),Ye(Xt),Ye(Vt),Kf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(pu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Vn!==null&&(Sh(Vn),Vn=null))),dh(r,s),Ft(s),null;case 5:qf(s);var d=os(La.current);if(a=s.type,r!==null&&s.stateNode!=null)Mg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=os(Jn.current),pu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Xn]=s,c[xa]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<Ra.length;d++)Qe(Ra[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Cs(c,g),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",c);break;case"textarea":Ns(c,g),Qe("invalid",c)}oa(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&ou(c.textContent,A,r),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&ou(c.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":pr(c),bl(c,g,!0);break;case"textarea":pr(c),ta(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=au)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Xn]=s,r[xa]=c,Vg(r,s,!1,!1),s.stateNode=r;e:{switch(v=aa(a,c),a){case"dialog":Qe("cancel",r),Qe("close",r),d=c;break;case"iframe":case"object":case"embed":Qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<Ra.length;d++)Qe(Ra[d],r);d=c;break;case"source":Qe("error",r),d=c;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),d=c;break;case"details":Qe("toggle",r),d=c;break;case"input":Cs(r,c),d=Ui(r,c),Qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Qe("invalid",r);break;case"textarea":Ns(r,c),d=ea(r,c),Qe("invalid",r);break;default:d=c}oa(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var P=A[g];g==="style"?ia(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&na(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Qr(r,P):typeof P=="number"&&Qr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Qe("scroll",r):P!=null&&Q(r,g,P,v))}switch(a){case"input":pr(r),bl(r,c,!1);break;case"textarea":pr(r),ta(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ze(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=au)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Fg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=os(La.current),os(Jn.current),pu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Xn]=s,(g=c.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:ou(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ou(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Xn]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ye(et),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&cn!==null&&s.mode&1&&!(s.flags&128))zm(),co(),s.flags|=98560,g=!1;else if(g=pu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Xn]=s}else co(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Vn!==null&&(Sh(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||et.current&1?yt===0&&(yt=3):Rh())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return mo(),dh(r,s),r===null&&Pa(s.stateNode.containerInfo),Ft(s),null;case 10:return zf(s.type._context),Ft(s),null;case 17:return Jt(s.type)&&uu(),Ft(s),null;case 19:if(Ye(et),g=s.memoizedState,g===null)return Ft(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)ja(g,!1);else{if(yt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=Eu(r),v!==null){for(s.flags|=128,ja(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(et,et.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>vo&&(s.flags|=128,c=!0,ja(g,!1),s.lanes=4194304)}else{if(!c)if(r=Eu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ja(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ze)return Ft(s),null}else 2*Ge()-g.renderingStartTime>vo&&a!==1073741824&&(s.flags|=128,c=!0,ja(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=et.current,Ke(et,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return kh(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?fn&1073741824&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function h0(r,s){switch(Lf(s),s.tag){case 1:return Jt(s.type)&&uu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return mo(),Ye(Xt),Ye(Vt),Kf(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return qf(s),null;case 13:if(Ye(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));co()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(et),null;case 4:return mo(),null;case 10:return zf(s.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Cu=!1,Ut=!1,d0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function yo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(r,s,c)}else a.current=null}function ph(r,s,a){try{a()}catch(c){it(r,s,c)}}var Ug=!1;function p0(r,s){if(kf=ri,r=ym(),_f(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,A=-1,P=-1,z=0,X=0,Z=r,Y=null;t:for(;;){for(var se;Z!==a||d!==0&&Z.nodeType!==3||(A=v+d),Z!==g||c!==0&&Z.nodeType!==3||(P=v+c),Z.nodeType===3&&(v+=Z.nodeValue.length),(se=Z.firstChild)!==null;)Y=Z,Z=se;for(;;){if(Z===r)break t;if(Y===a&&++z===d&&(A=v),Y===g&&++X===c&&(P=v),(se=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=se}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:r,selectionRange:a},ri=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var fe=ce.memoizedProps,lt=ce.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Mn(s.type,fe),lt);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){it(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=Ug,Ug=!1,ce}function za(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&ph(s,a,g)}d=d.next}while(d!==c)}}function xu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function mh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function jg(r){var s=r.alternate;s!==null&&(r.alternate=null,jg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Xn],delete s[xa],delete s[Nf],delete s[YT],delete s[XT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function zg(r){return r.tag===5||r.tag===3||r.tag===4}function Bg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||zg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function gh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=au));else if(c!==4&&(r=r.child,r!==null))for(gh(r,s,a),r=r.sibling;r!==null;)gh(r,s,a),r=r.sibling}function yh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(yh(r,s,a),r=r.sibling;r!==null;)yh(r,s,a),r=r.sibling}var Ct=null,Fn=!1;function hi(r,s,a){for(a=a.child;a!==null;)$g(r,s,a),a=a.sibling}function $g(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Ki,a)}catch{}switch(a.tag){case 5:Ut||yo(a,s);case 6:var c=Ct,d=Fn;Ct=null,hi(r,s,a),Ct=c,Fn=d,Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?xf(r.parentNode,a):r.nodeType===1&&xf(r,a),On(r)):xf(Ct,a.stateNode));break;case 4:c=Ct,d=Fn,Ct=a.stateNode.containerInfo,Fn=!0,hi(r,s,a),Ct=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&ph(a,s,v),d=d.next}while(d!==c)}hi(r,s,a);break;case 1:if(!Ut&&(yo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){it(a,s,A)}hi(r,s,a);break;case 21:hi(r,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,hi(r,s,a),Ut=c):hi(r,s,a);break;default:hi(r,s,a)}}function Wg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new d0),s.forEach(function(c){var d=I0.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,Fn=!1;break e;case 3:Ct=A.stateNode.containerInfo,Fn=!0;break e;case 4:Ct=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));$g(g,v,d),Ct=null,Fn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){it(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Hg(s,r),s=s.sibling}function Hg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),er(r),c&4){try{za(3,r,r.return),xu(3,r)}catch(fe){it(r,r.return,fe)}try{za(5,r,r.return)}catch(fe){it(r,r.return,fe)}}break;case 1:Un(s,r),er(r),c&512&&a!==null&&yo(a,a.return);break;case 5:if(Un(s,r),er(r),c&512&&a!==null&&yo(a,a.return),r.flags&32){var d=r.stateNode;try{Qr(d,"")}catch(fe){it(r,r.return,fe)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Jo(d,g),aa(A,v);var z=aa(A,g);for(v=0;v<P.length;v+=2){var X=P[v],Z=P[v+1];X==="style"?ia(d,Z):X==="dangerouslySetInnerHTML"?na(d,Z):X==="children"?Qr(d,Z):Q(d,X,Z,z)}switch(A){case"input":Zo(d,g);break;case"textarea":bs(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?gr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?gr(d,!!g.multiple,g.defaultValue,!0):gr(d,!!g.multiple,g.multiple?[]:"",!1))}d[xa]=g}catch(fe){it(r,r.return,fe)}}break;case 6:if(Un(s,r),er(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(fe){it(r,r.return,fe)}}break;case 3:if(Un(s,r),er(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{On(s.containerInfo)}catch(fe){it(r,r.return,fe)}break;case 4:Un(s,r),er(r);break;case 13:Un(s,r),er(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Eh=Ge())),c&4&&Wg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||X,Un(s,r),Ut=z):Un(s,r),er(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&r.mode&1)for(ue=r,X=r.child;X!==null;){for(Z=ue=X;ue!==null;){switch(Y=ue,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:za(4,Y,Y.return);break;case 1:yo(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(fe){it(c,a,fe)}}break;case 5:yo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Kg(Z);continue}}se!==null?(se.return=Y,ue=se):Kg(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{d=Z.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,P=Z.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=ra("display",v))}catch(fe){it(r,r.return,fe)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(fe){it(r,r.return,fe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Un(s,r),er(r),c&4&&Wg(r);break;case 21:break;default:Un(s,r),er(r)}}function er(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(zg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Qr(d,""),c.flags&=-33);var g=Bg(r);yh(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Bg(r);gh(r,A,v);break;default:throw Error(t(161))}}catch(P){it(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function m0(r,s,a){ue=r,qg(r)}function qg(r,s,a){for(var c=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Cu;if(!v){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Ut;A=Cu;var z=Ut;if(Cu=v,(Ut=P)&&!z)for(ue=d;ue!==null;)v=ue,P=v.child,v.tag===22&&v.memoizedState!==null?Qg(d):P!==null?(P.return=v,ue=P):Qg(d);for(;g!==null;)ue=g,qg(g),g=g.sibling;ue=d,Cu=A,Ut=z}Gg(r)}else d.subtreeFlags&8772&&g!==null?(g.return=d,ue=g):Gg(r)}}function Gg(r){for(;ue!==null;){var s=ue;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ut||xu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Km(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Km(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&On(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&mh(s)}catch(Y){it(s,s.return,Y)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Kg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Qg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{xu(4,s)}catch(P){it(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){it(s,d,P)}}var g=s.return;try{mh(s)}catch(P){it(s,g,P)}break;case 5:var v=s.return;try{mh(s)}catch(P){it(s,v,P)}}}catch(P){it(s,s.return,P)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var g0=Math.ceil,Nu=oe.ReactCurrentDispatcher,_h=oe.ReactCurrentOwner,wn=oe.ReactCurrentBatchConfig,Fe=0,St=null,ft=null,xt=0,fn=0,_o=ai(0),yt=0,Ba=null,ls=0,bu=0,vh=0,$a=null,en=null,Eh=0,vo=1/0,Nr=null,Ou=!1,wh=null,di=null,Du=!1,pi=null,Lu=0,Wa=0,Th=null,Vu=-1,Mu=0;function Kt(){return Fe&6?Ge():Vu!==-1?Vu:Vu=Ge()}function mi(r){return r.mode&1?Fe&2&&xt!==0?xt&-xt:ZT.transition!==null?(Mu===0&&(Mu=Yi()),Mu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:_a(r.type)),r):1}function jn(r,s,a,c){if(50<Wa)throw Wa=0,Th=null,Error(t(185));Zr(r,a,c),(!(Fe&2)||r!==St)&&(r===St&&(!(Fe&2)&&(bu|=a),yt===4&&gi(r,xt)),tn(r,c),a===1&&Fe===0&&!(s.mode&1)&&(vo=Ge()+500,fu&&ui()))}function tn(r,s){var a=r.callbackNode;vr(r,s);var c=Qi(r,r===St?xt:0);if(c===0)a!==null&&da(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&da(a),s===1)r.tag===0?JT(Xg.bind(null,r)):Vm(Xg.bind(null,r)),KT(function(){!(Fe&6)&&ui()}),a=null;else{switch(ti(c)){case 1:a=Gi;break;case 4:a=Yr;break;case 16:a=pn;break;case 536870912:a=Ml;break;default:a=pn}a=sy(a,Yg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Yg(r,s){if(Vu=-1,Mu=0,Fe&6)throw Error(t(327));var a=r.callbackNode;if(Eo()&&r.callbackNode!==a)return null;var c=Qi(r,r===St?xt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Fu(r,c);else{s=c;var d=Fe;Fe|=2;var g=Zg();(St!==r||xt!==s)&&(Nr=null,vo=Ge()+500,cs(r,s));do try{v0();break}catch(A){Jg(r,A)}while(!0);jf(),Nu.current=g,Fe=d,ft!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(c=d,s=Ih(r,d))),s===1)throw a=Ba,cs(r,0),gi(r,c),tn(r,Ge()),a;if(s===6)gi(r,c);else{if(d=r.current.alternate,!(c&30)&&!y0(d)&&(s=Fu(r,c),s===2&&(g=on(r),g!==0&&(c=g,s=Ih(r,g))),s===1))throw a=Ba,cs(r,0),gi(r,c),tn(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:fs(r,en,Nr);break;case 3:if(gi(r,c),(c&130023424)===c&&(s=Eh+500-Ge(),10<s)){if(Qi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Cf(fs.bind(null,r,en,Nr),s);break}fs(r,en,Nr);break;case 4:if(gi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-Ht(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*g0(c/1960))-c,10<c){r.timeoutHandle=Cf(fs.bind(null,r,en,Nr),c);break}fs(r,en,Nr);break;case 5:fs(r,en,Nr);break;default:throw Error(t(329))}}}return tn(r,Ge()),r.callbackNode===a?Yg.bind(null,r):null}function Ih(r,s){var a=$a;return r.current.memoizedState.isDehydrated&&(cs(r,s).flags|=256),r=Fu(r,s),r!==2&&(s=en,en=a,s!==null&&Sh(s)),r}function Sh(r){en===null?en=r:en.push.apply(en,r)}function y0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Ln(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function gi(r,s){for(s&=~vh,s&=~bu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),c=1<<a;r[a]=-1,s&=~c}}function Xg(r){if(Fe&6)throw Error(t(327));Eo();var s=Qi(r,0);if(!(s&1))return tn(r,Ge()),null;var a=Fu(r,s);if(r.tag!==0&&a===2){var c=on(r);c!==0&&(s=c,a=Ih(r,c))}if(a===1)throw a=Ba,cs(r,0),gi(r,s),tn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,fs(r,en,Nr),tn(r,Ge()),null}function Ah(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(vo=Ge()+500,fu&&ui())}}function us(r){pi!==null&&pi.tag===0&&!(Fe&6)&&Eo();var s=Fe;Fe|=1;var a=wn.transition,c=Oe;try{if(wn.transition=null,Oe=1,r)return r()}finally{Oe=c,wn.transition=a,Fe=s,!(Fe&6)&&ui()}}function kh(){fn=_o.current,Ye(_o)}function cs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,GT(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(Lf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&uu();break;case 3:mo(),Ye(Xt),Ye(Vt),Kf();break;case 5:qf(c);break;case 4:mo();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:zf(c.type._context);break;case 22:case 23:kh()}a=a.return}if(St=r,ft=r=yi(r.current,null),xt=fn=s,yt=0,Ba=null,vh=bu=ls=0,en=$a=null,ss!==null){for(s=0;s<ss.length;s++)if(a=ss[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}ss=null}return r}function Jg(r,s){do{var a=ft;try{if(jf(),wu.current=Au,Tu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Tu=!1}if(as=0,It=gt=tt=null,Va=!1,Ma=0,_h.current=null,a===null||a.return===null){yt=1,Ba=s,ft=null;break}e:{var g=r,v=a.return,A=a,P=s;if(s=xt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,X=A,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Ig(v);if(se!==null){se.flags&=-257,Sg(se,v,A,g,s),se.mode&1&&Tg(g,z,s),s=se,P=z;var ce=s.updateQueue;if(ce===null){var fe=new Set;fe.add(P),s.updateQueue=fe}else ce.add(P);break e}else{if(!(s&1)){Tg(g,z,s),Rh();break e}P=Error(t(426))}}else if(Ze&&A.mode&1){var lt=Ig(v);if(lt!==null){!(lt.flags&65536)&&(lt.flags|=256),Sg(lt,v,A,g,s),Ff(go(P,A));break e}}g=P=go(P,A),yt!==4&&(yt=2),$a===null?$a=[g]:$a.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Eg(g,P,s);Gm(g,U);break e;case 1:A=P;var b=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(di===null||!di.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=wg(g,A,s);Gm(g,ne);break e}}g=g.return}while(g!==null)}ty(a)}catch(he){s=he,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function Zg(){var r=Nu.current;return Nu.current=Au,r===null?Au:r}function Rh(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!(ls&268435455)&&!(bu&268435455)||gi(St,xt)}function Fu(r,s){var a=Fe;Fe|=2;var c=Zg();(St!==r||xt!==s)&&(Nr=null,cs(r,s));do try{_0();break}catch(d){Jg(r,d)}while(!0);if(jf(),Fe=a,Nu.current=c,ft!==null)throw Error(t(261));return St=null,xt=0,yt}function _0(){for(;ft!==null;)ey(ft)}function v0(){for(;ft!==null&&!Ll();)ey(ft)}function ey(r){var s=iy(r.alternate,r,fn);r.memoizedProps=r.pendingProps,s===null?ty(r):ft=s,_h.current=null}function ty(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=h0(a,s),a!==null){a.flags&=32767,ft=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ft=null;return}}else if(a=f0(a,s,fn),a!==null){ft=a;return}if(s=s.sibling,s!==null){ft=s;return}ft=s=r}while(s!==null);yt===0&&(yt=5)}function fs(r,s,a){var c=Oe,d=wn.transition;try{wn.transition=null,Oe=1,E0(r,s,a,c)}finally{wn.transition=d,Oe=c}return null}function E0(r,s,a,c){do Eo();while(pi!==null);if(Fe&6)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(He(r,g),r===St&&(ft=St=null,xt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Du||(Du=!0,sy(pn,function(){return Eo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var v=Oe;Oe=1;var A=Fe;Fe|=4,_h.current=null,p0(r,a),Hg(a,r),jT(Rf),ri=!!kf,Rf=kf=null,r.current=a,m0(a),cf(),Fe=A,Oe=v,wn.transition=g}else r.current=a;if(Du&&(Du=!1,pi=r,Lu=d),g=r.pendingLanes,g===0&&(di=null),Fl(a.stateNode),tn(r,Ge()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ou)throw Ou=!1,r=wh,wh=null,r;return Lu&1&&r.tag!==0&&Eo(),g=r.pendingLanes,g&1?r===Th?Wa++:(Wa=0,Th=r):Wa=0,ui(),null}function Eo(){if(pi!==null){var r=ti(Lu),s=wn.transition,a=Oe;try{if(wn.transition=null,Oe=16>r?16:r,pi===null)var c=!1;else{if(r=pi,pi=null,Lu=0,Fe&6)throw Error(t(331));var d=Fe;for(Fe|=4,ue=r.current;ue!==null;){var g=ue,v=g.child;if(ue.flags&16){var A=g.deletions;if(A!==null){for(var P=0;P<A.length;P++){var z=A[P];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:za(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,ue=Z;else for(;ue!==null;){X=ue;var Y=X.sibling,se=X.return;if(jg(X),X===z){ue=null;break}if(Y!==null){Y.return=se,ue=Y;break}ue=se}}}var ce=g.alternate;if(ce!==null){var fe=ce.child;if(fe!==null){ce.child=null;do{var lt=fe.sibling;fe.sibling=null,fe=lt}while(fe!==null)}}ue=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ue=v;else e:for(;ue!==null;){if(g=ue,g.flags&2048)switch(g.tag){case 0:case 11:case 15:za(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ue=U;break e}ue=g.return}}var b=r.current;for(ue=b;ue!==null;){v=ue;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,ue=j;else e:for(v=b;ue!==null;){if(A=ue,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:xu(9,A)}}catch(he){it(A,A.return,he)}if(A===v){ue=null;break e}var ne=A.sibling;if(ne!==null){ne.return=A.return,ue=ne;break e}ue=A.return}}if(Fe=d,ui(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Ki,r)}catch{}c=!0}return c}finally{Oe=a,wn.transition=s}}return!1}function ny(r,s,a){s=go(a,s),s=Eg(r,s,1),r=fi(r,s,1),s=Kt(),r!==null&&(Zr(r,1,s),tn(r,s))}function it(r,s,a){if(r.tag===3)ny(r,r,a);else for(;s!==null;){if(s.tag===3){ny(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){r=go(a,r),r=wg(s,r,1),s=fi(s,r,1),r=Kt(),s!==null&&(Zr(s,1,r),tn(s,r));break}}s=s.return}}function w0(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>Ge()-Eh?cs(r,0):vh|=a),tn(r,s)}function ry(r,s){s===0&&(r.mode&1?(s=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):s=1);var a=Kt();r=Pr(r,s),r!==null&&(Zr(r,s,a),tn(r,a))}function T0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),ry(r,a)}function I0(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ry(r,a)}var iy;iy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Zt=!1,c0(r,s,a);Zt=!!(r.flags&131072)}else Zt=!1,Ze&&s.flags&1048576&&Mm(s,du,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Pu(r,s),r=s.pendingProps;var d=ao(s,Vt.current);po(s,a),d=Xf(null,s,c,r,d,a);var g=Jf();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(g=!0,cu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wf(s),d.updater=ku,s.stateNode=d,d._reactInternals=s,ih(s,c,r,a),s=lh(null,s,c,!0,g,a)):(s.tag=0,Ze&&g&&Df(s),Gt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Pu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=A0(c),r=Mn(c,r),d){case 0:s=ah(null,s,c,r,a);break e;case 1:s=xg(null,s,c,r,a);break e;case 11:s=Ag(null,s,c,r,a);break e;case 14:s=kg(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),ah(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),xg(r,s,c,d,a);case 3:e:{if(Ng(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,qm(r,s),vu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=go(Error(t(423)),s),s=bg(r,s,c,a,d);break e}else if(c!==d){d=go(Error(t(424)),s),s=bg(r,s,c,a,d);break e}else for(cn=oi(s.stateNode.containerInfo.firstChild),un=s,Ze=!0,Vn=null,a=Wm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(co(),c===d){s=xr(r,s,a);break e}Gt(r,s,c,a)}s=s.child}return s;case 5:return Qm(s),r===null&&Mf(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,Pf(c,d)?v=null:g!==null&&Pf(c,g)&&(s.flags|=32),Cg(r,s),Gt(r,s,v,a),s.child;case 6:return r===null&&Mf(s),null;case 13:return Og(r,s,a);case 4:return Hf(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=fo(s,null,c,a):Gt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Ag(r,s,c,d,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,Ke(gu,c._currentValue),c._currentValue=v,g!==null)if(Ln(g.value,v)){if(g.children===d.children&&!Xt.current){s=xr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Cr(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?P.next=P:(P.next=X.next,X.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Bf(g.return,a,s),A.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Bf(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Gt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,po(s,a),d=vn(d),c=c(d),s.flags|=1,Gt(r,s,c,a),s.child;case 14:return c=s.type,d=Mn(c,s.pendingProps),d=Mn(c.type,d),kg(r,s,c,d,a);case 15:return Rg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Mn(c,d),Pu(r,s),s.tag=1,Jt(c)?(r=!0,cu(s)):r=!1,po(s,a),_g(s,c,d),ih(s,c,d,a),lh(null,s,c,!0,r,a);case 19:return Lg(r,s,a);case 22:return Pg(r,s,a)}throw Error(t(156,s.tag))};function sy(r,s){return js(r,s)}function S0(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new S0(r,s,a,c)}function Ph(r){return r=r.prototype,!(!r||!r.isReactComponent)}function A0(r){if(typeof r=="function")return Ph(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Dt)return 14}return 2}function yi(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Uu(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")Ph(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case x:return hs(a.children,d,g,s);case S:v=8,d|=8;break;case k:return r=Tn(12,a,s,d|2),r.elementType=k,r.lanes=g,r;case R:return r=Tn(13,a,s,d),r.elementType=R,r.lanes=g,r;case ot:return r=Tn(19,a,s,d),r.elementType=ot,r.lanes=g,r;case We:return ju(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case C:v=10;break e;case O:v=9;break e;case M:v=11;break e;case Dt:v=14;break e;case Lt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Tn(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function hs(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function ju(r,s,a,c){return r=Tn(22,r,c,s),r.elementType=We,r.lanes=a,r.stateNode={isHidden:!1},r}function Ch(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function xh(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function k0(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nh(r,s,a,c,d,g,v,A,P){return r=new k0(r,s,a,A,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Tn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(g),r}function R0(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function oy(r){if(!r)return li;r=r._reactInternals;e:{if(Pn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return Dm(r,a,s)}return s}function ay(r,s,a,c,d,g,v,A,P){return r=Nh(a,c,!0,r,d,g,v,A,P),r.context=oy(null),a=r.current,c=Kt(),d=mi(a),g=Cr(c,d),g.callback=s??null,fi(a,g,d),r.current.lanes=d,Zr(r,d,c),tn(r,c),r}function zu(r,s,a,c){var d=s.current,g=Kt(),v=mi(d);return a=oy(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=fi(d,s,v),r!==null&&(jn(r,d,v,g),_u(r,d,v)),v}function Bu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ly(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function bh(r,s){ly(r,s),(r=r.alternate)&&ly(r,s)}function P0(){return null}var uy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Oh(r){this._internalRoot=r}$u.prototype.render=Oh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));zu(r,s,null,null)},$u.prototype.unmount=Oh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;us(function(){zu(null,r,null,null)}),s[Sr]=null}};function $u(r){this._internalRoot=r}$u.prototype.unstable_scheduleHydration=function(r){if(r){var s=$l();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Gn.length&&s!==0&&s<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&ql(r)}};function Dh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function cy(){}function C0(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=Bu(v);g.call(z)}}var v=ay(s,c,r,0,null,!1,!1,"",cy);return r._reactRootContainer=v,r[Sr]=v.current,Pa(r.nodeType===8?r.parentNode:r),us(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=Bu(P);A.call(z)}}var P=Nh(r,0,!1,null,null,!1,!1,"",cy);return r._reactRootContainer=P,r[Sr]=P.current,Pa(r.nodeType===8?r.parentNode:r),us(function(){zu(s,P,a,c)}),P}function Hu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var A=d;d=function(){var P=Bu(v);A.call(P)}}zu(s,v,r,d)}else v=C0(a,s,r,d,c);return Bu(v)}zl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Xr(s.pendingLanes);a!==0&&(ei(s,a|1),tn(s,Ge()),!(Fe&6)&&(vo=Ge()+500,ui()))}break;case 13:us(function(){var c=Pr(r,1);if(c!==null){var d=Kt();jn(c,r,1,d)}}),bh(r,1)}},$s=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=Kt();jn(s,r,134217728,a)}bh(r,134217728)}},Bl=function(r){if(r.tag===13){var s=mi(r),a=Pr(r,s);if(a!==null){var c=Kt();jn(a,r,s,c)}bh(r,s)}},$l=function(){return Oe},Wl=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},Ds=function(r,s,a){switch(s){case"input":if(Zo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=lu(c);if(!d)throw Error(t(90));Ps(c),Zo(c,d)}}}break;case"textarea":bs(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},$i=Ah,ua=us;var x0={usingClientEntryPoint:!1,Events:[Na,so,lu,Hn,la,Ah]},Ha={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N0={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ha(r),r===null?null:r.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||P0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Ki=qu.inject(N0),sn=qu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dh(s))throw Error(t(200));return R0(r,s,null,a)},nn.createRoot=function(r,s){if(!Dh(r))throw Error(t(299));var a=!1,c="",d=uy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Nh(r,1,!1,null,null,a,!1,c,d),r[Sr]=s.current,Pa(r.nodeType===8?r.parentNode:r),new Oh(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ha(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return us(r)},nn.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return Hu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Dh(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=uy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=ay(s,null,r,1,a??null,d,!1,g,v),r[Sr]=s.current,Pa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new $u(s)},nn.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return Hu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(us(function(){Hu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},nn.unstable_batchedUpdates=Ah,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Hu(r,s,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var _y;function U0(){if(_y)return Mh.exports;_y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mh.exports=F0(),Mh.exports}var vy;function j0(){if(vy)return Gu;vy=1;var n=U0();return Gu.createRoot=n.createRoot,Gu.hydrateRoot=n.hydrateRoot,Gu}var z0=j0(),Ey={};/**
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
 */const _v=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},B0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],f=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(f&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],f=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|f&63)}}return e.join("")},vv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],f=o+1<n.length,h=f?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|h>>4;let I=(h&15)<<2|y>>6,N=y&63;p||(N=64,f||(I=64)),i.push(t[E],t[T],t[I],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_v(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):B0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||y==null||T==null)throw new $0;const I=l<<2|h>>4;if(i.push(I),y!==64){const N=h<<4&240|y>>2;if(i.push(N),T!==64){const V=y<<6&192|T;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W0=function(n){const e=_v(n);return vv.encodeByteArray(e,!0)},gc=function(n){return W0(n).replace(/\./g,"")},Ev=function(n){try{return vv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function H0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q0=()=>H0().__FIREBASE_DEFAULTS__,G0=()=>{if(typeof process>"u"||typeof Ey>"u")return;const n=Ey.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},K0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ev(n[1]);return e&&JSON.parse(e)},Uc=()=>{try{return q0()||G0()||K0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wv=n=>{var e,t;return(t=(e=Uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Q0=n=>{const e=wv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Tv=()=>{var n;return(n=Uc())===null||n===void 0?void 0:n.config},Iv=n=>{var e;return(e=Uc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Y0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function X0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gc(JSON.stringify(t)),gc(JSON.stringify(f)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Z0(){var n;const e=(n=Uc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rI(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iI(){return!Z0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function oI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const aI="FirebaseError";class qr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=aI,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],f=l?lI(l,i):"Error",h=`${this.serviceName}: ${f} (${o}).`;return new qr(o,h,i)}}function lI(n,e){return n.replace(uI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const uI=/\{\$([^}]+)}/g;function cI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],f=e[o];if(wy(l)&&wy(f)){if(!yc(l,f))return!1}else if(l!==f)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function wy(n){return n!==null&&typeof n=="object"}/**
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
 */function vl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fI(n,e){const t=new hI(n,e);return t.subscribe.bind(t)}class hI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");dI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=jh),o.error===void 0&&(o.error=jh),o.complete===void 0&&(o.complete=jh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jh(){}/**
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
 */function An(n){return n&&n._delegate?n._delegate:n}class _s{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class pI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Y0;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gI(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,f]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&f.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const f=this.instances.get(o);return f&&e(f,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mI(n){return n===ds?void 0:n}function gI(n){return n.instantiationMode==="EAGER"}/**
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
 */class yI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const _I={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},vI=Ne.INFO,EI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},wI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=EI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=vI,this._logHandler=wI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const TI=(n,e)=>e.some(t=>n instanceof t);let Ty,Iy;function II(){return Ty||(Ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return Iy||(Iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sv=new WeakMap,ld=new WeakMap,Av=new WeakMap,zh=new WeakMap,Zd=new WeakMap;function AI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",f)},l=()=>{t(Ai(n.result)),o()},f=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&Sv.set(t,n)}).catch(()=>{}),Zd.set(e,n),e}function kI(n){if(ld.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",f),n.removeEventListener("abort",f)},l=()=>{t(),o()},f=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",f),n.addEventListener("abort",f)});ld.set(n,e)}let ud={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ld.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Av.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function RI(n){ud=n(ud)}function PI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Bh(this),e,...t);return Av.set(i,e.sort?e.sort():[e]),Ai(i)}:SI().includes(n)?function(...e){return n.apply(Bh(this),e),Ai(Sv.get(this))}:function(...e){return Ai(n.apply(Bh(this),e))}}function CI(n){return typeof n=="function"?PI(n):(n instanceof IDBTransaction&&kI(n),TI(n,II())?new Proxy(n,ud):n)}function Ai(n){if(n instanceof IDBRequest)return AI(n);if(zh.has(n))return zh.get(n);const e=CI(n);return e!==n&&(zh.set(n,e),Zd.set(e,n)),e}const Bh=n=>Zd.get(n);function xI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const f=indexedDB.open(n,e),h=Ai(f);return i&&f.addEventListener("upgradeneeded",p=>{i(Ai(f.result),p.oldVersion,p.newVersion,Ai(f.transaction),p)}),t&&f.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const NI=["get","getKey","getAll","getAllKeys","count"],bI=["put","add","delete","clear"],$h=new Map;function Sy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=bI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||NI.includes(t)))return;const l=async function(f,...h){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return $h.set(e,l),l}RI(n=>({...n,get:(e,t,i)=>Sy(e,t)||n.get(e,t,i),has:(e,t)=>!!Sy(e,t)||n.has(e,t)}));/**
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
 */class OI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function DI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",Ay="0.10.18";/**
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
 */const jr=new Jd("@firebase/app"),LI="@firebase/app-compat",VI="@firebase/analytics-compat",MI="@firebase/analytics",FI="@firebase/app-check-compat",UI="@firebase/app-check",jI="@firebase/auth",zI="@firebase/auth-compat",BI="@firebase/database",$I="@firebase/data-connect",WI="@firebase/database-compat",HI="@firebase/functions",qI="@firebase/functions-compat",GI="@firebase/installations",KI="@firebase/installations-compat",QI="@firebase/messaging",YI="@firebase/messaging-compat",XI="@firebase/performance",JI="@firebase/performance-compat",ZI="@firebase/remote-config",eS="@firebase/remote-config-compat",tS="@firebase/storage",nS="@firebase/storage-compat",rS="@firebase/firestore",iS="@firebase/vertexai",sS="@firebase/firestore-compat",oS="firebase",aS="11.2.0";/**
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
 */const fd="[DEFAULT]",lS={[cd]:"fire-core",[LI]:"fire-core-compat",[MI]:"fire-analytics",[VI]:"fire-analytics-compat",[UI]:"fire-app-check",[FI]:"fire-app-check-compat",[jI]:"fire-auth",[zI]:"fire-auth-compat",[BI]:"fire-rtdb",[$I]:"fire-data-connect",[WI]:"fire-rtdb-compat",[HI]:"fire-fn",[qI]:"fire-fn-compat",[GI]:"fire-iid",[KI]:"fire-iid-compat",[QI]:"fire-fcm",[YI]:"fire-fcm-compat",[XI]:"fire-perf",[JI]:"fire-perf-compat",[ZI]:"fire-rc",[eS]:"fire-rc-compat",[tS]:"fire-gcs",[nS]:"fire-gcs-compat",[rS]:"fire-fst",[sS]:"fire-fst-compat",[iS]:"fire-vertex","fire-js":"fire-js",[oS]:"fire-js-all"};/**
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
 */const _c=new Map,uS=new Map,hd=new Map;function ky(n,e){try{n.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Oo(n){const e=n.name;if(hd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,n);for(const t of _c.values())ky(t,n);for(const t of uS.values())ky(t,n);return!0}function ep(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Or(n){return n.settings!==void 0}/**
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
 */const cS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ki=new _l("app","Firebase",cS);/**
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
 */class fS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const $o=aS;function kv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw ki.create("bad-app-name",{appName:String(o)});if(t||(t=Tv()),!t)throw ki.create("no-options");const l=_c.get(o);if(l){if(yc(t,l.options)&&yc(i,l.config))return l;throw ki.create("duplicate-app",{appName:o})}const f=new yI(o);for(const p of hd.values())f.addComponent(p);const h=new fS(t,i,f);return _c.set(o,h),h}function Rv(n=fd){const e=_c.get(n);if(!e&&n===fd&&Tv())return kv();if(!e)throw ki.create("no-app",{appName:n});return e}function Ri(n,e,t){var i;let o=(i=lS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),f=e.match(/\s|\//);if(l||f){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&f&&h.push("and"),f&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}Oo(new _s(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const hS="firebase-heartbeat-database",dS=1,ol="firebase-heartbeat-store";let Wh=null;function Pv(){return Wh||(Wh=xI(hS,dS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(n=>{throw ki.create("idb-open",{originalErrorMessage:n.message})})),Wh}async function pS(n){try{const t=(await Pv()).transaction(ol),i=await t.objectStore(ol).get(Cv(n));return await t.done,i}catch(e){if(e instanceof qr)jr.warn(e.message);else{const t=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Ry(n,e){try{const i=(await Pv()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,Cv(n)),await i.done}catch(t){if(t instanceof qr)jr.warn(t.message);else{const i=ki.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function Cv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mS=1024,gS=30*24*60*60*1e3;class yS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Py();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(f=>f.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const h=new Date(f.date).valueOf();return Date.now()-h<=gS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Py(),{heartbeatsToSend:i,unsentEntries:o}=_S(this._heartbeatsCache.heartbeats),l=gc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function Py(){return new Date().toISOString().substring(0,10)}function _S(n,e=mS){const t=[];let i=n.slice();for(const o of n){const l=t.find(f=>f.agent===o.agent);if(l){if(l.dates.push(o.date),Cy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Cy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class vS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?oI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Cy(n){return gc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ES(n){Oo(new _s("platform-logger",e=>new OI(e),"PRIVATE")),Oo(new _s("heartbeat",e=>new yS(e),"PRIVATE")),Ri(cd,Ay,n),Ri(cd,Ay,"esm2017"),Ri("fire-js","")}ES("");var wS="firebase",TS="11.2.0";/**
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
 */Ri(wS,TS,"app");function tp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IS=xv,Nv=new _l("auth","Firebase",xv());/**
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
 */const vc=new Jd("@firebase/auth");function SS(n,...e){vc.logLevel<=Ne.WARN&&vc.warn(`Auth (${$o}): ${n}`,...e)}function rc(n,...e){vc.logLevel<=Ne.ERROR&&vc.error(`Auth (${$o}): ${n}`,...e)}/**
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
 */function lr(n,...e){throw rp(n,...e)}function Bn(n,...e){return rp(n,...e)}function np(n,e,t){const i=Object.assign(Object.assign({},IS()),{[e]:t});return new _l("auth","Firebase",i).create(e,{appName:n.name})}function ys(n){return np(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&lr(n,"argument-error"),np(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Nv.create(n,...e)}function Ie(n,e,...t){if(!n)throw rp(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rc(e),new Error(e)}function zr(n,e){n||Dr(e)}/**
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
 */function dd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kS(){return xy()==="http:"||xy()==="https:"}function xy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function RS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kS()||tI()||"connection"in navigator)?navigator.onLine:!0}function PS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class El{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=J0()||nI()}get(){return RS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ip(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new El(3e4,6e4);function sp(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wo(n,e,t,i,o={}){return Ov(n,o,async()=>{let l={},f={};i&&(e==="GET"?f=i:l={body:JSON.stringify(i)});const h=vl(Object.assign({key:n.config.apiKey},f)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return eI()||(y.referrerPolicy="no-referrer"),bv.fetch()(Dv(n,n.config.apiHost,t,h),y)})}async function Ov(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},CS),e);try{const o=new bS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await l.json();if("needConfirmation"in f)throw Ku(n,"account-exists-with-different-credential",f);if(l.ok&&!("errorMessage"in f))return f;{const h=l.ok?f.errorMessage:f.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ku(n,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Ku(n,"email-already-in-use",f);if(p==="USER_DISABLED")throw Ku(n,"user-disabled",f);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw np(n,E,y);lr(n,E)}}catch(o){if(o instanceof qr)throw o;lr(n,"network-request-failed",{message:String(o)})}}async function NS(n,e,t,i,o={}){const l=await Wo(n,e,t,i,o);return"mfaPendingCredential"in l&&lr(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Dv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?ip(n.config,o):`${n.config.apiScheme}://${o}`}class bS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Bn(this.auth,"network-request-failed")),xS.get())})}}function Ku(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Bn(n,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function OS(n,e){return Wo(n,"POST","/v1/accounts:delete",e)}async function Lv(n,e){return Wo(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Za(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DS(n,e=!1){const t=An(n),i=await t.getIdToken(e),o=op(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,f=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Za(Hh(o.auth_time)),issuedAtTime:Za(Hh(o.iat)),expirationTime:Za(Hh(o.exp)),signInProvider:f||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Hh(n){return Number(n)*1e3}function op(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ev(t);return o?JSON.parse(o):(rc("Failed to decode base64 JWT payload"),null)}catch(o){return rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ny(n){const e=op(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function al(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qr&&LS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function LS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class VS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ec(n){var e;const t=n.auth,i=await n.getIdToken(),o=await al(n,Lv(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const f=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Vv(l.providerUserInfo):[],h=FS(n.providerData,f),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new pd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function MS(n){const e=An(n);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Vv(n){return n.map(e=>{var{providerId:t}=e,i=tp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function US(n,e){const t=await Ov(n,{},async()=>{const i=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,f=Dv(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",bv.fetch()(f,{method:"POST",headers:h,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jS(n,e){return Wo(n,"POST","/v2/accounts:revokeToken",sp(n,e))}/**
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
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await US(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,f=new Po;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),f.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),f.expirationTime=l),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
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
 */function vi(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new pd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await al(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return DS(this,e)}reload(){return MS(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Or(this.auth.app))return Promise.reject(ys(this.auth));const e=await this.getIdToken();return await al(this,OS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,f,h,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(f=t.photoURL)!==null&&f!==void 0?f:void 0,W=(h=t.tenantId)!==null&&h!==void 0?h:void 0,D=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Q,emailVerified:oe,isAnonymous:_e,providerData:Te,stsTokenManager:x}=t;Ie(Q&&x,e,"internal-error");const S=Po.fromJSON(this.name,x);Ie(typeof Q=="string",e,"internal-error"),vi(T,e.name),vi(I,e.name),Ie(typeof oe=="boolean",e,"internal-error"),Ie(typeof _e=="boolean",e,"internal-error"),vi(N,e.name),vi(V,e.name),vi(W,e.name),vi(D,e.name),vi(H,e.name),vi(J,e.name);const k=new Lr({uid:Q,auth:e,email:I,emailVerified:oe,displayName:T,isAnonymous:_e,photoURL:V,phoneNumber:N,tenantId:W,stsTokenManager:S,createdAt:H,lastLoginAt:J});return Te&&Array.isArray(Te)&&(k.providerData=Te.map(C=>Object.assign({},C))),D&&(k._redirectEventId=D),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new Po;o.updateFromServerResponse(t);const l=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ec(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Vv(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Po;h.updateFromIdToken(i);const p=new Lr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const by=new Map;function Vr(n){zr(n instanceof Function,"Expected a class definition");let e=by.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,by.set(n,e),e)}/**
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
 */class Mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mv.type="NONE";const Oy=Mv;/**
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
 */function ic(n,e,t){return`firebase:${n}:${e}:${t}`}class Co{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Co(Vr(Oy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Vr(Oy);const f=ic(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const E=await y._get(f);if(E){const T=Lr._fromJSON(e,E);y!==l&&(h=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Co(l,e,i):(l=p[0],h&&await l._set(f,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(f)}catch{}})),new Co(l,e,i))}}/**
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
 */function Dy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($v(e))return"Blackberry";if(Wv(e))return"Webos";if(Uv(e))return"Safari";if((e.includes("chrome/")||jv(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Fv(n=$t()){return/firefox\//i.test(n)}function Uv(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jv(n=$t()){return/crios\//i.test(n)}function zv(n=$t()){return/iemobile/i.test(n)}function Bv(n=$t()){return/android/i.test(n)}function $v(n=$t()){return/blackberry/i.test(n)}function Wv(n=$t()){return/webos/i.test(n)}function ap(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zS(n=$t()){var e;return ap(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BS(){return rI()&&document.documentMode===10}function Hv(n=$t()){return ap(n)||Bv(n)||Wv(n)||$v(n)||/windows phone/i.test(n)||zv(n)}/**
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
 */function qv(n,e=[]){let t;switch(n){case"Browser":t=Dy($t());break;case"Worker":t=`${Dy($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$o}/${i}`}/**
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
 */class $S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((f,h)=>{try{const p=e(l);f(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function WS(n,e={}){return Wo(n,"GET","/v2/passwordPolicy",sp(n,e))}/**
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
 */const HS=6;class qS{constructor(e){var t,i,o,l;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=f.minPasswordLength)!==null&&t!==void 0?t:HS,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,f,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class GS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ly(this),this.idTokenSubscription=new Ly(this),this.beforeStateQueue=new $S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lv(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Or(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Or(this.app))return Promise.reject(ys(this));const t=e?An(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Or(this.app)?Promise.reject(ys(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Or(this.app)?Promise.reject(ys(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WS(this),t=new qS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _l("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await jS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let f=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(h,this,"internal-error"),h.then(()=>{f||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{f=!0,p()}}else{const p=e.addObserver(t);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&SS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jc(n){return An(n)}class Ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KS(n){lp=n}function QS(n){return lp.loadJS(n)}function YS(){return lp.gapiScript}function XS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function JS(n,e){const t=ep(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(yc(l,e??{}))return o;lr(o,"already-initialized")}return t.initialize({options:e})}function ZS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function e1(n,e,t){const i=jc(n);Ie(i._canInitEmulator,i,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Gv(e),{host:f,port:h}=t1(e),p=h===null?"":`:${h}`;i.config.emulator={url:`${l}//${f}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:f,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),n1()}function Gv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function t1(n){const e=Gv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Vy(i.substr(l.length+1))}}else{const[l,f]=i.split(":");return{host:l,port:Vy(f)}}}function Vy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function n1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}/**
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
 */async function xo(n,e){return NS(n,"POST","/v1/accounts:signInWithIdp",sp(n,e))}/**
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
 */const r1="http://localhost";class vs extends Kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=tp(t,["providerId","signInMethod"]);if(!i||!o)return null;const f=new vs(i,o);return f.idToken=l.idToken||void 0,f.accessToken=l.accessToken||void 0,f.secret=l.secret,f.nonce=l.nonce,f.pendingToken=l.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return xo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xo(e,t)}buildRequest(){const e={requestUri:r1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vl(t)}return e}}/**
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
 */class up{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wi extends wl{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
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
 */class br extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return br.credential(t,i)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Ti extends wl{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends wl{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */class Do{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Lr._fromIdTokenResponse(e,i,o),f=My(i);return new Do({user:l,providerId:f,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=My(i);return new Do({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function My(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class wc extends qr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new wc(e,t,i,o)}}function Qv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(n,l,e,i):l})}async function i1(n,e,t=!1){const i=await al(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Do._forOperation(n,"link",i)}/**
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
 */async function s1(n,e,t=!1){const{auth:i}=n;if(Or(i.app))return Promise.reject(ys(i));const o="reauthenticate";try{const l=await al(n,Qv(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const f=op(l.idToken);Ie(f,i,"internal-error");const{sub:h}=f;return Ie(n.uid===h,i,"user-mismatch"),Do._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&lr(i,"user-mismatch"),l}}/**
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
 */async function o1(n,e,t=!1){if(Or(n.app))return Promise.reject(ys(n));const i="signIn",o=await Qv(n,i,e),l=await Do._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}function a1(n,e,t,i){return An(n).onIdTokenChanged(e,t,i)}function l1(n,e,t){return An(n).beforeAuthStateChanged(e,t)}function u1(n,e,t,i){return An(n).onAuthStateChanged(e,t,i)}function c1(n){return An(n).signOut()}const Tc="__sak";/**
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
 */class Yv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const f1=1e3,h1=10;class Xv extends Yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,h,p)=>{this.notifyListeners(f,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(i);!t&&this.localCache[i]===f||this.notifyListeners(i,f)},l=this.storage.getItem(i);BS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,h1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},f1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xv.type="LOCAL";const d1=Xv;/**
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
 */class Jv extends Yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jv.type="SESSION";const Zv=Jv;/**
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
 */function p1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(f).map(async y=>y(t.origin,l)),p=await p1(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
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
 */function cp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class m1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,f;return new Promise((h,p)=>{const y=cp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);f={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(I.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function sr(){return window}function g1(n){sr().location.href=n}/**
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
 */function eE(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function y1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function v1(){return eE()?self:null}/**
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
 */const tE="firebaseLocalStorageDb",E1=1,Ic="firebaseLocalStorage",nE="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bc(n,e){return n.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function w1(){const n=indexedDB.deleteDatabase(tE);return new Tl(n).toPromise()}function md(){const n=indexedDB.open(tE,E1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ic,{keyPath:nE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ic)?e(i):(i.close(),await w1(),e(await md()))})})}async function Fy(n,e,t){const i=Bc(n,!0).put({[nE]:e,value:t});return new Tl(i).toPromise()}async function T1(n,e){const t=Bc(n,!1).get(e),i=await new Tl(t).toPromise();return i===void 0?null:i.value}function Uy(n,e){const t=Bc(n,!0).delete(e);return new Tl(t).toPromise()}const I1=800,S1=3;class rE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>S1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(v1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await y1(),!this.activeServiceWorker)return;this.sender=new m1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Fy(e,Tc,"1"),await Uy(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>T1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Bc(o,!1).getAll();return new Tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rE.type="LOCAL";const A1=rE;new El(3e4,6e4);/**
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
 */function iE(n,e){return e?Vr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class fp extends Kv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k1(n){return o1(n.auth,new fp(n),n.bypassAuthState)}function R1(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),s1(t,new fp(n),n.bypassAuthState)}async function P1(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),i1(t,new fp(n),n.bypassAuthState)}/**
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
 */class sE{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:f,type:h}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return P1;case"reauthViaPopup":case"reauthViaRedirect":return R1;default:lr(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const C1=new El(2e3,1e4);async function x1(n,e,t){if(Or(n.app))return Promise.reject(Bn(n,"operation-not-supported-in-this-environment"));const i=jc(n);AS(n,e,up);const o=iE(i,t);return new ps(i,"signInViaPopup",e,o).executeNotNull()}class ps extends sE{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,C1.get())};e()}}ps.currentPopupAction=null;/**
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
 */const N1="pendingRedirect",sc=new Map;class b1 extends sE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const i=await O1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O1(n,e){const t=V1(e),i=L1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function D1(n,e){sc.set(n._key(),e)}function L1(n){return Vr(n._redirectPersistence)}function V1(n){return ic(N1,n.config.apiKey,n.name)}async function M1(n,e,t=!1){if(Or(n.app))return Promise.reject(ys(n));const i=jc(n),o=iE(i,e),f=await new b1(i,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await i._persistUserIfCurrent(f.user),await i._setRedirectUser(null,e)),f}/**
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
 */const F1=10*60*1e3;class U1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!oE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Bn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F1&&this.cachedEventUids.clear(),this.cachedEventUids.has(jy(e))}saveEventToCache(e){this.cachedEventUids.add(jy(e)),this.lastProcessedEventTime=Date.now()}}function jy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function oE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function j1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(n);default:return!1}}/**
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
 */async function z1(n,e={}){return Wo(n,"GET","/v1/projects",e)}/**
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
 */const B1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$1=/^https?/;async function W1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await z1(n);for(const t of e)try{if(H1(t))return}catch{}lr(n,"unauthorized-domain")}function H1(n){const e=dd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===i}if(!$1.test(t))return!1;if(B1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const q1=new El(3e4,6e4);function zy(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function G1(n){return new Promise((e,t)=>{var i,o,l;function f(){zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zy(),t(Bn(n,"network-request-failed"))},timeout:q1.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)f();else{const h=XS("iframefcb");return sr()[h]=()=>{gapi.load?f():t(Bn(n,"network-request-failed"))},QS(`${YS()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw oc=null,e})}let oc=null;function K1(n){return oc=oc||G1(n),oc}/**
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
 */const Q1=new El(5e3,15e3),Y1="__/auth/iframe",X1="emulator/auth/iframe",J1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eA(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ip(e,X1):`https://${n.config.authDomain}/${Y1}`,i={apiKey:e.apiKey,appName:n.name,v:$o},o=Z1.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${vl(i).slice(1)}`}async function tA(n){const e=await K1(n),t=sr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:eA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:J1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const f=Bn(n,"network-request-failed"),h=sr().setTimeout(()=>{l(f)},Q1.get());function p(){sr().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(f)})}))}/**
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
 */const nA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,iA=600,sA="_blank",oA="http://localhost";class By{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aA(n,e,t,i=rA,o=iA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},nA),{width:i.toString(),height:o.toString(),top:l,left:f}),y=$t().toLowerCase();t&&(h=jv(y)?sA:t),Fv(y)&&(e=e||oA,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[N,V])=>`${I}${N}=${V},`,"");if(zS(y)&&h!=="_self")return lA(e||"",h),new By(null);const T=window.open(e||"",h,E);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new By(T)}function lA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const uA="__/auth/handler",cA="emulator/auth/handler",fA=encodeURIComponent("fac");async function $y(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:$o,eventId:o};if(e instanceof up){e.setDefaultLanguage(n.languageCode),f.providerId=e.providerId||"",cI(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))f[E]=T}if(e instanceof wl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(f.scopes=E.join(","))}n.tenantId&&(f.tid=n.tenantId);const h=f;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const p=await n._getAppCheckToken(),y=p?`#${fA}=${encodeURIComponent(p)}`:"";return`${hA(n)}?${vl(h).slice(1)}${y}`}function hA({config:n}){return n.emulator?ip(n,cA):`https://${n.authDomain}/${uA}`}/**
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
 */const qh="webStorageSupport";class dA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zv,this._completeRedirectFn=M1,this._overrideRedirectResult=D1}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const f=await $y(e,t,i,dd(),o);return aA(e,f,cp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await $y(e,t,i,dd(),o);return g1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await tA(e),i=new U1(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qh,{type:qh},o=>{var l;const f=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[qh];f!==void 0&&t(!!f),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hv()||Uv()||ap()}}const pA=dA;var Wy="@firebase/auth",Hy="1.8.2";/**
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
 */class mA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yA(n){Oo(new _s("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:f,authDomain:h}=i.options;Ie(f&&!f.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:f,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qv(n)},y=new GS(i,o,l,p);return ZS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Oo(new _s("auth-internal",e=>{const t=jc(e.getProvider("auth").getImmediate());return(i=>new mA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri(Wy,Hy,gA(n)),Ri(Wy,Hy,"esm2017")}/**
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
 */const _A=5*60,vA=Iv("authIdTokenMaxAge")||_A;let qy=null;const EA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>vA)return;const o=t==null?void 0:t.token;qy!==o&&(qy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wA(n=Rv()){const e=ep(n,"auth");if(e.isInitialized())return e.getImmediate();const t=JS(n,{popupRedirectResolver:pA,persistence:[A1,d1,Zv]}),i=Iv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const f=EA(l.toString());l1(t,f,()=>f(t.currentUser)),a1(t,h=>f(h))}}const o=wv("auth");return o&&e1(t,`http://${o}`),t}function TA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}KS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Bn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",TA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yA("Browser");var Gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,aE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function k(){}k.prototype=S.prototype,x.D=S.prototype,x.prototype=new k,x.prototype.constructor=x,x.C=function(C,O,M){for(var R=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)R[ot-2]=arguments[ot];return S.prototype[O].apply(C,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,k){k||(k=0);var C=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)C[O]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(O=0;16>O;++O)C[O]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=x.g[0],k=x.g[1],O=x.g[2];var M=x.g[3],R=S+(M^k&(O^M))+C[0]+3614090360&4294967295;S=k+(R<<7&4294967295|R>>>25),R=M+(O^S&(k^O))+C[1]+3905402710&4294967295,M=S+(R<<12&4294967295|R>>>20),R=O+(k^M&(S^k))+C[2]+606105819&4294967295,O=M+(R<<17&4294967295|R>>>15),R=k+(S^O&(M^S))+C[3]+3250441966&4294967295,k=O+(R<<22&4294967295|R>>>10),R=S+(M^k&(O^M))+C[4]+4118548399&4294967295,S=k+(R<<7&4294967295|R>>>25),R=M+(O^S&(k^O))+C[5]+1200080426&4294967295,M=S+(R<<12&4294967295|R>>>20),R=O+(k^M&(S^k))+C[6]+2821735955&4294967295,O=M+(R<<17&4294967295|R>>>15),R=k+(S^O&(M^S))+C[7]+4249261313&4294967295,k=O+(R<<22&4294967295|R>>>10),R=S+(M^k&(O^M))+C[8]+1770035416&4294967295,S=k+(R<<7&4294967295|R>>>25),R=M+(O^S&(k^O))+C[9]+2336552879&4294967295,M=S+(R<<12&4294967295|R>>>20),R=O+(k^M&(S^k))+C[10]+4294925233&4294967295,O=M+(R<<17&4294967295|R>>>15),R=k+(S^O&(M^S))+C[11]+2304563134&4294967295,k=O+(R<<22&4294967295|R>>>10),R=S+(M^k&(O^M))+C[12]+1804603682&4294967295,S=k+(R<<7&4294967295|R>>>25),R=M+(O^S&(k^O))+C[13]+4254626195&4294967295,M=S+(R<<12&4294967295|R>>>20),R=O+(k^M&(S^k))+C[14]+2792965006&4294967295,O=M+(R<<17&4294967295|R>>>15),R=k+(S^O&(M^S))+C[15]+1236535329&4294967295,k=O+(R<<22&4294967295|R>>>10),R=S+(O^M&(k^O))+C[1]+4129170786&4294967295,S=k+(R<<5&4294967295|R>>>27),R=M+(k^O&(S^k))+C[6]+3225465664&4294967295,M=S+(R<<9&4294967295|R>>>23),R=O+(S^k&(M^S))+C[11]+643717713&4294967295,O=M+(R<<14&4294967295|R>>>18),R=k+(M^S&(O^M))+C[0]+3921069994&4294967295,k=O+(R<<20&4294967295|R>>>12),R=S+(O^M&(k^O))+C[5]+3593408605&4294967295,S=k+(R<<5&4294967295|R>>>27),R=M+(k^O&(S^k))+C[10]+38016083&4294967295,M=S+(R<<9&4294967295|R>>>23),R=O+(S^k&(M^S))+C[15]+3634488961&4294967295,O=M+(R<<14&4294967295|R>>>18),R=k+(M^S&(O^M))+C[4]+3889429448&4294967295,k=O+(R<<20&4294967295|R>>>12),R=S+(O^M&(k^O))+C[9]+568446438&4294967295,S=k+(R<<5&4294967295|R>>>27),R=M+(k^O&(S^k))+C[14]+3275163606&4294967295,M=S+(R<<9&4294967295|R>>>23),R=O+(S^k&(M^S))+C[3]+4107603335&4294967295,O=M+(R<<14&4294967295|R>>>18),R=k+(M^S&(O^M))+C[8]+1163531501&4294967295,k=O+(R<<20&4294967295|R>>>12),R=S+(O^M&(k^O))+C[13]+2850285829&4294967295,S=k+(R<<5&4294967295|R>>>27),R=M+(k^O&(S^k))+C[2]+4243563512&4294967295,M=S+(R<<9&4294967295|R>>>23),R=O+(S^k&(M^S))+C[7]+1735328473&4294967295,O=M+(R<<14&4294967295|R>>>18),R=k+(M^S&(O^M))+C[12]+2368359562&4294967295,k=O+(R<<20&4294967295|R>>>12),R=S+(k^O^M)+C[5]+4294588738&4294967295,S=k+(R<<4&4294967295|R>>>28),R=M+(S^k^O)+C[8]+2272392833&4294967295,M=S+(R<<11&4294967295|R>>>21),R=O+(M^S^k)+C[11]+1839030562&4294967295,O=M+(R<<16&4294967295|R>>>16),R=k+(O^M^S)+C[14]+4259657740&4294967295,k=O+(R<<23&4294967295|R>>>9),R=S+(k^O^M)+C[1]+2763975236&4294967295,S=k+(R<<4&4294967295|R>>>28),R=M+(S^k^O)+C[4]+1272893353&4294967295,M=S+(R<<11&4294967295|R>>>21),R=O+(M^S^k)+C[7]+4139469664&4294967295,O=M+(R<<16&4294967295|R>>>16),R=k+(O^M^S)+C[10]+3200236656&4294967295,k=O+(R<<23&4294967295|R>>>9),R=S+(k^O^M)+C[13]+681279174&4294967295,S=k+(R<<4&4294967295|R>>>28),R=M+(S^k^O)+C[0]+3936430074&4294967295,M=S+(R<<11&4294967295|R>>>21),R=O+(M^S^k)+C[3]+3572445317&4294967295,O=M+(R<<16&4294967295|R>>>16),R=k+(O^M^S)+C[6]+76029189&4294967295,k=O+(R<<23&4294967295|R>>>9),R=S+(k^O^M)+C[9]+3654602809&4294967295,S=k+(R<<4&4294967295|R>>>28),R=M+(S^k^O)+C[12]+3873151461&4294967295,M=S+(R<<11&4294967295|R>>>21),R=O+(M^S^k)+C[15]+530742520&4294967295,O=M+(R<<16&4294967295|R>>>16),R=k+(O^M^S)+C[2]+3299628645&4294967295,k=O+(R<<23&4294967295|R>>>9),R=S+(O^(k|~M))+C[0]+4096336452&4294967295,S=k+(R<<6&4294967295|R>>>26),R=M+(k^(S|~O))+C[7]+1126891415&4294967295,M=S+(R<<10&4294967295|R>>>22),R=O+(S^(M|~k))+C[14]+2878612391&4294967295,O=M+(R<<15&4294967295|R>>>17),R=k+(M^(O|~S))+C[5]+4237533241&4294967295,k=O+(R<<21&4294967295|R>>>11),R=S+(O^(k|~M))+C[12]+1700485571&4294967295,S=k+(R<<6&4294967295|R>>>26),R=M+(k^(S|~O))+C[3]+2399980690&4294967295,M=S+(R<<10&4294967295|R>>>22),R=O+(S^(M|~k))+C[10]+4293915773&4294967295,O=M+(R<<15&4294967295|R>>>17),R=k+(M^(O|~S))+C[1]+2240044497&4294967295,k=O+(R<<21&4294967295|R>>>11),R=S+(O^(k|~M))+C[8]+1873313359&4294967295,S=k+(R<<6&4294967295|R>>>26),R=M+(k^(S|~O))+C[15]+4264355552&4294967295,M=S+(R<<10&4294967295|R>>>22),R=O+(S^(M|~k))+C[6]+2734768916&4294967295,O=M+(R<<15&4294967295|R>>>17),R=k+(M^(O|~S))+C[13]+1309151649&4294967295,k=O+(R<<21&4294967295|R>>>11),R=S+(O^(k|~M))+C[4]+4149444226&4294967295,S=k+(R<<6&4294967295|R>>>26),R=M+(k^(S|~O))+C[11]+3174756917&4294967295,M=S+(R<<10&4294967295|R>>>22),R=O+(S^(M|~k))+C[2]+718787259&4294967295,O=M+(R<<15&4294967295|R>>>17),R=k+(M^(O|~S))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var k=S-this.blockSize,C=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=k;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(C[O++]=x.charCodeAt(M++),O==this.blockSize){o(this,C),O=0;break}}else for(;M<S;)if(C[O++]=x[M++],O==this.blockSize){o(this,C),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var k=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=k&255,k/=256;for(this.u(x),x=Array(16),S=k=0;4>S;++S)for(var C=0;32>C;C+=8)x[k++]=this.g[S]>>>C&255;return x};function l(x,S){var k=h;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=S(x)}function f(x,S){this.h=S;for(var k=[],C=!0,O=x.length-1;0<=O;O--){var M=x[O]|0;C&&M==S||(k[O]=M,C=!1)}this.g=k}var h={};function p(x){return-128<=x&&128>x?l(x,function(S){return new f([S|0],0>S?-1:0)}):new f([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return D(y(-x));for(var S=[],k=1,C=0;x>=k;C++)S[C]=x/k|0,k*=4294967296;return new f(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return D(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=y(Math.pow(S,8)),C=T,O=0;O<x.length;O+=8){var M=Math.min(8,x.length-O),R=parseInt(x.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),C=C.j(M).add(y(R))):(C=C.j(k),C=C.add(y(R)))}return C}var T=p(0),I=p(1),N=p(16777216);n=f.prototype,n.m=function(){if(W(this))return-D(this).m();for(var x=0,S=1,k=0;k<this.g.length;k++){var C=this.i(k);x+=(0<=C?C:4294967296+C)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(V(this))return"0";if(W(this))return"-"+D(this).toString(x);for(var S=y(Math.pow(x,6)),k=this,C="";;){var O=oe(k,S).g;k=H(k,O.j(S));var M=((0<k.g.length?k.g[0]:k.h)>>>0).toString(x);if(k=O,V(k))return M+C;for(;6>M.length;)M="0"+M;C=M+C}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function V(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function W(x){return x.h==-1}n.l=function(x){return x=H(this,x),W(x)?-1:V(x)?0:1};function D(x){for(var S=x.g.length,k=[],C=0;C<S;C++)k[C]=~x.g[C];return new f(k,~x.h).add(I)}n.abs=function(){return W(this)?D(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0,O=0;O<=S;O++){var M=C+(this.i(O)&65535)+(x.i(O)&65535),R=(M>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);C=R>>>16,M&=65535,R&=65535,k[O]=R<<16|M}return new f(k,k[k.length-1]&-2147483648?-1:0)};function H(x,S){return x.add(D(S))}n.j=function(x){if(V(this)||V(x))return T;if(W(this))return W(x)?D(this).j(D(x)):D(D(this).j(x));if(W(x))return D(this.j(D(x)));if(0>this.l(N)&&0>x.l(N))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,k=[],C=0;C<2*S;C++)k[C]=0;for(C=0;C<this.g.length;C++)for(var O=0;O<x.g.length;O++){var M=this.i(C)>>>16,R=this.i(C)&65535,ot=x.i(O)>>>16,Dt=x.i(O)&65535;k[2*C+2*O]+=R*Dt,J(k,2*C+2*O),k[2*C+2*O+1]+=M*Dt,J(k,2*C+2*O+1),k[2*C+2*O+1]+=R*ot,J(k,2*C+2*O+1),k[2*C+2*O+2]+=M*ot,J(k,2*C+2*O+2)}for(C=0;C<S;C++)k[C]=k[2*C+1]<<16|k[2*C];for(C=S;C<2*S;C++)k[C]=0;return new f(k,0)};function J(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function Q(x,S){this.g=x,this.h=S}function oe(x,S){if(V(S))throw Error("division by zero");if(V(x))return new Q(T,T);if(W(x))return S=oe(D(x),S),new Q(D(S.g),D(S.h));if(W(S))return S=oe(x,D(S)),new Q(D(S.g),S.h);if(30<x.g.length){if(W(x)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var k=I,C=S;0>=C.l(x);)k=_e(k),C=_e(C);var O=Te(k,1),M=Te(C,1);for(C=Te(C,2),k=Te(k,2);!V(C);){var R=M.add(C);0>=R.l(x)&&(O=O.add(k),M=R),C=Te(C,1),k=Te(k,1)}return S=H(x,O.j(S)),new Q(O,S)}for(O=T;0<=x.l(S);){for(k=Math.max(1,Math.floor(x.m()/S.m())),C=Math.ceil(Math.log(k)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),M=y(k),R=M.j(S);W(R)||0<R.l(x);)k-=C,M=y(k),R=M.j(S);V(M)&&(M=I),O=O.add(M),x=H(x,R)}return new Q(O,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0;C<S;C++)k[C]=this.i(C)&x.i(C);return new f(k,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0;C<S;C++)k[C]=this.i(C)|x.i(C);return new f(k,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),k=[],C=0;C<S;C++)k[C]=this.i(C)^x.i(C);return new f(k,this.h^x.h)};function _e(x){for(var S=x.g.length+1,k=[],C=0;C<S;C++)k[C]=x.i(C)<<1|x.i(C-1)>>>31;return new f(k,x.h)}function Te(x,S){var k=S>>5;S%=32;for(var C=x.g.length-k,O=[],M=0;M<C;M++)O[M]=0<S?x.i(M+k)>>>S|x.i(M+k+1)<<32-S:x.i(M+k);return new f(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,aE=i,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Pi=f}).apply(typeof Gy<"u"?Gy:typeof self<"u"?self:typeof window<"u"?window:{});var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lE,Qa,uE,ac,gd,cE,fE,hE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qu=="object"&&Qu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function V(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,$){for(var re=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)re[$e-2]=arguments[$e];return m.prototype[F].apply(w,re)}}function W(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function D(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,$=w.length||0;u.length=F+$;for(let re=0;re<$;re++)u[F+re]=w[re]}else u.push(w)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function Q(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function oe(u){return oe[" "](u),u}oe[" "]=function(){};var _e=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Te(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function x(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let $=0;$<k.length;$++)_=k[$],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){h.setTimeout(()=>{throw u},0)}function R(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ot{constructor(){this.h=this.g=null}add(m,_){const w=Dt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new H(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let We,ie=!1,me=new ot,ae=()=>{const u=h.Promise.resolve(void 0);We=()=>{u.then(L)}};var L=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){M(_)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,m),h.removeEventListener("test",_,m)}catch{}return u}();function Pe(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_e){e:{try{oe(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}V(Pe,pe);var Le={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),ze=0;function qe(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++ze,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,w,F){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var re=Kr(u,m,w,F);return-1<re?(m=u[re],_||(m.fa=!1)):(m=new qe(m,this.src,$,!!w,F),m.fa=_,u.push(m)),m};function Ps(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=F)&&Array.prototype.splice.call(w,F,1),$&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Kr(u,m,_,w){for(var F=0;F<u.length;++F){var $=u[F];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==w)return F}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Cs={};function Jo(u,m,_,w,F){if(Array.isArray(m)){for(var $=0;$<m.length;$++)Jo(u,m[$],_,w,F);return null}return _=ta(_),u&&u[je]?u.K(m,_,y(w)?!!w.capture:!1,F):Zo(u,m,_,!1,w,F)}function Zo(u,m,_,w,F,$){if(!m)throw Error("Invalid event type");var re=y(F)?!!F.capture:!!F,$e=Ns(u);if($e||(u[Ui]=$e=new pr(u)),_=$e.add(m,_,w,re,$),_.proxy)return _;if(w=bl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(F=re),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(gr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function bl(){function u(_){return m.call(u.src,u.listener,_)}const m=ea;return u}function xs(u,m,_,w,F){if(Array.isArray(m))for(var $=0;$<m.length;$++)xs(u,m[$],_,w,F);else w=y(w)?!!w.capture:!!w,_=ta(_),u&&u[je]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=Kr($,_,w,F),-1<_&&(wt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ns(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Kr(m,_,w,F)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[je])Ps(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(gr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Ns(m))?(Ps(_,u),_.h==0&&(_.src=null,m[Ui]=null)):wt(u)}}}function gr(u){return u in Cs?Cs[u]:Cs[u]="on"+u}function ea(u,m){if(u.da)u=!0;else{m=new Pe(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&mr(u),u=_.call(w,m)}return u}function Ns(u){return u=u[Ui],u instanceof pr?u:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ta(u){return typeof u=="function"?u:(u[bs]||(u[bs]=function(m){return u.handleEvent(m)}),u[bs])}function dt(){K.call(this),this.i=new pr(this),this.M=this,this.F=null}V(dt,K),dt.prototype[je]=!0,dt.prototype.removeEventListener=function(u,m,_,w){xs(this,u,m,_,w)};function pt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(w,u),C(m,F)}if(F=!0,_)for(var $=_.length-1;0<=$;$--){var re=m.g=_[$];F=yr(re,w,!0,m)&&F}if(re=m.g=u,F=yr(re,w,!0,m)&&F,F=yr(re,w,!1,m)&&F,_)for($=0;$<_.length;$++)re=m.g=_[$],F=yr(re,w,!1,m)&&F}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)wt(_[w]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},dt.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function yr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,$=0;$<m.length;++$){var re=m[$];if(re&&!re.da&&re.capture==_){var $e=re.listener,mt=re.ha||re.src;re.fa&&Ps(u.i,re),F=$e.call(mt,w)!==!1&&F}}return F&&!w.defaultPrevented}function na(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function Qr(u){u.g=na(()=>{u.g=null,u.i&&(u.i=!1,Qr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class ji extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Qr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(u){K.call(this),this.h=u,this.g={}}V(zi,K);var ra=[];function ia(u){Te(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}zi.prototype.N=function(){zi.aa.N.call(this),ia(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sa=h.JSON.stringify,oa=h.JSON.parse,aa=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Bi(){}Bi.prototype.h=null;function Os(u){return u.h||(u.h=u.i())}function Ds(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){pe.call(this,"d")}V(Wn,pe);function Ls(){pe.call(this,"c")}V(Ls,pe);var Hn={},la=null;function $i(){return la=la||new dt}Hn.La="serverreachability";function ua(u){pe.call(this,Hn.La,u)}V(ua,pe);function _r(u){const m=$i();pt(m,new ua(m))}Hn.STAT_EVENT="statevent";function ca(u,m){pe.call(this,Hn.STAT_EVENT,u),this.stat=m}V(ca,pe);function at(u){const m=$i();pt(m,new ca(m,u))}Hn.Ma="timingevent";function Vs(u,m){pe.call(this,Hn.Ma,u),this.size=m}V(Vs,pe);function kn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function Hi(u,m,_,w,F,$){u.info(function(){if(u.g)if($)for(var re="",$e=$.split("&"),mt=0;mt<$e.length;mt++){var Ve=$e[mt].split("=");if(1<Ve.length){var Tt=Ve[0];Ve=Ve[1];var ct=Tt.split("_");re=2<=ct.length&&ct[1]=="type"?re+(Tt+"="+Ve+"&"):re+(Tt+"=redacted&")}}else re=null;else re=$;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+re})}function Ms(u,m,_,w,F,$,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+$+" "+re})}function Rn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+uf(u,_)+(w?" "+w:"")})}function fa(u,m){u.info(function(){return"TIMEOUT: "+m})}Wi.prototype.info=function(){};function uf(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return sa(_)}catch{return m}}var Fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pn;function qi(){}V(qi,Bi),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},Pn=new qi;function Cn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dl}function Dl(){this.i=null,this.g="",this.h=!1}var ha={},Us={};function js(u,m,_){u.L=1,u.v=ei(on(m)),u.m=_,u.P=!0,da(u,null)}function da(u,m){u.F=Date.now(),Ge(u),u.A=on(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ni(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Dl,u.g=Jl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new ji(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(ra[0]=F.toString()),F=ra);for(var $=0;$<F.length;$++){var re=Jo(_,F[$],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),Hi(u.i,u.u,u.A,u.l,u.R,u.m)}Cn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},Cn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Yt(this.g);var m=this.g.Ba();const gn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||va(this.g)))){this.J||ct!=4||m==7||(m==8||0>=gn?_r(3):_r(2)),Gi(this);var _=this.g.Z();this.X=_;t:if(Ll(this)){var w=va(this.g);u="";var F=w.length,$=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Yr(this);var re="";break t}this.h.i=new h.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,Ms(this.i,this.u,this.A,this.l,this.R,ct,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,mt=this.g;if(($e=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J($e)){var Ve=$e;break t}}Ve=null}if(_=Ve)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pa(this,_);else{this.o=!1,this.s=3,at(12),pn(this),Yr(this);break e}}if(this.P){_=!0;let ln;for(;!this.J&&this.C<re.length;)if(ln=cf(this,re),ln==Us){ct==4&&(this.s=4,at(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ha){this.s=4,at(15),Rn(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,ln,null),pa(this,ln);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||re.length!=0||this.h.h||(this.s=1,at(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,re,"[Invalid Chunked Response]"),pn(this),Yr(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),wa(Tt),Tt.M=!0,at(11))}}else Rn(this.i,this.l,re,null),pa(this,re);ct==4&&pn(this),this.o&&!this.J&&(ct==4?Xs(this.j,this):(this.o=!1,Ge(this)))}else qs(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),pn(this),Yr(this)}}}catch{}finally{}};function Ll(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function cf(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Us:(_=Number(m.substring(_,w)),isNaN(_)?ha:(w+=1,w+_>m.length?Us:(m=m.slice(w,w+_),u.C=w+_,m)))}Cn.prototype.cancel=function(){this.J=!0,pn(this)};function Ge(u){u.S=Date.now()+u.I,Vl(u,u.I)}function Vl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=kn(I(u.ba,u),m)}function Gi(u){u.B&&(h.clearTimeout(u.B),u.B=null)}Cn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(fa(this.i,this.A),this.L!=2&&(_r(),at(17)),pn(this),this.s=2,Yr(this)):Vl(this,this.S-u)};function Yr(u){u.j.G==0||u.J||Xs(u.j,u)}function pn(u){Gi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ia(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function pa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ys(_),Dn(_);else break e;Qs(_),at(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=kn(I(_.Za,_),6e3));if(1>=Fl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Ys(_),!J(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Ve=F[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Tt=Ve[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const ct=Ve[4];ct!=null&&(_.Aa=ct,_.j.info("SVER="+_.Aa));const gn=Ve[5];gn!=null&&typeof gn=="number"&&0<gn&&(w=1.5*gn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const ln=u.g;if(ln){const es=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var $=w.h;$.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ma($,$.h),$.h=null))}if(w.D){const Zs=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Zs&&(w.ya=Zs,He(w.I,w.D,Zs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var re=u;if(w.qa=Xl(w,w.J?w.ia:null,w.W),re.K){Ul(w.h,re);var $e=re,mt=w.L;mt&&($e.I=mt),$e.B&&(Gi($e),Ge($e)),w.g=re}else Zi(w);0<_.i.length&&Qn(_)}else Ve[0]!="stop"&&Ve[0]!="close"||Ir(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Ir(_,7):Pt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}_r(4)}catch{}}var Ml=class{constructor(u,m){this.g=u,this.map=m}};function Ki(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fl(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ma(u,m){u.g?u.g.add(m):u.h=m}function Ul(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ki.prototype.cancel=function(){if(this.i=jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function jl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return W(u.i)}function zs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Xr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Bs(u),w=zs(u),F=w.length,$=0;$<F;$++)m.call(void 0,w[$],_&&_[$],u)}var Qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var $=u[_].substring(0,w);F=u[_].substring(w+1)}else $=u[_];m($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Yi(this,u.j),this.o=u.o,this.g=u.g,Jr(this,u.s),this.l=u.l;var m=u.i,_=new qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Zr(this,_),this.m=u.m}else u&&(m=String(u).match(Qi))?(this.h=!1,Yi(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),Jr(this,m[4]),this.l=Oe(m[5]||"",!0),Zr(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}vr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ti(m,$s,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ti(m,$s,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ti(_,_.charAt(0)=="/"?$l:Bl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ti(_,ga)),u.join("")};function on(u){return new vr(u)}function Yi(u,m,_){u.j=_?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Jr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Zr(u,m,_){m instanceof qn?(u.i=m,Gn(u.i,u.h)):(_||(m=ti(m,Wl)),u.i=new qn(m,u.h))}function He(u,m,_){u.i.set(m,_)}function ei(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ti(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,zl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function zl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var $s=/[#\/\?@]/g,Bl=/[#\?:]/g,$l=/[#\?]/g,Wl=/[#\?@]/g,ga=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&ff(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=qn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=mn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function xn(u,m){Rt(u),m=mn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return Rt(u),m=mn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let $=0;$<F.length;$++)_.push(m[w])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=mn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ni(u,m,_){xn(u,m),0<_.length&&(u.i=null,u.g.set(mn(u,m),W(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const $=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var F=$;re[w]!==""&&(F+="="+encodeURIComponent(String(re[w]))),u.push(F)}}return this.i=u.join("&")};function mn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Gn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(xn(this,w),ni(this,F,_))},u)),u.j=m}function hf(u,m){const _=new Wi;if(h.Image){const w=new Image;w.onload=N(Qt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=N(Qt,_,"TestLoadImage: error",!1,m,w),w.onabort=N(Qt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=N(Qt,_,"TestLoadImage: timeout",!1,m,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Hl(u,m){const _=new Wi,w=new AbortController,F=setTimeout(()=>{w.abort(),Qt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(F),$.ok?Qt(_,"TestPingServer: ok",!0,m):Qt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Qt(_,"TestPingServer: error",!1,m)})}function Qt(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function df(){this.g=new aa}function ql(u,m,_){const w=_||"";try{Xr(u,function(F,$){let re=F;y(F)&&(re=sa(F)),m.push(w+$+"="+encodeURIComponent(re))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}V(Er,Bi),Er.prototype.g=function(){return new Xi(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function Xi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Xi,dt),n=Xi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,On(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):On(this),this.readyState==3&&Gl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,On(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function On(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let m="";return Te(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function ri(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=wr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):He(u,m,_))}function Je(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Je,dt);var pf=/^https?$/i,ya=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Os(this.o):Os(Pn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){Ji(this,$);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())_.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),F=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(ya,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,re]of _)this.g.setRequestHeader($,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hs(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Ji(this,$)}};function Ji(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ws(u),an(u)}function Ws(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},n.bb=function(){_a(this)};function _a(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)na(u.Ea,0,u);else if(pt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=re===0){var F=String(u.D).match(Qi)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),w=!pf.test(F?F.toLowerCase():"")}_=w}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var $=2<Yt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Ws(u)}}finally{an(u)}}}}function an(u,m){if(u.g){Hs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Hs(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),oa(m)}};function va(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(J(u[w]))continue;var _=O(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[F]||[];m[F]=$,$.push(_)}x(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ea(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,u),this.cb=Kn("retryDelaySeedMs",1e4,u),this.Wa=Kn("forwardChannelMaxRetries",2,u),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(u&&u.concurrentRequestLimit),this.Da=new df,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ea.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){at(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Xl(this,null,this.W),Qn(this)};function Pt(u){if(Gs(u),u.G==3){var m=u.U++,_=on(u.I);if(He(_,"SID",u.K),He(_,"RID",m),He(_,"TYPE","terminate"),Tr(u,_),m=new Cn(u,u.j,m),m.L=2,m.v=ei(on(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&h.Image&&(new Image().src=m.v,_=!0),_||(m.g=Jl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}Yl(u)}function Dn(u){u.g&&(wa(u),u.g.cancel(),u.g=null)}function Gs(u){Dn(u),u.u&&(h.clearTimeout(u.u),u.u=null),Ys(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function Qn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;We||ae(),ie||(We(),ie=!0),me.add(m,u),u.B=0}}function mf(u,m){return Fl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=kn(I(u.Ga,u,m),Ql(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Cn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),C($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ii(this,F,m),_=on(this.I),He(_,"RID",u),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Tr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(wr($)))+"&"+m:this.m&&ri(_,this.m,$)),ma(this.h,F),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",m),He(_,"SID","null"),F.T=!0,js(F,_,null)):js(F,_,m),this.G=2}}else this.G==3&&(u?Ks(this,u):this.i.length==0||sn(this.h)||Ks(this))};function Ks(u,m){var _;m?_=m.l:_=u.U++;const w=on(u.I);He(w,"SID",u.K),He(w,"RID",_),He(w,"AID",u.T),Tr(u,w),u.m&&u.o&&ri(w,u.m,u.o),_=new Cn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ii(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ma(u.h,_),js(_,w,m)}function Tr(u,m){u.H&&Te(u.H,function(_,w){He(m,w,_)}),u.l&&Xr({},function(_,w){He(m,w,_)})}function ii(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let $=-1;for(;;){const re=["count="+_];$==-1?0<_?($=F[0].g,re.push("ofs="+$)):$=0:re.push("ofs="+$);let $e=!0;for(let mt=0;mt<_;mt++){let Ve=F[mt].g;const Tt=F[mt].map;if(Ve-=$,0>Ve)$=Math.max(0,F[mt].g-100),$e=!1;else try{ql(Tt,re,"req"+Ve+"_")}catch{w&&w(Tt)}}if($e){w=re.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Zi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;We||ae(),ie||(We(),ie=!0),me.add(m,u),u.v=0}}function Qs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=kn(I(u.Fa,u),Ql(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=kn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Dn(this),Kl(this))};function wa(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function Kl(u){u.g=new Cn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);He(m,"RID","rpc"),He(m,"SID",u.K),He(m,"AID",u.T),He(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(m,"TO",u.ja),He(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&ri(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ei(on(m)),_.m=null,_.P=!0,da(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Dn(this),Qs(this),at(19))};function Ys(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Xs(u,m){var _=null;if(u.g==m){Ys(u),wa(u),u.g=null;var w=2}else if(Ht(u.h,m))_=m.D,Ul(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=$i(),pt(w,new Vs(w,_)),Qn(u)}else Zi(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&mf(u,m)||w==2&&Qs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function Ql(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const F=!w;w=new vr(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Yi(w,"https"),ei(w),F?hf(w.toString(),_):Hl(w.toString(),_)}else at(2);u.G=0,u.l&&u.l.sa(m),Yl(u),Gs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Yl(u){if(u.G=0,u.ka=[],u.l){const m=jl(u.h);(m.length!=0||u.i.length!=0)&&(D(u.ka,m),D(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function Xl(u,m,_){var w=_ instanceof vr?on(_):new vr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Jr(w,w.s);else{var F=h.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var $=new vr(null);w&&Yi($,w),m&&($.g=m),F&&Jr($,F),_&&($.l=_),w=$}return _=u.D,m=u.ya,_&&m&&He(w,_,m),He(w,"VER",u.la),Tr(u,w),w}function Jl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Er({eb:_})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ta(){}n=Ta.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Js(){}Js.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){dt.call(this),this.g=new Ea(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Yn(this)}V(qt,dt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Pt(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=sa(u),u=_);m.i.push(new Ml(m.Ya++,u)),m.G==3&&Qn(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,Pt(this.g),delete this.g,qt.aa.N.call(this)};function Zl(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(Zl,Wn);function eu(){Ls.call(this),this.status=1}V(eu,Ls);function Yn(u){this.g=u}V(Yn,Ta),Yn.prototype.ua=function(){pt(this.g,"a")},Yn.prototype.ta=function(u){pt(this.g,new Zl(u))},Yn.prototype.sa=function(u){pt(this.g,new eu)},Yn.prototype.ra=function(){pt(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,hE=function(){return new Js},fE=function(){return $i()},cE=Hn,gd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,ac=Fs,Ol.COMPLETE="complete",uE=Ol,Ds.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Qa=Ds,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,lE=Je}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});const Ky="@firebase/firestore";/**
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
 */let Ho="11.2.0";/**
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
 */const Es=new Jd("@firebase/firestore");function wo(){return Es.logLevel}function le(n,...e){if(Es.logLevel<=Ne.DEBUG){const t=e.map(hp);Es.debug(`Firestore (${Ho}): ${n}`,...t)}}function Br(n,...e){if(Es.logLevel<=Ne.ERROR){const t=e.map(hp);Es.error(`Firestore (${Ho}): ${n}`,...t)}}function Lo(n,...e){if(Es.logLevel<=Ne.WARN){const t=e.map(hp);Es.warn(`Firestore (${Ho}): ${n}`,...t)}}function hp(n){if(typeof n=="string")return n;try{/**
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
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function Be(n,e){n||Se()}function ke(n,e){return n}/**
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
 */class Ci{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class dE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class SA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class AA{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ci;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ci,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},h=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ci)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new dE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new zt(e)}}class kA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class RA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new kA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const f=l.token!==this.R;return this.R=l.token,le("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new PA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class pE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=xA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Vo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class tr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(),i===void 0?i=e.length-t:i>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=tr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=tr.isNumericId(e),o=tr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pi.fromString(e.substring(4,e.length-2))}}class st extends tr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new st(t)}static emptyPath(){return new st([])}}const NA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends tr{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return NA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ve(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let f=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new ve(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ve(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(f=!f,o++):h!=="."||f?(i+=h,o++):(l(),o++)}if(l(),f)throw new ve(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(st.fromString(e))}static fromName(e){return new Ee(st.fromString(e).popFirst(5))}static empty(){return new Ee(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new st(e.slice()))}}function bA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new xi(o,Ee.empty(),e)}function OA(n){return new xi(n.readTime,n.key,-1)}class xi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new xi(Ae.min(),Ee.empty(),-1)}static max(){return new xi(Ae.max(),Ee.empty(),-1)}}function DA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
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
 */const LA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==LA)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,f=!1;e.forEach(h=>{++o,h.next(()=>{++l,f&&l===o&&t()},p=>i(p))}),f=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,f=new Array(l);let h=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{f[y]=E,++h,h===l&&i(f)},E=>o(E))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function MA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$c.oe=-1;function Wc(n){return n==null}function Sc(n){return n===0&&1/n==-1/0}function FA(n){return typeof n=="number"&&Number.isInteger(n)&&!Sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function UA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qy(e)),e=jA(n.get(t),e);return Qy(e)}function jA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Qy(n){return n+""}/**
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
 */function Yy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yu(this.root,e,this.comparator,!0)}}class Yu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xy(this.data.getIterator())}getIteratorFrom(e){return new Xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new Et(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class gE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new gE("Invalid base64 string: "+l):l}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let l="";for(let f=0;f<o.length;++f)l+=String.fromCharCode(o[f]);return l}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const zA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(Be(!!n),typeof n=="string"){let e=0;const t=zA.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bi(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
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
 */function dp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Hc(n){const e=n.mapValue.fields.__previous_value__;return dp(e)?Hc(e):e}function ll(n){const e=Ni(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class BA{constructor(e,t,i,o,l,f,h,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=f,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y}}class ul{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xu={mapValue:{}};function Oi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dp(n)?4:WA(n)?9007199254740991:$A(n)?10:11:Se()}function ur(n,e){if(n===e)return!0;const t=Oi(n);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ll(n).isEqual(ll(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const f=Ni(o.timestampValue),h=Ni(l.timestampValue);return f.seconds===h.seconds&&f.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return bi(o.bytesValue).isEqual(bi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const f=ut(o.doubleValue),h=ut(l.doubleValue);return f===h?Sc(f)===Sc(h):isNaN(f)&&isNaN(h)}return!1}(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(o,l){const f=o.mapValue.fields||{},h=l.mapValue.fields||{};if(Yy(f)!==Yy(h))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(h[p]===void 0||!ur(f[p],h[p])))return!1;return!0}(n,e);default:return Se()}}function cl(n,e){return(n.values||[]).find(t=>ur(t,e))!==void 0}function Mo(n,e){if(n===e)return 0;const t=Oi(n),i=Oi(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(l,f){const h=ut(l.integerValue||l.doubleValue),p=ut(f.integerValue||f.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,e);case 3:return Jy(n.timestampValue,e.timestampValue);case 4:return Jy(ll(n),ll(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(l,f){const h=bi(l),p=bi(f);return h.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,f){const h=l.split("/"),p=f.split("/");for(let y=0;y<h.length&&y<p.length;y++){const E=De(h[y],p[y]);if(E!==0)return E}return De(h.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,f){const h=De(ut(l.latitude),ut(f.latitude));return h!==0?h:De(ut(l.longitude),ut(f.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zy(n.arrayValue,e.arrayValue);case 10:return function(l,f){var h,p,y,E;const T=l.fields||{},I=f.fields||{},N=(h=T.value)===null||h===void 0?void 0:h.arrayValue,V=(p=I.value)===null||p===void 0?void 0:p.arrayValue,W=De(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((E=V==null?void 0:V.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:Zy(N,V)}(n.mapValue,e.mapValue);case 11:return function(l,f){if(l===Xu.mapValue&&f===Xu.mapValue)return 0;if(l===Xu.mapValue)return 1;if(f===Xu.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const I=De(p[T],E[T]);if(I!==0)return I;const N=Mo(h[p[T]],y[E[T]]);if(N!==0)return N}return De(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Se()}}function Jy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Ni(n),i=Ni(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function Zy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Mo(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Fo(n){return yd(n)}function yd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=yd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const f of i)l?l=!1:o+=",",o+=`${f}:${yd(t.fields[f])}`;return o+"}"}(n.mapValue):Se()}function lc(n){switch(Oi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hc(n);return e?16+lc(e):16;case 5:return 2*n.stringValue.length;case 6:return bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+lc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Is(i.fields,(l,f)=>{o+=l.length+lc(f)}),o}(n.mapValue);default:throw Se()}}function _d(n){return!!n&&"integerValue"in n}function pp(n){return!!n&&"arrayValue"in n}function e_(n){return!!n&&"nullValue"in n}function t_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function uc(n){return!!n&&"mapValue"in n}function $A(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function el(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Is(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=el(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(n.arrayValue.values[t]);return e}return Object.assign({},n)}function WA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!uc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach((f,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}f?i[h.lastSegment()]=el(f):o.push(h.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());uc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];uc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Is(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new In(el(this.value))}}function yE(n){const e=[];return Is(n.fields,(t,i)=>{const o=new bt([t]);if(uc(i)){const l=yE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const f of l)e.push(o.child(f))}else e.push(o)}),new zn(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,f,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=f,this.documentState=h}static newInvalidDocument(e){return new Bt(e,0,Ae.min(),Ae.min(),Ae.min(),In.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ae.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ae.min(),Ae.min(),In.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ae.min(),Ae.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ac{constructor(e,t){this.position=e,this.inclusive=t}}function n_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],f=n.position[o];if(l.field.isKeyField()?i=Ee.comparator(Ee.fromName(f.referenceValue),t.key):i=Mo(f,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function r_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ur(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kc{constructor(e,t="asc"){this.field=e,this.dir=t}}function HA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class _E{}class _t extends _E{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new GA(e,t,i):t==="array-contains"?new YA(e,i):t==="in"?new XA(e,i):t==="not-in"?new JA(e,i):t==="array-contains-any"?new ZA(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new KA(e,i):new QA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Mo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends _E{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new cr(e,t)}matches(e){return vE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vE(n){return n.op==="and"}function EE(n){return qA(n)&&vE(n)}function qA(n){for(const e of n.filters)if(e instanceof cr)return!1;return!0}function vd(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if(EE(n))return n.filters.map(e=>vd(e)).join(",");{const e=n.filters.map(t=>vd(t)).join(",");return`${n.op}(${e})`}}function wE(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)}(n,e):n instanceof cr?function(i,o){return o instanceof cr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,f,h)=>l&&wE(f,o.filters[h]),!0):!1}(n,e):void Se()}function TE(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`}(n):n instanceof cr?function(t){return t.op.toString()+" {"+t.getFilters().map(TE).join(" ,")+"}"}(n):"Filter"}class GA extends _t{constructor(e,t,i){super(e,t,i),this.key=Ee.fromName(i.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class KA extends _t{constructor(e,t){super(e,"in",t),this.keys=IE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class QA extends _t{constructor(e,t){super(e,"not-in",t),this.keys=IE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function IE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ee.fromName(i.referenceValue))}class YA extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pp(t)&&cl(t.arrayValue,this.value)}}class XA extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cl(this.value.arrayValue,t)}}class JA extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cl(this.value.arrayValue,t)}}class ZA extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>cl(this.value.arrayValue,i))}}/**
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
 */class ek{constructor(e,t=null,i=[],o=[],l=null,f=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=f,this.endAt=h,this.ue=null}}function i_(n,e=null,t=[],i=[],o=null,l=null,f=null){return new ek(n,e,t,i,o,l,f)}function mp(n){const e=ke(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>vd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Wc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Fo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Fo(i)).join(",")),e.ue=t}return e.ue}function gp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!HA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!r_(n.startAt,e.startAt)&&r_(n.endAt,e.endAt)}function Ed(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class qc{constructor(e,t=null,i=[],o=[],l=null,f="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=f,this.startAt=h,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tk(n,e,t,i,o,l,f,h){return new qc(n,e,t,i,o,l,f,h)}function yp(n){return new qc(n)}function s_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nk(n){return n.collectionGroup!==null}function tl(n){const e=ke(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let h=new Et(bt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(h=h.add(y.field))})}),h})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new kc(l,i))}),t.has(bt.keyField().canonicalString())||e.ce.push(new kc(bt.keyField(),i))}return e.ce}function or(n){const e=ke(n);return e.le||(e.le=rk(e,tl(n))),e.le}function rk(n,e){if(n.limitType==="F")return i_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new kc(o.field,l)});const t=n.endAt?new Ac(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ac(n.startAt.position,n.startAt.inclusive):null;return i_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function wd(n,e,t){return new qc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gc(n,e){return gp(or(n),or(e))&&n.limitType===e.limitType}function SE(n){return`${mp(or(n))}|lt:${n.limitType}`}function To(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>TE(o)).join(", ")}]`),Wc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Fo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Fo(o)).join(",")),`Target(${i})`}(or(n))}; limitType=${n.limitType})`}function Kc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ee.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of tl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(f,h,p){const y=n_(f,h,p);return f.inclusive?y<=0:y<0}(i.startAt,tl(i),o)||i.endAt&&!function(f,h,p){const y=n_(f,h,p);return f.inclusive?y>=0:y>0}(i.endAt,tl(i),o))}(n,e)}function ik(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function AE(n){return(e,t)=>{let i=!1;for(const o of tl(n)){const l=sk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function sk(n,e,t){const i=n.field.isKeyField()?Ee.comparator(e.key,t.key):function(l,f,h){const p=f.data.field(l),y=h.data.field(l);return p!==null&&y!==null?Mo(p,y):Se()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se()}}/**
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
 */class Ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return mE(this.inner)}size(){return this.innerSize}}/**
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
 */const ok=new rt(Ee.comparator);function $r(){return ok}const kE=new rt(Ee.comparator);function Ya(...n){let e=kE;for(const t of n)e=e.insert(t.key,t);return e}function RE(n){let e=kE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ms(){return nl()}function PE(){return nl()}function nl(){return new Ss(n=>n.toString(),(n,e)=>n.isEqual(e))}const ak=new rt(Ee.comparator),lk=new Et(Ee.comparator);function be(...n){let e=lk;for(const t of n)e=e.add(t);return e}const uk=new Et(De);function ck(){return uk}/**
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
 */function _p(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function CE(n){return{integerValue:""+n}}function fk(n,e){return FA(e)?CE(e):_p(n,e)}/**
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
 */class Qc{constructor(){this._=void 0}}function hk(n,e,t){return n instanceof Rc?function(o,l){const f={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&dp(l)&&(l=Hc(l)),l&&(f.fields.__previous_value__=l),{mapValue:f}}(t,e):n instanceof fl?NE(n,e):n instanceof hl?bE(n,e):function(o,l){const f=xE(o,l),h=o_(f)+o_(o.Pe);return _d(f)&&_d(o.Pe)?CE(h):_p(o.serializer,h)}(n,e)}function dk(n,e,t){return n instanceof fl?NE(n,e):n instanceof hl?bE(n,e):t}function xE(n,e){return n instanceof Pc?function(i){return _d(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Rc extends Qc{}class fl extends Qc{constructor(e){super(),this.elements=e}}function NE(n,e){const t=OE(e);for(const i of n.elements)t.some(o=>ur(o,i))||t.push(i);return{arrayValue:{values:t}}}class hl extends Qc{constructor(e){super(),this.elements=e}}function bE(n,e){let t=OE(e);for(const i of n.elements)t=t.filter(o=>!ur(o,i));return{arrayValue:{values:t}}}class Pc extends Qc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function o_(n){return ut(n.integerValue||n.doubleValue)}function OE(n){return pp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function pk(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof fl&&o instanceof fl||i instanceof hl&&o instanceof hl?Vo(i.elements,o.elements,ur):i instanceof Pc&&o instanceof Pc?ur(i.Pe,o.Pe):i instanceof Rc&&o instanceof Rc}(n.transform,e.transform)}class mk{constructor(e,t){this.version=e,this.transformResults=t}}class Fr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fr}static exists(e){return new Fr(void 0,e)}static updateTime(e){return new Fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yc{}function DE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new VE(n.key,Fr.none()):new Il(n.key,n.data,Fr.none());{const t=n.data,i=In.empty();let o=new Et(bt.comparator);for(let l of e.fields)if(!o.has(l)){let f=t.field(l);f===null&&l.length>1&&(l=l.popLast(),f=t.field(l)),f===null?i.delete(l):i.set(l,f),o=o.add(l)}return new As(n.key,i,new zn(o.toArray()),Fr.none())}}function gk(n,e,t){n instanceof Il?function(o,l,f){const h=o.value.clone(),p=l_(o.fieldTransforms,l,f.transformResults);h.setAll(p),l.convertToFoundDocument(f.version,h).setHasCommittedMutations()}(n,e,t):n instanceof As?function(o,l,f){if(!cc(o.precondition,l))return void l.convertToUnknownDocument(f.version);const h=l_(o.fieldTransforms,l,f.transformResults),p=l.data;p.setAll(LE(o)),p.setAll(h),l.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,f){l.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function rl(n,e,t,i){return n instanceof Il?function(l,f,h,p){if(!cc(l.precondition,f))return h;const y=l.value.clone(),E=u_(l.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof As?function(l,f,h,p){if(!cc(l.precondition,f))return h;const y=u_(l.fieldTransforms,p,f),E=f.data;return E.setAll(LE(l)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,f,h){return cc(l.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):h}(n,e,t)}function yk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=xE(i.transform,o||null);l!=null&&(t===null&&(t=In.empty()),t.set(i.field,l))}return t||null}function a_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,(l,f)=>pk(l,f))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Il extends Yc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class As extends Yc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function LE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function l_(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],f=l.transform,h=e.data.field(l.field);i.set(l.field,dk(f,h,t[o]))}return i}function u_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,f=t.data.field(o.field);i.set(o.field,hk(l,f,e))}return i}class VE extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _k extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&gk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=PE();return this.mutations.forEach(o=>{const l=e.get(o.key),f=l.overlayedDocument;let h=this.applyToLocalView(f,l.mutatedFields);h=t.has(o.key)?null:h;const p=DE(f,h);p!==null&&i.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,(t,i)=>a_(t,i))&&Vo(this.baseMutations,e.baseMutations,(t,i)=>a_(t,i))}}class vp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=function(){return ak}();const l=e.mutations;for(let f=0;f<l.length;f++)o=o.insert(l[f].key,i[f].version);return new vp(e,t,i,o)}}/**
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
 */class Ek{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,Me;function Tk(n){switch(n){default:return Se();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function ME(n){if(n===void 0)return Br("GRPC error has no .code"),ee.UNKNOWN;switch(n){case ht.OK:return ee.OK;case ht.CANCELLED:return ee.CANCELLED;case ht.UNKNOWN:return ee.UNKNOWN;case ht.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ht.INTERNAL:return ee.INTERNAL;case ht.UNAVAILABLE:return ee.UNAVAILABLE;case ht.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ht.NOT_FOUND:return ee.NOT_FOUND;case ht.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ht.ABORTED:return ee.ABORTED;case ht.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ht.DATA_LOSS:return ee.DATA_LOSS;default:return Se()}}(Me=ht||(ht={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ik(){return new TextEncoder}/**
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
 */const Sk=new Pi([4294967295,4294967295],0);function c_(n){const e=Ik().encode(n),t=new aE;return t.update(e),new Uint8Array(t.digest())}function f_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Pi([t,i],0),new Pi([o,l],0)]}class Ep{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Xa(`Invalid padding: ${t}`);if(i<0)throw new Xa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Xa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Xa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Pi.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Pi.fromNumber(i)));return o.compare(Sk)===1&&(o=new Pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=c_(e),[i,o]=f_(t);for(let l=0;l<this.hashCount;l++){const f=this.de(i,o,l);if(!this.Ee(f))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),f=new Ep(l,o,t);return i.forEach(h=>f.insert(h)),f}insert(e){if(this.Te===0)return;const t=c_(e),[i,o]=f_(t);for(let l=0;l<this.hashCount;l++){const f=this.de(i,o,l);this.Ae(f)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Xc(Ae.min(),o,new rt(De),$r(),be())}}class Sl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Sl(i,t,be(),be(),be())}}/**
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
 */class fc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class FE{constructor(e,t){this.targetId=e,this.me=t}}class UE{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class h_{constructor(){this.fe=0,this.ge=d_(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),i=be();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se()}}),new Sl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=d_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ak{constructor(e){this.Be=e,this.Le=new Map,this.ke=$r(),this.qe=Ju(),this.Qe=Ju(),this.Ke=new rt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Ed(l))if(i===0){const f=new Ee(l.path);this.We(t,f,Bt.newNoDocument(f,Ae.min()))}else Be(i===1);else{const f=this.Ze(t);if(f!==i){const h=this.Xe(e),p=h?this.et(h,e,f):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let f,h;try{f=bi(i).toUint8Array()}catch(p){if(p instanceof gE)return Lo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Ep(f,o,l)}catch(p){return Lo(p instanceof Xa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.Te===0?null:h}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const f=this.Be.nt(),h=`projects/${f.projectId}/databases/${f.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,f)=>{const h=this.Ye(f);if(h){if(l.current&&Ed(h.target)){const p=new Ee(h.target.path);this.st(p).has(f)||this.ot(f,p)||this.We(f,p,Bt.newNoDocument(p,e))}l.be&&(t.set(f,l.ve()),l.Ce())}});let i=be();this.Qe.forEach((l,f)=>{let h=!0;f.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(l))}),this.ke.forEach((l,f)=>f.setReadTime(e));const o=new Xc(e,t,this.Ke,this.ke,i);return this.ke=$r(),this.qe=Ju(),this.Qe=Ju(),this.Ke=new rt(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new h_,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new h_),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Ju(){return new rt(Ee.comparator)}function d_(){return new rt(Ee.comparator)}const kk={asc:"ASCENDING",desc:"DESCENDING"},Rk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pk={and:"AND",or:"OR"};class Ck{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Td(n,e){return n.useProto3Json||Wc(e)?e:{value:e}}function Cc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xk(n,e){return Cc(n,e.toTimestamp())}function ar(n){return Be(!!n),Ae.fromTimestamp(function(t){const i=Ni(t);return new vt(i.seconds,i.nanos)}(n))}function wp(n,e){return Id(n,e).canonicalString()}function Id(n,e){const t=function(o){return new st(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zE(n){const e=st.fromString(n);return Be(qE(e)),e}function Sd(n,e){return wp(n.databaseId,e.path)}function Gh(n,e){const t=zE(e);if(t.get(1)!==n.databaseId.projectId)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee($E(t))}function BE(n,e){return wp(n.databaseId,e)}function Nk(n){const e=zE(n);return e.length===4?st.emptyPath():$E(e)}function Ad(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $E(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function p_(n,e,t){return{name:Sd(n,e),fields:t.value.mapValue.fields}}function bk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Be(E===void 0||typeof E=="string"),Ot.fromBase64String(E||"")):(Be(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ot.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),f=e.targetChange.cause,h=f&&function(y){const E=y.code===void 0?ee.UNKNOWN:ME(y.code);return new ve(E,y.message||"")}(f);t=new UE(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Gh(n,i.document.name),l=ar(i.document.updateTime),f=i.document.createTime?ar(i.document.createTime):Ae.min(),h=new In({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,f,h),y=i.targetIds||[],E=i.removedTargetIds||[];t=new fc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Gh(n,i.document),l=i.readTime?ar(i.readTime):Ae.min(),f=Bt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new fc([],h,f.key,f)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Gh(n,i.document),l=i.removedTargetIds||[];t=new fc([],l,o,null)}else{if(!("filter"in e))return Se();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,f=new wk(o,l),h=i.targetId;t=new FE(h,f)}}return t}function Ok(n,e){let t;if(e instanceof Il)t={update:p_(n,e.key,e.value)};else if(e instanceof VE)t={delete:Sd(n,e.key)};else if(e instanceof As)t={update:p_(n,e.key,e.data),updateMask:Bk(e.fieldMask)};else{if(!(e instanceof _k))return Se();t={verify:Sd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,f){const h=f.transform;if(h instanceof Rc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof fl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof hl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Pc)return{fieldPath:f.field.canonicalString(),increment:h.Pe};throw Se()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:xk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se()}(n,e.precondition)),t}function Dk(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(o,l){let f=o.updateTime?ar(o.updateTime):ar(l);return f.isEqual(Ae.min())&&(f=ar(l)),new mk(f,o.transformResults||[])}(t,e))):[]}function Lk(n,e){return{documents:[BE(n,e.path)]}}function Vk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=BE(n,o);const l=function(y){if(y.length!==0)return HE(cr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const f=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:Io(I.field),direction:Uk(I.dir)}}(E))}(e.orderBy);f&&(t.structuredQuery.orderBy=f);const h=Td(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Mk(n){let e=Nk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const I=WE(T);return I instanceof cr&&EE(I)?I.getFilters():[I]}(t.where));let f=[];t.orderBy&&(f=function(T){return T.map(I=>function(V){return new kc(So(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let h=null;t.limit&&(h=function(T){let I;return I=typeof T=="object"?T.value:T,Wc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,N=T.values||[];return new Ac(N,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,N=T.values||[];return new Ac(N,I)}(t.endAt)),tk(e,o,f,l,h,"F",p,y)}function Fk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function WE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=So(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=So(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=So(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=So(t.unaryFilter.field);return _t.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(So(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return cr.create(t.compositeFilter.filters.map(i=>WE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(n):Se()}function Uk(n){return kk[n]}function jk(n){return Rk[n]}function zk(n){return Pk[n]}function Io(n){return{fieldPath:n.canonicalString()}}function So(n){return bt.fromServerFormat(n.fieldPath)}function HE(n){return n instanceof _t?function(t){if(t.op==="=="){if(t_(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(e_(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(t_(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(e_(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:jk(t.op),value:t.value}}}(n):n instanceof cr?function(t){const i=t.getFilters().map(o=>HE(o));return i.length===1?i[0]:{compositeFilter:{op:zk(t.op),filters:i}}}(n):Se()}function Bk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Si{constructor(e,t,i,o,l=Ae.min(),f=Ae.min(),h=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $k{constructor(e){this.ht=e}}function Wk(n){const e=Mk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class Hk{constructor(){this.ln=new qk}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(xi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(xi.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class qk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(st.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(st.comparator)).toArray()}}/**
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
 */const m_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */class Uo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Uo(0)}static Qn(){return new Uo(-1)}}/**
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
 */function g_([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class Gk{constructor(e){this.Gn=e,this.buffer=new Et(g_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();g_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Yn(3e5)})}}class Qk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve($c.oe);const i=new Gk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(m_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),m_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,f,h,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,h=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),wo()<=Ne.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(h-f)+`ms
	Removed ${l} targets in `+(p-h)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function Yk(n,e){return new Qk(n,e)}/**
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
 */class Xk{constructor(){this.changes=new Ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Zk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&rl(i.mutation,o,zn.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,be()).next(()=>i))}getLocalViewOfDocuments(e,t,i=be()){const o=ms();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let f=Ya();return l.forEach((h,p)=>{f=f.insert(h,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const i=ms();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,be()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((f,h)=>{t.set(f,h)})})}computeViews(e,t,i,o){let l=$r();const f=nl(),h=function(){return nl()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof As)?l=l.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),rl(E.mutation,y,E.mutation.getFieldMask(),vt.now())):f.set(y.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>f.set(y,E)),t.forEach((y,E)=>{var T;return h.set(y,new Jk(E,(T=f.get(y))!==null&&T!==void 0?T:null))}),h))}recalculateAndSaveOverlays(e,t){const i=nl();let o=new rt((f,h)=>f-h),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const h of f)h.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||zn.empty();E=h.applyToLocalView(y,E),i.set(p,E);const T=(o.get(h.batchId)||be()).add(p);o=o.insert(h.batchId,T)})}).next(()=>{const f=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,E=p.value,T=PE();E.forEach(I=>{if(!l.has(I)){const N=DE(t.get(I),i.get(I));N!==null&&T.set(I,N),l=l.add(I)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(f)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(f){return Ee.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nk(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const f=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ms());let h=-1,p=l;return f.next(y=>G.forEach(y,(E,T)=>(h<T.largestBatchId&&(h=T.largestBatchId),l.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{p=p.insert(E,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,be())).next(E=>({batchId:h,changes:RE(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(i=>{let o=Ya();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let f=Ya();return this.indexManager.getCollectionParents(e,l).next(h=>G.forEach(h,p=>{const y=function(T,I){return new qc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,I)=>{f=f.insert(T,I)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(f=>(l=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(f=>{l.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Bt.newInvalidDocument(E)))});let h=Ya();return f.forEach((p,y)=>{const E=l.get(p);E!==void 0&&rl(E.mutation,y,zn.empty(),vt.now()),Kc(t,y)&&(h=h.insert(p,y))}),h})}}/**
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
 */class eR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:Wk(o.bundledQuery),readTime:ar(o.readTime)}}(t)),G.resolve()}}/**
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
 */class tR{constructor(){this.overlays=new rt(Ee.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ms();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ms(),l=t.length+1,f=new Ee(t.child("")),h=this.overlays.getIteratorFrom(f);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ms(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const h=ms(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>h.set(y,E)),!(h.size()>=o)););return G.resolve(h)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const f=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(i.key,new Ek(t,i));let l=this.dr.get(t);l===void 0&&(l=be(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
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
 */class nR{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class Tp{constructor(){this.Er=new Et(kt.Ar),this.Rr=new Et(kt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new kt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new kt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new Ee(new st([])),i=new kt(t,e),o=new kt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],f=>{this.gr(f),l.push(f.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Ee(new st([])),i=new kt(t,e),o=new kt(t,e+1);let l=be();return this.Rr.forEachInRange([i,o],f=>{l=l.add(f.key)}),l}containsKey(e){const t=new kt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class kt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Ee.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||Ee.comparator(e.key,t.key)}}/**
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
 */class rR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(kt.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new vk(l,t,i,o);this.mutationQueue.push(f);for(const h of o)this.vr=this.vr.add(new kt(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return G.resolve(f)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],f=>{const h=this.Cr(f.br);l.push(h)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(De);return t.forEach(o=>{const l=new kt(o,0),f=new kt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,f],h=>{i=i.add(h.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Ee.isDocumentKey(l)||(l=l.child(""));const f=new kt(new Ee(l),0);let h=new Et(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.br)),!0)},f),G.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const l=new kt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new kt(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iR{constructor(e){this.Nr=e,this.docs=function(){return new rt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,f=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:f}),this.size+=f-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const f=t.path,h=new Ee(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||DA(OA(E),i)<=0||(o.has(E.key)||Kc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Se()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new sR(this)}getSize(e){return G.resolve(this.size)}}class sR extends Xk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class oR{constructor(e){this.persistence=e,this.Lr=new Ss(t=>mp(t),gp),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Tp,this.targetCount=0,this.Qr=Uo.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Uo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((f,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Lr.delete(f),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(f=>{l.push(o.markPotentiallyOrphaned(e,f))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
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
 */class GE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new $c(0),this.Ur=!1,this.Ur=!0,this.Wr=new nR,this.referenceDelegate=e(this),this.Gr=new oR(this),this.indexManager=new Hk,this.remoteDocumentCache=function(o){return new iR(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new $k(t),this.jr=new eR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new rR(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new aR(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class aR extends VA{constructor(e){super(),this.currentSequenceNumber=e}}class Ip{constructor(e){this.persistence=e,this.Zr=new Tp,this.Xr=null}static ei(e){return new Ip(e)}get ti(){if(this.Xr)return this.Xr;throw Se()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=Ee.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ae.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class xc{constructor(e,t){this.persistence=e,this.ri=new Ss(i=>UA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=Yk(this,t)}static ei(e,t){return new xc(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,f=>this.ir(e,f,t).next(h=>{h||(i++,l.removeEntry(f,Ae.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lc(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Sp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Sp(e,t.fromCache,i,o)}}/**
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
 */class lR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return iI()?8:MA($t())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(f=>{l.result=f}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(f=>{l.result=f})}).next(()=>{if(l.result)return;const f=new lR;return this.ts(e,t,f).next(h=>{if(l.result=h,this.Hi)return this.ns(e,t,f,h.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(wo()<=Ne.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",To(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(wo()<=Ne.DEBUG&&le("QueryEngine","Query:",To(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(wo()<=Ne.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",To(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):G.resolve())}Xi(e,t){if(s_(t))return G.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=wd(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const f=be(...l);return this.Zi.getDocuments(e,f).next(h=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,h);return this.ss(t,y,f,p.readTime)?this.Xi(e,wd(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return s_(t)||o.isEqual(Ae.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const f=this.rs(t,l);return this.ss(t,f,i,o)?G.resolve(null):(wo()<=Ne.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),To(t)),this.os(e,f,t,bA(o,-1)).next(h=>h))})}rs(e,t){let i=new Et(AE(e));return t.forEach((o,l)=>{Kc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return wo()<=Ne.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",To(t)),this.Zi.getDocumentsMatchingQuery(e,t,xi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(f=>{l=l.insert(f.key,f)}),l))}}/**
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
 */class cR{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(De),this.cs=new Ss(l=>mp(l),gp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function fR(n,e,t,i){return new cR(n,e,t,i)}async function KE(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const f=[],h=[];let p=be();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:f,addedBatchIds:h}))})})}function hR(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,p,y,E){const T=y.batch,I=T.keys();let N=G.resolve();return I.forEach(V=>{N=N.next(()=>E.getEntry(p,V)).next(W=>{const D=y.docVersions.get(V);Be(D!==null),W.version.compareTo(D)<0&&(T.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),E.addEntry(W)))})}),N.next(()=>h.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let p=be();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function QE(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function dR(n,e){const t=ke(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const f=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const h=[];e.targetChanges.forEach((E,T)=>{const I=o.get(T);if(!I)return;h.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let N=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(Ot.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(E.resumeToken,i)),o=o.insert(T,N),function(W,D,H){return W.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,N,E)&&h.push(t.Gr.updateTargetData(l,N))});let p=$r(),y=be();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),h.push(pR(l,f,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(Ae.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));h.push(E)}return G.waitFor(h).next(()=>f.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function pR(n,e,t){let i=be(),o=be();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let f=$r();return t.forEach((h,p)=>{const y=l.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(h,p.readTime),f=f.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(h,p)):le("LocalStore","Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)}),{Is:f,ds:o}})}function mR(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function gR(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Gr.allocateTargetId(i).next(f=>(o=new Si(e,f,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function kd(n,e,t){const i=ke(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,f=>i.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!Go(f))throw f;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${f}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function y_(n,e,t){const i=ke(n);let o=Ae.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const T=ke(p),I=T.cs.get(E);return I!==void 0?G.resolve(T.us.get(I)):T.Gr.getTargetData(y,E)}(i,f,or(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(f,h.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(f,e,t?o:Ae.min(),t?l:be())).next(h=>(yR(i,ik(e),h),{documents:h,Es:l})))}function yR(n,e,t){let i=n.ls.get(e)||Ae.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class __{constructor(){this.activeTargetIds=ck()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _R{constructor(){this._o=new __,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new __,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vR{uo(e){}shutdown(){}}/**
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
 */class v_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zu=null;function Kh(){return Zu===null?Zu=function(){return 268435456+Math.round(2147483648*Math.random())}():Zu++,"0x"+Zu.toString(16)}/**
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
 */const ER={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const jt="WebChannelConnection";class TR extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,f){const h=Kh(),p=this.No(t,i.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${h}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,f),this.Lo(t,p,y,o).then(E=>(le("RestConnection",`Received RPC '${t}' ${h}: `,E),E),E=>{throw Lo("RestConnection",`RPC '${t}' ${h} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,f,h){return this.Oo(t,i,o,l,f)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ho}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,f)=>t[f]=l),o&&o.headers.forEach((l,f)=>t[f]=l)}No(t,i){const o=ER[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=Kh();return new Promise((f,h)=>{const p=new lE;p.setWithCredentials(!0),p.listenOnce(uE.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ac.NO_ERROR:const E=p.getResponseJson();le(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),f(E);break;case ac.TIMEOUT:le(jt,`RPC '${e}' ${l} timed out`),h(new ve(ee.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const T=p.getStatus();if(le(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const V=function(D){const H=D.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(H)>=0?H:ee.UNKNOWN}(N.status);h(new ve(V,N.message))}else h(new ve(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new ve(ee.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{le(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);le(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Kh(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=hE(),h=fE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");le(jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=f.createWebChannel(E,p);let I=!1,N=!1;const V=new wR({Eo:D=>{N?le(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(I||(le(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),le(jt,`RPC '${e}' stream ${o} sending:`,D),T.send(D))},Ao:()=>T.close()}),W=(D,H,J)=>{D.listen(H,Q=>{try{J(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return W(T,Qa.EventType.OPEN,()=>{N||(le(jt,`RPC '${e}' stream ${o} transport opened.`),V.So())}),W(T,Qa.EventType.CLOSE,()=>{N||(N=!0,le(jt,`RPC '${e}' stream ${o} transport closed`),V.Do())}),W(T,Qa.EventType.ERROR,D=>{N||(N=!0,Lo(jt,`RPC '${e}' stream ${o} transport errored:`,D),V.Do(new ve(ee.UNAVAILABLE,"The operation could not be completed")))}),W(T,Qa.EventType.MESSAGE,D=>{var H;if(!N){const J=D.data[0];Be(!!J);const Q=J,oe=(Q==null?void 0:Q.error)||((H=Q[0])===null||H===void 0?void 0:H.error);if(oe){le(jt,`RPC '${e}' stream ${o} received error:`,oe);const _e=oe.status;let Te=function(k){const C=ht[k];if(C!==void 0)return ME(C)}(_e),x=oe.message;Te===void 0&&(Te=ee.INTERNAL,x="Unknown error status: "+_e+" with message "+oe.message),N=!0,V.Do(new ve(Te,x)),T.close()}else le(jt,`RPC '${e}' stream ${o} received:`,J),V.vo(J)}}),W(h,cE.STAT_EVENT,D=>{D.stat===gd.PROXY?le(jt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===gd.NOPROXY&&le(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Qh(){return typeof document<"u"?document:null}/**
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
 */function Jc(n){return new Ck(n,!0)}/**
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
 */class YE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class XE{constructor(e,t,i,o,l,f,h,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new YE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ve(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IR extends XE{constructor(e,t,i,o,l,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,f),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=bk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ae.min();const f=l.targetChange;return f.targetIds&&f.targetIds.length?Ae.min():f.readTime?ar(f.readTime):Ae.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Ad(this.serializer),t.addTarget=function(l,f){let h;const p=f.target;if(h=Ed(p)?{documents:Lk(l,p)}:{query:Vk(l,p).ct},h.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){h.resumeToken=jE(l,f.resumeToken);const y=Td(l,f.expectedCount);y!==null&&(h.expectedCount=y)}else if(f.snapshotVersion.compareTo(Ae.min())>0){h.readTime=Cc(l,f.snapshotVersion.toTimestamp());const y=Td(l,f.expectedCount);y!==null&&(h.expectedCount=y)}return h}(this.serializer,e);const i=Fk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Ad(this.serializer),t.removeTarget=e,this.c_(t)}}class SR extends XE{constructor(e,t,i,o,l,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,f),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Dk(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Ad(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Ok(this.serializer,i))};this.c_(t)}}/**
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
 */class AR extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,f])=>this.connection.Oo(e,Id(t,i),o,l,f)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(ee.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,h])=>this.connection.ko(e,Id(t,i),o,f,h,l)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ve(ee.UNKNOWN,f.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class kR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class RR{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(f=>{i.enqueueAndForget(async()=>{ks(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=ke(p);y.k_.add(4),await Al(y),y.K_.set("Unknown"),y.k_.delete(4),await Zc(y)}(this))})}),this.K_=new kR(i,o)}}async function Zc(n){if(ks(n))for(const e of n.q_)await e(!0)}async function Al(n){for(const e of n.q_)await e(!1)}function JE(n,e){const t=ke(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Pp(t)?Rp(t):Ko(t).s_()&&kp(t,e))}function Ap(n,e){const t=ke(n),i=Ko(t);t.L_.delete(e),i.s_()&&ZE(t,e),t.L_.size===0&&(i.s_()?i.a_():ks(t)&&t.K_.set("Unknown"))}function kp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(n).V_(e)}function ZE(n,e){n.U_.xe(e),Ko(n).m_(e)}function Rp(n){n.U_=new Ak({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ko(n).start(),n.K_.F_()}function Pp(n){return ks(n)&&!Ko(n).i_()&&n.L_.size>0}function ks(n){return ke(n).k_.size===0}function ew(n){n.U_=void 0}async function PR(n){n.K_.set("Online")}async function CR(n){n.L_.forEach((e,t)=>{kp(n,e)})}async function xR(n,e){ew(n),Pp(n)?(n.K_.O_(e),Rp(n)):n.K_.set("Unknown")}async function NR(n,e,t){if(n.K_.set("Online"),e instanceof UE&&e.state===2&&e.cause)try{await async function(o,l){const f=l.cause;for(const h of l.targetIds)o.L_.has(h)&&(await o.remoteSyncer.rejectListen(h,f),o.L_.delete(h),o.U_.removeTarget(h))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Nc(n,i)}else if(e instanceof fc?n.U_.$e(e):e instanceof FE?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ae.min()))try{const i=await QE(n.localStore);t.compareTo(i)>=0&&await function(l,f){const h=l.U_.it(f);return h.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,f))}}),h.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),ZE(l,p);const T=new Si(E.target,p,y,E.sequenceNumber);kp(l,T)}),l.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await Nc(n,i)}}async function Nc(n,e,t){if(!Go(e))throw e;n.k_.add(1),await Al(n),n.K_.set("Offline"),t||(t=()=>QE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Zc(n)})}function tw(n,e){return e().catch(t=>Nc(n,t,e))}async function ef(n){const e=ke(n),t=Di(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;bR(e);)try{const o=await mR(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,OR(e,o)}catch(o){await Nc(e,o)}nw(e)&&rw(e)}function bR(n){return ks(n)&&n.B_.length<10}function OR(n,e){n.B_.push(e);const t=Di(n);t.s_()&&t.f_&&t.g_(e.mutations)}function nw(n){return ks(n)&&!Di(n).i_()&&n.B_.length>0}function rw(n){Di(n).start()}async function DR(n){Di(n).w_()}async function LR(n){const e=Di(n);for(const t of n.B_)e.g_(t.mutations)}async function VR(n,e,t){const i=n.B_.shift(),o=vp.from(i,e,t);await tw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await ef(n)}async function MR(n,e){e&&Di(n).f_&&await async function(i,o){if(function(f){return Tk(f)&&f!==ee.ABORTED}(o.code)){const l=i.B_.shift();Di(i).__(),await tw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await ef(i)}}(n,e),nw(n)&&rw(n)}async function E_(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const i=ks(t);t.k_.add(3),await Al(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Zc(t)}async function FR(n,e){const t=ke(n);e?(t.k_.delete(2),await Zc(t)):e||(t.k_.add(2),await Al(t),t.K_.set("Unknown"))}function Ko(n){return n.W_||(n.W_=function(t,i,o){const l=ke(t);return l.b_(),new IR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:PR.bind(null,n),mo:CR.bind(null,n),po:xR.bind(null,n),R_:NR.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Pp(n)?Rp(n):n.K_.set("Unknown")):(await n.W_.stop(),ew(n))})),n.W_}function Di(n){return n.G_||(n.G_=function(t,i,o){const l=ke(t);return l.b_(),new SR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:DR.bind(null,n),po:MR.bind(null,n),p_:LR.bind(null,n),y_:VR.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ef(n)):(await n.G_.stop(),n.B_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
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
 */class Cp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const f=Date.now()+i,h=new Cp(e,t,f,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Go(n))return new ve(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class No{static emptySet(e){return new No(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ee.comparator(t.key,i.key):(t,i)=>Ee.comparator(t.key,i.key),this.keyedMap=Ya(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new No;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class w_{constructor(){this.z_=new rt(Ee.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Se():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class jo{constructor(e,t,i,o,l,f,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=f,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const f=[];return t.forEach(h=>{f.push({type:0,doc:h})}),new jo(e,t,No.emptySet(t),f,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class UR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class jR{constructor(){this.queries=T_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=ke(t),l=o.queries;o.queries=T_(),l.forEach((f,h)=>{for(const p of h.J_)p.onError(i)})})(this,new ve(ee.ABORTED,"Firestore shutting down"))}}function T_(){return new Ss(n=>SE(n),Gc)}async function zR(n,e){const t=ke(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new UR,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const h=xp(f,`Initialization of query '${To(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Np(t)}async function BR(n,e){const t=ke(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const f=l.J_.indexOf(e);f>=0&&(l.J_.splice(f,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function $R(n,e){const t=ke(n);let i=!1;for(const o of e){const l=o.query,f=t.queries.get(l);if(f){for(const h of f.J_)h.ta(o)&&(i=!0);f.H_=o}}i&&Np(t)}function WR(n,e,t){const i=ke(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function Np(n){n.X_.forEach(e=>{e.next()})}var Rd,I_;(I_=Rd||(Rd={})).na="default",I_.Cache="cache";class HR{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new jo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=jo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Rd.Cache}}/**
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
 */class iw{constructor(e){this.key=e}}class sw{constructor(e){this.key=e}}class qR{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=AE(e),this.ma=new No(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new w_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,f=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const I=o.get(E),N=Kc(this.query,T)?T:null,V=!!I&&this.mutatedKeys.has(I.key),W=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let D=!1;I&&N?I.data.isEqual(N.data)?V!==W&&(i.track({type:3,doc:N}),D=!0):this.ya(I,N)||(i.track({type:2,doc:N}),D=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(h=!0)):!I&&N?(i.track({type:0,doc:N}),D=!0):I&&!N&&(i.track({type:1,doc:I}),D=!0,(p||y)&&(h=!0)),D&&(N?(f=f.add(N),l=W?l.add(E):l.delete(E)):(f=f.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:f,pa:i,ss:h,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const f=e.pa.j_();f.sort((E,T)=>function(N,V){const W=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return W(N)-W(V)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const h=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,f.length!==0||y?{snapshot:new jo(this.query,e.ma,l,f,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new w_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new sw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new iw(i))}),t}va(e){this.Ea=e.Es,this.Ra=be();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return jo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class GR{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class KR{constructor(e){this.key=e,this.Fa=!1}}class QR{constructor(e,t,i,o,l,f){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=f,this.Ma={},this.xa=new Ss(h=>SE(h),Gc),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(Ee.comparator),this.La=new Map,this.ka=new Tp,this.qa={},this.Qa=new Map,this.Ka=Uo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function YR(n,e,t=!0){const i=fw(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await ow(i,e,t,!0),o}async function XR(n,e){const t=fw(n);await ow(t,e,!0,!1)}async function ow(n,e,t,i){const o=await gR(n.localStore,or(e)),l=o.targetId,f=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await JR(n,e,l,f==="current",o.resumeToken)),n.isPrimaryClient&&t&&JE(n.remoteStore,o),h}async function JR(n,e,t,i,o){n.Ua=(T,I,N)=>async function(W,D,H,J){let Q=D.view.ga(H);Q.ss&&(Q=await y_(W.localStore,D.query,!1).then(({documents:x})=>D.view.ga(x,Q)));const oe=J&&J.targetChanges.get(D.targetId),_e=J&&J.targetMismatches.get(D.targetId)!=null,Te=D.view.applyChanges(Q,W.isPrimaryClient,oe,_e);return A_(W,D.targetId,Te.ba),Te.snapshot}(n,T,I,N);const l=await y_(n.localStore,e,!0),f=new qR(e,l.Es),h=f.ga(l.documents),p=Sl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=f.applyChanges(h,n.isPrimaryClient,p);A_(n,t,y.ba);const E=new GR(e,t,f);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function ZR(n,e,t){const i=ke(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(f=>!Gc(f,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await kd(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ap(i.remoteStore,o.targetId),Pd(i,o.targetId)}).catch(qo)):(Pd(i,o.targetId),await kd(i.localStore,o.targetId,!0))}async function eP(n,e){const t=ke(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ap(t.remoteStore,i.targetId))}async function tP(n,e,t){const i=lP(n);try{const o=await function(f,h){const p=ke(f),y=vt.now(),E=h.reduce((N,V)=>N.add(V.key),be());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let V=$r(),W=be();return p.hs.getEntries(N,E).next(D=>{V=D,V.forEach((H,J)=>{J.isValidDocument()||(W=W.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,V)).next(D=>{T=D;const H=[];for(const J of h){const Q=yk(J,T.get(J.key).overlayedDocument);Q!=null&&H.push(new As(J.key,Q,yE(Q.value.mapValue),Fr.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,H,h)}).next(D=>{I=D;const H=D.applyToLocalDocumentSet(T,W);return p.documentOverlayCache.saveOverlays(N,D.batchId,H)})}).then(()=>({batchId:I.batchId,changes:RE(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(f,h,p){let y=f.qa[f.currentUser.toKey()];y||(y=new rt(De)),y=y.insert(h,p),f.qa[f.currentUser.toKey()]=y}(i,o.batchId,t),await kl(i,o.changes),await ef(i.remoteStore)}catch(o){const l=xp(o,"Failed to persist write");t.reject(l)}}async function aw(n,e){const t=ke(n);try{const i=await dR(t.localStore,e);e.targetChanges.forEach((o,l)=>{const f=t.La.get(l);f&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Fa=!0:o.modifiedDocuments.size>0?Be(f.Fa):o.removedDocuments.size>0&&(Be(f.Fa),f.Fa=!1))}),await kl(t,i,e)}catch(i){await qo(i)}}function S_(n,e,t){const i=ke(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,f)=>{const h=f.view.ea(e);h.snapshot&&o.push(h.snapshot)}),function(f,h){const p=ke(f);p.onlineState=h;let y=!1;p.queries.forEach((E,T)=>{for(const I of T.J_)I.ea(h)&&(y=!0)}),y&&Np(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nP(n,e,t){const i=ke(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let f=new rt(Ee.comparator);f=f.insert(l,Bt.newNoDocument(l,Ae.min()));const h=be().add(l),p=new Xc(Ae.min(),new Map,new rt(De),f,h);await aw(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),bp(i)}else await kd(i.localStore,e,!1).then(()=>Pd(i,e,t)).catch(qo)}async function rP(n,e){const t=ke(n),i=e.batch.batchId;try{const o=await hR(t.localStore,e);uw(t,i,null),lw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await kl(t,o)}catch(o){await qo(o)}}async function iP(n,e,t){const i=ke(n);try{const o=await function(f,h){const p=ke(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,h).next(T=>(Be(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);uw(i,e,t),lw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await kl(i,o)}catch(o){await qo(o)}}function lw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function uw(n,e,t){const i=ke(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Pd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||cw(n,i)})}function cw(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Ap(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),bp(n))}function A_(n,e,t){for(const i of t)i instanceof iw?(n.ka.addReference(i.key,e),sP(n,i)):i instanceof sw?(le("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||cw(n,i.key)):Se()}function sP(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(i),bp(n))}function bp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new Ee(st.fromString(e)),i=n.Ka.next();n.La.set(i,new KR(t)),n.Ba=n.Ba.insert(t,i),JE(n.remoteStore,new Si(or(yp(t.path)),i,"TargetPurposeLimboResolution",$c.oe))}}async function kl(n,e,t){const i=ke(n),o=[],l=[],f=[];i.xa.isEmpty()||(i.xa.forEach((h,p)=>{f.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Sp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(f),i.Ma.R_(o),await async function(p,y){const E=ke(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,I=>G.forEach(I.Wi,N=>E.persistence.referenceDelegate.addReference(T,I.targetId,N)).next(()=>G.forEach(I.Gi,N=>E.persistence.referenceDelegate.removeReference(T,I.targetId,N)))))}catch(T){if(!Go(T))throw T;le("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const N=E.us.get(I),V=N.snapshotVersion,W=N.withLastLimboFreeSnapshotVersion(V);E.us=E.us.insert(I,W)}}}(i.localStore,l))}async function oP(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await KE(t.localStore,e);t.currentUser=e,function(l,f){l.Qa.forEach(h=>{h.forEach(p=>{p.reject(new ve(ee.CANCELLED,f))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await kl(t,i.Ts)}}function aP(n,e){const t=ke(n),i=t.La.get(e);if(i&&i.Fa)return be().add(i.key);{let o=be();const l=t.Oa.get(e);if(!l)return o;for(const f of l){const h=t.xa.get(f);o=o.unionWith(h.view.fa)}return o}}function fw(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nP.bind(null,e),e.Ma.R_=$R.bind(null,e.eventManager),e.Ma.Wa=WR.bind(null,e.eventManager),e}function lP(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iP.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return fR(this.persistence,new uR,e.initialUser,this.serializer)}ja(e){return new GE(Ip.ei,this.serializer)}za(e){return new _R}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class uP extends bc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Be(this.persistence.referenceDelegate instanceof xc);const i=this.persistence.referenceDelegate.garbageCollector;return new Kk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new GE(i=>xc.ei(i,t),this.serializer)}}class Cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>S_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=oP.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jR}()}createDatastore(e){const t=Jc(e.databaseInfo.databaseId),i=function(l){return new TR(l)}(e.databaseInfo);return function(l,f,h,p){return new AR(l,f,h,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,f,h){return new RR(i,o,l,f,h)}(this.localStore,this.datastore,e.asyncQueue,t=>S_(this.syncEngine,t,0),function(){return v_.p()?new v_:new vR}())}createSyncEngine(e,t){return function(o,l,f,h,p,y,E){const T=new QR(o,l,f,h,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=ke(o);le("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Al(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cd.provider={build:()=>new Cd};/**
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
 */class cP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class fP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=pE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async f=>{le("FirestoreClient","Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(i,f=>(le("FirestoreClient","Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=xp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Yh(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await KE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function k_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hP(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>E_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>E_(e.remoteStore,o)),n._onlineComponents=e}async function hP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Lo("Error using user provided cache. Falling back to memory cache: "+t),await Yh(n,new bc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await Yh(n,new uP(void 0));return n._offlineComponents}async function hw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await k_(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await k_(n,new Cd))),n._onlineComponents}function dP(n){return hw(n).then(e=>e.syncEngine)}async function pP(n){const e=await hw(n),t=e.eventManager;return t.onListen=YR.bind(null,e.syncEngine),t.onUnlisten=ZR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eP.bind(null,e.syncEngine),t}function mP(n,e,t={}){const i=new Ci;return n.asyncQueue.enqueueAndForget(async()=>function(l,f,h,p,y){const E=new cP({next:I=>{E.eu(),f.enqueueAndForget(()=>BR(l,T));const N=I.docs.has(h);!N&&I.fromCache?y.reject(new ve(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&I.fromCache&&p&&p.source==="server"?y.reject(new ve(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new HR(yp(h.path),E,{includeMetadataChanges:!0,ua:!0});return zR(l,T)}(await pP(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function dw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const R_=new Map;/**
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
 */function gP(n,e,t){if(!t)throw new ve(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yP(n,e,t,i){if(e===!0&&i===!0)throw new ve(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function P_(n){if(!Ee.isDocumentKey(n))throw new ve(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Op(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function dl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Op(n);throw new ve(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class C_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new IA;switch(i.type){case"firstParty":return new RA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ve(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=R_.get(t);i&&(le("ComponentProvider","Removing Datastore"),R_.delete(t),i.terminate())}(this),Promise.resolve()}}function _P(n,e,t,i={}){var o;const l=(n=dl(n,Dp))._getSettings(),f=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==f&&Lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:f,ssl:!1})),i.mockUserToken){let h,p;if(typeof i.mockUserToken=="string")h=i.mockUserToken,p=zt.MOCK_USER;else{h=X0(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ve(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new zt(y)}n._authCredentials=new SA(new dE(h,p))}}/**
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
 */class Lp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Lp(this.firestore,e,this._query)}}class Sn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sn(this.firestore,e,this._key)}}class pl extends Lp{constructor(e,t,i){super(e,t,yp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sn(this.firestore,null,new Ee(e))}withConverter(e){return new pl(this.firestore,e,this._path)}}function pw(n,e,...t){if(n=An(n),arguments.length===1&&(e=pE.newId()),gP("doc","path",e),n instanceof Dp){const i=st.fromString(e,...t);return P_(i),new Sn(n,null,new Ee(i))}{if(!(n instanceof Sn||n instanceof pl))throw new ve(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return P_(i),new Sn(n.firestore,n instanceof pl?n.converter:null,new Ee(i))}}/**
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
 */class x_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new YE(this,"async_queue_retry"),this.fu=()=>{const i=Qh();i&&le("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Qh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Qh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ci;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Go(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(f){let h=f.message||"";return f.stack&&(h=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),h}(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Cp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Se()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Vp extends Dp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new x_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new x_(e),this._firestoreClient=void 0,await e}}}function vP(n,e){const t=typeof n=="object"?n:Rv(),i=typeof n=="string"?n:"(default)",o=ep(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Q0("firestore");l&&_P(o,...l)}return o}function mw(n){if(n._terminated)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EP(n),n._firestoreClient}function EP(n){var e,t,i;const o=n._freezeSettings(),l=function(h,p,y,E){return new BA(h,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,dw(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new fP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class zo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zo(Ot.fromBase64String(e))}catch(t){throw new ve(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zo(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Mp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gw{constructor(e){this._methodName=e}}/**
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
 */class Fp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
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
 */class Up{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const wP=/^__.*__$/;class TP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}function yw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class jp{constructor(e,t,i,o,l,f){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Oc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(yw(this.Mu)&&wP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class IP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Jc(e)}$u(e,t,i,o=!1){return new jp({Mu:e,methodName:t,Ku:i,path:bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function SP(n){const e=n._freezeSettings(),t=Jc(n._databaseId);return new IP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function AP(n,e,t,i,o,l={}){const f=n.$u(l.merge||l.mergeFields?2:0,e,t,o);ww("Data must be an object, but it was:",f,i);const h=vw(i,f);let p,y;if(l.merge)p=new zn(f.fieldMask),y=f.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=kP(e,T,t);if(!f.contains(I))throw new ve(ee.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);PP(E,I)||E.push(I)}p=new zn(E),y=f.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=f.fieldTransforms;return new TP(new In(h),p,y)}function _w(n,e){if(Ew(n=An(n)))return ww("Unsupported field value:",e,n),vw(n,e);if(n instanceof gw)return function(i,o){if(!yw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let f=0;for(const h of i){let p=_w(h,o.ku(f));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),f++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=An(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:Cc(o.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Cc(o.serializer,l)}}if(i instanceof Fp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof zo)return{bytesValue:jE(o.serializer,i._byteString)};if(i instanceof Sn){const l=o.databaseId,f=i.firestore._databaseId;if(!f.isEqual(l))throw o.qu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Up)return function(f,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:f.toArray().map(p=>{if(typeof p!="number")throw h.qu("VectorValues must only contain numeric values.");return _p(h.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Op(i)}`)}(n,e)}function vw(n,e){const t={};return mE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(n,(i,o)=>{const l=_w(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function Ew(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Fp||n instanceof zo||n instanceof Sn||n instanceof gw||n instanceof Up)}function ww(n,e,t){if(!Ew(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Op(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function kP(n,e,t){if((e=An(e))instanceof Mp)return e._internalPath;if(typeof e=="string")return Tw(n,e);throw Oc("Field path arguments must be of type string or ",n,!1,void 0,t)}const RP=new RegExp("[~\\*/\\[\\]]");function Tw(n,e,t){if(e.search(RP)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mp(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oc(n,e,t,i,o){const l=i&&!i.isEmpty(),f=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||f)&&(p+=" (found",l&&(p+=` in field ${i}`),f&&(p+=` in document ${o}`),p+=")"),new ve(ee.INVALID_ARGUMENT,h+n+p)}function PP(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Iw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CP extends Iw{data(){return super.data()}}function Sw(n,e){return typeof e=="string"?Tw(n,e):e instanceof Mp?e._internalPath:e._delegate._internalPath}class xP{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Is(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(f=>ut(f.doubleValue));return new Up(l)}convertGeoPoint(e){return new Fp(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Hc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);Be(qE(i));const o=new ul(i.get(1),i.get(3)),l=new Ee(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function NP(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class bP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Aw extends Iw{constructor(e,t,i,o,l,f){super(e,t,i,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new OP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Sw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class OP extends Aw{data(e={}){return super.data(e)}}/**
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
 */function DP(n){n=dl(n,Sn);const e=dl(n.firestore,Vp);return mP(mw(e),n._key).then(t=>FP(e,n,t))}class LP extends xP{constructor(e){super(),this.firestore=e}convertBytes(e){return new zo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sn(this.firestore,null,t)}}function VP(n,e,t){n=dl(n,Sn);const i=dl(n.firestore,Vp),o=NP(n.converter,e,t);return MP(i,[AP(SP(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Fr.none())])}function MP(n,e){return function(i,o){const l=new Ci;return i.asyncQueue.enqueueAndForget(async()=>tP(await dP(i),o,l)),l.promise}(mw(n),e)}function FP(n,e,t){const i=t.docs.get(e._key),o=new LP(n);return new Aw(n,o,e._key,i,new bP(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Ho=o})($o),Oo(new _s("firestore",(i,{instanceIdentifier:o,options:l})=>{const f=i.getProvider("app").getImmediate(),h=new Vp(new AA(i.getProvider("auth-internal")),new CA(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ve(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(y.options.projectId,E)}(f,o),f);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h},"PUBLIC").setMultipleInstances(!0)),Ri(Ky,"4.7.6",e),Ri(Ky,"4.7.6","esm2017")})();const UP={apiKey:"AIzaSyBRTWsRqYZqc8db6Ad8ra0x1qc9xpdoZF0",authDomain:"multi-cinema.firebaseapp.com",projectId:"multi-cinema",storageBucket:"multi-cinema.firebasestorage.app",messagingSenderId:"129611887734",appId:"1:129611887734:web:114c2d1e061543c9b89b57"},kw=kv(UP),zp=wA(kw),Rw=vP(kw),jP=new br,zP=async()=>{try{return(await x1(zp,jP)).user}catch(n){return console.error("Ошибка при входе через Google:",n),null}},BP=async()=>{try{await c1(zp)}catch(n){console.error("Ошибка при выходе:",n)}},$P=async(n,e)=>{try{const t=pw(Rw,"users",n);await VP(t,{likedMovies:e},{merge:!0})}catch(t){console.error("Ошибка при сохранении лайкнутых фильмов:",t)}},WP=async n=>{try{const e=pw(Rw,"users",n),t=await DP(e);return t.exists()?t.data().likedMovies:[]}catch(e){return console.error("Ошибка при загрузке лайкнутых фильмов:",e),[]}},HP=n=>{const[e,t]=q.useState([]);return q.useEffect(()=>{n&&(async()=>{const l=await WP(n.uid);t(l)})()},[n]),q.useEffect(()=>{n&&e.length>0&&$P(n.uid,e)},[e,n]),{likedMovies:e,toggleLike:o=>{e.some(l=>l.id===o.id)?t(e.filter(l=>l.id!==o.id)):t([...e,o])}}},qP=()=>{const[n,e]=q.useState(null);return q.useEffect(()=>{const t=u1(zp,i=>{e(i)});return()=>t()},[]),{user:n}};function GP(){const[n,e]=q.useState(!0);return{isLoading:n,setIsLoading:e}}function KP(){const[n,e]=q.useState([]);return{data:n,setData:e}}function QP(){const[n,e]=q.useState("");return{filmName:n,setFilmName:e}}function YP(){const[n,e]=q.useState({});return{film:n,setFilm:e}}function XP(){const[n,e]=q.useState([]);return{collections:n,setCollections:e}}const Pw=q.createContext(),JP=({children:n})=>{const{user:e}=qP(),{likedMovies:t,toggleLike:i}=HP(e),{isLoading:o,setIsLoading:l}=GP(),{data:f,setData:h}=KP(),{filmName:p,setFilmName:y}=QP(),{film:E,setFilm:T}=YP(),{collections:I,setCollections:N}=XP();return B.jsx(Pw.Provider,{value:{user:e,likedMovies:t,toggleLike:i,isLoading:o,setIsLoading:l,data:f,setData:h,filmName:p,setFilmName:y,film:E,setFilm:T,collections:I,setCollections:N},children:n})},$n=()=>q.useContext(Pw);var Ga={},N_;function ZP(){if(N_)return Ga;N_=1,Object.defineProperty(Ga,"__esModule",{value:!0}),Ga.parse=f,Ga.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function f(I,N){const V=new l,W=I.length;if(W<2)return V;const D=(N==null?void 0:N.decode)||E;let H=0;do{const J=I.indexOf("=",H);if(J===-1)break;const Q=I.indexOf(";",H),oe=Q===-1?W:Q;if(J>oe){H=I.lastIndexOf(";",J-1)+1;continue}const _e=h(I,H,J),Te=p(I,J,_e),x=I.slice(_e,Te);if(V[x]===void 0){let S=h(I,J+1,oe),k=p(I,oe,S);const C=D(I.slice(S,k));V[x]=C}H=oe+1}while(H<W);return V}function h(I,N,V){do{const W=I.charCodeAt(N);if(W!==32&&W!==9)return N}while(++N<V);return V}function p(I,N,V){for(;N>V;){const W=I.charCodeAt(--N);if(W!==32&&W!==9)return N+1}return V}function y(I,N,V){const W=(V==null?void 0:V.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const D=W(N);if(!e.test(D))throw new TypeError(`argument val is invalid: ${N}`);let H=I+"="+D;if(!V)return H;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);H+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);H+="; Domain="+V.domain}if(V.path){if(!i.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);H+="; Path="+V.path}if(V.expires){if(!T(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);H+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(H+="; HttpOnly"),V.secure&&(H+="; Secure"),V.partitioned&&(H+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return H}function E(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Ga}ZP();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var b_="popstate";function eC(n={}){function e(i,o){let{pathname:l,search:f,hash:h}=i.location;return xd("",{pathname:l,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:ml(o)}return nC(e,t,null,n)}function nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function fr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tC(){return Math.random().toString(36).substring(2,10)}function O_(n,e){return{usr:n.state,key:n.key,idx:e}}function xd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Qo(e):e,state:t,key:e&&e.key||i||tC()}}function ml({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function nC(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,f=o.history,h="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function T(){h="POP";let D=E(),H=D==null?null:D-y;y=D,p&&p({action:h,location:W.location,delta:H})}function I(D,H){h="PUSH";let J=xd(W.location,D,H);y=E()+1;let Q=O_(J,y),oe=W.createHref(J);try{f.pushState(Q,"",oe)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(oe)}l&&p&&p({action:h,location:W.location,delta:1})}function N(D,H){h="REPLACE";let J=xd(W.location,D,H);y=E();let Q=O_(J,y),oe=W.createHref(J);f.replaceState(Q,"",oe),l&&p&&p({action:h,location:W.location,delta:0})}function V(D){let H=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof D=="string"?D:ml(D);return J=J.replace(/ $/,"%20"),nt(H,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,H)}let W={get action(){return h},get location(){return n(o,f)},listen(D){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(b_,T),p=D,()=>{o.removeEventListener(b_,T),p=null}},createHref(D){return e(o,D)},createURL:V,encodeLocation(D){let H=V(D);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:I,replace:N,go(D){return f.go(D)}};return W}function Cw(n,e,t="/"){return rC(n,e,t,!1)}function rC(n,e,t,i){let o=typeof e=="string"?Qo(e):e,l=Li(o.pathname||"/",t);if(l==null)return null;let f=xw(n);iC(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let y=mC(l);h=dC(f[p],y,i)}return h}function xw(n,e=[],t=[],i=""){let o=(l,f,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:f,route:l};p.relativePath.startsWith("/")&&(nt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Ur([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(nt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),xw(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:fC(y,l.index),routesMeta:E})};return n.forEach((l,f)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,f);else for(let p of Nw(l.path))o(l,f,p)}),e}function Nw(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let f=Nw(i.join("/")),h=[];return h.push(...f.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...f),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function iC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:hC(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var sC=/^:[\w-]+$/,oC=3,aC=2,lC=1,uC=10,cC=-2,D_=n=>n==="*";function fC(n,e){let t=n.split("/"),i=t.length;return t.some(D_)&&(i+=cC),e&&(i+=aC),t.filter(o=>!D_(o)).reduce((o,l)=>o+(sC.test(l)?oC:l===""?lC:uC),i)}function hC(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function dC(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",f=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=Dc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Dc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),f.push({params:o,pathname:Ur([l,T.pathname]),pathnameBase:vC(Ur([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Ur([l,T.pathnameBase]))}return f}function Dc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=pC(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],f=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},I)=>{if(E==="*"){let V=h[I]||"";f=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const N=h[I];return T&&!N?y[E]=void 0:y[E]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:f,pattern:n}}function pC(n,e=!1,t=!0){fr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function mC(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Li(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function gC(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Qo(n):n;return{pathname:t?t.startsWith("/")?t:yC(t,e):e,search:EC(i),hash:wC(o)}}function yC(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xh(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _C(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bw(n){let e=_C(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Ow(n,e,t,i=!1){let o;typeof n=="string"?o=Qo(n):(o={...n},nt(!o.pathname||!o.pathname.includes("?"),Xh("?","pathname","search",o)),nt(!o.pathname||!o.pathname.includes("#"),Xh("#","pathname","hash",o)),nt(!o.search||!o.search.includes("#"),Xh("#","search","hash",o)));let l=n===""||o.pathname==="",f=l?"/":o.pathname,h;if(f==null)h=t;else{let T=e.length-1;if(!i&&f.startsWith("..")){let I=f.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}h=T>=0?e[T]:"/"}let p=gC(o,h),y=f&&f!=="/"&&f.endsWith("/"),E=(l||f===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Ur=n=>n.join("/").replace(/\/\/+/g,"/"),vC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,wC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function TC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Dw=["POST","PUT","PATCH","DELETE"];new Set(Dw);var IC=["GET",...Dw];new Set(IC);var Yo=q.createContext(null);Yo.displayName="DataRouter";var tf=q.createContext(null);tf.displayName="DataRouterState";var Lw=q.createContext({isTransitioning:!1});Lw.displayName="ViewTransition";var SC=q.createContext(new Map);SC.displayName="Fetchers";var AC=q.createContext(null);AC.displayName="Await";var hr=q.createContext(null);hr.displayName="Navigation";var Rl=q.createContext(null);Rl.displayName="Location";var dr=q.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var Bp=q.createContext(null);Bp.displayName="RouteError";function kC(n,{relative:e}={}){nt(Pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=q.useContext(hr),{hash:o,pathname:l,search:f}=Cl(n,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:Ur([t,l])),i.createHref({pathname:h,search:f,hash:o})}function Pl(){return q.useContext(Rl)!=null}function Rs(){return nt(Pl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Rl).location}var Vw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mw(n){q.useContext(hr).static||q.useLayoutEffect(n)}function Fw(){let{isDataRoute:n}=q.useContext(dr);return n?jC():RC()}function RC(){nt(Pl(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(Yo),{basename:e,navigator:t}=q.useContext(hr),{matches:i}=q.useContext(dr),{pathname:o}=Rs(),l=JSON.stringify(bw(i)),f=q.useRef(!1);return Mw(()=>{f.current=!0}),q.useCallback((p,y={})=>{if(fr(f.current,Vw),!f.current)return;if(typeof p=="number"){t.go(p);return}let E=Ow(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ur([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}q.createContext(null);function PC(){let{matches:n}=q.useContext(dr),e=n[n.length-1];return e?e.params:{}}function Cl(n,{relative:e}={}){let{matches:t}=q.useContext(dr),{pathname:i}=Rs(),o=JSON.stringify(bw(t));return q.useMemo(()=>Ow(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function CC(n,e){return Uw(n,e)}function Uw(n,e,t,i){var J;nt(Pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=q.useContext(hr),{matches:f}=q.useContext(dr),h=f[f.length-1],p=h?h.params:{},y=h?h.pathname:"/",E=h?h.pathnameBase:"/",T=h&&h.route;{let Q=T&&T.path||"";jw(y,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let I=Rs(),N;if(e){let Q=typeof e=="string"?Qo(e):e;nt(E==="/"||((J=Q.pathname)==null?void 0:J.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=I;let V=N.pathname||"/",W=V;if(E!=="/"){let Q=E.replace(/^\//,"").split("/");W="/"+V.replace(/^\//,"").split("/").slice(Q.length).join("/")}let D=!l&&t&&t.matches&&t.matches.length>0?t.matches:Cw(n,{pathname:W});fr(T||D!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),fr(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=DC(D&&D.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:Ur([E,o.encodeLocation?o.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?E:Ur([E,o.encodeLocation?o.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),f,t,i);return e&&H?q.createElement(Rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},H):H}function xC(){let n=UC(),e=TC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,f)}var NC=q.createElement(xC,null),bC=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?q.createElement(dr.Provider,{value:this.props.routeContext},q.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function OC({routeContext:n,match:e,children:t}){let i=q.useContext(Yo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(dr.Provider,{value:n},t)}function DC(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);nt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=p),y.route.id){let{loaderData:E,errors:T}=t,I=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){f=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,I=!1,N=null,V=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,N=y.route.errorElement||NC,f&&(h<0&&E===0?(jw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,V=null):h===E&&(I=!0,V=y.route.hydrateFallbackElement||null)));let W=e.concat(o.slice(0,E+1)),D=()=>{let H;return T?H=N:I?H=V:y.route.Component?H=q.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,q.createElement(OC,{match:y,routeContext:{outlet:p,matches:W,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?q.createElement(bC,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:D(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):D()},null)}function $p(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LC(n){let e=q.useContext(Yo);return nt(e,$p(n)),e}function VC(n){let e=q.useContext(tf);return nt(e,$p(n)),e}function MC(n){let e=q.useContext(dr);return nt(e,$p(n)),e}function Wp(n){let e=MC(n),t=e.matches[e.matches.length-1];return nt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function FC(){return Wp("useRouteId")}function UC(){var i;let n=q.useContext(Bp),e=VC("useRouteError"),t=Wp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function jC(){let{router:n}=LC("useNavigate"),e=Wp("useNavigate"),t=q.useRef(!1);return Mw(()=>{t.current=!0}),q.useCallback(async(o,l={})=>{fr(t.current,Vw),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var L_={};function jw(n,e,t){!e&&!L_[n]&&(L_[n]=!0,fr(!1,t))}q.memo(zC);function zC({routes:n,future:e,state:t}){return Uw(n,void 0,t,e)}function Ao(n){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BC({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){nt(!Pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),h=q.useMemo(()=>({basename:f,navigator:o,static:l,future:{}}),[f,o,l]);typeof t=="string"&&(t=Qo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:I="default"}=t,N=q.useMemo(()=>{let V=Li(p,f);return V==null?null:{location:{pathname:V,search:y,hash:E,state:T,key:I},navigationType:i}},[f,p,y,E,T,I,i]);return fr(N!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:q.createElement(hr.Provider,{value:h},q.createElement(Rl.Provider,{children:e,value:N}))}function $C({children:n,location:e}){return CC(Nd(n),e)}function Nd(n,e=[]){let t=[];return q.Children.forEach(n,(i,o)=>{if(!q.isValidElement(i))return;let l=[...e,o];if(i.type===q.Fragment){t.push.apply(t,Nd(i.props.children,l));return}nt(i.type===Ao,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let f={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(f.children=Nd(i.props.children,l)),t.push(f)}),t}var hc="get",dc="application/x-www-form-urlencoded";function nf(n){return n!=null&&typeof n.tagName=="string"}function WC(n){return nf(n)&&n.tagName.toLowerCase()==="button"}function HC(n){return nf(n)&&n.tagName.toLowerCase()==="form"}function qC(n){return nf(n)&&n.tagName.toLowerCase()==="input"}function GC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function KC(n,e){return n.button===0&&(!e||e==="_self")&&!GC(n)}var ec=null;function QC(){if(ec===null)try{new FormData(document.createElement("form"),0),ec=!1}catch{ec=!0}return ec}var YC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jh(n){return n!=null&&!YC.has(n)?(fr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dc}"`),null):n}function XC(n,e){let t,i,o,l,f;if(HC(n)){let h=n.getAttribute("action");i=h?Li(h,e):null,t=n.getAttribute("method")||hc,o=Jh(n.getAttribute("enctype"))||dc,l=new FormData(n)}else if(WC(n)||qC(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(i=p?Li(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||hc,o=Jh(n.getAttribute("formenctype"))||Jh(h.getAttribute("enctype"))||dc,l=new FormData(h,n),!QC()){let{name:y,type:E,value:T}=n;if(E==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(nf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=hc,i=null,o=dc,f=n}return l&&o==="text/plain"&&(f=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:f}}function Hp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function JC(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ex(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let f=await JC(l,t);return f.links?f.links():[]}return[]}));return ix(i.flat(1).filter(ZC).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function V_(n,e,t,i,o,l){let f=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,h=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>f(p,y)||h(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||h(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function tx(n,e,{includeHydrateFallback:t}={}){return nx(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function nx(n){return[...new Set(n)]}function rx(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function ix(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(rx(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function sx(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ox(){let n=q.useContext(Yo);return Hp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ax(){let n=q.useContext(tf);return Hp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var qp=q.createContext(void 0);qp.displayName="FrameworkContext";function zw(){let n=q.useContext(qp);return Hp(n,"You must render this element inside a <HydratedRouter> element"),n}function lx(n,e){let t=q.useContext(qp),[i,o]=q.useState(!1),[l,f]=q.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,I=q.useRef(null);q.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let W=H=>{H.forEach(J=>{f(J.isIntersecting)})},D=new IntersectionObserver(W,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[n]),q.useEffect(()=>{if(i){let W=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(W)}}},[i]);let N=()=>{o(!0)},V=()=>{o(!1),f(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Ka(h,N),onBlur:Ka(p,V),onMouseEnter:Ka(y,N),onMouseLeave:Ka(E,V),onTouchStart:Ka(T,N)}]:[!1,I,{}]}function Ka(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ux({page:n,...e}){let{router:t}=ox(),i=q.useMemo(()=>Cw(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?q.createElement(fx,{page:n,matches:i,...e}):null}function cx(n){let{manifest:e,routeModules:t}=zw(),[i,o]=q.useState([]);return q.useEffect(()=>{let l=!1;return ex(n,e,t).then(f=>{l||o(f)}),()=>{l=!0}},[n,e,t]),i}function fx({page:n,matches:e,...t}){let i=Rs(),{manifest:o,routeModules:l}=zw(),{loaderData:f,matches:h}=ax(),p=q.useMemo(()=>V_(n,e,h,o,i,"data"),[n,e,h,o,i]),y=q.useMemo(()=>V_(n,e,h,o,i,"assets"),[n,e,h,o,i]),E=q.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,V=!1;if(e.forEach(D=>{var J;let H=o.routes[D.route.id];!H||!H.hasLoader||(!p.some(Q=>Q.route.id===D.route.id)&&D.route.id in f&&((J=l[D.route.id])!=null&&J.shouldRevalidate)||H.hasClientLoader?V=!0:N.add(D.route.id))}),N.size===0)return[];let W=sx(n);return V&&N.size>0&&W.searchParams.set("_routes",e.filter(D=>N.has(D.route.id)).map(D=>D.route.id).join(",")),[W.pathname+W.search]},[f,i,o,p,e,n,l]),T=q.useMemo(()=>tx(y,o),[y,o]),I=cx(y);return q.createElement(q.Fragment,null,E.map(N=>q.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),T.map(N=>q.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),I.map(({key:N,link:V})=>q.createElement("link",{key:N,...V})))}function hx(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Bw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bw&&(window.__reactRouterVersion="7.2.0")}catch{}function dx({basename:n,children:e,window:t}){let i=q.useRef();i.current==null&&(i.current=eC({window:t,v5Compat:!0}));let o=i.current,[l,f]=q.useState({action:o.action,location:o.location}),h=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>o.listen(h),[o,h]),q.createElement(BC,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var $w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mr=q.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:f,state:h,target:p,to:y,preventScrollReset:E,viewTransition:T,...I},N){let{basename:V}=q.useContext(hr),W=typeof y=="string"&&$w.test(y),D,H=!1;if(typeof y=="string"&&W&&(D=y,Bw))try{let k=new URL(window.location.href),C=y.startsWith("//")?new URL(k.protocol+y):new URL(y),O=Li(C.pathname,V);C.origin===k.origin&&O!=null?y=O+C.search+C.hash:H=!0}catch{fr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=kC(y,{relative:o}),[Q,oe,_e]=lx(i,I),Te=yx(y,{replace:f,state:h,target:p,preventScrollReset:E,relative:o,viewTransition:T});function x(k){e&&e(k),k.defaultPrevented||Te(k)}let S=q.createElement("a",{...I,..._e,href:D||J,onClick:H||l?e:x,ref:hx(N,oe),target:p,"data-discover":!W&&t==="render"?"true":void 0});return Q&&!W?q.createElement(q.Fragment,null,S,q.createElement(ux,{page:J})):S});Mr.displayName="Link";var px=q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:f,viewTransition:h,children:p,...y},E){let T=Cl(f,{relative:y.relative}),I=Rs(),N=q.useContext(tf),{navigator:V,basename:W}=q.useContext(hr),D=N!=null&&Tx(T)&&h===!0,H=V.encodeLocation?V.encodeLocation(T).pathname:T.pathname,J=I.pathname,Q=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,H=H.toLowerCase()),Q&&W&&(Q=Li(Q,W)||Q);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let _e=J===H||!o&&J.startsWith(H)&&J.charAt(oe)==="/",Te=Q!=null&&(Q===H||!o&&Q.startsWith(H)&&Q.charAt(H.length)==="/"),x={isActive:_e,isPending:Te,isTransitioning:D},S=_e?e:void 0,k;typeof i=="function"?k=i(x):k=[i,_e?"active":null,Te?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(x):l;return q.createElement(Mr,{...y,"aria-current":S,className:k,ref:E,style:C,to:f,viewTransition:h},typeof p=="function"?p(x):p)});px.displayName="NavLink";var mx=q.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:f=hc,action:h,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...I},N)=>{let V=Ex(),W=wx(h,{relative:y}),D=f.toLowerCase()==="get"?"get":"post",H=typeof h=="string"&&$w.test(h),J=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let oe=Q.nativeEvent.submitter,_e=(oe==null?void 0:oe.getAttribute("formmethod"))||f;V(oe||Q.currentTarget,{fetcherKey:e,method:_e,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return q.createElement("form",{ref:N,method:D,action:W,onSubmit:i?p:J,...I,"data-discover":!H&&n==="render"?"true":void 0})});mx.displayName="Form";function gx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ww(n){let e=q.useContext(Yo);return nt(e,gx(n)),e}function yx(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:f}={}){let h=Fw(),p=Rs(),y=Cl(n,{relative:l});return q.useCallback(E=>{if(KC(E,e)){E.preventDefault();let T=t!==void 0?t:ml(p)===ml(y);h(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:f})}},[p,h,y,t,i,e,n,o,l,f])}var _x=0,vx=()=>`__${String(++_x)}__`;function Ex(){let{router:n}=Ww("useSubmit"),{basename:e}=q.useContext(hr),t=FC();return q.useCallback(async(i,o={})=>{let{action:l,method:f,encType:h,formData:p,body:y}=XC(i,e);if(o.navigate===!1){let E=o.fetcherKey||vx();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function wx(n,{relative:e}={}){let{basename:t}=q.useContext(hr),i=q.useContext(dr);nt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Cl(n||".",{relative:e})},f=Rs();if(n==null){l.search=f.search;let h=new URLSearchParams(l.search),p=h.getAll("index");if(p.some(E=>E==="")){h.delete("index"),p.filter(T=>T).forEach(T=>h.append("index",T));let E=h.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ur([t,l.pathname])),ml(l)}function Tx(n,e={}){let t=q.useContext(Lw);nt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Ww("useViewTransitionState"),o=Cl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Li(t.currentLocation.pathname,i)||t.currentLocation.pathname,f=Li(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Dc(o.pathname,f)!=null||Dc(o.pathname,l)!=null}new TextEncoder;function Ix(){const[n,e]=q.useState({actual:0,all:0});return{pages:n,setPages:e}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Sx(n,e,t){return(e=kx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function M_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function te(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?M_(Object(t),!0).forEach(function(i){Sx(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):M_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ax(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function kx(n){var e=Ax(n,"string");return typeof e=="symbol"?e:e+""}const F_=()=>{};let Gp={},Hw={},qw=null,Gw={mark:F_,measure:F_};try{typeof window<"u"&&(Gp=window),typeof document<"u"&&(Hw=document),typeof MutationObserver<"u"&&(qw=MutationObserver),typeof performance<"u"&&(Gw=performance)}catch{}const{userAgent:U_=""}=Gp.navigator||{},Vi=Gp,Xe=Hw,j_=qw,tc=Gw;Vi.document;const Gr=!!Xe.documentElement&&!!Xe.head&&typeof Xe.addEventListener=="function"&&typeof Xe.createElement=="function",Kw=~U_.indexOf("MSIE")||~U_.indexOf("Trident/");var Rx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Px=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Cx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Yw=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Wt="classic",rf="duotone",xx="sharp",Nx="sharp-duotone",Xw=[Wt,rf,xx,Nx],bx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ox={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Dx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Lx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Vx=["fak","fa-kit","fakd","fa-kit-duotone"],z_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mx=["kit"],Fx={kit:{"fa-kit":"fak"}},Ux=["fak","fakd"],jx={kit:{fak:"fa-kit"}},B_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bx=["fak","fa-kit","fakd","fa-kit-duotone"],$x={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Hx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},bd={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},qx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Od=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...zx,...qx],Gx=["solid","regular","light","thin","duotone","brands"],Jw=[1,2,3,4,5,6,7,8,9,10],Kx=Jw.concat([11,12,13,14,15,16,17,18,19,20]),Qx=[...Object.keys(Hx),...Gx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nc.GROUP,nc.SWAP_OPACITY,nc.PRIMARY,nc.SECONDARY].concat(Jw.map(n=>"".concat(n,"x"))).concat(Kx.map(n=>"w-".concat(n))),Yx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Wr="___FONT_AWESOME___",Dd=16,Zw="fa",eT="svg-inline--fa",ws="data-fa-i2svg",Ld="data-fa-pseudo-element",Xx="data-fa-pseudo-element-pending",Kp="data-prefix",Qp="data-icon",$_="fontawesome-i2svg",Jx="async",Zx=["HTML","HEAD","STYLE","SCRIPT"],tT=(()=>{try{return!0}catch{return!1}})();function xl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Wt]}})}const nT=te({},Qw);nT[Wt]=te(te(te(te({},{"fa-duotone":"duotone"}),Qw[Wt]),z_.kit),z_["kit-duotone"]);const eN=xl(nT),Vd=te({},Lx);Vd[Wt]=te(te(te(te({},{duotone:"fad"}),Vd[Wt]),B_.kit),B_["kit-duotone"]);const W_=xl(Vd),Md=te({},bd);Md[Wt]=te(te({},Md[Wt]),jx.kit);const Yp=xl(Md),Fd=te({},Wx);Fd[Wt]=te(te({},Fd[Wt]),Fx.kit);xl(Fd);const tN=Rx,rT="fa-layers-text",nN=Px,rN=te({},bx);xl(rN);const iN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zh=Cx,sN=[...Mx,...Qx],il=Vi.FontAwesomeConfig||{};function oN(n){var e=Xe.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function aN(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Xe&&typeof Xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const o=aN(oN(t));o!=null&&(il[i]=o)});const iT={styleDefault:"solid",familyDefault:Wt,cssPrefix:Zw,replacementClass:eT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};il.familyPrefix&&(il.cssPrefix=il.familyPrefix);const Bo=te(te({},iT),il);Bo.autoReplaceSvg||(Bo.observeMutations=!1);const de={};Object.keys(iT).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){Bo[n]=e,sl.forEach(t=>t(de))},get:function(){return Bo[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){Bo.cssPrefix=n,sl.forEach(e=>e(de))},get:function(){return Bo.cssPrefix}});Vi.FontAwesomeConfig=de;const sl=[];function lN(n){return sl.push(n),()=>{sl.splice(sl.indexOf(n),1)}}const Ei=Dd,rr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uN(n){if(!n||!Gr)return;const e=Xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=Xe.head.childNodes;let i=null;for(let o=t.length-1;o>-1;o--){const l=t[o],f=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(i=l)}return Xe.head.insertBefore(e,i),n}const cN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gl(){let n=12,e="";for(;n-- >0;)e+=cN[Math.random()*62|0];return e}function Xo(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Xp(n){return n.classList?Xo(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function sT(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fN(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(sT(n[t]),'" '),"").trim()}function sf(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Jp(n){return n.size!==rr.size||n.x!==rr.x||n.y!==rr.y||n.rotate!==rr.rotate||n.flipX||n.flipY}function hN(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),h="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(f," ").concat(h)},y={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:p,path:y}}function dN(n){let{transform:e,width:t=Dd,height:i=Dd,startCentered:o=!1}=n,l="";return o&&Kw?l+="translate(".concat(e.x/Ei-t/2,"em, ").concat(e.y/Ei-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Ei,"em), calc(-50% + ").concat(e.y/Ei,"em)) "):l+="translate(".concat(e.x/Ei,"em, ").concat(e.y/Ei,"em) "),l+="scale(".concat(e.size/Ei*(e.flipX?-1:1),", ").concat(e.size/Ei*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var pN=`:root, :host {
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
}`;function oT(){const n=Zw,e=eT,t=de.cssPrefix,i=de.replacementClass;let o=pN;if(t!==n||i!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),h=new RegExp("\\.".concat(e),"g");o=o.replace(l,".".concat(t,"-")).replace(f,"--".concat(t,"-")).replace(h,".".concat(i))}return o}let H_=!1;function ed(){de.autoAddCss&&!H_&&(uN(oT()),H_=!0)}var mN={mixout(){return{dom:{css:oT,insertCss:ed}}},hooks(){return{beforeDOMElementCreation(){ed()},beforeI2svg(){ed()}}}};const Hr=Vi||{};Hr[Wr]||(Hr[Wr]={});Hr[Wr].styles||(Hr[Wr].styles={});Hr[Wr].hooks||(Hr[Wr].hooks={});Hr[Wr].shims||(Hr[Wr].shims=[]);var ir=Hr[Wr];const aT=[],lT=function(){Xe.removeEventListener("DOMContentLoaded",lT),Lc=1,aT.map(n=>n())};let Lc=!1;Gr&&(Lc=(Xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xe.readyState),Lc||Xe.addEventListener("DOMContentLoaded",lT));function gN(n){Gr&&(Lc?setTimeout(n,0):aT.push(n))}function Nl(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?sT(n):"<".concat(e," ").concat(fN(t),">").concat(i.map(Nl).join(""),"</").concat(e,">")}function q_(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var td=function(e,t,i,o){var l=Object.keys(e),f=l.length,h=t,p,y,E;for(i===void 0?(p=1,E=e[l[0]]):(p=0,E=i);p<f;p++)y=l[p],E=h(E,e[y],y,e);return E};function yN(n){const e=[];let t=0;const i=n.length;for(;t<i;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<i){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((o&1023)<<10)+(l&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function Ud(n){const e=yN(n);return e.length===1?e[0].toString(16):null}function _N(n,e){const t=n.length;let i=n.charCodeAt(e),o;return i>=55296&&i<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function G_(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function jd(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,o=G_(e);typeof ir.hooks.addPack=="function"&&!i?ir.hooks.addPack(n,G_(e)):ir.styles[n]=te(te({},ir.styles[n]||{}),o),n==="fas"&&jd("fa",e)}const{styles:yl,shims:vN}=ir,uT=Object.keys(Yp),EN=uT.reduce((n,e)=>(n[e]=Object.keys(Yp[e]),n),{});let Zp=null,cT={},fT={},hT={},dT={},pT={};function wN(n){return~sN.indexOf(n)}function TN(n,e){const t=e.split("-"),i=t[0],o=t.slice(1).join("-");return i===n&&o!==""&&!wN(o)?o:null}const mT=()=>{const n=i=>td(yl,(o,l,f)=>(o[f]=td(l,i,{}),o),{});cT=n((i,o,l)=>(o[3]&&(i[o[3]]=l),o[2]&&o[2].filter(h=>typeof h=="number").forEach(h=>{i[h.toString(16)]=l}),i)),fT=n((i,o,l)=>(i[l]=l,o[2]&&o[2].filter(h=>typeof h=="string").forEach(h=>{i[h]=l}),i)),pT=n((i,o,l)=>{const f=o[2];return i[l]=l,f.forEach(h=>{i[h]=l}),i});const e="far"in yl||de.autoFetchSvg,t=td(vN,(i,o)=>{const l=o[0];let f=o[1];const h=o[2];return f==="far"&&!e&&(f="fas"),typeof l=="string"&&(i.names[l]={prefix:f,iconName:h}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:f,iconName:h}),i},{names:{},unicodes:{}});hT=t.names,dT=t.unicodes,Zp=of(de.styleDefault,{family:de.familyDefault})};lN(n=>{Zp=of(n.styleDefault,{family:de.familyDefault})});mT();function em(n,e){return(cT[n]||{})[e]}function IN(n,e){return(fT[n]||{})[e]}function gs(n,e){return(pT[n]||{})[e]}function gT(n){return hT[n]||{prefix:null,iconName:null}}function SN(n){const e=dT[n],t=em("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Mi(){return Zp}const yT=()=>({prefix:null,iconName:null,rest:[]});function AN(n){let e=Wt;const t=uT.reduce((i,o)=>(i[o]="".concat(de.cssPrefix,"-").concat(o),i),{});return Xw.forEach(i=>{(n.includes(t[i])||n.some(o=>EN[i].includes(o)))&&(e=i)}),e}function of(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Wt}=e,i=eN[t][n];if(t===rf&&!n)return"fad";const o=W_[t][n]||W_[t][i],l=n in ir.styles?n:null;return o||l||null}function kN(n){let e=[],t=null;return n.forEach(i=>{const o=TN(de.cssPrefix,i);o?t=o:i&&e.push(i)}),{iconName:t,rest:e}}function K_(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function af(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const o=Od.concat(Bx),l=K_(n.filter(T=>o.includes(T))),f=K_(n.filter(T=>!Od.includes(T))),h=l.filter(T=>(i=T,!Yw.includes(T))),[p=null]=h,y=AN(l),E=te(te({},kN(f)),{},{prefix:of(p,{family:y})});return te(te(te({},E),xN({values:n,family:y,styles:yl,config:de,canonical:E,givenPrefix:i})),RN(t,i,E))}function RN(n,e,t){let{prefix:i,iconName:o}=t;if(n||!i||!o)return{prefix:i,iconName:o};const l=e==="fa"?gT(o):{},f=gs(i,o);return o=l.iconName||f||o,i=l.prefix||i,i==="far"&&!yl.far&&yl.fas&&!de.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const PN=Xw.filter(n=>n!==Wt||n!==rf),CN=Object.keys(bd).filter(n=>n!==Wt).map(n=>Object.keys(bd[n])).flat();function xN(n){const{values:e,family:t,canonical:i,givenPrefix:o="",styles:l={},config:f={}}=n,h=t===rf,p=e.includes("fa-duotone")||e.includes("fad"),y=f.familyDefault==="duotone",E=i.prefix==="fad"||i.prefix==="fa-duotone";if(!h&&(p||y||E)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&PN.includes(t)&&(Object.keys(l).find(I=>CN.includes(I))||f.autoFetchSvg)){const I=Dx.get(t).defaultShortPrefixId;i.prefix=I,i.iconName=gs(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=Mi()||"fas"),i}class NN{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(l=>{this.definitions[l]=te(te({},this.definitions[l]||{}),o[l]),jd(l,o[l]);const f=Yp[Wt][l];f&&jd(f,o[l]),mT()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(o=>{const{prefix:l,iconName:f,icon:h}=i[o],p=h[2];e[l]||(e[l]={}),p.length>0&&p.forEach(y=>{typeof y=="string"&&(e[l][y]=h)}),e[l][f]=h}),e}}let Q_=[],ko={};const bo={},bN=Object.keys(bo);function ON(n,e){let{mixoutsTo:t}=e;return Q_=n,ko={},Object.keys(bo).forEach(i=>{bN.indexOf(i)===-1&&delete bo[i]}),Q_.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(l=>{typeof o[l]=="function"&&(t[l]=o[l]),typeof o[l]=="object"&&Object.keys(o[l]).forEach(f=>{t[l]||(t[l]={}),t[l][f]=o[l][f]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(f=>{ko[f]||(ko[f]=[]),ko[f].push(l[f])})}i.provides&&i.provides(bo)}),t}function zd(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];return(ko[n]||[]).forEach(f=>{e=f.apply(null,[e,...i])}),e}function Ts(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(ko[n]||[]).forEach(l=>{l.apply(null,t)})}function Fi(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return bo[n]?bo[n].apply(null,e):void 0}function Bd(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Mi();if(e)return e=gs(t,e)||e,q_(_T.definitions,t,e)||q_(ir.styles,t,e)}const _T=new NN,DN=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,Ts("noAuto")},LN={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gr?(Ts("beforeI2svg",n),Fi("pseudoElements2svg",n),Fi("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,gN(()=>{MN({autoReplaceSvgRoot:e}),Ts("watch",n)})}},VN={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:gs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=of(n[0]);return{prefix:t,iconName:gs(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(tN))){const e=af(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Mi(),iconName:gs(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Mi();return{prefix:e,iconName:gs(e,n)||n}}}},hn={noAuto:DN,config:de,dom:LN,parse:VN,library:_T,findIconDefinition:Bd,toHtml:Nl},MN=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Xe}=n;(Object.keys(ir.styles).length>0||de.autoFetchSvg)&&Gr&&de.autoReplaceSvg&&hn.dom.i2svg({node:e})};function lf(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>Nl(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Gr)return;const t=Xe.createElement("div");return t.innerHTML=n.html,t.children}}),n}function FN(n){let{children:e,main:t,mask:i,attributes:o,styles:l,transform:f}=n;if(Jp(f)&&t.found&&!i.found){const{width:h,height:p}=t,y={x:h/p/2,y:.5};o.style=sf(te(te({},l),{},{"transform-origin":"".concat(y.x+f.x/16,"em ").concat(y.y+f.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function UN(n){let{prefix:e,iconName:t,children:i,attributes:o,symbol:l}=n;const f=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},o),{},{id:f}),children:i}]}]}function tm(n){const{icons:{main:e,mask:t},prefix:i,iconName:o,transform:l,symbol:f,title:h,maskId:p,titleId:y,extra:E,watchable:T=!1}=n,{width:I,height:N}=t.found?t:e,V=Ux.includes(i),W=[de.replacementClass,o?"".concat(de.cssPrefix,"-").concat(o):""].filter(_e=>E.classes.indexOf(_e)===-1).filter(_e=>_e!==""||!!_e).concat(E.classes).join(" ");let D={children:[],attributes:te(te({},E.attributes),{},{"data-prefix":i,"data-icon":o,class:W,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})};const H=V&&!~E.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};T&&(D.attributes[ws]=""),h&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(y||gl())},children:[h]}),delete D.attributes.title);const J=te(te({},D),{},{prefix:i,iconName:o,main:e,mask:t,maskId:p,transform:l,symbol:f,styles:te(te({},H),E.styles)}),{children:Q,attributes:oe}=t.found&&e.found?Fi("generateAbstractMask",J)||{children:[],attributes:{}}:Fi("generateAbstractIcon",J)||{children:[],attributes:{}};return J.children=Q,J.attributes=oe,f?UN(J):FN(J)}function Y_(n){const{content:e,width:t,height:i,transform:o,title:l,extra:f,watchable:h=!1}=n,p=te(te(te({},f.attributes),l?{title:l}:{}),{},{class:f.classes.join(" ")});h&&(p[ws]="");const y=te({},f.styles);Jp(o)&&(y.transform=dN({transform:o,startCentered:!0,width:t,height:i}),y["-webkit-transform"]=y.transform);const E=sf(y);E.length>0&&(p.style=E);const T=[];return T.push({tag:"span",attributes:p,children:[e]}),l&&T.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),T}function jN(n){const{content:e,title:t,extra:i}=n,o=te(te(te({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),l=sf(i.styles);l.length>0&&(o.style=l);const f=[];return f.push({tag:"span",attributes:o,children:[e]}),t&&f.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),f}const{styles:nd}=ir;function $d(n){const e=n[0],t=n[1],[i]=n.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zh.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zh.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:o}}const zN={found:!1,width:512,height:512};function BN(n,e){!tT&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Wd(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=Mi()),new Promise((i,o)=>{if(t==="fa"){const l=gT(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&nd[e]&&nd[e][n]){const l=nd[e][n];return i($d(l))}BN(n,e),i(te(te({},zN),{},{icon:de.showMissingIcons&&n?Fi("missingIconAbstract")||{}:{}}))})}const X_=()=>{},Hd=de.measurePerformance&&tc&&tc.mark&&tc.measure?tc:{mark:X_,measure:X_},Ja='FA "6.7.2"',$N=n=>(Hd.mark("".concat(Ja," ").concat(n," begins")),()=>vT(n)),vT=n=>{Hd.mark("".concat(Ja," ").concat(n," ends")),Hd.measure("".concat(Ja," ").concat(n),"".concat(Ja," ").concat(n," begins"),"".concat(Ja," ").concat(n," ends"))};var nm={begin:$N,end:vT};const pc=()=>{};function J_(n){return typeof(n.getAttribute?n.getAttribute(ws):null)=="string"}function WN(n){const e=n.getAttribute?n.getAttribute(Kp):null,t=n.getAttribute?n.getAttribute(Qp):null;return e&&t}function HN(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function qN(){return de.autoReplaceSvg===!0?mc.replace:mc[de.autoReplaceSvg]||mc.replace}function GN(n){return Xe.createElementNS("http://www.w3.org/2000/svg",n)}function KN(n){return Xe.createElement(n)}function ET(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?GN:KN}=e;if(typeof n=="string")return Xe.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(ET(l,{ceFn:t}))}),i}function QN(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const mc={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(ET(t),e)}),e.getAttribute(ws)===null&&de.keepOriginalSource){let t=Xe.createComment(QN(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Xp(e).indexOf(de.replacementClass))return mc.replace(n);const i=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((f,h)=>(h===de.replacementClass||h.match(i)?f.toSvg.push(h):f.toNode.push(h),f),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const o=t.map(l=>Nl(l)).join(`
`);e.setAttribute(ws,""),e.innerHTML=o}};function Z_(n){n()}function wT(n,e){const t=typeof e=="function"?e:pc;if(n.length===0)t();else{let i=Z_;de.mutateApproach===Jx&&(i=Vi.requestAnimationFrame||Z_),i(()=>{const o=qN(),l=nm.begin("mutate");n.map(o),l(),t()})}}let rm=!1;function TT(){rm=!0}function qd(){rm=!1}let Vc=null;function ev(n){if(!j_||!de.observeMutations)return;const{treeCallback:e=pc,nodeCallback:t=pc,pseudoElementsCallback:i=pc,observeMutationsRoot:o=Xe}=n;Vc=new j_(l=>{if(rm)return;const f=Mi();Xo(l).forEach(h=>{if(h.type==="childList"&&h.addedNodes.length>0&&!J_(h.addedNodes[0])&&(de.searchPseudoElements&&i(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&de.searchPseudoElements&&i(h.target.parentNode),h.type==="attributes"&&J_(h.target)&&~iN.indexOf(h.attributeName))if(h.attributeName==="class"&&WN(h.target)){const{prefix:p,iconName:y}=af(Xp(h.target));h.target.setAttribute(Kp,p||f),y&&h.target.setAttribute(Qp,y)}else HN(h.target)&&t(h.target)})}),Gr&&Vc.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function YN(){Vc&&Vc.disconnect()}function XN(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,o)=>{const l=o.split(":"),f=l[0],h=l.slice(1);return f&&h.length>0&&(i[f]=h.join(":").trim()),i},{})),t}function JN(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let o=af(Xp(n));return o.prefix||(o.prefix=Mi()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=IN(o.prefix,n.innerText)||em(o.prefix,Ud(n.innerText))),!o.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function ZN(n){const e=Xo(n.attributes).reduce((o,l)=>(o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(i||gl()):(e["aria-hidden"]="true",e.focusable="false")),e}function e2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function tv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:o}=JN(n),l=ZN(n),f=zd("parseNodeAttributes",{},n);let h=e.styleParser?XN(n):[];return te({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:rr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:h,attributes:l}},f)}const{styles:t2}=ir;function IT(n){const e=de.autoReplaceSvg==="nest"?tv(n,{styleParser:!1}):tv(n);return~e.extra.classes.indexOf(rT)?Fi("generateLayersText",n,e):Fi("generateSvgReplacementMutation",n,e)}function n2(){return[...Vx,...Od]}function nv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gr)return Promise.resolve();const t=Xe.documentElement.classList,i=E=>t.add("".concat($_,"-").concat(E)),o=E=>t.remove("".concat($_,"-").concat(E)),l=de.autoFetchSvg?n2():Yw.concat(Object.keys(t2));l.includes("fa")||l.push("fa");const f=[".".concat(rT,":not([").concat(ws,"])")].concat(l.map(E=>".".concat(E,":not([").concat(ws,"])"))).join(", ");if(f.length===0)return Promise.resolve();let h=[];try{h=Xo(n.querySelectorAll(f))}catch{}if(h.length>0)i("pending"),o("complete");else return Promise.resolve();const p=nm.begin("onTree"),y=h.reduce((E,T)=>{try{const I=IT(T);I&&E.push(I)}catch(I){tT||I.name==="MissingIcon"&&console.error(I)}return E},[]);return new Promise((E,T)=>{Promise.all(y).then(I=>{wT(I,()=>{i("active"),i("complete"),o("pending"),typeof e=="function"&&e(),p(),E()})}).catch(I=>{p(),T(I)})})}function r2(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;IT(n).then(t=>{t&&wT([t],e)})}function i2(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Bd(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:Bd(o||{})),n(i,te(te({},t),{},{mask:o}))}}const s2=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=rr,symbol:i=!1,mask:o=null,maskId:l=null,title:f=null,titleId:h=null,classes:p=[],attributes:y={},styles:E={}}=e;if(!n)return;const{prefix:T,iconName:I,icon:N}=n;return lf(te({type:"icon"},n),()=>(Ts("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(f?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(h||gl()):(y["aria-hidden"]="true",y.focusable="false")),tm({icons:{main:$d(N),mask:o?$d(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:I,transform:te(te({},rr),t),symbol:i,title:f,maskId:l,titleId:h,extra:{attributes:y,styles:E,classes:p}})))};var o2={mixout(){return{icon:i2(s2)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=nv,n.nodeCallback=r2,n}}},provides(n){n.i2svg=function(e){const{node:t=Xe,callback:i=()=>{}}=e;return nv(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:o,titleId:l,prefix:f,transform:h,symbol:p,mask:y,maskId:E,extra:T}=t;return new Promise((I,N)=>{Promise.all([Wd(i,f),y.iconName?Wd(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[W,D]=V;I([e,tm({icons:{main:W,mask:D},prefix:f,iconName:i,transform:h,symbol:p,maskId:E,title:o,titleId:l,extra:T,watchable:!0})])}).catch(N)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:o,transform:l,styles:f}=e;const h=sf(f);h.length>0&&(i.style=h);let p;return Jp(l)&&(p=Fi("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),t.push(p||o.icon),{children:t,attributes:i}}}},a2={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return lf({type:"layer"},()=>{Ts("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(o=>{Array.isArray(o)?o.map(l=>{i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},l2={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:o={},styles:l={}}=e;return lf({type:"counter",content:n},()=>(Ts("beforeDOMElementCreation",{content:n,params:e}),jN({content:n.toString(),title:t,extra:{attributes:o,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...i]}})))}}}},u2={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=rr,title:i=null,classes:o=[],attributes:l={},styles:f={}}=e;return lf({type:"text",content:n},()=>(Ts("beforeDOMElementCreation",{content:n,params:e}),Y_({content:n,transform:te(te({},rr),t),title:i,extra:{attributes:l,styles:f,classes:["".concat(de.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:o,extra:l}=t;let f=null,h=null;if(Kw){const p=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();f=y.width/p,h=y.height/p}return de.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,Y_({content:e.innerHTML,width:f,height:h,transform:o,title:i,extra:l,watchable:!0})])}}};const c2=new RegExp('"',"ug"),rv=[1105920,1112319],iv=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),Ox),Yx),$x),Gd=Object.keys(iv).reduce((n,e)=>(n[e.toLowerCase()]=iv[e],n),{}),f2=Object.keys(Gd).reduce((n,e)=>{const t=Gd[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function h2(n){const e=n.replace(c2,""),t=_N(e,0),i=t>=rv[0]&&t<=rv[1],o=e.length===2?e[0]===e[1]:!1;return{value:Ud(o?e[0]:e),isSecondary:i||o}}function d2(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),o=isNaN(i)?"normal":i;return(Gd[t]||{})[o]||f2[t]}function sv(n,e){const t="".concat(Xx).concat(e.replace(":","-"));return new Promise((i,o)=>{if(n.getAttribute(t)!==null)return i();const f=Xo(n.children).filter(I=>I.getAttribute(Ld)===e)[0],h=Vi.getComputedStyle(n,e),p=h.getPropertyValue("font-family"),y=p.match(nN),E=h.getPropertyValue("font-weight"),T=h.getPropertyValue("content");if(f&&!y)return n.removeChild(f),i();if(y&&T!=="none"&&T!==""){const I=h.getPropertyValue("content");let N=d2(p,E);const{value:V,isSecondary:W}=h2(I),D=y[0].startsWith("FontAwesome");let H=em(N,V),J=H;if(D){const Q=SN(V);Q.iconName&&Q.prefix&&(H=Q.iconName,N=Q.prefix)}if(H&&!W&&(!f||f.getAttribute(Kp)!==N||f.getAttribute(Qp)!==J)){n.setAttribute(t,J),f&&n.removeChild(f);const Q=e2(),{extra:oe}=Q;oe.attributes[Ld]=e,Wd(H,N).then(_e=>{const Te=tm(te(te({},Q),{},{icons:{main:_e,mask:yT()},prefix:N,iconName:J,extra:oe,watchable:!0})),x=Xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(x,n.firstChild):n.appendChild(x),x.outerHTML=Te.map(S=>Nl(S)).join(`
`),n.removeAttribute(t),i()}).catch(o)}else i()}else i()})}function p2(n){return Promise.all([sv(n,"::before"),sv(n,"::after")])}function m2(n){return n.parentNode!==document.head&&!~Zx.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Ld)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function ov(n){if(Gr)return new Promise((e,t)=>{const i=Xo(n.querySelectorAll("*")).filter(m2).map(p2),o=nm.begin("searchPseudoElements");TT(),Promise.all(i).then(()=>{o(),qd(),e()}).catch(()=>{o(),qd(),t()})})}var g2={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=ov,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=Xe}=e;de.searchPseudoElements&&ov(t)}}};let av=!1;var y2={mixout(){return{dom:{unwatch(){TT(),av=!0}}}},hooks(){return{bootstrap(){ev(zd("mutationObserverCallbacks",{}))},noAuto(){YN()},watch(n){const{observeMutationsRoot:e}=n;av?qd():ev(zd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const lv=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const o=i.toLowerCase().split("-"),l=o[0];let f=o.slice(1).join("-");if(l&&f==="h")return t.flipX=!0,t;if(l&&f==="v")return t.flipY=!0,t;if(f=parseFloat(f),isNaN(f))return t;switch(l){case"grow":t.size=t.size+f;break;case"shrink":t.size=t.size-f;break;case"left":t.x=t.x-f;break;case"right":t.x=t.x+f;break;case"up":t.y=t.y-f;break;case"down":t.y=t.y+f;break;case"rotate":t.rotate=t.rotate+f;break}return t},e)};var _2={mixout(){return{parse:{transform:n=>lv(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=lv(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:o,iconWidth:l}=e;const f={transform:"translate(".concat(o/2," 256)")},h="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),y="rotate(".concat(i.rotate," 0 0)"),E={transform:"".concat(h," ").concat(p," ").concat(y)},T={transform:"translate(".concat(l/2*-1," -256)")},I={outer:f,inner:E,path:T};return{tag:"g",attributes:te({},I.outer),children:[{tag:"g",attributes:te({},I.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),I.path)}]}]}}}};const rd={x:0,y:0,width:"100%",height:"100%"};function uv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function v2(n){return n.tag==="g"?n.children:[n]}var E2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?af(t.split(" ").map(o=>o.trim())):yT();return i.prefix||(i.prefix=Mi()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:o,mask:l,maskId:f,transform:h}=e;const{width:p,icon:y}=o,{width:E,icon:T}=l,I=hN({transform:h,containerWidth:E,iconWidth:p}),N={tag:"rect",attributes:te(te({},rd),{},{fill:"white"})},V=y.children?{children:y.children.map(uv)}:{},W={tag:"g",attributes:te({},I.inner),children:[uv(te({tag:y.tag,attributes:te(te({},y.attributes),I.path)},V))]},D={tag:"g",attributes:te({},I.outer),children:[W]},H="mask-".concat(f||gl()),J="clip-".concat(f||gl()),Q={tag:"mask",attributes:te(te({},rd),{},{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,D]},oe={tag:"defs",children:[{tag:"clipPath",attributes:{id:J},children:v2(T)},Q]};return t.push(oe,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(J,")"),mask:"url(#".concat(H,")")},rd)}),{children:t,attributes:i}}}},w2={provides(n){let e=!1;Vi.matchMedia&&(e=Vi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=te(te({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:te(te({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:te(te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(f),t.push({tag:"path",attributes:te(te({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},T2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},I2=[mN,o2,a2,l2,u2,g2,y2,_2,E2,w2,T2];ON(I2,{mixoutsTo:hn});hn.noAuto;hn.config;hn.library;hn.dom;const Kd=hn.parse;hn.findIconDefinition;hn.toHtml;const S2=hn.icon;hn.layer;hn.text;hn.counter;var id={exports:{}},sd,cv;function A2(){if(cv)return sd;cv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sd=n,sd}var od,fv;function k2(){if(fv)return od;fv=1;var n=A2();function e(){}function t(){}return t.resetWarningCache=e,od=function(){function i(f,h,p,y,E,T){if(T!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}i.isRequired=i;function o(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},od}var hv;function R2(){return hv||(hv=1,id.exports=k2()()),id.exports}var P2=R2();const xe=gv(P2);function dv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function nr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?dv(Object(t),!0).forEach(function(i){Ro(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):dv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Mc(n){"@babel/helpers - typeof";return Mc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(n)}function Ro(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function C2(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function x2(n,e){if(n==null)return{};var t=C2(n,e),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)i=l[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Qd(n){return N2(n)||b2(n)||O2(n)||D2()}function N2(n){if(Array.isArray(n))return Yd(n)}function b2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O2(n,e){if(n){if(typeof n=="string")return Yd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yd(n,e)}}function Yd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function D2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L2(n){var e,t=n.beat,i=n.fade,o=n.beatFade,l=n.bounce,f=n.shake,h=n.flash,p=n.spin,y=n.spinPulse,E=n.spinReverse,T=n.pulse,I=n.fixedWidth,N=n.inverse,V=n.border,W=n.listItem,D=n.flip,H=n.size,J=n.rotation,Q=n.pull,oe=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":f,"fa-flash":h,"fa-spin":p,"fa-spin-reverse":E,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":I,"fa-inverse":N,"fa-border":V,"fa-li":W,"fa-flip":D===!0,"fa-flip-horizontal":D==="horizontal"||D==="both","fa-flip-vertical":D==="vertical"||D==="both"},Ro(e,"fa-".concat(H),typeof H<"u"&&H!==null),Ro(e,"fa-rotate-".concat(J),typeof J<"u"&&J!==null&&J!==0),Ro(e,"fa-pull-".concat(Q),typeof Q<"u"&&Q!==null),Ro(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(oe).map(function(_e){return oe[_e]?_e:null}).filter(function(_e){return _e})}function V2(n){return n=n-0,n===n}function ST(n){return V2(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var M2=["style"];function F2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function U2(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),o=ST(t.slice(0,i)),l=t.slice(i+1).trim();return o.startsWith("webkit")?e[F2(o)]=l:e[o]=l,e},{})}function AT(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(p){return AT(n,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,y){var E=e.attributes[y];switch(y){case"class":p.attrs.className=E,delete e.attributes.class;break;case"style":p.attrs.style=U2(E);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=E:p.attrs[ST(y)]=E}return p},{attrs:{}}),l=t.style,f=l===void 0?{}:l,h=x2(t,M2);return o.attrs.style=nr(nr({},o.attrs.style),f),n.apply(void 0,[e.tag,nr(nr({},o.attrs),h)].concat(Qd(i)))}var kT=!1;try{kT=!0}catch{}function j2(){if(!kT&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function pv(n){if(n&&Mc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Kd.icon)return Kd.icon(n);if(n===null)return null;if(n&&Mc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function ad(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ro({},n,e):{}}var mv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},im=yv.forwardRef(function(n,e){var t=nr(nr({},mv),n),i=t.icon,o=t.mask,l=t.symbol,f=t.className,h=t.title,p=t.titleId,y=t.maskId,E=pv(i),T=ad("classes",[].concat(Qd(L2(t)),Qd((f||"").split(" ")))),I=ad("transform",typeof t.transform=="string"?Kd.transform(t.transform):t.transform),N=ad("mask",pv(o)),V=S2(E,nr(nr(nr(nr({},T),I),N),{},{symbol:l,title:h,titleId:p,maskId:y}));if(!V)return j2("Could not find icon",E),null;var W=V.abstract,D={ref:e};return Object.keys(t).forEach(function(H){mv.hasOwnProperty(H)||(D[H]=t[H])}),z2(W[0],D)});im.displayName="FontAwesomeIcon";im.propTypes={beat:xe.bool,border:xe.bool,beatFade:xe.bool,bounce:xe.bool,className:xe.string,fade:xe.bool,flash:xe.bool,mask:xe.oneOfType([xe.object,xe.array,xe.string]),maskId:xe.string,fixedWidth:xe.bool,inverse:xe.bool,flip:xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xe.oneOfType([xe.object,xe.array,xe.string]),listItem:xe.bool,pull:xe.oneOf(["right","left"]),pulse:xe.bool,rotation:xe.oneOf([0,90,180,270]),shake:xe.bool,size:xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xe.bool,spinPulse:xe.bool,spinReverse:xe.bool,symbol:xe.oneOfType([xe.bool,xe.string]),title:xe.string,titleId:xe.string,transform:xe.oneOfType([xe.string,xe.object]),swapOpacity:xe.bool};var z2=AT.bind(null,yv.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const B2={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]};function $2(){const{user:n}=$n();return B.jsxs("div",{className:"header",children:[B.jsx(Mr,{to:"/",className:"link",children:B.jsx("div",{className:"logo",children:"Multi Cinema"})}),B.jsxs("div",{className:"search",children:[B.jsxs(Mr,{to:"/my-films",className:"link my-watch",children:[B.jsx(im,{icon:B2}),B.jsx("span",{children:"Мои фильмы"})]}),n?B.jsx(Mr,{to:"/profile",className:"link user",children:B.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"user__avatar",title:n.displayName})}):B.jsx(Mr,{to:"/profile",className:"link",children:"Войти"})]})]})}function RT(){const{user:n}=$n();return B.jsx("div",{className:"auth",children:n?B.jsx("button",{className:"profile__btn",onClick:BP,children:"Выйти"}):B.jsx("button",{className:"profile__btn",onClick:zP,children:"Войти через Google"})})}function W2(){var e;const{likedMovies:n}=$n();return B.jsx(B.Fragment,{children:n.length>1&&B.jsx("section",{className:"continue-watch",children:B.jsxs("div",{className:"container",children:[B.jsx("h2",{className:"title-2",children:"Продолжить просмотр"}),B.jsxs("div",{className:"continue-watch__item",children:[B.jsx(Mr,{to:`/movie/${n[n.length-1].id}`,className:"film__link",children:(e=n[n.length-1].poster)!=null&&e.url?B.jsx("img",{src:n[n.length-1].poster.url,alt:n[n.length-1].name,className:"continue-watch__poster"}):B.jsx("div",{className:"continue-watch__poster",children:"Not found"})}),B.jsx("h3",{className:"continue-watch__name film__name",children:n[n.length-1].name})]})]})})})}const PT=async(n,e,t,i,o=1)=>{function l(p){t.actual=p.page,t.all=p.pages}const f={method:"GET",headers:{accept:"application/json","X-API-KEY":"5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER"}},h=await fetch("https://api.kinopoisk.dev/v1.3/movie?"+new URLSearchParams({page:o.toString(),limit:"25",sortField:"votes.imdb",sortType:"-1",name:n}),f).then(p=>p.json());l(h),e(h.docs),i(!0)},H2=async(n,e,t)=>{const i={method:"GET",headers:{accept:"application/json","X-API-KEY":"84S4SNX-Y084WMK-K7FV73W-8G8P6MH"}},o=await fetch(`https://api.kinopoisk.dev/v1.4/movie/${n}`,i).then(l=>l.json());e(o),t(!1)},q2=async(n,e)=>{const t={method:"GET",headers:{accept:"application/json","X-API-KEY":"84S4SNX-Y084WMK-K7FV73W-8G8P6MH"}},[i,o]=await Promise.all([fetch("https://api.kinopoisk.dev/v1.4/movie?"+new URLSearchParams({page:"1",limit:"25",sortField:"votes.await",sortType:"-1","votes.await":"1000-6666666",year:new Date().getFullYear(),status:"completed"}),t),fetch("https://api.kinopoisk.dev/v1.4/movie?"+new URLSearchParams({page:"1",limit:"25",sortField:"votes.imdb",sortType:"-1",isSeries:"true",year:`${new Date().getFullYear()-5}-${new Date().getFullYear()}`}),t)]),l=await i.json(),f=await o.json();n([l.docs,f.docs]),e(!1)};function Fc({film:n}){var l;const{likedMovies:e,toggleLike:t,isLoading:i,setIsLoading:o}=$n();return B.jsxs("div",{className:"film","data-id":n.id,children:[(l=n.poster)!=null&&l.url?B.jsx(Mr,{to:`/movie/${n.id}`,className:"film__link",children:B.jsx("img",{className:"film__img",src:n.poster.url,alt:n.name})}):B.jsx(Mr,{to:`/movie/${n.id}`,className:"link",children:B.jsx("div",{className:"film__img",children:"Not found"})}),B.jsx("h3",{className:"film__name",children:n.name}),B.jsx("button",{onClick:()=>t(n),className:"film__like",children:e.some(f=>f.id===n.id)?"❤️":"🤍"})]})}function G2({pages:n}){const{setIsLoading:e,filmName:t,data:i,setData:o}=$n(),l=[1],f=p=>{PT(t,o,n,e,p),window.scrollTo(0,0)};return(p=>{if(p<4)for(let y=2,E=0;y<n.all&&E<3;y++,E++)l.push(y);else{p-1<2&&l.push("..."),l.push("...");for(let y=p-1,E=0;y<n.all&&E<3;y++,E++)l.push(y)}n.all-p>2&&l.push("..."),n.all!==1&&l.push(n.all)})(n.actual),B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"film-list",children:i.map((p,y)=>p.poster&&p.poster.url&&B.jsx(Fc,{film:p},y))}),B.jsx("div",{className:"pagination",children:B.jsx("ul",{className:"pagination__list",children:l.map((p,y)=>p==="..."?B.jsx("li",{className:"pagination__item",children:"..."},y*2):p!==n.actual?B.jsx("li",{className:"pagination__item",children:B.jsx("button",{className:"pagination__btn",onClick:()=>f(p),children:p})},p):B.jsx("li",{className:"pagination__item",children:B.jsx("button",{className:"pagination__btn active",children:p})},p))})})]})}function CT({pages:n}){const{setIsLoading:e,filmName:t,setFilmName:i,setData:o}=$n(),l=Fw(),f=h=>{h.preventDefault(),PT(t,o,n,e),l("/search-result")};return B.jsx("div",{className:"container",children:B.jsxs("form",{className:"form",onSubmit:f,children:[B.jsx("input",{className:"form__input",type:"text",value:t,placeholder:"Поиск",onChange:h=>{console.log(h.target.value),i(h.target.value)}}),B.jsx("button",{className:"form__btn",children:"Искать"})]})})}function K2({pages:n}){const{data:e}=$n();return B.jsx("section",{className:"search-res",children:B.jsx("div",{className:"container",children:B.jsxs("div",{className:"search-res__items",children:[B.jsx(CT,{pages:n}),e.length>0&&B.jsx(G2,{pages:n})]})})})}function Q2({kpId:n}){const e=q.useRef(null);return q.useEffect(()=>{const t=document.createElement("script");return t.src="https://kinobox.tv/kinobox.min.js",t.async=!0,document.body.appendChild(t),t.onload=()=>{e.current&&window.kbox(e.current,{search:{kinopoisk:n},menu:{enabled:!1}})},()=>{try{document.body.removeChild(t)}catch{}}},[n]),B.jsx("div",{ref:e,className:"kinobox_player movie__player"})}function Y2(){var h,p;const{data:n,film:e,setFilm:t,isLoading:i,setIsLoading:o}=$n();console.log(e);const{id:l}=PC();function f(y,E){y.map(T=>{T instanceof Array?f(T,E):T.id==E&&t(T)})}return q.useEffect(()=>{n.length>1?f(n,l):H2(l,t,o)},[]),q.useEffect(()=>{o(!1)},[e]),B.jsx(B.Fragment,{children:!i&&B.jsxs("div",{className:"movie","data-id":e.id,children:[e.backdrop&&e.backdrop.url&&e.logo&&e.logo.url?B.jsx(B.Fragment,{children:B.jsxs("div",{className:"movie__backdrop",children:[B.jsx("img",{className:"movie__backdrop--img",src:e.backdrop.url,alt:e.name}),B.jsx("img",{className:"movie__backdrop--logo",src:e.logo.url,alt:e.name})]})}):(h=e.backdrop)!=null&&h.url?B.jsx(B.Fragment,{children:B.jsxs("div",{className:"movie__backdrop",children:[B.jsx("img",{className:"movie__backdrop--img",src:e.backdrop.url,alt:e.name}),B.jsx("h3",{className:"movie__backdrop--name",children:e.name})]})}):(p=e.logo)!=null&&p.url?B.jsx(B.Fragment,{children:B.jsx("div",{className:"movie__backdrop",children:B.jsx("img",{className:"movie__backdrop--logo",src:e.logo.url,alt:e.name})})}):B.jsx(B.Fragment,{children:B.jsx("div",{className:"movie__backdrop",children:B.jsx("h3",{className:"movie__backdrop--name",children:e.name})})}),B.jsxs("div",{className:"movie__container",children:[B.jsxs("div",{className:"movie__info",children:[e.poster&&e.poster.url&&B.jsx("img",{className:"movie__img",src:e.poster.url,alt:e.name}),B.jsxs("div",{className:"movie__info--wrapper",children:[e.year&&B.jsxs("div",{className:"movie__year",children:["Год выхода: ",e.year," г."]}),e.genres.length>0&&B.jsxs("div",{className:"movie__genres",children:["Жанры: ",e.genres.map(y=>`${y.name} `)]}),e.movieLength&&B.jsxs("div",{className:"movie__movieLength",children:["Продолжительность: ",e.movieLength," мин."]}),e.rating.imdb&&B.jsxs("div",{className:"movie__rating",children:["Рейтинг: ",e.rating.imdb]}),e.ageRating&&B.jsxs("div",{className:"movie__ageRating",children:["Возрастной рейтинг: ",e.ageRating,"+"]}),e.description&&B.jsx("div",{className:"movie__description",children:e.description})]})]}),B.jsx(Q2,{kpId:e.id})]})]})})}function X2(){const{user:n,likedMovies:e,toggleLike:t,setData:i}=$n();return console.log(e),i(e),B.jsx("section",{className:"my-films",children:B.jsx("div",{className:"container",children:n?B.jsxs(B.Fragment,{children:[B.jsx("h2",{className:"title-2",children:"Вы смотрите"}),B.jsx("div",{className:"my-films__items",children:e.map((o,l)=>B.jsx(Fc,{film:o,toggleLike:t},l))})]}):B.jsxs(B.Fragment,{children:[B.jsx("div",{children:"Вы не авторизованы"}),B.jsx(RT,{user:n})]})})})}function J2(){const{user:n}=$n();return B.jsx("div",{className:"container",children:B.jsxs("div",{className:"profile",children:[n?B.jsxs(B.Fragment,{children:[B.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"profile__avatar"}),B.jsx("div",{className:"profile__name",children:n.displayName}),B.jsx("div",{className:"profile__email",children:n.email})]}):B.jsx("div",{children:"Вы не авторизованы"}),B.jsx(RT,{})]})})}function Z2(){const{data:n,setData:e,isLoading:t,setIsLoading:i}=$n();return q.useEffect(()=>{q2(e,i)},[]),B.jsx("div",{className:"container",children:!t&&B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"collections-new",children:[B.jsx("h2",{className:"title-2",children:"Новинки"}),B.jsx("div",{className:"collections-new__wrapper",children:n[0].map((o,l)=>o.poster&&o.poster.url&&B.jsx(Fc,{film:o},l))})]}),B.jsxs("div",{className:"collections-serials",children:[B.jsx("h2",{className:"title-2",children:"Популярные сериалы"}),B.jsx("div",{className:"collections-serials__wrapper",children:n[1].map((o,l)=>o.poster&&o.poster.url&&B.jsx(Fc,{film:o},l))})]})]})})}function eb(){const n=Ix();return B.jsx(dx,{basename:"/milti-cinema-react/",children:B.jsxs("div",{className:"App",children:[B.jsx($2,{}),B.jsxs($C,{children:[B.jsx(Ao,{path:"/",element:B.jsxs("main",{className:"main",children:[B.jsx(W2,{}),B.jsx(CT,{pages:n}),B.jsx(Z2,{})]})}),B.jsx(Ao,{path:"/profile",element:B.jsx(J2,{})}),B.jsx(Ao,{path:"/search-result",element:B.jsx("main",{className:"main",children:B.jsx(K2,{pages:n})})}),B.jsx(Ao,{path:"/movie/:id",element:B.jsx(B.Fragment,{children:B.jsx(Y2,{})})}),B.jsx(Ao,{path:"/my-films",element:B.jsx(B.Fragment,{children:B.jsx(X2,{})})})]})]})})}z0.createRoot(document.getElementById("root")).render(B.jsx(JP,{children:B.jsx(eb,{})}));
