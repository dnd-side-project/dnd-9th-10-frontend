/*! For license information please see 6847.fb26b203.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dnd9_10_webui=self.webpackChunk_dnd9_10_webui||[]).push([[6847],{"../../../node_modules/@radix-ui/react-checkbox/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{fC:()=>$e698a72e93240346$export$be92b6f5f03c0fe9,z$:()=>$e698a72e93240346$export$adb584737d712b70});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/@radix-ui/react-use-previous/dist/index.mjs"),_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/@radix-ui/react-use-size/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$e698a72e93240346$var$createCheckboxContext,$e698a72e93240346$export$b566c4ff5488ea01]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Checkbox"),[$e698a72e93240346$var$CheckboxProvider,$e698a72e93240346$var$useCheckboxContext]=$e698a72e93240346$var$createCheckboxContext("Checkbox"),$e698a72e93240346$export$48513f6b9f8ce62d=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...checkboxProps}=props,[button,setButton]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),initialCheckedStateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(checked);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const form=null==button?void 0:button.form;if(form){const reset=()=>setChecked(initialCheckedStateRef.current);return form.addEventListener("reset",reset),()=>form.removeEventListener("reset",reset)}}),[button,setChecked]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($e698a72e93240346$var$CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.WV.button,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"button",role:"checkbox","aria-checked":$e698a72e93240346$var$isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":$e698a72e93240346$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},checkboxProps,{ref:composedRefs,onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()})),onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onClick,(event=>{setChecked((prevChecked=>!!$e698a72e93240346$var$isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($e698a72e93240346$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$e698a72e93240346$export$59aad738f51d1c05=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,forceMount,...indicatorProps}=props,context=$e698a72e93240346$var$useCheckboxContext("CheckboxIndicator",__scopeCheckbox);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_7__.z,{present:forceMount||$e698a72e93240346$var$isIndeterminate(context.state)||!0===context.state},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({"data-state":$e698a72e93240346$var$getState(context.state),"data-disabled":context.disabled?"":void 0},indicatorProps,{ref:forwardedRef,style:{pointerEvents:"none",...props.style}})))})),$e698a72e93240346$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_8__.D)(checked),controlSize=(0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_9__.t)(control);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=$e698a72e93240346$var$isIndeterminate(checked),setChecked.call(input,!$e698a72e93240346$var$isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!$e698a72e93240346$var$isIndeterminate(checked)&&checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $e698a72e93240346$var$isIndeterminate(checked){return"indeterminate"===checked}function $e698a72e93240346$var$getState(checked){return $e698a72e93240346$var$isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}const $e698a72e93240346$export$be92b6f5f03c0fe9=$e698a72e93240346$export$48513f6b9f8ce62d,$e698a72e93240346$export$adb584737d712b70=$e698a72e93240346$export$59aad738f51d1c05},"../../../node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"../../../node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"../../../node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"../../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);