webpackJsonp([0],[,,function(t,e,n){"use strict";var s=n(3),i=n(50),a=n(36),r=n.n(a),o=n(37),c=n.n(o),l=n(38),p=n.n(l),u=n(35),d=n.n(u),v=n(34),f=n.n(v),m=n(33),_=n.n(m),h=n(39),g=n.n(h);s.a.use(i.a),e.a=new i.a({routes:[{path:"/",components:{header:r.a,swipe:c.a,swipeList:p.a,footer:d.a},beforeEnter:function(t,e,n){[].forEach.call(document.getElementsByTagName("li"),function(t){t.className=""}),n()}},{path:"/bigevent",components:{header:r.a,bigEvent:f.a,footer:d.a}},{path:"/video",components:{header:r.a,watchVideo:g.a,footer:d.a}},{path:"/about",components:{header:r.a,aboutContent:_.a,footer:d.a}}],scrollBehavior:function(t,e,n){return console.log(t,e,n),{x:0,y:0}}})},,,,function(t,e,n){n(20);var s=n(0)(n(9),n(41),null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=n(4),n(18)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=[{h3:"相识-遇校园",p1:"七年前，相识于炮院，一切顺与自然",p2:"谁曾想",p3:"已缘定终身",p4:"此后之岁月，需携手游世间"},{h3:"相知-渡城市",p1:"从郑州到上海，几度分离几度圆",p2:"其中均衡",p3:"不过于他日长路漫漫",p4:"再回乡里，人甚言"},{h3:"相爱-迎未来",p1:"携手之时日，尚未可期",p2:"但谨记",p3:"你我均识庭前木",p4:"翘首不弃身下泥"}];e.default={name:"aboutContent",data:function(){return{src:"https://cdn.yuhanle.com//wedding/img/about.jpg",docs:s}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bigEvent",data:function(){return{src:"https://cdn.yuhanle.com//wedding/img/poster2.jpg",src2:"https://cdn.yuhanle.com//wedding/img/share2.jpg"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header",data:function(){return{src:"/static/img/logo.png"}},methods:{show:function(){this.src="/static/img/wx-qrcode.jpg"},hide:function(){this.src="/static/img/logo.png"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),i=[{text:"首页",link:"/"},{text:"大事件",link:"/bigevent"},{text:"观看视频",link:"/video"},{text:"关于我们",link:"/about"}];e.default={name:"header",data:function(){return{navItems:i,navIn:"nav-out"}},methods:{toLink:function(t,e){[].forEach.call(document.getElementsByTagName("li"),function(t){t.className=""}),e.target.className="selected",s.a.push(t||"/")},addClass:function(t){t.target.className.match(new RegExp("(\\s|^)selected(\\s|$)"))||(t.target.className=" "),t.target.className.match(new RegExp("(\\s|^)nav-in(\\s|$)"))||(t.target.className+=" nav-in")},rmClass:function(t){t.target.className.match(new RegExp("(\\s|^)selected(\\s|$)"))||(t.target.className=" "),t.target.className.match(new RegExp("(\\s|^)nav-out(\\s|$)"))||(t.target.className+=" nav-out")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),i=(n.n(s),[{src:"https://cdn.yuhanle.com//wedding/img/home_bg.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/home_bg2.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/home_bg3.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/home_bg7.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/home_bg5.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/home_bg6.jpg"}]);e.default={name:"swipe",components:{swiper:s.swiper,swiperSlide:s.swiperSlide},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationClickable:!0,autoplay:5e3,effect:"coverflow",parallax:!0,preloadImages:!1,lazyLoading:!0,loop:!0},imgArr:i}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),i=(n.n(s),[{src:"https://cdn.yuhanle.com//wedding/img/list0.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/list1.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/list2.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/list3.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/list4.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/list5.jpg"},{src:"https://cdn.yuhanle.com//wedding/img/list6.jpg"}]);e.default={name:"swipeList",components:{swiper:s.swiper,swiperSlide:s.swiperSlide},data:function(){return{swiperOption:{slidesPerView:4,spaceBetween:10},imgArr:i}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(30),i=n.n(s);e.default={name:"watchVideo",data:function(){return{src:"https://cdn.yuhanle.com//wedding/img/bigevent.jpg",src2:"https://cdn.yuhanle.com//wedding/img/share3.jpg",video:{url:"https://cdn.yuhanle.com//wedding/wedding.mp4",pic:"https://cdn.yuhanle.com//wedding/img/poster.jpg"},autoplay:!1}},methods:{play:function(){console.log("play callback")}},components:{"d-player":i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=n(6),a=n.n(i),r=n(2);s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){var s=n(0)(n(7),n(49),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(8),n(48),null,null);t.exports=s.exports},function(t,e,n){n(23);var s=n(0)(n(10),n(44),null,null);t.exports=s.exports},function(t,e,n){n(25);var s=n(0)(n(11),n(46),null,null);t.exports=s.exports},function(t,e,n){n(26);var s=n(0)(n(12),n(47),null,null);t.exports=s.exports},function(t,e,n){n(21);var s=n(0)(n(13),n(42),null,null);t.exports=s.exports},function(t,e,n){n(19);var s=n(0)(n(14),n(40),null,null);t.exports=s.exports},function(t,e,n){n(24);var s=n(0)(n(15),n(45),null,null);t.exports=s.exports},function(t,e,n){n(22);var s=n(0)(n(16),n(43),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swipe"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgArr,function(t){return n("swiper-slide",{key:t.src},[n("img",{attrs:{src:t.src}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"header"}}),t._v(" "),n("router-view",{attrs:{name:"swipe"}}),t._v(" "),n("router-view",{attrs:{name:"swipeList"}}),t._v(" "),n("router-view",{attrs:{name:"bigEvent"}}),t._v(" "),n("router-view",{attrs:{name:"aboutContent"}}),t._v(" "),n("router-view",{attrs:{name:"watchVideo"}}),t._v(" "),n("router-view",{attrs:{name:"footer"}}),t._v(" "),n("div",{staticClass:"clearFloat"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"col",attrs:{id:"nav"}},[n("router-link",{staticClass:"logo",attrs:{to:"/",tag:"div"}},[n("img",{attrs:{src:"/static/img/logo.png"}})]),t._v(" "),n("div",{staticClass:"nav-item"},[n("ul",t._l(t.navItems,function(e,s){return n("li",{on:{mouseover:function(e){return t.addClass(e)},mouseleave:function(e){return t.rmClass(e)},click:function(n){return t.toLink(e.link,n)}}},[t._v("\n                    "+t._s(e.text)+"\n                ")])}),0)])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"banner"},[t._m(0),t._v(" "),n("img",{attrs:{src:t.src}})]),t._v(" "),n("d-player",{ref:"player",attrs:{video:t.video,autoplay:t.autoplay},on:{play:t.play}}),t._v(" "),n("div",{staticClass:"introduce"},[n("div",{staticClass:"pic mar1"},[n("img",{attrs:{src:t.src2}}),t._v(" "),t._m(1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"bigH3"}},[t._v("我们已安然度过七年"),n("br"),t._v("改变不断"),n("br"),t._v("追忆漫漫无边")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ad"},[n("h3",[t._v("终于等到你"),n("br"),t._v("在2017年的这一天")]),t._v(" "),n("p",{staticClass:"word"},[t._v("今夕何夕，空气里都充满了醉人的甜蜜。")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"banner"},[n("h3",{attrs:{id:"about"}}),t._v(" "),n("img",{attrs:{src:t.src}})]),t._v(" "),n("div",t._l(t.docs,function(e){return n("div",{staticClass:"mar"},[n("h3",[t._v(t._s(e.h3))]),t._v(" "),n("p",{staticClass:"word"},[t._v(t._s(e.p1))]),t._v(" "),n("p",{staticClass:"word"},[t._v(t._s(e.p2))]),t._v(" "),n("p",{staticClass:"word"},[t._v(t._s(e.p3))]),t._v(" "),n("p",{staticClass:"word"},[t._v(t._s(e.p4))])])}),0)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgArr,function(t){return n("swiper-slide",{key:t.src},[n("img",{attrs:{src:t.src}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"banner"},[n("h1",[t._v("我们从这里开始")]),t._v(" "),n("img",{attrs:{src:t.src}})]),t._v(" "),n("div",{staticClass:"introduce"},[t._m(0),t._v(" "),n("div",{staticClass:"pic mar1"},[n("img",{attrs:{src:t.src2}}),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text mar1"},[n("p",[t._v("是该庆幸")]),t._v(" "),n("p",[t._v("在我们逐步走入对方的生活中时")]),t._v(" "),n("p",[t._v("那份静谧如此自然")]),t._v(" "),n("p",[t._v("2017.10.10")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ad"},[n("h3",[t._v("没有海誓山盟"),n("br"),t._v("幸福足够")]),t._v(" "),n("p",{staticClass:"word"},[t._v("如同太平盛世一叶飘舟，游际于岁月长河。")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"address"},[n("div",{staticClass:"data"},[n("img",{attrs:{src:t.src}}),t._v(" "),n("p",[t._v("河南省信阳市新县沙窝镇健康路")])]),t._v(" "),n("div",{staticClass:"link"},[n("a",{attrs:{id:"wechat",href:"javascript:;"},on:{mouseover:t.show,mouseleave:t.hide}})])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"company"},[n("p",[t._v("联系邮箱  wancode@foxmail.com")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}}],[17]);
//# sourceMappingURL=app.d704920e6ce3b333c764.js.map