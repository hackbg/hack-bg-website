(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+4q9":function(t,e,a){t.exports=a.p+"assets/img/hack_newsletter.7a223066.png"},"1wzT":function(t,e,a){"use strict";var s=a("RKfx");a.n(s).a},Cr2b:function(t,e,a){"use strict";var s=a("r1LF"),o=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,r={components:{MailchimpSubscribe:s.a},data:function(){return{email:"",url:"https://hack.us7.list-manage.com/subscribe/post-json",userId:"2f5135b55e33a57f177a0e158",listId:"16c540b6e8"}},computed:{invalidFeedback:function(){return o.test(this.email)?"":"Please, enter a valid email."}}},n=(a("EQ/l"),a("KHd+")),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mailchimp-subscribe",{attrs:{url:t.url,"user-id":t.userId,"list-id":t.listId},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.subscribe,r=e.setEmail,n=e.error,i=e.success,c=e.loading;return[s("b-row",{staticClass:"mt-5 p-2 newsletter"},[s("b-col",{staticClass:"img-container",attrs:{cols:"12",sm:"3"}},[s("img",{attrs:{src:a("+4q9"),alt:"newsletter",width:"90%"}})]),s("b-col",[s("h3",[t._v("Let's build the decentralized future together!")]),s("h4",[t._v("Subscribe for updates from the blog")]),s("b-form",{attrs:{inline:""},on:{submit:function(e){e.preventDefault(),t.email&&!t.invalidFeedback&&(r(t.email),o())}}},[n||i?t._e():s("b-form-group",{attrs:{"invalid-feedback":t.invalidFeedback}},[s("b-row",[s("b-col",{staticClass:"mb-2 mb-md-0"},[s("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("E-mail")]),s("b-form-input",{staticClass:"mb-2 mr-sm-2 w-100 h-100",attrs:{disabled:c,id:"email",placeholder:"Your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[s("input",{attrs:{type:"text",name:"b_2f5135b55e33a57f177a0e158_16c540b6e8",tabindex:"-1",value:""}})])],1),s("b-col",{attrs:{cols:"12",md:"4"}},[s("b-button",{staticClass:"w-100",attrs:{variant:"primary",type:"submit",disabled:c}},[t._v("Subscribe")])],1)],1)],1),c?s("b-progress",{staticClass:"mt-1 mb-1",attrs:{variant:"primary",value:100,animated:""}}):t._e(),n?s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(n)}}):t._e(),i?s("div",[t._v("Thank you for subscribing!")]):t._e()],1)],1)],1)]}}])})}),[],!1,null,"102ecac7",null);e.a=i.exports},DdVS:function(t,e,a){"use strict";a.r(e);a("ma9I"),a("2B1R"),a("+2oP"),a("mRH6");var s=a("KQm4"),o=a("nJNL"),r=a("Cr2b"),n=(a("TeQF"),a("QWBl"),a("pjDv"),a("DQNa"),a("07d7"),a("JfAA"),a("PKPk"),a("FZtP"),a("sMBO"),a("wd/R")),i=a.n(n),c={props:{comment:{type:Object,required:!0},post:{type:String,required:!0}},mixins:[{filters:{commentDate:function(t){return i()(t).format("DD/MM/YYYY [at] HH:MM")}}}],methods:{reply:function(){this.$router.push({hash:"#commentForm"}).catch((function(t){if("NavigationDuplicated"!=t.name)throw t})),this.$emit("reply-to",this.comment.parent?this.comment.parent.toString():this.comment.id)}}},l=(a("KSyi"),a("KHd+")),p=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"comment",attrs:{id:"comment-"+t.comment.id}},[a("article",{staticClass:"comment-body"},[a("footer",{staticClass:"comment-meta"},[a("div",{staticClass:"comment-author vcard"},[a("img",{staticClass:"avatar avatar-50wp-user-avatar wp-user-avatar-50 alignnone photo avatar-default",attrs:{src:t.comment.authorAvatarUrls._96,width:"50",height:"50",alt:"Avatar"}}),a("b",{staticClass:"fn mx-1"},[t.comment.authorUrl?a("a",{staticClass:"url",attrs:{href:t.comment.authorUrl,rel:"external nofollow ugc"}},[t._v(t._s(t.comment.authorName))]):a("span",[t._v(t._s(t.comment.authorName))])]),a("span",{staticClass:"says"},[t._v("says:")])]),a("div",{staticClass:"comment-metadata"},[a("a",{attrs:{href:t.comment.link}},[a("time",{attrs:{datetime:t.comment.date}},[t._v(t._s(t._f("commentDate")(t.comment.date)))])])])]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"comment-content",domProps:{innerHTML:t._s(t.comment.content)}}),a("div",{staticClass:"reply"},[a("b-link",{staticClass:"comment-reply-link",on:{click:t.reply}},[t._v("Reply")])],1)]),t._t("default")],2)}),[],!1,null,"58656c60",null).exports,m=a("vDqi"),d=a.n(m),u={props:{post:{type:String,required:!0},parent:{type:String}},data:function(){return{loading:!1,success:!1,error:!1,content:"",author:"",email:""}},methods:{onSuccess:function(){this.loading=!1,this.success=!0,this.error=!1,this.content="",this.author="",this.email=""},onError:function(){this.loading=!1,this.success=!1,this.error=!0},submit:function(){var t=this;this.loading=!0;var e={post:+this.post,parent:+this.parent,author_name:this.author,author_email:this.email,content:this.content};d()({method:"post",headers:{"Content-Type":"application/json"},url:"https://hack.bg/wp-json/wp/v2/comments",data:e}).then((function(e){t.onSuccess()})).catch((function(e){t.onError(),console.error("Error:",e)}))},cancelReply:function(){this.$emit("reply-to","0")}}},h=(a("1wzT"),Object(l.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-respond",attrs:{id:"respond"}},[a("b-form",{attrs:{id:"commentForm"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("h3",{attrs:{id:"reply-title"}},[t._v("\n      Leave a Reply\n      "),a("small",[a("b-link",{class:{cancel:"0"===t.parent},attrs:{color:"primary"},on:{click:t.cancelReply}},[t._v("Cancel reply")])],1)]),a("p",[t._v("Your email address will not be published. Required fields are marked *")]),a("label",{attrs:{for:"comment"}},[t._v("Comment")]),a("b-form-textarea",{staticClass:"comment-textarea mb-4",attrs:{id:"comment",cols:"45",rows:"8",maxlength:"65525",required:"",disabled:t.loading},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("label",{attrs:{for:"author"}},[t._v("Name *")]),a("b-form-input",{staticClass:"comment-input mb-4",attrs:{id:"author",maxlength:"245",required:"",disabled:t.loading},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),a("label",{attrs:{for:"email"}},[t._v("Email *")]),a("b-form-input",{staticClass:"comment-input mb-4",attrs:{id:"email",maxlength:"100",required:"",type:"email",disabled:t.loading},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.loading}},[t._v("Post Comment")]),t.loading?a("b-progress",{staticClass:"my-1",attrs:{variant:"primary",value:100,animated:""}}):t._e(),t.success?a("div",[t._v("Thanks for your comment! It will be visible after approval.")]):t._e(),t.error?a("div",{staticClass:"form-error"},[t._v("Something went wrong! Please, try again later!")]):t._e()],1)],1)}),[],!1,null,"783b7f72",null).exports),g={props:{post:{type:String,required:!0}},data:function(){return{parentCommentId:"0"}},components:{Comment:p,CommentForm:h},computed:{postComments:function(){var t=this;return this.$static.comments.edges.filter((function(e){return t.post===e.node.post.toString()})).map((function(t){return t.node}))},comments:function(){var t=this.postComments.filter((function(t){return!t.parent})),e=this.postComments.filter((function(t){return!!t.parent})),a=Array.from(t);return a.forEach((function(t){return t.children=e.filter((function(e){return e.parent.toString()===t.id}))})),a}},methods:{replyTo:function(t){this.parentCommentId=t}}},b=a("Kw5r"),f=b.default.config.optionMergeStrategies.computed,v={comments:{edges:[{node:{id:"1124",post:757,parent:1115,author:1,authorName:"Milen Radkov",authorUrl:"https://hack.bg",date:"2020-01-25T18:47:29",dateGmt:"2020-01-25T16:47:29",content:'<p>Hello, </p>\n<p>This tutorial outlines the setup of a node with development purpose.</p>\n<p>If you want your node to also participate in the mining and earn tokens you need to add few more flags in the node configuration at <code>~/aeternity/node/aeternity.yaml</code>.</p>\n<pre><code>\r\nmining:\r\n    cuckoo:\r\n        edge_bits: 29\r\n        miners:\r\n            - executable_group: aecuckooprebuilt\r\n              executable: cuda29\r\n              extra_args: ""\r\n              hex_encoded_header: true\r\n</code></pre>\n<p>And also your beneficiary address.</p>\n<p>Please take a look at <a href="https://github.com/aeternity/aeternity/blob/master/docs/cuda-miner.md" rel="nofollow">aeternity node&#8217;s documentation</a>.</p>\n<p>Best,<br />\nMilen</p>\n',link:"https://hack.bg/blog/tutorials/how-to-run-your-own-aeternity-node-on-amazon-aws/#comment-1124",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://hack.bg/wp-content/uploads/2019/01/milenradkov.jpeg"}}},{node:{id:"1232",post:449,parent:0,author:0,authorName:"Marco J. Gomez M.",authorUrl:"",date:"2020-02-26T05:49:04",dateGmt:"2020-02-26T03:49:04",content:"<p>Good evening Milen Radkov, I already did the tutorial run and everything worked, just some configuration details but they were resolved. Very grateful for your support, regards</p>\n<p>===== Starting Tests =====</p>\n<p>  Address Book Contract<br />\n    ✓ Deploy AddressBook Contract (5128ms)<br />\n    ✓ Should store provided person correctly (136ms)<br />\n    ✓ Should read person correctly (5205ms)</p>\n",link:"https://hack.bg/blog/tutorials/build-your-first-decentralized-application-aepp-on-aeternity-blockchain-sophia-smart-contract-address-book/#comment-1232",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/248a9d5eeb13408c61414bc16ac9ec22?s=96&d=identicon&r=g"}}},{node:{id:"1235",post:449,parent:1232,author:1,authorName:"Milen Radkov",authorUrl:"https://hack.bg",date:"2020-02-26T08:51:54",dateGmt:"2020-02-26T06:51:54",content:"<p>Great!</p>\n",link:"https://hack.bg/blog/tutorials/build-your-first-decentralized-application-aepp-on-aeternity-blockchain-sophia-smart-contract-address-book/#comment-1235",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://hack.bg/wp-content/uploads/2019/01/milenradkov.jpeg"}}},{node:{id:"1389",post:1742,parent:0,author:0,authorName:"Jamesgeoms",authorUrl:"",date:"2020-04-25T05:31:57",dateGmt:"2020-04-25T02:31:57",content:"<p>Thanks extremely helpful. Will certainly share website with my friends.</p>\n",link:"https://hack.bg/blog/blockchain-and-business/blockchain-art/#comment-1389",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/80c523724815475100dfca787c5b43ec?s=96&d=identicon&r=g"}}},{node:{id:"1436",post:449,parent:0,author:0,authorName:"WIlson Rodriguez",authorUrl:"",date:"2020-05-30T21:56:41",dateGmt:"2020-05-30T18:56:41",content:"<p>:aeproject node</p>\n<p>Error: Command failed: docker-compose -f docker-compose.yml -f docker-compose.compiler.yml ps</p>\n<p>thanks so much</p>\n",link:"https://hack.bg/blog/tutorials/build-your-first-decentralized-application-aepp-on-aeternity-blockchain-sophia-smart-contract-address-book/#comment-1436",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/e22bac5c205b4f56a107bab5cab0284a?s=96&d=identicon&r=g"}}},{node:{id:"1748",post:973,parent:0,author:0,authorName:"Rose Martine",authorUrl:"",date:"2020-08-07T08:20:45",dateGmt:"2020-08-07T05:20:45",content:"<p>My partner and I stumbled over here different website and thought I should check things out. I like what I see so now i am following you. Look forward to looking into your web page yet again.</p>\n",link:"https://hack.bg/blog/blockchain-and-business/blockchain-best-use-case-series-blockchain-in-finance/#comment-1748",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/4efe3c2a26093d387a7d37cd801598b2?s=96&d=identicon&r=g"}}},{node:{id:"1764",post:449,parent:0,author:0,authorName:"John Doe",authorUrl:"",date:"2020-08-22T14:45:27",dateGmt:"2020-08-22T11:45:27",content:"<p>Nice tutorial</p>\n",link:"https://hack.bg/blog/tutorials/build-your-first-decentralized-application-aepp-on-aeternity-blockchain-sophia-smart-contract-address-book/#comment-1764",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/4f64c9f81bb0d4ee969aaf7b4a5a6f40?s=96&d=identicon&r=g"}}},{node:{id:"2790",post:1101,parent:0,author:0,authorName:"here",authorUrl:"",date:"2021-01-20T09:40:43",dateGmt:"2021-01-20T07:40:43",content:"<p>Do you have any video of that? I&#8217;d want to find out more details.</p>\n",link:"https://hack.bg/blog/meetups/tips-tricks-and-best-approaches-for-developing-decentralized-applications-0x09-blockchain-developers-meetup/#comment-2790",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/5db30e408d514835263566e270b56e23?s=96&d=identicon&r=g"}}},{node:{id:"3015",post:449,parent:1436,author:1,authorName:"Milen",authorUrl:"https://hack.bg",date:"2021-02-17T13:46:56",dateGmt:"2021-02-17T11:46:56",content:"<p>Make sure you have docker installed and running on the machine you are trying this.</p>\n<p>Try using <code>aeproject env</code> instead for spinning up a local environment.</p>\n",link:"https://hack.bg/blog/tutorials/build-your-first-decentralized-application-aepp-on-aeternity-blockchain-sophia-smart-contract-address-book/#comment-3015",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://hack.bg/wp-content/uploads/2019/01/milenradkov.jpeg"}}},{node:{id:"3214",post:973,parent:0,author:0,authorName:"Joseph Donahue",authorUrl:"",date:"2021-05-23T11:02:36",dateGmt:"2021-05-23T08:02:36",content:"<p>I’m so happy to read this. This is the kind of manual that needs to be given and not the accidental misinformation that is at the other blogs. Appreciate your sharing this greatest doc.</p>\n",link:"https://hack.bg/blog/blockchain-and-business/blockchain-best-use-case-series-blockchain-in-finance/#comment-3214",status:"approved",type:"comment",authorAvatarUrls:{_96:"https://secure.gravatar.com/avatar/27d5b949f3c5e3d5c0fcbebdd8cf7800?s=96&d=identicon&r=g"}}}]}},y=function(t){var e=t.options;e.__staticData?e.__staticData.data=v:(e.__staticData=b.default.observable({data:v}),e.computed=f({$static:function(){return e.__staticData.data}},e.computed))},j=Object(l.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"mt-2"},[a("b-col",{staticClass:"comments-area",attrs:{id:"comments"}},[t.postComments.length?a("h2",{staticClass:"comments-title"},[t._v(t._s(t.postComments.length)+" Comments")]):t._e(),a("ol",{staticClass:"comment-list p-0"},t._l(t.comments,(function(e){return a("Comment",{key:e.id,attrs:{comment:e,parent:!0,post:t.post},on:{"reply-to":t.replyTo}},[e.children.length?a("ol",{staticClass:"children"},t._l(e.children,(function(e){return a("Comment",{key:e.id,staticClass:"mb-4",attrs:{comment:e,post:t.post},on:{"reply-to":t.replyTo}})})),1):t._e()])})),1),a("CommentForm",{attrs:{post:t.post,parent:t.parentCommentId},on:{"reply-to":t.replyTo}})],1)],1)}),[],!1,null,null,null);"function"==typeof y&&y(j);var k=j.exports,_={components:{Post:o.a,NewsletterForm:r.a,CommentSection:k},mounted:function(){},metaInfo:function(){var t=this.$page.post.metadata?[{name:"description",content:this.$page.post.metadata.rankMathDescription}]:[],e=[{property:"og:type",content:"article"},{property:"og:title",content:this.$page.post.metadata.rankMathTitle},{property:"og:description",content:this.$page.post.excerpt.slice(3,-5)},{property:"og:url",content:this.$page.post.link},{property:"og:updated_time",content:this.$page.post.modified}],a=this.$page.post.featuredMedia?[{property:"og:image",content:this.$page.post.featuredMedia.sourceUrl},{property:"og:image:secure_url",content:this.$page.post.featuredMedia.sourceUrl},{property:"og:image:width",content:this.$page.post.featuredMedia.mediaDetails.width},{property:"og:image:height",content:this.$page.post.featuredMedia.mediaDetails.height},{property:"og:image:alt",content:this.$page.post.featuredMedia.altText},{property:"og:image:type",content:this.$page.post.featuredMedia.mimeType}]:[],o=this.$page.post.tags?this.$page.post.tags.map((function(t){return{property:"article:tag",content:t.title}})):[],r=this.$page.post.categories?this.$page.post.categories.map((function(t){return{property:"article:section",content:t.title}})):[],n=[{property:"article:published_time",content:this.$page.post.date},{property:"article:modified_time",content:this.$page.post.modified}],i=[{name:"twitter:title",content:this.$page.post.metadata.rankMathTitle},{name:"twitter:description",content:this.$page.post.excerpt.slice(3,-5)}],c=this.$page.post.featuredMedia?[{name:"twitter:image",content:this.$page.post.featuredMedia.sourceUrl}]:[];return{title:this.$page.post.metadata.rankMathTitle,meta:[].concat(t,e,a,n,Object(s.a)(o),Object(s.a)(r),i,c)}}},C=null,w=Object(l.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("b-row",{staticClass:"align-items-start"},[a("transition",{attrs:{name:"fade",appear:""}},[a("b-col",{staticClass:"bg-white p-0 rounded shadow-lg",attrs:{tag:"main",cols:"12",lg:"12"}},[a("div",{staticClass:"overflow-hidden p-4 p-sm-5"},[a("Post",{attrs:{post:t.$page.post}},[a("header",{staticClass:"mb-4"},[a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-break",domProps:{innerHTML:t._s(t.$page.post.title)}}),t.$page.post.featuredMedia?a("b-img",{staticClass:"mt-4",attrs:{src:t.$page.post.featuredMedia.sourceUrl,width:t.$page.post.featuredMedia.mediaDetails.width,alt:t.$page.post.featuredMedia.altText,fluid:""}}):t._e()],1),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content text-break",domProps:{innerHTML:t._s(t.$page.post.content)}}),t.$page.post.tags.length?[a("h2",{staticClass:"font-family-sans-serif h4"},[a("i",{staticClass:"fa fa-folder-open"}),t._v("Categories:\n              ")]),a("ul",{staticClass:"list-inline"},t._l(t.$page.post.categories,(function(e){return a("li",{key:e.id,staticClass:"list-inline-item"},[a("b-button",{staticClass:"mb-2",attrs:{variant:"primary",size:"sm",to:e.path}},[t._v(t._s(e.title)+" ("+t._s(e.count)+")")])],1)})),0),a("h2",{staticClass:"font-family-sans-serif h4"},[a("i",{staticClass:"fa fa-tags"}),t._v("Tags:\n              ")]),a("ul",{staticClass:"list-inline"},t._l(t.$page.post.tags,(function(e){return a("li",{key:e.id,staticClass:"list-inline-item"},[a("b-button",{staticClass:"mb-2",attrs:{variant:"primary",size:"sm",to:e.path}},[t._v(t._s(e.title)+" ("+t._s(e.count)+")")])],1)})),0)]:t._e()],2)],1)])],1)],1),a("NewsletterForm"),a("CommentSection",{attrs:{post:t.$page.post.id}})],1)}),[],!1,null,null,null);"function"==typeof C&&C(w);e.default=w.exports},"EQ/l":function(t,e,a){"use strict";var s=a("nAfN");a.n(s).a},JsJ1:function(t,e,a){"use strict";var s=a("KtoM");a.n(s).a},KSyi:function(t,e,a){"use strict";var s=a("yTm6");a.n(s).a},KtoM:function(t,e,a){},RKfx:function(t,e,a){},RnhZ:function(t,e,a){var s={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function o(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=r,t.exports=o,o.id="RnhZ"},nAfN:function(t,e,a){},nJNL:function(t,e,a){"use strict";var s={props:{categories:{type:Array,required:!0}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-inline"},t._l(t.categories,(function(e,s){return a("li",{key:e.id,staticClass:"list-inline-item m-0"},[a("g-link",{staticClass:"text-uppercase font-weight-bold mx-1",attrs:{to:e.path}},[t._v(t._s(e.title))]),s<t.categories.length-1?a("span",[t._v("·")]):t._e()],1)})),0)}),[],!1,null,null,null).exports,n=a("wd/R"),i=a.n(n),c={props:{date:{type:String,required:!0}},computed:{formatedDate:function(){return i()(this.date).locale("en_gb").format("ll")}}},l=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.formatedDate))])}),[],!1,null,null,null).exports,p=(a("TeQF"),a("rB9j"),a("EnZy"),{components:{FormatedDate:l},props:{post:{type:Object,required:!0}},computed:{readingTime:function(){var t=this.post&&this.post.content?this.post.content.split(" ").filter((function(t){return t.length>2})).length:0,e=Math.round(t/200);return" &asymp;".concat(Math.max(1,e),"min")}}}),m={components:{CategoriesList:r,FormatedDate:l,ReadMore:Object(o.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-button",{staticClass:"read-more border-0 mb-5",attrs:{variant:"primary",to:this.post.path}},[e("span",[e("b",{staticClass:"text-uppercase"},[this._v("Read More")]),e("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.readingTime)}})])])}),[],!1,null,null,null).exports},props:{post:{type:Object,required:!0}}},d=(a("JsJ1"),Object(o.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{attrs:{tag:"article"}},[a("b-col",{staticClass:"meta-data py-md-5 text-center position-relative d-flex",attrs:{"data-first":t.post.title?t.post.title.charAt(0):"",md:"3"}},[a("div",{staticClass:"mx-auto mb-2 position-relative"},[a("formated-date",{staticClass:"post-date font-weight-bold",attrs:{date:t.post.date}}),a("i",{staticClass:"d-none d-md-block"},[t._v("in:")]),a("categories-list",{staticClass:"mb-0",attrs:{categories:t.post.categories}}),t.post.author?a("div",[a("i",[t._v("by:")]),a("g-link",{staticClass:"font-weight-bold",attrs:{to:t.post.author.path}},[t._v(t._s(t.post.author.name))])],1):t._e()],1)]),a("b-col",{staticClass:"mb-5 py-md-5"},[t._t("default",[a("b-row",[a("b-col",[a("g-link",{staticClass:"text-dark",attrs:{to:t.post.path}},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h1 post-title text-break mb-4",domProps:{innerHTML:t._s(t.post.title)}})]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-excerpt text-break mb-4",domProps:{innerHTML:t._s(t.post.excerpt)}}),a("read-more",{attrs:{post:t.post}})],1),t.post.featuredMedia?a("b-col",{staticClass:"img-col m-0 p-0",style:{backgroundImage:"url("+t.post.featuredMedia.sourceUrl+")"},attrs:{md:"5"}}):t._e()],1)])],2)],1)}),[],!1,null,"a4132618",null));e.a=d.exports},yTm6:function(t,e,a){}}]);