(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1918:function(t,e,n){var content=n(2241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("f085829a",content,!0,{sourceMap:!1})},2240:function(t,e,n){"use strict";n(1918)},2241:function(t,e,n){var r=n(34)(!1);r.push([t.i,".xp-forgot-password[data-v-316f3691]{min-height:calc(100vh - 683px)}@media screen and (max-width:1023px){.xp-forgot-password[data-v-316f3691] .step-content .left-content{min-height:calc(100vh - 60px)!important;align-items:flex-start}}",""]),t.exports=r},2617:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(5),c=(n(27),n(8),n(28),n(31),n(17),n(16),n(14),n(19),n(13),n(20),n(36)),l=n(382);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={validators:{email:function(t){return l.Validator.value(t).required("Email field is required").email()}},name:"XPForgotPassword",components:{XMSignUpRightContent:function(){return n.e(5).then(n.bind(null,2645))},XAFormsInput:function(){return n.e(1).then(n.bind(null,2067))}},data:function(){return{email:null,isSubmitting:!1}},computed:{isDisableSendButton:function(){return!this.email}},methods:d(d({},Object(c.b)({forgotPassword:"auth/forgotPassword"})),{},{fnSendInstructions:function(){var t=this;this.isSubmitting=!0,this.$validate().then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=18;break}return e.prev=1,r=t.email,e.next=5,t.forgotPassword({email:r});case 5:return"Password reset email sent, please check your email for further instructions",5e3,e.next=9,t.fnSuccessToast("Password reset email sent, please check your email for further instructions",5e3);case 9:t.$router.push({path:"/"}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:return e.prev=14,t.isSubmitting=!1,e.finish(14);case 17:return e.abrupt("return");case 18:t.isSubmitting=!1;case 19:case"end":return e.stop()}}),e,null,[[1,12,14,17]])})));return function(t){return e.apply(this,arguments)}}())}})},h=m,v=(n(2240),n(10)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xp-forgot-password auth-page"},[n("div",{staticClass:"step-content row"},[n("div",{staticClass:"left-content row items-center justify-center"},[n("div",{staticClass:"form-container"},[t._m(0),n("form",{attrs:{action:"#",autocomplete:"off"},on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"mb-6"},[n("XAFormsInput",{attrs:{placeholder:"Email",error:t.validation.firstError("email"),disabled:t.isSubmitting},on:{enter:function(e){return t.fnSendInstructions()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("div",{staticClass:"actions"},[n("b-button",{staticClass:"btn-next",attrs:{type:"is-primary",loading:t.isSubmitting,disabled:t.isDisableSendButton},on:{click:function(e){return e.preventDefault(),t.fnSendInstructions()}}},[t._v("Send Instructions")])],1)])])]),n("XMSignUpRightContent")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-header"},[n("h1",[t._v("Forgot Password")]),n("h4",{staticClass:"text-weight-light"},[t._v("Enter the email address you used when you joined and we’ll send you instructions to reset your password")])])}],!1,null,"316f3691",null);e.default=component.exports}}]);