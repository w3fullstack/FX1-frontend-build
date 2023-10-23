exports.ids = [12];
exports.modules = {

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(579);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a1ff9424", content, true, context)
};

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decryptChannelKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return encryptMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decryptMessage; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

console.log('env', undefined);
const decryptChannelKey = (encryptedChannelKey, encryptedUserKey) => {
  const iv = Buffer.from(undefined || '65a2b862088509b122407245706fb715', 'hex');
  const userKey = Buffer.from(encryptedUserKey, 'hex');
  const decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createDecipheriv('aes256', userKey, iv);
  const decryptedChannelKey = decipher.update(encryptedChannelKey, 'hex', 'hex') + decipher.final('hex');
  return decryptedChannelKey;
};
const encryptMessage = (decryptedChannelKey, message) => {
  const messageCiper = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createCipheriv('aes256', Buffer.from(decryptedChannelKey, 'hex'), Buffer.from(undefined || '65a2b862088509b122407245706fb715', 'hex'));
  const encryptedMessage = messageCiper.update(message, 'utf-8', 'hex') + messageCiper.final('hex');
  return encryptedMessage;
};
const decryptMessage = (decryptedChannelKey, encryptedMessage) => {
  const messageDecipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createDecipheriv('aes256', Buffer.from(Buffer.from(decryptedChannelKey, 'hex')), Buffer.from(undefined || '65a2b862088509b122407245706fb715', 'hex'));
  const decryptedMessage = messageDecipher.update(encryptedMessage, 'hex', 'utf-8') + messageDecipher.final('utf-8');
  return decryptedMessage;
};

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_style_index_0_id_7c238e64_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(536);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_style_index_0_id_7c238e64_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_style_index_0_id_7c238e64_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_style_index_0_id_7c238e64_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_style_index_0_id_7c238e64_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xo-channel-chat-history[data-v-7c238e64]{padding:30px 30px 0;min-height:100%}@media screen and (max-width:767px){.xo-channel-chat-history[data-v-7c238e64]{padding:30px 30px 0 10px}}.xo-channel-chat-history[data-v-7c238e64] .infinite-loading-container{margin-bottom:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Channels/ChatHistory.vue?vue&type=template&id=7c238e64&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xo-channel-chat-history flex-column",on:{"contextmenu":function($event){$event.preventDefault();}}},[((_vm.chats.length >= 10 && _vm.showInfiniteLoading) || !_vm.filteredLocalChats.length)?_c('infinite-loading',{attrs:{"direction":"top","distance":300},on:{"infinite":_vm.fnRetrieveNextChats}},[_c('div',{attrs:{"slot":"spinner"},slot:"spinner"},[_c('XAChannelsChatLoader')],1),_c('div',{attrs:{"slot":"no-more"},slot:"no-more"}),_c('div',{attrs:{"slot":"no-results"},slot:"no-results"})]):_vm._e(),_vm._l((_vm.filteredAddedChats),function(addedChat,index){return _c('XMChannelsChatItem',{key:(index + "-added-chat"),attrs:{"chat":addedChat,"scroll-to-bottom":false}})}),_vm._l((_vm.filteredLocalChats),function(chat,index){return _c('XMChannelsChatItem',{key:(index + "-chat"),attrs:{"chat":chat,"is-last":index === _vm.filteredLocalChats.length - 1}})}),_c('XAChannelsTyping',{attrs:{"users-typing":_vm.usersTyping}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/Channels/ChatHistory.vue?vue&type=template&id=7c238e64&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./scripts/messages/index.ts
var messages = __webpack_require__(568);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/Channels/ChatHistory.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ChatHistoryvue_type_script_lang_js_ = ({
  name: 'XOChannelsChatHistory',
  components: {
    XMChannelsChatItem: () => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(null, 1296)),
    XAChannelsChatLoader: () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 1396)),
    XAChannelsTyping: () => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, 1397))
  },
  props: {
    cursored: {
      type: Boolean,
      required: false,
      default: true
    },
    channel: {
      type: Object,
      required: false,
      default: () => {}
    },
    isEncrypted: {
      type: Boolean,
      required: false,
      default: false
    },
    chats: {
      type: Array,
      default: () => []
    },
    showInfiniteLoading: {
      type: Boolean,
      default: false
    },
    usersTyping: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      cursor: 10,
      addedChats: [],
      localChats: this.chats || []
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('messages', ['messageNext']),
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userID', 'encryptionKey']),
    ...Object(external_vuex_["mapGetters"])({
      getChatDeletedForEveryone: 'chats/getChatDeletedForEveryone',
      getChatDeletedForSelf: 'chats/getChatDeletedForSelf'
    }),
    filteredLocalChats() {
      const deletedEveryoneChats = this.localChats.filter(x => {
        return !(x !== null && x !== void 0 && x.isDeletedEveryone) && !this.getChatDeletedForEveryone.includes(x === null || x === void 0 ? void 0 : x.chatID);
      });
      const deletedSelfChats = deletedEveryoneChats.filter(x => {
        var _x$User;
        if ((x === null || x === void 0 ? void 0 : (_x$User = x.User) === null || _x$User === void 0 ? void 0 : _x$User.id) === this.userID) {
          return !(x !== null && x !== void 0 && x.isDeletedSelf) && !this.getChatDeletedForSelf.includes(x === null || x === void 0 ? void 0 : x.chatID);
        }
        return x;
      });
      return deletedSelfChats;
    },
    filteredAddedChats() {
      const deletedEveryoneChats = this.addedChats.filter(x => {
        return !(x !== null && x !== void 0 && x.isDeletedEveryone) && !this.getChatDeletedForEveryone.includes(x === null || x === void 0 ? void 0 : x.chatID);
      });
      const deletedSelfChats = deletedEveryoneChats.filter(x => {
        var _x$User2;
        if ((x === null || x === void 0 ? void 0 : (_x$User2 = x.User) === null || _x$User2 === void 0 ? void 0 : _x$User2.id) === this.userID) {
          return !(x !== null && x !== void 0 && x.isDeletedSelf) && !this.getChatDeletedForSelf.includes(x === null || x === void 0 ? void 0 : x.chatID);
        }
        return x;
      });
      return deletedSelfChats;
    }
  },
  mounted() {
    this.$root.$on('evtRtUpdateChatList', chat => {
      const indexLocalChats = this.localChats.findIndex(x => {
        return (x === null || x === void 0 ? void 0 : x.chatID) === (chat === null || chat === void 0 ? void 0 : chat.chatID);
      });
      const indexAddedChats = this.addedChats.findIndex(x => {
        return (x === null || x === void 0 ? void 0 : x.chatID) === (chat === null || chat === void 0 ? void 0 : chat.chatID);
      });
      if (this.localChats[indexLocalChats]) {
        this.localChats[indexLocalChats].text = chat === null || chat === void 0 ? void 0 : chat.text;
        this.localChats[indexLocalChats].isEdited = chat === null || chat === void 0 ? void 0 : chat.isEdited;
      }
      if (this.addedChats[indexAddedChats]) {
        this.addedChats[indexAddedChats].text = chat === null || chat === void 0 ? void 0 : chat.text;
        this.addedChats[indexAddedChats].isEdited = chat === null || chat === void 0 ? void 0 : chat.isEdited;
      }
    });
  },
  methods: {
    async fnRetrieveNextChats($state) {
      try {
        const params = {
          channelSlug: this.$route.params.channel,
          count: 10,
          cursor: this.cursored ? this.cursor : 0
        };
        const {
          getMessagesByChannelSlug: {
            items,
            next
          }
        } = await this.$api.getMessagesByChannelSlug(params);
        this.cursor = next;
        const decryptedChannelKey = this.isEncrypted && Object(messages["a" /* decryptChannelKey */])(this.channel.EncryptionKey, this.encryptionKey);
        if (items.length) {
          const decryptedMessages = items.map(m => {
            if (this.isEncrypted) {
              var _m$RepliedTo;
              if (m.text) {
                m.text = Object(messages["b" /* decryptMessage */])(decryptedChannelKey, m.text);
              }
              if ((_m$RepliedTo = m.RepliedTo) !== null && _m$RepliedTo !== void 0 && _m$RepliedTo.text) {
                m.RepliedTo.text = Object(messages["b" /* decryptMessage */])(decryptedChannelKey, m.RepliedTo.text);
              }
            }
            return m;
          });
          if (this.filteredLocalChats.length) {
            this.addedChats.unshift(...decryptedMessages);
          } else {
            this.localChats.unshift(...decryptedMessages);
          }
          $state === null || $state === void 0 ? void 0 : $state.loaded();
          return;
        }
        $state === null || $state === void 0 ? void 0 : $state.complete();
      } catch (error) {
        this.$toast.error(error.message, {
          duration: 5000,
          position: 'bottom-left',
          className: 'fx1-error',
          iconPack: 'mdi',
          icon: 'alert-circle-outline'
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/organisms/Channels/ChatHistory.vue?vue&type=script&lang=js&
 /* harmony default export */ var Channels_ChatHistoryvue_type_script_lang_js_ = (ChatHistoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/organisms/Channels/ChatHistory.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(578)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Channels_ChatHistoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c238e64",
  "404f43f5"
  
)

/* harmony default export */ var ChatHistory = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=12.js.map