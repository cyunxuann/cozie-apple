"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5605],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=(n(4996),["components"]),l={id:"downloadData",title:"Download Data",sidebar_label:"Download Data"},c=void 0,d={unversionedId:"downloadData",id:"downloadData",title:"Download Data",description:"Download the data collected using the Cozie Apple Watch survey",source:"@site/docs/downloadData.md",sourceDirName:".",slug:"/downloadData",permalink:"/docs/downloadData",editUrl:"https://github.com/FedericoTartarini/cozie-apple/tree/master/my-website/docs/downloadData.md",tags:[],version:"current",frontMatter:{id:"downloadData",title:"Download Data",sidebar_label:"Download Data"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Getting Started",permalink:"/docs/gettingStarted"}},s={},p=[{value:"Download the data collected using the Cozie Apple Watch survey",id:"download-the-data-collected-using-the-cozie-apple-watch-survey",level:2}],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"download-the-data-collected-using-the-cozie-apple-watch-survey"},"Download the data collected using the Cozie Apple Watch survey"),(0,r.kt)("p",null,"You can download the data you have collected using the Cozie Apple Watch survey using the following Python code.\nPlease note that you will have to specify your ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"API_KEY"),".\nTherefore, it is very important that you have successfully completed Step 5 in ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Instructions for testers"),".\nYou can get these information by emailing us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:cozie.app@gmail.com"},"cozie.app@gmail.com")),(0,r.kt)("p",null,"All the data you have queried are saved inside the Pandas dataframe called ",(0,r.kt)("inlineCode",{parentName:"p"},"df"),"."),(0,r.kt)("p",null,"Keep also in mind that some records (rows of the dataframe) only contain heart rate data.\nConsequently if you are interested in analysing only the responses that a participant (USER_ID) provided using the apple watch, please first filter out all the records which contain 'NaN' in the VoteLog column using the following command ",(0,r.kt)("inlineCode",{parentName:"p"},"df = df.dropna(subset=['voteLog'])")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import requests\nimport json\nimport pandas as pd\n\nYOUR_TIMEZONE = 'Asia/Singapore'\nUSER_ID = 'XXXXXXX'\nWEEKS = \"10\"         # Number of weeks from which the data is retrived, starting from now\nAPI_KEY = 'YYYYYY'\n\npayload = {'user_id': USER_ID, 'weeks': WEEKS}\n\n# the api-key below is limited to 200 queries per day. Please contact us to get an API key\nheaders = {\"Accept\": \"application/json\", 'x-api-key': API_KEY}\n\nresponse = requests.get( 'https://0iecjae656.execute-api.us-east-1.amazonaws.com/default/CozieApple_Read_Influx', params=payload, headers=headers)\nmy_json = response.content.decode('utf8').replace(\"'\", '\"')\ndata = json.loads(my_json)\ndf = pd.read_json(data[1]['data']).T\ndf.index = df.index.tz_localize('UTC').tz_convert(YOUR_TIMEZONE)\n\nprint(df.head())\n")))}f.isMDXComponent=!0}}]);