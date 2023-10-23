exports.ids = [1];
exports.modules = {

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(444);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d2b30118", content, true, context)
};

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Avatar.vue?vue&type=template&id=6f02151c&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-avatar row items-center justify-center",style:([_vm.avatarStyles])},[_vm._ssrNode(((_vm.image)?("<img"+(_vm._ssrAttr("src",_vm.image))+" alt=\"name\" data-v-6f02151c>"):("<div class=\"name\""+(_vm._ssrStyle(null,[_vm.nameStyles], null))+" data-v-6f02151c>"+_vm._ssrEscape(_vm._s(_vm.initials))+"</div>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Avatar.vue?vue&type=template&id=6f02151c&scoped=true&lang=pug&

// EXTERNAL MODULE: ./assets/json/colors.json
var colors = __webpack_require__(442);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: 'XAAvatar',
  props: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: '32px'
    }
  },
  data() {
    return {
      colors: colors
    };
  },
  computed: {
    initials() {
      const name = this.name || '';
      if (name.split(' ').length > 1) {
        return name.split(' ')[0].charAt(0) + name.split(' ').pop().charAt(0);
      }
      return name.charAt(0);
    },
    avatarStyles() {
      // set up background color
      const name = this.name || 'FX1 User';
      let hash = 0;
      for (let index = 0; index < name.length; index++) {
        hash = name.charCodeAt(index) + ((hash << 5) - hash);
      }
      const h = hash % 360;

      // set up avatar styles
      const avatarStyles = {
        width: this.size,
        height: this.size,
        backgroundColor: this.image ? null : `hsl(${h}, 50%, 90%)`
      };
      return avatarStyles;
    },
    nameStyles() {
      const nameStyles = {
        fontSize: `calc(${this.size} * 0.40)`
      };
      return nameStyles;
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var atoms_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Avatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(443)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_Avatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f02151c",
  "40d37e9d"
  
)

/* harmony default export */ var Avatar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 442:
/***/ (function(module) {

module.exports = JSON.parse("[\"#1abc9c\",\"#2ecc71\",\"#3498db\",\"#9b59b6\",\"#34495e\",\"#16a085\",\"#27ae60\",\"#2980b9\",\"#8e44ad\",\"#2c3e50\",\"#f1c40f\",\"#e67e22\",\"#e74c3c\",\"#95a5a6\",\"#f39c12\",\"#d35400\",\"#c0392b\",\"#bdc3c7\",\"#7f8c8d\",\"#40076a\",\"#7d4f8a\",\"#2434c5\",\"#7c84fc\",\"#a23a7f\",\"#b55693\",\"#2e1529\",\"#12822c\"]");

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_6f02151c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_6f02151c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_6f02151c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_6f02151c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_6f02151c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-avatar[data-v-6f02151c]{border-radius:50%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.xa-avatar[data-v-6f02151c] img{border-radius:50%;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.xa-avatar[data-v-6f02151c] .name{font-weight:300;margin-top:3px;color:#0c353e;text-transform:uppercase}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=1.js.map