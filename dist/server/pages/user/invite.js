exports.ids = [58];
exports.modules = {

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_style_index_0_id_3a7b5199_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_style_index_0_id_3a7b5199_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_style_index_0_id_3a7b5199_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_style_index_0_id_3a7b5199_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_style_index_0_id_3a7b5199_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xp-user-invite[data-v-3a7b5199]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:11;background-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/invite.vue?vue&type=template&id=3a7b5199&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-user-invite"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/invite.vue?vue&type=template&id=3a7b5199&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/invite.vue?vue&type=script&lang=js&
//
//
//
//



/* harmony default export */ var invitevue_type_script_lang_js_ = ({
  name: 'PageUserInvite',
  async asyncData({
    app,
    route
  }) {
    var _route$query;
    const id = route === null || route === void 0 ? void 0 : (_route$query = route.query) === null || _route$query === void 0 ? void 0 : _route$query.accept;
    try {
      let invitedUserExists;
      const {
        getUserInvite
      } = await app.$api.getUserInvite({
        id
      });
      if (!getUserInvite) return;
      const type = getUserInvite.type;
      if (type !== 'InviteToPrivateChannel') {
        ;
        ({
          invitedUserExists
        } = await app.$api.invitedUserExists({
          id
        }));
      }
      return {
        invitedUserExists,
        getUserInvite,
        type,
        id
      };
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('signup', ['email'])
  },
  async mounted() {
    // await this.authLogOut()
    if (!this.getUserInvite) {
      this.showErrorToast('Invalid invitation link');
      return;
    }
    if (this.type === 'InviteToPrivateChannel') {
      if (this.isLoggedIn) {
        try {
          const {
            acceptInvitationToPrivateChannel
          } = await this.$api.acceptInvitationToPrivateChannel({
            token: this.id
          });
          const redirectUrl = acceptInvitationToPrivateChannel.objectID;
          const startIndex = redirectUrl.indexOf('io') + 2;
          const substringUrl = redirectUrl.substring(startIndex);
          this.$router.push(substringUrl);
        } catch (e) {
          this.showError(e);
        }
        return;
      }
      this.$router.push({
        name: `signup`,
        query: {
          step: 1,
          accept: this.id
        }
      });
    } else {
      if (this.isLoggedIn) await this.authLogOut();
      if (this.invitedUserExists === undefined) {
        this.$store.dispatch('signup/setSignUpOwnerManagerInvite', null);
        this.showErrorToast('Invalid invitation link');
        return;
      }
      await this.setSignUpOwnerManagerInvite(this.getUserInvite);
      const {
        data: {
          emailAddress
        }
      } = this.getUserInvite;
      this.email = emailAddress;
      if (this.invitedUserExists) {
        this.$router.push({
          path: '/signin'
        });
        return;
      }
      this.$router.push({
        path: '/signup?step=1'
      });
      const params = {
        pageName: 'Invite manager',
        isLoggedIn: this.isLoggedIn
      };
      this.$mixpanelClient.trackViewPage(params);
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      authLogOut: 'auth/authLogOut',
      setSignUpOwnerManagerInvite: 'signup/setSignUpOwnerManagerInvite'
    }),
    showErrorToast(message) {
      this.$toast.error(message, {
        duration: 3000,
        position: 'top-center'
      });
      this.$router.push({
        path: '/'
      });
    },
    showError(e) {
      const message = e.toString();
      const findError = error => {
        if (message.includes(error)) {
          return message;
        }
      };
      switch (message) {
        case findError('cannot create or join more'):
          this.$toast.error('You cannot create or join more than one private group per game.', {
            duration: 5000,
            position: 'top-center'
          });
          break;
        default:
          break;
      }
      this.$router.push({
        path: '/'
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/user/invite.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_invitevue_type_script_lang_js_ = (invitevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/invite.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1021)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_invitevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a7b5199",
  "6c117ee6"
  
)

/* harmony default export */ var invite = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1022);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4dad58d4", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=invite.js.map