(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1090:function(e,t,n){var r=n(1095);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},1091:function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},1092:function(e,t,n){var r=n(380),o=n(614),c=n(615);e.exports=function(e,t){return c(o(e,t,r),e+"")}},1093:function(e,t,n){var r=n(1094),o=n(381),c=n(1098);e.exports=function(e,t,n){var d=e.length;if(d<2)return d?c(e[0]):[];for(var l=-1,v=Array(d);++l<d;)for(var h=e[l],f=-1;++f<d;)f!=l&&(v[l]=r(v[l]||h,e[f],t,n));return c(o(v,1),t,n)}},1094:function(e,t,n){var r=n(609),o=n(1090),c=n(1091),d=n(612),l=n(613),v=n(610);e.exports=function(e,t,n,h){var f=-1,m=o,x=!0,w=e.length,k=[],O=t.length;if(!w)return k;n&&(t=d(t,l(n))),h?(m=c,x=!1):t.length>=200&&(m=v,x=!1,t=new r(t));e:for(;++f<w;){var C=e[f],y=null==n?C:n(C);if(C=h||0!==C?C:0,x&&y==y){for(var D=O;D--;)if(t[D]===y)continue e;k.push(C)}else m(t,y,h)||k.push(C)}return k}},1095:function(e,t,n){var r=n(618),o=n(1096),c=n(1097);e.exports=function(e,t,n){return t==t?c(e,t,n):r(e,o,n)}},1096:function(e,t){e.exports=function(e){return e!=e}},1097:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},1098:function(e,t,n){var r=n(609),o=n(1090),c=n(1091),d=n(610),l=n(1099),v=n(611);e.exports=function(e,t,n){var h=-1,f=o,m=e.length,x=!0,w=[],k=w;if(n)x=!1,f=c;else if(m>=200){var O=t?null:l(e);if(O)return v(O);x=!1,f=d,k=new r}else k=t?[]:w;e:for(;++h<m;){var C=e[h],y=t?t(C):C;if(C=n||0!==C?C:0,x&&y==y){for(var D=k.length;D--;)if(k[D]===y)continue e;t&&k.push(y),w.push(C)}else f(k,y,n)||(k!==w&&k.push(y),w.push(C))}return w}},1099:function(e,t,n){var r=n(617),o=n(1100),c=n(611),d=r&&1/c(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=d},1100:function(e,t){e.exports=function(){}},1101:function(e,t,n){var r=n(379),o=n(189);e.exports=function(e){return o(e)&&r(e)}},1114:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNCAxLjQxTDEyLjU5IDBMNyA1LjU5TDEuNDEgMEwwIDEuNDFMNS41OSA3TDAgMTIuNTlMMS40MSAxNEw3IDguNDFMMTIuNTkgMTRMMTQgMTIuNTlMOC40MSA3TDE0IDEuNDFaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="},1115:function(e,t,n){var r=n(616),o=n(1092),c=n(1093),d=n(1101),l=o((function(e){return c(r(e,d))}));e.exports=l},1829:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return C}));var r=n(0),o=(n(27),n(8),n(13),n(1600)),c=n(2057),d=n.n(c);function l(){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,e.abrupt("return",d()(t,(function(e){return e.kind})));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e,t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var track;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.createLocalAudioTrack)(n?{deviceId:{exact:n}}:{});case 2:return track=e.sent,t.localParticipant.audioTracks.forEach((function(e){e.track.stop(),t.localParticipant.unpublishTrack(e.track)})),e.next=6,t.localParticipant.publishTrack(track);case 6:return e.abrupt("return",track.mediaStreamTrack.getSettings().deviceId);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var track;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.createLocalVideoTrack)(n?{deviceId:{exact:n}}:{facingMode:"user"});case 2:return track=e.sent,t.localParticipant.videoTracks.forEach((function(e){e.track.stop(),t.localParticipant.unpublishTrack(e.track)})),e.next=6,t.localParticipant.publishTrack(track);case 6:return e.abrupt("return",track.mediaStreamTrack.getSettings().deviceId);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){e.localParticipant.audioTracks.forEach((function(e){e.track.disable()}))}function k(e){e.localParticipant.videoTracks.forEach((function(e){e.track.disable()}))}function O(e){e.localParticipant.audioTracks.forEach((function(e){e.track.enable()}))}function C(e){e.localParticipant.videoTracks.forEach((function(e){e.track.enable()}))}},2009:function(e,t,n){var content=n(2424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("6bfdaea2",content,!0,{sourceMap:!1})},2058:function(e,t,n){var content=n(2532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("b6de0b76",content,!0,{sourceMap:!1})},2059:function(e,t,n){var content=n(2534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("b847762e",content,!0,{sourceMap:!1})},2423:function(e,t,n){"use strict";n(2009)},2424:function(e,t,n){var r=n(34)(!1);r.push([e.i,".xo-chat-video-toggle .btns[data-v-ec35d85c]{position:relative;padding:2px;display:flex;background-color:#2a4e55;border-radius:8px;margin-bottom:0}.xo-chat-video-toggle .btns .btn[data-v-ec35d85c]{cursor:pointer;padding:8px 15px;display:grid;align-content:center;justify-content:center;place-content:center;background-color:transparent;border-radius:7px;border:none}.xo-chat-video-toggle .btns .btn.current[data-v-ec35d85c]{background-color:#886bf2}.xo-chat-video-toggle .btns .unread[data-v-ec35d85c]{position:absolute;left:30%;top:21%;width:8px;height:8px;border-radius:50%;background-color:#f85454}",""]),e.exports=r},2531:function(e,t,n){"use strict";n(2058)},2532:function(e,t,n){var r=n(34)(!1);r.push([e.i,'.xo-video-mic-camera-controls[data-v-330c9260]{display:flex;grid-gap:16px;gap:16px;margin-left:25px}.xo-video-mic-camera-controls .media-container[data-v-330c9260]{display:flex;margin:2px;background-color:#2a4e55;border-radius:8px;position:relative}.xo-video-mic-camera-controls .media-container.on[data-v-330c9260]{background-color:#00a558}.xo-video-mic-camera-controls .media-container .btn[data-v-330c9260]{cursor:pointer;padding:8px;display:grid;align-content:center;justify-content:center;place-content:center;background-color:transparent;border:none}.xo-video-mic-camera-controls .media-container .btn[data-v-330c9260]:first-child{border-radius:7px 0 0 7px;padding-right:4px}.xo-video-mic-camera-controls .media-container .btn.arrow[data-v-330c9260]{border-radius:0 7px 7px 0;padding-left:4px}.xo-video-mic-camera-controls .media-container .btn.arrow .opened[data-v-330c9260]{transform:rotate(180deg)}.xo-video-mic-camera-controls .media-container .media-devices[data-v-330c9260]{width:295px;position:absolute;top:45px;right:0;padding:20px;box-shadow:0 4px 10px 0 rgba(10,39,46,.15);border-radius:5px;background-color:#fff}@media screen and (max-width:767px){.xo-video-mic-camera-controls .media-container .media-devices.audio[data-v-330c9260]{right:-80px}}.xo-video-mic-camera-controls .media-container .title-container[data-v-330c9260]{display:flex;align-items:center;margin-bottom:20px}.xo-video-mic-camera-controls .media-container .title-container__title[data-v-330c9260]{margin-left:20px;font-family:"Rotunda";font-size:14px;font-style:normal;font-weight:500;line-height:normal;letter-spacing:-.66px;color:#08252c}.xo-video-mic-camera-controls .media-container .divider[data-v-330c9260]{border-top:1px solid #c3cdcf;margin-top:16px;margin-bottom:16px}.xo-video-mic-camera-controls .media-container .devices[data-v-330c9260]>:not(:last-child){margin-bottom:16px}.xo-video-mic-camera-controls .media-container .devices .device-name_container[data-v-330c9260]{cursor:pointer;display:flex;align-items:center;justify-content:space-between}.xo-video-mic-camera-controls .media-container .devices .device-name_container p[data-v-330c9260]{width:85%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;line-height:24px;letter-spacing:-.66px;color:#0c353e}',""]),e.exports=r},2533:function(e,t,n){"use strict";n(2059)},2534:function(e,t,n){var r=n(34)(!1);r.push([e.i,'.header[data-v-7dfddc46]{padding:0 15px;border-bottom:1px solid #2a4e55}.header .default[data-v-7dfddc46]{display:grid;grid-template-columns:auto 1fr 1fr;grid-gap:10px;gap:10px;align-items:center}.header .default img[data-v-7dfddc46]{cursor:pointer}.header .default .navigation-btn[data-v-7dfddc46]{width:100%;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:18px 0;cursor:pointer;color:#94a6aa;font-weight:500;font-size:14px;line-height:25px}.header .default .navigation-btn img[data-v-7dfddc46]{margin-right:10px}.header .default .active[data-v-7dfddc46]{border-bottom:1px solid #fff;color:#fff}.header .creation[data-v-7dfddc46]{display:flex;align-items:center;justify-content:space-between;padding:10.9px 0}.header .creation p[data-v-7dfddc46]{font-weight:500;font-size:14px;line-height:25px;color:#fff}.header .creation .steps[data-v-7dfddc46]{font-weight:400;font-size:14px;line-height:15px;color:#94a6aa}.header .creation .close[data-v-7dfddc46]{cursor:pointer}.header .sub-navigation[data-v-7dfddc46]{display:flex;align-items:center;padding:20px 0;justify-content:space-between;position:relative}.header .sub-navigation[data-v-7dfddc46]:before{position:absolute;content:"";left:50%;top:0;width:calc(100% + 30px);display:block;height:1px;background:#2a4e55;transform:translateX(-50%)}.header .sub-navigation img[data-v-7dfddc46]{cursor:pointer}.header .sub-navigation .sub-left[data-v-7dfddc46]{display:flex;align-items:center;z-index:3}.header .sub-navigation .sub-left span[data-v-7dfddc46]{margin-left:10px;font-weight:400;font-size:14px;line-height:15px;color:#fff}.header .sub-navigation .sub-right[data-v-7dfddc46]{position:relative;z-index:3}.header .sub-navigation .sub-right .sub-menu[data-v-7dfddc46]{position:absolute;top:30px;left:-135px;background:#fff;padding:20px 25px;box-shadow:0 4px 10px rgba(10,39,46,.15);border-radius:5px;z-index:2}.header .sub-navigation .sub-right .sub-menu ul[data-v-7dfddc46]{display:flex;flex-direction:column;list-style-type:none}.header .sub-navigation .sub-right .sub-menu ul li[data-v-7dfddc46]{display:flex;align-items:center;font-weight:400;font-size:14px;line-height:15px;color:#0c353e;cursor:pointer}.header .sub-navigation .sub-right .sub-menu ul li span[data-v-7dfddc46]{margin-left:10px}.header .sub-navigation .sub-right .sub-menu ul li.leave-group[data-v-7dfddc46]{color:#f85454}.header .sub-navigation .sub-right .sub-menu ul li[data-v-7dfddc46]:not(:last-child){margin-bottom:20px}.header .members-header[data-v-7dfddc46]{display:flex;align-items:center;justify-content:space-between;padding:20px 0;position:relative}.header .members-header[data-v-7dfddc46]:before{position:absolute;content:"";left:50%;top:0;width:calc(100% + 30px);display:block;height:1px;background:#2a4e55;transform:translateX(-50%)}.header .members-header .members-left[data-v-7dfddc46]{font-weight:400;font-size:14px;line-height:15px;color:#94a6aa}.header .members-header .members-right[data-v-7dfddc46]{display:flex;align-items:center;justify-content:center}.header .members-header .members-right img[data-v-7dfddc46]{cursor:pointer;position:relative;z-index:3}.header[data-v-7dfddc46]  .explore-event-footer{display:none;position:relative;background:transparent;flex-direction:column;padding:12px 12px 0}.header[data-v-7dfddc46]  .explore-event-footer .left{margin-bottom:15px}.header[data-v-7dfddc46]  .explore-event-footer .chat{padding:0}@media screen and (max-width:427px){.header[data-v-7dfddc46]  .explore-event-footer .chat p{max-width:unset}}@media screen and (max-width:427px){.header[data-v-7dfddc46]  .explore-event-footer{display:block}}',""]),e.exports=r},2581:function(e,t,n){"use strict";n.r(t);n(17),n(16),n(14),n(8),n(19),n(13),n(20);var r=n(0),o=n(5),c=(n(27),n(383),n(11)),d=n(36),l=n(1102),v=n(2068);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={name:"XOChatVideoToggle",data:function(){return{modeOptions:[{name:"chat",iconUrl:"/explore-event/chat-icon.svg"},{name:"video",iconUrl:"/explore-event/video-icon.svg"}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("chats",["mode","unread"])),beforeMount:function(){this.mode="chat"},mounted:function(){var e=this;this.$root.$on("evtRtShowScrollToBottom",(function(t){t||"chat"!==e.mode||(e.unread=!1)}))}},m=f,x=(n(2423),n(10)),w=Object(x.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xo-chat-video-toggle"},[n("div",{staticClass:"btns"},[e._l(e.modeOptions,(function(option){return n("button",{staticClass:"btn",class:{current:option.name===e.mode},attrs:{type:"button"},on:{click:function(t){e.mode=option.name}}},[n("nuxt-img",{attrs:{src:option.iconUrl,width:"24",height:"24"}})],1)})),e.unread?n("div",{staticClass:"unread"}):e._e()],2)])}),[],!1,null,"ec35d85c",null).exports,k=n(1829);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var C={name:"XOVideoMicCameraControls",data:function(){return{isShowAudioDevices:!1,isShowVideoDevices:!1,audio:!1,video:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("chats",["room","audioDeviceId","audioPermissionsGranted","audioDevices","videoDeviceId","videoPermissionsGranted","videoDevices","audioOutputDeviceId","audioOutputDevices"])),watch:{audioDeviceId:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.audio){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,Object(k.d)(t.room,e);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),t.$sentry.captureException(n.t0);case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()},videoDeviceId:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.video){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,Object(k.e)(t.room,e);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),t.$sentry.captureException(n.t0);case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()},audio:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return n.next=3,Object(k.d)(t.room,t.audioDeviceId);case 3:t.audioDeviceId=n.sent,Object(k.f)(t.room),n.next=8;break;case 7:Object(k.b)(t.room);case 8:case"end":return n.stop()}}),n)})))()},video:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return n.next=3,Object(k.e)(t.room,t.videoDeviceId);case 3:t.videoDeviceId=n.sent,Object(k.g)(t.room),n.next=8;break;case 7:Object(k.c)(t.room);case 8:case"end":return n.stop()}}),n)})))()}},mounted:function(){var e=this;this.$root.$on("audioOff",(function(){e.toggleAudio(!1)})),this.$root.$on("videoOff",(function(){e.toggleVideo(!1)}))},methods:{connectDevice:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="audio"===e?k.d:k.e,n.next=4,r(t.room);case 4:return n.next=6,t.setDevicesList();case 6:t["audio"===e?"audioPermissionsGranted":"videoPermissionsGranted"]=!0,t[e]=!0,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),t.$sentry.captureException(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},toggleMenu:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=e,n.next="audio"===n.t0?3:"video"===n.t0?10:16;break;case 3:if(!t.audioPermissionsGranted){n.next=7;break}t.isShowAudioDevices=!t.isShowAudioDevices,n.next=9;break;case 7:return n.next=9,t.connectDevice("audio");case 9:return n.abrupt("break",16);case 10:if(!t.videoPermissionsGranted){n.next=14;break}t.isShowVideoDevices=!t.isShowVideoDevices,n.next=16;break;case 14:return n.next=16,t.connectDevice("video");case 16:case"end":return n.stop()}}),n)})))()},setDevicesList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.a)();case 2:(n=t.sent).audioinput&&(e.audioDevices=n.audioinput),n.videoinput&&(e.videoDevices=n.videoinput),n.audiooutput&&(e.audioOutputDevices=n.audiooutput);case 6:case"end":return t.stop()}}),t)})))()},toggleAudio:function(e){this.room&&this.audioPermissionsGranted&&(this.audio=null!=e?e:!this.audio)},toggleVideo:function(e){this.room&&this.videoPermissionsGranted&&(this.video=null!=e?e:!this.video)}}},y=C,D=(n(2531),Object(x.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xo-video-mic-camera-controls"},[n("div",{staticClass:"media-container",class:{on:e.audio}},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.toggleAudio()}}},[n("nuxt-img",{attrs:{src:e.audio?"/explore-event/microphone.svg":"/explore-event/microphone-off.svg",width:"24",height:"24"}})],1),n("button",{staticClass:"btn arrow",attrs:{type:"button"},on:{click:function(t){return e.toggleMenu("audio")}}},[e.audioPermissionsGranted?n("nuxt-img",{class:{opened:e.isShowAudioDevices},attrs:{src:"/explore-event/chevron.svg",width:"16",height:"16"}}):n("nuxt-img",{attrs:{src:"/explore-event/info-circle.svg",width:"16",height:"16"}})],1),e.isShowAudioDevices?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{events:["click"],handler:function(){e.isShowAudioDevices=!1}},expression:"{ events: ['click'], handler() { isShowAudioDevices = false } }"}],staticClass:"media-devices audio"},[e.audioDevices.length>0?[n("div",{staticClass:"title-container"},[n("nuxt-img",{attrs:{src:"/explore-event/microphone_dark.svg",width:"24",height:"24"}}),n("p",{staticClass:"title-container__title"},[e._v("Select microphone")])],1),n("div",{staticClass:"devices"},e._l(e.audioDevices,(function(t,r){return n("div",{key:t.deviceId,staticClass:"device-name_container"},[n("p",{on:{click:function(n){e.audioDeviceId=t.deviceId}}},[e._v(e._s(t.label||"audio device #"+(r+1)))]),t.deviceId===e.audioDeviceId?n("nuxt-img",{attrs:{src:"/explore-event/check-circle.svg",width:"24",height:"24"}}):e._e()],1)})),0)]:e._e(),e.audioDevices.length>0&&e.audioOutputDevices.length>0?n("div",{staticClass:"divider"}):e._e(),e.audioOutputDevices.length>0?[n("div",{staticClass:"title-container"},[n("nuxt-img",{attrs:{src:"/explore-event/speaker.svg",width:"24",height:"24"}}),n("p",{staticClass:"title-container__title"},[e._v("Select speaker")])],1),n("div",{staticClass:"devices"},e._l(e.audioOutputDevices,(function(t,r){return n("div",{key:t.deviceId,staticClass:"device-name_container"},[n("p",{on:{click:function(n){e.audioOutputDeviceId=t.deviceId}}},[e._v(e._s(t.label||"audio output device #"+(r+1)))]),t.deviceId===e.audioOutputDeviceId?n("nuxt-img",{attrs:{src:"/explore-event/check-circle.svg",width:"24",height:"24"}}):e._e()],1)})),0)]:e._e()],2):e._e()]),n("div",{staticClass:"media-container",class:{on:e.video}},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.toggleVideo()}}},[n("nuxt-img",{attrs:{src:e.video?"/explore-event/camera.svg":"/explore-event/camera-off.svg",width:"24",height:"24"}})],1),n("button",{staticClass:"btn arrow",attrs:{type:"button"},on:{click:function(t){return e.toggleMenu("video")}}},[e.videoPermissionsGranted?n("nuxt-img",{class:{opened:e.isShowVideoDevices},attrs:{src:"/explore-event/chevron.svg",width:"16",height:"16"}}):n("nuxt-img",{attrs:{src:"/explore-event/info-circle.svg",width:"16",height:"16"}})],1),e.isShowVideoDevices?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{events:["click"],handler:function(){e.isShowVideoDevices=!1}},expression:"{ events: ['click'], handler() { isShowVideoDevices = false } }"}],staticClass:"media-devices"},[e.videoDevices.length>0?[n("div",{staticClass:"title-container"},[n("nuxt-img",{attrs:{src:"/explore-event/camera_dark.svg",width:"24",height:"24"}}),n("p",{staticClass:"title-container__title"},[e._v("Select camera")])],1),n("div",{staticClass:"devices"},e._l(e.videoDevices,(function(t,r){return n("div",{key:t.deviceId,staticClass:"device-name_container"},[n("p",{on:{click:function(n){e.videoDeviceId=t.deviceId}}},[e._v(e._s(t.label||"video device #"+(r+1)))]),t.deviceId===e.videoDeviceId?n("nuxt-img",{attrs:{src:"/explore-event/check-circle.svg",width:"24",height:"24"}}):e._e()],1)})),0)]:e._e()],2):e._e()])])}),[],!1,null,"330c9260",null).exports);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var M={name:"XOChatNavigation",components:{XOExploreEventFooter:v.a,XOChatVideoToggle:w,XOVideoMicCameraControls:D},mixins:[l.a],props:{currentStep:{type:Number,required:!0},totalSteps:{type:Number,required:!0},activeChat:{type:String,required:!0},privateChannel:{type:Object,default:function(){}},game:{type:Object,default:function(){}},lockerRoom:{type:Object,default:function(){}}},data:function(){return{chat:this.activeChat||null,layout:"default",chatExist:!1,showSubMenu:!1,videoTabMounted:!1}},computed:_(_(_({},Object(c.b)("user",["userID"])),Object(d.c)({mode:"chats/getMode"})),{},{membersCount:function(){return"private-members"===this.chat?this.privateChannel?"".concat(this.privateChannel.Roles.Joiners.length+this.privateChannel.Roles.Owners.length):0:"public-members"===this.chat&&this.lockerRoom?"".concat(this.lockerRoom.ChannelGroups[0].Channels[0].Roles.Joiners.length+this.lockerRoom.ChannelGroups[0].Channels[0].Roles.Owners.length):0}}),watch:{activeChat:{handler:function(e){this.chat=e}},mode:function(e){this.videoTabMounted||"video"!==e||(this.videoTabMounted=!0)}},methods:{hide:function(){this.$emit("hide"),this.showPrivate()},switchChat:function(e){this.showSubMenu=!1,this.$emit("switchChat",e)},closeCreation:function(){this.showPublic()},showPrivate:function(){this.$emit("switchChat","private")},showPublic:function(){this.$emit("switchChat","public")},showMenu:function(){this.showSubMenu=!0},showMembers:function(e){this.showSubMenu=!1,this.$emit("switchChat",e)},closeMembers:function(){this.showSubMenu=!1,this.$emit("switchChat","private")},leavePrivateChannel:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.leavePrivateChannel({privateChannelID:e.privateChannel.id});case 2:e.$emit("setPrivateChannel",null);case 3:case"end":return t.stop()}}),t)})))()},showModal:function(){var e,t,n,r,o,c,d,l,details={privateChannelID:this.privateChannel.id,gameID:this.$route.params.slug,teams:{team1:(null===(e=this.game)||void 0===e?void 0:e.team1Name)||(null===(t=this.game)||void 0===t?void 0:t.team1DisplayName)||(null===(n=this.game)||void 0===n?void 0:n.team1Nickname)||(null===(r=this.game)||void 0===r?void 0:r.team1City),team2:(null===(o=this.game)||void 0===o?void 0:o.team2Name)||(null===(c=this.game)||void 0===c?void 0:c.team2DisplayName)||(null===(d=this.game)||void 0===d?void 0:d.team2Nickname)||(null===(l=this.game)||void 0===l?void 0:l.team2City)}};this.fnShowInvitationDialog(details)},showLeaveModal:function(){var details={privateChannelID:this.privateChannel.id};this.fnShowLeaveGroupDialog(details)}}},P=(n(2533),Object(x.a)(M,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},["public"===e.chat||"members"===e.chat||e.privateChannel?r("XOExploreEventFooter",{attrs:{game:e.game,privateChannel:e.privateChannel,insideNavigation:!0}}):e._e(),"private"!==e.chat||e.privateChannel?r("div",{staticClass:"default"},[r("img",{attrs:{src:n(1399)},on:{click:e.hide}}),e.isLoggedIn?r("div",{staticClass:"navigation-btn",class:{active:"private"===e.chat||"private-members"===e.activeChat},on:{click:function(t){return e.switchChat("private")}}},[e._v(e._s(e.privateChannel?e.privateChannel.name:"My private group"))]):e._e(),r("div",{staticClass:"navigation-btn",class:{active:"public"===e.chat},on:{click:function(t){return e.switchChat("public")}}},[e._v("Public")])]):r("div",{staticClass:"creation"},[r("p",[e._v("Create a private group")]),r("div",{staticClass:"steps"},[r("span",[e._v("step "+e._s(e.currentStep)+" of "+e._s(e.totalSteps))])]),r("img",{staticClass:"close",attrs:{src:n(1406)},on:{click:e.closeCreation}})]),"private"===e.chat&&e.privateChannel?r("div",{staticClass:"sub-navigation"},[r("div",{staticClass:"sub-left"},[r("XOChatVideoToggle"),e.videoTabMounted?r("XOVideoMicCameraControls",{directives:[{name:"show",rawName:"v-show",value:"video"===e.mode,expression:"mode === 'video'"}]}):e._e()],1),r("div",{staticClass:"sub-right",on:{click:e.showMenu}},[r("img",{attrs:{src:n(1403)}}),e.showSubMenu?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.showSubMenu=!1},expression:"() => showSubMenu = false"}],staticClass:"sub-menu"},[r("ul",[r("li",{on:{click:function(t){return e.showMembers("private-members")}}},[r("img",{attrs:{src:n(1405)}}),r("span",[e._v("Members")])]),r("li",{on:{click:e.showModal}},[r("img",{attrs:{src:n(1402)}}),r("span",[e._v("Copy link to share")])]),e.privateChannel&&e.privateChannel.Roles.Owners[0].User.id!==e.userID?r("li",{staticClass:"leave-group",on:{click:e.showLeaveModal}},[r("img",{attrs:{src:n(1404)}}),r("span",[e._v("Leave Group")])]):e._e()])]):e._e()])]):e._e(),"private-members"===e.chat||"public-members"===e.chat?r("div",{staticClass:"members-header"},[r("div",{staticClass:"members-left"},[r("span",[e._v("MEMBERS "+e._s(e.membersCount))])]),r("div",{staticClass:"members-right"},[r("img",{staticClass:"close",attrs:{src:n(1401)},on:{click:e.closeMembers}})])]):e._e()],1)}),[],!1,null,"7dfddc46",null));t.default=P.exports}}]);