(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{35:function(e,t,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);t.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error"})}},36:function(e,t,n){"use strict";var r=n(4),c=n.n(r),a=n(6),s=n(5),i=n(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],p=u[1];return{loading:n,request:Object(i.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,s,i,o,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"application/json"},r(!0),e.prev=4,e.next=7,fetch(t,{method:n,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,r(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),r(!1),p(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(i.useCallback)((function(){p(null)}),[])}}(),t=e.loading,n=e.request,r=e.error,o=e.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=9ae4aad6775132924cbe488a353b2673",p=function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,n("".concat(u,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return r=e.sent,e.next=6,r.data.results.map(h);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(u,"characters?name=").concat(t,"&").concat(l));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(h));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(u,"characters/").concat(t,"?").concat(l));case 2:return r=e.sent,e.abrupt("return",h(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,n("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(l));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(j));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(u,"comics/").concat(t,"?").concat(l));case 2:return r=e.sent,e.abrupt("return",j(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},j=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:r,clearError:o,getAllCharacters:p,getCharacterByName:m,getCharacter:b,getAllComics:d,getComic:f}}},37:function(e,t,n){},38:function(e,t,n){"use strict";n(37);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(2);t.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(3),a=n(10),s=n(0),i=n(36),o=n(19),u=n(35),l=n(38),p=(n(44),n(2)),m=function(e){var t=e.comic,n=t.title,r=t.description,c=t.pageCount,s=t.thumbnail,i=t.language,o=t.price;return Object(p.jsxs)("div",{className:"single-comic",children:[Object(p.jsx)("img",{src:s,alt:n,className:"single-comic__img"}),Object(p.jsxs)("div",{className:"single-comic__info",children:[Object(p.jsx)("h2",{className:"single-comic__name",children:n}),Object(p.jsx)("p",{className:"single-comic__descr",children:r}),Object(p.jsx)("p",{className:"single-comic__descr",children:c}),Object(p.jsxs)("p",{className:"single-comic__descr",children:["Language: ",i]}),Object(p.jsx)("div",{className:"single-comic__price",children:o})]}),Object(p.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=Object(c.n)().comicId,t=Object(s.useState)(null),n=Object(r.a)(t,2),a=n[0],b=n[1],d=Object(i.a)(),f=d.loading,h=d.error,j=d.getComic,g=d.clearError;console.log(c.n),Object(s.useEffect)((function(){v()}),[e]);var v=function(){g(),j(e).then(x)},x=function(e){b(e)},O=h?Object(p.jsx)(u.a,{}):null,w=f?Object(p.jsx)(o.a,{}):null,_=f||h||!a?null:Object(p.jsx)(m,{comic:a});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{}),O,w,_]})}}}]);
//# sourceMappingURL=5.e0176266.chunk.js.map