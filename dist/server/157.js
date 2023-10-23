exports.ids = [157];
exports.modules = {

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/SignUp.vue?vue&type=template&id=3e7e1901&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-sign-up auth-page"},[(_vm.activeRoute === 1)?_c('XOSignUpStep1'):_vm._e(),(_vm.activeRoute === 2)?_c('XOSignUpStep2'):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/SignUp.vue?vue&type=template&id=3e7e1901&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/SignUp.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var SignUpvue_type_script_lang_js_ = ({
  name: 'XPSignUp',
  components: {
    XOSignUpStep1: () => __webpack_require__.e(/* import() */ 155).then(__webpack_require__.bind(null, 1377)),
    XOSignUpStep2: () => __webpack_require__.e(/* import() */ 66).then(__webpack_require__.bind(null, 1378))
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('signup', ['email', 'signupOwnerManagerInviteID']),
    activeRoute() {
      var _this$$route, _this$$route$query;
      return parseInt((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$query = _this$$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.step) || 0;
    }
  },
  mounted() {
    var _this$$route$query2;
    const activeRoute = parseInt((_this$$route$query2 = this.$route.query) === null || _this$$route$query2 === void 0 ? void 0 : _this$$route$query2.step);
    if (activeRoute === undefined || activeRoute === 0 || isNaN(activeRoute)) {
      this.$router.push({
        query: {
          step: 1
        }
      });
    }
    if (activeRoute >= 2) {
      this.$router.push({
        query: {
          step: 2
        }
      });
    }

    // redirect to step 1 if vuex has no email
    if (!this.email) {
      this.$router.push({
        name: 'signup',
        query: {
          ...this.$route.query,
          step: 1
        },
        params: {
          ...this.$route.params
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/pages/SignUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_SignUpvue_type_script_lang_js_ = (SignUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/pages/SignUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_SignUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d0bbf3a"
  
)

/* harmony default export */ var SignUp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=157.js.map