(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+4q9":function(t,s,e){t.exports=e.p+"assets/img/hack_newsletter.7a223066.png"},"5aWI":function(t,s,e){},Cr2b:function(t,s,e){"use strict";var a=e("r1LF"),r=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,i={components:{MailchimpSubscribe:a.a},data:function(){return{email:"",url:"https://hack.us7.list-manage.com/subscribe/post-json",userId:"2f5135b55e33a57f177a0e158",listId:"16c540b6e8"}},computed:{invalidFeedback:function(){return r.test(this.email)?"":"Please, enter a valid email."}}},n=(e("EQ/l"),e("KHd+")),l=Object(n.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("mailchimp-subscribe",{attrs:{url:t.url,"user-id":t.userId,"list-id":t.listId},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.subscribe,i=s.setEmail,n=s.error,l=s.success,o=s.loading;return[a("b-row",{staticClass:"mt-5 p-2 newsletter"},[a("b-col",{staticClass:"img-container",attrs:{cols:"12",sm:"3"}},[a("img",{attrs:{src:e("+4q9"),alt:"newsletter",width:"90%"}})]),a("b-col",[a("h3",[t._v("Let's build the decentralized future together!")]),a("h4",[t._v("Subscribe for updates from the blog")]),a("b-form",{attrs:{inline:""},on:{submit:function(s){s.preventDefault(),t.email&&!t.invalidFeedback&&(i(t.email),r())}}},[n||l?t._e():a("b-form-group",{attrs:{"invalid-feedback":t.invalidFeedback}},[a("b-row",[a("b-col",{staticClass:"mb-2 mb-md-0"},[a("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("E-mail")]),a("b-form-input",{staticClass:"mb-2 mr-sm-2 w-100 h-100",attrs:{disabled:o,id:"email",placeholder:"Your email"},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_2f5135b55e33a57f177a0e158_16c540b6e8",tabindex:"-1",value:""}})])],1),a("b-col",{attrs:{cols:"12",md:"4"}},[a("b-button",{staticClass:"w-100",attrs:{variant:"primary",type:"submit",disabled:o}},[t._v("Subscribe")])],1)],1)],1),o?a("b-progress",{staticClass:"mt-1 mb-1",attrs:{variant:"primary",value:100,animated:""}}):t._e(),n?a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(n)}}):t._e(),l?a("div",[t._v("Thank you for subscribing!")]):t._e()],1)],1)],1)]}}])})}),[],!1,null,"102ecac7",null);s.a=l.exports},"EQ/l":function(t,s,e){"use strict";var a=e("5aWI");e.n(a).a},F5n6:function(t,s,e){"use strict";var a=e("Wsvf"),r={props:{info:{type:Object,required:!0}},components:{Pager:a.a}},i=e("KHd+"),n=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Pager",{staticClass:"pagination justify-content-center",attrs:{info:this.info,linkClass:"page-link rounded"}})}),[],!1,null,null,null);s.a=n.exports},RnhZ:function(t,s,e){var a={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(t){var s=i(t);return e(s)}function i(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="RnhZ"},nJNL:function(t,s,e){"use strict";var a={props:{categories:{type:Array,required:!0}}},r=e("KHd+"),i=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"list-inline"},t._l(t.categories,(function(s,a){return e("li",{key:s.id,staticClass:"list-inline-item m-0"},[e("g-link",{staticClass:"text-uppercase font-weight-bold mx-1",attrs:{to:s.path}},[t._v(t._s(s.title))]),a<t.categories.length-1?e("span",[t._v("·")]):t._e()],1)})),0)}),[],!1,null,null,null).exports,n=e("wd/R"),l=e.n(n),o={props:{date:{type:String,required:!0}},computed:{formatedDate:function(){return l()(this.date).locale("en_gb").format("ll")}}},c=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.formatedDate))])}),[],!1,null,null,null).exports,u=(e("TeQF"),e("rB9j"),e("EnZy"),{components:{FormatedDate:c},props:{post:{type:Object,required:!0}},computed:{readingTime:function(){var t=this.post&&this.post.content?this.post.content.split(" ").filter((function(t){return t.length>2})).length:0,s=Math.round(t/200);return" &asymp;".concat(Math.max(1,s),"min")}}}),j={components:{CategoriesList:i,FormatedDate:c,ReadMore:Object(r.a)(u,(function(){var t=this.$createElement,s=this._self._c||t;return s("b-button",{staticClass:"read-more border-0 mb-5",attrs:{variant:"primary",to:this.post.path}},[s("span",[s("b",{staticClass:"text-uppercase"},[this._v("Read More")]),s("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.readingTime)}})])])}),[],!1,null,null,null).exports},props:{post:{type:Object,required:!0}}},m=Object(r.a)(j,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-row",{attrs:{tag:"article"}},[e("b-col",{staticClass:"meta-data py-md-5 text-center position-relative d-flex",attrs:{"data-first":t.post.title?t.post.title.charAt(0):"",md:"3"}},[e("div",{staticClass:"mx-auto mb-2 position-relative"},[e("formated-date",{staticClass:"post-date font-weight-bold",attrs:{date:t.post.date}}),e("i",{staticClass:"d-none d-md-block"},[t._v("in:")]),e("categories-list",{staticClass:"mb-0",attrs:{categories:t.post.categories}}),t.post.author?e("div",[e("i",[t._v("by: ")]),e("g-link",{staticClass:"font-weight-bold",attrs:{to:t.post.author.path}},[t._v("\n          "+t._s(t.post.author.name)+"\n        ")])],1):t._e()],1)]),e("b-col",{staticClass:"mb-5 py-md-5"},[t._t("default",[e("g-link",{staticClass:"text-dark",attrs:{to:t.post.path}},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h1 post-title text-break mb-4",domProps:{innerHTML:t._s(t.post.title)}})]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-excerpt text-break mb-4",domProps:{innerHTML:t._s(t.post.excerpt)}}),e("read-more",{attrs:{post:t.post}})])],2)],1)}),[],!1,null,null,null);s.a=m.exports},xgR8:function(t,s,e){"use strict";e.r(s);var a=e("nJNL"),r=e("F5n6"),i=e("Cr2b"),n={components:{Post:a.a,Pagination:r.a,NewsletterForm:i.a},metaInfo:function(){return{title:this.$page.category.title}}},l=e("KHd+"),o=null,c=Object(l.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("b-row",{staticClass:"align-items-start"},[s("transition",{attrs:{name:"fade",appear:""}},[s("b-col",{staticClass:"bg-white p-0 rounded shadow-lg",attrs:{tag:"main",cols:"12",lg:"12"}},[s("div",{staticClass:"overflow-hidden p-4 p-sm-5 "},[s("h1",{staticClass:"text-center text-uppercase h5 font-family-sans-serif mb-5"},[this._v("\n            Category: "+this._s(this.$page.category.title)+"\n          ")]),this._l(this.$page.category.belongsTo.edges,(function(t){var e=t.node;return s("Post",{key:e.id,attrs:{post:e}})})),s("Pagination",{attrs:{info:this.$page.category.belongsTo.pageInfo}})],2)])],1)],1),s("NewsletterForm")],1)}),[],!1,null,null,null);"function"==typeof o&&o(c);s.default=c.exports}}]);