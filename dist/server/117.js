exports.ids = [117];
exports.modules = {

/***/ 1299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Channels/Options.vue?vue&type=template&id=235f80b6&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-channels-options",class:_vm.isSupported && 'is-supported'},[(_vm.isSupported)?[_c('b-dropdown',{staticClass:"channel-options",attrs:{"aria-role":"list","position":"is-bottom-left","append-to-body":""},scopedSlots:_vm._u([{key:"trigger",fn:function(ref){
var active = ref.active;
return [_c('b-icon',{attrs:{"icon":"dots-horizontal"}})]}}],null,false,3996855626)},[(_vm.lockerRoomRole === null)?_c('b-dropdown-item',{attrs:{"aria-role":"listitem"},on:{"click":function($event){return _vm.fnShowUnsupportToast()}}},[_vm._v("Unsupport club")]):_vm._e(),(_vm.lockerRoomRole)?_c('b-dropdown-item',{attrs:{"aria-role":"listitem"},on:{"click":function($event){return _vm.fnShowCreateChannel()}}},[_vm._v("Rename channel")]):_vm._e(),(_vm.lockerRoomRole === 'owner')?_c('b-dropdown-item',{attrs:{"aria-role":"listitem"},on:{"click":function($event){return _vm.fnShowRemoveChannel()}}},[_vm._v("Delete channel")]):_vm._e()],1)]:[_c('b-icon',{attrs:{"icon":"dots-horizontal"}})]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Channels/Options.vue?vue&type=template&id=235f80b6&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/dialogs.js
var dialogs = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Channels/Options.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Optionsvue_type_script_lang_js_ = ({
  name: 'XAChannelOptions',
  mixins: [dialogs["a" /* default */]],
  data() {
    return {
      unsupportClub: false
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    channel() {
      return this.$parent.channel || null;
    },
    channelID() {
      var _this$channel;
      return ((_this$channel = this.channel) === null || _this$channel === void 0 ? void 0 : _this$channel.id) || null;
    },
    channelName() {
      var _this$channel2;
      return ((_this$channel2 = this.channel) === null || _this$channel2 === void 0 ? void 0 : _this$channel2.name) || null;
    },
    channelDescription() {
      var _this$channel3;
      return ((_this$channel3 = this.channel) === null || _this$channel3 === void 0 ? void 0 : _this$channel3.description) || null;
    },
    channelGroupID() {
      var _this$channel4;
      return ((_this$channel4 = this.channel) === null || _this$channel4 === void 0 ? void 0 : _this$channel4.channelGroupID) || null;
    },
    channelType() {
      var _this$channel5;
      return ((_this$channel5 = this.channel) === null || _this$channel5 === void 0 ? void 0 : _this$channel5.type) || null;
    },
    isSupported() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.isSupported) || false;
    },
    lockerRoomID() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.id) || null;
    },
    name() {
      var _this$lockerRoomActiv3;
      return ((_this$lockerRoomActiv3 = this.lockerRoomActive) === null || _this$lockerRoomActiv3 === void 0 ? void 0 : _this$lockerRoomActiv3.name) || null;
    },
    lockerRoomRole() {
      var _this$lockerRoomActiv4, _this$lockerRoomActiv5;
      return ((_this$lockerRoomActiv4 = this.lockerRoomActive) === null || _this$lockerRoomActiv4 === void 0 ? void 0 : (_this$lockerRoomActiv5 = _this$lockerRoomActiv4.MyRole) === null || _this$lockerRoomActiv5 === void 0 ? void 0 : _this$lockerRoomActiv5.role) || null;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      deleteLockerRoomSupporting: 'locker-room/deleteLockerRoomSupporting'
    }),
    fnShowUnsupportToast() {
      this.unsupportClub = true;
      this.$toast.success(`You're no longer supporting ${this.name}`, {
        duration: 5000,
        position: 'bottom-left',
        className: 'fx1-success',
        iconPack: 'mdi',
        icon: 'check-circle-outline',
        action: {
          text: 'Undo',
          onClick: (_, toastObject) => {
            this.unsupportClub = false;
            toastObject.goAway(0);
          }
        },
        onComplete: () => {
          this.fnToggleSupportClub();
        }
      });
    },
    async fnToggleSupportClub() {
      if (!this.unsupportClub) return;
      this.$router.push({
        path: '/locker-room/explore'
      });
      this.deleteLockerRoomSupporting(this.lockerRoomActive);
      try {
        const {
          lockerRoomID
        } = this;
        await this.$api.unsupportClub({
          lockerRoomID
        });
        this.$mixpanelClient.trackUnSupport({
          lockerRoom: this.lockerRoomActive,
          pageName: 'Locker room'
        });
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
      }
    },
    fnShowCreateChannel() {
      const {
        channelID,
        channelName,
        channelDescription,
        channelType,
        channelGroupID
      } = this;
      const details = {
        channelID,
        channelName,
        channelDescription,
        channelType,
        channelGroupID,
        isEditing: true
      };
      this.fnShowCreateChannelDialog(details);
    },
    fnShowRemoveChannel() {
      const {
        channelID,
        channelName
      } = this;
      const details = {
        channelID,
        channelName
      };
      this.fnShowDeleteChannelDialog(details);
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Channels/Options.vue?vue&type=script&lang=js&
 /* harmony default export */ var Channels_Optionsvue_type_script_lang_js_ = (Optionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Channels/Options.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(831)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Channels_Optionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "235f80b6",
  "83a9d794"
  
)

/* harmony default export */ var Options = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(832);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3a6d355a", content, true, context)
};

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_id_235f80b6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(667);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_id_235f80b6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_id_235f80b6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_id_235f80b6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_id_235f80b6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-channels-options[data-v-235f80b6]{cursor:pointer;opacity:.5}.xa-channels-options[data-v-235f80b6].is-supported{opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=117.js.map