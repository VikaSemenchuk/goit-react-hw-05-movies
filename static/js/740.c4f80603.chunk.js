"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{740:function(n,r,e){e.r(r),e.d(r,{default:function(){return Z}});var t,a,u,c=e(861),s=e(439),o=e(757),i=e.n(o),p=e(204),f=e(791),l=e(689),d=e(168),v=e(444),h=v.ZP.ul(t||(t=(0,d.Z)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n\n    margin: 20px 0;\n    color: #033503;\n"]))),m=v.ZP.h2(a||(a=(0,d.Z)(["\n    margin-bottom: 10px;\n"]))),x=v.ZP.span(u||(u=(0,d.Z)(["\n    font-size: 20px;\n"]))),w=e(184),Z=function(){var n=(0,f.useState)([]),r=(0,s.Z)(n,2),e=r[0],t=r[1],a=(0,f.useState)(null),u=(0,s.Z)(a,2),o=u[0],d=u[1],v=(0,l.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Kd)(v);case 3:r=n.sent,t(r),d(null),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),d(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]),(0,w.jsxs)(w.Fragment,{children:[null!==o&&(0,w.jsxs)("p",{children:["Oops, some error occurred... Message: ",o]}),0===e.length?(0,w.jsx)("p",{children:"Sorry there are still no reviews"}):(0,w.jsx)(h,{children:e.map((function(n){var r=n.id,e=n.author,t=n.content;return(0,w.jsxs)("li",{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(x,{children:"Author: "}),e]}),(0,w.jsx)("p",{children:t})]},r)}))})]})}},204:function(n,r,e){e.d(r,{Kd:function(){return f},LZ:function(){return s},X6:function(){return p},er:function(){return i},j:function(){return o}});var t=e(861),a=e(757),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"f0f166877cbfe2faaaf5ad4de4d845ef"}}),s=function(){var n=(0,t.Z)(u().mark((function n(){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"movie","day",n.next=4,c.get("trending/".concat("movie","/").concat("day"));case 4:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:r}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(r,"/credits"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(r,"/reviews"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.c4f80603.chunk.js.map