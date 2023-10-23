exports.ids = [137];
exports.modules = {

/***/ 1282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_79267fee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(984);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_79267fee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_79267fee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_79267fee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBody_vue_vue_type_style_index_0_id_79267fee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1283:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xp-locker-room-channels[data-v-79267fee]{height:100%}.show .unsupported[data-v-79267fee]{width:100%;display:flex;flex-direction:column;padding:12px 16px;position:absolute;bottom:0}.show .unsupported .unsupported-btn[data-v-79267fee]{display:flex;align-items:center;justify-content:center;height:40px;background:#f85454;color:#fff;cursor:pointer;border-radius:5px;margin-bottom:16px}.show .unsupported span[data-v-79267fee]{font-style:normal;font-weight:400;font-size:13px;color:#c3cdcf}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/ExploreEvent/ChatBody.vue?vue&type=template&id=79267fee&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-locker-room-channels row col"},[_c('client-only',[(!_vm.getLockerRoomIsLoading && _vm.pageLoaded)?[_c('XTLockerRoomSupported',{attrs:{"channelSlug":_vm.channelSlug,"game":_vm.game,"activeChat":_vm.activeChat,"currentStep":_vm.currentStep,"privateChats":_vm.privateChats,"privateChannel":_vm.privateChannel,"lockerRoom":_vm.lockerRoom || _vm.lockerRoomProp,"onlineMembers":_vm.onlineMembers,"publicMembers":_vm.publicMembers},on:{"cancel":_vm.cancel,"changeStep":_vm.changeStep,"getPrivateChannel":_vm.fnGetPrivateChannel}}),(!_vm.isLoggedIn)?_c('div',{staticClass:"unsupported",on:{"click":_vm.signUp}},[_c('div',{staticClass:"unsupported-btn"},[_vm._v("LOG IN")]),_c('span',[_vm._v("Login or sign up to send messages!")])]):_vm._e()]:_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/organisms/ExploreEvent/ChatBody.vue?vue&type=template&id=79267fee&scoped=true&lang=pug&

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(38);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "lodash/map"
var map_ = __webpack_require__(225);
var map_default = /*#__PURE__*/__webpack_require__.n(map_);

// EXTERNAL MODULE: external "lodash/findIndex"
var findIndex_ = __webpack_require__(226);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex_);

// EXTERNAL MODULE: external "tippy.js"
var external_tippy_js_ = __webpack_require__(216);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/ExploreEvent/ChatBody.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var ChatBodyvue_type_script_lang_js_ = ({
  name: 'PageLockerRoomChannels',
  components: {
    XTLockerRoomSupported: () => __webpack_require__.e(/* import() */ 61).then(__webpack_require__.bind(null, 1438))
  },
  layout: 'locker-room',
  props: {
    channelSlug: {
      type: String,
      default: ''
    },
    game: {
      type: Object,
      default: () => {}
    },
    privateChannel: {
      type: Object,
      default: () => {}
    },
    activeChat: {
      type: String,
      required: true
    },
    currentStep: {
      type: Number,
      default: 1
    },
    lockerRoomProp: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      socket: null,
      pageLoaded: false,
      myEmitErrors: {},
      channel: null,
      oldChannel: null,
      isSupported: true,
      lockerRoom: null,
      chats: [],
      privateChats: [],
      usersTyping: [],
      onlineMembers: [],
      publicMembers: []
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive', 'lockerRoomReply']),
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userID', 'userName', 'userAvatar']),
    ...Object(external_vuex_map_fields_["mapFields"])('channels', ['channelActive']),
    ...Object(external_vuex_map_fields_["mapFields"])('app', ['showLoader']),
    ...Object(external_vuex_map_fields_["mapFields"])('chats', ['unread', 'mode']),
    ...Object(external_vuex_["mapGetters"])({
      getMediaFilesLocal: 'media/getMediaFilesLocal',
      getLockerRoomIsLoading: 'lockerRoom/getLockerRoomIsLoading',
      selectedGif: 'giphy/getSelectedGif'
    }),
    activeChannelSlug() {
      var _this$privateChannel;
      return this.activeChat === 'public' ? this.channelSlug : (_this$privateChannel = this.privateChannel) === null || _this$privateChannel === void 0 ? void 0 : _this$privateChannel.slug;
    }
  },
  watch: {
    selectedGif() {
      if (this.selectedGif && this.userID) {
        this.fnSendMessage(null, this.lockerRoomReply);
        this.$store.dispatch('locker-room/setLockerRoomReply', null);
      }
    },
    lockerRoomActive: {
      deep: true,
      handler(value) {
        this.isSupported = this.isSupported || (value === null || value === void 0 ? void 0 : value.isSupported);
      }
    },
    activeChat: {
      deep: true,
      handler() {
        this.fnConnectToChannel();
      }
    },
    $route: {
      deep: true,
      immediate: true,
      handler() {
        this.$root.$emit('evtRtCancelEdit');
        this.clearChatDeleted();
      }
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/',
      auth: {
        token: this.$store.state.auth.token || null,
        type: 'desktop'
      },
      transports: ['websocket']
    });
    this.$root.$on('evtRtSendMessage', (message, reply, media, mentionsUserIDs) => {
      this.fnSendMessage(message, reply, media, mentionsUserIDs);
      this.unread = false;
    });
    this.$root.$on('evtRtEditMessage', data => {
      this.fnEditMessage(data);
    });
    this.$root.$on('evtRtDeleteMessage', data => {
      this.fnDeleteMessage(data);
    });
    this.$root.$on('leavePrtChat', data => {
      this.fnLeavePrivateChat(data);
    });

    // RECEIVED MESSAGE
    this.socket.on('on-message', data => {
      var _this$privateChannel2;
      const {
        chat
      } = data;
      if (chat.channelSlug === this.channelSlug) {
        this.chats.push(data.chat);
      } else if (chat.channelSlug === ((_this$privateChannel2 = this.privateChannel) === null || _this$privateChannel2 === void 0 ? void 0 : _this$privateChannel2.slug)) {
        this.privateChats.push(data.chat);
        if (this.mode === 'video') {
          this.unread = true;
        }
      }
    });

    // EDIT MESSAGE
    this.socket.on('on-edit-message', data => {
      if (!data.chat) return;
      map_default()(this.chats, function (chat) {
        if (chat.chatID === data.chat.chatID) {
          chat.text = data.chat.text;
          chat.isEdited = true;
        }
      });
      map_default()(this.privateChats, function (chat) {
        if (chat.chatID === data.chat.chatID) {
          chat.text = data.chat.text;
          chat.isEdited = true;
        }
      });
    });

    // DELETE MESSAGE
    this.socket.on('on-delete-message', data => {
      var _data$chat;
      if (!data.chat) return;
      const publicIndex = findIndex_default()(this.chats, {
        chatID: data.chat.chatID
      });
      const privateIndex = findIndex_default()(this.privateChats, {
        chatID: data.chat.chatID
      });
      if (data !== null && data !== void 0 && (_data$chat = data.chat) !== null && _data$chat !== void 0 && _data$chat.isDeletedEveryone) {
        if (publicIndex !== -1) {
          this.chats.splice(publicIndex, 1);
        } else if (privateIndex !== -1) {
          this.privateChats.splice(privateIndex, 1);
        }
        this.fnDeleteReply({
          chatID: data.chat.chatID,
          deleteForSelf: false,
          deleteForEveryone: true,
          chats: privateIndex !== 1 ? this.privateChats : this.chats
        });
      }
    });

    // TYPING MESSAGE
    this.socket.on('on-typing-message-v2', data => {
      this.usersTyping = data.filter(({
        username,
        channelSlug
      }) => username && channelSlug === this.activeChannelSlug).map(({
        username
      }) => username);
    });

    // SERVER LOGS
    this.socket.on('logs', data => {
      if (data.call === 'on-channel-user-online') {
        this.publicMembers = data.payload.onlineUsers;
      }
      console.log('SERVERLOGS', data);
    });
    this.socket.on('status-online', data => {
      this.onlineMembers = data;
    });
    this.clearLockerRoomDeletedManagers();
    this.$root.$on('evtRtGetChannel', () => {
      this.fnGetChannel();
    });
    this.channelActive = this.channel;
    this.$root.$on('evtRtIsTyping', user => {
      this.fnTypingMessage({
        userName: user.userName,
        status: true
      });
    });
    this.$root.$on('evtRtDoneTyping', user => {
      this.fnTypingMessage({
        userName: user.userName,
        status: false
      });
    });
    this.fnRetrievePageDetails();
    this.fnRetrieveIsSupported();

    // add set interval call to fix web socket issue
    const instance = this;
    setInterval(() => {
      instance.socket.emit('ping');
    }, 1000);
    // end of set Interval call
  },

  beforeDestroy() {
    if (this.oldChannel) {
      this.$root.$emit('evtReloadLockerRoom', this.oldChannel);
    }
    this.$root.$off('evtRtSendMessage');
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      clearLockerRoomDeletedManagers: 'locker-room/clearLockerRoomDeletedManagers',
      clearChatDeleted: 'chats/clearChatDeleted',
      setLockerRoomIsLoading: 'lockerRoom/setLockerRoomIsLoading',
      clearSelectedGift: 'giphy/clearSelectedGif'
    }),
    async fnSendMessage(message, reply, media, mentionsUserIDs) {
      try {
        Object(external_tippy_js_["hideAll"])();
        const chat = {
          User: {
            username: this.userName || 'FX1 User',
            Avatar: this.userAvatar,
            id: this.userID
          },
          chatID: Object(external_uuid_["v4"])(),
          text: message,
          channelSlug: this.activeChannelSlug,
          lockerRoomSlug: this.$route.params.slug,
          repliedTo: reply ? {
            User: {
              username: reply === null || reply === void 0 ? void 0 : reply.name,
              id: reply === null || reply === void 0 ? void 0 : reply.userID
            },
            text: reply === null || reply === void 0 ? void 0 : reply.text,
            gif: reply === null || reply === void 0 ? void 0 : reply.gif,
            chatID: reply === null || reply === void 0 ? void 0 : reply.chatID,
            Media: reply === null || reply === void 0 ? void 0 : reply.Media
          } : null,
          Media: media !== null && media !== void 0 && media.length ? media : null,
          MentionedUserIDs: mentionsUserIDs,
          gif: this.selectedGif
        };
        await this.socket.emit('send-message', chat, () => {});
        chat.localMedia = this.getMediaFilesLocal || null;
        chat.replyLocalMedia = (reply === null || reply === void 0 ? void 0 : reply.localMedia) || null;
        if (this.activeChat === 'public') {
          this.chats.push(chat);
        } else if (this.activeChat === 'private') {
          this.privateChats.push(chat);
        }
        const LockerRoom = this.lockerRoom || this.lockerRoomProp;
        this.channelActive = LockerRoom.ChannelGroups[0].Channels[0];
        this.$mixpanelClient.eventRoomtrackSendMessage({
          LockerRoom,
          game: this.game,
          reply
        });
        this.$nextTick(() => {
          this.$root.$emit('evtRtScrollToBottom');
        });
        await this.clearSelectedGift();
      } catch (error) {} finally {
        const input = document.querySelector('.chat-input');
        input === null || input === void 0 ? void 0 : input.focus();
      }
    },
    async fnEditMessage({
      chatID,
      text,
      repliedToChatID,
      Media
    }) {
      await this.socket.emit('edit-message', {
        channelSlug: this.activeChannelSlug,
        chatID,
        text,
        repliedToChatID,
        Media
      }, () => {
        // console.log(resp)
      });
    },
    async fnDeleteMessage({
      chatID,
      deleteForSelf,
      deleteForEveryone
    }) {
      const activeChat = this.activeChat === 'public' ? this.chats : this.privateChats;
      await this.socket.emit('delete-message', {
        channelSlug: this.activeChannelSlug,
        chatID,
        isDeletedSelf: deleteForSelf,
        isDeletedEveryone: deleteForEveryone
      }, () => {
        this.fnDeleteReply({
          chatID,
          deleteForSelf,
          deleteForEveryone,
          activeChat
        });
      });
    },
    fnConnectToChannel(slug) {
      var _this$privateChannel3;
      this.oldChannel = this.$route.params.channel || null;
      if (this.oldChannel) {
        this.$root.$emit('evtReloadLockerRoom', this.oldChannel);
      }
      this.$store.dispatch('locker-room/setLockerRoomConnectingToChannel', true);
      this.socket.emit('join-channel', {
        channelSlug: this.activeChat === 'public' ? this.channelSlug : slug || ((_this$privateChannel3 = this.privateChannel) === null || _this$privateChannel3 === void 0 ? void 0 : _this$privateChannel3.slug)
      }, ( /* resp */
      ) => {
        const lockerRoom = this.lockerRoomActive;
        const channel = this.activeChannelSlug;
        const params = {
          lockerRoom,
          channel,
          pageName: 'Event room channel',
          isLoggedIn: this.isLoggedIn
        };
        this.$mixpanelClient.trackViewPage(params);
        this.$store.dispatch('notification/clearActiveChannelNotification', this.$route.params.channel);
        this.reloadUnreadChats();
      });
      this.$store.dispatch('locker-room/setLockerRoomConnectingToChannel', false);
    },
    async fnGetChannel() {
      const slug = this.channelSlug;
      const {
        getChannel
      } = await this.$api.getChannel({
        slug
      });
      this.channel = getChannel;
    },
    async fnGetPrivateChannel(privateId) {
      var _this$privateChannel4;
      const id = privateId;
      const slug = (_this$privateChannel4 = this.privateChannel) === null || _this$privateChannel4 === void 0 ? void 0 : _this$privateChannel4.slug;
      const {
        getChannel
      } = slug ? await this.$api.getChannel({
        slug
      }) : id ? await this.$api.getChannel({
        id
      }) : null;
      this.$emit('setPrivateChannel', getChannel);
      await this.$store.dispatch('locker-room/setLockerRoomPrivateChat', getChannel);
      if (id && getChannel) {
        this.fnConnectToChannel(getChannel === null || getChannel === void 0 ? void 0 : getChannel.slug);
      }
    },
    async fnRetrievePageDetails() {
      var _this$$route, _this$$route$params, _this$privateChannel5;
      const slug = (_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$params = _this$$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.slug;
      const slugChannel = this.channelSlug;
      const slugPrivateChannel = (_this$privateChannel5 = this.privateChannel) === null || _this$privateChannel5 === void 0 ? void 0 : _this$privateChannel5.slug;
      const params = {
        channelSlug: this.channelSlug
      };
      const privateParams = {
        channelSlug: slugPrivateChannel
      };
      // async await parallel
      const [{
        getMessagesByChannelSlug: {
          items
        }
      }, {
        getChannel
      }, {
        getLockerRoom
      }] = await Promise.all([this.$api.getMessagesByChannelSlug(params), this.$api.getChannel({
        slug: slugChannel
      }), this.$api.getLockerRoom({
        slug
      })]);
      if (slugPrivateChannel) {
        const [{
          getMessagesByChannelSlug: privateItems
        }, {
          getChannel: privateChannel
        }] = await Promise.all([this.$api.getMessagesByChannelSlug(privateParams), this.$api.getChannel({
          slug: slugPrivateChannel
        })]);
        this.privateChats = privateItems.items;
        this.$emit('setPrivateChannel', privateChannel);
        await this.$store.dispatch('locker-room/setLockerRoomPrivateChat', privateChannel);
      }
      const chats = [];
      chats.push(...items);
      this.isSupported = getLockerRoom === null || getLockerRoom === void 0 ? void 0 : getLockerRoom.isSupported;
      this.channel = getChannel;
      this.lockerRoom = getLockerRoom;
      this.chats = chats;
      this.pageLoaded = true;
      await this.$store.dispatch('locker-room/setLockerRoomActive', this.lockerRoom);
      this.lockerRoomReply = null;
    },
    fnDeleteReply({
      chatID,
      deleteForEveryone,
      deleteForSelf,
      chats
    }) {
      map_default()(chats, function (data) {
        var _data$repliedTo;
        if (((_data$repliedTo = data.repliedTo) === null || _data$repliedTo === void 0 ? void 0 : _data$repliedTo.chatID) === chatID) {
          data.repliedTo = {
            ...{
              isDeletedEveryone: deleteForEveryone,
              isDeletedSelf: deleteForSelf
            },
            ...data.repliedTo
          };
        }
      });
    },
    fnTypingMessage({
      userName,
      status
    }) {
      this.socket.emit('typing-message-v2', {
        channelSlug: this.activeChannelSlug,
        userName,
        isTyping: status
      });
    },
    async reloadUnreadChats() {
      if (!this.isLoggedIn) return;
      const {
        Me: {
          Supporting
        }
      } = await this.$api.getMyProfileSupporting();
      if (!Supporting) return;
      const initialCount = [];
      await (Supporting === null || Supporting === void 0 ? void 0 : Supporting.map(data => {
        return initialCount.push({
          slug: data.slug,
          totalUnreadMessagesCount: data.totalUnreadMessagesCount
        });
      }));
      await this.$store.dispatch('notification/setLockerRoomCount', initialCount);
    },
    async fnRetrieveIsSupported() {
      try {
        var _this$$route$params2;
        const {
          getLockerRoom: {
            isSupported
          }
        } = await this.$api.getLockerRoomIsSupported({
          slug: (_this$$route$params2 = this.$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.slug
        });
        this.isSupported = isSupported;
      } catch (error) {} finally {
        await this.setLockerRoomIsLoading(false);
      }
    },
    fnLeavePrivateChat(data) {
      this.$emit('setPrivateChannel', data);
    },
    signUp() {
      this.$router.push('/signup?step=1');
    },
    changeStep(step) {
      this.$emit('changeStep', step);
    },
    cancel() {
      this.$emit('cancel');
    }
  }
});
// CONCATENATED MODULE: ./components/organisms/ExploreEvent/ChatBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExploreEvent_ChatBodyvue_type_script_lang_js_ = (ChatBodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/organisms/ExploreEvent/ChatBody.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1282)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExploreEvent_ChatBodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "79267fee",
  "7b2ea0fa"
  
)

/* harmony default export */ var ChatBody = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1283);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("cc9f4f48", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=137.js.map