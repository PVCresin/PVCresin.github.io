_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("hGi/"),o=n("q1tI"),u=n.n(o),a=n("YFqc"),c=n.n(a),f=u.a.createElement;t.default=function(e){return Object(r.a)(e),f("div",null,f(c.a,{href:"/about"},f("a",null,"About")),f("h1",null,"Next"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var u,a=o(n("q1tI")),c=n("elyg"),f=n("nOHt"),i=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=u||(s?u=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),u=o[0],i=o[1],h=(0,f.useRouter)(),v=h&&h.pathname||"/",w=a.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),E=w.href,y=w.as;a.default.useEffect((function(){if(t&&s&&u&&u.tagName&&(0,c.isLocalURL)(E)&&!l[E+"%"+y])return p(u,(function(){d(h,E,y)}))}),[t,u,E,y,h]);var _=e.children,g=e.replace,b=e.shallow,m=e.scroll;"string"===typeof _&&(_=a.default.createElement("a",null,_));var L=a.Children.only(_),N={ref:function(e){e&&i(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,E,y,g,b,m)}};return t&&(N.onMouseEnter=function(e){(0,c.isLocalURL)(E)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(h,E,y,{priority:!0}))}),(e.passHref||"a"===L.type&&!("href"in L.props))&&(N.href=(0,c.addBasePath)(y)),a.default.cloneElement(L,N)};t.default=h},"hGi/":function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return r}))}},[["/EDR",0,2,1]]]);