exports.ids = [43];
exports.modules = {

/***/ 1335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locker-room/_slug/_channel/index.vue?vue&type=template&id=1f5237af&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-locker-room-channels row col"},[_c('client-only',[(!_vm.getLockerRoomIsLoading)?[(_vm.isSupported && _vm.isLoggedIn)?_c('XTLockerRoomSupported'):_c('XTLockerRoomUnsupported')]:_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/locker-room/_slug/_channel/index.vue?vue&type=template&id=1f5237af&lang=pug&

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(38);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "lodash/map"
var map_ = __webpack_require__(225);
var map_default = /*#__PURE__*/__webpack_require__.n(map_);

// EXTERNAL MODULE: external "tippy.js"
var external_tippy_js_ = __webpack_require__(216);

// EXTERNAL MODULE: external "lodash/findIndex"
var findIndex_ = __webpack_require__(226);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex_);

// EXTERNAL MODULE: ./mixins/meta.js
var meta = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locker-room/_slug/_channel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//








/* harmony default export */ var _channelvue_type_script_lang_js_ = ({
  name: 'PageLockerRoomChannels',
  components: {
    XTLockerRoomSupported: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 1353)),
    XTLockerRoomUnsupported: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, 1354))
  },
  mixins: [meta["a" /* default */]],
  layout: 'locker-room',
  async asyncData({
    app,
    route,
    store
  }) {
    var _route$params, _route$params2, _notificationActive$c, _notificationActive$N, _notificationActive$N2;
    const notificationActive = await store.state.notification.active;
    const slug = route === null || route === void 0 ? void 0 : (_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.slug;
    const slugChannel = route === null || route === void 0 ? void 0 : (_route$params2 = route.params) === null || _route$params2 === void 0 ? void 0 : _route$params2.channel;
    const params = {
      channelSlug: route.params.channel
      // count: 10,
    };

    const paramsCreatedAt = {
      channelSlug: route.params.channel,
      cursor: (notificationActive === null || notificationActive === void 0 ? void 0 : (_notificationActive$c = notificationActive.createdAt) === null || _notificationActive$c === void 0 ? void 0 : _notificationActive$c.toString()) || (notificationActive === null || notificationActive === void 0 ? void 0 : (_notificationActive$N = notificationActive.Notification) === null || _notificationActive$N === void 0 ? void 0 : (_notificationActive$N2 = _notificationActive$N.createdAt) === null || _notificationActive$N2 === void 0 ? void 0 : _notificationActive$N2.toString()),
      direction: 'up'
    };
    let chatItems;
    if (notificationActive) {
      const {
        getMessagesByChannelSlugUsingCreatedAtAsCursor: {
          items
        }
      } = await app.$api.getMessagesByChannelSlugUsingCreatedAtAsCursor(paramsCreatedAt);
      chatItems = items;
    } else {
      const {
        getMessagesByChannelSlug: {
          items
        }
      } = await app.$api.getMessagesByChannelSlug(params);
      chatItems = items;
    }

    // async await parallel
    const [{
      getChannel
    }, {
      getLockerRoom
    }] = await Promise.all([app.$api.getChannel({
      slug: slugChannel
    }), app.$api.getLockerRoom({
      slug
    })]);
    const chats = [];
    chats.push(...chatItems);
    const supporting = store.state.lockerRoom.supporting || [];
    const active = supporting.filter(x => {
      return (x === null || x === void 0 ? void 0 : x.slug) === slug;
    });
    const isSupporting = !!active.length;
    return {
      isSupported: isSupporting || (getLockerRoom === null || getLockerRoom === void 0 ? void 0 : getLockerRoom.isSupported),
      channel: getChannel,
      lockerRoom: getLockerRoom,
      chats
    };
  },
  data() {
    return {
      socket: null,
      myEmitErrors: {},
      channel: null,
      oldChannel: null,
      isSupported: true,
      lockerRoom: null,
      chats: [],
      usersTyping: []
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive', 'lockerRoomReply']),
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userID', 'userName', 'userAvatar']),
    ...Object(external_vuex_map_fields_["mapFields"])('channels', ['channelActive']),
    ...Object(external_vuex_map_fields_["mapFields"])('app', ['showLoader']),
    ...Object(external_vuex_["mapGetters"])({
      getMediaFilesLocal: 'media/getMediaFilesLocal',
      getLockerRoomIsLoading: 'lockerRoom/getLockerRoomIsLoading',
      selectedGif: 'giphy/getSelectedGif'
    })
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
    $route: {
      deep: true,
      immediate: true,
      handler() {
        this.$root.$emit('evtRtCancelEdit');
        this.clearChatDeleted();
      }
    }
  },
  async created() {
    var _this$channel, _Sports$;
    await this.$store.dispatch('locker-room/setLockerRoomActive', this.lockerRoom);
    this.lockerRoomReply = null;
    const {
      Club,
      League,
      FanGroup,
      Sports
    } = this.lockerRoomActive || {};
    this.metaTitle = `${(_this$channel = this.channel) === null || _this$channel === void 0 ? void 0 : _this$channel.name} | ${(League === null || League === void 0 ? void 0 : League.name) || (Club === null || Club === void 0 ? void 0 : Club.name) || (FanGroup === null || FanGroup === void 0 ? void 0 : FanGroup.name)} | ${(_Sports$ = Sports[0]) === null || _Sports$ === void 0 ? void 0 : _Sports$.name} - FX1`;
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
    });
    this.$root.$on('evtRtEditMessage', data => {
      this.fnEditMessage(data);
    });
    this.$root.$on('evtRtDeleteMessage', data => {
      this.fnDeleteMessage(data);
    });
    this.fnConnectToChannel();

    // RECEIVED MESSAGE
    this.socket.on('on-message', data => {
      this.chats.push(data.chat);
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
    });

    // DELETE MESSAGE
    this.socket.on('on-delete-message', data => {
      var _data$chat;
      if (!data.chat) return;
      const index = findIndex_default()(this.chats, {
        chatID: data.chat.chatID
      });
      if (data !== null && data !== void 0 && (_data$chat = data.chat) !== null && _data$chat !== void 0 && _data$chat.isDeletedEveryone) {
        this.chats.splice(index, 1);
        this.fnDeleteReply({
          chatID: data.chat.chatID,
          deleteForSelf: false,
          deleteForEveryone: true
        });
      }
    });

    // TYPING MESSAGE
    this.socket.on('on-typing-message-v2', data => {
      this.usersTyping = data.filter(({
        username,
        channelSlug
      }) => username && channelSlug === this.channelActive.slug).map(({
        username
      }) => username);
    });

    // SERVER LOGS
    this.socket.on('logs', data => {
      console.log('SERVERLOGS', data);
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
    this.fnRetrieveIsSupported();
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
        const chat = {
          User: {
            username: this.userName || 'FX1 User',
            Avatar: this.userAvatar,
            id: this.userID
          },
          chatID: Object(external_uuid_["v4"])(),
          text: message,
          channelSlug: this.$route.params.channel,
          lockerRoomSlug: this.$route.params.slug,
          repliedTo: reply ? {
            User: {
              username: reply === null || reply === void 0 ? void 0 : reply.name,
              id: reply === null || reply === void 0 ? void 0 : reply.userID
            },
            text: reply === null || reply === void 0 ? void 0 : reply.text,
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
        Object(external_tippy_js_["hideAll"])();
        this.chats.push(chat);
        const lockerRoom = this.lockerRoomActive;
        const channel = this.channelActive;
        this.$mixpanelClient.trackSendMessage({
          channel,
          lockerRoom,
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
        channelSlug: this.$route.params.channel,
        chatID,
        text,
        repliedToChatID,
        Media
      }, () => {});
    },
    async fnDeleteMessage({
      chatID,
      deleteForSelf,
      deleteForEveryone
    }) {
      await this.socket.emit('delete-message', {
        channelSlug: this.$route.params.channel,
        chatID,
        isDeletedSelf: deleteForSelf,
        isDeletedEveryone: deleteForEveryone
      }, () => {
        this.fnDeleteReply({
          chatID,
          deleteForSelf,
          deleteForEveryone
        });
      });
    },
    fnConnectToChannel() {
      this.oldChannel = this.$route.params.channel || null;
      if (this.oldChannel) {
        this.$root.$emit('evtReloadLockerRoom', this.oldChannel);
      }
      this.socket.emit('join-channel', {
        channelSlug: this.$route.params.channel
      }, async () => {
        try {
          const lockerRoom = this.lockerRoomActive;
          const channel = this.channelActive;
          const params = {
            lockerRoom,
            channel,
            pageName: 'Locker room channel',
            isLoggedIn: this.isLoggedIn
          };
          this.$mixpanelClient.trackViewPage(params);
          const {
            getNotifications: {
              items
            }
          } = await this.$api.getNotifications({
            isRead: false
          });
          const notification = items.filter(n => n.channelSlug === this.$route.params.channel);
          const notificationIDs = notification.map(n => n.id);
          await this.$api.readNotification({
            notificationIDs
          });
          this.$store.dispatch('notification/clearActiveChannelNotification', this.$route.params.channel);
          this.reloadUnreadChats();
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
    async fnGetChannel() {
      var _this$$route$params;
      const slug = (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.channel;
      const {
        getChannel
      } = await this.$api.getChannel({
        slug
      });
      this.channel = getChannel;
    },
    async fnRetrievePageDetails() {
      var _this$$route, _this$$route$params2, _this$$route2, _this$$route2$params;
      const slug = (_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$params2 = _this$$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.slug;
      const slugChannel = (_this$$route2 = this.$route) === null || _this$$route2 === void 0 ? void 0 : (_this$$route2$params = _this$$route2.params) === null || _this$$route2$params === void 0 ? void 0 : _this$$route2$params.channel;
      const params = {
        channelSlug: this.$route.params.channel
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
      const chats = [];
      chats.push(...items);
      this.isSupported = getLockerRoom === null || getLockerRoom === void 0 ? void 0 : getLockerRoom.isSupported;
      this.channel = getChannel;
      this.lockerRoom = getLockerRoom;
      this.chats = chats;
    },
    fnDeleteReply({
      chatID,
      deleteForEveryone,
      deleteForSelf
    }) {
      map_default()(this.chats, function (data) {
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
        channelSlug: this.$route.params.channel,
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
        var _this$$route$params3;
        const {
          getLockerRoom: {
            isSupported
          }
        } = await this.$api.getLockerRoomIsSupported({
          slug: (_this$$route$params3 = this.$route.params) === null || _this$$route$params3 === void 0 ? void 0 : _this$$route$params3.slug
        });
        this.isSupported = isSupported;
      } catch (error) {} finally {
        this.setLockerRoomIsLoading(false);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/locker-room/_slug/_channel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_channelvue_type_script_lang_js_ = (_channelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/locker-room/_slug/_channel/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _slug_channelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "914f3d88"
  
)

/* harmony default export */ var _channel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      metaTitle: '',
      metaDescription: 'Show the world who you support'
    };
  },
  head() {
    var _this$$route;
    return {
      title: this.metaTitle || 'FX1',
      link: [{
        rel: 'canonical',
        href: `${this.baseURL}${(_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : _this$$route.fullPath}`
      }],
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.metaDescription.replace(/<\/?[^>]+(>|$)/g, '')
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.metaTitle
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.metaDescription.replace(/<\/?[^>]+(>|$)/g, '')
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.fx1Logo
      }, {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.metaTitle
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.metaTitle
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.metaDescription.replace(/<\/?[^>]+(>|$)/g, '')
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.fx1Logo
      }, {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: this.fx1Logo
      }, {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: this.metaTitle
      }]
    };
  }
});

/***/ })

};;
//# sourceMappingURL=index.js.map