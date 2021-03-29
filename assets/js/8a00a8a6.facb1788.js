(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return f}));var r=n(3),i=n(7),a=(n(0),n(157)),o=n(158),l={id:"js-setup",title:"Building a Desktop Plugin",sidebar_label:"Building a Desktop Plugin"},p={unversionedId:"tutorial/js-setup",id:"tutorial/js-setup",isDocsHomePage:!1,title:"Building a Desktop Plugin",description:"Now that we have the native side covered, let's display the data we're sending",source:"@site/../docs/tutorial/js-setup.mdx",slug:"/tutorial/js-setup",permalink:"/docs/tutorial/js-setup",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-setup.mdx",version:"current",sidebar_label:"Building a Desktop Plugin",sidebar:"extending",previous:{title:"Building a React Native Plugin",permalink:"/docs/tutorial/react-native"},next:{title:"Showing a table",permalink:"/docs/tutorial/js-table"}},c=[{value:"Dynamic Plugin loading",id:"dynamic-plugin-loading",children:[]},{value:"Creating the Plugin Package",id:"creating-the-plugin-package",children:[]}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=u("FbInternalOnly"),d=u("OssOnly"),b={toc:c};function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that we have the native side covered, let's display the data we're sending\non the desktop side. You can check out the full workflow of building Flipper desktop\nplugins here: ",Object(a.b)("a",{parentName:"p",href:"https://fbflipper.com/docs/extending/js-setup"},"https://fbflipper.com/docs/extending/js-setup"),"."),Object(a.b)("img",{alt:"Custom cards UI for our sea mammals plugin",src:Object(o.a)("img/js-custom.png")}),Object(a.b)("h2",{id:"dynamic-plugin-loading"},"Dynamic Plugin loading"),Object(a.b)(s,{mdxType:"FbInternalOnly"},"[FB-Only] After scaffolding and starting Flipper from source, no further steps are needed to setup the desktop plugin."),Object(a.b)(d,{mdxType:"OssOnly"},Object(a.b)("p",null,"By default, Flipper will start with the plugins it was bundled with. You can\nconfigure it to also look for plugins in custom directories. To do that,\nmodify the ",Object(a.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json")," file that is created the first time\nyou start Flipper and add a newly created directory the ",Object(a.b)("inlineCode",{parentName:"p"},"pluginPaths")," attribute."),Object(a.b)("p",null,"Your file will then look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pluginPaths": [\n    "~/Flipper/custom-plugins/"\n  ],\n  ...\n}\n')),Object(a.b)("h2",{id:"creating-the-plugin-package"},"Creating the Plugin Package"),Object(a.b)("p",null,"With the loading part out of the way, we can create the new plugin. For that, first create a new folder inside the custom plugins directory. Then use ",Object(a.b)("inlineCode",{parentName:"p"},"flipper-pkg init")," to initialise a new Flipper desktop plugin package.\n",Object(a.b)("inlineCode",{parentName:"p"},"flipper-pkg")," is a NPM module, so we can run it directly using ",Object(a.b)("inlineCode",{parentName:"p"},"npx")," if Node and NPM are installed."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ cd ~/Flipper/custom-plugins/\n$ npx flipper-pkg init\n")),Object(a.b)("p",null,'The tool will ask you to provide "id" and "title" for your plugin. Use "sea-mammals" as "id" and "Sea Mammals" as "title". After that the tool will create two files in the directory: ',Object(a.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.tsx"),"."),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/seamammals/package.json"},"package.json")," for an example."),Object(a.b)("p",null,"To ensure there are no errors in the defined plugin, install packages (using ",Object(a.b)("inlineCode",{parentName:"p"},"yarn install")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm install"),") and execute script ",Object(a.b)("inlineCode",{parentName:"p"},"lint")," (",Object(a.b)("inlineCode",{parentName:"p"},"yarn lint")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm run lint"),") which shows all the mismatches that should be fixed to make the plugin definition valid."),Object(a.b)("p",null,"Now that our package has been set up, we are ready to build a UI for our plugin. Either by using a standardized table-based plugin, or by creating a custom UI.")))}f.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return n?i.a.createElement(f,l(l({ref:t},c),{},{components:n})):i.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(159);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,p=a.absolute,c=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},159:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);