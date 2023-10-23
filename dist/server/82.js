exports.ids = [82];
exports.modules = {

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Channels/ChatItem.vue?vue&type=template&id=55e1a01a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"intersect",rawName:"v-intersect",value:(_vm.fnCheckIfInView),expression:"fnCheckIfInView"},{name:"longpress",rawName:"v-longpress",value:(_vm.fnDetectLongPress),expression:"fnDetectLongPress"}],ref:"chatItem",staticClass:"xm-channels-chat-item",class:_vm.showChatOptions && _vm.getChatActive.chatID === _vm.chatID && 'is-active',on:{"contextmenu":function($event){$event.preventDefault();return _vm.fnShowChatOptions($event)}}},[_vm._ssrNode("<div class=\"row\" data-v-55e1a01a>","</div>",[_c('XAAvatar',{staticClass:"mr-4",attrs:{"image":_vm.avatar,"name":_vm.name,"size":"48px"}}),_vm._ssrNode("<div"+(_vm._ssrClass("details col row",!_vm.message && 'no-text'))+" data-v-55e1a01a>","</div>",[_vm._ssrNode("<div class=\"left-details\" data-v-55e1a01a>","</div>",[_vm._ssrNode("<div class=\"row user-details\" data-v-55e1a01a><div class=\"row col message-info\" data-v-55e1a01a><div class=\"name\" data-v-55e1a01a>"+_vm._ssrEscape(_vm._s(_vm.name))+"</div><div class=\"date\" data-v-55e1a01a>"+_vm._ssrEscape(_vm._s(_vm.date))+"</div>"+((_vm.isEdited)?("<div class=\"is-edited\" data-v-55e1a01a>, edited</div>"):"<!---->")+"</div></div>"),(_vm.reply)?_c('XMChannelsChatReply',{attrs:{"reply":_vm.replyLocal || _vm.reply}}):_vm._e(),(_vm.Media)?_c('XMChannelsChatMedias',{class:!_vm.message && 'no-text',attrs:{"medias":_vm.localMedia || _vm.Media,"show-chat-options":_vm.showChatOptions,"scroll-to-bottom":_vm.scrollToBottom}}):(_vm.gif)?_c('div',{staticClass:"gif",class:{ 'gif-small': _vm.small }},[_c('img',{attrs:{"src":_vm.gif,"loading":"lazy","alt":"gif"}})]):_vm._e(),_vm._ssrNode("<div class=\"_message text-weight-light\" data-v-55e1a01a>"+(_vm._s(_vm.message))+"</div>")],2)])],1),_vm._ssrNode(((_vm.showChatOptions && _vm.getChatActive.chatID === _vm.chatID)?("<div"+(_vm._ssrAttr("id",_vm.chatID))+" class=\"chat-options\""+(_vm._ssrStyle(null,{ top: _vm.chatPosition.top, left: _vm.chatPosition.left }, null))+" data-v-55e1a01a><div class=\"option\" data-v-55e1a01a><div class=\"_icon\" data-v-55e1a01a><img"+(_vm._ssrAttr("src",__webpack_require__(561)))+" data-v-55e1a01a></div><div class=\"_label\" data-v-55e1a01a>Reply</div></div>"+((_vm.isMe)?("<div class=\"option\" data-v-55e1a01a><div class=\"_icon\" data-v-55e1a01a><img"+(_vm._ssrAttr("src",__webpack_require__(560)))+" data-v-55e1a01a></div><div class=\"_label\" data-v-55e1a01a>Edit</div></div>"):"<!---->")+((_vm.isMe)?("<div class=\"option _delete\" data-v-55e1a01a><div class=\"_icon\" data-v-55e1a01a><img"+(_vm._ssrAttr("src",__webpack_require__(559)))+" data-v-55e1a01a></div><div class=\"_label\" data-v-55e1a01a>Delete</div></div>"):"<!---->")+"</div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/Channels/ChatItem.vue?vue&type=template&id=55e1a01a&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(215);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./mixins/dialogs.js
var dialogs = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Channels/ChatReply.vue?vue&type=template&id=c919d518&scoped=true&lang=pug&
var ChatReplyvue_type_template_id_c919d518_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xm-channels-chat-reply row"},[_vm._ssrNode(((_vm.isDeletedEveryone)?("<div class=\"col\" data-v-c919d518><div class=\"reply-message\" data-v-c919d518>This message has been deleted</div></div>"):(_vm.isDeletedSelf && _vm.isMe)?("<div class=\"col\" data-v-c919d518><div class=\"reply-message\" data-v-c919d518>This message has been deleted</div></div>"):(((_vm.media || _vm.gif)?("<div class=\"media-container\" data-v-c919d518><img"+(_vm._ssrAttr("src",_vm.photoURL))+" data-v-c919d518></div>"):"<!---->")+"<div class=\"col\" data-v-c919d518><div class=\"reply-name\" data-v-c919d518>"+_vm._ssrEscape(_vm._s(_vm.name))+"</div>"+((_vm.message)?("<div class=\"reply-message\" data-v-c919d518>"+(_vm._s(_vm.message))+"</div>"):"<!---->")+((_vm.photoURL && !_vm.message)?("<div class=\"reply-message photo\" data-v-c919d518>Photo</div>"):"<!---->")+"</div>")))])}
var ChatReplyvue_type_template_id_c919d518_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/Channels/ChatReply.vue?vue&type=template&id=c919d518&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Channels/ChatReply.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ChatReplyvue_type_script_lang_js_ = ({
  name: 'XMChannelsChatReply',
  props: {
    reply: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      imgURL: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userName']),
    user() {
      var _this$reply;
      return ((_this$reply = this.reply) === null || _this$reply === void 0 ? void 0 : _this$reply.User) || null;
    },
    name() {
      var _this$user, _this$user2;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.username) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.name) || null;
    },
    message() {
      var _this$reply2;
      return ((_this$reply2 = this.reply) === null || _this$reply2 === void 0 ? void 0 : _this$reply2.text) || null;
    },
    gif() {
      var _this$reply3;
      return ((_this$reply3 = this.reply) === null || _this$reply3 === void 0 ? void 0 : _this$reply3.gif) || null;
    },
    media() {
      var _this$reply4;
      return ((_this$reply4 = this.reply) === null || _this$reply4 === void 0 ? void 0 : _this$reply4.Media) || null;
    },
    photoURL() {
      if (this.media) {
        var _this$media$;
        return ((_this$media$ = this.media[0]) === null || _this$media$ === void 0 ? void 0 : _this$media$.PhotoURL) || this.imgURL || null;
      }
      if (this.gif) {
        return this.gif;
      }
      return null;
    },
    isDeletedEveryone() {
      var _this$reply5;
      return ((_this$reply5 = this.reply) === null || _this$reply5 === void 0 ? void 0 : _this$reply5.isDeletedEveryone) || false;
    },
    isDeletedSelf() {
      var _this$reply6;
      return ((_this$reply6 = this.reply) === null || _this$reply6 === void 0 ? void 0 : _this$reply6.isDeletedSelf) || false;
    },
    isMe() {
      var _this$user3;
      return ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.username) === this.userName;
    }
  },
  mounted() {
    this.fnRetrievePhotoURLs();
  },
  methods: {
    async fnRetrievePhotoURLs() {
      try {
        var _this$media$2, _this$media$3;
        const input = {
          objectID: (_this$media$2 = this.media[0]) === null || _this$media$2 === void 0 ? void 0 : _this$media$2.objectID,
          objectType: (_this$media$3 = this.media[0]) === null || _this$media$3 === void 0 ? void 0 : _this$media$3.objectType,
          isSport: false,
          type: '200sq'
        };
        const {
          getPhotoURLs
        } = await this.$api.getPhotoURLs({
          input
        });
        this.imgURL = getPhotoURLs[0];
      } catch (error) {}
    }
  }
});
// CONCATENATED MODULE: ./components/molecules/Channels/ChatReply.vue?vue&type=script&lang=js&
 /* harmony default export */ var Channels_ChatReplyvue_type_script_lang_js_ = (ChatReplyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/molecules/Channels/ChatReply.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(823)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Channels_ChatReplyvue_type_script_lang_js_,
  ChatReplyvue_type_template_id_c919d518_scoped_true_lang_pug_render,
  ChatReplyvue_type_template_id_c919d518_scoped_true_lang_pug_staticRenderFns,
  false,
  injectStyles,
  "c919d518",
  "bbd55982"
  
)

