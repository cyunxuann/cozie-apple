(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(149)),a=(r(150),{id:"documentationWebsite",title:"Edit the documentation website",sidebar_label:"Doc Website"}),c={id:"documentationWebsite",isDocsHomePage:!1,title:"Edit the documentation website",description:"Please follow the instructions in the video below to learn more on how to validate and distribute the application.",source:"@site/docs/documentationWebsite.md",permalink:"/cozie-apple/docs/documentationWebsite",editUrl:"https://github.com/FedericoTartarini/cozie-apple/tree/master/my-website/docs/documentationWebsite.md",sidebar_label:"Doc Website",sidebar:"someSidebar",previous:{title:"Test Flight",permalink:"/cozie-apple/docs/testFlight"}},u=[],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Please follow the instructions in the video below to learn more on how to validate and distribute the application."),Object(i.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/JiqXq8MZP9Q",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}s.isMDXComponent=!0},148:function(e,t,r){"use strict";var n=r(0),o=r(35);t.a=function(){return Object(n.useContext)(o.a)}},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},150:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(148),o=r(151);function i(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:i="/",url:a}={}}=Object(n.a)();if(!e)return e;if(t)return i+e;if(!Object(o.a)(e))return e;const c=i+e.replace(/^\//,"");return r?a+c:c}},151:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))}}]);