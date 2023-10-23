exports.ids = [46];
exports.modules = {

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locker-room/explore/index.vue?vue&type=template&id=22003471&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('XPExploreClubs',{attrs:{"isLoading":_vm.isLoading,"sportsData":_vm.sportsData}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/locker-room/explore/index.vue?vue&type=template&id=22003471&lang=pug&

// EXTERNAL MODULE: external "vuex-map-fields"
var external_vuex_map_fields_ = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/meta.js
var meta = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locker-room/explore/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var explorevue_type_script_lang_js_ = ({
  name: 'PageLockerRoomCommunities',
  components: {
    XPExploreClubs: () => __webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(null, 1302))
  },
  mixins: [meta["a" /* default */]],
  layout: 'locker-room',
  data() {
    return {
      isLoading: true,
      sportsData: []
    };
  },
  computed: {
    ...Object(external_vuex_map_fields_["mapFields"])('locker-room', ['lockerRoomActive'])
  },
  created() {
    this.metaTitle = 'Explore to find your sporting league or club - FX1';
  },
  async mounted() {
    await this.fnGetSports();
    this.lockerRoomActive = null;
    const params = {
      pageName: 'Locker room',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  },
  methods: {
    async fnGetSports() {
      try {
        const {
          getSports: {
            items
          }
        } = await this.$api.getSports();
        this.sportsData = items;
      } catch (error) {} finally {
        this.isLoading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/locker-room/explore/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var locker_room_explorevue_type_script_lang_js_ = (explorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/locker-room/explore/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  locker_room_explorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32e45009"
  
)

/* harmony default export */ var explore = __webpack_exports__["default"] = (component.exports);

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