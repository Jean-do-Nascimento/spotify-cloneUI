(this.webpackJsonpcatjam=this.webpackJsonpcatjam||[]).push([[0],{35:function(e,a,t){},54:function(e,a,t){e.exports=t(72)},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),o=(t(35),t(14)),s=(t(59),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("4ce342be30a34b90a270f0a621808484","&redirect_uri=").concat("http://localhost:3000","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var i=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement("a",{href:s},"LOGIN WITH SPOTIFY"))},m=t(36),u=t.n(m);t(60),t(61),t(62);var d=function(e){var a=e.title,t=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},t&&l.a.createElement(t,{className:"sidebarOption__icon"}),t?l.a.createElement("h4",null,a):l.a.createElement("p",null,a))},E=t(37),f=t.n(E),v=t(27),p=t.n(v),_=t(42),y=t.n(_),b=Object(n.createContext)(),g=function(e){var a=e.initialState,t=e.reducer,r=e.children;return l.a.createElement(b.Provider,{value:Object(n.useReducer)(t,a)},r)},h=function(){return Object(n.useContext)(b)};var N=function(){var e,a=h(),t=Object(o.a)(a,2),n=t[0].playlists;return t[1],l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"sidebar-logo"}),l.a.createElement(d,{Icon:f.a,title:"Home"}),l.a.createElement(d,{Icon:p.a,title:"Search"}),l.a.createElement(d,{Icon:y.a,title:"Your Library"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sodebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(d,{title:e.name})})))},S=(t(68),t(69),t(91));var w=function(){var e,a=h(),t=Object(o.a)(a,2),n=t[0].user;return t[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(p.a,null),l.a.createElement("input",{placeholder:"Search for Artists, Songs, Podcasts, etc..."})),l.a.createElement("div",{className:"header__right"},l.a.createElement(S.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),l.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))},O=t(86),j=t(87),k=t(88);t(70);var T=function(e){var a=e.track;return l.a.createElement("div",{className:"songRow"},l.a.createElement("img",{className:"songRow__album",src:a.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,a.name),l.a.createElement("p",null,a.artists.map((function(e){return e.name})).join(", ")),a.album.name))};var I=function(e){var a=e.spotify,t=h(),n=Object(o.a)(t,2),r=n[0].discover_weekly;return n[1],l.a.createElement("div",{className:"body"},l.a.createElement(w,{spotify:a}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===r||void 0===r?void 0:r.images[0].url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,null===r||void 0===r?void 0:r.name),l.a.createElement("p",null,null===r||void 0===r?void 0:r.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(O.a,{className:"body__shuffle"}),l.a.createElement(j.a,{fontSize:"large"}),l.a.createElement(k.a,null)),null===r||void 0===r?void 0:r.tracks.items.map((function(e){return l.a.createElement(T,{track:e.track})}))))},L=(t(71),t(45)),P=t.n(L),R=t(44),x=t.n(R),Y=t(48),M=t.n(Y),A=t(49),W=t.n(A),C=t(46),U=t.n(C),z=t(43),K=t.n(z),D=t(47),V=t.n(D),B=t(89),H=t(90);var J=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"footer__albumLogo",src:"https://lastfm.freetls.fastly.net/i/u/500x500/03b4b7ae49253f66a4280fc534b78952.jpg",alt:""}),l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"Mayonaka no Door / Stay With Me"),l.a.createElement("p",null,"Miki Matsubara"))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(K.a,{className:"footer__green"}),l.a.createElement(x.a,{className:"footer__icon"}),l.a.createElement(P.a,{fontSize:"large",className:"footer__icon"}),l.a.createElement(U.a,{className:"footer__icon"}),l.a.createElement(V.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(B.a,{container:!0,spacing:2},l.a.createElement(B.a,{item:!0},l.a.createElement(M.a,null)),l.a.createElement(B.a,{item:!0},l.a.createElement(W.a,null)),l.a.createElement(B.a,{item:!0,xs:!0},l.a.createElement(H.a,{"aria-labelledby":"continuous-slider"})))))},q=function(e){var a=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(N,null),l.a.createElement(I,{spotify:a})),l.a.createElement(J,null))},F=new u.a;var G=function(){var e=h(),a=Object(o.a)(e,2),t=a[0],r=(t.user,t.token),c=a[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,a){var t=a.split("=");return e[t[0]]=decodeURIComponent(t[1]),e}),{});window.location.hash="";var a=e.access_token;a&&(c({type:"SET_TOKEN",token:a}),F.setAccessToken(a),F.getMe().then((function(e){c({type:"SET_USER",user:e})})),F.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})),F.getPlaylist("37i9dQZEVXbqifUM2zfSvm").then((function(e){c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),l.a.createElement("div",{className:"app"},r?l.a.createElement(q,{spotify:F}):l.a.createElement(i,{Login:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(12),X=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(Q.a)(Object(Q.a)({},e),{},{user:a.user});case"SET_TOKEN":return Object(Q.a)(Object(Q.a)({},e),{},{token:a.token});case"SET_PLAYLISTS":return Object(Q.a)(Object(Q.a)({},e),{},{playlists:a.playlists});case"SET_DISCOVER_WEEKLY":return Object(Q.a)(Object(Q.a)({},e),{},{discover_weekly:a.discover_weekly});default:return e}};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:X},l.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.54b6f2ed.chunk.js.map