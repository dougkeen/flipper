"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6119],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),d=function(e){return function(n){var t=s(n.components);return i.createElement(e,l({},n,{components:t}))}},s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,g=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return t?i.createElement(g,a(a({ref:n},u),{},{components:t})):i.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<l;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61863:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>b});var i=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],a={id:"plugin-distribution",title:"Plugin Distribution"},p=void 0,u={unversionedId:"extending/plugin-distribution",id:"extending/plugin-distribution",isDocsHomePage:!1,title:"Plugin Distribution",description:"Publishing to npm",source:"@site/../docs/extending/plugin-distribution.mdx",sourceDirName:"extending",slug:"/extending/plugin-distribution",permalink:"/docs/extending/plugin-distribution",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/plugin-distribution.mdx",tags:[],version:"current",frontMatter:{id:"plugin-distribution",title:"Plugin Distribution"},sidebar:"extending",previous:{title:"Debugging",permalink:"/docs/extending/debugging"},next:{title:"Migrating a plugin to Sandy",permalink:"/docs/extending/sandy-migration"}},d=[{value:"Publishing to npm",id:"publishing-to-npm",children:[]},{value:"Publishing plugins",id:"publishing-plugins",children:[]},{value:"Packaging to File",id:"packaging-to-file",children:[]},{value:"Installation from File",id:"installation-from-file",children:[]}],s=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",n)}},c=s("OssOnly"),m=s("FbInternalOnly"),g=s("FbPluginReleases"),f={toc:d};function b(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(c,{mdxType:"OssOnly"},(0,l.mdx)("h2",{id:"publishing-to-npm"},"Publishing to npm"),(0,l.mdx)("p",null,"Flipper plugins are essentially standard npm packages. So you can publish them by executing ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn publish")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm publish")," in the plugin directory. The only requirements are:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"package.json")," and code ",(0,l.mdx)("a",{parentName:"li",href:"desktop-plugin-structure#plugin-definition"},"must follow the Flipper plugin specification")),(0,l.mdx)("li",{parentName:"ol"},'code must be bundled using "flipper-pkg" before packing or publishing. This can be done by executing ',(0,l.mdx)("inlineCode",{parentName:"li"},"flipper-pkg bundle")," on ",(0,l.mdx)("inlineCode",{parentName:"li"},"prepack")," step:",(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "devDependencies": {\n    ...\n    "flipper-pkg": "latest"\n  },\n  "scripts": {\n    ...\n    "prepack": "flipper-pkg bundle"\n  }\n}\n'))))),(0,l.mdx)(m,{mdxType:"FbInternalOnly"},(0,l.mdx)("h2",{id:"publishing-plugins"},"Publishing plugins"),(0,l.mdx)(g,{mdxType:"FbPluginReleases"})),(0,l.mdx)("h2",{id:"packaging-to-file"},"Packaging to File"),(0,l.mdx)("p",null,"To package plugin as a tarball, you can use the same command as for packaging any other npm package, e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn pack")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm pack"),"."),(0,l.mdx)("p",null,'"flipper-pkg" also provides a convenient command ',(0,l.mdx)("inlineCode",{parentName:"p"},"pack")," which:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Installs the plugin dependencies"),(0,l.mdx)("li",{parentName:"ol"},"Bundles the plugin"),(0,l.mdx)("li",{parentName:"ol"},"Creates the tarball and saves it at the specified location")),(0,l.mdx)("p",null,"E.g. to package plugin located at ",(0,l.mdx)("inlineCode",{parentName:"p"},"~/flipper-plugins/my-plugin")," to ",(0,l.mdx)("inlineCode",{parentName:"p"},"~/Desktop"),", execute the following command:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"flipper-pkg pack ~/flipper-plugins/my-plugin -o ~/Desktop\n")),(0,l.mdx)("h2",{id:"installation-from-file"},"Installation from File"),(0,l.mdx)("p",null,"It is possible to install plugins into Flipper from tarballs. This is useful in cases when you need to try a plugin version which is not published to npm, or if you want to distribute plugin privately:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Launch Flipper"),(0,l.mdx)("li",{parentName:"ol"},'Click the "Manage Plugins" button in the bottom-left corner'),(0,l.mdx)("li",{parentName:"ol"},'Select the "Install Plugins" tab in the opened sheet'),(0,l.mdx)("li",{parentName:"ol"},'Specify the path to the plugin package (or just drag and drop it) and click "Install"')))}b.isMDXComponent=!0}}]);