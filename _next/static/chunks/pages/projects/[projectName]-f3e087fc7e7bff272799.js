_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"3ylf":function(t,e,n){},"BwF/":function(t,e,n){},"HX+h":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("cBaE"),s=(n("3ylf"),a.a.createElement),c=Object(i.a)("componentsSocial");e.a=function(){return s("div",{className:c()},s("ul",{className:c("icon-list")},s("li",{className:c("icon-list-item")},s("a",{className:c("link"),href:"https://twitter.com/pvcresin/",target:"_blank",title:"Twitter",rel:"noopener noreferrer"},s("i",{className:"fab fa-twitter fa-2x"}))),s("li",{className:c("icon-list-item")},s("a",{className:c("link"),href:"https://github.com/pvcresin/",target:"_blank",title:"GitHub",rel:"noopener noreferrer"},s("i",{className:"fab fa-github fa-2x"}))),s("li",{className:c("icon-list-item")},s("a",{className:c("link"),href:"https://www.instagram.com/pvcresin/",target:"_blank",title:"Instagram",rel:"noopener noreferrer"},s("i",{className:"fab fa-instagram fa-2x"}))),s("li",{className:c("icon-list-item")},s("a",{className:c("link"),href:"https://pvcresin.hatenablog.com/",target:"_blank",title:"Hatena Blog",rel:"noopener noreferrer"},s("i",{className:"fas fa-rss fa-2x"})))))}},ODXe:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return a}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RzFV:function(t,e,n){},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",s="month",c="quarter",o="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),a=e-r<0,i=t.clone().add(n+(a?-1:1),s);return Number(-(n+(e-r)/(a?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:s,y:o,w:i,d:a,D:"date",h:r,m:n,s:e,ms:t,Q:c}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d="en",p={};p[d]=m;var $=function(t){return t instanceof N},g=function(t,e,n){var r;if(!t)return d;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var a=t.name;p[a]=t,r=a}return!n&&r&&(d=r),r||!n&&d},v=function(t,e,n){if($(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new N(r)},y=h;y.l=g,y.i=$,y.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var N=function(){function f(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(u);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return v(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<v(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",o)},h.month=function(t){return this.$g(t,"$M",s)},h.day=function(t){return this.$g(t,"$W",a)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,c){var u=this,l=!!y.u(c)||c,f=y.p(t),h=function(t,e){var n=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf(a)},m=function(t,e){return y.w(u.toDate()[t].apply(u.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},d=this.$W,p=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case o:return l?h(1,0):h(31,11);case s:return l?h(1,p):h(0,p+1);case i:var v=this.$locale().weekStart||0,N=(d<v?d+7:d)-v;return h(l?$-N:$+(6-N),p);case a:case"date":return m(g+"Hours",0);case r:return m(g+"Minutes",1);case n:return m(g+"Seconds",2);case e:return m(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(i,c){var u,l=y.p(i),f="set"+(this.$u?"UTC":""),h=(u={},u[a]=f+"Date",u.date=f+"Date",u[s]=f+"Month",u[o]=f+"FullYear",u[r]=f+"Hours",u[n]=f+"Minutes",u[e]=f+"Seconds",u[t]=f+"Milliseconds",u)[l],m=l===a?this.$D+(c-this.$W):c;if(l===s||l===o){var d=this.clone().set("date",1);d.$d[h](m),d.init(),this.$d=d.set("date",Math.min(this.$D,d.daysInMonth())).toDate()}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,c){var u,l=this;t=Number(t);var f=y.p(c),h=function(e){var n=v(l);return y.w(n.date(n.date()+Math.round(e*t)),l)};if(f===s)return this.set(s,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===a)return h(1);if(f===i)return h(7);var m=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[f]||1,d=this.$d.getTime()+t*m;return y.w(d,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$locale(),i=this.$H,s=this.$m,c=this.$M,o=a.weekdays,u=a.months,f=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].substr(0,i)},h=function(t){return y.s(i%12||12,t,"0")},m=a.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:y.s(c+1,2,"0"),MMM:f(a.monthsShort,c,u,3),MMMM:u[c]||u(this,n),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:f(a.weekdaysMin,this.$W,o,2),ddd:f(a.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:y.s(i,2,"0"),h:h(1),hh:h(2),a:m(i,s,!0),A:m(i,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||d[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,u,l){var f,h=y.p(u),m=v(t),d=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,$=y.m(this,m);return $=(f={},f[o]=$/12,f[s]=$,f[c]=$/3,f[i]=(p-d)/6048e5,f[a]=(p-d)/864e5,f[r]=p/36e5,f[n]=p/6e4,f[e]=p/1e3,f)[h]||p,l?$:y.a($)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}();return v.prototype=N.prototype,v.extend=function(t,e){return t(e,N,v),v},v.locale=g,v.isDayjs=$,v.unix=function(t){return v(1e3*t)},v.en=p[d],v.Ls=p,v}()},cBaE:function(t,e,n){"use strict";function r(t){return function(e){return"".concat(t).concat(e?"__".concat(e):"")}}n.d(e,"a",(function(){return r}))},iXN3:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wgwc"),s=n.n(i),c=n("cBaE"),o=n("HX+h"),u=(n("BwF/"),a.a.createElement),l=Object(c.a)("componentsFooter");e.a=function(){var t=s()().format("YYYY");return u("div",{className:l()},u("div",{className:"container ".concat(l("container"))},u(o.a,null),u("p",{className:l("copyright")},"\xa9 ",t," pvcresin")))}},p3Tc:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("cBaE"),s=(n("RzFV"),a.a.createElement),c=Object(i.a)("componentsWebp");e.a=function(t){var e=t.src,n=t.imageClassName;return s("div",{className:c()},s("picture",{className:c("picture")},s("source",{srcSet:"/".concat(e,".webp"),type:"image/webp"}),s("source",{srcSet:"/".concat(e,".png"),type:"image/png"}),s("img",{className:"".concat(c("image")).concat(n?" ".concat(n):""),src:"/".concat(e,".webp")})))}},"y+7a":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[projectName]",function(){return n("yUJG")}])},yUJG:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return d}));var r=n("ODXe"),a=n("q1tI"),i=n.n(a),s=n("cBaE"),c=(n("1SRv"),i.a.createElement),o=Object(s.a)("componentsTags"),u=function(t){var e=t.tags;return c("div",{className:o()},e.map((function(t){return c("span",{className:o("tag"),key:t},t)})))},l=n("p3Tc"),f=n("iXN3"),h=(n("3iDL"),i.a.createElement),m=Object(s.a)("pagesProjectDetail"),d=!0;e.default=function(t){var e=t.project;return h("div",{className:m()},h("div",{className:"container"},h("section",{className:m("section")},e.video?h("div",{className:m("video-frame-container")},h("iframe",{className:m("video-frame"),src:"https://www.youtube.com/embed/".concat(e.video,"?rel=0"),frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0})):h("div",{className:m("image-container")},h(l.a,{src:e.img})),h("h1",{className:m("project-name")},h("p",{className:m("paragraph")},e.name+": "),e.sub),h(u,{tags:e.keywords}),h("div",{className:m("chapter-title")},h("h2",{className:m("chapter-title-text")},"Abstract"),h("hr",{className:m("chapter-line")})),h("p",{className:m("paragraph")},e.text),h("div",{className:m("chapter-title")},h("h2",{className:m("chapter-title-text")},"Implementation"),h("hr",{className:m("chapter-line")})),h("p",{className:m("paragraph")},e.implement),!!e.links&&h(i.a.Fragment,null,h("div",{className:m("chapter-title")},h("h2",{className:m("chapter-title-text")},"Links"),h("hr",{className:m("chapter-line")})),h("ol",{className:m("link-list")},Object.entries(e.links).map((function(t){var e=Object(r.a)(t,2),n=e[0],a=e[1];return h("li",{className:m("link-list-item"),key:n},n+": ",h("a",{className:m("link"),href:a},a))})))))),h(f.a,null))}}},[["y+7a",0,1,2]]]);