(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"210a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-grid-wrap[data-v-35075320]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nwidth:100%\n}.uni-grid[data-v-35075320]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-35075320]{border-left-color:#e5e5e5;border-left-style:solid;border-left-width:1px}",""]),t.exports=e},3092:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-style":"solid","border-left-color":t.borderColor,"border-left-width":t.showBorder?"1px":0},attrs:{id:t.elId}},[t._t("default")],2)],1)},o=[]},"335c":function(t,e,i){"use strict";var n=i("44cc"),r=i.n(n);r.a},3537:function(t,e,i){var n=i("5f58");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("cb4e8bd8",n,!0,{sourceMap:!1,shadowMode:!1})},3948:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=n(i("ade3")),a=n(i("5530")),s=n(i("f637")),c=n(i("b453")),l=i("2f62"),d=(r={components:{comNav:c.default}},(0,o.default)(r,"components",{listCell:s.default}),(0,o.default)(r,"data",(function(){return{myStatusList:[{name:"余额",icon:"0.00"},{name:"积分",icon:"0"},{name:"卡",icon:"0"},{name:"优惠券/码",icon:"0"},{name:"零钱",icon:"0.00"}],orderStatusList:[{name:"待付款",icon:"iconfont icon31daifukuan",status:10},{name:"待发货",icon:"iconfont icon31daifahuo",status:30},{name:"待收货",icon:"iconfont icon31daishouhuo",status:40},{name:"评价",icon:"iconfont icon31daipingjia",status:50},{name:"退款/售后",icon:"iconfont icon31yiguanzhudianpu",status:55}],serverList:[{title:"购物车",icon:"/static/images/user/icon-kefu.png"},{title:"任务中心",icon:"/static/images/user/renwu.png"},{title:"赠品",icon:"/static/images/user/zengpin.png"}],serverList1:[{title:"收获地址",icon:"/static/images/user/dizhi.png"}],serverList2:[{title:"客服聊天",icon:"/static/images/user/liaotian.png"},{title:"个人信息",icon:"/static/images/user/geren.png"},{title:"账号设置",icon:"/static/images/user/shezhi.png"}],serverList3:[{title:"花花万物",icon:"/static/images/user/dianpu.png"}]}})),(0,o.default)(r,"computed",(0,a.default)({},(0,l.mapState)(["hasLogin","userInfo"]))),(0,o.default)(r,"methods",{navTo:function(t){this.hasLogin||(t="/pages/public/public"),uni.navigateTo({url:t})},addressindex:function(){uni.navigateTo({url:"/pages/address/address"})},marketIndex:function(){uni.reLaunch({url:"/pages/index/index"})},cartIndex:function(t){0==t&&uni.reLaunch({url:"/pages/carts/carts"})},setIndex:function(t){2==t&&uni.navigateTo({url:"/pages/set/set"})}}),r);e.default=d},"44cc":function(t,e,i){var n=i("4e56");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("aecd970c",n,!0,{sourceMap:!1,shadowMode:!1})},"45dd":function(t,e,i){"use strict";var n=i("693b"),r=i.n(n);r.a},"49b1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-swiper__warp[data-v-0c11b751]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-0c11b751]{position:absolute;bottom:10px;left:0;right:0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-item[data-v-0c11b751]{width:8px;-webkit-border-radius:100px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4)\n\t\t/* transition: width 0.2s linear;  不要取消注释，不然会不能变色\n */}.uni-swiper__dots-item[data-v-0c11b751]:first-child{margin:0}.uni-swiper__dots-default[data-v-0c11b751]{-webkit-border-radius:100px;border-radius:100px}.uni-swiper__dots-long[data-v-0c11b751]{-webkit-border-radius:50px;border-radius:50px}.uni-swiper__dots-bar[data-v-0c11b751]{-webkit-border-radius:50px;border-radius:50px}.uni-swiper__dots-nav[data-v-0c11b751]{bottom:0;height:40px;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-0c11b751]{\n\t\t/* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:%?28?%;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-0c11b751]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-0c11b751]{color:#fff;font-size:%?24?%}",""]),t.exports=e},"4bc5":function(t,e,i){"use strict";i.r(e);var n=i("fa48"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"4e56":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.icon .mix-list-cell.b-b[data-v-4a25f54b]:after{left:%?90?%}.mix-list-cell[data-v-4a25f54b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative}.mix-list-cell.cell-hover[data-v-4a25f54b]{background:#fafafa}.mix-list-cell.b-b[data-v-4a25f54b]:after{left:%?30?%}.mix-list-cell .cell-icon[data-v-4a25f54b]{-webkit-align-self:center;align-self:center;width:%?56?%;max-height:%?60?%;font-size:%?38?%}.mix-list-cell .cell-more[data-v-4a25f54b]{-webkit-align-self:center;align-self:center;font-size:%?30?%;color:#606266;margin-left:10px}.mix-list-cell .cell-tit[data-v-4a25f54b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133;margin-right:%?10?%}.mix-list-cell .cell-tip[data-v-4a25f54b]{font-size:%?26?%;color:#909399}',""]),t.exports=e},5274:function(t,e,i){"use strict";i.r(e);var n=i("c394"),r=i("4bc5");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("45dd");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"0c11b751",null,!1,n["a"],a);e["default"]=c.exports},"5ed7":function(t,e,i){"use strict";i.r(e);var n=i("3948"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"5f58":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.com-nav[data-v-51a746f6]{margin-top:%?20?%;padding-top:%?20?%;background:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%}.com-nav .grid-item[data-v-51a746f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.com-nav .grid-item .item-icon[data-v-51a746f6]{width:%?80?%;height:%?80?%;margin-bottom:%?12?%}.com-nav .grid-item .item-text[data-v-51a746f6]{font-size:%?25?%;color:#666}',""]),t.exports=e},"60ba":function(t,e,i){"use strict";var n=i("dce0"),r=i.n(n);r.a},"65ed":function(t,e,i){"use strict";var n=i("3537"),r=i.n(n);r.a},6753:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"com-nav"},[i("uni-swiper-dot",{attrs:{info:t.ListData,current:t.currentIndex,mode:"default"}},[i("v-uni-swiper",{style:t.getHeight,on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.currentIndexChange.apply(void 0,arguments)}}},t._l(t.ListData,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("uni-grid",{attrs:{showBorder:!1,square:!0,column:t.col}},t._l(e,(function(e,n){return i("uni-grid-item",{key:n,staticStyle:{height:"150rpx"}},[i("v-uni-view",{staticClass:"grid-item",class:t.getAnimated,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(e)}}},[i("v-uni-image",{staticClass:"item-icon",attrs:{src:e.icon,mode:"widthFix"}}),i("v-uni-text",{staticClass:"item-text"},[t._v(t._s(e.text))])],1)],1)})),1)],1)})),1)],1)],1)},o=[]},"67e8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-grid-item[data-v-7adb8532]{\nheight:100%;display:-webkit-box;display:-webkit-flex;display:flex\n}.uni-grid-item__box[data-v-7adb8532]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\nposition:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n\t\t/* justify-content: center;\n */\n\t\t/* align-items: center;\n */}.uni-grid-item--border[data-v-7adb8532]{position:relative;border-bottom-color:#e5e5e5;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#e5e5e5;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-7adb8532]{border-top-color:#e5e5e5;border-top-style:solid;border-top-width:1px;\nheight:100%;-webkit-box-sizing:border-box;box-sizing:border-box\n}.uni-highlight[data-v-7adb8532]:active{background-color:#f1f1f1}",""]),t.exports=e},"693b":function(t,e,i){var n=i("49b1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1531de58",n,!0,{sourceMap:!1,shadowMode:!1})},"6ede":function(t,e,i){var n=i("67e8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1c672ee4",n,!0,{sourceMap:!1,shadowMode:!1})},"70dc":function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},7354:function(t,e,i){var n=i("bf5e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("6da095d5",n,!0,{sourceMap:!1,shadowMode:!1})},"843d":function(t,e,i){"use strict";var n=i("4ea4");i("fb6a"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("5274")),o=n(i("a145")),a=n(i("9963")),s={components:{uniSwiperDot:r.default,uniGrid:o.default,uniGridItem:a.default},props:{row:{type:Number,default:1},col:{type:Number,default:5},list:{type:Array,default:function(){return[]}},animated:{type:String,default:""}},data:function(){return{currentIndex:0}},computed:{getHeight:function(){return"height: ".concat(150*this.row,"rpx;")},getAnimated:function(){return this.animated?this.animated:""},ListData:function(){for(var t=Math.ceil(this.list.length/(this.row*this.col)),e=[],i=0;i<t;++i)e[i]=this.list.slice(this.row*this.col*i,this.row*this.col*(i+1));return e}},methods:{currentIndexChange:function(t){this.currentIndex=t.detail.current},goPage:function(t){return!0}}};e.default=s},"8ec0":function(t,e,i){"use strict";var n=i("7354"),r=i.n(n);r.a},"8fe7":function(t,e,i){"use strict";i.r(e);var n=i("843d"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},9963:function(t,e,i){"use strict";i.r(e);var n=i("ec76"),r=i("f31b");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("c181");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7adb8532",null,!1,n["a"],a);e["default"]=c.exports},"9d37":function(t,e,i){"use strict";i.r(e);var n=i("ea5f"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},a145:function(t,e,i){"use strict";i.r(e);var n=i("3092"),r=i("e128");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("60ba");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"35075320",null,!1,n["a"],a);e["default"]=c.exports},a183:function(t,e,i){"use strict";i.r(e);var n=i("fd63"),r=i("5ed7");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("8ec0");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"15d7f1fc",null,!1,n["a"],a);e["default"]=c.exports},b453:function(t,e,i){"use strict";i.r(e);var n=i("6753"),r=i("8fe7");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("65ed");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"51a746f6",null,!1,n["a"],a);e["default"]=c.exports},bf5e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.dianpu[data-v-15d7f1fc]{margin-left:%?360?%}uni-page-body[data-v-15d7f1fc]{height:%?1570?%;background:#bcce96}.btn-hover[data-v-15d7f1fc]{background:#f2f2f2!important}.user .user-wrap[data-v-15d7f1fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:60vw;padding:%?30?%;z-index:9;-webkit-border-radius:0 0 5% 5%;border-radius:0 0 5% 5%;background:url(http://img.yzcdn.cn/upload_files/2020/03/22/FkeSLPLhfDbSYp0L0iXtUzP6H7k0.jpeg) no-repeat;background-size:cover}.user .user-wrap .setting[data-v-15d7f1fc]{color:#fff;top:%?60?%;left:%?60?%;font-size:%?50?%}.user .user-wrap .info[data-v-15d7f1fc]{text-align:center}.user .user-wrap .info .avatar[data-v-15d7f1fc]{width:%?150?%;height:%?150?%;-webkit-border-radius:50%;border-radius:50%}.user .user-wrap .info .nickname[data-v-15d7f1fc]{color:#fff;font-size:%?35?%}.user .order-status[data-v-15d7f1fc]{padding:0 %?20?%;margin-top:2vw}.user .order-status .status-wrap[data-v-15d7f1fc]{-webkit-border-radius:%?15?%;border-radius:%?15?%;overflow:hidden}.user .order-status .status-wrap .status-list[data-v-15d7f1fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding-top:%?20?%;padding-bottom:%?30?%;z-index:99}.user .order-status .status-wrap .status-list .status-item[data-v-15d7f1fc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user .order-status .status-wrap .status-list .status-item .item-icon[data-v-15d7f1fc]{line-height:1;font-size:%?40?%;color:#000}.user .order-status .status-wrap .status-list .status-item .item-text[data-v-15d7f1fc]{font-size:%?27?%;color:#000;margin-top:%?5?%}.user .com-item[data-v-15d7f1fc]{padding-left:%?20?%;padding-right:%?20?%;margin-top:%?20?%}.user .com-item .com-wrap[data-v-15d7f1fc]{-webkit-border-radius:%?20?%;border-radius:%?20?%;overflow:hidden}.user .cell[data-v-15d7f1fc]{height:%?80?%;padding-left:%?20?%;padding-right:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-bottom:1px solid #f0f0f0}.user .cell[data-v-15d7f1fc]:active{background:#f2f2f2}.user .cell[data-v-15d7f1fc]:last-child{border-bottom:none!important}.user .cell .cell-left[data-v-15d7f1fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user .cell .cell-left .cell-icon[data-v-15d7f1fc]{width:%?35?%;height:%?35?%}.user .cell .cell-left .cell-text[data-v-15d7f1fc]{color:#333;font-size:%?27?%;margin-left:%?15?%}.user .cell .cell-left .wode[data-v-15d7f1fc]{color:#000;font-weight:670;font-size:%?34?%}.user .cell .cell-left .look[data-v-15d7f1fc]{font-size:%?25?%;margin-left:%?330?%}.user .cell .iconfont[data-v-15d7f1fc]{color:#040404}body.?%PAGE?%[data-v-15d7f1fc]{background:#bcce96}',""]),t.exports=e},c181:function(t,e,i){"use strict";var n=i("6ede"),r=i.n(n);r.a},c394:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(n===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})})),1):t._e(),"dot"===t.mode?i("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"round"===t.mode?i("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===t.current&&"uni-swiper__dots-long"],style:{width:(n===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"nav"===t.mode?i("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[i("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:n===t.current?t.dots.selectedColor:t.dots.color,"background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}},[i("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(n+1))])],1)})),1):t._e()],2)},o=[]},dce0:function(t,e,i){var n=i("210a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1c996655",n,!0,{sourceMap:!1,shadowMode:!1})},e128:function(t,e,i){"use strict";i.r(e);var n=i("70dc"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},ea2b:function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},ea5f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{typeList:{left:"icon-zuo",right:"icon-you",up:"icon-shang",down:"icon-xia"}}},props:{icon:{type:String,default:""},title:{type:String,default:"标题"},tips:{type:String,default:""},navigateType:{type:String,default:"right"},border:{type:String,default:"b-b"},hoverClass:{type:String,default:"cell-hover"},iconColor:{type:String,default:"#333"}},methods:{eventClick:function(){this.$emit("eventClick")}}};e.default=n},ec76:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},o=[]},ecd3:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"mix-list-cell",class:t.border,attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[t.icon?i("v-uni-text",{staticClass:"cell-icon yticon",class:t.icon,style:[{color:t.iconColor}]}):t._e(),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v(t._s(t.title))]),t.tips?i("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.tips))]):t._e(),i("v-uni-text",{staticClass:"cell-more yticon",class:t.typeList[t.navigateType]})],1)],1)},o=[]},f31b:function(t,e,i){"use strict";i.r(e);var n=i("ea2b"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},f637:function(t,e,i){"use strict";i.r(e);var n=i("ecd3"),r=i("9d37");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("335c");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4a25f54b",null,!1,n["a"],a);e["default"]=c.exports},fa48:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=n},fd63:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user"},[i("v-uni-view",{staticClass:"user-wrap"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-image",{staticClass:"avatar",attrs:{mode:"aspectFill",src:t.userInfo.portrait||"/static/missing-face.png"}}),i("v-uni-view",{staticClass:"info-box"},[i("v-uni-text",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nickname||"游客"))])],1)],1)],1),i("v-uni-view",{staticClass:"order-status"},[i("v-uni-view",{staticClass:"status-wrap"},[i("v-uni-view",{staticClass:"status-list"},t._l(t.myStatusList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"status-item",attrs:{"hover-class":"btn-hover"}},[i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(e.icon))]),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(e.name))])],1)})),1)],1)],1),i("v-uni-view",{staticStyle:{"border-radius":"20rpx",overflow:"hidden",margin:"0 20rpx"}},[i("com-nav",{attrs:{col:5}})],1),i("v-uni-view",{staticClass:"order-status"},[i("v-uni-view",{staticClass:"status-wrap"},[i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-view",{staticClass:"cell-text wode"},[t._v("我的订单")]),i("v-uni-text",{staticClass:"look"},[t._v("查看全部订单")])],1),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1),i("v-uni-view",{staticClass:"status-list"},t._l(t.orderStatusList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"status-item",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/order/order?state=(index)")}}},[i("v-uni-view",{staticClass:"item-icon",class:e.icon}),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(e.name))])],1)})),1)],1)],1),i("v-uni-view",{staticClass:"com-item"},[i("v-uni-view",{staticClass:"com-wrap"},t._l(t.serverList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cartIndex(n)}}},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-image",{staticClass:"cell-icon",attrs:{src:e.icon,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cell-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cartIndex(n)}}},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1)})),1)],1),i("v-uni-view",{staticClass:"com-item"},[i("v-uni-view",{staticClass:"com-wrap"},t._l(t.serverList1,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addressindex.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-image",{staticClass:"cell-icon",attrs:{src:e.icon,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cell-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addressindex.apply(void 0,arguments)}}},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1)})),1)],1),i("v-uni-view",{staticClass:"com-item"},[i("v-uni-view",{staticClass:"com-wrap"},t._l(t.serverList2,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setIndex(n)}}},[i("v-uni-view",{staticClass:"cell-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setIndex(n)}}},[i("v-uni-image",{staticClass:"cell-icon",attrs:{src:e.icon,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cell-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setIndex(n)}}},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1)})),1)],1),i("v-uni-view",{staticClass:"com-item"},[i("v-uni-view",{staticClass:"com-wrap"},t._l(t.serverList3,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-image",{staticClass:"cell-icon",attrs:{src:e.icon,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cell-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.marketIndex.apply(void 0,arguments)}}},[t._v(t._s(e.title)),i("v-uni-text",{staticClass:"dianpu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.marketIndex.apply(void 0,arguments)}}},[t._v("进入店铺")])],1)],1),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1)})),1)],1)],1)},o=[]}}]);