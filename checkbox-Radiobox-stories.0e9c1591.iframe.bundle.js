"use strict";(self.webpackChunk_dnd9_10_webui=self.webpackChunk_dnd9_10_webui||[]).push([[973],{"../../../node_modules/@radix-ui/react-checkbox/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>$e698a72e93240346$export$adb584737d712b70,fC:()=>$e698a72e93240346$export$be92b6f5f03c0fe9});var esm_extends=__webpack_require__("../../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../../node_modules/react/index.js"),dist=__webpack_require__("../../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("../../../node_modules/@radix-ui/react-context/dist/index.mjs"),primitive_dist=__webpack_require__("../../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");var react_use_layout_effect_dist=__webpack_require__("../../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");var react_presence_dist=__webpack_require__("../../../node_modules/@radix-ui/react-presence/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$e698a72e93240346$var$createCheckboxContext,$e698a72e93240346$export$b566c4ff5488ea01]=(0,react_context_dist.b)("Checkbox"),[$e698a72e93240346$var$CheckboxProvider,$e698a72e93240346$var$useCheckboxContext]=$e698a72e93240346$var$createCheckboxContext("Checkbox"),$e698a72e93240346$export$48513f6b9f8ce62d=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...checkboxProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,dist.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),initialCheckedStateRef=(0,react.useRef)(checked);return(0,react.useEffect)((()=>{const form=null==button?void 0:button.form;if(form){const reset=()=>setChecked(initialCheckedStateRef.current);return form.addEventListener("reset",reset),()=>form.removeEventListener("reset",reset)}}),[button,setChecked]),(0,react.createElement)($e698a72e93240346$var$CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled},(0,react.createElement)(react_primitive_dist.WV.button,(0,esm_extends.Z)({type:"button",role:"checkbox","aria-checked":$e698a72e93240346$var$isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":$e698a72e93240346$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},checkboxProps,{ref:composedRefs,onKeyDown:(0,primitive_dist.M)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()})),onClick:(0,primitive_dist.M)(props.onClick,(event=>{setChecked((prevChecked=>!!$e698a72e93240346$var$isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($e698a72e93240346$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$e698a72e93240346$export$59aad738f51d1c05=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCheckbox,forceMount,...indicatorProps}=props,context=$e698a72e93240346$var$useCheckboxContext("CheckboxIndicator",__scopeCheckbox);return(0,react.createElement)(react_presence_dist.z,{present:forceMount||$e698a72e93240346$var$isIndeterminate(context.state)||!0===context.state},(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({"data-state":$e698a72e93240346$var$getState(context.state),"data-disabled":context.disabled?"":void 0},indicatorProps,{ref:forwardedRef,style:{pointerEvents:"none",...props.style}})))})),$e698a72e93240346$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react.useRef)({value,previous:value});return(0,react.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}(checked),controlSize=function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react.useState)(void 0);return(0,react_use_layout_effect_dist.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=$e698a72e93240346$var$isIndeterminate(checked),setChecked.call(input,!$e698a72e93240346$var$isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!$e698a72e93240346$var$isIndeterminate(checked)&&checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $e698a72e93240346$var$isIndeterminate(checked){return"indeterminate"===checked}function $e698a72e93240346$var$getState(checked){return $e698a72e93240346$var$isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}const $e698a72e93240346$export$be92b6f5f03c0fe9=$e698a72e93240346$export$48513f6b9f8ce62d,$e698a72e93240346$export$adb584737d712b70=$e698a72e93240346$export$59aad738f51d1c05},"./src/checkbox/Radiobox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Radiobox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/checkbox/Radiobox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Radiobox__WEBPACK_IMPORTED_MODULE_0__.H,title:"checkbox/Radiobox",argTypes:{}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Radiobox__WEBPACK_IMPORTED_MODULE_0__.H,{...args,checked:!0});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Radiobox {...args} checked={true} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/checkbox/Radiobox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Radiobox,Z:()=>checkbox_Radiobox});var classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Radiobox_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/checkbox/Radiobox.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Radiobox_module.Z,options);const checkbox_Radiobox_module=Radiobox_module.Z&&Radiobox_module.Z.locals?Radiobox_module.Z.locals:void 0;var dist=__webpack_require__("../../../node_modules/@radix-ui/react-checkbox/dist/index.mjs"),react=__webpack_require__("../../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function Radiobox(props){const{className}=props,[checked,setChecked]=(0,react.useState)("indeterminate");return(0,react.useEffect)((()=>{setChecked(props.checked)}),[props.checked]),(0,jsx_runtime.jsx)(dist.fC,{className:classnames_default()(checkbox_Radiobox_module.wrap,className),checked,children:(0,jsx_runtime.jsx)(dist.z$,{className:"CheckboxIndicator",children:!0===checked&&(0,jsx_runtime.jsx)("div",{className:checkbox_Radiobox_module.checked})})})}Radiobox.displayName="Radiobox";const checkbox_Radiobox=Radiobox;try{Radiobox.displayName="Radiobox",Radiobox.__docgenInfo={description:"",displayName:"Radiobox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox/Radiobox.tsx#Radiobox"]={docgenInfo:Radiobox.__docgenInfo,name:"Radiobox",path:"src/checkbox/Radiobox.tsx#Radiobox"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/checkbox/Radiobox.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Cz5ctIoOKhtz5JxB3m8W {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--gray-40, #959595);\n  border-radius: 50%;\n  background: #d9d9d9;\n}\n\n.sMsXsdqg9Eb5KgbOkrPI {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2f2f2f;\n}\n","",{version:3,sources:["webpack://./src/checkbox/Radiobox.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB",sourcesContent:[".wrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--gray-40, #959595);\n  border-radius: 50%;\n  background: #d9d9d9;\n}\n\n.checked {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2f2f2f;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"Cz5ctIoOKhtz5JxB3m8W",checked:"sMsXsdqg9Eb5KgbOkrPI"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);