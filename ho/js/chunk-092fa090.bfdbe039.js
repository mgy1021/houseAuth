(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-092fa090"],{"2b92":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Det"},[n("el-carousel",{attrs:{height:"500px"}},e._l(e.imgs,(function(e){return n("el-carousel-item",{key:e.id},[n("img",{attrs:{src:e.url,alt:""}})])})),1),n("div",{staticClass:"details"},[n("div",{staticClass:"title"},[e._v(e._s(e.newDet.title))]),n("div",{staticClass:"date"},[e._v(" "+e._s(e.moment(e.newDet.publish_time).format("YYYY-MM-DD"))+" ")]),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.newDet.content)}},[e._v(" "+e._s(e.newDet.content)+" ")])])],1)},r=[],s=n("e9ff"),i=(n("e186"),n("aa2a")),c=n("caaf"),u=n.n(c),o=n("7009"),d={data:function(){return{newDet:{},id:0,moment:u.a,imgs:[]}},computed:{},methods:{queryOne:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["a"])({type:1});case 2:n=t.sent,e.imgs=n.data;case 4:case"end":return t.stop()}}),t)})))()},newsFindAll:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])();case 2:n=t.sent,e.newDet=n.data[e.id-1];case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id=this.$route.query.id,this.newsFindAll(),this.queryOne()},mounted:function(){}},l=d,m=(n("6ec4"),n("cba8")),f=Object(m["a"])(l,a,r,!1,null,"8dda9720",null);t["default"]=f.exports},6635:function(e,t,n){},"6ec4":function(e,t,n){"use strict";n("6635")}}]);
//# sourceMappingURL=chunk-092fa090.bfdbe039.js.map