(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{376:function(t,a,e){},377:function(t,a,e){"use strict";var s={props:{categories:{type:Array,required:!0}}},n=e(31),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list-inline"},t._l(t.categories,(function(a,s){return e("li",{key:a.id,staticClass:"list-inline-item m-0"},[e("g-link",{staticClass:"text-uppercase font-weight-bold mx-1",attrs:{to:a.path}},[t._v(t._s(a.title))]),s<t.categories.length-1?e("span",[t._v("·")]):t._e()],1)})),0)}),[],!1,null,null,null).exports,r=e(248),c=e.n(r),o={props:{date:{type:String,required:!0}},computed:{formatedDate:function(){return c()(this.date).locale("en_gb").format("ll")}}},l=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.formatedDate))])}),[],!1,null,null,null).exports,g=(e(107),e(71),{components:{FormatedDate:l},props:{post:{type:Object,required:!0}},computed:{readingTime:function(){var t=this.post&&this.post.content?this.post.content.split(" ").filter((function(t){return t.length>2})).length:0,a=Math.round(t/200);return" &asymp;".concat(Math.max(1,a),"min")}}}),d={components:{CategoriesList:i,FormatedDate:l,ReadMore:Object(n.a)(g,(function(){var t=this.$createElement,a=this._self._c||t;return a("b-button",{staticClass:"read-more border-0 mb-5",attrs:{variant:"primary",to:this.post.path}},[a("span",[a("b",{staticClass:"text-uppercase"},[this._v("Read More")]),a("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.readingTime)}})])])}),[],!1,null,null,null).exports},props:{post:{type:Object,required:!0}}},b=Object(n.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-row",{attrs:{tag:"article"}},[e("b-col",{staticClass:"meta-data py-md-5 text-center position-relative d-flex",attrs:{"data-first":t.post.title?t.post.title.charAt(0):"",md:"3"}},[e("div",{staticClass:"mx-auto mb-2 position-relative"},[e("formated-date",{staticClass:"post-date font-weight-bold",attrs:{date:t.post.date}}),e("i",{staticClass:"d-none d-md-block"},[t._v("in:")]),e("categories-list",{staticClass:"mb-0",attrs:{categories:t.post.categories}}),t.post.author?e("div",[e("i",[t._v("by: ")]),e("g-link",{staticClass:"font-weight-bold",attrs:{to:t.post.author.path}},[t._v("\n          "+t._s(t.post.author.name)+"\n        ")])],1):t._e()],1)]),e("b-col",{staticClass:"mb-5 py-md-5"},[t._t("default",[e("g-link",{staticClass:"text-dark",attrs:{to:t.post.path}},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h1 post-title text-break mb-4",domProps:{innerHTML:t._s(t.post.title)}})]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-excerpt text-break mb-4",domProps:{innerHTML:t._s(t.post.excerpt)}}),e("read-more",{attrs:{post:t.post}})])],2)],1)}),[],!1,null,null,null);a.a=b.exports},378:function(t,a,e){"use strict";var s=e(379),n={props:{info:{type:Object,required:!0}},components:{Pager:s.a}},i=e(31),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("Pager",{staticClass:"pagination justify-content-center",attrs:{info:this.info,linkClass:"page-link rounded"}})}),[],!1,null,null,null);a.a=r.exports},380:function(t,a,e){var s={"./af":249,"./af.js":249,"./ar":250,"./ar-dz":251,"./ar-dz.js":251,"./ar-kw":252,"./ar-kw.js":252,"./ar-ly":253,"./ar-ly.js":253,"./ar-ma":254,"./ar-ma.js":254,"./ar-sa":255,"./ar-sa.js":255,"./ar-tn":256,"./ar-tn.js":256,"./ar.js":250,"./az":257,"./az.js":257,"./be":258,"./be.js":258,"./bg":259,"./bg.js":259,"./bm":260,"./bm.js":260,"./bn":261,"./bn.js":261,"./bo":262,"./bo.js":262,"./br":263,"./br.js":263,"./bs":264,"./bs.js":264,"./ca":265,"./ca.js":265,"./cs":266,"./cs.js":266,"./cv":267,"./cv.js":267,"./cy":268,"./cy.js":268,"./da":269,"./da.js":269,"./de":270,"./de-at":271,"./de-at.js":271,"./de-ch":272,"./de-ch.js":272,"./de.js":270,"./dv":273,"./dv.js":273,"./el":274,"./el.js":274,"./en-SG":275,"./en-SG.js":275,"./en-au":276,"./en-au.js":276,"./en-ca":277,"./en-ca.js":277,"./en-gb":278,"./en-gb.js":278,"./en-ie":279,"./en-ie.js":279,"./en-il":280,"./en-il.js":280,"./en-nz":281,"./en-nz.js":281,"./eo":282,"./eo.js":282,"./es":283,"./es-do":284,"./es-do.js":284,"./es-us":285,"./es-us.js":285,"./es.js":283,"./et":286,"./et.js":286,"./eu":287,"./eu.js":287,"./fa":288,"./fa.js":288,"./fi":289,"./fi.js":289,"./fo":290,"./fo.js":290,"./fr":291,"./fr-ca":292,"./fr-ca.js":292,"./fr-ch":293,"./fr-ch.js":293,"./fr.js":291,"./fy":294,"./fy.js":294,"./ga":295,"./ga.js":295,"./gd":296,"./gd.js":296,"./gl":297,"./gl.js":297,"./gom-latn":298,"./gom-latn.js":298,"./gu":299,"./gu.js":299,"./he":300,"./he.js":300,"./hi":301,"./hi.js":301,"./hr":302,"./hr.js":302,"./hu":303,"./hu.js":303,"./hy-am":304,"./hy-am.js":304,"./id":305,"./id.js":305,"./is":306,"./is.js":306,"./it":307,"./it-ch":308,"./it-ch.js":308,"./it.js":307,"./ja":309,"./ja.js":309,"./jv":310,"./jv.js":310,"./ka":311,"./ka.js":311,"./kk":312,"./kk.js":312,"./km":313,"./km.js":313,"./kn":314,"./kn.js":314,"./ko":315,"./ko.js":315,"./ku":316,"./ku.js":316,"./ky":317,"./ky.js":317,"./lb":318,"./lb.js":318,"./lo":319,"./lo.js":319,"./lt":320,"./lt.js":320,"./lv":321,"./lv.js":321,"./me":322,"./me.js":322,"./mi":323,"./mi.js":323,"./mk":324,"./mk.js":324,"./ml":325,"./ml.js":325,"./mn":326,"./mn.js":326,"./mr":327,"./mr.js":327,"./ms":328,"./ms-my":329,"./ms-my.js":329,"./ms.js":328,"./mt":330,"./mt.js":330,"./my":331,"./my.js":331,"./nb":332,"./nb.js":332,"./ne":333,"./ne.js":333,"./nl":334,"./nl-be":335,"./nl-be.js":335,"./nl.js":334,"./nn":336,"./nn.js":336,"./pa-in":337,"./pa-in.js":337,"./pl":338,"./pl.js":338,"./pt":339,"./pt-br":340,"./pt-br.js":340,"./pt.js":339,"./ro":341,"./ro.js":341,"./ru":342,"./ru.js":342,"./sd":343,"./sd.js":343,"./se":344,"./se.js":344,"./si":345,"./si.js":345,"./sk":346,"./sk.js":346,"./sl":347,"./sl.js":347,"./sq":348,"./sq.js":348,"./sr":349,"./sr-cyrl":350,"./sr-cyrl.js":350,"./sr.js":349,"./ss":351,"./ss.js":351,"./sv":352,"./sv.js":352,"./sw":353,"./sw.js":353,"./ta":354,"./ta.js":354,"./te":355,"./te.js":355,"./tet":356,"./tet.js":356,"./tg":357,"./tg.js":357,"./th":358,"./th.js":358,"./tl-ph":359,"./tl-ph.js":359,"./tlh":360,"./tlh.js":360,"./tr":361,"./tr.js":361,"./tzl":362,"./tzl.js":362,"./tzm":363,"./tzm-latn":364,"./tzm-latn.js":364,"./tzm.js":363,"./ug-cn":365,"./ug-cn.js":365,"./uk":366,"./uk.js":366,"./ur":367,"./ur.js":367,"./uz":368,"./uz-latn":369,"./uz-latn.js":369,"./uz.js":368,"./vi":370,"./vi.js":370,"./x-pseudo":371,"./x-pseudo.js":371,"./yo":372,"./yo.js":372,"./zh-cn":373,"./zh-cn.js":373,"./zh-hk":374,"./zh-hk.js":374,"./zh-tw":375,"./zh-tw.js":375};function n(t){var a=i(t);return e(a)}function i(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=380},381:function(t,a,e){t.exports=e.p+"assets/img/hack_newsletter.7a223066.png"},391:function(t,a,e){"use strict";var s=e(376);e.n(s).a},392:function(t,a,e){"use strict";var s=e(382),n=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,i={components:{MailchimpSubscribe:s.a},data:function(){return{email:"",url:"https://hack.us7.list-manage.com/subscribe/post-json",userId:"2f5135b55e33a57f177a0e158",listId:"16c540b6e8"}},computed:{invalidFeedback:function(){return n.test(this.email)?"":"Please, enter a valid email."}}},r=(e(391),e(31)),c=Object(r.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("mailchimp-subscribe",{attrs:{url:t.url,"user-id":t.userId,"list-id":t.listId},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.subscribe,i=a.setEmail,r=a.error,c=a.success,o=a.loading;return[s("b-row",{staticClass:"mt-5 p-2 newsletter"},[s("b-col",{staticClass:"img-container",attrs:{cols:"12",sm:"3"}},[s("img",{attrs:{src:e(381),alt:"newsletter",width:"90%"}})]),s("b-col",[s("h3",[t._v("Let's build the decentralized future together!")]),s("h4",[t._v("Subscribe for updates from the blog")]),s("b-form",{attrs:{inline:""},on:{submit:function(a){a.preventDefault(),t.email&&!t.invalidFeedback&&(i(t.email),n())}}},[r||c?t._e():s("b-form-group",{attrs:{"invalid-feedback":t.invalidFeedback}},[s("b-row",[s("b-col",{staticClass:"mb-2 mb-md-0"},[s("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("E-mail")]),s("b-form-input",{staticClass:"mb-2 mr-sm-2 w-100 h-100",attrs:{disabled:o,id:"email",placeholder:"Your email"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),s("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[s("input",{attrs:{type:"text",name:"b_2f5135b55e33a57f177a0e158_16c540b6e8",tabindex:"-1",value:""}})])],1),s("b-col",{attrs:{cols:"12",md:"4"}},[s("b-button",{staticClass:"w-100",attrs:{variant:"primary",type:"submit",disabled:o}},[t._v("Subscribe")])],1)],1)],1),o?s("b-progress",{staticClass:"mt-1 mb-1",attrs:{variant:"primary",value:100,animated:""}}):t._e(),r?s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(r)}}):t._e(),c?s("div",[t._v("Thank you for subscribing!")]):t._e()],1)],1)],1)]}}])})}),[],!1,null,"102ecac7",null);a.a=c.exports},404:function(t,a){},429:function(t,a,e){"use strict";var s=e(404),n=e.n(s);a.default=n.a},434:function(t){t.exports=JSON.parse('{"/tag/adex":[1,"2c39cac4"],"/tag/aepp":[1,"3fc7c60c"],"/tag/aeternity":[1,"c49963e4"],"/tag/aeternity/2":[1,"4e78b7e7"],"/tag/aeternitystarfleet":[1,"8b8725da"],"/tag/aeternity-universe":[1,"6dd010fa"],"/tag/ai":[1,"1684b8d6"],"/tag/amazon-aws":[1,"10d2d52b"],"/tag/application":[1,"c052ce5c"],"/tag/art":[1,"2f950950"],"/tag/assembly":[1,"c37dd61e"],"/tag/berlin":[1,"6261b072"],"/tag/bitcoi":[1,"6002ed8e"],"/tag/bitcoin":[1,"1b015fa0"],"/tag/blockchain":[1,"58afb5e6"],"/tag/blockchain/2":[1,"36962bf2"],"/tag/blockchain/3":[1,"6c1f47d5"],"/tag/blockchain/4":[1,"51b5dc12"],"/tag/blockchain/5":[1,"0f32f3d6"],"/tag/blockchain-audit":[1,"0cbf80d0"],"/tag/blockchain-backend":[1,"2546af11"],"/tag/blockchain-consulting":[1,"25af2ed9"],"/tag/blockchain-development":[1,"9b2834b4"],"/tag/blockchain-frontend":[1,"89ee1596"],"/tag/blockchain-mobile":[1,"4e8c6485"],"/tag/blockchain-network":[1,"b04bfaaa"],"/tag/blockrocket":[1,"fe3358f2"],"/tag/blog":[1,"14585c6a"],"/tag/browser-extension":[1,"80c5ec1e"],"/tag/buidl":[1,"7906e331"],"/tag/bulgaria":[1,"37d750c0"],"/tag/business":[1,"764900bf"],"/tag/business/2":[1,"b4d39d26"],"/tag/chaos-communication-camp":[1,"6b523bbe"],"/tag/conference":[1,"36b1edfe"],"/tag/cosmos":[1,"bd942448"],"/tag/crypto":[1,"4b41c8b7"],"/tag/cumulus":[1,"9a5e7286"],"/tag/dao":[1,"7fcfac4f"],"/tag/dappcon":[1,"0eb7e1af"],"/tag/decentralized":[1,"c004265a"],"/tag/decentralized-applications":[1,"3e2b7ab9"],"/tag/decentralized-voting":[1,"7ce729e2"],"/tag/defi":[1,"ae9030f4"],"/tag/developer":[1,"37bb0635"],"/tag/development":[1,"772c9544"],"/tag/dns":[1,"66ef62da"],"/tag/dronathon":[1,"6953828c"],"/tag/drones":[1,"06e1a2e8"],"/tag/education":[1,"7b35e892"],"/tag/ethereum":[1,"94271314"],"/tag/ethereum/2":[1,"6b4cb725"],"/tag/europe":[1,"54751cea"],"/tag/events":[1,"35add68a"],"/tag/finance":[1,"35d9b247"],"/tag/fintech":[1,"cdca6924"],"/tag/fundraising":[1,"1eeab8fe"],"/tag/gaming":[1,"33a3e7c5"],"/tag/google":[1,"4e4dcbbc"],"/tag/governance":[1,"e5852bb2"],"/tag/grandpa":[1,"4831b68a"],"/tag/hackathons":[1,"079ac311"],"/tag/hackbg":[1,"271378d9"],"/tag/healthcare":[1,"5f760cd2"],"/tag/hyperledger":[1,"caed40a0"],"/tag/ico":[1,"5f9cead8"],"/tag/ico-fundraising":[1,"e0f92f60"],"/tag/ico-or-sto":[1,"015ef4b6"],"/tag/ico-vs-sto":[1,"0b50897f"],"/tag/idea":[1,"1731c27d"],"/tag/ieo":[1,"20ba0779"],"/tag/incubator":[1,"412fc3ca"],"/tag/initial-coin-offering":[1,"4b8ff167"],"/tag/initial-exchange-offering":[1,"b24045d6"],"/tag/insurance":[1,"bea28990"],"/tag/investor":[1,"a49f2b7e"],"/tag/meetup":[1,"515c14d0"],"/tag/meetup/2":[1,"4d7e46d2"],"/tag/metamask":[1,"a8bc7f30"],"/tag/ownership":[1,"b71db6c8"],"/tag/parachain":[1,"d6843e3a"],"/tag/partnership":[1,"2e8784c2"],"/tag/poland":[1,"2f99775a"],"/tag/polkadot":[1,"828236be"],"/tag/real-estate":[1,"3f47bc27"],"/tag/remote":[1,"f1c5901a"],"/tag/scynet":[1,"26a356c6"],"/tag/security":[1,"7e4e462e"],"/tag/security-token-offering":[1,"2b3c6aa4"],"/tag/services":[1,"3f649e7b"],"/tag/smart-contract":[1,"39dc4acc"],"/tag/smart-contracts":[1,"5e9c42c9"],"/tag/smart-contracts/2":[1,"0fbbb5e8"],"/tag/sofia":[1,"4e197471"],"/tag/software-development":[1,"464e5f1d"],"/tag/solidity":[1,"65e0d0cc"],"/tag/sophia-ml":[1,"c3fb0ad6"],"/tag/startup":[1,"6c5210ea"],"/tag/state-channels":[1,"32e84355"],"/tag/sto":[1,"00bfade8"],"/tag/sto-fundraising":[1,"11cff269"],"/tag/strongforce":[1,"74723fbc"],"/tag/substrate":[1,"5aefac63"],"/tag/supply-chain":[1,"4e5bdd03"],"/tag/telerik":[1,"ca10ded8"],"/tag/tendermint":[1,"df432430"],"/tag/tezos":[1,"0f543f4e"],"/tag/token":[1,"4da57523"],"/tag/tools":[1,"92f90d46"],"/tag/travel":[1,"21a789fa"],"/tag/trip":[1,"1447d364"],"/tag/tron":[1,"72427e1a"],"/tag/truffle":[1,"0299118d"],"/tag/tutorial":[1,"17877318"],"/tag/unit-testing":[1,"032f43a6"],"/tag/utility-token":[1,"2a4f2bc8"],"/tag/waellet":[1,"25119de8"],"/tag/warsaw":[1,"193a382c"],"/tag/wearedevelopers":[1,"de27250c"],"/tag/web3":[1,"78f5db64"],"/tag/web3summit":[1,"523e60bc"],"/tag/wetonomy":[1,"39dba9a8"],"/tag/zero-knowledge-proof":[1,"2ef3a8d8"],"/tag/zksnarks":[1,"ffc44e88"]}')},442:function(t,a,e){"use strict";e.r(a);var s=e(377),n=e(378),i=e(392),r={components:{Post:s.a,Pagination:n.a,NewsletterForm:i.a},metaInfo:function(){return{title:this.$page.tag.title}}},c=e(31),o=e(429),l=Object(c.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("b-row",{staticClass:"align-items-start"},[a("transition",{attrs:{name:"fade",appear:""}},[a("b-col",{staticClass:"bg-white p-0 rounded shadow-lg",attrs:{tag:"main",cols:"12",lg:"12"}},[a("div",{staticClass:"overflow-hidden p-4 p-sm-5 "},[a("h1",{staticClass:"text-center text-uppercase h5 font-family-sans-serif mb-5"},[this._v("\n            Tag: "+this._s(this.$page.tag.title)+"\n          ")]),this._l(this.$page.tag.belongsTo.edges,(function(t){var e=t.node;return a("Post",{key:e.id,attrs:{post:e}})})),a("Pagination",{attrs:{info:this.$page.tag.belongsTo.pageInfo}})],2)])],1)],1),a("NewsletterForm")],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(l);a.default=l.exports}}]);