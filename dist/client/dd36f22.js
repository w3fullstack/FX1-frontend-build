(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1604:function(t,e,n){var r=n(635),o=n(636);t.exports=function(source,t,object,e){var n=!object;object||(object={});for(var c=-1,f=t.length;++c<f;){var l=t[c],d=e?e(object[l],source[l],l,object,source):void 0;void 0===d&&(d=source[l]),n?o(object,l,d):r(object,l,d)}return object}},1688:function(t,e,n){var r=n(647),o=n(2155),c=n(379);t.exports=function(object){return c(object)?r(object,!0):o(object)}},1689:function(t,e,n){var r=n(643);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},1897:function(t,e,n){var r=n(391),o=n(1898),c=n(639),f=n(646),l=Object.getOwnPropertySymbols?function(object){for(var t=[];object;)r(t,c(object)),object=o(object);return t}:f;t.exports=l},1898:function(t,e,n){var r=n(648)(Object.getPrototypeOf,Object);t.exports=r},1899:function(t,e,n){var content=n(2175);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("e5bf87fe",content,!0,{sourceMap:!1})},1900:function(t,e,n){var content=n(2177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("09ad1560",content,!0,{sourceMap:!1})},1901:function(t,e,n){var content=n(2179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("7c1ad4ee",content,!0,{sourceMap:!1})},1902:function(t,e,n){var content=n(2181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("d13a3f74",content,!0,{sourceMap:!1})},1903:function(t,e,n){var content=n(2183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("67e8f7b9",content,!0,{sourceMap:!1})},2150:function(t,e,n){var r=n(2151);t.exports=function(t){return r(t,5)}},2151:function(t,e,n){var r=n(392),o=n(2152),c=n(635),f=n(2153),l=n(2154),d=n(2157),x=n(2158),v=n(2159),m=n(2160),h=n(644),j=n(2161),y=n(629),w=n(2162),O=n(2163),A=n(2168),_=n(114),k=n(393),M=n(2170),C=n(152),S=n(2172),T=n(288),$=n(1688),L="[object Arguments]",P="[object Function]",D="[object Object]",N={};N[L]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object DataView]"]=N["[object Boolean]"]=N["[object Date]"]=N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Map]"]=N["[object Number]"]=N[D]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object Symbol]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Error]"]=N[P]=N["[object WeakMap]"]=!1,t.exports=function t(e,n,R,X,object,B){var E,U=1&n,I=2&n,F=4&n;if(R&&(E=object?R(e,X,object,B):R(e)),void 0!==E)return E;if(!C(e))return e;var z=_(e);if(z){if(E=w(e),!U)return x(e,E)}else{var G=y(e),J=G==P||"[object GeneratorFunction]"==G;if(k(e))return d(e,U);if(G==D||G==L||J&&!object){if(E=I||J?{}:A(e),!U)return I?m(e,l(E,e)):v(e,f(E,e))}else{if(!N[G])return object?e:{};E=O(e,G,U)}}B||(B=new r);var V=B.get(e);if(V)return V;B.set(e,E),S(e)?e.forEach((function(r){E.add(t(r,n,R,r,e,B))})):M(e)&&e.forEach((function(r,o){E.set(o,t(r,n,R,o,e,B))}));var W=z?void 0:(F?I?j:h:I?$:T)(e);return o(W||e,(function(r,o){W&&(r=e[o=r]),c(E,o,t(r,n,R,o,e,B))})),E}},2152:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},2153:function(t,e,n){var r=n(1604),o=n(288);t.exports=function(object,source){return object&&r(source,o(source),object)}},2154:function(t,e,n){var r=n(1604),o=n(1688);t.exports=function(object,source){return object&&r(source,o(source),object)}},2155:function(t,e,n){var r=n(152),o=n(641),c=n(2156),f=Object.prototype.hasOwnProperty;t.exports=function(object){if(!r(object))return c(object);var t=o(object),e=[];for(var n in object)("constructor"!=n||!t&&f.call(object,n))&&e.push(n);return e}},2156:function(t,e){t.exports=function(object){var t=[];if(null!=object)for(var e in Object(object))t.push(e);return t}},2157:function(t,e,n){(function(t){var r=n(105),o=e&&!e.nodeType&&e,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,f=c&&c.exports===o?r.Buffer:void 0,l=f?f.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=l?l(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(155)(t))},2158:function(t,e){t.exports=function(source,t){var e=-1,n=source.length;for(t||(t=Array(n));++e<n;)t[e]=source[e];return t}},2159:function(t,e,n){var r=n(1604),o=n(639);t.exports=function(source,object){return r(source,o(source),object)}},2160:function(t,e,n){var r=n(1604),o=n(1897);t.exports=function(source,object){return r(source,o(source),object)}},2161:function(t,e,n){var r=n(645),o=n(1897),c=n(1688);t.exports=function(object){return r(object,c,o)}},2162:function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}},2163:function(t,e,n){var r=n(1689),o=n(2164),c=n(2165),f=n(2166),l=n(2167);t.exports=function(object,t,e){var n=object.constructor;switch(t){case"[object ArrayBuffer]":return r(object);case"[object Boolean]":case"[object Date]":return new n(+object);case"[object DataView]":return o(object,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return l(object,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(object);case"[object RegExp]":return c(object);case"[object Symbol]":return f(object)}}},2164:function(t,e,n){var r=n(1689);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}},2165:function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e}},2166:function(t,e,n){var r=n(197),o=r?r.prototype:void 0,c=o?o.valueOf:void 0;t.exports=function(symbol){return c?Object(c.call(symbol)):{}}},2167:function(t,e,n){var r=n(1689);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},2168:function(t,e,n){var r=n(2169),o=n(1898),c=n(641);t.exports=function(object){return"function"!=typeof object.constructor||c(object)?{}:r(o(object))}},2169:function(t,e,n){var r=n(152),o=Object.create,c=function(){function object(){}return function(t){if(!r(t))return{};if(o)return o(t);object.prototype=t;var e=new object;return object.prototype=void 0,e}}();t.exports=c},2170:function(t,e,n){var r=n(2171),o=n(613),c=n(640),f=c&&c.isMap,l=f?o(f):r;t.exports=l},2171:function(t,e,n){var r=n(629),o=n(189);t.exports=function(t){return o(t)&&"[object Map]"==r(t)}},2172:function(t,e,n){var r=n(2173),o=n(613),c=n(640),f=c&&c.isSet,l=f?o(f):r;t.exports=l},2173:function(t,e,n){var r=n(629),o=n(189);t.exports=function(t){return o(t)&&"[object Set]"==r(t)}},2174:function(t,e,n){"use strict";n(1899)},2175:function(t,e,n){var r=n(34)(!1);r.push([t.i,".xm-account-tabs-list[data-v-760f5ca7]{position:sticky;width:100%;height:-moz-fit-content;height:fit-content;max-width:244px;top:60px;padding:40px 28px}@media screen and (min-width:769px){.xm-account-tabs-list[data-v-760f5ca7]{display:block!important}}@media screen and (max-width:768px){.xm-account-tabs-list[data-v-760f5ca7]{max-width:unset;padding:24px 0}}.xm-account-tabs-list[data-v-760f5ca7] .divider{width:100%;height:1px;background-color:#2a4e55;margin:32px 0}@media screen and (max-width:768px){.xm-account-tabs-list[data-v-760f5ca7] .divider{margin:24px 20px}}.xm-account-tabs-list[data-v-760f5ca7] ul{display:flex;flex-direction:column;grid-gap:20px;gap:20px}.xm-account-tabs-list[data-v-760f5ca7] ul li a{display:inline-block;width:100%;padding:12px 20px;color:#fff}.xm-account-tabs-list[data-v-760f5ca7] ul li a.active{background-color:#2a4e55;border-radius:2px}.xm-account-tabs-list[data-v-760f5ca7] .logout{display:flex;align-items:center;grid-gap:14px;gap:14px;margin:0 20px;cursor:pointer}.xm-account-tabs-list[data-v-760f5ca7] .logout p{color:#f85454;font-size:16px}",""]),t.exports=r},2176:function(t,e,n){"use strict";n(1900)},2177:function(t,e,n){var r=n(34)(!1);r.push([t.i,".xm-account-tabs-content[data-v-0cefc6ab]{width:100%;padding:40px 28px}@media screen and (min-width:769px){.xm-account-tabs-content[data-v-0cefc6ab]{border-left:1px solid #2a4e55}}@media screen and (max-width:768px){.xm-account-tabs-content[data-v-0cefc6ab]{padding:24px 20px}}",""]),t.exports=r},2178:function(t,e,n){"use strict";n(1901)},2179:function(t,e,n){var r=n(34)(!1);r.push([t.i,".xt-account-breadcrumbs[data-v-0d751b66]{position:sticky;top:80px;background-color:#2a4e55;border-bottom:1px solid #385960;padding:10px 20px;z-index:1}@media screen and (min-width:769px){.xt-account-breadcrumbs[data-v-0d751b66]{display:none}}@media screen and (max-width:767px){.xt-account-breadcrumbs[data-v-0d751b66]{top:58px}}.xt-account-breadcrumbs[data-v-0d751b66] h2{font-size:22px}.xt-account-breadcrumbs[data-v-0d751b66] .back{margin-right:24px;cursor:pointer}",""]),t.exports=r},2180:function(t,e,n){"use strict";n(1902)},2181:function(t,e,n){var r=n(34)(!1);r.push([t.i,".xo-tabs[data-v-6dbe5470]{display:flex;width:100%}@media screen and (max-width:768px){.xo-tabs[data-v-6dbe5470]{flex-direction:column}}",""]),t.exports=r},2182:function(t,e,n){"use strict";n(1903)},2183:function(t,e,n){var r=n(34)(!1);r.push([t.i,".xp-account[data-v-1aea2d3f]{display:flex;flex-grow:1;background-color:#08252c}",""]),t.exports=r},2575:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(5),c=(n(27),n(67),n(191),n(8),n(24),n(17),n(16),n(14),n(19),n(13),n(20),n(36)),f=n(2150),l=n.n(f);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"XMAccountTabsList",props:{getRouterName:{type:Function,default:null}},computed:{isShowList:function(){return"/account"===this.$route.path},routes:function(){var t=this,e=l()(this.$router.options.routes);return e.find((function(t){return"account"===t.name})).children.map((function(e){return e.path="/account/".concat(e.path),e.name=t.getRouterName(e.name)||e.name,e})).reverse()}},methods:x(x({},Object(c.b)({authLogOut:"auth/authLogOut",clearAuthDetails:"auth/clearAuthDetails"})),{},{fnLogOut:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$fireMess.unSubscribeToTopic({topicName:t.userID}),e.next=3,t.authLogOut();case 3:return n=t.$root.ChatSocket?t.$root.ChatSocket.disconnect():null,e.next=6,t.$router.push({path:"/"});case 6:return e.next=8,t.clearAuthDetails();case 8:return t.$mixpanel.reset(),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))()}})},m=(n(2174),n(10)),h=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowList,expression:"isShowList"}],staticClass:"xm-account-tabs-list"},[r("ul",t._l(t.routes,(function(e){return r("li",{key:e.name},[r("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),0),r("div",{staticClass:"divider"}),r("ul",[r("li",[r("router-link",{attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1),r("li",[r("router-link",{attrs:{to:"/privacy"}},[t._v("Privacy Policy")])],1),r("li",[r("router-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)]),r("div",{staticClass:"divider"}),r("div",{staticClass:"logout",on:{click:function(e){return e.preventDefault(),t.fnLogOut()}}},[r("p",[t._v("Log out")]),r("img",{attrs:{src:n(623)}})])])}),[],!1,null,"760f5ca7",null).exports,j={name:"XMAccountTabsContent",computed:{isShowContent:function(){return"account"!==this.$route.name}}},y=(n(2176),Object(m.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowContent?n("div",{staticClass:"xm-account-tabs-content"},[n("nuxt-child")],1):t._e()}),[],!1,null,"0cefc6ab",null).exports),w={name:"XTAccountBreadcrumbs",props:{getRouterName:{type:Function,default:null}},computed:{isShowBackArrow:function(){return"account"!==this.$route.name},title:function(){return this.getRouterName(this.$route.name)}},methods:{fnGoBack:function(){this.$router.push({path:"/account"})}}},O=(n(2178),{name:"XOAccountTabs",components:{XMTabsList:h,XMTabsContent:y,XTAccountBreadcrumbs:Object(m.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xt-account-breadcrumbs"},[r("div",{staticClass:"row items-center"},[r("div",{staticClass:"left-breadcrumbs row items-center"},[t.isShowBackArrow?r("div",{staticClass:"back row",on:{click:function(e){return e.preventDefault(),t.fnGoBack()}}},[r("img",{attrs:{src:n(620)}})]):t._e(),r("h2",[t._v(t._s(t.title))])])])])}),[],!1,null,"0d751b66",null).exports},methods:{getRouterName:function(t){return{account:"My Account","account-settings":"Account Settings","account-linked-accounts":"Linked Accounts"}[t]}}}),A=(n(2180),{name:"XPAccount",components:{XOTabs:Object(m.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xo-tabs"},[n("XTAccountBreadcrumbs",{attrs:{getRouterName:t.getRouterName}}),n("XMTabsList",{attrs:{getRouterName:t.getRouterName}}),n("XMTabsContent")],1)}),[],!1,null,"6dbe5470",null).exports}}),_=(n(2182),Object(m.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xp-account"},[e("XOTabs")],1)}),[],!1,null,"1aea2d3f",null));e.default=_.exports}}]);