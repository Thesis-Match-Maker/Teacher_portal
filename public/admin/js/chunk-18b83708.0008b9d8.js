(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b83708"],{"0c3f":function(t,e,n){},4280:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interface-2fa-value"},[t.tfa_secret?n("v-notice",{staticClass:"qr-info",attrs:{icon:"info"}},[t._v("\n    "+t._s(t.$t("scan_in_authenticator"))+"\n  ")]):t._e(),t.tfa_secret?n("qr-code",{staticClass:"qr",attrs:{value:t.totpUrl,options:{width:200}}}):t._e(),t.value?t._e():n("v-button",{attrs:{loading:t.loading},on:{click:t.getToken}},[t._v("Enable 2FA")]),t.value?n("v-button",{on:{click:t.removeValue}},[t._v("Disable 2FA")]):t._e()],1)},l=[],i=n("8db2"),r=n.n(i),u=n("d56f"),o={name:"Interface2faValue",components:{QrCode:u["a"]},mixins:[r.a],data:function(){return{loading:!1,error:null,tfa_secret:null}},computed:{totpUrl:function(){return"otpauth://totp/Directus:".concat(this.$store.state.currentUser.email,"?secret=").concat(this.tfa_secret,"&issuer=Directus")}},methods:{getToken:function(){var t=this;this.loading=!0,this.$api.api.get("/utils/2fa_secret").then((function(t){return t.data["2fa_secret"]})).then((function(e){t.$emit("input",e),t.tfa_secret=e})).catch((function(e){t.error=e})).finally((function(){return t.loading=!1}))},removeValue:function(){this.$emit("input",null),this.tfa_secret=null}}},c=o,s=(n("52eb"),n("2877")),f=Object(s["a"])(c,a,l,!1,null,"b8029cac",null);e["default"]=f.exports},"52eb":function(t,e,n){"use strict";var a=n("0c3f"),l=n.n(a);l.a},"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}}}]);
//# sourceMappingURL=chunk-18b83708.0008b9d8.js.map