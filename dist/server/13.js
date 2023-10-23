exports.ids = [13];
exports.modules = {

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_6080e861_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(898);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_6080e861_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_6080e861_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_6080e861_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_style_index_0_id_6080e861_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xa-file-upload[data-v-6080e861]{display:block;width:50px;height:50px;border-radius:4px;margin-right:15px;margin-bottom:20px;background-color:#fff;position:relative}.xa-file-upload[data-v-6080e861] .img-file{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%;height:100%;border-radius:4px}.xa-file-upload[data-v-6080e861] ._delete{position:absolute;top:-8px;right:-8px;z-index:1;cursor:pointer}.xa-file-upload[data-v-6080e861].is-uploading .img-file{opacity:.5}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 1398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/FileUpload.vue?vue&type=template&id=6080e861&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xa-file-upload",class:_vm.isUploading && 'is-uploading'},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.backgroundImage))+" class=\"img-file\" data-v-6080e861>"),(_vm.isUploading)?_c('XALoader',{attrs:{"size":24}}):_c('div',{staticClass:"_delete",on:{"click":function($event){$event.preventDefault();_vm.fnDeleteImage(); _vm.$emit('delete', $event)}}},[_c('img',{attrs:{"src":__webpack_require__(620)}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/atoms/FileUpload.vue?vue&type=template&id=6080e861&scoped=true&lang=pug&

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(38);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/FileUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FileUploadvue_type_script_lang_js_ = ({
  name: 'XAFileUpload',
  components: {
    XALoader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 275))
  },
  props: {
    file: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      isUploading: true,
      backgroundImage: null,
      id: Object(external_uuid_["v4"])()
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      getMediaFiles: 'media/getMediaFiles'
    })
  },
  watch: {
    isUploading: {
      deep: true,
      immediate: true,
      handler(value) {
        if (!value) {
          const params = {
            objectID: this.id,
            objectType: 'Photo',
            isUploading: value
          };
          this.updateMediaMessages(params);
        }
      }
    }
  },
  async mounted() {
    await this.fnResizeImage();
    const params = {
      objectID: this.id,
      objectType: 'Photo',
      isUploading: this.isUploading,
      file: this.file
    };
    await this.setMediaMessages(params);
    const details = {
      file: this.backgroundImage,
      id: this.id
    };
    await this.mediaChannelUpload(details);
    this.isUploading = false;
  },
  methods: {
    ...Object(external_vuex_["mapActions"])({
      mediaChannelUpload: 'media/channelUpload',
      setMediaMessages: 'media/setMediaMessages',
      deleteMediaMessages: 'media/deleteMediaMessages',
      updateMediaMessages: 'media/updateMediaMessages'
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
      if ((imgNaturalWidth || imgNaturalHeight) <= 1024) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imgNaturalWidth;
        canvas.height = imgNaturalHeight;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        this.backgroundImage = canvas.toDataURL('image/png', 1);
        return;
      }

      // Resize the image with a canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const [maxWidth, maxHeight] = [1024, 1024];
      const [imgWidth, imgHeight] = [imgNaturalWidth, imgNaturalHeight];
      const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
      canvas.width = imgWidth * ratio;
      canvas.height = imgHeight * ratio;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.backgroundImage = canvas.toDataURL('image/png', 1);
    },
    async fnDeleteImage() {
      try {
        this.deleteMediaMessages(this.id);
        await this.$api.deleteImages({
          objectIDs: this.id
        });
      } catch (error) {}
    }
  }
});
// CONCATENATED MODULE: ./components/atoms/FileUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var atoms_FileUploadvue_type_script_lang_js_ = (FileUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/atoms/FileUpload.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_FileUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6080e861",
  "779ce7e1"
  
)

/* harmony default export */ var FileUpload = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSI4IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEMzNTNFIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF85Nl8zMTgxKSI+DQo8cGF0aCBkPSJNNS4zMTc4NyA1LjMxODEyTDEyLjY4MTUgMTIuNjgxOE0xMi42ODE1IDUuMzE4MTJMNS4zMTc4NyAxMi42ODE4TDEyLjY4MTUgNS4zMTgxMloiIHN0cm9rZT0iIzBDMzUzRSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk2XzMxODEiPg0KPHJlY3Qgd2lkdGg9IjkuODE4MTgiIGhlaWdodD0iOS44MTgxOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDkwODIgNC4wOTA4MikiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5d33fd2c", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=13.js.map