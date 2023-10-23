exports.ids = [155];
exports.modules = {

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/v2/SignUp/Step1.vue?vue&type=template&id=e0697e1a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xo-signup-step-1 step-content row"},[_vm._ssrNode("<div class=\"left-content row items-center justify-center\">","</div>",[_vm._ssrNode("<div class=\"form-container\">","</div>",[_vm._ssrNode("<div class=\"form-header\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.signupLockerRoomSupporting ? 'Sign up to support a club' : 'Sign up'))+"</h1>"),_vm._ssrNode("<h4 class=\"text-weight-light\">","</h4>",[_vm._ssrNode("Already have an account? "),_c('nuxt-link',{attrs:{"to":{ name: 'signin', query: _vm.filteredQuery, params: _vm.$route.params }}},[_vm._v("Sign in")])],2)],2),_vm._ssrNode("<form action=\"#\">","</form>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_c('XAFormsInput',{attrs:{"id":"IUsername","placeholder":"Username","disabled":_vm.isSubmitting,"loading":_vm.isChecking,"error":_vm.validation.firstError('username') || _vm.usernameUniqueError},on:{"enter":function($event){return _vm.fnSignupViaEmail()},"input":function($event){return _vm.fnUsernameValidation()}},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}})],1),_vm._ssrNode("<div class=\"mb-5\">","</div>",[_c('XAFormsInput',{attrs:{"id":"IEmail","placeholder":"Email","disabled":_vm.isSubmitting || _vm.isDisableInputEmail,"error":_vm.validation.firstError('email')},on:{"enter":function($event){return _vm.fnSignupViaEmail()}},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._ssrNode("<div class=\"mb-6\">","</div>",[_c('XAFormsInput',{attrs:{"id":"IPassword","type":"password","placeholder":"Password","disabled":_vm.isSubmitting,"error":_vm.validation.firstError('password')},on:{"enter":function($event){return _vm.fnSignupViaEmail()}},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._ssrNode("<div class=\"actions\">","</div>",[_vm._ssrNode("<div class=\"mb-4\">","</div>",[_c('b-button',{staticClass:"btn-next",attrs:{"type":"is-primary","loading":_vm.isSubmitting,"disabled":_vm.isDisableSignUpButton},on:{"click":function($event){$event.preventDefault();return _vm.fnSignupViaEmail()}}},[_vm._v("Sign Up")])],1),_vm._ssrNode("<div class=\"row\"><div"+(_vm._ssrClass("btn-google row items-center justify-center",[_vm.isSubmitting && 'disabled']))+"><div class=\"_icon row\"><img"+(_vm._ssrAttr("src",__webpack_require__(558)))+"></div><div class=\"value\">Sign Up with Google</div></div></div>")],2)])])]),_c('XMSignUpRightContent')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/v2/SignUp/Step1.vue?vue&type=template&id=e0697e1a&lang=pug&

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(8);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "simple-vue-validator"
var external_simple_vue_validator_ = __webpack_require__(37);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/v2/SignUp/Step1.vue?vue&type=script&lang=js&
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





/* harmony default export */ var Step1vue_type_script_lang_js_ = ({
  validators: {
    username(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Sorry, a username is required').custom(() => {
        if (!/^\w+$/.test(value)) {
          return 'Please use only letters, numbers and underscores for your username';
        }
      }).minLength(3, 'Please ensure your username is between 3 to 18 characters in length').maxLength(18, 'Please ensure your username is between 3 to 18 characters in length');
    },
    email(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Sorry, we need a email to send you important updates').email(`Hmmm, that email doesn't look right, maybe try again?`);
    },
    password(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Sorry, please enter a secure password').custom(() => {
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/.test(value)) {
          return 'Please ensure your password is at least 8 characters in length, and contains one number, upper and lowercase letters and one special character';
        }
      });
    }
  },
  name: 'XOSignUpStep1',
  components: {
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991)),
    XMSignUpRightContent: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 1374))
  },
  data() {
    return {
      isSubmitting: false,
      isChecking: false,
      usernameUniqueError: null,
      filteredQuery: {}
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('signup', ['username', 'email', 'password', 'firstName', 'lastName', 'avatarSocial', 'signupLockerRoomSupporting', 'signupOwnerManagerInvite', 'signupMethod']),
    isDisableSignUpButton() {
      return !this.username || !this.email || !this.password || this.usernameUniqueError;
    },
    isDisableInputEmail() {
      return !!this.signupOwnerManagerInvite;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      authSignupWithEmail: 'auth/authSignupWithEmail',
      authLoginWithGoogle: 'auth/authLoginWithGoogle',
      authLogOut: 'auth/authLogOut'
    }),
    fnUsernameValidation: debounce_default()(async function () {
      if (!this.username) return;
      this.isChecking = true;
      try {
        const {
          username
        } = this;
        const {
          userNameExists
        } = await this.$api.userNameExists({
          username
        });
        if (userNameExists) {
          this.usernameUniqueError = 'Username already exists.';
          return;
        }
        this.usernameUniqueError = null;
      } catch (error) {
        var _error$response;
        error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.errors.forEach(error => {
          this.$toast.success(error.message, {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-success',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        });
      } finally {
        this.isChecking = false;
      }
    }, 300),
    fnSignupViaEmail() {
      this.isSubmitting = true;
      this.signupMethod = 'email';
      this.$validate().then(async success => {
        if (success) {
          const {
            email,
            password
          } = this;
          try {
            var _result$additionalUse;
            const result = await this.authSignupWithEmail({
              email,
              password
            });
            if (result !== null && result !== void 0 && (_result$additionalUse = result.additionalUserInfo) !== null && _result$additionalUse !== void 0 && _result$additionalUse.isNewUser) {
              await this.$router.push({
                name: 'signup',
                query: {
                  ...this.$route.query,
                  step: 2
                },
                params: {
                  ...this.$route.params
                }
              });
              return;
            }
            this.$toast.error('Sorry, this email address is already in use. Please try another.', {
              duration: 5000,
              position: 'top-center'
            });
            await this.authLogOut();
          } catch (e) {
            const message = e.toString();
            const findError = error => {
              if (message.includes(error)) {
                return message;
              }
            };
            switch (message) {
              case findError('email-already-in-use'):
                this.$toast.error('Sorry, this email address is already in use. Please try another.', {
                  duration: 5000,
                  position: 'top-center'
                });
                break;
              default:
                break;
            }
          } finally {
            this.isSubmitting = false;
          }
        } else {
          this.isSubmitting = false;
        }
      });
    },
    async fnSignupViaGoogle() {
      this.validation.reset();
      this.isSubmitting = true;
      this.signupMethod = 'google';
      try {
        var _result$additionalUse2;
        const result = await this.authLoginWithGoogle();
        if (!result) return;
        if (result !== null && result !== void 0 && (_result$additionalUse2 = result.additionalUserInfo) !== null && _result$additionalUse2 !== void 0 && _result$additionalUse2.isNewUser) {
          const {
            additionalUserInfo: {
              // eslint-disable-next-line camelcase
              profile: {
                family_name,
                given_name,
                picture,
                email
              }
            }
          } = result;
          this.email = email;
          // eslint-disable-next-line camelcase
          this.firstName = given_name;
          // eslint-disable-next-line camelcase
          this.lastName = family_name;
          this.avatarSocial = picture;
          this.$router.push({
            name: 'signup',
            query: {
              ...this.$route.query,
              step: 2
            },
            params: {
              ...this.$route.params
            }
          });
          return;
        }
        this.$toast.error('Sorry, this email address is already in use. Please try another.', {
          duration: 5000,
          position: 'top-center'
        });
        this.authLogOut();
      } catch (error) {
        var _error$response2;
        error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.errors.forEach(error => {
          this.$toast.success(error.message, {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-success',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        });
      } finally {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/organisms/v2/SignUp/Step1.vue?vue&type=script&lang=js&
 /* harmony default export */ var SignUp_Step1vue_type_script_lang_js_ = (Step1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/organisms/v2/SignUp/Step1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SignUp_Step1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "217fd568"
  
)

/* harmony default export */ var Step1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/google.605f953.svg";

/***/ })

};;
//# sourceMappingURL=155.js.map