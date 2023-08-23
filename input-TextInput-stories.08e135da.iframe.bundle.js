/*! For license information please see input-TextInput-stories.08e135da.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dnd9_10_webui=self.webpackChunk_dnd9_10_webui||[]).push([[9618],{"./src/input/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/input/TextInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_TextInput__WEBPACK_IMPORTED_MODULE_0__.o,title:"input/TextInput",argTypes:{}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TextInput__WEBPACK_IMPORTED_MODULE_0__.o,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>TextInput,Z:()=>input_TextInput});var classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextInput_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/input/TextInput.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextInput_module.Z,options);const input_TextInput_module=TextInput_module.Z&&TextInput_module.Z.locals?TextInput_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function TextInput(props){const{className,inputProps,error,onClick}=props;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(input_TextInput_module.wrap,className),onClick,children:[(0,jsx_runtime.jsx)("input",{className:input_TextInput_module.input,...inputProps}),"required"===error?.type&&(0,jsx_runtime.jsx)("p",{role:"alert",children:error?.text})]})}TextInput.displayName="TextInput";const input_TextInput=TextInput;try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:'{ type: "required"; text: string; }'}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/input/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/input/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/input/TextInput.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jy10Ked8crilHZtEd38R {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.alNiCgMlEW5KsHxJ9ngW {\n  width: 100%;\n  text-align: center;\n  font-family: Pretendard;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 100%; /* 14px */\n  background: var(--gray-7, #f2f4f5);\n  padding: 15px;\n  text-align: left;\n}\n\n.alNiCgMlEW5KsHxJ9ngW::placeholder {\n  text-align: left; /* for Chrome, Firefox, Opera */\n}\n\n.alNiCgMlEW5KsHxJ9ngW:focus {\n  background: #eee;\n}\n","",{version:3,sources:["webpack://./src/input/TextInput.module.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB,EAAE,SAAS;EAC5B,kCAAkC;EAClC,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,gBAAgB,EAAE,+BAA+B;AACnD;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".wrap {\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.input {\n  width: 100%;\n  text-align: center;\n  font-family: Pretendard;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 100%; /* 14px */\n  background: var(--gray-7, #f2f4f5);\n  padding: 15px;\n  text-align: left;\n}\n\n.input::placeholder {\n  text-align: left; /* for Chrome, Firefox, Opera */\n}\n\n.input:focus {\n  background: #eee;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"jy10Ked8crilHZtEd38R",input:"alNiCgMlEW5KsHxJ9ngW"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);