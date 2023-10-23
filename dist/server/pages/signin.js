exports.ids = [53];
exports.modules = {

/***/ 1326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signin.vue?vue&type=template&id=4e90a6b5&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('XPSignIn')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/signin.vue?vue&type=template&id=4e90a6b5&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signin.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var signinvue_type_script_lang_js_ = ({
  name: 'PageSignIn',
  components: {
    XPSignIn: () => __webpack_require__.e(/* import() */ 111).then(__webpack_require__.bind(null, 1349))
  },
  layout: 'auth',
  mounted() {
    const params = {
      pageName: 'Sign-in',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  }
});
// CONCATENATED MODULE: ./pages/signin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signinvue_type_script_lang_js_ = (signinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/signin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a94efa6"
  
)

/* harmony default export */ var signin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signin.js.map