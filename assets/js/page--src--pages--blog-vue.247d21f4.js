(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8tYL":function(t,s,e){"use strict";e.r(s);var a=e("nJNL"),r=e("F5n6"),n={components:{Post:a.a,Pagination:r.a},metaInfo:{title:"Latest Stories"}},i=e("KHd+"),l=null,o=Object(i.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("b-row",{staticClass:"align-items-start"},[s("transition",{attrs:{name:"fade",appear:""}},[s("b-col",{staticClass:"bg-white p-0 rounded shadow-lg",attrs:{tag:"main",cols:"12",lg:"12"}},[s("div",{staticClass:"overflow-hidden p-4 p-sm-5"},[s("h1",{staticClass:"text-center text-uppercase h5 font-family-sans-serif mb-5"},[this._v("Latest Stories")]),this._l(this.$page.allWordPressPost.edges,(function(t){var e=t.node;return s("Post",{key:e.id,attrs:{post:e}})})),s("Pagination",{attrs:{info:this.$page.allWordPressPost.pageInfo}})],2)])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);s.default=o.exports},F5n6:function(t,s,e){"use strict";var a=e("Wsvf"),r={props:{info:{type:Object,required:!0}},components:{Pager:a.a}},n=e("KHd+"),i=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Pager",{staticClass:"pagination justify-content-center",attrs:{info:this.info,linkClass:"page-link rounded"}})}),[],!1,null,null,null);s.a=i.exports},JsJ1:function(t,s,e){"use strict";e("KtoM")},KtoM:function(t,s,e){},RnhZ:function(t,s,e){var a={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="RnhZ"},Wsvf:function(t,s,e){"use strict";e.d(s,"a",(function(){return i}));e("Kw5r");var a=e("DOVJ"),r=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),n=e("fVfk"),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,s){var e=s.props,i=s.data,o=s.parent,c=e.info,j=e.showLinks,u=e.showNavigation,p=e.ariaLabel,d=function(t,s){var e=t.currentPage,a=void 0===e?1:e,r=t.totalPages,n=void 0===r?1:r,i=Math.ceil(s/2),l=Math.floor(a-i),o=Math.floor(a+i);n<=s?(l=0,o=n):a<=i?(l=0,o=s):a+i>=n&&(l=n-s,o=n);for(var c=[],j=l+1;j<=o;j++)c.push(j);return{current:a,total:n,start:l,end:o,pages:c}}(c,e.range),g=d.current,f=d.total,m=d.pages,b=d.start,v=d.end,h=Object(n.d)(o.$route),y=function(s){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";s===g&&(i=e.ariaCurrentLabel);var c={to:l(h,s),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(a.a,{class:[e.linkClass,o],attrs:Object(r.a)(Object(r.a)({},c),{},{"aria-label":i.replace("%n",s),"aria-current":g===s})},[n])},k=j?m.map((function(t){return y(t,t,e.ariaLinkLabel)})):[];if(u){var C=e.firstLabel,x=e.prevLabel,L=e.nextLabel,w=e.lastLabel,O=e.ariaFirstLabel,z=e.ariaPrevLabel,S=e.ariaNextLabel,P=e.ariaLastLabel,D=e.firstClass,_=e.prevClass,M=e.nextClass,J=e.lastClass,Q=e.navClass;g>1&&k.unshift(y(g-1,x,z,[_,Q])),b>0&&k.unshift(y(1,C,O,[D,Q])),g<f&&k.push(y(g+1,L,S,[M,Q])),v<f&&k.push(y(f,w,P,[J,Q]))}return k.length<2?null:t("nav",Object(r.a)(Object(r.a)({},i),{},{attrs:{role:"navigation","aria-label":p}}),k)}};function l(t,s){var e=/\/$/.test(t)?"/":"";return s>1?Object(n.g)(t)+"/".concat(s).concat(e):t}e("6NbQ")},nJNL:function(t,s,e){"use strict";var a={props:{categories:{type:Array,required:!0}}},r=e("KHd+"),n=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"list-inline"},t._l(t.categories,(function(s,a){return e("li",{key:s.id,staticClass:"list-inline-item m-0"},[e("g-link",{staticClass:"text-uppercase font-weight-bold mx-1",attrs:{to:s.path}},[t._v(t._s(s.title))]),a<t.categories.length-1?e("span",[t._v("·")]):t._e()],1)})),0)}),[],!1,null,null,null).exports,i=e("wd/R"),l=e.n(i),o={props:{date:{type:String,required:!0}},computed:{formatedDate:function(){return l()(this.date).locale("en_gb").format("ll")}}},c=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.formatedDate))])}),[],!1,null,null,null).exports,j=(e("TeQF"),e("rB9j"),e("EnZy"),{components:{FormatedDate:c},props:{post:{type:Object,required:!0}},computed:{readingTime:function(){var t=this.post&&this.post.content?this.post.content.split(" ").filter((function(t){return t.length>2})).length:0,s=Math.round(t/200);return" &asymp;".concat(Math.max(1,s),"min")}}}),u={components:{CategoriesList:n,FormatedDate:c,ReadMore:Object(r.a)(j,(function(){var t=this.$createElement,s=this._self._c||t;return s("b-button",{staticClass:"read-more border-0 mb-5",attrs:{variant:"primary",to:this.post.path}},[s("span",[s("b",{staticClass:"text-uppercase"},[this._v("Read More")]),s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.readingTime)}})])])}),[],!1,null,null,null).exports},props:{post:{type:Object,required:!0}}},p=(e("JsJ1"),Object(r.a)(u,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-row",{attrs:{tag:"article"}},[e("b-col",{staticClass:"meta-data py-md-5 text-center position-relative d-flex",attrs:{"data-first":t.post.title?t.post.title.charAt(0):"",md:"3"}},[e("div",{staticClass:"mx-auto mb-2 position-relative"},[e("formated-date",{staticClass:"post-date font-weight-bold",attrs:{date:t.post.date}}),e("i",{staticClass:"d-none d-md-block"},[t._v("in:")]),e("categories-list",{staticClass:"mb-0",attrs:{categories:t.post.categories}}),t.post.author?e("div",[e("i",[t._v("by:")]),e("g-link",{staticClass:"font-weight-bold",attrs:{to:t.post.author.path}},[t._v(t._s(t.post.author.name))])],1):t._e()],1)]),e("b-col",{staticClass:"mb-5 py-md-5"},[t._t("default",[e("b-row",[e("b-col",[e("g-link",{staticClass:"text-dark",attrs:{to:t.post.path}},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h1 post-title text-break mb-4",domProps:{innerHTML:t._s(t.post.title)}})]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-excerpt text-break mb-4",domProps:{innerHTML:t._s(t.post.excerpt)}}),e("read-more",{attrs:{post:t.post}})],1),t.post.featuredMedia?e("b-col",{staticClass:"img-col m-0 p-0",style:{backgroundImage:"url("+t.post.featuredMedia.sourceUrl+")"},attrs:{md:"5"}}):t._e()],1)])],2)],1)}),[],!1,null,"a4132618",null));s.a=p.exports}}]);