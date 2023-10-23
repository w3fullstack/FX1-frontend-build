exports.ids = [69,3,24];
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

/***/ 272:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDVMMTIgMTAuNTlMNi40MSA1TDUgNi40MUwxMC41OSAxMkw1IDE3LjU5TDYuNDEgMTlMMTIgMTMuNDFMMTcuNTkgMTlMMTkgMTcuNTlMMTMuNDEgMTJMMTkgNi40MVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMi4xNjAxIDExTDIxLjI1OTcgMS45MDA0MUMyMS41ODAxIDEuNTgwMDMgMjEuNTgwMSAxLjA2MDYxIDIxLjI1OTcgMC43NDAyOEMyMC45MzkzIDAuNDE5OTQ4IDIwLjQxOTkgMC40MTk5MDcgMjAuMDk5NiAwLjc0MDI4TDExIDkuODM5OTJMMS45MDA0IDAuNzQwMjhDMS41ODAwMyAwLjQxOTkwNyAxLjA2MDYxIDAuNDE5OTA3IDAuNzQwMjc5IDAuNzQwMjhDMC40MTk5NDggMS4wNjA2NSAwLjQxOTkwNyAxLjU4MDA3IDAuNzQwMjc5IDEuOTAwNDFMOS44Mzk4NSAxMUwwLjc0MDI3OSAyMC4wOTk2QzAuNDE5OTA3IDIwLjQyIDAuNDE5OTA3IDIwLjkzOTQgMC43NDAyNzkgMjEuMjU5OEMwLjkwMDQ0NSAyMS40MTk5IDEuMTEwNCAyMS41IDEuMzIwMzYgMjEuNUMxLjUzMDMyIDIxLjUgMS43NDAyNCAyMS40MTk5IDEuOTAwNDQgMjEuMjU5OEwxMSAxMi4xNjAyTDIwLjA5OTYgMjEuMjU5OEMyMC4yNTk3IDIxLjQxOTkgMjAuNDY5NyAyMS41IDIwLjY3OTYgMjEuNUMyMC44ODk2IDIxLjUgMjEuMDk5NSAyMS40MTk5IDIxLjI1OTcgMjEuMjU5OEMyMS41ODAxIDIwLjkzOTQgMjEuNTgwMSAyMC40MiAyMS4yNTk3IDIwLjA5OTZMMTIuMTYwMSAxMVoiIGZpbGw9IiMwQzM1M0UiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    fnShowClubRegistrationDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(416).default,
        width: 500,
        canCancel: false
      });
    },
    fnShowCreateChannelDialog(details = {}) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(417).default,
        canCancel: false,
        customClass: 'right-dialog',
        width: 575,
        props: {
          details
        }
      });
    },
    fnShowCreateChannelGroupDialog(details = {}) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(418).default,
        canCancel: false,
        customClass: 'right-dialog',
        width: 575,
        props: {
          details
        }
      });
    },
    fnShowInviteManagersDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(419).default,
        canCancel: false,
        customClass: 'right-dialog',
        width: 575
      });
    },
    fnShowCommunityRulesDialog(details = {}) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(420).default,
        canCancel: false,
        customClass: 'right-dialog',
        width: 700,
        props: {
          details
        }
      });
    },
    fnShowEditAvatarDialog(file) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(421).default,
        canCancel: false,
        width: 575,
        props: {
          file
        }
      });
    },
    fnShowEditAvatarNewDialog(file, onUploaded) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(422).default,
        canCancel: false,
        width: 520,
        props: {
          file,
          onUploaded
        }
      });
    },
    fnShowRemoveManagerDialog(details) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(423).default,
        canCancel: false,
        width: 450,
        props: {
          details
        }
      });
    },
    fnShowPermissionsDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(424).default,
        canCancel: false,
        customClass: 'right-dialog',
        width: 700
      });
    },
    fnShowDeleteChannelDialog(details) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(425).default,
        canCancel: false,
        width: 450,
        props: {
          details
        }
      });
    },
    fnShowDeleteChannelGroupDialog(details) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(426).default,
        canCancel: false,
        width: 450,
        props: {
          details
        }
      });
    },
    fnShowDeleteMessageDialog(details) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(427).default,
        canCancel: false,
        width: 360,
        props: {
          details
        }
      });
    },
    fnShowInvitationDialog(details) {
      const isMobile = window.innerWidth <= 427;
      const modalWidth = isMobile ? 338 : 418;
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(428).default,
        canCancel: false,
        width: modalWidth,
        props: {
          details
        }
      });
    },
    fnShowLeaveGroupDialog(details) {
      const isMobile = window.innerWidth <= 427;
      const modalWidth = isMobile ? 338 : 418;
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(429).default,
        canCancel: false,
        width: modalWidth,
        props: {
          details
        }
      });
    },
    fnEmailConfirmationDialog(email, onSubmit) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(430).default,
        canCancel: false,
        width: 447,
        props: {
          email,
          onSubmit
        }
      });
    },
    fnShowPasswordUpdatedDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(431).default,
        canCancel: false,
        width: 447
      });
    },
    fnDeleteAccountDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(432).default,
        canCancel: false,
        width: 582
      });
    },
    fnInviteMessagesDialog(details, onAction) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(433).default,
        canCancel: false,
        width: 447,
        props: {
          details,
          onAction
        }
      });
    },
    fnCreatePrivateGroupDialog(details, onCreate) {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(415).default,
        canCancel: false,
        width: 600,
        props: {
          details,
          onCreate
        }
      });
    },
    fnEncryptedChatDialog() {
      this.$buefy.modal.open({
        parent: this,
        component: __webpack_require__(434).default,
        canCancel: false,
        width: 418
      });
    }
  }
});

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Loader.vue?vue&type=template&id=b21f7a1c&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-loader",style:([_vm.loaderSize])},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Loader.vue?vue&type=template&id=b21f7a1c&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Loader.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  name: 'XALoader',
  props: {
    size: {
      type: Number,
      default: 48
    }
  },
  computed: {
    loaderSize() {
      const loaderSize = {
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderWidth: `${this.size / 10}px`
      };
      return loaderSize;
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var atoms_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Loader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(358)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b21f7a1c",
  "6a8c0057"
  
)

/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("51bf5766", content, true, context)
};

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljg1MzU1IDAuMTQ2NDQ3QzguMDQ4ODIgMC4zNDE3MDkgOC4wNDg4MiAwLjY1ODI5MSA3Ljg1MzU1IDAuODUzNTUzTDIuODUzNTUgNS44NTM1NUMyLjY1ODI5IDYuMDQ4ODIgMi4zNDE3MSA2LjA0ODgyIDIuMTQ2NDUgNS44NTM1NUwwLjE0NjQ0NyAzLjg1MzU1Qy0wLjA0ODgxNTUgMy42NTgyOSAtMC4wNDg4MTU1IDMuMzQxNzEgMC4xNDY0NDcgMy4xNDY0NUMwLjM0MTcwOSAyLjk1MTE4IDAuNjU4MjkxIDIuOTUxMTggMC44NTM1NTMgMy4xNDY0NUwyLjUgNC43OTI4OUw3LjE0NjQ1IDAuMTQ2NDQ3QzcuMzQxNzEgLTAuMDQ4ODE1NSA3LjY1ODI5IC0wLjA0ODgxNTUgNy44NTM1NSAwLjE0NjQ0N1oiIGZpbGw9IiNDM0NEQ0YiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("41068ba0", content, true, context)
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(368);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d4e90c56", content, true, context)
};

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1449d04a", content, true, context)
};

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("256f6fe2", content, true, context)
};

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(374);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1476ad79", content, true, context)
};

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("89ccec2c", content, true, context)
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(378);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1c2b8cab", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("75898864", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f0132ed6", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(384);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("69ee50c0", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AddImageIcon.svg": 319,
	"./EUROPALeague.svg": 320,
	"./Group.svg": 321,
	"./JuventusLogo.svg": 322,
	"./NantesLogo.svg": 323,
	"./backArrow.svg": 324,
	"./bell.svg": 325,
	"./calendar.svg": 326,
	"./camera-off.svg": 327,
	"./camera.svg": 328,
	"./camera_dark.svg": 329,
	"./cameraicon.svg": 330,
	"./chat-icon.svg": 331,
	"./chatIcon.svg": 332,
	"./chatIconArrowRight.svg": 309,
	"./check-circle.svg": 333,
	"./checked.svg": 310,
	"./chevron.svg": 334,
	"./close-modal.svg": 272,
	"./close.svg": 311,
	"./copy-link-dark.svg": 312,
	"./copy-link.svg": 335,
	"./create-private.svg": 313,
	"./dots-icon.svg": 314,
	"./hulu.svg": 336,
	"./info-circle.svg": 337,
	"./kayo.svg": 338,
	"./leave-channel.svg": 315,
	"./link-copied.svg": 277,
	"./live.svg": 339,
	"./liveEvent.svg": 340,
	"./livesignal.svg": 341,
	"./members-white.svg": 342,
	"./members.svg": 316,
	"./messageBubbleBreak.svg": 343,
	"./microphone-off.svg": 344,
	"./microphone.svg": 345,
	"./microphone_dark.svg": 346,
	"./msgsentbtn.svg": 347,
	"./muted.svg": 306,
	"./primevideo.svg": 348,
	"./remove.svg": 317,
	"./search.svg": 318,
	"./show-modal.svg": 349,
	"./signal-link.svg": 350,
	"./soccer.svg": 351,
	"./speaker.svg": 352,
	"./telegram-link.svg": 353,
	"./userImage.svg": 354,
	"./video-icon.svg": 355,
	"./whatsapp-link.svg": 356
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 288;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("161c28e1", content, true, context)
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2aae8ad0", content, true, context)
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(390);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4e7d7c83", content, true, context)
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("73494698", content, true, context)
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("109d32f0", content, true, context)
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(396);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d3a0125a", content, true, context)
};

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("360cb1a3", content, true, context)
};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(400);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("78182099", content, true, context)
};

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("120a551e", content, true, context)
};

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("41ed1bcd", content, true, context)
};

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("ca3b3a38", content, true, context)
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3b043053", content, true, context)
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3ec5361b", content, true, context)
};

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(412);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b89af670", content, true, context)
};

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7d384215", content, true, context)
};

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNCA4SDhWMTRINlY4SDBWNkg2VjBIOFY2SDE0VjhaIiBmaWxsPSIjMEMzNTNFIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljg1MzU1IDAuMTQ2NDQ3QzguMDQ4ODIgMC4zNDE3MDkgOC4wNDg4MiAwLjY1ODI5MSA3Ljg1MzU1IDAuODUzNTUzTDIuODUzNTUgNS44NTM1NUMyLjY1ODI5IDYuMDQ4ODIgMi4zNDE3MSA2LjA0ODgyIDIuMTQ2NDUgNS44NTM1NUwwLjE0NjQ0NyAzLjg1MzU1Qy0wLjA0ODgxNTUgMy42NTgyOSAtMC4wNDg4MTU1IDMuMzQxNzEgMC4xNDY0NDcgMy4xNDY0NUMwLjM0MTcwOSAyLjk1MTE4IDAuNjU4MjkxIDIuOTUxMTggMC44NTM1NTMgMy4xNDY0NUwyLjUgNC43OTI4OUw3LjE0NjQ1IDAuMTQ2NDQ3QzcuMzQxNzEgLTAuMDQ4ODE1NSA3LjY1ODI5IC0wLjA0ODgxNTUgNy44NTM1NSAwLjE0NjQ0N1oiIGZpbGw9IiMwQzM1M0UiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiNDRDNCMzMiIGQ9Ik02IDkuNXYyIi8+DQo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiB4PSI0IiB5PSIxMSIgZmlsbD0iI0NEM0IzMyIgcng9Ii41Ii8+DQo8cGF0aCBzdHJva2U9IiNDRDNCMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExLjkyIDEuMDggMS4wOCAxMS45MiIvPg0KPHBhdGggZmlsbD0iI0NEM0IzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAzLjU5VjNhMiAyIDAgMSAwLTQgMHY0LjU5bDQtNFpNOCA2LjRsLTMuMiAzLjJBMiAyIDAgMCAwIDggOFY2LjRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.7b9888c.svg";

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNCAxLjQxTDEyLjU5IDBMNyA1LjU5TDEuNDEgMEwwIDEuNDFMNS41OSA3TDAgMTIuNTlMMS40MSAxNEw3IDguNDFMMTIuNTkgMTRMMTQgMTIuNTlMOC40MSA3TDE0IDEuNDFaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xOS4xNDI5IDExLjVMOCAxMS41TTE0Ljg1NzEgMTYuNjQyOUwyMCAxMS41TDE0Ljg1NzEgNi4zNTcxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTQgNUw0IDE4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjEzOTQgMC4xOTUyNjJDMTEuMzk5NyAwLjQ1NTYxMiAxMS4zOTk3IDAuODc3NzIyIDExLjEzOTQgMS4xMzgwN0w0LjQ3MjcxIDcuODA0NzRDNC4yMTIzNiA4LjA2NTA5IDMuNzkwMjUgOC4wNjUwOSAzLjUyOTkgNy44MDQ3NEwwLjg2MzIzMSA1LjEzODA3QzAuNjAyODgxIDQuODc3NzIgMC42MDI4ODEgNC40NTU2MSAwLjg2MzIzMSA0LjE5NTI2QzEuMTIzNTggMy45MzQ5MSAxLjU0NTY5IDMuOTM0OTEgMS44MDYwNCA0LjE5NTI2TDQuMDAxMyA2LjM5MDUyTDEwLjE5NjYgMC4xOTUyNjJDMTAuNDU2OSAtMC4wNjUwODc0IDEwLjg3OSAtMC4wNjUwODc0IDExLjEzOTQgMC4xOTUyNjJaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNC41NTQ2IDEuNDFMMTMuMTAzNSAwTDcuMzUwNTcgNS41OUwxLjU5NzU5IDBMMC4xNDY0ODQgMS40MUw1Ljg5OTQ2IDdMMC4xNDY0ODQgMTIuNTlMMS41OTc1OSAxNEw3LjM1MDU3IDguNDFMMTMuMTAzNSAxNEwxNC41NTQ2IDEyLjU5TDguODAxNjcgN0wxNC41NTQ2IDEuNDFaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiMwQzM1M0UiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCAxMUg2QTUgNSAwIDAgMSA2IDFoMm02IDEwaDJhNSA1IDAgMCAwIDAtMTBoLTJNNiA2aDEwIi8+DQo8L3N2Zz4="

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/create-private.33d0f18.svg";

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDE2IDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMEMwLjkgMCAwIDAuOSAwIDJDMCAzLjEgMC45IDQgMiA0QzMuMSA0IDQgMy4xIDQgMkM0IDAuOSAzLjEgMCAyIDBaTTE0IDBDMTIuOSAwIDEyIDAuOSAxMiAyQzEyIDMuMSAxMi45IDQgMTQgNEMxNS4xIDQgMTYgMy4xIDE2IDJDMTYgMC45IDE1LjEgMCAxNCAwWk02IDJDNiAwLjkgNi45IDAgOCAwQzkuMSAwIDEwIDAuOSAxMCAyQzEwIDMuMSA5LjEgNCA4IDRDNi45IDQgNiAzLjEgNiAyWiIgZmlsbD0iI0RBREFEQSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy40NDE3IDE0LjYyTDIwLjAwMTcgMTIuMDZMMTcuNDQxNyA5LjVNOS43NjE3MiAxMi4wNkgxOS45MzE3TTExLjc2MTcgMjBDNy4zNDE3MiAyMCAzLjc2MTcyIDE3IDMuNzYxNzIgMTJDMy43NjE3MiA3IDcuMzQxNzIgNCAxMS43NjE3IDQiIHN0cm9rZT0iI0Y4NTQ1NCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSAxMkMxMC45MyAxMiAxMi41IDEwLjQzIDEyLjUgOC41QzEyLjUgNi41NyAxMC45MyA1IDkgNUM3LjA3IDUgNS41IDYuNTcgNS41IDguNUM1LjUgMTAuNDMgNy4wNyAxMiA5IDEyWk0yIDE3LjI1QzIgMTQuOTIgNi42NiAxMy43NSA5IDEzLjc1QzExLjM0IDEzLjc1IDE2IDE0LjkyIDE2IDE3LjI1VjE5SDJWMTcuMjVaTTkgMTUuNzVDNy4yMSAxNS43NSA1LjE4IDE2LjQyIDQuMzQgMTdIMTMuNjZDMTIuODIgMTYuNDIgMTAuNzkgMTUuNzUgOSAxNS43NVpNMTAuNSA4LjVDMTAuNSA3LjY3IDkuODMgNyA5IDdDOC4xNyA3IDcuNSA3LjY3IDcuNSA4LjVDNy41IDkuMzMgOC4xNyAxMCA5IDEwQzkuODMgMTAgMTAuNSA5LjMzIDEwLjUgOC41Wk0xNi4wNCAxMy44MUMxNy4yIDE0LjY1IDE4IDE1Ljc3IDE4IDE3LjI1VjE5SDIyVjE3LjI1QzIyIDE1LjIzIDE4LjUgMTQuMDggMTYuMDQgMTMuODFaTTE4LjUgOC41QzE4LjUgMTAuNDMgMTYuOTMgMTIgMTUgMTJDMTQuNDYgMTIgMTMuOTYgMTEuODcgMTMuNSAxMS42NUMxNC4xMyAxMC43NiAxNC41IDkuNjcgMTQuNSA4LjVDMTQuNSA3LjMzIDE0LjEzIDYuMjQgMTMuNSA1LjM1QzEzLjk2IDUuMTMgMTQuNDYgNSAxNSA1QzE2LjkzIDUgMTguNSA2LjU3IDE4LjUgOC41WiIgZmlsbD0iIzBDMzUzRSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yOS41NTQ2IDE2LjQxTDI4LjEwMzUgMTVMMjIuMzUwNiAyMC41OUwxNi41OTc2IDE1TDE1LjE0NjUgMTYuNDFMMjAuODk5NSAyMkwxNS4xNDY1IDI3LjU5TDE2LjU5NzYgMjlMMjIuMzUwNiAyMy40MUwyOC4xMDM1IDI5TDI5LjU1NDYgMjcuNTlMMjMuODAxNyAyMkwyOS41NTQ2IDE2LjQxWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNjQ0NCAxMi44MzQ1SDE0LjU0NzhMMjAuMjUzOSAxOC41NTJMMTguNTUwMSAyMC4yNTU5TDEyLjgzMjUgMTQuNTQ5N1YxMy42NDY0TDEyLjUyMzggMTMuMzI2MkMxMS4yMjAyIDE0LjQ0NjggOS41Mjc3OCAxNS4xMjE1IDcuNjg2NzMgMTUuMTIxNUMzLjU4MTUyIDE1LjEyMTUgMC4yNTM5MDYgMTEuNzkzOSAwLjI1MzkwNiA3LjY4ODY4QzAuMjUzOTA2IDMuNTgzNDggMy41ODE1MiAwLjI1NTg1OSA3LjY4NjczIDAuMjU1ODU5QzExLjc5MTkgMC4yNTU4NTkgMTUuMTE5NSAzLjU4MzQ4IDE1LjExOTUgNy42ODg2OEMxNS4xMTk1IDkuNTI5NzMgMTQuNDQ0OSAxMS4yMjIxIDEzLjMyNDIgMTIuNTI1N0wxMy42NDQ0IDEyLjgzNDVaTTIuNTQwOTMgNy42ODg2OEMyLjU0MDkzIDEwLjUzNiA0LjgzOTM4IDEyLjgzNDUgNy42ODY3MyAxMi44MzQ1QzEwLjUzNDEgMTIuODM0NSAxMi44MzI1IDEwLjUzNiAxMi44MzI1IDcuNjg4NjhDMTIuODMyNSA0Ljg0MTM0IDEwLjUzNDEgMi41NDI4OCA3LjY4NjczIDIuNTQyODhDNC44MzkzOCAyLjU0Mjg4IDIuNTQwOTMgNC44NDEzNCAyLjU0MDkzIDcuNjg4NjhaIiBmaWxsPSIjOTRBNkFBIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMi41NjU0IDIyLjU2NTRMMzEuNDM0NiAyMi41NjU0QzMxLjc0NjkgMjIuNTY1NCAzMiAyMi4zMTIyIDMyIDIyQzMyIDIxLjY4NzcgMzEuNzQ2OSAyMS40MzQ2IDMxLjQzNDYgMjEuNDM0NkwyMi41NjU0IDIxLjQzNDZMMjIuNTY1NCAxMi41NjU0QzIyLjU2NTQgMTIuMjUzMSAyMi4zMTIzIDEyIDIyIDEyQzIxLjY4NzggMTIgMjEuNDM0NiAxMi4yNTMxIDIxLjQzNDYgMTIuNTY1NEwyMS40MzQ2IDIxLjQzNDZMMTIuNTY1NCAyMS40MzQ2QzEyLjI1MzEgMjEuNDM0NiAxMiAyMS42ODc4IDEyIDIyQzEyIDIyLjE1NjEgMTIuMDYzMyAyMi4yOTc1IDEyLjE2NTYgMjIuMzk5OEMxMi4yNjc5IDIyLjUwMjEgMTIuNDA5MyAyMi41NjU0IDEyLjU2NTQgMjIuNTY1NEwyMS40MzQ2IDIyLjU2NTRMMjEuNDM0NiAzMS40MzQ2QzIxLjQzNDYgMzEuNTkwNyAyMS40OTc5IDMxLjczMjEgMjEuNjAwMiAzMS44MzQ0QzIxLjcwMjUgMzEuOTM2NyAyMS44NDM5IDMyIDIyIDMyQzIyLjMxMjIgMzIgMjIuNTY1NCAzMS43NDY5IDIyLjU2NTQgMzEuNDM0NkwyMi41NjU0IDIyLjU2NTRaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/EUROPALeague.0e8ac69.svg";

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSAxMkMxMC45MyAxMiAxMi41IDEwLjQzIDEyLjUgOC41QzEyLjUgNi41NyAxMC45MyA1IDkgNUM3LjA3IDUgNS41IDYuNTcgNS41IDguNUM1LjUgMTAuNDMgNy4wNyAxMiA5IDEyWk0yIDE3LjI1QzIgMTQuOTIgNi42NiAxMy43NSA5IDEzLjc1QzExLjM0IDEzLjc1IDE2IDE0LjkyIDE2IDE3LjI1VjE5SDJWMTcuMjVaTTkgMTUuNzVDNy4yMSAxNS43NSA1LjE4IDE2LjQyIDQuMzQgMTdIMTMuNjZDMTIuODIgMTYuNDIgMTAuNzkgMTUuNzUgOSAxNS43NVpNMTAuNSA4LjVDMTAuNSA3LjY3IDkuODMgNyA5IDdDOC4xNyA3IDcuNSA3LjY3IDcuNSA4LjVDNy41IDkuMzMgOC4xNyAxMCA5IDEwQzkuODMgMTAgMTAuNSA5LjMzIDEwLjUgOC41Wk0xNi4wNCAxMy44MUMxNy4yIDE0LjY1IDE4IDE1Ljc3IDE4IDE3LjI1VjE5SDIyVjE3LjI1QzIyIDE1LjIzIDE4LjUgMTQuMDggMTYuMDQgMTMuODFaTTE4LjUgOC41QzE4LjUgMTAuNDMgMTYuOTMgMTIgMTUgMTJDMTQuNDYgMTIgMTMuOTYgMTEuODcgMTMuNSAxMS42NUMxNC4xMyAxMC43NiAxNC41IDkuNjcgMTQuNSA4LjVDMTQuNSA3LjMzIDE0LjEzIDYuMjQgMTMuNSA1LjM1QzEzLjk2IDUuMTMgMTQuNDYgNSAxNSA1QzE2LjkzIDUgMTguNSA2LjU3IDE4LjUgOC41WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/JuventusLogo.0d81cda.svg";

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NantesLogo.254c0e2.svg";

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAxMUg3LjgzTDEzLjQyIDUuNDFMMTIgNEw0IDEyTDEyIDIwTDEzLjQxIDE4LjU5TDcuODMgMTNIMjBWMTFaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bell.cc5e50d.svg";

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/calendar.7b8ca8a.svg";

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiNDM0NEQ0YiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNi42MyA3LjU4cy4wMy0uOTUgMC0xLjI2Yy0uMTctMi4wNC0xLjUtMi43NC00LjExLTIuNzRINi4yMUMzLjA1IDMuNTggMiA0LjYzIDIgNy44djguNDJhNC4yIDQuMiAwIDAgMCAxLjM3IDMuMzRMNCAyMG0xMi43NC05LjA1djUuMjZjMCAzLjE2LTEuMDUgNC4yMS00LjIxIDQuMjFINy4yNk0yMiA2Ljc0djkuMDdjMCAxLjY3LTEuMTIgMi4yNS0yLjQ4IDEuM2wtMi43OC0xLjk2TTIyLjAyIDIuMmwtMjAgMjAiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPg0KPHBhdGggZD0iTTEyLjUzIDIwLjQySDYuMjFDMy4wNSAyMC40MiAyIDE4LjMyIDIgMTYuMlY3Ljc5YzAtMy4xNiAxLjA1LTQuMjEgNC4yMS00LjIxaDYuMzJjMy4xNiAwIDQuMjEgMS4wNSA0LjIxIDQuMnY4LjQzYzAgMy4xNi0xLjA2IDQuMi00LjIxIDQuMloiLz4NCjxwYXRoIGQ9Im0xOS41MiAxNy4xLTIuNzgtMS45NVY4Ljg0bDIuNzgtMS45NWMxLjM2LS45NSAyLjQ4LS4zNyAyLjQ4IDEuM3Y3LjYyYzAgMS42Ny0xLjEyIDIuMjUtMi40OCAxLjI5Wk0xMS41IDExYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzWiIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8ZyBzdHJva2U9IiMwODI1MkMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPg0KPHBhdGggZD0iTTEyLjUzIDIwLjQySDYuMjFDMy4wNSAyMC40MiAyIDE4LjMyIDIgMTYuMlY3Ljc5YzAtMy4xNiAxLjA1LTQuMjEgNC4yMS00LjIxaDYuMzJjMy4xNiAwIDQuMjEgMS4wNSA0LjIxIDQuMnY4LjQzYzAgMy4xNi0xLjA2IDQuMi00LjIxIDQuMloiLz4NCjxwYXRoIGQ9Im0xOS41MiAxNy4xLTIuNzgtMS45NVY4Ljg0bDIuNzgtMS45NWMxLjM2LS45NSAyLjQ4LS4zNyAyLjQ4IDEuM3Y3LjYyYzAgMS42Ny0xLjEyIDIuMjUtMi40OCAxLjI5Wk0xMS41IDExYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzWiIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cameraicon.bd9ac45.svg";

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+DQo8cGF0aCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTcuOTggMTAuNzl2NGMwIC4yNi0uMDEuNTEtLjA0Ljc1LS4yMyAyLjctMS44MiA0LjA0LTQuNzUgNC4wNGgtLjRjLS4yNSAwLS40OS4xMi0uNjQuMzJsLTEuMiAxLjZjLS41My43MS0xLjM5LjcxLTEuOTIgMGwtMS4yLTEuNmEuOTI1LjkyNSAwIDAgMC0uNjQtLjMyaC0uNEMzLjYgMTkuNTggMiAxOC43OSAyIDE0Ljc5di00YzAtMi45MyAxLjM1LTQuNTIgNC4wNC00Ljc1LjI0LS4wMy40OS0uMDQuNzUtLjA0aDYuNGMzLjE5IDAgNC43OSAxLjYgNC43OSA0Ljc5WiIvPg0KPHBhdGggc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjk4IDYuNzl2NGMwIDIuOTQtMS4zNSA0LjUyLTQuMDQgNC43NS4wMy0uMjQuMDQtLjQ5LjA0LS43NXYtNGMwLTMuMTktMS42LTQuNzktNC43OS00Ljc5aC02LjRjLS4yNiAwLS41MS4wMS0uNzUuMDRDNi4yNyAzLjM1IDcuODYgMiAxMC43OSAyaDYuNGMzLjE5IDAgNC43OSAxLjYgNC43OSA0Ljc5WiIvPg0KPHBhdGggc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTMuNDk0IDEzLjI1aC4wMW0tMy41MSAwaC4wMW0tMy41MSAwaC4wMSIvPg0KPC9nPg0KPC9zdmc+"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi42NjczMiAwLjgzMzMzNkgxNy4zMzRDMTguMzQyMyAwLjgzMzMzNiAxOS4xNjczIDEuNjU4MzQgMTkuMTY3MyAyLjY2NjY3VjEzLjY2NjdDMTkuMTY3MyAxNC42NzUgMTguMzQyMyAxNS41IDE3LjMzNCAxNS41SDQuNTAwNjVMMC44MzM5ODQgMTkuMTY2N1YyLjY2NjY3QzAuODMzOTg0IDEuNjU4MzQgMS42NTg5OCAwLjgzMzMzNiAyLjY2NzMyIDAuODMzMzM2Wk00LjUwMDY1IDEzLjY2NjdIMTcuMzM0VjIuNjY2NjdIMi42NjczMlYxNS41TDQuNTAwNjUgMTMuNjY2N1oiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiM4ODZCRjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNy41IDEyIDMgMyA2LTZtNS41IDNhMTAgMTAgMCAxIDEtMjAgMCAxMCAxMCAwIDAgMSAyMCAwWiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiNDM0NEQ0YiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTEzLjI4IDUuOTYtNC4zNSA0LjM1Yy0uNS41MS0xLjM1LjUxLTEuODYgMEwyLjcyIDUuOTYiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05LjUgMTdINy41QzQuNzM4NTggMTcgMi41IDE0Ljc2MTQgMi41IDEyQzIuNSA5LjIzODU4IDQuNzM4NTggNyA3LjUgN0g5LjVNMTUuNSAxN0gxNy41QzIwLjI2MTQgMTcgMjIuNSAxNC43NjE0IDIyLjUgMTJDMjIuNSA5LjIzODU4IDIwLjI2MTQgNyAxNy41IDdIMTUuNU03LjUgMTJMMTcuNSAxMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hulu.0640513.svg";

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+DQo8Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIgZmlsbD0iI0ZGQUYyMyIgc3Ryb2tlPSIjRkZBRjIzIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04IDEyVjhtMC00aC4wMSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kayo.5f0f717.svg";

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/live.6bf3c8a.svg";

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgcng9IjUiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNTQuMTkzIDM1LjgwNzZDNTkuMjY5OSA0MC44ODQ0IDU5LjI2OTkgNDkuMTE1NiA1NC4xOTMgNTQuMTkyNE0zNS44MDgzIDU0LjE5MjNDMzAuNzMxNCA0OS4xMTU1IDMwLjczMTQgNDAuODg0NCAzNS44MDgzIDM1LjgwNzVNMjkuNjggNjAuMzIwNkMyMS4yMTg2IDUxLjg1OTMgMjEuMjE4NiAzOC4xNDA3IDI5LjY4IDI5LjY3OTRNNjAuMzIxMyAyOS42Nzk1QzY4Ljc4MjcgMzguMTQwOCA2OC43ODI3IDUxLjg1OTQgNjAuMzIxMyA2MC4zMjA3TTQ5LjMzNCA0NUM0OS4zMzQgNDcuMzkzMiA0Ny4zOTM5IDQ5LjMzMzMgNDUuMDAwNyA0OS4zMzMzQzQyLjYwNzQgNDkuMzMzMyA0MC42NjczIDQ3LjM5MzIgNDAuNjY3MyA0NUM0MC42NjczIDQyLjYwNjggNDIuNjA3NCA0MC42NjY3IDQ1LjAwMDcgNDAuNjY2N0M0Ny4zOTM5IDQwLjY2NjcgNDkuMzM0IDQyLjYwNjggNDkuMzM0IDQ1WiIgc3Ryb2tlPSIjNTU3Mjc4IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMy41MzQ5IDYuOTY0NDdDMTUuNDg3NSA4LjkxNzEgMTUuNDg3NSAxMi4wODI5IDEzLjUzNDkgMTQuMDM1NU02LjQ2MzgyIDE0LjAzNTVDNC41MTExOSAxMi4wODI5IDQuNTExMTkgOC45MTcwNyA2LjQ2MzgyIDYuOTY0NDVNNC4xMDY3OSAxNi4zOTI2QzAuODUyNDIzIDEzLjEzODIgMC44NTI0MjMgNy44NjE4MiA0LjEwNjc5IDQuNjA3NDVNMTUuODkxOSA0LjYwNzQ5QzE5LjE0NjMgNy44NjE4NiAxOS4xNDYzIDEzLjEzODIgMTUuODkxOSAxNi4zOTI2TTExLjY2NiAxMC41QzExLjY2NiAxMS40MjA1IDEwLjkxOTggMTIuMTY2NyA5Ljk5OTM1IDEyLjE2NjdDOS4wNzg4NyAxMi4xNjY3IDguMzMyNjggMTEuNDIwNSA4LjMzMjY4IDEwLjVDOC4zMzI2OCA5LjU3OTUzIDkuMDc4ODcgOC44MzMzNCA5Ljk5OTM1IDguODMzMzRDMTAuOTE5OCA4LjgzMzM0IDExLjY2NiA5LjU3OTUzIDExLjY2NiAxMC41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDEyQzEwLjkzIDEyIDEyLjUgMTAuNDMgMTIuNSA4LjVDMTIuNSA2LjU3IDEwLjkzIDUgOSA1QzcuMDcgNSA1LjUgNi41NyA1LjUgOC41QzUuNSAxMC40MyA3LjA3IDEyIDkgMTJaTTIgMTcuMjVDMiAxNC45MiA2LjY2IDEzLjc1IDkgMTMuNzVDMTEuMzQgMTMuNzUgMTYgMTQuOTIgMTYgMTcuMjVWMTlIMlYxNy4yNVpNOSAxNS43NUM3LjIxIDE1Ljc1IDUuMTggMTYuNDIgNC4zNCAxN0gxMy42NkMxMi44MiAxNi40MiAxMC43OSAxNS43NSA5IDE1Ljc1Wk0xMC41IDguNUMxMC41IDcuNjcgOS44MyA3IDkgN0M4LjE3IDcgNy41IDcuNjcgNy41IDguNUM3LjUgOS4zMyA4LjE3IDEwIDkgMTBDOS44MyAxMCAxMC41IDkuMzMgMTAuNSA4LjVaTTE2LjA0IDEzLjgxQzE3LjIgMTQuNjUgMTggMTUuNzcgMTggMTcuMjVWMTlIMjJWMTcuMjVDMjIgMTUuMjMgMTguNSAxNC4wOCAxNi4wNCAxMy44MVpNMTguNSA4LjVDMTguNSAxMC40MyAxNi45MyAxMiAxNSAxMkMxNC40NiAxMiAxMy45NiAxMS44NyAxMy41IDExLjY1QzE0LjEzIDEwLjc2IDE0LjUgOS42NyAxNC41IDguNUMxNC41IDcuMzMgMTQuMTMgNi4yNCAxMy41IDUuMzVDMTMuOTYgNS4xMyAxNC40NiA1IDE1IDVDMTYuOTMgNSAxOC41IDYuNTcgMTguNSA4LjVaIiBmaWxsPSIjZmZmIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wIDBIMTZWMjRDMTIuMzUyOCAxMC43NjUzIDguODIxNzYgNS40NzI4OCAwIDBaIiBmaWxsPSIjMkE0RTU1Ii8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8ZyBzdHJva2U9IiNDM0NEQ0YiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPg0KPHBhdGggZD0iTTE2IDYuM1Y2YTQgNCAwIDEgMC04IDB2NW0xLjA0IDMuMTlBNCA0IDAgMCAwIDE2IDExLjVWMTEiLz4NCjxwYXRoIGQ9Ik02Ljc4IDE2Ljk1YTcuNjYgNy42NiAwIDAgMCAxMi44Ny01LjZ2LTEuN20tMTUuMyAwdjEuN2MwIDEuMDYuMjEgMi4wNi42IDIuOThNMjAuMDcgMi44NCAzLjkzIDE4Ljk5TTExIDN2M20xIDEzdjMiLz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPg0KPHBhdGggZD0iTTEyIDE1LjVhNCA0IDAgMCAwIDQtNFY2YTQgNCAwIDEgMC04IDB2NS41YTQgNCAwIDAgMCA0IDRaIi8+DQo8cGF0aCBkPSJNNC4zNSA5LjY1djEuN0E3LjY2IDcuNjYgMCAwIDAgMTIgMTltMCAwYTcuNjYgNy42NiAwIDAgMCA3LjY1LTcuNjV2LTEuN00xMiAxOXYzTTEwLjYxIDYuNDNjLjktLjMzIDEuODgtLjMzIDIuNzggME0xMS4yIDguNTVhMy4xNCAzLjE0IDAgMCAxIDEuNjEgMCIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8ZyBzdHJva2U9IiMwODI1MkMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPg0KPHBhdGggZD0iTTEyIDE1LjVhNCA0IDAgMCAwIDQtNFY2YTQgNCAwIDEgMC04IDB2NS41YTQgNCAwIDAgMCA0IDRaIi8+DQo8cGF0aCBkPSJNNC4zNSA5LjY1djEuN0E3LjY2IDcuNjYgMCAwIDAgMTIgMTltMCAwYTcuNjYgNy42NiAwIDAgMCA3LjY1LTcuNjV2LTEuN00xMiAxOXYzTTEwLjYxIDYuNDNjLjktLjMzIDEuODgtLjMzIDIuNzggME0xMS4yIDguNTVhMy4xNCAzLjE0IDAgMCAxIDEuNjEgMCIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yLjAxIDIxTDIzIDEyTDIuMDEgM0wyIDEwTDE3IDEyTDIgMTRMMi4wMSAyMVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/primevideo.94eb96f.svg";

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00Ljg1NzE0IDEyLjUwMDNMMTYgMTIuNTAwM005LjE0Mjg2IDcuMzU3NDJMNCAxMi41MDAzTDkuMTQyODYgMTcuNjQzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTIwIDE5VjYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/signal-link.9382a55.svg";

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiAyMUMxNi45NzA2IDIxIDIxIDE2Ljk3MDYgMjEgMTJDMjEgNy4wMjk0NCAxNi45NzA2IDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNi45NzA2IDcuMDI5NDQgMjEgMTIgMjFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNS41NjY3IDExLjIwMjJMMTguMDQ1IDEwLjE1MjJMMTkuMjUzNCA2LjcxODExTTIwLjk1MzEgMTIuNjU0OEwxOC4wNDUgMTAuMTUyMk04LjQzMzI4IDExLjIwMjJMNS45NTUgMTAuMTUyMkw0Ljc0NjU2IDYuNzE4MTFNMy4wNDY4OCAxMi42NTQ4TDUuOTU1IDEwLjE1MjJNMTIgOC4yMTAxNFY1LjUxMTU1TDE1IDMuNTEyOE05IDMuNTEyMzNMMTIgNS41MTE1NU0xNC42MjUgMTVMMTUuOTM3NSAxNy4yNUwxNC42MjUgMjAuNTc4MU0xOS4yNTM0IDE3LjI1SDE2LjAzMTJNOS4zNzUgMTVMOC4wNjI1IDE3LjI1TDkuMzkyMzQgMjAuNjAxNU00Ljc2MzkxIDE3LjI1SDguMDYyNU0xMiA4LjIxMDE0TDguNDMzMjggMTEuMjAyMkw5LjM3NSAxNUgxNC42MjVMMTUuNTY2NyAxMS4yMDIyTDEyIDguMjEwMTRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMiAxMC41djRjMCAyIDEgMyAzIDNoMS40M2MuMzcgMCAuNzQuMTEgMS4wNi4zbDIuOTIgMS44M2MyLjUyIDEuNTggNC41OS40MyA0LjU5LTIuNTRWNy45MWMwLTIuOTgtMi4wNy00LjEyLTQuNTktMi41NEw3LjQ5IDcuMmMtLjMyLjItLjY5LjMtMS4wNi4zSDVjLTIgMC0zIDEtMyAzWiIvPg0KPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTggOC41YTYuNjYgNi42NiAwIDAgMSAwIDhNMTkuODMgNmExMC44MyAxMC44MyAwIDAgMSAwIDEzIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81MDEwXzU0NTApIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNzc3MyA0LjQzMDU3QzIwLjg2NTIgMy45NzI1IDIyLjAzMTUgNC44OTI0MyAyMS44Mzk0IDYuMDU3MTJMMTkuNTcwNSAxOS44MTM4QzE5LjM1MTcgMjEuMTQwMiAxNy44OTQ5IDIxLjkwMTMgMTYuNjc4IDIxLjI0MDNDMTUuNjU5NyAyMC42ODcyIDE0LjE0ODkgMTkuODM1OSAxMi43ODczIDE4Ljk0NjJDMTIuMTA3NCAxOC41MDE5IDEwLjAyNTUgMTcuMDc3MyAxMC4yODE0IDE2LjA2MzJDMTAuNTAwMiAxNS4xOTYxIDE0LjAwMDEgMTEuOTM4MiAxNi4wMDAxIDEwLjAwMDdDMTYuNzg1NyA5LjIzOTY2IDE2LjQyNzkgOC43OTk5OSAxNS41MDAxIDkuNTAwNzNDMTMuMTk4NSAxMS4yMzkgOS41MDMzMiAxMy44ODE5IDguMjgxMzYgMTQuNjI1N0M3LjIwMzIzIDE1LjI4MTkgNi42NDAzMSAxNS4zOTM5IDUuOTY4ODYgMTUuMjgxOUM0Ljc0MjczIDE1LjA3NzYgMy42MDU5NiAxNC43NjEyIDIuNjc3ODggMTQuMzc2NUMxLjQyMzUxIDEzLjg1NjUgMS40ODQ2MSAxMi4xMzI3IDIuNjc3MDMgMTEuNjMwN0wxOS43NzczIDQuNDMwNTdaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUwMTBfNTQ1MCI+DQo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPC9zdmc+DQo="

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/userImage.08fd914.svg";

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguNSAxOUg4Yy00IDAtNi0xLTYtNlY4YzAtNCAyLTYgNi02aDhjNCAwIDYgMiA2IDZ2NWMwIDQtMiA2LTYgNmgtLjVjLS4zMSAwLS42MS4xNS0uOC40bC0xLjUgMmMtLjY2Ljg4LTEuNzQuODgtMi40IDBsLTEuNS0yYy0uMTYtLjIyLS41My0uNC0uOC0uNFoiLz4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS40MSA2Yy42MjYgMCAxLjIyNy4yMzcgMS42Ny42NTkuNDQ0LjQyMi42OTMuOTk0LjY5MyAxLjU5MXY0LjVjMCAuNTk3LS4yNSAxLjE2OS0uNjkzIDEuNTkxYTIuNDI2IDIuNDI2IDAgMCAxLTEuNjcuNjU5SDcuODYzYTIuNDI2IDIuNDI2IDAgMCAxLTEuNjcyLS42NTlBMi4xOTcgMi4xOTcgMCAwIDEgNS41IDEyLjc1di00LjVjMC0uNTk3LjI0OS0xLjE2OS42OTItMS41OTFBMi40MjYgMi40MjYgMCAwIDEgNy44NjQgNmgzLjU0NVptMy41NDQgNS44MDdWOS4xOTNsMi4wNS0xLjg0N2EuOTI4LjkyOCAwIDAgMSAuOTYtLjE2M2MuMTYuMDY1LjI5NS4xNzMuMzkuMzExLjA5Ni4xMzguMTQ2LjMuMTQ2LjQ2NXY1LjA4MmMwIC4xNjUtLjA1LjMyNy0uMTQ2LjQ2NWEuODc3Ljg3NyAwIDAgMS0uMzkuMzExLjkyOC45MjggMCAwIDEtLjk2LS4xNjJsLTIuMDUtMS44NDhaIi8+DQo8L3N2Zz4="

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/whatsapp-link.0552871.svg";

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjEzOTQgMC4xOTUyNjJDMTEuMzk5NyAwLjQ1NTYxMiAxMS4zOTk3IDAuODc3NzIyIDExLjEzOTQgMS4xMzgwN0w0LjQ3MjcxIDcuODA0NzRDNC4yMTIzNiA4LjA2NTA5IDMuNzkwMjUgOC4wNjUwOSAzLjUyOTkgNy44MDQ3NEwwLjg2MzIzMSA1LjEzODA3QzAuNjAyODgxIDQuODc3NzIgMC42MDI4ODEgNC40NTU2MSAwLjg2MzIzMSA0LjE5NTI2QzEuMTIzNTggMy45MzQ5MSAxLjU0NTY5IDMuOTM0OTEgMS44MDYwNCA0LjE5NTI2TDQuMDAxMyA2LjM5MDUyTDEwLjE5NjYgMC4xOTUyNjJDMTAuNDU2OSAtMC4wNjUwODc0IDEwLjg3OSAtMC4wNjUwODc0IDExLjEzOTQgMC4xOTUyNjJaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_b21f7a1c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_b21f7a1c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_b21f7a1c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_b21f7a1c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_b21f7a1c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-loader[data-v-b21f7a1c]{border:5px solid #f85454;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation-data-v-b21f7a1c 1s linear infinite;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}@keyframes rotation-data-v-b21f7a1c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/camera.0ab5ab0.svg";

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gallery.dd8d508.svg";

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/delete.48c3622.svg";

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Messages/Search.vue?vue&type=template&id=28d660e9&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-messages-search"},[_c('nuxt-img',{staticClass:"icon",attrs:{"src":"/v2/Messages/search.svg","width":"20","height":"20"}}),_vm._ssrNode("<input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("value",(_vm.searchValue)))+" data-v-28d660e9>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Messages/Search.vue?vue&type=template&id=28d660e9&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Messages/Search.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  name: 'XAMessagesSearch',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  computed: {
    searchValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      }
    }
  },
  methods: {
    emitInput(e) {
      this.$emit('input', e);
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Messages/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var Messages_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Messages/Search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(397)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Messages_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28d660e9",
  "27938744"
  
)

/* harmony default export */ var Search = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Default/UploadAvatar.vue?vue&type=template&id=517f1d74&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xo-default-upload-avatar"},[_vm._ssrNode("<div class=\"avatar row\" data-v-517f1d74>","</div>",[_vm._ssrNode(((_vm.avatar)?("<div class=\"picture\" data-v-517f1d74><img"+(_vm._ssrAttr("src",_vm.avatar))+" data-v-517f1d74></div>"):"<!---->")+"<div class=\"camera row items-center justify-center\""+(_vm._ssrStyle(null,_vm.cameraStyles, null))+" data-v-517f1d74>"+((_vm.name)?("<p class=\"camera-name text-uppercase\""+(_vm._ssrStyle(null,_vm.cameraNameStyles, null))+" data-v-517f1d74>"+_vm._ssrEscape(_vm._s(_vm.name.slice(0, 2)))+"</p>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(360)))+" data-v-517f1d74>"))+"</div>"),(_vm.isAllowEditing)?_vm._ssrNode("<div class=\"avatar-edit row justify-center items-center\" data-v-517f1d74>","</div>",[_c('b-icon',{attrs:{"icon":"pencil"}}),_vm._ssrNode(((_vm.showUploadOptions)?("<div class=\"avatar-options flex-column\""+(_vm._ssrStyle(null,{ top: _vm.chatPosition.top, left: _vm.chatPosition.left }, null))+" data-v-517f1d74><div class=\"option\" data-v-517f1d74><div class=\"_icon\" data-v-517f1d74><img"+(_vm._ssrAttr("src",__webpack_require__(361)))+" data-v-517f1d74></div><div class=\"_label text-weight-medium\" data-v-517f1d74>Upload photo</div><input type=\"file\" accept=\"image/*\" hidden=\"hidden\" data-v-517f1d74></div>"+((_vm.avatar)?("<div class=\"option _delete\" data-v-517f1d74><div class=\"_icon\" data-v-517f1d74><img"+(_vm._ssrAttr("src",__webpack_require__(362)))+" data-v-517f1d74></div><div class=\"_label text-weight-medium\" data-v-517f1d74>Delete photo</div></div>"):"<!---->")+"</div>"):"<!---->"))],2):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/Default/UploadAvatar.vue?vue&type=template&id=517f1d74&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Default/UploadAvatar.vue?vue&type=script&lang=js&
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

/* harmony default export */ var UploadAvatarvue_type_script_lang_js_ = ({
  name: 'XODefaultUploadAvatar',
  props: {
    avatar: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    isAllowEditing: {
      type: Boolean,
      required: false,
      default: true
    },
    avatarColors: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      showUploadOptions: false,
      chatPosition: {
        top: 0,
        left: 0
      }
    };
  },
  computed: {
    getAvatarBackground() {
      var _this$avatarColors;
      return ((_this$avatarColors = this.avatarColors) === null || _this$avatarColors === void 0 ? void 0 : _this$avatarColors.background) || null;
    },
    getAvatarColor() {
      var _this$avatarColors2;
      return ((_this$avatarColors2 = this.avatarColors) === null || _this$avatarColors2 === void 0 ? void 0 : _this$avatarColors2.text) || null;
    },
    cameraStyles() {
      return {
        backgroundColor: this.avatar ? 'rgba(0, 0, 0, 0.5)' : this.getAvatarBackground,
        opacity: this.avatar ? '' : 1
      };
    },
    cameraNameStyles() {
      return {
        color: this.name && this.getAvatarColor
      };
    }
  },
  methods: {
    fnShowUploadOptions(e) {
      if (!e || this.showUploadOptions) return;
      const element = e.currentTarget.getBoundingClientRect();
      this.chatPosition.top = `${element.height + 4}px`;
      this.$nextTick(() => {
        this.showUploadOptions = true;
        this.$nextTick(() => {
          const options = this.$refs.avatarOptionsRef;
          options.setAttribute('tabindex', 0);
          options.focus();
        });
      });
    },
    fnHideUploadOptions() {
      this.showUploadOptions = false;
    },
    fnUploadAvatar(e) {
      this.$emit('uploadAvatar', e);
    },
    fnDeletePhoto() {
      this.fnHideUploadOptions();
      this.$emit('deleteAvatar');
    },
    fnTriggerChoosePhoto() {
      document.querySelector('input[type=file]').click();
    }
  }
});
// CONCATENATED MODULE: ./components/organisms/Default/UploadAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Default_UploadAvatarvue_type_script_lang_js_ = (UploadAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/organisms/Default/UploadAvatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(405)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Default_UploadAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "517f1d74",
  "3490a3cc"
  
)

/* harmony default export */ var UploadAvatar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ClubRegistration_vue_vue_type_style_index_0_id_422bfae9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ClubRegistration_vue_vue_type_style_index_0_id_422bfae9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ClubRegistration_vue_vue_type_style_index_0_id_422bfae9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ClubRegistration_vue_vue_type_style_index_0_id_422bfae9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ClubRegistration_vue_vue_type_style_index_0_id_422bfae9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-club-registration[data-v-422bfae9] .card-content{padding:40px 30px}.xd-club-registration[data-v-422bfae9] .card-content .close{position:absolute;top:20px;right:20px;cursor:pointer}.xd-club-registration[data-v-422bfae9] .card-content h3{margin-bottom:30px}.xd-club-registration[data-v-422bfae9] .card-content .actions .button{width:120px;height:42px;text-transform:uppercase;margin:0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteManagers_vue_vue_type_style_index_0_id_3a353ab6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteManagers_vue_vue_type_style_index_0_id_3a353ab6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteManagers_vue_vue_type_style_index_0_id_3a353ab6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteManagers_vue_vue_type_style_index_0_id_3a353ab6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteManagers_vue_vue_type_style_index_0_id_3a353ab6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-invite-managers[data-v-3a353ab6] .card-content form .inputs .email{margin-right:8px}.xd-invite-managers[data-v-3a353ab6] .card-content form .inputs .role{width:100%;max-width:150px}.xd-invite-managers[data-v-3a353ab6] .card-content form .inputs .add-more{color:#0c353e;opacity:.5;text-transform:uppercase;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.xd-invite-managers[data-v-3a353ab6] .card-content form .inputs .add-more ._icon{margin-top:2px;margin-right:10px}.xd-invite-managers[data-v-3a353ab6] .card-content form>.actions{margin-top:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommunityRules_vue_vue_type_style_index_0_id_cd61effa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommunityRules_vue_vue_type_style_index_0_id_cd61effa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommunityRules_vue_vue_type_style_index_0_id_cd61effa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommunityRules_vue_vue_type_style_index_0_id_cd61effa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CommunityRules_vue_vue_type_style_index_0_id_cd61effa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-community-rules[data-v-cd61effa]{min-height:100%;height:auto!important}.xd-community-rules[data-v-cd61effa] .card-content{padding:0!important}.xd-community-rules[data-v-cd61effa] .card-content .close{z-index:2;opacity:1!important}.xd-community-rules[data-v-cd61effa] .card-content .close img{width:20px}.xd-community-rules[data-v-cd61effa] .card-content .cover-photo{min-height:295px;width:100%;background-size:cover;background-position:50%;color:#fff;padding:50px;position:relative;z-index:0}.xd-community-rules[data-v-cd61effa] .card-content .cover-photo:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;background:linear-gradient(0deg,rgba(0,0,0,.3),rgba(0,0,0,.3)),linear-gradient(180deg,transparent 56.77%,#000)}.xd-community-rules[data-v-cd61effa] .card-content .cover-photo .contents{position:relative;z-index:1}.xd-community-rules[data-v-cd61effa] .card-content .cover-photo .contents .xa-avatar{margin-bottom:10px}.xd-community-rules[data-v-cd61effa] .card-content .cover-photo .contents .supporters{font-size:1.0714rem;line-height:1.4286rem;opacity:.7}.xd-community-rules[data-v-cd61effa] .card-content .details{position:relative;z-index:1;padding:0 50px 50px}@media screen and (max-width:767px){.xd-community-rules[data-v-cd61effa] .card-content .details{padding:0 30px 50px}}.xd-community-rules[data-v-cd61effa] .card-content .details .details-header{color:#0c353e;background-color:#fff;width:100%;min-height:140px;box-shadow:0 4px 30px rgba(18,55,63,.15);border-radius:10px;padding:0 50px;margin:-45px auto 50px}.xd-community-rules[data-v-cd61effa] .card-content .details .details-header h2{margin-bottom:5px}.xd-community-rules[data-v-cd61effa] .card-content .details .details-header p{font-size:1.1429rem;line-height:1.5714rem;letter-spacing:-.28px;font-weight:300}.xd-community-rules[data-v-cd61effa] .card-content .details .details-content .rules .rule{background-color:#f8f8f8;border-radius:10px;font-size:16px;line-height:24px;letter-spacing:-.28px;color:#0c353e;padding:20px;margin-bottom:10px}.xd-community-rules[data-v-cd61effa] .card-content .details .details-content .rules .rule ._icon{width:24px;height:24px;border-radius:50%;border:1px solid #0c353e}.xd-community-rules[data-v-cd61effa] .card-content .details .details-content .rules .rule .text{margin-left:10px}.xd-community-rules[data-v-cd61effa] .card-content .details .details-content .actions{margin-top:50px}.xd-community-rules[data-v-cd61effa] .card-content .details .details-content .actions .button{width:185px;height:82px;text-transform:uppercase}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_style_index_0_id_26412ac2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_style_index_0_id_26412ac2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_style_index_0_id_26412ac2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_style_index_0_id_26412ac2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatar_vue_vue_type_style_index_0_id_26412ac2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-edit-avatar[data-v-26412ac2] .card-content .actions .button{min-width:150px;height:42px;text-transform:uppercase;margin:0 5px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatarNew_vue_vue_type_style_index_0_id_22c5705b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatarNew_vue_vue_type_style_index_0_id_22c5705b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatarNew_vue_vue_type_style_index_0_id_22c5705b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatarNew_vue_vue_type_style_index_0_id_22c5705b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAvatarNew_vue_vue_type_style_index_0_id_22c5705b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-edit-avatar-new[data-v-22c5705b]{background-color:#0c353e;color:#fff;padding:40px 60px}.xd-edit-avatar-new[data-v-22c5705b] .card-content{padding:0}.xd-edit-avatar-new[data-v-22c5705b] .card-content .close{position:absolute;right:21px;top:21px;cursor:pointer}.xd-edit-avatar-new[data-v-22c5705b] .card-content h3{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:24px}.xd-edit-avatar-new[data-v-22c5705b] .card-content .croppie-container .cr-slider-wrap .cr-slider::-webkit-slider-runnable-track{background:#fff}.xd-edit-avatar-new[data-v-22c5705b] .card-content .croppie-container .cr-slider-wrap .cr-slider::-webkit-slider-thumb{width:24px;height:24px;background:#fff;margin-top:-10px}.xd-edit-avatar-new[data-v-22c5705b] .card-content .actions{display:flex;grid-gap:24px;gap:24px;margin-top:44px}.xd-edit-avatar-new[data-v-22c5705b] .card-content .actions button{height:40px;font-size:14px;line-height:18px;white-space:unset}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveManager_vue_vue_type_style_index_0_id_8a66f8ae_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveManager_vue_vue_type_style_index_0_id_8a66f8ae_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveManager_vue_vue_type_style_index_0_id_8a66f8ae_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveManager_vue_vue_type_style_index_0_id_8a66f8ae_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveManager_vue_vue_type_style_index_0_id_8a66f8ae_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-remove-manager[data-v-8a66f8ae] .card-content h3{margin-bottom:10px}.xd-remove-manager[data-v-8a66f8ae] .card-content .actions{margin-top:30px}.xd-remove-manager[data-v-8a66f8ae] .card-content .actions .button.is-text{text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_style_index_0_id_deb49a92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_style_index_0_id_deb49a92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_style_index_0_id_deb49a92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_style_index_0_id_deb49a92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_style_index_0_id_deb49a92_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-permissions[data-v-deb49a92] .card-content form>.actions{margin-top:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannel_vue_vue_type_style_index_0_id_1b7d0a7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannel_vue_vue_type_style_index_0_id_1b7d0a7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannel_vue_vue_type_style_index_0_id_1b7d0a7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannel_vue_vue_type_style_index_0_id_1b7d0a7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannel_vue_vue_type_style_index_0_id_1b7d0a7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-delete-channel[data-v-1b7d0a7a] .card-content h3{margin-bottom:10px}.xd-delete-channel[data-v-1b7d0a7a] .card-content .actions{margin-top:30px}.xd-delete-channel[data-v-1b7d0a7a] .card-content .actions .button.is-text{text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannelGroup_vue_vue_type_style_index_0_id_10535d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannelGroup_vue_vue_type_style_index_0_id_10535d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannelGroup_vue_vue_type_style_index_0_id_10535d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannelGroup_vue_vue_type_style_index_0_id_10535d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteChannelGroup_vue_vue_type_style_index_0_id_10535d28_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-delete-channel-group[data-v-10535d28] .card-content h3{margin-bottom:10px}.xd-delete-channel-group[data-v-10535d28] .card-content .actions{margin-top:30px}.xd-delete-channel-group[data-v-10535d28] .card-content .actions .button.is-text{text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteMessage_vue_vue_type_style_index_0_id_f05a8ba0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteMessage_vue_vue_type_style_index_0_id_f05a8ba0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteMessage_vue_vue_type_style_index_0_id_f05a8ba0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteMessage_vue_vue_type_style_index_0_id_f05a8ba0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteMessage_vue_vue_type_style_index_0_id_f05a8ba0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-delete-message[data-v-f05a8ba0]{background-color:#08252c;color:#fff}.xd-delete-message[data-v-f05a8ba0] .card-content{padding:25px 25px 10px}.xd-delete-message[data-v-f05a8ba0] .card-content h4{margin-bottom:10px}.xd-delete-message[data-v-f05a8ba0] .card-content p{color:#c3cdcf}.xd-delete-message[data-v-f05a8ba0] .card-content .actions{margin-top:30px}.xd-delete-message[data-v-f05a8ba0] .card-content .actions .btn-action{padding:0;text-decoration:none;text-transform:uppercase;font-weight:400;background-color:transparent;color:#fff;outline:none;box-shadow:none}.xd-delete-message[data-v-f05a8ba0] .card-content .actions .btn-action:not(:last-child){margin-bottom:7px}.xd-delete-message[data-v-f05a8ba0] .card-content .actions .btn-action.btn-delete{color:#f85454}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitations_vue_vue_type_style_index_0_id_6243bc6d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitations_vue_vue_type_style_index_0_id_6243bc6d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitations_vue_vue_type_style_index_0_id_6243bc6d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitations_vue_vue_type_style_index_0_id_6243bc6d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Invitations_vue_vue_type_style_index_0_id_6243bc6d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-invitations[data-v-6243bc6d]{min-height:354px;background-color:#0c353e;padding:40px 60px 60px}@media screen and (max-width:427px){.xd-invitations[data-v-6243bc6d]{min-height:365px;padding:30px 20px}}.xd-invitations .card-content[data-v-6243bc6d]{padding:0}.xd-invitations .card-content .close[data-v-6243bc6d]{position:absolute;right:10px;top:10px;cursor:pointer}.xd-invitations .card-content h3[data-v-6243bc6d]{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:20px}.xd-invitations .card-content .links__container[data-v-6243bc6d]{display:flex;flex-direction:column}.xd-invitations .card-content .links__container .link[data-v-6243bc6d]{background-color:#385960;padding:11px;justify-content:center;border-radius:5px;cursor:pointer}.xd-invitations .card-content .links__container .link img[data-v-6243bc6d]{margin-right:10px}.xd-invitations .card-content .links__container .link span[data-v-6243bc6d]{font-weight:400;font-size:16px;line-height:18px;color:#fff}.xd-invitations .card-content .links__container .link .normal[data-v-6243bc6d],.xd-invitations .card-content .links__container .link .social[data-v-6243bc6d]{display:flex;align-items:center;justify-content:center}.xd-invitations .card-content .links__container .link[data-v-6243bc6d]:active{transform:scale(.95)}.xd-invitations .card-content .links__container .link[data-v-6243bc6d]:not(:last-child){margin-bottom:16px}.xd-invitations .card-content .link-copied[data-v-6243bc6d]{display:flex;align-items:center;justify-content:center;margin-top:22px;position:absolute;left:50%;transform:translate(-50%);text-align:center}.xd-invitations .card-content .link-copied img[data-v-6243bc6d]{margin-right:15px}.xd-invitations .card-content .link-copied span[data-v-6243bc6d]{font-weight:400;font-size:14px;line-height:15px;letter-spacing:-.66px;color:#c3cdcf}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaveGroup_vue_vue_type_style_index_0_id_fe011c58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaveGroup_vue_vue_type_style_index_0_id_fe011c58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaveGroup_vue_vue_type_style_index_0_id_fe011c58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaveGroup_vue_vue_type_style_index_0_id_fe011c58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaveGroup_vue_vue_type_style_index_0_id_fe011c58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-invitations[data-v-fe011c58]{min-height:210px;background-color:#0c353e;padding:32px 24px}.xd-invitations .card-content[data-v-fe011c58]{padding:0}.xd-invitations .card-content .close[data-v-fe011c58]{position:absolute;right:10px;top:10px;cursor:pointer}.xd-invitations .card-content h3[data-v-fe011c58]{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:20px}.xd-invitations .card-content .actions[data-v-fe011c58]{display:flex;flex-direction:column}.xd-invitations .card-content .actions .leave[data-v-fe011c58]{margin-bottom:25px}.xd-invitations .card-content .actions .cancel[data-v-fe011c58]{background:transparent;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfirmation_vue_vue_type_style_index_0_id_46143e43_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfirmation_vue_vue_type_style_index_0_id_46143e43_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfirmation_vue_vue_type_style_index_0_id_46143e43_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfirmation_vue_vue_type_style_index_0_id_46143e43_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailConfirmation_vue_vue_type_style_index_0_id_46143e43_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-email-confirmation[data-v-46143e43]{background-color:#0c353e;color:#fff;padding:40px 60px}.xd-email-confirmation .card-content[data-v-46143e43]{padding:0}.xd-email-confirmation .card-content .close[data-v-46143e43]{position:absolute;right:21px;top:21px;cursor:pointer}.xd-email-confirmation .card-content h3[data-v-46143e43]{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:20px}.xd-email-confirmation .card-content p[data-v-46143e43]{font-size:16px;line-height:20px}.xd-email-confirmation .card-content .actions[data-v-46143e43]{margin-top:24px}.xd-email-confirmation .card-content .actions button[data-v-46143e43]{height:40px;font-size:14px;line-height:18px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordUpdated_vue_vue_type_style_index_0_id_a5040f0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordUpdated_vue_vue_type_style_index_0_id_a5040f0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordUpdated_vue_vue_type_style_index_0_id_a5040f0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordUpdated_vue_vue_type_style_index_0_id_a5040f0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordUpdated_vue_vue_type_style_index_0_id_a5040f0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-password-updated[data-v-a5040f0a]{background-color:#0c353e;color:#fff;padding:40px 60px}.xd-password-updated .card-content[data-v-a5040f0a]{padding:0}.xd-password-updated .card-content .close[data-v-a5040f0a]{position:absolute;right:21px;top:21px;cursor:pointer}.xd-password-updated .card-content h3[data-v-a5040f0a]{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:20px}.xd-password-updated .card-content p[data-v-a5040f0a]{font-size:16px;line-height:20px}.xd-password-updated .card-content .actions[data-v-a5040f0a]{margin-top:24px}.xd-password-updated .card-content .actions button[data-v-a5040f0a]{height:40px;font-size:14px;line-height:18px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_id_a16013ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_id_a16013ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_id_a16013ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_id_a16013ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteAccount_vue_vue_type_style_index_0_id_a16013ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-delete-account[data-v-a16013ba]{background-color:#0c353e;color:#fff;padding:40px 60px}.xd-delete-account .card-content[data-v-a16013ba]{padding:0}.xd-delete-account .card-content .close[data-v-a16013ba]{position:absolute;right:21px;top:21px;cursor:pointer}.xd-delete-account .card-content h3[data-v-a16013ba]{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:20px}.xd-delete-account .card-content p[data-v-a16013ba]{font-size:16px;line-height:20px}.xd-delete-account .card-content .warning[data-v-a16013ba]{display:flex;align-items:center;grid-gap:12px;gap:12px;margin-top:24px}.xd-delete-account .card-content .warning p span[data-v-a16013ba]{color:#f85454}.xd-delete-account .card-content .divider[data-v-a16013ba]{width:100%;height:1px;background-color:#2a4e55;margin:24px 0}.xd-delete-account .card-content form .form-item .xa-forms-input[data-v-a16013ba]{margin-top:12px}.xd-delete-account .card-content .actions[data-v-a16013ba]{display:flex;grid-gap:24px;gap:24px;margin-top:44px}.xd-delete-account .card-content .actions button[data-v-a16013ba]{height:40px;font-size:14px;line-height:18px}.xd-delete-account .card-content .actions button.button-delete-account[data-v-a16013ba]:disabled{background-color:#424242;border-color:#424242;color:#9e9e9e}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteMessagesMember_vue_vue_type_style_index_0_id_6928d160_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteMessagesMember_vue_vue_type_style_index_0_id_6928d160_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteMessagesMember_vue_vue_type_style_index_0_id_6928d160_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteMessagesMember_vue_vue_type_style_index_0_id_6928d160_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteMessagesMember_vue_vue_type_style_index_0_id_6928d160_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".invite-modal[data-v-6928d160]{position:relative;background-color:#0c353e;padding:40px 60px 60px;display:grid;grid-gap:24px;gap:24px;color:#fff;font-family:\"Rotunda\",sans-serif;font-style:normal}.invite-modal__close[data-v-6928d160]{cursor:pointer;position:absolute;top:16px;right:16px}.invite-modal__title[data-v-6928d160]{font-size:20px;font-weight:700;line-height:normal}.invite-modal button[data-v-6928d160]{height:40px;font-size:14px;font-weight:500;line-height:18px;letter-spacing:.8px;text-transform:uppercase}.invite-modal__desc[data-v-6928d160]{font-size:16px;font-style:normal;font-weight:400;line-height:20px;letter-spacing:.5px}.invite-modal__decline[data-v-6928d160]{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:5px;border:1px solid #fff}.invite-modal__decline[data-v-6928d160]:disabled{opacity:.5;pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_28d660e9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_28d660e9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_28d660e9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_28d660e9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_28d660e9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-messages-search[data-v-28d660e9]{position:relative}.xa-messages-search .icon[data-v-28d660e9]{position:absolute;top:50%;left:14px;transform:translateY(-50%)}.xa-messages-search input[data-v-28d660e9]{background-color:#0c353e;padding:8px 12px 8px 44px;height:44px;width:100%;border:1px solid #2a4e55;border-radius:4px;color:#94a6aa;font-size:14px}.xa-messages-search input[data-v-28d660e9]::-moz-placeholder{opacity:.8;color:#94a6aa}.xa-messages-search input[data-v-28d660e9]::placeholder{opacity:.8;color:#94a6aa}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListItem_vue_vue_type_style_index_0_id_3738be40_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListItem_vue_vue_type_style_index_0_id_3738be40_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListItem_vue_vue_type_style_index_0_id_3738be40_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListItem_vue_vue_type_style_index_0_id_3738be40_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListItem_vue_vue_type_style_index_0_id_3738be40_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(357);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-users-list-item[data-v-3738be40]{display:flex;align-items:center;cursor:pointer}.xa-users-list-item input[type=checkbox]+label[data-v-3738be40]{display:block;margin-right:12px;cursor:pointer}.xa-users-list-item input[type=checkbox][data-v-3738be40]{display:none}.xa-users-list-item input[type=checkbox]+label[data-v-3738be40]:before{content:\"\";width:24px;height:24px;border:2px solid #94a6aa;border-radius:5px;display:inline-block;vertical-align:bottom;color:transparent;transition:.2s}.xa-users-list-item input[type=checkbox]+label[data-v-3738be40]:active:before{transform:scale(0)}.xa-users-list-item input[type=checkbox]:checked+label[data-v-3738be40]:before{background-color:#f85454;border-color:#f85454;color:#fff;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:50%}.xa-users-list-item-avatar[data-v-3738be40]{display:flex;position:relative;margin-right:12px}.xa-users-list-item-avatar img[data-v-3738be40],.xa-users-list-item-default-avatar[data-v-3738be40]{width:32px;height:32px;border-radius:50%}.xa-users-list-item-default-avatar[data-v-3738be40]{display:flex;justify-content:center;align-items:center;background-color:#f85454;font-weight:300;font-size:13px;line-height:16px;text-transform:uppercase}.xa-users-list-item .online[data-v-3738be40]:after{content:\"\";position:absolute;width:12px;height:12px;bottom:-3px;right:-2px;background-color:#2ddc1e;border-radius:50%;border:3px solid #08252c}.xa-users-list-item span[data-v-3738be40]{color:#fff;font-weight:400;font-size:16px;line-height:24px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_style_index_0_id_c994969c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_style_index_0_id_c994969c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_style_index_0_id_c994969c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_style_index_0_id_c994969c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_style_index_0_id_c994969c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xm-messages-users-list[data-v-c994969c] ul{height:300px;padding-right:36px;overflow-y:auto}.xm-messages-users-list[data-v-c994969c] ul::-webkit-scrollbar{width:4px}.xm-messages-users-list[data-v-c994969c] ul::-webkit-scrollbar-track{background-color:#2a4e55}.xm-messages-users-list[data-v-c994969c] ul::-webkit-scrollbar-thumb{background-color:#557278;border-radius:10px}.xm-messages-users-list[data-v-c994969c] ul li .list-group{padding:8px 0;border-bottom:.5px solid rgba(84,84,88,.65)}.xm-messages-users-list[data-v-c994969c] ul li .list-group p{color:rgba(235,235,245,.6)}.xm-messages-users-list[data-v-c994969c] ul li .xa-users-list-item{padding:12px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLoader_vue_vue_type_style_index_0_id_6223bc8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(298);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLoader_vue_vue_type_style_index_0_id_6223bc8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLoader_vue_vue_type_style_index_0_id_6223bc8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLoader_vue_vue_type_style_index_0_id_6223bc8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLoader_vue_vue_type_style_index_0_id_6223bc8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xm-modal-loader[data-v-6223bc8a]{display:flex;flex-direction:column;align-items:center;grid-gap:16px;gap:16px;width:-moz-fit-content;width:fit-content;background-color:#072b34;margin:0 auto;padding:16px 20px;border-radius:10px}.xm-modal-loader[data-v-6223bc8a] .xa-loader{position:relative;border:5px solid;border-color:#fff #fff transparent}.xm-modal-loader[data-v-6223bc8a] p{color:#fff;font-weight:400;font-size:16px;line-height:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadAvatar_vue_vue_type_style_index_0_id_517f1d74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(299);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadAvatar_vue_vue_type_style_index_0_id_517f1d74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadAvatar_vue_vue_type_style_index_0_id_517f1d74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadAvatar_vue_vue_type_style_index_0_id_517f1d74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadAvatar_vue_vue_type_style_index_0_id_517f1d74_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xo-default-upload-avatar[data-v-517f1d74] .avatar{position:relative;width:160px;height:160px;background-color:#0c353e;border-radius:50%}@media screen and (max-width:768px){.xo-default-upload-avatar[data-v-517f1d74] .avatar{width:120px;height:120px}}.xo-default-upload-avatar[data-v-517f1d74] .avatar:hover .camera{opacity:1}.xo-default-upload-avatar[data-v-517f1d74] .avatar .camera,.xo-default-upload-avatar[data-v-517f1d74] .avatar .picture{width:100%;height:100%;border-radius:inherit;overflow:hidden}.xo-default-upload-avatar[data-v-517f1d74] .avatar .picture img{width:100%;height:100%}.xo-default-upload-avatar[data-v-517f1d74] .avatar .camera{opacity:0;position:absolute;transition:opacity .25s ease}.xo-default-upload-avatar[data-v-517f1d74] .avatar .camera-name{transform:translateY(6px);font-weight:700;font-size:52px;line-height:normal}.xo-default-upload-avatar[data-v-517f1d74] .avatar-edit{position:absolute;width:48px;height:48px;bottom:0;right:0;background-color:#2a4e55;border-radius:50%;cursor:pointer}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options{grid-gap:20px;gap:20px;position:absolute;min-width:188px;top:0;left:0;background-color:#0c353e;border-radius:8px;z-index:2}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options .option{display:flex;flex-wrap:wrap;align-items:center;position:relative;padding:0 16px;font-weight:300;font-size:1.1429rem;cursor:pointer}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options .option:first-child{padding-top:16px}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options .option:last-child{padding-bottom:16px}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options .option._delete{color:#f85454}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options .option ._icon{display:flex;flex-wrap:wrap;width:35px}.xo-default-upload-avatar[data-v-517f1d74] .avatar-options .option ._label{font-family:\"Inter\"}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_d73bd34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_d73bd34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_d73bd34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_d73bd34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_d73bd34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-input[data-v-d73bd34e]{position:relative}.xa-input input[data-v-d73bd34e]{background-color:#0c353e;width:100%;padding:16px;border:1px solid #2a4e55;border-radius:4px;color:#fff;font-size:16px;line-height:22px}.xa-input input[data-v-d73bd34e]::-moz-placeholder{color:#94a6aa}.xa-input input[data-v-d73bd34e]::placeholder{color:#94a6aa}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_id_9a997bf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_id_9a997bf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_id_9a997bf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_id_9a997bf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_id_9a997bf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-switch[data-v-9a997bf4]{display:inline-flex;align-items:center;position:relative;width:40px;height:24px}.xa-switch input[data-v-9a997bf4]{display:none}.xa-switch input:checked+.slider[data-v-9a997bf4]{background-color:#886bf2}.xa-switch input:focus+.slider[data-v-9a997bf4]{box-shadow:0 0 1px #886bf2}.xa-switch input:checked+.slider[data-v-9a997bf4]:before{transform:translate(100%,-50%)}.xa-switch .slider[data-v-9a997bf4]{position:relative;width:100%;height:14px;background-color:#c3cdcf;border-radius:34px;transition:background-color .4s ease;cursor:pointer}.xa-switch .slider[data-v-9a997bf4]:before{content:\"\";position:absolute;height:20px;width:20px;top:50%;background-color:#fff;border-radius:50%;transform:translateY(-50%);transition:transform .4s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrivateGroup_vue_vue_type_style_index_0_id_6b3bf572_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrivateGroup_vue_vue_type_style_index_0_id_6b3bf572_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrivateGroup_vue_vue_type_style_index_0_id_6b3bf572_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrivateGroup_vue_vue_type_style_index_0_id_6b3bf572_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrivateGroup_vue_vue_type_style_index_0_id_6b3bf572_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-create-private-group[data-v-6b3bf572]{background-color:#072b34;color:#fff;padding:40px 60px}.xd-create-private-group[data-v-6b3bf572] .card-content{padding:0}.xd-create-private-group[data-v-6b3bf572] .card-content .close{position:absolute;right:21px;top:21px;cursor:pointer}.xd-create-private-group[data-v-6b3bf572] .card-content h3{color:#fff;font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset}.xd-create-private-group[data-v-6b3bf572] .card-content p{font-size:16px;line-height:20px}.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions{display:flex;grid-gap:20px;gap:20px;margin-top:24px}.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions button{height:auto;padding:12px;font-size:14px;line-height:18px}.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions .is-text{color:#fff;text-decoration:none}.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions .is-text:active,.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions .is-text:focus,.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions .is-text:hover{color:#4a4a4a}.xd-create-private-group[data-v-6b3bf572] .card-content .content-actions .button-create-group:disabled{background-color:#424242;border-color:#424242;color:#9e9e9e}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .selected-users{margin-top:8px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .search-container{margin-top:24px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .hint{margin:12px 0}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .hint p{color:hsla(0,0%,100%,.48);font-weight:400;font-size:14px;line-height:22px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .create-group{display:flex;align-items:center;grid-gap:12px;gap:12px;cursor:pointer;margin:24px 0}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .create-group p{font-weight:400;font-size:16px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .content-wrapper{position:relative;height:300px;margin-top:28px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-1 .content-wrapper .not-found{display:flex;justify-content:center;align-items:center;height:100%}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .step-title{grid-gap:24px;gap:24px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .step-title img{cursor:pointer}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics{grid-gap:24px;gap:24px;margin-top:24px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics .xo-default-upload-avatar .avatar{width:100px;height:100px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics .xo-default-upload-avatar .avatar:hover .camera{background-color:rgba(0,0,0,.5)}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics .xo-default-upload-avatar .avatar .camera{background-color:rgba(12,53,62,.5);transition:background-color .25s ease,opacity .25s ease}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics .xo-default-upload-avatar .avatar .camera img{width:50px;height:50px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics .xa-input{flex-grow:1}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .group-specifics-name{font-size:20px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .notifications{background-color:#0c353e;margin:40px 0 8px;padding:12px 16px;cursor:pointer}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .notifications p{font-family:\"Inter\"}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .members-count{margin:32px 0 16px;color:#c3cdcf;font-size:14px;text-transform:uppercase}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .button-manage-members{max-width:206px;min-height:44px;margin-bottom:16px;padding:12px 32px;font-size:14px;line-height:18px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .button-manage-members:focus,.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .button-manage-members:hover{background-color:unset;color:#fff}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .button-manage-members span{display:inline-flex;align-items:center;grid-gap:13px;gap:13px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .button-manage-members span img{width:24px;height:24px;margin:unset}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .group-members{margin:24px 0 16px}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .group-members p{color:#c3cdcf}.xd-create-private-group[data-v-6b3bf572] .card-content .step-2 .selected-members .group-members-count{font-size:14px;line-height:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EncryptedChat_vue_vue_type_style_index_0_id_9d280416_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(303);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EncryptedChat_vue_vue_type_style_index_0_id_9d280416_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EncryptedChat_vue_vue_type_style_index_0_id_9d280416_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EncryptedChat_vue_vue_type_style_index_0_id_9d280416_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EncryptedChat_vue_vue_type_style_index_0_id_9d280416_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xd-encrypted-chat[data-v-9d280416]{background-color:#0c353e;color:#fff;padding:40px 60px}.xd-encrypted-chat .card-content[data-v-9d280416]{padding:0}.xd-encrypted-chat .card-content .close[data-v-9d280416]{position:absolute;right:21px;top:21px;cursor:pointer}.xd-encrypted-chat .card-content h3[data-v-9d280416]{font-weight:700;font-size:20px;line-height:22px;letter-spacing:unset;color:#fff;margin-bottom:20px}.xd-encrypted-chat .card-content p[data-v-9d280416]{font-size:16px;line-height:20px}.xd-encrypted-chat .card-content .actions[data-v-9d280416]{margin-top:24px}.xd-encrypted-chat .card-content .actions button[data-v-9d280416]{height:40px;font-size:14px;line-height:18px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CreatePrivateGroup.vue?vue&type=template&id=6b3bf572&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isLoading)?_c('XMModalLoader',{attrs:{"title":_vm.isEditing ? 'Saving group...' : 'Creating group...'}}):_c('div',{staticClass:"xd-create-private-group card",class:[_vm.isEdit && 'editing']},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"close",on:{"click":function($event){$event.preventDefault();return _vm.$parent.close()}}},[_c('img',{attrs:{"src":__webpack_require__(272)}})]),(_vm.step === 1)?_c('div',{staticClass:"step-1"},[_c('h3',[_vm._v(_vm._s(_vm.getStepOneTitle))]),(!_vm.isOneToOne)?_c('p',{staticClass:"selected-users"},[_vm._v(_vm._s(_vm.selectedUsers.length)+"/"+_vm._s(_vm.maxSelectUsers))]):_vm._e(),_c('XAMessagesSearch',{staticClass:"search-container",attrs:{"value":_vm.search},on:{"input":_vm.filterAvailableUsers,"update:value":function($event){_vm.search=$event}}}),(!_vm.isOneToOne)?_c('div',{staticClass:"hint"},[_c('p',[_vm._v("Find members below or invite new friends once your group is created.")])]):(!_vm.isEditing)?_c('div',{staticClass:"create-group",on:{"click":_vm.fnSwitchMode}},[_c('nuxt-img',{staticClass:"icon",attrs:{"src":"/v2/Messages/create-group.svg","width":"24","height":"24"}}),_c('p',[_vm._v("Create group")])],1):_vm._e(),_c('div',{staticClass:"content-wrapper"},[(_vm.usersList.length)?_c('XMUsersList',{attrs:{"usersList":_vm.usersList,"onlineMembers":_vm.getOnlineMembers,"isAllowSelect":!_vm.isOneToOne || _vm.isEditing,"isAllowClick":true,"selectedUsers":_vm.selectedUsers},on:{"scroll":_vm.fnHandleScrollList,"selectUser":_vm.fnSelectUser}}):(!_vm.isSearchingUsers)?_c('p',{staticClass:"not-found"},[_vm._v("Nothing was found")]):_vm._e(),(_vm.isSearchingUsers)?_c('XALoader'):_vm._e()],1),(!_vm.isOneToOne || _vm.isEditing)?_c('div',{staticClass:"content-actions"},[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-text","expanded":""},on:{"click":_vm.fnHandleCancelFirstStep}},[_vm._v("Cancel")]),_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-primary","expanded":"","disabled":_vm.isButtonCreateGroupNextDisabled},on:{"click":_vm.fnHandleSecondStep}},[_vm._v(_vm._s(_vm.isEditing ? 'Add' : 'Next'))])],1):_vm._e()],1):_vm._e(),(_vm.step === 2)?_c('div',{staticClass:"step-2 flex-column"},[_c('div',{staticClass:"step-title row items-center"},[_c('h3',[_vm._v(_vm._s(_vm.getStepSecondTitle))]),(_vm.isEditing && !_vm.isEdit)?_c('nuxt-img',{staticClass:"icon",attrs:{"src":"/v2/Messages/pencil.svg","width":"24","height":"24"},on:{"click":function($event){_vm.isEdit = true}}}):_vm._e()],1),_c('div',{staticClass:"group-specifics row items-center"},[_c('XODefaultUploadAvatar',{attrs:{"avatar":_vm.avatarUrl,"isAllowEditing":_vm.isEdit,"avatarColors":_vm.getChannelColor,"name":_vm.avatarUrl ? '' : _vm.getChannelName},on:{"uploadAvatar":_vm.fnUploadAvatar,"deleteAvatar":_vm.fnDeleteAvatar}}),(!_vm.isEditing || _vm.isEdit)?_c('XAInput',{attrs:{"placeholder":"Group name (required)","value":_vm.groupName},on:{"update:value":function($event){_vm.groupName=$event}}}):_c('p',{staticClass:"group-specifics-name"},[_vm._v(_vm._s(_vm.groupName))])],1),(_vm.isEditing && !_vm.isEdit)?_c('div',{staticClass:"notifications row justify-between items-center",on:{"click":function($event){$event.preventDefault();_vm.isNotifications = !_vm.isNotifications}}},[_c('p',[_vm._v("Notifications")]),_c('XASwitch',{attrs:{"value":_vm.isNotifications},on:{"update:value":function($event){_vm.isNotifications=$event}}})],1):_vm._e(),_c('div',{staticClass:"selected-members"},[_c('p',{staticClass:"members-count"},[_vm._v(_vm._s(_vm.selectedUsers.length)+" Members")]),(_vm.isEdit)?_c('b-button',{staticClass:"button-manage-members",attrs:{"type":"is-white","outlined":"","expanded":""},on:{"click":_vm.fnHandleManageMembers}},[(_vm.isManageMembers)?_c('nuxt-img',{staticClass:"icon",attrs:{"src":"/v2/Messages/plus.svg"}}):_vm._e(),_vm._v(_vm._s(_vm.isManageMembers ? 'Add members' : 'Manage members'))],1):_vm._e(),(_vm.isManageMembers)?_c('div',{staticClass:"group-members row justify-between items-center"},[_c('p',{staticClass:"text-uppercase"},[_vm._v("Group memebers")]),_c('p',{staticClass:"group-members-count"},[_vm._v(_vm._s(_vm.selectedUsers.length)+" / "+_vm._s(_vm.maxSelectUsers))])]):_vm._e(),_c('XMUsersList',{attrs:{"usersList":_vm.getSecondStepUsersList,"onlineMembers":_vm.getOnlineMembers,"isAllowSelect":_vm.isEdit && _vm.isManageMembers,"isAllowClick":_vm.isManageMembers,"selectedUsers":_vm.selectedUsers,"enableGrouping":false},on:{"selectUser":_vm.fnSelectUser}})],1),(!_vm.isEditing || (_vm.isEditing && _vm.isEdit))?_c('div',{staticClass:"content-actions"},[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-text","expanded":""},on:{"click":_vm.fnHandleCancelSecondStep}},[_vm._v(_vm._s(_vm.isEditing ? 'Cancel' : 'Back'))]),_c('b-button',{staticClass:"button-create-group is-uppercase",attrs:{"type":"is-primary","expanded":"","disabled":_vm.isButtonCreateGroupDisabled},on:{"click":_vm.fnHandleSubmit}},[_vm._v(_vm._s(_vm.isEditing ? 'Save' : 'Create'))])],1):_vm._e()]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/CreatePrivateGroup.vue?vue&type=template&id=6b3bf572&scoped=true&lang=pug&

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(8);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "lodash/xor"
var xor_ = __webpack_require__(214);
var xor_default = /*#__PURE__*/__webpack_require__.n(xor_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/atoms/Messages/Search.vue + 4 modules
var Search = __webpack_require__(363);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Messages/UsersList.vue?vue&type=template&id=c994969c&scoped=true&lang=pug&
var UsersListvue_type_template_id_c994969c_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xm-messages-users-list"},[_vm._ssrNode("<ul data-v-c994969c>","</ul>",_vm._l((_vm.groupUsers),function(group,index){return _vm._ssrNode("<li data-v-c994969c>","</li>",[_vm._ssrNode(((_vm.enableGrouping)?("<div class=\"list-group\" data-v-c994969c><p data-v-c994969c>"+_vm._ssrEscape(_vm._s(index.toUpperCase()))+"</p></div>"):"<!---->")),_vm._l((group),function(user){return _c('XAUsersListItem',{key:user.id,attrs:{"user":user,"isAllowSelect":_vm.isAllowSelect,"isAllowClick":_vm.isAllowClick,"isSelected":_vm.isUserSelected(user.id),"onlineMembers":_vm.onlineMembers},on:{"click":function($event){return _vm.$emit('selectUser', user)}}})})],2)}),0)])}
var UsersListvue_type_template_id_c994969c_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/Messages/UsersList.vue?vue&type=template&id=c994969c&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Messages/UsersListItem.vue?vue&type=template&id=3738be40&scoped=true&lang=pug&
var UsersListItemvue_type_template_id_3738be40_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-users-list-item",on:{"click":function($event){$event.preventDefault();return _vm.fnHandleClick.apply(null, arguments)}}},[_vm._ssrNode(((_vm.isAllowSelect)?("<input type=\"checkbox\""+(_vm._ssrAttr("id",_vm.getUserId))+(_vm._ssrAttr("value",_vm.getUserId))+(_vm._ssrAttr("checked",Array.isArray(_vm.isSelected)?_vm._i(_vm.isSelected,_vm.getUserId)>-1:(_vm.isSelected)))+" data-v-3738be40>"):"<!---->")+"<label"+(_vm._ssrAttr("for",_vm.getUserId))+" data-v-3738be40></label><div"+(_vm._ssrClass("xa-users-list-item-avatar",[_vm.getIsUserOnline ? 'online' : '']))+" data-v-3738be40>"+((_vm.getUserAvatar && _vm.getUserAvatar.PhotoURL)?("<img"+(_vm._ssrAttr("src",_vm.getUserAvatar.PhotoURL))+" data-v-3738be40>"):("<div class=\"xa-users-list-item-default-avatar\" data-v-3738be40>"+_vm._ssrEscape(_vm._s(_vm.getUserName.charAt(0).toUpperCase()))+"</div>"))+"</div><span data-v-3738be40>"+_vm._ssrEscape(_vm._s(_vm.getUserName))+"</span>")])}
var UsersListItemvue_type_template_id_3738be40_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Messages/UsersListItem.vue?vue&type=template&id=3738be40&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Messages/UsersListItem.vue?vue&type=script&lang=js&
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

