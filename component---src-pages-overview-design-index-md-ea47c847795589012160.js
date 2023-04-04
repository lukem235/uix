"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[313],{92041:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return r},default:function(){return m}});var a=i(87462),n=i(45987),o=(i(15007),i(64983)),s=i(91515);const d=["components"],r={},l={_frontmatter:r},p=s.Z;function m(e){let{components:t}=e,i=(0,n.Z)(e,d);return(0,o.mdx)(p,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-it-works"},"How It Works"),(0,o.mdx)("p",null,"App Builder application implemented as a UI extension is bound to an associated Adobe Service UI for an IMS organization that owns the application and is automatically loaded for all users within that IMS organization."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.24999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/457ec0d2eafe04da343c3a4aee0b4f3e/5530d/high-level-diagram.webp 320w","/uix/static/457ec0d2eafe04da343c3a4aee0b4f3e/411c4/high-level-diagram.webp 600w"],sizes:"(max-width: 600px) 100vw, 600px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/457ec0d2eafe04da343c3a4aee0b4f3e/dd4a7/high-level-diagram.png 320w","/uix/static/457ec0d2eafe04da343c3a4aee0b4f3e/dface/high-level-diagram.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/457ec0d2eafe04da343c3a4aee0b4f3e/dface/high-level-diagram.png",alt:"UI Extensibility High Level Diagram",title:"UI Extensibility High Level Diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"In order to provide UI Extensibility Adobe Service UI defines extension points - API that may be used by extension to interact with Adobe Service UI and requirements to API that extension must implement to be correctly invoked."),(0,o.mdx)("p",null,"UI Extension with help of UI Extensibility SDK ",(0,o.mdx)("inlineCode",{parentName:"p"},"@adobe/uix-guest")," declares what extension points are implemented so Adobe Service UI knows how to integrate and when to invoke extension. Once UI extension is ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#7-deploying-the-application"},"deployed")," with help of ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"AIO CLI")," tool it is registered in Extension Registry service and became available for all users within IMS organization which was used during aio for App Builder application."),(0,o.mdx)("p",null,"When user loads Adobe Service UI the list of published UI Extensions is loaded from Extension Registry and transparently added to the UI."),(0,o.mdx)("p",null,"UI Extensions always are loaded inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"iframe")," HTML elements and all code of the extension always executed in context of that iframe. All the interaction between extension and Adobe Service happens through safe strictly defined API."),(0,o.mdx)("p",null,"UI Extension may implement:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"client side script that execute any logic without UI"),(0,o.mdx)("li",{parentName:"ul"},"own UI inside area defined by Adobe Service"),(0,o.mdx)("li",{parentName:"ul"},"server-side script hosted as Adobe Runtime action.")),(0,o.mdx)("p",null,"For the end users functionality provided by UI Extensions looks like integral part of Adobe Service UI."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-design-index-md-ea47c847795589012160.js.map