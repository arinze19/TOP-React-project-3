(this["webpackJsonppoke-memo"]=this["webpackJsonppoke-memo"]||[]).push([[0],{24:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var c=r(3),a=r.n(c),n=r(15),s=r.n(n),o=r(5),i=r.n(o),l=r(7),d=r(9),j=r(6),u=(r(24),r(1)),h=function(e){var t=e.pokemon,r=e.handleClick;return Object(u.jsxs)("div",{className:"card",onClick:function(){return r(t.id)},"data-testid":"card-item",children:[Object(u.jsx)("img",{src:t.url,alt:t.name}),Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:"card-item__name","data-testid":"card-item-name",children:t.name})]})},m=function(e){var t=e.pokemons,r=e.level,c=e.handleClick;return Object(u.jsxs)("div",{className:"card-list__container",children:[Object(u.jsxs)("h2",{children:["Level: ",r]}),Object(u.jsx)("div",{className:"card-list__main",children:t.map((function(e,t){return Object(u.jsx)(h,{pokemon:e,handleClick:c},t)}))})]})};r(26);var v=function(e){var t=e.score,r=Object(c.useMemo)((function(){var e=localStorage.getItem("high_score");return e?parseInt(e):0}),[t]);return Object(u.jsxs)("header",{className:"header-container",children:[Object(u.jsxs)("div",{className:"header-container__logo",children:[Object(u.jsx)("img",{src:"/logo.png",alt:"poke-memo"}),Object(u.jsx)("h1",{children:"Poke Memo"})]}),Object(u.jsxs)("ul",{className:"header-container__score-info",children:[Object(u.jsxs)("li",{"data-testid":"current-score",children:["Your Score: ",t]}),Object(u.jsxs)("li",{"data-testid":"high-score",children:["High Score",Object(u.jsx)("i",{className:"las la-star"}),": ",r]})]})]})};r(27);var f=function(){return Object(u.jsx)("div",{className:"loader-container",children:Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})},b=(r(18),r(35));function O(e,t){for(var r=new Set,c=[],a=0;a<2*t;a++){for(var n=Math.floor(Math.random()*e.length);r.has(n);)n=Math.floor(Math.random()*e.length);c.push(e[n]),r.add(n)}return c}var p=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,c,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Math.floor(80*Math.random()),e.next=3,b.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(t+10,"&offset=").concat(10*r));case 3:return c=e.sent,a=c.data,n=a.results.map((function(e,t){var r=e.url.slice(34,-1).toString().padStart(3,"0");return e.id=t,e.url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(r,".png"),e.isClicked=!1,e})),e.abrupt("return",O(n,t));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var x=function(){var e=Object(c.useState)({score:0,level:1}),t=Object(j.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)([]),s=Object(j.a)(n,2),o=s[0],h=s[1],b=Object(c.useState)(!1),O=Object(j.a)(b,2),x=O[0],g=O[1];return Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,p(r.level);case 4:t=e.sent,h(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}),[r.level]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{score:r.score}),x?Object(u.jsx)(f,{}):Object(u.jsx)(m,{pokemons:o,level:r.level,handleClick:function(e){var t=o.findIndex((function(t){return t.id===e}));if(o[t].isClicked)return alert("Game Over Champ. Good game"),a({score:0,level:1});o[t].isClicked=!0,r.score=r.score+1;var c=localStorage.getItem("high_score")?JSON.parse(localStorage.getItem("high_score")):0;r.score>=c?localStorage.setItem("high_score",JSON.stringify(r.score)):a(Object(d.a)(Object(d.a)({},r),{},{score:r.score+1})),o.every((function(e){return!0===e.isClicked}))?a(Object(d.a)(Object(d.a)({},r),{},{level:r.level+1})):h(function(e){for(var t=[],r=new Set,c=0;c<e.length;c++){for(var a=Math.floor(Math.random()*e.length);e[a].id===e[c].id||r.has(a);)a=Math.floor(Math.random()*e.length);t[a]=e[c],r.add(a)}return t}(o))}})]})};r(32);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9b6873ce.chunk.js.map