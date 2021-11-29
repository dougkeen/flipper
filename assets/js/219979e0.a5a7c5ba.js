"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4673],{36742:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(80102),a=n(67294),o=n(73727),u=n(52263),i=n(13919),s=n(10412),c=(0,a.createContext)({collectLink:function(){}}),l=n(44996),d=n(18780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var t,n,v=e.isNavLink,m=e.to,h=e.href,p=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,w=void 0===C||C,E=(0,r.Z)(e,f),k=(0,u.default)().siteConfig,y=k.trailingSlash,S=k.baseUrl,T=(0,l.useBaseUrlUtils)().withBaseUrl,L=(0,a.useContext)(c),P=m||h,U=(0,i.Z)(P),N=null==P?void 0:P.replace("pathname://",""),Z=void 0!==N?(n=N,w&&function(e){return e.startsWith("/")}(n)?T(n):n):void 0;Z&&U&&(Z=(0,d.applyTrailingSlash)(Z,{trailingSlash:y,baseUrl:S}));var M=(0,a.useRef)(!1),O=v?o.OL:o.rU,B=s.default.canUseIntersectionObserver,_=(0,a.useRef)();(0,a.useEffect)((function(){return!B&&U&&null!=Z&&window.docusaurus.prefetch(Z),function(){B&&_.current&&_.current.disconnect()}}),[_,Z,B,U]);var x=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,D=!Z||!U||x;return Z&&U&&!x&&!g&&L.collectLink(Z),D?a.createElement("a",Object.assign({href:Z},P&&!U&&{target:"_blank",rel:"noopener noreferrer"},E)):a.createElement(O,Object.assign({},E,{onMouseEnter:function(){M.current||null==Z||(window.docusaurus.preload(Z),M.current=!0)},innerRef:function(e){var t,n;B&&e&&U&&(t=e,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},_.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),n())}))})),_.current.observe(t))},to:Z||""},v&&{isActive:b,activeClassName:p}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>u});var r=n(52263),a=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,u=o.forcePrependBaseUrl,i=void 0!==u&&u,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},86482:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),a=n(10412),o=n(83039),u=(0,o.createStorageSlot)("theme"),i="light",s="dark",c=function(e){return e===s?s:i},l=function(e){(0,o.createStorageSlot)("theme").set(c(e))};const d=function(){var e=(0,o.useThemeConfig)().colorMode,t=e.defaultMode,n=e.disableSwitch,d=e.respectPrefersColorScheme,f=(0,r.useState)(function(e){return a.default.canUseDOM?c(document.documentElement.getAttribute("data-theme")):c(e)}(t)),v=f[0],m=f[1],h=(0,r.useCallback)((function(){m(i),l(i)}),[]),p=(0,r.useCallback)((function(){m(s),l(s)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",c(v))}),[v]),(0,r.useEffect)((function(){if(!n)try{var e=u.get();null!==e&&m(c(e))}catch(t){console.error(t)}}),[n,m]),(0,r.useEffect)((function(){n&&!d||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;m(t?s:i)}))}),[n,d]),{isDarkTheme:v===s,setLightTheme:h,setDarkTheme:p}};var f=n(82924);const v=function(e){var t=d(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(f.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};var m="docusaurus.tab.";const h=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,o.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,o.listStorageKeys)().forEach((function(t){if(t.startsWith(m)){var n=t.substring(m.length);e[n]=(0,o.createStorageSlot)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}};var p=n(79443);const b=function(e){var t=h(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(p.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function g(e){var t=e.children;return r.createElement(v,null,r.createElement(o.AnnouncementBarProvider,null,r.createElement(b,null,r.createElement(o.ScrollControllerProvider,null,r.createElement(o.DocsPreferredVersionContextProvider,null,r.createElement(o.MobileSecondaryMenuProvider,null,t))))))}},82924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(void 0)},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},38245:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])}},85350:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(82924);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],u="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,u)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},59301:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=n(86010),o=n(86482),u=n(38245),i=n(83039);const s=function(e){var t=e.children,n=e.wrapperClassName,s=e.pageClassName;return(0,u.Z)(),r.createElement(o.Z,null,r.createElement("div",{className:(0,a.default)(i.ThemeClassNames.wrapper.main,n,s,"embedded")},t))};var c=n(3905),l=n(75854),d=n.n(l);const f=function(e){var t=e.content;return r.createElement(s,{wrapperClassName:i.ThemeClassNames.wrapper.mdxPages,pageClassName:i.ThemeClassNames.page.mdxPage},r.createElement("main",null,r.createElement(c.MDXProvider,{components:d()},r.createElement(t,null))))}}}]);