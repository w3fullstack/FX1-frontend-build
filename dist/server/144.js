exports.ids = [144];
exports.modules = {

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_316f3691_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_316f3691_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_316f3691_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_316f3691_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_316f3691_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xp-forgot-password[data-v-316f3691]{min-height:calc(100vh - 683px)}@media screen and (max-width:1023px){.xp-forgot-password[data-v-316f3691] .step-content .left-content{min-height:calc(100vh - 60px)!important;align-items:flex-start}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ForgotPassword.vue?vue&type=template&id=316f3691&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-forgot-password auth-page"},[_vm._ssrNode("<div class=\"step-content row\" data-v-316f3691>","</div>",[_vm._ssrNode("<div class=\"left-content row items-center justify-center\" data-v-316f3691>","</div>",[_vm._ssrNode("<div class=\"form-container\" data-v-316f3691>","</div>",[_vm._ssrNode("<div class=\"form-header\" data-v-316f3691><h1 data-v-316f3691>Forgot Password</h1><h4 class=\"text-weight-light\" data-v-316f3691>Enter the email address you used when you joined and we’ll send you instructions to reset your password</h4></div>"),_vm._ssrNode("<form action=\"#\" autocomplete=\"off\" data-v-316f3691>","</form>",[_vm._ssrNode("<div class=\"mb-6\" data-v-316f3691>","</div>",[_c('XAFormsInput',{attrs:{"placeholder":"Email","error":_vm.validation.firstError('email'),"disabled":_vm.isSubmitting},on:{"enter":function($event){return _vm.fnSendInstructions()}},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._ssrNode("<div class=\"actions\" data-v-316f3691>","</div>",[_c('b-button',{staticClass:"btn-next",attrs:{"type":"is-primary","loading":_vm.isSubmitting,"disabled":_vm.isDisableSendButton},on:{"click":function($event){$event.preventDefault();return _vm.fnSendInstructions()}}},[_vm._v("Send Instructions")])],1)])],2)]),_c('XMSignUpRightContent')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/ForgotPassword.vue?vue&type=template&id=316f3691&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "simple-vue-validator"
var external_simple_vue_validator_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/ForgotPassword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ForgotPasswordvue_type_script_lang_js_ = ({
  validators: {
    email(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Email field is required').email();
    }
  },
  name: 'XPForgotPassword',
  components: {
    XMSignUpRightContent: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 1374)),
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991))
  },
  data() {
    return {
      email: null,
      isSubmitting: false
    };
  },
  computed: {
    isDisableSendButton() {
      return !this.email;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      forgotPassword: 'auth/forgotPassword'
    }),
    fnSendInstructions() {
      this.isSubmitting = true;
      this.$validate().then(async success => {
        if (success) {
          try {
            const {
              email
            } = this;
            await this.forgotPassword({
              email
            });
            const message = 'Password reset email sent, please check your email for further instructions';
            const duration = 5000;
            await this.fnSuccessToast(message, duration);
            this.$router.push({
              path: '/'
            });
          } catch (error) {} finally {
            this.isSubmitting = false;
          }
          return;
        }
        this.isSubmitting = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./components/pages/ForgotPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ForgotPasswordvue_type_script_lang_js_ = (ForgotPasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/ForgotPassword.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1095)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ForgotPasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "316f3691",
  "4b6833e0"
  
)

/* harmony default export */ var ForgotPassword = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1096);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f085829a", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=144.js.map