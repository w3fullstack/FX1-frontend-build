exports.ids = [34];
exports.modules = {

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/boss-membership.vue?vue&type=template&id=5b7a6f34&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BossMembership')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/boss-membership.vue?vue&type=template&id=5b7a6f34&lang=pug&

// EXTERNAL MODULE: ./mixins/meta.js
var meta = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/boss-membership.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var boss_membershipvue_type_script_lang_js_ = ({
  name: 'PageBossMembership',
  components: {
    BossMembership: () => __webpack_require__.e(/* import() */ 142).then(__webpack_require__.bind(null, 1343))
  },
  mixins: [meta["a" /* default */]],
  layout: 'boss-membership',
  // async beforeCreate() {
  //   const isLoggedIn = this.$store.state.auth.isLoggedIn
  //   const onHomePageLoad = this.$store.state.app.onHomePageLoad

  //   if (isLoggedIn && !onHomePageLoad) {
  //     const {
  //       Me: { Supporting },
  //     } = await this.$api.getMyProfileSupporting()

  //     if (!Supporting) return
  //     if (Supporting.length) {
  //       this.$router.push({
  //         path: `/locker-room/${Supporting[0]?.slug}/${Supporting[0]?.defaultChannelSlug}`,
  //       })
  //       return
  //     }

  //     this.$router.push({
  //       path: '/locker-room/explore',
  //     })
  //   }
  // },
  created() {
    this.metaTitle = 'Boss Membership-FX1';
  },
  mounted() {
    const params = {
      pageName: 'Token',
      isLoggedIn: this.isLoggedIn
    };
    this.$mixpanelClient.trackViewPage(params);
  }
});
// CONCATENATED MODULE: ./pages/boss-membership.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_boss_membershipvue_type_script_lang_js_ = (boss_membershipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/boss-membership.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_boss_membershipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "794bf4e2"
  
)

/* harmony default export */ var boss_membership = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=boss-membership.js.map