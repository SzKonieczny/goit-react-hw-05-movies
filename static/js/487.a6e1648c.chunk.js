(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[487],{4680:function(n,e,t){"use strict";t.d(e,{Bt:function(){return x},WK:function(){return m},ZP:function(){return p},ul:function(){return j},y:function(){return h}});var r=t(5861),i=t(4687),a=t.n(i),c=t(5294),o="https://api.themoviedb.org/3/",s="129ca5a87012be791cb78f7f53b5aff0",u="https://api.themoviedb.org/3/trending/all/day",l="https://api.themoviedb.org/3/movie/";function p(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"get",url:u,params:{api_key:s}},n.next=3,(0,c.Z)(e);case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(l).concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=3,(0,c.Z)(t);case 3:return r=n.sent,i=r.data.cast,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(l).concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=3,(0,c.Z)(t);case 3:return r=n.sent,i=r.data.results,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=3,(0,c.Z)(t);case 3:return r=n.sent,i=r.data.results,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"),n.next=3,(0,c.Z)(t);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},487:function(n,e,t){"use strict";t.r(e),t.d(e,{MovieDetails:function(){return m}});var r,i=t(9439),a=t(7689),c=t(1087),o=t(9151),s=t(168),u=t(8617),l=t(7686),p=t(184),d=(0,l.Z)(c.rU)(r||(r=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 8px;\n  margin-left: 20px;\n  color: #33d1aa;\n  text-decoration: none;\n  font-weight: 500;\n  border: 2px solid tomato;\n  border-radius: 3px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),h=function(n){var e=n.to,t=n.children;return(0,p.jsxs)(d,{to:e,children:[(0,p.jsx)(u.jTe,{size:"24"}),t]})},f=t(2791),x=t(4680),v=t(8174),m=(t(5462),function(){var n,e,t=(0,f.useState)(),r=(0,i.Z)(t,2),s=r[0],u=r[1],l=(0,a.UO)().Id,d=(0,a.TH)(),m=null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";if((0,f.useEffect)((function(){try{(0,x.ul)(l).then((function(n){return 0===n.length&&v.Am.error("Nothing is found !",{position:v.Am.POSITION.TOP_LEFT}),u(n)}))}catch(n){v.Am.error({error:n})}}),[l]),!s)return null;var g=s.id,j=s.original_name,w=s.original_title,b=s.overview,y=s.genres,k=s.poster_path,_=s.vote_average,Z=s.first_air_date,U=s.release_date;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("main",{children:[(0,p.jsx)(h,{to:m,children:"Go Back"}),(0,p.jsxs)(o.FimlContainer,{children:[(0,p.jsx)(o.FilmImgDiv,{children:(0,p.jsx)("img",{src:function(n){return null===n||void 0===n?"https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg":"https://www.themoviedb.org/t/p/w500".concat(n)}(k),alt:"Poster film",title:j||w,width:"336",id:g})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[j||w," (",U?U.slice(0,4):Z?Z.slice(0,4):void 0,")"]}),(0,p.jsxs)("h4",{children:["Rating: ",_.toFixed()]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:b}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:y?y.map((function(n){return n.name})).join(", "):"not information"})]})]}),(0,p.jsxs)(o.InformationDiv,{children:[(0,p.jsx)("h4",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"cast",state:d.state,children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"reviews",state:d.state,children:"Reviews"})})]})]}),(0,p.jsx)(v.Ix,{autoClose:2500,position:"top-left",theme:"colored"}),(0,p.jsx)(f.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading page..."}),children:(0,p.jsx)(a.j3,{})})]})})})},9151:function(){}}]);
//# sourceMappingURL=487.a6e1648c.chunk.js.map