exports.ids = [119];
exports.modules = {

/***/ 1300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/LockerRoom/Member.vue?vue&type=template&id=00cd9c9a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isDeleted || _vm.role === 'supporter')?_c('div',{staticClass:"xa-locker-room-member member row items-center justify-between"},[_vm._ssrNode("<div class=\"left-content\" data-v-00cd9c9a>","</div>",[_c('XAAvatar',{attrs:{"image":_vm.avatarURL,"name":_vm.name,"size":"36px"}}),_vm._ssrNode(((_vm.isOnline)?("<div class=\"is-online\" data-v-00cd9c9a></div>"):"<!---->"))],2),_vm._ssrNode("<div class=\"center-content col\""+(_vm._ssrStyle(null,{ opacity: _vm.isOnline ? 1 : 0.5 + '!important' }, null))+" data-v-00cd9c9a><div class=\"name text-weight-light\" data-v-00cd9c9a>"+_vm._ssrEscape(_vm._s(_vm.name))+"</div>"+((_vm.role !== 'supporter')?("<div class=\"role text-weight-light\" data-v-00cd9c9a>"+_vm._ssrEscape(_vm._s(_vm.role))+"</div>"):"<!---->")+"</div>"),(_vm.role !== 'supporter' && !_vm.isMe && _vm.lockerRoomRole === 'owner' && !_vm.isPrimaryOwner)?_vm._ssrNode("<div class=\"right-content\" data-v-00cd9c9a>","</div>",[_c('b-dropdown',{staticClass:"managers-menu",attrs:{"aria-role":"list","position":"is-bottom-left","append-to-body":""},scopedSlots:_vm._u([{key:"trigger",fn:function(ref){
var active = ref.active;
return [_c('b-icon',{attrs:{"icon":"dots-horizontal"}})]}}],null,false,3996855626)},[_c('b-dropdown-item',{attrs:{"aria-role":"listitem"},on:{"click":function($event){return _vm.fnShowRemoveManagerDialog({ name: _vm.name, lockerRoomID: _vm.lockerRoomID, memberID: _vm.memberID, role: _vm.role })}}},[_vm._v("Remove")]),_c('b-dropdown-item',{attrs:{"aria-role":"listitem"},on:{"click":function($event){return _vm.fnShowPermissionsDialog()}}},[_vm._v("Edit permissions")])],1)],1):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/LockerRoom/Member.vue?vue&type=template&id=00cd9c9a&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/dialogs.js
var dialogs = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/LockerRoom/Member.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Membervue_type_script_lang_js_ = ({
  name: 'XALockerRoomMember',
  components: {
    XAAvatar: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 440))
  },
  mixins: [dialogs["a" /* default */]],
  props: {
    member: {
      type: Object,
      default: () => {}
    },
    online: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive', 'lockerRoomOnline', 'lockerRoomDeletedManagers']),
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userID']),
    user() {
      var _this$member;
      return ((_this$member = this.member) === null || _this$member === void 0 ? void 0 : _this$member.User) || null;
    },
    avatarURL() {
      var _this$user, _this$user$Avatar;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : (_this$user$Avatar = _this$user.Avatar) === null || _this$user$Avatar === void 0 ? void 0 : _this$user$Avatar.PhotoURL) || null;
    },
    name() {
      var _this$user2, _this$user3;
      return ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.username) || ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.name) || 'FX1 Member' || null;
    },
    onlineUsers() {
      const onlineUsers = this.lockerRoomOnline ? this.lockerRoomOnline.map(e => {
        var _e$User;
        return e === null || e === void 0 ? void 0 : (_e$User = e.User) === null || _e$User === void 0 ? void 0 : _e$User.username;
      }) : [];
      return onlineUsers;
    },
    isOnline() {
      return this.onlineUsers.includes(this.name);
    },
    memberID() {
      var _this$user4;
      return ((_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.id) || null;
    },
    isMe() {
      return this.memberID === this.userID;
    },
    lockerRoomID() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.id) || null;
    },
    lockerRoomMyRole() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.MyRole) || null;
    },
    lockerRoomRole() {
      var _this$lockerRoomMyRol;
      return ((_this$lockerRoomMyRol = this.lockerRoomMyRole) === null || _this$lockerRoomMyRol === void 0 ? void 0 : _this$lockerRoomMyRol.role) || null;
    },
    isDeleted() {
      return !this.lockerRoomDeletedManagers.includes(this.memberID);
    },
    isPrimaryOwner() {
      var _this$member2;
      return ((_this$member2 = this.member) === null || _this$member2 === void 0 ? void 0 : _this$member2.isPrimaryOwner) || false;
    },
    role() {
      var _this$member3;
      return ((_this$member3 = this.member) === null || _this$member3 === void 0 ? void 0 : _this$member3.role) || null;
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/LockerRoom/Member.vue?vue&type=script&lang=js&
 /* harmony default export */ var LockerRoom_Membervue_type_script_lang_js_ = (Membervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/LockerRoom/Member.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(833)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LockerRoom_Membervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00cd9c9a",
  "23eb110f"
  
)

/* harmony default export */ var Member = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(834);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("21a207d3", content, true, context)
};

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_00cd9c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_00cd9c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_00cd9c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_00cd9c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_00cd9c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-locker-room-member[data-v-00cd9c9a]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-bottom:20px}.xa-locker-room-member[data-v-00cd9c9a] .left-content{position:relative}.xa-locker-room-member[data-v-00cd9c9a] .left-content .is-online{background-color:#2ddc1e;width:12px;height:12px;border:2px solid #08252c;border-radius:50%;position:absolute;bottom:0;right:0}.xa-locker-room-member[data-v-00cd9c9a] .center-content{padding:0 15px;opacity:.5}.xa-locker-room-member[data-v-00cd9c9a] .center-content .name{font-size:1.0714rem;line-height:1.4286rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.xa-locker-room-member[data-v-00cd9c9a] .center-content .role{font-size:.8571rem;line-height:1rem;text-transform:capitalize}.xa-locker-room-member[data-v-00cd9c9a] .right-content .icon{opacity:.5}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=119.js.map