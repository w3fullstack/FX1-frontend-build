(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1973:function(t,e,n){var content=n(2352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("4c92deae",content,!0,{sourceMap:!1})},2351:function(t,e,n){"use strict";n(1973)},2352:function(t,e,n){var o=n(34)(!1);o.push([t.i,".xm-channels-chat-lightbox[data-v-d838b874]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:999}.xm-channels-chat-lightbox[data-v-d838b874] .back-drop{background-color:rgba(0,0,0,.8);position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.xm-channels-chat-lightbox[data-v-d838b874] .close{position:absolute;top:30px;right:30px;z-index:2;cursor:pointer}.xm-channels-chat-lightbox[data-v-d838b874] .media-slider{width:100%;height:100%}.xm-channels-chat-lightbox[data-v-d838b874] .media-slider .hooper .hooper-list .hooper-track .hooper-slide .media-container{height:100%}.xm-channels-chat-lightbox[data-v-d838b874] .slider-navigation .btn-navigation{position:absolute;top:0;bottom:0;z-index:1;cursor:pointer}.xm-channels-chat-lightbox[data-v-d838b874] .slider-navigation .btn-navigation.btn-prev{left:20px}.xm-channels-chat-lightbox[data-v-d838b874] .slider-navigation .btn-navigation.btn-next{right:20px}",""]),t.exports=o},2654:function(t,e,n){"use strict";n.r(e);n(17),n(16),n(14),n(8),n(19),n(13),n(20);var o=n(0),r=n(5),c=(n(27),n(36)),l=n(1409);n(1410);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"XMChannelsChatLightbox",components:{Hooper:l.a,Slide:l.b},data:function(){return{show:!1,initialSlide:0}},computed:h(h({},Object(c.c)({getMediaLightbox:"media/getMediaLightbox"})),{},{hooperSettings:function(){return{itemsToShow:1,itemsToSlide:1,wheelControl:!1,mouseDrag:!1,infiniteScroll:!0}}}),beforeMount:function(){window.addEventListener("keyup",this.onKeyUp)},mounted:function(){var t=this;this.$root.$on("evtRtShowLightbox",(function(e){t.show=null==e?void 0:e.show,t.initialSlide=null==e?void 0:e.initialSlide}))},beforeDestroy:function(){window.removeEventListener("keyup",this.onKeyUp)},methods:h(h({},Object(c.b)({setMediaLightbox:"media/setMediaLightbox"})),{},{fnPrevSlide:function(){this.$refs.mediaSlider.slidePrev()},fnNextSlide:function(){this.$refs.mediaSlider.slideNext()},fnHideLightbox:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setMediaLightbox([]);case 2:t.show=!1;case 3:case"end":return e.stop()}}),e)})))()},onKeyUp:function(t){"Escape"===t.key&&this.fnHideLightbox()}})},v=(n(2351),n(10)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"xm-channels-chat-lightbox"},[n("div",{staticClass:"back-drop",on:{click:function(e){return e.preventDefault(),t.fnHideLightbox()}}}),n("div",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.fnHideLightbox()}}},[n("b-icon",{attrs:{icon:"close",size:"is-medium"}})],1),n("div",{staticClass:"media-slider"},[n("hooper",{ref:"mediaSlider",staticStyle:{height:"100%"},attrs:{settings:t.hooperSettings,"initial-slide":t.initialSlide}},t._l(t.getMediaLightbox,(function(e,o){return n("slide",{key:o},[n("div",{staticClass:"media-container row items-center justify-center",on:{click:function(e){return e.target!==e.currentTarget?null:(e.preventDefault(),t.fnHideLightbox())}}},[n("nuxt-img",{attrs:{src:e.src}})],1)])})),1)],1),t.getMediaLightbox.length>1?n("div",{staticClass:"slider-navigation"},[n("div",{staticClass:"btn-navigation btn-prev row items-center",on:{click:function(e){return e.preventDefault(),t.fnPrevSlide()}}},[n("b-icon",{attrs:{icon:"chevron-left",size:"is-large"}})],1),n("div",{staticClass:"btn-navigation btn-next row items-center",on:{click:function(e){return e.preventDefault(),t.fnNextSlide()}}},[n("b-icon",{attrs:{icon:"chevron-right",size:"is-large"}})],1)]):t._e()]):t._e()}),[],!1,null,"d838b874",null);e.default=component.exports}}]);