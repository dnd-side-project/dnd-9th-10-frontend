/*! For license information please see modal-DeleteRelationshipModal-stories.2df7784d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dnd9_10_webui=self.webpackChunk_dnd9_10_webui||[]).push([[9415],{"../../../node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"./src/modal/DeleteRelationshipModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DeleteRelationshipModal_stories});var Button=__webpack_require__("./src/button/Button.tsx"),dist=__webpack_require__("../../../node_modules/@radix-ui/react-dialog/dist/index.mjs"),classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),SubmitButton=__webpack_require__("./src/button/SubmitButton.tsx"),Typographies=__webpack_require__("./src/text/Typographies.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DeleteRelationshipModal_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/modal/DeleteRelationshipModal.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DeleteRelationshipModal_module.Z,options);const modal_DeleteRelationshipModal_module=DeleteRelationshipModal_module.Z&&DeleteRelationshipModal_module.Z.locals?DeleteRelationshipModal_module.Z.locals:void 0;var Modal=__webpack_require__("./src/modal/Modal.tsx"),next_image=__webpack_require__("./.storybook/__mocks__/next/image.js"),libs_images=__webpack_require__("../../shared/src/libs/images.ts"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function DeleteRelationshipModal(props){const{className,TriggerComponent,onClose,onSubmit}=props;return(0,jsx_runtime.jsx)(Modal.Z,{TriggerComponent,className:classnames_default()(modal_DeleteRelationshipModal_module.wrap,className),useClose:!1,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Typographies.dS,{className:modal_DeleteRelationshipModal_module.title,children:"정말 삭제하시겠어요?"}),(0,jsx_runtime.jsxs)(Typographies.o1,{className:modal_DeleteRelationshipModal_module.content,as:"p",children:["관계정리를 하면",(0,jsx_runtime.jsx)("span",{className:modal_DeleteRelationshipModal_module.highlight,children:" 일화를 더이상 쓸 수 없어요."}),(0,jsx_runtime.jsx)("br",{}),"되살리고 싶다면 고객센터에 문의해주세요."]}),(0,jsx_runtime.jsx)(next_image.Z,{className:modal_DeleteRelationshipModal_module.image,width:173,height:135,alt:"clear",src:libs_images.W.CLEAR_RELATIONSHOP}),(0,jsx_runtime.jsx)(dist.x8,{asChild:!0,children:(0,jsx_runtime.jsxs)("div",{className:modal_DeleteRelationshipModal_module.bottom,children:[(0,jsx_runtime.jsx)(SubmitButton.Z,{className:modal_DeleteRelationshipModal_module["bottom-button"],type:"disabled",name:"취소",onClick:onClose}),(0,jsx_runtime.jsx)(SubmitButton.Z,{className:modal_DeleteRelationshipModal_module["bottom-button"],type:"warn",name:"정리하기",onClick:onSubmit})]})})]})})}DeleteRelationshipModal.displayName="DeleteRelationshipModal";try{DeleteRelationshipModal.displayName="DeleteRelationshipModal",DeleteRelationshipModal.__docgenInfo={description:"",displayName:"DeleteRelationshipModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},TriggerComponent:{defaultValue:null,description:"",name:"TriggerComponent",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/DeleteRelationshipModal.tsx#DeleteRelationshipModal"]={docgenInfo:DeleteRelationshipModal.__docgenInfo,name:"DeleteRelationshipModal",path:"src/modal/DeleteRelationshipModal.tsx#DeleteRelationshipModal"})}catch(__react_docgen_typescript_loader_error){}const DeleteRelationshipModal_stories={component:DeleteRelationshipModal,title:"modal/DeleteRelationshipModal",argTypes:{}},Template=args=>(0,jsx_runtime.jsx)(DeleteRelationshipModal,{...args,TriggerComponent:(0,jsx_runtime.jsx)(Button.Z,{className:modal_DeleteRelationshipModal_module["trigger-button"],children:"친구생성"})});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => <DeleteRelationshipModal {...args} TriggerComponent={<Button className={styles["trigger-button"]}>친구생성</Button>} />',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"../../shared/src/libs/images.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>images});const images={SIGN_IN_BACKGROUND:"/images/signin_bg.png",ONBOARDING1:"/images/onboarding1.png",ONBOARDING2:"/images/onboarding2.png",ONBOARDING3:"/images/onboarding3.png",BASED_FRIEND:"/images/based_friend.png",FRIEND_DESC:"/images/friend_desc.png",FRIEND_EMPTY:"/images/friend_empty.png",FRIEND1:"/images/friend1.png",FRIEND2:"/images/friend2.png",FRIEND_PROFILE1:"/images/friend_profile1.png",NEW_FRIEND_BG:"/images/new_friend_bg.png",NEW_DIARY_EMPTY:"/images/new_diary_empty.png",NEW_DIARY_ANALYSIS:"/images/new_diary_analysis.png",CLEAR_RELATIONSHOP:"/images/clear_relationship.png",SERVICE_EMAIL:"/images/service_email.png"}},"./.storybook/__mocks__/next/image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_uid});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function _uid(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{...props})}_uid.displayName="image"},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>button_Button});var classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/button/Button.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function Button(props){const{className,children,onClick,...restProps}=props;return(0,jsx_runtime.jsx)("button",{...restProps,className:classnames_default()(button_Button_module.wrap,className),onClick,children})}Button.displayName="Button";const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>IconButton,Z:()=>button_IconButton});var classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),IconButton_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/button/IconButton.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(IconButton_module.Z,options);const button_IconButton_module=IconButton_module.Z&&IconButton_module.Z.locals?IconButton_module.Z.locals:void 0;var Icon=__webpack_require__("./src/icon/Icon.tsx"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function IconButton(props){const{className,name,size,onClick,...restProps}=props;return(0,jsx_runtime.jsx)("button",{...restProps,className:classnames_default()(button_IconButton_module.wrap,className),onClick,children:(0,jsx_runtime.jsx)(Icon.Z,{name,size})})}IconButton.displayName="IconButton";const button_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"emoji1"'},{value:'"emoji2"'},{value:'"emoji3"'},{value:'"emoji4"'},{value:'"emoji5"'},{value:'"emoji6"'},{value:'"home"'},{value:'"my"'},{value:'"arrow_down"'},{value:'"arrow_up"'},{value:'"icon_back"'},{value:'"back"'},{value:'"bookmark_active"'},{value:'"bookmark"'},{value:'"broken_heart"'},{value:'"checked"'},{value:'"close"'},{value:'"diary"'},{value:'"forward"'},{value:'"heart"'},{value:'"modify"'},{value:'"plus"'},{value:'"remove"'},{value:'"search"'},{value:'"setting"'},{value:'"sticker"'},{value:'"tooltip"'},{value:'"logo"'},{value:'"warn"'},{value:'"profile"'},{value:'"emoji1_disabled"'},{value:'"emoji2_disabled"'},{value:'"emoji3_disabled"'},{value:'"emoji4_disabled"'},{value:'"emoji5_disabled"'},{value:'"emoji6_disabled"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/button/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Modal,Z:()=>modal_Modal});var classnames=__webpack_require__("../../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),IconButton=__webpack_require__("./src/button/IconButton.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/modal/Modal.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.Z,options);const modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;var dist=__webpack_require__("../../../node_modules/@radix-ui/react-dialog/dist/index.mjs"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function Modal(props){const{className,TriggerComponent,children,useClose=!0}=props;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(dist.fC,{children:[(0,jsx_runtime.jsx)(dist.xz,{asChild:!0,children:TriggerComponent}),(0,jsx_runtime.jsxs)(dist.h_,{children:[(0,jsx_runtime.jsx)(dist.aV,{className:modal_Modal_module.DialogOverlay}),(0,jsx_runtime.jsx)(dist.VY,{className:modal_Modal_module.DialogContent,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()(modal_Modal_module.wrap,className),children:[useClose&&(0,jsx_runtime.jsx)(dist.x8,{asChild:!0,children:(0,jsx_runtime.jsx)(IconButton.Z,{className:modal_Modal_module["close-button"],name:"close"})}),children]})})]})]})})}const modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},TriggerComponent:{defaultValue:null,description:"",name:"TriggerComponent",required:!0,type:{name:"ReactNode"}},useClose:{defaultValue:null,description:"",name:"useClose",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"../../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/button/Button.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".l3UfsIiqAzOCCHxwHQoX {\n}\n","",{version:3,sources:["webpack://./src/button/Button.module.css"],names:[],mappings:"AAAA;AACA",sourcesContent:[".wrap {\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"l3UfsIiqAzOCCHxwHQoX"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/button/IconButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".RuT5_XTcygJZsA5eTe5k {\n}\n","",{version:3,sources:["webpack://./src/button/IconButton.module.css"],names:[],mappings:"AAAA;AACA",sourcesContent:[".wrap {\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"RuT5_XTcygJZsA5eTe5k"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/modal/DeleteRelationshipModal.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".A_OQzqoLL0Jo51hdg5PC {\n  display: flex;\n  flex-direction: column;\n  width: 312px;\n  min-height: 214px;\n  padding-top: 48px;\n  padding-left: 14px;\n  padding-right: 14px;\n  padding-bottom: 16px;\n}\n\n.NgPwRFzHRhO0RWxBChUA {\n  color: var(--gray-70, #484848);\n  text-align: center;\n}\n\n.oYwQ8Z8b5HXaUJnQd6U6 {\n  color: var(--gray-30, #aeb7b7);\n  margin-top: 16px;\n  margin-bottom: 16px;\n  text-align: center;\n}\n\n.RggpqSNap3zrhC5j0C4h {\n  color: #d14b4b;\n}\n\n.a7aZ_FVMe5dLeWcCd5Lw {\n  margin: auto;\n  margin-bottom: 26px;\n}\n\n.jCqok8MQr4pSrMBR3Cof {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.zvunDKZVcUih9cYCUMGL {\n  width: 138px;\n  max-height: 52px;\n}\n","",{version:3,sources:["webpack://./src/modal/DeleteRelationshipModal.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,QAAQ;EACR,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB",sourcesContent:[".wrap {\n  display: flex;\n  flex-direction: column;\n  width: 312px;\n  min-height: 214px;\n  padding-top: 48px;\n  padding-left: 14px;\n  padding-right: 14px;\n  padding-bottom: 16px;\n}\n\n.title {\n  color: var(--gray-70, #484848);\n  text-align: center;\n}\n\n.content {\n  color: var(--gray-30, #aeb7b7);\n  margin-top: 16px;\n  margin-bottom: 16px;\n  text-align: center;\n}\n\n.highlight {\n  color: #d14b4b;\n}\n\n.image {\n  margin: auto;\n  margin-bottom: 26px;\n}\n\n.bottom {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.bottom-button {\n  width: 138px;\n  max-height: 52px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"A_OQzqoLL0Jo51hdg5PC",title:"NgPwRFzHRhO0RWxBChUA",content:"oYwQ8Z8b5HXaUJnQd6U6",highlight:"RggpqSNap3zrhC5j0C4h",image:"a7aZ_FVMe5dLeWcCd5Lw",bottom:"jCqok8MQr4pSrMBR3Cof","bottom-button":"zvunDKZVcUih9cYCUMGL"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/modal/Modal.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".kgQ9w0Y8LbLwbu27abow {\n  position: relative;\n  width: 312px;\n  padding-top: 54px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.tK9zXKREooI5Z_AUJaCE {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n\n.B5e1031hwIJwpZH8RHQY {\n  background-color: var(--black-a9);\n  position: fixed;\n  inset: 0;\n  background: rgba(0 0 0 / 0.5);\n  animation: CNZ2EZcOoS0zGyzD8cow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.ePJAUdF7hjspPAH3gfoQ {\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,\n    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* width: 90vw;\n  max-width: 450px;\n  max-height: 85vh;\n  padding: 25px; */\n  animation: wbfGB6ksfDlUUVkMcQiO 150ms cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 1;\n}\n\n@keyframes CNZ2EZcOoS0zGyzD8cow {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes wbfGB6ksfDlUUVkMcQiO {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n","",{version:3,sources:["webpack://./src/modal/Modal.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,QAAQ;EACR,6BAA6B;EAC7B,mEAA0D;AAC5D;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB;6CAC2C;EAC3C,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC;;;kBAGgB;EAChB,mEAA0D;EAC1D,UAAU;AACZ;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;IACV,4CAA4C;EAC9C;EACA;IACE,UAAU;IACV,yCAAyC;EAC3C;AACF",sourcesContent:[".wrap {\n  position: relative;\n  width: 312px;\n  padding-top: 54px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.close-button {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n\n.DialogOverlay {\n  background-color: var(--black-a9);\n  position: fixed;\n  inset: 0;\n  background: rgba(0 0 0 / 0.5);\n  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.DialogContent {\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,\n    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* width: 90vw;\n  max-width: 450px;\n  max-height: 85vh;\n  padding: 25px; */\n  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 1;\n}\n\n@keyframes overlayShow {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes contentShow {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrap:"kgQ9w0Y8LbLwbu27abow","close-button":"tK9zXKREooI5Z_AUJaCE",DialogOverlay:"B5e1031hwIJwpZH8RHQY",overlayShow:"CNZ2EZcOoS0zGyzD8cow",DialogContent:"ePJAUdF7hjspPAH3gfoQ",contentShow:"wbfGB6ksfDlUUVkMcQiO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);