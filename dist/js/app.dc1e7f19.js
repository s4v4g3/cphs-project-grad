(function(t){function e(e){for(var o,r,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a=[];function r(t){return c.p+"js/"+({about:"about",store:"store"}[t]||t)+"."+{about:"6f559656",store:"4186af32"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d27":function(t,e,n){t.exports=n.p+"img/brick.98a0ab61.jpg"},"1df9":function(t,e,n){t.exports=n.p+"img/gator_1.3d176903.png"},"31e5":function(t,e,n){t.exports=n.p+"img/jersey.6bfcc0b4.jpg"},"47ba":function(t,e,n){t.exports=n.p+"img/gator_2.0f5ee0e9.png"},"4dcc":function(t,e,n){t.exports=n.p+"img/grey_t_shirt.3485d270.png"},"4ec6":function(t,e,n){t.exports=n.p+"img/pink_t_shirt.63632fe7.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[o("v-list-item",{class:t.miniVariant&&"px-0",attrs:{"two-line":""}},[o("v-list-item-avatar",[o("img",{attrs:{src:n("cf05")}})]),o("v-list-item-content",[o("v-list-item-title",[t._v("Cedar Park High School")]),o("v-list-item-subtitle",[t._v("Project Graduation")])],1)],1),o("v-divider"),o("v-list-item",{attrs:{link:"",to:"/"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-home")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Home")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/about"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-help-circle")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("About Us")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/store"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-cart")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Store")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/becomeASponsor"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-charity")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Become a Sponsor")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/2021Sponsors"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-heart")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("2021 Sponsors")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/SeniorSwag"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-gift-outline")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Senior 2021 Swag")])],1)],1)],1)],1),o("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"#215027",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"40"}}),t._v("CPHS Project Graduation ")],1),o("v-spacer"),o("btn",{attrs:{btnColor:"btn btn-small btn-info btn-popup",cartIcon:!0},nativeOn:{click:function(e){return t.showPopupCart()}}},[t._v(" Cart "),t.hasProduct()?o("span",{staticClass:"btn-circle"},[t._v(t._s(t.getProductsInCart.length))]):t._e()])],1),o("v-content",[o("v-snackbar",{attrs:{color:"success",timeout:4e3,top:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.nameOfLastProductAdded)+" Added to Cart!")]),o("router-view")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2020")])]),o("cart",{model:{value:t.showCart,callback:function(e){t.showCart=e},expression:"showCart"}})],1)},a=[],r=(n("99af"),n("7db0"),n("4160"),n("b0c0"),n("159b"),n("5530")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.btnColor},[t._t("default"),t.cartIcon?o("img",{attrs:{src:n("6f5d"),alt:"Cart Icon"}}):t._e()],2)},s=[],l={props:["btnColor","cartIcon"]},u=l,d=(n("af75"),n("2877")),p=Object(d["a"])(u,c,s,!1,null,"bc971dfe",null),m=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"700"},on:{input:t.displayedChanged},model:{value:t.displayed,callback:function(e){t.displayed=e},expression:"displayed"}},[n("v-card",[t.hasProduct()?n("div",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Shopping Cart")])]),n("v-container",t._l(t.cartContents,(function(e,o){return n("div",{key:o,staticClass:"box-item"},[n("v-card",[n("v-row",[n("v-col",{attrs:{cols:2}},[n("v-img",{attrs:{src:e.product.images[0],"max-height":"100","max-width":"100",contain:""}})],1),n("v-col",{attrs:{cols:5}},[n("h3",{staticClass:"item-name"},[t._v(t._s(e.product.displayName))]),t._l(e.selectedOptions,(function(e,o){return n("p",{key:o},[t._v(t._s(e.name)+": "+t._s(e.value))])}))],2),n("v-col",{attrs:{cols:3}},[n("span",{staticClass:"item-price"},[t._v("$ "+t._s(t.getItemPrice(e))+".00")])]),n("v-col",{attrs:{cols:1}},[n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.removeItem(o)}}},[t._v("Remove")])],1)],1)],1),n("br")],1)})),0),t.showDiscount?n("v-list-item",[t.showDiscount?n("v-row",[n("v-col",{attrs:{cols:5}},[n("span",[t._v("Subtotal")])]),n("v-col",{attrs:{cols:2,offset:5}},[n("span",[t._v(t._s(t.subtotal()))])])],1):t._e()],1):t._e(),t.showDiscount?n("v-list-item",[t.showDiscount?n("v-row",[n("v-col",{attrs:{cols:5}},[n("span",[t._v("Bundle Discount")])]),n("v-col",{attrs:{cols:2,offset:5,color:"red"}},[t._v(" ("+t._s(t.bundleDiscount())+") "),n("span",{attrs:{color:"red"}})])],1):t._e()],1):t._e(),t.showBonusItems?n("v-list-item",[n("v-row",[n("v-col",{attrs:{cols:5}},[n("span",[t._v("Bonus Items")])]),n("v-col",{attrs:{cols:2,offset:5}},[n("span",[t._v(t._s(t.getBonusItemText()))])])],1)],1):t._e(),n("v-card-title",[n("v-row",[n("v-col",{attrs:{cols:5}},[n("span",[t._v("Total Price:")])]),n("v-col",{attrs:{cols:2,offset:5}},[n("span",[t._v(t._s(t.totalPrice()))])])],1)],1)],1):n("v-card-title",{staticClass:"headline"},[t._v("Your Cart is Empty!")]),n("v-card-actions",[t.hasProduct()?n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.checkout()}}},[t._v("Go To Checkout")]):t._e(),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.close()}}},[t._v("Continue Shopping")])],1)],1),n("v-overlay",{attrs:{absolute:!0,value:t.showOverlay}},[n("v-btn",{attrs:{color:"success"}},[t._v(" Taking you to the Secure Checkout Page... "),n("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1)],1)],1),n("v-dialog",{attrs:{"max-width":"320"},model:{value:t.showCheckoutDisabledMessage,callback:function(e){t.showCheckoutDisabledMessage=e},expression:"showCheckoutDisabledMessage"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Sorry, we're not open yet!")]),n("v-card-text",[t._v("We're not quite ready to sell you anything just yet. Please check back with us in a bit!")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.showCheckoutDisabledMessage=!1}}},[t._v("Okay")])],1)],1)],1)],1)},v=[],g=(n("d81d"),n("d3b7"),n("25f0"),n("2f62")),h=n("bc3a"),b=n.n(h);function _(t){return b.a.post("https://cphsprojectgrad.com/api/process_payment",t).then((function(t){return t.data}))}var w=_,y={name:"cart",props:["value"],components:{},data:function(){return{displayed:!1,showCheckoutDisabledMessage:!1,showOverlay:!1}},created:function(){"disabled"==this.getEndpoint&&this.setEndpoint("production")},mounted:function(){window.console.log("Cart mounted!"),this.displayed=this.value,window.console.log(this.$router)},watch:{value:function(t){window.console.log("value changed: "+t.toString()),this.displayed=t}},methods:Object(r["a"])({},Object(g["b"])(["addProduct","removeProduct","setPendingCheckout","setEndpoint"]),{checkout:function(){var t=this;if("disabled"!=this.getEndpoint){var e=this.getCheckoutPayload,n=window.location.href,o=this.$router.currentRoute.fullPath,i=n.substring(0,n.length-o.length),a=i+"/paymentConfirmation/"+this.getOrderKey;e.body.redirect_url=a,window.console.log("checkout!"),window.console.log(e),window.console.log(e.body.order.order.id),window.console.log(e.body.redirect_url),w(e).then((function(e){window.console.log("Received Server Result from checkout"),window.console.log(e),t.setPendingCheckout(e),window.console.log(e.checkout_page_url),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1,window.location=e.checkout_page_url}),2500)})).catch((function(t){window.console.log(t)}))}else this.showCheckoutDisabledMessage=!0},close:function(){this.displayed=!1,this.$emit("input",!1)},hasProduct:function(){return this.cartContents.length>0},subtotal:function(){var t=this.getSubtotal;return"$"+"".concat(t)},bundleDiscount:function(){var t=this.getBundleDiscountAndBonus;return"$"+"".concat(t.discount)},totalPrice:function(){var t=this.getTotalPrice;return window.console.log(t),"$"+"".concat(t)},getBonusItemText:function(){var t=this.getBundleDiscountAndBonus;window.console.log(t);var e="",n={};for(var o in t.bonuses.forEach((function(t){t in n||(n[t]=0),n[t]+=1})),n)""!=e&&(e+=", "),e+="".concat(o," (").concat(n[o],")");return e},removeItem:function(t){var e=this.cartContents[t].index;this.removeProduct(e)},displayedChanged:function(t){window.console.log("displayedChanged: "+t.toString()),0==t&&this.close()},getItemPrice:function(t){return this.$store.getters.getItemPrice(t)}}),computed:Object(r["a"])({},Object(g["c"])(["getProductsInCart","getProducts","getTotalPrice","getSubtotal","getBundleDiscountAndBonus","getLineItemsForCheckout","getCheckoutPayload","getEndpoint","getOrderKey"]),{showDiscount:function(){return this.getBundleDiscountAndBonus.awards.length>0},showBonusItems:function(){return this.getBundleDiscountAndBonus.bonuses.length>0},cartContents:function(){var t=this;return this.getProductsInCart.map((function(e,n){return{product:t.getProducts.find((function(t){return t.id==e.id})),id:e.id,selectedOptions:e.selectedOptions,index:n}})).sort((function(t,e){return t.product.id-e.product.id}))}})},C=y,P=n("6544"),x=n.n(P),k=n("8336"),O=n("b0af"),S=n("99d9"),V=n("62ad"),A=n("a523"),D=n("169a"),T=n("adda"),I=n("da13"),j=n("a797"),L=n("490a"),E=n("0fd9"),N=n("2fa4"),B=Object(d["a"])(C,f,v,!1,null,null,null),$=B.exports;x()(B,{VBtn:k["a"],VCard:O["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VCol:V["a"],VContainer:A["a"],VDialog:D["a"],VImg:T["a"],VListItem:I["a"],VOverlay:j["a"],VProgressCircular:L["a"],VRow:E["a"],VSpacer:N["a"]});var R={name:"App",components:{btn:m,cart:$},data:function(){return{drawer:null,miniVariant:!1,showCart:!1,snackbar:!1,links:[{text:"About Us",href:"/about"},{text:"Become a Sponsor",href:"/becomeASponsor"},{text:"2021 Sponsors",href:"/2021Sponsors"}]}},watch:{productAdded:function(t){window.console.log("watch productAdded!"),t&&(this.snackbar=!0,this.acknowledgeProductAdded())}},methods:Object(r["a"])({},Object(g["b"])(["acknowledgeProductAdded"]),{hasProduct:function(){return this.getProductsInCart.length>0},showPopupCart:function(){var t=this;window.console.log("showPopupCart!"),this.showCart=!0,this.getProductsInCart.forEach((function(e){var n=t.getProducts.find((function(t){return t.id==e.id}));window.console.log(n.name),e.selectedOptions.forEach((function(t){window.console.log("".concat(t.name,": ").concat(t.value))}))}))}}),computed:Object(r["a"])({},Object(g["c"])(["getProductsInCart","getPopupCart","getProducts","onProductAdded","getNameOfLastProductAdded"]),{productAdded:function(){return this.onProductAdded},nameOfLastProductAdded:function(){return this.getNameOfLastProductAdded}})},U=R,H=(n("5c0b"),n("7496")),M=n("40dc"),K=n("5bc1"),G=n("a75b"),X=n("ce7e"),q=n("553a"),z=n("132d"),F=n("8860"),W=n("8270"),J=n("5d23"),Y=n("34c3"),Z=n("f774"),Q=n("2db4"),tt=Object(d["a"])(U,i,a,!1,null,null,null),et=tt.exports;x()(tt,{VApp:H["a"],VAppBar:M["a"],VAppBarNavIcon:K["a"],VContent:G["a"],VDivider:X["a"],VFooter:q["a"],VIcon:z["a"],VImg:T["a"],VList:F["a"],VListItem:I["a"],VListItemAvatar:W["a"],VListItemContent:J["a"],VListItemIcon:Y["a"],VListItemSubtitle:J["b"],VListItemTitle:J["c"],VNavigationDrawer:Z["a"],VSnackbar:Q["a"],VSpacer:N["a"]});var nt=n("f309");o["a"].use(nt["a"]);var ot=new nt["a"]({}),it=n("8c4f"),at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-card",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:n("5a0c"),contain:"",height:"400"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Project Grad 2021!")]),o("h2",[t._v("Celebrating and Honoring CPHS Seniors in the class of 2021")])]),o("v-col",{attrs:{cols:"12"}},[o("mainCarousel",{attrs:{height:400,items:t.carouselItems}})],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Links")]),o("v-row",{attrs:{justify:"center"}},t._l(t.links,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href}},[t._v(t._s(e.text))])})),0)],1)],1)],1)],1)},rt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.productPopup,callback:function(e){t.productPopup=e},expression:"productPopup"}},[t.productPopup?n("v-card",[n("product",{attrs:{item:t.currentProduct,dialog:""},on:{closeDialog:function(e){return t.closeModal()}}}),t._e()],1):t._e()],1),n("v-carousel",{attrs:{cycle:!0,height:t.height,"hide-delimiter-background":!0,"show-arrows-on-hover":""}},t._l(t.items,(function(e,o){return n("div",{key:o},[e.hasOwnProperty("link")?n("v-carousel-item",{attrs:{src:e.image,to:e.link,height:t.height,contain:"","reverse-transition":"fade-transition",transition:"fade-transition"}}):n("v-carousel-item",{attrs:{src:e.image,height:t.height,to:"/",contain:"","reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(n){return t.productClick(e)}}})],1)})),0)],1)},st=[],lt=(n("a9e3"),n("be6f")),ut={name:"mainCarousel",components:{product:lt["a"]},props:{height:Number,items:Array},data:function(){return{productPopup:!1,currentProduct:null}},created:function(){window.console.log(this.items)},methods:{closeModal:function(){this.productPopup=!1,this.currentProduct=null},productClick:function(t){window.console.log("item: ".concat(t.product.id)),this.currentProduct=t.product,this.productPopup=!0}},computed:{}},dt=ut,pt=n("5e66"),mt=n("3e35"),ft=Object(d["a"])(dt,ct,st,!1,null,null,null),vt=ft.exports;x()(ft,{VBtn:k["a"],VCard:O["a"],VCarousel:pt["a"],VCarouselItem:mt["a"],VDialog:D["a"]});var gt={name:"Home",components:{mainCarousel:vt},data:function(){return{carouselItems:[],images:[],links:[{text:"About Us",href:"/about"},{text:"Become a Sponsor",href:"/becomeASponsor"},{text:"2021 Sponsors",href:"/2021Sponsors"}]}},created:function(){var t=this,e=this.getProducts;this.carouselItems=[],e.forEach((function(e){t.carouselItems.push({image:e.images[0],product:e})}))},computed:Object(r["a"])({},Object(g["c"])(["getProducts"]))},ht=gt,bt=Object(d["a"])(ht,at,rt,!1,null,null,null),_t=bt.exports;x()(bt,{VCard:O["a"],VCol:V["a"],VContainer:A["a"],VImg:T["a"],VRow:E["a"]}),o["a"].use(it["a"]);var wt=[{path:"/",name:"Home",component:_t},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/store",name:"Store",component:function(){return n.e("store").then(n.bind(null,"2c25"))}},{path:"/paymentConfirmation/:orderKey",name:"PaymentConfirmation",component:function(){return n.e("store").then(n.bind(null,"e6b5"))}},{path:"/SiteConfigurationSettings",name:"Configuration",component:function(){return n.e("store").then(n.bind(null,"829a"))}},{path:"*",redirect:"/"}],yt=new it["a"]({mode:"history",routes:wt}),Ct=yt,Pt=(n("a623"),n("c975"),n("13d5"),n("a434"),n("ac1f"),n("5319"),n("0e44"));function xt(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}o["a"].use(g["a"]);var kt="L9Z61XZ30NKY3",Ot="https://connect.squareupsandbox.com/v2/locations/".concat(kt,"/checkouts"),St="53E3BR1NS7ENT",Vt="https://connect.squareup.com/v2/locations/".concat(St,"/checkouts"),At={sandbox:{locationId:kt,checkoutUrl:Ot},production:{locationId:St,checkoutUrl:Vt}};function Dt(t,e){window.console.log("state"),window.console.log(t),window.console.log("cartItem:"),window.console.log(e);var n=t.products.find((function(t){return t.id==e.id})).price;return 0==n&&(n=e.selectedOptions[0].value),n}function Tt(t){var e="";return t.selectedOptions.forEach((function(t,n){n>0&&(e+=", "),e+="".concat(t.name,": ").concat(t.value)})),e}function It(t,e){return t.products.find((function(t){return t.id==e})).displayName}function jt(t){var e=t.cartProducts.reduce((function(e,n){return e+Dt(t,n)}),0);return e}function Lt(t){var e=jt(t),n=$t(t).discount;return e-n}function Et(t){var e=t.substring(0,8),n=parseInt(e,16);return n.toString()}function Nt(t){null==t.orderKey&&(t.orderKey=xt());var e=Et(t.orderKey);window.console.log(e);var n={endpoint:t.endpoint,squareUrl:At[t.endpoint].checkoutUrl,body:{idempotency_key:xt(),order:{idempotency_key:t.orderKey,order:{location_id:At[t.endpoint].locationId,line_items:Bt(t)}},redirect_url:window.location.href+"paymentConfirmation/"+t.orderKey,ask_for_shipping_address:!1,merchant_support_email:"cphsprojgrad2021@gmail.com"}},o=$t(t);return o.awards.length>0&&(n.body.order.order.discounts=o.awards.map((function(t){return{name:t.name,amount_money:{amount:100*t.discount,currency:"USD"}}}))),o.bonuses.forEach((function(t){n.body.order.order.line_items.push({name:t,quantity:"1",base_price_money:{amount:0,currency:"USD"},note:"Bonus Item"})})),n}function Bt(t){var e=[];return e=t.cartProducts.map((function(e){return{name:It(t,e.id),quantity:"1",base_price_money:{amount:100*Dt(t,e),currency:"USD"},note:Tt(e)}})),e}function $t(t){var e=0,n=[],o=[],i=t.cartProducts.map((function(t){return t.id})),a=!0;while(a){a=!1;for(var r=0;r<t.bundles.length;++r){var c=t.bundles[r];if(c.items.every((function(t){return i.indexOf(t)>-1}))){a=!0,o.push({discount:c.discount,bonus:c.bonus,name:c.name}),e+=c.discount,null!=c.bonus&&n.push(c.bonus),c.items.forEach((function(t){var e=i.indexOf(t);i.splice(e,1)}));break}}if(!a)break}var s={discount:e,bonuses:n,awards:o};return s}var Rt=new g["a"].Store({plugins:[Object(Pt["a"])({paths:["cartProducts","pendingCheckout","orderKey","endpoint"]})],state:{bundles:[{name:"Super Senior Bundle",items:[1e3,1003,1005,1006,1001],discount:20,bonus:"Bonus Granite Coaster"},{name:"Senior Bundle",items:[1e3,1003,1005,1006],discount:20,bonus:null}],products:[{id:1e3,name:"t-shirt",displayName:"Senior T-Shirt",caption:"Available in White, Teal, Grey, Pink, and Timberwolf Green",price:25,images:[n("87ee"),n("4ec6"),n("4dcc"),n("c68e"),n("82a1")],imageHeight:800,availableOptions:[{name:"Color",type:"Selection",options:["Green","Pink","Grey","White","Teal"]},{name:"Size",type:"Selection",options:["S","M","L","XL","XXL","XXXL"]}]},{id:1001,name:"brick",displayName:"Commemorative Brick",caption:"Secure your place in history",price:50,images:[n("1d27")],imageHeight:800,availableOptions:[{name:"Text Line 1",type:"Text",charLimit:20},{name:"Text Line 2",type:"Text",charLimit:20},{name:"Text Line 3",type:"Text",charLimit:20}]},{id:1003,name:"yardsign",displayName:"Yard Sign",caption:"Show off your school spirit to your neighbors",price:25,images:[n("ac7d")],imageHeight:400,availableOptions:[]},{id:1004,name:"flag",displayName:"Timberwolf Flag",caption:"Pool not included",price:20,images:[n("8ef9")],imageHeight:400,availableOptions:[]},{id:1005,name:"facemask",displayName:"Timberwolf Face Mask",caption:"Available with large or small logo",price:10,images:[n("e4b2"),n("5e75")],imageHeight:400,availableOptions:[{name:"Style",type:"Selection",options:["Large Logo","Small Logo"]}]},{id:1006,name:"gaiter",displayName:"Timberwolf Gaiter",caption:"Available in Green or Camo",price:10,images:[n("1df9"),n("47ba")],imageHeight:400,availableOptions:[{name:"Color",type:"Selection",options:["Green","Camo"]}]},{id:1007,name:"jersey",displayName:"Senior Jersey",caption:"Only available until 8/25/2020!",price:25,images:[n("31e5")],imageHeight:400,availableOptions:[{name:"Size",type:"Selection",options:["S","M","L","XL","XXL","XXXL"]}]},{id:1008,name:"donation",displayName:"Sponsor a Senior",caption:"Make a donation to Project Graduation",price:0,images:[n("d0d7")],imageHeight:400,availableOptions:[{name:"Donation Amount",type:"NumericSlider",min:5,max:5e3,options:[20,50,100,250,500,1e3]}]}],orderKey:null,cartProducts:[],currentProduct:{},triggerProductAdded:!1,nameOfLastProductAdded:"",pendingCheckout:null,endpoint:"production"},getters:{getProducts:function(t){return t.products},getProductsInCart:function(t){return t.cartProducts},getCurrentProduct:function(t){return t.currentProduct},getItemPrice:function(t){return function(e){return Dt(t,e)}},getTotalPrice:function(t){return Lt(t)},getSubtotal:function(t){return jt(t)},getBundleDiscountAndBonus:function(t){return $t(t)},onProductAdded:function(t){return t.triggerProductAdded},getNameOfLastProductAdded:function(t){return t.nameOfLastProductAdded},getLineItemsForCheckout:function(t){return Bt(t)},getCheckoutPayload:function(t){return Nt(t)},getOrderKey:function(t){return t.orderKey},getPendingCheckout:function(t){return t.pendingCheckout},getEndpoint:function(t){return t.endpoint}},mutations:{ADD_PRODUCT:function(t,e){t.cartProducts.push(e),t.triggerProductAdded=!0,t.nameOfLastProductAdded=It(t,e.id),1==t.cartProducts.length&&(t.orderKey=xt())},REMOVE_PRODUCT:function(t,e){t.cartProducts.splice(e,1),0==t.cartProducts.length&&(t.orderKey=null)},CURRENT_PRODUCT:function(t,e){t.currentProduct=e},ACKNOWLEDGE_PRODUCT_ADDED:function(t){t.triggerProductAdded=!1},CLEAR_CART:function(t){t.cartProducts=[],t.orderKey=null},PENDING_CHECKOUT:function(t,e){t.pendingCheckout=e},SET_ENDPOINT:function(t,e){t.endpoint=e}},actions:{addProduct:function(t,e){t.commit("ADD_PRODUCT",e)},removeProduct:function(t,e){t.commit("REMOVE_PRODUCT",e)},currentProduct:function(t,e){t.commit("CURRENT_PRODUCT",e)},acknowledgeProductAdded:function(t){t.commit("ACKNOWLEDGE_PRODUCT_ADDED")},clearCart:function(t){t.commit("CLEAR_CART")},setPendingCheckout:function(t,e){t.commit("PENDING_CHECKOUT",e)},setEndpoint:function(t,e){t.commit("SET_ENDPOINT",e)}}});o["a"].config.productionTip=!1,new o["a"]({vuetify:ot,router:Ct,store:Rt,render:function(t){return t(et)}}).$mount("#app")},"5a0c":function(t,e,n){t.exports=n.p+"img/CPHS_PG2021.21781dac.png"},"5c0b":function(t,e,n){"use strict";var o=n("7694"),i=n.n(o);i.a},"5e75":function(t,e,n){t.exports=n.p+"img/face_mask_2.fec6a0bf.png"},"6f5d":function(t,e,n){t.exports=n.p+"img/cart.74b02e23.svg"},7694:function(t,e,n){},"82a1":function(t,e,n){t.exports=n.p+"img/teal_t_shirt.192ef213.png"},"87ee":function(t,e,n){t.exports=n.p+"img/white_t_shirt.eabee063.png"},"8ef9":function(t,e,n){t.exports=n.p+"img/flag.a5088ef6.jpg"},ac7d:function(t,e,n){t.exports=n.p+"img/yard_sign_2021.273d4862.jpg"},af75:function(t,e,n){"use strict";var o=n("deea"),i=n.n(o);i.a},be6f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("productOptions",{attrs:{item:t.item},on:{productAdded:function(e){return t.closeDialog()}},model:{value:t.optionsDialog,callback:function(e){t.optionsDialog=e},expression:"optionsDialog"}}),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[1==t.item.images.length?n("v-img",{attrs:{src:t.item.images[0],height:t.item.imageHeight,contain:""},on:{click:function(e){return t.imageClick(t.item)}}}):n("v-carousel",{attrs:{cycle:!1,height:t.item.imageHeight,"hide-delimiter-background":!0,"show-arrows-on-hover":""}},t._l(t.item.images,(function(e,o){return n("v-carousel-item",{key:o,attrs:{src:e,"reverse-transition":"fade-transition",contain:"",transition:"fade-transition"},on:{click:function(e){return t.imageClick(t.item)}}})})),1),n("v-card-title",[t._v(t._s(t.item.displayName))]),n("v-card-subtitle",[t._v(t._s(t.item.caption))]),n("v-card-actions",[t.item.price>0?n("v-btn",{attrs:{text:""}},[t._v("$"+t._s(t.item.price))]):t._e(),t.item.availableOptions.length?n("v-btn",{attrs:{color:"purple",text:""},nativeOn:{click:function(e){t.optionsDialog=!0}}},[t._v("Select Options")]):n("v-btn",{attrs:{color:"red",text:""},nativeOn:{click:function(e){return t.addProductToCart({id:t.item.id,selectedOptions:[]})}}},[t._v("Add to Cart")]),n("v-spacer"),t.dialog?n("v-btn",{attrs:{color:"green",text:""},nativeOn:{click:function(e){return t.closeDialog()}}},[t._v("Close")]):t._e(),t._e()],1)],1)],1)},i=[],a=(n("7db0"),n("b0c0"),n("d3b7"),n("25f0"),n("5530")),r=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"500"},on:{input:t.displayedChanged},model:{value:t.displayed,callback:function(e){t.displayed=e},expression:"displayed"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.item.displayName)+" Options")]),n("v-card-text",t._l(t.item.availableOptions,(function(e,o){return n("div",{key:o},["Selection"==e.type?n("v-select",{attrs:{label:t.getSelectionLabel(e.name),items:e.options},model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}}):t._e(),"Text"==e.type?n("v-text-field",{attrs:{label:t.getTextOptionLabel(e),counter:e.charLimit},model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}}):t._e(),"NumericSelection"==e.type?n("v-select",{attrs:{label:t.getSelectionLabel(e.name),items:t.getPriceLabels(e.options)},model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}}):t._e(),"NumericSlider"==e.type?n("div",[n("v-subheader",{staticClass:"pl-0"},[t._v(t._s(e.name))]),n("v-btn-toggle",t._l(e.options,(function(e,i){return n("v-btn",{key:i,on:{click:function(n){return t.selectNumericAmount(e,o)}}},[t._v("$"+t._s(e))])})),1),n("br"),n("br"),n("br"),n("v-slider",{attrs:{"thumb-size":24,"thumb-label":"always",min:e.min,max:e.max},scopedSlots:t._u([{key:"thumb-label",fn:function(n){var o=n.value;return[t._v(t._s(t.getEmoji(o,e.min,e.max)))]}},{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"80px"},attrs:{"hide-details":"","single-line":"",type:"number",prefix:"$"},model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}})]},proxy:!0}],null,!0),model:{value:t.selectedOptions[o].value,callback:function(e){t.$set(t.selectedOptions[o],"value",e)},expression:"selectedOptions[i].value"}})],1):t._e()],1)})),0),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:"",disabled:!t.allOptionsSelected},on:{click:function(e){return t.addProductToCart()}}},[t._v("Add to Cart")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.close()}}},[t._v("Cancel")])],1)],1)],1)},s=[],l=(n("99af"),n("4160"),n("d81d"),n("159b"),{name:"productOptions",props:["item","value"],data:function(){return{displayed:!1,selectedOptions:[],satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"]}},created:function(){this.initializeOptions()},mounted:function(){},watch:{value:function(t){window.console.log("value changed: "+t.toString()),this.displayed=t}},methods:Object(a["a"])({},Object(r["b"])(["addProduct","showOrHiddenModal"]),{addProductToCart:function(){this.allOptionsSelected&&(this.addProduct({id:this.item.id,selectedOptions:this.selectedOptions}),this.$emit("productAdded",!0),this.close())},getEmoji:function(t){var e={0:"😐",20:"🙂",50:"😊",100:"😁",500:"😄",1e3:"😍"};for(var n in e)if(t<n)return e[n];return e[1e3]},getSelectionLabel:function(t){return"Select a ".concat(t)},getTextOptionLabel:function(t){return"".concat(t.name," (").concat(t.charLimit," chars max)")},close:function(){this.$emit("input",!1),this.initializeOptions()},displayedChanged:function(t){window.console.log("displayedChanged: "+t.toString()),0==t&&this.close()},initializeOptions:function(){this.selectedOptions=this.item.availableOptions.map((function(t){return{name:t.name,value:null}}))},getPriceLabels:function(t){return t.map((function(t){return"$"+"".concat(t)}))},selectNumericAmount:function(t,e){window.console.log(this.selectedOptions),window.console.log(t),window.console.log(e),this.selectedOptions[e].value=t}}),computed:{allOptionsSelected:function(){var t=this,e=!0;return this.selectedOptions.forEach((function(n,o){(null===n.value||""===n.value||"Text"===t.item.availableOptions[o].type&&n.value.length>t.item.availableOptions[o].charLimit)&&(e=!1)})),e}}}),u=l,d=n("2877"),p=n("6544"),m=n.n(p),f=n("8336"),v=n("a609"),g=n("b0af"),h=n("99d9"),b=n("169a"),_=n("b974"),w=n("ba0d"),y=n("2fa4"),C=n("e0c7"),P=n("8654"),x=Object(d["a"])(u,c,s,!1,null,null,null),k=x.exports;m()(x,{VBtn:f["a"],VBtnToggle:v["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VDialog:b["a"],VSelect:_["a"],VSlider:w["a"],VSpacer:y["a"],VSubheader:C["a"],VTextField:P["a"]});var O={name:"product",props:{item:Object,dialog:{type:Boolean,default:!1}},components:{productOptions:k},data:function(){return{optionsDialog:!1}},created:function(){window.console.log("Product created!"),window.console.log("Item: "+this.item.id.toString())},methods:Object(a["a"])({},Object(r["b"])(["addProduct","showOrHiddenModal"]),{addProductToCart:function(t){this.addProduct(t),this.closeDialog()},getProductByName:function(t){return this.getProducts.find((function(e){return e.name==t}))},getSelectionLabel:function(t){return"Select a ".concat(t)},imageClick:function(t){t.availableOptions.length>0&&(this.optionsDialog=!0)},closeDialog:function(){this.dialog&&this.$emit("closeDialog",!0)}}),computed:Object(a["a"])({},Object(r["c"])(["getProducts"]),{itemsPerRow:function(){return this.$vuetify.breakpoint.width>1e3?2:1}})},S=O,V=n("5e66"),A=n("3e35"),D=n("132d"),T=n("adda"),I=Object(d["a"])(S,o,i,!1,null,null,null);e["a"]=I.exports;m()(I,{VBtn:f["a"],VCard:g["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardTitle:h["d"],VCarousel:V["a"],VCarouselItem:A["a"],VIcon:D["a"],VImg:T["a"],VSpacer:y["a"]})},c68e:function(t,e,n){t.exports=n.p+"img/green_t_shirt.4ef1e9bb.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.bdee1cd9.png"},d0d7:function(t,e,n){t.exports=n.p+"img/Donate_Button_Transparent3.556b9475.jpg"},deea:function(t,e,n){},e4b2:function(t,e,n){t.exports=n.p+"img/face_mask_1.9991e589.png"}});
//# sourceMappingURL=app.dc1e7f19.js.map