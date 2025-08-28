(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function g_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lf={exports:{}},Ka={},Mf={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function DT(){if(fy)return Ce;fy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function A(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,W={};function L(D,G,pe){this.props=D,this.context=G,this.refs=W,this.updater=pe||O}L.prototype.isReactComponent={},L.prototype.setState=function(D,G){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,G,"setState")},L.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function K(){}K.prototype=L.prototype;function Z(D,G,pe){this.props=D,this.context=G,this.refs=W,this.updater=pe||O}var Q=Z.prototype=new K;Q.constructor=Z,H(Q,L.prototype),Q.isPureReactComponent=!0;var ue=Array.isArray,Ee=Object.prototype.hasOwnProperty,Ae={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(D,G,pe){var Re,ke={},Le=null,je=null;if(G!=null)for(Re in G.ref!==void 0&&(je=G.ref),G.key!==void 0&&(Le=""+G.key),G)Ee.call(G,Re)&&!x.hasOwnProperty(Re)&&(ke[Re]=G[Re]);var ze=arguments.length-2;if(ze===1)ke.children=pe;else if(1<ze){for(var qe=Array(ze),wt=0;wt<ze;wt++)qe[wt]=arguments[wt+2];ke.children=qe}if(D&&D.defaultProps)for(Re in ze=D.defaultProps,ze)ke[Re]===void 0&&(ke[Re]=ze[Re]);return{$$typeof:n,type:D,key:Le,ref:je,props:ke,_owner:Ae.current}}function P(D,G){return{$$typeof:n,type:D.type,key:G,ref:D.ref,props:D.props,_owner:D._owner}}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function b(D){var G={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pe){return G[pe]})}var M=/\/+/g;function R(D,G){return typeof D=="object"&&D!==null&&D.key!=null?b(""+D.key):G.toString(36)}function ot(D,G,pe,Re,ke){var Le=typeof D;(Le==="undefined"||Le==="boolean")&&(D=null);var je=!1;if(D===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(D.$$typeof){case n:case e:je=!0}}if(je)return je=D,ke=ke(je),D=Re===""?"."+R(je,0):Re,ue(ke)?(pe="",D!=null&&(pe=D.replace(M,"$&/")+"/"),ot(ke,G,pe,"",function(wt){return wt})):ke!=null&&(C(ke)&&(ke=P(ke,pe+(!ke.key||je&&je.key===ke.key?"":(""+ke.key).replace(M,"$&/")+"/")+D)),G.push(ke)),1;if(je=0,Re=Re===""?".":Re+":",ue(D))for(var ze=0;ze<D.length;ze++){Le=D[ze];var qe=Re+R(Le,ze);je+=ot(Le,G,pe,qe,ke)}else if(qe=A(D),typeof qe=="function")for(D=qe.call(D),ze=0;!(Le=D.next()).done;)Le=Le.value,qe=Re+R(Le,ze++),je+=ot(Le,G,pe,qe,ke);else if(Le==="object")throw G=String(D),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return je}function Dt(D,G,pe){if(D==null)return D;var Re=[],ke=0;return ot(D,Re,"","",function(Le){return G.call(pe,Le,ke++)}),Re}function Lt(D){if(D._status===-1){var G=D._result;G=G(),G.then(function(pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=pe)},function(pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=pe)}),D._status===-1&&(D._status=0,D._result=G)}if(D._status===1)return D._result.default;throw D._result}var He={current:null},ie={transition:null},me={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Ae};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(D,G,pe){Dt(D,function(){G.apply(this,arguments)},pe)},count:function(D){var G=0;return Dt(D,function(){G++}),G},toArray:function(D){return Dt(D,function(G){return G})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=Z,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(D,G,pe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Re=H({},D.props),ke=D.key,Le=D.ref,je=D._owner;if(G!=null){if(G.ref!==void 0&&(Le=G.ref,je=Ae.current),G.key!==void 0&&(ke=""+G.key),D.type&&D.type.defaultProps)var ze=D.type.defaultProps;for(qe in G)Ee.call(G,qe)&&!x.hasOwnProperty(qe)&&(Re[qe]=G[qe]===void 0&&ze!==void 0?ze[qe]:G[qe])}var qe=arguments.length-2;if(qe===1)Re.children=pe;else if(1<qe){ze=Array(qe);for(var wt=0;wt<qe;wt++)ze[wt]=arguments[wt+2];Re.children=ze}return{$$typeof:n,type:D.type,key:ke,ref:Le,props:Re,_owner:je}},Ce.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Ce.createElement=I,Ce.createFactory=function(D){var G=I.bind(null,D);return G.type=D,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:f,render:D}},Ce.isValidElement=C,Ce.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:Lt}},Ce.memo=function(D,G){return{$$typeof:y,type:D,compare:G===void 0?null:G}},Ce.startTransition=function(D){var G=ie.transition;ie.transition={};try{D()}finally{ie.transition=G}},Ce.unstable_act=oe,Ce.useCallback=function(D,G){return He.current.useCallback(D,G)},Ce.useContext=function(D){return He.current.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D){return He.current.useDeferredValue(D)},Ce.useEffect=function(D,G){return He.current.useEffect(D,G)},Ce.useId=function(){return He.current.useId()},Ce.useImperativeHandle=function(D,G,pe){return He.current.useImperativeHandle(D,G,pe)},Ce.useInsertionEffect=function(D,G){return He.current.useInsertionEffect(D,G)},Ce.useLayoutEffect=function(D,G){return He.current.useLayoutEffect(D,G)},Ce.useMemo=function(D,G){return He.current.useMemo(D,G)},Ce.useReducer=function(D,G,pe){return He.current.useReducer(D,G,pe)},Ce.useRef=function(D){return He.current.useRef(D)},Ce.useState=function(D){return He.current.useState(D)},Ce.useSyncExternalStore=function(D,G,pe){return He.current.useSyncExternalStore(D,G,pe)},Ce.useTransition=function(){return He.current.useTransition()},Ce.version="18.3.1",Ce}var dy;function Xd(){return dy||(dy=1,Mf.exports=DT()),Mf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function LT(){if(py)return Ka;py=1;var n=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var _,T={},A=null,O=null;y!==void 0&&(A=""+y),p.key!==void 0&&(A=""+p.key),p.ref!==void 0&&(O=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(T[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)T[_]===void 0&&(T[_]=p[_]);return{$$typeof:e,type:f,key:A,ref:O,props:T,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=h,Ka.jsxs=h,Ka}var my;function MT(){return my||(my=1,Lf.exports=LT()),Lf.exports}var j=MT(),Ku={},Vf={exports:{}},nn={},Ff={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function VT(){return gy||(gy=1,(function(n){function e(ie,me){var oe=ie.length;ie.push(me);e:for(;0<oe;){var D=oe-1>>>1,G=ie[D];if(0<o(G,me))ie[D]=me,ie[oe]=G,oe=D;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var me=ie[0],oe=ie.pop();if(oe!==me){ie[0]=oe;e:for(var D=0,G=ie.length,pe=G>>>1;D<pe;){var Re=2*(D+1)-1,ke=ie[Re],Le=Re+1,je=ie[Le];if(0>o(ke,oe))Le<G&&0>o(je,ke)?(ie[D]=je,ie[Le]=oe,D=Le):(ie[D]=ke,ie[Re]=oe,D=Re);else if(Le<G&&0>o(je,oe))ie[D]=je,ie[Le]=oe,D=Le;else break e}}return me}function o(ie,me){var oe=ie.sortIndex-me.sortIndex;return oe!==0?oe:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],_=1,T=null,A=3,O=!1,H=!1,W=!1,L=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(ie){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ie)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ue(ie){if(W=!1,Q(ie),!H)if(t(p)!==null)H=!0,Lt(Ee);else{var me=t(y);me!==null&&He(ue,me.startTime-ie)}}function Ee(ie,me){H=!1,W&&(W=!1,K(I),I=-1),O=!0;var oe=A;try{for(Q(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ie&&!b());){var D=T.callback;if(typeof D=="function"){T.callback=null,A=T.priorityLevel;var G=D(T.expirationTime<=me);me=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),Q(me)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var Re=t(y);Re!==null&&He(ue,Re.startTime-me),pe=!1}return pe}finally{T=null,A=oe,O=!1}}var Ae=!1,x=null,I=-1,P=5,C=-1;function b(){return!(n.unstable_now()-C<P)}function M(){if(x!==null){var ie=n.unstable_now();C=ie;var me=!0;try{me=x(!0,ie)}finally{me?R():(Ae=!1,x=null)}}else Ae=!1}var R;if(typeof Z=="function")R=function(){Z(M)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Dt=ot.port2;ot.port1.onmessage=M,R=function(){Dt.postMessage(null)}}else R=function(){L(M,0)};function Lt(ie){x=ie,Ae||(Ae=!0,R())}function He(ie,me){I=L(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){H||O||(H=!0,Lt(Ee))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(A){case 1:case 2:case 3:var me=3;break;default:me=A}var oe=A;A=me;try{return ie()}finally{A=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=A;A=ie;try{return me()}finally{A=oe}},n.unstable_scheduleCallback=function(ie,me,oe){var D=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?D+oe:D):oe=D,ie){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ie={id:_++,callback:me,priorityLevel:ie,startTime:oe,expirationTime:G,sortIndex:-1},oe>D?(ie.sortIndex=oe,e(y,ie),t(p)===null&&ie===t(y)&&(W?(K(I),I=-1):W=!0,He(ue,oe-D))):(ie.sortIndex=G,e(p,ie),H||O||(H=!0,Lt(Ee))),ie},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ie){var me=A;return function(){var oe=A;A=me;try{return ie.apply(this,arguments)}finally{A=oe}}}})(Uf)),Uf}var yy;function FT(){return yy||(yy=1,Ff.exports=VT()),Ff.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function UT(){if(vy)return nn;vy=1;var n=Xd(),e=FT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function A(r){return p.call(T,r)?!0:p.call(_,r)?!1:y.test(r)?T[r]=!0:(_[r]=!0,!1)}function O(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function H(r,s,a,c){if(s===null||typeof s>"u"||O(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function W(r,s,a,c,d,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new W(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new W(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new W(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new W(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new W(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new W(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new W(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new W(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new W(r,5,!1,r.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(K,Z);L[s]=new W(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(K,Z);L[s]=new W(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(K,Z);L[s]=new W(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new W(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new W(r,1,!1,r.toLowerCase(),null,!0,!0)});function Q(r,s,a,c){var d=L.hasOwnProperty(s)?L[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(H(s,a,d,c)&&(a=null),c||d===null?A(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ue=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),b=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,D;function G(r){if(D===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);D=s&&s[1]||""}return`
`+D+r}var pe=!1;function Re(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),E=d.length-1,S=g.length-1;1<=E&&0<=S&&d[E]!==g[S];)S--;for(;1<=E&&0<=S;E--,S--)if(d[E]!==g[S]){if(E!==1||S!==1)do if(E--,S--,0>S||d[E]!==g[S]){var k=`
`+d[E].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=E&&0<=S);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function ke(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Ae:return"Portal";case P:return"Profiler";case I:return"StrictMode";case R:return"Suspense";case ot:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case C:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=wt(r))}function Cs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=qe(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Yr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function zi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function xs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ze(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ea(r,s){s=s.checked,s!=null&&Q(r,"checked",s,!1)}function ta(r,s){ea(r,s);var a=ze(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ns(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ns(r,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ns(r,s,a){(s!=="number"||Yr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ze(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function na(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function bs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ze(a)}}function Os(r,s){var a=ze(s.value),c=ze(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function ra(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,ia=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Xr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$i=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){$i.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function sa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function oa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=sa(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var aa=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(r,s){if(s){if(aa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ua(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Ds(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ls=null,pn=null,Hn=null;function Ms(r){if(r=Oa(r)){if(typeof Ls!="function")throw Error(t(280));var s=r.stateNode;s&&(s=uu(s),Ls(r.stateNode,r.type,s))}}function Wn(r){pn?Hn?Hn.push(r):Hn=[r]:pn=r}function ca(){if(pn){var r=pn,s=Hn;if(Hn=pn=null,Ms(r),s)for(r=0;r<s.length;r++)Ms(s[r])}}function Wi(r,s){return r(s)}function ha(){}var vr=!1;function fa(r,s,a){if(vr)return r(s,a);vr=!0;try{return Wi(r,s,a)}finally{vr=!1,(pn!==null||Hn!==null)&&(ha(),ca())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var c=uu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Vs=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Vs=!1}function qi(r,s,a,c,d,g,E,S,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var Gi=!1,Fs=null,kn=!1,da=null,lh={onError:function(r){Gi=!0,Fs=r}};function Us(r,s,a,c,d,g,E,S,k){Gi=!1,Fs=null,qi.apply(lh,arguments)}function Dl(r,s,a,c,d,g,E,S,k){if(Us.apply(this,arguments),Gi){if(Gi){var z=Fs;Gi=!1,Fs=null}else throw Error(t(198));kn||(kn=!0,da=z)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ki(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Cn(r)!==r)throw Error(t(188))}function Ll(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return xn(d),r;if(g===c)return xn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var E=!1,S=d.child;S;){if(S===a){E=!0,a=d,c=g;break}if(S===c){E=!0,c=d,a=g;break}S=S.sibling}if(!E){for(S=g.child;S;){if(S===a){E=!0,a=g,c=d;break}if(S===c){E=!0,c=g,a=d;break}S=S.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function pa(r){return r=Ll(r),r!==null?js(r):null}function js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=js(r);if(s!==null)return s;r=r.sibling}return null}var zs=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,Ml=e.unstable_shouldYield,uh=e.unstable_requestPaint,Ge=e.unstable_now,Vl=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,Jr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Fl=e.unstable_IdlePriority,Yi=null,sn=null;function Ul(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Yi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:zl,ya=Math.log,jl=Math.LN2;function zl(r){return r>>>=0,r===0?32:31-(ya(r)/jl|0)|0}var Bs=64,$s=4194304;function Zr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Xi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,E=a&268435455;if(E!==0){var S=E&~d;S!==0?c=Zr(S):(g&=E,g!==0&&(c=Zr(g)))}else E=a&~d,E!==0?c=Zr(E):g!==0&&(c=Zr(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Wt(s),d=1<<a,c|=r[a],s&=~d;return c}function ch(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Wt(g),S=1<<E,k=d[E];k===-1?((S&a)===0||(S&c)!==0)&&(d[E]=ch(S,s)):k<=s&&(r.expiredLanes|=S),g&=~S}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ji(){var r=Bs;return Bs<<=1,(Bs&4194240)===0&&(Bs=64),r}function ei(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ti(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function We(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Wt(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function ni(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Wt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Oe=0;function ri(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bl,Hs,$l,Hl,Wl,va=!1,qn=[],Rt=null,Nn=null,bn=null,ii=new Map,gn=new Map,Gn=[],hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ii.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Qt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Oa(s),s!==null&&Hs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function fh(r,s,a,c,d){switch(s){case"focusin":return Rt=Qt(Rt,r,s,a,c,d),!0;case"dragenter":return Nn=Qt(Nn,r,s,a,c,d),!0;case"mouseover":return bn=Qt(bn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return ii.set(g,Qt(ii.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Qt(gn.get(g)||null,r,s,a,c,d)),!0}return!1}function Gl(r){var s=rs(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ki(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){$l(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ws(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Hi=c,a.target.dispatchEvent(c),Hi=null}else return s=Oa(a),s!==null&&Hs(s),r.blockedOn=a,!1;s.shift()}return!0}function Zi(r,s,a){Er(r)&&a.delete(s)}function Kl(){va=!1,Rt!==null&&Er(Rt)&&(Rt=null),Nn!==null&&Er(Nn)&&(Nn=null),bn!==null&&Er(bn)&&(bn=null),ii.forEach(Zi),gn.forEach(Zi)}function On(r,s){r.blockedOn===s&&(r.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kl)))}function Dn(r){function s(d){return On(d,r)}if(0<qn.length){On(qn[0],r);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&On(Rt,r),Nn!==null&&On(Nn,r),bn!==null&&On(bn,r),ii.forEach(s),gn.forEach(s),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Gl(a),a.blockedOn===null&&Gn.shift()}var wr=ue.ReactCurrentBatchConfig,si=!0;function Je(r,s,a,c){var d=Oe,g=wr.transition;wr.transition=null;try{Oe=1,_a(r,s,a,c)}finally{Oe=d,wr.transition=g}}function dh(r,s,a,c){var d=Oe,g=wr.transition;wr.transition=null;try{Oe=4,_a(r,s,a,c)}finally{Oe=d,wr.transition=g}}function _a(r,s,a,c){if(si){var d=Ws(r,s,a,c);if(d===null)Sh(r,s,c,es,a),ql(r,c);else if(fh(d,r,s,a,c))c.stopPropagation();else if(ql(r,c),s&4&&-1<hh.indexOf(r)){for(;d!==null;){var g=Oa(d);if(g!==null&&Bl(g),g=Ws(r,s,a,c),g===null&&Sh(r,s,c,es,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Sh(r,s,c,null,a)}}var es=null;function Ws(r,s,a,c){if(es=null,r=Ds(c),r=rs(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ki(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return es=r,null}function Ea(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vl()){case Qi:return 1;case Jr:return 4;case mn:case ga:return 16;case Fl:return 536870912;default:return 16}default:return 16}}var an=null,qs=null,Yt=null;function wa(){if(Yt)return Yt;var r,s=qs,a=s.length,c,d="value"in an?an.value:an.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var E=a-r;for(c=1;c<=E&&s[a-c]===d[g-c];c++);return Yt=d.slice(r,1<c?1-c:void 0)}function Gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Kn(){return!0}function Ta(){return!1}function kt(r){function s(a,c,d,g,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Kn:Ta,this.isPropagationStopped=Ta,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=kt(Ln),Qn=oe({},Ln,{view:0,detail:0}),ph=kt(Qn),Qs,Tr,oi,ts=oe({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==oi&&(oi&&r.type==="mousemove"?(Qs=r.screenX-oi.screenX,Tr=r.screenY-oi.screenY):Tr=Qs=0,oi=r),Qs)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Ys=kt(ts),Ia=oe({},ts,{dataTransfer:0}),Ql=kt(Ia),Xs=oe({},Qn,{relatedTarget:0}),Js=kt(Xs),Yl=oe({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=kt(Yl),Xl=oe({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Jl=kt(Xl),Zl=oe({},Ln,{data:0}),Sa=kt(Zl),Zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=eu[r])?!!s[r]:!1}function Yn(){return tu}var u=oe({},Qn,{key:function(r){if(r.key){var s=Zs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(r){return r.type==="keypress"?Gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=kt(u),v=oe({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(v),V=oe({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),$=kt(V),re=oe({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=kt(re),mt=oe({},ts,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=kt(mt),Tt=[9,13,27,32],ct=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var ln=f&&"TextEvent"in window&&!yn,ns=f&&(!ct||yn&&8<yn&&11>=yn),eo=" ",om=!1;function am(r,s){switch(r){case"keyup":return Tt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var to=!1;function Nw(r,s){switch(r){case"compositionend":return lm(s);case"keypress":return s.which!==32?null:(om=!0,eo);case"textInput":return r=s.data,r===eo&&om?null:r;default:return null}}function bw(r,s){if(to)return r==="compositionend"||!ct&&am(r,s)?(r=wa(),Yt=qs=an=null,to=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ns&&s.locale!=="ko"?null:s.data;default:return null}}var Ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ow[r.type]:s==="textarea"}function cm(r,s,a,c){Wn(c),s=ou(s,"onChange"),0<s.length&&(a=new Ks("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Aa=null,Pa=null;function Dw(r){km(r,0)}function nu(r){var s=oo(r);if(Cs(s))return r}function Lw(r,s){if(r==="change")return s}var hm=!1;if(f){var mh;if(f){var gh="oninput"in document;if(!gh){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),gh=typeof fm.oninput=="function"}mh=gh}else mh=!1;hm=mh&&(!document.documentMode||9<document.documentMode)}function dm(){Aa&&(Aa.detachEvent("onpropertychange",pm),Pa=Aa=null)}function pm(r){if(r.propertyName==="value"&&nu(Pa)){var s=[];cm(s,Pa,r,Ds(r)),fa(Dw,s)}}function Mw(r,s,a){r==="focusin"?(dm(),Aa=s,Pa=a,Aa.attachEvent("onpropertychange",pm)):r==="focusout"&&dm()}function Vw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nu(Pa)}function Fw(r,s){if(r==="click")return nu(s)}function Uw(r,s){if(r==="input"||r==="change")return nu(s)}function jw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:jw;function Ra(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function mm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function gm(r,s){var a=mm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mm(a)}}function ym(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?ym(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function vm(){for(var r=window,s=Yr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Yr(r.document)}return s}function yh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function zw(r){var s=vm(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&ym(a.ownerDocument.documentElement,a)){if(c!==null&&yh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=gm(a,g);var E=gm(a,c);d&&E&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Bw=f&&"documentMode"in document&&11>=document.documentMode,no=null,vh=null,ka=null,_h=!1;function _m(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_h||no==null||no!==Yr(c)||(c=no,"selectionStart"in c&&yh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Ra(ka,c)||(ka=c,c=ou(vh,"onSelect"),0<c.length&&(s=new Ks("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=no)))}function ru(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var ro={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},Eh={},Em={};f&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function iu(r){if(Eh[r])return Eh[r];if(!ro[r])return r;var s=ro[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Em)return Eh[r]=s[a];return r}var wm=iu("animationend"),Tm=iu("animationiteration"),Im=iu("animationstart"),Sm=iu("transitionend"),Am=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(r,s){Am.set(r,s),l(s,[r])}for(var wh=0;wh<Pm.length;wh++){var Th=Pm[wh],$w=Th.toLowerCase(),Hw=Th[0].toUpperCase()+Th.slice(1);ai($w,"on"+Hw)}ai(wm,"onAnimationEnd"),ai(Tm,"onAnimationIteration"),ai(Im,"onAnimationStart"),ai("dblclick","onDoubleClick"),ai("focusin","onFocus"),ai("focusout","onBlur"),ai(Sm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Rm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Dl(c,s,void 0,r),r.currentTarget=null}function km(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var E=c.length-1;0<=E;E--){var S=c[E],k=S.instance,z=S.currentTarget;if(S=S.listener,k!==g&&d.isPropagationStopped())break e;Rm(d,S,z),g=k}else for(E=0;E<c.length;E++){if(S=c[E],k=S.instance,z=S.currentTarget,S=S.listener,k!==g&&d.isPropagationStopped())break e;Rm(d,S,z),g=k}}}if(kn)throw r=da,kn=!1,da=null,r}function Qe(r,s){var a=s[xh];a===void 0&&(a=s[xh]=new Set);var c=r+"__bubble";a.has(c)||(Cm(s,r,2,!1),a.add(c))}function Ih(r,s,a){var c=0;s&&(c|=4),Cm(a,r,c,s)}var su="_reactListening"+Math.random().toString(36).slice(2);function xa(r){if(!r[su]){r[su]=!0,i.forEach(function(a){a!=="selectionchange"&&(Ww.has(a)||Ih(a,!1,r),Ih(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[su]||(s[su]=!0,Ih("selectionchange",!1,s))}}function Cm(r,s,a,c){switch(Ea(s)){case 1:var d=Je;break;case 4:d=dh;break;default:d=_a}a=d.bind(null,s,a,r),d=void 0,!Vs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Sh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;E=E.return}for(;S!==null;){if(E=rs(S),E===null)return;if(k=E.tag,k===5||k===6){c=g=E;continue e}S=S.parentNode}}c=c.return}fa(function(){var z=g,X=Ds(a),J=[];e:{var Y=Am.get(r);if(Y!==void 0){var se=Ks,ce=r;switch(r){case"keypress":if(Gs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=Js;break;case"focusout":ce="blur",se=Js;break;case"beforeblur":case"afterblur":se=Js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case wm:case Tm:case Im:se=Ir;break;case Sm:se=$e;break;case"scroll":se=ph;break;case"wheel":se=Me;break;case"copy":case"cut":case"paste":se=Jl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var he=(s&4)!==0,lt=!he&&r==="scroll",F=he?Y!==null?Y+"Capture":null:Y;he=[];for(var N=z,U;N!==null;){U=N;var ne=U.stateNode;if(U.tag===5&&ne!==null&&(U=ne,F!==null&&(ne=at(N,F),ne!=null&&he.push(Na(N,ne,U)))),lt)break;N=N.return}0<he.length&&(Y=new se(Y,ce,null,a,X),J.push({event:Y,listeners:he}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&a!==Hi&&(ce=a.relatedTarget||a.fromElement)&&(rs(ce)||ce[Sr]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=z,ce=ce?rs(ce):null,ce!==null&&(lt=Cn(ce),ce!==lt||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(he=Ys,ne="onMouseLeave",F="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,ne="onPointerLeave",F="onPointerEnter",N="pointer"),lt=se==null?Y:oo(se),U=ce==null?Y:oo(ce),Y=new he(ne,N+"leave",se,a,X),Y.target=lt,Y.relatedTarget=U,ne=null,rs(X)===z&&(he=new he(F,N+"enter",ce,a,X),he.target=U,he.relatedTarget=lt,ne=he),lt=ne,se&&ce)t:{for(he=se,F=ce,N=0,U=he;U;U=io(U))N++;for(U=0,ne=F;ne;ne=io(ne))U++;for(;0<N-U;)he=io(he),N--;for(;0<U-N;)F=io(F),U--;for(;N--;){if(he===F||F!==null&&he===F.alternate)break t;he=io(he),F=io(F)}he=null}else he=null;se!==null&&xm(J,Y,se,he,!1),ce!==null&&lt!==null&&xm(J,lt,ce,he,!0)}}e:{if(Y=z?oo(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var fe=Lw;else if(um(Y))if(hm)fe=Uw;else{fe=Vw;var ge=Mw}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(fe=Fw);if(fe&&(fe=fe(r,z))){cm(J,fe,a,X);break e}ge&&ge(r,Y,z),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Ns(Y,"number",Y.value)}switch(ge=z?oo(z):window,r){case"focusin":(um(ge)||ge.contentEditable==="true")&&(no=ge,vh=z,ka=null);break;case"focusout":ka=vh=no=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,_m(J,a,X);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":_m(J,a,X)}var ye;if(ct)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else to?am(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ns&&a.locale!=="ko"&&(to||we!=="onCompositionStart"?we==="onCompositionEnd"&&to&&(ye=wa()):(an=X,qs="value"in an?an.value:an.textContent,to=!0)),ge=ou(z,we),0<ge.length&&(we=new Sa(we,r,null,a,X),J.push({event:we,listeners:ge}),ye?we.data=ye:(ye=lm(a),ye!==null&&(we.data=ye)))),(ye=ln?Nw(r,a):bw(r,a))&&(z=ou(z,"onBeforeInput"),0<z.length&&(X=new Sa("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:z}),X.data=ye))}km(J,s)})}function Na(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ou(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=at(r,a),g!=null&&c.unshift(Na(r,g,d)),g=at(r,s),g!=null&&c.push(Na(r,g,d))),r=r.return}return c}function io(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function xm(r,s,a,c,d){for(var g=s._reactName,E=[];a!==null&&a!==c;){var S=a,k=S.alternate,z=S.stateNode;if(k!==null&&k===c)break;S.tag===5&&z!==null&&(S=z,d?(k=at(a,g),k!=null&&E.unshift(Na(a,k,S))):d||(k=at(a,g),k!=null&&E.push(Na(a,k,S)))),a=a.return}E.length!==0&&r.push({event:s,listeners:E})}var qw=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function Nm(r){return(typeof r=="string"?r:""+r).replace(qw,`
`).replace(Gw,"")}function au(r,s,a){if(s=Nm(s),Nm(r)!==s&&a)throw Error(t(425))}function lu(){}var Ah=null,Ph=null;function Rh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Qw=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(r){return bm.resolve(null).then(r).catch(Yw)}:kh;function Yw(r){setTimeout(function(){throw r})}function Ch(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Dn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(s)}function li(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Om(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var so=Math.random().toString(36).slice(2),Xn="__reactFiber$"+so,ba="__reactProps$"+so,Sr="__reactContainer$"+so,xh="__reactEvents$"+so,Xw="__reactListeners$"+so,Jw="__reactHandles$"+so;function rs(r){var s=r[Xn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[Xn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Om(r);r!==null;){if(a=r[Xn])return a;r=Om(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[Xn]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function oo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function uu(r){return r[ba]||null}var Nh=[],ao=-1;function ui(r){return{current:r}}function Ye(r){0>ao||(r.current=Nh[ao],Nh[ao]=null,ao--)}function Ke(r,s){ao++,Nh[ao]=r.current,r.current=s}var ci={},Mt=ui(ci),Xt=ui(!1),is=ci;function lo(r,s){var a=r.type.contextTypes;if(!a)return ci;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function cu(){Ye(Xt),Ye(Mt)}function Dm(r,s,a){if(Mt.current!==ci)throw Error(t(168));Ke(Mt,s),Ke(Xt,a)}function Lm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,je(r)||"Unknown",d));return oe({},a,c)}function hu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ci,is=Mt.current,Ke(Mt,r),Ke(Xt,Xt.current),!0}function Mm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Lm(r,s,is),c.__reactInternalMemoizedMergedChildContext=r,Ye(Xt),Ye(Mt),Ke(Mt,r)):Ye(Xt),Ke(Xt,a)}var Ar=null,fu=!1,bh=!1;function Vm(r){Ar===null?Ar=[r]:Ar.push(r)}function Zw(r){fu=!0,Vm(r)}function hi(){if(!bh&&Ar!==null){bh=!0;var r=0,s=Oe;try{var a=Ar;for(Oe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ar=null,fu=!1}catch(d){throw Ar!==null&&(Ar=Ar.slice(r+1)),zs(Qi,hi),d}finally{Oe=s,bh=!1}}return null}var uo=[],co=0,du=null,pu=0,vn=[],_n=0,ss=null,Pr=1,Rr="";function os(r,s){uo[co++]=pu,uo[co++]=du,du=r,pu=s}function Fm(r,s,a){vn[_n++]=Pr,vn[_n++]=Rr,vn[_n++]=ss,ss=r;var c=Pr;r=Rr;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var g=32-Wt(s)+d;if(30<g){var E=d-d%5;g=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Pr=1<<32-Wt(s)+d|a<<d|c,Rr=g+r}else Pr=1<<g|a<<d|c,Rr=r}function Oh(r){r.return!==null&&(os(r,1),Fm(r,1,0))}function Dh(r){for(;r===du;)du=uo[--co],uo[co]=null,pu=uo[--co],uo[co]=null;for(;r===ss;)ss=vn[--_n],vn[_n]=null,Rr=vn[--_n],vn[_n]=null,Pr=vn[--_n],vn[_n]=null}var un=null,cn=null,Ze=!1,Vn=null;function Um(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function jm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=li(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ss!==null?{id:Pr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function Lh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Mh(r){if(Ze){var s=cn;if(s){var a=s;if(!jm(r,s)){if(Lh(r))throw Error(t(418));s=li(a.nextSibling);var c=un;s&&jm(r,s)?Um(c,a):(r.flags=r.flags&-4097|2,Ze=!1,un=r)}}else{if(Lh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,un=r}}}function zm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function mu(r){if(r!==un)return!1;if(!Ze)return zm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Rh(r.type,r.memoizedProps)),s&&(s=cn)){if(Lh(r))throw Bm(),Error(t(418));for(;s;)Um(r,s),s=li(s.nextSibling)}if(zm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){cn=li(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?li(r.stateNode.nextSibling):null;return!0}function Bm(){for(var r=cn;r;)r=li(r.nextSibling)}function ho(){cn=un=null,Ze=!1}function Vh(r){Vn===null?Vn=[r]:Vn.push(r)}var eT=ue.ReactCurrentBatchConfig;function Da(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var S=d.refs;E===null?delete S[g]:S[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function gu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function $m(r){var s=r._init;return s(r._payload)}function Hm(r){function s(F,N){if(r){var U=F.deletions;U===null?(F.deletions=[N],F.flags|=16):U.push(N)}}function a(F,N){if(!r)return null;for(;N!==null;)s(F,N),N=N.sibling;return null}function c(F,N){for(F=new Map;N!==null;)N.key!==null?F.set(N.key,N):F.set(N.index,N),N=N.sibling;return F}function d(F,N){return F=_i(F,N),F.index=0,F.sibling=null,F}function g(F,N,U){return F.index=U,r?(U=F.alternate,U!==null?(U=U.index,U<N?(F.flags|=2,N):U):(F.flags|=2,N)):(F.flags|=1048576,N)}function E(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,N,U,ne){return N===null||N.tag!==6?(N=Cf(U,F.mode,ne),N.return=F,N):(N=d(N,U),N.return=F,N)}function k(F,N,U,ne){var fe=U.type;return fe===x?X(F,N,U.props.children,ne,U.key):N!==null&&(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Lt&&$m(fe)===N.type)?(ne=d(N,U.props),ne.ref=Da(F,N,U),ne.return=F,ne):(ne=ju(U.type,U.key,U.props,null,F.mode,ne),ne.ref=Da(F,N,U),ne.return=F,ne)}function z(F,N,U,ne){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=xf(U,F.mode,ne),N.return=F,N):(N=d(N,U.children||[]),N.return=F,N)}function X(F,N,U,ne,fe){return N===null||N.tag!==7?(N=ps(U,F.mode,ne,fe),N.return=F,N):(N=d(N,U),N.return=F,N)}function J(F,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Cf(""+N,F.mode,U),N.return=F,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ee:return U=ju(N.type,N.key,N.props,null,F.mode,U),U.ref=Da(F,null,N),U.return=F,U;case Ae:return N=xf(N,F.mode,U),N.return=F,N;case Lt:var ne=N._init;return J(F,ne(N._payload),U)}if(mr(N)||me(N))return N=ps(N,F.mode,U,null),N.return=F,N;gu(F,N)}return null}function Y(F,N,U,ne){var fe=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return fe!==null?null:S(F,N,""+U,ne);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ee:return U.key===fe?k(F,N,U,ne):null;case Ae:return U.key===fe?z(F,N,U,ne):null;case Lt:return fe=U._init,Y(F,N,fe(U._payload),ne)}if(mr(U)||me(U))return fe!==null?null:X(F,N,U,ne,null);gu(F,U)}return null}function se(F,N,U,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return F=F.get(U)||null,S(N,F,""+ne,fe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Ee:return F=F.get(ne.key===null?U:ne.key)||null,k(N,F,ne,fe);case Ae:return F=F.get(ne.key===null?U:ne.key)||null,z(N,F,ne,fe);case Lt:var ge=ne._init;return se(F,N,U,ge(ne._payload),fe)}if(mr(ne)||me(ne))return F=F.get(U)||null,X(N,F,ne,fe,null);gu(N,ne)}return null}function ce(F,N,U,ne){for(var fe=null,ge=null,ye=N,we=N=0,At=null;ye!==null&&we<U.length;we++){ye.index>we?(At=ye,ye=null):At=ye.sibling;var Ue=Y(F,ye,U[we],ne);if(Ue===null){ye===null&&(ye=At);break}r&&ye&&Ue.alternate===null&&s(F,ye),N=g(Ue,N,we),ge===null?fe=Ue:ge.sibling=Ue,ge=Ue,ye=At}if(we===U.length)return a(F,ye),Ze&&os(F,we),fe;if(ye===null){for(;we<U.length;we++)ye=J(F,U[we],ne),ye!==null&&(N=g(ye,N,we),ge===null?fe=ye:ge.sibling=ye,ge=ye);return Ze&&os(F,we),fe}for(ye=c(F,ye);we<U.length;we++)At=se(ye,F,we,U[we],ne),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?we:At.key),N=g(At,N,we),ge===null?fe=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(Ei){return s(F,Ei)}),Ze&&os(F,we),fe}function he(F,N,U,ne){var fe=me(U);if(typeof fe!="function")throw Error(t(150));if(U=fe.call(U),U==null)throw Error(t(151));for(var ge=fe=null,ye=N,we=N=0,At=null,Ue=U.next();ye!==null&&!Ue.done;we++,Ue=U.next()){ye.index>we?(At=ye,ye=null):At=ye.sibling;var Ei=Y(F,ye,Ue.value,ne);if(Ei===null){ye===null&&(ye=At);break}r&&ye&&Ei.alternate===null&&s(F,ye),N=g(Ei,N,we),ge===null?fe=Ei:ge.sibling=Ei,ge=Ei,ye=At}if(Ue.done)return a(F,ye),Ze&&os(F,we),fe;if(ye===null){for(;!Ue.done;we++,Ue=U.next())Ue=J(F,Ue.value,ne),Ue!==null&&(N=g(Ue,N,we),ge===null?fe=Ue:ge.sibling=Ue,ge=Ue);return Ze&&os(F,we),fe}for(ye=c(F,ye);!Ue.done;we++,Ue=U.next())Ue=se(ye,F,we,Ue.value,ne),Ue!==null&&(r&&Ue.alternate!==null&&ye.delete(Ue.key===null?we:Ue.key),N=g(Ue,N,we),ge===null?fe=Ue:ge.sibling=Ue,ge=Ue);return r&&ye.forEach(function(OT){return s(F,OT)}),Ze&&os(F,we),fe}function lt(F,N,U,ne){if(typeof U=="object"&&U!==null&&U.type===x&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ee:e:{for(var fe=U.key,ge=N;ge!==null;){if(ge.key===fe){if(fe=U.type,fe===x){if(ge.tag===7){a(F,ge.sibling),N=d(ge,U.props.children),N.return=F,F=N;break e}}else if(ge.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Lt&&$m(fe)===ge.type){a(F,ge.sibling),N=d(ge,U.props),N.ref=Da(F,ge,U),N.return=F,F=N;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}U.type===x?(N=ps(U.props.children,F.mode,ne,U.key),N.return=F,F=N):(ne=ju(U.type,U.key,U.props,null,F.mode,ne),ne.ref=Da(F,N,U),ne.return=F,F=ne)}return E(F);case Ae:e:{for(ge=U.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(F,N.sibling),N=d(N,U.children||[]),N.return=F,F=N;break e}else{a(F,N);break}else s(F,N);N=N.sibling}N=xf(U,F.mode,ne),N.return=F,F=N}return E(F);case Lt:return ge=U._init,lt(F,N,ge(U._payload),ne)}if(mr(U))return ce(F,N,U,ne);if(me(U))return he(F,N,U,ne);gu(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(a(F,N.sibling),N=d(N,U),N.return=F,F=N):(a(F,N),N=Cf(U,F.mode,ne),N.return=F,F=N),E(F)):a(F,N)}return lt}var fo=Hm(!0),Wm=Hm(!1),yu=ui(null),vu=null,po=null,Fh=null;function Uh(){Fh=po=vu=null}function jh(r){var s=yu.current;Ye(yu),r._currentValue=s}function zh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function mo(r,s){vu=r,Fh=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Zt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(Fh!==r)if(r={context:r,memoizedValue:s,next:null},po===null){if(vu===null)throw Error(t(308));po=r,vu.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return s}var as=null;function Bh(r){as===null?as=[r]:as.push(r)}function qm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Bh(s)):(a.next=d.next,d.next=a),s.interleaved=a,kr(r,c)}function kr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function $h(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function di(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,kr(r,a)}return d=c.interleaved,d===null?(s.next=s,Bh(c)):(s.next=d.next,d.next=s),c.interleaved=s,kr(r,a)}function _u(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ni(r,a)}}function Km(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Eu(r,s,a,c){var d=r.updateQueue;fi=!1;var g=d.firstBaseUpdate,E=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,z=k.next;k.next=null,E===null?g=z:E.next=z,E=k;var X=r.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==E&&(S===null?X.firstBaseUpdate=z:S.next=z,X.lastBaseUpdate=k))}if(g!==null){var J=d.baseState;E=0,X=z=k=null,S=g;do{var Y=S.lane,se=S.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ce=r,he=S;switch(Y=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(se,J,Y);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Y=typeof ce=="function"?ce.call(se,J,Y):ce,Y==null)break e;J=oe({},J,Y);break e;case 2:fi=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[S]:Y.push(S))}else se={eventTime:se,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(z=X=se,k=J):X=X.next=se,E|=Y;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(k=J),d.baseState=k,d.firstBaseUpdate=z,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do E|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);cs|=E,r.lanes=E,r.memoizedState=J}}function Qm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var La={},Jn=ui(La),Ma=ui(La),Va=ui(La);function ls(r){if(r===La)throw Error(t(174));return r}function Hh(r,s){switch(Ke(Va,s),Ke(Ma,r),Ke(Jn,La),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ye(Jn),Ke(Jn,s)}function go(){Ye(Jn),Ye(Ma),Ye(Va)}function Ym(r){ls(Va.current);var s=ls(Jn.current),a=pt(s,r.type);s!==a&&(Ke(Ma,r),Ke(Jn,a))}function Wh(r){Ma.current===r&&(Ye(Jn),Ye(Ma))}var et=ui(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qh=[];function Gh(){for(var r=0;r<qh.length;r++)qh[r]._workInProgressVersionPrimary=null;qh.length=0}var Tu=ue.ReactCurrentDispatcher,Kh=ue.ReactCurrentBatchConfig,us=0,tt=null,gt=null,It=null,Iu=!1,Fa=!1,Ua=0,tT=0;function Vt(){throw Error(t(321))}function Qh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function Yh(r,s,a,c,d,g){if(us=g,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tu.current=r===null||r.memoizedState===null?sT:oT,r=a(c,d),Fa){g=0;do{if(Fa=!1,Ua=0,25<=g)throw Error(t(301));g+=1,It=gt=null,s.updateQueue=null,Tu.current=aT,r=a(c,d)}while(Fa)}if(Tu.current=Pu,s=gt!==null&&gt.next!==null,us=0,It=gt=tt=null,Iu=!1,s)throw Error(t(300));return r}function Xh(){var r=Ua!==0;return Ua=0,r}function Zn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=r:It=It.next=r,It}function wn(){if(gt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=It===null?tt.memoizedState:It.next;if(s!==null)It=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?tt.memoizedState=It=r:It=It.next=r}return It}function ja(r,s){return typeof s=="function"?s(r):s}function Jh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var E=d.next;d.next=g.next,g.next=E}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var S=E=null,k=null,z=g;do{var X=z.lane;if((us&X)===X)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var J={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(S=k=J,E=c):k=k.next=J,tt.lanes|=X,cs|=X}z=z.next}while(z!==null&&z!==g);k===null?E=c:k.next=S,Mn(c,s.memoizedState)||(Zt=!0),s.memoizedState=c,s.baseState=E,s.baseQueue=k,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,tt.lanes|=g,cs|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Zh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do g=r(g,E.action),E=E.next;while(E!==d);Mn(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Xm(){}function Jm(r,s){var a=tt,c=wn(),d=s(),g=!Mn(c.memoizedState,d);if(g&&(c.memoizedState=d,Zt=!0),c=c.queue,ef(tg.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,za(9,eg.bind(null,a,c,d,s),void 0,null),St===null)throw Error(t(349));(us&30)!==0||Zm(a,s,d)}return d}function Zm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function eg(r,s,a,c){s.value=a,s.getSnapshot=c,ng(s)&&rg(r)}function tg(r,s,a){return a(function(){ng(s)&&rg(r)})}function ng(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function rg(r){var s=kr(r,1);s!==null&&zn(s,r,1,-1)}function ig(r){var s=Zn();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},s.queue=r,r=r.dispatch=iT.bind(null,tt,r),[s.memoizedState,r]}function za(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function sg(){return wn().memoizedState}function Su(r,s,a,c){var d=Zn();tt.flags|=r,d.memoizedState=za(1|s,a,void 0,c===void 0?null:c)}function Au(r,s,a,c){var d=wn();c=c===void 0?null:c;var g=void 0;if(gt!==null){var E=gt.memoizedState;if(g=E.destroy,c!==null&&Qh(c,E.deps)){d.memoizedState=za(s,a,g,c);return}}tt.flags|=r,d.memoizedState=za(1|s,a,g,c)}function og(r,s){return Su(8390656,8,r,s)}function ef(r,s){return Au(2048,8,r,s)}function ag(r,s){return Au(4,2,r,s)}function lg(r,s){return Au(4,4,r,s)}function ug(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function cg(r,s,a){return a=a!=null?a.concat([r]):null,Au(4,4,ug.bind(null,s,r),a)}function tf(){}function hg(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Qh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function fg(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Qh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function dg(r,s,a){return(us&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(Mn(a,s)||(a=Ji(),tt.lanes|=a,cs|=a,r.baseState=!0),s)}function nT(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var c=Kh.transition;Kh.transition={};try{r(!1),s()}finally{Oe=a,Kh.transition=c}}function pg(){return wn().memoizedState}function rT(r,s,a){var c=yi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mg(r))gg(s,a);else if(a=qm(r,s,a,c),a!==null){var d=Kt();zn(a,r,c,d),yg(a,s,c)}}function iT(r,s,a){var c=yi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mg(r))gg(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,S=g(E,a);if(d.hasEagerState=!0,d.eagerState=S,Mn(S,E)){var k=s.interleaved;k===null?(d.next=d,Bh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=qm(r,s,d,c),a!==null&&(d=Kt(),zn(a,r,c,d),yg(a,s,c))}}function mg(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function gg(r,s){Fa=Iu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function yg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ni(r,a)}}var Pu={readContext:En,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},sT={readContext:En,useCallback:function(r,s){return Zn().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:og,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Su(4194308,4,ug.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Su(4194308,4,r,s)},useInsertionEffect:function(r,s){return Su(4,2,r,s)},useMemo:function(r,s){var a=Zn();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=Zn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=rT.bind(null,tt,r),[c.memoizedState,r]},useRef:function(r){var s=Zn();return r={current:r},s.memoizedState=r},useState:ig,useDebugValue:tf,useDeferredValue:function(r){return Zn().memoizedState=r},useTransition:function(){var r=ig(!1),s=r[0];return r=nT.bind(null,r[1]),Zn().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=tt,d=Zn();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),St===null)throw Error(t(349));(us&30)!==0||Zm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,og(tg.bind(null,c,g,r),[r]),c.flags|=2048,za(9,eg.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=Zn(),s=St.identifierPrefix;if(Ze){var a=Rr,c=Pr;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ua++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=tT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},oT={readContext:En,useCallback:hg,useContext:En,useEffect:ef,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:fg,useReducer:Jh,useRef:sg,useState:function(){return Jh(ja)},useDebugValue:tf,useDeferredValue:function(r){var s=wn();return dg(s,gt.memoizedState,r)},useTransition:function(){var r=Jh(ja)[0],s=wn().memoizedState;return[r,s]},useMutableSource:Xm,useSyncExternalStore:Jm,useId:pg,unstable_isNewReconciler:!1},aT={readContext:En,useCallback:hg,useContext:En,useEffect:ef,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:fg,useReducer:Zh,useRef:sg,useState:function(){return Zh(ja)},useDebugValue:tf,useDeferredValue:function(r){var s=wn();return gt===null?s.memoizedState=r:dg(s,gt.memoizedState,r)},useTransition:function(){var r=Zh(ja)[0],s=wn().memoizedState;return[r,s]},useMutableSource:Xm,useSyncExternalStore:Jm,useId:pg,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function nf(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ru={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=yi(r),g=Cr(c,d);g.payload=s,a!=null&&(g.callback=a),s=di(r,g,d),s!==null&&(zn(s,r,d,c),_u(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=yi(r),g=Cr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=di(r,g,d),s!==null&&(zn(s,r,d,c),_u(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),c=yi(r),d=Cr(a,c);d.tag=2,s!=null&&(d.callback=s),s=di(r,d,c),s!==null&&(zn(s,r,c,a),_u(s,r,c))}};function vg(r,s,a,c,d,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,E):s.prototype&&s.prototype.isPureReactComponent?!Ra(a,c)||!Ra(d,g):!0}function _g(r,s,a){var c=!1,d=ci,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(d=Jt(s)?is:Mt.current,c=s.contextTypes,g=(c=c!=null)?lo(r,d):ci),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ru,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Eg(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Ru.enqueueReplaceState(s,s.state,null)}function rf(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},$h(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=En(g):(g=Jt(s)?is:Mt.current,d.context=lo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(nf(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Ru.enqueueReplaceState(d,d.state,null),Eu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function yo(r,s){try{var a="",c=s;do a+=ke(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function sf(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function of(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var lT=typeof WeakMap=="function"?WeakMap:Map;function wg(r,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Du||(Du=!0,wf=c),of(r,s)},a}function Tg(r,s,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){of(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){of(r,s),typeof c!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function Ig(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new lT;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=TT.bind(null,r,s,a),s.then(r,r))}function Sg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ag(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,di(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var uT=ue.ReactCurrentOwner,Zt=!1;function Gt(r,s,a,c){s.child=r===null?Wm(s,null,a,c):fo(s,r.child,a,c)}function Pg(r,s,a,c,d){a=a.render;var g=s.ref;return mo(s,d),c=Yh(r,s,a,c,g,d),a=Xh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Ze&&a&&Oh(s),s.flags|=1,Gt(r,s,c,d),s.child)}function Rg(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!kf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,kg(r,s,g,c,d)):(r=ju(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(E,c)&&r.ref===s.ref)return xr(r,s,d)}return s.flags|=1,r=_i(g,c),r.ref=s.ref,r.return=s,s.child=r}function kg(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(Ra(g,c)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Zt=!0);else return s.lanes=r.lanes,xr(r,s,d)}return af(r,s,a,c,d)}function Cg(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(_o,hn),hn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(_o,hn),hn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ke(_o,hn),hn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,Ke(_o,hn),hn|=c;return Gt(r,s,d,a),s.child}function xg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function af(r,s,a,c,d){var g=Jt(a)?is:Mt.current;return g=lo(s,g),mo(s,d),a=Yh(r,s,a,c,g,d),c=Xh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,xr(r,s,d)):(Ze&&c&&Oh(s),s.flags|=1,Gt(r,s,a,d),s.child)}function Ng(r,s,a,c,d){if(Jt(a)){var g=!0;hu(s)}else g=!1;if(mo(s,d),s.stateNode===null)Cu(r,s),_g(s,a,c),rf(s,a,c,d),c=!0;else if(r===null){var E=s.stateNode,S=s.memoizedProps;E.props=S;var k=E.context,z=a.contextType;typeof z=="object"&&z!==null?z=En(z):(z=Jt(a)?is:Mt.current,z=lo(s,z));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";J||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==c||k!==z)&&Eg(s,E,c,z),fi=!1;var Y=s.memoizedState;E.state=Y,Eu(s,c,E,d),k=s.memoizedState,S!==c||Y!==k||Xt.current||fi?(typeof X=="function"&&(nf(s,a,X,c),k=s.memoizedState),(S=fi||vg(s,a,S,c,Y,k,z))?(J||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),E.props=c,E.state=k,E.context=z,c=S):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{E=s.stateNode,Gm(r,s),S=s.memoizedProps,z=s.type===s.elementType?S:Fn(s.type,S),E.props=z,J=s.pendingProps,Y=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=En(k):(k=Jt(a)?is:Mt.current,k=lo(s,k));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==J||Y!==k)&&Eg(s,E,c,k),fi=!1,Y=s.memoizedState,E.state=Y,Eu(s,c,E,d);var ce=s.memoizedState;S!==J||Y!==ce||Xt.current||fi?(typeof se=="function"&&(nf(s,a,se,c),ce=s.memoizedState),(z=fi||vg(s,a,z,c,Y,ce,k)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ce,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ce,k)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),E.props=c,E.state=ce,E.context=k,c=z):(typeof E.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return lf(r,s,a,c,g,d)}function lf(r,s,a,c,d,g){xg(r,s);var E=(s.flags&128)!==0;if(!c&&!E)return d&&Mm(s,a,!1),xr(r,s,g);c=s.stateNode,uT.current=s;var S=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&E?(s.child=fo(s,r.child,null,g),s.child=fo(s,null,S,g)):Gt(r,s,S,g),s.memoizedState=c.state,d&&Mm(s,a,!0),s.child}function bg(r){var s=r.stateNode;s.pendingContext?Dm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Dm(r,s.context,!1),Hh(r,s.containerInfo)}function Og(r,s,a,c,d){return ho(),Vh(d),s.flags|=256,Gt(r,s,a,c),s.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(r){return{baseLanes:r,cachePool:null,transitions:null}}function Dg(r,s,a){var c=s.pendingProps,d=et.current,g=!1,E=(s.flags&128)!==0,S;if((S=E)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ke(et,d&1),r===null)return Mh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=c.children,r=c.fallback,g?(c=s.mode,g=s.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=zu(E,c,0,null),r=ps(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=cf(a),s.memoizedState=uf,r):hf(s,E));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return cT(r,s,E,c,S,d,a);if(g){g=c.fallback,E=s.mode,d=r.child,S=d.sibling;var k={mode:"hidden",children:c.children};return(E&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=_i(d,k),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?g=_i(S,g):(g=ps(g,E,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,E=r.child.memoizedState,E=E===null?cf(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~a,s.memoizedState=uf,c}return g=r.child,r=g.sibling,c=_i(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function hf(r,s){return s=zu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function ku(r,s,a,c){return c!==null&&Vh(c),fo(s,r.child,null,a),r=hf(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function cT(r,s,a,c,d,g,E){if(a)return s.flags&256?(s.flags&=-257,c=sf(Error(t(422))),ku(r,s,E,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=zu({mode:"visible",children:c.children},d,0,null),g=ps(g,d,E,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&fo(s,r.child,null,E),s.child.memoizedState=cf(E),s.memoizedState=uf,g);if((s.mode&1)===0)return ku(r,s,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=sf(g,c,void 0),ku(r,s,E,c)}if(S=(E&r.childLanes)!==0,Zt||S){if(c=St,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,kr(r,d),zn(c,r,d,-1))}return Rf(),c=sf(Error(t(421))),ku(r,s,E,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=IT.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,cn=li(d.nextSibling),un=s,Ze=!0,Vn=null,r!==null&&(vn[_n++]=Pr,vn[_n++]=Rr,vn[_n++]=ss,Pr=r.id,Rr=r.overflow,ss=s),s=hf(s,c.children),s.flags|=4096,s)}function Lg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),zh(r.return,s,a)}function ff(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Mg(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Gt(r,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Lg(r,a,s);else if(r.tag===19)Lg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&wu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ff(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&wu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ff(s,!0,a,null,g);break;case"together":ff(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function xr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),cs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=_i(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=_i(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function hT(r,s,a){switch(s.tag){case 3:bg(s),ho();break;case 5:Ym(s);break;case 1:Jt(s.type)&&hu(s);break;case 4:Hh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(yu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Dg(r,s,a):(Ke(et,et.current&1),r=xr(r,s,a),r!==null?r.sibling:null);Ke(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return Mg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,Cg(r,s,a)}return xr(r,s,a)}var Vg,df,Fg,Ug;Vg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},df=function(){},Fg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ls(Jn.current);var g=null;switch(a){case"input":d=zi(r,d),c=zi(r,c),g=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":d=na(r,d),c=na(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=lu)}la(a,c);var E;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var S=d[z];for(E in S)S.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var k=c[z];if(S=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&k!==S&&(k!=null||S!=null))if(z==="style")if(S){for(E in S)!S.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&S[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Qe("scroll",r),g||S===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Ug=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ba(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function fT(r,s,a){var c=s.pendingProps;switch(Dh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Jt(s.type)&&cu(),Ft(s),null;case 3:return c=s.stateNode,go(),Ye(Xt),Ye(Mt),Gh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(mu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Vn!==null&&(Sf(Vn),Vn=null))),df(r,s),Ft(s),null;case 5:Wh(s);var d=ls(Va.current);if(a=s.type,r!==null&&s.stateNode!=null)Fg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=ls(Jn.current),mu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Xn]=s,c[ba]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<Ca.length;d++)Qe(Ca[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":xs(c,g),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",c);break;case"textarea":bs(c,g),Qe("invalid",c)}la(a,g),d=null;for(var E in g)if(g.hasOwnProperty(E)){var S=g[E];E==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&au(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&au(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&Qe("scroll",c)}switch(a){case"input":pr(c),Ol(c,g,!0);break;case"textarea":pr(c),ra(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=lu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=E.createElement(a,{is:c.is}):(r=E.createElement(a),a==="select"&&(E=r,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):r=E.createElementNS(r,a),r[Xn]=s,r[ba]=c,Vg(r,s,!1,!1),s.stateNode=r;e:{switch(E=ua(a,c),a){case"dialog":Qe("cancel",r),Qe("close",r),d=c;break;case"iframe":case"object":case"embed":Qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<Ca.length;d++)Qe(Ca[d],r);d=c;break;case"source":Qe("error",r),d=c;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),d=c;break;case"details":Qe("toggle",r),d=c;break;case"input":xs(r,c),d=zi(r,c),Qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Qe("invalid",r);break;case"textarea":bs(r,c),d=na(r,c),Qe("invalid",r);break;default:d=c}la(a,d),S=d;for(g in S)if(S.hasOwnProperty(g)){var k=S[g];g==="style"?oa(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ia(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Xr(r,k):typeof k=="number"&&Xr(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Qe("scroll",r):k!=null&&Q(r,g,k,E))}switch(a){case"input":pr(r),Ol(r,c,!1);break;case"textarea":pr(r),ra(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ze(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=lu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Ug(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ls(Va.current),ls(Jn.current),mu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Xn]=s,(g=c.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:au(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&au(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Xn]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ye(et),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Bm(),ho(),s.flags|=98560,g=!1;else if(g=mu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Xn]=s}else ho(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Vn!==null&&(Sf(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(et.current&1)!==0?yt===0&&(yt=3):Rf())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return go(),df(r,s),r===null&&xa(s.stateNode.containerInfo),Ft(s),null;case 10:return jh(s.type._context),Ft(s),null;case 17:return Jt(s.type)&&cu(),Ft(s),null;case 19:if(Ye(et),g=s.memoizedState,g===null)return Ft(s),null;if(c=(s.flags&128)!==0,E=g.rendering,E===null)if(c)Ba(g,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=wu(r),E!==null){for(s.flags|=128,Ba(g,!1),c=E.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(et,et.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ge()>Eo&&(s.flags|=128,c=!0,Ba(g,!1),s.lanes=4194304)}else{if(!c)if(r=wu(E),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ba(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ze)return Ft(s),null}else 2*Ge()-g.renderingStartTime>Eo&&a!==1073741824&&(s.flags|=128,c=!0,Ba(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(a=g.last,a!==null?a.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ge(),s.sibling=null,a=et.current,Ke(et,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Pf(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(hn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function dT(r,s){switch(Dh(s),s.tag){case 1:return Jt(s.type)&&cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return go(),Ye(Xt),Ye(Mt),Gh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Wh(s),null;case 13:if(Ye(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ho()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(et),null;case 4:return go(),null;case 10:return jh(s.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var xu=!1,Ut=!1,pT=typeof WeakSet=="function"?WeakSet:Set,le=null;function vo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(r,s,c)}else a.current=null}function pf(r,s,a){try{a()}catch(c){it(r,s,c)}}var jg=!1;function mT(r,s){if(Ah=si,r=vm(),yh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,S=-1,k=-1,z=0,X=0,J=r,Y=null;t:for(;;){for(var se;J!==a||d!==0&&J.nodeType!==3||(S=E+d),J!==g||c!==0&&J.nodeType!==3||(k=E+c),J.nodeType===3&&(E+=J.nodeValue.length),(se=J.firstChild)!==null;)Y=J,J=se;for(;;){if(J===r)break t;if(Y===a&&++z===d&&(S=E),Y===g&&++X===c&&(k=E),(se=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=se}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ph={focusedElem:r,selectionRange:a},si=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,lt=ce.memoizedState,F=s.stateNode,N=F.getSnapshotBeforeUpdate(s.elementType===s.type?he:Fn(s.type,he),lt);F.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){it(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=jg,jg=!1,ce}function $a(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&pf(s,a,g)}d=d.next}while(d!==c)}}function Nu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function mf(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function zg(r){var s=r.alternate;s!==null&&(r.alternate=null,zg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Xn],delete s[ba],delete s[xh],delete s[Xw],delete s[Jw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Bg(r){return r.tag===5||r.tag===3||r.tag===4}function $g(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function gf(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=lu));else if(c!==4&&(r=r.child,r!==null))for(gf(r,s,a),r=r.sibling;r!==null;)gf(r,s,a),r=r.sibling}function yf(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(yf(r,s,a),r=r.sibling;r!==null;)yf(r,s,a),r=r.sibling}var Ct=null,Un=!1;function pi(r,s,a){for(a=a.child;a!==null;)Hg(r,s,a),a=a.sibling}function Hg(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:Ut||vo(a,s);case 6:var c=Ct,d=Un;Ct=null,pi(r,s,a),Ct=c,Un=d,Ct!==null&&(Un?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Un?(r=Ct,a=a.stateNode,r.nodeType===8?Ch(r.parentNode,a):r.nodeType===1&&Ch(r,a),Dn(r)):Ch(Ct,a.stateNode));break;case 4:c=Ct,d=Un,Ct=a.stateNode.containerInfo,Un=!0,pi(r,s,a),Ct=c,Un=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&pf(a,s,E),d=d.next}while(d!==c)}pi(r,s,a);break;case 1:if(!Ut&&(vo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){it(a,s,S)}pi(r,s,a);break;case 21:pi(r,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,pi(r,s,a),Ut=c):pi(r,s,a);break;default:pi(r,s,a)}}function Wg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new pT),s.forEach(function(c){var d=ST.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,E=s,S=E;e:for(;S!==null;){switch(S.tag){case 5:Ct=S.stateNode,Un=!1;break e;case 3:Ct=S.stateNode.containerInfo,Un=!0;break e;case 4:Ct=S.stateNode.containerInfo,Un=!0;break e}S=S.return}if(Ct===null)throw Error(t(160));Hg(g,E,d),Ct=null,Un=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(z){it(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qg(s,r),s=s.sibling}function qg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(jn(s,r),er(r),c&4){try{$a(3,r,r.return),Nu(3,r)}catch(he){it(r,r.return,he)}try{$a(5,r,r.return)}catch(he){it(r,r.return,he)}}break;case 1:jn(s,r),er(r),c&512&&a!==null&&vo(a,a.return);break;case 5:if(jn(s,r),er(r),c&512&&a!==null&&vo(a,a.return),r.flags&32){var d=r.stateNode;try{Xr(d,"")}catch(he){it(r,r.return,he)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,E=a!==null?a.memoizedProps:g,S=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&ea(d,g),ua(S,E);var z=ua(S,g);for(E=0;E<k.length;E+=2){var X=k[E],J=k[E+1];X==="style"?oa(d,J):X==="dangerouslySetInnerHTML"?ia(d,J):X==="children"?Xr(d,J):Q(d,X,J,z)}switch(S){case"input":ta(d,g);break;case"textarea":Os(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?gr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?gr(d,!!g.multiple,g.defaultValue,!0):gr(d,!!g.multiple,g.multiple?[]:"",!1))}d[ba]=g}catch(he){it(r,r.return,he)}}break;case 6:if(jn(s,r),er(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){it(r,r.return,he)}}break;case 3:if(jn(s,r),er(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(he){it(r,r.return,he)}break;case 4:jn(s,r),er(r);break;case 13:jn(s,r),er(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Ef=Ge())),c&4&&Wg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||X,jn(s,r),Ut=z):jn(s,r),er(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&(r.mode&1)!==0)for(le=r,X=r.child;X!==null;){for(J=le=X;le!==null;){switch(Y=le,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:$a(4,Y,Y.return);break;case 1:vo(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){it(c,a,he)}}break;case 5:vo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Qg(J);continue}}se!==null?(se.return=Y,le=se):Qg(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{d=J.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=J.stateNode,k=J.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=sa("display",E))}catch(he){it(r,r.return,he)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(he){it(r,r.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:jn(s,r),er(r),c&4&&Wg(r);break;case 21:break;default:jn(s,r),er(r)}}function er(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Bg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Xr(d,""),c.flags&=-33);var g=$g(r);yf(r,g,d);break;case 3:case 4:var E=c.stateNode.containerInfo,S=$g(r);gf(r,S,E);break;default:throw Error(t(161))}}catch(k){it(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function gT(r,s,a){le=r,Gg(r)}function Gg(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var d=le,g=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||xu;if(!E){var S=d.alternate,k=S!==null&&S.memoizedState!==null||Ut;S=xu;var z=Ut;if(xu=E,(Ut=k)&&!z)for(le=d;le!==null;)E=le,k=E.child,E.tag===22&&E.memoizedState!==null?Yg(d):k!==null?(k.return=E,le=k):Yg(d);for(;g!==null;)le=g,Gg(g),g=g.sibling;le=d,xu=S,Ut=z}Kg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,le=g):Kg(r)}}function Kg(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Nu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Qm(s,g,c);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Qm(s,E,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Dn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&mf(s)}catch(Y){it(s,s.return,Y)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Qg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Yg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Nu(4,s)}catch(k){it(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){it(s,d,k)}}var g=s.return;try{mf(s)}catch(k){it(s,g,k)}break;case 5:var E=s.return;try{mf(s)}catch(k){it(s,E,k)}}}catch(k){it(s,s.return,k)}if(s===r){le=null;break}var S=s.sibling;if(S!==null){S.return=s.return,le=S;break}le=s.return}}var yT=Math.ceil,bu=ue.ReactCurrentDispatcher,vf=ue.ReactCurrentOwner,Tn=ue.ReactCurrentBatchConfig,Fe=0,St=null,ht=null,xt=0,hn=0,_o=ui(0),yt=0,Ha=null,cs=0,Ou=0,_f=0,Wa=null,en=null,Ef=0,Eo=1/0,Nr=null,Du=!1,wf=null,mi=null,Lu=!1,gi=null,Mu=0,qa=0,Tf=null,Vu=-1,Fu=0;function Kt(){return(Fe&6)!==0?Ge():Vu!==-1?Vu:Vu=Ge()}function yi(r){return(r.mode&1)===0?1:(Fe&2)!==0&&xt!==0?xt&-xt:eT.transition!==null?(Fu===0&&(Fu=Ji()),Fu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:Ea(r.type)),r)}function zn(r,s,a,c){if(50<qa)throw qa=0,Tf=null,Error(t(185));ti(r,a,c),((Fe&2)===0||r!==St)&&(r===St&&((Fe&2)===0&&(Ou|=a),yt===4&&vi(r,xt)),tn(r,c),a===1&&Fe===0&&(s.mode&1)===0&&(Eo=Ge()+500,fu&&hi()))}function tn(r,s){var a=r.callbackNode;_r(r,s);var c=Xi(r,r===St?xt:0);if(c===0)a!==null&&ma(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ma(a),s===1)r.tag===0?Zw(Jg.bind(null,r)):Vm(Jg.bind(null,r)),Qw(function(){(Fe&6)===0&&hi()}),a=null;else{switch(ri(c)){case 1:a=Qi;break;case 4:a=Jr;break;case 16:a=mn;break;case 536870912:a=Fl;break;default:a=mn}a=oy(a,Xg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Xg(r,s){if(Vu=-1,Fu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(wo()&&r.callbackNode!==a)return null;var c=Xi(r,r===St?xt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Uu(r,c);else{s=c;var d=Fe;Fe|=2;var g=ey();(St!==r||xt!==s)&&(Nr=null,Eo=Ge()+500,fs(r,s));do try{ET();break}catch(S){Zg(r,S)}while(!0);Uh(),bu.current=g,Fe=d,ht!==null?s=0:(St=null,xt=0,s=yt)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(c=d,s=If(r,d))),s===1)throw a=Ha,fs(r,0),vi(r,c),tn(r,Ge()),a;if(s===6)vi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!vT(d)&&(s=Uu(r,c),s===2&&(g=on(r),g!==0&&(c=g,s=If(r,g))),s===1))throw a=Ha,fs(r,0),vi(r,c),tn(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ds(r,en,Nr);break;case 3:if(vi(r,c),(c&130023424)===c&&(s=Ef+500-Ge(),10<s)){if(Xi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=kh(ds.bind(null,r,en,Nr),s);break}ds(r,en,Nr);break;case 4:if(vi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var E=31-Wt(c);g=1<<E,E=s[E],E>d&&(d=E),c&=~g}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yT(c/1960))-c,10<c){r.timeoutHandle=kh(ds.bind(null,r,en,Nr),c);break}ds(r,en,Nr);break;case 5:ds(r,en,Nr);break;default:throw Error(t(329))}}}return tn(r,Ge()),r.callbackNode===a?Xg.bind(null,r):null}function If(r,s){var a=Wa;return r.current.memoizedState.isDehydrated&&(fs(r,s).flags|=256),r=Uu(r,s),r!==2&&(s=en,en=a,s!==null&&Sf(s)),r}function Sf(r){en===null?en=r:en.push.apply(en,r)}function vT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Mn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~_f,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),c=1<<a;r[a]=-1,s&=~c}}function Jg(r){if((Fe&6)!==0)throw Error(t(327));wo();var s=Xi(r,0);if((s&1)===0)return tn(r,Ge()),null;var a=Uu(r,s);if(r.tag!==0&&a===2){var c=on(r);c!==0&&(s=c,a=If(r,c))}if(a===1)throw a=Ha,fs(r,0),vi(r,s),tn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ds(r,en,Nr),tn(r,Ge()),null}function Af(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Eo=Ge()+500,fu&&hi())}}function hs(r){gi!==null&&gi.tag===0&&(Fe&6)===0&&wo();var s=Fe;Fe|=1;var a=Tn.transition,c=Oe;try{if(Tn.transition=null,Oe=1,r)return r()}finally{Oe=c,Tn.transition=a,Fe=s,(Fe&6)===0&&hi()}}function Pf(){hn=_o.current,Ye(_o)}function fs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Kw(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(Dh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&cu();break;case 3:go(),Ye(Xt),Ye(Mt),Gh();break;case 5:Wh(c);break;case 4:go();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:jh(c.type._context);break;case 22:case 23:Pf()}a=a.return}if(St=r,ht=r=_i(r.current,null),xt=hn=s,yt=0,Ha=null,_f=Ou=cs=0,en=Wa=null,as!==null){for(s=0;s<as.length;s++)if(a=as[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=d,c.next=E}a.pending=c}as=null}return r}function Zg(r,s){do{var a=ht;try{if(Uh(),Tu.current=Pu,Iu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Iu=!1}if(us=0,It=gt=tt=null,Fa=!1,Ua=0,vf.current=null,a===null||a.return===null){yt=1,Ha=s,ht=null;break}e:{var g=r,E=a.return,S=a,k=s;if(s=xt,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,X=S,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Sg(E);if(se!==null){se.flags&=-257,Ag(se,E,S,g,s),se.mode&1&&Ig(g,z,s),s=se,k=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(k),s.updateQueue=he}else ce.add(k);break e}else{if((s&1)===0){Ig(g,z,s),Rf();break e}k=Error(t(426))}}else if(Ze&&S.mode&1){var lt=Sg(E);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Ag(lt,E,S,g,s),Vh(yo(k,S));break e}}g=k=yo(k,S),yt!==4&&(yt=2),Wa===null?Wa=[g]:Wa.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=wg(g,k,s);Km(g,F);break e;case 1:S=k;var N=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(mi===null||!mi.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=Tg(g,S,s);Km(g,ne);break e}}g=g.return}while(g!==null)}ny(a)}catch(fe){s=fe,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function ey(){var r=bu.current;return bu.current=Pu,r===null?Pu:r}function Rf(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||(cs&268435455)===0&&(Ou&268435455)===0||vi(St,xt)}function Uu(r,s){var a=Fe;Fe|=2;var c=ey();(St!==r||xt!==s)&&(Nr=null,fs(r,s));do try{_T();break}catch(d){Zg(r,d)}while(!0);if(Uh(),Fe=a,bu.current=c,ht!==null)throw Error(t(261));return St=null,xt=0,yt}function _T(){for(;ht!==null;)ty(ht)}function ET(){for(;ht!==null&&!Ml();)ty(ht)}function ty(r){var s=sy(r.alternate,r,hn);r.memoizedProps=r.pendingProps,s===null?ny(r):ht=s,vf.current=null}function ny(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=fT(a,s,hn),a!==null){ht=a;return}}else{if(a=dT(a,s),a!==null){a.flags&=32767,ht=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);yt===0&&(yt=5)}function ds(r,s,a){var c=Oe,d=Tn.transition;try{Tn.transition=null,Oe=1,wT(r,s,a,c)}finally{Tn.transition=d,Oe=c}return null}function wT(r,s,a,c){do wo();while(gi!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(We(r,g),r===St&&(ht=St=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Lu||(Lu=!0,oy(mn,function(){return wo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Tn.transition,Tn.transition=null;var E=Oe;Oe=1;var S=Fe;Fe|=4,vf.current=null,mT(r,a),qg(a,r),zw(Ph),si=!!Ah,Ph=Ah=null,r.current=a,gT(a),uh(),Fe=S,Oe=E,Tn.transition=g}else r.current=a;if(Lu&&(Lu=!1,gi=r,Mu=d),g=r.pendingLanes,g===0&&(mi=null),Ul(a.stateNode),tn(r,Ge()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,r=wf,wf=null,r;return(Mu&1)!==0&&r.tag!==0&&wo(),g=r.pendingLanes,(g&1)!==0?r===Tf?qa++:(qa=0,Tf=r):qa=0,hi(),null}function wo(){if(gi!==null){var r=ri(Mu),s=Tn.transition,a=Oe;try{if(Tn.transition=null,Oe=16>r?16:r,gi===null)var c=!1;else{if(r=gi,gi=null,Mu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,le=r.current;le!==null;){var g=le,E=g.child;if((le.flags&16)!==0){var S=g.deletions;if(S!==null){for(var k=0;k<S.length;k++){var z=S[k];for(le=z;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:$a(8,X,g)}var J=X.child;if(J!==null)J.return=X,le=J;else for(;le!==null;){X=le;var Y=X.sibling,se=X.return;if(zg(X),X===z){le=null;break}if(Y!==null){Y.return=se,le=Y;break}le=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var lt=he.sibling;he.sibling=null,he=lt}while(he!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,le=E;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:$a(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,le=F;break e}le=g.return}}var N=r.current;for(le=N;le!==null;){E=le;var U=E.child;if((E.subtreeFlags&2064)!==0&&U!==null)U.return=E,le=U;else e:for(E=N;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Nu(9,S)}}catch(fe){it(S,S.return,fe)}if(S===E){le=null;break e}var ne=S.sibling;if(ne!==null){ne.return=S.return,le=ne;break e}le=S.return}}if(Fe=d,hi(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Yi,r)}catch{}c=!0}return c}finally{Oe=a,Tn.transition=s}}return!1}function ry(r,s,a){s=yo(a,s),s=wg(r,s,1),r=di(r,s,1),s=Kt(),r!==null&&(ti(r,1,s),tn(r,s))}function it(r,s,a){if(r.tag===3)ry(r,r,a);else for(;s!==null;){if(s.tag===3){ry(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mi===null||!mi.has(c))){r=yo(a,r),r=Tg(s,r,1),s=di(s,r,1),r=Kt(),s!==null&&(ti(s,1,r),tn(s,r));break}}s=s.return}}function TT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>Ge()-Ef?fs(r,0):_f|=a),tn(r,s)}function iy(r,s){s===0&&((r.mode&1)===0?s=1:(s=$s,$s<<=1,($s&130023424)===0&&($s=4194304)));var a=Kt();r=kr(r,s),r!==null&&(ti(r,s,a),tn(r,a))}function IT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),iy(r,a)}function ST(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),iy(r,a)}var sy;sy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Zt=!1,hT(r,s,a);Zt=(r.flags&131072)!==0}else Zt=!1,Ze&&(s.flags&1048576)!==0&&Fm(s,pu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Cu(r,s),r=s.pendingProps;var d=lo(s,Mt.current);mo(s,a),d=Yh(null,s,c,r,d,a);var g=Xh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(g=!0,hu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$h(s),d.updater=Ru,s.stateNode=d,d._reactInternals=s,rf(s,c,r,a),s=lf(null,s,c,!0,g,a)):(s.tag=0,Ze&&g&&Oh(s),Gt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Cu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=PT(c),r=Fn(c,r),d){case 0:s=af(null,s,c,r,a);break e;case 1:s=Ng(null,s,c,r,a);break e;case 11:s=Pg(null,s,c,r,a);break e;case 14:s=Rg(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),af(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Ng(r,s,c,d,a);case 3:e:{if(bg(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Gm(r,s),Eu(s,c,null,a);var E=s.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=yo(Error(t(423)),s),s=Og(r,s,c,a,d);break e}else if(c!==d){d=yo(Error(t(424)),s),s=Og(r,s,c,a,d);break e}else for(cn=li(s.stateNode.containerInfo.firstChild),un=s,Ze=!0,Vn=null,a=Wm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ho(),c===d){s=xr(r,s,a);break e}Gt(r,s,c,a)}s=s.child}return s;case 5:return Ym(s),r===null&&Mh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,E=d.children,Rh(c,d)?E=null:g!==null&&Rh(c,g)&&(s.flags|=32),xg(r,s),Gt(r,s,E,a),s.child;case 6:return r===null&&Mh(s),null;case 13:return Dg(r,s,a);case 4:return Hh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=fo(s,null,c,a):Gt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Pg(r,s,c,d,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,E=d.value,Ke(yu,c._currentValue),c._currentValue=E,g!==null)if(Mn(g.value,E)){if(g.children===d.children&&!Xt.current){s=xr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){E=g.child;for(var k=S.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=Cr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?k.next=k:(k.next=X.next,X.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),zh(g.return,a,s),S.lanes|=a;break}k=k.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,S=E.alternate,S!==null&&(S.lanes|=a),zh(E,a,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Gt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,mo(s,a),d=En(d),c=c(d),s.flags|=1,Gt(r,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),Rg(r,s,c,d,a);case 15:return kg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Cu(r,s),s.tag=1,Jt(c)?(r=!0,hu(s)):r=!1,mo(s,a),_g(s,c,d),rf(s,c,d,a),lf(null,s,c,!0,r,a);case 19:return Mg(r,s,a);case 22:return Cg(r,s,a)}throw Error(t(156,s.tag))};function oy(r,s){return zs(r,s)}function AT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,c){return new AT(r,s,a,c)}function kf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function PT(r){if(typeof r=="function")return kf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Dt)return 14}return 2}function _i(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ju(r,s,a,c,d,g){var E=2;if(c=r,typeof r=="function")kf(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case x:return ps(a.children,d,g,s);case I:E=8,d|=8;break;case P:return r=In(12,a,s,d|2),r.elementType=P,r.lanes=g,r;case R:return r=In(13,a,s,d),r.elementType=R,r.lanes=g,r;case ot:return r=In(19,a,s,d),r.elementType=ot,r.lanes=g,r;case He:return zu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case C:E=10;break e;case b:E=9;break e;case M:E=11;break e;case Dt:E=14;break e;case Lt:E=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(E,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ps(r,s,a,c){return r=In(7,r,c,s),r.lanes=a,r}function zu(r,s,a,c){return r=In(22,r,c,s),r.elementType=He,r.lanes=a,r.stateNode={isHidden:!1},r}function Cf(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function xf(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function RT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nf(r,s,a,c,d,g,E,S,k){return r=new RT(r,s,a,S,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(g),r}function kT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function ay(r){if(!r)return ci;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return Lm(r,a,s)}return s}function ly(r,s,a,c,d,g,E,S,k){return r=Nf(a,c,!0,r,d,g,E,S,k),r.context=ay(null),a=r.current,c=Kt(),d=yi(a),g=Cr(c,d),g.callback=s??null,di(a,g,d),r.current.lanes=d,ti(r,d,c),tn(r,c),r}function Bu(r,s,a,c){var d=s.current,g=Kt(),E=yi(d);return a=ay(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(g,E),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=di(d,s,E),r!==null&&(zn(r,d,E,g),_u(r,d,E)),E}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function uy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function bf(r,s){uy(r,s),(r=r.alternate)&&uy(r,s)}function CT(){return null}var cy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Of(r){this._internalRoot=r}Hu.prototype.render=Of.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bu(r,s,null,null)},Hu.prototype.unmount=Of.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;hs(function(){Bu(null,r,null,null)}),s[Sr]=null}};function Hu(r){this._internalRoot=r}Hu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Hl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Gn.length&&s!==0&&s<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&Gl(r)}};function Df(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hy(){}function xT(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=$u(E);g.call(z)}}var E=ly(s,c,r,0,null,!1,!1,"",hy);return r._reactRootContainer=E,r[Sr]=E.current,xa(r.nodeType===8?r.parentNode:r),hs(),E}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var z=$u(k);S.call(z)}}var k=Nf(r,0,!1,null,null,!1,!1,"",hy);return r._reactRootContainer=k,r[Sr]=k.current,xa(r.nodeType===8?r.parentNode:r),hs(function(){Bu(s,k,a,c)}),k}function qu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var E=g;if(typeof d=="function"){var S=d;d=function(){var k=$u(E);S.call(k)}}Bu(s,E,r,d)}else E=xT(a,s,r,d,c);return $u(E)}Bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Zr(s.pendingLanes);a!==0&&(ni(s,a|1),tn(s,Ge()),(Fe&6)===0&&(Eo=Ge()+500,hi()))}break;case 13:hs(function(){var c=kr(r,1);if(c!==null){var d=Kt();zn(c,r,1,d)}}),bf(r,1)}},Hs=function(r){if(r.tag===13){var s=kr(r,134217728);if(s!==null){var a=Kt();zn(s,r,134217728,a)}bf(r,134217728)}},$l=function(r){if(r.tag===13){var s=yi(r),a=kr(r,s);if(a!==null){var c=Kt();zn(a,r,s,c)}bf(r,s)}},Hl=function(){return Oe},Wl=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},Ls=function(r,s,a){switch(s){case"input":if(ta(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=uu(c);if(!d)throw Error(t(90));Cs(c),ta(c,d)}}}break;case"textarea":Os(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},Wi=Af,ha=hs;var NT={usingClientEntryPoint:!1,Events:[Oa,oo,uu,Wn,ca,Af]},Ga={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bT={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=pa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||CT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Yi=Gu.inject(bT),sn=Gu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(s))throw Error(t(200));return kT(r,s,null,a)},nn.createRoot=function(r,s){if(!Df(r))throw Error(t(299));var a=!1,c="",d=cy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Nf(r,1,!1,null,null,a,!1,c,d),r[Sr]=s.current,xa(r.nodeType===8?r.parentNode:r),new Of(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=pa(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return hs(r)},nn.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return qu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Df(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",E=cy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=ly(s,null,r,1,a??null,d,!1,g,E),r[Sr]=s.current,xa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Hu(s)},nn.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return qu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(hs(function(){qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},nn.unstable_batchedUpdates=Af,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return qu(r,s,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var _y;function jT(){if(_y)return Vf.exports;_y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vf.exports=UT(),Vf.exports}var Ey;function zT(){if(Ey)return Ku;Ey=1;var n=jT();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var BT=zT(),B=Xd();const y_=g_(B);var wy={};/**
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
 */const v_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$T=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},__={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,T=(l&3)<<4|f>>4;let A=(f&15)<<2|y>>6,O=y&63;p||(O=64,h||(A=64)),i.push(t[_],t[T],t[A],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(v_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$T(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new HT;const A=l<<2|f>>4;if(i.push(A),y!==64){const O=f<<4&240|y>>2;if(i.push(O),T!==64){const H=y<<6&192|T;i.push(H)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(n){const e=v_(n);return __.encodeByteArray(e,!0)},yc=function(n){return WT(n).replace(/\./g,"")},E_=function(n){try{return __.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GT=()=>qT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof wy>"u")return;const n=wy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},QT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&E_(n[1]);return e&&JSON.parse(e)},Uc=()=>{try{return GT()||KT()||QT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},w_=n=>{var e,t;return(t=(e=Uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},YT=n=>{const e=w_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},T_=()=>{var n;return(n=Uc())===null||n===void 0?void 0:n.config},I_=n=>{var e;return(e=Uc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class XT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function JT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yc(JSON.stringify(t)),yc(JSON.stringify(h)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function eI(){var n;const e=(n=Uc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sI(){return!eI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oI(){try{return typeof indexedDB=="object"}catch{return!1}}function aI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const lI="FirebaseError";class Gr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=lI,Object.setPrototypeOf(this,Gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?uI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Gr(o,f,i)}}function uI(n,e){return n.replace(cI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const cI=/\{\$([^}]+)}/g;function hI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Ty(l)&&Ty(h)){if(!vc(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ty(n){return n!==null&&typeof n=="object"}/**
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
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fI(n,e){const t=new dI(n,e);return t.subscribe.bind(t)}class dI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=jf),o.error===void 0&&(o.error=jf),o.complete===void 0&&(o.complete=jf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jf(){}/**
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
 */function Pn(n){return n&&n._delegate?n._delegate:n}class Es{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class mI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new XT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:gI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gI(n){return n===ms?void 0:n}function yI(n){return n.instantiationMode==="EAGER"}/**
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
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const _I={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},EI=Ne.INFO,wI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},TI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=wI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const II=(n,e)=>e.some(t=>n instanceof t);let Iy,Sy;function SI(){return Iy||(Iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return Sy||(Sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,ld=new WeakMap,A_=new WeakMap,zf=new WeakMap,Zd=new WeakMap;function PI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(ki(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&S_.set(t,n)}).catch(()=>{}),Zd.set(e,n),e}function RI(n){if(ld.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});ld.set(n,e)}let ud={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ld.get(n);if(e==="objectStoreNames")return n.objectStoreNames||A_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kI(n){ud=n(ud)}function CI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Bf(this),e,...t);return A_.set(i,e.sort?e.sort():[e]),ki(i)}:AI().includes(n)?function(...e){return n.apply(Bf(this),e),ki(S_.get(this))}:function(...e){return ki(n.apply(Bf(this),e))}}function xI(n){return typeof n=="function"?CI(n):(n instanceof IDBTransaction&&RI(n),II(n,SI())?new Proxy(n,ud):n)}function ki(n){if(n instanceof IDBRequest)return PI(n);if(zf.has(n))return zf.get(n);const e=xI(n);return e!==n&&(zf.set(n,e),Zd.set(e,n)),e}const Bf=n=>Zd.get(n);function NI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=ki(h);return i&&h.addEventListener("upgradeneeded",p=>{i(ki(h.result),p.oldVersion,p.newVersion,ki(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const bI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],$f=new Map;function Ay(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($f.get(e))return $f.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=OI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||bI.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return $f.set(e,l),l}kI(n=>({...n,get:(e,t,i)=>Ay(e,t)||n.get(e,t,i),has:(e,t)=>!!Ay(e,t)||n.has(e,t)}));/**
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
 */class DI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function LI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",Py="0.10.18";/**
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
 */const jr=new Jd("@firebase/app"),MI="@firebase/app-compat",VI="@firebase/analytics-compat",FI="@firebase/analytics",UI="@firebase/app-check-compat",jI="@firebase/app-check",zI="@firebase/auth",BI="@firebase/auth-compat",$I="@firebase/database",HI="@firebase/data-connect",WI="@firebase/database-compat",qI="@firebase/functions",GI="@firebase/functions-compat",KI="@firebase/installations",QI="@firebase/installations-compat",YI="@firebase/messaging",XI="@firebase/messaging-compat",JI="@firebase/performance",ZI="@firebase/performance-compat",eS="@firebase/remote-config",tS="@firebase/remote-config-compat",nS="@firebase/storage",rS="@firebase/storage-compat",iS="@firebase/firestore",sS="@firebase/vertexai",oS="@firebase/firestore-compat",aS="firebase",lS="11.2.0";/**
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
 */const hd="[DEFAULT]",uS={[cd]:"fire-core",[MI]:"fire-core-compat",[FI]:"fire-analytics",[VI]:"fire-analytics-compat",[jI]:"fire-app-check",[UI]:"fire-app-check-compat",[zI]:"fire-auth",[BI]:"fire-auth-compat",[$I]:"fire-rtdb",[HI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[qI]:"fire-fn",[GI]:"fire-fn-compat",[KI]:"fire-iid",[QI]:"fire-iid-compat",[YI]:"fire-fcm",[XI]:"fire-fcm-compat",[JI]:"fire-perf",[ZI]:"fire-perf-compat",[eS]:"fire-rc",[tS]:"fire-rc-compat",[nS]:"fire-gcs",[rS]:"fire-gcs-compat",[iS]:"fire-fst",[oS]:"fire-fst-compat",[sS]:"fire-vertex","fire-js":"fire-js",[aS]:"fire-js-all"};/**
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
 */const _c=new Map,cS=new Map,fd=new Map;function Ry(n,e){try{n.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Do(n){const e=n.name;if(fd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,n);for(const t of _c.values())Ry(t,n);for(const t of cS.values())Ry(t,n);return!0}function ep(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Or(n){return n.settings!==void 0}/**
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
 */const hS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new _l("app","Firebase",hS);/**
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
 */class fS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
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
 */const Wo=lS;function P_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=T_()),!t)throw Ci.create("no-options");const l=_c.get(o);if(l){if(vc(t,l.options)&&vc(i,l.config))return l;throw Ci.create("duplicate-app",{appName:o})}const h=new vI(o);for(const p of fd.values())h.addComponent(p);const f=new fS(t,i,h);return _c.set(o,f),f}function R_(n=hd){const e=_c.get(n);if(!e&&n===hd&&T_())return P_();if(!e)throw Ci.create("no-app",{appName:n});return e}function xi(n,e,t){var i;let o=(i=uS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(f.join(" "));return}Do(new Es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const dS="firebase-heartbeat-database",pS=1,al="firebase-heartbeat-store";let Hf=null;function k_(){return Hf||(Hf=NI(dS,pS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ci.create("idb-open",{originalErrorMessage:n.message})})),Hf}async function mS(n){try{const t=(await k_()).transaction(al),i=await t.objectStore(al).get(C_(n));return await t.done,i}catch(e){if(e instanceof Gr)jr.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function ky(n,e){try{const i=(await k_()).transaction(al,"readwrite");await i.objectStore(al).put(e,C_(n)),await i.done}catch(t){if(t instanceof Gr)jr.warn(t.message);else{const i=Ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function C_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gS=1024,yS=720*60*60*1e3;class vS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ES(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=yS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cy(),{heartbeatsToSend:i,unsentEntries:o}=_S(this._heartbeatsCache.heartbeats),l=yc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function Cy(){return new Date().toISOString().substring(0,10)}function _S(n,e=gS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),xy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),xy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ES{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oI()?aI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ky(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ky(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function xy(n){return yc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function wS(n){Do(new Es("platform-logger",e=>new DI(e),"PRIVATE")),Do(new Es("heartbeat",e=>new vS(e),"PRIVATE")),xi(cd,Py,n),xi(cd,Py,"esm2017"),xi("fire-js","")}wS("");var TS="firebase",IS="11.2.0";/**
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
 */xi(TS,IS,"app");function tp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SS=x_,N_=new _l("auth","Firebase",x_());/**
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
 */const Ec=new Jd("@firebase/auth");function AS(n,...e){Ec.logLevel<=Ne.WARN&&Ec.warn(`Auth (${Wo}): ${n}`,...e)}function ic(n,...e){Ec.logLevel<=Ne.ERROR&&Ec.error(`Auth (${Wo}): ${n}`,...e)}/**
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
 */function lr(n,...e){throw rp(n,...e)}function $n(n,...e){return rp(n,...e)}function np(n,e,t){const i=Object.assign(Object.assign({},SS()),{[e]:t});return new _l("auth","Firebase",i).create(e,{appName:n.name})}function _s(n){return np(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&lr(n,"argument-error"),np(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return N_.create(n,...e)}function Te(n,e,...t){if(!n)throw rp(e,...t)}function Dr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ic(e),new Error(e)}function zr(n,e){n||Dr(e)}/**
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
 */function dd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function RS(){return Ny()==="http:"||Ny()==="https:"}function Ny(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function kS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RS()||nI()||"connection"in navigator)?navigator.onLine:!0}function CS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||rI()}get(){return kS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class b_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NS=new wl(3e4,6e4);function sp(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qo(n,e,t,i,o={}){return O_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=El(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return tI()||(y.referrerPolicy="no-referrer"),b_.fetch()(D_(n,n.config.apiHost,t,f),y)})}async function O_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},xS),e);try{const o=new OS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Qu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Qu(n,"user-disabled",h);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw np(n,_,y);lr(n,_)}}catch(o){if(o instanceof Gr)throw o;lr(n,"network-request-failed",{message:String(o)})}}async function bS(n,e,t,i,o={}){const l=await qo(n,e,t,i,o);return"mfaPendingCredential"in l&&lr(n,"multi-factor-auth-required",{_serverResponse:l}),l}function D_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?ip(n.config,o):`${n.config.apiScheme}://${o}`}class OS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i($n(this.auth,"network-request-failed")),NS.get())})}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=$n(n,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function DS(n,e){return qo(n,"POST","/v1/accounts:delete",e)}async function L_(n,e){return qo(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function el(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LS(n,e=!1){const t=Pn(n),i=await t.getIdToken(e),o=op(i);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:el(Wf(o.auth_time)),issuedAtTime:el(Wf(o.iat)),expirationTime:el(Wf(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Wf(n){return Number(n)*1e3}function op(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const o=E_(t);return o?JSON.parse(o):(ic("Failed to decode base64 JWT payload"),null)}catch(o){return ic("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function by(n){const e=op(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gr&&MS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function MS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */async function wc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ll(n,L_(t,{idToken:i}));Te(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?M_(l.providerUserInfo):[],f=US(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),_=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new pd(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function FS(n){const e=Pn(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function M_(n){return n.map(e=>{var{providerId:t}=e,i=tp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function jS(n,e){const t=await O_(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=D_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",b_.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zS(n,e){return qo(n,"POST","/v2/accounts:revokeToken",sp(n,e))}/**
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
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):by(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=by(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await jS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Co;return i&&(Te(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Te(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
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
 */function wi(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new pd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LS(this,e)}reload(){return FS(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Or(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await ll(this,DS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,y,_;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,H=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,K=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Z=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:Q,emailVerified:ue,isAnonymous:Ee,providerData:Ae,stsTokenManager:x}=t;Te(Q&&x,e,"internal-error");const I=Co.fromJSON(this.name,x);Te(typeof Q=="string",e,"internal-error"),wi(T,e.name),wi(A,e.name),Te(typeof ue=="boolean",e,"internal-error"),Te(typeof Ee=="boolean",e,"internal-error"),wi(O,e.name),wi(H,e.name),wi(W,e.name),wi(L,e.name),wi(K,e.name),wi(Z,e.name);const P=new Lr({uid:Q,auth:e,email:A,emailVerified:ue,displayName:T,isAnonymous:Ee,photoURL:H,phoneNumber:O,tenantId:W,stsTokenManager:I,createdAt:K,lastLoginAt:Z});return Ae&&Array.isArray(Ae)&&(P.providerData=Ae.map(C=>Object.assign({},C))),L&&(P._redirectEventId=L),P}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const l=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?M_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Co;f.updateFromIdToken(i);const p=new Lr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Oy=new Map;function Mr(n){zr(n instanceof Function,"Expected a class definition");let e=Oy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oy.set(n,e),e)}/**
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
 */class V_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}V_.type="NONE";const Dy=V_;/**
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
 */function sc(n,e,t){return`firebase:${n}:${e}:${t}`}class xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=sc(this.userKey,o.apiKey,l),this.fullPersistenceKey=sc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xo(Mr(Dy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Mr(Dy);const h=sc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const _=await y._get(h);if(_){const T=Lr._fromJSON(e,_);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new xo(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new xo(l,e,i))}}/**
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
 */function Ly(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(H_(e))return"Webos";if(U_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function F_(n=$t()){return/firefox\//i.test(n)}function U_(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(n=$t()){return/crios\//i.test(n)}function z_(n=$t()){return/iemobile/i.test(n)}function B_(n=$t()){return/android/i.test(n)}function $_(n=$t()){return/blackberry/i.test(n)}function H_(n=$t()){return/webos/i.test(n)}function ap(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BS(n=$t()){var e;return ap(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $S(){return iI()&&document.documentMode===10}function W_(n=$t()){return ap(n)||B_(n)||H_(n)||$_(n)||/windows phone/i.test(n)||z_(n)}/**
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
 */function q_(n,e=[]){let t;switch(n){case"Browser":t=Ly($t());break;case"Worker":t=`${Ly($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wo}/${i}`}/**
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
 */class HS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function WS(n,e={}){return qo(n,"GET","/v2/passwordPolicy",sp(n,e))}/**
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
 */const qS=6;class GS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:qS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class KS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new My(this),this.idTokenSubscription=new My(this),this.beforeStateQueue=new HS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await L_(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Or(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Or(this.app))return Promise.reject(_s(this));const t=e?Pn(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Or(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Or(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WS(this),t=new GS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _l("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&AS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jc(n){return Pn(n)}class My{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QS(n){lp=n}function YS(n){return lp.loadJS(n)}function XS(){return lp.gapiScript}function JS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZS(n,e){const t=ep(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(vc(l,e??{}))return o;lr(o,"already-initialized")}return t.initialize({options:e})}function e1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Mr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function t1(n,e,t){const i=jc(n);Te(i._canInitEmulator,i,"emulator-config-failed"),Te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=G_(e),{host:h,port:f}=n1(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),r1()}function G_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n1(n){const e=G_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Vy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Vy(h)}}}function Vy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class K_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}/**
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
 */async function No(n,e){return bS(n,"POST","/v1/accounts:signInWithIdp",sp(n,e))}/**
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
 */const i1="http://localhost";class ws extends K_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=tp(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new ws(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,No(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:i1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
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
 */class Lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Lr._fromIdTokenResponse(e,i,o),h=Fy(i);return new Lo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Fy(i);return new Lo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Fy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Tc extends Gr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Tc(e,t,i,o)}}function Q_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,i):l})}async function s1(n,e,t=!1){const i=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lo._forOperation(n,"link",i)}/**
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
 */async function o1(n,e,t=!1){const{auth:i}=n;if(Or(i.app))return Promise.reject(_s(i));const o="reauthenticate";try{const l=await ll(n,Q_(i,o,e,n),t);Te(l.idToken,i,"internal-error");const h=op(l.idToken);Te(h,i,"internal-error");const{sub:f}=h;return Te(n.uid===f,i,"user-mismatch"),Lo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&lr(i,"user-mismatch"),l}}/**
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
 */async function a1(n,e,t=!1){if(Or(n.app))return Promise.reject(_s(n));const i="signIn",o=await Q_(n,i,e),l=await Lo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}function l1(n,e,t,i){return Pn(n).onIdTokenChanged(e,t,i)}function u1(n,e,t){return Pn(n).beforeAuthStateChanged(e,t)}function c1(n,e,t,i){return Pn(n).onAuthStateChanged(e,t,i)}function h1(n){return Pn(n).signOut()}const Ic="__sak";/**
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
 */class Y_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const f1=1e3,d1=10;class X_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);$S()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,d1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},f1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const p1=X_;/**
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
 */class J_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}J_.type="SESSION";const Z_=J_;/**
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
 */function m1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await m1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=cp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const A=T;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function sr(){return window}function y1(n){sr().location.href=n}/**
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
 */function e0(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function E1(){return e0()?self:null}/**
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
 */const t0="firebaseLocalStorageDb",w1=1,Sc="firebaseLocalStorage",n0="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bc(n,e){return n.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function T1(){const n=indexedDB.deleteDatabase(t0);return new Il(n).toPromise()}function md(){const n=indexedDB.open(t0,w1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sc,{keyPath:n0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sc)?e(i):(i.close(),await T1(),e(await md()))})})}async function Uy(n,e,t){const i=Bc(n,!0).put({[n0]:e,value:t});return new Il(i).toPromise()}async function I1(n,e){const t=Bc(n,!1).get(e),i=await new Il(t).toPromise();return i===void 0?null:i.value}function jy(n,e){const t=Bc(n,!0).delete(e);return new Il(t).toPromise()}const S1=800,A1=3;class r0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>A1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(E1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Uy(e,Ic,"1"),await jy(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Uy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>I1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Bc(o,!1).getAll();return new Il(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r0.type="LOCAL";const P1=r0;new wl(3e4,6e4);/**
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
 */function i0(n,e){return e?Mr(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hp extends K_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R1(n){return a1(n.auth,new hp(n),n.bypassAuthState)}function k1(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),o1(t,new hp(n),n.bypassAuthState)}async function C1(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),s1(t,new hp(n),n.bypassAuthState)}/**
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
 */class s0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R1;case"linkViaPopup":case"linkViaRedirect":return C1;case"reauthViaPopup":case"reauthViaRedirect":return k1;default:lr(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x1=new wl(2e3,1e4);async function N1(n,e,t){if(Or(n.app))return Promise.reject($n(n,"operation-not-supported-in-this-environment"));const i=jc(n);PS(n,e,up);const o=i0(i,t);return new gs(i,"signInViaPopup",e,o).executeNotNull()}class gs extends s0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x1.get())};e()}}gs.currentPopupAction=null;/**
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
 */const b1="pendingRedirect",oc=new Map;class O1 extends s0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await D1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D1(n,e){const t=V1(e),i=M1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function L1(n,e){oc.set(n._key(),e)}function M1(n){return Mr(n._redirectPersistence)}function V1(n){return sc(b1,n.config.apiKey,n.name)}async function F1(n,e,t=!1){if(Or(n.app))return Promise.reject(_s(n));const i=jc(n),o=i0(i,e),h=await new O1(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const U1=600*1e3;class j1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!o0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError($n(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function o0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(n);default:return!1}}/**
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
 */async function B1(n,e={}){return qo(n,"GET","/v1/projects",e)}/**
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
 */const $1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function W1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await B1(n);for(const t of e)try{if(q1(t))return}catch{}lr(n,"unauthorized-domain")}function q1(n){const e=dd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!H1.test(t))return!1;if($1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const G1=new wl(3e4,6e4);function By(){const n=sr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function K1(n){return new Promise((e,t)=>{var i,o,l;function h(){By(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{By(),t($n(n,"network-request-failed"))},timeout:G1.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const f=JS("iframefcb");return sr()[f]=()=>{gapi.load?h():t($n(n,"network-request-failed"))},YS(`${XS()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw ac=null,e})}let ac=null;function Q1(n){return ac=ac||K1(n),ac}/**
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
 */const Y1=new wl(5e3,15e3),X1="__/auth/iframe",J1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tA(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ip(e,J1):`https://${n.config.authDomain}/${X1}`,i={apiKey:e.apiKey,appName:n.name,v:Wo},o=eA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${El(i).slice(1)}`}async function nA(n){const e=await Q1(n),t=sr().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:tA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=$n(n,"network-request-failed"),f=sr().setTimeout(()=>{l(h)},Y1.get());function p(){sr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iA=500,sA=600,oA="_blank",aA="http://localhost";class $y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lA(n,e,t,i=iA,o=sA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},rA),{width:i.toString(),height:o.toString(),top:l,left:h}),y=$t().toLowerCase();t&&(f=j_(y)?oA:t),F_(y)&&(e=e||aA,p.scrollbars="yes");const _=Object.entries(p).reduce((A,[O,H])=>`${A}${O}=${H},`,"");if(BS(y)&&f!=="_self")return uA(e||"",f),new $y(null);const T=window.open(e||"",f,_);Te(T,n,"popup-blocked");try{T.focus()}catch{}return new $y(T)}function uA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const cA="__/auth/handler",hA="emulator/auth/handler",fA=encodeURIComponent("fac");async function Hy(n,e,t,i,o,l){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Wo,eventId:o};if(e instanceof up){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",hI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))h[_]=T}if(e instanceof Tl){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(h.scopes=_.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await n._getAppCheckToken(),y=p?`#${fA}=${encodeURIComponent(p)}`:"";return`${dA(n)}?${El(f).slice(1)}${y}`}function dA({config:n}){return n.emulator?ip(n,hA):`https://${n.authDomain}/${cA}`}/**
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
 */const qf="webStorageSupport";class pA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=F1,this._overrideRedirectResult=L1}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Hy(e,t,i,dd(),o);return lA(e,h,cp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Hy(e,t,i,dd(),o);return y1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nA(e),i=new j1(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qf,{type:qf},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[qf];h!==void 0&&t(!!h),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return W_()||U_()||ap()}}const mA=pA;var Wy="@firebase/auth",qy="1.8.2";/**
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
 */class gA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vA(n){Do(new Es("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q_(n)},y=new KS(i,o,l,p);return e1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Do(new Es("auth-internal",e=>{const t=jc(e.getProvider("auth").getImmediate());return(i=>new gA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi(Wy,qy,yA(n)),xi(Wy,qy,"esm2017")}/**
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
 */const _A=300,EA=I_("authIdTokenMaxAge")||_A;let Gy=null;const wA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>EA)return;const o=t==null?void 0:t.token;Gy!==o&&(Gy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TA(n=R_()){const e=ep(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ZS(n,{popupRedirectResolver:mA,persistence:[P1,p1,Z_]}),i=I_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=wA(l.toString());u1(t,h,()=>h(t.currentUser)),l1(t,f=>h(f))}}const o=w_("auth");return o&&t1(t,`http://${o}`),t}function IA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}QS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=$n("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",IA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vA("Browser");var Ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,a0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function P(){}P.prototype=I.prototype,x.D=I.prototype,x.prototype=new P,x.prototype.constructor=x,x.C=function(C,b,M){for(var R=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)R[ot-2]=arguments[ot];return I.prototype[b].apply(C,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,P){P||(P=0);var C=Array(16);if(typeof I=="string")for(var b=0;16>b;++b)C[b]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(b=0;16>b;++b)C[b]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=x.g[0],P=x.g[1],b=x.g[2];var M=x.g[3],R=I+(M^P&(b^M))+C[0]+3614090360&4294967295;I=P+(R<<7&4294967295|R>>>25),R=M+(b^I&(P^b))+C[1]+3905402710&4294967295,M=I+(R<<12&4294967295|R>>>20),R=b+(P^M&(I^P))+C[2]+606105819&4294967295,b=M+(R<<17&4294967295|R>>>15),R=P+(I^b&(M^I))+C[3]+3250441966&4294967295,P=b+(R<<22&4294967295|R>>>10),R=I+(M^P&(b^M))+C[4]+4118548399&4294967295,I=P+(R<<7&4294967295|R>>>25),R=M+(b^I&(P^b))+C[5]+1200080426&4294967295,M=I+(R<<12&4294967295|R>>>20),R=b+(P^M&(I^P))+C[6]+2821735955&4294967295,b=M+(R<<17&4294967295|R>>>15),R=P+(I^b&(M^I))+C[7]+4249261313&4294967295,P=b+(R<<22&4294967295|R>>>10),R=I+(M^P&(b^M))+C[8]+1770035416&4294967295,I=P+(R<<7&4294967295|R>>>25),R=M+(b^I&(P^b))+C[9]+2336552879&4294967295,M=I+(R<<12&4294967295|R>>>20),R=b+(P^M&(I^P))+C[10]+4294925233&4294967295,b=M+(R<<17&4294967295|R>>>15),R=P+(I^b&(M^I))+C[11]+2304563134&4294967295,P=b+(R<<22&4294967295|R>>>10),R=I+(M^P&(b^M))+C[12]+1804603682&4294967295,I=P+(R<<7&4294967295|R>>>25),R=M+(b^I&(P^b))+C[13]+4254626195&4294967295,M=I+(R<<12&4294967295|R>>>20),R=b+(P^M&(I^P))+C[14]+2792965006&4294967295,b=M+(R<<17&4294967295|R>>>15),R=P+(I^b&(M^I))+C[15]+1236535329&4294967295,P=b+(R<<22&4294967295|R>>>10),R=I+(b^M&(P^b))+C[1]+4129170786&4294967295,I=P+(R<<5&4294967295|R>>>27),R=M+(P^b&(I^P))+C[6]+3225465664&4294967295,M=I+(R<<9&4294967295|R>>>23),R=b+(I^P&(M^I))+C[11]+643717713&4294967295,b=M+(R<<14&4294967295|R>>>18),R=P+(M^I&(b^M))+C[0]+3921069994&4294967295,P=b+(R<<20&4294967295|R>>>12),R=I+(b^M&(P^b))+C[5]+3593408605&4294967295,I=P+(R<<5&4294967295|R>>>27),R=M+(P^b&(I^P))+C[10]+38016083&4294967295,M=I+(R<<9&4294967295|R>>>23),R=b+(I^P&(M^I))+C[15]+3634488961&4294967295,b=M+(R<<14&4294967295|R>>>18),R=P+(M^I&(b^M))+C[4]+3889429448&4294967295,P=b+(R<<20&4294967295|R>>>12),R=I+(b^M&(P^b))+C[9]+568446438&4294967295,I=P+(R<<5&4294967295|R>>>27),R=M+(P^b&(I^P))+C[14]+3275163606&4294967295,M=I+(R<<9&4294967295|R>>>23),R=b+(I^P&(M^I))+C[3]+4107603335&4294967295,b=M+(R<<14&4294967295|R>>>18),R=P+(M^I&(b^M))+C[8]+1163531501&4294967295,P=b+(R<<20&4294967295|R>>>12),R=I+(b^M&(P^b))+C[13]+2850285829&4294967295,I=P+(R<<5&4294967295|R>>>27),R=M+(P^b&(I^P))+C[2]+4243563512&4294967295,M=I+(R<<9&4294967295|R>>>23),R=b+(I^P&(M^I))+C[7]+1735328473&4294967295,b=M+(R<<14&4294967295|R>>>18),R=P+(M^I&(b^M))+C[12]+2368359562&4294967295,P=b+(R<<20&4294967295|R>>>12),R=I+(P^b^M)+C[5]+4294588738&4294967295,I=P+(R<<4&4294967295|R>>>28),R=M+(I^P^b)+C[8]+2272392833&4294967295,M=I+(R<<11&4294967295|R>>>21),R=b+(M^I^P)+C[11]+1839030562&4294967295,b=M+(R<<16&4294967295|R>>>16),R=P+(b^M^I)+C[14]+4259657740&4294967295,P=b+(R<<23&4294967295|R>>>9),R=I+(P^b^M)+C[1]+2763975236&4294967295,I=P+(R<<4&4294967295|R>>>28),R=M+(I^P^b)+C[4]+1272893353&4294967295,M=I+(R<<11&4294967295|R>>>21),R=b+(M^I^P)+C[7]+4139469664&4294967295,b=M+(R<<16&4294967295|R>>>16),R=P+(b^M^I)+C[10]+3200236656&4294967295,P=b+(R<<23&4294967295|R>>>9),R=I+(P^b^M)+C[13]+681279174&4294967295,I=P+(R<<4&4294967295|R>>>28),R=M+(I^P^b)+C[0]+3936430074&4294967295,M=I+(R<<11&4294967295|R>>>21),R=b+(M^I^P)+C[3]+3572445317&4294967295,b=M+(R<<16&4294967295|R>>>16),R=P+(b^M^I)+C[6]+76029189&4294967295,P=b+(R<<23&4294967295|R>>>9),R=I+(P^b^M)+C[9]+3654602809&4294967295,I=P+(R<<4&4294967295|R>>>28),R=M+(I^P^b)+C[12]+3873151461&4294967295,M=I+(R<<11&4294967295|R>>>21),R=b+(M^I^P)+C[15]+530742520&4294967295,b=M+(R<<16&4294967295|R>>>16),R=P+(b^M^I)+C[2]+3299628645&4294967295,P=b+(R<<23&4294967295|R>>>9),R=I+(b^(P|~M))+C[0]+4096336452&4294967295,I=P+(R<<6&4294967295|R>>>26),R=M+(P^(I|~b))+C[7]+1126891415&4294967295,M=I+(R<<10&4294967295|R>>>22),R=b+(I^(M|~P))+C[14]+2878612391&4294967295,b=M+(R<<15&4294967295|R>>>17),R=P+(M^(b|~I))+C[5]+4237533241&4294967295,P=b+(R<<21&4294967295|R>>>11),R=I+(b^(P|~M))+C[12]+1700485571&4294967295,I=P+(R<<6&4294967295|R>>>26),R=M+(P^(I|~b))+C[3]+2399980690&4294967295,M=I+(R<<10&4294967295|R>>>22),R=b+(I^(M|~P))+C[10]+4293915773&4294967295,b=M+(R<<15&4294967295|R>>>17),R=P+(M^(b|~I))+C[1]+2240044497&4294967295,P=b+(R<<21&4294967295|R>>>11),R=I+(b^(P|~M))+C[8]+1873313359&4294967295,I=P+(R<<6&4294967295|R>>>26),R=M+(P^(I|~b))+C[15]+4264355552&4294967295,M=I+(R<<10&4294967295|R>>>22),R=b+(I^(M|~P))+C[6]+2734768916&4294967295,b=M+(R<<15&4294967295|R>>>17),R=P+(M^(b|~I))+C[13]+1309151649&4294967295,P=b+(R<<21&4294967295|R>>>11),R=I+(b^(P|~M))+C[4]+4149444226&4294967295,I=P+(R<<6&4294967295|R>>>26),R=M+(P^(I|~b))+C[11]+3174756917&4294967295,M=I+(R<<10&4294967295|R>>>22),R=b+(I^(M|~P))+C[2]+718787259&4294967295,b=M+(R<<15&4294967295|R>>>17),R=P+(M^(b|~I))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var P=I-this.blockSize,C=this.B,b=this.h,M=0;M<I;){if(b==0)for(;M<=P;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<I;)if(C[b++]=x.charCodeAt(M++),b==this.blockSize){o(this,C),b=0;break}}else for(;M<I;)if(C[b++]=x[M++],b==this.blockSize){o(this,C),b=0;break}}this.h=b,this.o+=I},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var P=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=P&255,P/=256;for(this.u(x),x=Array(16),I=P=0;4>I;++I)for(var C=0;32>C;C+=8)x[P++]=this.g[I]>>>C&255;return x};function l(x,I){var P=f;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=I(x)}function h(x,I){this.h=I;for(var P=[],C=!0,b=x.length-1;0<=b;b--){var M=x[b]|0;C&&M==I||(P[b]=M,C=!1)}this.g=P}var f={};function p(x){return-128<=x&&128>x?l(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return L(y(-x));for(var I=[],P=1,C=0;x>=P;C++)I[C]=x/P|0,P*=4294967296;return new h(I,0)}function _(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return L(_(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(I,8)),C=T,b=0;b<x.length;b+=8){var M=Math.min(8,x.length-b),R=parseInt(x.substring(b,b+M),I);8>M?(M=y(Math.pow(I,M)),C=C.j(M).add(y(R))):(C=C.j(P),C=C.add(y(R)))}return C}var T=p(0),A=p(1),O=p(16777216);n=h.prototype,n.m=function(){if(W(this))return-L(this).m();for(var x=0,I=1,P=0;P<this.g.length;P++){var C=this.i(P);x+=(0<=C?C:4294967296+C)*I,I*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(H(this))return"0";if(W(this))return"-"+L(this).toString(x);for(var I=y(Math.pow(x,6)),P=this,C="";;){var b=ue(P,I).g;P=K(P,b.j(I));var M=((0<P.g.length?P.g[0]:P.h)>>>0).toString(x);if(P=b,H(P))return M+C;for(;6>M.length;)M="0"+M;C=M+C}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function H(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function W(x){return x.h==-1}n.l=function(x){return x=K(this,x),W(x)?-1:H(x)?0:1};function L(x){for(var I=x.g.length,P=[],C=0;C<I;C++)P[C]=~x.g[C];return new h(P,~x.h).add(A)}n.abs=function(){return W(this)?L(this):this},n.add=function(x){for(var I=Math.max(this.g.length,x.g.length),P=[],C=0,b=0;b<=I;b++){var M=C+(this.i(b)&65535)+(x.i(b)&65535),R=(M>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);C=R>>>16,M&=65535,R&=65535,P[b]=R<<16|M}return new h(P,P[P.length-1]&-2147483648?-1:0)};function K(x,I){return x.add(L(I))}n.j=function(x){if(H(this)||H(x))return T;if(W(this))return W(x)?L(this).j(L(x)):L(L(this).j(x));if(W(x))return L(this.j(L(x)));if(0>this.l(O)&&0>x.l(O))return y(this.m()*x.m());for(var I=this.g.length+x.g.length,P=[],C=0;C<2*I;C++)P[C]=0;for(C=0;C<this.g.length;C++)for(var b=0;b<x.g.length;b++){var M=this.i(C)>>>16,R=this.i(C)&65535,ot=x.i(b)>>>16,Dt=x.i(b)&65535;P[2*C+2*b]+=R*Dt,Z(P,2*C+2*b),P[2*C+2*b+1]+=M*Dt,Z(P,2*C+2*b+1),P[2*C+2*b+1]+=R*ot,Z(P,2*C+2*b+1),P[2*C+2*b+2]+=M*ot,Z(P,2*C+2*b+2)}for(C=0;C<I;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=I;C<2*I;C++)P[C]=0;return new h(P,0)};function Z(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function Q(x,I){this.g=x,this.h=I}function ue(x,I){if(H(I))throw Error("division by zero");if(H(x))return new Q(T,T);if(W(x))return I=ue(L(x),I),new Q(L(I.g),L(I.h));if(W(I))return I=ue(x,L(I)),new Q(L(I.g),I.h);if(30<x.g.length){if(W(x)||W(I))throw Error("slowDivide_ only works with positive integers.");for(var P=A,C=I;0>=C.l(x);)P=Ee(P),C=Ee(C);var b=Ae(P,1),M=Ae(C,1);for(C=Ae(C,2),P=Ae(P,2);!H(C);){var R=M.add(C);0>=R.l(x)&&(b=b.add(P),M=R),C=Ae(C,1),P=Ae(P,1)}return I=K(x,b.j(I)),new Q(b,I)}for(b=T;0<=x.l(I);){for(P=Math.max(1,Math.floor(x.m()/I.m())),C=Math.ceil(Math.log(P)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),M=y(P),R=M.j(I);W(R)||0<R.l(x);)P-=C,M=y(P),R=M.j(I);H(M)&&(M=A),b=b.add(M),x=K(x,R)}return new Q(b,x)}n.A=function(x){return ue(this,x).h},n.and=function(x){for(var I=Math.max(this.g.length,x.g.length),P=[],C=0;C<I;C++)P[C]=this.i(C)&x.i(C);return new h(P,this.h&x.h)},n.or=function(x){for(var I=Math.max(this.g.length,x.g.length),P=[],C=0;C<I;C++)P[C]=this.i(C)|x.i(C);return new h(P,this.h|x.h)},n.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),P=[],C=0;C<I;C++)P[C]=this.i(C)^x.i(C);return new h(P,this.h^x.h)};function Ee(x){for(var I=x.g.length+1,P=[],C=0;C<I;C++)P[C]=x.i(C)<<1|x.i(C-1)>>>31;return new h(P,x.h)}function Ae(x,I){var P=I>>5;I%=32;for(var C=x.g.length-P,b=[],M=0;M<C;M++)b[M]=0<I?x.i(M+P)>>>I|x.i(M+P+1)<<32-I:x.i(M+P);return new h(b,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a0=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=_,Ni=h}).apply(typeof Ky<"u"?Ky:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l0,Ya,u0,lc,gd,c0,h0,f0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var V=u[w];if(!(V in v))break e;v=v[V]}u=u[u.length-1],w=v[u],m=m(w),m!=w&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,w=!1,V={next:function(){if(!w&&v<u.length){var $=v++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),u.apply(m,V)}}return function(){return u.apply(m,arguments)}}function A(u,m,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,A.apply(null,arguments)}function O(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function H(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(w,V,$){for(var re=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)re[$e-2]=arguments[$e];return m.prototype[V].apply(w,re)}}function W(u){const m=u.length;if(0<m){const v=Array(m);for(let w=0;w<m;w++)v[w]=u[w];return v}return[]}function L(u,m){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const V=u.length||0,$=w.length||0;u.length=V+$;for(let re=0;re<$;re++)u[V+re]=w[re]}else u.push(w)}}class K{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function Q(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ue(u){return ue[" "](u),u}ue[" "]=function(){};var Ee=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Ae(u,m,v){for(const w in u)m.call(v,u[w],w,u)}function x(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function I(u){const m={};for(const v in u)m[v]=u[v];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,m){let v,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(v in w)u[v]=w[v];for(let $=0;$<P.length;$++)v=P[$],Object.prototype.hasOwnProperty.call(w,v)&&(u[v]=w[v])}}function b(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function M(u){f.setTimeout(()=>{throw u},0)}function R(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ot{constructor(){this.h=this.g=null}add(m,v){const w=Dt.get();w.set(m,v),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new K(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ie=!1,me=new ot,oe=()=>{const u=f.Promise.resolve(void 0);He=()=>{u.then(D)}};var D=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(v){M(v)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return u})();function ke(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ee){e:{try{ue(m.nodeName);var V=!0;break e}catch{}V=!1}V||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}H(ke,pe);var Le={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),ze=0;function qe(u,m,v,w,V){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!w,this.ha=V,this.key=++ze,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,v,w,V){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var re=Yr(u,m,w,V);return-1<re?(m=u[re],v||(m.fa=!1)):(m=new qe(m,this.src,$,!!w,V),m.fa=v,u.push(m)),m};function Cs(u,m){var v=m.type;if(v in u.g){var w=u.g[v],V=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=V)&&Array.prototype.splice.call(w,V,1),$&&(wt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Yr(u,m,v,w){for(var V=0;V<u.length;++V){var $=u[V];if(!$.da&&$.listener==m&&$.capture==!!v&&$.ha==w)return V}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),xs={};function ea(u,m,v,w,V){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ea(u,m[$],v,w,V);return null}return v=ra(v),u&&u[je]?u.K(m,v,y(w)?!!w.capture:!1,V):ta(u,m,v,!1,w,V)}function ta(u,m,v,w,V,$){if(!m)throw Error("Invalid event type");var re=y(V)?!!V.capture:!!V,$e=bs(u);if($e||(u[zi]=$e=new pr(u)),v=$e.add(m,v,w,re,$),v.proxy)return v;if(w=Ol(),v.proxy=w,w.src=u,w.listener=v,u.addEventListener)Re||(V=re),V===void 0&&(V=!1),u.addEventListener(m.toString(),w,V);else if(u.attachEvent)u.attachEvent(gr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ol(){function u(v){return m.call(u.src,u.listener,v)}const m=na;return u}function Ns(u,m,v,w,V){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ns(u,m[$],v,w,V);else w=y(w)?!!w.capture:!!w,v=ra(v),u&&u[je]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],v=Yr($,v,w,V),-1<v&&(wt($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Yr(m,v,w,V)),(v=-1<u?m[u]:null)&&mr(v))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[je])Cs(m.i,u);else{var v=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(v,w,u.capture):m.detachEvent?m.detachEvent(gr(v),w):m.addListener&&m.removeListener&&m.removeListener(w),(v=bs(m))?(Cs(v,u),v.h==0&&(v.src=null,m[zi]=null)):wt(u)}}}function gr(u){return u in xs?xs[u]:xs[u]="on"+u}function na(u,m){if(u.da)u=!0;else{m=new ke(m,this);var v=u.listener,w=u.ha||u.src;u.fa&&mr(u),u=v.call(w,m)}return u}function bs(u){return u=u[zi],u instanceof pr?u:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(u){return typeof u=="function"?u:(u[Os]||(u[Os]=function(m){return u.handleEvent(m)}),u[Os])}function dt(){G.call(this),this.i=new pr(this),this.M=this,this.F=null}H(dt,G),dt.prototype[je]=!0,dt.prototype.removeEventListener=function(u,m,v,w){Ns(this,u,m,v,w)};function pt(u,m){var v,w=u.F;if(w)for(v=[];w;w=w.F)v.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var V=m;m=new pe(w,u),C(m,V)}if(V=!0,v)for(var $=v.length-1;0<=$;$--){var re=m.g=v[$];V=yr(re,w,!0,m)&&V}if(re=m.g=u,V=yr(re,w,!0,m)&&V,V=yr(re,w,!1,m)&&V,v)for($=0;$<v.length;$++)re=m.g=v[$],V=yr(re,w,!1,m)&&V}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],w=0;w<v.length;w++)wt(v[w]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,v,w){return this.i.add(String(u),m,!1,v,w)},dt.prototype.L=function(u,m,v,w){return this.i.add(String(u),m,!0,v,w)};function yr(u,m,v,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var V=!0,$=0;$<m.length;++$){var re=m[$];if(re&&!re.da&&re.capture==v){var $e=re.listener,mt=re.ha||re.src;re.fa&&Cs(u.i,re),V=$e.call(mt,w)!==!1&&V}}return V&&!w.defaultPrevented}function ia(u,m,v){if(typeof u=="function")v&&(u=A(u,v));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Xr(u){u.g=ia(()=>{u.g=null,u.i&&(u.i=!1,Xr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Bi extends G{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Xr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(u){G.call(this),this.h=u,this.g={}}H($i,G);var sa=[];function oa(u){Ae(u.g,function(m,v){this.g.hasOwnProperty(v)&&mr(m)},u),u.g={}}$i.prototype.N=function(){$i.aa.N.call(this),oa(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=f.JSON.stringify,la=f.JSON.parse,ua=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Hi(){}Hi.prototype.h=null;function Ds(u){return u.h||(u.h=u.i())}function Ls(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){pe.call(this,"d")}H(Hn,pe);function Ms(){pe.call(this,"c")}H(Ms,pe);var Wn={},ca=null;function Wi(){return ca=ca||new dt}Wn.La="serverreachability";function ha(u){pe.call(this,Wn.La,u)}H(ha,pe);function vr(u){const m=Wi();pt(m,new ha(m))}Wn.STAT_EVENT="statevent";function fa(u,m){pe.call(this,Wn.STAT_EVENT,u),this.stat=m}H(fa,pe);function at(u){const m=Wi();pt(m,new fa(m,u))}Wn.Ma="timingevent";function Vs(u,m){pe.call(this,Wn.Ma,u),this.size=m}H(Vs,pe);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function qi(){this.g=!0}qi.prototype.xa=function(){this.g=!1};function Gi(u,m,v,w,V,$){u.info(function(){if(u.g)if($)for(var re="",$e=$.split("&"),mt=0;mt<$e.length;mt++){var Me=$e[mt].split("=");if(1<Me.length){var Tt=Me[0];Me=Me[1];var ct=Tt.split("_");re=2<=ct.length&&ct[1]=="type"?re+(Tt+"="+Me+"&"):re+(Tt+"=redacted&")}}else re=null;else re=$;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+m+`
`+v+`
`+re})}function Fs(u,m,v,w,V,$,re){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+m+`
`+v+`
`+$+" "+re})}function kn(u,m,v,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+lh(u,v)+(w?" "+w:"")})}function da(u,m){u.info(function(){return"TIMEOUT: "+m})}qi.prototype.info=function(){};function lh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var w=v[u];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var $=V[0];if($!="noop"&&$!="stop"&&$!="close")for(var re=1;re<V.length;re++)V[re]=""}}}}return aa(v)}catch{return m}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Ki(){}H(Ki,Hi),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},Cn=new Ki;function xn(u,m,v,w){this.j=u,this.i=m,this.l=v,this.R=w||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var pa={},js={};function zs(u,m,v){u.L=1,u.v=ni(on(m)),u.m=v,u.P=!0,ma(u,null)}function ma(u,m){u.F=Date.now(),Ge(u),u.A=on(u.v);var v=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ii(v.i,"t",w),u.C=0,v=u.j.J,u.h=new Ll,u.g=Zl(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Bi(A(u.Y,u,u.g),u.O)),m=u.U,v=u.g,w=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(sa[0]=V.toString()),V=sa);for(var $=0;$<V.length;$++){var re=ea(v,V[$],w||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),vr(),Gi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Yt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||ct!=4||m==7||(m==8||0>=yn?vr(3):vr(2)),Qi(this);var v=this.g.Z();this.X=v;t:if(Ml(this)){var w=wa(this.g);u="";var V=w.length,$=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Jr(this);var re="";break t}this.h.i=new f.TextDecoder}for(m=0;m<V;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==V-1)});w.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Fs(this.i,this.u,this.A,this.l,this.R,ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,mt=this.g;if(($e=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z($e)){var Me=$e;break t}}Me=null}if(v=Me)kn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,v);else{this.o=!1,this.s=3,at(12),mn(this),Jr(this);break e}}if(this.P){v=!0;let ln;for(;!this.J&&this.C<re.length;)if(ln=uh(this,re),ln==js){ct==4&&(this.s=4,at(14),v=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==pa){this.s=4,at(15),kn(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else kn(this.i,this.l,ln,null),ga(this,ln);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||re.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)kn(this.i,this.l,re,"[Invalid Chunked Response]"),mn(this),Jr(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Ia(Tt),Tt.M=!0,at(11))}}else kn(this.i,this.l,re,null),ga(this,re);ct==4&&mn(this),this.o&&!this.J&&(ct==4?Js(this.j,this):(this.o=!1,Ge(this)))}else Gs(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),mn(this),Jr(this)}}}catch{}finally{}};function Ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function uh(u,m){var v=u.C,w=m.indexOf(`
`,v);return w==-1?js:(v=Number(m.substring(v,w)),isNaN(v)?pa:(w+=1,w+v>m.length?js:(m=m.slice(w,w+v),u.C=w+v,m)))}xn.prototype.cancel=function(){this.J=!0,mn(this)};function Ge(u){u.S=Date.now()+u.I,Vl(u,u.I)}function Vl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(A(u.ba,u),m)}function Qi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(da(this.i,this.A),this.L!=2&&(vr(),at(17)),mn(this),this.s=2,Jr(this)):Vl(this,this.S-u)};function Jr(u){u.j.G==0||u.J||Js(u.j,u)}function mn(u){Qi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,oa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ga(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Wt(v.h,u))){if(!u.K&&Wt(v.h,u)&&v.G==3){try{var w=v.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Xs(v),Ln(v);else break e;Ys(v),at(18)}}else v.za=V[1],0<v.za-v.T&&37500>V[2]&&v.F&&v.v==0&&!v.C&&(v.C=Rn(A(v.Za,v),6e3));if(1>=Ul(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ir(v,11)}else if((u.K||v.g==u)&&Xs(v),!Z(m))for(V=v.Da.g.parse(m),m=0;m<V.length;m++){let Me=V[m];if(v.T=Me[0],Me=Me[1],v.G==2)if(Me[0]=="c"){v.K=Me[1],v.ia=Me[2];const Tt=Me[3];Tt!=null&&(v.la=Tt,v.j.info("VER="+v.la));const ct=Me[4];ct!=null&&(v.Aa=ct,v.j.info("SVER="+v.Aa));const yn=Me[5];yn!=null&&typeof yn=="number"&&0<yn&&(w=1.5*yn,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const ln=u.g;if(ln){const ns=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var $=w.h;$.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ya($,$.h),$.h=null))}if(w.D){const eo=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(w.ya=eo,We(w.I,w.D,eo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var re=u;if(w.qa=Jl(w,w.J?w.ia:null,w.W),re.K){jl(w.h,re);var $e=re,mt=w.L;mt&&($e.I=mt),$e.B&&(Qi($e),Ge($e)),w.g=re}else ts(w);0<v.i.length&&Qn(v)}else Me[0]!="stop"&&Me[0]!="close"||Ir(v,7);else v.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Ir(v,7):kt(v):Me[0]!="noop"&&v.l&&v.l.ta(Me),v.v=0)}}vr(4)}catch{}}var Fl=class{constructor(u,m){this.g=u,this.map=m}};function Yi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ul(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ya(u,m){u.g?u.g.add(m):u.h=m}function jl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Yi.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return W(u.i)}function Bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,w=0;w<v;w++)m.push(u[w]);return m}m=[],v=0;for(w in u)m[v++]=u[w];return m}function $s(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const w in u)m[v++]=w;return m}}}function Zr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=$s(u),w=Bs(u),V=w.length,$=0;$<V;$++)m.call(void 0,w[$],v&&v[$],u)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ch(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var w=u[v].indexOf("="),V=null;if(0<=w){var $=u[v].substring(0,w);V=u[v].substring(w+1)}else $=u[v];m($,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,Ji(this,u.j),this.o=u.o,this.g=u.g,ei(this,u.s),this.l=u.l;var m=u.i,v=new qn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),ti(this,v),this.m=u.m}else u&&(m=String(u).match(Xi))?(this.h=!1,Ji(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),ei(this,m[4]),this.l=Oe(m[5]||"",!0),ti(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}_r.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ri(m,Hs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ri(m,Hs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ri(v,v.charAt(0)=="/"?Hl:$l,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ri(v,va)),u.join("")};function on(u){return new _r(u)}function Ji(u,m,v){u.j=v?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ei(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ti(u,m,v){m instanceof qn?(u.i=m,Gn(u.i,u.h)):(v||(m=ri(m,Wl)),u.i=new qn(m,u.h))}function We(u,m,v){u.i.set(m,v)}function ni(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ri(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Bl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Hs=/[#\/\?@]/g,$l=/[#\?:]/g,Hl=/[#\?]/g,Wl=/[#\?@]/g,va=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&ch(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=qn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=gn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Nn(u,m){Rt(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function bn(u,m){return Rt(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(v,w){v.forEach(function(V){u.call(m,V,w,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let w=0;w<m.length;w++){const V=u[w];for(let $=0;$<V.length;$++)v.push(m[w])}return v},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")bn(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=gn(this,u),bn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ii(u,m,v){Nn(u,m),0<v.length&&(u.i=null,u.g.set(gn(u,m),W(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var w=m[v];const $=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var V=$;re[w]!==""&&(V+="="+encodeURIComponent(String(re[w]))),u.push(V)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Gn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(v,w){var V=w.toLowerCase();w!=V&&(Nn(this,w),ii(this,V,v))},u)),u.j=m}function hh(u,m){const v=new qi;if(f.Image){const w=new Image;w.onload=O(Qt,v,"TestLoadImage: loaded",!0,m,w),w.onerror=O(Qt,v,"TestLoadImage: error",!1,m,w),w.onabort=O(Qt,v,"TestLoadImage: abort",!1,m,w),w.ontimeout=O(Qt,v,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function ql(u,m){const v=new qi,w=new AbortController,V=setTimeout(()=>{w.abort(),Qt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(V),$.ok?Qt(v,"TestPingServer: ok",!0,m):Qt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(V),Qt(v,"TestPingServer: error",!1,m)})}function Qt(u,m,v,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(v)}catch{}}function fh(){this.g=new ua}function Gl(u,m,v){const w=v||"";try{Zr(u,function(V,$){let re=V;y(V)&&(re=aa(V)),m.push(w+$+"="+encodeURIComponent(re))})}catch(V){throw m.push(w+"type="+encodeURIComponent("_badmap")),V}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}H(Er,Hi),Er.prototype.g=function(){return new Zi(this.l,this.j)},Er.prototype.i=(function(u){return function(){return u}})({});function Zi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Zi,dt),n=Zi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?On(this):Dn(this),this.readyState==3&&Kl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},n.Qa=function(u){this.g&&(this.response=u,On(this))},n.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let m="";return Ae(u,function(v,w){m+=w,m+=":",m+=v,m+=`\r
`}),m}function si(u,m,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=wr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):We(u,m,v))}function Je(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Je,dt);var dh=/^https?$/i,_a=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ds(this.o):Ds(Cn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){es(this,$);return}if(u=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)v.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())v.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),V=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(_a,m,void 0))||w||V||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,re]of v)this.g.setRequestHeader($,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qs(this),this.u=!0,this.g.send(u),this.u=!1}catch($){es(this,$)}};function es(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ws(u),an(u)}function Ws(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)ia(u.Ea,0,u);else if(pt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var w;if(w=re===0){var V=String(u.D).match(Xi)[1]||null;!V&&f.self&&f.self.location&&(V=f.self.location.protocol.slice(0,-1)),w=!dh.test(V?V.toLowerCase():"")}v=w}if(v)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var $=2<Yt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Ws(u)}}finally{an(u)}}}}function an(u,m){if(u.g){qs(u);const v=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{v.onreadystatechange=w}catch{}}}function qs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),la(m)}};function wa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Gs(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(Z(u[w]))continue;var v=b(u[w]);const V=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=m[V]||[];m[V]=$,$.push(v)}x(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ta(u){this.Aa=0,this.i=[],this.j=new qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,u),this.cb=Kn("retryDelaySeedMs",1e4,u),this.Wa=Kn("forwardChannelMaxRetries",2,u),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(u&&u.concurrentRequestLimit),this.Da=new fh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,w){at(0),this.W=u,this.H=m||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=Jl(this,null,this.W),Qn(this)};function kt(u){if(Ks(u),u.G==3){var m=u.U++,v=on(u.I);if(We(v,"SID",u.K),We(v,"RID",m),We(v,"TYPE","terminate"),Tr(u,v),m=new xn(u,u.j,m),m.L=2,m.v=ni(on(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.v,v=!0),v||(m.g=Zl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}Xl(u)}function Ln(u){u.g&&(Ia(u),u.g.cancel(),u.g=null)}function Ks(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),Xs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Qn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;He||oe(),ie||(He(),ie=!0),me.add(m,u),u.B=0}}function ph(u,m){return Ul(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(A(u.Ga,u,m),Yl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new xn(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),C($,this.S)):$=this.S),this.m!==null||this.O||(V.H=$,$=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=oi(this,V,m),v=on(this.I),We(v,"RID",u),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Tr(this,v),$&&(this.O?m="headers="+encodeURIComponent(String(wr($)))+"&"+m:this.m&&si(v,this.m,$)),ya(this.h,V),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",m),We(v,"SID","null"),V.T=!0,zs(V,v,null)):zs(V,v,m),this.G=2}}else this.G==3&&(u?Qs(this,u):this.i.length==0||sn(this.h)||Qs(this))};function Qs(u,m){var v;m?v=m.l:v=u.U++;const w=on(u.I);We(w,"SID",u.K),We(w,"RID",v),We(w,"AID",u.T),Tr(u,w),u.m&&u.o&&si(w,u.m,u.o),v=new xn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=oi(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ya(u.h,v),zs(v,w,m)}function Tr(u,m){u.H&&Ae(u.H,function(v,w){We(m,w,v)}),u.l&&Zr({},function(v,w){We(m,w,v)})}function oi(u,m,v){v=Math.min(u.i.length,v);var w=u.l?A(u.l.Na,u.l,u):null;e:{var V=u.i;let $=-1;for(;;){const re=["count="+v];$==-1?0<v?($=V[0].g,re.push("ofs="+$)):$=0:re.push("ofs="+$);let $e=!0;for(let mt=0;mt<v;mt++){let Me=V[mt].g;const Tt=V[mt].map;if(Me-=$,0>Me)$=Math.max(0,V[mt].g-100),$e=!1;else try{Gl(Tt,re,"req"+Me+"_")}catch{w&&w(Tt)}}if($e){w=re.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,w}function ts(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;He||oe(),ie||(He(),ie=!0),me.add(m,u),u.v=0}}function Ys(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(A(u.Fa,u),Yl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(A(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Ln(this),Ql(this))};function Ia(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);We(m,"RID","rpc"),We(m,"SID",u.K),We(m,"AID",u.T),We(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(m,"TO",u.ja),We(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&si(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ni(on(m)),v.m=null,v.P=!0,ma(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),Ys(this),at(19))};function Xs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Js(u,m){var v=null;if(u.g==m){Xs(u),Ia(u),u.g=null;var w=2}else if(Wt(u.h,m))v=m.D,jl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var V=u.B;w=Wi(),pt(w,new Vs(w,v)),Qn(u)}else ts(u);else if(V=m.s,V==3||V==0&&0<m.X||!(w==1&&ph(u,m)||w==2&&Ys(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),V){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function Yl(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var v=A(u.fb,u),w=u.Xa;const V=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ji(w,"https"),ni(w),V?hh(w.toString(),v):ql(w.toString(),v)}else at(2);u.G=0,u.l&&u.l.sa(m),Xl(u),Ks(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Xl(u){if(u.G=0,u.ka=[],u.l){const m=zl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function Jl(u,m,v){var w=v instanceof _r?on(v):new _r(v);if(w.g!="")m&&(w.g=m+"."+w.g),ei(w,w.s);else{var V=f.location;w=V.protocol,m=m?m+"."+V.hostname:V.hostname,V=+V.port;var $=new _r(null);w&&Ji($,w),m&&($.g=m),V&&ei($,V),v&&($.l=v),w=$}return v=u.D,m=u.ya,v&&m&&We(w,v,m),We(w,"VER",u.la),Tr(u,w),w}function Zl(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Er({eb:v})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zs(){}Zs.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){dt.call(this),this.g=new Ta(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Yn(this)}H(qt,dt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=aa(u),u=v);m.i.push(new Fl(m.Ya++,u)),m.G==3&&Qn(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function eu(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}H(eu,Hn);function tu(){Ms.call(this),this.status=1}H(tu,Ms);function Yn(u){this.g=u}H(Yn,Sa),Yn.prototype.ua=function(){pt(this.g,"a")},Yn.prototype.ta=function(u){pt(this.g,new eu(u))},Yn.prototype.sa=function(u){pt(this.g,new tu)},Yn.prototype.ra=function(){pt(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,f0=function(){return new Zs},h0=function(){return Wi()},c0=Wn,gd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,lc=Us,Dl.COMPLETE="complete",u0=Dl,Ls.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ya=Ls,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,l0=Je}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore";/**
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
 */function Ie(n="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function Be(n,e){n||Ie()}function Pe(n,e){return n}/**
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
 */class bi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class d0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class AA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class PA{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new bi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new bi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new d0(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new zt(e)}}class RA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class kA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new RA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class CA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string"),this.R=t.token,new CA(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class p0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=NA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Vo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new _t(0,0))}static max(){return new Se(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ie(),i===void 0?i=e.length-t:i>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=tr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=tr.isNumericId(e),o=tr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class st extends tr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const bA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends tr{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return bA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ve(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ve(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ve(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ve(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(st.fromString(e))}static fromName(e){return new _e(st.fromString(e).popFirst(5))}static empty(){return new _e(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new st(e.slice()))}}function OA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Oi(o,_e.empty(),e)}function DA(n){return new Oi(n.readTime,n.key,-1)}class Oi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Oi(Se.min(),_e.empty(),-1)}static max(){return new Oi(Se.max(),_e.empty(),-1)}}function LA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
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
 */const MA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ko(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==MA)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,i)=>{t(e)}))}static reject(e){return new q(((t,i)=>{i(e)}))}static waitFor(e){return new q(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(p=>i(p)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next((o=>o?q.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new q(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((_=>{h[y]=_,++f,f===l&&i(h)}),(_=>o(_)))}}))}static doWhile(e,t){return new q(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function FA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$c.oe=-1;function Hc(n){return n==null}function Ac(n){return n===0&&1/n==-1/0}function UA(n){return typeof n=="number"&&Number.isInteger(n)&&!Ac(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function jA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Yy(e)),e=zA(n.get(t),e);return Yy(e)}function zA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Yy(n){return n+""}/**
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
 */function Xy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function As(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function m0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}}class Xu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new Et(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class g0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new g0("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const BA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(n){if(Be(!!n),typeof n=="string"){let e=0;const t=BA.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Li(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
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
 */function dp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wc(n){const e=n.mapValue.fields.__previous_value__;return dp(e)?Wc(e):e}function ul(n){const e=Di(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class $A{constructor(e,t,i,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class cl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ju={mapValue:{}};function Mi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dp(n)?4:WA(n)?9007199254740991:HA(n)?10:11:Ie()}function ur(n,e){if(n===e)return!0;const t=Mi(n);if(t!==Mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ul(n).isEqual(ul(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Di(o.timestampValue),f=Di(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Li(o.bytesValue).isEqual(Li(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),f=ut(l.doubleValue);return h===f?Ac(h)===Ac(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Xy(h)!==Xy(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ur(h[p],f[p])))return!1;return!0})(n,e);default:return Ie()}}function hl(n,e){return(n.values||[]).find((t=>ur(t,e)))!==void 0}function Fo(n,e){if(n===e)return 0;const t=Mi(n),i=Mi(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ut(l.integerValue||l.doubleValue),p=ut(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return Zy(n.timestampValue,e.timestampValue);case 4:return Zy(ul(n),ul(e));case 5:return De(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Li(l),p=Li(h);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const _=De(f[y],p[y]);if(_!==0)return _}return De(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=De(ut(l.latitude),ut(h.latitude));return f!==0?f:De(ut(l.longitude),ut(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ev(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,p,y,_;const T=l.fields||{},A=h.fields||{},O=(f=T.value)===null||f===void 0?void 0:f.arrayValue,H=(p=A.value)===null||p===void 0?void 0:p.arrayValue,W=De(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((_=H==null?void 0:H.values)===null||_===void 0?void 0:_.length)||0);return W!==0?W:ev(O,H)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Ju.mapValue&&h===Ju.mapValue)return 0;if(l===Ju.mapValue)return 1;if(h===Ju.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let T=0;T<p.length&&T<_.length;++T){const A=De(p[T],_[T]);if(A!==0)return A;const O=Fo(f[p[T]],y[_[T]]);if(O!==0)return O}return De(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Ie()}}function Zy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Di(n),i=Di(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function ev(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Fo(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Uo(n){return yd(n)}function yd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Di(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Li(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=yd(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${yd(t.fields[h])}`;return o+"}"})(n.mapValue):Ie()}function uc(n){switch(Mi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wc(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return Li(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+uc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return As(i.fields,((l,h)=>{o+=l.length+uc(h)})),o})(n.mapValue);default:throw Ie()}}function vd(n){return!!n&&"integerValue"in n}function pp(n){return!!n&&"arrayValue"in n}function tv(n){return!!n&&"nullValue"in n}function nv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function HA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function tl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return As(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=tl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function WA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=tl(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){As(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Sn(tl(this.value))}}function y0(n){const e=[];return As(n.fields,((t,i)=>{const o=new bt([t]);if(cc(i)){const l=y0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Bn(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Se.min(),Se.min(),Se.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Se.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Se.min(),Se.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Se.min(),Se.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pc{constructor(e,t){this.position=e,this.inclusive=t}}function rv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(h.referenceValue),t.key):i=Fo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function iv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ur(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Rc{constructor(e,t="asc"){this.field=e,this.dir=t}}function qA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class v0{}class vt extends v0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new KA(e,t,i):t==="array-contains"?new XA(e,i):t==="in"?new JA(e,i):t==="not-in"?new ZA(e,i):t==="array-contains-any"?new eP(e,i):new vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new QA(e,i):new YA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fo(t,this.value)):t!==null&&Mi(this.value)===Mi(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends v0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new cr(e,t)}matches(e){return _0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _0(n){return n.op==="and"}function E0(n){return GA(n)&&_0(n)}function GA(n){for(const e of n.filters)if(e instanceof cr)return!1;return!0}function _d(n){if(n instanceof vt)return n.field.canonicalString()+n.op.toString()+Uo(n.value);if(E0(n))return n.filters.map((e=>_d(e))).join(",");{const e=n.filters.map((t=>_d(t))).join(",");return`${n.op}(${e})`}}function w0(n,e){return n instanceof vt?(function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)})(n,e):n instanceof cr?(function(i,o){return o instanceof cr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&w0(h,o.filters[f])),!0):!1})(n,e):void Ie()}function T0(n){return n instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Uo(t.value)}`})(n):n instanceof cr?(function(t){return t.op.toString()+" {"+t.getFilters().map(T0).join(" ,")+"}"})(n):"Filter"}class KA extends vt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class QA extends vt{constructor(e,t){super(e,"in",t),this.keys=I0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class YA extends vt{constructor(e,t){super(e,"not-in",t),this.keys=I0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function I0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>_e.fromName(i.referenceValue)))}class XA extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pp(t)&&hl(t.arrayValue,this.value)}}class JA extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hl(this.value.arrayValue,t)}}class ZA extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hl(this.value.arrayValue,t)}}class eP extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>hl(this.value.arrayValue,i)))}}/**
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
 */class tP{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function sv(n,e=null,t=[],i=[],o=null,l=null,h=null){return new tP(n,e,t,i,o,l,h)}function mp(n){const e=Pe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>_d(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Uo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Uo(i))).join(",")),e.ue=t}return e.ue}function gp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!w0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iv(n.startAt,e.startAt)&&iv(n.endAt,e.endAt)}function Ed(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class qc{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nP(n,e,t,i,o,l,h,f){return new qc(n,e,t,i,o,l,h,f)}function yp(n){return new qc(n)}function ov(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rP(n){return n.collectionGroup!==null}function nl(n){const e=Pe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Et(bt.comparator);return h.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Rc(l,i))})),t.has(bt.keyField().canonicalString())||e.ce.push(new Rc(bt.keyField(),i))}return e.ce}function or(n){const e=Pe(n);return e.le||(e.le=iP(e,nl(n))),e.le}function iP(n,e){if(n.limitType==="F")return sv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Rc(o.field,l)}));const t=n.endAt?new Pc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Pc(n.startAt.position,n.startAt.inclusive):null;return sv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function wd(n,e,t){return new qc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gc(n,e){return gp(or(n),or(e))&&n.limitType===e.limitType}function S0(n){return`${mp(or(n))}|lt:${n.limitType}`}function Io(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>T0(o))).join(", ")}]`),Hc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Uo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Uo(o))).join(",")),`Target(${i})`})(or(n))}; limitType=${n.limitType})`}function Kc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of nl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,p){const y=rv(h,f,p);return h.inclusive?y<=0:y<0})(i.startAt,nl(i),o)||i.endAt&&!(function(h,f,p){const y=rv(h,f,p);return h.inclusive?y>=0:y>0})(i.endAt,nl(i),o))})(n,e)}function sP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function A0(n){return(e,t)=>{let i=!1;for(const o of nl(n)){const l=oP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function oP(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Fo(p,y):Ie()})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ie()}}/**
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
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return m0(this.inner)}size(){return this.innerSize}}/**
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
 */const aP=new rt(_e.comparator);function $r(){return aP}const P0=new rt(_e.comparator);function Xa(...n){let e=P0;for(const t of n)e=e.insert(t.key,t);return e}function R0(n){let e=P0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ys(){return rl()}function k0(){return rl()}function rl(){return new Ps((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lP=new rt(_e.comparator),uP=new Et(_e.comparator);function be(...n){let e=uP;for(const t of n)e=e.add(t);return e}const cP=new Et(De);function hP(){return cP}/**
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
 */function vp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function C0(n){return{integerValue:""+n}}function fP(n,e){return UA(e)?C0(e):vp(n,e)}/**
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
 */class Qc{constructor(){this._=void 0}}function dP(n,e,t){return n instanceof kc?(function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&dp(l)&&(l=Wc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}})(t,e):n instanceof fl?N0(n,e):n instanceof dl?b0(n,e):(function(o,l){const h=x0(o,l),f=av(h)+av(o.Pe);return vd(h)&&vd(o.Pe)?C0(f):vp(o.serializer,f)})(n,e)}function pP(n,e,t){return n instanceof fl?N0(n,e):n instanceof dl?b0(n,e):t}function x0(n,e){return n instanceof Cc?(function(i){return vd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class kc extends Qc{}class fl extends Qc{constructor(e){super(),this.elements=e}}function N0(n,e){const t=O0(e);for(const i of n.elements)t.some((o=>ur(o,i)))||t.push(i);return{arrayValue:{values:t}}}class dl extends Qc{constructor(e){super(),this.elements=e}}function b0(n,e){let t=O0(e);for(const i of n.elements)t=t.filter((o=>!ur(o,i)));return{arrayValue:{values:t}}}class Cc extends Qc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function av(n){return ut(n.integerValue||n.doubleValue)}function O0(n){return pp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof fl&&o instanceof fl||i instanceof dl&&o instanceof dl?Vo(i.elements,o.elements,ur):i instanceof Cc&&o instanceof Cc?ur(i.Pe,o.Pe):i instanceof kc&&o instanceof kc})(n.transform,e.transform)}class gP{constructor(e,t){this.version=e,this.transformResults=t}}class Vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yc{}function D0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new M0(n.key,Vr.none()):new Sl(n.key,n.data,Vr.none());{const t=n.data,i=Sn.empty();let o=new Et(bt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Rs(n.key,i,new Bn(o.toArray()),Vr.none())}}function yP(n,e,t){n instanceof Sl?(function(o,l,h){const f=o.value.clone(),p=uv(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Rs?(function(o,l,h){if(!hc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=uv(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(L0(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function il(n,e,t,i){return n instanceof Sl?(function(l,h,f,p){if(!hc(l.precondition,h))return f;const y=l.value.clone(),_=cv(l.fieldTransforms,p,h);return y.setAll(_),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Rs?(function(l,h,f,p){if(!hc(l.precondition,h))return f;const y=cv(l.fieldTransforms,p,h),_=h.data;return _.setAll(L0(l)),_.setAll(y),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,h,f){return hc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function vP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=x0(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function lv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,((l,h)=>mP(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Sl extends Yc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Rs extends Yc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function L0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function uv(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,pP(h,f,t[o]))}return i}function cv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,dP(l,h,e))}return i}class M0 extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _P extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&yP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=k0();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=D0(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Se.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,((t,i)=>lv(t,i)))&&Vo(this.baseMutations,e.baseMutations,((t,i)=>lv(t,i)))}}class _p{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=(function(){return lP})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new _p(e,t,i,o)}}/**
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
 */class wP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Ve;function IP(n){switch(n){default:return Ie();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function V0(n){if(n===void 0)return Br("GRPC error has no .code"),ee.UNKNOWN;switch(n){case ft.OK:return ee.OK;case ft.CANCELLED:return ee.CANCELLED;case ft.UNKNOWN:return ee.UNKNOWN;case ft.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ft.INTERNAL:return ee.INTERNAL;case ft.UNAVAILABLE:return ee.UNAVAILABLE;case ft.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ft.NOT_FOUND:return ee.NOT_FOUND;case ft.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ft.ABORTED:return ee.ABORTED;case ft.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ft.DATA_LOSS:return ee.DATA_LOSS;default:return Ie()}}(Ve=ft||(ft={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SP(){return new TextEncoder}/**
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
 */const AP=new Ni([4294967295,4294967295],0);function hv(n){const e=SP().encode(n),t=new a0;return t.update(e),new Uint8Array(t.digest())}function fv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ni([t,i],0),new Ni([o,l],0)]}class Ep{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ni.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ni.fromNumber(i)));return o.compare(AP)===1&&(o=new Ni([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=hv(e),[i,o]=fv(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);if(!this.Ee(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Ep(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.Te===0)return;const t=hv(e),[i,o]=fv(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Xc(Se.min(),o,new rt(De),$r(),be())}}class Al{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Al(i,t,be(),be(),be())}}/**
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
 */class fc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class F0{constructor(e,t){this.targetId=e,this.me=t}}class U0{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class dv{constructor(){this.fe=0,this.ge=pv(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),i=be();return this.ge.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ie()}})),new Al(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=pv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PP{constructor(e){this.Be=e,this.Le=new Map,this.ke=$r(),this.qe=Zu(),this.Qe=Zu(),this.Ke=new rt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,(t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ie()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach(((i,o)=>{this.je(o)&&t(o)}))}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Ed(l))if(i===0){const h=new _e(l.path);this.We(t,h,Bt.newNoDocument(h,Se.min()))}else Be(i===1);else{const h=this.Ze(t);if(h!==i){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Li(i).toUint8Array()}catch(p){if(p instanceof g0)return Mo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Ep(h,o,l)}catch(p){return Mo(p instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Be.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)})),o}it(e){const t=new Map;this.Le.forEach(((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&Ed(f.target)){const p=new _e(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Bt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}}));let i=be();this.Qe.forEach(((l,h)=>{let f=!0;h.forEachWhile((p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ke.forEach(((l,h)=>h.setReadTime(e)));const o=new Xc(e,t,this.Ke,this.ke,i);return this.ke=$r(),this.qe=Zu(),this.Qe=Zu(),this.Ke=new rt(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new dv,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new dv),this.Be.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Zu(){return new rt(_e.comparator)}function pv(){return new rt(_e.comparator)}const RP={asc:"ASCENDING",desc:"DESCENDING"},kP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CP={and:"AND",or:"OR"};class xP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Td(n,e){return n.useProto3Json||Hc(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function NP(n,e){return xc(n,e.toTimestamp())}function ar(n){return Be(!!n),Se.fromTimestamp((function(t){const i=Di(t);return new _t(i.seconds,i.nanos)})(n))}function wp(n,e){return Id(n,e).canonicalString()}function Id(n,e){const t=(function(o){return new st(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function z0(n){const e=st.fromString(n);return Be(q0(e)),e}function Sd(n,e){return wp(n.databaseId,e.path)}function Gf(n,e){const t=z0(e);if(t.get(1)!==n.databaseId.projectId)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ve(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e($0(t))}function B0(n,e){return wp(n.databaseId,e)}function bP(n){const e=z0(n);return e.length===4?st.emptyPath():$0(e)}function Ad(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $0(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mv(n,e,t){return{name:Sd(n,e),fields:t.value.mapValue.fields}}function OP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ie()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(Be(_===void 0||typeof _=="string"),Ot.fromBase64String(_||"")):(Be(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Ot.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const _=y.code===void 0?ee.UNKNOWN:V0(y.code);return new ve(_,y.message||"")})(h);t=new U0(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Gf(n,i.document.name),l=ar(i.document.updateTime),h=i.document.createTime?ar(i.document.createTime):Se.min(),f=new Sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,h,f),y=i.targetIds||[],_=i.removedTargetIds||[];t=new fc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Gf(n,i.document),l=i.readTime?ar(i.readTime):Se.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new fc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Gf(n,i.document),l=i.removedTargetIds||[];t=new fc([],l,o,null)}else{if(!("filter"in e))return Ie();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new TP(o,l),f=i.targetId;t=new F0(f,h)}}return t}function DP(n,e){let t;if(e instanceof Sl)t={update:mv(n,e.key,e.value)};else if(e instanceof M0)t={delete:Sd(n,e.key)};else if(e instanceof Rs)t={update:mv(n,e.key,e.data),updateMask:$P(e.fieldMask)};else{if(!(e instanceof _P))return Ie();t={verify:Sd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof kc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof fl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Cc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Ie()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:NP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie()})(n,e.precondition)),t}function LP(n,e){return n&&n.length>0?(Be(e!==void 0),n.map((t=>(function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(Se.min())&&(h=ar(l)),new gP(h,o.transformResults||[])})(t,e)))):[]}function MP(n,e){return{documents:[B0(n,e.path)]}}function VP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=B0(n,o);const l=(function(y){if(y.length!==0)return W0(cr.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((_=>(function(A){return{field:So(A.field),direction:jP(A.dir)}})(_)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Td(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ct:t,parent:o}}function FP(n){let e=bP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(T){const A=H0(T);return A instanceof cr&&E0(A)?A.getFilters():[A]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((A=>(function(H){return new Rc(Ao(H.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let A;return A=typeof T=="object"?T.value:T,Hc(A)?null:A})(t.limit));let p=null;t.startAt&&(p=(function(T){const A=!!T.before,O=T.values||[];return new Pc(O,A)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const A=!T.before,O=T.values||[];return new Pc(O,A)})(t.endAt)),nP(e,o,h,l,f,"F",p,y)}function UP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function H0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ao(t.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ao(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ao(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}})(n):n.fieldFilter!==void 0?(function(t){return vt.create(Ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return cr.create(t.compositeFilter.filters.map((i=>H0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie()}})(t.compositeFilter.op))})(n):Ie()}function jP(n){return RP[n]}function zP(n){return kP[n]}function BP(n){return CP[n]}function So(n){return{fieldPath:n.canonicalString()}}function Ao(n){return bt.fromServerFormat(n.fieldPath)}function W0(n){return n instanceof vt?(function(t){if(t.op==="=="){if(nv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(tv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(tv(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:zP(t.op),value:t.value}}})(n):n instanceof cr?(function(t){const i=t.getFilters().map((o=>W0(o)));return i.length===1?i[0]:{compositeFilter:{op:BP(t.op),filters:i}}})(n):Ie()}function $P(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function q0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pi{constructor(e,t,i,o,l=Se.min(),h=Se.min(),f=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HP{constructor(e){this.ht=e}}function WP(n){const e=FP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class qP{constructor(){this.ln=new GP}addToCollectionParentIndex(e,t){return this.ln.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Oi.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class GP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(st.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(st.comparator)).toArray()}}/**
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
 */function yv([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class KP{constructor(e){this.Gn=e,this.buffer=new Et(yv),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();yv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.Yn(3e5)}))}}class YP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return q.resolve($c.oe);const i=new KP(t);return this.Zn.forEachTarget(e,(o=>i.Hn(o.sequenceNumber))).next((()=>this.Zn.er(e,(o=>i.Hn(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(gv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gv):this.tr(e,t)))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,f,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),To()<=Ne.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function XP(n,e){return new YP(n,e)}/**
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
 */class JP{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class eR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&il(i.mutation,o,Bn.empty(),_t.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=ys();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Xa();return l.forEach(((f,p)=>{h=h.insert(f,p.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=$r();const h=rl(),f=(function(){return rl()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Rs)?l=l.insert(y.key,y):_!==void 0?(h.set(y.key,_.mutation.getFieldMask()),il(_.mutation,y,_.mutation.getFieldMask(),_t.now())):h.set(y.key,Bn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,_)=>h.set(y,_))),t.forEach(((y,_)=>{var T;return f.set(y,new ZP(_,(T=h.get(y))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=rl();let o=new rt(((h,f)=>h-f)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||Bn.empty();_=f.applyToLocalView(y,_),i.set(p,_);const T=(o.get(f.batchId)||be()).add(p);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,_=p.value,T=k0();_.forEach((A=>{if(!l.has(A)){const O=D0(t.get(A),i.get(A));O!==null&&T.set(A,O),l=l.add(A)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return q.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rP(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(ys());let f=-1,p=l;return h.next((y=>q.forEach(y,((_,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(_)?q.resolve():this.remoteDocumentCache.getEntry(e,_).next((A=>{p=p.insert(_,A)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,be()))).next((_=>({batchId:f,changes:R0(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((i=>{let o=Xa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Xa();return this.indexManager.getCollectionParents(e,l).next((f=>q.forEach(f,(p=>{const y=(function(T,A){return new qc(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((T,A)=>{h=h.insert(T,A)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((p,y)=>{const _=y.getKey();h.get(_)===null&&(h=h.insert(_,Bt.newInvalidDocument(_)))}));let f=Xa();return h.forEach(((p,y)=>{const _=l.get(p);_!==void 0&&il(_.mutation,y,Bn.empty(),_t.now()),Kc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
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
 */class tR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,(function(o){return{name:o.name,query:WP(o.bundledQuery),readTime:ar(o.readTime)}})(t)),q.resolve()}}/**
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
 */class nR{constructor(){this.overlays=new rt(_e.comparator),this.dr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.Tt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.dr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),l=t.length+1,h=new _e(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt(((y,_)=>y-_));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=ys(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const f=ys(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>f.set(y,_))),!(f.size()>=o)););return q.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new wP(t,i));let l=this.dr.get(t);l===void 0&&(l=be(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
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
 */class rR{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class Tp{constructor(){this.Er=new Et(Pt.Ar),this.Rr=new Et(Pt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new Pt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.gr(new Pt(e,t))}pr(e,t){e.forEach((i=>this.removeReference(i,t)))}yr(e){const t=new _e(new st([])),i=new Pt(t,e),o=new Pt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],(h=>{this.gr(h),l.push(h.key)})),l}wr(){this.Er.forEach((e=>this.gr(e)))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new _e(new st([])),i=new Pt(t,e),o=new Pt(t,e+1);let l=be();return this.Rr.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Pt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return _e.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||_e.comparator(e.key,t.key)}}/**
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
 */class iR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(Pt.Ar)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new EP(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new Pt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pt(t,0),o=new Pt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],(h=>{const f=this.Cr(h.br);l.push(f)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(De);return t.forEach((o=>{const l=new Pt(o,0),h=new Pt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],(f=>{i=i.add(f.br)}))})),q.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const h=new Pt(new _e(l),0);let f=new Et(De);return this.vr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)}),h),q.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach((i=>{const o=this.Cr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return q.forEach(t.mutations,(o=>{const l=new Pt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.vr=i}))}Bn(e){}containsKey(e,t){const i=new Pt(t,0),o=this.vr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sR{constructor(e){this.Nr=e,this.docs=(function(){return new rt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const h=t.path,f=new _e(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||LA(DA(_),i)<=0||(o.has(_.key)||Kc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ie()}Br(e,t){return q.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new oR(this)}getSize(e){return q.resolve(this.size)}}class oR extends JP{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)})),q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class aR{constructor(e){this.persistence=e,this.Lr=new Ps((t=>mp(t)),gp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.kr=0,this.qr=new Tp,this.targetCount=0,this.Qr=jo.qn()}forEachTarget(e,t){return this.Lr.forEach(((i,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),q.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Un(t),q.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Lr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.qr.containsKey(t))}}/**
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
 */class G0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new $c(0),this.Ur=!1,this.Ur=!0,this.Wr=new rR,this.referenceDelegate=e(this),this.Gr=new aR(this),this.indexManager=new qP,this.remoteDocumentCache=(function(o){return new sR(o)})((i=>this.referenceDelegate.zr(i))),this.serializer=new HP(t),this.jr=new tR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new iR(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new lR(this.$r.next());return this.referenceDelegate.Hr(),i(o).next((l=>this.referenceDelegate.Jr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Yr(e,t){return q.or(Object.values(this.Kr).map((i=>()=>i.containsKey(e,t))))}}class lR extends VA{constructor(e){super(),this.currentSequenceNumber=e}}class Ip{constructor(e){this.persistence=e,this.Zr=new Tp,this.Xr=null}static ei(e){return new Ip(e)}get ti(){if(this.Xr)return this.Xr;throw Ie()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach((o=>this.ti.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.ti.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ti,(i=>{const o=_e.fromPath(i);return this.ni(e,o).next((l=>{l||t.removeEntry(o,Se.min())}))})).next((()=>(this.Xr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ni(e,t).next((i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())}))}zr(e){return 0}ni(e,t){return q.or([()=>q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Nc{constructor(e,t){this.persistence=e,this.ri=new Ps((i=>jA(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=XP(this,t)}static ei(e,t){return new Nc(e,t)}Hr(){}Jr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}nr(e){let t=0;return this.er(e,(i=>{t++})).next((()=>t))}er(e,t){return q.forEach(this.ri,((i,o)=>this.ir(e,i,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,(h=>this.ir(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Se.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}ir(e,t,i){return q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class uR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=(function(){return sI()?8:FA($t())>0?6:4})()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.es(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new uR;return this.ts(e,t,h).next((f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)}))})).next((()=>l.result))}ns(e,t,i,o){return i.documentReadCount<this.Ji?(To()<=Ne.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),q.resolve()):(To()<=Ne.DEBUG&&ae("QueryEngine","Query:",Io(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(To()<=Ne.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):q.resolve())}Xi(e,t){if(ov(t))return q.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=wd(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=be(...l);return this.Zi.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,wd(t,null,"F")):this.os(e,y,t,p)}))))})))))}es(e,t,i,o){return ov(t)||o.isEqual(Se.min())?q.resolve(null):this.Zi.getDocuments(e,i).next((l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?q.resolve(null):(To()<=Ne.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.os(e,h,t,OA(o,-1)).next((f=>f)))}))}rs(e,t){let i=new Et(A0(e));return t.forEach(((o,l)=>{Kc(e,l)&&(i=i.add(l))})),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return To()<=Ne.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Io(t)),this.Zi.getDocumentsMatchingQuery(e,t,Oi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */class hR{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(De),this.cs=new Ps((l=>mp(l)),gp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.us)))}}function fR(n,e,t,i){return new hR(n,e,t,i)}async function K0(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let p=be();for(const y of o){h.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){f.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Ts:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function dR(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,_){const T=y.batch,A=T.keys();let O=q.resolve();return A.forEach((H=>{O=O.next((()=>_.getEntry(p,H))).next((W=>{const L=y.docVersions.get(H);Be(L!==null),W.version.compareTo(L)<0&&(T.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),_.addEntry(W)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=be();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Q0(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Gr.getLastRemoteSnapshotVersion(t)))}function pR(n,e){const t=Pe(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach(((_,T)=>{const A=o.get(T);if(!A)return;f.push(t.Gr.removeMatchingKeys(l,_.removedDocuments,T).next((()=>t.Gr.addMatchingKeys(l,_.addedDocuments,T))));let O=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(Ot.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):_.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(_.resumeToken,i)),o=o.insert(T,O),(function(W,L,K){return W.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(A,O,_)&&f.push(t.Gr.updateTargetData(l,O))}));let p=$r(),y=be();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(mR(l,h,e.documentUpdates).next((_=>{p=_.Is,y=_.ds}))),!i.isEqual(Se.min())){const _=t.Gr.getLastRemoteSnapshotVersion(l).next((T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(_)}return q.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.us=o,l)))}function mR(n,e,t){let i=be(),o=be();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=$r();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Is:h,ds:o}}))}function gR(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function yR(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Gr.getTargetData(i,e).next((l=>l?(o=l,q.resolve(o)):t.Gr.allocateTargetId(i).next((h=>(o=new Pi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i}))}async function Pd(n,e,t){const i=Pe(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Qo(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function vv(n,e,t){const i=Pe(n);let o=Se.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(p,y,_){const T=Pe(p),A=T.cs.get(_);return A!==void 0?q.resolve(T.us.get(A)):T.Gr.getTargetData(y,_)})(i,h,or(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,f.targetId).next((p=>{l=p}))})).next((()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?l:be()))).next((f=>(vR(i,sP(e),f),{documents:f,Es:l})))))}function vR(n,e,t){let i=n.ls.get(e)||Se.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.ls.set(e,i)}class _v{constructor(){this.activeTargetIds=hP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _R{constructor(){this._o=new _v,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new _v,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ER{uo(e){}shutdown(){}}/**
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
 */const wR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class TR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const jt="WebChannelConnection";class IR extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const f=Kf(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,h),this.Lo(t,p,y,o).then((_=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,_),_)),(_=>{throw Mo("RestConnection",`RPC '${t}' ${f} failed with error: `,_,"url: ",p,"request:",o),_}))}ko(t,i,o,l,h,f){return this.Oo(t,i,o,l,h)}Bo(t,i,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Go})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,h)=>t[h]=l)),o&&o.headers.forEach(((l,h)=>t[h]=l))}No(t,i){const o=wR[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=Kf();return new Promise(((h,f)=>{const p=new l0;p.setWithCredentials(!0),p.listenOnce(u0.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case lc.NO_ERROR:const _=p.getResponseJson();ae(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),h(_);break;case lc.TIMEOUT:ae(jt,`RPC '${e}' ${l} timed out`),f(new ve(ee.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const T=p.getStatus();if(ae(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let A=p.getResponseJson();Array.isArray(A)&&(A=A[0]);const O=A==null?void 0:A.error;if(O&&O.status&&O.message){const H=(function(L){const K=L.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(K)>=0?K:ee.UNKNOWN})(O.status);f(new ve(H,O.message))}else f(new ve(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new ve(ee.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{ae(jt,`RPC '${e}' ${l} completed.`)}}));const y=JSON.stringify(o);ae(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)}))}qo(e,t,i){const o=Kf(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=f0(),f=h0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const T=h.createWebChannel(_,p);let A=!1,O=!1;const H=new TR({Eo:L=>{O?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(A||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Ao:()=>T.close()}),W=(L,K,Z)=>{L.listen(K,(Q=>{try{Z(Q)}catch(ue){setTimeout((()=>{throw ue}),0)}}))};return W(T,Ya.EventType.OPEN,(()=>{O||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),H.So())})),W(T,Ya.EventType.CLOSE,(()=>{O||(O=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),H.Do())})),W(T,Ya.EventType.ERROR,(L=>{O||(O=!0,Mo(jt,`RPC '${e}' stream ${o} transport errored:`,L),H.Do(new ve(ee.UNAVAILABLE,"The operation could not be completed")))})),W(T,Ya.EventType.MESSAGE,(L=>{var K;if(!O){const Z=L.data[0];Be(!!Z);const Q=Z,ue=(Q==null?void 0:Q.error)||((K=Q[0])===null||K===void 0?void 0:K.error);if(ue){ae(jt,`RPC '${e}' stream ${o} received error:`,ue);const Ee=ue.status;let Ae=(function(P){const C=ft[P];if(C!==void 0)return V0(C)})(Ee),x=ue.message;Ae===void 0&&(Ae=ee.INTERNAL,x="Unknown error status: "+Ee+" with message "+ue.message),O=!0,H.Do(new ve(Ae,x)),T.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,Z),H.vo(Z)}})),W(f,c0.STAT_EVENT,(L=>{L.stat===gd.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===gd.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{H.bo()}),0),H}}function Qf(){return typeof document<"u"?document:null}/**
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
 */function Jc(n){return new xP(n,!0)}/**
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
 */class Y0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,(()=>(this.Go=Date.now(),e()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class X0{constructor(e,t,i,o,l,h,f,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Y0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.Xo===t&&this.I_(i,o)}),(i=>{e((()=>{const o=new ve(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)}))}))}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro((()=>{i((()=>this.listener.Ro()))})),this.stream.mo((()=>{i((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((o=>{i((()=>this.d_(o)))})),this.stream.onMessage((o=>{i((()=>++this.n_==1?this.A_(o):this.onNext(o)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget((()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SR extends X0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=OP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Se.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?ar(h.readTime):Se.min()})(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Ad(this.serializer),t.addTarget=(function(l,h){let f;const p=h.target;if(f=Ed(p)?{documents:MP(l,p)}:{query:VP(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=j0(l,h.resumeToken);const y=Td(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Se.min())>0){f.readTime=xc(l,h.snapshotVersion.toTimestamp());const y=Td(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=UP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Ad(this.serializer),t.removeTarget=e,this.c_(t)}}class AR extends X0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=LP(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Ad(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>DP(this.serializer,i)))};this.c_(t)}}/**
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
 */class PR extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Oo(e,Id(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(ee.UNKNOWN,l.toString())}))}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.ko(e,Id(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ve(ee.UNKNOWN,h.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class RR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class kR{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo((h=>{i.enqueueAndForget((async()=>{ks(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await(async function(p){const y=Pe(p);y.k_.add(4),await Pl(y),y.K_.set("Unknown"),y.k_.delete(4),await Zc(y)})(this))}))})),this.K_=new RR(i,o)}}async function Zc(n){if(ks(n))for(const e of n.q_)await e(!0)}async function Pl(n){for(const e of n.q_)await e(!1)}function J0(n,e){const t=Pe(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),kp(t)?Rp(t):Yo(t).s_()&&Pp(t,e))}function Ap(n,e){const t=Pe(n),i=Yo(t);t.L_.delete(e),i.s_()&&Z0(t,e),t.L_.size===0&&(i.s_()?i.a_():ks(t)&&t.K_.set("Unknown"))}function Pp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yo(n).V_(e)}function Z0(n,e){n.U_.xe(e),Yo(n).m_(e)}function Rp(n){n.U_=new PP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Yo(n).start(),n.K_.F_()}function kp(n){return ks(n)&&!Yo(n).i_()&&n.L_.size>0}function ks(n){return Pe(n).k_.size===0}function eE(n){n.U_=void 0}async function CR(n){n.K_.set("Online")}async function xR(n){n.L_.forEach(((e,t)=>{Pp(n,e)}))}async function NR(n,e){eE(n),kp(n)?(n.K_.O_(e),Rp(n)):n.K_.set("Unknown")}async function bR(n,e,t){if(n.K_.set("Online"),e instanceof U0&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.L_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.L_.delete(f),o.U_.removeTarget(f))})(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bc(n,i)}else if(e instanceof fc?n.U_.$e(e):e instanceof F0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Se.min()))try{const i=await Q0(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.L_.get(y);_&&l.L_.set(y,_.withResumeToken(p.resumeToken,h))}})),f.targetMismatches.forEach(((p,y)=>{const _=l.L_.get(p);if(!_)return;l.L_.set(p,_.withResumeToken(Ot.EMPTY_BYTE_STRING,_.snapshotVersion)),Z0(l,p);const T=new Pi(_.target,p,y,_.sequenceNumber);Pp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await bc(n,i)}}async function bc(n,e,t){if(!Qo(e))throw e;n.k_.add(1),await Pl(n),n.K_.set("Offline"),t||(t=()=>Q0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Zc(n)}))}function tE(n,e){return e().catch((t=>bc(n,t,e)))}async function eh(n){const e=Pe(n),t=Vi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;OR(e);)try{const o=await gR(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,DR(e,o)}catch(o){await bc(e,o)}nE(e)&&rE(e)}function OR(n){return ks(n)&&n.B_.length<10}function DR(n,e){n.B_.push(e);const t=Vi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function nE(n){return ks(n)&&!Vi(n).i_()&&n.B_.length>0}function rE(n){Vi(n).start()}async function LR(n){Vi(n).w_()}async function MR(n){const e=Vi(n);for(const t of n.B_)e.g_(t.mutations)}async function VR(n,e,t){const i=n.B_.shift(),o=_p.from(i,e,t);await tE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await eh(n)}async function FR(n,e){e&&Vi(n).f_&&await(async function(i,o){if((function(h){return IP(h)&&h!==ee.ABORTED})(o.code)){const l=i.B_.shift();Vi(i).__(),await tE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await eh(i)}})(n,e),nE(n)&&rE(n)}async function wv(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=ks(t);t.k_.add(3),await Pl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Zc(t)}async function UR(n,e){const t=Pe(n);e?(t.k_.delete(2),await Zc(t)):e||(t.k_.add(2),await Pl(t),t.K_.set("Unknown"))}function Yo(n){return n.W_||(n.W_=(function(t,i,o){const l=Pe(t);return l.b_(),new SR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Ro:CR.bind(null,n),mo:xR.bind(null,n),po:NR.bind(null,n),R_:bR.bind(null,n)}),n.q_.push((async e=>{e?(n.W_.__(),kp(n)?Rp(n):n.K_.set("Unknown")):(await n.W_.stop(),eE(n))}))),n.W_}function Vi(n){return n.G_||(n.G_=(function(t,i,o){const l=Pe(t);return l.b_(),new AR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:LR.bind(null,n),po:FR.bind(null,n),p_:MR.bind(null,n),y_:VR.bind(null,n)}),n.q_.push((async e=>{e?(n.G_.__(),await eh(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))}))),n.G_}/**
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
 */class Cp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Cp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Qo(n))return new ve(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Tv{constructor(){this.z_=new rt(_e.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ie():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class zo{constructor(e,t,i,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new zo(e,t,bo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class jR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((e=>e.Z_()))}}class zR{constructor(){this.queries=Iv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Pe(t),l=o.queries;o.queries=Iv(),l.forEach(((h,f)=>{for(const p of f.J_)p.onError(i)}))})(this,new ve(ee.ABORTED,"Firestore shutting down"))}}function Iv(){return new Ps((n=>S0(n)),Gc)}async function BR(n,e){const t=Pe(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new jR,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=xp(h,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Np(t)}async function $R(n,e){const t=Pe(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function HR(n,e){const t=Pe(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(i=!0);h.H_=o}}i&&Np(t)}function WR(n,e,t){const i=Pe(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function Np(n){n.X_.forEach((e=>{e.next()}))}var Rd,Sv;(Sv=Rd||(Rd={})).na="default",Sv.Cache="cache";class qR{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Rd.Cache}}/**
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
 */class iE{constructor(e){this.key=e}}class sE{constructor(e){this.key=e}}class GR{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=A0(e),this.ma=new bo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new Tv,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,T)=>{const A=o.get(_),O=Kc(this.query,T)?T:null,H=!!A&&this.mutatedKeys.has(A.key),W=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let L=!1;A&&O?A.data.isEqual(O.data)?H!==W&&(i.track({type:3,doc:O}),L=!0):this.ya(A,O)||(i.track({type:2,doc:O}),L=!0,(p&&this.Va(O,p)>0||y&&this.Va(O,y)<0)&&(f=!0)):!A&&O?(i.track({type:0,doc:O}),L=!0):A&&!O&&(i.track({type:1,doc:A}),L=!0,(p||y)&&(f=!0)),L&&(O?(h=h.add(O),l=W?l.add(_):l.delete(_)):(h=h.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{ma:h,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort(((_,T)=>(function(O,H){const W=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return W(O)-W(H)})(_.type,T.type)||this.Va(_.doc,T.doc))),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new zo(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Tv,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach((t=>this.Ea=this.Ea.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ea=this.Ea.delete(t))),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach((i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))}));const t=[];return e.forEach((i=>{this.Ra.has(i)||t.push(new sE(i))})),this.Ra.forEach((i=>{e.has(i)||t.push(new iE(i))})),t}va(e){this.Ea=e.Es,this.Ra=be();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return zo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class KR{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class QR{constructor(e){this.key=e,this.Fa=!1}}class YR{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Ps((f=>S0(f)),Gc),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(_e.comparator),this.La=new Map,this.ka=new Tp,this.qa={},this.Qa=new Map,this.Ka=jo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function XR(n,e,t=!0){const i=hE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await oE(i,e,t,!0),o}async function JR(n,e){const t=hE(n);await oE(t,e,!0,!1)}async function oE(n,e,t,i){const o=await yR(n.localStore,or(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await ZR(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&J0(n.remoteStore,o),f}async function ZR(n,e,t,i,o){n.Ua=(T,A,O)=>(async function(W,L,K,Z){let Q=L.view.ga(K);Q.ss&&(Q=await vv(W.localStore,L.query,!1).then((({documents:x})=>L.view.ga(x,Q))));const ue=Z&&Z.targetChanges.get(L.targetId),Ee=Z&&Z.targetMismatches.get(L.targetId)!=null,Ae=L.view.applyChanges(Q,W.isPrimaryClient,ue,Ee);return Pv(W,L.targetId,Ae.ba),Ae.snapshot})(n,T,A,O);const l=await vv(n.localStore,e,!0),h=new GR(e,l.Es),f=h.ga(l.documents),p=Al.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);Pv(n,t,y.ba);const _=new KR(e,t,h);return n.xa.set(e,_),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function ek(n,e,t){const i=Pe(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter((h=>!Gc(h,e)))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Pd(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ap(i.remoteStore,o.targetId),kd(i,o.targetId)})).catch(Ko)):(kd(i,o.targetId),await Pd(i.localStore,o.targetId,!0))}async function tk(n,e){const t=Pe(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ap(t.remoteStore,i.targetId))}async function nk(n,e,t){const i=uk(n);try{const o=await(function(h,f){const p=Pe(h),y=_t.now(),_=f.reduce(((O,H)=>O.add(H.key)),be());let T,A;return p.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let H=$r(),W=be();return p.hs.getEntries(O,_).next((L=>{H=L,H.forEach(((K,Z)=>{Z.isValidDocument()||(W=W.add(K))}))})).next((()=>p.localDocuments.getOverlayedDocuments(O,H))).next((L=>{T=L;const K=[];for(const Z of f){const Q=vP(Z,T.get(Z.key).overlayedDocument);Q!=null&&K.push(new Rs(Z.key,Q,y0(Q.value.mapValue),Vr.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,K,f)})).next((L=>{A=L;const K=L.applyToLocalDocumentSet(T,W);return p.documentOverlayCache.saveOverlays(O,L.batchId,K)}))})).then((()=>({batchId:A.batchId,changes:R0(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new rt(De)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y})(i,o.batchId,t),await Rl(i,o.changes),await eh(i.remoteStore)}catch(o){const l=xp(o,"Failed to persist write");t.reject(l)}}async function aE(n,e){const t=Pe(n);try{const i=await pR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.La.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Be(h.Fa):o.removedDocuments.size>0&&(Be(h.Fa),h.Fa=!1))})),await Rl(t,i,e)}catch(i){await Ko(i)}}function Av(n,e,t){const i=Pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach(((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const p=Pe(h);p.onlineState=f;let y=!1;p.queries.forEach(((_,T)=>{for(const A of T.J_)A.ea(f)&&(y=!0)})),y&&Np(p)})(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function rk(n,e,t){const i=Pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let h=new rt(_e.comparator);h=h.insert(l,Bt.newNoDocument(l,Se.min()));const f=be().add(l),p=new Xc(Se.min(),new Map,new rt(De),h,f);await aE(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),bp(i)}else await Pd(i.localStore,e,!1).then((()=>kd(i,e,t))).catch(Ko)}async function ik(n,e){const t=Pe(n),i=e.batch.batchId;try{const o=await dR(t.localStore,e);uE(t,i,null),lE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Rl(t,o)}catch(o){await Ko(o)}}async function sk(n,e,t){const i=Pe(n);try{const o=await(function(h,f){const p=Pe(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,f).next((T=>(Be(T!==null),_=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);uE(i,e,t),lE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Rl(i,o)}catch(o){await Ko(o)}}function lE(n,e){(n.Qa.get(e)||[]).forEach((t=>{t.resolve()})),n.Qa.delete(e)}function uE(n,e,t){const i=Pe(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function kd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach((i=>{n.ka.containsKey(i)||cE(n,i)}))}function cE(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Ap(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),bp(n))}function Pv(n,e,t){for(const i of t)i instanceof iE?(n.ka.addReference(i.key,e),ok(n,i)):i instanceof sE?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||cE(n,i.key)):Ie()}function ok(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),bp(n))}function bp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new _e(st.fromString(e)),i=n.Ka.next();n.La.set(i,new QR(t)),n.Ba=n.Ba.insert(t,i),J0(n.remoteStore,new Pi(or(yp(t.path)),i,"TargetPurposeLimboResolution",$c.oe))}}async function Rl(n,e,t){const i=Pe(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach(((f,p)=>{h.push(i.Ua(p,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Sp.zi(p.targetId,y);l.push(T)}})))})),await Promise.all(h),i.Ma.R_(o),await(async function(p,y){const _=Pe(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(y,(A=>q.forEach(A.Wi,(O=>_.persistence.referenceDelegate.addReference(T,A.targetId,O))).next((()=>q.forEach(A.Gi,(O=>_.persistence.referenceDelegate.removeReference(T,A.targetId,O)))))))))}catch(T){if(!Qo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const A=T.targetId;if(!T.fromCache){const O=_.us.get(A),H=O.snapshotVersion,W=O.withLastLimboFreeSnapshotVersion(H);_.us=_.us.insert(A,W)}}})(i.localStore,l))}async function ak(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await K0(t.localStore,e);t.currentUser=e,(function(l,h){l.Qa.forEach((f=>{f.forEach((p=>{p.reject(new ve(ee.CANCELLED,h))}))})),l.Qa.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Rl(t,i.Ts)}}function lk(n,e){const t=Pe(n),i=t.La.get(e);if(i&&i.Fa)return be().add(i.key);{let o=be();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function hE(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=aE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rk.bind(null,e),e.Ma.R_=HR.bind(null,e.eventManager),e.Ma.Wa=WR.bind(null,e.eventManager),e}function uk(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ik.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sk.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return fR(this.persistence,new cR,e.initialUser,this.serializer)}ja(e){return new G0(Ip.ei,this.serializer)}za(e){return new _R}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class ck extends Oc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Be(this.persistence.referenceDelegate instanceof Nc);const i=this.persistence.referenceDelegate.garbageCollector;return new QP(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new G0((i=>Nc.ei(i,t)),this.serializer)}}class Cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Av(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ak.bind(null,this.syncEngine),await UR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new zR})()}createDatastore(e){const t=Jc(e.databaseInfo.databaseId),i=(function(l){return new IR(l)})(e.databaseInfo);return(function(l,h,f,p){return new PR(l,h,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new kR(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Av(this.syncEngine,t,0)),(function(){return Ev.p()?new Ev:new ER})())}createSyncEngine(e,t){return(function(o,l,h,f,p,y,_){const T=new YR(o,l,h,f,p,y);return _&&(T.$a=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Pl(l),l.Q_.shutdown(),l.K_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cd.provider={build:()=>new Cd};/**
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
 */class hk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class fk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=p0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=xp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Yf(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await K0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Rv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dk(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>wv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>wv(e.remoteStore,o))),n._onlineComponents=e}async function dk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Mo("Error using user provided cache. Falling back to memory cache: "+t),await Yf(n,new Oc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Yf(n,new ck(void 0));return n._offlineComponents}async function fE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Rv(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Rv(n,new Cd))),n._onlineComponents}function pk(n){return fE(n).then((e=>e.syncEngine))}async function mk(n){const e=await fE(n),t=e.eventManager;return t.onListen=XR.bind(null,e.syncEngine),t.onUnlisten=ek.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tk.bind(null,e.syncEngine),t}function gk(n,e,t={}){const i=new bi;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,p,y){const _=new hk({next:A=>{_.eu(),h.enqueueAndForget((()=>$R(l,T)));const O=A.docs.has(f);!O&&A.fromCache?y.reject(new ve(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&A.fromCache&&p&&p.source==="server"?y.reject(new ve(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(A)},error:A=>y.reject(A)}),T=new qR(yp(f.path),_,{includeMetadataChanges:!0,ua:!0});return BR(l,T)})(await mk(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function dE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const kv=new Map;/**
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
 */function yk(n,e,t){if(!t)throw new ve(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vk(n,e,t,i){if(e===!0&&i===!0)throw new ve(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cv(n){if(!_e.isDocumentKey(n))throw new ve(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Op(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie()}function pl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Op(n);throw new ve(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class xv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xv(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new SA;switch(i.type){case"firstParty":return new kA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ve(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=kv.get(t);i&&(ae("ComponentProvider","Removing Datastore"),kv.delete(t),i.terminate())})(this),Promise.resolve()}}function _k(n,e,t,i={}){var o;const l=(n=pl(n,Dp))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=zt.MOCK_USER;else{f=JT(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ve(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new zt(y)}n._authCredentials=new AA(new d0(f,p))}}/**
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
 */class Lp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Lp(this.firestore,e,this._query)}}class An{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ml(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ml extends Lp{constructor(e,t,i){super(e,t,yp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new _e(e))}withConverter(e){return new ml(this.firestore,e,this._path)}}function pE(n,e,...t){if(n=Pn(n),arguments.length===1&&(e=p0.newId()),yk("doc","path",e),n instanceof Dp){const i=st.fromString(e,...t);return Cv(i),new An(n,null,new _e(i))}{if(!(n instanceof An||n instanceof ml))throw new ve(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return Cv(i),new An(n.firestore,n instanceof ml?n.converter:null,new _e(i))}}/**
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
 */class Nv{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Y0(this,"async_queue_retry"),this.fu=()=>{const i=Qf();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Qf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Qf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise((()=>{}));const t=new bi;return this.yu((()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Iu.push(e),this.wu())))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Qo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(e){const t=this.gu.then((()=>(this.Ru=!0,e().catch((i=>{this.Au=i,this.Ru=!1;const o=(function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f})(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i})).then((i=>(this.Ru=!1,i))))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Cp.createAndSchedule(this,e,t,i,(l=>this.Su(l)));return this.Eu.push(o),o}pu(){this.Au&&Ie()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then((()=>{this.Eu.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()}))}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Mp extends Dp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Nv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nv(e),this._firestoreClient=void 0,await e}}}function Ek(n,e){const t=typeof n=="object"?n:R_(),i=typeof n=="string"?n:"(default)",o=ep(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=YT("firestore");l&&_k(o,...l)}return o}function mE(n){if(n._terminated)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wk(n),n._firestoreClient}function wk(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,y,_){return new $A(f,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,dE(_.experimentalLongPollingOptions),_.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new fk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class gE{constructor(e){this._methodName=e}}/**
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
 */const Tk=/^__.*__$/;class Ik{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sl(e,this.data,t,this.fieldTransforms)}}function yE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class jp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Dc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(yE(this.Mu)&&Tk.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Sk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Jc(e)}$u(e,t,i,o=!1){return new jp({Mu:e,methodName:t,Ku:i,path:bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ak(n){const e=n._freezeSettings(),t=Jc(n._databaseId);return new Sk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Pk(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);wE("Data must be an object, but it was:",h,i);const f=_E(i,h);let p,y;if(l.merge)p=new Bn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const _=[];for(const T of l.mergeFields){const A=Rk(e,T,t);if(!h.contains(A))throw new ve(ee.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ck(_,A)||_.push(A)}p=new Bn(_),y=h.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=h.fieldTransforms;return new Ik(new Sn(f),p,y)}function vE(n,e){if(EE(n=Pn(n)))return wE("Unsupported field value:",e,n),_E(n,e);if(n instanceof gE)return(function(i,o){if(!yE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let p=vE(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Pn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:xc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xc(o.serializer,l)}}if(i instanceof Fp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Bo)return{bytesValue:j0(o.serializer,i._byteString)};if(i instanceof An){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Up)return(function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return vp(f.serializer,p)}))}}}}}})(i,o);throw o.qu(`Unsupported field value: ${Op(i)}`)})(n,e)}function _E(n,e){const t={};return m0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(n,((i,o)=>{const l=vE(o,e.Ou(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function EE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Fp||n instanceof Bo||n instanceof An||n instanceof gE||n instanceof Up)}function wE(n,e,t){if(!EE(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const i=Op(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function Rk(n,e,t){if((e=Pn(e))instanceof Vp)return e._internalPath;if(typeof e=="string")return TE(n,e);throw Dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const kk=new RegExp("[~\\*/\\[\\]]");function TE(n,e,t){if(e.search(kk)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vp(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new ve(ee.INVALID_ARGUMENT,f+n+p)}function Ck(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class IE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(SE("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xk extends IE{data(){return super.data()}}function SE(n,e){return typeof e=="string"?TE(n,e):e instanceof Vp?e._internalPath:e._delegate._internalPath}class Nk{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return As(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>ut(h.doubleValue)));return new Up(l)}convertGeoPoint(e){return new Fp(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Wc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const t=Di(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);Be(q0(i));const o=new cl(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function bk(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class Ok{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AE extends IE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(SE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Dk extends AE{data(e={}){return super.data(e)}}/**
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
 */function Lk(n){n=pl(n,An);const e=pl(n.firestore,Mp);return gk(mE(e),n._key).then((t=>Uk(e,n,t)))}class Mk extends Nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,t)}}function Vk(n,e,t){n=pl(n,An);const i=pl(n.firestore,Mp),o=bk(n.converter,e,t);return Fk(i,[Pk(Ak(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Vr.none())])}function Fk(n,e){return(function(i,o){const l=new bi;return i.asyncQueue.enqueueAndForget((async()=>nk(await pk(i),o,l))),l.promise})(mE(n),e)}function Uk(n,e,t){const i=t.docs.get(e._key),o=new Mk(n);return new AE(n,o,e._key,i,new Ok(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Go=o})(Wo),Do(new Es("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Mp(new PA(i.getProvider("auth-internal")),new xA(i.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ve(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(y.options.projectId,_)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),xi(Qy,"4.7.6",e),xi(Qy,"4.7.6","esm2017")})();const jk={apiKey:"AIzaSyBRTWsRqYZqc8db6Ad8ra0x1qc9xpdoZF0",authDomain:"multi-cinema.firebaseapp.com",projectId:"multi-cinema",storageBucket:"multi-cinema.firebasestorage.app",messagingSenderId:"129611887734",appId:"1:129611887734:web:114c2d1e061543c9b89b57"},PE=P_(jk),zp=TA(PE),RE=Ek(PE),zk=new br,Bk=async()=>{try{return(await N1(zp,zk)).user}catch(n){return console.error("Ошибка при входе через Google:",n),null}},$k=async()=>{try{await h1(zp)}catch(n){console.error("Ошибка при выходе:",n)}},Hk=async(n,e)=>{try{const t=pE(RE,"users",n);await Vk(t,{likedMovies:e},{merge:!0})}catch(t){console.error("Ошибка при сохранении лайкнутых фильмов:",t)}},Wk=async n=>{try{const e=pE(RE,"users",n),t=await Lk(e);return t.exists()?t.data().likedMovies:[]}catch(e){return console.error("Ошибка при загрузке лайкнутых фильмов:",e),[]}},qk=n=>{const[e,t]=B.useState([]);return B.useEffect(()=>{n&&(async()=>{const l=await Wk(n.uid);t(l)})()},[n]),B.useEffect(()=>{n&&e.length>0&&Hk(n.uid,e)},[e,n]),{likedMovies:e,toggleLike:o=>{e.some(l=>l.id===o.id)?t(e.filter(l=>l.id!==o.id)):t([...e,o])}}},Gk=()=>{const[n,e]=B.useState(null);return B.useEffect(()=>{const t=c1(zp,i=>{e(i)});return()=>t()},[]),{user:n}};function Bp(){const[n,e]=B.useState(!0);return{isLoading:n,setIsLoading:e}}function Kk(){const[n,e]=B.useState([]);return{data:n,setData:e}}function Qk(){const[n,e]=B.useState("");return{filmName:n,setFilmName:e}}function Yk(){const[n,e]=B.useState({});return{film:n,setFilm:e}}function Xk(){const[n,e]=B.useState([]);return{collections:n,setCollections:e}}function Jk(){const[n,e]=B.useState({actual:0,all:0});return{pages:n,setPages:e}}function Zk(){const[n,e]=B.useState("");return{link:n,setLink:e}}const kE=B.createContext(),eC=({children:n})=>{const{user:e}=Gk(),{likedMovies:t,toggleLike:i}=qk(e),{isLoading:o,setIsLoading:l}=Bp(),{data:h,setData:f}=Kk(),{filmName:p,setFilmName:y}=Qk(),{film:_,setFilm:T}=Yk(),{collections:A,setCollections:O}=Xk(),{pages:H,setPages:W}=Jk(),{link:L,setLink:K}=Zk();return j.jsx(kE.Provider,{value:{user:e,likedMovies:t,toggleLike:i,isLoading:o,setIsLoading:l,data:h,setData:f,filmName:p,setFilmName:y,film:_,setFilm:T,collections:A,setCollections:O,pages:H,setPages:W,link:L,setLink:K},children:n})},fn=()=>B.useContext(kE);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bv="popstate";function tC(n={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return xd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:gl(o)}return rC(e,t,null,n)}function nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function hr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nC(){return Math.random().toString(36).substring(2,10)}function Ov(n,e){return{usr:n.state,key:n.key,idx:e}}function xd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||i||nC()}}function gl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Xo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function rC(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",p=null,y=_();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function _(){return(h.state||{idx:null}).idx}function T(){f="POP";let L=_(),K=L==null?null:L-y;y=L,p&&p({action:f,location:W.location,delta:K})}function A(L,K){f="PUSH";let Z=xd(W.location,L,K);y=_()+1;let Q=Ov(Z,y),ue=W.createHref(Z);try{h.pushState(Q,"",ue)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;o.location.assign(ue)}l&&p&&p({action:f,location:W.location,delta:1})}function O(L,K){f="REPLACE";let Z=xd(W.location,L,K);y=_();let Q=Ov(Z,y),ue=W.createHref(Z);h.replaceState(Q,"",ue),l&&p&&p({action:f,location:W.location,delta:0})}function H(L){return iC(L)}let W={get action(){return f},get location(){return n(o,h)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(bv,T),p=L,()=>{o.removeEventListener(bv,T),p=null}},createHref(L){return e(o,L)},createURL:H,encodeLocation(L){let K=H(L);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:A,replace:O,go(L){return h.go(L)}};return W}function iC(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),nt(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:gl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function CE(n,e,t="/"){return sC(n,e,t,!1)}function sC(n,e,t,i){let o=typeof e=="string"?Xo(e):e,l=Hr(o.pathname||"/",t);if(l==null)return null;let h=xE(n);oC(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=yC(l);f=mC(h[p],y,i)}return f}function xE(n,e=[],t=[],i="",o=!1){let l=(h,f,p=o,y)=>{let _={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:f,route:h};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(i)&&p)return;nt(_.relativePath.startsWith(i),`Absolute route path "${_.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(i.length)}let T=Fr([i,_.relativePath]),A=t.concat(_);h.children&&h.children.length>0&&(nt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),xE(h.children,e,A,T,p)),!(h.path==null&&!h.index)&&e.push({path:T,score:dC(T,h.index),routesMeta:A})};return n.forEach((h,f)=>{var p;if(h.path===""||!((p=h.path)!=null&&p.includes("?")))l(h,f);else for(let y of NE(h.path))l(h,f,!0,y)}),e}function NE(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=NE(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function oC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:pC(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var aC=/^:[\w-]+$/,lC=3,uC=2,cC=1,hC=10,fC=-2,Dv=n=>n==="*";function dC(n,e){let t=n.split("/"),i=t.length;return t.some(Dv)&&(i+=fC),e&&(i+=uC),t.filter(o=>!Dv(o)).reduce((o,l)=>o+(aC.test(l)?lC:l===""?cC:hC),i)}function pC(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function mC(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",T=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),A=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Fr([l,T.pathname]),pathnameBase:wC(Fr([l,T.pathnameBase])),route:A}),T.pathnameBase!=="/"&&(l=Fr([l,T.pathnameBase]))}return h}function Lc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=gC(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:T},A)=>{if(_==="*"){let H=f[A]||"";h=l.slice(0,l.length-H.length).replace(/(.)\/+$/,"$1")}const O=f[A];return T&&!O?y[_]=void 0:y[_]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function gC(n,e=!1,t=!0){hr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function yC(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Hr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function vC(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Xo(n):n;return{pathname:t?t.startsWith("/")?t:_C(t,e):e,search:TC(i),hash:IC(o)}}function _C(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EC(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bE(n){let e=EC(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function OE(n,e,t,i=!1){let o;typeof n=="string"?o=Xo(n):(o={...n},nt(!o.pathname||!o.pathname.includes("?"),Xf("?","pathname","search",o)),nt(!o.pathname||!o.pathname.includes("#"),Xf("#","pathname","hash",o)),nt(!o.search||!o.search.includes("#"),Xf("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),T-=1;o.pathname=A.join("/")}f=T>=0?e[T]:"/"}let p=vC(o,f),y=h&&h!=="/"&&h.endsWith("/"),_=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var Fr=n=>n.join("/").replace(/\/\/+/g,"/"),wC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),TC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,IC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function SC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var DE=["POST","PUT","PATCH","DELETE"];new Set(DE);var AC=["GET",...DE];new Set(AC);var Jo=B.createContext(null);Jo.displayName="DataRouter";var th=B.createContext(null);th.displayName="DataRouterState";B.createContext(!1);var LE=B.createContext({isTransitioning:!1});LE.displayName="ViewTransition";var PC=B.createContext(new Map);PC.displayName="Fetchers";var RC=B.createContext(null);RC.displayName="Await";var fr=B.createContext(null);fr.displayName="Navigation";var kl=B.createContext(null);kl.displayName="Location";var dr=B.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var $p=B.createContext(null);$p.displayName="RouteError";function kC(n,{relative:e}={}){nt(Cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(fr),{hash:o,pathname:l,search:h}=xl(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Fr([t,l])),i.createHref({pathname:f,search:h,hash:o})}function Cl(){return B.useContext(kl)!=null}function Kr(){return nt(Cl(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(kl).location}var ME="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function VE(n){B.useContext(fr).static||B.useLayoutEffect(n)}function FE(){let{isDataRoute:n}=B.useContext(dr);return n?BC():CC()}function CC(){nt(Cl(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(Jo),{basename:e,navigator:t}=B.useContext(fr),{matches:i}=B.useContext(dr),{pathname:o}=Kr(),l=JSON.stringify(bE(i)),h=B.useRef(!1);return VE(()=>{h.current=!0}),B.useCallback((p,y={})=>{if(hr(h.current,ME),!h.current)return;if(typeof p=="number"){t.go(p);return}let _=OE(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Fr([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,l,o,n])}B.createContext(null);function xC(){let{matches:n}=B.useContext(dr),e=n[n.length-1];return e?e.params:{}}function xl(n,{relative:e}={}){let{matches:t}=B.useContext(dr),{pathname:i}=Kr(),o=JSON.stringify(bE(t));return B.useMemo(()=>OE(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function NC(n,e){return UE(n,e)}function UE(n,e,t,i,o){var Z;nt(Cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=B.useContext(fr),{matches:h}=B.useContext(dr),f=h[h.length-1],p=f?f.params:{},y=f?f.pathname:"/",_=f?f.pathnameBase:"/",T=f&&f.route;{let Q=T&&T.path||"";jE(y,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let A=Kr(),O;if(e){let Q=typeof e=="string"?Xo(e):e;nt(_==="/"||((Z=Q.pathname)==null?void 0:Z.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),O=Q}else O=A;let H=O.pathname||"/",W=H;if(_!=="/"){let Q=_.replace(/^\//,"").split("/");W="/"+H.replace(/^\//,"").split("/").slice(Q.length).join("/")}let L=CE(n,{pathname:W});hr(T||L!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),hr(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=MC(L&&L.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:Fr([_,l.encodeLocation?l.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?_:Fr([_,l.encodeLocation?l.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),h,t,i,o);return e&&K?B.createElement(kl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},K):K}function bC(){let n=zC(),e=SC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:o},t):null,h)}var OC=B.createElement(bC,null),DC=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?B.createElement(dr.Provider,{value:this.props.routeContext},B.createElement($p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function LC({routeContext:n,match:e,children:t}){let i=B.useContext(Jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(dr.Provider,{value:n},t)}function MC(n,e=[],t=null,i=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,h=t==null?void 0:t.errors;if(h!=null){let y=l.findIndex(_=>_.route.id&&(h==null?void 0:h[_.route.id])!==void 0);nt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let f=!1,p=-1;if(t)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=y),_.route.id){let{loaderData:T,errors:A}=t,O=_.route.loader&&!T.hasOwnProperty(_.route.id)&&(!A||A[_.route.id]===void 0);if(_.route.lazy||O){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,_,T)=>{let A,O=!1,H=null,W=null;t&&(A=h&&_.route.id?h[_.route.id]:void 0,H=_.route.errorElement||OC,f&&(p<0&&T===0?(jE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,W=null):p===T&&(O=!0,W=_.route.hydrateFallbackElement||null)));let L=e.concat(l.slice(0,T+1)),K=()=>{let Z;return A?Z=H:O?Z=W:_.route.Component?Z=B.createElement(_.route.Component,null):_.route.element?Z=_.route.element:Z=y,B.createElement(LC,{match:_,routeContext:{outlet:y,matches:L,isDataRoute:t!=null},children:Z})};return t&&(_.route.ErrorBoundary||_.route.errorElement||T===0)?B.createElement(DC,{location:t.location,revalidation:t.revalidation,component:H,error:A,children:K(),routeContext:{outlet:null,matches:L,isDataRoute:!0},unstable_onError:i}):K()},null)}function Hp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VC(n){let e=B.useContext(Jo);return nt(e,Hp(n)),e}function FC(n){let e=B.useContext(th);return nt(e,Hp(n)),e}function UC(n){let e=B.useContext(dr);return nt(e,Hp(n)),e}function Wp(n){let e=UC(n),t=e.matches[e.matches.length-1];return nt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function jC(){return Wp("useRouteId")}function zC(){var i;let n=B.useContext($p),e=FC("useRouteError"),t=Wp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function BC(){let{router:n}=VC("useNavigate"),e=Wp("useNavigate"),t=B.useRef(!1);return VE(()=>{t.current=!0}),B.useCallback(async(o,l={})=>{hr(t.current,ME),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Lv={};function jE(n,e,t){!e&&!Lv[n]&&(Lv[n]=!0,hr(!1,t))}B.memo($C);function $C({routes:n,future:e,state:t,unstable_onError:i}){return UE(n,void 0,t,i,e)}function Po(n){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HC({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){nt(!Cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),f=B.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Xo(t));let{pathname:p="/",search:y="",hash:_="",state:T=null,key:A="default"}=t,O=B.useMemo(()=>{let H=Hr(p,h);return H==null?null:{location:{pathname:H,search:y,hash:_,state:T,key:A},navigationType:i}},[h,p,y,_,T,A,i]);return hr(O!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:B.createElement(fr.Provider,{value:f},B.createElement(kl.Provider,{children:e,value:O}))}function WC({children:n,location:e}){return NC(Nd(n),e)}function Nd(n,e=[]){let t=[];return B.Children.forEach(n,(i,o)=>{if(!B.isValidElement(i))return;let l=[...e,o];if(i.type===B.Fragment){t.push.apply(t,Nd(i.props.children,l));return}nt(i.type===Po,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Nd(i.props.children,l)),t.push(h)}),t}var dc="get",pc="application/x-www-form-urlencoded";function nh(n){return n!=null&&typeof n.tagName=="string"}function qC(n){return nh(n)&&n.tagName.toLowerCase()==="button"}function GC(n){return nh(n)&&n.tagName.toLowerCase()==="form"}function KC(n){return nh(n)&&n.tagName.toLowerCase()==="input"}function QC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function YC(n,e){return n.button===0&&(!e||e==="_self")&&!QC(n)}var tc=null;function XC(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var JC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jf(n){return n!=null&&!JC.has(n)?(hr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pc}"`),null):n}function ZC(n,e){let t,i,o,l,h;if(GC(n)){let f=n.getAttribute("action");i=f?Hr(f,e):null,t=n.getAttribute("method")||dc,o=Jf(n.getAttribute("enctype"))||pc,l=new FormData(n)}else if(qC(n)||KC(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?Hr(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||dc,o=Jf(n.getAttribute("formenctype"))||Jf(f.getAttribute("enctype"))||pc,l=new FormData(f,n),!XC()){let{name:y,type:_,value:T}=n;if(_==="image"){let A=y?`${y}.`:"";l.append(`${A}x`,"0"),l.append(`${A}y`,"0")}else y&&l.append(y,T)}}else{if(nh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=dc,i=null,o=pc,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ex(n,e,t){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&Hr(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function tx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function rx(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await tx(l,t);return h.links?h.links():[]}return[]}));return ax(i.flat(1).filter(nx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Mv(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var _;return t[y].pathname!==p.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let A=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function ix(n,e,{includeHydrateFallback:t}={}){return sx(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function sx(n){return[...new Set(n)]}function ox(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function ax(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(ox(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function zE(){let n=B.useContext(Jo);return qp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function lx(){let n=B.useContext(th);return qp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Gp=B.createContext(void 0);Gp.displayName="FrameworkContext";function BE(){let n=B.useContext(Gp);return qp(n,"You must render this element inside a <HydratedRouter> element"),n}function ux(n,e){let t=B.useContext(Gp),[i,o]=B.useState(!1),[l,h]=B.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:T}=e,A=B.useRef(null);B.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let W=K=>{K.forEach(Z=>{h(Z.isIntersecting)})},L=new IntersectionObserver(W,{threshold:.5});return A.current&&L.observe(A.current),()=>{L.disconnect()}}},[n]),B.useEffect(()=>{if(i){let W=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(W)}}},[i]);let O=()=>{o(!0)},H=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,A,{}]:[l,A,{onFocus:Qa(f,O),onBlur:Qa(p,H),onMouseEnter:Qa(y,O),onMouseLeave:Qa(_,H),onTouchStart:Qa(T,O)}]:[!1,A,{}]}function Qa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function cx({page:n,...e}){let{router:t}=zE(),i=B.useMemo(()=>CE(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?B.createElement(fx,{page:n,matches:i,...e}):null}function hx(n){let{manifest:e,routeModules:t}=BE(),[i,o]=B.useState([]);return B.useEffect(()=>{let l=!1;return rx(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function fx({page:n,matches:e,...t}){let i=Kr(),{manifest:o,routeModules:l}=BE(),{basename:h}=zE(),{loaderData:f,matches:p}=lx(),y=B.useMemo(()=>Mv(n,e,p,o,i,"data"),[n,e,p,o,i]),_=B.useMemo(()=>Mv(n,e,p,o,i,"assets"),[n,e,p,o,i]),T=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let H=new Set,W=!1;if(e.forEach(K=>{var Q;let Z=o.routes[K.route.id];!Z||!Z.hasLoader||(!y.some(ue=>ue.route.id===K.route.id)&&K.route.id in f&&((Q=l[K.route.id])!=null&&Q.shouldRevalidate)||Z.hasClientLoader?W=!0:H.add(K.route.id))}),H.size===0)return[];let L=ex(n,h,"data");return W&&H.size>0&&L.searchParams.set("_routes",e.filter(K=>H.has(K.route.id)).map(K=>K.route.id).join(",")),[L.pathname+L.search]},[h,f,i,o,y,e,n,l]),A=B.useMemo(()=>ix(_,o),[_,o]),O=hx(_);return B.createElement(B.Fragment,null,T.map(H=>B.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...t})),A.map(H=>B.createElement("link",{key:H,rel:"modulepreload",href:H,...t})),O.map(({key:H,link:W})=>B.createElement("link",{key:H,nonce:t.nonce,...W})))}function dx(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var $E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$E&&(window.__reactRouterVersion="7.8.2")}catch{}function px({basename:n,children:e,window:t}){let i=B.useRef();i.current==null&&(i.current=tC({window:t,v5Compat:!0}));let o=i.current,[l,h]=B.useState({action:o.action,location:o.location}),f=B.useCallback(p=>{B.startTransition(()=>h(p))},[h]);return B.useLayoutEffect(()=>o.listen(f),[o,f]),B.createElement(HC,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var HE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ri=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:_,viewTransition:T,...A},O){let{basename:H}=B.useContext(fr),W=typeof y=="string"&&HE.test(y),L,K=!1;if(typeof y=="string"&&W&&(L=y,$E))try{let P=new URL(window.location.href),C=y.startsWith("//")?new URL(P.protocol+y):new URL(y),b=Hr(C.pathname,H);C.origin===P.origin&&b!=null?y=b+C.search+C.hash:K=!0}catch{hr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=kC(y,{relative:o}),[Q,ue,Ee]=ux(i,A),Ae=vx(y,{replace:h,state:f,target:p,preventScrollReset:_,relative:o,viewTransition:T});function x(P){e&&e(P),P.defaultPrevented||Ae(P)}let I=B.createElement("a",{...A,...Ee,href:L||Z,onClick:K||l?e:x,ref:dx(O,ue),target:p,"data-discover":!W&&t==="render"?"true":void 0});return Q&&!W?B.createElement(B.Fragment,null,I,B.createElement(cx,{page:Z})):I});Ri.displayName="Link";var mx=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},_){let T=xl(h,{relative:y.relative}),A=Kr(),O=B.useContext(th),{navigator:H,basename:W}=B.useContext(fr),L=O!=null&&Ix(T)&&f===!0,K=H.encodeLocation?H.encodeLocation(T).pathname:T.pathname,Z=A.pathname,Q=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),Q=Q?Q.toLowerCase():null,K=K.toLowerCase()),Q&&W&&(Q=Hr(Q,W)||Q);const ue=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let Ee=Z===K||!o&&Z.startsWith(K)&&Z.charAt(ue)==="/",Ae=Q!=null&&(Q===K||!o&&Q.startsWith(K)&&Q.charAt(K.length)==="/"),x={isActive:Ee,isPending:Ae,isTransitioning:L},I=Ee?e:void 0,P;typeof i=="function"?P=i(x):P=[i,Ee?"active":null,Ae?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(x):l;return B.createElement(Ri,{...y,"aria-current":I,className:P,ref:_,style:C,to:h,viewTransition:f},typeof p=="function"?p(x):p)});mx.displayName="NavLink";var gx=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=dc,action:f,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:T,...A},O)=>{let H=wx(),W=Tx(f,{relative:y}),L=h.toLowerCase()==="get"?"get":"post",K=typeof f=="string"&&HE.test(f),Z=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let ue=Q.nativeEvent.submitter,Ee=(ue==null?void 0:ue.getAttribute("formmethod"))||h;H(ue||Q.currentTarget,{fetcherKey:e,method:Ee,navigate:t,replace:o,state:l,relative:y,preventScrollReset:_,viewTransition:T})};return B.createElement("form",{ref:O,method:L,action:W,onSubmit:i?p:Z,...A,"data-discover":!K&&n==="render"?"true":void 0})});gx.displayName="Form";function yx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function WE(n){let e=B.useContext(Jo);return nt(e,yx(n)),e}function vx(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=FE(),p=Kr(),y=xl(n,{relative:l});return B.useCallback(_=>{if(YC(_,e)){_.preventDefault();let T=t!==void 0?t:gl(p)===gl(y);f(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,i,e,n,o,l,h])}var _x=0,Ex=()=>`__${String(++_x)}__`;function wx(){let{router:n}=WE("useSubmit"),{basename:e}=B.useContext(fr),t=jC();return B.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=ZC(i,e);if(o.navigate===!1){let _=o.fetcherKey||Ex();await n.fetch(_,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function Tx(n,{relative:e}={}){let{basename:t}=B.useContext(fr),i=B.useContext(dr);nt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...xl(n||".",{relative:e})},h=Kr();if(n==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(_=>_==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let _=f.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Fr([t,l.pathname])),gl(l)}function Ix(n,{relative:e}={}){let t=B.useContext(LE);nt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=WE("useViewTransitionState"),o=xl(n,{relative:e});if(!t.isTransitioning)return!1;let l=Hr(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Hr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Lc(o.pathname,h)!=null||Lc(o.pathname,l)!=null}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Sx(n,e,t){return(e=Px(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Vv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function te(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vv(Object(t),!0).forEach(function(i){Sx(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Vv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ax(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Px(n){var e=Ax(n,"string");return typeof e=="symbol"?e:e+""}const Fv=()=>{};let Kp={},qE={},GE=null,KE={mark:Fv,measure:Fv};try{typeof window<"u"&&(Kp=window),typeof document<"u"&&(qE=document),typeof MutationObserver<"u"&&(GE=MutationObserver),typeof performance<"u"&&(KE=performance)}catch{}const{userAgent:Uv=""}=Kp.navigator||{},Fi=Kp,Xe=qE,jv=GE,nc=KE;Fi.document;const Qr=!!Xe.documentElement&&!!Xe.head&&typeof Xe.addEventListener=="function"&&typeof Xe.createElement=="function",QE=~Uv.indexOf("MSIE")||~Uv.indexOf("Trident/");var Rx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,kx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,YE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Cx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},XE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ht="classic",rh="duotone",xx="sharp",Nx="sharp-duotone",JE=[Ht,rh,xx,Nx],bx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ox={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Dx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Lx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Mx=["fak","fa-kit","fakd","fa-kit-duotone"],zv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vx=["kit"],Fx={kit:{"fa-kit":"fak"}},Ux=["fak","fakd"],jx={kit:{fak:"fa-kit"}},Bv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bx=["fak","fa-kit","fakd","fa-kit-duotone"],$x={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Hx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Wx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},bd={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},qx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Od=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...zx,...qx],Gx=["solid","regular","light","thin","duotone","brands"],ZE=[1,2,3,4,5,6,7,8,9,10],Kx=ZE.concat([11,12,13,14,15,16,17,18,19,20]),Qx=[...Object.keys(Wx),...Gx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rc.GROUP,rc.SWAP_OPACITY,rc.PRIMARY,rc.SECONDARY].concat(ZE.map(n=>"".concat(n,"x"))).concat(Kx.map(n=>"w-".concat(n))),Yx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Wr="___FONT_AWESOME___",Dd=16,ew="fa",tw="svg-inline--fa",Is="data-fa-i2svg",Ld="data-fa-pseudo-element",Xx="data-fa-pseudo-element-pending",Qp="data-prefix",Yp="data-icon",$v="fontawesome-i2svg",Jx="async",Zx=["HTML","HEAD","STYLE","SCRIPT"],nw=(()=>{try{return!0}catch{return!1}})();function Nl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Ht]}})}const rw=te({},YE);rw[Ht]=te(te(te(te({},{"fa-duotone":"duotone"}),YE[Ht]),zv.kit),zv["kit-duotone"]);const eN=Nl(rw),Md=te({},Lx);Md[Ht]=te(te(te(te({},{duotone:"fad"}),Md[Ht]),Bv.kit),Bv["kit-duotone"]);const Hv=Nl(Md),Vd=te({},bd);Vd[Ht]=te(te({},Vd[Ht]),jx.kit);const Xp=Nl(Vd),Fd=te({},Hx);Fd[Ht]=te(te({},Fd[Ht]),Fx.kit);Nl(Fd);const tN=Rx,iw="fa-layers-text",nN=kx,rN=te({},bx);Nl(rN);const iN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zf=Cx,sN=[...Vx,...Qx],sl=Fi.FontAwesomeConfig||{};function oN(n){var e=Xe.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function aN(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Xe&&typeof Xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const o=aN(oN(t));o!=null&&(sl[i]=o)});const sw={styleDefault:"solid",familyDefault:Ht,cssPrefix:ew,replacementClass:tw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sl.familyPrefix&&(sl.cssPrefix=sl.familyPrefix);const $o=te(te({},sw),sl);$o.autoReplaceSvg||($o.observeMutations=!1);const de={};Object.keys(sw).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){$o[n]=e,ol.forEach(t=>t(de))},get:function(){return $o[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){$o.cssPrefix=n,ol.forEach(e=>e(de))},get:function(){return $o.cssPrefix}});Fi.FontAwesomeConfig=de;const ol=[];function lN(n){return ol.push(n),()=>{ol.splice(ol.indexOf(n),1)}}const Ti=Dd,rr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uN(n){if(!n||!Qr)return;const e=Xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=Xe.head.childNodes;let i=null;for(let o=t.length-1;o>-1;o--){const l=t[o],h=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(i=l)}return Xe.head.insertBefore(e,i),n}const cN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yl(){let n=12,e="";for(;n-- >0;)e+=cN[Math.random()*62|0];return e}function Zo(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Jp(n){return n.classList?Zo(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function ow(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hN(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(ow(n[t]),'" '),"").trim()}function ih(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Zp(n){return n.size!==rr.size||n.x!==rr.x||n.y!==rr.y||n.rotate!==rr.rotate||n.flipX||n.flipY}function fN(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),h="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(h," ").concat(f)},y={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:p,path:y}}function dN(n){let{transform:e,width:t=Dd,height:i=Dd,startCentered:o=!1}=n,l="";return o&&QE?l+="translate(".concat(e.x/Ti-t/2,"em, ").concat(e.y/Ti-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Ti,"em), calc(-50% + ").concat(e.y/Ti,"em)) "):l+="translate(".concat(e.x/Ti,"em, ").concat(e.y/Ti,"em) "),l+="scale(".concat(e.size/Ti*(e.flipX?-1:1),", ").concat(e.size/Ti*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var pN=`:root, :host {
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
}`;function aw(){const n=ew,e=tw,t=de.cssPrefix,i=de.replacementClass;let o=pN;if(t!==n||i!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),h=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");o=o.replace(l,".".concat(t,"-")).replace(h,"--".concat(t,"-")).replace(f,".".concat(i))}return o}let Wv=!1;function ed(){de.autoAddCss&&!Wv&&(uN(aw()),Wv=!0)}var mN={mixout(){return{dom:{css:aw,insertCss:ed}}},hooks(){return{beforeDOMElementCreation(){ed()},beforeI2svg(){ed()}}}};const qr=Fi||{};qr[Wr]||(qr[Wr]={});qr[Wr].styles||(qr[Wr].styles={});qr[Wr].hooks||(qr[Wr].hooks={});qr[Wr].shims||(qr[Wr].shims=[]);var ir=qr[Wr];const lw=[],uw=function(){Xe.removeEventListener("DOMContentLoaded",uw),Mc=1,lw.map(n=>n())};let Mc=!1;Qr&&(Mc=(Xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xe.readyState),Mc||Xe.addEventListener("DOMContentLoaded",uw));function gN(n){Qr&&(Mc?setTimeout(n,0):lw.push(n))}function bl(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?ow(n):"<".concat(e," ").concat(hN(t),">").concat(i.map(bl).join(""),"</").concat(e,">")}function qv(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var td=function(e,t,i,o){var l=Object.keys(e),h=l.length,f=t,p,y,_;for(i===void 0?(p=1,_=e[l[0]]):(p=0,_=i);p<h;p++)y=l[p],_=f(_,e[y],y,e);return _};function yN(n){const e=[];let t=0;const i=n.length;for(;t<i;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<i){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((o&1023)<<10)+(l&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function Ud(n){const e=yN(n);return e.length===1?e[0].toString(16):null}function vN(n,e){const t=n.length;let i=n.charCodeAt(e),o;return i>=55296&&i<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function Gv(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function jd(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,o=Gv(e);typeof ir.hooks.addPack=="function"&&!i?ir.hooks.addPack(n,Gv(e)):ir.styles[n]=te(te({},ir.styles[n]||{}),o),n==="fas"&&jd("fa",e)}const{styles:vl,shims:_N}=ir,cw=Object.keys(Xp),EN=cw.reduce((n,e)=>(n[e]=Object.keys(Xp[e]),n),{});let em=null,hw={},fw={},dw={},pw={},mw={};function wN(n){return~sN.indexOf(n)}function TN(n,e){const t=e.split("-"),i=t[0],o=t.slice(1).join("-");return i===n&&o!==""&&!wN(o)?o:null}const gw=()=>{const n=i=>td(vl,(o,l,h)=>(o[h]=td(l,i,{}),o),{});hw=n((i,o,l)=>(o[3]&&(i[o[3]]=l),o[2]&&o[2].filter(f=>typeof f=="number").forEach(f=>{i[f.toString(16)]=l}),i)),fw=n((i,o,l)=>(i[l]=l,o[2]&&o[2].filter(f=>typeof f=="string").forEach(f=>{i[f]=l}),i)),mw=n((i,o,l)=>{const h=o[2];return i[l]=l,h.forEach(f=>{i[f]=l}),i});const e="far"in vl||de.autoFetchSvg,t=td(_N,(i,o)=>{const l=o[0];let h=o[1];const f=o[2];return h==="far"&&!e&&(h="fas"),typeof l=="string"&&(i.names[l]={prefix:h,iconName:f}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:h,iconName:f}),i},{names:{},unicodes:{}});dw=t.names,pw=t.unicodes,em=sh(de.styleDefault,{family:de.familyDefault})};lN(n=>{em=sh(n.styleDefault,{family:de.familyDefault})});gw();function tm(n,e){return(hw[n]||{})[e]}function IN(n,e){return(fw[n]||{})[e]}function vs(n,e){return(mw[n]||{})[e]}function yw(n){return dw[n]||{prefix:null,iconName:null}}function SN(n){const e=pw[n],t=tm("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ui(){return em}const vw=()=>({prefix:null,iconName:null,rest:[]});function AN(n){let e=Ht;const t=cw.reduce((i,o)=>(i[o]="".concat(de.cssPrefix,"-").concat(o),i),{});return JE.forEach(i=>{(n.includes(t[i])||n.some(o=>EN[i].includes(o)))&&(e=i)}),e}function sh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Ht}=e,i=eN[t][n];if(t===rh&&!n)return"fad";const o=Hv[t][n]||Hv[t][i],l=n in ir.styles?n:null;return o||l||null}function PN(n){let e=[],t=null;return n.forEach(i=>{const o=TN(de.cssPrefix,i);o?t=o:i&&e.push(i)}),{iconName:t,rest:e}}function Kv(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function oh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const o=Od.concat(Bx),l=Kv(n.filter(T=>o.includes(T))),h=Kv(n.filter(T=>!Od.includes(T))),f=l.filter(T=>(i=T,!XE.includes(T))),[p=null]=f,y=AN(l),_=te(te({},PN(h)),{},{prefix:sh(p,{family:y})});return te(te(te({},_),xN({values:n,family:y,styles:vl,config:de,canonical:_,givenPrefix:i})),RN(t,i,_))}function RN(n,e,t){let{prefix:i,iconName:o}=t;if(n||!i||!o)return{prefix:i,iconName:o};const l=e==="fa"?yw(o):{},h=vs(i,o);return o=l.iconName||h||o,i=l.prefix||i,i==="far"&&!vl.far&&vl.fas&&!de.autoFetchSvg&&(i="fas"),{prefix:i,iconName:o}}const kN=JE.filter(n=>n!==Ht||n!==rh),CN=Object.keys(bd).filter(n=>n!==Ht).map(n=>Object.keys(bd[n])).flat();function xN(n){const{values:e,family:t,canonical:i,givenPrefix:o="",styles:l={},config:h={}}=n,f=t===rh,p=e.includes("fa-duotone")||e.includes("fad"),y=h.familyDefault==="duotone",_=i.prefix==="fad"||i.prefix==="fa-duotone";if(!f&&(p||y||_)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&kN.includes(t)&&(Object.keys(l).find(A=>CN.includes(A))||h.autoFetchSvg)){const A=Dx.get(t).defaultShortPrefixId;i.prefix=A,i.iconName=vs(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||o==="fa")&&(i.prefix=Ui()||"fas"),i}class NN{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(l=>{this.definitions[l]=te(te({},this.definitions[l]||{}),o[l]),jd(l,o[l]);const h=Xp[Ht][l];h&&jd(h,o[l]),gw()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(o=>{const{prefix:l,iconName:h,icon:f}=i[o],p=f[2];e[l]||(e[l]={}),p.length>0&&p.forEach(y=>{typeof y=="string"&&(e[l][y]=f)}),e[l][h]=f}),e}}let Qv=[],Ro={};const Oo={},bN=Object.keys(Oo);function ON(n,e){let{mixoutsTo:t}=e;return Qv=n,Ro={},Object.keys(Oo).forEach(i=>{bN.indexOf(i)===-1&&delete Oo[i]}),Qv.forEach(i=>{const o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(l=>{typeof o[l]=="function"&&(t[l]=o[l]),typeof o[l]=="object"&&Object.keys(o[l]).forEach(h=>{t[l]||(t[l]={}),t[l][h]=o[l][h]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(h=>{Ro[h]||(Ro[h]=[]),Ro[h].push(l[h])})}i.provides&&i.provides(Oo)}),t}function zd(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),o=2;o<t;o++)i[o-2]=arguments[o];return(Ro[n]||[]).forEach(h=>{e=h.apply(null,[e,...i])}),e}function Ss(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Ro[n]||[]).forEach(l=>{l.apply(null,t)})}function ji(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oo[n]?Oo[n].apply(null,e):void 0}function Bd(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Ui();if(e)return e=vs(t,e)||e,qv(_w.definitions,t,e)||qv(ir.styles,t,e)}const _w=new NN,DN=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,Ss("noAuto")},LN={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qr?(Ss("beforeI2svg",n),ji("pseudoElements2svg",n),ji("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,gN(()=>{VN({autoReplaceSvgRoot:e}),Ss("watch",n)})}},MN={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:vs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=sh(n[0]);return{prefix:t,iconName:vs(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(tN))){const e=oh(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ui(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Ui();return{prefix:e,iconName:vs(e,n)||n}}}},dn={noAuto:DN,config:de,dom:LN,parse:MN,library:_w,findIconDefinition:Bd,toHtml:bl},VN=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Xe}=n;(Object.keys(ir.styles).length>0||de.autoFetchSvg)&&Qr&&de.autoReplaceSvg&&dn.dom.i2svg({node:e})};function ah(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>bl(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Qr)return;const t=Xe.createElement("div");return t.innerHTML=n.html,t.children}}),n}function FN(n){let{children:e,main:t,mask:i,attributes:o,styles:l,transform:h}=n;if(Zp(h)&&t.found&&!i.found){const{width:f,height:p}=t,y={x:f/p/2,y:.5};o.style=ih(te(te({},l),{},{"transform-origin":"".concat(y.x+h.x/16,"em ").concat(y.y+h.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function UN(n){let{prefix:e,iconName:t,children:i,attributes:o,symbol:l}=n;const h=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:te(te({},o),{},{id:h}),children:i}]}]}function nm(n){const{icons:{main:e,mask:t},prefix:i,iconName:o,transform:l,symbol:h,title:f,maskId:p,titleId:y,extra:_,watchable:T=!1}=n,{width:A,height:O}=t.found?t:e,H=Ux.includes(i),W=[de.replacementClass,o?"".concat(de.cssPrefix,"-").concat(o):""].filter(Ee=>_.classes.indexOf(Ee)===-1).filter(Ee=>Ee!==""||!!Ee).concat(_.classes).join(" ");let L={children:[],attributes:te(te({},_.attributes),{},{"data-prefix":i,"data-icon":o,class:W,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(O)})};const K=H&&!~_.classes.indexOf("fa-fw")?{width:"".concat(A/O*16*.0625,"em")}:{};T&&(L.attributes[Is]=""),f&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(y||yl())},children:[f]}),delete L.attributes.title);const Z=te(te({},L),{},{prefix:i,iconName:o,main:e,mask:t,maskId:p,transform:l,symbol:h,styles:te(te({},K),_.styles)}),{children:Q,attributes:ue}=t.found&&e.found?ji("generateAbstractMask",Z)||{children:[],attributes:{}}:ji("generateAbstractIcon",Z)||{children:[],attributes:{}};return Z.children=Q,Z.attributes=ue,h?UN(Z):FN(Z)}function Yv(n){const{content:e,width:t,height:i,transform:o,title:l,extra:h,watchable:f=!1}=n,p=te(te(te({},h.attributes),l?{title:l}:{}),{},{class:h.classes.join(" ")});f&&(p[Is]="");const y=te({},h.styles);Zp(o)&&(y.transform=dN({transform:o,startCentered:!0,width:t,height:i}),y["-webkit-transform"]=y.transform);const _=ih(y);_.length>0&&(p.style=_);const T=[];return T.push({tag:"span",attributes:p,children:[e]}),l&&T.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),T}function jN(n){const{content:e,title:t,extra:i}=n,o=te(te(te({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),l=ih(i.styles);l.length>0&&(o.style=l);const h=[];return h.push({tag:"span",attributes:o,children:[e]}),t&&h.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),h}const{styles:nd}=ir;function $d(n){const e=n[0],t=n[1],[i]=n.slice(4);let o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Zf.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:o}}const zN={found:!1,width:512,height:512};function BN(n,e){!nw&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Hd(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=Ui()),new Promise((i,o)=>{if(t==="fa"){const l=yw(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&nd[e]&&nd[e][n]){const l=nd[e][n];return i($d(l))}BN(n,e),i(te(te({},zN),{},{icon:de.showMissingIcons&&n?ji("missingIconAbstract")||{}:{}}))})}const Xv=()=>{},Wd=de.measurePerformance&&nc&&nc.mark&&nc.measure?nc:{mark:Xv,measure:Xv},Za='FA "6.7.2"',$N=n=>(Wd.mark("".concat(Za," ").concat(n," begins")),()=>Ew(n)),Ew=n=>{Wd.mark("".concat(Za," ").concat(n," ends")),Wd.measure("".concat(Za," ").concat(n),"".concat(Za," ").concat(n," begins"),"".concat(Za," ").concat(n," ends"))};var rm={begin:$N,end:Ew};const mc=()=>{};function Jv(n){return typeof(n.getAttribute?n.getAttribute(Is):null)=="string"}function HN(n){const e=n.getAttribute?n.getAttribute(Qp):null,t=n.getAttribute?n.getAttribute(Yp):null;return e&&t}function WN(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function qN(){return de.autoReplaceSvg===!0?gc.replace:gc[de.autoReplaceSvg]||gc.replace}function GN(n){return Xe.createElementNS("http://www.w3.org/2000/svg",n)}function KN(n){return Xe.createElement(n)}function ww(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?GN:KN}=e;if(typeof n=="string")return Xe.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(ww(l,{ceFn:t}))}),i}function QN(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const gc={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(ww(t),e)}),e.getAttribute(Is)===null&&de.keepOriginalSource){let t=Xe.createComment(QN(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Jp(e).indexOf(de.replacementClass))return gc.replace(n);const i=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((h,f)=>(f===de.replacementClass||f.match(i)?h.toSvg.push(f):h.toNode.push(f),h),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const o=t.map(l=>bl(l)).join(`
`);e.setAttribute(Is,""),e.innerHTML=o}};function Zv(n){n()}function Tw(n,e){const t=typeof e=="function"?e:mc;if(n.length===0)t();else{let i=Zv;de.mutateApproach===Jx&&(i=Fi.requestAnimationFrame||Zv),i(()=>{const o=qN(),l=rm.begin("mutate");n.map(o),l(),t()})}}let im=!1;function Iw(){im=!0}function qd(){im=!1}let Vc=null;function e_(n){if(!jv||!de.observeMutations)return;const{treeCallback:e=mc,nodeCallback:t=mc,pseudoElementsCallback:i=mc,observeMutationsRoot:o=Xe}=n;Vc=new jv(l=>{if(im)return;const h=Ui();Zo(l).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!Jv(f.addedNodes[0])&&(de.searchPseudoElements&&i(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&de.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&Jv(f.target)&&~iN.indexOf(f.attributeName))if(f.attributeName==="class"&&HN(f.target)){const{prefix:p,iconName:y}=oh(Jp(f.target));f.target.setAttribute(Qp,p||h),y&&f.target.setAttribute(Yp,y)}else WN(f.target)&&t(f.target)})}),Qr&&Vc.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function YN(){Vc&&Vc.disconnect()}function XN(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,o)=>{const l=o.split(":"),h=l[0],f=l.slice(1);return h&&f.length>0&&(i[h]=f.join(":").trim()),i},{})),t}function JN(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let o=oh(Jp(n));return o.prefix||(o.prefix=Ui()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=IN(o.prefix,n.innerText)||tm(o.prefix,Ud(n.innerText))),!o.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function ZN(n){const e=Zo(n.attributes).reduce((o,l)=>(o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(i||yl()):(e["aria-hidden"]="true",e.focusable="false")),e}function e2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:o}=JN(n),l=ZN(n),h=zd("parseNodeAttributes",{},n);let f=e.styleParser?XN(n):[];return te({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:rr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:l}},h)}const{styles:t2}=ir;function Sw(n){const e=de.autoReplaceSvg==="nest"?t_(n,{styleParser:!1}):t_(n);return~e.extra.classes.indexOf(iw)?ji("generateLayersText",n,e):ji("generateSvgReplacementMutation",n,e)}function n2(){return[...Mx,...Od]}function n_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qr)return Promise.resolve();const t=Xe.documentElement.classList,i=_=>t.add("".concat($v,"-").concat(_)),o=_=>t.remove("".concat($v,"-").concat(_)),l=de.autoFetchSvg?n2():XE.concat(Object.keys(t2));l.includes("fa")||l.push("fa");const h=[".".concat(iw,":not([").concat(Is,"])")].concat(l.map(_=>".".concat(_,":not([").concat(Is,"])"))).join(", ");if(h.length===0)return Promise.resolve();let f=[];try{f=Zo(n.querySelectorAll(h))}catch{}if(f.length>0)i("pending"),o("complete");else return Promise.resolve();const p=rm.begin("onTree"),y=f.reduce((_,T)=>{try{const A=Sw(T);A&&_.push(A)}catch(A){nw||A.name==="MissingIcon"&&console.error(A)}return _},[]);return new Promise((_,T)=>{Promise.all(y).then(A=>{Tw(A,()=>{i("active"),i("complete"),o("pending"),typeof e=="function"&&e(),p(),_()})}).catch(A=>{p(),T(A)})})}function r2(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sw(n).then(t=>{t&&Tw([t],e)})}function i2(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Bd(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:Bd(o||{})),n(i,te(te({},t),{},{mask:o}))}}const s2=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=rr,symbol:i=!1,mask:o=null,maskId:l=null,title:h=null,titleId:f=null,classes:p=[],attributes:y={},styles:_={}}=e;if(!n)return;const{prefix:T,iconName:A,icon:O}=n;return ah(te({type:"icon"},n),()=>(Ss("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(h?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(f||yl()):(y["aria-hidden"]="true",y.focusable="false")),nm({icons:{main:$d(O),mask:o?$d(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:A,transform:te(te({},rr),t),symbol:i,title:h,maskId:l,titleId:f,extra:{attributes:y,styles:_,classes:p}})))};var o2={mixout(){return{icon:i2(s2)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=n_,n.nodeCallback=r2,n}}},provides(n){n.i2svg=function(e){const{node:t=Xe,callback:i=()=>{}}=e;return n_(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:o,titleId:l,prefix:h,transform:f,symbol:p,mask:y,maskId:_,extra:T}=t;return new Promise((A,O)=>{Promise.all([Hd(i,h),y.iconName?Hd(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(H=>{let[W,L]=H;A([e,nm({icons:{main:W,mask:L},prefix:h,iconName:i,transform:f,symbol:p,maskId:_,title:o,titleId:l,extra:T,watchable:!0})])}).catch(O)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:o,transform:l,styles:h}=e;const f=ih(h);f.length>0&&(i.style=f);let p;return Zp(l)&&(p=ji("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),t.push(p||o.icon),{children:t,attributes:i}}}},a2={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return ah({type:"layer"},()=>{Ss("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(o=>{Array.isArray(o)?o.map(l=>{i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},l2={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:o={},styles:l={}}=e;return ah({type:"counter",content:n},()=>(Ss("beforeDOMElementCreation",{content:n,params:e}),jN({content:n.toString(),title:t,extra:{attributes:o,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...i]}})))}}}},u2={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=rr,title:i=null,classes:o=[],attributes:l={},styles:h={}}=e;return ah({type:"text",content:n},()=>(Ss("beforeDOMElementCreation",{content:n,params:e}),Yv({content:n,transform:te(te({},rr),t),title:i,extra:{attributes:l,styles:h,classes:["".concat(de.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:o,extra:l}=t;let h=null,f=null;if(QE){const p=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();h=y.width/p,f=y.height/p}return de.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,Yv({content:e.innerHTML,width:h,height:f,transform:o,title:i,extra:l,watchable:!0})])}}};const c2=new RegExp('"',"ug"),r_=[1105920,1112319],i_=te(te(te(te({},{FontAwesome:{normal:"fas",400:"fas"}}),Ox),Yx),$x),Gd=Object.keys(i_).reduce((n,e)=>(n[e.toLowerCase()]=i_[e],n),{}),h2=Object.keys(Gd).reduce((n,e)=>{const t=Gd[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function f2(n){const e=n.replace(c2,""),t=vN(e,0),i=t>=r_[0]&&t<=r_[1],o=e.length===2?e[0]===e[1]:!1;return{value:Ud(o?e[0]:e),isSecondary:i||o}}function d2(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),o=isNaN(i)?"normal":i;return(Gd[t]||{})[o]||h2[t]}function s_(n,e){const t="".concat(Xx).concat(e.replace(":","-"));return new Promise((i,o)=>{if(n.getAttribute(t)!==null)return i();const h=Zo(n.children).filter(A=>A.getAttribute(Ld)===e)[0],f=Fi.getComputedStyle(n,e),p=f.getPropertyValue("font-family"),y=p.match(nN),_=f.getPropertyValue("font-weight"),T=f.getPropertyValue("content");if(h&&!y)return n.removeChild(h),i();if(y&&T!=="none"&&T!==""){const A=f.getPropertyValue("content");let O=d2(p,_);const{value:H,isSecondary:W}=f2(A),L=y[0].startsWith("FontAwesome");let K=tm(O,H),Z=K;if(L){const Q=SN(H);Q.iconName&&Q.prefix&&(K=Q.iconName,O=Q.prefix)}if(K&&!W&&(!h||h.getAttribute(Qp)!==O||h.getAttribute(Yp)!==Z)){n.setAttribute(t,Z),h&&n.removeChild(h);const Q=e2(),{extra:ue}=Q;ue.attributes[Ld]=e,Hd(K,O).then(Ee=>{const Ae=nm(te(te({},Q),{},{icons:{main:Ee,mask:vw()},prefix:O,iconName:Z,extra:ue,watchable:!0})),x=Xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(x,n.firstChild):n.appendChild(x),x.outerHTML=Ae.map(I=>bl(I)).join(`
`),n.removeAttribute(t),i()}).catch(o)}else i()}else i()})}function p2(n){return Promise.all([s_(n,"::before"),s_(n,"::after")])}function m2(n){return n.parentNode!==document.head&&!~Zx.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Ld)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function o_(n){if(Qr)return new Promise((e,t)=>{const i=Zo(n.querySelectorAll("*")).filter(m2).map(p2),o=rm.begin("searchPseudoElements");Iw(),Promise.all(i).then(()=>{o(),qd(),e()}).catch(()=>{o(),qd(),t()})})}var g2={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=o_,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=Xe}=e;de.searchPseudoElements&&o_(t)}}};let a_=!1;var y2={mixout(){return{dom:{unwatch(){Iw(),a_=!0}}}},hooks(){return{bootstrap(){e_(zd("mutationObserverCallbacks",{}))},noAuto(){YN()},watch(n){const{observeMutationsRoot:e}=n;a_?qd():e_(zd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const l_=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const o=i.toLowerCase().split("-"),l=o[0];let h=o.slice(1).join("-");if(l&&h==="h")return t.flipX=!0,t;if(l&&h==="v")return t.flipY=!0,t;if(h=parseFloat(h),isNaN(h))return t;switch(l){case"grow":t.size=t.size+h;break;case"shrink":t.size=t.size-h;break;case"left":t.x=t.x-h;break;case"right":t.x=t.x+h;break;case"up":t.y=t.y-h;break;case"down":t.y=t.y+h;break;case"rotate":t.rotate=t.rotate+h;break}return t},e)};var v2={mixout(){return{parse:{transform:n=>l_(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=l_(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:o,iconWidth:l}=e;const h={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),p="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),y="rotate(".concat(i.rotate," 0 0)"),_={transform:"".concat(f," ").concat(p," ").concat(y)},T={transform:"translate(".concat(l/2*-1," -256)")},A={outer:h,inner:_,path:T};return{tag:"g",attributes:te({},A.outer),children:[{tag:"g",attributes:te({},A.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:te(te({},t.icon.attributes),A.path)}]}]}}}};const rd={x:0,y:0,width:"100%",height:"100%"};function u_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function _2(n){return n.tag==="g"?n.children:[n]}var E2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?oh(t.split(" ").map(o=>o.trim())):vw();return i.prefix||(i.prefix=Ui()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:o,mask:l,maskId:h,transform:f}=e;const{width:p,icon:y}=o,{width:_,icon:T}=l,A=fN({transform:f,containerWidth:_,iconWidth:p}),O={tag:"rect",attributes:te(te({},rd),{},{fill:"white"})},H=y.children?{children:y.children.map(u_)}:{},W={tag:"g",attributes:te({},A.inner),children:[u_(te({tag:y.tag,attributes:te(te({},y.attributes),A.path)},H))]},L={tag:"g",attributes:te({},A.outer),children:[W]},K="mask-".concat(h||yl()),Z="clip-".concat(h||yl()),Q={tag:"mask",attributes:te(te({},rd),{},{id:K,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,L]},ue={tag:"defs",children:[{tag:"clipPath",attributes:{id:Z},children:_2(T)},Q]};return t.push(ue,{tag:"rect",attributes:te({fill:"currentColor","clip-path":"url(#".concat(Z,")"),mask:"url(#".concat(K,")")},rd)}),{children:t,attributes:i}}}},w2={provides(n){let e=!1;Fi.matchMedia&&(e=Fi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:te(te({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=te(te({},o),{},{attributeName:"opacity"}),h={tag:"circle",attributes:te(te({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||h.children.push({tag:"animate",attributes:te(te({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:te(te({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(h),t.push({tag:"path",attributes:te(te({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:te(te({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:te(te({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:te(te({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},T2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},I2=[mN,o2,a2,l2,u2,g2,y2,v2,E2,w2,T2];ON(I2,{mixoutsTo:dn});dn.noAuto;dn.config;dn.library;dn.dom;const Kd=dn.parse;dn.findIconDefinition;dn.toHtml;const S2=dn.icon;dn.layer;dn.text;dn.counter;var id={exports:{}},sd,c_;function A2(){if(c_)return sd;c_=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sd=n,sd}var od,h_;function P2(){if(h_)return od;h_=1;var n=A2();function e(){}function t(){}return t.resetWarningCache=e,od=function(){function i(h,f,p,y,_,T){if(T!==n){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}i.isRequired=i;function o(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},od}var f_;function R2(){return f_||(f_=1,id.exports=P2()()),id.exports}var k2=R2();const xe=g_(k2);function d_(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function nr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?d_(Object(t),!0).forEach(function(i){ko(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d_(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Fc(n){"@babel/helpers - typeof";return Fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fc(n)}function ko(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function C2(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function x2(n,e){if(n==null)return{};var t=C2(n,e),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)i=l[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Qd(n){return N2(n)||b2(n)||O2(n)||D2()}function N2(n){if(Array.isArray(n))return Yd(n)}function b2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O2(n,e){if(n){if(typeof n=="string")return Yd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yd(n,e)}}function Yd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function D2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L2(n){var e,t=n.beat,i=n.fade,o=n.beatFade,l=n.bounce,h=n.shake,f=n.flash,p=n.spin,y=n.spinPulse,_=n.spinReverse,T=n.pulse,A=n.fixedWidth,O=n.inverse,H=n.border,W=n.listItem,L=n.flip,K=n.size,Z=n.rotation,Q=n.pull,ue=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":h,"fa-flash":f,"fa-spin":p,"fa-spin-reverse":_,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":A,"fa-inverse":O,"fa-border":H,"fa-li":W,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},ko(e,"fa-".concat(K),typeof K<"u"&&K!==null),ko(e,"fa-rotate-".concat(Z),typeof Z<"u"&&Z!==null&&Z!==0),ko(e,"fa-pull-".concat(Q),typeof Q<"u"&&Q!==null),ko(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(ue).map(function(Ee){return ue[Ee]?Ee:null}).filter(function(Ee){return Ee})}function M2(n){return n=n-0,n===n}function Aw(n){return M2(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var V2=["style"];function F2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function U2(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),o=Aw(t.slice(0,i)),l=t.slice(i+1).trim();return o.startsWith("webkit")?e[F2(o)]=l:e[o]=l,e},{})}function Pw(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(p){return Pw(n,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,y){var _=e.attributes[y];switch(y){case"class":p.attrs.className=_,delete e.attributes.class;break;case"style":p.attrs.style=U2(_);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=_:p.attrs[Aw(y)]=_}return p},{attrs:{}}),l=t.style,h=l===void 0?{}:l,f=x2(t,V2);return o.attrs.style=nr(nr({},o.attrs.style),h),n.apply(void 0,[e.tag,nr(nr({},o.attrs),f)].concat(Qd(i)))}var Rw=!1;try{Rw=!0}catch{}function j2(){if(!Rw&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function p_(n){if(n&&Fc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Kd.icon)return Kd.icon(n);if(n===null)return null;if(n&&Fc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function ad(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ko({},n,e):{}}var m_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},sm=y_.forwardRef(function(n,e){var t=nr(nr({},m_),n),i=t.icon,o=t.mask,l=t.symbol,h=t.className,f=t.title,p=t.titleId,y=t.maskId,_=p_(i),T=ad("classes",[].concat(Qd(L2(t)),Qd((h||"").split(" ")))),A=ad("transform",typeof t.transform=="string"?Kd.transform(t.transform):t.transform),O=ad("mask",p_(o)),H=S2(_,nr(nr(nr(nr({},T),A),O),{},{symbol:l,title:f,titleId:p,maskId:y}));if(!H)return j2("Could not find icon",_),null;var W=H.abstract,L={ref:e};return Object.keys(t).forEach(function(K){m_.hasOwnProperty(K)||(L[K]=t[K])}),z2(W[0],L)});sm.displayName="FontAwesomeIcon";sm.propTypes={beat:xe.bool,border:xe.bool,beatFade:xe.bool,bounce:xe.bool,className:xe.string,fade:xe.bool,flash:xe.bool,mask:xe.oneOfType([xe.object,xe.array,xe.string]),maskId:xe.string,fixedWidth:xe.bool,inverse:xe.bool,flip:xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xe.oneOfType([xe.object,xe.array,xe.string]),listItem:xe.bool,pull:xe.oneOf(["right","left"]),pulse:xe.bool,rotation:xe.oneOf([0,90,180,270]),shake:xe.bool,size:xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xe.bool,spinPulse:xe.bool,spinReverse:xe.bool,symbol:xe.oneOfType([xe.bool,xe.string]),title:xe.string,titleId:xe.string,transform:xe.oneOfType([xe.string,xe.object]),swapOpacity:xe.bool};var z2=Pw.bind(null,y_.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const B2={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]};function $2(){const{user:n}=fn();return j.jsxs("header",{className:"header",children:[j.jsx(Ri,{to:"/",className:"link",children:j.jsx("div",{className:"logo",children:"Multi Cinema"})}),j.jsxs("div",{className:"search",children:[j.jsxs(Ri,{to:"/my-films",className:"link my-watch",children:[j.jsx(sm,{icon:B2}),j.jsx("span",{children:"Мои фильмы"})]}),n?j.jsx(Ri,{to:"/profile",className:"link user",children:j.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"user__avatar",title:n.displayName})}):j.jsx(Ri,{to:"/profile",className:"link",children:"Войти"})]})]})}function H2(){var t;const{likedMovies:n}=fn(),e=n[n.length-1];return j.jsx(j.Fragment,{children:n.length>1&&j.jsx("section",{className:"continue-watch",children:j.jsxs("div",{className:"container",children:[j.jsx("h2",{className:"title-2",children:"Продолжить просмотр"}),j.jsxs("div",{className:"continue-watch__item",children:[j.jsx(Ri,{to:`/movie/${e.id}`,state:{data:e},className:"film__link",children:(t=e.poster)!=null&&t.url?j.jsx("img",{src:e.poster.url,alt:e.name,className:"continue-watch__poster"}):j.jsx("div",{className:"continue-watch__poster",children:"Not found"})}),j.jsx("h3",{className:"continue-watch__name film__name",children:e.name})]})]})})})}const Ur=["0ZYHMMB-0PK4KA6-Q98FNTP-8XYEN0B","HCF37A2-V3HMP2C-Q5JFH12-HP164ZR","G8REABY-1JJM9JE-NFH2A9H-Q2A36EY","R2B4B27-4G8M3HT-GT1TMFA-JM0QG10","4P9RGZ9-0QBM11G-GY2A4JG-44FF306","RJKDTJT-1HDM3FX-NGWJ4T8-KHQMWQF","41AQJTS-HXNM9CK-KJ8REHP-284Q8GZ","8MBXH6M-W3M43YM-HV7T7HN-XJQJE83","T2SGZKA-DYJ4K85-Q070520-D3YA3XG","YX89AQD-1JVMCJ4-M8RG3KK-VBPYRJC","VR6TBA5-NT0MCJJ-GK49GZ4-TAYGGW0","FCE2VJ9-C2K4Z3C-MVJGV8V-XEGG0AW","2TMGQFT-AJZ4R8W-JTR4RQA-XYBEM50","56PJR4X-SG5M5K8-QX04GKP-SPFN41S","W2RBCG6-XPWM7S9-GY34VT4-1MSVB9K","QA9F6D2-CPF4P5P-PSCK2VH-QXNXX7H","T89S8JR-Y5343QN-HCRHHVV-KATN0A8","H57DR0Y-AF04JM8-JNX8B57-TTA4XS6","ENY9588-TYQ4MR0-HSG1Z8G-PHWMK98","V51QHR8-FA8MCCE-MDMH6GA-28H6A0Y","D4526KJ-D0WM93V-KFK9H7T-VPKK17K","5MHJKGM-MQ7MNRM-JCTY8A5-BXKXJ2P","X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB","2RGCGGC-0AWMZ0M-J32EMAV-6JW3YZ3","68W27N1-8NF4JP3-P6B51RS-FT0N5AC","7KA28B8-JP44HG0-Q43HR6N-VRN6AJ1","67N84PZ-HPAMZ6R-MJH9SFD-VTMYSAC","78HNYJZ-HQPM56Z-JWN92NH-FG7ZRDQ","3SVTEEX-Y8HMTYJ-J3ENEFG-WC1N623","5QVH807-GAP49T6-QY0P863-EQW1F83","220FRRR-ZF0M9VE-JTNC41C-FSB7ATX","F6QX0P1-FQTMPFY-PWNT126-KXFHWZK","84S4SNX-Y084WMK-K7FV73W-8G8P6MH","5HY9A2G-Z6PM1C1-M7Q5YFG-D23RKER"],kw=async(n,e,t,i,o=1)=>{function l(f){t(p=>({...p,actual:f.page,all:f.pages}))}let h;for(let f=0;f<Ur.length;f++)try{const p={method:"GET",headers:{accept:"application/json","X-API-KEY":Ur[f]}},y=await fetch("https://api.kinopoisk.dev/v1.3/movie?"+new URLSearchParams({page:o.toString(),limit:"25",sortField:"votes.imdb",sortType:"-1",name:n}),p);if(!y.ok){if(y.status===401||y.status===403){console.log(`API key ${f} failed, trying next key...`);continue}throw new Error(`API request failed with status ${y.status}`)}h=await y.json();break}catch(p){if(console.error(`Error with API key ${f}:`,p),f===Ur.length-1)throw new Error("All API keys failed")}h&&(l(h),e(h.docs)),i(!1)},W2=async(n,e,t)=>{for(let i=0;i<Ur.length;i++)try{const o={method:"GET",headers:{accept:"application/json","X-API-KEY":Ur[i]}},l=await fetch(`https://api.kinopoisk.dev/v1.4/movie/${n}`,o);if(!l.ok){if(l.status===401||l.status===403){console.log(`API key ${i} failed, trying next key...`);continue}throw new Error(`API request failed with status ${l.status}`)}const h=await l.json();e(h),t(!1);return}catch(o){if(console.error(`Error with API key ${i}:`,o),i===Ur.length-1)throw t(!1),new Error("All API keys failed")}},q2=async(n,e)=>{for(let t=0;t<Ur.length;t++)try{const i={method:"GET",headers:{accept:"application/json","X-API-KEY":Ur[t]}},[o,l]=await Promise.all([fetch("https://api.kinopoisk.dev/v1.4/movie?"+new URLSearchParams({page:"1",limit:"25",sortField:"votes.await",sortType:"-1","votes.await":"1000-6666666",year:new Date().getFullYear(),status:"completed"}),i),fetch("https://api.kinopoisk.dev/v1.4/movie?"+new URLSearchParams({page:"1",limit:"25",sortField:"votes.imdb",sortType:"-1",isSeries:"true",year:`${new Date().getFullYear()-5}-${new Date().getFullYear()}`}),i)]);if(!o.ok||!l.ok){if(o.status===401||o.status===403||l.status===401||l.status===403){console.log(`API key ${t} failed, trying next key...`);continue}throw new Error(`API request failed with status ${o.status}/${l.status}`)}const h=await o.json(),f=await l.json();n([h.docs,f.docs]),e(!1);return}catch(i){if(console.error(`Error with API key ${t}:`,i),t===Ur.length-1)throw e(!1),new Error("All API keys failed")}};function Cw({}){const{setFilmName:n,setData:e,setPages:t,setIsLoading:i}=fn(),[o,l]=B.useState(""),h=FE(),f=B.useCallback(p=>{p.preventDefault(),i(!0),n(o),kw(o,e,t,i),h("/search-result")},[o,n,e,t,i,h]);return j.jsx("section",{className:"search-form",children:j.jsx("div",{className:"container",children:j.jsxs("form",{className:"form",onSubmit:f,children:[j.jsx("input",{className:"form__input",type:"text",value:o,placeholder:"Поиск",onChange:p=>l(p.target.value)}),j.jsx("button",{className:"form__btn",children:"Искать"})]})})})}const G2="/milti-cinema-react/assets/loader-Q1L3BIgD.gif",Ho=B.memo(function({film:e}){var p,y;const{likedMovies:t,toggleLike:i}=fn(),[o,l]=B.useState(!0),h=B.useCallback(()=>{i(e)},[e,i]),f=B.useCallback(()=>{l(!1)},[]);return j.jsxs("div",{className:"film","data-id":e.id,children:[j.jsxs(Ri,{to:`/movie/${e.id}`,state:{data:e},className:"film__link",children:[o&&((p=e.poster)==null?void 0:p.previewUrl)&&j.jsx("div",{className:"film__img--preloader-wrapper",children:j.jsx("img",{className:"film__img--preloader",src:G2,alt:"Loading..."})}),(y=e.poster)!=null&&y.previewUrl?j.jsx("img",{className:"film__img",src:e.poster.previewUrl,alt:e.name,style:{display:o?"none":"block"},onLoad:f}):j.jsx("div",{className:"film__img",children:"Not found"})]}),j.jsx("h3",{className:"film__name",children:e.name}),j.jsx("button",{onClick:h,className:"film__like",children:t.some(_=>_.id===e.id)?"❤️":"🤍"})]})}),K2=B.memo(function(){const{collections:e,setCollections:t}=fn(),{isLoading:i,setIsLoading:o}=Bp();return B.useEffect(()=>{if(e.length>0)return o(!1);q2(t,o)},[e]),j.jsx("section",{className:"film-collections",children:j.jsx("div",{className:"container",children:!i&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"collections collections-serials",children:[j.jsx("h2",{className:"title-2",children:"Популярные сериалы"}),j.jsx("div",{className:"collections__wrapper",children:e[1].map(l=>l.poster&&l.poster.previewUrl&&j.jsx(Ho,{film:l},l.id))})]}),j.jsxs("div",{className:"collections collections-new",children:[j.jsx("h2",{className:"title-2",children:"Ожидаемые"}),j.jsx("div",{className:"collections__wrapper",children:e[0].map(l=>l.poster&&l.poster.previewUrl&&j.jsx(Ho,{film:l},l.id))})]})]})})})});function Q2(){return j.jsxs("main",{className:"main",children:[j.jsx(H2,{}),j.jsx(Cw,{}),j.jsx(K2,{})]})}function Y2(){const{filmName:n,setData:e,pages:t,setPages:i,setIsLoading:o}=fn(),l=B.useCallback(p=>{o(!0),kw(n,e,i,o,p),window.scrollTo(0,0)}),h=B.useMemo(()=>{const p=[1],y=(t==null?void 0:t.actual)||1,_=(t==null?void 0:t.all)||1;if(y<4)for(let T=2,A=0;T<_&&A<3;T++,A++)p.push(T);else{y-1<2&&p.push("..."),p.push("...");for(let T=y-1,A=0;T<_&&A<3;T++,A++)p.push(T)}return _-y>2&&p.push("..."),_!==1&&p.push(_),p},[t==null?void 0:t.actual,t==null?void 0:t.all]),f=B.useCallback(p=>{l(p)},[l]);return j.jsx(j.Fragment,{children:j.jsx("div",{className:"pagination",children:j.jsx("ul",{className:"pagination__list",children:h.map((p,y)=>p==="..."?j.jsx("li",{className:"pagination__item",children:"..."},`ellipsis-${y}`):p!==t.actual?j.jsx("li",{className:"pagination__item",children:j.jsx("button",{className:"pagination__btn",onClick:()=>f(p),children:p})},`page-${p}`):j.jsx("li",{className:"pagination__item",children:j.jsx("button",{className:"pagination__btn active",children:p})},`active-${p}`))})})})}function X2(){const{data:n,isLoading:e}=fn();return e?j.jsx("div",{className:"film-list",children:"Загрузка фильмов..."}):j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"film-list",children:n.map(t=>j.jsx(Ho,{film:t},t.id))}),j.jsx(Y2,{})]})}function J2({}){const{data:n}=fn();return j.jsx("section",{className:"search-res",children:j.jsx("div",{className:"container",children:j.jsxs("div",{className:"search-res__items",children:[j.jsx(Cw,{}),n.length>0&&j.jsx(X2,{})]})})})}function Z2({kpId:n}){const{link:e,setLink:t}=fn();B.useEffect(()=>{i()},[]);const i=async()=>{const o={method:"GET",headers:{accept:"application/json"}},l=await fetch("https://api1573848848.apicollaps.cc/franchise/details?"+new URLSearchParams({token:"eedefb541aeba871dcfc756e6b31c02e",kinopoisk_id:n}),o);let h=await l.json();h&&(console.log(l,h),t(h.iframe_url))};return j.jsx("div",{className:"kinobox_player movie__player",children:j.jsx("iframe",{id:"inlineFrameExample",title:"Inline Frame Map",width:"100%",height:"600px",frameborder:"1",allowfullscreen:"true",src:e})})}const eb=B.memo(function(){var f,p;const e=Kr(),{film:t,setFilm:i}=fn(),{isLoading:o,setIsLoading:l}=Bp(),{id:h}=xC();return B.useEffect(()=>{W2(h,i,l)},[e.state]),o?j.jsx("div",{children:"Загрузка..."}):j.jsx(j.Fragment,{children:j.jsxs("section",{className:"movie","data-id":t.id,children:[t.backdrop&&t.backdrop.url&&t.logo&&t.logo.previewUrl?j.jsx(j.Fragment,{children:j.jsxs("div",{className:"movie__backdrop",children:[j.jsx("img",{className:"movie__backdrop--img",src:t.backdrop.url,alt:t.name}),j.jsx("img",{className:"movie__backdrop--logo",src:t.logo.previewUrl,alt:t.name})]})}):(f=t.backdrop)!=null&&f.url?j.jsx(j.Fragment,{children:j.jsxs("div",{className:"movie__backdrop",children:[j.jsx("img",{className:"movie__backdrop--img",src:t.backdrop.url,alt:t.name}),j.jsx("h3",{className:"movie__backdrop--name",children:t.name})]})}):(p=t.logo)!=null&&p.previewUrl?j.jsx(j.Fragment,{children:j.jsx("div",{className:"movie__backdrop",children:j.jsx("img",{className:"movie__backdrop--logo",src:t.logo.previewUrl,alt:t.name})})}):j.jsx(j.Fragment,{children:j.jsx("div",{className:"movie__backdrop",children:j.jsx("h3",{className:"movie__backdrop--name",children:t.name})})}),j.jsxs("div",{className:"movie__container",children:[j.jsxs("div",{className:"movie__info",children:[t.poster&&t.poster.previewUrl&&j.jsx("img",{className:"movie__img",src:t.poster.previewUrl,alt:t.name}),j.jsxs("div",{className:"movie__info--wrapper",children:[t.year&&j.jsxs("div",{className:"movie__year",children:["Год выхода: ",t.year," г."]}),t.genres.length>0&&j.jsxs("div",{className:"movie__genres",children:["Жанры: ",t.genres.map(y=>`${y.name} `)]}),!!t.movieLength&&j.jsxs("div",{className:"movie__movieLength",children:["Продолжительность: ",t.movieLength," мин."]}),t.rating.imdb!==0&&j.jsxs("div",{className:"movie__rating",children:["Рейтинг: ",t.rating.imdb]}),!!t.ageRating&&j.jsxs("div",{className:"movie__ageRating",children:["Возрастной рейтинг: ",t.ageRating,"+"]}),!!t.description&&j.jsx("div",{className:"movie__description",children:t.description})]})]}),j.jsx(Z2,{kpId:t.id}),t.sequelsAndPrequels&&t.sequelsAndPrequels.length>0&&j.jsxs("div",{className:"movie__sequels",children:[j.jsx("h3",{className:"movie__sequels--title",children:"Сиквелы/Приквелы"}),j.jsx("div",{className:"movie__list collections__wrapper",children:t.sequelsAndPrequels.map(y=>j.jsx(Ho,{film:y},y.id))})]}),t.similarMovies&&t.similarMovies.length>0&&j.jsxs("div",{className:"movie__similar",children:[j.jsx("h3",{className:"movie__similar--title",children:"Похожие фильмы"}),j.jsx("div",{className:"movie__list collections__wrapper",children:t.similarMovies.map(y=>j.jsx(Ho,{film:y},y.id))})]})]})]})})});function xw(){const{user:n}=fn();return j.jsx("div",{className:"auth",children:n?j.jsx("button",{className:"profile__btn",onClick:$k,children:"Выйти"}):j.jsx("button",{className:"profile__btn",onClick:Bk,children:"Войти через Google"})})}function tb(){const{user:n,likedMovies:e,toggleLike:t}=fn();return console.log(e),j.jsx("section",{className:"my-films",children:j.jsx("div",{className:"container",children:n?j.jsxs(j.Fragment,{children:[j.jsx("h2",{className:"title-2",children:"Вы смотрите"}),j.jsx("div",{className:"my-films__items",children:e.map(i=>j.jsx(Ho,{film:i,toggleLike:t},i.id))})]}):j.jsxs(j.Fragment,{children:[j.jsx("div",{children:"Вы не авторизованы"}),j.jsx(xw,{user:n})]})})})}function nb(){const{user:n}=fn();return j.jsx("section",{className:"profile-page",children:j.jsx("div",{className:"container",children:j.jsxs("div",{className:"profile",children:[n?j.jsxs(j.Fragment,{children:[j.jsx("img",{src:n.photoURL,alt:"user-avatar",className:"profile__avatar"}),j.jsx("div",{className:"profile__name",children:n.displayName}),j.jsx("div",{className:"profile__email",children:n.email})]}):j.jsx("div",{children:"Вы не авторизованы"}),j.jsx(xw,{})]})})})}function rb(){const n=()=>{const{pathname:e}=Kr();return B.useLayoutEffect(()=>{window.scrollTo(0,0)},[e]),null};return j.jsxs(px,{basename:"/milti-cinema-react/",children:[j.jsx(n,{}),j.jsxs("div",{className:"App",children:[j.jsx($2,{}),j.jsxs(WC,{children:[j.jsx(Po,{path:"/",element:j.jsx(Q2,{})}),j.jsx(Po,{path:"/profile",element:j.jsx(nb,{})}),j.jsx(Po,{path:"/search-result",element:j.jsx(J2,{})}),j.jsx(Po,{path:"/movie/:id",element:j.jsx(eb,{})}),j.jsx(Po,{path:"/my-films",element:j.jsx(tb,{})})]})]})]})}BT.createRoot(document.getElementById("root")).render(j.jsx(eC,{children:j.jsx(rb,{})}));
