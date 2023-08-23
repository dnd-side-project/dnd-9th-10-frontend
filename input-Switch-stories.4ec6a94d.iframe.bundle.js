/*! For license information please see input-Switch-stories.4ec6a94d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dnd9_10_webui=self.webpackChunk_dnd9_10_webui||[]).push([[3202],{"../../../node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"../../../node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./src/input/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/input/Switch.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch_module.Z,options);const input_Switch_module=Switch_module.Z&&Switch_module.Z.locals?Switch_module.Z.locals:void 0;var esm_extends=__webpack_require__("../../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/react/index.js"),dist=__webpack_require__("../../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("../../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_use_previous_dist=__webpack_require__("../../../node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_use_size_dist=__webpack_require__("../../../node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react.createElement)(react_primitive_dist.WV.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,dist.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist.D)(checked),controlSize=(0,react_use_size_dist.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106;var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function Switch(props){const{className}=props;return(0,jsx_runtime.jsx)($6be4966fd9bbc698$export$be92b6f5f03c0fe9,{className:classnames_default()(input_Switch_module.wrap,input_Switch_module.SwitchRoot,className),id:"airplane-mode",children:(0,jsx_runtime.jsx)($6be4966fd9bbc698$export$6521433ed15a34db,{className:input_Switch_module.SwitchThumb})})}Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/input/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const Switch_stories={component:Switch,title:"input/Switch",argTypes:{}},Template=args=>(0,jsx_runtime.jsx)(Switch,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"../../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../../node_modules/@radix-ui/colors/black-alpha.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root {\n  --black-a1: hsla(0, 0%, 0%, 0.012);\n  --black-a2: hsla(0, 0%, 0%, 0.024);\n  --black-a3: hsla(0, 0%, 0%, 0.055);\n  --black-a4: hsla(0, 0%, 0%, 0.078);\n  --black-a5: hsla(0, 0%, 0%, 0.106);\n  --black-a6: hsla(0, 0%, 0%, 0.133);\n  --black-a7: hsla(0, 0%, 0%, 0.169);\n  --black-a8: hsla(0, 0%, 0%, 0.267);\n  --black-a9: hsla(0, 0%, 0%, 0.447);\n  --black-a10: hsla(0, 0%, 0%, 0.498);\n  --black-a11: hsla(0, 0%, 0%, 0.608);\n  --black-a12: hsla(0, 0%, 0%, 0.875);\n}","",{version:3,sources:["webpack://./../../../node_modules/@radix-ui/colors/black-alpha.css"],names:[],mappings:"AAAA;EACE,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,kCAAkC;EAClC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;AACrC",sourcesContent:[":root {\n  --black-a1: hsla(0, 0%, 0%, 0.012);\n  --black-a2: hsla(0, 0%, 0%, 0.024);\n  --black-a3: hsla(0, 0%, 0%, 0.055);\n  --black-a4: hsla(0, 0%, 0%, 0.078);\n  --black-a5: hsla(0, 0%, 0%, 0.106);\n  --black-a6: hsla(0, 0%, 0%, 0.133);\n  --black-a7: hsla(0, 0%, 0%, 0.169);\n  --black-a8: hsla(0, 0%, 0%, 0.267);\n  --black-a9: hsla(0, 0%, 0%, 0.447);\n  --black-a10: hsla(0, 0%, 0%, 0.498);\n  --black-a11: hsla(0, 0%, 0%, 0.608);\n  --black-a12: hsla(0, 0%, 0%, 0.875);\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/input/Switch.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_radix_ui_colors_black_alpha_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../../node_modules/@radix-ui/colors/black-alpha.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_radix_ui_colors_black_alpha_css__WEBPACK_IMPORTED_MODULE_2__.Z),___CSS_LOADER_EXPORT___.push([module.id,'.S0M1l4Ju6wP81z64E1FQ {\n}\n\n/* reset */\nbutton {\n  all: unset;\n}\n\n.w6j6YGyqehsNiIp0KOUh {\n  width: 42px;\n  height: 25px;\n  background-color: var(--black-a9);\n  border-radius: 9999px;\n  position: relative;\n  box-shadow: 0 2px 10px var(--black-a7);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w6j6YGyqehsNiIp0KOUh:focus {\n  /* box-shadow: 0 0 0 2px #299a9a; */\n}\n.w6j6YGyqehsNiIp0KOUh[data-state="checked"] {\n  background-color: #299a9a;\n}\n\n.YW8eb8X35OrdFewA_A9h {\n  display: block;\n  width: 21px;\n  height: 21px;\n  background-color: white;\n  border-radius: 9999px;\n  box-shadow: 0 2px 2px var(--black-a7);\n  transition: transform 100ms;\n  transform: translateX(2px);\n  will-change: transform;\n}\n.YW8eb8X35OrdFewA_A9h[data-state="checked"] {\n  transform: translateX(19px);\n}\n\n.jhdu4aLgHRhUYQpClAdf {\n  color: white;\n  font-size: 15px;\n  line-height: 1;\n}\n',"",{version:3,sources:["webpack://./src/input/Switch.module.css"],names:[],mappings:"AAEA;AACA;;AAEA,UAAU;AACV;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,qBAAqB;EACrB,kBAAkB;EAClB,sCAAsC;EACtC,6CAA6C;AAC/C;AACA;EACE,mCAAmC;AACrC;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,qBAAqB;EACrB,qCAAqC;EACrC,2BAA2B;EAC3B,0BAA0B;EAC1B,sBAAsB;AACxB;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;AAChB",sourcesContent:['@import "@radix-ui/colors/black-alpha.css";\n\n.wrap {\n}\n\n/* reset */\nbutton {\n  all: unset;\n}\n\n.SwitchRoot {\n  width: 42px;\n  height: 25px;\n  background-color: var(--black-a9);\n  border-radius: 9999px;\n  position: relative;\n  box-shadow: 0 2px 10px var(--black-a7);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.SwitchRoot:focus {\n  /* box-shadow: 0 0 0 2px #299a9a; */\n}\n.SwitchRoot[data-state="checked"] {\n  background-color: #299a9a;\n}\n\n.SwitchThumb {\n  display: block;\n  width: 21px;\n  height: 21px;\n  background-color: white;\n  border-radius: 9999px;\n  box-shadow: 0 2px 2px var(--black-a7);\n  transition: transform 100ms;\n  transform: translateX(2px);\n  will-change: transform;\n}\n.SwitchThumb[data-state="checked"] {\n  transform: translateX(19px);\n}\n\n.Label {\n  color: white;\n  font-size: 15px;\n  line-height: 1;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"S0M1l4Ju6wP81z64E1FQ",SwitchRoot:"w6j6YGyqehsNiIp0KOUh",SwitchThumb:"YW8eb8X35OrdFewA_A9h",Label:"jhdu4aLgHRhUYQpClAdf"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);