"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[335],{73460:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return c}});var i=t(87462),n=t(63366),o=(t(15007),t(64983)),p=t(91515),s=["components"],l={},r={_frontmatter:l},d=p.Z;function c(e){var a=e.components,t=(0,n.Z)(e,s);return(0,o.mdx)(d,(0,i.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"ui-extensions-development-flow"},"UI Extensions Development Flow"),(0,o.mdx)("p",null,"The document provide high level overview for developers what to expect when creating UI Extension. For detailed instructions please refer to ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/extension-development/"},"step-by-step guide"),"."),(0,o.mdx)("h2",{id:"get-access"},"Get access"),(0,o.mdx)("p",null,"To start writing UI Extensions you will need the:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Access to service that we are about to extend, e.g. ",(0,o.mdx)("a",{parentName:"li",href:"../../services/aem-cf-console-admin"},"Content Fragment Console")," available as part of Adobe Experience Manager (AEM) as a Cloud Service."),(0,o.mdx)("li",{parentName:"ol"},"Access to App Builder, which we will use to create an extension."),(0,o.mdx)("li",{parentName:"ol"},"Assign developer roles to these IMS organization members who will create UI Extensions."),(0,o.mdx)("li",{parentName:"ol"},"Ensure that users who should be able to ",(0,o.mdx)("a",{parentName:"li",href:"../publication/"},"publish")," UI Extensions have a ",(0,o.mdx)("inlineCode",{parentName:"li"},"system admin")," role.")),(0,o.mdx)("p",null,"For more details, please refer to ",(0,o.mdx)("a",{parentName:"p",href:"../overview/get-access/"},"How to Get Access"),"."),(0,o.mdx)("h2",{id:"create-a-new-project-in-adobe-developer-console"},"Create a new project in Adobe Developer Console"),(0,o.mdx)("p",null,"UI Extensions, as any App Builder application, are represented as projects in ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/"},"Adobe Developer Console"),"."),(0,o.mdx)("p",null,"Adobe Developer Console gives you access to APIs, SDKs and developer tools to integrate, and extend Adobe products."),(0,o.mdx)("p",null,"Each App Builder project has two default workspaces: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage")," which you may use during different life cycles of your project. You can add more workspaces for feature development as needed.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production")," workspace is special, as it is used for the submission and distribution flow."),(0,o.mdx)("h2",{id:"initialize-our-application-using-the-cli-for-local-development"},"Initialize our application using the CLI for local development"),(0,o.mdx)("p",null,"Once your project is set up in ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Adobe Developer Console"),", we need to initialize our app in a local environment.\nThere are several ways how to do it."),(0,o.mdx)("p",null,"We will initialize the UI Extension Project using ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"AIO CLI"),".\nYou may find detailed guide at ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/code-generation#launch-code-generation-during-project-initialization"},"Initialize the UI Extension Project using AIO CLI"),"."),(0,o.mdx)("p",null,"If necessary, you can find other options in ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#4-bootstrapping-new-app-using-the-cli"},"Bootstrapping new App using the CLI"),"."),(0,o.mdx)("p",null,"Once you complete, you should see the build process with necessary npm dependencies are getting installed."),(0,o.mdx)("p",null,"Also, ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#5-anatomy-of-an-app-builder-application"},"base project structure")," will be generated."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"Sample code files have been generated.\n    \nNext steps:\n1) Populate your local environment variables in the \".env\" file\n2) You can use `aio app run` or `aio app deploy` to see the sample code files in action\n    \n    \n✔ Finished running template @adobe/aem-cf-admin-ui-ext-tpl\n✔ Installed template @adobe/aem-cf-admin-ui-ext-tpl\nProject initialized for Workspace Stage, you can run 'aio app use -w <workspace>' to switch workspace.\n✔ App initialization finished!\n > Tip: you can add more actions, web-assets and events to your project via the 'aio app add' commands\n")),(0,o.mdx)("p",null,"During project initialization, you will be able to select a specific template for UI Extension that will generate boilerplate code for you so you will be ready to start business logic implementation right away."),(0,o.mdx)("h2",{id:"implement-logic-of-application"},"Implement logic of application"),(0,o.mdx)("p",null,"As the next step, we need to implement a logic which will use existing ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/api"},"Extension Points")," and provide necessary functionality.\nUI Extensions has default structure and preselected technology stack such as ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/resources/spectrum-intro/lesson3/"},"React Spectrum")," but developers are free to choose tools that they prefer to. The only requirements to make a proper UI Extension:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Supply configuration file that will declare application as an ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/app-builder/docs/guides/extensions/"},"extension"),"."),(0,o.mdx)("li",{parentName:"ol"},"Use ",(0,o.mdx)("inlineCode",{parentName:"li"},"@adobe/uix-guest")," library for proper UI Extension initialization and interaction with Adobe service.")),(0,o.mdx)("h2",{id:"verify-your-application"},"Verify your application"),(0,o.mdx)("p",null,"After development is done you may check yor application locally (",(0,o.mdx)("inlineCode",{parentName:"p"},"aio app run"),") or at ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage")," or any other workspace at Adobe I/O (",(0,o.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),")."),(0,o.mdx)("p",null,"Once you've started or deployed application  AIO CLI will return you an extension endpoint URL that you may use to embed UI Extension into production Adobe Service. As it is not always suitable to test extensions with production data, extensible service as well provide configuration parameters that allows to change data source. For example, AEM Content Fragments Console ",(0,o.mdx)("a",{parentName:"p",href:"../../services/aem-cf-console-admin/debug/"},"allows to target development environment"),"."),(0,o.mdx)("h2",{id:"deploy-on-production"},"Deploy on Production"),(0,o.mdx)("p",null,"After the application has been completed, tested locally or on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage"),", we are ready to deploy it to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production"),"."),(0,o.mdx)("p",null,"The process is the same as for deploying to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Stage"),", but first you need to switch the workgroup to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Production"),"."),(0,o.mdx)("p",null,"Please type command in our project folder:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"$ aio app use -w Production\n\nYou are currently in:\n1. Org: Sites Internal\n2. Project: 562TurquoiseShrimp\n3. Workspace: Stage\n? The file aem-headless-ui-ext-example/.env already exists: Merge\n? The file aem-headless-ui-ext-examples/.aio already exists: Overwrite\n\n✔ Successfully imported configuration for:\n1. Org: Sites Internal\n2. Project: 562TurquoiseShrimp\n3. Workspace: Production.\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note:"),"\nWe chose the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Merge")," option for the ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file so that we don't lose our environment variables."),(0,o.mdx)("p",null,"After workgroup switching, we can make building and deploying with the command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"$ aio app deploy\n\n√ Built 3 action(s) for 'aem/cf-console-admin/1'\n√ Building web assets for 'aem/cf-console-admin/1'\n√ Deployed 3 action(s) for 'aem/cf-console-admin/1'\n√ Deploying web assets for 'aem/cf-console-admin/1'\nYour deployed actions:\nweb actions:\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/get-language-copies\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/quick-publish-language-copies\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/unpublish-language-copies\nTo view your deployed application:\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/index.html\nTo view your deployed application in the Experience Cloud shell:\n  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://245265-562turquoiseshrimp.adobeio-static.net/index.html\nNew Extension Point(s) in Workspace 'Production': 'aem/cf-console-admin/1'\nSuccessful deployment 🏄\n")),(0,o.mdx)("h2",{id:"create-approval-request"},"Create approval request"),(0,o.mdx)("p",null,"When you’re ready to publish your app, you will submit it for an approval from the Production workspace.\n",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1046px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.49056603773585%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/dda86/publishing-1.webp 265w","/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/010e6/publishing-1.webp 530w","/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/eea5f/publishing-1.webp 1046w"],sizes:"(max-width: 1046px) 100vw, 1046px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/28773/publishing-1.png 265w","/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/a0177/publishing-1.png 530w","/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/4b469/publishing-1.png 1046w"],sizes:"(max-width: 1046px) 100vw, 1046px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/7b09a4c78ac2a853b8d59c99a12de74c/4b469/publishing-1.png",alt:"Publishing",title:"Publishing",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"After the approval, your app will be available at ",(0,o.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/"},"Adobe Experience Cloud"),"."),(0,o.mdx)("p",null,"Also, data about your extension will be added to ",(0,o.mdx)("em",{parentName:"p"},"Adobe App Registry")," and will be reachable for Adobe Products."),(0,o.mdx)("p",null,"This means, that the new functionality will be available, for example, in the AEM admin panel for your organization.\n",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.471698113207546%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80b780dc41082272b8408bff189a9986/dda86/publishing-2.webp 265w","/uix/static/80b780dc41082272b8408bff189a9986/010e6/publishing-2.webp 530w","/uix/static/80b780dc41082272b8408bff189a9986/668f0/publishing-2.webp 1060w","/uix/static/80b780dc41082272b8408bff189a9986/5a546/publishing-2.webp 1547w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80b780dc41082272b8408bff189a9986/28773/publishing-2.png 265w","/uix/static/80b780dc41082272b8408bff189a9986/a0177/publishing-2.png 530w","/uix/static/80b780dc41082272b8408bff189a9986/ea60f/publishing-2.png 1060w","/uix/static/80b780dc41082272b8408bff189a9986/8373c/publishing-2.png 1547w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/80b780dc41082272b8408bff189a9986/ea60f/publishing-2.png",alt:"New functionality in AEM admin panel",title:"New functionality in AEM admin panel",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"These steps are described in more detail in ",(0,o.mdx)("a",{parentName:"p",href:"../publication"},"UI Extensions Management"),"."),(0,o.mdx)("h2",{id:"additional-resources"},"Additional resources"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../services/aem-cf-console-admin/extension-development/"},"Step-by-step Extension Development Guide")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../"},"UI Extensibility Overview")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../overview/faq/"},"FAQ"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-development-flow-index-md-6ba342f8c2230d3c3c1a.js.map