/* harmony default export */ var UsersListItemvue_type_script_lang_js_ = ({
  name: 'XAUsersListItem',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => {}
    },
    isAllowSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    isAllowClick: {
      type: Boolean,
      required: false,
      default: false
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false
    },
    onlineMembers: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    getUserId() {
      var _this$user;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id) || '';
    },
    getUserName() {
      var _this$user2;
      return ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.username) || '';
    },
    getUserAvatar() {
      var _this$user3;
      return ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.Avatar) || {};
    },
    getIsUserOnline() {
      return this.onlineMembers.find(m => m.User.id === this.getUserId);
    }
  },
  methods: {
    fnHandleClick() {
      this.isAllowClick && this.$emit('click', this.user);
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Messages/UsersListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Messages_UsersListItemvue_type_script_lang_js_ = (UsersListItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Messages/UsersListItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(399)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Messages_UsersListItemvue_type_script_lang_js_,
  UsersListItemvue_type_template_id_3738be40_scoped_true_lang_pug_render,
  UsersListItemvue_type_template_id_3738be40_scoped_true_lang_pug_staticRenderFns,
  false,
  injectStyles,
  "3738be40",
  "9e8a2ce6"
  
)

/* harmony default export */ var UsersListItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Messages/UsersList.vue?vue&type=script&lang=js&
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


/* harmony default export */ var UsersListvue_type_script_lang_js_ = ({
  name: 'XMMessagesUsersList',
  components: {
    XAUsersListItem: UsersListItem
  },
  props: {
    usersList: {
      type: Array,
      required: true,
      default: () => []
    },
    onlineMembers: {
      type: Array,
      required: false,
      default: () => []
    },
    isAllowSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    isAllowClick: {
      type: Boolean,
      required: false,
      default: false
    },
    enableGrouping: {
      type: Boolean,
      required: false,
      default: true
    },
    selectedUsers: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    groupUsers() {
      return this.usersList.reduce((a, u) => {
        const letter = u.username.charAt(0);
        const keyStore = a[letter] || (a[letter] = []);
        keyStore.push(u);
        return a;
      }, {});
    }
  },
  methods: {
    isUserSelected(id) {
      return this.selectedUsers.some(u => u.id === id);
    },
    emitScroll(e) {
      this.$emit('scroll', e);
    }
  }
});
// CONCATENATED MODULE: ./components/molecules/Messages/UsersList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Messages_UsersListvue_type_script_lang_js_ = (UsersListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/molecules/Messages/UsersList.vue



function UsersList_injectStyles (context) {
  
  var style0 = __webpack_require__(401)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var UsersList_component = Object(componentNormalizer["a" /* default */])(
  Messages_UsersListvue_type_script_lang_js_,
  UsersListvue_type_template_id_c994969c_scoped_true_lang_pug_render,
  UsersListvue_type_template_id_c994969c_scoped_true_lang_pug_staticRenderFns,
  false,
  UsersList_injectStyles,
  "c994969c",
  "c797b3e2"
  
)

/* harmony default export */ var UsersList = (UsersList_component.exports);
// EXTERNAL MODULE: ./components/atoms/Loader.vue + 4 modules
var Loader = __webpack_require__(275);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Messages/ModalLoader.vue?vue&type=template&id=6223bc8a&scoped=true&lang=pug&
var ModalLoadervue_type_template_id_6223bc8a_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xm-modal-loader"},[_c('XALoader',{attrs:{"size":36}}),_vm._ssrNode(((_vm.title)?("<p data-v-6223bc8a>"+_vm._ssrEscape(_vm._s(_vm.title))+"</p>"):"<!---->"))],2)}
var ModalLoadervue_type_template_id_6223bc8a_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/Messages/ModalLoader.vue?vue&type=template&id=6223bc8a&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Messages/ModalLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var ModalLoadervue_type_script_lang_js_ = ({
  name: 'XMModalLoader',
  components: {
    XALoader: Loader["default"]
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/molecules/Messages/ModalLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Messages_ModalLoadervue_type_script_lang_js_ = (ModalLoadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/molecules/Messages/ModalLoader.vue



function ModalLoader_injectStyles (context) {
  
  var style0 = __webpack_require__(403)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ModalLoader_component = Object(componentNormalizer["a" /* default */])(
  Messages_ModalLoadervue_type_script_lang_js_,
  ModalLoadervue_type_template_id_6223bc8a_scoped_true_lang_pug_render,
  ModalLoadervue_type_template_id_6223bc8a_scoped_true_lang_pug_staticRenderFns,
  false,
  ModalLoader_injectStyles,
  "6223bc8a",
  "7e7719ae"
  
)

/* harmony default export */ var ModalLoader = (ModalLoader_component.exports);
// EXTERNAL MODULE: ./components/organisms/Default/UploadAvatar.vue + 4 modules
var UploadAvatar = __webpack_require__(364);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Messages/Input.vue?vue&type=template&id=d73bd34e&scoped=true&lang=pug&
var Inputvue_type_template_id_d73bd34e_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-input"},[_vm._ssrNode("<input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("value",(_vm.currentValue)))+" data-v-d73bd34e>")])}
var Inputvue_type_template_id_d73bd34e_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Messages/Input.vue?vue&type=template&id=d73bd34e&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Messages/Input.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'XAInput',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      }
    }
  },
  methods: {
    emitInput(e) {
      this.$emit('input', e);
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Messages/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var Messages_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/atoms/Messages/Input.vue



function Input_injectStyles (context) {
  
  var style0 = __webpack_require__(407)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Input_component = Object(componentNormalizer["a" /* default */])(
  Messages_Inputvue_type_script_lang_js_,
  Inputvue_type_template_id_d73bd34e_scoped_true_lang_pug_render,
  Inputvue_type_template_id_d73bd34e_scoped_true_lang_pug_staticRenderFns,
  false,
  Input_injectStyles,
  "d73bd34e",
  "379dbc44"
  
)

/* harmony default export */ var Input = (Input_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Forms/Switch.vue?vue&type=template&id=9a997bf4&scoped=true&lang=pug&
var Switchvue_type_template_id_9a997bf4_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"xa-switch"},[_vm._ssrNode("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.currentValue)?_vm._i(_vm.currentValue,null)>-1:(_vm.currentValue)))+" data-v-9a997bf4><span class=\"slider\" data-v-9a997bf4></span>")])}
var Switchvue_type_template_id_9a997bf4_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Forms/Switch.vue?vue&type=template&id=9a997bf4&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Forms/Switch.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Switchvue_type_script_lang_js_ = ({
  name: 'XASwitch',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      }
    }
  },
  methods: {
    emitCheckbox(e) {
      this.$emit('change', e);
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Forms/Switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_Switchvue_type_script_lang_js_ = (Switchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/atoms/Forms/Switch.vue



function Switch_injectStyles (context) {
  
  var style0 = __webpack_require__(409)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Switch_component = Object(componentNormalizer["a" /* default */])(
  Forms_Switchvue_type_script_lang_js_,
  Switchvue_type_template_id_9a997bf4_scoped_true_lang_pug_render,
  Switchvue_type_template_id_9a997bf4_scoped_true_lang_pug_staticRenderFns,
  false,
  Switch_injectStyles,
  "9a997bf4",
  "5d553036"
  
)

/* harmony default export */ var Switch = (Switch_component.exports);
// EXTERNAL MODULE: ./mixins/dialogs.js
var dialogs = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CreatePrivateGroup.vue?vue&type=script&lang=js&
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
//
//
//
//
//












/* harmony default export */ var CreatePrivateGroupvue_type_script_lang_js_ = ({
  name: 'XDPasswordUpdated',
  components: {
    XAMessagesSearch: Search["a" /* default */],
    XMUsersList: UsersList,
    XALoader: Loader["default"],
    XMModalLoader: ModalLoader,
    XODefaultUploadAvatar: UploadAvatar["a" /* default */],
    XAInput: Input,
    XASwitch: Switch
  },
  mixins: [dialogs["a" /* default */]],
  props: {
    details: {
      type: Object,
      required: false,
      default: () => {}
    },
    onCreate: {
      type: Function,
      required: false,
      default: null
    }
  },
  data() {
    return {
      step: 1,
      isSearchingUsers: false,
      isLoading: false,
      isManageMembers: false,
      isEdit: false,
      search: '',
      usersList: [],
      alreadyAddedUsersList: [],
      usersNext: null,
      usersCount: null,
      mode: '1-to-1',
      selectedUsers: [],
      maxSelectUsers: 50,
      isNotifications: false,
      groupName: '',
      avatarId: null
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      getOnlineMembers: 'app/getOnlineMembers'
    }),
    isOneToOne() {
      return this.mode === '1-to-1';
    },
    isButtonCreateGroupNextDisabled() {
      return !this.selectedUsers.length;
    },
    isAvatarChanged() {
      return this.getChannelObjectID !== this.avatarId;
    },
    isChannelNameChanged() {
      return this.getChannelName !== this.groupName;
    },
    isMembersChanged() {
      return !!xor_default()(this.getChannelJoiners.map(u => u.id), this.selectedUsers.map(u => u.id)).length;
    },
    isButtonCreateGroupDisabled() {
      return !this.groupName || this.isLoading || !this.selectedUsers.length || this.isEditing && !this.isAvatarChanged && !this.isChannelNameChanged && !this.isMembersChanged;
    },
    isEditing() {
      var _this$details;
      return !!((_this$details = this.details) !== null && _this$details !== void 0 && _this$details.id);
    },
    getSecondStepUsersList() {
      return this.isEditing ? this.alreadyAddedUsersList : this.selectedUsers;
    },
    getChannelId() {
      return this.details.id;
    },
    getChannelName() {
      return this.details.name;
    },
    getChannelObjectID() {
      return this.details.objectID || null;
    },
    getChannelJoiners() {
      return this.details.joiners.map(({
        User,
        ...rest
      }) => ({
        ...rest,
        ...User
      }));
    },
    getChannelColor() {
      return this.details.channelColor;
    },
    getStepOneTitle() {
      if (this.isEditing) {
        return 'Select memebers';
      } else if (this.isOneToOne) {
        return 'Start messaging';
      } else {
        return 'Select members';
      }
    },
    getStepSecondTitle() {
      if (this.isEdit) {
        return 'Edit group';
      } else if (this.isEditing) {
        return 'Group settings';
      } else {
        return 'Name group';
      }
    },
    avatarUrl() {
      return this.avatarId ? `https://api.dev.fx1.io/photos/0/${this.avatarId}.webp` : '';
    }
  },
  async mounted() {
    try {
      if (this.isEditing) {
        this.fnChangeStep(2);
        this.avatarId = this.getChannelObjectID;
        this.groupName = this.getChannelName;
        this.alreadyAddedUsersList = structuredClone(this.getChannelJoiners);
        this.selectedUsers = structuredClone(this.getChannelJoiners);
      }
      const {
        items,
        next,
        count
      } = await this.fnLoadUsers();
      this.usersList = items;
      this.usersNext = next;
      this.usersCount = count;
    } catch (error) {}
  },
  methods: {
    async fnLoadUsers(params) {
      try {
        this.isSearchingUsers = true;
        const {
          getAvailableUsersForPrivateEncryptedChannel: {
            items,
            next,
            count
          }
        } = await this.$api.getAvailableUsersForPrivateEncryptedChannel({
          group: null,
          ...params
        });
        return {
          items,
          next,
          count
        };
      } catch (error) {
        this.$toast.error(error.message, {
          duration: 3000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } finally {
        this.isSearchingUsers = false;
      }
    },
    filterAvailableUsers: debounce_default()(async function () {
      try {
        this.usersList = [];
        const {
          items,
          next,
          count
        } = await this.fnLoadUsers({
          name: this.search
        });
        this.usersList = items;
        this.usersNext = next;
        this.usersCount = count;
      } catch (error) {
        this.$toast.error(error.message, {
          duration: 3000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      }
    }, 500),
    async fnSelectUser(user) {
      const findUser = this.selectedUsers.find(u => u.id === user.id);
      if (this.isOneToOne && !this.isEditing) {
        await this.fnCreateGroup({
          name: 'Private Channel',
          userIDs: [user.id]
        });
      } else {
        if (this.selectedUsers.length >= this.maxSelectUsers && !findUser) {
          return this.$toast.error("You're out of the limit of max members to invite", {
            duration: 3000,
            position: 'bottom-left',
            className: 'fx1-error',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        }
        if (findUser) {
          this.selectedUsers = this.selectedUsers.filter(u => u.id !== user.id);
        } else {
          this.selectedUsers.push(user);
        }
      }
    },
    async fnHandleScrollList(e) {
      var _this$usersCount;
      const bottomOfElement = e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;
      if (bottomOfElement && !this.isSearchingUsers && ((_this$usersCount = this.usersCount) !== null && _this$usersCount !== void 0 ? _this$usersCount : true)) {
        const {
          items,
          next,
          count
        } = await this.fnLoadUsers({
          name: this.search,
          next: this.usersNext
        });
        this.usersList.push(...items);
        this.usersNext = next;
        this.usersCount = count;
      }
    },
    fnChangeStep(step) {
      this.step = step;
    },
    fnSwitchMode() {
      if (this.isEditing) {
        this.fnChangeStep(2);
      } else {
        this.mode = this.mode === 'create-group' ? '1-to-1' : 'create-group';
        if (this.mode === '1-to-1') {
          this.selectedUsers = [];
        }
      }
    },
    fnHandleSecondStep() {
      this.fnChangeStep(2);
      if (this.isEditing) {
        this.alreadyAddedUsersList = this.selectedUsers;
      }
    },
    fnHandleCancelFirstStep() {
      if (this.isEditing) {
        this.fnChangeStep(2);

        // Set previous data
        this.alreadyAddedUsersList = structuredClone(this.getChannelJoiners);
        this.selectedUsers = structuredClone(this.getChannelJoiners);
      } else {
        this.$parent.close();
      }
    },
    fnHandleCancelSecondStep() {
      if (this.isEditing) {
        if (this.isManageMembers) {
          this.isManageMembers = false;

          // Set previous data on close manage members
          this.alreadyAddedUsersList = structuredClone(this.getChannelJoiners);
          this.selectedUsers = structuredClone(this.getChannelJoiners);
        } else if (this.isEdit) {
          this.isEdit = false;
          this.isManageMembers = false;

          // Set previous data on finally close
          this.avatarId = this.getChannelObjectID;
          this.groupName = this.getChannelName;
        }
      } else {
        this.fnChangeStep(1);
      }
    },
    fnHandleManageMembers() {
      if (this.isManageMembers) {
        this.fnChangeStep(1);
        this.mode = 'create-group';
      } else {
        this.isManageMembers = true;
      }
    },
    fnUploadAvatar(e) {
      this.fnShowEditAvatarNewDialog(e, ({
        id
      }) => {
        try {
          setTimeout(() => {
            this.avatarId = id;
          }, 500);
        } catch (error) {
          this.$toast.error(error.message, {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-error',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        }
      });
    },
    fnDeleteAvatar() {
      this.avatarId = null;
    },
    async fnCreateGroup({
      name,
      userIDs
    }) {
      try {
        this.isLoading = true;
        const ChannelPhoto = {
          objectID: this.avatarId,
          objectType: 'Photo'
        };
        const {
          createPrivateEncryptedChannel
        } = await this.$api.createPrivateEncryptedChannel({
          input: {
            name,
            ChannelPhoto: this.avatarId && ChannelPhoto,
            userIDs
          }
        });
        this.onCreate(createPrivateEncryptedChannel);
        this.$toast.success('Group successfully created', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
        this.$parent.close();
      } catch (error) {
        this.isLoading = false;
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      }
    },
    async fnUpdateGroup({
      addedUserIDs,
      removedUserIDs
    }) {
      try {
        this.isLoading = true;

        // TODO change group name and avatar

        if (this.isMembersChanged) {
          await this.$api.manageChannelMembers({
            channelID: this.getChannelId,
            addedUserIDs,
            removedUserIDs
          });
        }
        this.onCreate();
        this.$toast.success('Group successfully saved', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
        this.$parent.close();
      } catch (error) {
        this.isLoading = false;
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      }
    },
    async fnHandleSubmit() {
      if (this.isEditing) {
        await this.fnUpdateGroup({
          addedUserIDs: this.selectedUsers.map(u => u.id),
          removedUserIDs: this.getChannelJoiners.map(u => u.id)
        });
      } else {
        await this.fnCreateGroup({
          name: this.groupName,
          userIDs: this.selectedUsers.map(u => u.id)
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/CreatePrivateGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_CreatePrivateGroupvue_type_script_lang_js_ = (CreatePrivateGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/dialogs/CreatePrivateGroup.vue



function CreatePrivateGroup_injectStyles (context) {
  
  var style0 = __webpack_require__(411)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CreatePrivateGroup_component = Object(componentNormalizer["a" /* default */])(
  dialogs_CreatePrivateGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  CreatePrivateGroup_injectStyles,
  "6b3bf572",
  "04812413"
  
)

/* harmony default export */ var CreatePrivateGroup = __webpack_exports__["default"] = (CreatePrivateGroup_component.exports);

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/ClubRegistration.vue?vue&type=template&id=422bfae9&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-club-registration card"},[_vm._ssrNode("<div class=\"card-content\" data-v-422bfae9>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-422bfae9>","</div>",[_c('b-icon',{attrs:{"icon":"close"}})],1),_vm._ssrNode("<h3 class=\"text-center\" data-v-422bfae9>Create a club</h3>"),_vm._ssrNode("<form action=\"#\" autocomplete=\"off\" data-v-422bfae9>","</form>",[_vm._ssrNode("<div class=\"mb-5\" data-v-422bfae9>","</div>",[_c('XAFormsAvatar')],1),_vm._ssrNode("<div class=\"mb-6\" data-v-422bfae9>","</div>",[_c('XAFormsInput',{attrs:{"label":"Club Name"},model:{value:(_vm.clubName),callback:function ($$v) {_vm.clubName=$$v},expression:"clubName"}})],1),_vm._ssrNode("<div class=\"actions row justify-center\" data-v-422bfae9>","</div>",[_c('b-button',{attrs:{"type":"is-primary"}},[_vm._v("Create")]),_c('b-button',{attrs:{"type":"is-light"},on:{"click":function($event){$event.preventDefault();return _vm.$parent.close()}}},[_vm._v("Cancel")])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/ClubRegistration.vue?vue&type=template&id=422bfae9&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/ClubRegistration.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ClubRegistrationvue_type_script_lang_js_ = ({
  name: 'XDClubRegistration',
  components: {
    XAFormsAvatar: () => __webpack_require__.e(/* import() */ 118).then(__webpack_require__.bind(null, 1428)),
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991))
  },
  data() {
    return {
      clubName: ''
    };
  }
});
// CONCATENATED MODULE: ./components/dialogs/ClubRegistration.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_ClubRegistrationvue_type_script_lang_js_ = (ClubRegistrationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/ClubRegistration.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(365)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_ClubRegistrationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "422bfae9",
  "b2326fec"
  
)

/* harmony default export */ var ClubRegistration = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CreateChannel.vue?vue&type=template&id=65e71e4b&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-create-channel card"},[_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<div class=\"close\"><img"+(_vm._ssrAttr("src",__webpack_require__(273)))+"></div>"),_vm._ssrNode("<form action=\"#\" autocomplete=\"off\" class=\"flex-column justify-between\">","</form>",[_vm._ssrNode("<div class=\"inputs col\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.isEditing ? 'Rename channel' : 'Create a channel'))+"</h2>"),_vm._ssrNode("<div class=\"mb-5\">","</div>",[_c('XAFormsInput',{attrs:{"placeholder":"Channel name","loading":_vm.isChecking,"error":_vm.validation.firstError('name') || _vm.channelNameError},on:{"input":function($event){return _vm.fnChannelNameValidation()}},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_c('XAFormsInput',{attrs:{"placeholder":"Short description","type":"textarea","error":_vm.validation.firstError('description')},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],2),_vm._ssrNode("<div class=\"actions\">","</div>",[_c('b-button',{attrs:{"type":"is-primary","loading":_vm.isSubmitting,"disabled":_vm.isDisabledCreateButton},on:{"click":function($event){$event.preventDefault();return _vm.fnSave()}}},[_vm._v(_vm._s(_vm.isEditing ? 'Save' : 'Create Channel'))])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/CreateChannel.vue?vue&type=template&id=65e71e4b&lang=pug&

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(8);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "simple-vue-validator"
var external_simple_vue_validator_ = __webpack_require__(37);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CreateChannel.vue?vue&type=script&lang=js&
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




/* harmony default export */ var CreateChannelvue_type_script_lang_js_ = ({
  validators: {
    name(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Channel name field is required.');
    },
    description(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Description field is required.');
    }
  },
  name: 'XDCreateChannelGroup',
  components: {
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991))
  },
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isSubmitting: false,
      isChecking: false,
      channelNameError: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('channels', ['form.name', 'form.description', 'form.groupName', 'form.editName', 'form.editDescription']),
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    isDisabledCreateButton() {
      return !this.name || !this.description || this.channelNameError;
    },
    isEditing() {
      var _this$details;
      return ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.isEditing) || false;
    },
    channelGroupID() {
      var _this$details2;
      return ((_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.channelGroupID) || null;
    }
  },
  mounted() {
    if (this.isEditing) {
      const {
        channelName,
        channelDescription
      } = this.details;
      this.name = channelName;
      this.description = channelDescription;
      this.editName = channelName;
      this.editDescription = channelDescription;
      const params = {
        pageName: 'Rename channel',
        isLoggedIn: this.isLoggedIn
      };
      this.$mixpanelClient.trackViewPage(params);
      return;
    }
    const params = {
      pageName: 'Create channel',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  methods: {
    fnCreateChannel() {
      this.isSubmitting = true;
      this.$validate().then(async success => {
        if (success) {
          try {
            const {
              name,
              description,
              channelGroupID
            } = this;
            const input = {
              name,
              description,
              channelGroupID,
              type: 'Public'
            };
            await this.$api.createChannel({
              input
            });
            await this.$root.$emit('evtRtGetMyProfileDetails');
            await this.fnSetLockerRoomActive();
            this.fnCloseDialog();
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
            this.isSubmitting = false;
          }
          return;
        }
        this.isSubmitting = false;
      });
    },
    async fnSetLockerRoomActive() {
      const {
        slug
      } = this.lockerRoomActive;
      const {
        getLockerRoom
      } = await this.$api.getLockerRoom({
        slug
      });
      this.lockerRoomActive = getLockerRoom;
    },
    fnChannelNameValidation: debounce_default()(async function () {
      if (!this.name) return;
      this.isChecking = true;
      try {
        const {
          name,
          channelGroupID
        } = this;
        const {
          channelExists
        } = await this.$api.channelExists({
          name,
          channelGroupID
        });
        if (channelExists) {
          this.channelNameError = 'Channel name already exists.';
          return;
        }
        this.channelNameError = null;
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
        this.isChecking = false;
      }
    }, 300),
    async fnEditChannel() {
      this.isSubmitting = true;
      try {
        const {
          channelID,
          channelType
        } = this.details;
        const {
          name,
          description
        } = this;
        const input = {
          name,
          description,
          type: channelType
        };
        await this.$api.editChannel({
          id: channelID,
          input
        });

        // retrieving locker room details
        this.$root.$emit('evtRtGetMyProfileDetails');
        this.$root.$emit('evtRtGetChannel');
        await this.fnSetLockerRoomActive();
        this.$toast.success('Great, channel successfully renamed', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'check-circle-outline',
          action: {
            text: 'Undo',
            onClick: (_, toastObject) => {
              this.fnUndoRenameChannel();
              toastObject.goAway(0);
            }
          }
        });
        this.fnCloseDialog();
      } catch (error) {
        var _error$response3;
        error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.errors.forEach(error => {
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
    },
    async fnSave() {
      if (this.isEditing) {
        await this.fnEditChannel();
        return;
      }
      await this.fnCreateChannel();
    },
    fnCloseDialog() {
      this.name = null;
      this.description = null;
      this.groupName = null;
      this.$parent.close();
    },
    async fnUndoRenameChannel() {
      try {
        const {
          channelID,
          channelType
        } = this.details;
        const {
          editName,
          editDescription
        } = this;
        const input = {
          name: editName,
          description: editDescription,
          type: channelType
        };
        await this.$api.editChannel({
          id: channelID,
          input
        });

        // retrieving locker room details
        this.$root.$emit('evtRtGetMyProfileDetails');
        this.$root.$emit('evtRtGetChannel');
        await this.fnSetLockerRoomActive();
        this.editName = null;
        this.editDescription = null;
      } catch (error) {
        var _error$response4;
        error === null || error === void 0 ? void 0 : (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.errors.forEach(error => {
          this.$toast.success(error.message, {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-success',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/CreateChannel.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_CreateChannelvue_type_script_lang_js_ = (CreateChannelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/CreateChannel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_CreateChannelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f233408"
  
)

/* harmony default export */ var CreateChannel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CreateChannelGroup.vue?vue&type=template&id=07cb4590&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-create-channel-group card"},[_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<div class=\"close\"><img"+(_vm._ssrAttr("src",__webpack_require__(273)))+"></div>"),_vm._ssrNode("<form action=\"#\" autocomplete=\"off\" class=\"flex-column justify-between\">","</form>",[_vm._ssrNode("<div class=\"inputs col\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.isEditing ? 'Rename' : 'Create a')+" channel group")+"</h2>"),_c('XAFormsInput',{attrs:{"placeholder":"Group name","error":_vm.validation.firstError('name') || _vm.channelGroupNameError,"loading":_vm.isChecking},on:{"input":function($event){return _vm.fnChannelGroupNameValidation()}},model:{value:(_vm.groupName),callback:function ($$v) {_vm.groupName=$$v},expression:"groupName"}})],2),_vm._ssrNode("<div class=\"actions\">","</div>",[_c('b-button',{attrs:{"type":"is-primary","loading":_vm.isSubmitting,"disabled":_vm.isDisabledCreateButton},on:{"click":function($event){$event.preventDefault();return _vm.fnSave()}}},[_vm._v(_vm._s(_vm.isEditing ? 'Save' : 'Create Channel Group'))])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/CreateChannelGroup.vue?vue&type=template&id=07cb4590&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(8);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "simple-vue-validator"
var external_simple_vue_validator_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CreateChannelGroup.vue?vue&type=script&lang=js&
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




/* harmony default export */ var CreateChannelGroupvue_type_script_lang_js_ = ({
  validators: {
    groupName(value) {
      return external_simple_vue_validator_["Validator"].value(value).required('Group name field is required.');
    }
  },
  name: 'XDCreateChannelGroup',
  components: {
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991))
  },
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isSubmitting: false,
      isChecking: false,
      channelGroupNameError: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    ...Object(external_vuex_map_fields_["mapFields"])('channels', ['form.groupName', 'form.description', 'form.editGroupName']),
    lockerRoomID() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.id) || null;
    },
    slug() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.slug) || null;
    },
    isDisabledCreateButton() {
      return !this.groupName || this.channelGroupNameError;
    },
    isEditing() {
      var _this$details;
      return ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.isEditing) || false;
    },
    channelGroupID() {
      var _this$details2;
      return ((_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.channelGroupID) || null;
    }
  },
  mounted() {
    if (this.isEditing) {
      const {
        groupName
      } = this.details;
      this.groupName = groupName;
      this.editGroupName = groupName;
      const params = {
        pageName: 'Rename channel group',
        isLoggedIn: this.isLoggedIn
      };
      this.$mixpanelClient.trackViewPage(params);
      return;
    }
    const params = {
      pageName: 'Create channel group',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  methods: {
    fnCreateChannelGroup() {
      this.isSubmitting = true;
      this.$validate().then(async success => {
        if (success) {
          try {
            const {
              groupName,
              lockerRoomID
            } = this;
            const input = {
              name: groupName,
              description: null,
              lockerRoomID
            };
            await this.$api.createChannelGroup({
              input
            });
            this.$root.$emit('evtRtGetMyProfileDetails');
            await this.fnSetLockerRoomActive();
            this.$parent.close();
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
            this.isSubmitting = false;
          }
        }
        this.isSubmitting = false;
      });
    },
    async fnSetLockerRoomActive() {
      const {
        slug
      } = this;
      const {
        getLockerRoom
      } = await this.$api.getLockerRoom({
        slug
      });
      this.lockerRoomActive = getLockerRoom;
    },
    fnChannelGroupNameValidation: debounce_default()(async function () {
      if (!this.groupName) return;
      this.isChecking = true;
      try {
        const {
          groupName,
          lockerRoomID
        } = this;
        const {
          channelGroupExists
        } = await this.$api.channelGroupExists({
          name: groupName,
          lockerRoomID
        });
        if (channelGroupExists) {
          this.channelGroupNameError = 'Channel group name already exists.';
          return;
        }
        this.channelGroupNameError = null;
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
        this.isChecking = false;
      }
    }, 300),
    async fnEditChannelGroup() {
      this.isSubmitting = true;
      try {
        const {
          channelGroupID,
          groupName,
          description
        } = this;
        const input = {
          name: groupName,
          description
        };
        await this.$api.editChannelGroup({
          id: channelGroupID,
          input
        });

        // retrieving locker room details
        this.$root.$emit('evtRtGetMyProfileDetails');
        await this.fnSetLockerRoomActive();
        this.$toast.success('Awesome, channel group successfully renamed', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'check-circle-outline',
          action: {
            text: 'Undo',
            onClick: (_, toastObject) => {
              this.fnUndoRenameChannelGroup();
              toastObject.goAway(0);
            }
          }
        });
        this.fnCloseDialog();
      } catch (error) {
        var _error$response3;
        error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.errors.forEach(error => {
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
    },
    fnSave() {
      if (this.isEditing) {
        this.fnEditChannelGroup();
        return;
      }
      this.fnCreateChannelGroup();
    },
    fnCloseDialog() {
      this.description = null;
      this.groupName = null;
      this.$parent.close();
    },
    async fnUndoRenameChannelGroup() {
      try {
        const {
          channelGroupID,
          editGroupName,
          description
        } = this;
        const input = {
          name: editGroupName,
          description
        };
        await this.$api.editChannelGroup({
          id: channelGroupID,
          input
        });

        // retrieving locker room details
        this.$root.$emit('evtRtGetMyProfileDetails');
        await this.fnSetLockerRoomActive();
      } catch (error) {
        var _error$response4;
        error === null || error === void 0 ? void 0 : (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.errors.forEach(error => {
          this.$toast.success(error.message, {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-success',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/CreateChannelGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_CreateChannelGroupvue_type_script_lang_js_ = (CreateChannelGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/CreateChannelGroup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_CreateChannelGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39bd86da"
  
)

/* harmony default export */ var CreateChannelGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/InviteManagers.vue?vue&type=template&id=3a353ab6&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-invite-managers card"},[_vm._ssrNode("<div class=\"card-content\" data-v-3a353ab6>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-3a353ab6><img"+(_vm._ssrAttr("src",__webpack_require__(273)))+" data-v-3a353ab6></div>"),_vm._ssrNode("<form action=\"#\" autocomplete=\"off\" class=\"flex-column justify-between\" data-v-3a353ab6>","</form>",[_vm._ssrNode("<div class=\"inputs col\" data-v-3a353ab6>","</div>",[_vm._ssrNode("<h2 data-v-3a353ab6>Invite managers</h2>"),_vm._l((_vm.managers),function(manager,index){return [_vm._ssrNode("<div class=\"mb-5 row\" data-v-3a353ab6>","</div>",[_vm._ssrNode("<div class=\"email col\" data-v-3a353ab6>","</div>",[_c('XAFormsInput',{attrs:{"placeholder":"Email"},on:{"enter":function($event){return _vm.fnSendInvites()}},model:{value:(manager.emailAddress),callback:function ($$v) {_vm.$set(manager, "emailAddress", $$v)},expression:"manager.emailAddress"}})],1),_vm._ssrNode("<div class=\"role\" data-v-3a353ab6>","</div>",[_c('XAFormsSelect',{attrs:{"options":_vm.lockerRoomRole === 'manager' ? _vm.optionsManager : _vm.optionsOwner},model:{value:(manager.role),callback:function ($$v) {_vm.$set(manager, "role", $$v)},expression:"manager.role"}})],1)])]}),_vm._ssrNode("<div class=\"add-more row items-center\" data-v-3a353ab6><div class=\"_icon\" data-v-3a353ab6><img"+(_vm._ssrAttr("src",__webpack_require__(304)))+" data-v-3a353ab6></div><div class=\"value\" data-v-3a353ab6>Add more</div></div>")],2),_vm._ssrNode("<div class=\"actions\" data-v-3a353ab6>","</div>",[_c('b-button',{attrs:{"type":"is-primary","disabled":_vm.isDisabledSendInvites,"loading":_vm.isSubmitting},on:{"click":function($event){$event.preventDefault();return _vm.fnSendInvites()}}},[_vm._v("Send Invites")])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/InviteManagers.vue?vue&type=template&id=3a353ab6&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/InviteManagers.vue?vue&type=script&lang=js&
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



/* harmony default export */ var InviteManagersvue_type_script_lang_js_ = ({
  name: 'XDInviteManagers',
  components: {
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991)),
    XAFormsSelect: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 1429))
  },
  data() {
    return {
      managers: [{
        emailAddress: '',
        role: 'manager'
      }],
      optionsOwner: [{
        label: 'Owner',
        value: 'owner'
      }, {
        label: 'Manager',
        value: 'manager'
      }],
      optionsManager: [{
        label: 'Manager',
        value: 'manager'
      }],
      isSubmitting: false
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    isDisabledSendInvites() {
      const hasEmail = this.managers.some(x => x.email === '');
      return hasEmail;
    },
    lockerRoomID() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.id) || null;
    },
    lockerRoomRole() {
      var _this$lockerRoomActiv2, _this$lockerRoomActiv3;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : (_this$lockerRoomActiv3 = _this$lockerRoomActiv2.MyRole) === null || _this$lockerRoomActiv3 === void 0 ? void 0 : _this$lockerRoomActiv3.role) || null;
    }
  },
  mounted() {
    this.clearLockerRoomDeletedManagers();
    const params = {
      pageName: 'Invite Managers',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      clearLockerRoomDeletedManagers: 'locker-room/clearLockerRoomDeletedManagers'
    }),
    fnAddMoreManagers() {
      if (this.managers.some(x => x.emailAddress === '')) {
        this.$toast.error('Please fill up email field', {
          duration: 3000,
          position: 'top-center'
        });
        return;
      }
      // if (this.managers.length >= 5) {
      //   this.$toast.success('Only 5 emails max per send invites', {
      //     duration: 3000,
      //     position: 'top-center',
      //   })
      //   return
      // }
      this.managers.push({
        emailAddress: '',
        role: 'manager'
      });
    },
    async fnSendInvites() {
      this.isSubmitting = true;
      try {
        var _this$$route$params;
        // send invite to user
        const {
          lockerRoomID
        } = this;
        const input = this.managers;
        await this.$api.inviteUserForManagerialRole({
          lockerRoomID,
          input
        });
        this.$toast.success(`Awesome, your invite has been successfully sent`, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'email-outline'
        });
        this.$parent.close();

        // retrieve locker room details
        const {
          getLockerRoom
        } = await this.$api.getLockerRoom({
          slug: (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.slug
        });
        this.lockerRoomActive = getLockerRoom;
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
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/InviteManagers.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_InviteManagersvue_type_script_lang_js_ = (InviteManagersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/InviteManagers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(367)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_InviteManagersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a353ab6",
  "ed43366c"
  
)

/* harmony default export */ var InviteManagers = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CommunityRules.vue?vue&type=template&id=cd61effa&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-community-rules card"},[_vm._ssrNode("<div class=\"card-content\" data-v-cd61effa>","</div>",[_vm._ssrNode(((!_vm.isSubmitting)?("<div class=\"close\" data-v-cd61effa><img"+(_vm._ssrAttr("src",__webpack_require__(308)))+" data-v-cd61effa></div>"):"<!---->")),_vm._ssrNode("<div class=\"cover-photo\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.coverPhoto + ")") }, null))+" data-v-cd61effa>","</div>",[_vm._ssrNode("<div class=\"contents\" data-v-cd61effa>","</div>",[_c('XAAvatar',{attrs:{"image":_vm.avatar,"name":_vm.name,"size":"64px"}}),_vm._ssrNode("<h3 class=\"name\" data-v-cd61effa>"+_vm._ssrEscape(_vm._s(_vm.name))+"</h3><div class=\"supporters\" data-v-cd61effa>"+_vm._ssrEscape(_vm._s(_vm.supporterCount)+" supporters")+"</div>")],2)]),_vm._ssrNode("<div class=\"details\" data-v-cd61effa>","</div>",[_vm._ssrNode("<div class=\"details-header row items-center\" data-v-cd61effa><div data-v-cd61effa><h2 data-v-cd61effa>Community rules</h2><p data-v-cd61effa>Read and agree to join and start chatting</p></div></div>"),_vm._ssrNode("<div class=\"details-content\" data-v-cd61effa>","</div>",[_vm._ssrNode("<div class=\"rules\" data-v-cd61effa>"+(_vm._ssrList((_vm.rules),function(rule,index){return ("<div class=\"rule row\" data-v-cd61effa><div class=\"_icon row items-center justify-center\" data-v-cd61effa><img"+(_vm._ssrAttr("src",__webpack_require__(305)))+" data-v-cd61effa></div><div class=\"col d-flex\" data-v-cd61effa><div class=\"text text-weight-bold\" data-v-cd61effa>"+_vm._ssrEscape(_vm._s(rule.title))+"</div><div class=\"text\" data-v-cd61effa>"+_vm._ssrEscape(_vm._s(rule.content))+"</div></div></div>")}))+"</div>"),_vm._ssrNode("<div class=\"actions\" data-v-cd61effa>","</div>",[_c('b-button',{attrs:{"type":"is-primary","loading":_vm.isSubmitting},on:{"click":function($event){$event.preventDefault();return _vm.fnToggleSupportClub()}}},[_vm._v("I Agree")])],1)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/CommunityRules.vue?vue&type=template&id=cd61effa&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/CommunityRules.vue?vue&type=script&lang=js&
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



/* harmony default export */ var CommunityRulesvue_type_script_lang_js_ = ({
  name: 'XDCommunityRules',
  components: {
    XAAvatar: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 440))
  },
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      rules: [{
        title: 'No promotions or spam',
        content: "Spam, advertising and irrelevant links aren't allowed. Self-promotion needs to be firstly approved by the community manager"
      }, {
        title: 'Treat everyone with respect',
        content: 'Authentic, expressive discussions make groups great, but may also be sensitive and private.\n' + "What's shared in the group should stay in the group."
      }, {
        title: 'No hate speech or bullying',
        content: "Make sure everyone feels safe. Bullying of any kind isn't allowed, and degrading comments\n" + 'about things like race, religion, culture, polotics, sexual orientation, gender or identity will not\n' + 'be tolerated.'
      }, {
        title: 'Be kind and courteous',
        content: "We're all in this together to create a welcoming environment. Let's treat everyone with\n" + 'respect. Healthy debates are natural, but kindness, language managament, and respect is\n' + 'required'
      }, {
        title: 'Only sports related content',
        content: 'FX1 and its communities are all about sports. Content should be related to sports only. If you\n' + 'see something against the rules or makes you feel uncomfortable, let a FX1 community\n' + 'team member know. This is a welcoming space for everyone.'
      }],
      isSubmitting: false
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    ...Object(external_vuex_map_fields_["mapFields"])('signup', ['signupLockerRoomSupporting']),
    name() {
      var _this$lockerRoomActiv, _this$details;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.name) || ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.name) || '';
    },
    lockerRoomID() {
      var _this$lockerRoomActiv2, _this$details2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.id) || ((_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.id) || null;
    },
    supporterCount() {
      var _this$lockerRoomActiv3, _this$details3;
      return ((_this$lockerRoomActiv3 = this.lockerRoomActive) === null || _this$lockerRoomActiv3 === void 0 ? void 0 : _this$lockerRoomActiv3.supporterCount) || ((_this$details3 = this.details) === null || _this$details3 === void 0 ? void 0 : _this$details3.supporterCount) || 0;
    },
    club() {
      var _this$lockerRoomActiv4, _this$details4;
      return ((_this$lockerRoomActiv4 = this.lockerRoomActive) === null || _this$lockerRoomActiv4 === void 0 ? void 0 : _this$lockerRoomActiv4.Club) || ((_this$details4 = this.details) === null || _this$details4 === void 0 ? void 0 : _this$details4.Club) || null;
    },
    league() {
      var _this$lockerRoomActiv5, _this$details5;
      return ((_this$lockerRoomActiv5 = this.lockerRoomActive) === null || _this$lockerRoomActiv5 === void 0 ? void 0 : _this$lockerRoomActiv5.League) || ((_this$details5 = this.details) === null || _this$details5 === void 0 ? void 0 : _this$details5.League) || null;
    },
    fanGroup() {
      var _this$lockerRoomActiv6, _this$details6;
      return ((_this$lockerRoomActiv6 = this.lockerRoomActive) === null || _this$lockerRoomActiv6 === void 0 ? void 0 : _this$lockerRoomActiv6.FanGroup) || ((_this$details6 = this.details) === null || _this$details6 === void 0 ? void 0 : _this$details6.FanGroup) || null;
    },
    sports() {
      var _this$lockerRoomActiv7, _this$details7;
      return ((_this$lockerRoomActiv7 = this.lockerRoomActive) === null || _this$lockerRoomActiv7 === void 0 ? void 0 : _this$lockerRoomActiv7.Sports) || ((_this$details7 = this.details) === null || _this$details7 === void 0 ? void 0 : _this$details7.Sports) || [];
    },
    avatar() {
      var _this$club, _this$club$Avatar, _this$league, _this$league$Avatar, _this$fanGroup, _this$fanGroup$Avatar;
      return ((_this$club = this.club) === null || _this$club === void 0 ? void 0 : (_this$club$Avatar = _this$club.Avatar) === null || _this$club$Avatar === void 0 ? void 0 : _this$club$Avatar.PhotoURL) || ((_this$league = this.league) === null || _this$league === void 0 ? void 0 : (_this$league$Avatar = _this$league.Avatar) === null || _this$league$Avatar === void 0 ? void 0 : _this$league$Avatar.PhotoURL) || ((_this$fanGroup = this.fanGroup) === null || _this$fanGroup === void 0 ? void 0 : (_this$fanGroup$Avatar = _this$fanGroup.Avatar) === null || _this$fanGroup$Avatar === void 0 ? void 0 : _this$fanGroup$Avatar.PhotoURL) || null;
    },
    coverPhoto() {
      var _this$club2, _this$club2$CoverPhot, _this$league2, _this$league2$CoverPh, _this$fanGroup2, _this$fanGroup2$Cover, _this$sports$, _this$sports$$CoverPh;
      return ((_this$club2 = this.club) === null || _this$club2 === void 0 ? void 0 : (_this$club2$CoverPhot = _this$club2.CoverPhoto) === null || _this$club2$CoverPhot === void 0 ? void 0 : _this$club2$CoverPhot.PhotoURL) || ((_this$league2 = this.league) === null || _this$league2 === void 0 ? void 0 : (_this$league2$CoverPh = _this$league2.CoverPhoto) === null || _this$league2$CoverPh === void 0 ? void 0 : _this$league2$CoverPh.PhotoURL) || ((_this$fanGroup2 = this.fanGroup) === null || _this$fanGroup2 === void 0 ? void 0 : (_this$fanGroup2$Cover = _this$fanGroup2.CoverPhoto) === null || _this$fanGroup2$Cover === void 0 ? void 0 : _this$fanGroup2$Cover.PhotoURL) || ((_this$sports$ = this.sports[0]) === null || _this$sports$ === void 0 ? void 0 : (_this$sports$$CoverPh = _this$sports$.CoverPhoto) === null || _this$sports$$CoverPh === void 0 ? void 0 : _this$sports$$CoverPh.PhotoURL) || null;
    },
    pageName() {
      var _this$details8;
      return this.lockerRoomActive ? 'Locker room' : ((_this$details8 = this.details) === null || _this$details8 === void 0 ? void 0 : _this$details8.pageName) || null;
    }
  },
  mounted() {
    const params = {
      pageName: 'Community Rules',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setLockerRoomSupporting: 'locker-room/setLockerRoomSupporting',
      setLockerRoomActive: 'locker-room/setLockerRoomActive'
    }),
    async fnToggleSupportClub() {
      if (!this.isLoggedIn) {
        this.signupLockerRoomSupporting = this.lockerRoomActive || this.details;
        this.$parent.close();
        this.$router.push({
          path: '/signup?step=1'
        });
        return;
      }
      this.isSubmitting = true;
      try {
        const {
          ChannelGroups,
          Club,
          League,
          FanGroup,
          Roles,
          channelCount,
          defaultChannelSlug,
          group,
          id,
          name,
          role,
          slug,
          Sports
        } = this.lockerRoomActive || this.details;
        const lockerRoomActive = {
          ChannelGroups,
          Club,
          League,
          FanGroup,
          Roles,
          channelCount,
          defaultChannelSlug,
          group,
          id,
          isSupported: true,
          name,
          role,
          slug,
          Sports
        };
        this.setLockerRoomActive(lockerRoomActive);
        const {
          lockerRoomID
        } = this;
        await this.$api.supportClub({
          lockerRoomID
        });
        await this.$mixpanelClient.trackSupport({
          lockerRoom: lockerRoomActive,
          pageName: this.pageName
        });
        this.$toast.success(`Welcome to the ${this.name} community!`, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'check-circle-outline'
        });
        this.$parent.close();
        this.setLockerRoomSupporting(this.lockerRoomActive || this.details);
        if (this.$route.name === 'locker-room-explore') {
          this.$root.$emit('evtRtSupportViaExplore');
          this.$root.$emit('evtRtGetMyProfileDetails');
          this.lockerRoomActive = null;
          return;
        }
        const {
          getLockerRoom
        } = await this.$api.getLockerRoom({
          id: lockerRoomID
        });
        this.lockerRoomActive = getLockerRoom;
        this.$root.$emit('evtRtGetMyProfileDetails');
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
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/CommunityRules.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_CommunityRulesvue_type_script_lang_js_ = (CommunityRulesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/CommunityRules.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(369)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_CommunityRulesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cd61effa",
  "8b46c16e"
  
)

/* harmony default export */ var CommunityRules = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EditAvatar.vue?vue&type=template&id=26412ac2&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-edit-avatar card"},[_vm._ssrNode("<div class=\"card-content\" data-v-26412ac2>","</div>",[(_vm.boundary && _vm.viewport)?_c('vue-croppie',{ref:"editAvatar",attrs:{"enableOrientation":true,"boundary":_vm.boundary,"viewport":_vm.viewport,"enableResize":false}}):_vm._e(),_vm._ssrNode("<div class=\"actions row justify-center\" data-v-26412ac2>","</div>",[_c('b-button',{attrs:{"type":"is-primary","loading":_vm.isUploading},on:{"click":function($event){$event.preventDefault();return _vm.fnCropAvatar()}}},[_vm._v("Crop")]),_c('b-button',{attrs:{"type":"is-primary","outlined":"","disabled":_vm.isUploading},on:{"click":function($event){$event.preventDefault();return _vm.fnCancelCrop()}}},[_vm._v("Cancel")])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/EditAvatar.vue?vue&type=template&id=26412ac2&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EditAvatar.vue?vue&type=script&lang=js&
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



/* harmony default export */ var EditAvatarvue_type_script_lang_js_ = ({
  name: 'XDEditAvatar',
  props: {
    file: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      croppedImage: null,
      isUploading: false,
      boundary: null,
      viewport: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('signup', ['avatar', 'avatarCropped'])
  },
  created() {
    const files = this.file.target.files || this.file.dataTransfer.files;
    if (!files.length) return;
    const reader = new FileReader();
    reader.onload = e => {
      this.$refs.editAvatar.bind({
        url: e.target.result
      });
    };
    reader.readAsDataURL(files[0]);
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
    ...Object(external_vuex_["mapActions"])({
      mediaUpload: 'media/upload'
    }),
    async fnCropAvatar() {
      this.isUploading = true;
      try {
        const options = {
          format: 'png',
          circle: false
        };
        await this.$refs.editAvatar.result(options, output => {
          this.croppedImage = output;
        });
        const {
          id
        } = await this.mediaUpload(this.croppedImage);
        this.avatar.objectID = id;
        this.avatar.objectType = 'Photo';
        this.avatarCropped = this.croppedImage;
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
        this.isUploading = false;
        this.$parent.close();
      }
    },
    fnCheckWindowSize() {
      if (window.innerWidth < 768) {
        this.boundary = {
          height: 350
        };
        this.viewport = {
          width: 250,
          height: 250,
          type: 'circle'
        };
        return;
      }
      this.boundary = {
        width: 500,
        height: 500
      };
      this.viewport = {
        width: 350,
        height: 350,
        type: 'circle'
      };
    },
    fnCancelCrop() {
      this.$root.$emit('evtRtClearAvatarInput');
      this.$parent.close();
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/EditAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_EditAvatarvue_type_script_lang_js_ = (EditAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/EditAvatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(371)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_EditAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26412ac2",
  "50c41fbe"
  
)

/* harmony default export */ var EditAvatar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EditAvatarNew.vue?vue&type=template&id=22c5705b&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-edit-avatar-new card"},[_vm._ssrNode("<div class=\"card-content\" data-v-22c5705b>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-22c5705b><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-22c5705b></div><h3 data-v-22c5705b>Edit photo</h3>"),(_vm.boundary && _vm.viewport)?_c('vue-croppie',{ref:"editAvatar",attrs:{"enableOrientation":true,"boundary":_vm.boundary,"viewport":_vm.viewport,"enableResize":false}}):_vm._e(),_vm._ssrNode("<input type=\"file\" accept=\"image/*\" hidden=\"hidden\" data-v-22c5705b>"),_vm._ssrNode("<div class=\"actions\" data-v-22c5705b>","</div>",[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-white","outlined":"","expanded":""},on:{"click":function($event){return _vm.$refs.inputChoosePhotoRef.click()}}},[_vm._v("Choose another")]),_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-primary","loading":_vm.isUploading,"expanded":""},on:{"click":function($event){$event.preventDefault();return _vm.fnCropAvatar()}}},[_vm._v("Apply")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/EditAvatarNew.vue?vue&type=template&id=22c5705b&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EditAvatarNew.vue?vue&type=script&lang=js&
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



/* harmony default export */ var EditAvatarNewvue_type_script_lang_js_ = ({
  name: 'XDEditAvatarNew',
  props: {
    file: {
      type: null,
      default: null
    },
    onUploaded: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      croppedImage: null,
      isUploading: false,
      boundary: null,
      viewport: null,
      newFile: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('signup', ['avatar', 'avatarCropped'])
  },
  watch: {
    newFile: {
      handler(newFiles) {
        const files = newFiles.target.files || newFiles.dataTransfer.files;
        this.fnLoadAvatar(files);
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.fnCheckWindowSize);
  },
  created() {
    const files = this.file.target.files || this.file.dataTransfer.files;
    this.fnLoadAvatar(files);
  },
  mounted() {
    this.fnCheckWindowSize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.fnCheckWindowSize);
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      mediaUpload: 'media/upload'
    }),
    fnLoadAvatar(files) {
      if (!files.length) return;
      const reader = new FileReader();
      reader.onload = e => {
        this.$refs.editAvatar.bind({
          url: e.target.result
        });
      };
      reader.readAsDataURL(files[0]);
    },
    async fnCropAvatar() {
      this.isUploading = true;
      try {
        const options = {
          format: 'png',
          circle: false
        };
        await this.$refs.editAvatar.result(options, output => {
          this.croppedImage = output;
        });
        const {
          id
        } = await this.mediaUpload(this.croppedImage);
        this.avatar.objectID = id;
        this.avatar.objectType = 'Photo';
        this.avatarCropped = this.croppedImage;
        await this.onUploaded({
          id
        });
        this.$parent.close();
      } catch (error) {
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } finally {
        this.isUploading = false;
      }
    },
    fnCheckWindowSize() {
      if (window.innerWidth < 768) {
        this.boundary = {
          height: 350
        };
        this.viewport = {
          width: 250,
          height: 250,
          type: 'circle'
        };
        return;
      }
      this.boundary = {
        width: 400,
        height: 400
      };
      this.viewport = {
        width: 350,
        height: 350,
        type: 'circle'
      };
    },
    fnCancelCrop() {
      this.$root.$emit('evtRtClearAvatarInput');
      this.$parent.close();
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/EditAvatarNew.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_EditAvatarNewvue_type_script_lang_js_ = (EditAvatarNewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/EditAvatarNew.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(373)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_EditAvatarNewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22c5705b",
  "56f3dd32"
  
)

/* harmony default export */ var EditAvatarNew = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/RemoveManager.vue?vue&type=template&id=8a66f8ae&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-remove-manager card"},[_vm._ssrNode("<div class=\"card-content\" data-v-8a66f8ae>","</div>",[_vm._ssrNode("<h3 data-v-8a66f8ae>Remove Manager</h3><div class=\"text-weight-light\" data-v-8a66f8ae>Are you sure you want to remove <span class=\"text-weight-medium\" data-v-8a66f8ae>"+_vm._ssrEscape(_vm._s(_vm.name))+"</span>?</div>"),_vm._ssrNode("<div class=\"actions row justify-end\" data-v-8a66f8ae>","</div>",[_c('b-button',{attrs:{"type":"is-primary"},on:{"click":function($event){$event.preventDefault();return _vm.fnShowRemoveManagerToast()}}},[_vm._v("Remove")]),_c('b-button',{staticClass:"ml-3",attrs:{"type":"is-text"},on:{"click":function($event){$event.preventDefault();return _vm.$parent.close()}}},[_vm._v("Cancel")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/RemoveManager.vue?vue&type=template&id=8a66f8ae&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/RemoveManager.vue?vue&type=script&lang=js&
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



/* harmony default export */ var RemoveManagervue_type_script_lang_js_ = ({
  name: 'XDRemoveManager',
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      removeUser: false
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    name() {
      var _this$details;
      return ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.name) || null;
    },
    lockerRoomID() {
      var _this$details2;
      return ((_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.lockerRoomID) || null;
    },
    userID() {
      var _this$details3;
      return ((_this$details3 = this.details) === null || _this$details3 === void 0 ? void 0 : _this$details3.memberID) || null;
    },
    role() {
      var _this$details4;
      return ((_this$details4 = this.details) === null || _this$details4 === void 0 ? void 0 : _this$details4.role.toLowerCase()) || null;
    },
    isPermission() {
      var _this$details5;
      return ((_this$details5 = this.details) === null || _this$details5 === void 0 ? void 0 : _this$details5.isPermission) || false;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setLockerRoomDeletedManagers: 'locker-room/setLockerRoomDeletedManagers',
      setLockerRoomUndoDeletedManagers: 'locker-room/setLockerRoomUndoDeletedManagers',
      setLockerRoomPermissions: 'locker-room/setLockerRoomPermissions'
    }),
    async fnShowRemoveManagerToast() {
      if (this.isPermission) {
        const {
          userID,
          role
        } = this;
        await this.setLockerRoomPermissions({
          type: 'delete',
          userID,
          role
        });
      } else {
        await this.setLockerRoomDeletedManagers(this.userID);
        this.removeUser = true;
      }
      this.$toast.success(`User ${this.name} removed`, {
        duration: 5000,
        position: 'bottom-left',
        className: 'fx1-success',
        iconPack: 'mdi',
        icon: 'check-circle-outline',
        action: {
          text: 'Undo',
          onClick: (_, toastObject) => {
            if (this.isPermission) {
              const {
                userID,
                role
              } = this;
              this.setLockerRoomPermissions({
                type: null,
                userID,
                role
              });
            } else {
              this.setLockerRoomUndoDeletedManagers(this.userID);
              this.removeUser = false;
            }
            toastObject.goAway(0);
          }
        },
        onComplete: () => {
          this.fnRemoveManager();
        }
      });
      this.$parent.close();
    },
    async fnRemoveManager() {
      if (!this.removeUser) return;
      try {
        var _this$$route$params;
        const {
          lockerRoomID,
          userID,
          role
        } = this;
        await this.$api.removeUserManagerialRole({
          lockerRoomID,
          userID,
          role
        });

        // retrieve locker room details
        const {
          getLockerRoom
        } = await this.$api.getLockerRoom({
          slug: (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.slug
        });
        this.lockerRoomActive = getLockerRoom;
        this.$root.$emit('evtRtGetMyProfileDetails');
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
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/RemoveManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_RemoveManagervue_type_script_lang_js_ = (RemoveManagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/RemoveManager.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(375)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_RemoveManagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8a66f8ae",
  "35fcb71e"
  
)

/* harmony default export */ var RemoveManager = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/Permissions.vue?vue&type=template&id=deb49a92&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-permissions card"},[_vm._ssrNode("<div class=\"card-content\" data-v-deb49a92>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-deb49a92><img"+(_vm._ssrAttr("src",__webpack_require__(273)))+" data-v-deb49a92></div>"),_vm._ssrNode("<form action=\"#\" autocomplete=\"off\" class=\"flex-column justify-between\" data-v-deb49a92>","</form>",[_vm._ssrNode("<div class=\"inputs col\" data-v-deb49a92>","</div>",[_vm._ssrNode("<h2 data-v-deb49a92>Permissions</h2>"),_vm._ssrNode("<div class=\"owners\" data-v-deb49a92>","</div>",_vm._l((_vm.owners),function(owner,index){return _c('XAPermissionsMember',{key:(index + "-owner"),attrs:{"member":owner,"role":"owner"}})}),1),_vm._ssrNode("<div class=\"managers\" data-v-deb49a92>","</div>",_vm._l((_vm.managers),function(manager,index){return _c('XAPermissionsMember',{key:(index + "-manager"),attrs:{"member":manager,"role":"manager"}})}),1)],2),_vm._ssrNode("<div class=\"actions\" data-v-deb49a92>","</div>",[_c('b-button',{attrs:{"type":"is-primary","loading":_vm.isSubmitting},on:{"click":function($event){$event.preventDefault();return _vm.fnUpdatePermissions()}}},[_vm._v("Save")])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/Permissions.vue?vue&type=template&id=deb49a92&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/Permissions.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Permissionsvue_type_script_lang_js_ = ({
  name: 'XDPermissions',
  components: {
    XAPermissionsMember: () => __webpack_require__.e(/* import() */ 121).then(__webpack_require__.bind(null, 1430))
  },
  data() {
    return {
      isSubmitting: false
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive', 'lockerRoomPermissions']),
    lockerRoomID() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.id) || null;
    },
    roles() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.Roles) || [];
    },
    owners() {
      var _this$roles;
      return ((_this$roles = this.roles) === null || _this$roles === void 0 ? void 0 : _this$roles.Owners) || [];
    },
    ownersMapped() {
      const ownersMapped = this.owners.map(x => {
        var _x$User;
        return {
          type: null,
          userID: x === null || x === void 0 ? void 0 : (_x$User = x.User) === null || _x$User === void 0 ? void 0 : _x$User.id,
          role: 'owner'
        };
      });
      return ownersMapped;
    },
    managers() {
      var _this$roles2;
      return ((_this$roles2 = this.roles) === null || _this$roles2 === void 0 ? void 0 : _this$roles2.Managers) || [];
    },
    managersMapped() {
      // type value = edit / delete
      const managersMapped = this.managers.map(x => {
        var _x$User2;
        return {
          type: null,
          userID: x === null || x === void 0 ? void 0 : (_x$User2 = x.User) === null || _x$User2 === void 0 ? void 0 : _x$User2.id,
          role: 'manager'
        };
      });
      return managersMapped;
    }
  },
  mounted() {
    this.lockerRoomPermissions = this.ownersMapped.concat(this.managersMapped);
    const params = {
      pageName: 'Permissions',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  methods: {
    async fnUpdatePermissions() {
      this.isSubmitting = true;
      try {
        var _this$$route$params;
        const {
          lockerRoomID
        } = this;
        const input = this.lockerRoomPermissions.filter(x => (x === null || x === void 0 ? void 0 : x.type) !== null);
        await this.$api.updateLockerRoomUserRoles({
          lockerRoomID,
          input
        });
        this.$toast.success('Permissions changes saved', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'check-circle-outline',
          action: {
            text: 'Undo',
            onClick: (_, toastObject) => {
              toastObject.goAway(0);
              this.fnUndoUpdatePermissions();
            }
          }
        });
        this.$parent.close();

        // retrieve locker room details
        const {
          getLockerRoom
        } = await this.$api.getLockerRoom({
          slug: (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.slug
        });
        this.lockerRoomActive = getLockerRoom;
        this.lockerRoomPermissions = [];
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
        this.isSubmitting = false;
      }
    },
    async fnUndoUpdatePermissions() {
      const ownersMapped = this.owners.map(x => {
        if (x !== null && x !== void 0 && x.isPrimaryOwner) {
          var _x$User3;
          return {
            type: null,
            userID: x === null || x === void 0 ? void 0 : (_x$User3 = x.User) === null || _x$User3 === void 0 ? void 0 : _x$User3.id,
            role: 'owner'
          };
        } else {
          var _x$User4;
          return {
            type: 'edit',
            userID: x === null || x === void 0 ? void 0 : (_x$User4 = x.User) === null || _x$User4 === void 0 ? void 0 : _x$User4.id,
            role: 'owner'
          };
        }
      });
      const managersMapped = this.managers.map(x => {
        var _x$User5;
        return {
          type: 'edit',
          userID: x === null || x === void 0 ? void 0 : (_x$User5 = x.User) === null || _x$User5 === void 0 ? void 0 : _x$User5.id,
          role: 'manager'
        };
      });
      try {
        var _this$$route$params2;
        const {
          lockerRoomID
        } = this;
        const editLockerRoomPermissions = ownersMapped.concat(managersMapped);
        const input = editLockerRoomPermissions.filter(x => (x === null || x === void 0 ? void 0 : x.type) !== null);
        await this.$api.updateLockerRoomUserRoles({
          lockerRoomID,
          input
        });

        // retrieve locker room details
        const {
          getLockerRoom
        } = await this.$api.getLockerRoom({
          slug: (_this$$route$params2 = this.$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.slug
        });
        this.lockerRoomActive = getLockerRoom;
        this.editLockerRoomPermissions = [];
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
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/Permissions.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_Permissionsvue_type_script_lang_js_ = (Permissionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/Permissions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(377)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_Permissionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "deb49a92",
  "1d86424e"
  
)

/* harmony default export */ var Permissions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteChannel.vue?vue&type=template&id=1b7d0a7a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-delete-channel card"},[_vm._ssrNode("<div class=\"card-content\" data-v-1b7d0a7a>","</div>",[_vm._ssrNode("<h3 data-v-1b7d0a7a>Delete Channel</h3><div class=\"text-weight-light\" data-v-1b7d0a7a>Are you sure you want to delete <span class=\"text-weight-medium\" data-v-1b7d0a7a>"+_vm._ssrEscape(_vm._s(_vm.name))+"</span>?</div>"),_vm._ssrNode("<div class=\"actions row justify-end\" data-v-1b7d0a7a>","</div>",[_c('b-button',{attrs:{"type":"is-primary"},on:{"click":function($event){$event.preventDefault();return _vm.fnShowDeleteChannelToast()}}},[_vm._v("Delete")]),_c('b-button',{staticClass:"ml-3",attrs:{"type":"is-text"},on:{"click":function($event){$event.preventDefault();return _vm.$parent.close()}}},[_vm._v("Cancel")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/DeleteChannel.vue?vue&type=template&id=1b7d0a7a&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteChannel.vue?vue&type=script&lang=js&
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



/* harmony default export */ var DeleteChannelvue_type_script_lang_js_ = ({
  name: 'XDRemoveChannel',
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    name() {
      var _this$details;
      return ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.channelName) || null;
    },
    id() {
      var _this$details2;
      return ((_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.channelID) || null;
    },
    lockerRoomSlug() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.slug) || null;
    },
    lockerRoomDefaultChannelSlug() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.defaultChannelSlug) || null;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setChannelDeleted: 'channels/setChannelDeleted',
      setChannelUndoDeleted: 'channels/setChannelUndoDeleted',
      clearChannelDeleted: 'channels/clearChannelDeleted'
    }),
    fnShowDeleteChannelToast() {
      this.fnDeleteChannel();
      this.setChannelDeleted(this.id);
      this.$toast.success(`Channel ${this.name} has been removed`, {
        duration: 5000,
        position: 'bottom-left',
        className: 'fx1-success',
        iconPack: 'mdi',
        icon: 'check-circle-outline',
        action: {
          text: 'Undo',
          onClick: (_, toastObject) => {
            this.setChannelUndoDeleted(this.id);
            toastObject.goAway(0);
            this.fnUndoDeleteChannel();
          }
        },
        onComplete: () => {
          this.$router.push({
            path: `/locker-room/${this.lockerRoomSlug}/${this.lockerRoomDefaultChannelSlug}`
          });
        }
      });
      this.$parent.close();
    },
    async fnDeleteChannel() {
      try {
        const {
          id
        } = this;
        await this.$api.deleteChannel({
          id
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
    async fnUndoDeleteChannel() {
      try {
        const {
          id
        } = this;
        await this.$api.undeleteChannel({
          id
        });
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
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/DeleteChannel.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_DeleteChannelvue_type_script_lang_js_ = (DeleteChannelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/DeleteChannel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(379)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_DeleteChannelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b7d0a7a",
  "5db1e426"
  
)

/* harmony default export */ var DeleteChannel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteChannelGroup.vue?vue&type=template&id=10535d28&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-delete-channel-group card"},[_vm._ssrNode("<div class=\"card-content\" data-v-10535d28>","</div>",[_vm._ssrNode("<h3 data-v-10535d28>Delete Channel Group</h3><div class=\"text-weight-light\" data-v-10535d28>Are you sure you want to delete <span class=\"text-weight-medium\" data-v-10535d28>"+_vm._ssrEscape(_vm._s(_vm.name))+"</span> channel group?</div>"),_vm._ssrNode("<div class=\"actions row justify-end\" data-v-10535d28>","</div>",[_c('b-button',{attrs:{"type":"is-primary"},on:{"click":function($event){$event.preventDefault();return _vm.fnShowDeleteChannelGroupToast()}}},[_vm._v("Delete")]),_c('b-button',{staticClass:"ml-3",attrs:{"type":"is-text"},on:{"click":function($event){$event.preventDefault();return _vm.$parent.close()}}},[_vm._v("Cancel")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/DeleteChannelGroup.vue?vue&type=template&id=10535d28&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteChannelGroup.vue?vue&type=script&lang=js&
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



/* harmony default export */ var DeleteChannelGroupvue_type_script_lang_js_ = ({
  name: 'XDDeleteChannelGroup',
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive']),
    id() {
      var _this$details;
      return ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.channelGroupID) || null;
    },
    name() {
      var _this$details2;
      return ((_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.groupName) || null;
    },
    lockerRoomSlug() {
      var _this$lockerRoomActiv;
      return ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.slug) || null;
    },
    lockerRoomDefaultChannelSlug() {
      var _this$lockerRoomActiv2;
      return ((_this$lockerRoomActiv2 = this.lockerRoomActive) === null || _this$lockerRoomActiv2 === void 0 ? void 0 : _this$lockerRoomActiv2.defaultChannelSlug) || null;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setChannelGroupDeleted: 'channels/setChannelGroupDeleted',
      setChannelGroupUndoDeleted: 'channels/setChannelGroupUndoDeleted'
    }),
    fnShowDeleteChannelGroupToast() {
      this.fnDeleteChannelGroup();
      this.setChannelGroupDeleted(this.id);
      this.$toast.success(`Channel group ${this.name} has been removed`, {
        duration: 5000,
        position: 'bottom-left',
        className: 'fx1-success',
        iconPack: 'mdi',
        icon: 'check-circle-outline',
        action: {
          text: 'Undo',
          onClick: (_, toastObject) => {
            this.setChannelGroupUndoDeleted(this.id);
            toastObject.goAway(0);
            this.fnUndoDeleteChannelGroup();
          }
        },
        onComplete: () => {
          this.$router.push({
            path: `/locker-room/${this.lockerRoomSlug}/${this.lockerRoomDefaultChannelSlug}`
          });
        }
      });
      this.$parent.close();
    },
    async fnDeleteChannelGroup() {
      try {
        const {
          id
        } = this;
        await this.$api.deleteChannelGroup({
          id
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
    async fnUndoDeleteChannelGroup() {
      try {
        const {
          id
        } = this;
        await this.$api.undeleteChannelGroup({
          id
        });
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
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/DeleteChannelGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_DeleteChannelGroupvue_type_script_lang_js_ = (DeleteChannelGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/DeleteChannelGroup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(381)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_DeleteChannelGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "10535d28",
  "51f8e342"
  
)

/* harmony default export */ var DeleteChannelGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteMessage.vue?vue&type=template&id=f05a8ba0&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xd-delete-message card"},[_vm._ssrNode("<div class=\"card-content\" data-v-f05a8ba0>","</div>",[_vm._ssrNode("<h4 data-v-f05a8ba0>Delete message</h4><p class=\"text-weight-light\" data-v-f05a8ba0>Are you sure you want to delete this message?</p>"),_vm._ssrNode("<div class=\"actions flex-column items-end\" data-v-f05a8ba0>","</div>",[_c('b-button',{staticClass:"btn-action btn-delete",attrs:{"type":"is-text"},on:{"click":function($event){$event.preventDefault();return _vm.fnDeleteForEveryone()}}},[_vm._v("Delete for everyone")]),_c('b-button',{staticClass:"btn-action btn-delete",attrs:{"type":"is-text"},on:{"click":function($event){$event.preventDefault();return _vm.fnDeleteForSelf()}}},[_vm._v("Delete just for me")]),_c('b-button',{staticClass:"btn-action btn-cancel",attrs:{"type":"is-text"},on:{"click":function($event){$event.preventDefault();return _vm.$parent.close()}}},[_vm._v("Cancel")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/DeleteMessage.vue?vue&type=template&id=f05a8ba0&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteMessage.vue?vue&type=script&lang=js&
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


/* harmony default export */ var DeleteMessagevue_type_script_lang_js_ = ({
  name: 'XDDeleteMessage',
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    chatID() {
      var _this$details;
      return ((_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.chatID) || null;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setChatDeletedForEveryone: 'chats/setChatDeletedForEveryone',
      setChatDeletedForSelf: 'chats/setChatDeletedForSelf'
    }),
    async fnDeleteForEveryone() {
      this.$parent.close();
      try {
        const params = {
          chatID: this.chatID,
          deleteForSelf: false,
          deleteForEveryone: true
        };
        await this.setChatDeletedForEveryone(this.chatID);
        this.$root.$emit('evtRtDeleteMessage', params);
      } catch (error) {}
    },
    async fnDeleteForSelf() {
      this.$parent.close();
      try {
        const params = {
          chatID: this.chatID,
          deleteForSelf: true,
          deleteForEveryone: false
        };
        await this.setChatDeletedForSelf(this.chatID);
        this.$root.$emit('evtRtDeleteMessage', params);
      } catch (error) {}
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/DeleteMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_DeleteMessagevue_type_script_lang_js_ = (DeleteMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/DeleteMessage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(383)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_DeleteMessagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f05a8ba0",
  "e675221e"
  
)

/* harmony default export */ var DeleteMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/Invitations.vue?vue&type=template&id=6243bc6d&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () { return _vm.$parent.close(); }),expression:"() => $parent.close()"}],staticClass:"xd-invitations card"},[(_vm.actualLink)?_vm._ssrNode("<div class=\"card-content\" data-v-6243bc6d>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-6243bc6d><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-6243bc6d></div><h3 data-v-6243bc6d>Invite friends to your group</h3>"),_vm._ssrNode("<div class=\"links__container\" data-v-6243bc6d>","</div>",_vm._l((_vm.links),function(link){return _vm._ssrNode("<div class=\"link\" data-v-6243bc6d>","</div>",[(!link.social)?_vm._ssrNode("<div class=\"normal\" data-v-6243bc6d>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(288)("./" + (link.img) + ".svg")))+" data-v-6243bc6d><span data-v-6243bc6d>"+_vm._ssrEscape(_vm._s(link.text))+"</span>")],2):_c('ShareNetwork',{staticClass:"social",attrs:{"network":link.social ? link.social.to : null,"url":_vm.actualLink || '',"title":"","description":_vm.details.teams ? ("Come and join me on FX1 to follow the game between the " + (_vm.details.teams.team1) + " and the " + (_vm.details.teams.team2) + ". Click the link below to join my private group.") : 'Come and join me on FX1. Click the link below to join my private group. ',"quote":"$FX1W","hashtags":"vuejs,vite"}},[_c('img',{attrs:{"src":__webpack_require__(288)("./" + (link.img) + ".svg")}}),_c('span',[_vm._v(_vm._s(link.text))])])],1)}),0),_vm._ssrNode(((_vm.showSubText)?("<div class=\"link-copied\" data-v-6243bc6d>"+((_vm.subText === 'Link is copied')?("<img"+(_vm._ssrAttr("src",__webpack_require__(277)))+" data-v-6243bc6d>"):"<!---->")+"<span data-v-6243bc6d>"+_vm._ssrEscape(_vm._s(_vm.subText))+"</span></div>"):"<!---->"))],2):_c('XALoader')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/Invitations.vue?vue&type=template&id=6243bc6d&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/Invitations.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Invitationsvue_type_script_lang_js_ = ({
  name: 'XDInvitations',
  components: {
    XALoader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 275))
  },
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      links: [{
        id: 0,
        img: 'copy-link',
        text: 'Copy link',
        function: this.copyLink
      }, {
        id: 1,
        img: 'telegram-link',
        text: 'Telegram',
        social: {
          to: 'Telegram'
        }
      }, {
        id: 2,
        img: 'whatsapp-link',
        text: 'Whatsapp',
        social: {
          to: 'Whatsapp'
        }
      }, {
        id: 3,
        img: 'signal-link',
        text: 'Signal',
        function: this.shareToSignal
      }],
      actualLink: null,
      showSubText: false,
      subText: ''
    };
  },
  async mounted() {
    var _this$details, _this$details2;
    const {
      getDynamicEventInviteLink
    } = await this.$api.getDynamicLink({
      privateChannelID: (_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.privateChannelID,
      gameID: (_this$details2 = this.details) === null || _this$details2 === void 0 ? void 0 : _this$details2.gameID
    });
    this.actualLink = getDynamicEventInviteLink;
  },
  methods: {
    async copyLink() {
      // Navigator clipboard api needs a secure context (https)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(this.actualLink);
        this.subText = 'Link is copied';
        this.showSubText = true;
      } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement('textarea');
        textArea.value = this.actualLink;

        // Move textarea out of the viewport so it's not visible
        textArea.style.position = 'absolute';
        textArea.style.left = '-999999px';
        document.body.prepend(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.subText = 'Link is copied';
          this.showSubText = true;
        } catch (error) {
          console.error(error);
        } finally {
          textArea.remove();
        }
      }
    },
    shareToSignal() {
      if (navigator.protocolHandler && navigator.protocolHandler.isProtocolHandlerRegistered('sgnl')) {
        // Signal is installed on the user's device
        const signalUrl = `sgnl://share?url=${encodeURIComponent(this.actualLink)}&text=${encodeURIComponent('$FX1')}`;
        window.open(signalUrl, '_blank');
      } else {
        // Signal is not installed on the user's device
        this.subText = 'Signal in not installed on your device';
        this.showSubText = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/Invitations.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_Invitationsvue_type_script_lang_js_ = (Invitationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/Invitations.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(385)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_Invitationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6243bc6d",
  "55868962"
  
)

/* harmony default export */ var Invitations = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/LeaveGroup.vue?vue&type=template&id=fe011c58&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () { return _vm.$parent.close(); }),expression:"() => $parent.close()"}],staticClass:"xd-invitations card"},[_vm._ssrNode("<div class=\"card-content\" data-v-fe011c58>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-fe011c58><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-fe011c58></div><h3 data-v-fe011c58>Are you sure you want to leave</h3>"),_vm._ssrNode("<div class=\"actions\" data-v-fe011c58>","</div>",[_c('b-button',{staticClass:"is-uppercase leave",attrs:{"type":"is-primary"},on:{"click":function($event){return _vm.leave()}}},[_vm._v(_vm._s('Leave'))]),_c('b-button',{staticClass:"is-uppercase cancel",on:{"click":function($event){return _vm.cancel()}}},[_vm._v(_vm._s('Cancel'))])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/LeaveGroup.vue?vue&type=template&id=fe011c58&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/LeaveGroup.vue?vue&type=script&lang=js&
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

/* harmony default export */ var LeaveGroupvue_type_script_lang_js_ = ({
  name: 'XDLeaveGroup',
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    async leave() {
      var _this$details;
      await this.$api.leavePrivateChannel({
        privateChannelID: (_this$details = this.details) === null || _this$details === void 0 ? void 0 : _this$details.privateChannelID
      });
      this.$root.$emit('leavePrtChat', null);
      this.$parent.close();
    },
    cancel() {
      this.$parent.close();
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/LeaveGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_LeaveGroupvue_type_script_lang_js_ = (LeaveGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/LeaveGroup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(387)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_LeaveGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fe011c58",
  "79d0fb43"
  
)

/* harmony default export */ var LeaveGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EmailConfirmation.vue?vue&type=template&id=46143e43&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () { return _vm.$parent.close(); }),expression:"() => $parent.close()"}],staticClass:"xd-email-confirmation card"},[_vm._ssrNode("<div class=\"card-content\" data-v-46143e43>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-46143e43><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-46143e43></div><h3 data-v-46143e43>Email confirmation</h3><p class=\"text-weight-regular\" data-v-46143e43>"+_vm._ssrEscape("Please confirm your email address by clicking the link we have just emailed to \""+_vm._s(_vm.email)+"\"")+"</p>"),_vm._ssrNode("<div class=\"actions\" data-v-46143e43>","</div>",[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-primary","expanded":""},on:{"click":_vm.fnSubmit}},[_vm._v("Ok")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/EmailConfirmation.vue?vue&type=template&id=46143e43&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EmailConfirmation.vue?vue&type=script&lang=js&
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

/* harmony default export */ var EmailConfirmationvue_type_script_lang_js_ = ({
  name: 'XDPasswordUpdated',
  props: {
    email: {
      type: String,
      default: '',
      require: true
    },
    onSubmit: {
      type: Function,
      default: null
    }
  },
  methods: {
    fnSubmit() {
      this.$parent.close();
      this.onSubmit();
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/EmailConfirmation.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_EmailConfirmationvue_type_script_lang_js_ = (EmailConfirmationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/EmailConfirmation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(389)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_EmailConfirmationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46143e43",
  "38fa0c06"
  
)

/* harmony default export */ var EmailConfirmation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/PasswordUpdated.vue?vue&type=template&id=a5040f0a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () { return _vm.$parent.close(); }),expression:"() => $parent.close()"}],staticClass:"xd-password-updated card"},[_vm._ssrNode("<div class=\"card-content\" data-v-a5040f0a>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-a5040f0a><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-a5040f0a></div><h3 data-v-a5040f0a>Success</h3><p class=\"text-weight-regular\" data-v-a5040f0a>Your password is successfully updated.</p>"),_vm._ssrNode("<div class=\"actions\" data-v-a5040f0a>","</div>",[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-primary","expanded":""},on:{"click":function($event){return _vm.$parent.close()}}},[_vm._v("Ok")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/PasswordUpdated.vue?vue&type=template&id=a5040f0a&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/PasswordUpdated.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PasswordUpdatedvue_type_script_lang_js_ = ({
  name: 'XDPasswordUpdated'
});
// CONCATENATED MODULE: ./components/dialogs/PasswordUpdated.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_PasswordUpdatedvue_type_script_lang_js_ = (PasswordUpdatedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/PasswordUpdated.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(391)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_PasswordUpdatedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a5040f0a",
  "530b7f75"
  
)

/* harmony default export */ var PasswordUpdated = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteAccount.vue?vue&type=template&id=a16013ba&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () { return _vm.$parent.close(); }),expression:"() => $parent.close()"}],staticClass:"xd-delete-account card"},[_vm._ssrNode("<div class=\"card-content\" data-v-a16013ba>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-a16013ba><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-a16013ba></div><h3 data-v-a16013ba>Delete account</h3><div class=\"warning\" data-v-a16013ba><img"+(_vm._ssrAttr("src",__webpack_require__(307)))+" data-v-a16013ba><p data-v-a16013ba><span data-v-a16013ba>This action is irreversible. </span>Your account will be permanently deleted.</p></div><div class=\"divider\" data-v-a16013ba></div>"),_vm._ssrNode("<form action=\"#\" data-v-a16013ba>","</form>",[_vm._ssrNode("<div class=\"form-item\" data-v-a16013ba>","</div>",[_vm._ssrNode("<label for=\"confirmation\" data-v-a16013ba>To confirm please type “delete my account” below.</label>"),_c('XAFormsInput',{attrs:{"id":"IConfirmation","type":"text","placeholder":"Type here","outlined":""},model:{value:(_vm.confirmation),callback:function ($$v) {_vm.confirmation=$$v},expression:"confirmation"}})],2)]),_vm._ssrNode("<div class=\"actions\" data-v-a16013ba>","</div>",[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-white","outlined":"","expanded":""},on:{"click":function($event){return _vm.$parent.close()}}},[_vm._v("Cancel")]),_c('b-button',{staticClass:"is-uppercase button-delete-account",attrs:{"type":"is-primary","expanded":"","disabled":_vm.isButtonSubmitDisabled},on:{"click":function($event){return _vm.handleDeleteAccount()}}},[_vm._v("Delete account")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/DeleteAccount.vue?vue&type=template&id=a16013ba&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/DeleteAccount.vue?vue&type=script&lang=js&
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


/* harmony default export */ var DeleteAccountvue_type_script_lang_js_ = ({
  name: 'XDDeleteAccount',
  components: {
    XAFormsInput: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 991))
  },
  data() {
    return {
      isLoading: false,
      confirmation: ''
    };
  },
  computed: {
    isButtonSubmitDisabled() {
      return this.confirmation !== 'delete my account' || this.isLoading;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      authLoginWithEmail: 'auth/authLoginWithEmail',
      authLoginWithGoogle: 'auth/authLoginWithGoogle',
      authLogOut: 'auth/authLogOut'
    }),
    async handleDeleteAccount() {
      try {
        this.isLoading = true;
        await this.$api.deleteUser();
        await this.authLogOut();
        this.$parent.close();
        this.$router.push({
          path: '/'
        });
        this.$toast.success('Account successfully deleted', {
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
        this.isLoading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/DeleteAccount.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_DeleteAccountvue_type_script_lang_js_ = (DeleteAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/DeleteAccount.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(393)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_DeleteAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a16013ba",
  "171f13d2"
  
)

/* harmony default export */ var DeleteAccount = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/InviteMessagesMember.vue?vue&type=template&id=6928d160&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"invite-modal"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" class=\"invite-modal__close\" data-v-6928d160><h4 class=\"invite-modal__title\" data-v-6928d160>You are invited!</h4><p class=\"invite-modal__desc\" data-v-6928d160>"+_vm._ssrEscape("To join "+_vm._s(_vm.getName)+" group.")+"</p>"),_c('b-button',{attrs:{"type":"is-primary","disabled":_vm.isLoading},on:{"click":_vm.fnJoinGroup}},[_vm._v("Join")]),_c('b-button',{staticClass:"invite-modal__decline",attrs:{"type":"button","disabled":_vm.isLoading},on:{"click":_vm.fnDecline}},[_c('span',[_vm._v("Decline")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/InviteMessagesMember.vue?vue&type=template&id=6928d160&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/InviteMessagesMember.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InviteMessagesMembervue_type_script_lang_js_ = ({
  name: 'XDInviteMessagesMember',
  props: {
    details: {
      type: Object,
      required: true,
      default: () => {}
    },
    onAction: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    getGroup() {
      return this.details.group;
    },
    getName() {
      return this.details.name;
    },
    getChannelID() {
      return this.getGroup.split(':')[1];
    }
  },
  methods: {
    async fnJoinGroup() {
      try {
        this.isLoading = true;
        await this.$api.acceptPrivateEncryptedChannelInvitation({
          channelID: this.getChannelID
        });
        this.$toast.success(`You're successfully joined to group ${this.getName}`, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } catch (error) {
        if (error.message.startsWith('You\'ve already responded to this invitation.')) {
          return this.$toast.error('You\'ve already responded to this invitation.', {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-error',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        }
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } finally {
        this.$parent.close();
        this.onAction();
        this.isLoading = false;
      }
    },
    async fnDecline() {
      try {
        this.isLoading = true;
        await this.$api.declinePrivateEncryptedChannelInvitation({
          channelID: this.getChannelID
        });
        this.$toast.success('You\'re successfully declined invitation', {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-success',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } catch (error) {
        if (error.message.startsWith('You\'ve already responded to this invitation.')) {
          return this.$toast.error('You\'ve already responded to this invitation.', {
            duration: 5000,
            position: 'bottom-left',
            className: 'fx1-error',
            iconPack: 'mdi',
            icon: 'alert-circle-outline'
          });
        }
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      } finally {
        this.$parent.close();
        this.onAction();
        this.isLoading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/dialogs/InviteMessagesMember.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_InviteMessagesMembervue_type_script_lang_js_ = (InviteMessagesMembervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/InviteMessagesMember.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(395)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_InviteMessagesMembervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6928d160",
  "1a83972c"
  
)

/* harmony default export */ var InviteMessagesMember = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EncryptedChat.vue?vue&type=template&id=9d280416&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () { return _vm.$parent.close(); }),expression:"() => $parent.close()"}],staticClass:"xd-encrypted-chat card"},[_vm._ssrNode("<div class=\"card-content\" data-v-9d280416>","</div>",[_vm._ssrNode("<div class=\"close\" data-v-9d280416><img"+(_vm._ssrAttr("src",__webpack_require__(272)))+" data-v-9d280416></div><h3 data-v-9d280416>You are encrypted!</h3><p class=\"text-weight-regular\" data-v-9d280416>Only you and the people your chatting with can read your messages.\nWe use end-to-end encryption for your safety and privacy.</p>"),_vm._ssrNode("<div class=\"actions\" data-v-9d280416>","</div>",[_c('b-button',{staticClass:"is-uppercase",attrs:{"type":"is-primary","expanded":""},on:{"click":function($event){return _vm.$parent.close()}}},[_vm._v("Got it")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/EncryptedChat.vue?vue&type=template&id=9d280416&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/EncryptedChat.vue?vue&type=script&lang=js&
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

/* harmony default export */ var EncryptedChatvue_type_script_lang_js_ = ({
  name: 'XDEncryptedChat'
});
// CONCATENATED MODULE: ./components/dialogs/EncryptedChat.vue?vue&type=script&lang=js&
 /* harmony default export */ var dialogs_EncryptedChatvue_type_script_lang_js_ = (EncryptedChatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/dialogs/EncryptedChat.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(413)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dialogs_EncryptedChatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9d280416",
  "05cc1251"
  
)

/* harmony default export */ var EncryptedChat = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=69.js.map