"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{336:function(e,t,r){r.d(t,{Hg:function(){return u},IQ:function(){return l},Jh:function(){return f},TP:function(){return p},ld:function(){return o}});var n=r(861),a=r(757),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=new URLSearchParams({api_key:"1baaa3f67deb4da4620757139c87f39d",language:"en-US",include_adult:!1}),u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?".concat(s));case 2:return t=e.sent,r=t.data,n=r.results,e.abrupt("return",n.map((function(e){return{title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,id:e.id}})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t,"&").concat(s));case 2:return r=e.sent,n=r.data,a=n.results,e.abrupt("return",a.map((function(e){return{title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,id:e.id}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,u,o,p,l,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?").concat(s));case 2:return r=e.sent,n=r.data,a=n.title,u=n.name,o=n.vote_average,p=n.overview,l=n.genres,f=n.poster_path,e.abrupt("return",{title:a,name:u,vote_average:o,overview:p,genres:l,poster_path:f});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(s));case 2:return r=e.sent,n=r.data,a=n.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(s));case 2:return r=e.sent,n=r.data,a=n.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},321:function(e,t,r){var n=r(184);t.Z=function(){return(0,n.jsx)("div",{className:"d-flex justify-content-center",children:(0,n.jsx)("div",{className:"spinner-border",role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}},130:function(e,t,r){var n=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{className:"list-group",children:t.map((function(e){var t=e.title,n=e.id,i=e.vote_average;return(0,c.jsxs)("li",{className:" d-flex list-group-item list-group-item-action ",children:[(0,c.jsxs)(a.rU,{to:"/".concat(n),state:{from:r},className:"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",children:[(0,c.jsx)("i",{className:"bi bi-film me-2"}),t]}),(0,c.jsxs)("span",{className:"badge  bg-primary rounded-pill ms-auto p-2  ",children:["imdb: ",i.toFixed(1)]})]},n)}))})}},277:function(e,t,r){r.d(t,{$:function(){return a}});var n=r(184),a=function(e){var t=e.children;return(0,n.jsx)("section",{className:"pt-3 pb-3 mt-5",children:(0,n.jsx)("div",{className:"container",children:t})})}},415:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(336),u=r(321),o=r(277),p=r(130),l=r(791),f=r(184);t.default=function(){var e=(0,l.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],d=(0,l.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1];return(0,l.useEffect)((function(){m(!0);var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Hg)();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(console.log("error >>:",e.t0));case 10:return e.prev=10,m(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(o.$,{children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h1",{children:"Trending Today"}),h&&(0,f.jsx)(u.Z,{}),(0,f.jsx)(p.Z,{movies:r})]})})})}}}]);
//# sourceMappingURL=415.0efd8625.chunk.js.map