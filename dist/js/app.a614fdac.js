(function(t){function e(e){for(var o,r,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a=[];function r(t){return c.p+"js/"+({about:"about",store:"store"}[t]||t)+"."+{about:"0130c913",store:"b17d01dc"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}i[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d27":function(t,e,n){t.exports=n.p+"img/brick.98a0ab61.jpg"},"1df9":function(t,e,n){t.exports=n.p+"img/gator_1.3d176903.png"},"47ba":function(t,e,n){t.exports=n.p+"img/gator_2.0f5ee0e9.png"},"4dcc":function(t,e,n){t.exports=n.p+"img/grey_t_shirt.3485d270.png"},"4ec6":function(t,e,n){t.exports=n.p+"img/pink_t_shirt.63632fe7.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[o("v-list-item",{class:t.miniVariant&&"px-0",attrs:{"two-line":""}},[o("v-list-item-avatar",[o("img",{attrs:{src:n("cf05")}})]),o("v-list-item-content",[o("v-list-item-title",[t._v("Cedar Park High School")]),o("v-list-item-subtitle",[t._v("Project Graduation")])],1)],1),o("v-divider"),o("v-list-item",{attrs:{link:"",to:"/"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-home")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Home")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/about"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-help-circle")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("About Us")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/store"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-cart")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Store")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/becomeASponsor"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-charity")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Become a Sponsor")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/2021Sponsors"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-heart")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("2021 Sponsors")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/DonateNow"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-cash-usd")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Donate Now!")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/SeniorSwag"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-gift-outline")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Senior 2021 Swag")])],1)],1)],1)],1),o("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"#215027",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"40"}}),t._v("CPHS Project Graduation ")],1),o("v-spacer"),o("btn",{attrs:{btnColor:"btn btn-small btn-info btn-popup",cartIcon:!0},nativeOn:{click:function(e){return t.showPopupCart()}}},[t._v(" Cart "),t.hasProduct()?o("span",{staticClass:"btn-circle"},[t._v(t._s(t.getProductsInCart.length))]):t._e()])],1),o("v-content",[o("v-snackbar",{attrs:{timeout:4e3,top:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.nameOfLastProductAdded)+" Added to Cart!")]),o("router-view")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2020")])]),o("cart",{model:{value:t.showCart,callback:function(e){t.showCart=e},expression:"showCart"}})],1)},a=[],r=(n("99af"),n("7db0"),n("4160"),n("b0c0"),n("159b"),n("5530")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.btnColor},[t._t("default"),t.cartIcon?o("img",{attrs:{src:n("6f5d"),alt:"Cart Icon"}}):t._e()],2)},s=[],l={props:["btnColor","cartIcon"]},d=l,u=(n("af75"),n("2877")),p=Object(u["a"])(d,c,s,!1,null,"bc971dfe",null),m=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"700"},on:{input:t.displayedChanged},model:{value:t.displayed,callback:function(e){t.displayed=e},expression:"displayed"}},[n("v-card",[t.hasProduct()?n("div",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Shopping Cart")])]),n("v-container",t._l(t.cartContents,(function(e,o){return n("div",{key:o,staticClass:"box-item"},[n("v-card",[n("v-row",[n("v-col",{attrs:{cols:2}},[n("v-img",{attrs:{src:e.product.images[0],"max-height":"100","max-width":"100",contain:""}})],1),n("v-col",{attrs:{cols:5}},[n("h3",{staticClass:"item-name"},[t._v(t._s(e.product.displayName))]),t._l(e.selectedOptions,(function(e,o){return n("p",{key:o},[t._v(t._s(e.name)+": "+t._s(e.value))])}))],2),n("v-col",{attrs:{cols:3}},[n("span",{staticClass:"item-price"},[t._v("$ "+t._s(e.product.price)+".00")])]),n("v-col",{attrs:{cols:1}},[n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.removeItem(o)}}},[t._v("Remove")])],1)],1)],1),n("br")],1)})),0),t.showBonus?n("v-card-title",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:5}},[n("span",{staticClass:"headline"},[t._v("Bundle Discount")])]),n("v-col",{attrs:{cols:2,offset:5}},[n("span",{staticClass:"headline"},[t._v(t._s(t.bundleDiscount()))])])],1)],1)],1):t._e(),n("v-card-title",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:5}},[n("span",{staticClass:"headline"},[t._v("Total Price:")])]),n("v-col",{attrs:{cols:2,offset:5}},[n("span",{staticClass:"headline"},[t._v(t._s(t.totalPrice()))])])],1)],1)],1)],1):n("v-card-title",{staticClass:"headline"},[t._v("Your Cart is Empty!")]),n("v-card-actions",[t.hasProduct()?n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.checkout()}}},[t._v("Go To Checkout")]):t._e(),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.close()}}},[t._v("Continue Shopping")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"320"},model:{value:t.showCheckoutMessage,callback:function(e){t.showCheckoutMessage=e},expression:"showCheckoutMessage"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Sorry, we're not open yet!")]),n("v-card-text",[t._v("We're not quite ready to sell you anything just yet. Please check back with us in a bit!")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.showCheckoutMessage=!1}}},[t._v("Okay")])],1)],1)],1)],1)},f=[],h=(n("d81d"),n("d3b7"),n("25f0"),n("2f62")),g={name:"cart",props:["value"],data:function(){return{displayed:!1,showCheckoutMessage:!1}},created:function(){},mounted:function(){window.console.log("Cart mounted!"),this.displayed=this.value},watch:{value:function(t){window.console.log("value changed: "+t.toString()),this.displayed=t}},methods:Object(r["a"])({},Object(h["b"])(["addProduct","showOrHiddenModal","removeProduct"]),{checkout:function(){this.showCheckoutMessage=!0},close:function(){this.displayed=!1,this.$emit("input",!1)},hasProduct:function(){return this.cartContents.length>0},bundleDiscount:function(){var t=this.getBundleDiscountAndBonus;return"$"+"".concat(t.discount)},totalPrice:function(){var t=this.getTotalPrice;return window.console.log(t),"$"+"".concat(t)},removeItem:function(t){var e=this.cartContents[t].index;this.removeProduct(e)},displayedChanged:function(t){window.console.log("displayedChanged: "+t.toString()),0==t&&this.close()}}),computed:Object(r["a"])({},Object(h["c"])(["getProductsInCart","getProducts","getTotalPrice","getSubtotal","getBundleDiscountAndBonus"]),{showBonus:function(){return this.getBundleDiscountAndBonus.awards.length>0},cartContents:function(){var t=this;return this.getProductsInCart.map((function(e,n){return{product:t.getProducts.find((function(t){return t.id==e.id})),selectedOptions:e.selectedOptions,index:n}})).sort((function(t,e){return t.product.id-e.product.id}))}})},b=g,C=n("6544"),_=n.n(C),w=n("8336"),P=n("b0af"),O=n("99d9"),y=n("62ad"),k=n("a523"),x=n("169a"),S=n("adda"),V=n("0fd9"),A=n("2fa4"),T=Object(u["a"])(b,v,f,!1,null,null,null),D=T.exports;_()(T,{VBtn:w["a"],VCard:P["a"],VCardActions:O["a"],VCardText:O["c"],VCardTitle:O["d"],VCol:y["a"],VContainer:k["a"],VDialog:x["a"],VImg:S["a"],VRow:V["a"],VSpacer:A["a"]});var j={name:"App",components:{btn:m,cart:D},data:function(){return{drawer:null,miniVariant:!1,showCart:!1,snackbar:!1,links:[{text:"About Us",href:"/about"},{text:"Become a Sponsor",href:"/becomeASponsor"},{text:"2021 Sponsors",href:"/2021Sponsors"}]}},watch:{productAdded:function(t){window.console.log("watch productAdded!"),t&&(this.snackbar=!0,this.acknowledgeProductAdded())}},methods:Object(r["a"])({},Object(h["b"])(["acknowledgeProductAdded"]),{hasProduct:function(){return this.getProductsInCart.length>0},showPopupCart:function(){var t=this;window.console.log("showPopupCart!"),this.showCart=!0,this.getProductsInCart.forEach((function(e){var n=t.getProducts.find((function(t){return t.id==e.id}));window.console.log(n.name),e.selectedOptions.forEach((function(t){window.console.log("".concat(t.name,": ").concat(t.value))}))}))}}),computed:Object(r["a"])({},Object(h["c"])(["getProductsInCart","getPopupCart","getProducts","onProductAdded","getNameOfLastProductAdded"]),{productAdded:function(){return this.onProductAdded},nameOfLastProductAdded:function(){return this.getNameOfLastProductAdded}})},L=j,I=(n("5c0b"),n("7496")),E=n("40dc"),B=n("5bc1"),N=n("a75b"),$=n("ce7e"),H=n("553a"),M=n("132d"),R=n("8860"),U=n("da13"),G=n("8270"),W=n("5d23"),X=n("34c3"),z=n("f774"),F=n("2db4"),q=Object(u["a"])(L,i,a,!1,null,null,null),J=q.exports;_()(q,{VApp:I["a"],VAppBar:E["a"],VAppBarNavIcon:B["a"],VContent:N["a"],VDivider:$["a"],VFooter:H["a"],VIcon:M["a"],VImg:S["a"],VList:R["a"],VListItem:U["a"],VListItemAvatar:G["a"],VListItemContent:W["a"],VListItemIcon:X["a"],VListItemSubtitle:W["b"],VListItemTitle:W["c"],VNavigationDrawer:z["a"],VSnackbar:F["a"],VSpacer:A["a"]});var K=n("f309");o["a"].use(K["a"]);var Y=new K["a"]({}),Q=n("8c4f"),Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-card",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:n("5a0c"),contain:"",height:"400"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Project Grad 2021!")]),o("h2",[t._v("Celebrating and Honoring CPHS Seniors in the class of 2021")])]),o("v-col",{attrs:{cols:"12"}},[o("mainCarousel",{attrs:{height:400,items:t.carouselItems}})],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Links")]),o("v-row",{attrs:{justify:"center"}},t._l(t.links,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href}},[t._v(t._s(e.text))])})),0)],1)],1)],1)],1)},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.productPopup,callback:function(e){t.productPopup=e},expression:"productPopup"}},[t.productPopup?n("v-card",[n("product",{attrs:{item:t.currentProduct,dialog:""},on:{closeDialog:function(e){return t.closeModal()}}}),t._e()],1):t._e()],1),n("v-carousel",{attrs:{cycle:!0,height:t.height,"hide-delimiter-background":!0,"show-arrows-on-hover":""}},t._l(t.items,(function(e,o){return n("div",{key:o},[e.hasOwnProperty("link")?n("v-carousel-item",{attrs:{src:e.image,to:e.link,height:t.height,contain:"","reverse-transition":"fade-transition",transition:"fade-transition"}}):n("v-carousel-item",{attrs:{src:e.image,height:t.height,to:"/",contain:"","reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(n){return t.productClick(e)}}})],1)})),0)],1)},nt=[],ot=(n("a9e3"),n("be6f")),it={name:"mainCarousel",components:{product:ot["a"]},props:{height:Number,items:Array},data:function(){return{productPopup:!1,currentProduct:null}},created:function(){window.console.log(this.items)},methods:{closeModal:function(){this.productPopup=!1,this.currentProduct=null},productClick:function(t){window.console.log("item: ".concat(t.product.id)),this.currentProduct=t.product,this.productPopup=!0}},computed:{}},at=it,rt=n("5e66"),ct=n("3e35"),st=Object(u["a"])(at,et,nt,!1,null,null,null),lt=st.exports;_()(st,{VBtn:w["a"],VCard:P["a"],VCarousel:rt["a"],VCarouselItem:ct["a"],VDialog:x["a"]});var dt={name:"Home",components:{mainCarousel:lt},data:function(){return{carouselItems:[],images:[],links:[{text:"About Us",href:"/about"},{text:"Become a Sponsor",href:"/becomeASponsor"},{text:"2021 Sponsors",href:"/2021Sponsors"}]}},created:function(){var t=this,e=this.getProducts;this.carouselItems=[{image:n("d0d7"),link:"/DonateNow"}],e.forEach((function(e){t.carouselItems.push({image:e.images[0],product:e})}))},computed:Object(r["a"])({},Object(h["c"])(["getProducts"]))},ut=dt,pt=Object(u["a"])(ut,Z,tt,!1,null,null,null),mt=pt.exports;_()(pt,{VCard:P["a"],VCol:y["a"],VContainer:k["a"],VImg:S["a"],VRow:V["a"]}),o["a"].use(Q["a"]);var vt=[{path:"/",name:"Home",component:mt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/store",name:"Store",component:function(){return n.e("store").then(n.bind(null,"2c25"))}},{path:"/DonateNow",name:"DonateNow",component:function(){return n.e("store").then(n.bind(null,"8125"))}},{path:"*",redirect:"/"}],ft=new Q["a"]({mode:"history",routes:vt}),ht=ft,gt=(n("a623"),n("c975"),n("13d5"),n("a434"),n("0e44"));function bt(t,e){return t.products.find((function(t){return t.id==e})).price}function Ct(t,e){return t.products.find((function(t){return t.id==e})).displayName}function _t(t){var e=t.cartProducts.reduce((function(e,n){return e+bt(t,n.id)}),0);return e}function wt(t){var e=_t(t),n=Pt(t).discount;return e-n}function Pt(t){var e=0,n=[],o=[],i=t.cartProducts.map((function(t){return t.id})),a=!0;while(a)if(a=!1,t.bundles.forEach((function(t){t.items.every((function(t){return i.indexOf(t)>-1}))&&(a=!0,o.push({discount:t.discount,bonus:t.bonus,name:t.name}),e+=t.discount,null!=t.bonus&&n.push(t.bonus),t.items.forEach((function(t){var e=i.indexOf(t);i.splice(e,1)})))})),!a)break;var r={discount:e,bonuses:n,awards:o};return r}o["a"].use(h["a"]);var Ot=new h["a"].Store({plugins:[Object(gt["a"])({paths:["cartProducts"]})],state:{bundles:[{name:"Super Senior Tile Bonus",items:[1e3,1003,1005,1006,1001],discount:20,bonus:"Bonus Tile"},{name:"Senior Bundle",items:[1e3,1003,1005,1006],discount:20,bonus:null}],products:[{id:1e3,name:"t-shirt",displayName:"T-Shirt",caption:"Available in White, Teal, Grey, Pink, and Timberwolf Green",price:25,images:[n("87ee"),n("4ec6"),n("4dcc"),n("c68e"),n("82a1")],imageHeight:800,availableOptions:[{name:"Color",type:"Selection",options:["Green","Pink","Grey","White","Teal"]},{name:"Size",type:"Selection",options:["S","M","L","XL","XXL","XXXL"]}]},{id:1001,name:"brick",displayName:"Commemorative Brick",caption:"Secure your place in history",price:50,images:[n("1d27")],imageHeight:800,availableOptions:[{name:"Text Line 1",type:"Text",charLimit:20},{name:"Text Line 2",type:"Text",charLimit:20},{name:"Text Line 3",type:"Text",charLimit:20}]},{id:1003,name:"yardsign",displayName:"Yard Sign",caption:"Show off your school spirit to your neighbors",price:25,images:[n("ac7d")],imageHeight:400,availableOptions:[]},{id:1004,name:"flag",displayName:"Timberwolf Flag",caption:"Pool not included",price:20,images:[n("8ef9")],imageHeight:400,availableOptions:[]},{id:1005,name:"facemask",displayName:"Timberwolf Face Mask",caption:"Available with large or small logo",price:10,images:[n("e4b2"),n("5e75")],imageHeight:400,availableOptions:[{name:"Style",type:"Selection",options:["Large Logo","Small Logo"]}]},{id:1006,name:"gaiter",displayName:"Timberwolf Gaiter",caption:"Available in Green or Camo",price:10,images:[n("1df9"),n("47ba")],imageHeight:400,availableOptions:[{name:"Color",type:"Selection",options:["Green","Camo"]}]}],cartProducts:[],currentProduct:{},triggerProductAdded:!1,nameOfLastProductAdded:""},getters:{getProducts:function(t){return t.products},getProductsInCart:function(t){return t.cartProducts},getCurrentProduct:function(t){return t.currentProduct},getTotalPrice:function(t){return wt(t)},getSubtotal:function(t){return _t(t)},getBundleDiscountAndBonus:function(t){return Pt(t)},onProductAdded:function(t){return t.triggerProductAdded},getNameOfLastProductAdded:function(t){return t.nameOfLastProductAdded}},mutations:{ADD_PRODUCT:function(t,e){t.cartProducts.push(e),t.triggerProductAdded=!0,t.nameOfLastProductAdded=Ct(t,e.id)},REMOVE_PRODUCT:function(t,e){t.cartProducts.splice(e,1)},CURRENT_PRODUCT:function(t,e){t.currentProduct=e},ACKNOWLEDGE_PRODUCT_ADDED:function(t){t.triggerProductAdded=!1}},actions:{addProduct:function(t,e){t.commit("ADD_PRODUCT",e)},removeProduct:function(t,e){t.commit("REMOVE_PRODUCT",e)},currentProduct:function(t,e){t.commit("CURRENT_PRODUCT",e)},acknowledgeProductAdded:function(t){t.commit("ACKNOWLEDGE_PRODUCT_ADDED")}}});o["a"].config.productionTip=!1,new o["a"]({vuetify:Y,router:ht,store:Ot,render:function(t){return t(J)}}).$mount("#app")},"5a0c":function(t,e,n){t.exports=n.p+"img/CPHS_PG2021.21781dac.png"},"5c0b":function(t,e,n){"use strict";var o=n("7694"),i=n.n(o);i.a},"5e75":function(t,e,n){t.exports=n.p+"img/face_mask_2.fec6a0bf.png"},"6f5d":function(t,e,n){t.exports=n.p+"img/cart.74b02e23.svg"},7694:function(t,e,n){},"82a1":function(t,e,n){t.exports=n.p+"img/teal_t_shirt.192ef213.png"},"87ee":function(t,e,n){t.exports=n.p+"img/white_t_shirt.eabee063.png"},"8ef9":function(t,e,n){t.exports=n.p+"img/flag.a5088ef6.jpg"},ac7d:function(t,e,n){t.exports=n.p+"img/yard_sign_2021.273d4862.jpg"},af75:function(t,e,n){"use strict";var o=n("deea"),i=n.n(o);i.a},be6f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("productOptions",{attrs:{item:t.item},on:{productAdded:function(e){return t.closeDialog()}},model:{value:t.optionsDialog,callback:function(e){t.optionsDialog=e},expression:"optionsDialog"}}),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[1==t.item.images.length?n("v-img",{attrs:{src:t.item.images[0],height:t.item.imageHeight},on:{click:function(e){return t.imageClick(t.item)}}}):n("v-carousel",{attrs:{cycle:!1,height:t.item.imageHeight,"hide-delimiter-background":!0,"show-arrows-on-hover":""}},t._l(t.item.images,(function(e,o){return n("v-carousel-item",{key:o,attrs:{src:e,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(e){return t.imageClick(t.item)}}})})),1),n("v-card-title",[t._v(t._s(t.item.displayName))]),n("v-card-subtitle",[t._v(t._s(t.item.caption))]),n("v-card-actions",[n("v-btn",{attrs:{text:""}},[t._v("$"+t._s(t.item.price))]),t.item.availableOptions.length?n("v-btn",{attrs:{color:"purple",text:""},nativeOn:{click:function(e){t.optionsDialog=!0}}},[t._v("Select Options")]):n("v-btn",{attrs:{color:"red",text:""},nativeOn:{click:function(e){return t.addProductToCart({id:t.item.id,selectedOptions:[]})}}},[t._v("Add to Cart")]),n("v-spacer"),t.dialog?n("v-btn",{attrs:{color:"green",text:""},nativeOn:{click:function(e){return t.closeDialog()}}},[t._v("Close")]):t._e(),t._e()],1)],1)],1)},i=[],a=(n("7db0"),n("b0c0"),n("d3b7"),n("25f0"),n("5530")),r=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"500"},on:{input:t.displayedChanged},model:{value:t.displayed,callback:function(e){t.displayed=e},expression:"displayed"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.item.displayName)+" Options")]),n("v-card-text",t._l(t.item.availableOptions,(function(e,o){return n("div",{key:o},["Selection"==e.type?n("v-combobox",{attrs:{label:t.getSelectionLabel(e.name),items:e.options},model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}}):t._e(),"Text"==e.type?n("v-text-field",{attrs:{label:t.getTextOptionLabel(e)},model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}}):t._e()],1)})),0),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:"",disabled:!t.allOptionsSelected},on:{click:function(e){return t.addProductToCart()}}},[t._v("Add to Cart")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.close()}}},[t._v("Cancel")])],1)],1)],1)},s=[],l=(n("99af"),n("4160"),n("d81d"),n("159b"),{name:"productOptions",props:["item","value"],data:function(){return{displayed:!1,selectedOptions:[]}},created:function(){this.initializeOptions()},mounted:function(){},watch:{value:function(t){window.console.log("value changed: "+t.toString()),this.displayed=t}},methods:Object(a["a"])({},Object(r["b"])(["addProduct","showOrHiddenModal"]),{addProductToCart:function(){this.allOptionsSelected&&(this.addProduct({id:this.item.id,selectedOptions:this.selectedOptions}),this.$emit("productAdded",!0),this.close())},getSelectionLabel:function(t){return"Select a ".concat(t)},getTextOptionLabel:function(t){return"".concat(t.name," (").concat(t.charLimit," chars max)")},close:function(){this.$emit("input",!1),this.initializeOptions()},displayedChanged:function(t){window.console.log("displayedChanged: "+t.toString()),0==t&&this.close()},initializeOptions:function(){this.selectedOptions=this.item.availableOptions.map((function(t){return{name:t.name,value:null}}))}}),computed:{allOptionsSelected:function(){var t=this,e=!0;return this.selectedOptions.forEach((function(n,o){(null===n.value||""===n.value||"Text"===t.item.availableOptions[o].type&&n.value.length>t.item.availableOptions[o].charLimit)&&(e=!1)})),e}}}),d=l,u=n("2877"),p=n("6544"),m=n.n(p),v=n("8336"),f=n("b0af"),h=n("99d9"),g=n("2b5d"),b=n("169a"),C=n("2fa4"),_=n("8654"),w=Object(u["a"])(d,c,s,!1,null,null,null),P=w.exports;m()(w,{VBtn:v["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCombobox:g["a"],VDialog:b["a"],VSpacer:C["a"],VTextField:_["a"]});var O={name:"product",props:{item:Object,dialog:{type:Boolean,default:!1}},components:{productOptions:P},data:function(){return{optionsDialog:!1}},created:function(){window.console.log("Product created!"),window.console.log("Item: "+this.item.id.toString())},methods:Object(a["a"])({},Object(r["b"])(["addProduct","showOrHiddenModal"]),{addProductToCart:function(t){this.addProduct(t),this.closeDialog()},getProductByName:function(t){return this.getProducts.find((function(e){return e.name==t}))},getSelectionLabel:function(t){return"Select a ".concat(t)},imageClick:function(t){t.availableOptions.length>0&&(this.optionsDialog=!0)},closeDialog:function(){this.dialog&&this.$emit("closeDialog",!0)}}),computed:Object(a["a"])({},Object(r["c"])(["getProducts"]),{itemsPerRow:function(){return this.$vuetify.breakpoint.width>1e3?2:1}})},y=O,k=n("5e66"),x=n("3e35"),S=n("132d"),V=n("adda"),A=Object(u["a"])(y,o,i,!1,null,null,null);e["a"]=A.exports;m()(A,{VBtn:v["a"],VCard:f["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardTitle:h["d"],VCarousel:k["a"],VCarouselItem:x["a"],VIcon:S["a"],VImg:V["a"],VSpacer:C["a"]})},c68e:function(t,e,n){t.exports=n.p+"img/green_t_shirt.4ef1e9bb.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.bdee1cd9.png"},d0d7:function(t,e,n){t.exports=n.p+"img/Donate_Button_Transparent3.556b9475.jpg"},deea:function(t,e,n){},e4b2:function(t,e,n){t.exports=n.p+"img/face_mask_1.9991e589.png"}});
//# sourceMappingURL=app.a614fdac.js.map