"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=(n(4996),["components"]),l={id:"installation",title:"Installation",sidebar_label:"Installation"},s=void 0,c={unversionedId:"installation",id:"installation",title:"Installation",description:"Sign up to become a tester",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/FedericoTartarini/cozie-apple/tree/master/my-website/docs/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Download Data",permalink:"/docs/downloadData"}},u={},p=[{value:"Sign up to become a tester",id:"sign-up-to-become-a-tester",level:2},{value:"Instructions for testers",id:"instructions-for-testers",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sign-up-to-become-a-tester"},"Sign up to become a tester"),(0,r.kt)("p",null,"Cozie Apple is still in Beta version and cannot be installed from the Apple Store yet. However, please contact us if you would like to become a tester and try the app. Please email us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:cozie.app@gmail.com"},"cozie.app@gmail.com")),(0,r.kt)("p",null,"In the email please introduce yourself and let us know why you are interested in testing Cozie. To test Cozie you need to be an Apple user, your phone should be running iOS 9 or newer and your Apple Watch should be gen 3 or newer. Please also send us your email address that is linked to your Apple account so we can add you to the Beta testers list."),(0,r.kt)("h2",{id:"instructions-for-testers"},"Instructions for testers"),(0,r.kt)("p",null,"This short guide will explain how to set up and install Cozie on your Apple."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First you need to have received a link from us which invite you to be a tester. Please contact us if you have not been invited yet. Please make sure that your phone is running at least iOS 9 and your Apple Watch is at least gen 3 or newer."),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/testflight/id899247664"},"Test Flight")," on your phone."),(0,r.kt)("li",{parentName:"ol"},"Open the invitation link you received from us and install Cozie on your phone. Alternatively, enter the code you received via email in Test Flight."),(0,r.kt)("li",{parentName:"ol"},"Log into Cozie by creating an account. Your email and password will be securely stored in our cloud. We are using Firebase SDK for authentication."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the Cozie application was successfully installed on your Apple Watch. Open the Cozie app on your Apple Watch as if you were about to complete a survey. Then open the iOS app on your phone, go to the Settings tab and click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Send participant ID to watch"),". Make sure the phone and the watch are close to each other, and that the app on the watch is open when you click on that button. You may need to click twice. If the pairing was successful the watch should vibrate and you should hear a notification sound."),(0,r.kt)("li",{parentName:"ol"},"Please complete a couple of surveys on the Apple Watch."),(0,r.kt)("li",{parentName:"ol"},"Please also complete a couple of tasks in the iOS application (e.g., consent form and on-boarding survey) by clicking on the respective card. The text in each task has not yet been finalized and each researcher will have to changed it based on their research needs."),(0,r.kt)("li",{parentName:"ol"},"On a daily basis you will be receiving a couple of notifications to remind you to complete the Cozie survey. You will be receiving the notifications between 7 and 10 am Singapore time.")),(0,r.kt)("p",null,"Please contact Federico Tartarini if you have any feedback, suggestions or if you experience any bugs with the application.\nAny suggestions would be highly appreciated."))}h.isMDXComponent=!0}}]);