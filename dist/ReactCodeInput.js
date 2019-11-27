!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactCodeInput=t(require("react")):e.ReactCodeInput=t(e.react)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=p(o),u=p(n(2)),s=p(n(5)),l=n(6);function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.fields,a=e.type,o=e.isValid,i=e.disabled,u=e.filterKeyCodes,s=e.forceUppercase,p=e.value;s&&(p=p.toUpperCase()),n.state={value:p,fields:r,type:a,input:[],isValid:o,disabled:i,filterKeyCodes:u,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",paddingRight:0,width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var f=0;f<Number(n.state.fields);f+=1)if(f<32){var c=n.state.value[f]||"";n.state.input.push(c)}return n.textInput=[],n.uuid=(0,l.uuidv4)(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isValid!==e.isValid&&this.setState({isValid:this.props.isValid}),this.props.value!==e.value){var t=this.props.value;this.props.forceUppercase&&(t=t.toUpperCase()),this.setState({value:t})}if(this.props.disabled!==e.disabled&&this.setState({disabled:this.props.disabled}),this.props.fields!==e.fields){var n=[],r=this.props.value;this.props.forceUppercase&&(r=r.toUpperCase());for(var a=0;a<Number(this.props.fields);a+=1)if(a<32){var o=r[a]||"";n.push(o)}this.setState({fields:this.props.fields,input:n})}}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"clear",value:function(){this.setState({input:new Array(this.props.fields||4).fill("")}),this.textInput[0].focus()}},{key:"handleTouch",value:function(e){var t=this.props,n=t.touch,r=t.untouch,a=t.name;"function"==typeof n&&"function"==typeof r&&(""===e?n(a):r(a))}},{key:"handleChange",value:function(e){var t=this,n=this.props.filterChars,r=String(e.target.value);this.props.forceUppercase&&(r=r.toUpperCase()),"number"===this.state.type&&(r=r.replace(/[^\d]/g,""));var a=r=r.split("").filter(function(e){return!n.includes(e)}).join("");if(""!==r){var o=this.state.input.slice();r.length>1?r.split("").map(function(n,r){return Number(e.target.dataset.id)+r<t.props.fields&&(o[Number(e.target.dataset.id)+r]=n),!1}):o[Number(e.target.dataset.id)]=r,o.map(function(e,n){return t.textInput[n]&&(t.textInput[n].value=e),!1});var i=this.textInput[e.target.dataset.id<o.length?Number(e.target.dataset.id)+1:e.target.dataset.id];i&&(i.focus(),i.select()),a=o.join(""),this.setState({value:o.join(""),input:o})}this.props.onChange&&a&&this.props.onChange(a),this.handleTouch(a)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),n=this.textInput[t+1],r=this.textInput[t-1],a=void 0,o=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map(function(t){if(t===e.keyCode)return e.preventDefault(),!0}),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(a=this.state.input.slice())[t]="",o=a.join(""),this.setState({value:o,input:a}),""===this.textInput[t].value&&r&&(r.focus(),r.select()),this.props.onChange&&this.props.onChange(o);break;case 37:e.preventDefault(),r&&(r.focus(),r.select());break;case 39:e.preventDefault(),n&&(n.focus(),n.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(o)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,o=void 0===a?{}:a,u=t.inputStyle,l=void 0===u?{}:u,p=t.inputStyleInvalid,f=void 0===p?{}:p,c=t.type,d=t.autoFocus,h=t.pattern,y=t.inputMode,b=t.highlightCharIndex,v=this.state,g=v.disabled,x=v.input,m=v.isValid,C=v.defaultInputStyle,O={container:o,input:m?l:f};return Object.assign(O.container,{display:"inline-block"}),n||0!==Object.keys(l).length||Object.assign(l,r({},C,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),n||0!==Object.keys(f).length||Object.assign(f,r({},C,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),g&&Object.assign(O.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),i.default.createElement("div",{className:(0,s.default)(n,"react-code-input"),style:O.container,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp},x.map(function(t,n){return i.default.createElement("input",{ref:function(t){e.textInput[n]=t},id:e.uuid+"-"+n,"data-id":n,autoFocus:d&&0===n?"autoFocus":"",value:t,key:"input_"+n,type:c,className:n===b?"highlight":"",min:0,max:9,maxLength:x.length===n+1?1:x.length,style:O.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(t){return e.handleBlur(t)},onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},disabled:g,"data-valid":m,pattern:h,inputMode:y,placeholder:e.props.placeholder})}))}}]),t}();f.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."],highlightCharIndex:!1},f.propTypes={type:u.default.oneOf(["text","number","password","tel"]),fields:u.default.number,value:u.default.string,onChange:u.default.func,name:u.default.string,touch:u.default.func,untouch:u.default.func,className:u.default.string,isValid:u.default.bool,disabled:u.default.bool,style:u.default.object,inputStyle:u.default.object,inputStyleInvalid:u.default.object,autoFocus:u.default.bool,forceUppercase:u.default.bool,filterKeyCodes:u.default.array,filterChars:u.default.array,pattern:u.default.string,inputMode:u.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"]),onKeyDown:u.default.func,onKeyPress:u.default.func,onKeyUp:u.default.func,placeholder:u.default.string,highlightCharIndex:u.default.number},t.default=f},function(t,n){t.exports=e},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";var r=n(4);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r;
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
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}void 0!==e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}])});
//# sourceMappingURL=ReactCodeInput.js.map