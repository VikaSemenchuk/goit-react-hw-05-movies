"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{8740:function(r,n,e){e.r(n),e.d(n,{default:function(){return g}});var t,a,u,c=e(5861),s=e(9439),o=e(7757),i=e.n(o),p=e(2791),f=e(7689),d=e(8174),l=e(9204),v=e(168),h=e(6444),m=h.ZP.ul(t||(t=(0,v.Z)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n\n    margin: 20px 0;\n    color: #033503;\n"]))),x=h.ZP.h2(a||(a=(0,v.Z)(["\n    margin-bottom: 10px;\n"]))),w=h.ZP.span(u||(u=(0,v.Z)(["\n    font-size: 20px;\n"]))),Z=e(184);function g(){var r=(0,p.useState)([]),n=(0,s.Z)(r,2),e=n[0],t=n[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){var r=function(){var r=(0,c.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.Kd)(a);case 3:n=r.sent,t(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),d.Am.error("Oops, some error occurred... Message: ".concat(r.t0.message));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[a]),(0,Z.jsx)(Z.Fragment,{children:0===e.length?(0,Z.jsx)("p",{children:"Sorry there are still no reviews"}):(0,Z.jsx)(m,{children:e.map((function(r){var n=r.id,e=r.author,t=r.content;return(0,Z.jsxs)("li",{children:[(0,Z.jsxs)(x,{children:[(0,Z.jsx)(w,{children:"Author: "}),e]}),(0,Z.jsx)("p",{children:t})]},n)}))})})}},9204:function(r,n,e){e.d(n,{Kd:function(){return f},LZ:function(){return s},X6:function(){return p},er:function(){return i},j:function(){return o}});var t=e(5861),a=e(7757),u=e.n(a),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"f0f166877cbfe2faaaf5ad4de4d845ef"}}),s=function(){var r=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"movie","day",r.next=4,c.get("trending/".concat("movie","/").concat("day"));case 4:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:{query:n}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),i=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(n));case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(n,"/credits"));case 2:return e=r.sent,t=e.data,r.abrupt("return",t.cast);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(n,"/reviews"));case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.13d5e259.chunk.js.map