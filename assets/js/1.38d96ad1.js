(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(t,e,n){},158:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},175:function(t,e,n){"use strict";n(157)},176:function(t,e,n){"use strict";n(158)},177:function(t,e,n){"use strict";n(159)},178:function(t,e,n){"use strict";n(160)},179:function(t,e,n){"use strict";n(161)},180:function(t,e,n){"use strict";n(40),n(14),n(26);var s={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},c=(n(175),n(1)),i=Object(c.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"e696302c",null);e.a=i.exports},181:function(t,e,n){"use strict";var s={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},c=(n(179),n(1)),i=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"99d18c78",null);e.a=i.exports},182:function(t,e,n){"use strict";n(176);var s=n(1),c=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"5f8691fa",null);e.a=c.exports},183:function(t,e,n){"use strict";n(177);var s=n(1),c=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"4407b16c",null);e.a=c.exports},184:function(t,e,n){"use strict";n(178);var s=n(1),c=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"9b10c212",null);e.a=c.exports},204:function(t,e,n){},230:function(t,e,n){"use strict";n(204)},255:function(t,e,n){"use strict";n.r(e);n(25),n(95);var s=n(180),c=n(182),i=n(183),a=n(184),o=n(181),r={components:{"ez-layout":s.a,"ez-header":c.a,"ez-footer":i.a,"ez-content":a.a,"ez-sider":o.a},data:function(){return{content:'\n     <ez-layout style="color: white; margin-bottom:50px;">\n          <ez-header style="height: 50px; background:#3eaf7c;">\n              header\n          </ez-header>\n          <ez-content style="height: 100px; background:#ccedde;">\n              content\n          </ez-content>\n          <ez-footer style="height: 50px; background:#3eaf7c;">\n              footer\n          </ez-footer>\n        </ez-layout>\n  '.replace(/^ {8}/gm,"").trim()}}},u=(n(230),n(1)),l=Object(u.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("ez-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("ez-header",{staticStyle:{height:"50px",background:"#3eaf7c"}},[t._v("\n            header\n        ")]),t._v(" "),n("ez-content",{staticClass:"cn"},[t._v("\n            content\n        ")]),t._v(" "),n("ez-footer",{staticStyle:{height:"50px",background:"#3eaf7c"}},[t._v("\n            footer\n        ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("使用方法")])])}],!1,null,"249f6d94",null);e.default=l.exports}}]);