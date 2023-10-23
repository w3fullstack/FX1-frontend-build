exports.ids = [32];
exports.modules = {

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/linked-accounts.vue?vue&type=template&id=25059715&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-account-linked-accounts"},[_c('AccountLinkedAccounts')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/linked-accounts.vue?vue&type=template&id=25059715&lang=pug&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Account/LinkedAccounts.vue?vue&type=template&id=7625df21&scoped=true&lang=pug&
var LinkedAccountsvue_type_template_id_7625df21_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xo-linked-accounts"},[_vm._ssrNode("<p class=\"title text-weight-regular\" data-v-7625df21>Connect your social network accounts to login easier.</p>"),_vm._ssrNode("<div class=\"account-connections flex-column\" data-v-7625df21>","</div>",[_vm._ssrNode("<div class=\"connection row col items-center\" data-v-7625df21>","</div>",[_vm._ssrNode("<div class=\"service row items-center\" data-v-7625df21><div class=\"provider row items-center\" data-v-7625df21><img"+(_vm._ssrAttr("src",__webpack_require__(572)))+" data-v-7625df21><p class=\"text-weight-light\" data-v-7625df21>Google:</p>"+((_vm.getGoogleProvider)?("<div class=\"connected\" data-v-7625df21><p data-v-7625df21>"+_vm._ssrEscape(_vm._s(_vm.getGoogleProvider.email))+"</p></div>"):"<!---->")+((!_vm.getGoogleProvider)?("<div"+(_vm._ssrClass("connect",_vm.isSubmitting && 'disabled'))+" data-v-7625df21><p class=\"text-weight-light\" data-v-7625df21>Click to link Google account</p></div>"):"<!---->")+"</div></div>"),_vm._ssrNode("<div class=\"disconnect\" data-v-7625df21>","</div>",[(_vm.getGoogleProvider && _vm.getDefaultProvider)?_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-white","outlined":"","expanded":"","disabled":_vm.isSubmitting},on:{"click":function($event){return _vm.handleUnlinkProvider('google.com')}}},[_vm._v("Disconnect")]):_vm._e()],1)],2)])],2)}
var LinkedAccountsvue_type_template_id_7625df21_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/Account/LinkedAccounts.vue?vue&type=template&id=7625df21&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Account/LinkedAccounts.vue?vue&type=script&lang=js&
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


/* harmony default export */ var LinkedAccountsvue_type_script_lang_js_ = ({
  name: 'XOLinkedAccounts',
  data: () => {
    return {
      isSubmitting: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      getProviderData: 'auth/getProviderData'
    }),
    getDefaultProvider() {
      var _this$getProviderData;
      return (_this$getProviderData = this.getProviderData) === null || _this$getProviderData === void 0 ? void 0 : _this$getProviderData.find(p => p.providerId === 'password');
    },
    getGoogleProvider() {
      var _this$getProviderData2;
      return (_this$getProviderData2 = this.getProviderData) === null || _this$getProviderData2 === void 0 ? void 0 : _this$getProviderData2.find(p => p.providerId === 'google.com');
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      refreshToken: 'auth/refreshToken',
      connectGoogleAccount: 'auth/connectGoogleAccount',
      unlinkSocialProvider: 'auth/unlinkSocialProvider'
    }),
    async handleConnectGoogle() {
      this.isSubmitting = true;
      try {
        await this.connectGoogleAccount();
        await this.refreshToken();
        this.$toast.success('Google account successfully connected', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } catch (error) {
        if (error.message === 'FirebaseError: Firebase: This credential is already associated with a different user account. (auth/credential-already-in-use).') {
          error.message = 'This Google account is already in use.';
        }
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } finally {
        this.isSubmitting = false;
      }
    },
    async handleUnlinkProvider(providerId) {
      this.isSubmitting = true;
      try {
        await this.unlinkSocialProvider(providerId);
        await this.refreshToken();
        this.$toast.success('Account successfully disconnected', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } catch (error) {
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } finally {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/organisms/Account/LinkedAccounts.vue?vue&type=script&lang=js&
 /* harmony default export */ var Account_LinkedAccountsvue_type_script_lang_js_ = (LinkedAccountsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/organisms/Account/LinkedAccounts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(993)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Account_LinkedAccountsvue_type_script_lang_js_,
  LinkedAccountsvue_type_template_id_7625df21_scoped_true_lang_pug_render,
  LinkedAccountsvue_type_template_id_7625df21_scoped_true_lang_pug_staticRenderFns,
  false,
  injectStyles,
  "7625df21",
  "0d6456da"
  
)

/* harmony default export */ var LinkedAccounts = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/linked-accounts.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var linked_accountsvue_type_script_lang_js_ = ({
  name: 'PageAccountLinkedAccounts',
  components: {
    AccountLinkedAccounts: LinkedAccounts
  }
});
// CONCATENATED MODULE: ./pages/account/linked-accounts.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_linked_accountsvue_type_script_lang_js_ = (linked_accountsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/account/linked-accounts.vue





/* normalize component */

var linked_accounts_component = Object(componentNormalizer["a" /* default */])(
  account_linked_accountsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5c4e6d97"
  
)

/* harmony default export */ var linked_accounts = __webpack_exports__["default"] = (linked_accounts_component.exports);

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMS4zNDkzIDExLjFIMTIuMTc5M1YxMy44M0gxOC42ODkzQzE4LjM1OTMgMTcuNjQgMTUuMTg5MyAxOS4yNyAxMi4xODkzIDE5LjI3QzguMzU5MyAxOS4yNyA0Ljk5OTMgMTYuMjUgNC45OTkzIDEyQzQuOTk5MyA3LjkgOC4xOTkzIDQuNzMgMTIuMTk5MyA0LjczQzE1LjI4OTMgNC43MyAxNy4wOTkzIDYuNyAxNy4wOTkzIDYuN0wxOC45OTkzIDQuNzJDMTguOTk5MyA0LjcyIDE2LjU1OTMgMiAxMi4wOTkzIDJDNi40MTkzIDIgMi4wMjkzIDYuOCAyLjAyOTMgMTJDMi4wMjkzIDE3LjA1IDYuMTU5MyAyMiAxMi4yNDkzIDIyQzE3LjU5OTMgMjIgMjEuNDk5MyAxOC4zMyAyMS40OTkzIDEyLjkxQzIxLjQ5OTMgMTEuNzYgMjEuMzQ5MyAxMS4xIDIxLjM0OTMgMTEuMVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(994);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("71e1f260", content, true, context)
};

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedAccounts_vue_vue_type_style_index_0_id_7625df21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(840);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedAccounts_vue_vue_type_style_index_0_id_7625df21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedAccounts_vue_vue_type_style_index_0_id_7625df21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedAccounts_vue_vue_type_style_index_0_id_7625df21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedAccounts_vue_vue_type_style_index_0_id_7625df21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xo-linked-accounts[data-v-7625df21] .title{color:#fff;font-size:16px;line-height:20px}.xo-linked-accounts[data-v-7625df21] .account-connections .connection .service,.xo-linked-accounts[data-v-7625df21] .account-connections .connection .service .provider{grid-gap:8px;gap:8px}.xo-linked-accounts[data-v-7625df21] .account-connections .connection .service .provider p{font-size:16px}.xo-linked-accounts[data-v-7625df21] .account-connections .connection .service .connect.disabled{pointer-events:none;opacity:.7}.xo-linked-accounts[data-v-7625df21] .account-connections .connection .service .connect p{color:#94a6aa;cursor:pointer}.xo-linked-accounts[data-v-7625df21] .account-connections .connection .service .connected p{font-size:18px}.xo-linked-accounts[data-v-7625df21] .account-connections .connection .disconnect{margin-left:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=linked-accounts.js.map