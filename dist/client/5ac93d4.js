(window.webpackJsonp=window.webpackJsonp||[]).push([[88,15],{1090:function(e,t,n){var r=n(1095);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},1091:function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},1092:function(e,t,n){var r=n(380),o=n(614),c=n(615);e.exports=function(e,t){return c(o(e,t,r),e+"")}},1093:function(e,t,n){var r=n(1094),o=n(381),c=n(1098);e.exports=function(e,t,n){var l=e.length;if(l<2)return l?c(e[0]):[];for(var d=-1,f=Array(l);++d<l;)for(var m=e[d],v=-1;++v<l;)v!=d&&(f[d]=r(f[d]||m,e[v],t,n));return c(o(f,1),t,n)}},1094:function(e,t,n){var r=n(609),o=n(1090),c=n(1091),l=n(612),d=n(613),f=n(610);e.exports=function(e,t,n,m){var v=-1,x=o,h=!0,I=e.length,M=[],D=t.length;if(!I)return M;n&&(t=l(t,d(n))),m?(x=c,h=!1):t.length>=200&&(x=f,h=!1,t=new r(t));e:for(;++v<I;){var w=e[v],N=null==n?w:n(w);if(w=m||0!==w?w:0,h&&N==N){for(var j=D;j--;)if(t[j]===N)continue e;M.push(w)}else x(t,N,m)||M.push(w)}return M}},1095:function(e,t,n){var r=n(618),o=n(1096),c=n(1097);e.exports=function(e,t,n){return t==t?c(e,t,n):r(e,o,n)}},1096:function(e,t){e.exports=function(e){return e!=e}},1097:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},1098:function(e,t,n){var r=n(609),o=n(1090),c=n(1091),l=n(610),d=n(1099),f=n(611);e.exports=function(e,t,n){var m=-1,v=o,x=e.length,h=!0,I=[],M=I;if(n)h=!1,v=c;else if(x>=200){var D=t?null:d(e);if(D)return f(D);h=!1,v=l,M=new r}else M=t?[]:I;e:for(;++m<x;){var w=e[m],N=t?t(w):w;if(w=n||0!==w?w:0,h&&N==N){for(var j=M.length;j--;)if(M[j]===N)continue e;t&&M.push(N),I.push(w)}else v(M,N,n)||(M!==I&&M.push(N),I.push(w))}return I}},1099:function(e,t,n){var r=n(617),o=n(1100),c=n(611),l=r&&1/c(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=l},1100:function(e,t){e.exports=function(){}},1101:function(e,t,n){var r=n(379),o=n(189);e.exports=function(e){return o(e)&&r(e)}},1106:function(e,t,n){e.exports=n.p+"img/create-private.33d0f18.svg"},1107:function(e,t,n){e.exports=n.p+"img/EUROPALeague.0e8ac69.svg"},1108:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAxMUg3LjgzTDEzLjQyIDUuNDFMMTIgNEw0IDEyTDEyIDIwTDEzLjQxIDE4LjU5TDcuODMgMTNIMjBWMTFaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="},1109:function(e,t,n){e.exports=n.p+"img/bell.cc5e50d.svg"},1110:function(e,t,n){e.exports=n.p+"img/calendar.7b8ca8a.svg"},1111:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMy41MzQ5IDYuOTY0NDdDMTUuNDg3NSA4LjkxNzEgMTUuNDg3NSAxMi4wODI5IDEzLjUzNDkgMTQuMDM1NU02LjQ2MzgyIDE0LjAzNTVDNC41MTExOSAxMi4wODI5IDQuNTExMTkgOC45MTcwNyA2LjQ2MzgyIDYuOTY0NDVNNC4xMDY3OSAxNi4zOTI2QzAuODUyNDIzIDEzLjEzODIgMC44NTI0MjMgNy44NjE4MiA0LjEwNjc5IDQuNjA3NDVNMTUuODkxOSA0LjYwNzQ5QzE5LjE0NjMgNy44NjE4NiAxOS4xNDYzIDEzLjEzODIgMTUuODkxOSAxNi4zOTI2TTExLjY2NiAxMC41QzExLjY2NiAxMS40MjA1IDEwLjkxOTggMTIuMTY2NyA5Ljk5OTM1IDEyLjE2NjdDOS4wNzg4NyAxMi4xNjY3IDguMzMyNjggMTEuNDIwNSA4LjMzMjY4IDEwLjVDOC4zMzI2OCA5LjU3OTUzIDkuMDc4ODcgOC44MzMzNCA5Ljk5OTM1IDguODMzMzRDMTAuOTE5OCA4LjgzMzM0IDExLjY2NiA5LjU3OTUzIDExLjY2NiAxMC41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="},1112:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00Ljg1NzE0IDEyLjUwMDNMMTYgMTIuNTAwM005LjE0Mjg2IDcuMzU3NDJMNCAxMi41MDAzTDkuMTQyODYgMTcuNjQzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTIwIDE5VjYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"},1114:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNCAxLjQxTDEyLjU5IDBMNyA1LjU5TDEuNDEgMEwwIDEuNDFMNS41OSA3TDAgMTIuNTlMMS40MSAxNEw3IDguNDFMMTIuNTkgMTRMMTQgMTIuNTlMOC40MSA3TDE0IDEuNDFaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="},1115:function(e,t,n){var r=n(616),o=n(1092),c=n(1093),l=n(1101),d=o((function(e){return c(r(e,l))}));e.exports=d},1516:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTQsNEg3TDksMkgxNUwxNyw0SDIwQTIsMiAwIDAsMSAyMiw2VjE4QTIsMiAwIDAsMSAyMCwyMEg0QTIsMiAwIDAsMSAyLDE4VjZBMiwyIDAgMCwxIDQsNE0xMiw3QTUsNSAwIDAsMCA3LDEyQTUsNSAwIDAsMCAxMiwxN0E1LDUgMCAwLDAgMTcsMTJBNSw1IDAgMCwwIDEyLDdNMTIsOUEzLDMgMCAwLDEgMTUsMTJBMywzIDAgMCwxIDEyLDE1QTMsMyAwIDAsMSA5LDEyQTMsMyAwIDAsMSAxMiw5WiIgLz48L3N2Zz4="},1968:function(e,t,n){var content=n(2342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("1ca3f7ee",content,!0,{sourceMap:!1})},2341:function(e,t,n){"use strict";n(1968)},2342:function(e,t,n){var r=n(34)(!1);r.push([e.i,".xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .upload{width:100%;max-width:350px;height:215px;border:1px dashed #e5e5e5;border-radius:5px;margin-right:15px;font-size:1.1429rem;line-height:1.7143rem;letter-spacing:-.28px;position:relative}@media screen and (max-width:767px){.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .upload{width:calc(100% - 95px);height:80px}}.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .upload .drag-drop{color:rgba(0,0,0,.5)}@media screen and (max-width:767px){.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .upload .drag-drop{display:none}}.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .upload input[type=file]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;opacity:0;cursor:pointer}.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .avatar-container{width:80px;height:80px;border-radius:5px;border:1px solid #e5e5e5}.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .avatar-container .avatar{width:48px;height:48px;border-radius:50%;background-color:#e5e5e5;background-repeat:no-repeat;background-size:cover;background-position:50%}.xo-signup-step-2[data-v-55ab65d0] .form-container form .upload-container .avatar-container .avatar img{opacity:.5}.xo-signup-step-2[data-v-55ab65d0] .form-container form .actions .btn-next{width:255px!important}@media screen and (max-width:767px){.xo-signup-step-2[data-v-55ab65d0] .form-container form .actions .btn-next{width:calc(100% - 110px)!important}}.xo-signup-step-2[data-v-55ab65d0] .form-container form .actions .btn-skip{margin-left:20px}@media screen and (max-width:767px){.xo-signup-step-2[data-v-55ab65d0] .form-container form .actions .btn-skip{width:100%;max-width:95px;margin-left:15px}}",""]),e.exports=r},2649:function(e,t,n){"use strict";n.r(t);n(17),n(16),n(14),n(19),n(20);var r=n(0),o=n(5),c=(n(27),n(56),n(8),n(28),n(31),n(13),n(94),n(81),n(75),n(79),n(124),n(41)),l=n.n(c),d=n(11),f=n(36),m=n(382);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={validators:{username:function(e){return m.Validator.value(e).required("Username field is required.").custom((function(){if(!/^\w+$/.test(e))return"Please use only letters, numbers and underscore"})).minLength(3,"Please ensure your username is at least 3 characters in length and 18 characters maximum").maxLength(18,"Please ensure your username is at least 3 characters in length and 18 characters maximum")}},name:"XOSignUpStep2",components:{XMSignUpRightContent:function(){return n.e(5).then(n.bind(null,2645))},XAFormsInput:function(){return n.e(1).then(n.bind(null,2067))}},mixins:[n(1102).a],middleware:"refreshToken",data:function(){return{btnToDisable:"",isChecking:!1,usernameUniqueError:null,isSubmitting:!1}},computed:x(x({},Object(d.b)("signup",["username","email","password","firstName","lastName","avatar","avatarSocial","avatarCropped","signupLockerRoomSupporting","signupOwnerManagerInvite","signupMethod"])),{},{avatarStyles:function(){var e={backgroundImage:"url(".concat(this.avatarCropped,")")};return e},hasImage:function(){return!this.avatarCropped},isDisabledSubmitButton:function(){return this.usernameUniqueError}}),created:function(){this.fnConvertImageToBase64()},mounted:function(){var e=this;this.$root.$on("evtRtClearAvatarInput",(function(){e.$refs.avatarInput.value=null}));var t={pageName:"Sign-up",isLoggedIn:this.isLoggedIn};this.$mixpanelClient.trackViewPage(t)},methods:x(x({},Object(f.b)({mediaUpload:"media/upload",refreshToken:"auth/refreshToken"})),{},{fnConvertImageToBase64:function(){var e=this;if(this.avatarSocial){var t,img;t=this.avatarSocial,(img=new Image).setAttribute("crossOrigin","anonymous"),img.onload=Object(r.a)(regeneratorRuntime.mark((function t(){var canvas,n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(canvas=document.createElement("canvas")).width=img.width,canvas.height=img.height,canvas.getContext("2d").drawImage(img,0,0),n=canvas.toDataURL("image/png"),t.next=8,e.mediaUpload(n);case 8:r=t.sent,o=r.id,e.avatar.objectID=o,e.avatar.objectType="Photo",e.avatarCropped=n;case 13:case"end":return t.stop()}}),t)}))),img.src=t}},fnCreateUser:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$validate().then(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var input,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=17;break}return e.btnToDisable=t,n.prev=2,input={username:e.username,firstName:e.firstName,lastName:e.lastName,Avatar:"btn-skip"===t?e.avatar:null},o=e.$store.state.auth.token,n.next=7,e.$api.createUser({input:input},{Authorization:"Bearer ".concat(o)});case 7:return n.next=9,e.fnRefreshToken();case 9:return n.next=11,e.fnAfterCreateUser();case 11:n.next=17;break;case 13:n.prev=13,n.t0=n.catch(2),e.btnToDisable="",null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c||c.errors.forEach((function(t){e.$toast.success(t.message,{duration:5e3,position:"bottom-left",className:"fx1-success",iconPack:"mdi",icon:"alert-circle-outline"})}));case 17:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e){return n.apply(this,arguments)}}())},fnEditAvatar:function(e){var t=e;this.fnShowEditAvatarDialog(t)},fnAfterCreateUser:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,f,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(e){var t,n=null==e?void 0:e.toLowerCase();return(null==e||null===(t=e.charAt(0))||void 0===t?void 0:t.toUpperCase())+(null==n?void 0:n.slice(1))},o={username:e.username,emailAddress:e.email,avatar:e.avatarSocial?"Default":"Custom",registrationMethod:r(e.signupMethod),pageName:"Sign-up",avatarObjectID:(null===(n=e.avatar)||void 0===n?void 0:n.objectID)||null,invited:!!e.$route.query.accept},e.$mixpanelClient.trackRegisterAccount(o),e.fnFacebookEventSignup(),c=e.$store.state.auth.uid,l=e.$mixpanel.get_distinct_id(),e.$mixpanel.alias(c,l),t.next=9,e.fnSupportClub();case 9:return d=t.sent,f=d.urlSupport,t.next=13,e.fnAcceptInvite();case 13:if(m=t.sent,v=m.urlInvite,!f){t.next=18;break}return e.$router.push({path:f}),t.abrupt("return");case 18:if(!v){t.next=21;break}return e.$router.push({path:v}),t.abrupt("return");case 21:if(!e.$route.query.accept){t.next=25;break}return t.next=24,e.fnAcceptPrivateInviation();case 24:return t.abrupt("return");case 25:return t.next=27,e.$router.push({path:"/explore"});case 27:e.username=null,e.email=null,e.password=null,e.avatar={},e.avatarCropped=null,e.avatarSocial=null,e.firstName=null,e.lastName=null,e.signupMethod=null;case 36:case"end":return t.stop()}}),t)})))()},fnSupportClub:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.signupLockerRoomSupporting){t.next=2;break}return t.abrupt("return",{urlSupport:null});case 2:return n=e.signupLockerRoomSupporting,r=n.id,o=n.slug,c=n.defaultChannelSlug,t.prev=3,t.next=6,e.$api.supportClub({lockerRoomID:r});case 6:return e.signupLockerRoomSupporting=null,t.abrupt("return",{urlSupport:"/locker-room/".concat(o,"/").concat(c)||!1});case 10:t.prev=10,t.t0=t.catch(3),null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l||l.errors.forEach((function(t){e.$toast.success(t.message,{duration:5e3,position:"bottom-left",className:"fx1-success",iconPack:"mdi",icon:"alert-circle-outline"})}));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},fnAcceptInvite:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.signupOwnerManagerInvite){t.next=2;break}return t.abrupt("return",{urlInvite:null});case 2:return t.prev=2,t.next=5,e.$api.respondUserManagerialRoleInvite({id:null===(n=e.signupOwnerManagerInvite)||void 0===n?void 0:n.id});case 5:return r=t.sent,o=r.respondUserManagerialRoleInvite,t.abrupt("return",{urlInvite:(null==o?void 0:o.objectID)||null});case 10:t.prev=10,t.t0=t.catch(2),null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c||c.errors.forEach((function(t){e.$toast.success(t.message,{duration:5e3,position:"bottom-left",className:"fx1-success",iconPack:"mdi",icon:"alert-circle-outline"})}));case 13:return t.prev=13,e.signupOwnerManagerInvite=null,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})))()},fnAcceptPrivateInviation:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$api.acceptInvitationToPrivateChannel({token:e.$route.query.accept});case 3:n=t.sent,r=n.acceptInvitationToPrivateChannel,o=r.objectID,c=o.indexOf("io")+2,l=o.substring(c),e.$router.push(l),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e.showError(t.t0);case 14:return t.prev=14,e.isSubmitting=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))()},fnUsernameValidation:l()(Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.username){e.next=2;break}return e.abrupt("return");case 2:return this.isChecking=!0,e.prev=3,t=this.username,e.next=7,this.$api.userNameExists({username:t});case 7:if(n=e.sent,!n.userNameExists){e.next=12;break}return this.usernameUniqueError="Username already exists.",e.abrupt("return");case 12:this.usernameUniqueError=null,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||r.errors.forEach((function(e){o.$toast.success(e.message,{duration:5e3,position:"bottom-left",className:"fx1-success",iconPack:"mdi",icon:"alert-circle-outline"})}));case 18:return e.prev=18,this.isChecking=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[3,15,18,21]])}))),300),fnFacebookEventSignup:function(){window.fbq("trackCustom","Signup")},fnRefreshToken:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoggedIn){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.refreshToken();case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}}),t,null,[[2,7]])})))()},showError:function(e){var t=e.toString();if(t===function(e){if(t.includes(e))return t}("cannot create or join more"))this.$toast.error("You cannot create or join more than one private group per game.",{duration:5e3,position:"top-center"})}})},I=h,M=(n(2341),n(10)),component=Object(M.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xo-signup-step-2 step-content row"},[r("div",{staticClass:"left-content row items-center justify-center"},[r("div",{staticClass:"form-container"},[e._m(0),r("form",{attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},["google"===e.signupMethod?r("div",{staticClass:"mb-5"},[r("XAFormsInput",{attrs:{placeholder:"Username",disabled:e.isSubmitting,loading:e.isChecking,error:e.validation.firstError("username")||e.usernameUniqueError},on:{input:function(t){return e.fnUsernameValidation()}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1):e._e(),r("div",{staticClass:"row mb-6 upload-container"},[r("div",{staticClass:"upload row items-center justify-center"},[r("div",{staticClass:"text-primary text-weight-medium text-uppercase mr-1"},[e._v("Upload")]),r("div",{staticClass:"text-weight-light drag-drop"},[e._v("or drag and drop")]),r("input",{ref:"avatarInput",attrs:{type:"file",accept:"image/*"},on:{input:function(t){return e.fnEditAvatar(t)}}})]),r("div",{staticClass:"avatar-container row items-center justify-center"},[r("div",{staticClass:"avatar row items-center justify-center",style:e.avatarStyles},[e.avatarCropped?e._e():r("img",{attrs:{src:n(1516)}})])])]),r("div",{staticClass:"actions"},[r("b-button",{staticClass:"btn-next",attrs:{type:"is-primary",loading:"btn-skip"===e.btnToDisable,disabled:"btn-save"===e.btnToDisable||e.hasImage||e.isDisabledSubmitButton},on:{click:function(t){return t.preventDefault(),e.fnCreateUser("btn-skip")}}},[e._v("Save")]),r("b-button",{staticClass:"btn-skip",attrs:{type:"is-primary",outlined:"",loading:"btn-save"===e.btnToDisable,disabled:"btn-skip"===e.btnToDisable||e.isDisabledSubmitButton},on:{click:function(t){return t.preventDefault(),e.fnCreateUser("btn-save")}}},[e._v("Skip")])],1)])])]),r("XMSignUpRightContent")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-header"},[n("h1",[e._v("Upload an avatar")]),n("h4",{staticClass:"text-weight-light"},[e._v("Be yourself, a fictional character, or even your favourite player")])])}],!1,null,"55ab65d0",null);t.default=component.exports}}]);