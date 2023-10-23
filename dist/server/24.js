exports.ids = [24];
exports.modules = {

/***/ 1298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Channels/ChatHeader.vue?vue&type=template&id=55896cc8&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xo-channels-chat-header row items-center justify-between"},[_vm._ssrNode("<div class=\"left-chat-header row col\" data-v-55896cc8><div class=\"back row\" data-v-55896cc8><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" data-v-55896cc8></div><h3 class=\"col\" data-v-55896cc8>"+_vm._ssrEscape("# "+_vm._s(_vm.name))+"</h3></div>"),_vm._ssrNode("<div class=\"right-chat-header\" data-v-55896cc8>","</div>",[(!_vm.isLive)?_vm._ssrNode("<div class=\"row items-center justify-end\" data-v-55896cc8>","</div>",[_c('XAChannelsAccount'),_c('XAChannelOptions')],1):_vm._ssrNode("<div class=\"row items-center justify-end\" data-v-55896cc8>","</div>",[_c('b-icon',{staticStyle:{"cursor":"pointer"},attrs:{"icon":"close"}})],1)]),(!_vm.isSupporting)?_vm._ssrNode("<div class=\"support\" data-v-55896cc8>","</div>",[_c('b-button',{attrs:{"type":"is-white"},on:{"click":function($event){$event.preventDefault();return _vm.fnShowCommunityRules()}}},[_c('div',{staticClass:"row items-center"},[_c('div',{staticClass:"logo"},[_c('XAAvatar',{attrs:{"image":_vm.avatar,"name":_vm.name,"size":"22px"}})],1),_c('div',{staticClass:"_label"},[_vm._v("Support")])])])],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/Channels/ChatHeader.vue?vue&type=template&id=55896cc8&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/dialogs.js
var dialogs = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Channels/ChatHeader.vue?vue&type=script&lang=js&
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



/* harmony default export */ var ChatHeadervue_type_script_lang_js_ = ({
  name: 'XOChannelsChatHeader',
  components: {
    XAChannelsAccount: () => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 1385)),
    XAChannelOptions: () => __webpack_require__.e(/* import() */ 117).then(__webpack_require__.bind(null, 1299)),
    XAAvatar: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 440))
  },
  mixins: [dialogs["a" /* default */]],
  props: {
    isLive: {
      type: Boolean,
      default: false
    },
    isSupporting: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isMobile: false
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('app', ['showLiveChat']),
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    channel() {
      var _this$$parent;
      return ((_this$$parent = this.$parent) === null || _this$$parent === void 0 ? void 0 : _this$$parent.channel) || {};
    },
    name() {
      var _this$channel;
      return ((_this$channel = this.channel) === null || _this$channel === void 0 ? void 0 : _this$channel.name) || null;
    },
    club() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.Club) || null;
    },
    league() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.League) || null;
    },
    lockerRoomName() {
      var _this$club, _this$league;
      return ((_this$club = this.club) === null || _this$club === void 0 ? void 0 : _this$club.name) || ((_this$league = this.league) === null || _this$league === void 0 ? void 0 : _this$league.name) || null;
    },
    avatar() {
      var _this$club2, _this$club2$Avatar, _this$league2, _this$league2$Avatar;
      return ((_this$club2 = this.club) === null || _this$club2 === void 0 ? void 0 : (_this$club2$Avatar = _this$club2.Avatar) === null || _this$club2$Avatar === void 0 ? void 0 : _this$club2$Avatar.PhotoURL) || ((_this$league2 = this.league) === null || _this$league2 === void 0 ? void 0 : (_this$league2$Avatar = _this$league2.Avatar) === null || _this$league2$Avatar === void 0 ? void 0 : _this$league2$Avatar.PhotoURL) || null;
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.fnCheckWindowSize);
  },
  mounted() {
    this.fnCheckWindowSize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.fnCheckWindowSize);
  },
  methods: {
    closeLive() {
      // console.log("closeLive")
      this.showLiveChat = false;
    },
    fnGoBack() {
      if (this.isSupporting) {
        this.$router.push({
          path: '/locker-room'
        });
        return;
      }
      if (this.isMobile) {
        this.$router.push({
          path: '/locker-room'
        });
        return;
      }
      this.$router.push({
        path: '/locker-room/explore'
      });
    },
    fnShowCommunityRules() {
      this.fnShowCommunityRulesDialog();
    },
    fnCheckWindowSize() {
      if (window.innerWidth < 768) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
    }
  }
});
// CONCATENATED MODULE: ./components/organisms/Channels/ChatHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Channels_ChatHeadervue_type_script_lang_js_ = (ChatHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/organisms/Channels/ChatHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(829)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Channels_ChatHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55896cc8",
  "7f75f2bc"
  
)

/* harmony default export */ var ChatHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(830);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("718b3d4a", content, true, context)
};

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_55896cc8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(666);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_55896cc8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_55896cc8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_55896cc8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHeader_vue_vue_type_style_index_0_id_55896cc8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xo-channels-chat-header[data-v-55896cc8]{border-bottom:1px solid rgba(231,232,232,.2);min-height:85px;padding:0 30px;width:100%}@media screen and (max-width:767px){.xo-channels-chat-header[data-v-55896cc8]{min-height:55px;padding:0 15px}}.xo-channels-chat-header[data-v-55896cc8] .left-chat-header{padding-right:20px}.xo-channels-chat-header[data-v-55896cc8] .left-chat-header .back{margin-right:20px;display:none}@media screen and (max-width:767px){.xo-channels-chat-header[data-v-55896cc8] .left-chat-header .back{display:flex}}.xo-channels-chat-header[data-v-55896cc8] .left-chat-header h3{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.xo-channels-chat-header[data-v-55896cc8] .right-chat-header>.row>div:not(:first-child){margin-left:25px}.xo-channels-chat-header[data-v-55896cc8] .support .button{height:42px;color:#f85454;text-transform:uppercase}.xo-channels-chat-header[data-v-55896cc8] .support .button .logo{margin-right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=24.js.map