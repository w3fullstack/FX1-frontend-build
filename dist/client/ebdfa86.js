(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1975:function(e,t,n){var content=n(2356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("319baae2",content,!0,{sourceMap:!1})},2355:function(e,t,n){"use strict";n(1975)},2356:function(e,t,n){var r=n(34)(!1);r.push([e.i,".xa-channels-account[data-v-13d91730]{opacity:.5}.xa-channels-account[data-v-13d91730].is-supported{opacity:1;cursor:pointer}",""]),e.exports=r},2656:function(e,t,n){"use strict";n.r(t);n(17),n(16),n(14),n(8),n(19),n(13),n(20);var r=n(5),o=n(11);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"XAChannelsAccount",computed:l(l(l({},Object(o.b)("app",["showOnlineMembers"])),Object(o.b)("locker-room",["lockerRoomActive"])),{},{title:function(){return this.showOnlineMembers?"Hide member list":"Show member list"},isSupported:function(){var e;return(null===(e=this.lockerRoomActive)||void 0===e?void 0:e.isSupported)||!1}}),methods:{fnToggleOnlineMembers:function(){this.isSupported&&(this.showOnlineMembers=!this.showOnlineMembers)}}},O=(n(2355),n(10)),component=Object(O.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xa-channels-account",class:e.isSupported&&"is-supported",attrs:{title:e.isSupported&&e.title},on:{click:function(t){return t.preventDefault(),e.fnToggleOnlineMembers()}}},[n("b-icon",{attrs:{icon:"account-multiple-outline"}})],1)}),[],!1,null,"13d91730",null);t.default=component.exports}}]);