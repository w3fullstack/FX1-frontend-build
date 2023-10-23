exports.ids = [115];
exports.modules = {

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_81c48c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(957);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_81c48c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_81c48c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_81c48c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_style_index_0_id_81c48c9a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-channels-chat-item-image[data-v-81c48c9a]{width:100%;height:100%;cursor:pointer}.xa-channels-chat-item-image[data-v-81c48c9a] img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Channels/ChatItem/Image.vue?vue&type=template&id=81c48c9a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-channels-chat-item-image",on:{"click":function($event){$event.preventDefault();return _vm.$emit('click', $event)}}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.photoURL))+" data-v-81c48c9a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/Channels/ChatItem/Image.vue?vue&type=template&id=81c48c9a&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Channels/ChatItem/Image.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var Imagevue_type_script_lang_js_ = ({
  name: 'XAChannelsChatItemImage',
  props: {
    media: {
      type: null,
      default: null
    },
    index: {
      type: Number,
      default: 0
    },
    scrollToBottom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imgURL: null
    };
  },
  computed: {
    photoURL() {
      var _this$media;
      if (this.file) {
        this.fnResizeImage();
      }
      return this.imgURL || ((_this$media = this.media) === null || _this$media === void 0 ? void 0 : _this$media.PhotoURL) || '';
    },
    file() {
      var _this$media2;
      return ((_this$media2 = this.media) === null || _this$media2 === void 0 ? void 0 : _this$media2.file) || null;
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      setMediaLightbox: 'media/setMediaLightbox'
    }),
    async fnResizeImage() {
      const file = this.file;
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
      if ((imgNaturalWidth || imgNaturalHeight) <= 640) {
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
      const [maxWidth, maxHeight] = [640, 640];
      const [imgWidth, imgHeight] = [imgNaturalWidth, imgNaturalHeight];
      const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
      canvas.width = imgWidth * ratio;
      canvas.height = imgHeight * ratio;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.imgURL = canvas.toDataURL('image/png', 1);
    },
    fnScrollToBottom() {
      if (!this.scrollToBottom) return;
      this.$root.$emit('evtRtScrollToBottom');
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/Channels/ChatItem/Image.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChatItem_Imagevue_type_script_lang_js_ = (Imagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/Channels/ChatItem/Image.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ChatItem_Imagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "81c48c9a",
  "27cfef7c"
  
)

/* harmony default export */ var ChatItem_Image = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("729f40c2", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=115.js.map