(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"166c":function(e,t,a){"use strict";var i=a("fce3"),n=a.n(i);n.a},"8b07":function(e,t,a){"use strict";a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{source:0,addressList:[{name:"翠花",mobile:"18666666666",addressName:"西冷牛排(东城店)",address:"北京市大悦城",area:"B区",default:!0},{name:"铁牛",mobile:"18667766666",addressName:"龙舒区6楼",address:"上海市闵行区",area:"西单元402",default:!1}]}},onLoad:function(e){console.log(e.source),this.source=e.source},methods:{checkAddress:function(e){1==this.source&&(this.$api.prePage().addressData=e,uni.navigateBack())},addAddress:function(e,t){uni.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&data=").concat(JSON.stringify(t))})},refreshList:function(e,t){this.addressList.unshift(e),console.log(e,t)}}};t.default=i},a4a4:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"list b-b",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.checkAddress(t)}}},[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"address-box"},[t.default?a("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),a("v-uni-text",{staticClass:"address"},[e._v(e._s(t.addressName)+" "+e._s(t.area))])],1),a("v-uni-view",{staticClass:"u-box"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.name))]),a("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.mobile))])],1)],1),a("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.addAddress("edit",t)}}})],1)})),a("v-uni-text",{staticStyle:{display:"block",padding:"16upx 30upx 10upx","lihe-height":"1.6",color:"#fa436a","font-size":"24upx"}}),a("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},s=[]},a66e:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-c786efda]{padding-bottom:%?120?%}.content[data-v-c786efda]{position:relative}.list[data-v-c786efda]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-c786efda]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-c786efda]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-c786efda]{font-size:%?24?%;color:#75cab3;margin-right:%?10?%;background:#fff;border:1px solid #75cab3;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-c786efda]{font-size:%?30?%;color:#303133}.u-box[data-v-c786efda]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-c786efda]{margin-right:%?30?%}.icon-bianji[data-v-c786efda]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-c786efda]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#75cab3;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-shadow:1px 2px 5px rgba(219,63,96,.4);box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),e.exports=t},bed1:function(e,t,a){"use strict";a.r(t);var i=a("a4a4"),n=a("f36a");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("166c");var d,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"c786efda",null,!1,i["a"],d);t["default"]=r.exports},f36a:function(e,t,a){"use strict";a.r(t);var i=a("8b07"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},fce3:function(e,t,a){var i=a("a66e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("528aa577",i,!0,{sourceMap:!1,shadowMode:!1})}}]);