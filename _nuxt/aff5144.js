(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{231:function(t,e,n){t.exports=n.p+"img/logo.1e39cd3.png"},232:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{Navarr:[{Navtitle:"下载",Navhref:"#Download"},{Navtitle:"特性",Navhref:"#Features"},{Navtitle:"文档与技术",Navhref:"#Docs"},{Navtitle:"技术支持",Navhref:"#Technical"}],ToNavLink:[{Navtitle:"首页",Navhref:"/"}]}}},o=n(47),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"Headerd-navbar px-auto"},[r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[r("b-navbar-brand",{attrs:{href:"/",to:"/"}},[r("img",{attrs:{src:n(231),alt:"logo",width:"40px",height:"40px"}}),r("span",{staticClass:"pl-2"},[t._v("幻影官网")])]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[t._l(t.ToNavLink,(function(e){return r("b-nav-item",{key:e.Navtitle,attrs:{to:e.Navhref}},[t._v(t._s(e.Navtitle))])})),t._v(" "),t._l(t.Navarr,(function(e){return r("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:e.Navhref,offset:-280},expression:"{\n              el: item.Navhref,\n              offset: -280,\n            }"}],key:e.Navtitle},[t._v(t._s(e.Navtitle))])}))],2)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("deea6518",content,!0,{sourceMap:!1})},257:function(t,e,n){t.exports=n.p+"img/CDlinux.830947b.jpg"},258:function(t,e,n){t.exports=n.p+"img/kail.63d2b57.svg"},259:function(t,e,n){t.exports=n.p+"img/hywifi.7c30af4.png"},260:function(t,e,n){"use strict";n(246)},261:function(t,e,n){var r=n(48)(!1);r.push([t.i,".Headerd-navbar{position:-webkit-sticky;position:sticky;top:0;z-index:1071;background-color:#2196f3;min-height:4rem;box-shadow:0 2px 4px -1px rgb(0 0 0/20%),0 4px 5px 0 rgb(0 0 0/14%),0 1px 10px 0 rgb(0 0 0/12%)}.container{flex-wrap:wrap}.container,.container .box{display:flex;justify-content:space-around;align-items:center}.container .box{flex-direction:column;width:140px;height:150px;margin:0;cursor:pointer}.container .box .img{display:flex;justify-content:center;align-items:center;width:100px;height:100px;border-radius:20px;box-shadow:18px 18px 30px rgba(0,0,0,.2),-18px -18px 30px #fff;transition:all .2s ease-out}.container .box .img img{width:60px;transition:all .2s ease-out}.container .box p{color:#708090}.container .box .img:hover{box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 hsla(0,0%,100%,.8),inset 18px 18px 30px rgba(0,0,0,.1),inset -18px -18px 30px #fff}.container .box .img:hover img{width:58px}.boximg{width:100px;height:100px}",""]),t.exports=r},265:function(t,e,n){"use strict";n.r(e);var r=n(231),o=n.n(r),l=n(257),c=n.n(l),x=n(258),f=n.n(x),v=n(259),h=n.n(v),d={components:{Header:n(232).default},methods:{download:function(t){window.location.href=t}},data:function(){return{dlApp:[{href:"https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1pin1.75.apk",title:"幻影Pin-v1.75",imgsrc:o.a},{href:"https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1PinLNbeta4.apk",title:"幻影Pin-v4.0",imgsrc:o.a},{href:"https://xz.108878.xyz/hypin_fix2.apk",title:"幻影Pin-v4.2",imgsrc:o.a},{href:"https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1WIFI_2.9995(%E6%94%AF%E6%8C%81%E5%AE%89%E5%8D%934-7.1).apk",title:"幻影Wifi-v2.995",imgsrc:h.a},{href:"https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1Wifi(%E9%80%82%E9%85%8D%E5%AE%89%E5%8D%938.0%E4%BB%A5%E4%B8%8A).apk",title:"幻影Wifi(安卓8.0以上)",imgsrc:h.a},{href:"https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1pin-magisk%E9%A9%B1%E5%8A%A8%E6%8C%82%E8%BD%BD%E6%A8%A1%E5%9D%97v2.5.zip",title:"幻影Magik驱动",imgsrc:o.a},{href:"https://xz.108878.xyz/CDlinux.zip",title:"CDLinux",imgsrc:c.a},{href:"https://www.kali.org/downloads/",title:"Kali Linux",imgsrc:f.a}]}}},m=(n(260),n(47)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{ref:"DownloadPage",staticClass:"container animated bounceIn"},t._l(t.dlApp,(function(e){return n("div",{key:e.title,staticClass:"box text-center"},[n("div",{staticClass:"img",on:{click:function(n){return t.download(e.href)}}},[n("img",{attrs:{src:e.imgsrc,alt:""}})]),t._v(" "),n("p",[t._v(t._s(e.title))])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);