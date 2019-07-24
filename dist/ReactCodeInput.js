!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactCodeInput=t(require("react")):e.ReactCodeInput=t(e.react)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=p(a),u=p(n(2)),l=p(n(5)),s=n(6);function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.fields,o=e.type,a=e.isValid,i=e.disabled,u=e.filterKeyCodes,l=e.forceUppercase,p=e.value;l&&(p=p.toUpperCase()),n.state={value:p,fields:r,type:o,input:[],isValid:a,disabled:i,filterKeyCodes:u,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",paddingRight:0,width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var f=0;f<Number(n.state.fields);f+=1)if(f<32){var c=n.state.value[f]||"";n.state.input.push(c)}return n.textInput=[],n.uuid=(0,s.uuidv4)(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({isValid:e.isValid,value:e.value,disabled:e.disabled})}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"clear",value:function(){this.setState({input:new Array(this.props.fields||4).fill("")}),this.textInput[0].focus()}},{key:"handleTouch",value:function(e){var t=this.props,n=t.touch,r=t.untouch,o=t.name;"function"==typeof n&&"function"==typeof r&&(""===e?n(o):r(o))}},{key:"handleChange",value:function(e){var t=this,n=this.props.filterChars,r=String(e.target.value);this.props.forceUppercase&&(r=r.toUpperCase()),"number"===this.state.type&&(r=r.replace(/[^\d]/g,""));var o=r=r.split("").filter(function(e){return!n.includes(e)}).join("");if(""!==r){var a=this.state.input.slice();r.length>1?r.split("").map(function(n,r){return Number(e.target.dataset.id)+r<t.props.fields&&(a[Number(e.target.dataset.id)+r]=n),!1}):a[Number(e.target.dataset.id)]=r,a.map(function(e,n){return t.textInput[n]&&(t.textInput[n].value=e),!1});var i=this.textInput[e.target.dataset.id<a.length?Number(e.target.dataset.id)+1:e.target.dataset.id];i&&(i.focus(),i.select()),o=a.join(""),this.setState({value:a.join(""),input:a})}this.props.onChange&&o&&this.props.onChange(o),this.handleTouch(o)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),n=this.textInput[t+1],r=this.textInput[t-1],o=void 0,a=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map(function(t){if(t===e.keyCode)return e.preventDefault(),!0}),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(o=this.state.input.slice())[t]="",a=o.join(""),this.setState({value:a,input:o}),""===this.textInput[t].value&&r&&(r.focus(),r.select()),this.props.onChange&&this.props.onChange(a);break;case 37:e.preventDefault(),r&&(r.focus(),r.select());break;case 39:e.preventDefault(),n&&(n.focus(),n.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.style,a=void 0===o?{}:o,u=t.inputStyle,s=void 0===u?{}:u,p=t.inputStyleInvalid,f=void 0===p?{}:p,c=t.type,d=t.autoFocus,h=t.pattern,y=t.inputMode,b=this.state,v=b.disabled,x=b.input,g=b.isValid,m=b.defaultInputStyle,O={container:a,input:g?s:f};return Object.assign(O.container,{display:"inline-block"}),n||0!==Object.keys(s).length||Object.assign(s,r({},m,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),n||0!==Object.keys(f).length||Object.assign(f,r({},m,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),v&&Object.assign(O.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),i.default.createElement("div",{className:(0,l.default)(n,"react-code-input"),style:O.container,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp},x.map(function(t,n){return i.default.createElement("input",{ref:function(t){e.textInput[n]=t},id:e.uuid+"-"+n,"data-id":n,autoFocus:d&&0===n?"autoFocus":"",value:t,key:"input_"+n,type:c,min:0,max:9,maxLength:x.length===n+1?1:x.length,style:O.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(t){return e.handleBlur(t)},onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},disabled:v,"data-valid":g,pattern:h,inputMode:y,placeholder:e.props.placeholder})}))}}]),t}();f.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."]},f.propTypes={type:u.default.oneOf(["text","number","password","tel"]),fields:u.default.number,value:u.default.string,onChange:u.default.func,name:u.default.string,touch:u.default.func,untouch:u.default.func,className:u.default.string,isValid:u.default.bool,disabled:u.default.bool,style:u.default.object,inputStyle:u.default.object,inputStyleInvalid:u.default.object,autoFocus:u.default.bool,forceUppercase:u.default.bool,filterKeyCodes:u.default.array,filterChars:u.default.array,pattern:u.default.string,inputMode:u.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"]),onKeyDown:u.default.func,onKeyPress:u.default.func,onKeyUp:u.default.func,placeholder:u.default.string},t.default=f},function(t,n){t.exports=e},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";var r=n(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}])});
//# sourceMappingURL=ReactCodeInput.js.map