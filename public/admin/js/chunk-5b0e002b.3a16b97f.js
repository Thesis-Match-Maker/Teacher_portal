(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0e002b"],{"054c":function(e){e.exports=JSON.parse('["red","red-50","red-100","red-200","red-300","red-400","red-500","red-600","red-700","red-800","red-900","pink","pink-50","pink-100","pink-200","pink-300","pink-400","pink-500","pink-600","pink-700","pink-800","pink-900","purple","purple-50","purple-100","purple-200","purple-300","purple-400","purple-500","purple-600","purple-700","purple-800","purple-900","deep-purple","deep-purple-50","deep-purple-100","deep-purple-200","deep-purple-300","deep-purple-400","deep-purple-500","deep-purple-600","deep-purple-700","deep-purple-800","deep-purple-900","indigo","indigo-50","indigo-100","indigo-200","indigo-300","indigo-400","indigo-500","indigo-600","indigo-700","indigo-800","indigo-900","blue","blue-50","blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900","light-blue","light-blue-50","light-blue-100","light-blue-200","light-blue-300","light-blue-400","light-blue-500","light-blue-600","light-blue-700","light-blue-800","light-blue-900","teal","teal-50","teal-100","teal-200","teal-300","teal-400","teal-500","teal-600","teal-700","teal-800","teal-900","green","green-50","green-100","green-200","green-300","green-400","green-500","green-600","green-700","green-800","green-900","light-green","light-green-50","light-green-100","light-green-200","light-green-300","light-green-400","light-green-500","light-green-600","light-green-700","light-green-800","light-green-900","lime","lime-50","lime-100","lime-200","lime-300","lime-400","lime-500","lime-600","lime-700","lime-800","lime-900","yellow","yellow-50","yellow-100","yellow-200","yellow-300","yellow-400","yellow-500","yellow-600","yellow-700","yellow-800","yellow-900","amber","amber-50","amber-100","amber-200","amber-300","amber-400","amber-500","amber-600","amber-700","amber-800","amber-900","orange","orange-50","orange-100","orange-200","orange-300","orange-400","orange-500","orange-600","orange-700","orange-800","orange-900","deep-orange","deep-orange-50","deep-orange-100","deep-orange-200","deep-orange-300","deep-orange-400","deep-orange-500","deep-orange-600","deep-orange-700","deep-orange-800","deep-orange-900","brown","brown-50","brown-100","brown-200","brown-300","brown-400","brown-500","brown-600","brown-700","brown-800","brown-900","grey","grey-50","grey-100","grey-200","grey-300","grey-400","grey-500","grey-600","grey-700","grey-800","grey-900","blue-grey","blue-grey-50","blue-grey-100","blue-grey-200","blue-grey-300","blue-grey-400","blue-grey-500","blue-grey-600","blue-grey-700","blue-grey-800","blue-grey-900","white","black"]')},2820:function(e,r,l){"use strict";var n=l("ce58"),t=l.n(n);t.a},"8db2":function(e,r){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},bcaa6:function(e,r,l){"use strict";const n="a-f\\d",t=`#?[${n}]{3}[${n}]?`,o=`#?[${n}]{6}([${n}]{2})?`,i=new RegExp(`[^#${n}]`,"gi"),p=new RegExp(`^${t}$|^${o}$`,"i");e.exports=(e,r={})=>{if("string"!==typeof e||i.test(e)||!p.test(e))throw new TypeError("Expected a valid hex string");e=e.replace(/^#/,"");let l=1;8===e.length&&(l=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(l=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const n=parseInt(e,16),t=n>>16,o=n>>8&255,a=255&n;return"array"===r.format?[t,o,a,l]:{red:t,green:o,blue:a,alpha:l}}},ce58:function(e,r,l){},e32a:function(e,r,l){"use strict";l.r(r);var n=function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("div",{staticClass:"interface-color-picker"},e._l(e.colors,(function(r){return l("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$helpers.formatTitle(r),expression:"$helpers.formatTitle(color)"}],key:r,class:{active:e.value===r},style:{backgroundColor:"var(--"+r+")"},attrs:{disabled:e.readonly},on:{click:function(l){return e.$emit("input",r)}}},[e.value===r?[l("v-icon",{class:{dark:e.useDarkIconColor(r)},attrs:{name:"check",size:"18"}})]:e._e()],2)})),0)},t=[],o=l("8db2"),i=l.n(o),p=l("bcaa6"),a=l.n(p),u=l("054c"),g={mixins:[i.a],computed:{colors:function(){return u}},methods:{useDarkIconColor:function(e){var r=getComputedStyle(document.body).getPropertyValue("--".concat(e)).trim(),l=a()(r,{format:"array"}),n=l.map((function(e){return e/255})).map((function(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),t=.2126*n[0]+.7152*n[1]+.0722*n[2];return t>.25}}},d=g,b=(l("2820"),l("2877")),c=Object(b["a"])(d,n,t,!1,null,"00178d8e",null);r["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5b0e002b.3a16b97f.js.map