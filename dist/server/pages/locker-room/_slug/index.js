exports.ids = [44];
exports.modules = {

/***/ 1333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locker-room/_slug/index.vue?vue&type=template&id=01523fe8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xp-locker-room"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/locker-room/_slug/index.vue?vue&type=template&id=01523fe8&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locker-room/_slug/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'PageLockerRoom',
  async asyncData({
    app,
    route,
    redirect
  }) {
    var _route$params;
    const slug = route === null || route === void 0 ? void 0 : (_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.slug;
    const {
      getLockerRoom
    } = await app.$api.getLockerRoom({
      slug
    });
    if (!getLockerRoom) redirect('/locker-room/explore');
    const {
      defaultChannelSlug
    } = getLockerRoom || {};
    redirect(`/locker-room/${slug}/${defaultChannelSlug}`);
  }
});
// CONCATENATED MODULE: ./pages/locker-room/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var locker_room_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/locker-room/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  locker_room_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "25cd8b80"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map