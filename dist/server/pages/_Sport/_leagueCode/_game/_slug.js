exports.ids = [29];
exports.modules = {

/***/ 1337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_Sport/_leagueCode/_game/_slug.vue?vue&type=template&id=979c57a4&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ExploreEvent',{ref:"explorevent",attrs:{"paramsValidationActive":_vm.paramsValidationActive,"lockerRoom":_vm.room},on:{"setLockerRoom":_vm.setLockerRoom}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_Sport/_leagueCode/_game/_slug.vue?vue&type=template&id=979c57a4&lang=pug&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(215);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/meta.js
var meta = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_Sport/_leagueCode/_game/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'XOLEventRoom',
  components: {
    ExploreEvent: () => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, 1356))
  },
  mixins: [meta["a" /* default */]],
  layout: 'explore-event',
  data() {
    return {
      game: {},
      paramsValidationActive: false,
      room: null
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('app', ['selectedGameEventRoom']),
    ...Object(external_vuex_map_fields_["mapFields"])('live', ['lockerRoomActive'])
  },
  async created() {
    var _this$$route$params, _this$game, _this$game2, _this$game3, _this$game4, _this$game5, _this$game6, _this$game7, _this$game8, _this$game9, _this$game10;
    if (!this.$route.params.leagueCode && !this.$route.params.game && !this.$route.params.slug) {
      await this.$router.push('/error');
      return;
    }
    this.paramsValidationActive = true;
    this.metaTitle = this.$route.params.game + ' | ' + this.$route.params.leagueCode.toUpperCase();
    const gameID = (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.slug;
    if (!this.selectedGameEventRoom) {
      if (gameID) {
        await this.$store.dispatch('locker-room/setLockerRoomLoading', true);
        const {
          getLockerRoom
        } = await this.$api.getLockerRoom({
          group: `Game:${gameID}`
        });
        if (!getLockerRoom) {
          await this.$router.push('/error');
          return;
        }
        this.room = getLockerRoom;
        this.game = getLockerRoom.Game;
        await this.$store.dispatch('locker-room/setLockerRoomLoading', false);
      }
    } else {
      this.game = JSON.parse(JSON.stringify(this.selectedGameEventRoom));
    }
    this.validateUrl();
    this.metaTitle = (((_this$game = this.game) === null || _this$game === void 0 ? void 0 : _this$game.team1Name) || ((_this$game2 = this.game) === null || _this$game2 === void 0 ? void 0 : _this$game2.team1DisplayName) || ((_this$game3 = this.game) === null || _this$game3 === void 0 ? void 0 : _this$game3.team1Nickname) || ((_this$game4 = this.game) === null || _this$game4 === void 0 ? void 0 : _this$game4.team1City)) + ' vs ' + (((_this$game5 = this.game) === null || _this$game5 === void 0 ? void 0 : _this$game5.team2Name) || ((_this$game6 = this.game) === null || _this$game6 === void 0 ? void 0 : _this$game6.team2DisplayName) || ((_this$game7 = this.game) === null || _this$game7 === void 0 ? void 0 : _this$game7.team2Nickname) || ((_this$game8 = this.game) === null || _this$game8 === void 0 ? void 0 : _this$game8.team2City)) + ' | ' + ((_this$game9 = this.game) === null || _this$game9 === void 0 ? void 0 : _this$game9.leagueCode.toUpperCase()) + ' | ' + external_moment_default()((_this$game10 = this.game) === null || _this$game10 === void 0 ? void 0 : _this$game10.date).local().format('DD MMMM YYYY');
  },
  mounted() {
    const params = {
      pageName: 'Event Room',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  beforeDestroy() {
    this.$store.dispatch('locker-room/setLockerRoomPrivateChat', null);
  },
  methods: {
    validateSportParam() {
      return this.$route.params.Sport.toLowerCase() === this.game.sport.replace(/\s/g, '-').toLowerCase();
    },
    validateLeagueCodeParam() {
      return this.$route.params.leagueCode.toLowerCase() === this.game.leagueCode.toLowerCase();
    },
    validateGameParam() {
      const gameString = `${this.game.team1Name || this.game.team1DisplayName || this.game.team1Nickname || this.game.team1City}` + '-vs-' + `${this.game.team2Name || this.game.team2DisplayName || this.game.team2Nickname || this.game.team2City}`;
      return this.$route.params.game.toLowerCase().replace(/\s/g, '-') === gameString.toLowerCase().replace(/\s/g, '-');
    },
    validateSlugParam() {
      return this.$route.params.slug.toLowerCase() === this.game.gameID.toString();
    },
    validateUrl() {
      const sport = this.validateSportParam();
      const leagueCode = this.validateLeagueCodeParam();
      const game = this.validateGameParam();
      const slug = this.validateSlugParam();
      if (!sport || !leagueCode || !game || !slug) {
        this.$router.push({
          path: '/error'
        });
      }
      this.paramsValidationActive = false;
    },
    async setLockerRoom() {
      var _this$$route$params2;
      const {
        getLockerRoom
      } = await this.$api.getLockerRoom({
        group: `Game:${(_this$$route$params2 = this.$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.slug}`
      });
      this.room = getLockerRoom;
    }
  }
});
// CONCATENATED MODULE: ./pages/_Sport/_leagueCode/_game/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var _game_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_Sport/_leagueCode/_game/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _game_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a45e5bb"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=_slug.js.map