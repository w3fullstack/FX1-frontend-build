exports.ids = [121];
exports.modules = {

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_1a06c7de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_1a06c7de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_1a06c7de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_1a06c7de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_id_1a06c7de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-permissions-member[data-v-1a06c7de]{min-height:88px;background-color:#f8f8f8;border-radius:10px;margin-bottom:20px;padding:10px 30px}.xa-permissions-member[data-v-1a06c7de] .details ._name{margin-left:15px;color:#0c353e}.xa-permissions-member[data-v-1a06c7de] .actions .xa-forms-select .field .control .select select{background-color:transparent}.xa-permissions-member[data-v-1a06c7de] .actions .managers-menu{margin-left:10px}.xa-permissions-member[data-v-1a06c7de] .actions .managers-menu .dropdown-trigger .icon{opacity:.5}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Permissions/Member.vue?vue&type=template&id=1a06c7de&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isRemoving)?_c('div',{staticClass:"xa-permissions-member row items-center"},[_vm._ssrNode("<div class=\"details row items-center col\" data-v-1a06c7de>","</div>",[_c('XAAvatar',{attrs:{"image":_vm.avatar,"name":_vm.name}}),_vm._ssrNode("<h4 class=\"_name\" data-v-1a06c7de>"+_vm._ssrEscape(_vm._s(_vm.name))+"</h4>")],2),(_vm.role && !_vm.isMe && !_vm.isPrimaryOwner)?_vm._ssrNode("<div class=\"actions row items-center\" data-v-1a06c7de>","</div>",[_c('XAFormsSelect',{attrs:{"options":_vm.options},on:{"input":function($event){return _vm.setLockerRoomPermissions({ type: 'edit', userID: _vm.memberID, role: _vm.memberRole })}},model:{value:(_vm.memberRole),callback:function ($$v) {_vm.memberRole=$$v},expression:"memberRole"}}),_c('b-dropdown',{staticClass:"managers-menu",attrs:{"aria-role":"list","position":"is-bottom-left","append-to-body":""},scopedSlots:_vm._u([{key:"trigger",fn:function(ref){
var active = ref.active;
return [_c('b-icon',{attrs:{"icon":"dots-horizontal"}})]}}],null,false,3996855626)},[_c('b-dropdown-item',{attrs:{"aria-role":"listitem"},on:{"click":function($event){return _vm.fnShowRemoveManagerDialog({ name: _vm.name, memberID: _vm.memberID, role: _vm.role, isPermission: true })}}},[_vm._v("Remove")])],1)],1):_vm._e()]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Permissions/Member.vue?vue&type=template&id=1a06c7de&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/dialogs.js
var dialogs = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Permissions/Member.vue?vue&type=script&lang=js&
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
  name: 'XAPermissionsMember',
  components: {
    XAAvatar: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 440)),
    XAFormsSelect: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 1429))
  },
  mixins: [dialogs["a" /* default */]],
  props: {
    member: {
      type: Object,
      default: () => {}
    },
    role: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      options: [{
        label: 'Owner',
        value: 'owner'
      }, {
        label: 'Manager',
        value: 'manager'
      }],
      memberRole: this.role || null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userID']),
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomPermissions']),
    user() {
      var _this$member;
      return ((_this$member = this.member) === null || _this$member === void 0 ? void 0 : _this$member.User) || null;
    },
    name() {
      var _this$user, _this$user2;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.name) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.username) || 'FX1 Member';
    },
    avatar() {
      var _this$user3, _this$user3$Avatar;
      return ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : (_this$user3$Avatar = _this$user3.Avatar) === null || _this$user3$Avatar === void 0 ? void 0 : _this$user3$Avatar.PhotoURL) || null;
    },
    memberID() {
      var _this$user4;
      return ((_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.id) || null;
    },
    isMe() {
      return this.memberID === this.userID;
    },
    isRemoving() {
      var _isRemoving$;
      const isRemoving = this.lockerRoomPermissions.filter(x => x.userID === this.memberID);
      return ((_isRemoving$ = isRemoving[0]) === null || _isRemoving$ === void 0 ? void 0 : _isRemoving$.type) !== 'delete';
    },
    isPrimaryOwner() {
      var _this$member2;
      return ((_this$member2 = this.member) === null || _this$member2 === void 0 ? void 0 : _this$member2.isPrimaryOwner) || false;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setLockerRoomPermissions: 'locker-room/setLockerRoomPermissions'
    })
  }
});
// CONCATENATED MODULE: ./components/atoms/Permissions/Member.vue?vue&type=script&lang=js&
 /* harmony default export */ var Permissions_Membervue_type_script_lang_js_ = (Membervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Permissions/Member.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1071)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Permissions_Membervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1a06c7de",
  "144147d6"
  
)

/* harmony default export */ var Member = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1072);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7fdbac70", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=121.js.map