/* harmony default export */ var ChatReply = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Channels/ChatItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var ChatItemvue_type_script_lang_js_ = ({
  name: 'XMChannelsChatItem',
  components: {
    XAAvatar: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 440)),
    XAChannelsChatItemBookmark: () => __webpack_require__.e(/* import() */ 114).then(__webpack_require__.bind(null, 1432)),
    XAChannelsChatItemReply: () => __webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(null, 1433)),
    XAChannelsChatItemMore: () => __webpack_require__.e(/* import() */ 116).then(__webpack_require__.bind(null, 1434)),
    XMChannelsChatMedias: () => __webpack_require__.e(/* import() */ 123).then(__webpack_require__.bind(null, 1435)),
    XMChannelsChatReply: ChatReply
  },
  mixins: [dialogs["a" /* default */]],
  props: {
    small: {
      type: Boolean,
      default: false
    },
    chat: {
      type: Object,
      default: () => {}
    },
    scrollToBottom: {
      type: Boolean,
      default: true
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isInView: true,
      imgURL: null,
      showChatOptions: false,
      chatPosition: {
        top: 0,
        left: 0
      },
      isLongPress: false,
      isEditedLocal: false,
      replyLocal: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('user', ['userID']),
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive', 'lockerRoomReply']),
    ...Object(external_vuex_["mapGetters"])({
      getChatActive: 'chats/getChatActive',
      getChatDeletedForSelf: 'chats/getChatDeletedForSelf'
    }),
    message() {
      var _this$chat;
      return ((_this$chat = this.chat) === null || _this$chat === void 0 ? void 0 : _this$chat.text) || '';
    },
    gif() {
      var _this$chat2;
      return ((_this$chat2 = this.chat) === null || _this$chat2 === void 0 ? void 0 : _this$chat2.gif) || null;
    },
    date() {
      var _this$chat3, _this$chat4;
      const date = ((_this$chat3 = this.chat) === null || _this$chat3 === void 0 ? void 0 : _this$chat3.createdAt) || ((_this$chat4 = this.chat) === null || _this$chat4 === void 0 ? void 0 : _this$chat4.date) || new Date();
      const today = new Date();
      const isCurrentDate = external_moment_default()(today).isSame(date, 'day');
      const days = external_moment_default()(today).diff(date, 'days');
      if (isCurrentDate) {
        return external_moment_default()(date).local().format('hh:mm a');
      } else if (days === 0) {
        return 'Yesterday ' + external_moment_default()(date).local().format('hh:mm a');
      } else if (days <= 6) {
        return external_moment_default()(date).local().format('dddd hh:mm a');
      } else {
        return external_moment_default()(date).local().format('MM/DD/YY hh:mm a');
      }
    },
    user() {
      var _this$chat5;
      return ((_this$chat5 = this.chat) === null || _this$chat5 === void 0 ? void 0 : _this$chat5.User) || null;
    },
    name() {
      var _this$user, _this$user2;
      return ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.username) || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.name) || null;
    },
    getUserID() {
      var _this$user3;
      return ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.id) || null;
    },
    avatar() {
      var _this$user4, _this$user4$Avatar;
      return ((_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : (_this$user4$Avatar = _this$user4.Avatar) === null || _this$user4$Avatar === void 0 ? void 0 : _this$user4$Avatar.PhotoURL) || null;
    },
    isSupported() {
      var _this$$route, _this$$route$params, _this$lockerRoomActiv;
      const slug = (_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$params = _this$$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.slug;
      const supporting = this.$store.state.lockerRoom.supporting || [];
      const active = supporting.filter(x => {
        return (x === null || x === void 0 ? void 0 : x.slug) === slug;
      });
      const isSupporting = !!active.length;
      return isSupporting || ((_this$lockerRoomActiv = this.lockerRoomActive) === null || _this$lockerRoomActiv === void 0 ? void 0 : _this$lockerRoomActiv.isSupported) || false;
    },
    chatID() {
      var _this$chat6;
      return ((_this$chat6 = this.chat) === null || _this$chat6 === void 0 ? void 0 : _this$chat6.chatID) || null;
    },
    reply() {
      var _this$chat7, _this$chat8;
      return ((_this$chat7 = this.chat) === null || _this$chat7 === void 0 ? void 0 : _this$chat7.RepliedTo) || ((_this$chat8 = this.chat) === null || _this$chat8 === void 0 ? void 0 : _this$chat8.repliedTo) || null;
    },
    replyName() {
      var _this$reply, _this$reply$User;
      return ((_this$reply = this.reply) === null || _this$reply === void 0 ? void 0 : (_this$reply$User = _this$reply.User) === null || _this$reply$User === void 0 ? void 0 : _this$reply$User.username) || null;
    },
    Media() {
      var _this$chat9;
      return ((_this$chat9 = this.chat) === null || _this$chat9 === void 0 ? void 0 : _this$chat9.Media) || null;
    },
    repliedToMedia() {
      var _this$reply2;
      return ((_this$reply2 = this.reply) === null || _this$reply2 === void 0 ? void 0 : _this$reply2.Media) || null;
    },
    localMedia() {
      var _this$chat10;
      return ((_this$chat10 = this.chat) === null || _this$chat10 === void 0 ? void 0 : _this$chat10.localMedia) || null;
    },
    replyLocalMedia() {
      var _this$chat11;
      return ((_this$chat11 = this.chat) === null || _this$chat11 === void 0 ? void 0 : _this$chat11.replyLocalMedia) || null;
    },
    photoURL() {
      var _this$repliedToMedia$;
      if (this.replyLocalMedia) {
        this.fnResizeImage();
      }
      return this.imgURL || ((_this$repliedToMedia$ = this.repliedToMedia[0]) === null || _this$repliedToMedia$ === void 0 ? void 0 : _this$repliedToMedia$.PhotoURL) || null;
    },
    isMe() {
      var _this$user5;
      return ((_this$user5 = this.user) === null || _this$user5 === void 0 ? void 0 : _this$user5.id) === this.userID;
    },
    isDeletedSelf() {
      var _this$chat12;
      return ((_this$chat12 = this.chat) === null || _this$chat12 === void 0 ? void 0 : _this$chat12.isDeletedSelf) || false;
    },
    isEdited() {
      var _this$chat13;
      return this.isEditedLocal || ((_this$chat13 = this.chat) === null || _this$chat13 === void 0 ? void 0 : _this$chat13.isEdited) || false;
    },
    repliedToChatID() {
      var _this$chat14;
      return ((_this$chat14 = this.chat) === null || _this$chat14 === void 0 ? void 0 : _this$chat14.repliedToChatID) || null;
    }
  },
  watch: {
    isInView: {
      deep: true,
      handler(value) {
        if (value) {
          this.$root.$emit('evtRtShowScrollToBottom', false);
          return;
        }
        this.$root.$emit('evtRtShowScrollToBottom', true);
      }
    },
    chat: {
      deep: true,
      handler(value) {
        this.isEditedLocal = value === null || value === void 0 ? void 0 : value.isEdited;
        this.replyLocal = value === null || value === void 0 ? void 0 : value.repliedTo;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scrollToBottom) return;
      this.$root.$emit('evtRtScrollToBottom');
    });
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setChatActive: 'chats/setChatActive',
      setChatShowEdit: 'chats/setChatShowEdit'
    }),
    fnReplyTo() {
      const {
        name,
        message,
        chatID,
        Media,
        localMedia,
        getUserID,
        gif
      } = this;
      this.lockerRoomReply = {
        name,
        text: message,
        chatID,
        Media,
        localMedia,
        getUserID,
        gif
      };
      const element = document.getElementById('chat-input');
      element.focus();
    },
    fnCheckIfInView(e) {
      if (this.isLast) {
        this.isInView = e.isIntersecting;
      }
    },
    async fnResizeImage() {
      var _this$replyLocalMedia;
      const file = (_this$replyLocalMedia = this.replyLocalMedia[0]) === null || _this$replyLocalMedia === void 0 ? void 0 : _this$replyLocalMedia.file;
      const reader = new FileReader();

      // Wait for the data url to be loaded from the file
      const dataURL = await new Promise(resolve => {
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
      });

      // Wait for the image to be loaded
      const img = new Image();
      await new Promise(resolve => {
        img.onload = resolve;
        img.src = dataURL;
      });
      const imgNaturalWidth = img.naturalWidth;
      const imgNaturalHeight = img.naturalHeight;
      if ((imgNaturalWidth || imgNaturalHeight) <= 50) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imgNaturalWidth;
        canvas.height = imgNaturalHeight;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        this.imgURL = canvas.toDataURL('image/png', 1);
        return;
      }

      // Resize the image with a canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const [maxWidth, maxHeight] = [50, 50];
      const [imgWidth, imgHeight] = [imgNaturalWidth, imgNaturalHeight];
      const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
      canvas.width = imgWidth * ratio;
      canvas.height = imgHeight * ratio;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.imgURL = canvas.toDataURL('image/png', 1);
    },
    fnShowChatOptions(e) {
      var _this$chat15, _this$chat15$repliedT;
      if (!this.isLoggedIn) return;
      if (!e) return;
      this.lockerRoomReply = null;
      this.setChatShowEdit(false);
      const {
        chatID,
        text,
        repliedToChatID,
        Media,
        localMedia,
        gif
      } = this.chat || {};
      const chat = {
        chatID: chatID || null,
        text: text || null,
        repliedToChatID: repliedToChatID || ((_this$chat15 = this.chat) === null || _this$chat15 === void 0 ? void 0 : (_this$chat15$repliedT = _this$chat15.repliedTo) === null || _this$chat15$repliedT === void 0 ? void 0 : _this$chat15$repliedT.chatID) || null,
        Media: Media || null,
        localMedia: localMedia || null,
        gif: gif || null
      };
      this.setChatActive(chat);
      const element = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - element.left;
      const y = e.clientY - element.top;
      const maxChatPositionLeft = e.currentTarget.clientWidth - 135;
      this.chatPosition.left = x > maxChatPositionLeft ? `${maxChatPositionLeft}px` : `${x}px`;
      this.chatPosition.top = `${y}px`;
      this.$nextTick(() => {
        this.showChatOptions = true;
        this.$nextTick(() => {
          const chatOptions = document.getElementById(this.chatID);
          chatOptions === null || chatOptions === void 0 ? void 0 : chatOptions.setAttribute('tabindex', 0);
          chatOptions === null || chatOptions === void 0 ? void 0 : chatOptions.focus();
        });
      });
    },
    fnHideChatOptions() {
      this.showChatOptions = false;
      // this.setChatActive({})
    },

    fnEditMessage() {
      this.setChatShowEdit(true);
      this.$nextTick(() => {
        const element = document.getElementById('chat-input');
        element.focus();
      });
    },
    fnDetectLongPress(e) {
      var _this$chat16, _this$chat16$repliedT;
      if (!this.isLoggedIn) return;
      this.setChatShowEdit(false);
      const {
        chatID,
        text,
        repliedToChatID,
        Media,
        localMedia,
        gif
      } = this.chat || {};
      const chat = {
        chatID: chatID || null,
        text: text || null,
        repliedToChatID: repliedToChatID || ((_this$chat16 = this.chat) === null || _this$chat16 === void 0 ? void 0 : (_this$chat16$repliedT = _this$chat16.repliedTo) === null || _this$chat16$repliedT === void 0 ? void 0 : _this$chat16$repliedT.chatID) || null,
        Media: Media || null,
        localMedia: localMedia || null,
        gif: gif || null
      };
      this.setChatActive(chat);
      const element = e.target;
      const parent = element.closest('.xm-channels-chat-item');
      const parentRect = parent.getBoundingClientRect();
      const x = e.clientX - parentRect.left;
      const y = e.clientY - parentRect.top;
      const maxChatPositionLeft = parent.clientWidth - 135;
      this.chatPosition.left = x > maxChatPositionLeft ? `${maxChatPositionLeft}px` : `${x}px`;
      this.chatPosition.top = `${y}px`;
      this.$nextTick(() => {
        this.showChatOptions = true;
        this.$nextTick(() => {
          const chatOptions = document.getElementById(this.chatID);
          chatOptions === null || chatOptions === void 0 ? void 0 : chatOptions.setAttribute('tabindex', 0);
          chatOptions === null || chatOptions === void 0 ? void 0 : chatOptions.focus();
        });
      });
    },
    fnShowDeleteMessage() {
      this.fnShowDeleteMessageDialog(this.chat);
    }
  }
});
// CONCATENATED MODULE: ./components/molecules/Channels/ChatItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Channels_ChatItemvue_type_script_lang_js_ = (ChatItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/molecules/Channels/ChatItem.vue



