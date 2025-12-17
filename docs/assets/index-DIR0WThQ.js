(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function y_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lf={exports:{}},Ka={},Mf={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function VT(){if(fy)return Ce;fy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,W={};function M(L,G,pe){this.props=L,this.context=G,this.refs=W,this.updater=pe||N}M.prototype.isReactComponent={},M.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function Q(){}Q.prototype=M.prototype;function J(L,G,pe){this.props=L,this.context=G,this.refs=W,this.updater=pe||N}var K=J.prototype=new Q;K.constructor=J,z(K,M.prototype),K.isPureReactComponent=!0;var le=Array.isArray,Ee=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(L,G,pe){var ke,Re={},Le=null,je=null;if(G!=null)for(ke in G.ref!==void 0&&(je=G.ref),G.key!==void 0&&(Le=""+G.key),G)Ee.call(G,ke)&&!x.hasOwnProperty(ke)&&(Re[ke]=G[ke]);var ze=arguments.length-2;if(ze===1)Re.children=pe;else if(1<ze){for(var qe=Array(ze),wt=0;wt<ze;wt++)qe[wt]=arguments[wt+2];Re.children=qe}if(L&&L.defaultProps)for(ke in ze=L.defaultProps,ze)Re[ke]===void 0&&(Re[ke]=ze[ke]);return{$$typeof:n,type:L,key:Le,ref:je,props:Re,_owner:Te.current}}function P(L,G){return{$$typeof:n,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return G[pe]})}var V=/\/+/g;function k(L,G){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):G.toString(36)}function ot(L,G,pe,ke,Re){var Le=typeof L;(Le==="undefined"||Le==="boolean")&&(L=null);var je=!1;if(L===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(L.$$typeof){case n:case e:je=!0}}if(je)return je=L,Re=Re(je),L=ke===""?"."+k(je,0):ke,le(Re)?(pe="",L!=null&&(pe=L.replace(V,"$&/")+"/"),ot(Re,G,pe,"",function(wt){return wt})):Re!=null&&(C(Re)&&(Re=P(Re,pe+(!Re.key||je&&je.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+L)),G.push(Re)),1;if(je=0,ke=ke===""?".":ke+":",le(L))for(var ze=0;ze<L.length;ze++){Le=L[ze];var qe=ke+k(Le,ze);je+=ot(Le,G,pe,qe,Re)}else if(qe=I(L),typeof qe=="function")for(L=qe.call(L),ze=0;!(Le=L.next()).done;)Le=Le.value,qe=ke+k(Le,ze++),je+=ot(Le,G,pe,qe,Re);else if(Le==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return je}function Dt(L,G,pe){if(L==null)return L;var ke=[],Re=0;return ot(L,ke,"","",function(Le){return G.call(pe,Le,Re++)}),ke}function Lt(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var He={current:null},ie={transition:null},me={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Te};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(L,G,pe){Dt(L,function(){G.apply(this,arguments)},pe)},count:function(L){var G=0;return Dt(L,function(){G++}),G},toArray:function(L){return Dt(L,function(G){return G})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ce.Component=M,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=J,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(L,G,pe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var ke=z({},L.props),Re=L.key,Le=L.ref,je=L._owner;if(G!=null){if(G.ref!==void 0&&(Le=G.ref,je=Te.current),G.key!==void 0&&(Re=""+G.key),L.type&&L.type.defaultProps)var ze=L.type.defaultProps;for(qe in G)Ee.call(G,qe)&&!x.hasOwnProperty(qe)&&(ke[qe]=G[qe]===void 0&&ze!==void 0?ze[qe]:G[qe])}var qe=arguments.length-2;if(qe===1)ke.children=pe;else if(1<qe){ze=Array(qe);for(var wt=0;wt<qe;wt++)ze[wt]=arguments[wt+2];ke.children=ze}return{$$typeof:n,type:L.type,key:Re,ref:Le,props:ke,_owner:je}},Ce.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Ce.createElement=S,Ce.createFactory=function(L){var G=S.bind(null,L);return G.type=L,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(L){return{$$typeof:f,render:L}},Ce.isValidElement=C,Ce.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Lt}},Ce.memo=function(L,G){return{$$typeof:y,type:L,compare:G===void 0?null:G}},Ce.startTransition=function(L){var G=ie.transition;ie.transition={};try{L()}finally{ie.transition=G}},Ce.unstable_act=oe,Ce.useCallback=function(L,G){return He.current.useCallback(L,G)},Ce.useContext=function(L){return He.current.useContext(L)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(L){return He.current.useDeferredValue(L)},Ce.useEffect=function(L,G){return He.current.useEffect(L,G)},Ce.useId=function(){return He.current.useId()},Ce.useImperativeHandle=function(L,G,pe){return He.current.useImperativeHandle(L,G,pe)},Ce.useInsertionEffect=function(L,G){return He.current.useInsertionEffect(L,G)},Ce.useLayoutEffect=function(L,G){return He.current.useLayoutEffect(L,G)},Ce.useMemo=function(L,G){return He.current.useMemo(L,G)},Ce.useReducer=function(L,G,pe){return He.current.useReducer(L,G,pe)},Ce.useRef=function(L){return He.current.useRef(L)},Ce.useState=function(L){return He.current.useState(L)},Ce.useSyncExternalStore=function(L,G,pe){return He.current.useSyncExternalStore(L,G,pe)},Ce.useTransition=function(){return He.current.useTransition()},Ce.version="18.3.1",Ce}var dy;function Xd(){return dy||(dy=1,Mf.exports=VT()),Mf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function FT(){if(py)return Ka;py=1;var n=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,y){var _,T={},I=null,N=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(N=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(T[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)T[_]===void 0&&(T[_]=p[_]);return{$$typeof:e,type:f,key:I,ref:N,props:T,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=c,Ka.jsxs=c,Ka}var my;function UT(){return my||(my=1,Lf.exports=FT()),Lf.exports}var D=UT(),Ku={},Vf={exports:{}},nn={},Ff={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function jT(){return gy||(gy=1,(function(n){function e(ie,me){var oe=ie.length;ie.push(me);e:for(;0<oe;){var L=oe-1>>>1,G=ie[L];if(0<o(G,me))ie[L]=me,ie[oe]=G,oe=L;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var me=ie[0],oe=ie.pop();if(oe!==me){ie[0]=oe;e:for(var L=0,G=ie.length,pe=G>>>1;L<pe;){var ke=2*(L+1)-1,Re=ie[ke],Le=ke+1,je=ie[Le];if(0>o(Re,oe))Le<G&&0>o(je,Re)?(ie[L]=je,ie[Le]=oe,L=Le):(ie[L]=Re,ie[ke]=oe,L=ke);else if(Le<G&&0>o(je,oe))ie[L]=je,ie[Le]=oe,L=Le;else break e}}return me}function o(ie,me){var oe=ie.sortIndex-me.sortIndex;return oe!==0?oe:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],y=[],_=1,T=null,I=3,N=!1,z=!1,W=!1,M=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ie){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ie)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function le(ie){if(W=!1,K(ie),!z)if(t(p)!==null)z=!0,Lt(Ee);else{var me=t(y);me!==null&&He(le,me.startTime-ie)}}function Ee(ie,me){z=!1,W&&(W=!1,Q(S),S=-1),N=!0;var oe=I;try{for(K(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ie&&!O());){var L=T.callback;if(typeof L=="function"){T.callback=null,I=T.priorityLevel;var G=L(T.expirationTime<=me);me=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),K(me)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var ke=t(y);ke!==null&&He(le,ke.startTime-me),pe=!1}return pe}finally{T=null,I=oe,N=!1}}var Te=!1,x=null,S=-1,P=5,C=-1;function O(){return!(n.unstable_now()-C<P)}function V(){if(x!==null){var ie=n.unstable_now();C=ie;var me=!0;try{me=x(!0,ie)}finally{me?k():(Te=!1,x=null)}}else Te=!1}var k;if(typeof J=="function")k=function(){J(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Dt=ot.port2;ot.port1.onmessage=V,k=function(){Dt.postMessage(null)}}else k=function(){M(V,0)};function Lt(ie){x=ie,Te||(Te=!0,k())}function He(ie,me){S=M(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){z||N||(z=!0,Lt(Ee))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var oe=I;I=me;try{return ie()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=I;I=ie;try{return me()}finally{I=oe}},n.unstable_scheduleCallback=function(ie,me,oe){var L=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?L+oe:L):oe=L,ie){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ie={id:_++,callback:me,priorityLevel:ie,startTime:oe,expirationTime:G,sortIndex:-1},oe>L?(ie.sortIndex=oe,e(y,ie),t(p)===null&&ie===t(y)&&(W?(Q(S),S=-1):W=!0,He(le,oe-L))):(ie.sortIndex=G,e(p,ie),z||N||(z=!0,Lt(Ee))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var me=I;return function(){var oe=I;I=me;try{return ie.apply(this,arguments)}finally{I=oe}}}})(Uf)),Uf}var yy;function zT(){return yy||(yy=1,Ff.exports=jT()),Ff.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function BT(){if(vy)return nn;vy=1;var n=Xd(),e=zT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function I(r){return p.call(T,r)?!0:p.call(_,r)?!1:y.test(r)?T[r]=!0:(_[r]=!0,!1)}function N(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function z(r,s,a,h){if(s===null||typeof s>"u"||N(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function W(r,s,a,h,d,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new W(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new W(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new W(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new W(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new W(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new W(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new W(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new W(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new W(r,5,!1,r.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Q,J);M[s]=new W(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Q,J);M[s]=new W(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Q,J);M[s]=new W(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new W(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new W(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,a,h){var d=M.hasOwnProperty(s)?M[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,a,d,h)&&(a=null),h||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,L;function G(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var pe=!1;function ke(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var h=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){h=B}r.call(s.prototype)}else{try{throw Error()}catch(B){h=B}r()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),g=h.stack.split(`
`),E=d.length-1,A=g.length-1;1<=E&&0<=A&&d[E]!==g[A];)A--;for(;1<=E&&0<=A;E--,A--)if(d[E]!==g[A]){if(E!==1||A!==1)do if(E--,A--,0>A||d[E]!==g[A]){var R=`
`+d[E].replace(" at new "," at ");return r.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",r.displayName)),R}while(1<=E&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Re(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=ke(r.type,!1),r;case 11:return r=ke(r.type.render,!1),r;case 1:return r=ke(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Te:return"Portal";case P:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case ot:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case C:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function mr(r){r._valueTracker||(r._valueTracker=wt(r))}function Cs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=qe(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Yr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ji(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function xs(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=ze(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ea(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function ta(r,s){ea(r,s);var a=ze(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ns(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ns(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ns(r,s,a){(s!=="number"||Yr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var gr=Array.isArray;function yr(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+ze(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function na(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ze(a)}}function Os(r,s){var a=ze(s.value),h=ze(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ra(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var vr,ia=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=vr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Xr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bi=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(r){Bi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),zi[s]=zi[r]})});function sa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||zi.hasOwnProperty(r)&&zi[r]?(""+s).trim():s+"px"}function oa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=sa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var aa=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(r,s){if(s){if(aa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ua(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Ds(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ls=null,pn=null,Wn=null;function Ms(r){if(r=Oa(r)){if(typeof Ls!="function")throw Error(t(280));var s=r.stateNode;s&&(s=uu(s),Ls(r.stateNode,r.type,s))}}function qn(r){pn?Wn?Wn.push(r):Wn=[r]:pn=r}function ca(){if(pn){var r=pn,s=Wn;if(Wn=pn=null,Ms(r),s)for(r=0;r<s.length;r++)Ms(s[r])}}function Hi(r,s){return r(s)}function ha(){}var _r=!1;function fa(r,s,a){if(_r)return r(s,a);_r=!0;try{return Hi(r,s,a)}finally{_r=!1,(pn!==null||Wn!==null)&&(ha(),ca())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var h=uu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Vs=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Vs=!1}function Wi(r,s,a,h,d,g,E,A,R){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(X){this.onError(X)}}var qi=!1,Fs=null,Cn=!1,da=null,lh={onError:function(r){qi=!0,Fs=r}};function Us(r,s,a,h,d,g,E,A,R){qi=!1,Fs=null,Wi.apply(lh,arguments)}function Dl(r,s,a,h,d,g,E,A,R){if(Us.apply(this,arguments),qi){if(qi){var B=Fs;qi=!1,Fs=null}else throw Error(t(198));Cn||(Cn=!0,da=B)}}function xn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Gi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(r){if(xn(r)!==r)throw Error(t(188))}function Ll(r){var s=r.alternate;if(!s){if(s=xn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Nn(d),r;if(g===h)return Nn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=g;else{for(var E=!1,A=d.child;A;){if(A===a){E=!0,a=d,h=g;break}if(A===h){E=!0,h=d,a=g;break}A=A.sibling}if(!E){for(A=g.child;A;){if(A===a){E=!0,a=g,h=d;break}if(A===h){E=!0,h=g,a=d;break}A=A.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function pa(r){return r=Ll(r),r!==null?js(r):null}function js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=js(r);if(s!==null)return s;r=r.sibling}return null}var zs=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,Ml=e.unstable_shouldYield,uh=e.unstable_requestPaint,Ge=e.unstable_now,Vl=e.unstable_getCurrentPriorityLevel,Ki=e.unstable_ImmediatePriority,Jr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Fl=e.unstable_IdlePriority,Qi=null,sn=null;function Ul(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Qi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:zl,ya=Math.log,jl=Math.LN2;function zl(r){return r>>>=0,r===0?32:31-(ya(r)/jl|0)|0}var Bs=64,$s=4194304;function Zr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Yi(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var A=E&~d;A!==0?h=Zr(A):(g&=E,g!==0&&(h=Zr(g)))}else E=a&~d,E!==0?h=Zr(E):g!==0&&(h=Zr(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Wt(s),d=1<<a,h|=r[a],s&=~d;return h}function ch(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Wt(g),A=1<<E,R=d[E];R===-1?((A&a)===0||(A&h)!==0)&&(d[E]=ch(A,s)):R<=s&&(r.expiredLanes|=A),g&=~A}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Xi(){var r=Bs;return Bs<<=1,(Bs&4194240)===0&&(Bs=64),r}function ei(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ti(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function We(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Wt(a),g=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~g}}function ni(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Wt(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var Oe=0;function ri(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bl,Hs,$l,Hl,Wl,va=!1,Gn=[],kt=null,bn=null,On=null,ii=new Map,gn=new Map,Kn=[],hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":ii.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Qt(r,s,a,h,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Oa(s),s!==null&&Hs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function fh(r,s,a,h,d){switch(s){case"focusin":return kt=Qt(kt,r,s,a,h,d),!0;case"dragenter":return bn=Qt(bn,r,s,a,h,d),!0;case"mouseover":return On=Qt(On,r,s,a,h,d),!0;case"pointerover":var g=d.pointerId;return ii.set(g,Qt(ii.get(g)||null,r,s,a,h,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Qt(gn.get(g)||null,r,s,a,h,d)),!0}return!1}function Gl(r){var s=ns(r.target);if(s!==null){var a=xn(s);if(a!==null){if(s=a.tag,s===13){if(s=Gi(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){$l(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function wr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ws(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);$i=h,a.target.dispatchEvent(h),$i=null}else return s=Oa(a),s!==null&&Hs(s),r.blockedOn=a,!1;s.shift()}return!0}function Ji(r,s,a){wr(r)&&a.delete(s)}function Kl(){va=!1,kt!==null&&wr(kt)&&(kt=null),bn!==null&&wr(bn)&&(bn=null),On!==null&&wr(On)&&(On=null),ii.forEach(Ji),gn.forEach(Ji)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kl)))}function Ln(r){function s(d){return Dn(d,r)}if(0<Gn.length){Dn(Gn[0],r);for(var a=1;a<Gn.length;a++){var h=Gn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(kt!==null&&Dn(kt,r),bn!==null&&Dn(bn,r),On!==null&&Dn(On,r),ii.forEach(s),gn.forEach(s),a=0;a<Kn.length;a++)h=Kn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<Kn.length&&(a=Kn[0],a.blockedOn===null);)Gl(a),a.blockedOn===null&&Kn.shift()}var Tr=le.ReactCurrentBatchConfig,si=!0;function Je(r,s,a,h){var d=Oe,g=Tr.transition;Tr.transition=null;try{Oe=1,_a(r,s,a,h)}finally{Oe=d,Tr.transition=g}}function dh(r,s,a,h){var d=Oe,g=Tr.transition;Tr.transition=null;try{Oe=4,_a(r,s,a,h)}finally{Oe=d,Tr.transition=g}}function _a(r,s,a,h){if(si){var d=Ws(r,s,a,h);if(d===null)Sh(r,s,h,Zi,a),ql(r,h);else if(fh(d,r,s,a,h))h.stopPropagation();else if(ql(r,h),s&4&&-1<hh.indexOf(r)){for(;d!==null;){var g=Oa(d);if(g!==null&&Bl(g),g=Ws(r,s,a,h),g===null&&Sh(r,s,h,Zi,a),g===d)break;d=g}d!==null&&h.stopPropagation()}else Sh(r,s,h,null,a)}}var Zi=null;function Ws(r,s,a,h){if(Zi=null,r=Ds(h),r=ns(r),r!==null)if(s=xn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Gi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Zi=r,null}function Ea(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vl()){case Ki:return 1;case Jr:return 4;case mn:case ga:return 16;case Fl:return 536870912;default:return 16}default:return 16}}var an=null,qs=null,Yt=null;function wa(){if(Yt)return Yt;var r,s=qs,a=s.length,h,d="value"in an?an.value:an.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var E=a-r;for(h=1;h<=E&&s[a-h]===d[g-h];h++);return Yt=d.slice(r,1<h?1-h:void 0)}function Gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function Ta(){return!1}function Rt(r){function s(a,h,d,g,E){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qn:Ta,this.isPropagationStopped=Ta,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),s}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Rt(Mn),Yn=oe({},Mn,{view:0,detail:0}),ph=Rt(Yn),Qs,Ir,oi,es=oe({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==oi&&(oi&&r.type==="mousemove"?(Qs=r.screenX-oi.screenX,Ir=r.screenY-oi.screenY):Ir=Qs=0,oi=r),Qs)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),Ys=Rt(es),Ia=oe({},es,{dataTransfer:0}),Ql=Rt(Ia),Xs=oe({},Yn,{relatedTarget:0}),Js=Rt(Xs),Yl=oe({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Rt(Yl),Xl=oe({},Mn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Jl=Rt(Xl),Zl=oe({},Mn,{data:0}),Sa=Rt(Zl),Zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=eu[r])?!!s[r]:!1}function Xn(){return tu}var u=oe({},Yn,{key:function(r){if(r.key){var s=Zs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Rt(u),v=oe({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Rt(v),F=oe({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),H=Rt(F),re=oe({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Rt(re),mt=oe({},es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Rt(mt),Tt=[9,13,27,32],ct=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var ln=f&&"TextEvent"in window&&!yn,ts=f&&(!ct||yn&&8<yn&&11>=yn),eo=" ",om=!1;function am(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var to=!1;function Dw(r,s){switch(r){case"compositionend":return lm(s);case"keypress":return s.which!==32?null:(om=!0,eo);case"textInput":return r=s.data,r===eo&&om?null:r;default:return null}}function Lw(r,s){if(to)return r==="compositionend"||!ct&&am(r,s)?(r=wa(),Yt=qs=an=null,to=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ts&&s.locale!=="ko"?null:s.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Mw[r.type]:s==="textarea"}function cm(r,s,a,h){qn(h),s=ou(s,"onChange"),0<s.length&&(a=new Ks("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Aa=null,Pa=null;function Vw(r){Rm(r,0)}function nu(r){var s=oo(r);if(Cs(s))return r}function Fw(r,s){if(r==="change")return s}var hm=!1;if(f){var mh;if(f){var gh="oninput"in document;if(!gh){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),gh=typeof fm.oninput=="function"}mh=gh}else mh=!1;hm=mh&&(!document.documentMode||9<document.documentMode)}function dm(){Aa&&(Aa.detachEvent("onpropertychange",pm),Pa=Aa=null)}function pm(r){if(r.propertyName==="value"&&nu(Pa)){var s=[];cm(s,Pa,r,Ds(r)),fa(Vw,s)}}function Uw(r,s,a){r==="focusin"?(dm(),Aa=s,Pa=a,Aa.attachEvent("onpropertychange",pm)):r==="focusout"&&dm()}function jw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(Pa)}function zw(r,s){if(r==="click")return nu(s)}function Bw(r,s){if(r==="input"||r==="change")return nu(s)}function $w(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vn=typeof Object.is=="function"?Object.is:$w;function ka(r,s){if(Vn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!p.call(s,d)||!Vn(r[d],s[d]))return!1}return!0}function mm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function gm(r,s){var a=mm(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mm(a)}}function ym(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?ym(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function vm(){for(var r=window,s=Yr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Yr(r.document)}return s}function yh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Hw(r){var s=vm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&ym(a.ownerDocument.documentElement,a)){if(h!==null&&yh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(h.start,d);h=h.end===void 0?g:Math.min(h.end,d),!r.extend&&g>h&&(d=h,h=g,g=d),d=gm(a,g);var E=gm(a,h);d&&E&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Ww=f&&"documentMode"in document&&11>=document.documentMode,no=null,vh=null,Ra=null,_h=!1;function _m(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_h||no==null||no!==Yr(h)||(h=no,"selectionStart"in h&&yh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ra&&ka(Ra,h)||(Ra=h,h=ou(vh,"onSelect"),0<h.length&&(s=new Ks("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=no)))}function ru(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var ro={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Eh={},Em={};f&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function iu(r){if(Eh[r])return Eh[r];if(!ro[r])return r;var s=ro[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Em)return Eh[r]=s[a];return r}var wm=iu("animationend"),Tm=iu("animationiteration"),Im=iu("animationstart"),Sm=iu("transitionend"),Am=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(r,s){Am.set(r,s),l(s,[r])}for(var wh=0;wh<Pm.length;wh++){var Th=Pm[wh],qw=Th.toLowerCase(),Gw=Th[0].toUpperCase()+Th.slice(1);ai(qw,"on"+Gw)}ai(wm,"onAnimationEnd"),ai(Tm,"onAnimationIteration"),ai(Im,"onAnimationStart"),ai("dblclick","onDoubleClick"),ai("focusin","onFocus"),ai("focusout","onBlur"),ai(Sm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function km(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Dl(h,s,void 0,r),r.currentTarget=null}function Rm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var E=h.length-1;0<=E;E--){var A=h[E],R=A.instance,B=A.currentTarget;if(A=A.listener,R!==g&&d.isPropagationStopped())break e;km(d,A,B),g=R}else for(E=0;E<h.length;E++){if(A=h[E],R=A.instance,B=A.currentTarget,A=A.listener,R!==g&&d.isPropagationStopped())break e;km(d,A,B),g=R}}}if(Cn)throw r=da,Cn=!1,da=null,r}function Qe(r,s){var a=s[xh];a===void 0&&(a=s[xh]=new Set);var h=r+"__bubble";a.has(h)||(Cm(s,r,2,!1),a.add(h))}function Ih(r,s,a){var h=0;s&&(h|=4),Cm(a,r,h,s)}var su="_reactListening"+Math.random().toString(36).slice(2);function xa(r){if(!r[su]){r[su]=!0,i.forEach(function(a){a!=="selectionchange"&&(Kw.has(a)||Ih(a,!1,r),Ih(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[su]||(s[su]=!0,Ih("selectionchange",!1,s))}}function Cm(r,s,a,h){switch(Ea(s)){case 1:var d=Je;break;case 4:d=dh;break;default:d=_a}a=d.bind(null,s,a,r),d=void 0,!Vs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Sh(r,s,a,h,d){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var A=h.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(E===4)for(E=h.return;E!==null;){var R=E.tag;if((R===3||R===4)&&(R=E.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;E=E.return}for(;A!==null;){if(E=ns(A),E===null)return;if(R=E.tag,R===5||R===6){h=g=E;continue e}A=A.parentNode}}h=h.return}fa(function(){var B=g,X=Ds(a),Z=[];e:{var Y=Am.get(r);if(Y!==void 0){var se=Ks,ce=r;switch(r){case"keypress":if(Gs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=Js;break;case"focusout":ce="blur",se=Js;break;case"beforeblur":case"afterblur":se=Js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=H;break;case wm:case Tm:case Im:se=Sr;break;case Sm:se=$e;break;case"scroll":se=ph;break;case"wheel":se=Me;break;case"copy":case"cut":case"paste":se=Jl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var he=(s&4)!==0,lt=!he&&r==="scroll",U=he?Y!==null?Y+"Capture":null:Y;he=[];for(var b=B,j;b!==null;){j=b;var ne=j.stateNode;if(j.tag===5&&ne!==null&&(j=ne,U!==null&&(ne=at(b,U),ne!=null&&he.push(Na(b,ne,j)))),lt)break;b=b.return}0<he.length&&(Y=new se(Y,ce,null,a,X),Z.push({event:Y,listeners:he}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&a!==$i&&(ce=a.relatedTarget||a.fromElement)&&(ns(ce)||ce[Ar]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=B,ce=ce?ns(ce):null,ce!==null&&(lt=xn(ce),ce!==lt||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=B),se!==ce)){if(he=Ys,ne="onMouseLeave",U="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,ne="onPointerLeave",U="onPointerEnter",b="pointer"),lt=se==null?Y:oo(se),j=ce==null?Y:oo(ce),Y=new he(ne,b+"leave",se,a,X),Y.target=lt,Y.relatedTarget=j,ne=null,ns(X)===B&&(he=new he(U,b+"enter",ce,a,X),he.target=j,he.relatedTarget=lt,ne=he),lt=ne,se&&ce)t:{for(he=se,U=ce,b=0,j=he;j;j=io(j))b++;for(j=0,ne=U;ne;ne=io(ne))j++;for(;0<b-j;)he=io(he),b--;for(;0<j-b;)U=io(U),j--;for(;b--;){if(he===U||U!==null&&he===U.alternate)break t;he=io(he),U=io(U)}he=null}else he=null;se!==null&&xm(Z,Y,se,he,!1),ce!==null&&lt!==null&&xm(Z,lt,ce,he,!0)}}e:{if(Y=B?oo(B):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var fe=Fw;else if(um(Y))if(hm)fe=Bw;else{fe=jw;var ge=Uw}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(fe=zw);if(fe&&(fe=fe(r,B))){cm(Z,fe,a,X);break e}ge&&ge(r,Y,B),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Ns(Y,"number",Y.value)}switch(ge=B?oo(B):window,r){case"focusin":(um(ge)||ge.contentEditable==="true")&&(no=ge,vh=B,Ra=null);break;case"focusout":Ra=vh=no=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,_m(Z,a,X);break;case"selectionchange":if(Ww)break;case"keydown":case"keyup":_m(Z,a,X)}var ye;if(ct)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else to?am(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ts&&a.locale!=="ko"&&(to||we!=="onCompositionStart"?we==="onCompositionEnd"&&to&&(ye=wa()):(an=X,qs="value"in an?an.value:an.textContent,to=!0)),ge=ou(B,we),0<ge.length&&(we=new Sa(we,r,null,a,X),Z.push({event:we,listeners:ge}),ye?we.data=ye:(ye=lm(a),ye!==null&&(we.data=ye)))),(ye=ln?Dw(r,a):Lw(r,a))&&(B=ou(B,"onBeforeInput"),0<B.length&&(X=new Sa("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:B}),X.data=ye))}Rm(Z,s)})}function Na(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ou(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=at(r,a),g!=null&&h.unshift(Na(r,g,d)),g=at(r,s),g!=null&&h.push(Na(r,g,d))),r=r.return}return h}function io(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function xm(r,s,a,h,d){for(var g=s._reactName,E=[];a!==null&&a!==h;){var A=a,R=A.alternate,B=A.stateNode;if(R!==null&&R===h)break;A.tag===5&&B!==null&&(A=B,d?(R=at(a,g),R!=null&&E.unshift(Na(a,R,A))):d||(R=at(a,g),R!=null&&E.push(Na(a,R,A)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var Qw=/\r\n?/g,Yw=/\u0000|\uFFFD/g;function Nm(r){return(typeof r=="string"?r:""+r).replace(Qw,`
`).replace(Yw,"")}function au(r,s,a){if(s=Nm(s),Nm(r)!==s&&a)throw Error(t(425))}function lu(){}var Ah=null,Ph=null;function kh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,Xw=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(r){return bm.resolve(null).then(r).catch(Zw)}:Rh;function Zw(r){setTimeout(function(){throw r})}function Ch(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),Ln(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);Ln(s)}function li(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Om(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var so=Math.random().toString(36).slice(2),Jn="__reactFiber$"+so,ba="__reactProps$"+so,Ar="__reactContainer$"+so,xh="__reactEvents$"+so,eT="__reactListeners$"+so,tT="__reactHandles$"+so;function ns(r){var s=r[Jn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Om(r);r!==null;){if(a=r[Jn])return a;r=Om(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[Jn]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function oo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[ba]||null}var Nh=[],ao=-1;function ui(r){return{current:r}}function Ye(r){0>ao||(r.current=Nh[ao],Nh[ao]=null,ao--)}function Ke(r,s){ao++,Nh[ao]=r.current,r.current=s}var ci={},Mt=ui(ci),Xt=ui(!1),rs=ci;function lo(r,s){var a=r.type.contextTypes;if(!a)return ci;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function cu(){Ye(Xt),Ye(Mt)}function Dm(r,s,a){if(Mt.current!==ci)throw Error(t(168));Ke(Mt,s),Ke(Xt,a)}function Lm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,je(r)||"Unknown",d));return oe({},a,h)}function hu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ci,rs=Mt.current,Ke(Mt,r),Ke(Xt,Xt.current),!0}function Mm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Lm(r,s,rs),h.__reactInternalMemoizedMergedChildContext=r,Ye(Xt),Ye(Mt),Ke(Mt,r)):Ye(Xt),Ke(Xt,a)}var Pr=null,fu=!1,bh=!1;function Vm(r){Pr===null?Pr=[r]:Pr.push(r)}function nT(r){fu=!0,Vm(r)}function hi(){if(!bh&&Pr!==null){bh=!0;var r=0,s=Oe;try{var a=Pr;for(Oe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Pr=null,fu=!1}catch(d){throw Pr!==null&&(Pr=Pr.slice(r+1)),zs(Ki,hi),d}finally{Oe=s,bh=!1}}return null}var uo=[],co=0,du=null,pu=0,vn=[],_n=0,is=null,kr=1,Rr="";function ss(r,s){uo[co++]=pu,uo[co++]=du,du=r,pu=s}function Fm(r,s,a){vn[_n++]=kr,vn[_n++]=Rr,vn[_n++]=is,is=r;var h=kr;r=Rr;var d=32-Wt(h)-1;h&=~(1<<d),a+=1;var g=32-Wt(s)+d;if(30<g){var E=d-d%5;g=(h&(1<<E)-1).toString(32),h>>=E,d-=E,kr=1<<32-Wt(s)+d|a<<d|h,Rr=g+r}else kr=1<<g|a<<d|h,Rr=r}function Oh(r){r.return!==null&&(ss(r,1),Fm(r,1,0))}function Dh(r){for(;r===du;)du=uo[--co],uo[co]=null,pu=uo[--co],uo[co]=null;for(;r===is;)is=vn[--_n],vn[_n]=null,Rr=vn[--_n],vn[_n]=null,kr=vn[--_n],vn[_n]=null}var un=null,cn=null,Ze=!1,Fn=null;function Um(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function jm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=li(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=is!==null?{id:kr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function Lh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Mh(r){if(Ze){var s=cn;if(s){var a=s;if(!jm(r,s)){if(Lh(r))throw Error(t(418));s=li(a.nextSibling);var h=un;s&&jm(r,s)?Um(h,a):(r.flags=r.flags&-4097|2,Ze=!1,un=r)}}else{if(Lh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,un=r}}}function zm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function mu(r){if(r!==un)return!1;if(!Ze)return zm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!kh(r.type,r.memoizedProps)),s&&(s=cn)){if(Lh(r))throw Bm(),Error(t(418));for(;s;)Um(r,s),s=li(s.nextSibling)}if(zm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){cn=li(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?li(r.stateNode.nextSibling):null;return!0}function Bm(){for(var r=cn;r;)r=li(r.nextSibling)}function ho(){cn=un=null,Ze=!1}function Vh(r){Fn===null?Fn=[r]:Fn.push(r)}var rT=le.ReactCurrentBatchConfig;function Da(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var A=d.refs;E===null?delete A[g]:A[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function gu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function $m(r){var s=r._init;return s(r._payload)}function Hm(r){function s(U,b){if(r){var j=U.deletions;j===null?(U.deletions=[b],U.flags|=16):j.push(b)}}function a(U,b){if(!r)return null;for(;b!==null;)s(U,b),b=b.sibling;return null}function h(U,b){for(U=new Map;b!==null;)b.key!==null?U.set(b.key,b):U.set(b.index,b),b=b.sibling;return U}function d(U,b){return U=_i(U,b),U.index=0,U.sibling=null,U}function g(U,b,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<b?(U.flags|=2,b):j):(U.flags|=2,b)):(U.flags|=1048576,b)}function E(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,b,j,ne){return b===null||b.tag!==6?(b=Cf(j,U.mode,ne),b.return=U,b):(b=d(b,j),b.return=U,b)}function R(U,b,j,ne){var fe=j.type;return fe===x?X(U,b,j.props.children,ne,j.key):b!==null&&(b.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Lt&&$m(fe)===b.type)?(ne=d(b,j.props),ne.ref=Da(U,b,j),ne.return=U,ne):(ne=ju(j.type,j.key,j.props,null,U.mode,ne),ne.ref=Da(U,b,j),ne.return=U,ne)}function B(U,b,j,ne){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=xf(j,U.mode,ne),b.return=U,b):(b=d(b,j.children||[]),b.return=U,b)}function X(U,b,j,ne,fe){return b===null||b.tag!==7?(b=ds(j,U.mode,ne,fe),b.return=U,b):(b=d(b,j),b.return=U,b)}function Z(U,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Cf(""+b,U.mode,j),b.return=U,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ee:return j=ju(b.type,b.key,b.props,null,U.mode,j),j.ref=Da(U,null,b),j.return=U,j;case Te:return b=xf(b,U.mode,j),b.return=U,b;case Lt:var ne=b._init;return Z(U,ne(b._payload),j)}if(gr(b)||me(b))return b=ds(b,U.mode,j,null),b.return=U,b;gu(U,b)}return null}function Y(U,b,j,ne){var fe=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return fe!==null?null:A(U,b,""+j,ne);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ee:return j.key===fe?R(U,b,j,ne):null;case Te:return j.key===fe?B(U,b,j,ne):null;case Lt:return fe=j._init,Y(U,b,fe(j._payload),ne)}if(gr(j)||me(j))return fe!==null?null:X(U,b,j,ne,null);gu(U,j)}return null}function se(U,b,j,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(j)||null,A(b,U,""+ne,fe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Ee:return U=U.get(ne.key===null?j:ne.key)||null,R(b,U,ne,fe);case Te:return U=U.get(ne.key===null?j:ne.key)||null,B(b,U,ne,fe);case Lt:var ge=ne._init;return se(U,b,j,ge(ne._payload),fe)}if(gr(ne)||me(ne))return U=U.get(j)||null,X(b,U,ne,fe,null);gu(b,ne)}return null}function ce(U,b,j,ne){for(var fe=null,ge=null,ye=b,we=b=0,At=null;ye!==null&&we<j.length;we++){ye.index>we?(At=ye,ye=null):At=ye.sibling;var Ue=Y(U,ye,j[we],ne);if(Ue===null){ye===null&&(ye=At);break}r&&ye&&Ue.alternate===null&&s(U,ye),b=g(Ue,b,we),ge===null?fe=Ue:ge.sibling=Ue,ge=Ue,ye=At}if(we===j.length)return a(U,ye),Ze&&ss(U,we),fe;if(ye===null){for(;we<j.length;we++)ye=Z(U,j[we],ne),ye!==null&&(b=g(ye,b,we),ge===null?fe=ye:ge.sibling=ye,ge=ye);return Ze&&ss(U,we),fe}for(ye=h(U,ye);we<j.length;we++)At=se(ye,U,we,j[we],ne),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?we:At.key),b=g(At,b,we),ge===null?fe=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(Ei){return s(U,Ei)}),Ze&&ss(U,we),fe}function he(U,b,j,ne){var fe=me(j);if(typeof fe!="function")throw Error(t(150));if(j=fe.call(j),j==null)throw Error(t(151));for(var ge=fe=null,ye=b,we=b=0,At=null,Ue=j.next();ye!==null&&!Ue.done;we++,Ue=j.next()){ye.index>we?(At=ye,ye=null):At=ye.sibling;var Ei=Y(U,ye,Ue.value,ne);if(Ei===null){ye===null&&(ye=At);break}r&&ye&&Ei.alternate===null&&s(U,ye),b=g(Ei,b,we),ge===null?fe=Ei:ge.sibling=Ei,ge=Ei,ye=At}if(Ue.done)return a(U,ye),Ze&&ss(U,we),fe;if(ye===null){for(;!Ue.done;we++,Ue=j.next())Ue=Z(U,Ue.value,ne),Ue!==null&&(b=g(Ue,b,we),ge===null?fe=Ue:ge.sibling=Ue,ge=Ue);return Ze&&ss(U,we),fe}for(ye=h(U,ye);!Ue.done;we++,Ue=j.next())Ue=se(ye,U,we,Ue.value,ne),Ue!==null&&(r&&Ue.alternate!==null&&ye.delete(Ue.key===null?we:Ue.key),b=g(Ue,b,we),ge===null?fe=Ue:ge.sibling=Ue,ge=Ue);return r&&ye.forEach(function(MT){return s(U,MT)}),Ze&&ss(U,we),fe}function lt(U,b,j,ne){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ee:e:{for(var fe=j.key,ge=b;ge!==null;){if(ge.key===fe){if(fe=j.type,fe===x){if(ge.tag===7){a(U,ge.sibling),b=d(ge,j.props.children),b.return=U,U=b;break e}}else if(ge.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Lt&&$m(fe)===ge.type){a(U,ge.sibling),b=d(ge,j.props),b.ref=Da(U,ge,j),b.return=U,U=b;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===x?(b=ds(j.props.children,U.mode,ne,j.key),b.return=U,U=b):(ne=ju(j.type,j.key,j.props,null,U.mode,ne),ne.ref=Da(U,b,j),ne.return=U,U=ne)}return E(U);case Te:e:{for(ge=j.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(U,b.sibling),b=d(b,j.children||[]),b.return=U,U=b;break e}else{a(U,b);break}else s(U,b);b=b.sibling}b=xf(j,U.mode,ne),b.return=U,U=b}return E(U);case Lt:return ge=j._init,lt(U,b,ge(j._payload),ne)}if(gr(j))return ce(U,b,j,ne);if(me(j))return he(U,b,j,ne);gu(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(U,b.sibling),b=d(b,j),b.return=U,U=b):(a(U,b),b=Cf(j,U.mode,ne),b.return=U,U=b),E(U)):a(U,b)}return lt}var fo=Hm(!0),Wm=Hm(!1),yu=ui(null),vu=null,po=null,Fh=null;function Uh(){Fh=po=vu=null}function jh(r){var s=yu.current;Ye(yu),r._currentValue=s}function zh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function mo(r,s){vu=r,Fh=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Zt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(Fh!==r)if(r={context:r,memoizedValue:s,next:null},po===null){if(vu===null)throw Error(t(308));po=r,vu.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return s}var os=null;function Bh(r){os===null?os=[r]:os.push(r)}function qm(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,Bh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Cr(r,h)}function Cr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function $h(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function di(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Fe&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,Cr(r,a)}return d=h.interleaved,d===null?(s.next=s,Bh(h)):(s.next=d.next,d.next=s),h.interleaved=s,Cr(r,a)}function _u(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ni(r,a)}}function Km(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Eu(r,s,a,h){var d=r.updateQueue;fi=!1;var g=d.firstBaseUpdate,E=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var R=A,B=R.next;R.next=null,E===null?g=B:E.next=B,E=R;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==E&&(A===null?X.firstBaseUpdate=B:A.next=B,X.lastBaseUpdate=R))}if(g!==null){var Z=d.baseState;E=0,X=B=R=null,A=g;do{var Y=A.lane,se=A.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,he=A;switch(Y=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Z=ce.call(se,Z,Y);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Y=typeof ce=="function"?ce.call(se,Z,Y):ce,Y==null)break e;Z=oe({},Z,Y);break e;case 2:fi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else se={eventTime:se,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(B=X=se,R=Z):X=X.next=se,E|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(R=Z),d.baseState=R,d.firstBaseUpdate=B,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do E|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);us|=E,r.lanes=E,r.memoizedState=Z}}function Qm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var La={},Zn=ui(La),Ma=ui(La),Va=ui(La);function as(r){if(r===La)throw Error(t(174));return r}function Hh(r,s){switch(Ke(Va,s),Ke(Ma,r),Ke(Zn,La),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ye(Zn),Ke(Zn,s)}function go(){Ye(Zn),Ye(Ma),Ye(Va)}function Ym(r){as(Va.current);var s=as(Zn.current),a=pt(s,r.type);s!==a&&(Ke(Ma,r),Ke(Zn,a))}function Wh(r){Ma.current===r&&(Ye(Zn),Ye(Ma))}var et=ui(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qh=[];function Gh(){for(var r=0;r<qh.length;r++)qh[r]._workInProgressVersionPrimary=null;qh.length=0}var Tu=le.ReactCurrentDispatcher,Kh=le.ReactCurrentBatchConfig,ls=0,tt=null,gt=null,It=null,Iu=!1,Fa=!1,Ua=0,iT=0;function Vt(){throw Error(t(321))}function Qh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Vn(r[a],s[a]))return!1;return!0}function Yh(r,s,a,h,d,g){if(ls=g,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tu.current=r===null||r.memoizedState===null?lT:uT,r=a(h,d),Fa){g=0;do{if(Fa=!1,Ua=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,Tu.current=cT,r=a(h,d)}while(Fa)}if(Tu.current=Pu,s=gt!==null&&gt.next!==null,ls=0,It=gt=tt=null,Iu=!1,s)throw Error(t(300));return r}function Xh(){var r=Ua!==0;return Ua=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=r:It=It.next=r,It}function wn(){if(gt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?tt.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?tt.memoizedState=It=r:It=It.next=r}return It}function ja(r,s){return typeof s=="function"?s(r):s}function Jh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=gt,d=h.baseQueue,g=a.pending;if(g!==null){if(d!==null){var E=d.next;d.next=g.next,g.next=E}h.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,h=h.baseState;var A=E=null,R=null,B=g;do{var X=B.lane;if((ls&X)===X)R!==null&&(R=R.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:r(h,B.action);else{var Z={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};R===null?(A=R=Z,E=h):R=R.next=Z,tt.lanes|=X,us|=X}B=B.next}while(B!==null&&B!==g);R===null?E=h:R.next=A,Vn(h,s.memoizedState)||(Zt=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=R,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do g=d.lane,tt.lanes|=g,us|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Zh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do g=r(g,E.action),E=E.next;while(E!==d);Vn(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Xm(){}function Jm(r,s){var a=tt,h=wn(),d=s(),g=!Vn(h.memoizedState,d);if(g&&(h.memoizedState=d,Zt=!0),h=h.queue,ef(tg.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,za(9,eg.bind(null,a,h,d,s),void 0,null),St===null)throw Error(t(349));(ls&30)!==0||Zm(a,s,d)}return d}function Zm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function eg(r,s,a,h){s.value=a,s.getSnapshot=h,ng(s)&&rg(r)}function tg(r,s,a){return a(function(){ng(s)&&rg(r)})}function ng(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Vn(r,a)}catch{return!0}}function rg(r){var s=Cr(r,1);s!==null&&Bn(s,r,1,-1)}function ig(r){var s=er();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},s.queue=r,r=r.dispatch=aT.bind(null,tt,r),[s.memoizedState,r]}function za(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function sg(){return wn().memoizedState}function Su(r,s,a,h){var d=er();tt.flags|=r,d.memoizedState=za(1|s,a,void 0,h===void 0?null:h)}function Au(r,s,a,h){var d=wn();h=h===void 0?null:h;var g=void 0;if(gt!==null){var E=gt.memoizedState;if(g=E.destroy,h!==null&&Qh(h,E.deps)){d.memoizedState=za(s,a,g,h);return}}tt.flags|=r,d.memoizedState=za(1|s,a,g,h)}function og(r,s){return Su(8390656,8,r,s)}function ef(r,s){return Au(2048,8,r,s)}function ag(r,s){return Au(4,2,r,s)}function lg(r,s){return Au(4,4,r,s)}function ug(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function cg(r,s,a){return a=a!=null?a.concat([r]):null,Au(4,4,ug.bind(null,s,r),a)}function tf(){}function hg(r,s){var a=wn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Qh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function fg(r,s){var a=wn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Qh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function dg(r,s,a){return(ls&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(Vn(a,s)||(a=Xi(),tt.lanes|=a,us|=a,r.baseState=!0),s)}function sT(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var h=Kh.transition;Kh.transition={};try{r(!1),s()}finally{Oe=a,Kh.transition=h}}function pg(){return wn().memoizedState}function oT(r,s,a){var h=yi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},mg(r))gg(s,a);else if(a=qm(r,s,a,h),a!==null){var d=Kt();Bn(a,r,h,d),yg(a,s,h)}}function aT(r,s,a){var h=yi(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(mg(r))gg(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,A=g(E,a);if(d.hasEagerState=!0,d.eagerState=A,Vn(A,E)){var R=s.interleaved;R===null?(d.next=d,Bh(s)):(d.next=R.next,R.next=d),s.interleaved=d;return}}catch{}finally{}a=qm(r,s,d,h),a!==null&&(d=Kt(),Bn(a,r,h,d),yg(a,s,h))}}function mg(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function gg(r,s){Fa=Iu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function yg(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ni(r,a)}}var Pu={readContext:En,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},lT={readContext:En,useCallback:function(r,s){return er().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:og,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Su(4194308,4,ug.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Su(4194308,4,r,s)},useInsertionEffect:function(r,s){return Su(4,2,r,s)},useMemo:function(r,s){var a=er();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=er();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=oT.bind(null,tt,r),[h.memoizedState,r]},useRef:function(r){var s=er();return r={current:r},s.memoizedState=r},useState:ig,useDebugValue:tf,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=ig(!1),s=r[0];return r=sT.bind(null,r[1]),er().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=tt,d=er();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(ls&30)!==0||Zm(h,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,og(tg.bind(null,h,g,r),[r]),h.flags|=2048,za(9,eg.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=er(),s=St.identifierPrefix;if(Ze){var a=Rr,h=kr;a=(h&~(1<<32-Wt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ua++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=iT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},uT={readContext:En,useCallback:hg,useContext:En,useEffect:ef,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:fg,useReducer:Jh,useRef:sg,useState:function(){return Jh(ja)},useDebugValue:tf,useDeferredValue:function(r){var s=wn();return dg(s,gt.memoizedState,r)},useTransition:function(){var r=Jh(ja)[0],s=wn().memoizedState;return[r,s]},useMutableSource:Xm,useSyncExternalStore:Jm,useId:pg,unstable_isNewReconciler:!1},cT={readContext:En,useCallback:hg,useContext:En,useEffect:ef,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:fg,useReducer:Zh,useRef:sg,useState:function(){return Zh(ja)},useDebugValue:tf,useDeferredValue:function(r){var s=wn();return gt===null?s.memoizedState=r:dg(s,gt.memoizedState,r)},useTransition:function(){var r=Zh(ja)[0],s=wn().memoizedState;return[r,s]},useMutableSource:Xm,useSyncExternalStore:Jm,useId:pg,unstable_isNewReconciler:!1};function Un(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function nf(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ku={isMounted:function(r){return(r=r._reactInternals)?xn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Kt(),d=yi(r),g=xr(h,d);g.payload=s,a!=null&&(g.callback=a),s=di(r,g,d),s!==null&&(Bn(s,r,d,h),_u(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Kt(),d=yi(r),g=xr(h,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=di(r,g,d),s!==null&&(Bn(s,r,d,h),_u(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),h=yi(r),d=xr(a,h);d.tag=2,s!=null&&(d.callback=s),s=di(r,d,h),s!==null&&(Bn(s,r,h,a),_u(s,r,h))}};function vg(r,s,a,h,d,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,E):s.prototype&&s.prototype.isPureReactComponent?!ka(a,h)||!ka(d,g):!0}function _g(r,s,a){var h=!1,d=ci,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(d=Jt(s)?rs:Mt.current,h=s.contextTypes,g=(h=h!=null)?lo(r,d):ci),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ku,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Eg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&ku.enqueueReplaceState(s,s.state,null)}function rf(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},$h(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=En(g):(g=Jt(s)?rs:Mt.current,d.context=lo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(nf(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&ku.enqueueReplaceState(d,d.state,null),Eu(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function yo(r,s){try{var a="",h=s;do a+=Re(h),h=h.return;while(h);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function sf(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function of(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var hT=typeof WeakMap=="function"?WeakMap:Map;function wg(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Du||(Du=!0,wf=h),of(r,s)},a}function Tg(r,s,a){a=xr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){of(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){of(r,s),typeof h!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function Ig(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new hT;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=AT.bind(null,r,s,a),s.then(r,r))}function Sg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ag(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,di(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var fT=le.ReactCurrentOwner,Zt=!1;function Gt(r,s,a,h){s.child=r===null?Wm(s,null,a,h):fo(s,r.child,a,h)}function Pg(r,s,a,h,d){a=a.render;var g=s.ref;return mo(s,d),h=Yh(r,s,a,h,g,d),a=Xh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Ze&&a&&Oh(s),s.flags|=1,Gt(r,s,h,d),s.child)}function kg(r,s,a,h,d){if(r===null){var g=a.type;return typeof g=="function"&&!Rf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Rg(r,s,g,h,d)):(r=ju(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:ka,a(E,h)&&r.ref===s.ref)return Nr(r,s,d)}return s.flags|=1,r=_i(g,h),r.ref=s.ref,r.return=s,s.child=r}function Rg(r,s,a,h,d){if(r!==null){var g=r.memoizedProps;if(ka(g,h)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=h=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Zt=!0);else return s.lanes=r.lanes,Nr(r,s,d)}return af(r,s,a,h,d)}function Cg(r,s,a){var h=s.pendingProps,d=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(_o,hn),hn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(_o,hn),hn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,Ke(_o,hn),hn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,Ke(_o,hn),hn|=h;return Gt(r,s,d,a),s.child}function xg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function af(r,s,a,h,d){var g=Jt(a)?rs:Mt.current;return g=lo(s,g),mo(s,d),a=Yh(r,s,a,h,g,d),h=Xh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Ze&&h&&Oh(s),s.flags|=1,Gt(r,s,a,d),s.child)}function Ng(r,s,a,h,d){if(Jt(a)){var g=!0;hu(s)}else g=!1;if(mo(s,d),s.stateNode===null)Cu(r,s),_g(s,a,h),rf(s,a,h,d),h=!0;else if(r===null){var E=s.stateNode,A=s.memoizedProps;E.props=A;var R=E.context,B=a.contextType;typeof B=="object"&&B!==null?B=En(B):(B=Jt(a)?rs:Mt.current,B=lo(s,B));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";Z||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==h||R!==B)&&Eg(s,E,h,B),fi=!1;var Y=s.memoizedState;E.state=Y,Eu(s,h,E,d),R=s.memoizedState,A!==h||Y!==R||Xt.current||fi?(typeof X=="function"&&(nf(s,a,X,h),R=s.memoizedState),(A=fi||vg(s,a,A,h,Y,R,B))?(Z||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=R),E.props=h,E.state=R,E.context=B,h=A):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,Gm(r,s),A=s.memoizedProps,B=s.type===s.elementType?A:Un(s.type,A),E.props=B,Z=s.pendingProps,Y=E.context,R=a.contextType,typeof R=="object"&&R!==null?R=En(R):(R=Jt(a)?rs:Mt.current,R=lo(s,R));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==Z||Y!==R)&&Eg(s,E,h,R),fi=!1,Y=s.memoizedState,E.state=Y,Eu(s,h,E,d);var ce=s.memoizedState;A!==Z||Y!==ce||Xt.current||fi?(typeof se=="function"&&(nf(s,a,se,h),ce=s.memoizedState),(B=fi||vg(s,a,B,h,Y,ce,R)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,ce,R),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,ce,R)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),E.props=h,E.state=ce,E.context=R,h=B):(typeof E.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return lf(r,s,a,h,g,d)}function lf(r,s,a,h,d,g){xg(r,s);var E=(s.flags&128)!==0;if(!h&&!E)return d&&Mm(s,a,!1),Nr(r,s,g);h=s.stateNode,fT.current=s;var A=E&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&E?(s.child=fo(s,r.child,null,g),s.child=fo(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=h.state,d&&Mm(s,a,!0),s.child}function bg(r){var s=r.stateNode;s.pendingContext?Dm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Dm(r,s.context,!1),Hh(r,s.containerInfo)}function Og(r,s,a,h,d){return ho(),Vh(d),s.flags|=256,Gt(r,s,a,h),s.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(r){return{baseLanes:r,cachePool:null,transitions:null}}function Dg(r,s,a){var h=s.pendingProps,d=et.current,g=!1,E=(s.flags&128)!==0,A;if((A=E)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(et,d&1),r===null)return Mh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,r=h.fallback,g?(h=s.mode,g=s.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=zu(E,h,0,null),r=ds(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=cf(a),s.memoizedState=uf,r):hf(s,E));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return dT(r,s,E,h,A,d,a);if(g){g=h.fallback,E=s.mode,d=r.child,A=d.sibling;var R={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=R,s.deletions=null):(h=_i(d,R),h.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=_i(A,g):(g=ds(g,E,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,E=r.child.memoizedState,E=E===null?cf(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,s.memoizedState=uf,h}return g=r.child,r=g.sibling,h=_i(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function hf(r,s){return s=zu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ru(r,s,a,h){return h!==null&&Vh(h),fo(s,r.child,null,a),r=hf(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function dT(r,s,a,h,d,g,E){if(a)return s.flags&256?(s.flags&=-257,h=sf(Error(t(422))),Ru(r,s,E,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,d=s.mode,h=zu({mode:"visible",children:h.children},d,0,null),g=ds(g,d,E,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&fo(s,r.child,null,E),s.child.memoizedState=cf(E),s.memoizedState=uf,g);if((s.mode&1)===0)return Ru(r,s,E,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=sf(g,h,void 0),Ru(r,s,E,h)}if(A=(E&r.childLanes)!==0,Zt||A){if(h=St,h!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|E))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Cr(r,d),Bn(h,r,d,-1))}return kf(),h=sf(Error(t(421))),Ru(r,s,E,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=PT.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,cn=li(d.nextSibling),un=s,Ze=!0,Fn=null,r!==null&&(vn[_n++]=kr,vn[_n++]=Rr,vn[_n++]=is,kr=r.id,Rr=r.overflow,is=s),s=hf(s,h.children),s.flags|=4096,s)}function Lg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),zh(r.return,s,a)}function ff(r,s,a,h,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=d)}function Mg(r,s,a){var h=s.pendingProps,d=h.revealOrder,g=h.tail;if(Gt(r,s,h.children,a),h=et.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Lg(r,a,s);else if(r.tag===19)Lg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ke(et,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&wu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ff(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&wu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ff(s,!0,a,null,g);break;case"together":ff(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),us|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=_i(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=_i(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function pT(r,s,a){switch(s.tag){case 3:bg(s),ho();break;case 5:Ym(s);break;case 1:Jt(s.type)&&hu(s);break;case 4:Hh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;Ke(yu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ke(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Dg(r,s,a):(Ke(et,et.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);Ke(et,et.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Mg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(et,et.current),h)break;return null;case 22:case 23:return s.lanes=0,Cg(r,s,a)}return Nr(r,s,a)}var Vg,df,Fg,Ug;Vg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},df=function(){},Fg=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,as(Zn.current);var g=null;switch(a){case"input":d=ji(r,d),h=ji(r,h),g=[];break;case"select":d=oe({},d,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":d=na(r,d),h=na(r,h),g=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=lu)}la(a,h);var E;a=null;for(B in d)if(!h.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var A=d[B];for(E in A)A.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in h){var R=h[B];if(A=d!=null?d[B]:void 0,h.hasOwnProperty(B)&&R!==A&&(R!=null||A!=null))if(B==="style")if(A){for(E in A)!A.hasOwnProperty(E)||R&&R.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in R)R.hasOwnProperty(E)&&A[E]!==R[E]&&(a||(a={}),a[E]=R[E])}else a||(g||(g=[]),g.push(B,a)),a=R;else B==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,A=A?A.__html:void 0,R!=null&&A!==R&&(g=g||[]).push(B,R)):B==="children"?typeof R!="string"&&typeof R!="number"||(g=g||[]).push(B,""+R):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(R!=null&&B==="onScroll"&&Qe("scroll",r),g||A===R||(g=[])):(g=g||[]).push(B,R))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},Ug=function(r,s,a,h){a!==h&&(s.flags|=4)};function Ba(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function mT(r,s,a){var h=s.pendingProps;switch(Dh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Jt(s.type)&&cu(),Ft(s),null;case 3:return h=s.stateNode,go(),Ye(Xt),Ye(Mt),Gh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(mu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Fn!==null&&(Sf(Fn),Fn=null))),df(r,s),Ft(s),null;case 5:Wh(s);var d=as(Va.current);if(a=s.type,r!==null&&s.stateNode!=null)Fg(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=as(Zn.current),mu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[Jn]=s,h[ba]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(d=0;d<Ca.length;d++)Qe(Ca[d],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":xs(h,g),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",h);break;case"textarea":bs(h,g),Qe("invalid",h)}la(a,g),d=null;for(var E in g)if(g.hasOwnProperty(E)){var A=g[E];E==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&au(h.textContent,A,r),d=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&au(h.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Qe("scroll",h)}switch(a){case"input":mr(h),Ol(h,g,!0);break;case"textarea":mr(h),ra(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=lu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=E.createElement(a,{is:h.is}):(r=E.createElement(a),a==="select"&&(E=r,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):r=E.createElementNS(r,a),r[Jn]=s,r[ba]=h,Vg(r,s,!1,!1),s.stateNode=r;e:{switch(E=ua(a,h),a){case"dialog":Qe("cancel",r),Qe("close",r),d=h;break;case"iframe":case"object":case"embed":Qe("load",r),d=h;break;case"video":case"audio":for(d=0;d<Ca.length;d++)Qe(Ca[d],r);d=h;break;case"source":Qe("error",r),d=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),d=h;break;case"details":Qe("toggle",r),d=h;break;case"input":xs(r,h),d=ji(r,h),Qe("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=oe({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":bs(r,h),d=na(r,h),Qe("invalid",r);break;default:d=h}la(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var R=A[g];g==="style"?oa(r,R):g==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ia(r,R)):g==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Xr(r,R):typeof R=="number"&&Xr(r,""+R):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?R!=null&&g==="onScroll"&&Qe("scroll",r):R!=null&&K(r,g,R,E))}switch(a){case"input":mr(r),Ol(r,h,!1);break;case"textarea":mr(r),ra(r);break;case"option":h.value!=null&&r.setAttribute("value",""+ze(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?yr(r,!!h.multiple,g,!1):h.defaultValue!=null&&yr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=lu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Ug(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=as(Va.current),as(Zn.current),mu(s)){if(h=s.stateNode,a=s.memoizedProps,h[Jn]=s,(g=h.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:au(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[Jn]=s,s.stateNode=h}return Ft(s),null;case 13:if(Ye(et),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Bm(),ho(),s.flags|=98560,g=!1;else if(g=mu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Jn]=s}else ho(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Fn!==null&&(Sf(Fn),Fn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(et.current&1)!==0?yt===0&&(yt=3):kf())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return go(),df(r,s),r===null&&xa(s.stateNode.containerInfo),Ft(s),null;case 10:return jh(s.type._context),Ft(s),null;case 17:return Jt(s.type)&&cu(),Ft(s),null;case 19:if(Ye(et),g=s.memoizedState,g===null)return Ft(s),null;if(h=(s.flags&128)!==0,E=g.rendering,E===null)if(h)Ba(g,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=wu(r),E!==null){for(s.flags|=128,Ba(g,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(et,et.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>Eo&&(s.flags|=128,h=!0,Ba(g,!1),s.lanes=4194304)}else{if(!h)if(r=wu(E),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ba(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ze)return Ft(s),null}else 2*Ge()-g.renderingStartTime>Eo&&a!==1073741824&&(s.flags|=128,h=!0,Ba(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(a=g.last,a!==null?a.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=et.current,Ke(et,h?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Pf(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(hn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function gT(r,s){switch(Dh(s),s.tag){case 1:return Jt(s.type)&&cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return go(),Ye(Xt),Ye(Mt),Gh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Wh(s),null;case 13:if(Ye(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ho()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(et),null;case 4:return go(),null;case 10:return jh(s.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var xu=!1,Ut=!1,yT=typeof WeakSet=="function"?WeakSet:Set,ue=null;function vo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){it(r,s,h)}else a.current=null}function pf(r,s,a){try{a()}catch(h){it(r,s,h)}}var jg=!1;function vT(r,s){if(Ah=si,r=vm(),yh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,A=-1,R=-1,B=0,X=0,Z=r,Y=null;t:for(;;){for(var se;Z!==a||d!==0&&Z.nodeType!==3||(A=E+d),Z!==g||h!==0&&Z.nodeType!==3||(R=E+h),Z.nodeType===3&&(E+=Z.nodeValue.length),(se=Z.firstChild)!==null;)Y=Z,Z=se;for(;;){if(Z===r)break t;if(Y===a&&++B===d&&(A=E),Y===g&&++X===h&&(R=E),(se=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=se}a=A===-1||R===-1?null:{start:A,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ph={focusedElem:r,selectionRange:a},si=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,lt=ce.memoizedState,U=s.stateNode,b=U.getSnapshotBeforeUpdate(s.elementType===s.type?he:Un(s.type,he),lt);U.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){it(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=jg,jg=!1,ce}function $a(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&pf(s,a,g)}d=d.next}while(d!==h)}}function Nu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function mf(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function zg(r){var s=r.alternate;s!==null&&(r.alternate=null,zg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Jn],delete s[ba],delete s[xh],delete s[eT],delete s[tT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Bg(r){return r.tag===5||r.tag===3||r.tag===4}function $g(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function gf(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=lu));else if(h!==4&&(r=r.child,r!==null))for(gf(r,s,a),r=r.sibling;r!==null;)gf(r,s,a),r=r.sibling}function yf(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(yf(r,s,a),r=r.sibling;r!==null;)yf(r,s,a),r=r.sibling}var Ct=null,jn=!1;function pi(r,s,a){for(a=a.child;a!==null;)Hg(r,s,a),a=a.sibling}function Hg(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 5:Ut||vo(a,s);case 6:var h=Ct,d=jn;Ct=null,pi(r,s,a),Ct=h,jn=d,Ct!==null&&(jn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(jn?(r=Ct,a=a.stateNode,r.nodeType===8?Ch(r.parentNode,a):r.nodeType===1&&Ch(r,a),Ln(r)):Ch(Ct,a.stateNode));break;case 4:h=Ct,d=jn,Ct=a.stateNode.containerInfo,jn=!0,pi(r,s,a),Ct=h,jn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var g=d,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&pf(a,s,E),d=d.next}while(d!==h)}pi(r,s,a);break;case 1:if(!Ut&&(vo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){it(a,s,A)}pi(r,s,a);break;case 21:pi(r,s,a);break;case 22:a.mode&1?(Ut=(h=Ut)||a.memoizedState!==null,pi(r,s,a),Ut=h):pi(r,s,a);break;default:pi(r,s,a)}}function Wg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new yT),s.forEach(function(h){var d=kT.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function zn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var g=r,E=s,A=E;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,jn=!1;break e;case 3:Ct=A.stateNode.containerInfo,jn=!0;break e;case 4:Ct=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));Hg(g,E,d),Ct=null,jn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(B){it(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qg(s,r),s=s.sibling}function qg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(s,r),tr(r),h&4){try{$a(3,r,r.return),Nu(3,r)}catch(he){it(r,r.return,he)}try{$a(5,r,r.return)}catch(he){it(r,r.return,he)}}break;case 1:zn(s,r),tr(r),h&512&&a!==null&&vo(a,a.return);break;case 5:if(zn(s,r),tr(r),h&512&&a!==null&&vo(a,a.return),r.flags&32){var d=r.stateNode;try{Xr(d,"")}catch(he){it(r,r.return,he)}}if(h&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,A=r.type,R=r.updateQueue;if(r.updateQueue=null,R!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ea(d,g),ua(A,E);var B=ua(A,g);for(E=0;E<R.length;E+=2){var X=R[E],Z=R[E+1];X==="style"?oa(d,Z):X==="dangerouslySetInnerHTML"?ia(d,Z):X==="children"?Xr(d,Z):K(d,X,Z,B)}switch(A){case"input":ta(d,g);break;case"textarea":Os(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?yr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?yr(d,!!g.multiple,g.defaultValue,!0):yr(d,!!g.multiple,g.multiple?[]:"",!1))}d[ba]=g}catch(he){it(r,r.return,he)}}break;case 6:if(zn(s,r),tr(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){it(r,r.return,he)}}break;case 3:if(zn(s,r),tr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(he){it(r,r.return,he)}break;case 4:zn(s,r),tr(r);break;case 13:zn(s,r),tr(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Ef=Ge())),h&4&&Wg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(B=Ut)||X,zn(s,r),Ut=B):zn(s,r),tr(r),h&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!X&&(r.mode&1)!==0)for(ue=r,X=r.child;X!==null;){for(Z=ue=X;ue!==null;){switch(Y=ue,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:$a(4,Y,Y.return);break;case 1:vo(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){h=Y,a=Y.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){it(h,a,he)}}break;case 5:vo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Qg(Z);continue}}se!==null?(se.return=Y,ue=se):Qg(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{d=Z.stateNode,B?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,R=Z.memoizedProps.style,E=R!=null&&R.hasOwnProperty("display")?R.display:null,A.style.display=sa("display",E))}catch(he){it(r,r.return,he)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=B?"":Z.memoizedProps}catch(he){it(r,r.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:zn(s,r),tr(r),h&4&&Wg(r);break;case 21:break;default:zn(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Bg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(Xr(d,""),h.flags&=-33);var g=$g(r);yf(r,g,d);break;case 3:case 4:var E=h.stateNode.containerInfo,A=$g(r);gf(r,A,E);break;default:throw Error(t(161))}}catch(R){it(r,r.return,R)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function _T(r,s,a){ue=r,Gg(r)}function Gg(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&h){var E=d.memoizedState!==null||xu;if(!E){var A=d.alternate,R=A!==null&&A.memoizedState!==null||Ut;A=xu;var B=Ut;if(xu=E,(Ut=R)&&!B)for(ue=d;ue!==null;)E=ue,R=E.child,E.tag===22&&E.memoizedState!==null?Yg(d):R!==null?(R.return=E,ue=R):Yg(d);for(;g!==null;)ue=g,Gg(g),g=g.sibling;ue=d,xu=A,Ut=B}Kg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ue=g):Kg(r)}}function Kg(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Nu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Un(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Qm(s,g,h);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Qm(s,E,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var R=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Ln(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&mf(s)}catch(Y){it(s,s.return,Y)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Qg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Yg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Nu(4,s)}catch(R){it(s,a,R)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(R){it(s,d,R)}}var g=s.return;try{mf(s)}catch(R){it(s,g,R)}break;case 5:var E=s.return;try{mf(s)}catch(R){it(s,E,R)}}}catch(R){it(s,s.return,R)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var ET=Math.ceil,bu=le.ReactCurrentDispatcher,vf=le.ReactCurrentOwner,Tn=le.ReactCurrentBatchConfig,Fe=0,St=null,ht=null,xt=0,hn=0,_o=ui(0),yt=0,Ha=null,us=0,Ou=0,_f=0,Wa=null,en=null,Ef=0,Eo=1/0,br=null,Du=!1,wf=null,mi=null,Lu=!1,gi=null,Mu=0,qa=0,Tf=null,Vu=-1,Fu=0;function Kt(){return(Fe&6)!==0?Ge():Vu!==-1?Vu:Vu=Ge()}function yi(r){return(r.mode&1)===0?1:(Fe&2)!==0&&xt!==0?xt&-xt:rT.transition!==null?(Fu===0&&(Fu=Xi()),Fu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:Ea(r.type)),r)}function Bn(r,s,a,h){if(50<qa)throw qa=0,Tf=null,Error(t(185));ti(r,a,h),((Fe&2)===0||r!==St)&&(r===St&&((Fe&2)===0&&(Ou|=a),yt===4&&vi(r,xt)),tn(r,h),a===1&&Fe===0&&(s.mode&1)===0&&(Eo=Ge()+500,fu&&hi()))}function tn(r,s){var a=r.callbackNode;Er(r,s);var h=Yi(r,r===St?xt:0);if(h===0)a!==null&&ma(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ma(a),s===1)r.tag===0?nT(Jg.bind(null,r)):Vm(Jg.bind(null,r)),Jw(function(){(Fe&6)===0&&hi()}),a=null;else{switch(ri(h)){case 1:a=Ki;break;case 4:a=Jr;break;case 16:a=mn;break;case 536870912:a=Fl;break;default:a=mn}a=oy(a,Xg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Xg(r,s){if(Vu=-1,Fu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(wo()&&r.callbackNode!==a)return null;var h=Yi(r,r===St?xt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Uu(r,h);else{s=h;var d=Fe;Fe|=2;var g=ey();(St!==r||xt!==s)&&(br=null,Eo=Ge()+500,hs(r,s));do try{IT();break}catch(A){Zg(r,A)}while(!0);Uh(),bu.current=g,Fe=d,ht!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(h=d,s=If(r,d))),s===1)throw a=Ha,hs(r,0),vi(r,h),tn(r,Ge()),a;if(s===6)vi(r,h);else{if(d=r.current.alternate,(h&30)===0&&!wT(d)&&(s=Uu(r,h),s===2&&(g=on(r),g!==0&&(h=g,s=If(r,g))),s===1))throw a=Ha,hs(r,0),vi(r,h),tn(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:fs(r,en,br);break;case 3:if(vi(r,h),(h&130023424)===h&&(s=Ef+500-Ge(),10<s)){if(Yi(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Rh(fs.bind(null,r,en,br),s);break}fs(r,en,br);break;case 4:if(vi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var E=31-Wt(h);g=1<<E,E=s[E],E>d&&(d=E),h&=~g}if(h=d,h=Ge()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*ET(h/1960))-h,10<h){r.timeoutHandle=Rh(fs.bind(null,r,en,br),h);break}fs(r,en,br);break;case 5:fs(r,en,br);break;default:throw Error(t(329))}}}return tn(r,Ge()),r.callbackNode===a?Xg.bind(null,r):null}function If(r,s){var a=Wa;return r.current.memoizedState.isDehydrated&&(hs(r,s).flags|=256),r=Uu(r,s),r!==2&&(s=en,en=a,s!==null&&Sf(s)),r}function Sf(r){en===null?en=r:en.push.apply(en,r)}function wT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],g=d.getSnapshot;d=d.value;try{if(!Vn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~_f,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),h=1<<a;r[a]=-1,s&=~h}}function Jg(r){if((Fe&6)!==0)throw Error(t(327));wo();var s=Yi(r,0);if((s&1)===0)return tn(r,Ge()),null;var a=Uu(r,s);if(r.tag!==0&&a===2){var h=on(r);h!==0&&(s=h,a=If(r,h))}if(a===1)throw a=Ha,hs(r,0),vi(r,s),tn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,fs(r,en,br),tn(r,Ge()),null}function Af(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Eo=Ge()+500,fu&&hi())}}function cs(r){gi!==null&&gi.tag===0&&(Fe&6)===0&&wo();var s=Fe;Fe|=1;var a=Tn.transition,h=Oe;try{if(Tn.transition=null,Oe=1,r)return r()}finally{Oe=h,Tn.transition=a,Fe=s,(Fe&6)===0&&hi()}}function Pf(){hn=_o.current,Ye(_o)}function hs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Xw(a)),ht!==null)for(a=ht.return;a!==null;){var h=a;switch(Dh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&cu();break;case 3:go(),Ye(Xt),Ye(Mt),Gh();break;case 5:Wh(h);break;case 4:go();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:jh(h.type._context);break;case 22:case 23:Pf()}a=a.return}if(St=r,ht=r=_i(r.current,null),xt=hn=s,yt=0,Ha=null,_f=Ou=us=0,en=Wa=null,os!==null){for(s=0;s<os.length;s++)if(a=os[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,g=a.pending;if(g!==null){var E=g.next;g.next=d,h.next=E}a.pending=h}os=null}return r}function Zg(r,s){do{var a=ht;try{if(Uh(),Tu.current=Pu,Iu){for(var h=tt.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}Iu=!1}if(ls=0,It=gt=tt=null,Fa=!1,Ua=0,vf.current=null,a===null||a.return===null){yt=1,Ha=s,ht=null;break}e:{var g=r,E=a.return,A=a,R=s;if(s=xt,A.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var B=R,X=A,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Sg(E);if(se!==null){se.flags&=-257,Ag(se,E,A,g,s),se.mode&1&&Ig(g,B,s),s=se,R=B;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(R),s.updateQueue=he}else ce.add(R);break e}else{if((s&1)===0){Ig(g,B,s),kf();break e}R=Error(t(426))}}else if(Ze&&A.mode&1){var lt=Sg(E);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Ag(lt,E,A,g,s),Vh(yo(R,A));break e}}g=R=yo(R,A),yt!==4&&(yt=2),Wa===null?Wa=[g]:Wa.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=wg(g,R,s);Km(g,U);break e;case 1:A=R;var b=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(mi===null||!mi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=Tg(g,A,s);Km(g,ne);break e}}g=g.return}while(g!==null)}ny(a)}catch(fe){s=fe,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function ey(){var r=bu.current;return bu.current=Pu,r===null?Pu:r}function kf(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||(us&268435455)===0&&(Ou&268435455)===0||vi(St,xt)}function Uu(r,s){var a=Fe;Fe|=2;var h=ey();(St!==r||xt!==s)&&(br=null,hs(r,s));do try{TT();break}catch(d){Zg(r,d)}while(!0);if(Uh(),Fe=a,bu.current=h,ht!==null)throw Error(t(261));return St=null,xt=0,yt}function TT(){for(;ht!==null;)ty(ht)}function IT(){for(;ht!==null&&!Ml();)ty(ht)}function ty(r){var s=sy(r.alternate,r,hn);r.memoizedProps=r.pendingProps,s===null?ny(r):ht=s,vf.current=null}function ny(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=mT(a,s,hn),a!==null){ht=a;return}}else{if(a=gT(a,s),a!==null){a.flags&=32767,ht=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);yt===0&&(yt=5)}function fs(r,s,a){var h=Oe,d=Tn.transition;try{Tn.transition=null,Oe=1,ST(r,s,a,h)}finally{Tn.transition=d,Oe=h}return null}function ST(r,s,a,h){do wo();while(gi!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(We(r,g),r===St&&(ht=St=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Lu||(Lu=!0,oy(mn,function(){return wo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Tn.transition,Tn.transition=null;var E=Oe;Oe=1;var A=Fe;Fe|=4,vf.current=null,vT(r,a),qg(a,r),Hw(Ph),si=!!Ah,Ph=Ah=null,r.current=a,_T(a),uh(),Fe=A,Oe=E,Tn.transition=g}else r.current=a;if(Lu&&(Lu=!1,gi=r,Mu=d),g=r.pendingLanes,g===0&&(mi=null),Ul(a.stateNode),tn(r,Ge()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,r=wf,wf=null,r;return(Mu&1)!==0&&r.tag!==0&&wo(),g=r.pendingLanes,(g&1)!==0?r===Tf?qa++:(qa=0,Tf=r):qa=0,hi(),null}function wo(){if(gi!==null){var r=ri(Mu),s=Tn.transition,a=Oe;try{if(Tn.transition=null,Oe=16>r?16:r,gi===null)var h=!1;else{if(r=gi,gi=null,Mu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,ue=r.current;ue!==null;){var g=ue,E=g.child;if((ue.flags&16)!==0){var A=g.deletions;if(A!==null){for(var R=0;R<A.length;R++){var B=A[R];for(ue=B;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:$a(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,ue=Z;else for(;ue!==null;){X=ue;var Y=X.sibling,se=X.return;if(zg(X),X===B){ue=null;break}if(Y!==null){Y.return=se,ue=Y;break}ue=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var lt=he.sibling;he.sibling=null,he=lt}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ue=E;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:$a(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ue=U;break e}ue=g.return}}var b=r.current;for(ue=b;ue!==null;){E=ue;var j=E.child;if((E.subtreeFlags&2064)!==0&&j!==null)j.return=E,ue=j;else e:for(E=b;ue!==null;){if(A=ue,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Nu(9,A)}}catch(fe){it(A,A.return,fe)}if(A===E){ue=null;break e}var ne=A.sibling;if(ne!==null){ne.return=A.return,ue=ne;break e}ue=A.return}}if(Fe=d,hi(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Qi,r)}catch{}h=!0}return h}finally{Oe=a,Tn.transition=s}}return!1}function ry(r,s,a){s=yo(a,s),s=wg(r,s,1),r=di(r,s,1),s=Kt(),r!==null&&(ti(r,1,s),tn(r,s))}function it(r,s,a){if(r.tag===3)ry(r,r,a);else for(;s!==null;){if(s.tag===3){ry(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(mi===null||!mi.has(h))){r=yo(a,r),r=Tg(s,r,1),s=di(s,r,1),r=Kt(),s!==null&&(ti(s,1,r),tn(s,r));break}}s=s.return}}function AT(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>Ge()-Ef?hs(r,0):_f|=a),tn(r,s)}function iy(r,s){s===0&&((r.mode&1)===0?s=1:(s=$s,$s<<=1,($s&130023424)===0&&($s=4194304)));var a=Kt();r=Cr(r,s),r!==null&&(ti(r,s,a),tn(r,a))}function PT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),iy(r,a)}function kT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),iy(r,a)}var sy;sy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Zt=!1,pT(r,s,a);Zt=(r.flags&131072)!==0}else Zt=!1,Ze&&(s.flags&1048576)!==0&&Fm(s,pu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Cu(r,s),r=s.pendingProps;var d=lo(s,Mt.current);mo(s,a),d=Yh(null,s,h,r,d,a);var g=Xh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(h)?(g=!0,hu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$h(s),d.updater=ku,s.stateNode=d,d._reactInternals=s,rf(s,h,r,a),s=lf(null,s,h,!0,g,a)):(s.tag=0,Ze&&g&&Oh(s),Gt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Cu(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=CT(h),r=Un(h,r),d){case 0:s=af(null,s,h,r,a);break e;case 1:s=Ng(null,s,h,r,a);break e;case 11:s=Pg(null,s,h,r,a);break e;case 14:s=kg(null,s,h,Un(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Un(h,d),af(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Un(h,d),Ng(r,s,h,d,a);case 3:e:{if(bg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,d=g.element,Gm(r,s),Eu(s,h,null,a);var E=s.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=yo(Error(t(423)),s),s=Og(r,s,h,a,d);break e}else if(h!==d){d=yo(Error(t(424)),s),s=Og(r,s,h,a,d);break e}else for(cn=li(s.stateNode.containerInfo.firstChild),un=s,Ze=!0,Fn=null,a=Wm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ho(),h===d){s=Nr(r,s,a);break e}Gt(r,s,h,a)}s=s.child}return s;case 5:return Ym(s),r===null&&Mh(s),h=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,E=d.children,kh(h,d)?E=null:g!==null&&kh(h,g)&&(s.flags|=32),xg(r,s),Gt(r,s,E,a),s.child;case 6:return r===null&&Mh(s),null;case 13:return Dg(r,s,a);case 4:return Hh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=fo(s,null,h,a):Gt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Un(h,d),Pg(r,s,h,d,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,g=s.memoizedProps,E=d.value,Ke(yu,h._currentValue),h._currentValue=E,g!==null)if(Vn(g.value,E)){if(g.children===d.children&&!Xt.current){s=Nr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){E=g.child;for(var R=A.firstContext;R!==null;){if(R.context===h){if(g.tag===1){R=xr(-1,a&-a),R.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?R.next=R:(R.next=X.next,X.next=R),B.pending=R}}g.lanes|=a,R=g.alternate,R!==null&&(R.lanes|=a),zh(g.return,a,s),A.lanes|=a;break}R=R.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,A=E.alternate,A!==null&&(A.lanes|=a),zh(E,a,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Gt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,mo(s,a),d=En(d),h=h(d),s.flags|=1,Gt(r,s,h,a),s.child;case 14:return h=s.type,d=Un(h,s.pendingProps),d=Un(h.type,d),kg(r,s,h,d,a);case 15:return Rg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Un(h,d),Cu(r,s),s.tag=1,Jt(h)?(r=!0,hu(s)):r=!1,mo(s,a),_g(s,h,d),rf(s,h,d,a),lf(null,s,h,!0,r,a);case 19:return Mg(r,s,a);case 22:return Cg(r,s,a)}throw Error(t(156,s.tag))};function oy(r,s){return zs(r,s)}function RT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,h){return new RT(r,s,a,h)}function Rf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function CT(r){if(typeof r=="function")return Rf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Dt)return 14}return 2}function _i(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ju(r,s,a,h,d,g){var E=2;if(h=r,typeof r=="function")Rf(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case x:return ds(a.children,d,g,s);case S:E=8,d|=8;break;case P:return r=In(12,a,s,d|2),r.elementType=P,r.lanes=g,r;case k:return r=In(13,a,s,d),r.elementType=k,r.lanes=g,r;case ot:return r=In(19,a,s,d),r.elementType=ot,r.lanes=g,r;case He:return zu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case C:E=10;break e;case O:E=9;break e;case V:E=11;break e;case Dt:E=14;break e;case Lt:E=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(E,a,s,d),s.elementType=r,s.type=h,s.lanes=g,s}function ds(r,s,a,h){return r=In(7,r,h,s),r.lanes=a,r}function zu(r,s,a,h){return r=In(22,r,h,s),r.elementType=He,r.lanes=a,r.stateNode={isHidden:!1},r}function Cf(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function xf(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function xT(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nf(r,s,a,h,d,g,E,A,R){return r=new xT(r,s,a,A,R),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(g),r}function NT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function ay(r){if(!r)return ci;r=r._reactInternals;e:{if(xn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return Lm(r,a,s)}return s}function ly(r,s,a,h,d,g,E,A,R){return r=Nf(a,h,!0,r,d,g,E,A,R),r.context=ay(null),a=r.current,h=Kt(),d=yi(a),g=xr(h,d),g.callback=s??null,di(a,g,d),r.current.lanes=d,ti(r,d,h),tn(r,h),r}function Bu(r,s,a,h){var d=s.current,g=Kt(),E=yi(d);return a=ay(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(g,E),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=di(d,s,E),r!==null&&(Bn(r,d,E,g),_u(r,d,E)),E}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function uy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function bf(r,s){uy(r,s),(r=r.alternate)&&uy(r,s)}function bT(){return null}var cy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Of(r){this._internalRoot=r}Hu.prototype.render=Of.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bu(r,s,null,null)},Hu.prototype.unmount=Of.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;cs(function(){Bu(null,r,null,null)}),s[Ar]=null}};function Hu(r){this._internalRoot=r}Hu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Hl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Kn.length&&s!==0&&s<Kn[a].priority;a++);Kn.splice(a,0,r),a===0&&Gl(r)}};function Df(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hy(){}function OT(r,s,a,h,d){if(d){if(typeof h=="function"){var g=h;h=function(){var B=$u(E);g.call(B)}}var E=ly(s,h,r,0,null,!1,!1,"",hy);return r._reactRootContainer=E,r[Ar]=E.current,xa(r.nodeType===8?r.parentNode:r),cs(),E}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var A=h;h=function(){var B=$u(R);A.call(B)}}var R=Nf(r,0,!1,null,null,!1,!1,"",hy);return r._reactRootContainer=R,r[Ar]=R.current,xa(r.nodeType===8?r.parentNode:r),cs(function(){Bu(s,R,a,h)}),R}function qu(r,s,a,h,d){var g=a._reactRootContainer;if(g){var E=g;if(typeof d=="function"){var A=d;d=function(){var R=$u(E);A.call(R)}}Bu(s,E,r,d)}else E=OT(a,s,r,d,h);return $u(E)}Bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Zr(s.pendingLanes);a!==0&&(ni(s,a|1),tn(s,Ge()),(Fe&6)===0&&(Eo=Ge()+500,hi()))}break;case 13:cs(function(){var h=Cr(r,1);if(h!==null){var d=Kt();Bn(h,r,1,d)}}),bf(r,1)}},Hs=function(r){if(r.tag===13){var s=Cr(r,134217728);if(s!==null){var a=Kt();Bn(s,r,134217728,a)}bf(r,134217728)}},$l=function(r){if(r.tag===13){var s=yi(r),a=Cr(r,s);if(a!==null){var h=Kt();Bn(a,r,s,h)}bf(r,s)}},Hl=function(){return Oe},Wl=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},Ls=function(r,s,a){switch(s){case"input":if(ta(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=uu(h);if(!d)throw Error(t(90));Cs(h),ta(h,d)}}}break;case"textarea":Os(r,a);break;case"select":s=a.value,s!=null&&yr(r,!!a.multiple,s,!1)}},Hi=Af,ha=cs;var DT={usingClientEntryPoint:!1,Events:[Oa,oo,uu,qn,ca,Af]},Ga={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LT={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=pa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||bT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Qi=Gu.inject(LT),sn=Gu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DT,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(s))throw Error(t(200));return NT(r,s,null,a)},nn.createRoot=function(r,s){if(!Df(r))throw Error(t(299));var a=!1,h="",d=cy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Nf(r,1,!1,null,null,a,!1,h,d),r[Ar]=s.current,xa(r.nodeType===8?r.parentNode:r),new Of(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=pa(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return cs(r)},nn.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return qu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Df(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,g="",E=cy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=ly(s,null,r,1,a??null,d,!1,g,E),r[Ar]=s.current,xa(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Hu(s)},nn.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return qu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(cs(function(){qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},nn.unstable_batchedUpdates=Af,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return qu(r,s,a,!1,h)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var _y;function $T(){if(_y)return Vf.exports;_y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vf.exports=BT(),Vf.exports}var Ey;function HT(){if(Ey)return Ku;Ey=1;var n=$T();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var WT=HT(),$=Xd();const v_=y_($);var wy={};/**
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
 */const __=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},qT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,N=y&63;p||(N=64,c||(I=64)),i.push(t[_],t[T],t[I],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(__(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new GT;const I=l<<2|f>>4;if(i.push(I),y!==64){const N=f<<4&240|y>>2;if(i.push(N),T!==64){const z=y<<6&192|T;i.push(z)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class GT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KT=function(n){const e=__(n);return E_.encodeByteArray(e,!0)},yc=function(n){return KT(n).replace(/\./g,"")},w_=function(n){try{return E_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YT=()=>QT().__FIREBASE_DEFAULTS__,XT=()=>{if(typeof process>"u"||typeof wy>"u")return;const n=wy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&w_(n[1]);return e&&JSON.parse(e)},Uc=()=>{try{return YT()||XT()||JT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},T_=n=>{var e,t;return(t=(e=Uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ZT=n=>{const e=T_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},I_=()=>{var n;return(n=Uc())===null||n===void 0?void 0:n.config},S_=n=>{var e;return(e=Uc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class eI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function tI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yc(JSON.stringify(t)),yc(JSON.stringify(c)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function rI(){var n;const e=(n=Uc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aI(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lI(){return!rI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const hI="FirebaseError";class Gr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=hI,Object.setPrototypeOf(this,Gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?fI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new Gr(o,f,i)}}function fI(n,e){return n.replace(dI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const dI=/\{\$([^}]+)}/g;function pI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Ty(l)&&Ty(c)){if(!vc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ty(n){return n!==null&&typeof n=="object"}/**
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
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mI(n,e){const t=new gI(n,e);return t.subscribe.bind(t)}class gI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");yI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=jf),o.error===void 0&&(o.error=jf),o.complete===void 0&&(o.complete=jf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jf(){}/**
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
 */const ps="[DEFAULT]";/**
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
 */class vI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new eI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EI(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_I(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _I(n){return n===ps?void 0:n}function EI(n){return n.instantiationMode==="EAGER"}/**
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
 */class wI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const TI={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},II=Ne.INFO,SI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},AI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=SI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=II,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const PI=(n,e)=>e.some(t=>n instanceof t);let Iy,Sy;function kI(){return Iy||(Iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return Sy||(Sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const A_=new WeakMap,ld=new WeakMap,P_=new WeakMap,zf=new WeakMap,Zd=new WeakMap;function CI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ki(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&A_.set(t,n)}).catch(()=>{}),Zd.set(e,n),e}function xI(n){if(ld.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});ld.set(n,e)}let ud={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ld.get(n);if(e==="objectStoreNames")return n.objectStoreNames||P_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function NI(n){ud=n(ud)}function bI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Bf(this),e,...t);return P_.set(i,e.sort?e.sort():[e]),ki(i)}:RI().includes(n)?function(...e){return n.apply(Bf(this),e),ki(A_.get(this))}:function(...e){return ki(n.apply(Bf(this),e))}}function OI(n){return typeof n=="function"?bI(n):(n instanceof IDBTransaction&&xI(n),PI(n,kI())?new Proxy(n,ud):n)}function ki(n){if(n instanceof IDBRequest)return CI(n);if(zf.has(n))return zf.get(n);const e=OI(n);return e!==n&&(zf.set(n,e),Zd.set(e,n)),e}const Bf=n=>Zd.get(n);function DI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=ki(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ki(c.result),p.oldVersion,p.newVersion,ki(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const LI=["get","getKey","getAll","getAllKeys","count"],MI=["put","add","delete","clear"],$f=new Map;function Ay(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($f.get(e))return $f.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=MI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||LI.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return $f.set(e,l),l}NI(n=>({...n,get:(e,t,i)=>Ay(e,t)||n.get(e,t,i),has:(e,t)=>!!Ay(e,t)||n.has(e,t)}));/**
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
 */class VI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function FI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",Py="0.10.18";/**
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
 */const jr=new Jd("@firebase/app"),UI="@firebase/app-compat",jI="@firebase/analytics-compat",zI="@firebase/analytics",BI="@firebase/app-check-compat",$I="@firebase/app-check",HI="@firebase/auth",WI="@firebase/auth-compat",qI="@firebase/database",GI="@firebase/data-connect",KI="@firebase/database-compat",QI="@firebase/functions",YI="@firebase/functions-compat",XI="@firebase/installations",JI="@firebase/installations-compat",ZI="@firebase/messaging",eS="@firebase/messaging-compat",tS="@firebase/performance",nS="@firebase/performance-compat",rS="@firebase/remote-config",iS="@firebase/remote-config-compat",sS="@firebase/storage",oS="@firebase/storage-compat",aS="@firebase/firestore",lS="@firebase/vertexai",uS="@firebase/firestore-compat",cS="firebase",hS="11.2.0";/**
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
 */const hd="[DEFAULT]",fS={[cd]:"fire-core",[UI]:"fire-core-compat",[zI]:"fire-analytics",[jI]:"fire-analytics-compat",[$I]:"fire-app-check",[BI]:"fire-app-check-compat",[HI]:"fire-auth",[WI]:"fire-auth-compat",[qI]:"fire-rtdb",[GI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[QI]:"fire-fn",[YI]:"fire-fn-compat",[XI]:"fire-iid",[JI]:"fire-iid-compat",[ZI]:"fire-fcm",[eS]:"fire-fcm-compat",[tS]:"fire-perf",[nS]:"fire-perf-compat",[rS]:"fire-rc",[iS]:"fire-rc-compat",[sS]:"fire-gcs",[oS]:"fire-gcs-compat",[aS]:"fire-fst",[uS]:"fire-fst-compat",[lS]:"fire-vertex","fire-js":"fire-js",[cS]:"fire-js-all"};/**
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
 */const _c=new Map,dS=new Map,fd=new Map;function ky(n,e){try{n.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Do(n){const e=n.name;if(fd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,n);for(const t of _c.values())ky(t,n);for(const t of dS.values())ky(t,n);return!0}function ep(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dr(n){return n.settings!==void 0}/**
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
 */const pS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new _l("app","Firebase",pS);/**
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
 */class mS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const Wo=hS;function k_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ri.create("bad-app-name",{appName:String(o)});if(t||(t=I_()),!t)throw Ri.create("no-options");const l=_c.get(o);if(l){if(vc(t,l.options)&&vc(i,l.config))return l;throw Ri.create("duplicate-app",{appName:o})}const c=new wI(o);for(const p of fd.values())c.addComponent(p);const f=new mS(t,i,c);return _c.set(o,f),f}function R_(n=hd){const e=_c.get(n);if(!e&&n===hd&&I_())return k_();if(!e)throw Ri.create("no-app",{appName:n});return e}function Ci(n,e,t){var i;let o=(i=fS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(f.join(" "));return}Do(new Es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const gS="firebase-heartbeat-database",yS=1,al="firebase-heartbeat-store";let Hf=null;function C_(){return Hf||(Hf=DI(gS,yS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ri.create("idb-open",{originalErrorMessage:n.message})})),Hf}async function vS(n){try{const t=(await C_()).transaction(al),i=await t.objectStore(al).get(x_(n));return await t.done,i}catch(e){if(e instanceof Gr)jr.warn(e.message);else{const t=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Ry(n,e){try{const i=(await C_()).transaction(al,"readwrite");await i.objectStore(al).put(e,x_(n)),await i.done}catch(t){if(t instanceof Gr)jr.warn(t.message);else{const i=Ri.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function x_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _S=1024,ES=720*60*60*1e3;class wS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new IS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=ES}),this._storage.overwrite(this._heartbeatsCache))}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cy(),{heartbeatsToSend:i,unsentEntries:o}=TS(this._heartbeatsCache.heartbeats),l=yc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function Cy(){return new Date().toISOString().substring(0,10)}function TS(n,e=_S){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),xy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),xy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class IS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function xy(n){return yc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function SS(n){Do(new Es("platform-logger",e=>new VI(e),"PRIVATE")),Do(new Es("heartbeat",e=>new wS(e),"PRIVATE")),Ci(cd,Py,n),Ci(cd,Py,"esm2017"),Ci("fire-js","")}SS("");var AS="firebase",PS="11.2.0";/**
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
 */Ci(AS,PS,"app");function tp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function N_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kS=N_,b_=new _l("auth","Firebase",N_());/**
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
 */const Ec=new Jd("@firebase/auth");function RS(n,...e){Ec.logLevel<=Ne.WARN&&Ec.warn(`Auth (${Wo}): ${n}`,...e)}function ic(n,...e){Ec.logLevel<=Ne.ERROR&&Ec.error(`Auth (${Wo}): ${n}`,...e)}/**
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
 */function ur(n,...e){throw rp(n,...e)}function Hn(n,...e){return rp(n,...e)}function np(n,e,t){const i=Object.assign(Object.assign({},kS()),{[e]:t});return new _l("auth","Firebase",i).create(e,{appName:n.name})}function vs(n){return np(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function CS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ur(n,"argument-error"),np(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return b_.create(n,...e)}function Ie(n,e,...t){if(!n)throw rp(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ic(e),new Error(e)}function zr(n,e){n||Lr(e)}/**
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
 */function dd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xS(){return Ny()==="http:"||Ny()==="https:"}function Ny(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xS()||sI()||"connection"in navigator)?navigator.onLine:!0}function bS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=nI()||oI()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class O_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DS=new wl(3e4,6e4);function sp(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qo(n,e,t,i,o={}){return D_(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=El(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return iI()||(y.referrerPolicy="no-referrer"),O_.fetch()(L_(n,n.config.apiHost,t,f),y)})}async function D_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},OS),e);try{const o=new MS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Qu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Qu(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw np(n,_,y);ur(n,_)}}catch(o){if(o instanceof Gr)throw o;ur(n,"network-request-failed",{message:String(o)})}}async function LS(n,e,t,i,o={}){const l=await qo(n,e,t,i,o);return"mfaPendingCredential"in l&&ur(n,"multi-factor-auth-required",{_serverResponse:l}),l}function L_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?ip(n.config,o):`${n.config.apiScheme}://${o}`}class MS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Hn(this.auth,"network-request-failed")),DS.get())})}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Hn(n,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function VS(n,e){return qo(n,"POST","/v1/accounts:delete",e)}async function M_(n,e){return qo(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function el(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FS(n,e=!1){const t=kn(n),i=await t.getIdToken(e),o=op(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:el(Wf(o.auth_time)),issuedAtTime:el(Wf(o.iat)),expirationTime:el(Wf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Wf(n){return Number(n)*1e3}function op(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const o=w_(t);return o?JSON.parse(o):(ic("Failed to decode base64 JWT payload"),null)}catch(o){return ic("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function by(n){const e=op(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gr&&US(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function US({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ll(n,M_(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?V_(l.providerUserInfo):[],f=BS(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),_=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new pd(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function zS(n){const e=kn(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function V_(n){return n.map(e=>{var{providerId:t}=e,i=tp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function $S(n,e){const t=await D_(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=L_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",O_.fetch()(c,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HS(n,e){return qo(n,"POST","/v2/accounts:revokeToken",sp(n,e))}/**
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
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):by(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=by(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await $S(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Co;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
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
 */function wi(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new pd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FS(this,e)}reload(){return zS(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dr(this.auth.app))return Promise.reject(vs(this.auth));const e=await this.getIdToken();return await ll(this,VS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,p,y,_;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(c=t.photoURL)!==null&&c!==void 0?c:void 0,W=(f=t.tenantId)!==null&&f!==void 0?f:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:le,isAnonymous:Ee,providerData:Te,stsTokenManager:x}=t;Ie(K&&x,e,"internal-error");const S=Co.fromJSON(this.name,x);Ie(typeof K=="string",e,"internal-error"),wi(T,e.name),wi(I,e.name),Ie(typeof le=="boolean",e,"internal-error"),Ie(typeof Ee=="boolean",e,"internal-error"),wi(N,e.name),wi(z,e.name),wi(W,e.name),wi(M,e.name),wi(Q,e.name),wi(J,e.name);const P=new Mr({uid:K,auth:e,email:I,emailVerified:le,displayName:T,isAnonymous:Ee,photoURL:z,phoneNumber:N,tenantId:W,stsTokenManager:S,createdAt:Q,lastLoginAt:J});return Te&&Array.isArray(Te)&&(P.providerData=Te.map(C=>Object.assign({},C))),M&&(P._redirectEventId=M),P}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const l=new Mr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?V_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Co;f.updateFromIdToken(i);const p=new Mr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Oy=new Map;function Vr(n){zr(n instanceof Function,"Expected a class definition");let e=Oy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oy.set(n,e),e)}/**
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
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}F_.type="NONE";const Dy=F_;/**
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
 */function sc(n,e,t){return`firebase:${n}:${e}:${t}`}class xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=sc(this.userKey,o.apiKey,l),this.fullPersistenceKey=sc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xo(Vr(Dy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Vr(Dy);const c=sc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const _=await y._get(c);if(_){const T=Mr._fromJSON(e,_);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new xo(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new xo(l,e,i))}}/**
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
 */function Ly(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(H_(e))return"Blackberry";if(W_(e))return"Webos";if(j_(e))return"Safari";if((e.includes("chrome/")||z_(e))&&!e.includes("edge/"))return"Chrome";if($_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function U_(n=$t()){return/firefox\//i.test(n)}function j_(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z_(n=$t()){return/crios\//i.test(n)}function B_(n=$t()){return/iemobile/i.test(n)}function $_(n=$t()){return/android/i.test(n)}function H_(n=$t()){return/blackberry/i.test(n)}function W_(n=$t()){return/webos/i.test(n)}function ap(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WS(n=$t()){var e;return ap(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qS(){return aI()&&document.documentMode===10}function q_(n=$t()){return ap(n)||$_(n)||W_(n)||H_(n)||/windows phone/i.test(n)||B_(n)}/**
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
 */function G_(n,e=[]){let t;switch(n){case"Browser":t=Ly($t());break;case"Worker":t=`${Ly($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wo}/${i}`}/**
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
 */class GS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function KS(n,e={}){return qo(n,"GET","/v2/passwordPolicy",sp(n,e))}/**
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
 */const QS=6;class YS{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:QS,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class XS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new My(this),this.idTokenSubscription=new My(this),this.beforeStateQueue=new GS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await M_(this,{idToken:e}),i=await Mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dr(this.app))return Promise.reject(vs(this));const t=e?kn(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dr(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dr(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KS(this),t=new YS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _l("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await HS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&RS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jc(n){return kn(n)}class My{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JS(n){lp=n}function ZS(n){return lp.loadJS(n)}function e1(){return lp.gapiScript}function t1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function n1(n,e){const t=ep(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(vc(l,e??{}))return o;ur(o,"already-initialized")}return t.initialize({options:e})}function r1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function i1(n,e,t){const i=jc(n);Ie(i._canInitEmulator,i,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=K_(e),{host:c,port:f}=s1(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),o1()}function K_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function s1(n){const e=K_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Vy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Vy(c)}}}function Vy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function o1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Q_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}/**
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
 */async function No(n,e){return LS(n,"POST","/v1/accounts:signInWithIdp",sp(n,e))}/**
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
 */const a1="http://localhost";class ws extends Q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ur("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=tp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ws(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,No(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:a1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
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
 */class Tl extends up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ii extends Tl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
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
 */class Or extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Or.credential(t,i)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class Si extends Tl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
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
 */class Ai extends Tl{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
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
 */class Lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Mr._fromIdTokenResponse(e,i,o),c=Fy(i);return new Lo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Fy(i);return new Lo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Fy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Tc extends Gr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Tc(e,t,i,o)}}function Y_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,i):l})}async function l1(n,e,t=!1){const i=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lo._forOperation(n,"link",i)}/**
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
 */async function u1(n,e,t=!1){const{auth:i}=n;if(Dr(i.app))return Promise.reject(vs(i));const o="reauthenticate";try{const l=await ll(n,Y_(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const c=op(l.idToken);Ie(c,i,"internal-error");const{sub:f}=c;return Ie(n.uid===f,i,"user-mismatch"),Lo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ur(i,"user-mismatch"),l}}/**
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
 */async function c1(n,e,t=!1){if(Dr(n.app))return Promise.reject(vs(n));const i="signIn",o=await Y_(n,i,e),l=await Lo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}function h1(n,e,t,i){return kn(n).onIdTokenChanged(e,t,i)}function f1(n,e,t){return kn(n).beforeAuthStateChanged(e,t)}function d1(n,e,t,i){return kn(n).onAuthStateChanged(e,t,i)}function p1(n){return kn(n).signOut()}const Ic="__sak";/**
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
 */class X_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m1=1e3,g1=10;class J_ extends X_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);qS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,g1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},m1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const y1=J_;/**
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
 */class Z_ extends X_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Z_.type="SESSION";const e0=Z_;/**
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
 */function v1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),p=await v1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
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
 */class _1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const y=cp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function or(){return window}function E1(n){or().location.href=n}/**
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
 */function t0(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function w1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function I1(){return t0()?self:null}/**
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
 */const n0="firebaseLocalStorageDb",S1=1,Sc="firebaseLocalStorage",r0="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bc(n,e){return n.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function A1(){const n=indexedDB.deleteDatabase(n0);return new Il(n).toPromise()}function md(){const n=indexedDB.open(n0,S1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sc,{keyPath:r0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sc)?e(i):(i.close(),await A1(),e(await md()))})})}async function Uy(n,e,t){const i=Bc(n,!0).put({[r0]:e,value:t});return new Il(i).toPromise()}async function P1(n,e){const t=Bc(n,!1).get(e),i=await new Il(t).toPromise();return i===void 0?null:i.value}function jy(n,e){const t=Bc(n,!0).delete(e);return new Il(t).toPromise()}const k1=800,R1=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>R1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(I1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await w1(),!this.activeServiceWorker)return;this.sender=new _1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Uy(e,Ic,"1"),await jy(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Uy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>P1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Bc(o,!1).getAll();return new Il(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const C1=i0;new wl(3e4,6e4);/**
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
 */function s0(n,e){return e?Vr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hp extends Q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x1(n){return c1(n.auth,new hp(n),n.bypassAuthState)}function N1(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),u1(t,new hp(n),n.bypassAuthState)}async function b1(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),l1(t,new hp(n),n.bypassAuthState)}/**
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
 */class o0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x1;case"linkViaPopup":case"linkViaRedirect":return b1;case"reauthViaPopup":case"reauthViaRedirect":return N1;default:ur(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O1=new wl(2e3,1e4);async function D1(n,e,t){if(Dr(n.app))return Promise.reject(Hn(n,"operation-not-supported-in-this-environment"));const i=jc(n);CS(n,e,up);const o=s0(i,t);return new ms(i,"signInViaPopup",e,o).executeNotNull()}class ms extends o0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O1.get())};e()}}ms.currentPopupAction=null;/**
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
 */const L1="pendingRedirect",oc=new Map;class M1 extends o0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await V1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V1(n,e){const t=j1(e),i=U1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function F1(n,e){oc.set(n._key(),e)}function U1(n){return Vr(n._redirectPersistence)}function j1(n){return sc(L1,n.config.apiKey,n.name)}async function z1(n,e,t=!1){if(Dr(n.app))return Promise.reject(vs(n));const i=jc(n),o=s0(i,e),c=await new M1(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const B1=600*1e3;class $1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!a0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Hn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=B1&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function a0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(n);default:return!1}}/**
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
 */async function W1(n,e={}){return qo(n,"GET","/v1/projects",e)}/**
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
 */const q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G1=/^https?/;async function K1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await W1(n);for(const t of e)try{if(Q1(t))return}catch{}ur(n,"unauthorized-domain")}function Q1(n){const e=dd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!G1.test(t))return!1;if(q1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Y1=new wl(3e4,6e4);function By(){const n=or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function X1(n){return new Promise((e,t)=>{var i,o,l;function c(){By(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{By(),t(Hn(n,"network-request-failed"))},timeout:Y1.get()})}if(!((o=(i=or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)c();else{const f=t1("iframefcb");return or()[f]=()=>{gapi.load?c():t(Hn(n,"network-request-failed"))},ZS(`${e1()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw ac=null,e})}let ac=null;function J1(n){return ac=ac||X1(n),ac}/**
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
 */const Z1=new wl(5e3,15e3),eA="__/auth/iframe",tA="emulator/auth/iframe",nA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ip(e,tA):`https://${n.config.authDomain}/${eA}`,i={apiKey:e.apiKey,appName:n.name,v:Wo},o=rA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${El(i).slice(1)}`}async function sA(n){const e=await J1(n),t=or().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:iA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=Hn(n,"network-request-failed"),f=or().setTimeout(()=>{l(c)},Z1.get());function p(){or().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const oA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aA=500,lA=600,uA="_blank",cA="http://localhost";class $y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hA(n,e,t,i=aA,o=lA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},oA),{width:i.toString(),height:o.toString(),top:l,left:c}),y=$t().toLowerCase();t&&(f=z_(y)?uA:t),U_(y)&&(e=e||cA,p.scrollbars="yes");const _=Object.entries(p).reduce((I,[N,z])=>`${I}${N}=${z},`,"");if(WS(y)&&f!=="_self")return fA(e||"",f),new $y(null);const T=window.open(e||"",f,_);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new $y(T)}function fA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const dA="__/auth/handler",pA="emulator/auth/handler",mA=encodeURIComponent("fac");async function Hy(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Wo,eventId:o};if(e instanceof up){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",pI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))c[_]=T}if(e instanceof Tl){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await n._getAppCheckToken(),y=p?`#${mA}=${encodeURIComponent(p)}`:"";return`${gA(n)}?${El(f).slice(1)}${y}`}function gA({config:n}){return n.emulator?ip(n,pA):`https://${n.authDomain}/${dA}`}/**
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
 */const qf="webStorageSupport";class yA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=z1,this._overrideRedirectResult=F1}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Hy(e,t,i,dd(),o);return hA(e,c,cp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Hy(e,t,i,dd(),o);return E1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await sA(e),i=new $1(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qf,{type:qf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[qf];c!==void 0&&t(!!c),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=K1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q_()||j_()||ap()}}const vA=yA;var Wy="@firebase/auth",qy="1.8.2";/**
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
 */class _A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wA(n){Do(new Es("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(n)},y=new XS(i,o,l,p);return r1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Do(new Es("auth-internal",e=>{const t=jc(e.getProvider("auth").getImmediate());return(i=>new _A(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ci(Wy,qy,EA(n)),Ci(Wy,qy,"esm2017")}/**
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
 */const TA=300,IA=S_("authIdTokenMaxAge")||TA;let Gy=null;const SA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>IA)return;const o=t==null?void 0:t.token;Gy!==o&&(Gy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function AA(n=R_()){const e=ep(n,"auth");if(e.isInitialized())return e.getImmediate();const t=n1(n,{popupRedirectResolver:vA,persistence:[C1,y1,e0]}),i=S_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=SA(l.toString());f1(t,c,()=>c(t.currentUser)),h1(t,f=>c(f))}}const o=T_("auth");return o&&i1(t,`http://${o}`),t}function PA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}JS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Hn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",PA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wA("Browser");var Ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,l0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function P(){}P.prototype=S.prototype,x.D=S.prototype,x.prototype=new P,x.prototype.constructor=x,x.C=function(C,O,V){for(var k=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)k[ot-2]=arguments[ot];return S.prototype[O].apply(C,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,P){P||(P=0);var C=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)C[O]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(O=0;16>O;++O)C[O]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=x.g[0],P=x.g[1],O=x.g[2];var V=x.g[3],k=S+(V^P&(O^V))+C[0]+3614090360&4294967295;S=P+(k<<7&4294967295|k>>>25),k=V+(O^S&(P^O))+C[1]+3905402710&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(P^V&(S^P))+C[2]+606105819&4294967295,O=V+(k<<17&4294967295|k>>>15),k=P+(S^O&(V^S))+C[3]+3250441966&4294967295,P=O+(k<<22&4294967295|k>>>10),k=S+(V^P&(O^V))+C[4]+4118548399&4294967295,S=P+(k<<7&4294967295|k>>>25),k=V+(O^S&(P^O))+C[5]+1200080426&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(P^V&(S^P))+C[6]+2821735955&4294967295,O=V+(k<<17&4294967295|k>>>15),k=P+(S^O&(V^S))+C[7]+4249261313&4294967295,P=O+(k<<22&4294967295|k>>>10),k=S+(V^P&(O^V))+C[8]+1770035416&4294967295,S=P+(k<<7&4294967295|k>>>25),k=V+(O^S&(P^O))+C[9]+2336552879&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(P^V&(S^P))+C[10]+4294925233&4294967295,O=V+(k<<17&4294967295|k>>>15),k=P+(S^O&(V^S))+C[11]+2304563134&4294967295,P=O+(k<<22&4294967295|k>>>10),k=S+(V^P&(O^V))+C[12]+1804603682&4294967295,S=P+(k<<7&4294967295|k>>>25),k=V+(O^S&(P^O))+C[13]+4254626195&4294967295,V=S+(k<<12&4294967295|k>>>20),k=O+(P^V&(S^P))+C[14]+2792965006&4294967295,O=V+(k<<17&4294967295|k>>>15),k=P+(S^O&(V^S))+C[15]+1236535329&4294967295,P=O+(k<<22&4294967295|k>>>10),k=S+(O^V&(P^O))+C[1]+4129170786&4294967295,S=P+(k<<5&4294967295|k>>>27),k=V+(P^O&(S^P))+C[6]+3225465664&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^P&(V^S))+C[11]+643717713&4294967295,O=V+(k<<14&4294967295|k>>>18),k=P+(V^S&(O^V))+C[0]+3921069994&4294967295,P=O+(k<<20&4294967295|k>>>12),k=S+(O^V&(P^O))+C[5]+3593408605&4294967295,S=P+(k<<5&4294967295|k>>>27),k=V+(P^O&(S^P))+C[10]+38016083&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^P&(V^S))+C[15]+3634488961&4294967295,O=V+(k<<14&4294967295|k>>>18),k=P+(V^S&(O^V))+C[4]+3889429448&4294967295,P=O+(k<<20&4294967295|k>>>12),k=S+(O^V&(P^O))+C[9]+568446438&4294967295,S=P+(k<<5&4294967295|k>>>27),k=V+(P^O&(S^P))+C[14]+3275163606&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^P&(V^S))+C[3]+4107603335&4294967295,O=V+(k<<14&4294967295|k>>>18),k=P+(V^S&(O^V))+C[8]+1163531501&4294967295,P=O+(k<<20&4294967295|k>>>12),k=S+(O^V&(P^O))+C[13]+2850285829&4294967295,S=P+(k<<5&4294967295|k>>>27),k=V+(P^O&(S^P))+C[2]+4243563512&4294967295,V=S+(k<<9&4294967295|k>>>23),k=O+(S^P&(V^S))+C[7]+1735328473&4294967295,O=V+(k<<14&4294967295|k>>>18),k=P+(V^S&(O^V))+C[12]+2368359562&4294967295,P=O+(k<<20&4294967295|k>>>12),k=S+(P^O^V)+C[5]+4294588738&4294967295,S=P+(k<<4&4294967295|k>>>28),k=V+(S^P^O)+C[8]+2272392833&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^P)+C[11]+1839030562&4294967295,O=V+(k<<16&4294967295|k>>>16),k=P+(O^V^S)+C[14]+4259657740&4294967295,P=O+(k<<23&4294967295|k>>>9),k=S+(P^O^V)+C[1]+2763975236&4294967295,S=P+(k<<4&4294967295|k>>>28),k=V+(S^P^O)+C[4]+1272893353&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^P)+C[7]+4139469664&4294967295,O=V+(k<<16&4294967295|k>>>16),k=P+(O^V^S)+C[10]+3200236656&4294967295,P=O+(k<<23&4294967295|k>>>9),k=S+(P^O^V)+C[13]+681279174&4294967295,S=P+(k<<4&4294967295|k>>>28),k=V+(S^P^O)+C[0]+3936430074&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^P)+C[3]+3572445317&4294967295,O=V+(k<<16&4294967295|k>>>16),k=P+(O^V^S)+C[6]+76029189&4294967295,P=O+(k<<23&4294967295|k>>>9),k=S+(P^O^V)+C[9]+3654602809&4294967295,S=P+(k<<4&4294967295|k>>>28),k=V+(S^P^O)+C[12]+3873151461&4294967295,V=S+(k<<11&4294967295|k>>>21),k=O+(V^S^P)+C[15]+530742520&4294967295,O=V+(k<<16&4294967295|k>>>16),k=P+(O^V^S)+C[2]+3299628645&4294967295,P=O+(k<<23&4294967295|k>>>9),k=S+(O^(P|~V))+C[0]+4096336452&4294967295,S=P+(k<<6&4294967295|k>>>26),k=V+(P^(S|~O))+C[7]+1126891415&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~P))+C[14]+2878612391&4294967295,O=V+(k<<15&4294967295|k>>>17),k=P+(V^(O|~S))+C[5]+4237533241&4294967295,P=O+(k<<21&4294967295|k>>>11),k=S+(O^(P|~V))+C[12]+1700485571&4294967295,S=P+(k<<6&4294967295|k>>>26),k=V+(P^(S|~O))+C[3]+2399980690&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~P))+C[10]+4293915773&4294967295,O=V+(k<<15&4294967295|k>>>17),k=P+(V^(O|~S))+C[1]+2240044497&4294967295,P=O+(k<<21&4294967295|k>>>11),k=S+(O^(P|~V))+C[8]+1873313359&4294967295,S=P+(k<<6&4294967295|k>>>26),k=V+(P^(S|~O))+C[15]+4264355552&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~P))+C[6]+2734768916&4294967295,O=V+(k<<15&4294967295|k>>>17),k=P+(V^(O|~S))+C[13]+1309151649&4294967295,P=O+(k<<21&4294967295|k>>>11),k=S+(O^(P|~V))+C[4]+4149444226&4294967295,S=P+(k<<6&4294967295|k>>>26),k=V+(P^(S|~O))+C[11]+3174756917&4294967295,V=S+(k<<10&4294967295|k>>>22),k=O+(S^(V|~P))+C[2]+718787259&4294967295,O=V+(k<<15&4294967295|k>>>17),k=P+(V^(O|~S))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+V&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var P=S-this.blockSize,C=this.B,O=this.h,V=0;V<S;){if(O==0)for(;V<=P;)o(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<S;)if(C[O++]=x.charCodeAt(V++),O==this.blockSize){o(this,C),O=0;break}}else for(;V<S;)if(C[O++]=x[V++],O==this.blockSize){o(this,C),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var P=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=P&255,P/=256;for(this.u(x),x=Array(16),S=P=0;4>S;++S)for(var C=0;32>C;C+=8)x[P++]=this.g[S]>>>C&255;return x};function l(x,S){var P=f;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=S(x)}function c(x,S){this.h=S;for(var P=[],C=!0,O=x.length-1;0<=O;O--){var V=x[O]|0;C&&V==S||(P[O]=V,C=!1)}this.g=P}var f={};function p(x){return-128<=x&&128>x?l(x,function(S){return new c([S|0],0>S?-1:0)}):new c([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return M(y(-x));for(var S=[],P=1,C=0;x>=P;C++)S[C]=x/P|0,P*=4294967296;return new c(S,0)}function _(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return M(_(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(S,8)),C=T,O=0;O<x.length;O+=8){var V=Math.min(8,x.length-O),k=parseInt(x.substring(O,O+V),S);8>V?(V=y(Math.pow(S,V)),C=C.j(V).add(y(k))):(C=C.j(P),C=C.add(y(k)))}return C}var T=p(0),I=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(W(this))return-M(this).m();for(var x=0,S=1,P=0;P<this.g.length;P++){var C=this.i(P);x+=(0<=C?C:4294967296+C)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(z(this))return"0";if(W(this))return"-"+M(this).toString(x);for(var S=y(Math.pow(x,6)),P=this,C="";;){var O=le(P,S).g;P=Q(P,O.j(S));var V=((0<P.g.length?P.g[0]:P.h)>>>0).toString(x);if(P=O,z(P))return V+C;for(;6>V.length;)V="0"+V;C=V+C}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function z(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function W(x){return x.h==-1}n.l=function(x){return x=Q(this,x),W(x)?-1:z(x)?0:1};function M(x){for(var S=x.g.length,P=[],C=0;C<S;C++)P[C]=~x.g[C];return new c(P,~x.h).add(I)}n.abs=function(){return W(this)?M(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],C=0,O=0;O<=S;O++){var V=C+(this.i(O)&65535)+(x.i(O)&65535),k=(V>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);C=k>>>16,V&=65535,k&=65535,P[O]=k<<16|V}return new c(P,P[P.length-1]&-2147483648?-1:0)};function Q(x,S){return x.add(M(S))}n.j=function(x){if(z(this)||z(x))return T;if(W(this))return W(x)?M(this).j(M(x)):M(M(this).j(x));if(W(x))return M(this.j(M(x)));if(0>this.l(N)&&0>x.l(N))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,P=[],C=0;C<2*S;C++)P[C]=0;for(C=0;C<this.g.length;C++)for(var O=0;O<x.g.length;O++){var V=this.i(C)>>>16,k=this.i(C)&65535,ot=x.i(O)>>>16,Dt=x.i(O)&65535;P[2*C+2*O]+=k*Dt,J(P,2*C+2*O),P[2*C+2*O+1]+=V*Dt,J(P,2*C+2*O+1),P[2*C+2*O+1]+=k*ot,J(P,2*C+2*O+1),P[2*C+2*O+2]+=V*ot,J(P,2*C+2*O+2)}for(C=0;C<S;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=S;C<2*S;C++)P[C]=0;return new c(P,0)};function J(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function K(x,S){this.g=x,this.h=S}function le(x,S){if(z(S))throw Error("division by zero");if(z(x))return new K(T,T);if(W(x))return S=le(M(x),S),new K(M(S.g),M(S.h));if(W(S))return S=le(x,M(S)),new K(M(S.g),S.h);if(30<x.g.length){if(W(x)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var P=I,C=S;0>=C.l(x);)P=Ee(P),C=Ee(C);var O=Te(P,1),V=Te(C,1);for(C=Te(C,2),P=Te(P,2);!z(C);){var k=V.add(C);0>=k.l(x)&&(O=O.add(P),V=k),C=Te(C,1),P=Te(P,1)}return S=Q(x,O.j(S)),new K(O,S)}for(O=T;0<=x.l(S);){for(P=Math.max(1,Math.floor(x.m()/S.m())),C=Math.ceil(Math.log(P)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),V=y(P),k=V.j(S);W(k)||0<k.l(x);)P-=C,V=y(P),k=V.j(S);z(V)&&(V=I),O=O.add(V),x=Q(x,k)}return new K(O,x)}n.A=function(x){return le(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],C=0;C<S;C++)P[C]=this.i(C)&x.i(C);return new c(P,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],C=0;C<S;C++)P[C]=this.i(C)|x.i(C);return new c(P,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],C=0;C<S;C++)P[C]=this.i(C)^x.i(C);return new c(P,this.h^x.h)};function Ee(x){for(var S=x.g.length+1,P=[],C=0;C<S;C++)P[C]=x.i(C)<<1|x.i(C-1)>>>31;return new c(P,x.h)}function Te(x,S){var P=S>>5;S%=32;for(var C=x.g.length-P,O=[],V=0;V<C;V++)O[V]=0<S?x.i(V+P)>>>S|x.i(V+P+1)<<32-S:x.i(V+P);return new c(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,xi=c}).apply(typeof Ky<"u"?Ky:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u0,Ya,c0,lc,gd,h0,f0,d0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in v))break e;v=v[F]}u=u[u.length-1],w=v[u],m=m(w),m!=w&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,w=!1,F={next:function(){if(!w&&v<u.length){var H=v++;return{value:m(H,u[H]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,I.apply(null,arguments)}function N(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function z(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(w,F,H){for(var re=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)re[$e-2]=arguments[$e];return m.prototype[F].apply(w,re)}}function W(u){const m=u.length;if(0<m){const v=Array(m);for(let w=0;w<m;w++)v[w]=u[w];return v}return[]}function M(u,m){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const F=u.length||0,H=w.length||0;u.length=F+H;for(let re=0;re<H;re++)u[F+re]=w[re]}else u.push(w)}}class Q{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var Ee=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function Te(u,m,v){for(const w in u)m.call(v,u[w],w,u)}function x(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,m){let v,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(v in w)u[v]=w[v];for(let H=0;H<P.length;H++)v=P[H],Object.prototype.hasOwnProperty.call(w,v)&&(u[v]=w[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function V(u){f.setTimeout(()=>{throw u},0)}function k(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ot{constructor(){this.h=this.g=null}add(m,v){const w=Dt.get();w.set(m,v),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new Q(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ie=!1,me=new ot,oe=()=>{const u=f.Promise.resolve(void 0);He=()=>{u.then(L)}};var L=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(v){V(v)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ke=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return u})();function Re(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ee){e:{try{le(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}z(Re,pe);var Le={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),ze=0;function qe(u,m,v,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!w,this.ha=F,this.key=++ze,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,m,v,w,F){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var re=Yr(u,m,w,F);return-1<re?(m=u[re],v||(m.fa=!1)):(m=new qe(m,this.src,H,!!w,F),m.fa=v,u.push(m)),m};function Cs(u,m){var v=m.type;if(v in u.g){var w=u.g[v],F=Array.prototype.indexOf.call(w,m,void 0),H;(H=0<=F)&&Array.prototype.splice.call(w,F,1),H&&(wt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Yr(u,m,v,w){for(var F=0;F<u.length;++F){var H=u[F];if(!H.da&&H.listener==m&&H.capture==!!v&&H.ha==w)return F}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),xs={};function ea(u,m,v,w,F){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ea(u,m[H],v,w,F);return null}return v=ra(v),u&&u[je]?u.K(m,v,y(w)?!!w.capture:!1,F):ta(u,m,v,!1,w,F)}function ta(u,m,v,w,F,H){if(!m)throw Error("Invalid event type");var re=y(F)?!!F.capture:!!F,$e=bs(u);if($e||(u[ji]=$e=new mr(u)),v=$e.add(m,v,w,re,H),v.proxy)return v;if(w=Ol(),v.proxy=w,w.src=u,w.listener=v,u.addEventListener)ke||(F=re),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(yr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ol(){function u(v){return m.call(u.src,u.listener,v)}const m=na;return u}function Ns(u,m,v,w,F){if(Array.isArray(m))for(var H=0;H<m.length;H++)Ns(u,m[H],v,w,F);else w=y(w)?!!w.capture:!!w,v=ra(v),u&&u[je]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],v=Yr(H,v,w,F),-1<v&&(wt(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Yr(m,v,w,F)),(v=-1<u?m[u]:null)&&gr(v))}function gr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[je])Cs(m.i,u);else{var v=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(v,w,u.capture):m.detachEvent?m.detachEvent(yr(v),w):m.addListener&&m.removeListener&&m.removeListener(w),(v=bs(m))?(Cs(v,u),v.h==0&&(v.src=null,m[ji]=null)):wt(u)}}}function yr(u){return u in xs?xs[u]:xs[u]="on"+u}function na(u,m){if(u.da)u=!0;else{m=new Re(m,this);var v=u.listener,w=u.ha||u.src;u.fa&&gr(u),u=v.call(w,m)}return u}function bs(u){return u=u[ji],u instanceof mr?u:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(u){return typeof u=="function"?u:(u[Os]||(u[Os]=function(m){return u.handleEvent(m)}),u[Os])}function dt(){G.call(this),this.i=new mr(this),this.M=this,this.F=null}z(dt,G),dt.prototype[je]=!0,dt.prototype.removeEventListener=function(u,m,v,w){Ns(this,u,m,v,w)};function pt(u,m){var v,w=u.F;if(w)for(v=[];w;w=w.F)v.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(w,u),C(m,F)}if(F=!0,v)for(var H=v.length-1;0<=H;H--){var re=m.g=v[H];F=vr(re,w,!0,m)&&F}if(re=m.g=u,F=vr(re,w,!0,m)&&F,F=vr(re,w,!1,m)&&F,v)for(H=0;H<v.length;H++)re=m.g=v[H],F=vr(re,w,!1,m)&&F}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],w=0;w<v.length;w++)wt(v[w]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,v,w){return this.i.add(String(u),m,!1,v,w)},dt.prototype.L=function(u,m,v,w){return this.i.add(String(u),m,!0,v,w)};function vr(u,m,v,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,H=0;H<m.length;++H){var re=m[H];if(re&&!re.da&&re.capture==v){var $e=re.listener,mt=re.ha||re.src;re.fa&&Cs(u.i,re),F=$e.call(mt,w)!==!1&&F}}return F&&!w.defaultPrevented}function ia(u,m,v){if(typeof u=="function")v&&(u=I(u,v));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Xr(u){u.g=ia(()=>{u.g=null,u.i&&(u.i=!1,Xr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class zi extends G{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Xr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(u){G.call(this),this.h=u,this.g={}}z(Bi,G);var sa=[];function oa(u){Te(u.g,function(m,v){this.g.hasOwnProperty(v)&&gr(m)},u),u.g={}}Bi.prototype.N=function(){Bi.aa.N.call(this),oa(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=f.JSON.stringify,la=f.JSON.parse,ua=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function $i(){}$i.prototype.h=null;function Ds(u){return u.h||(u.h=u.i())}function Ls(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){pe.call(this,"d")}z(Wn,pe);function Ms(){pe.call(this,"c")}z(Ms,pe);var qn={},ca=null;function Hi(){return ca=ca||new dt}qn.La="serverreachability";function ha(u){pe.call(this,qn.La,u)}z(ha,pe);function _r(u){const m=Hi();pt(m,new ha(m))}qn.STAT_EVENT="statevent";function fa(u,m){pe.call(this,qn.STAT_EVENT,u),this.stat=m}z(fa,pe);function at(u){const m=Hi();pt(m,new fa(m,u))}qn.Ma="timingevent";function Vs(u,m){pe.call(this,qn.Ma,u),this.size=m}z(Vs,pe);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function qi(u,m,v,w,F,H){u.info(function(){if(u.g)if(H)for(var re="",$e=H.split("&"),mt=0;mt<$e.length;mt++){var Me=$e[mt].split("=");if(1<Me.length){var Tt=Me[0];Me=Me[1];var ct=Tt.split("_");re=2<=ct.length&&ct[1]=="type"?re+(Tt+"="+Me+"&"):re+(Tt+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+v+`
`+re})}function Fs(u,m,v,w,F,H,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+v+`
`+H+" "+re})}function Cn(u,m,v,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+lh(u,v)+(w?" "+w:"")})}function da(u,m){u.info(function(){return"TIMEOUT: "+m})}Wi.prototype.info=function(){};function lh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var w=v[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var H=F[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return aa(v)}catch{return m}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function Gi(){}z(Gi,$i),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},xn=new Gi;function Nn(u,m,v,w){this.j=u,this.i=m,this.l=v,this.R=w||1,this.U=new Bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var pa={},js={};function zs(u,m,v){u.L=1,u.v=ni(on(m)),u.m=v,u.P=!0,ma(u,null)}function ma(u,m){u.F=Date.now(),Ge(u),u.A=on(u.v);var v=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ii(v.i,"t",w),u.C=0,v=u.j.J,u.h=new Ll,u.g=Zl(u.j,v?m:null,!u.m),0<u.O&&(u.M=new zi(I(u.Y,u,u.g),u.O)),m=u.U,v=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(sa[0]=F.toString()),F=sa);for(var H=0;H<F.length;H++){var re=ea(v,F[H],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),qi(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Yt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||ct!=4||m==7||(m==8||0>=yn?_r(3):_r(2)),Ki(this);var v=this.g.Z();this.X=v;t:if(Ml(this)){var w=wa(this.g);u="";var F=w.length,H=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Jr(this);var re="";break t}this.h.i=new f.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(H&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Fs(this.i,this.u,this.A,this.l,this.R,ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,mt=this.g;if(($e=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J($e)){var Me=$e;break t}}Me=null}if(v=Me)Cn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,v);else{this.o=!1,this.s=3,at(12),mn(this),Jr(this);break e}}if(this.P){v=!0;let ln;for(;!this.J&&this.C<re.length;)if(ln=uh(this,re),ln==js){ct==4&&(this.s=4,at(14),v=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==pa){this.s=4,at(15),Cn(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Cn(this.i,this.l,ln,null),ga(this,ln);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||re.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)Cn(this.i,this.l,re,"[Invalid Chunked Response]"),mn(this),Jr(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Ia(Tt),Tt.M=!0,at(11))}}else Cn(this.i,this.l,re,null),ga(this,re);ct==4&&mn(this),this.o&&!this.J&&(ct==4?Js(this.j,this):(this.o=!1,Ge(this)))}else Gs(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),mn(this),Jr(this)}}}catch{}finally{}};function Ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function uh(u,m){var v=u.C,w=m.indexOf(`
`,v);return w==-1?js:(v=Number(m.substring(v,w)),isNaN(v)?pa:(w+=1,w+v>m.length?js:(m=m.slice(w,w+v),u.C=w+v,m)))}Nn.prototype.cancel=function(){this.J=!0,mn(this)};function Ge(u){u.S=Date.now()+u.I,Vl(u,u.I)}function Vl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(I(u.ba,u),m)}function Ki(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(da(this.i,this.A),this.L!=2&&(_r(),at(17)),mn(this),this.s=2,Jr(this)):Vl(this,this.S-u)};function Jr(u){u.j.G==0||u.J||Js(u.j,u)}function mn(u){Ki(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,oa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ga(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Wt(v.h,u))){if(!u.K&&Wt(v.h,u)&&v.G==3){try{var w=v.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Xs(v),Mn(v);else break e;Ys(v),at(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Rn(I(v.Za,v),6e3));if(1>=Ul(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Sr(v,11)}else if((u.K||v.g==u)&&Xs(v),!J(m))for(F=v.Da.g.parse(m),m=0;m<F.length;m++){let Me=F[m];if(v.T=Me[0],Me=Me[1],v.G==2)if(Me[0]=="c"){v.K=Me[1],v.ia=Me[2];const Tt=Me[3];Tt!=null&&(v.la=Tt,v.j.info("VER="+v.la));const ct=Me[4];ct!=null&&(v.Aa=ct,v.j.info("SVER="+v.Aa));const yn=Me[5];yn!=null&&typeof yn=="number"&&0<yn&&(w=1.5*yn,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const ln=u.g;if(ln){const ts=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var H=w.h;H.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ya(H,H.h),H.h=null))}if(w.D){const eo=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(w.ya=eo,We(w.I,w.D,eo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var re=u;if(w.qa=Jl(w,w.J?w.ia:null,w.W),re.K){jl(w.h,re);var $e=re,mt=w.L;mt&&($e.I=mt),$e.B&&(Ki($e),Ge($e)),w.g=re}else es(w);0<v.i.length&&Yn(v)}else Me[0]!="stop"&&Me[0]!="close"||Sr(v,7);else v.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Sr(v,7):Rt(v):Me[0]!="noop"&&v.l&&v.l.ta(Me),v.v=0)}}_r(4)}catch{}}var Fl=class{constructor(u,m){this.g=u,this.map=m}};function Qi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ul(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ya(u,m){u.g?u.g.add(m):u.h=m}function jl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Qi.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return W(u.i)}function Bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,w=0;w<v;w++)m.push(u[w]);return m}m=[],v=0;for(w in u)m[v++]=u[w];return m}function $s(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const w in u)m[v++]=w;return m}}}function Zr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=$s(u),w=Bs(u),F=w.length,H=0;H<F;H++)m.call(void 0,w[H],v&&v[H],u)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ch(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var w=u[v].indexOf("="),F=null;if(0<=w){var H=u[v].substring(0,w);F=u[v].substring(w+1)}else H=u[v];m(H,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Er(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Er){this.h=u.h,Xi(this,u.j),this.o=u.o,this.g=u.g,ei(this,u.s),this.l=u.l;var m=u.i,v=new Gn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),ti(this,v),this.m=u.m}else u&&(m=String(u).match(Yi))?(this.h=!1,Xi(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),ei(this,m[4]),this.l=Oe(m[5]||"",!0),ti(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}Er.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ri(m,Hs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ri(m,Hs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ri(v,v.charAt(0)=="/"?Hl:$l,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ri(v,va)),u.join("")};function on(u){return new Er(u)}function Xi(u,m,v){u.j=v?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ei(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ti(u,m,v){m instanceof Gn?(u.i=m,Kn(u.i,u.h)):(v||(m=ri(m,Wl)),u.i=new Gn(m,u.h))}function We(u,m,v){u.i.set(m,v)}function ni(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ri(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Bl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Hs=/[#\/\?@]/g,$l=/[#\?:]/g,Hl=/[#\?]/g,Wl=/[#\?@]/g,va=/#/g;function Gn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&ch(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Gn.prototype,n.add=function(u,m){kt(this),this.i=null,u=gn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function bn(u,m){kt(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function On(u,m){return kt(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){kt(this),this.g.forEach(function(v,w){v.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let w=0;w<m.length;w++){const F=u[w];for(let H=0;H<F.length;H++)v.push(m[w])}return v},n.V=function(u){kt(this);let m=[];if(typeof u=="string")On(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return kt(this),this.i=null,u=gn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ii(u,m,v){bn(u,m),0<v.length&&(u.i=null,u.g.set(gn(u,m),W(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var w=m[v];const H=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var F=H;re[w]!==""&&(F+="="+encodeURIComponent(String(re[w]))),u.push(F)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Kn(u,m){m&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(v,w){var F=w.toLowerCase();w!=F&&(bn(this,w),ii(this,F,v))},u)),u.j=m}function hh(u,m){const v=new Wi;if(f.Image){const w=new Image;w.onload=N(Qt,v,"TestLoadImage: loaded",!0,m,w),w.onerror=N(Qt,v,"TestLoadImage: error",!1,m,w),w.onabort=N(Qt,v,"TestLoadImage: abort",!1,m,w),w.ontimeout=N(Qt,v,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function ql(u,m){const v=new Wi,w=new AbortController,F=setTimeout(()=>{w.abort(),Qt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(H=>{clearTimeout(F),H.ok?Qt(v,"TestPingServer: ok",!0,m):Qt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Qt(v,"TestPingServer: error",!1,m)})}function Qt(u,m,v,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(v)}catch{}}function fh(){this.g=new ua}function Gl(u,m,v){const w=v||"";try{Zr(u,function(F,H){let re=F;y(F)&&(re=aa(F)),m.push(w+H+"="+encodeURIComponent(re))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(wr,$i),wr.prototype.g=function(){return new Ji(this.l,this.j)},wr.prototype.i=(function(u){return function(){return u}})({});function Ji(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Ji,dt),n=Ji.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):Ln(this),this.readyState==3&&Kl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let m="";return Te(u,function(v,w){m+=w,m+=":",m+=v,m+=`\r
`}),m}function si(u,m,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Tr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):We(u,m,v))}function Je(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Je,dt);var dh=/^https?$/i,_a=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?Ds(this.o):Ds(xn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){Zi(this,H);return}if(u=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)v.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const H of w.keys())v.set(H,w.get(H));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),F=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(_a,m,void 0))||w||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of v)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Zi(this,H)}};function Zi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ws(u),an(u)}function Ws(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)ia(u.Ea,0,u);else if(pt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var w;if(w=re===0){var F=String(u.D).match(Yi)[1]||null;!F&&f.self&&f.self.location&&(F=f.self.location.protocol.slice(0,-1)),w=!dh.test(F?F.toLowerCase():"")}v=w}if(v)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var H=2<Yt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Ws(u)}}finally{an(u)}}}}function an(u,m){if(u.g){qs(u);const v=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{v.onreadystatechange=w}catch{}}}function qs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),la(m)}};function wa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Gs(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(J(u[w]))continue;var v=O(u[w]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=m[F]||[];m[F]=H,H.push(v)}x(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ta(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(u&&u.concurrentRequestLimit),this.Da=new fh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,w){at(0),this.W=u,this.H=m||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=Jl(this,null,this.W),Yn(this)};function Rt(u){if(Ks(u),u.G==3){var m=u.U++,v=on(u.I);if(We(v,"SID",u.K),We(v,"RID",m),We(v,"TYPE","terminate"),Ir(u,v),m=new Nn(u,u.j,m),m.L=2,m.v=ni(on(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.v,v=!0),v||(m.g=Zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}Xl(u)}function Mn(u){u.g&&(Ia(u),u.g.cancel(),u.g=null)}function Ks(u){Mn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Xs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Yn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;He||oe(),ie||(He(),ie=!0),me.add(m,u),u.B=0}}function ph(u,m){return Ul(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(I(u.Ga,u,m),Yl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Nn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),C(H,this.S)):H=this.S),this.m!==null||this.O||(F.H=H,H=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=oi(this,F,m),v=on(this.I),We(v,"RID",u),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ir(this,v),H&&(this.O?m="headers="+encodeURIComponent(String(Tr(H)))+"&"+m:this.m&&si(v,this.m,H)),ya(this.h,F),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",m),We(v,"SID","null"),F.T=!0,zs(F,v,null)):zs(F,v,m),this.G=2}}else this.G==3&&(u?Qs(this,u):this.i.length==0||sn(this.h)||Qs(this))};function Qs(u,m){var v;m?v=m.l:v=u.U++;const w=on(u.I);We(w,"SID",u.K),We(w,"RID",v),We(w,"AID",u.T),Ir(u,w),u.m&&u.o&&si(w,u.m,u.o),v=new Nn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=oi(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ya(u.h,v),zs(v,w,m)}function Ir(u,m){u.H&&Te(u.H,function(v,w){We(m,w,v)}),u.l&&Zr({},function(v,w){We(m,w,v)})}function oi(u,m,v){v=Math.min(u.i.length,v);var w=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let H=-1;for(;;){const re=["count="+v];H==-1?0<v?(H=F[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let $e=!0;for(let mt=0;mt<v;mt++){let Me=F[mt].g;const Tt=F[mt].map;if(Me-=H,0>Me)H=Math.max(0,F[mt].g-100),$e=!1;else try{Gl(Tt,re,"req"+Me+"_")}catch{w&&w(Tt)}}if($e){w=re.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,w}function es(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;He||oe(),ie||(He(),ie=!0),me.add(m,u),u.v=0}}function Ys(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(I(u.Fa,u),Yl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Mn(this),Ql(this))};function Ia(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);We(m,"RID","rpc"),We(m,"SID",u.K),We(m,"AID",u.T),We(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(m,"TO",u.ja),We(m,"TYPE","xmlhttp"),Ir(u,m),u.m&&u.o&&si(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ni(on(m)),v.m=null,v.P=!0,ma(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Mn(this),Ys(this),at(19))};function Xs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Js(u,m){var v=null;if(u.g==m){Xs(u),Ia(u),u.g=null;var w=2}else if(Wt(u.h,m))v=m.D,jl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=Hi(),pt(w,new Vs(w,v)),Yn(u)}else es(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&ph(u,m)||w==2&&Ys(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),F){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function Yl(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Sr(u,m){if(u.j.info("Error code "+m),m==2){var v=I(u.fb,u),w=u.Xa;const F=!w;w=new Er(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Xi(w,"https"),ni(w),F?hh(w.toString(),v):ql(w.toString(),v)}else at(2);u.G=0,u.l&&u.l.sa(m),Xl(u),Ks(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Xl(u){if(u.G=0,u.ka=[],u.l){const m=zl(u.h);(m.length!=0||u.i.length!=0)&&(M(u.ka,m),M(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function Jl(u,m,v){var w=v instanceof Er?on(v):new Er(v);if(w.g!="")m&&(w.g=m+"."+w.g),ei(w,w.s);else{var F=f.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var H=new Er(null);w&&Xi(H,w),m&&(H.g=m),F&&ei(H,F),v&&(H.l=v),w=H}return v=u.D,m=u.ya,v&&m&&We(w,v,m),We(w,"VER",u.la),Ir(u,w),w}function Zl(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new wr({eb:v})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zs(){}Zs.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){dt.call(this),this.g=new Ta(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xn(this)}z(qt,dt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Rt(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=aa(u),u=v);m.i.push(new Fl(m.Ya++,u)),m.G==3&&Yn(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,qt.aa.N.call(this)};function eu(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}z(eu,Wn);function tu(){Ms.call(this),this.status=1}z(tu,Ms);function Xn(u){this.g=u}z(Xn,Sa),Xn.prototype.ua=function(){pt(this.g,"a")},Xn.prototype.ta=function(u){pt(this.g,new eu(u))},Xn.prototype.sa=function(u){pt(this.g,new tu)},Xn.prototype.ra=function(){pt(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,d0=function(){return new Zs},f0=function(){return Hi()},h0=qn,gd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,lc=Us,Dl.COMPLETE="complete",c0=Dl,Ls.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ya=Ls,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,u0=Je}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore";/**
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
 */let Go="11.2.0";/**
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
 */const Ts=new Jd("@firebase/firestore");function To(){return Ts.logLevel}function ae(n,...e){if(Ts.logLevel<=Ne.DEBUG){const t=e.map(fp);Ts.debug(`Firestore (${Go}): ${n}`,...t)}}function Br(n,...e){if(Ts.logLevel<=Ne.ERROR){const t=e.map(fp);Ts.error(`Firestore (${Go}): ${n}`,...t)}}function Mo(n,...e){if(Ts.logLevel<=Ne.WARN){const t=e.map(fp);Ts.warn(`Firestore (${Go}): ${n}`,...t)}}function fp(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function Be(n,e){n||Se()}function Pe(n,e){return n}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends Gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class p0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class RA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class CA{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ni,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ni)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new p0(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new zt(e)}}class xA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class NA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new xA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string"),this.R=t.token,new bA(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class m0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=DA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Vo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ve(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new _t(0,0))}static max(){return new Ae(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(),i===void 0?i=e.length-t:i>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=nr.isNumericId(e),o=nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xi.fromString(e.substring(4,e.length-2))}}class st extends nr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const LA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends nr{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return LA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ve(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ve(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ve(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ve(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(st.fromString(e))}static fromName(e){return new _e(st.fromString(e).popFirst(5))}static empty(){return new _e(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new st(e.slice()))}}function MA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new bi(o,_e.empty(),e)}function VA(n){return new bi(n.readTime,n.key,-1)}class bi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new bi(Ae.min(),_e.empty(),-1)}static max(){return new bi(Ae.max(),_e.empty(),-1)}}function FA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
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
 */const UA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ko(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==UA)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,i)=>{t(e)}))}static reject(e){return new q(((t,i)=>{i(e)}))}static waitFor(e){return new q(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next((o=>o?q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new q(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((_=>{c[y]=_,++f,f===l&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function zA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$c.oe=-1;function Hc(n){return n==null}function Ac(n){return n===0&&1/n==-1/0}function BA(n){return typeof n=="number"&&Number.isInteger(n)&&!Ac(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function $A(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Yy(e)),e=HA(n.get(t),e);return Yy(e)}function HA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Yy(n){return n+""}/**
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
 */function Xy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function As(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function g0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}}class Xu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jy(this.data.getIterator())}getIteratorFrom(e){return new Jy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Jy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $n{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Et(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new y0("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const WA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(n){if(Be(!!n),typeof n=="string"){let e=0;const t=WA.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Di(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
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
 */function dp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wc(n){const e=n.mapValue.fields.__previous_value__;return dp(e)?Wc(e):e}function ul(n){const e=Oi(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class qA{constructor(e,t,i,o,l,c,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class cl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ju={mapValue:{}};function Li(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dp(n)?4:KA(n)?9007199254740991:GA(n)?10:11:Se()}function cr(n,e){if(n===e)return!0;const t=Li(n);if(t!==Li(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ul(n).isEqual(ul(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Oi(o.timestampValue),f=Oi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Di(o.bytesValue).isEqual(Di(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ut(o.doubleValue),f=ut(l.doubleValue);return c===f?Ac(c)===Ac(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Xy(c)!==Xy(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!cr(c[p],f[p])))return!1;return!0})(n,e);default:return Se()}}function hl(n,e){return(n.values||[]).find((t=>cr(t,e)))!==void 0}function Fo(n,e){if(n===e)return 0;const t=Li(n),i=Li(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ut(l.integerValue||l.doubleValue),p=ut(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return Zy(n.timestampValue,e.timestampValue);case 4:return Zy(ul(n),ul(e));case 5:return De(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Di(l),p=Di(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let y=0;y<f.length&&y<p.length;y++){const _=De(f[y],p[y]);if(_!==0)return _}return De(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=De(ut(l.latitude),ut(c.latitude));return f!==0?f:De(ut(l.longitude),ut(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ev(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,p,y,_;const T=l.fields||{},I=c.fields||{},N=(f=T.value)===null||f===void 0?void 0:f.arrayValue,z=(p=I.value)===null||p===void 0?void 0:p.arrayValue,W=De(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((_=z==null?void 0:z.values)===null||_===void 0?void 0:_.length)||0);return W!==0?W:ev(N,z)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Ju.mapValue&&c===Ju.mapValue)return 0;if(l===Ju.mapValue)return 1;if(c===Ju.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let T=0;T<p.length&&T<_.length;++T){const I=De(p[T],_[T]);if(I!==0)return I;const N=Fo(f[p[T]],y[_[T]]);if(N!==0)return N}return De(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Se()}}function Zy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Oi(n),i=Oi(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function ev(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Fo(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Uo(n){return yd(n)}function yd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Oi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Di(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=yd(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${yd(t.fields[c])}`;return o+"}"})(n.mapValue):Se()}function uc(n){switch(Li(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wc(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return Di(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+uc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return As(i.fields,((l,c)=>{o+=l.length+uc(c)})),o})(n.mapValue);default:throw Se()}}function vd(n){return!!n&&"integerValue"in n}function pp(n){return!!n&&"arrayValue"in n}function tv(n){return!!n&&"nullValue"in n}function nv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function GA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function tl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return As(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=tl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function KA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=tl(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){As(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Sn(tl(this.value))}}function v0(n){const e=[];return As(n.fields,((t,i)=>{const o=new bt([t]);if(cc(i)){const l=v0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new $n(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ae.min(),Ae.min(),Ae.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ae.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ae.min(),Ae.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ae.min(),Ae.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pc{constructor(e,t){this.position=e,this.inclusive=t}}function rv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(c.referenceValue),t.key):i=Fo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function iv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kc{constructor(e,t="asc"){this.field=e,this.dir=t}}function QA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class _0{}class vt extends _0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new XA(e,t,i):t==="array-contains"?new eP(e,i):t==="in"?new tP(e,i):t==="not-in"?new nP(e,i):t==="array-contains-any"?new rP(e,i):new vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new JA(e,i):new ZA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fo(t,this.value)):t!==null&&Li(this.value)===Li(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends _0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new hr(e,t)}matches(e){return E0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function E0(n){return n.op==="and"}function w0(n){return YA(n)&&E0(n)}function YA(n){for(const e of n.filters)if(e instanceof hr)return!1;return!0}function _d(n){if(n instanceof vt)return n.field.canonicalString()+n.op.toString()+Uo(n.value);if(w0(n))return n.filters.map((e=>_d(e))).join(",");{const e=n.filters.map((t=>_d(t))).join(",");return`${n.op}(${e})`}}function T0(n,e){return n instanceof vt?(function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)})(n,e):n instanceof hr?(function(i,o){return o instanceof hr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&T0(c,o.filters[f])),!0):!1})(n,e):void Se()}function I0(n){return n instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Uo(t.value)}`})(n):n instanceof hr?(function(t){return t.op.toString()+" {"+t.getFilters().map(I0).join(" ,")+"}"})(n):"Filter"}class XA extends vt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class JA extends vt{constructor(e,t){super(e,"in",t),this.keys=S0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ZA extends vt{constructor(e,t){super(e,"not-in",t),this.keys=S0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function S0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>_e.fromName(i.referenceValue)))}class eP extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pp(t)&&hl(t.arrayValue,this.value)}}class tP extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hl(this.value.arrayValue,t)}}class nP extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hl(this.value.arrayValue,t)}}class rP extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>hl(this.value.arrayValue,i)))}}/**
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
 */class iP{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.ue=null}}function sv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new iP(n,e,t,i,o,l,c)}function mp(n){const e=Pe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>_d(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Uo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Uo(i))).join(",")),e.ue=t}return e.ue}function gp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!QA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!T0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iv(n.startAt,e.startAt)&&iv(n.endAt,e.endAt)}function Ed(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class qc{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sP(n,e,t,i,o,l,c,f){return new qc(n,e,t,i,o,l,c,f)}function yp(n){return new qc(n)}function ov(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oP(n){return n.collectionGroup!==null}function nl(n){const e=Pe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Et(bt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new kc(l,i))})),t.has(bt.keyField().canonicalString())||e.ce.push(new kc(bt.keyField(),i))}return e.ce}function ar(n){const e=Pe(n);return e.le||(e.le=aP(e,nl(n))),e.le}function aP(n,e){if(n.limitType==="F")return sv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new kc(o.field,l)}));const t=n.endAt?new Pc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Pc(n.startAt.position,n.startAt.inclusive):null;return sv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function wd(n,e,t){return new qc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gc(n,e){return gp(ar(n),ar(e))&&n.limitType===e.limitType}function A0(n){return`${mp(ar(n))}|lt:${n.limitType}`}function Io(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>I0(o))).join(", ")}]`),Hc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Uo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Uo(o))).join(",")),`Target(${i})`})(ar(n))}; limitType=${n.limitType})`}function Kc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of nl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,p){const y=rv(c,f,p);return c.inclusive?y<=0:y<0})(i.startAt,nl(i),o)||i.endAt&&!(function(c,f,p){const y=rv(c,f,p);return c.inclusive?y>=0:y>0})(i.endAt,nl(i),o))})(n,e)}function lP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function P0(n){return(e,t)=>{let i=!1;for(const o of nl(n)){const l=uP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function uP(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Fo(p,y):Se()})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se()}}/**
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
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return g0(this.inner)}size(){return this.innerSize}}/**
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
 */const cP=new rt(_e.comparator);function $r(){return cP}const k0=new rt(_e.comparator);function Xa(...n){let e=k0;for(const t of n)e=e.insert(t.key,t);return e}function R0(n){let e=k0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function gs(){return rl()}function C0(){return rl()}function rl(){return new Ps((n=>n.toString()),((n,e)=>n.isEqual(e)))}const hP=new rt(_e.comparator),fP=new Et(_e.comparator);function be(...n){let e=fP;for(const t of n)e=e.add(t);return e}const dP=new Et(De);function pP(){return dP}/**
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
 */function vp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function x0(n){return{integerValue:""+n}}function mP(n,e){return BA(e)?x0(e):vp(n,e)}/**
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
 */class Qc{constructor(){this._=void 0}}function gP(n,e,t){return n instanceof Rc?(function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&dp(l)&&(l=Wc(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}})(t,e):n instanceof fl?b0(n,e):n instanceof dl?O0(n,e):(function(o,l){const c=N0(o,l),f=av(c)+av(o.Pe);return vd(c)&&vd(o.Pe)?x0(f):vp(o.serializer,f)})(n,e)}function yP(n,e,t){return n instanceof fl?b0(n,e):n instanceof dl?O0(n,e):t}function N0(n,e){return n instanceof Cc?(function(i){return vd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Rc extends Qc{}class fl extends Qc{constructor(e){super(),this.elements=e}}function b0(n,e){const t=D0(e);for(const i of n.elements)t.some((o=>cr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class dl extends Qc{constructor(e){super(),this.elements=e}}function O0(n,e){let t=D0(e);for(const i of n.elements)t=t.filter((o=>!cr(o,i)));return{arrayValue:{values:t}}}class Cc extends Qc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function av(n){return ut(n.integerValue||n.doubleValue)}function D0(n){return pp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function vP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof fl&&o instanceof fl||i instanceof dl&&o instanceof dl?Vo(i.elements,o.elements,cr):i instanceof Cc&&o instanceof Cc?cr(i.Pe,o.Pe):i instanceof Rc&&o instanceof Rc})(n.transform,e.transform)}class _P{constructor(e,t){this.version=e,this.transformResults=t}}class Fr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fr}static exists(e){return new Fr(void 0,e)}static updateTime(e){return new Fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yc{}function L0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new V0(n.key,Fr.none()):new Sl(n.key,n.data,Fr.none());{const t=n.data,i=Sn.empty();let o=new Et(bt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new ks(n.key,i,new $n(o.toArray()),Fr.none())}}function EP(n,e,t){n instanceof Sl?(function(o,l,c){const f=o.value.clone(),p=uv(o.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ks?(function(o,l,c){if(!hc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=uv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(M0(o)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function il(n,e,t,i){return n instanceof Sl?(function(l,c,f,p){if(!hc(l.precondition,c))return f;const y=l.value.clone(),_=cv(l.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof ks?(function(l,c,f,p){if(!hc(l.precondition,c))return f;const y=cv(l.fieldTransforms,p,c),_=c.data;return _.setAll(M0(l)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,f){return hc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function wP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=N0(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function lv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,((l,c)=>vP(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Sl extends Yc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ks extends Yc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function M0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function uv(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,yP(c,f,t[o]))}return i}function cv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,gP(l,c,e))}return i}class V0 extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TP extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&EP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=C0();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const p=L0(c,f);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,((t,i)=>lv(t,i)))&&Vo(this.baseMutations,e.baseMutations,((t,i)=>lv(t,i)))}}class _p{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=(function(){return hP})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new _p(e,t,i,o)}}/**
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
 */class SP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Ve;function PP(n){switch(n){default:return Se();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function F0(n){if(n===void 0)return Br("GRPC error has no .code"),ee.UNKNOWN;switch(n){case ft.OK:return ee.OK;case ft.CANCELLED:return ee.CANCELLED;case ft.UNKNOWN:return ee.UNKNOWN;case ft.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ft.INTERNAL:return ee.INTERNAL;case ft.UNAVAILABLE:return ee.UNAVAILABLE;case ft.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ft.NOT_FOUND:return ee.NOT_FOUND;case ft.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ft.ABORTED:return ee.ABORTED;case ft.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ft.DATA_LOSS:return ee.DATA_LOSS;default:return Se()}}(Ve=ft||(ft={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kP(){return new TextEncoder}/**
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
 */const RP=new xi([4294967295,4294967295],0);function hv(n){const e=kP().encode(n),t=new l0;return t.update(e),new Uint8Array(t.digest())}function fv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new xi([t,i],0),new xi([o,l],0)]}class Ep{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=xi.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(xi.fromNumber(i)));return o.compare(RP)===1&&(o=new xi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=hv(e),[i,o]=fv(t);for(let l=0;l<this.hashCount;l++){const c=this.de(i,o,l);if(!this.Ee(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Ep(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.Te===0)return;const t=hv(e),[i,o]=fv(t);for(let l=0;l<this.hashCount;l++){const c=this.de(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Xc(Ae.min(),o,new rt(De),$r(),be())}}class Al{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Al(i,t,be(),be(),be())}}/**
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
 */class fc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class U0{constructor(e,t){this.targetId=e,this.me=t}}class j0{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class dv{constructor(){this.fe=0,this.ge=pv(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),i=be();return this.ge.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se()}})),new Al(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=pv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CP{constructor(e){this.Be=e,this.Le=new Map,this.ke=$r(),this.qe=Zu(),this.Qe=Zu(),this.Ke=new rt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,(t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Se()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach(((i,o)=>{this.je(o)&&t(o)}))}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Ed(l))if(i===0){const c=new _e(l.path);this.We(t,c,Bt.newNoDocument(c,Ae.min()))}else Be(i===1);else{const c=this.Ze(t);if(c!==i){const f=this.Xe(e),p=f?this.et(f,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Di(i).toUint8Array()}catch(p){if(p instanceof y0)return Mo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Ep(c,o,l)}catch(p){return Mo(p instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Be.nt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)})),o}it(e){const t=new Map;this.Le.forEach(((l,c)=>{const f=this.Ye(c);if(f){if(l.current&&Ed(f.target)){const p=new _e(f.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,Bt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}}));let i=be();this.Qe.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ke.forEach(((l,c)=>c.setReadTime(e)));const o=new Xc(e,t,this.Ke,this.ke,i);return this.ke=$r(),this.qe=Zu(),this.Qe=Zu(),this.Ke=new rt(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new dv,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new dv),this.Be.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Zu(){return new rt(_e.comparator)}function pv(){return new rt(_e.comparator)}const xP={asc:"ASCENDING",desc:"DESCENDING"},NP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bP={and:"AND",or:"OR"};class OP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Td(n,e){return n.useProto3Json||Hc(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function DP(n,e){return xc(n,e.toTimestamp())}function lr(n){return Be(!!n),Ae.fromTimestamp((function(t){const i=Oi(t);return new _t(i.seconds,i.nanos)})(n))}function wp(n,e){return Id(n,e).canonicalString()}function Id(n,e){const t=(function(o){return new st(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function B0(n){const e=st.fromString(n);return Be(G0(e)),e}function Sd(n,e){return wp(n.databaseId,e.path)}function Gf(n,e){const t=B0(e);if(t.get(1)!==n.databaseId.projectId)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(H0(t))}function $0(n,e){return wp(n.databaseId,e)}function LP(n){const e=B0(n);return e.length===4?st.emptyPath():H0(e)}function Ad(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function H0(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mv(n,e,t){return{name:Sd(n,e),fields:t.value.mapValue.fields}}function MP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(Be(_===void 0||typeof _=="string"),Ot.fromBase64String(_||"")):(Be(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Ot.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const _=y.code===void 0?ee.UNKNOWN:F0(y.code);return new ve(_,y.message||"")})(c);t=new j0(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Gf(n,i.document.name),l=lr(i.document.updateTime),c=i.document.createTime?lr(i.document.createTime):Ae.min(),f=new Sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,c,f),y=i.targetIds||[],_=i.removedTargetIds||[];t=new fc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Gf(n,i.document),l=i.readTime?lr(i.readTime):Ae.min(),c=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new fc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Gf(n,i.document),l=i.removedTargetIds||[];t=new fc([],l,o,null)}else{if(!("filter"in e))return Se();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new AP(o,l),f=i.targetId;t=new U0(f,c)}}return t}function VP(n,e){let t;if(e instanceof Sl)t={update:mv(n,e.key,e.value)};else if(e instanceof V0)t={delete:Sd(n,e.key)};else if(e instanceof ks)t={update:mv(n,e.key,e.data),updateMask:qP(e.fieldMask)};else{if(!(e instanceof TP))return Se();t={verify:Sd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Rc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof fl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof dl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Cc)return{fieldPath:c.field.canonicalString(),increment:f.Pe};throw Se()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:DP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se()})(n,e.precondition)),t}function FP(n,e){return n&&n.length>0?(Be(e!==void 0),n.map((t=>(function(o,l){let c=o.updateTime?lr(o.updateTime):lr(l);return c.isEqual(Ae.min())&&(c=lr(l)),new _P(c,o.transformResults||[])})(t,e)))):[]}function UP(n,e){return{documents:[$0(n,e.path)]}}function jP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=$0(n,o);const l=(function(y){if(y.length!==0)return q0(hr.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((_=>(function(I){return{field:So(I.field),direction:$P(I.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Td(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ct:t,parent:o}}function zP(n){let e=LP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(T){const I=W0(T);return I instanceof hr&&w0(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((I=>(function(z){return new kc(Ao(z.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Hc(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(T){const I=!!T.before,N=T.values||[];return new Pc(N,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,N=T.values||[];return new Pc(N,I)})(t.endAt)),sP(e,o,c,l,f,"F",p,y)}function BP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function W0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ao(t.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ao(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ao(t.unaryFilter.field);return vt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Se()}})(n):n.fieldFilter!==void 0?(function(t){return vt.create(Ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return hr.create(t.compositeFilter.filters.map((i=>W0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se()}})(t.compositeFilter.op))})(n):Se()}function $P(n){return xP[n]}function HP(n){return NP[n]}function WP(n){return bP[n]}function So(n){return{fieldPath:n.canonicalString()}}function Ao(n){return bt.fromServerFormat(n.fieldPath)}function q0(n){return n instanceof vt?(function(t){if(t.op==="=="){if(nv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(tv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(tv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:HP(t.op),value:t.value}}})(n):n instanceof hr?(function(t){const i=t.getFilters().map((o=>q0(o)));return i.length===1?i[0]:{compositeFilter:{op:WP(t.op),filters:i}}})(n):Se()}function qP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function G0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pi{constructor(e,t,i,o,l=Ae.min(),c=Ae.min(),f=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GP{constructor(e){this.ht=e}}function KP(n){const e=zP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class QP{constructor(){this.ln=new YP}addToCollectionParentIndex(e,t){return this.ln.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(bi.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class YP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(st.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(st.comparator)).toArray()}}/**
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
 */const gv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */function yv([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class XP{constructor(e){this.Gn=e,this.buffer=new Et(yv),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();yv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.Yn(3e5)}))}}class ZP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return q.resolve($c.oe);const i=new XP(t);return this.Zn.forEachTarget(e,(o=>i.Hn(o.sequenceNumber))).next((()=>this.Zn.er(e,(o=>i.Hn(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(gv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gv):this.tr(e,t)))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,c,f,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),To()<=Ne.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function ek(n,e){return new ZP(n,e)}/**
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
 */class tk{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class rk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&il(i.mutation,o,$n.empty(),_t.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=gs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Xa();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=gs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=$r();const c=rl(),f=(function(){return rl()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof ks)?l=l.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),il(_.mutation,y,_.mutation.getFieldMask(),_t.now())):c.set(y.key,$n.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,_)=>c.set(y,_))),t.forEach(((y,_)=>{var T;return f.set(y,new nk(_,(T=c.get(y))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=rl();let o=new rt(((c,f)=>c-f)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||$n.empty();_=f.applyToLocalView(y,_),i.set(p,_);const T=(o.get(f.batchId)||be()).add(p);o=o.insert(f.batchId,T)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,_=p.value,T=C0();_.forEach((I=>{if(!l.has(I)){const N=L0(t.get(I),i.get(I));N!==null&&T.set(I,N),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return q.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oP(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(gs());let f=-1,p=l;return c.next((y=>q.forEach(y,((_,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(_)?q.resolve():this.remoteDocumentCache.getEntry(e,_).next((I=>{p=p.insert(_,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,be()))).next((_=>({batchId:f,changes:R0(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Xa();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(p=>{const y=(function(T,I){return new qc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((T,I)=>{c=c.insert(T,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,Bt.newInvalidDocument(_)))}));let f=Xa();return c.forEach(((p,y)=>{const _=l.get(p);_!==void 0&&il(_.mutation,y,$n.empty(),_t.now()),Kc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
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
 */class ik{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,(function(o){return{name:o.name,query:KP(o.bundledQuery),readTime:lr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class sk{constructor(){this.overlays=new rt(_e.comparator),this.dr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=gs();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.Tt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.dr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=gs(),l=t.length+1,c=new _e(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt(((y,_)=>y-_));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=gs(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const f=gs(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>f.set(y,_))),!(f.size()>=o)););return q.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new SP(t,i));let l=this.dr.get(t);l===void 0&&(l=be(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
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
 */class ok{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class Tp{constructor(){this.Er=new Et(Pt.Ar),this.Rr=new Et(Pt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new Pt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.gr(new Pt(e,t))}pr(e,t){e.forEach((i=>this.removeReference(i,t)))}yr(e){const t=new _e(new st([])),i=new Pt(t,e),o=new Pt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],(c=>{this.gr(c),l.push(c.key)})),l}wr(){this.Er.forEach((e=>this.gr(e)))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new _e(new st([])),i=new Pt(t,e),o=new Pt(t,e+1);let l=be();return this.Rr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Pt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return _e.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||_e.comparator(e.key,t.key)}}/**
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
 */class ak{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(Pt.Ar)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new IP(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.vr=this.vr.add(new Pt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(c)}lookupMutationBatch(e,t){return q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pt(t,0),o=new Pt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],(c=>{const f=this.Cr(c.br);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(De);return t.forEach((o=>{const l=new Pt(o,0),c=new Pt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,c],(f=>{i=i.add(f.br)}))})),q.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const c=new Pt(new _e(l),0);let f=new Et(De);return this.vr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)}),c),q.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach((i=>{const o=this.Cr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return q.forEach(t.mutations,(o=>{const l=new Pt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.vr=i}))}Bn(e){}containsKey(e,t){const i=new Pt(t,0),o=this.vr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class lk{constructor(e){this.Nr=e,this.docs=(function(){return new rt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const c=t.path,f=new _e(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||FA(VA(_),i)<=0||(o.has(_.key)||Kc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Se()}Br(e,t){return q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new uk(this)}getSize(e){return q.resolve(this.size)}}class uk extends tk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)})),q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class ck{constructor(e){this.persistence=e,this.Lr=new Ps((t=>mp(t)),gp),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.kr=0,this.qr=new Tp,this.targetCount=0,this.Qr=jo.qn()}forEachTarget(e,t){return this.Lr.forEach(((i,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),q.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Un(t),q.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Lr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.qr.containsKey(t))}}/**
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
 */class K0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new $c(0),this.Ur=!1,this.Ur=!0,this.Wr=new ok,this.referenceDelegate=e(this),this.Gr=new ck(this),this.indexManager=new QP,this.remoteDocumentCache=(function(o){return new lk(o)})((i=>this.referenceDelegate.zr(i))),this.serializer=new GP(t),this.jr=new ik(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new ak(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new hk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next((l=>this.referenceDelegate.Jr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Yr(e,t){return q.or(Object.values(this.Kr).map((i=>()=>i.containsKey(e,t))))}}class hk extends jA{constructor(e){super(),this.currentSequenceNumber=e}}class Ip{constructor(e){this.persistence=e,this.Zr=new Tp,this.Xr=null}static ei(e){return new Ip(e)}get ti(){if(this.Xr)return this.Xr;throw Se()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach((o=>this.ti.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.ti.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ti,(i=>{const o=_e.fromPath(i);return this.ni(e,o).next((l=>{l||t.removeEntry(o,Ae.min())}))})).next((()=>(this.Xr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ni(e,t).next((i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())}))}zr(e){return 0}ni(e,t){return q.or([()=>q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Nc{constructor(e,t){this.persistence=e,this.ri=new Ps((i=>$A(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=ek(this,t)}static ei(e,t){return new Nc(e,t)}Hr(){}Jr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}nr(e){let t=0;return this.er(e,(i=>{t++})).next((()=>t))}er(e,t){return q.forEach(this.ri,((i,o)=>this.ir(e,i,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,(c=>this.ir(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Ae.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}ir(e,t,i){return q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=(function(){return lI()?8:zA($t())>0?6:4})()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.es(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new fk;return this.ts(e,t,c).next((f=>{if(l.result=f,this.Hi)return this.ns(e,t,c,f.size)}))})).next((()=>l.result))}ns(e,t,i,o){return i.documentReadCount<this.Ji?(To()<=Ne.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),q.resolve()):(To()<=Ne.DEBUG&&ae("QueryEngine","Query:",Io(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(To()<=Ne.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):q.resolve())}Xi(e,t){if(ov(t))return q.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=wd(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=be(...l);return this.Zi.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.rs(t,f);return this.ss(t,y,c,p.readTime)?this.Xi(e,wd(t,null,"F")):this.os(e,y,t,p)}))))})))))}es(e,t,i,o){return ov(t)||o.isEqual(Ae.min())?q.resolve(null):this.Zi.getDocuments(e,i).next((l=>{const c=this.rs(t,l);return this.ss(t,c,i,o)?q.resolve(null):(To()<=Ne.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.os(e,c,t,MA(o,-1)).next((f=>f)))}))}rs(e,t){let i=new Et(P0(e));return t.forEach(((o,l)=>{Kc(e,l)&&(i=i.add(l))})),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return To()<=Ne.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Io(t)),this.Zi.getDocumentsMatchingQuery(e,t,bi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */class pk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(De),this.cs=new Ps((l=>mp(l)),gp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.us)))}}function mk(n,e,t,i){return new pk(n,e,t,i)}async function Q0(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=be();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){f.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Ts:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function gk(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,_){const T=y.batch,I=T.keys();let N=q.resolve();return I.forEach((z=>{N=N.next((()=>_.getEntry(p,z))).next((W=>{const M=y.docVersions.get(z);Be(M!==null),W.version.compareTo(M)<0&&(T.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),_.addEntry(W)))}))})),N.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=be();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Y0(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Gr.getLastRemoteSnapshotVersion(t)))}function yk(n,e){const t=Pe(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach(((_,T)=>{const I=o.get(T);if(!I)return;f.push(t.Gr.removeMatchingKeys(l,_.removedDocuments,T).next((()=>t.Gr.addMatchingKeys(l,_.addedDocuments,T))));let N=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(Ot.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,i)),o=o.insert(T,N),(function(W,M,Q){return W.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=3e8?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(I,N,_)&&f.push(t.Gr.updateTargetData(l,N))}));let p=$r(),y=be();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(vk(l,c,e.documentUpdates).next((_=>{p=_.Is,y=_.ds}))),!i.isEqual(Ae.min())){const _=t.Gr.getLastRemoteSnapshotVersion(l).next((T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(_)}return q.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.us=o,l)))}function vk(n,e,t){let i=be(),o=be();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=$r();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Is:c,ds:o}}))}function _k(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Ek(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Gr.getTargetData(i,e).next((l=>l?(o=l,q.resolve(o)):t.Gr.allocateTargetId(i).next((c=>(o=new Pi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i}))}async function Pd(n,e,t){const i=Pe(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!Qo(c))throw c;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function vv(n,e,t){const i=Pe(n);let o=Ae.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,_){const T=Pe(p),I=T.cs.get(_);return I!==void 0?q.resolve(T.us.get(I)):T.Gr.getTargetData(y,_)})(i,c,ar(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ae.min(),t?l:be()))).next((f=>(wk(i,lP(e),f),{documents:f,Es:l})))))}function wk(n,e,t){let i=n.ls.get(e)||Ae.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.ls.set(e,i)}class _v{constructor(){this.activeTargetIds=pP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tk{constructor(){this._o=new _v,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new _v,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ik{uo(e){}shutdown(){}}/**
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
 */class Ev{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ec=null;function Kf(){return ec===null?ec=(function(){return 268435456+Math.round(2147483648*Math.random())})():ec++,"0x"+ec.toString(16)}/**
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
 */const Sk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ak{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const jt="WebChannelConnection";class Pk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,c){const f=Kf(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,c),this.Lo(t,p,y,o).then((_=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,_),_)),(_=>{throw Mo("RestConnection",`RPC '${t}' ${f} failed with error: `,_,"url: ",p,"request:",o),_}))}ko(t,i,o,l,c,f){return this.Oo(t,i,o,l,c)}Bo(t,i,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Go})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),o&&o.headers.forEach(((l,c)=>t[c]=l))}No(t,i){const o=Sk[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=Kf();return new Promise(((c,f)=>{const p=new u0;p.setWithCredentials(!0),p.listenOnce(c0.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case lc.NO_ERROR:const _=p.getResponseJson();ae(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case lc.TIMEOUT:ae(jt,`RPC '${e}' ${l} timed out`),f(new ve(ee.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const T=p.getStatus();if(ae(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const z=(function(M){const Q=M.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(Q)>=0?Q:ee.UNKNOWN})(N.status);f(new ve(z,N.message))}else f(new ve(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new ve(ee.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ae(jt,`RPC '${e}' ${l} completed.`)}}));const y=JSON.stringify(o);ae(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)}))}qo(e,t,i){const o=Kf(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=d0(),f=f0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const T=c.createWebChannel(_,p);let I=!1,N=!1;const z=new Ak({Eo:M=>{N?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(I||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},Ao:()=>T.close()}),W=(M,Q,J)=>{M.listen(Q,(K=>{try{J(K)}catch(le){setTimeout((()=>{throw le}),0)}}))};return W(T,Ya.EventType.OPEN,(()=>{N||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),z.So())})),W(T,Ya.EventType.CLOSE,(()=>{N||(N=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),z.Do())})),W(T,Ya.EventType.ERROR,(M=>{N||(N=!0,Mo(jt,`RPC '${e}' stream ${o} transport errored:`,M),z.Do(new ve(ee.UNAVAILABLE,"The operation could not be completed")))})),W(T,Ya.EventType.MESSAGE,(M=>{var Q;if(!N){const J=M.data[0];Be(!!J);const K=J,le=(K==null?void 0:K.error)||((Q=K[0])===null||Q===void 0?void 0:Q.error);if(le){ae(jt,`RPC '${e}' stream ${o} received error:`,le);const Ee=le.status;let Te=(function(P){const C=ft[P];if(C!==void 0)return F0(C)})(Ee),x=le.message;Te===void 0&&(Te=ee.INTERNAL,x="Unknown error status: "+Ee+" with message "+le.message),N=!0,z.Do(new ve(Te,x)),T.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,J),z.vo(J)}})),W(f,h0.STAT_EVENT,(M=>{M.stat===gd.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===gd.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.bo()}),0),z}}function Qf(){return typeof document<"u"?document:null}/**
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
 */function Jc(n){return new OP(n,!0)}/**
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
 */class X0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,(()=>(this.Go=Date.now(),e()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class J0{constructor(e,t,i,o,l,c,f,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new X0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.Xo===t&&this.I_(i,o)}),(i=>{e((()=>{const o=new ve(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)}))}))}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro((()=>{i((()=>this.listener.Ro()))})),this.stream.mo((()=>{i((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((o=>{i((()=>this.d_(o)))})),this.stream.onMessage((o=>{i((()=>++this.n_==1?this.A_(o):this.onNext(o)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget((()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kk extends J0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=MP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ae.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?lr(c.readTime):Ae.min()})(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Ad(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=Ed(p)?{documents:UP(l,p)}:{query:jP(l,p).ct},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=z0(l,c.resumeToken);const y=Td(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ae.min())>0){f.readTime=xc(l,c.snapshotVersion.toTimestamp());const y=Td(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=BP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Ad(this.serializer),t.removeTarget=e,this.c_(t)}}class Rk extends J0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=FP(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Ad(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>VP(this.serializer,i)))};this.c_(t)}}/**
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
 */class Ck extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Oo(e,Id(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(ee.UNKNOWN,l.toString())}))}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.ko(e,Id(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ve(ee.UNKNOWN,c.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class xk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Br(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Nk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo((c=>{i.enqueueAndForget((async()=>{Rs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await(async function(p){const y=Pe(p);y.k_.add(4),await Pl(y),y.K_.set("Unknown"),y.k_.delete(4),await Zc(y)})(this))}))})),this.K_=new xk(i,o)}}async function Zc(n){if(Rs(n))for(const e of n.q_)await e(!0)}async function Pl(n){for(const e of n.q_)await e(!1)}function Z0(n,e){const t=Pe(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Rp(t)?kp(t):Yo(t).s_()&&Pp(t,e))}function Ap(n,e){const t=Pe(n),i=Yo(t);t.L_.delete(e),i.s_()&&eE(t,e),t.L_.size===0&&(i.s_()?i.a_():Rs(t)&&t.K_.set("Unknown"))}function Pp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yo(n).V_(e)}function eE(n,e){n.U_.xe(e),Yo(n).m_(e)}function kp(n){n.U_=new CP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Yo(n).start(),n.K_.F_()}function Rp(n){return Rs(n)&&!Yo(n).i_()&&n.L_.size>0}function Rs(n){return Pe(n).k_.size===0}function tE(n){n.U_=void 0}async function bk(n){n.K_.set("Online")}async function Ok(n){n.L_.forEach(((e,t)=>{Pp(n,e)}))}async function Dk(n,e){tE(n),Rp(n)?(n.K_.O_(e),kp(n)):n.K_.set("Unknown")}async function Lk(n,e,t){if(n.K_.set("Online"),e instanceof j0&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.L_.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.L_.delete(f),o.U_.removeTarget(f))})(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bc(n,i)}else if(e instanceof fc?n.U_.$e(e):e instanceof U0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ae.min()))try{const i=await Y0(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.U_.it(c);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.L_.get(y);_&&l.L_.set(y,_.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,y)=>{const _=l.L_.get(p);if(!_)return;l.L_.set(p,_.withResumeToken(Ot.EMPTY_BYTE_STRING,_.snapshotVersion)),eE(l,p);const T=new Pi(_.target,p,y,_.sequenceNumber);Pp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await bc(n,i)}}async function bc(n,e,t){if(!Qo(e))throw e;n.k_.add(1),await Pl(n),n.K_.set("Offline"),t||(t=()=>Y0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Zc(n)}))}function nE(n,e){return e().catch((t=>bc(n,t,e)))}async function eh(n){const e=Pe(n),t=Mi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;Mk(e);)try{const o=await _k(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,Vk(e,o)}catch(o){await bc(e,o)}rE(e)&&iE(e)}function Mk(n){return Rs(n)&&n.B_.length<10}function Vk(n,e){n.B_.push(e);const t=Mi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function rE(n){return Rs(n)&&!Mi(n).i_()&&n.B_.length>0}function iE(n){Mi(n).start()}async function Fk(n){Mi(n).w_()}async function Uk(n){const e=Mi(n);for(const t of n.B_)e.g_(t.mutations)}async function jk(n,e,t){const i=n.B_.shift(),o=_p.from(i,e,t);await nE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await eh(n)}async function zk(n,e){e&&Mi(n).f_&&await(async function(i,o){if((function(c){return PP(c)&&c!==ee.ABORTED})(o.code)){const l=i.B_.shift();Mi(i).__(),await nE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await eh(i)}})(n,e),rE(n)&&iE(n)}async function wv(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=Rs(t);t.k_.add(3),await Pl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Zc(t)}async function Bk(n,e){const t=Pe(n);e?(t.k_.delete(2),await Zc(t)):e||(t.k_.add(2),await Pl(t),t.K_.set("Unknown"))}function Yo(n){return n.W_||(n.W_=(function(t,i,o){const l=Pe(t);return l.b_(),new kk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Ro:bk.bind(null,n),mo:Ok.bind(null,n),po:Dk.bind(null,n),R_:Lk.bind(null,n)}),n.q_.push((async e=>{e?(n.W_.__(),Rp(n)?kp(n):n.K_.set("Unknown")):(await n.W_.stop(),tE(n))}))),n.W_}function Mi(n){return n.G_||(n.G_=(function(t,i,o){const l=Pe(t);return l.b_(),new Rk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Fk.bind(null,n),po:zk.bind(null,n),p_:Uk.bind(null,n),y_:jk.bind(null,n)}),n.q_.push((async e=>{e?(n.G_.__(),await eh(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))}))),n.G_}/**
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
 */class Cp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new Cp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Qo(n))return new ve(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=Xa(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Tv{constructor(){this.z_=new rt(_e.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Se():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class zo{constructor(e,t,i,o,l,c,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new zo(e,t,bo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class $k{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((e=>e.Z_()))}}class Hk{constructor(){this.queries=Iv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Pe(t),l=o.queries;o.queries=Iv(),l.forEach(((c,f)=>{for(const p of f.J_)p.onError(i)}))})(this,new ve(ee.ABORTED,"Firestore shutting down"))}}function Iv(){return new Ps((n=>A0(n)),Gc)}async function Wk(n,e){const t=Pe(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new $k,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=xp(c,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Np(t)}async function qk(n,e){const t=Pe(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.J_.indexOf(e);c>=0&&(l.J_.splice(c,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Gk(n,e){const t=Pe(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.J_)f.ta(o)&&(i=!0);c.H_=o}}i&&Np(t)}function Kk(n,e,t){const i=Pe(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function Np(n){n.X_.forEach((e=>{e.next()}))}var kd,Sv;(Sv=kd||(kd={})).na="default",Sv.Cache="cache";class Qk{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==kd.Cache}}/**
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
 */class sE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class Yk{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=P0(e),this.ma=new bo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new Tv,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,T)=>{const I=o.get(_),N=Kc(this.query,T)?T:null,z=!!I&&this.mutatedKeys.has(I.key),W=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let M=!1;I&&N?I.data.isEqual(N.data)?z!==W&&(i.track({type:3,doc:N}),M=!0):this.ya(I,N)||(i.track({type:2,doc:N}),M=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(f=!0)):!I&&N?(i.track({type:0,doc:N}),M=!0):I&&!N&&(i.track({type:1,doc:I}),M=!0,(p||y)&&(f=!0)),M&&(N?(c=c.add(N),l=W?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{ma:c,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort(((_,T)=>(function(N,z){const W=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return W(N)-W(z)})(_.type,T.type)||this.Va(_.doc,T.doc))),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new zo(this.query,e.ma,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Tv,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach((t=>this.Ea=this.Ea.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ea=this.Ea.delete(t))),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach((i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))}));const t=[];return e.forEach((i=>{this.Ra.has(i)||t.push(new oE(i))})),this.Ra.forEach((i=>{e.has(i)||t.push(new sE(i))})),t}va(e){this.Ea=e.Es,this.Ra=be();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return zo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Xk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Jk{constructor(e){this.key=e,this.Fa=!1}}class Zk{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new Ps((f=>A0(f)),Gc),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(_e.comparator),this.La=new Map,this.ka=new Tp,this.qa={},this.Qa=new Map,this.Ka=jo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function eR(n,e,t=!0){const i=fE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await aE(i,e,t,!0),o}async function tR(n,e){const t=fE(n);await aE(t,e,!0,!1)}async function aE(n,e,t,i){const o=await Ek(n.localStore,ar(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await nR(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&Z0(n.remoteStore,o),f}async function nR(n,e,t,i,o){n.Ua=(T,I,N)=>(async function(W,M,Q,J){let K=M.view.ga(Q);K.ss&&(K=await vv(W.localStore,M.query,!1).then((({documents:x})=>M.view.ga(x,K))));const le=J&&J.targetChanges.get(M.targetId),Ee=J&&J.targetMismatches.get(M.targetId)!=null,Te=M.view.applyChanges(K,W.isPrimaryClient,le,Ee);return Pv(W,M.targetId,Te.ba),Te.snapshot})(n,T,I,N);const l=await vv(n.localStore,e,!0),c=new Yk(e,l.Es),f=c.ga(l.documents),p=Al.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,p);Pv(n,t,y.ba);const _=new Xk(e,t,c);return n.xa.set(e,_),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function rR(n,e,t){const i=Pe(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter((c=>!Gc(c,e)))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Pd(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ap(i.remoteStore,o.targetId),Rd(i,o.targetId)})).catch(Ko)):(Rd(i,o.targetId),await Pd(i.localStore,o.targetId,!0))}async function iR(n,e){const t=Pe(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ap(t.remoteStore,i.targetId))}async function sR(n,e,t){const i=fR(n);try{const o=await(function(c,f){const p=Pe(c),y=_t.now(),_=f.reduce(((N,z)=>N.add(z.key)),be());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let z=$r(),W=be();return p.hs.getEntries(N,_).next((M=>{z=M,z.forEach(((Q,J)=>{J.isValidDocument()||(W=W.add(Q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(N,z))).next((M=>{T=M;const Q=[];for(const J of f){const K=wP(J,T.get(J.key).overlayedDocument);K!=null&&Q.push(new ks(J.key,K,v0(K.value.mapValue),Fr.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,Q,f)})).next((M=>{I=M;const Q=M.applyToLocalDocumentSet(T,W);return p.documentOverlayCache.saveOverlays(N,M.batchId,Q)}))})).then((()=>({batchId:I.batchId,changes:R0(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,p){let y=c.qa[c.currentUser.toKey()];y||(y=new rt(De)),y=y.insert(f,p),c.qa[c.currentUser.toKey()]=y})(i,o.batchId,t),await kl(i,o.changes),await eh(i.remoteStore)}catch(o){const l=xp(o,"Failed to persist write");t.reject(l)}}async function lE(n,e){const t=Pe(n);try{const i=await yk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.La.get(l);c&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?Be(c.Fa):o.removedDocuments.size>0&&(Be(c.Fa),c.Fa=!1))})),await kl(t,i,e)}catch(i){await Ko(i)}}function Av(n,e,t){const i=Pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach(((l,c)=>{const f=c.view.ea(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const p=Pe(c);p.onlineState=f;let y=!1;p.queries.forEach(((_,T)=>{for(const I of T.J_)I.ea(f)&&(y=!0)})),y&&Np(p)})(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function oR(n,e,t){const i=Pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let c=new rt(_e.comparator);c=c.insert(l,Bt.newNoDocument(l,Ae.min()));const f=be().add(l),p=new Xc(Ae.min(),new Map,new rt(De),c,f);await lE(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),bp(i)}else await Pd(i.localStore,e,!1).then((()=>Rd(i,e,t))).catch(Ko)}async function aR(n,e){const t=Pe(n),i=e.batch.batchId;try{const o=await gk(t.localStore,e);cE(t,i,null),uE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await kl(t,o)}catch(o){await Ko(o)}}async function lR(n,e,t){const i=Pe(n);try{const o=await(function(c,f){const p=Pe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,f).next((T=>(Be(T!==null),_=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);cE(i,e,t),uE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await kl(i,o)}catch(o){await Ko(o)}}function uE(n,e){(n.Qa.get(e)||[]).forEach((t=>{t.resolve()})),n.Qa.delete(e)}function cE(n,e,t){const i=Pe(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Rd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach((i=>{n.ka.containsKey(i)||hE(n,i)}))}function hE(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Ap(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),bp(n))}function Pv(n,e,t){for(const i of t)i instanceof sE?(n.ka.addReference(i.key,e),uR(n,i)):i instanceof oE?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||hE(n,i.key)):Se()}function uR(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),bp(n))}function bp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new _e(st.fromString(e)),i=n.Ka.next();n.La.set(i,new Jk(t)),n.Ba=n.Ba.insert(t,i),Z0(n.remoteStore,new Pi(ar(yp(t.path)),i,"TargetPurposeLimboResolution",$c.oe))}}async function kl(n,e,t){const i=Pe(n),o=[],l=[],c=[];i.xa.isEmpty()||(i.xa.forEach(((f,p)=>{c.push(i.Ua(p,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Sp.zi(p.targetId,y);l.push(T)}})))})),await Promise.all(c),i.Ma.R_(o),await(async function(p,y){const _=Pe(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(y,(I=>q.forEach(I.Wi,(N=>_.persistence.referenceDelegate.addReference(T,I.targetId,N))).next((()=>q.forEach(I.Gi,(N=>_.persistence.referenceDelegate.removeReference(T,I.targetId,N)))))))))}catch(T){if(!Qo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const N=_.us.get(I),z=N.snapshotVersion,W=N.withLastLimboFreeSnapshotVersion(z);_.us=_.us.insert(I,W)}}})(i.localStore,l))}async function cR(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await Q0(t.localStore,e);t.currentUser=e,(function(l,c){l.Qa.forEach((f=>{f.forEach((p=>{p.reject(new ve(ee.CANCELLED,c))}))})),l.Qa.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await kl(t,i.Ts)}}function hR(n,e){const t=Pe(n),i=t.La.get(e);if(i&&i.Fa)return be().add(i.key);{let o=be();const l=t.Oa.get(e);if(!l)return o;for(const c of l){const f=t.xa.get(c);o=o.unionWith(f.view.fa)}return o}}function fE(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oR.bind(null,e),e.Ma.R_=Gk.bind(null,e.eventManager),e.Ma.Wa=Kk.bind(null,e.eventManager),e}function fR(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lR.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return mk(this.persistence,new dk,e.initialUser,this.serializer)}ja(e){return new K0(Ip.ei,this.serializer)}za(e){return new Tk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class dR extends Oc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Be(this.persistence.referenceDelegate instanceof Nc);const i=this.persistence.referenceDelegate.garbageCollector;return new JP(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new K0((i=>Nc.ei(i,t)),this.serializer)}}class Cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Av(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cR.bind(null,this.syncEngine),await Bk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Hk})()}createDatastore(e){const t=Jc(e.databaseInfo.databaseId),i=(function(l){return new Pk(l)})(e.databaseInfo);return(function(l,c,f,p){return new Ck(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new Nk(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Av(this.syncEngine,t,0)),(function(){return Ev.p()?new Ev:new Ik})())}createSyncEngine(e,t){return(function(o,l,c,f,p,y,_){const T=new Zk(o,l,c,f,p,y);return _&&(T.$a=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Pl(l),l.Q_.shutdown(),l.K_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cd.provider={build:()=>new Cd};/**
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
 */class pR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class mR{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=m0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ae("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ae("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=xp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Yf(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Q0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function kv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gR(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>wv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>wv(e.remoteStore,o))),n._onlineComponents=e}async function gR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Mo("Error using user provided cache. Falling back to memory cache: "+t),await Yf(n,new Oc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Yf(n,new dR(void 0));return n._offlineComponents}async function dE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await kv(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await kv(n,new Cd))),n._onlineComponents}function yR(n){return dE(n).then((e=>e.syncEngine))}async function vR(n){const e=await dE(n),t=e.eventManager;return t.onListen=eR.bind(null,e.syncEngine),t.onUnlisten=rR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iR.bind(null,e.syncEngine),t}function _R(n,e,t={}){const i=new Ni;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,y){const _=new pR({next:I=>{_.eu(),c.enqueueAndForget((()=>qk(l,T)));const N=I.docs.has(f);!N&&I.fromCache?y.reject(new ve(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&I.fromCache&&p&&p.source==="server"?y.reject(new ve(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Qk(yp(f.path),_,{includeMetadataChanges:!0,ua:!0});return Wk(l,T)})(await vR(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function pE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Rv=new Map;/**
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
 */function ER(n,e,t){if(!t)throw new ve(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wR(n,e,t,i){if(e===!0&&i===!0)throw new ve(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cv(n){if(!_e.isDocumentKey(n))throw new ve(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Op(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function pl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Op(n);throw new ve(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class xv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xv(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new kA;switch(i.type){case"firstParty":return new NA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ve(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Rv.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Rv.delete(t),i.terminate())})(this),Promise.resolve()}}function TR(n,e,t,i={}){var o;const l=(n=pl(n,Dp))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=zt.MOCK_USER;else{f=tI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ve(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new zt(y)}n._authCredentials=new RA(new p0(f,p))}}/**
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
 */class Lp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Lp(this.firestore,e,this._query)}}class An{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ml(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ml extends Lp{constructor(e,t,i){super(e,t,yp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new _e(e))}withConverter(e){return new ml(this.firestore,e,this._path)}}function mE(n,e,...t){if(n=kn(n),arguments.length===1&&(e=m0.newId()),ER("doc","path",e),n instanceof Dp){const i=st.fromString(e,...t);return Cv(i),new An(n,null,new _e(i))}{if(!(n instanceof An||n instanceof ml))throw new ve(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return Cv(i),new An(n.firestore,n instanceof ml?n.converter:null,new _e(i))}}/**
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
 */class Nv{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new X0(this,"async_queue_retry"),this.fu=()=>{const i=Qf();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Qf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Qf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise((()=>{}));const t=new Ni;return this.yu((()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Iu.push(e),this.wu())))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Qo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(e){const t=this.gu.then((()=>(this.Ru=!0,e().catch((i=>{this.Au=i,this.Ru=!1;const o=(function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f})(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i})).then((i=>(this.Ru=!1,i))))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Cp.createAndSchedule(this,e,t,i,(l=>this.Su(l)));return this.Eu.push(o),o}pu(){this.Au&&Se()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then((()=>{this.Eu.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()}))}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Mp extends Dp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Nv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nv(e),this._firestoreClient=void 0,await e}}}function IR(n,e){const t=typeof n=="object"?n:R_(),i=typeof n=="string"?n:"(default)",o=ep(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=ZT("firestore");l&&TR(o,...l)}return o}function gE(n){if(n._terminated)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SR(n),n._firestoreClient}function SR(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,y,_){return new qA(f,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,pE(_.experimentalLongPollingOptions),_.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new mR(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Vp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yE{constructor(e){this._methodName=e}}/**
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
 */class Up{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}}/**
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
 */const AR=/^__.*__$/;class PR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ks(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sl(e,this.data,t,this.fieldTransforms)}}function vE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class jp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Dc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(vE(this.Mu)&&AR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class kR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Jc(e)}$u(e,t,i,o=!1){return new jp({Mu:e,methodName:t,Ku:i,path:bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RR(n){const e=n._freezeSettings(),t=Jc(n._databaseId);return new kR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function CR(n,e,t,i,o,l={}){const c=n.$u(l.merge||l.mergeFields?2:0,e,t,o);TE("Data must be an object, but it was:",c,i);const f=EE(i,c);let p,y;if(l.merge)p=new $n(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const T of l.mergeFields){const I=xR(e,T,t);if(!c.contains(I))throw new ve(ee.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);bR(_,I)||_.push(I)}p=new $n(_),y=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=c.fieldTransforms;return new PR(new Sn(f),p,y)}function _E(n,e){if(wE(n=kn(n)))return TE("Unsupported field value:",e,n),EE(n,e);if(n instanceof yE)return(function(i,o){if(!vE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let p=_E(f,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=kn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:xc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xc(o.serializer,l)}}if(i instanceof Fp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Bo)return{bytesValue:z0(o.serializer,i._byteString)};if(i instanceof An){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Up)return(function(c,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map((p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return vp(f.serializer,p)}))}}}}}})(i,o);throw o.qu(`Unsupported field value: ${Op(i)}`)})(n,e)}function EE(n,e){const t={};return g0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(n,((i,o)=>{const l=_E(o,e.Ou(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function wE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Fp||n instanceof Bo||n instanceof An||n instanceof yE||n instanceof Up)}function TE(n,e,t){if(!wE(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const i=Op(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function xR(n,e,t){if((e=kn(e))instanceof Vp)return e._internalPath;if(typeof e=="string")return IE(n,e);throw Dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const NR=new RegExp("[~\\*/\\[\\]]");function IE(n,e,t){if(e.search(NR)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vp(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ve(ee.INVALID_ARGUMENT,f+n+p)}function bR(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class SE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(AE("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OR extends SE{data(){return super.data()}}function AE(n,e){return typeof e=="string"?IE(n,e):e instanceof Vp?e._internalPath:e._delegate._internalPath}class DR{convertValue(e,t="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return As(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>ut(c.doubleValue)));return new Up(l)}convertGeoPoint(e){return new Fp(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Wc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);Be(G0(i));const o=new cl(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function LR(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class MR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PE extends SE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new VR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(AE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class VR extends PE{data(e={}){return super.data(e)}}/**
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
 */function FR(n){n=pl(n,An);const e=pl(n.firestore,Mp);return _R(gE(e),n._key).then((t=>BR(e,n,t)))}class UR extends DR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,t)}}function jR(n,e,t){n=pl(n,An);const i=pl(n.firestore,Mp),o=LR(n.converter,e,t);return zR(i,[CR(RR(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Fr.none())])}function zR(n,e){return(function(i,o){const l=new Ni;return i.asyncQueue.enqueueAndForget((async()=>sR(await yR(i),o,l))),l.promise})(gE(n),e)}function BR(n,e,t){const i=t.docs.get(e._key),o=new UR(n);return new PE(n,o,e._key,i,new MR(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Go=o})(Wo),Do(new Es("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Mp(new CA(i.getProvider("auth-internal")),new OA(i.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ve(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(y.options.projectId,_)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Ci(Qy,"4.7.6",e),Ci(Qy,"4.7.6","esm2017")})();const $R={apiKey:"AIzaSyBRTWsRqYZqc8db6Ad8ra0x1qc9xpdoZF0",authDomain:"multi-cinema.firebaseapp.com",projectId:"multi-cinema",storageBucket:"multi-cinema.firebasestorage.app",messagingSenderId:"129611887734",appId:"1:129611887734:web:114c2d1e061543c9b89b57"},kE=k_($R),zp=AA(kE),RE=IR(kE),HR=new Or,WR=async()=>{try{return(await D1(zp,HR)).user}catch(n){return console.error("Ошибка при входе через Google:",n),null}},qR=async()=>{try{await p1(zp)}catch(n){console.error("Ошибка при выходе:",n)}},GR=async(n,e)=>{try{const t=mE(RE,"users",n);await jR(t,{likedMovies:e},{merge:!0})}catch(t){console.error("Ошибка при сохранении лайкнутых фильмов:",t)}},KR=async n=>{try{const e=mE(RE,"users",n),t=await FR(e);return t.exists()?t.data().likedMovies:[]}catch(e){return console.error("Ошибка при загрузке лайкнутых фильмов:",e),[]}},QR=n=>{const[e,t]=$.useState([]);return $.useEffect(()=>{n&&(async()=>{const l=await KR(n.uid);t(l)})()},[n]),$.useEffect(()=>{n&&e.length>0&&GR(n.uid,e)},[e,n]),{likedMovies:e,toggleLike:o=>{e.some(l=>l.id===o.id)?t(e.filter(l=>l.id!==o.id)):t([...e,o])}}},YR=()=>{const[n,e]=$.useState(null);return $.useEffect(()=>{const t=d1(zp,i=>{e(i)});return()=>t()},[]),{user:n}};function Bp(){const[n,e]=$.useState(!0);return{isLoading:n,setIsLoading:e}}function XR(){const[n,e]=$.useState([]);return{data:n,setData:e}}function JR(){const[n,e]=$.useState("");return{filmName:n,setFilmName:e}}function ZR(){const[n,e]=$.useState({});return{film:n,setFilm:e}}function eC(){const[n,e]=$.useState([]);return{collections:n,setCollections:e}}function tC(){const[n,e]=$.useState({actual:0,all:0});return{pages:n,setPages:e}}function nC(){const[n,e]=$.useState("");return{link:n,setLink:e}}function bv(){const[n,e]=$.useState([]),[t,i]=$.useState({});return{players:n,setPlayers:e,activePlayer:t,setActivePlayer:i}}function rC(){const[n,e]=$.useState(!1);return{isActor:n,setIsActor:e}}function iC(){const[n,e]=$.useState("");return{fetchMethod:n,setFetchMethod:e}}function sC(){const[n,e]=$.useState("");return{genre:n,setGenre:e}}const CE=$.createContext(),oC=({children:n})=>{const{user:e}=YR(),{likedMovies:t,toggleLike:i}=QR(e),{isLoading:o,setIsLoading:l}=Bp(),{data:c,setData:f}=XR(),{filmName:p,setFilmName:y}=JR(),{film:_,setFilm:T}=ZR(),{collections:I,setCollections:N}=eC(),{pages:z,setPages:W}=tC(),{link:M,setLink:Q}=nC(),{players:J,setPlayers:K}=bv(),{activePlayer:le,setActivePlayer:Ee}=bv(),{isActor:Te,setIsActor:x}=rC(),{fetchMethod:S,setFetchMethod:P}=iC(),{genre:C,setGenre:O}=sC();return D.jsx(CE.Provider,{value:{user:e,likedMovies:t,toggleLike:i,isLoading:o,setIsLoading:l,data:c,setData:f,filmName:p,setFilmName:y,film:_,setFilm:T,collections:I,setCollections:N,pages:z,setPages:W,link:M,setLink:Q,players:J,setPlayers:K,activePlayer:le,setActivePlayer:Ee,isActor:Te,setIsActor:x,fetchMethod:S,setFetchMethod:P,genre:C,setGenre:O},children:n})},fn=()=>$.useContext(CE);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ov="popstate";function aC(n={}){function e(i,o){let{pathname:l,search:c,hash:f}=i.location;return xd("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:gl(o)}return uC(e,t,null,n)}function nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function fr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lC(){return Math.random().toString(36).substring(2,10)}function Dv(n,e){return{usr:n.state,key:n.key,idx:e}}function xd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||i||lC()}}function gl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Xo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function uC(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,f="POP",p=null,y=_();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function _(){return(c.state||{idx:null}).idx}function T(){f="POP";let M=_(),Q=M==null?null:M-y;y=M,p&&p({action:f,location:W.location,delta:Q})}function I(M,Q){f="PUSH";let J=xd(W.location,M,Q);y=_()+1;let K=Dv(J,y),le=W.createHref(J);try{c.pushState(K,"",le)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;o.location.assign(le)}l&&p&&p({action:f,location:W.location,delta:1})}function N(M,Q){f="REPLACE";let J=xd(W.location,M,Q);y=_();let K=Dv(J,y),le=W.createHref(J);c.replaceState(K,"",le),l&&p&&p({action:f,location:W.location,delta:0})}function z(M){return cC(M)}let W={get action(){return f},get location(){return n(o,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ov,T),p=M,()=>{o.removeEventListener(Ov,T),p=null}},createHref(M){return e(o,M)},createURL:z,encodeLocation(M){let Q=z(M);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:I,replace:N,go(M){return c.go(M)}};return W}function cC(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),nt(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:gl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function xE(n,e,t="/"){return hC(n,e,t,!1)}function hC(n,e,t,i){let o=typeof e=="string"?Xo(e):e,l=Hr(o.pathname||"/",t);if(l==null)return null;let c=NE(n);fC(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let y=IC(l);f=wC(c[p],y,i)}return f}function NE(n,e=[],t=[],i="",o=!1){let l=(c,f,p=o,y)=>{let _={relativePath:y===void 0?c.path||"":y,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(i)&&p)return;nt(_.relativePath.startsWith(i),`Absolute route path "${_.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(i.length)}let T=Ur([i,_.relativePath]),I=t.concat(_);c.children&&c.children.length>0&&(nt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),NE(c.children,e,I,T,p)),!(c.path==null&&!c.index)&&e.push({path:T,score:_C(T,c.index),routesMeta:I})};return n.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let y of bE(c.path))l(c,f,!0,y)}),e}function bE(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=bE(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...c),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function fC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:EC(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var dC=/^:[\w-]+$/,pC=3,mC=2,gC=1,yC=10,vC=-2,Lv=n=>n==="*";function _C(n,e){let t=n.split("/"),i=t.length;return t.some(Lv)&&(i+=vC),e&&(i+=mC),t.filter(o=>!Lv(o)).reduce((o,l)=>o+(dC.test(l)?pC:l===""?gC:yC),i)}function EC(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function wC(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",T=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Ur([l,T.pathname]),pathnameBase:kC(Ur([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Ur([l,T.pathnameBase]))}return c}function Lc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=TC(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:T},I)=>{if(_==="*"){let z=f[I]||"";c=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const N=f[I];return T&&!N?y[_]=void 0:y[_]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function TC(n,e=!1,t=!0){fr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function IC(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Hr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function SC(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Xo(n):n;return{pathname:t?t.startsWith("/")?t:AC(t,e):e,search:RC(i),hash:CC(o)}}function AC(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function PC(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function OE(n){let e=PC(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function DE(n,e,t,i=!1){let o;typeof n=="string"?o=Xo(n):(o={...n},nt(!o.pathname||!o.pathname.includes("?"),Xf("?","pathname","search",o)),nt(!o.pathname||!o.pathname.includes("#"),Xf("#","pathname","hash",o)),nt(!o.search||!o.search.includes("#"),Xf("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let p=SC(o,f),y=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var Ur=n=>n.join("/").replace(/\/\/+/g,"/"),kC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),RC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,CC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function xC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var LE=["POST","PUT","PATCH","DELETE"];new Set(LE);var NC=["GET",...LE];new Set(NC);var Jo=$.createContext(null);Jo.displayName="DataRouter";var th=$.createContext(null);th.displayName="DataRouterState";$.createContext(!1);var ME=$.createContext({isTransitioning:!1});ME.displayName="ViewTransition";var bC=$.createContext(new Map);bC.displayName="Fetchers";var OC=$.createContext(null);OC.displayName="Await";var dr=$.createContext(null);dr.displayName="Navigation";var Rl=$.createContext(null);Rl.displayName="Location";var pr=$.createContext({outlet:null,matches:[],isDataRoute:!1});pr.displayName="Route";var $p=$.createContext(null);$p.displayName="RouteError";function DC(n,{relative:e}={}){nt(Cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=$.useContext(dr),{hash:o,pathname:l,search:c}=xl(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ur([t,l])),i.createHref({pathname:f,search:c,hash:o})}function Cl(){return $.useContext(Rl)!=null}function Kr(){return nt(Cl(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Rl).location}var VE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function FE(n){$.useContext(dr).static||$.useLayoutEffect(n)}function UE(){let{isDataRoute:n}=$.useContext(pr);return n?KC():LC()}function LC(){nt(Cl(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(Jo),{basename:e,navigator:t}=$.useContext(dr),{matches:i}=$.useContext(pr),{pathname:o}=Kr(),l=JSON.stringify(OE(i)),c=$.useRef(!1);return FE(()=>{c.current=!0}),$.useCallback((p,y={})=>{if(fr(c.current,VE),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=DE(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ur([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,l,o,n])}$.createContext(null);function MC(){let{matches:n}=$.useContext(pr),e=n[n.length-1];return e?e.params:{}}function xl(n,{relative:e}={}){let{matches:t}=$.useContext(pr),{pathname:i}=Kr(),o=JSON.stringify(OE(t));return $.useMemo(()=>DE(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function VC(n,e){return jE(n,e)}function jE(n,e,t,i,o){var J;nt(Cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=$.useContext(dr),{matches:c}=$.useContext(pr),f=c[c.length-1],p=f?f.params:{},y=f?f.pathname:"/",_=f?f.pathnameBase:"/",T=f&&f.route;{let K=T&&T.path||"";zE(y,!T||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let I=Kr(),N;if(e){let K=typeof e=="string"?Xo(e):e;nt(_==="/"||((J=K.pathname)==null?void 0:J.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${K.pathname}" was given in the \`location\` prop.`),N=K}else N=I;let z=N.pathname||"/",W=z;if(_!=="/"){let K=_.replace(/^\//,"").split("/");W="/"+z.replace(/^\//,"").split("/").slice(K.length).join("/")}let M=xE(n,{pathname:W});fr(T||M!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),fr(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=BC(M&&M.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:Ur([_,l.encodeLocation?l.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?_:Ur([_,l.encodeLocation?l.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),c,t,i,o);return e&&Q?$.createElement(Rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},Q):Q}function FC(){let n=GC(),e=xC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,c)}var UC=$.createElement(FC,null),jC=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?$.createElement(pr.Provider,{value:this.props.routeContext},$.createElement($p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zC({routeContext:n,match:e,children:t}){let i=$.useContext(Jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(pr.Provider,{value:n},t)}function BC(n,e=[],t=null,i=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,c=t==null?void 0:t.errors;if(c!=null){let y=l.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);nt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let f=!1,p=-1;if(t)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=y),_.route.id){let{loaderData:T,errors:I}=t,N=_.route.loader&&!T.hasOwnProperty(_.route.id)&&(!I||I[_.route.id]===void 0);if(_.route.lazy||N){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,_,T)=>{let I,N=!1,z=null,W=null;t&&(I=c&&_.route.id?c[_.route.id]:void 0,z=_.route.errorElement||UC,f&&(p<0&&T===0?(zE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,W=null):p===T&&(N=!0,W=_.route.hydrateFallbackElement||null)));let M=e.concat(l.slice(0,T+1)),Q=()=>{let J;return I?J=z:N?J=W:_.route.Component?J=$.createElement(_.route.Component,null):_.route.element?J=_.route.element:J=y,$.createElement(zC,{match:_,routeContext:{outlet:y,matches:M,isDataRoute:t!=null},children:J})};return t&&(_.route.ErrorBoundary||_.route.errorElement||T===0)?$.createElement(jC,{location:t.location,revalidation:t.revalidation,component:z,error:I,children:Q(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:i}):Q()},null)}function Hp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $C(n){let e=$.useContext(Jo);return nt(e,Hp(n)),e}function HC(n){let e=$.useContext(th);return nt(e,Hp(n)),e}function WC(n){let e=$.useContext(pr);return nt(e,Hp(n)),e}function Wp(n){let e=WC(n),t=e.matches[e.matches.length-1];return nt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function qC(){return Wp("useRouteId")}function GC(){var i;let n=$.useContext($p),e=HC("useRouteError"),t=Wp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function KC(){let{router:n}=$C("useNavigate"),e=Wp("useNavigate"),t=$.useRef(!1);return FE(()=>{t.current=!0}),$.useCallback(async(o,l={})=>{fr(t.current,VE),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Mv={};function zE(n,e,t){!e&&!Mv[n]&&(Mv[n]=!0,fr(!1,t))}$.memo(QC);function QC({routes:n,future:e,state:t,unstable_onError:i}){return jE(n,void 0,t,i,e)}function Po(n){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YC({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){nt(!Cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),f=$.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Xo(t));let{pathname:p="/",search:y="",hash:_="",state:T=null,key:I="default"}=t,N=$.useMemo(()=>{let z=Hr(p,c);return z==null?null:{location:{pathname:z,search:y,hash:_,state:T,key:I},navigationType:i}},[c,p,y,_,T,I,i]);return fr(N!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:$.createElement(dr.Provider,{value:f},$.createElement(Rl.Provider,{children:e,value:N}))}function XC({children:n,location:e}){return VC(Nd(n),e)}function Nd(n,e=[]){let t=[];return $.Children.forEach(n,(i,o)=>{if(!$.isValidElement(i))return;let l=[...e,o];if(i.type===$.Fragment){t.push.apply(t,Nd(i.props.children,l));return}nt(i.type===Po,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Nd(i.props.children,l)),t.push(c)}),t}var dc="get",pc="application/x-www-form-urlencoded";function nh(n){return n!=null&&typeof n.tagName=="string"}function JC(n){return nh(n)&&n.tagName.toLowerCase()==="button"}function ZC(n){return nh(n)&&n.tagName.toLowerCase()==="form"}function ex(n){return nh(n)&&n.tagName.toLowerCase()==="input"}function tx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function nx(n,e){return n.button===0&&(!e||e==="_self")&&!tx(n)}var tc=null;function rx(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var ix=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jf(n){return n!=null&&!ix.has(n)?(fr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pc}"`),null):n}function sx(n,e){let t,i,o,l,c;if(ZC(n)){let f=n.getAttribute("action");i=f?Hr(f,e):null,t=n.getAttribute("method")||dc,o=Jf(n.getAttribute("enctype"))||pc,l=new FormData(n)}else if(JC(n)||ex(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?Hr(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||dc,o=Jf(n.getAttribute("formenctype"))||Jf(f.getAttribute("enctype"))||pc,l=new FormData(f,n),!rx()){let{name:y,type:_,value:T}=n;if(_==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(nh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=dc,i=null,o=pc,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ox(n,e,t){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&Hr(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function ax(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ux(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await ax(l,t);return c.links?c.links():[]}return[]}));return dx(i.flat(1).filter(lx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Vv(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var _;return t[y].pathname!==p.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function cx(n,e,{includeHydrateFallback:t}={}){return hx(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function hx(n){return[...new Set(n)]}function fx(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function dx(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(fx(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function BE(){let n=$.useContext(Jo);return qp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function px(){let n=$.useContext(th);return qp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Gp=$.createContext(void 0);Gp.displayName="FrameworkContext";function $E(){let n=$.useContext(Gp);return qp(n,"You must render this element inside a <HydratedRouter> element"),n}function mx(n,e){let t=$.useContext(Gp),[i,o]=$.useState(!1),[l,c]=$.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:T}=e,I=$.useRef(null);$.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let W=Q=>{Q.forEach(J=>{c(J.isIntersecting)})},M=new IntersectionObserver(W,{threshold:.5});return I.current&&M.observe(I.current),()=>{M.disconnect()}}},[n]),$.useEffect(()=>{if(i){let W=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(W)}}},[i]);let N=()=>{o(!0)},z=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Qa(f,N),onBlur:Qa(p,z),onMouseEnter:Qa(y,N),onMouseLeave:Qa(_,z),onTouchStart:Qa(T,N)}]:[!1,I,{}]}function Qa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function gx({page:n,...e}){let{router:t}=BE(),i=$.useMemo(()=>xE(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?$.createElement(vx,{page:n,matches:i,...e}):null}function yx(n){let{manifest:e,routeModules:t}=$E(),[i,o]=$.useState([]);return $.useEffect(()=>{let l=!1;return ux(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function vx({page:n,matches:e,...t}){let i=Kr(),{manifest:o,routeModules:l}=$E(),{basename:c}=BE(),{loaderData:f,matches:p}=px(),y=$.useMemo(()=>Vv(n,e,p,o,i,"data"),[n,e,p,o,i]),_=$.useMemo(()=>Vv(n,e,p,o,i,"assets"),[n,e,p,o,i]),T=$.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let z=new Set,W=!1;if(e.forEach(Q=>{var K;let J=o.routes[Q.route.id];!J||!J.hasLoader||(!y.some(le=>le.route.id===Q.route.id)&&Q.route.id in f&&((K=l[Q.route.id])!=null&&K.shouldRevalidate)||J.hasClientLoader?W=!0:z.add(Q.route.id))}),z.size===0)return[];let M=ox(n,c,"data");return W&&z.size>0&&M.searchParams.set("_routes",e.filter(Q=>z.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[M.pathname+M.search]},[c,f,i,o,y,e,n,l]),I=$.useMemo(()=>cx(_,o),[_,o]),N=yx(_);return $.createElement($.Fragment,null,T.map(z=>$.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...t})),I.map(z=>$.createElement("link",{key:z,rel:"modulepreload",href:z,...t})),N.map(({key:z,link:W})=>$.createElement("link",{key:z,nonce:t.nonce,...W})))}function _x(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var HE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{HE&&(window.__reactRouterVersion="7.8.2")}catch{}function Ex({basename:n,children:e,window:t}){let i=$.useRef();i.current==null&&(i.current=aC({window:t,v5Compat:!0}));let o=i.current,[l,c]=$.useState({action:o.action,location:o.location}),f=$.useCallback(p=>{$.startTransition(()=>c(p))},[c]);return $.useLayoutEffect(()=>o.listen(f),[o,f]),$.createElement(YC,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var WE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_s=$.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:f,target:p,to:y,preventScrollReset:_,viewTransition:T,...I},N){let{basename:z}=$.useContext(dr),W=typeof y=="string"&&WE.test(y),M,Q=!1;if(typeof y=="string"&&W&&(M=y,HE))try{let P=new URL(window.location.href),C=y.startsWith("//")?new URL(P.protocol+y):new URL(y),O=Hr(C.pathname,z);C.origin===P.origin&&O!=null?y=O+C.search+C.hash:Q=!0}catch{fr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=DC(y,{relative:o}),[K,le,Ee]=mx(i,I),Te=Sx(y,{replace:c,state:f,target:p,preventScrollReset:_,relative:o,viewTransition:T});function x(P){e&&e(P),P.defaultPrevented||Te(P)}let S=$.createElement("a",{...I,...Ee,href:M||J,onClick:Q||l?e:x,ref:_x(N,le),target:p,"data-discover":!W&&t==="render"?"true":void 0});return K&&!W?$.createElement($.Fragment,null,S,$.createElement(gx,{page:J})):S});_s.displayName="Link";var wx=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:f,children:p,...y},_){let T=xl(c,{relative:y.relative}),I=Kr(),N=$.useContext(th),{navigator:z,basename:W}=$.useContext(dr),M=N!=null&&Cx(T)&&f===!0,Q=z.encodeLocation?z.encodeLocation(T).pathname:T.pathname,J=I.pathname,K=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(J=J.toLowerCase(),K=K?K.toLowerCase():null,Q=Q.toLowerCase()),K&&W&&(K=Hr(K,W)||K);const le=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let Ee=J===Q||!o&&J.startsWith(Q)&&J.charAt(le)==="/",Te=K!=null&&(K===Q||!o&&K.startsWith(Q)&&K.charAt(Q.length)==="/"),x={isActive:Ee,isPending:Te,isTransitioning:M},S=Ee?e:void 0,P;typeof i=="function"?P=i(x):P=[i,Ee?"active":null,Te?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(x):l;return $.createElement(_s,{...y,"aria-current":S,className:P,ref:_,style:C,to:c,viewTransition:f},typeof p=="function"?p(x):p)});wx.displayName="NavLink";var Tx=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=dc,action:f,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:T,...I},N)=>{let z=kx(),W=Rx(f,{relative:y}),M=c.toLowerCase()==="get"?"get":"post",Q=typeof f=="string"&&WE.test(f),J=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let le=K.nativeEvent.submitter,Ee=(le==null?void 0:le.getAttribute("formmethod"))||c;z(le||K.currentTarget,{fetcherKey:e,method:Ee,navigate:t,replace:o,state:l,relative:y,preventScrollReset:_,viewTransition:T})};return $.createElement("form",{ref:N,method:M,action:W,onSubmit:i?p:J,...I,"data-discover":!Q&&n==="render"?"true":void 0})});Tx.displayName="Form";function Ix(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qE(n){let e=$.useContext(Jo);return nt(e,Ix(n)),e}function Sx(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let f=UE(),p=Kr(),y=xl(n,{relative:l});return $.useCallback(_=>{if(nx(_,e)){_.preventDefault();let T=t!==void 0?t:gl(p)===gl(y);f(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,f,y,t,i,e,n,o,l,c])}var Ax=0,Px=()=>`__${String(++Ax)}__`;function kx(){let{router:n}=qE("useSubmit"),{basename:e}=$.useContext(dr),t=qC();return $.useCallback(async(i,o={})=>{let{action:l,method:c,encType:f,formData:p,body:y}=sx(i,e);if(o.navigate===!1){let _=o.fetcherKey||Px();await n.fetch(_,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function Rx(n,{relative:e}={}){let{basename:t}=$.useContext(dr),i=$.useContext(pr);nt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...xl(n||".",{relative:e})},c=Kr();if(n==null){l.search=c.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(_=>_==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let _=f.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ur([t,l.pathname])),gl(l)}function Cx(n,{relative:e}={}){let t=$.useContext(ME);nt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=qE("useViewTransitionState"),o=xl(n,{relative:e});if(!t.isTransitioning)return!1;let l=Hr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Hr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Lc(o.pathname,c)!=null||Lc(o.pathname,l)!=null}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function xx(n,e,t){return(e=bx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Fv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function te(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fv(Object(t),!0).forEach(function(i){xx(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Fv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Nx(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function bx(n){var e=Nx(n,"string");return typeof e=="symbol"?e:e+""}const Uv=()=>{};let Kp={},GE={},KE=null,QE={mark:Uv,measure:Uv};try{typeof window<"u"&&(Kp=window),typeof document<"u"&&(GE=document),typeof MutationObserver<"u"&&(KE=MutationObserver),typeof performance<"u"&&(QE=performance)}catch{}const{userAgent:jv=""}=Kp.navigator||{},Vi=Kp,Xe=GE,zv=KE,nc=QE;Vi.document;const Qr=!!Xe.documentElement&&!!Xe.head&&typeof Xe.addEventListener=="function"&&typeof Xe.createElement=="function",YE=~jv.indexOf("MSIE")||~jv.indexOf("Trident/");var Ox=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Dx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,XE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Lx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},JE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ht="classic",rh="duotone",Mx="sharp",Vx="sharp-duotone",ZE=[Ht,rh,Mx,Vx],Fx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ux={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},jx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Bx=["fak","fa-kit","fakd","fa-kit-duotone"],Bv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$x=["kit"],Hx={kit:{"fa-kit":"fak"}},Wx=["fak","fakd"],qx={kit:{fak:"fa-kit"}},$v={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Kx=["fak","fa-kit","fakd","fa-kit-duotone"],Qx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Xx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},bd={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Jx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Od=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Gx,...Jx],Zx=["solid","regular","light","thin","duotone","brands"],ew=[1,2,3,4,5,6,7,8,9,10],eN=ew.concat([11,12,13,14,15,16,17,18,19,20]),tN=[...Object.keys(Xx),...Zx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rc.GROUP,rc.SWAP_OPACITY,rc.PRIMARY,rc.SECONDARY].concat(ew.map(n=>"".concat(n,"x"))).concat(eN.map(n=>"w-".concat(n))),nN={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Wr="___FONT_AWESOME___",Dd=16,tw="fa",nw="svg-inline--fa",Is="data-fa-i2svg",Ld="data-fa-pseudo-element",rN="data-fa-pseudo-element-pending",Qp="data-prefix",Yp="data-icon",Hv="fontawesome-i2svg",iN="async",sN=["HTML","HEAD","STYLE","SCRIPT"],rw=(()=>{try{return!0}catch{return!1}})();function Nl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Ht]}})}const iw=te({},XE);iw[Ht]=te(te(te(te({},{"fa-duotone":"duotone"}),XE[Ht]),Bv.kit),Bv["kit-duotone"]);const oN=Nl(iw),Md=te({},zx);Md[Ht]=te(te(te(te({},{duotone:"fad"}),Md[Ht]),$v.kit),$v["kit-duotone"]);const Wv=Nl(Md),Vd=te({},bd);Vd[Ht]=te(te({},Vd[Ht]),qx.kit);const Xp=Nl(Vd),Fd=te({},Yx);Fd[Ht]=te(te({},Fd[Ht]),Hx.kit);Nl(Fd);const aN=Ox,sw="fa-layers-text",lN=Dx,uN=te({},Fx);Nl(uN);const cN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zf=Lx,hN=[...$x,...tN],sl=Vi.FontAwesomeConfig||{};function fN(n){var e=Xe.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function dN(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Xe&&typeof Xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const o=dN(fN(t));o!=null&&(sl[i]=o)});const ow={styleDefault:"solid",familyDefault:Ht,cssPrefix:tw,replacementClass:nw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sl.familyPrefix&&(sl.cssPrefix=sl.familyPrefix);const $o=te(te({},ow),sl);$o.autoReplaceSvg||($o.observeMutations=!1);const de={};Object.keys(ow).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){$o[n]=e,ol.forEach(t=>t(de))},get:function(){return $o[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){$o.cssPrefix=n,ol.forEach(e=>e(de))},get:function(){return $o.cssPrefix}});Vi.FontAwesomeConfig=de;const ol=[];function pN(n){return ol.push(n),()=>{ol.splice(ol.indexOf(n),1)}}const Ti=Dd,ir={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mN(n){if(!n||!Qr)return;const e=Xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=Xe.head.childNodes;let i=null;for(let o=t.length-1;o>-1;o--){const l=t[o],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=l)}return Xe.head.insertBefore(e,i),n}const gN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yl(){let n=12,e="";for(;n-- >0;)e+=gN[Math.random()*62|0];return e}function Zo(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Jp(n){return n.classList?Zo(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function aw(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yN(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(aw(n[t]),'" '),"").trim()}function ih(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Zp(n){return n.size!==ir.size||n.x!==ir.x||n.y!==ir.y||n.rotate!==ir.rotate||n.flipX||n.flipY}function vN(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(f)},y={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:p,path:y}}function _N(n){let{transform:e,width:t=Dd,height:i=Dd,startCentered:o=!1}=n,l="";return o&&YE?l+="translate(".concat(e.x/Ti-t/2,"em, ").concat(e.y/Ti-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Ti,"em), calc(-50% + ").concat(e.y/Ti,"em)) "):l+="translate(".concat(e.x/Ti,"em, ").concat(e.y/Ti,"em) "),l+="scale(".concat(e.size/Ti*(e.flipX?-1:1),", ").concat(e.size/Ti*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var EN=`:root, :host {
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
}`;function lw(){const n=tw,e=nw,t=de.cssPrefix,i=de.replacementClass;let o=EN;if(t!==n||i!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");o=o.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(f,".".concat(i))}return o}let qv=!1;function ed(){de.autoAddCss&&!qv&&(mN(lw()),qv=!0)}var wN={mixout(){return{dom:{css:lw,insertCss:ed}}},hooks(){return{beforeDOMElementCreation(){ed()},beforeI2svg(){ed()}}}};const qr=Vi||{};qr[Wr]||(qr[Wr]={});qr[Wr].styles||(qr[Wr].styles={});qr[Wr].hooks||(qr[Wr].hooks={});qr[Wr].shims||(qr[Wr].shims=[]);var sr=qr[Wr];const uw=[],cw=function(){Xe.removeEventListener("DOMContentLoaded",cw),Mc=1,uw.map(n=>n())};let Mc=!1;Qr&&(Mc=(Xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xe.readyState),Mc||Xe.addEventListener("DOMContentLoaded",cw));function TN(n){Qr&&(Mc?setTimeout(n,0):uw.push(n))}function bl(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?aw(n):"<".concat(e," ").concat(yN(t),">").concat(i.map(bl).join(""),"</").concat(e,">")}function Gv(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var td=function(e,t,i,o){var l=Object.keys(e),c=l.length,f=t,p,y,_;for(i===void 0?(p=1,_=e[l[0]]):(p=0,_=i);p<c;p++)y=l[p],_=f(_,e[y],y,e);return _};function IN(n){const e=[];let t=0;const i=n.length;for(;t<i;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<i){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((o&1023)<<10)+(l&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function Ud(n){const e=IN(n);return e.length===1?e[0].toString(16):null}function SN(n,e){const t=n.length;let i=n.charCodeAt(e),o;return i>=55296&&i<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function Kv(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function jd(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,o=Kv(e);typeof sr.hooks.addPack=="function"&&!i?sr.hooks.addPack(n,Kv(e)):sr.styles[n]=te(te({},sr.styles[n]||{}),o),n==="fas"&&jd("fa",e)}const{styles:vl,shims:AN}=sr,hw=Object.keys(Xp),PN=hw.reduce((n,e)=>(n[e]=Object.keys(Xp[e]),n),{});let em=null,fw={},dw={},pw={},mw={},gw={};function kN(n){return~hN.indexOf(n)}function RN(n,e){const t=e.split("-"),i=t[0],o=t.slice(1).join("-");return i===n&&o!==""&&!kN(o)?o:null}const yw=()=>{const n=i=>td(vl,(o,l,c)=>(o[c]=td(l,i,{}),o),{});fw=n((i,o,l)=>(o[3]&&(i[o[3]]=l),o[2]&&o[2].filter(f=>typeof f=="number").forEach(f=>{i[f.toString(16)]=l}),i)),dw=n((i,o,l)=>(i[l]=l,o[2]&&o[2].filter(f=>typeof f=="string").forEach(f=>{i[f]=l}),i)),gw=n((i,o,l)=>{const c=o[2];return i[l]=l,c.forEach(f=>{i[f]=l}),i});const e="far"in vl||de.autoFetchSvg,t=td(AN,(i,o)=>{const l=o[0];let c=o[1];const f=o[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(i.names[l]={prefix:c,iconName:f}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:c,iconName:f}),i},{names:{},unicodes:{}});pw=t.names,mw=t.unicodes,em=sh(de.styleDefault,{family:de.familyDefault})};pN(n=>{em=sh(n.styleDefault,{family:de.familyDefault})});yw();function tm(n,e){return(fw[n]||{})[e]}function CN(n,e){return(dw[n]||{})[e]}function ys(n,e){return(gw[n]||{})[e]}function vw(n){return pw[n]||{prefix:null,iconName:null}}function xN(n){const e=mw[n],t=tm("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Fi(){return em}const _w=()=>({prefix:null,iconName:null,rest:[]});function NN(n){let e=Ht;const t=hw.reduce((i,o)=>(i[o]="".concat(de.cssPrefix,"-").concat(o),i),{});return ZE.forEach(i=>{(n.includes(t[i])||n.some(o=>PN[i].includes(o)))&&(e=i)}),e}function sh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Ht}=e,i=oN[t][n];if(t===rh&&!n)return"fad";const o=Wv[t][n]||Wv[t][i],l=n in sr.styles?n:null;return o||l||null}function bN(n){let e=[],t=null;return n.forEach(i=>{const o=RN(de.cssPrefix,i);o?t=o:i&&e.push(i)}),{iconName:t,rest:e}}function Qv(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function oh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const o=Od.concat(Kx),l=Qv(n.filter(T=>o.includes(T))),c=Qv(n.filter(T=>!Od.includes(T))),f=l.filter(T=>(i=T,!JE.includes(T))),[p=null]=f,y=NN(l),_=te(te({},bN(c)),{},{prefix:sh(p,{family:y})});return te(te(te({},_),MN({values:n,family:y,styles:vl,config:de,canonical:_,givenPrefix:i})),ON(t,i,_))}function ON(n,e,t){let{prefix:i,iconName:o}=t;if(n||!i||!o)return{prefix:i,iconName:o};const l=e==="fa"?vw(o):{},c=ys(i,o);return o=l.iconName||c||o,i=l.prefix||i,i==="far"&&!vl.far&&vl.fas&&!de.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const DN=ZE.filter(n=>n!==Ht||n!==rh),LN=Object.keys(bd).filter(n=>n!==Ht).map(n=>Object.keys(bd[n])).flat();function MN(n){const{values:e,family:t,canonical:i,givenPrefix:o="",styles:l={},config:c={}}=n,f=t===rh,p=e.includes("fa-duotone")||e.includes("fad"),y=c.familyDefault==="duotone",_=i.prefix==="fad"||i.prefix==="fa-duotone";if(!f&&(p||y||_)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&DN.includes(t)&&(Object.keys(l).find(I=>LN.includes(I))||c.autoFetchSvg)){const I=jx.get(t).defaultShortPrefixId;i.prefix=I,i.iconName=ys(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=Fi()||"fas"),i}class VN{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(l=>{this.definitions[l]=te(te({},this.definitions[l]||{}),o[l]),jd(l,o[l]);const c=Xp[Ht][l];c&&jd(c,o[l]),yw()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(o=>{const{prefix:l,iconName:c,icon:f}=i[o],p=f[2];e[l]||(e[l]={}),p.length>0&&p.forEach(y=>{typeof y=="string"&&(e[l][y]=f)}),e[l][c]=f}),e}}let Yv=[],ko={};const Oo={},FN=Object.keys(Oo);function UN(n,e){let{mixoutsTo:t}=e;return Yv=n,ko={},Object.keys(Oo).forEach(i=>{FN.indexOf(i)===-1&&delete Oo[i]}),Yv.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(l=>{typeof o[l]=="function"&&(t[l]=o[l]),typeof o[l]=="object"&&Object.keys(o[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=o[l][c]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(c=>{ko[c]||(ko[c]=[]),ko[c].push(l[c])})}i.provides&&i.provides(Oo)}),t}function zd(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];return(ko[n]||[]).forEach(c=>{e=c.apply(null,[e,...i])}),e}function Ss(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(ko[n]||[]).forEach(l=>{l.apply(null,t)})}function Ui(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oo[n]?Oo[n].apply(null,e):void 0}function Bd(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Fi();if(e)return e=ys(t,e)||e,Gv(Ew.definitions,t,e)||Gv(sr.styles,t,e)}const Ew=new VN,jN=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,Ss("noAuto")},zN={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qr?(Ss("beforeI2svg",n),Ui("pseudoElements2svg",n),Ui("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,TN(()=>{$N({autoReplaceSvgRoot:e}),Ss("watch",n)})}},BN={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:ys(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=sh(n[0]);return{prefix:t,iconName:ys(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(aN))){const e=oh(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Fi(),iconName:ys(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Fi();return{prefix:e,iconName:ys(e,n)||n}}}},dn={noAuto:jN,config:de,dom:zN,parse:BN,library:Ew,findIconDefinition:Bd,toHtml:bl},$N=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Xe}=n;(Object.keys(sr.styles).length>0||de.autoFetchSvg)&&Qr&&de.autoReplaceSvg&&dn.dom.i2svg({node:e})};function ah(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>bl(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Qr)return;const t=Xe.createElement("div");return t.innerHTML=n.html,t.children}}),n}function HN(n){let{children:e,main:t,mask:i,attributes:o,styles:l,transform:c}=n;if(Zp(c)&&t.found&&!i.found){const{width:f,height:p}=t,y={x:f/p/2,y:.5};o.style=ih(te(te({},l),{},{"transform-origin":"".concat(y.x+c.x/16,"em ").concat(y.y+c.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function WN(n){let{prefix:e,iconName:t,children:i,attributes:o,symbol:l}=n;const c=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},o),{},{id:c}),children:i}]}]}function nm(n){const{icons:{main:e,mask:t},prefix:i,iconName:o,transform:l,symbol:c,title:f,maskId:p,titleId:y,extra:_,watchable:T=!1}=n,{width:I,height:N}=t.found?t:e,z=Wx.includes(i),W=[de.replacementClass,o?"".concat(de.cssPrefix,"-").concat(o):""].filter(Ee=>_.classes.indexOf(Ee)===-1).filter(Ee=>Ee!==""||!!Ee).concat(_.classes).join(" ");let M={children:[],attributes:te(te({},_.attributes),{},{"data-prefix":i,"data-icon":o,class:W,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})};const Q=z&&!~_.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};T&&(M.attributes[Is]=""),f&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(y||yl())},children:[f]}),delete M.attributes.title);const J=te(te({},M),{},{prefix:i,iconName:o,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:te(te({},Q),_.styles)}),{children:K,attributes:le}=t.found&&e.found?Ui("generateAbstractMask",J)||{children:[],attributes:{}}:Ui("generateAbstractIcon",J)||{children:[],attributes:{}};return J.children=K,J.attributes=le,c?WN(J):HN(J)}function Xv(n){const{content:e,width:t,height:i,transform:o,title:l,extra:c,watchable:f=!1}=n,p=te(te(te({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});f&&(p[Is]="");const y=te({},c.styles);Zp(o)&&(y.transform=_N({transform:o,startCentered:!0,width:t,height:i}),y["-webkit-transform"]=y.transform);const _=ih(y);_.length>0&&(p.style=_);const T=[];return T.push({tag:"span",attributes:p,children:[e]}),l&&T.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),T}function qN(n){const{content:e,title:t,extra:i}=n,o=te(te(te({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),l=ih(i.styles);l.length>0&&(o.style=l);const c=[];return c.push({tag:"span",attributes:o,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:nd}=sr;function $d(n){const e=n[0],t=n[1],[i]=n.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zf.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:o}}const GN={found:!1,width:512,height:512};function KN(n,e){!rw&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Hd(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=Fi()),new Promise((i,o)=>{if(t==="fa"){const l=vw(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&nd[e]&&nd[e][n]){const l=nd[e][n];return i($d(l))}KN(n,e),i(te(te({},GN),{},{icon:de.showMissingIcons&&n?Ui("missingIconAbstract")||{}:{}}))})}const Jv=()=>{},Wd=de.measurePerformance&&nc&&nc.mark&&nc.measure?nc:{mark:Jv,measure:Jv},Za='FA "6.7.2"',QN=n=>(Wd.mark("".concat(Za," ").concat(n," begins")),()=>ww(n)),ww=n=>{Wd.mark("".concat(Za," ").concat(n," ends")),Wd.measure("".concat(Za," ").concat(n),"".concat(Za," ").concat(n," begins"),"".concat(Za," ").concat(n," ends"))};var rm={begin:QN,end:ww};const mc=()=>{};function Zv(n){return typeof(n.getAttribute?n.getAttribute(Is):null)=="string"}function YN(n){const e=n.getAttribute?n.getAttribute(Qp):null,t=n.getAttribute?n.getAttribute(Yp):null;return e&&t}function XN(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function JN(){return de.autoReplaceSvg===!0?gc.replace:gc[de.autoReplaceSvg]||gc.replace}function ZN(n){return Xe.createElementNS("http://www.w3.org/2000/svg",n)}function e2(n){return Xe.createElement(n)}function Tw(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?ZN:e2}=e;if(typeof n=="string")return Xe.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(Tw(l,{ceFn:t}))}),i}function t2(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const gc={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(Tw(t),e)}),e.getAttribute(Is)===null&&de.keepOriginalSource){let t=Xe.createComment(t2(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Jp(e).indexOf(de.replacementClass))return gc.replace(n);const i=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,f)=>(f===de.replacementClass||f.match(i)?c.toSvg.push(f):c.toNode.push(f),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const o=t.map(l=>bl(l)).join(`
`);e.setAttribute(Is,""),e.innerHTML=o}};function e_(n){n()}function Iw(n,e){const t=typeof e=="function"?e:mc;if(n.length===0)t();else{let i=e_;de.mutateApproach===iN&&(i=Vi.requestAnimationFrame||e_),i(()=>{const o=JN(),l=rm.begin("mutate");n.map(o),l(),t()})}}let im=!1;function Sw(){im=!0}function qd(){im=!1}let Vc=null;function t_(n){if(!zv||!de.observeMutations)return;const{treeCallback:e=mc,nodeCallback:t=mc,pseudoElementsCallback:i=mc,observeMutationsRoot:o=Xe}=n;Vc=new zv(l=>{if(im)return;const c=Fi();Zo(l).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!Zv(f.addedNodes[0])&&(de.searchPseudoElements&&i(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&de.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&Zv(f.target)&&~cN.indexOf(f.attributeName))if(f.attributeName==="class"&&YN(f.target)){const{prefix:p,iconName:y}=oh(Jp(f.target));f.target.setAttribute(Qp,p||c),y&&f.target.setAttribute(Yp,y)}else XN(f.target)&&t(f.target)})}),Qr&&Vc.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function n2(){Vc&&Vc.disconnect()}function r2(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,o)=>{const l=o.split(":"),c=l[0],f=l.slice(1);return c&&f.length>0&&(i[c]=f.join(":").trim()),i},{})),t}function i2(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let o=oh(Jp(n));return o.prefix||(o.prefix=Fi()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=CN(o.prefix,n.innerText)||tm(o.prefix,Ud(n.innerText))),!o.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function s2(n){const e=Zo(n.attributes).reduce((o,l)=>(o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(i||yl()):(e["aria-hidden"]="true",e.focusable="false")),e}function o2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ir,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:o}=i2(n),l=s2(n),c=zd("parseNodeAttributes",{},n);let f=e.styleParser?r2(n):[];return te({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:ir,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:l}},c)}const{styles:a2}=sr;function Aw(n){const e=de.autoReplaceSvg==="nest"?n_(n,{styleParser:!1}):n_(n);return~e.extra.classes.indexOf(sw)?Ui("generateLayersText",n,e):Ui("generateSvgReplacementMutation",n,e)}function l2(){return[...Bx,...Od]}function r_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qr)return Promise.resolve();const t=Xe.documentElement.classList,i=_=>t.add("".concat(Hv,"-").concat(_)),o=_=>t.remove("".concat(Hv,"-").concat(_)),l=de.autoFetchSvg?l2():JE.concat(Object.keys(a2));l.includes("fa")||l.push("fa");const c=[".".concat(sw,":not([").concat(Is,"])")].concat(l.map(_=>".".concat(_,":not([").concat(Is,"])"))).join(", ");if(c.length===0)return Promise.resolve();let f=[];try{f=Zo(n.querySelectorAll(c))}catch{}if(f.length>0)i("pending"),o("complete");else return Promise.resolve();const p=rm.begin("onTree"),y=f.reduce((_,T)=>{try{const I=Aw(T);I&&_.push(I)}catch(I){rw||I.name==="MissingIcon"&&console.error(I)}return _},[]);return new Promise((_,T)=>{Promise.all(y).then(I=>{Iw(I,()=>{i("active"),i("complete"),o("pending"),typeof e=="function"&&e(),p(),_()})}).catch(I=>{p(),T(I)})})}function u2(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Aw(n).then(t=>{t&&Iw([t],e)})}function c2(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Bd(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:Bd(o||{})),n(i,te(te({},t),{},{mask:o}))}}const h2=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ir,symbol:i=!1,mask:o=null,maskId:l=null,title:c=null,titleId:f=null,classes:p=[],attributes:y={},styles:_={}}=e;if(!n)return;const{prefix:T,iconName:I,icon:N}=n;return ah(te({type:"icon"},n),()=>(Ss("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(c?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(f||yl()):(y["aria-hidden"]="true",y.focusable="false")),nm({icons:{main:$d(N),mask:o?$d(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:I,transform:te(te({},ir),t),symbol:i,title:c,maskId:l,titleId:f,extra:{attributes:y,styles:_,classes:p}})))};var f2={mixout(){return{icon:c2(h2)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=r_,n.nodeCallback=u2,n}}},provides(n){n.i2svg=function(e){const{node:t=Xe,callback:i=()=>{}}=e;return r_(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:o,titleId:l,prefix:c,transform:f,symbol:p,mask:y,maskId:_,extra:T}=t;return new Promise((I,N)=>{Promise.all([Hd(i,c),y.iconName?Hd(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(z=>{let[W,M]=z;I([e,nm({icons:{main:W,mask:M},prefix:c,iconName:i,transform:f,symbol:p,maskId:_,title:o,titleId:l,extra:T,watchable:!0})])}).catch(N)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:o,transform:l,styles:c}=e;const f=ih(c);f.length>0&&(i.style=f);let p;return Zp(l)&&(p=Ui("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),t.push(p||o.icon),{children:t,attributes:i}}}},d2={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return ah({type:"layer"},()=>{Ss("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(o=>{Array.isArray(o)?o.map(l=>{i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},p2={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:o={},styles:l={}}=e;return ah({type:"counter",content:n},()=>(Ss("beforeDOMElementCreation",{content:n,params:e}),qN({content:n.toString(),title:t,extra:{attributes:o,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...i]}})))}}}},m2={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ir,title:i=null,classes:o=[],attributes:l={},styles:c={}}=e;return ah({type:"text",content:n},()=>(Ss("beforeDOMElementCreation",{content:n,params:e}),Xv({content:n,transform:te(te({},ir),t),title:i,extra:{attributes:l,styles:c,classes:["".concat(de.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:o,extra:l}=t;let c=null,f=null;if(YE){const p=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();c=y.width/p,f=y.height/p}return de.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,Xv({content:e.innerHTML,width:c,height:f,transform:o,title:i,extra:l,watchable:!0})])}}};const g2=new RegExp('"',"ug"),i_=[1105920,1112319],s_=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),Ux),nN),Qx),Gd=Object.keys(s_).reduce((n,e)=>(n[e.toLowerCase()]=s_[e],n),{}),y2=Object.keys(Gd).reduce((n,e)=>{const t=Gd[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function v2(n){const e=n.replace(g2,""),t=SN(e,0),i=t>=i_[0]&&t<=i_[1],o=e.length===2?e[0]===e[1]:!1;return{value:Ud(o?e[0]:e),isSecondary:i||o}}function _2(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),o=isNaN(i)?"normal":i;return(Gd[t]||{})[o]||y2[t]}function o_(n,e){const t="".concat(rN).concat(e.replace(":","-"));return new Promise((i,o)=>{if(n.getAttribute(t)!==null)return i();const c=Zo(n.children).filter(I=>I.getAttribute(Ld)===e)[0],f=Vi.getComputedStyle(n,e),p=f.getPropertyValue("font-family"),y=p.match(lN),_=f.getPropertyValue("font-weight"),T=f.getPropertyValue("content");if(c&&!y)return n.removeChild(c),i();if(y&&T!=="none"&&T!==""){const I=f.getPropertyValue("content");let N=_2(p,_);const{value:z,isSecondary:W}=v2(I),M=y[0].startsWith("FontAwesome");let Q=tm(N,z),J=Q;if(M){const K=xN(z);K.iconName&&K.prefix&&(Q=K.iconName,N=K.prefix)}if(Q&&!W&&(!c||c.getAttribute(Qp)!==N||c.getAttribute(Yp)!==J)){n.setAttribute(t,J),c&&n.removeChild(c);const K=o2(),{extra:le}=K;le.attributes[Ld]=e,Hd(Q,N).then(Ee=>{const Te=nm(te(te({},K),{},{icons:{main:Ee,mask:_w()},prefix:N,iconName:J,extra:le,watchable:!0})),x=Xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(x,n.firstChild):n.appendChild(x),x.outerHTML=Te.map(S=>bl(S)).join(`
`),n.removeAttribute(t),i()}).catch(o)}else i()}else i()})}function E2(n){return Promise.all([o_(n,"::before"),o_(n,"::after")])}function w2(n){return n.parentNode!==document.head&&!~sN.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Ld)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function a_(n){if(Qr)return new Promise((e,t)=>{const i=Zo(n.querySelectorAll("*")).filter(w2).map(E2),o=rm.begin("searchPseudoElements");Sw(),Promise.all(i).then(()=>{o(),qd(),e()}).catch(()=>{o(),qd(),t()})})}var T2={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=a_,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=Xe}=e;de.searchPseudoElements&&a_(t)}}};let l_=!1;var I2={mixout(){return{dom:{unwatch(){Sw(),l_=!0}}}},hooks(){return{bootstrap(){t_(zd("mutationObserverCallbacks",{}))},noAuto(){n2()},watch(n){const{observeMutationsRoot:e}=n;l_?qd():t_(zd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const u_=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const o=i.toLowerCase().split("-"),l=o[0];let c=o.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var S2={mixout(){return{parse:{transform:n=>u_(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=u_(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:o,iconWidth:l}=e;const c={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),y="rotate(".concat(i.rotate," 0 0)"),_={transform:"".concat(f," ").concat(p," ").concat(y)},T={transform:"translate(".concat(l/2*-1," -256)")},I={outer:c,inner:_,path:T};return{tag:"g",attributes:te({},I.outer),children:[{tag:"g",attributes:te({},I.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),I.path)}]}]}}}};const rd={x:0,y:0,width:"100%",height:"100%"};function c_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function A2(n){return n.tag==="g"?n.children:[n]}var P2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?oh(t.split(" ").map(o=>o.trim())):_w();return i.prefix||(i.prefix=Fi()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:o,mask:l,maskId:c,transform:f}=e;const{width:p,icon:y}=o,{width:_,icon:T}=l,I=vN({transform:f,containerWidth:_,iconWidth:p}),N={tag:"rect",attributes:te(te({},rd),{},{fill:"white"})},z=y.children?{children:y.children.map(c_)}:{},W={tag:"g",attributes:te({},I.inner),children:[c_(te({tag:y.tag,attributes:te(te({},y.attributes),I.path)},z))]},M={tag:"g",attributes:te({},I.outer),children:[W]},Q="mask-".concat(c||yl()),J="clip-".concat(c||yl()),K={tag:"mask",attributes:te(te({},rd),{},{id:Q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,M]},le={tag:"defs",children:[{tag:"clipPath",attributes:{id:J},children:A2(T)},K]};return t.push(le,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(J,")"),mask:"url(#".concat(Q,")")},rd)}),{children:t,attributes:i}}}},k2={provides(n){let e=!1;Vi.matchMedia&&(e=Vi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=te(te({},o),{},{attributeName:"opacity"}),c={tag:"circle",attributes:te(te({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:te(te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:te(te({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},R2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},C2=[wN,f2,d2,p2,m2,T2,I2,S2,P2,k2,R2];UN(C2,{mixoutsTo:dn});dn.noAuto;dn.config;dn.library;dn.dom;const Kd=dn.parse;dn.findIconDefinition;dn.toHtml;const x2=dn.icon;dn.layer;dn.text;dn.counter;var id={exports:{}},sd,h_;function N2(){if(h_)return sd;h_=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sd=n,sd}var od,f_;function b2(){if(f_)return od;f_=1;var n=N2();function e(){}function t(){}return t.resetWarningCache=e,od=function(){function i(c,f,p,y,_,T){if(T!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}i.isRequired=i;function o(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},od}var d_;function O2(){return d_||(d_=1,id.exports=b2()()),id.exports}var D2=O2();const xe=y_(D2);function p_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function rr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?p_(Object(t),!0).forEach(function(i){Ro(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Fc(n){"@babel/helpers - typeof";return Fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fc(n)}function Ro(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function L2(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function M2(n,e){if(n==null)return{};var t=L2(n,e),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)i=l[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Qd(n){return V2(n)||F2(n)||U2(n)||j2()}function V2(n){if(Array.isArray(n))return Yd(n)}function F2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function U2(n,e){if(n){if(typeof n=="string")return Yd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yd(n,e)}}function Yd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function j2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z2(n){var e,t=n.beat,i=n.fade,o=n.beatFade,l=n.bounce,c=n.shake,f=n.flash,p=n.spin,y=n.spinPulse,_=n.spinReverse,T=n.pulse,I=n.fixedWidth,N=n.inverse,z=n.border,W=n.listItem,M=n.flip,Q=n.size,J=n.rotation,K=n.pull,le=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":c,"fa-flash":f,"fa-spin":p,"fa-spin-reverse":_,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":I,"fa-inverse":N,"fa-border":z,"fa-li":W,"fa-flip":M===!0,"fa-flip-horizontal":M==="horizontal"||M==="both","fa-flip-vertical":M==="vertical"||M==="both"},Ro(e,"fa-".concat(Q),typeof Q<"u"&&Q!==null),Ro(e,"fa-rotate-".concat(J),typeof J<"u"&&J!==null&&J!==0),Ro(e,"fa-pull-".concat(K),typeof K<"u"&&K!==null),Ro(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(le).map(function(Ee){return le[Ee]?Ee:null}).filter(function(Ee){return Ee})}function B2(n){return n=n-0,n===n}function Pw(n){return B2(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var $2=["style"];function H2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function W2(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),o=Pw(t.slice(0,i)),l=t.slice(i+1).trim();return o.startsWith("webkit")?e[H2(o)]=l:e[o]=l,e},{})}function kw(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(p){return kw(n,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,y){var _=e.attributes[y];switch(y){case"class":p.attrs.className=_,delete e.attributes.class;break;case"style":p.attrs.style=W2(_);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=_:p.attrs[Pw(y)]=_}return p},{attrs:{}}),l=t.style,c=l===void 0?{}:l,f=M2(t,$2);return o.attrs.style=rr(rr({},o.attrs.style),c),n.apply(void 0,[e.tag,rr(rr({},o.attrs),f)].concat(Qd(i)))}var Rw=!1;try{Rw=!0}catch{}function q2(){if(!Rw&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function m_(n){if(n&&Fc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Kd.icon)return Kd.icon(n);if(n===null)return null;if(n&&Fc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function ad(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ro({},n,e):{}}var g_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},sm=v_.forwardRef(function(n,e){var t=rr(rr({},g_),n),i=t.icon,o=t.mask,l=t.symbol,c=t.className,f=t.title,p=t.titleId,y=t.maskId,_=m_(i),T=ad("classes",[].concat(Qd(z2(t)),Qd((c||"").split(" ")))),I=ad("transform",typeof t.transform=="string"?Kd.transform(t.transform):t.transform),N=ad("mask",m_(o)),z=x2(_,rr(rr(rr(rr({},T),I),N),{},{symbol:l,title:f,titleId:p,maskId:y}));if(!z)return q2("Could not find icon",_),null;var W=z.abstract,M={ref:e};return Object.keys(t).forEach(function(Q){g_.hasOwnProperty(Q)||(M[Q]=t[Q])}),G2(W[0],M)});sm.displayName="FontAwesomeIcon";sm.propTypes={beat:xe.bool,border:xe.bool,beatFade:xe.bool,bounce:xe.bool,className:xe.string,fade:xe.bool,flash:xe.bool,mask:xe.oneOfType([xe.object,xe.array,xe.string]),maskId:xe.string,fixedWidth:xe.bool,inverse:xe.bool,flip:xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xe.oneOfType([xe.object,xe.array,xe.string]),listItem:xe.bool,pull:xe.oneOf(["right","left"]),pulse:xe.bool,rotation:xe.oneOf([0,90,180,270]),shake:xe.bool,size:xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xe.bool,spinPulse:xe.bool,spinReverse:xe.bool,symbol:xe.oneOfType([xe.bool,xe.string]),title:xe.string,titleId:xe.string,transform:xe.oneOfType([xe.string,xe.object]),swapOpacity:xe.bool};var G2=kw.bind(null,v_.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const K2={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]};function Cw(){const{user:n}=fn();return D.jsx("div",{className:"auth",children:n?D.jsx("button",{className:"profile__btn",onClick:qR,children:"Выйти"}):D.jsx("button",{className:"profile__btn",onClick:WR,children:"Войти"})})}function Q2(){const{user:n}=fn();return D.jsxs("header",{className:"header",children:[D.jsx(_s,{to:"/",className:"link",children:D.jsx("div",{className:"header__logo",children:"Multi Cinema"})}),D.jsxs("div",{className:"header__menu",children:[D.jsxs(_s,{to:"/my-films",className:"link my-watch",children:[D.jsx(sm,{icon:K2}),D.jsx("span",{children:"Мои фильмы"})]}),n?D.jsx(_s,{to:"/profile",className:"link user",children:D.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"user__avatar",title:n.displayName})}):D.jsx(Cw,{})]})]})}function Y2(){var t;const{likedMovies:n}=fn(),e=n[n.length-1];return D.jsx(D.Fragment,{children:n.length>1&&D.jsx("section",{className:"continue-watch",children:D.jsxs("div",{className:"container",children:[D.jsx("h2",{className:"title-2",children:"Продолжить просмотр"}),D.jsxs("div",{className:"continue-watch__item",children:[D.jsx(_s,{to:`/movie/${e.id}`,state:{data:e},className:"film__link",children:(t=e.poster)!=null&&t.url?D.jsx("img",{src:e.poster.url,alt:e.name,className:"continue-watch__poster"}):D.jsx("div",{className:"continue-watch__poster",children:"Not found"})}),D.jsx("h3",{className:"continue-watch__name film__name",children:e.name})]})]})})})}const Pn=["0ZYHMMB-0PK4KA6-Q98FNTP-8XYEN0B","HCF37A2-V3HMP2C-Q5JFH12-HP164ZR","G8REABY-1JJM9JE-NFH2A9H-Q2A36EY","R2B4B27-4G8M3HT-GT1TMFA-JM0QG10","4P9RGZ9-0QBM11G-GY2A4JG-44FF306","RJKDTJT-1HDM3FX-NGWJ4T8-KHQMWQF","41AQJTS-HXNM9CK-KJ8REHP-284Q8GZ","8MBXH6M-W3M43YM-HV7T7HN-XJQJE83","T2SGZKA-DYJ4K85-Q070520-D3YA3XG","YX89AQD-1JVMCJ4-M8RG3KK-VBPYRJC","VR6TBA5-NT0MCJJ-GK49GZ4-TAYGGW0","FCE2VJ9-C2K4Z3C-MVJGV8V-XEGG0AW","2TMGQFT-AJZ4R8W-JTR4RQA-XYBEM50","56PJR4X-SG5M5K8-QX04GKP-SPFN41S","W2RBCG6-XPWM7S9-GY34VT4-1MSVB9K","QA9F6D2-CPF4P5P-PSCK2VH-QXNXX7H","T89S8JR-Y5343QN-HCRHHVV-KATN0A8","H57DR0Y-AF04JM8-JNX8B57-TTA4XS6","ENY9588-TYQ4MR0-HSG1Z8G-PHWMK98","V51QHR8-FA8MCCE-MDMH6GA-28H6A0Y","D4526KJ-D0WM93V-KFK9H7T-VPKK17K","5MHJKGM-MQ7MNRM-JCTY8A5-BXKXJ2P","X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB","2RGCGGC-0AWMZ0M-J32EMAV-6JW3YZ3","68W27N1-8NF4JP3-P6B51RS-FT0N5AC","7KA28B8-JP44HG0-Q43HR6N-VRN6AJ1","67N84PZ-HPAMZ6R-MJH9SFD-VTMYSAC","78HNYJZ-HQPM56Z-JWN92NH-FG7ZRDQ","3SVTEEX-Y8HMTYJ-J3ENEFG-WC1N623","5QVH807-GAP49T6-QY0P863-EQW1F83","220FRRR-ZF0M9VE-JTNC41C-FSB7ATX","F6QX0P1-FQTMPFY-PWNT126-KXFHWZK","84S4SNX-Y084WMK-K7FV73W-8G8P6MH","5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER"],xw=async(n,e,t,i,o=1)=>{function l(f){t(p=>({...p,actual:f.page,all:f.pages}))}let c;for(let f=0;f<Pn.length;f++)try{const p={method:"GET",headers:{accept:"application/json","X-API-KEY":Pn[f]}};let y=new URLSearchParams({page:o.toString(),limit:"30",query:n});const _=await fetch("https://api.poiskkino.dev/v1.4/movie/search?"+y,p);if(!_.ok){if(_.status===401||_.status===403){console.log(`API key ${f} failed, trying next key...`);continue}throw new Error(`API request failed with status ${_.status}`)}c=await _.json();break}catch(p){if(console.error(`Error with API key ${f}:`,p),f===Pn.length-1)throw new Error("All API keys failed")}c&&(l(c),e(c.docs)),i(!1)},Nw=async(n,e,t,i,o=1)=>{function l(f){t(p=>({...p,actual:f.page,all:f.pages}))}let c;for(let f=0;f<Pn.length;f++)try{const p={method:"GET",headers:{accept:"application/json","X-API-KEY":Pn[f]}};let y=new URLSearchParams({page:o.toString(),limit:"30",sortField:"year",sortType:"-1",year:`1990-${new Date().getFullYear()}`});y.append("sortField","votes.imdb"),y.append("sortType","-1"),n==="сериалы"?y.append("isSeries","true"):y.append("genres.name",n);const _=await fetch("https://api.poiskkino.dev/v1.4/movie?"+y,p);if(!_.ok){if(_.status===401||_.status===403){console.log(`API key ${f} failed, trying next key...`);continue}throw new Error(`API request failed with status ${_.status}`)}c=await _.json();break}catch(p){if(console.error(`Error with API key ${f}:`,p),f===Pn.length-1)throw new Error("All API keys failed")}c&&(l(c),e(c.docs)),i(!1)},X2=async(n,e,t)=>{for(let i=0;i<Pn.length;i++)try{const o={method:"GET",headers:{accept:"application/json","X-API-KEY":Pn[i]}},l=await fetch(`https://api.poiskkino.dev/v1.4/movie/${n}`,o);if(!l.ok){if(l.status===401||l.status===403){console.log(`API key ${i} failed, trying next key...`);continue}throw new Error(`API request failed with status ${l.status}`)}const c=await l.json();e(c),t(!1);return}catch(o){if(console.error(`Error with API key ${i}:`,o),i===Pn.length-1)throw t(!1),new Error("All API keys failed")}},J2=async(n,e)=>{for(let t=0;t<Pn.length;t++)try{const i={method:"GET",headers:{accept:"application/json","X-API-KEY":Pn[t]}},[o,l]=await Promise.all([fetch("https://api.poiskkino.dev/v1.5/list/planned-to-watch-films?"+new URLSearchParams({limit:"50"}),i),fetch("https://api.poiskkino.dev/v1.5/list/popular-series?"+new URLSearchParams({limit:"25"}),i)]);if(!o.ok||!l.ok){if(o.status===401||o.status===403||l.status===401||l.status===403){console.log(`API key ${t} failed, trying next key...`);continue}throw new Error(`API request failed with status ${o.status}/${l.status}`)}const c=await o.json(),f=await l.json();n([c.movies.docs,f.movies.docs]),e(!1);return}catch(i){if(console.error(`Error with API key ${t}:`,i),t===Pn.length-1)throw e(!1),new Error("All API keys failed")}};function bw({}){const{setFilmName:n,setData:e,setPages:t,setIsLoading:i,setFetchMethod:o,setGenre:l}=fn(),[c,f]=$.useState(""),p=UE(),y=$.useCallback(T=>{T.preventDefault(),i(!0),o("searchByName"),n(c),xw(c,e,t,i),p("/search-result")},[c,n,e,t,i,p]),_=$.useCallback(T=>{i(!0),l(T),o("searchByGenre"),Nw(T,e,t,i),p("/search-result")},[e,t,i,p]);return D.jsx("section",{className:"search-form",children:D.jsx("div",{className:"container",children:D.jsxs("div",{className:"search-form__wrapper",children:[D.jsxs("form",{className:"form__search--name form",onSubmit:y,children:[D.jsx("input",{id:"formInput",className:"form__input",type:"text",value:c,placeholder:"Поиск",onChange:T=>f(T.target.value)}),D.jsx("button",{className:"form__btn",children:"Искать"})]}),D.jsxs("form",{className:"form__search--genre genre form",children:[D.jsx("label",{htmlFor:"genres",className:"genres__label",children:"Поиск по жанру:"}),D.jsxs("select",{name:"genres",id:"genres",className:"genres__select",onChange:T=>_(T.target.value.toLocaleLowerCase()),children:[D.jsx("option",{value:"",className:"genres__option",children:"Выберите жанр"}),D.jsx("option",{value:"Комедия",className:"genres__option",children:"Комедия"}),D.jsx("option",{value:"Ужасы",className:"genres__option",children:"Ужасы"}),D.jsx("option",{value:"Триллер",className:"genres__option",children:"Триллер"}),D.jsx("option",{value:"Боевик",className:"genres__option",children:"Боевик"}),D.jsx("option",{value:"Фантастика",className:"genres__option",children:"Фантастика"}),D.jsx("option",{value:"Сериалы",className:"genres__option",children:"Сериалы"}),D.jsx("option",{value:"Мультфильм",className:"genres__option",children:"Мультфильм"}),D.jsx("option",{value:"Приключения",className:"genres__option",children:"Приключения"}),D.jsx("option",{value:"Драма",className:"genres__option",children:"Драма"}),D.jsx("option",{value:"Фэнтези",className:"genres__option",children:"Фэнтези"}),D.jsx("option",{value:"Детектив",className:"genres__option",children:"Детектив"}),D.jsx("option",{value:"Криминал",className:"genres__option",children:"Криминал"}),D.jsx("option",{value:"Военный",className:"genres__option",children:"Военный"}),D.jsx("option",{value:"Биография",className:"genres__option",children:"Биография"})]})]})]})})})}const Z2="/milti-cinema-react/assets/loader-Q1L3BIgD.gif",Ho=$.memo(function({film:e}){var p,y;const{likedMovies:t,toggleLike:i}=fn(),[o,l]=$.useState(!0),c=$.useCallback(()=>{i(e)},[e,i]),f=$.useCallback(()=>{l(!1)},[]);return D.jsxs("div",{className:"film","data-id":e.id,children:[D.jsxs(_s,{to:`/movie/${e.id}`,state:{data:e},className:"film__link",children:[o&&((p=e.poster)==null?void 0:p.previewUrl)&&D.jsx("div",{className:"film__img--preloader-wrapper",children:D.jsx("img",{className:"film__img--preloader",src:Z2,alt:"Loading..."})}),(y=e.poster)!=null&&y.previewUrl?D.jsx("img",{className:"film__img",src:e.poster.previewUrl,alt:e.name,style:{display:o?"none":"block"},onLoad:f}):D.jsx("div",{className:"film__img",children:"Not found"})]}),D.jsx("h3",{className:"film__name",children:e.name}),D.jsx("button",{onClick:c,className:"film__like",children:t.some(_=>_.id===e.id)?"❤️":"🤍"})]})}),eb=$.memo(function(){const{collections:e,setCollections:t}=fn(),{isLoading:i,setIsLoading:o}=Bp();return $.useEffect(()=>{if(e.length>0)return o(!1);J2(t,o)},[e]),D.jsx("section",{className:"film-collections",children:D.jsx("div",{className:"container",children:!i&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"collections collections-serials",children:[D.jsx("h2",{className:"title-2",children:"Популярные сериалы"}),D.jsx("div",{className:"collections__wrapper",children:e[1].map(l=>l.movie.poster&&l.movie.poster.previewUrl&&D.jsx(Ho,{film:l.movie},l.movie.id))})]}),D.jsxs("div",{className:"collections collections-new",children:[D.jsx("h2",{className:"title-2",children:"Ожидаемые"}),D.jsx("div",{className:"collections__wrapper",children:e[0].map(l=>l.movie.poster&&l.movie.poster.previewUrl&&D.jsx(Ho,{film:l.movie},l.movie.id))})]})]})})})});function tb(){return D.jsxs("main",{className:"main",children:[D.jsx(Y2,{}),D.jsx(bw,{}),D.jsx(eb,{})]})}function nb(){const{filmName:n,setData:e,pages:t,setPages:i,setIsLoading:o,fetchMethod:l,genre:c}=fn(),f=$.useCallback(_=>{l==="searchByName"?xw(n,e,i,o,_):Nw(c,e,i,o,_),o(!0),window.scrollTo(0,0)}),p=$.useMemo(()=>{const _=[1],T=(t==null?void 0:t.actual)||1,I=(t==null?void 0:t.all)||1;if(T<4)for(let N=2,z=0;N<I&&z<3;N++,z++)_.push(N);else{T-1<2&&_.push("..."),_.push("...");for(let N=T-1,z=0;N<I&&z<3;N++,z++)_.push(N)}return I-T>2&&_.push("..."),I!==1&&_.push(I),_},[t==null?void 0:t.actual,t==null?void 0:t.all]),y=$.useCallback(_=>{f(_)},[f]);return D.jsx(D.Fragment,{children:D.jsx("div",{className:"pagination",children:D.jsx("ul",{className:"pagination__list",children:p.map((_,T)=>_==="..."?D.jsx("li",{className:"pagination__item",children:"..."},`ellipsis-${T}`):_!==t.actual?D.jsx("li",{className:"pagination__item",children:D.jsx("button",{className:"pagination__btn",onClick:()=>y(_),children:_})},`page-${_}`):D.jsx("li",{className:"pagination__item",children:D.jsx("button",{className:"pagination__btn active",children:_})},`active-${_}`))})})})}function rb(){const{data:n,isLoading:e}=fn();return e?D.jsx("div",{className:"film-list--loading",children:"Загрузка фильмов..."}):D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"film-list",children:n.map(t=>D.jsx(Ho,{film:t},t.id))}),D.jsx(nb,{})]})}function ib({}){const{data:n}=fn();return D.jsx("section",{className:"search-res",children:D.jsx("div",{className:"container",children:D.jsxs("div",{className:"search-res__items",children:[D.jsx(bw,{}),n.length>0&&D.jsx(rb,{})]})})})}function sb({kpId:n}){const{link:e,setLink:t,film:i,players:o,setPlayers:l,activePlayer:c,setActivePlayer:f}=fn();$.useEffect(()=>{y()},[i]);let p=!1;const y=async()=>{const T={method:"GET",headers:{accept:"application/json"}},N=await(await fetch("https://api.kinobox.tv/api/players?&ts=3705"+new URLSearchParams({token:"eedefb541aeba871dcfc756e6b31c02e",kinopoisk:n}),T)).json();if(N){if(l(N.data),N.data[6].iframeUrl)f(N.data[6]),t(N.data[6].iframeUrl),p=!0;else for(let z=0;z<=6;z++)if(N.data[z].iframeUrl){f(N.data[z]),t(N.data[z].iframeUrl),p=!0;break}}},_=T=>{f(T),t(T.iframeUrl)};return new Date(i.premiere.world),D.jsx("div",{className:"player movie__player",children:e?D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"player__types",children:o.map(T=>D.jsx("button",{className:`player__type ${T.type===c.type?"player__type--active":""}`,onClick:()=>_(T),children:T.type},T.type))}),D.jsx("iframe",{id:"inlineFrameExample",title:"Inline Frame Map",width:"100%",height:"600px",frameborder:"1",allowfullscreen:"true",src:e})]}):D.jsx("div",{className:"premier",children:p?"Попробуйте другой плеер":"К сожалению фильм пока недоступен"})})}const ob=$.memo(function(){var _,T;const e=Kr(),{film:t,setFilm:i,isActor:o,setIsActor:l}=fn(),{isLoading:c,setIsLoading:f}=Bp(),{id:p}=MC(),y=I=>{I.find(N=>N.enProfession==="actor")&&l(!0)};return $.useEffect(()=>{X2(p,i,f)},[e.state]),c?D.jsx("div",{children:"Загрузка..."}):(y(t.persons),D.jsx(D.Fragment,{children:D.jsxs("section",{className:"movie","data-id":t.id,children:[t.backdrop&&t.backdrop.url&&t.logo&&t.logo.previewUrl?D.jsx(D.Fragment,{children:D.jsxs("div",{className:"movie__backdrop",children:[D.jsx("img",{className:"movie__backdrop--img",src:t.backdrop.url,alt:t.name}),D.jsx("img",{className:"movie__backdrop--logo",src:t.logo.previewUrl,alt:t.name})]})}):(_=t.backdrop)!=null&&_.url?D.jsx(D.Fragment,{children:D.jsxs("div",{className:"movie__backdrop",children:[D.jsx("img",{className:"movie__backdrop--img",src:t.backdrop.url,alt:t.name}),D.jsx("h3",{className:"movie__backdrop--name",children:t.name})]})}):(T=t.logo)!=null&&T.previewUrl?D.jsx(D.Fragment,{children:D.jsx("div",{className:"movie__backdrop",children:D.jsx("img",{className:"movie__backdrop--logo",src:t.logo.previewUrl,alt:t.name})})}):D.jsx(D.Fragment,{children:D.jsx("div",{className:"movie__backdrop",children:D.jsx("h3",{className:"movie__backdrop--name",children:t.name})})}),D.jsxs("div",{className:"movie__container",children:[D.jsx("div",{className:"movie__logo",children:t.poster&&t.poster.previewUrl&&D.jsx("img",{className:"movie__img",src:t.poster.previewUrl,alt:t.name})}),D.jsx(sb,{kpId:t.id}),D.jsxs("div",{className:"movie__info",children:[D.jsxs("div",{className:"movie__year",children:["Год выхода: ",t.year||"Пока неизвестно"]}),t.genres.length>0&&D.jsxs("div",{className:"movie__genres",children:["Жанры: ",t.genres.map(I=>`${I.name} `)]}),!!t.movieLength&&D.jsxs("div",{className:"movie__movieLength",children:["Продолжительность: ",t.movieLength," мин."]}),t.rating.imdb!==0&&D.jsxs("div",{className:"movie__rating",children:["Рейтинг: ",t.rating.imdb,"/10"]}),!!t.ageRating&&D.jsxs("div",{className:"movie__ageRating",children:["Возрастной рейтинг: ",t.ageRating,"+"]}),!!t.description&&D.jsx("div",{className:"movie__description",children:t.description})]}),o&&D.jsxs("div",{className:"movie__actors",children:[D.jsx("h3",{className:"movie__actors--title",children:"Актеры"}),D.jsx("div",{className:"movie__actors--row",children:t.persons.map((I,N)=>I.enProfession==="actor"&&N<10&&I.photo&&I.name&&D.jsxs("div",{className:"movie__actor",children:[D.jsx("img",{className:"movie__actor--img",src:I.photo,alt:I.name}),D.jsx("div",{className:"movie__actor--name",children:I.name})]},I.name))})]}),t.sequelsAndPrequels&&t.sequelsAndPrequels.length>0&&D.jsxs("div",{className:"movie__sequels",children:[D.jsx("h3",{className:"movie__sequels--title",children:"Сиквелы/Приквелы"}),D.jsx("div",{className:"movie__list collections__wrapper",children:t.sequelsAndPrequels.map(I=>D.jsx(Ho,{film:I},I.id))})]}),t.similarMovies&&t.similarMovies.length>0&&D.jsxs("div",{className:"movie__similar",children:[D.jsx("h3",{className:"movie__similar--title",children:"Похожие фильмы"}),D.jsx("div",{className:"movie__list collections__wrapper",children:t.similarMovies.map(I=>D.jsx(Ho,{film:I},I.id))})]})]})]})}))});function Ow(){const{user:n}=fn();return D.jsx("section",{className:"profile-page",children:D.jsx("div",{className:"container",children:D.jsx("div",{className:"profile",children:n?D.jsxs(D.Fragment,{children:[D.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"profile__avatar"}),D.jsx("div",{className:"profile__name",children:n.displayName}),D.jsx("div",{className:"profile__email",children:n.email}),D.jsx(Cw,{})]}):D.jsx("div",{className:"profile__unauth",children:"Вы не авторизованы"})})})})}function ab(){const{user:n,likedMovies:e,toggleLike:t}=fn();return console.log(e),D.jsx("section",{className:"my-films",children:D.jsx("div",{className:"container",children:n?D.jsxs(D.Fragment,{children:[D.jsx("h2",{className:"my-films__title",children:"Вы смотрите"}),D.jsx("div",{className:"my-films__items",children:e.map(i=>D.jsx(Ho,{film:i,toggleLike:t},i.id))})]}):D.jsx(Ow,{})})})}function lb(){const n=()=>{const{pathname:e}=Kr();return $.useLayoutEffect(()=>{window.scrollTo(0,0)},[e]),null};return D.jsxs(Ex,{basename:"/milti-cinema-react/",children:[D.jsx(n,{}),D.jsxs("div",{className:"App",children:[D.jsx(Q2,{}),D.jsxs(XC,{children:[D.jsx(Po,{path:"/",element:D.jsx(tb,{})}),D.jsx(Po,{path:"/profile",element:D.jsx(Ow,{})}),D.jsx(Po,{path:"/search-result",element:D.jsx(ib,{})}),D.jsx(Po,{path:"/movie/:id",element:D.jsx(ob,{})}),D.jsx(Po,{path:"/my-films",element:D.jsx(ab,{})})]})]})]})}WT.createRoot(document.getElementById("root")).render(D.jsx(oC,{children:D.jsx(lb,{})}));
