(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{2108:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/debug",function(){return n(6142)}])},6142:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var o=n(5893),a=n(2673),i=n(3393),r=n(2702);n(9128);var s=n(2643);let c=[{depth:2,value:"Using the sample app",id:"using-the-sample-app"},{depth:2,value:"HTTP playback doesn't work or  Black Screen on Release build (Android)",id:"http-playback-doesnt-work-or--black-screen-on-release-build-android"},{depth:2,value:"Decoder Issue (Android)",id:"decoder-issue-android"},{depth:2,value:"You cannot play clean content (all OS)",id:"you-cannot-play-clean-content-all-os"},{depth:2,value:"Check you can access to remote file",id:"check-you-can-access-to-remote-file"},{depth:2,value:"Check another player can read the content",id:"check-another-player-can-read-the-content"},{depth:2,value:"You cannot play protected content (all OS)",id:"you-cannot-play-protected-content-all-os"},{depth:2,value:"Protected content gives error (token error / access forbidden)",id:"protected-content-gives-error-token-error--access-forbidden"},{depth:2,value:"I need to debug network calls but I don't see them in react native debugging tools",id:"i-need-to-debug-network-calls-but-i-dont-see-them-in-react-native-debugging-tools"},{depth:2,value:"It's still not working",id:"its-still-not-working"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",span:"span",strong:"strong"},(0,s.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"Debugging"}),"\n",(0,o.jsx)(t.p,{children:"This page describe usefull tips for debugging and investigating issue in the package or in your application."}),"\n",(0,o.jsx)(t.h2,{id:"using-the-sample-app",children:"Using the sample app"}),"\n",(0,o.jsx)(t.p,{children:"This repository contains multiple a sample implementation in example folder.\nIt is always preferable to test behavior on a sample app than in a full app implementation.\nThe basic sample allow to test a lot of feature.\nTo use the sample you will need to do steps:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Clone this repository:  ",(0,o.jsx)(t.code,{children:" git clone git@github.com:TheWidlarzGroup/react-native-video.git"})]}),"\n",(0,o.jsxs)(t.li,{children:["Go to root folder and build it. It will generate a transpiled version of the package in lib folder: ",(0,o.jsx)(t.code,{children:"cd react-native-video && yarn && yarn build"})]}),"\n",(0,o.jsxs)(t.li,{children:["Go to the sample and install it: ",(0,o.jsx)(t.code,{children:"cd example/basic && yarn install"})]}),"\n",(0,o.jsxs)(t.li,{children:["Build it ! for android ",(0,o.jsx)(t.code,{children:"yarn android"})," for ios ",(0,o.jsx)(t.code,{children:"cd ios && pod install && cd .. && yarn ios"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"http-playback-doesnt-work-or--black-screen-on-release-build-android",children:"HTTP playback doesn't work or  Black Screen on Release build (Android)"}),"\n",(0,o.jsxs)(t.p,{children:["If your video work on Debug mode, but on Release you see only black screen, please, check the link to your video. If you use 'http' protocol there, you will need to add next string to your AndroidManifest.xml file. ",(0,o.jsx)(t.a,{href:"https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic",children:"Details here"})]}),"\n",(0,o.jsx)(t.pre,{"data-language":"xml","data-theme":"default",children:(0,o.jsxs)(t.code,{"data-language":"xml","data-theme":"default",children:[(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"application"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ..."})}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"android"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"usesCleartextTraffic"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"true"'})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})})]})}),"\n",(0,o.jsx)(t.h2,{id:"decoder-issue-android",children:"Decoder Issue (Android)"}),"\n",(0,o.jsx)(t.p,{children:"Devices have a maximum of simultaneous possible playback. It means you have reach this limit. Exoplayer returns: 'Unable to instantiate decoder'"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"known issue"}),": This issue happen really often in debug mode."]}),"\n",(0,o.jsx)(t.h2,{id:"you-cannot-play-clean-content-all-os",children:"You cannot play clean content (all OS)"}),"\n",(0,o.jsx)(t.p,{children:"Here are the steps to consider before opening a ticket in issue tracker"}),"\n",(0,o.jsx)(t.h2,{id:"check-you-can-access-to-remote-file",children:"Check you can access to remote file"}),"\n",(0,o.jsx)(t.p,{children:"Ensure you can download to manifest / content file with a browser for example"}),"\n",(0,o.jsx)(t.h2,{id:"check-another-player-can-read-the-content",children:"Check another player can read the content"}),"\n",(0,o.jsxs)(t.p,{children:["Usually clear playback can be read with all Video player. Then you should ensure content can be played without any issue with another player (",(0,o.jsx)(t.a,{href:"https://www.videolan.org/vlc/",children:"VideoLan/VLC"})," is a good reference implementation)"]}),"\n",(0,o.jsx)(t.h2,{id:"you-cannot-play-protected-content-all-os",children:"You cannot play protected content (all OS)"}),"\n",(0,o.jsx)(t.h2,{id:"protected-content-gives-error-token-error--access-forbidden",children:"Protected content gives error (token error / access forbidden)"}),"\n",(0,o.jsx)(t.p,{children:"If content is protected with an access token or any other http header, ensure you can access to you data with a wget call or a rest client app. You need to provide all needed access token / authentication parameters."}),"\n",(0,o.jsx)(t.h2,{id:"i-need-to-debug-network-calls-but-i-dont-see-them-in-react-native-debugging-tools",children:"I need to debug network calls but I don't see them in react native debugging tools"}),"\n",(0,o.jsxs)(t.p,{children:["This is a react native limitation. React native tools can only see network calls done in JS.\nTo achieve that, you need to record network trace to ensure communications with server is correct.\n",(0,o.jsx)(t.a,{href:"https://www.charlesproxy.com/",children:"Charles proxy"})," or ",(0,o.jsx)(t.a,{href:"https://www.telerik.com/fiddler",children:"Fiddler"})," are a simple and useful tool to sniff all http/https calls.\nWith these tool you should be able to analyze what is going on with network. You will see all access to content and DRM, audio / video chunks, ..."]}),"\n",(0,o.jsx)(t.p,{children:"Then try to compare exchanges with previous tests you made."}),"\n",(0,o.jsx)(t.h2,{id:"its-still-not-working",children:"It's still not working"}),"\n",(0,o.jsx)(t.p,{children:"You can try to open a ticket now !"})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/other/debug.md",route:"/other/debug",timestamp:1715184827e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Debugging",headings:c},pageNextRoute:"/other/debug",nextraLayout:i.ZP,themeConfig:r.Z};t.default=(0,a.j)(l)},2702:function(e,t,n){"use strict";var o=n(5893);n(7294),t.Z={head:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"language",content:"en"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,o.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,o.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,o.jsx)("meta",{name:"og:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,o.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,o.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,o.jsxs)("span",{children:["\uD83C\uDFAC ",(0,o.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/TheWidlarzGroup/react-native-video"},docsRepositoryBase:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/docs/",footer:{text:(0,o.jsxs)("span",{children:["Built with love ❤️ by ",(0,o.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=2108)}),_N_E=e.O()}]);