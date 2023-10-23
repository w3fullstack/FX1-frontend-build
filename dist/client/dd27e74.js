(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1387:function(e,t,r){e.exports=r.p+"img/google.605f953.svg"},2648:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"_icon row"},[t("img",{attrs:{src:r(1387)}})])}],o=(r(17),r(16),r(14),r(19),r(20),r(0)),c=r(5),l=(r(27),r(56),r(8),r(28),r(31),r(13),r(75),r(79),r(124),r(41)),m=r.n(l),d=r(382),f=r(11),h=r(36);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={validators:{username:function(e){return d.Validator.value(e).required("Sorry, a username is required").custom((function(){if(!/^\w+$/.test(e))return"Please use only letters, numbers and underscores for your username"})).minLength(3,"Please ensure your username is between 3 to 18 characters in length").maxLength(18,"Please ensure your username is between 3 to 18 characters in length")},email:function(e){return d.Validator.value(e).required("Sorry, we need a email to send you important updates").email("Hmmm, that email doesn't look right, maybe try again?")},password:function(e){return d.Validator.value(e).required("Sorry, please enter a secure password").custom((function(){if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/.test(e))return"Please ensure your password is at least 8 characters in length, and contains one number, upper and lowercase letters and one special character"}))}},name:"XOSignUpStep1",components:{XAFormsInput:function(){return r.e(1).then(r.bind(null,2067))},XMSignUpRightContent:function(){return r.e(5).then(r.bind(null,2645))}},data:function(){return{isSubmitting:!1,isChecking:!1,usernameUniqueError:null,filteredQuery:{}}},computed:w(w({},Object(f.b)("signup",["username","email","password","firstName","lastName","avatarSocial","signupLockerRoomSupporting","signupOwnerManagerInvite","signupMethod"])),{},{isDisableSignUpButton:function(){return!this.username||!this.email||!this.password||this.usernameUniqueError},isDisableInputEmail:function(){return!!this.signupOwnerManagerInvite}}),methods:w(w({},Object(h.b)({authSignupWithEmail:"auth/authSignupWithEmail",authLoginWithGoogle:"auth/authLoginWithGoogle",authLogOut:"auth/authLogOut"})),{},{fnUsernameValidation:m()(Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.username){e.next=2;break}return e.abrupt("return");case 2:return this.isChecking=!0,e.prev=3,t=this.username,e.next=7,this.$api.userNameExists({username:t});case 7:if(r=e.sent,!r.userNameExists){e.next=12;break}return this.usernameUniqueError="Username already exists.",e.abrupt("return");case 12:this.usernameUniqueError=null,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||n.errors.forEach((function(e){o.$toast.success(e.message,{duration:5e3,position:"bottom-left",className:"fx1-success",iconPack:"mdi",icon:"alert-circle-outline"})}));case 18:return e.prev=18,this.isChecking=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[3,15,18,21]])}))),300),fnSignupViaEmail:function(){var e=this;this.isSubmitting=!0,this.signupMethod="email",this.$validate().then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var n,o,c,l,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=30;break}return n=e.email,o=e.password,t.prev=2,t.next=5,e.authSignupWithEmail({email:n,password:o});case 5:if(null==(l=t.sent)||null===(c=l.additionalUserInfo)||void 0===c||!c.isNewUser){t.next=10;break}return t.next=9,e.$router.push({name:"signup",query:w(w({},e.$route.query),{},{step:2}),params:w({},e.$route.params)});case 9:return t.abrupt("return");case 10:return e.$toast.error("Sorry, this email address is already in use. Please try another.",{duration:5e3,position:"top-center"}),t.next=13,e.authLogOut();case 13:t.next=25;break;case 15:t.prev=15,t.t0=t.catch(2),m=t.t0.toString(),d=function(e){if(m.includes(e))return m},t.t1=m,t.next=t.t1===d("email-already-in-use")?22:24;break;case 22:return e.$toast.error("Sorry, this email address is already in use. Please try another.",{duration:5e3,position:"top-center"}),t.abrupt("break",25);case 24:return t.abrupt("break",25);case 25:return t.prev=25,e.isSubmitting=!1,t.finish(25);case 28:t.next=31;break;case 30:e.isSubmitting=!1;case 31:case"end":return t.stop()}}),t,null,[[2,15,25,28]])})));return function(e){return t.apply(this,arguments)}}())},fnSignupViaGoogle:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,picture,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.validation.reset(),e.isSubmitting=!0,e.signupMethod="google",t.prev=3,t.next=6,e.authLoginWithGoogle();case 6:if(n=t.sent){t.next=9;break}return t.abrupt("return");case 9:if(null==n||null===(r=n.additionalUserInfo)||void 0===r||!r.isNewUser){t.next=17;break}return o=n.additionalUserInfo.profile,c=o.family_name,l=o.given_name,picture=o.picture,m=o.email,e.email=m,e.firstName=l,e.lastName=c,e.avatarSocial=picture,e.$router.push({name:"signup",query:w(w({},e.$route.query),{},{step:2}),params:w({},e.$route.params)}),t.abrupt("return");case 17:e.$toast.error("Sorry, this email address is already in use. Please try another.",{duration:5e3,position:"top-center"}),e.authLogOut(),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(3),null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d||d.errors.forEach((function(t){e.$toast.success(t.message,{duration:5e3,position:"bottom-left",className:"fx1-success",iconPack:"mdi",icon:"alert-circle-outline"})}));case 24:return t.prev=24,e.isSubmitting=!1,t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[3,21,24,27]])})))()}})},S=y,k=r(10),component=Object(k.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xo-signup-step-1 step-content row"},[r("div",{staticClass:"left-content row items-center justify-center"},[r("div",{staticClass:"form-container"},[r("div",{staticClass:"form-header"},[r("h1",[e._v(e._s(e.signupLockerRoomSupporting?"Sign up to support a club":"Sign up"))]),r("h4",{staticClass:"text-weight-light"},[e._v("Already have an account? "),r("nuxt-link",{attrs:{to:{name:"signin",query:e.filteredQuery,params:e.$route.params}}},[e._v("Sign in")])],1)]),r("form",{attrs:{action:"#"},on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"mb-5"},[r("XAFormsInput",{attrs:{id:"IUsername",placeholder:"Username",disabled:e.isSubmitting,loading:e.isChecking,error:e.validation.firstError("username")||e.usernameUniqueError},on:{enter:function(t){return e.fnSignupViaEmail()},input:function(t){return e.fnUsernameValidation()}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),r("div",{staticClass:"mb-5"},[r("XAFormsInput",{attrs:{id:"IEmail",placeholder:"Email",disabled:e.isSubmitting||e.isDisableInputEmail,error:e.validation.firstError("email")},on:{enter:function(t){return e.fnSignupViaEmail()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("div",{staticClass:"mb-6"},[r("XAFormsInput",{attrs:{id:"IPassword",type:"password",placeholder:"Password",disabled:e.isSubmitting,error:e.validation.firstError("password")},on:{enter:function(t){return e.fnSignupViaEmail()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("div",{staticClass:"actions"},[r("div",{staticClass:"mb-4"},[r("b-button",{staticClass:"btn-next",attrs:{type:"is-primary",loading:e.isSubmitting,disabled:e.isDisableSignUpButton},on:{click:function(t){return t.preventDefault(),e.fnSignupViaEmail()}}},[e._v("Sign Up")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"btn-google row items-center justify-center",class:[e.isSubmitting&&"disabled"],on:{click:function(t){return t.preventDefault(),e.fnSignupViaGoogle()}}},[e._m(0),r("div",{staticClass:"value"},[e._v("Sign Up with Google")])])])])])])]),r("XMSignUpRightContent")],1)}),n,!1,null,null,null);t.default=component.exports}}]);