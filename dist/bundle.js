/*! For license information please see bundle.js.LICENSE */
!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(n){return e[n]}.bind(null,s));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./index.js")}({"./index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_hello_world_button_hello_world_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/hello-world-button/hello-world-button */ "./src/components/hello-world-button/hello-world-button.js");\n/* harmony import */ var _src_add_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/add-image.js */ "./src/add-image.js");\n/* harmony import */ var _src_components_heading_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/heading/heading */ "./src/components/heading/heading.js");\n\n\n // helloWorldButton();\n\nObject(_src_add_image_js__WEBPACK_IMPORTED_MODULE_1__["default"])();\nvar heading = new _src_components_heading_heading__WEBPACK_IMPORTED_MODULE_2__["default"]();\nheading.render();\nvar helloWorldButton = new _src_components_hello_world_button_hello_world_button__WEBPACK_IMPORTED_MODULE_0__["default"]();\nhelloWorldButton.render();\n\nif (false) {} else if (true) {\n  console.log("we are in dev env");\n  console.log("should expect to see error from below method and a source map");\n}\n\nhelloWorldButton.somemethod();\n\n//# sourceURL=webpack:///./index.js?')},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss":function(module,exports,__webpack_require__){eval('// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, "h1 {\\n  color: gray; }\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js')},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hello-world-button/hello-world-button.scss":function(module,exports,__webpack_require__){eval('// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, ".hello-world-button {\\n  font-size: 20px;\\n  padding: 7px 15px;\\n  background: green;\\n  color: white;\\n  outline: none; }\\n\\n.hello-world-text {\\n  color: red;\\n  font-weight: bold; }\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js')},"./node_modules/css-loader/dist/runtime/api.js":function(module,exports,__webpack_require__){"use strict";eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?')},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?")},"./src/add-image.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _smiley_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smiley.jpg */ "./src/smiley.jpg");\n\n\nvar addImage = function addImage() {\n  var img = document.createElement("img");\n  img.alt = "Smiley face";\n  img.width = 300;\n  img.src = _smiley_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];\n  var body = document.querySelector("body");\n  body.append(img);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (addImage);\n\n//# sourceURL=webpack:///./src/add-image.js?')},"./src/components/heading/heading.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ "./src/components/heading/heading.scss");\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Heading =\n/*#__PURE__*/\nfunction () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: "render",\n    value: function render() {\n      var h1 = document.createElement("h1");\n      var body = document.querySelector("body");\n      h1.innerHTML = "webpack is awesome";\n      body.append(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Heading);\n\n//# sourceURL=webpack:///./src/components/heading/heading.js?')},"./src/components/heading/heading.scss":function(module,exports,__webpack_require__){eval('var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./heading.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?')},"./src/components/hello-world-button/hello-world-button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-button.scss */ "./src/components/hello-world-button/hello-world-button.scss");\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // const body = document.querySelector("body");\n// const helloWorldButton = () => {\n//   console.log("Hello world ");\n//   const btn = document.createElement("button");\n//   btn.innerHTML = "Hello world";\n//   btn.classList.add("hello-world-btn");\n//   btn.addEventListener("click", () => {\n//     const p = document.createElement("p");\n//     (p.innerHTML = "hello world"), body.append(p);\n//     p.classList.add("hello-world-text");\n//     console.log("Hello,World");\n//   });\n//   body.append(btn);\n// };\n// going to use class property, it is not supported by most browsers, we will use\n// a transpiler for this\n\nvar HelloWorldButton =\n/*#__PURE__*/\nfunction () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    this.buttonCssClass = "hello-world-button";\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: "render",\n    value: function render() {\n      var button = document.createElement("button");\n      var body = document.querySelector("body");\n      button.innerHTML = "Hello world";\n\n      button.onclick = function () {\n        var p = document.createElement("p");\n        p.innerHTML = "Hello world";\n        p.classList.add("hello-world-text");\n        body.appendChild(p);\n      };\n\n      button.classList.add("hello-world-button");\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (HelloWorldButton);\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.js?')},"./src/components/hello-world-button/hello-world-button.scss":function(module,exports,__webpack_require__){eval('var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./hello-world-button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/hello-world-button/hello-world-button.scss");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.scss?')},"./src/smiley.jpg":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "543ccff75cd86cd19225c9879b352b2e.jpg");\n\n//# sourceURL=webpack:///./src/smiley.jpg?')}});