function ChatItem_injectStyles (context) {
  
  var style0 = __webpack_require__(825)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ChatItem_component = Object(componentNormalizer["a" /* default */])(
  Channels_ChatItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  ChatItem_injectStyles,
  "55e1a01a",
  "1aa28dce"
  
)

/* harmony default export */ var ChatItem = __webpack_exports__["default"] = (ChatItem_component.exports);

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xIDE2QzEgMTcuMSAxLjkgMTggMyAxOEgxMUMxMi4xIDE4IDEzIDE3LjEgMTMgMTZWNEgxVjE2Wk0xNCAxSDEwLjVMOS41IDBINC41TDMuNSAxSDBWM0gxNFYxWiIgZmlsbD0iI0Y4NTQ1NCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNzEgMy42MzA1NUMxOC4xIDQuMDIwNTUgMTguMSA0LjY1MDU1IDE3LjcxIDUuMDQwNTVMMTUuODggNi44NzA1NUwxMi4xMyAzLjEyMDU1TDEzLjk2IDEuMjkwNTVDMTQuMzUgMC45MDA1NDcgMTQuOTggMC45MDA1NDcgMTUuMzcgMS4yOTA1NUwxNy43MSAzLjYzMDU1Wk0wIDE5LjAwMDVWMTUuMjUwNUwxMS4wNiA0LjE5MDU1TDE0LjgxIDcuOTQwNTVMMy43NSAxOS4wMDA1SDBaIiBmaWxsPSIjQzNDRENGIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03IDRWMEwwIDdMNyAxNFY5LjlDMTIgOS45IDE1LjUgMTEuNSAxOCAxNUMxNyAxMCAxNCA1IDcgNFoiIGZpbGw9IiNDM0NEQ0YiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(824);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("62f47940", content, true, context)
};

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(826);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a337d52a", content, true, context)
};

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatReply_vue_vue_type_style_index_0_id_c919d518_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(663);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatReply_vue_vue_type_style_index_0_id_c919d518_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatReply_vue_vue_type_style_index_0_id_c919d518_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatReply_vue_vue_type_style_index_0_id_c919d518_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatReply_vue_vue_type_style_index_0_id_c919d518_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xm-channels-chat-reply[data-v-c919d518]{border-left:2px solid #fff;padding-left:10px;margin-bottom:5px}.xm-channels-chat-reply[data-v-c919d518] .media-container{width:38px;height:38px;margin-right:10px}.xm-channels-chat-reply[data-v-c919d518] .media-container img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:4px}.xm-channels-chat-reply[data-v-c919d518] .reply-name{color:#886bf2;font-size:1.0714rem;line-height:18px;font-weight:500;margin-bottom:3px}.xm-channels-chat-reply[data-v-c919d518] .reply-message{font-size:.8571rem;font-weight:300;line-height:14px;letter-spacing:-.18px;opacity:.5;white-space:pre-wrap;word-break:break-word;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.xm-channels-chat-reply[data-v-c919d518] .reply-message a{color:#fff}.xm-channels-chat-reply[data-v-c919d518] .reply-message.photo{font-size:15px;opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatItem_vue_vue_type_style_index_0_id_55e1a01a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(664);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatItem_vue_vue_type_style_index_0_id_55e1a01a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatItem_vue_vue_type_style_index_0_id_55e1a01a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatItem_vue_vue_type_style_index_0_id_55e1a01a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatItem_vue_vue_type_style_index_0_id_55e1a01a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(447);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xm-channels-chat-item[data-v-55e1a01a]{font-size:1.0714rem;line-height:1.8571rem;position:relative;width:100%}.xm-channels-chat-item[data-v-55e1a01a]>.row{position:relative;z-index:1}.xm-channels-chat-item[data-v-55e1a01a] .gif img{display:inline-block;width:100%;height:200px;-o-object-fit:contain;object-fit:contain}.xm-channels-chat-item[data-v-55e1a01a] .details{border-radius:0 10px 10px 10px;padding:12px 16px;background-color:#2a4e55;position:relative}@media screen and (max-width:767px){.xm-channels-chat-item[data-v-55e1a01a] .details{padding:15px 15px 10px}}.xm-channels-chat-item[data-v-55e1a01a] .details .left-details{width:100%}.xm-channels-chat-item[data-v-55e1a01a] .details .left-details .user-details{margin-bottom:5px}@media screen and (max-width:767px){.xm-channels-chat-item[data-v-55e1a01a] .details .left-details .user-details{margin-bottom:0}}.xm-channels-chat-item[data-v-55e1a01a] .details .left-details .user-details .message-info{justify-content:space-between;align-items:center}.xm-channels-chat-item[data-v-55e1a01a] .details:before{content:\"\";background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;position:absolute;top:0;left:-10px;width:16px;height:24px;z-index:0}.xm-channels-chat-item[data-v-55e1a01a] .details .name{color:#ffaf23;font-weight:500}.xm-channels-chat-item[data-v-55e1a01a] .details .date,.xm-channels-chat-item[data-v-55e1a01a] .details .is-edited{font-size:.8571rem;font-weight:300;line-height:1rem;letter-spacing:-.18px;opacity:.5}.xm-channels-chat-item[data-v-55e1a01a] .details .is-edited{margin-left:0}.xm-channels-chat-item[data-v-55e1a01a] .details ._message{opacity:.87;font-size:1rem;white-space:pre-wrap;word-break:break-word;line-height:1.5rem}.xm-channels-chat-item[data-v-55e1a01a] .details ._message a{color:#fff}.xm-channels-chat-item[data-v-55e1a01a] .details ._message span{display:inline-block;font-size:0}.xm-channels-chat-item[data-v-55e1a01a] .details ._message span .mention{color:#886bf2;font-weight:400;font-size:1rem}.xm-channels-chat-item[data-v-55e1a01a] .details .reply{border-left:2px solid #fff;padding-left:15px;margin-top:10px}.xm-channels-chat-item[data-v-55e1a01a] .details .reply .reply-media-container{width:38px;height:38px;border-radius:4px;margin-right:10px}.xm-channels-chat-item[data-v-55e1a01a] .details .reply .reply-media-container img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.xm-channels-chat-item[data-v-55e1a01a] .details .reply .reply-name{font-size:.9286rem;line-height:1.1429rem;opacity:.67;margin-bottom:3px}.xm-channels-chat-item[data-v-55e1a01a] .details .reply .reply-message{font-size:12px;line-height:14px;letter-spacing:-.18px;opacity:.5;white-space:pre-wrap;word-break:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.xm-channels-chat-item[data-v-55e1a01a] .details .reply .reply-message a{color:#fff}.xm-channels-chat-item[data-v-55e1a01a] .details .actions{opacity:0}@media screen and (max-width:1180px){.xm-channels-chat-item[data-v-55e1a01a] .details .actions{opacity:1}}.xm-channels-chat-item[data-v-55e1a01a] .details.no-text{padding-bottom:3px}@media screen and (max-width:767px){.xm-channels-chat-item[data-v-55e1a01a] .details.no-text{padding-bottom:2px}}.xm-channels-chat-item[data-v-55e1a01a] .chat-options{position:absolute;top:0;left:0;z-index:2;min-width:135px;border-radius:8px;background-color:#08252c;padding:20px 0 10px}.xm-channels-chat-item[data-v-55e1a01a] .chat-options .option{font-size:1.1429rem;font-weight:300;display:flex;flex-wrap:wrap;align-items:center;padding:0 20px 10px;cursor:pointer}.xm-channels-chat-item[data-v-55e1a01a] .chat-options .option ._icon{display:flex;flex-wrap:wrap;width:35px}.xm-channels-chat-item[data-v-55e1a01a] .chat-options .option._delete{color:#f85454}.xm-channels-chat-item[data-v-55e1a01a]:before{position:absolute;top:-2px;left:-30px;width:calc(100% + 60px);height:calc(100% + 4px);background-color:#557278;content:\"\";z-index:0;opacity:0;transition:.3s}.xm-channels-chat-item[data-v-55e1a01a]:not(:last-child){margin-bottom:12px}.xm-channels-chat-item[data-v-55e1a01a].is-active:before,.xm-channels-chat-item[data-v-55e1a01a]:hover .details .actions{opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=82.js.map