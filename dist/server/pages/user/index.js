exports.ids = [57];
exports.modules = {

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/index.vue?vue&type=template&id=3c85e02e&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/index.vue?vue&type=template&id=3c85e02e&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/index.vue?vue&type=script&lang=js&
//
//


/* harmony default export */ var uservue_type_script_lang_js_ = ({
  name: 'PageUser',
  layout: 'blank',
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      getActionHandler: 'auth/getActionHandler'
    })
  },
  async mounted() {
    const {
      error
    } = this.getActionHandler;
    const {
      mode,
      oobCode: actionCode
    } = this.$route.query;
    if (error) {
      await this.$router.push({
        path: '/signin'
      });
      this.$toast.error(error, {
        duration: 8000,
        position: 'bottom-left',
        className: 'fx1-error',
        iconPack: 'mdi',
        icon: 'alert-circle-outline'
      });
      return;
    }
    switch (mode) {
      case 'resetPassword':
        {
          await this.$router.push({
            path: `/create-new-password?c=${actionCode}`
          });
          break;
        }
      case 'verifyAndChangeEmail':
        {
          try {
            const {
              data: {
                email
              }
            } = await this.$store.dispatch('auth/verifyEmail', {
              actionCode
            });
            await this.$api.confirmEmailChange({
              input: {
                email
              }
            });
            await this.$router.push({
              path: '/account/settings'
            });
            this.$toast.success('The email address was successfully changed!', {
              duration: 5000,
              position: 'bottom-left',
              className: 'fx1-success',
              iconPack: 'mdi',
              icon: 'alert-circle-outline'
            });
          } catch (error) {
            await this.$router.push({
              path: '/'
            });
            this.$toast.error(error.message, {
              duration: 5000,
              position: 'bottom-left',
              className: 'fx1-error',
              iconPack: 'mdi',
              icon: 'alert-circle-outline'
            });
          }
          break;
        }
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      authLogOut: 'auth/authLogOut'
    })
  }
});
// CONCATENATED MODULE: ./pages/user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "23910c05"
  
)

/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map