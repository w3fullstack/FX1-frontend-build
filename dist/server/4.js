exports.ids = [4];
exports.modules = {

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAvatar_vue_vue_type_style_index_0_id_bdc5bcec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(864);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAvatar_vue_vue_type_style_index_0_id_bdc5bcec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAvatar_vue_vue_type_style_index_0_id_bdc5bcec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAvatar_vue_vue_type_style_index_0_id_bdc5bcec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAvatar_vue_vue_type_style_index_0_id_bdc5bcec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width:767px){.xa-my-avatar[data-v-bdc5bcec] .xa-avatar{width:24px!important;height:24px!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/MyAvatar.vue?vue&type=template&id=bdc5bcec&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-my-avatar"},[(_vm.name || _vm.avatarURL)?_c('XAAvatar',_vm._b({attrs:{"name":_vm.name || _vm.userNameDefault,"image":_vm.avatarURL}},'XAAvatar',_vm.$attrs,false)):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/MyAvatar.vue?vue&type=template&id=bdc5bcec&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/MyAvatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MyAvatarvue_type_script_lang_js_ = ({
  name: 'XAMyAvatar',
  components: {
    XAAvatar: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 440))
  },
  data() {
    return {
      userNameDefault: null,
      userAvatarDefault: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userName', 'userAvatar']),
    name() {
      return this.userName || this.$store.state.auth.displayName || null;
    },
    avatarURL() {
      return this.userAvatar;
    }
  },
  watch: {
    '$store.state.auth.token': {
      deep: true,
      handler() {
        this.userNameDefault = this.userName;
        this.userAvatarDefault = this.userAvatar;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/MyAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var atoms_MyAvatarvue_type_script_lang_js_ = (MyAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/MyAvatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1041)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_MyAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bdc5bcec",
  "5673b32e"
  
)

/* harmony default export */ var MyAvatar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1042);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("9cc79dc2", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=4.js.map