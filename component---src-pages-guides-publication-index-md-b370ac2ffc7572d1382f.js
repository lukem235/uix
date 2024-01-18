"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[405],{75898:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return m}});var i=t(87462),n=t(45987),p=(t(15007),t(64983)),o=t(91515);const s=["components"],r={},d={_frontmatter:r},l=o.Z;function m(e){let{components:a}=e,t=(0,n.Z)(e,s);return(0,p.mdx)(l,(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"publish-and-manage-the-ui-extensions"},"Publish and Manage the UI Extensions"),(0,p.mdx)("p",null,"After you've completed ",(0,p.mdx)("a",{parentName:"p",href:"../development-flow"},"developing and testing")," your application, you're ready to deploy to production and publish it."),(0,p.mdx)("h2",{id:"deploy-on-production-cli"},"Deploy on Production (CLI)"),(0,p.mdx)("p",null,"The process of deploying to ",(0,p.mdx)("inlineCode",{parentName:"p"},"Production")," workspace is the same as for deploying to ",(0,p.mdx)("inlineCode",{parentName:"p"},"Stage")," and other, but first you need to ensure that your local environment is targeting right workspace."),(0,p.mdx)("p",null,"Type this command in the project folder:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-shell"},"$ aio app use -w Production\n\nYou are currently in:\n1. Org: Sites Internal\n2. Project: 562TurquoiseShrimp\n3. Workspace: Stage\n? The file aem-headless-ui-ext-example/.env already exists: Merge\n? The file aem-headless-ui-ext-examples/.aio already exists: Overwrite\n\n✔ Successfully imported configuration for:\n1. Org: Sites Internal\n2. Project: 562TurquoiseShrimp\n3. Workspace: Production.\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Note:"),"\nWe chose the ",(0,p.mdx)("inlineCode",{parentName:"p"},"Merge")," option for the ",(0,p.mdx)("inlineCode",{parentName:"p"},".env")," file so that we don't lose our environment variables."),(0,p.mdx)("p",null,"After workgroup switching, we can make building and deploying with the command:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-shell"},"$ aio app deploy\n\n√ Built 3 action(s) for 'aem/cf-console-admin/1'\n√ Building web assets for 'aem/cf-console-admin/1'\n√ Deployed 3 action(s) for 'aem/cf-console-admin/1'\n√ Deploying web assets for 'aem/cf-console-admin/1'\nYour deployed actions:\nweb actions:\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/get-language-copies\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/quick-publish-language-copies\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/api/v1/web/aem-headless-ui-ext-examples/unpublish-language-copies\nTo view your deployed application:\n  -> https://245265-562turquoiseshrimp.adobeio-static.net/index.html\nTo view your deployed application in the Experience Cloud shell:\n  -> https://experience.adobe.com/?devMode=true#/custom-apps/?localDevUrl=https://245265-562turquoiseshrimp.adobeio-static.net/index.html\nNew Extension Point(s) in Workspace 'Production': 'aem/cf-console-admin/1'\nSuccessful deployment 🏄\n")),(0,p.mdx)("p",null,"You can also undeploy your app with:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"aio app undeploy\n")),(0,p.mdx)("p",null,"To learn more about deployment, please refer to ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/#7-deploying-the-application"},"Deploying the Application"),"\nand ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/deployment/"},"Deployment Overview"),"."),(0,p.mdx)("h2",{id:"create-approval-request-adobe-developer-console"},"Create approval request (Adobe Developer Console)"),(0,p.mdx)("p",null,"To begin the approval process, navigate in ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Adobe Developer Console")," to the ",(0,p.mdx)("inlineCode",{parentName:"p"},"Production workspace")," and select ",(0,p.mdx)("strong",{parentName:"p"},"Submit for approval")," in the top-right corner of the screen or select ",(0,p.mdx)("strong",{parentName:"p"},"Approval")," in the left navigation.\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1265px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/5530d/request-for-approval-buttons.webp 320w","/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/0c8fb/request-for-approval-buttons.webp 640w","/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/cec1f/request-for-approval-buttons.webp 1265w"],sizes:"(max-width: 1265px) 100vw, 1265px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/dd4a7/request-for-approval-buttons.png 320w","/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/0f09e/request-for-approval-buttons.png 640w","/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/690e2/request-for-approval-buttons.png 1265w"],sizes:"(max-width: 1265px) 100vw, 1265px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/cb1c4ef4c8f8cdd527995b5cb99f098a/690e2/request-for-approval-buttons.png",alt:"Request for Approval buttons",title:"Request for Approval buttons",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"The next step is to fill out the ",(0,p.mdx)("strong",{parentName:"p"},"App Submission Details")," form.\nThis information will be visible to people using your app and administrators viewing your app.\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1043px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"88.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80fb3afe1178091d485a38a5adfd371d/5530d/app-submission-details-form.webp 320w","/uix/static/80fb3afe1178091d485a38a5adfd371d/0c8fb/app-submission-details-form.webp 640w","/uix/static/80fb3afe1178091d485a38a5adfd371d/39914/app-submission-details-form.webp 1043w"],sizes:"(max-width: 1043px) 100vw, 1043px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80fb3afe1178091d485a38a5adfd371d/dd4a7/app-submission-details-form.png 320w","/uix/static/80fb3afe1178091d485a38a5adfd371d/0f09e/app-submission-details-form.png 640w","/uix/static/80fb3afe1178091d485a38a5adfd371d/0b8c0/app-submission-details-form.png 1043w"],sizes:"(max-width: 1043px) 100vw, 1043px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/80fb3afe1178091d485a38a5adfd371d/0b8c0/app-submission-details-form.png",alt:"App Submission Details forms",title:"App Submission Details forms",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"After submitting the form You will be returned to the Approval screen, where the Status of your application should now be ",(0,p.mdx)("strong",{parentName:"p"},"In Review"),".\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1122px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.81250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/5530d/in-review.webp 320w","/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/0c8fb/in-review.webp 640w","/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/b10c1/in-review.webp 1122w"],sizes:"(max-width: 1122px) 100vw, 1122px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/dd4a7/in-review.png 320w","/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/0f09e/in-review.png 640w","/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/fe70a/in-review.png 1122w"],sizes:"(max-width: 1122px) 100vw, 1122px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/0e3bf5c64cfb5390ab2e55793eb6cbb5/fe70a/in-review.png",alt:"In review status",title:"In review status",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Once reviewed by your organization's administrator, your app will either be approved and published or rejected."),(0,p.mdx)("h2",{id:"administrator-review-myexchange"},"Administrator review (MyExchange)"),(0,p.mdx)("p",null,"Once the application is submitted for the approval, organization's administrator will see the app in"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-text"},"My Exchange -> Experience Cloud Apps -> Pending Review\n")),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/dd1ab17eea642753ed1733f6b18fb290/5530d/pending-review.webp 320w","/uix/static/dd1ab17eea642753ed1733f6b18fb290/0c8fb/pending-review.webp 640w","/uix/static/dd1ab17eea642753ed1733f6b18fb290/94b1e/pending-review.webp 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/dd1ab17eea642753ed1733f6b18fb290/dd4a7/pending-review.png 320w","/uix/static/dd1ab17eea642753ed1733f6b18fb290/0f09e/pending-review.png 640w","/uix/static/dd1ab17eea642753ed1733f6b18fb290/bbbf7/pending-review.png 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/dd1ab17eea642753ed1733f6b18fb290/bbbf7/pending-review.png",alt:"Pending Review",title:"Pending Review",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"The reviewer could review this app, either approve it or reject it.\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/7e325891dd80199e586e9b6217a3f299/5530d/review-form.webp 320w","/uix/static/7e325891dd80199e586e9b6217a3f299/0c8fb/review-form.webp 640w","/uix/static/7e325891dd80199e586e9b6217a3f299/94b1e/review-form.webp 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/7e325891dd80199e586e9b6217a3f299/dd4a7/review-form.png 320w","/uix/static/7e325891dd80199e586e9b6217a3f299/0f09e/review-form.png 640w","/uix/static/7e325891dd80199e586e9b6217a3f299/bbbf7/review-form.png 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/7e325891dd80199e586e9b6217a3f299/bbbf7/review-form.png",alt:"Review form",title:"Review form",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Once an app is approved, administrator will see it under ",(0,p.mdx)("strong",{parentName:"p"},"Approved"),".\nThe reviewer may revoke this application to unpublish it. The application owner can resubmit the application for review.\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.81249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/5530d/status-approved.webp 320w","/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/0c8fb/status-approved.webp 640w","/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/94b1e/status-approved.webp 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/dd4a7/status-approved.png 320w","/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/0f09e/status-approved.png 640w","/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/bbbf7/status-approved.png 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/e496a51e6d27e4dcc19026ddc8f3ed2e/bbbf7/status-approved.png",alt:"Approved",title:"Approved",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("blockquote",null,(0,p.mdx)("p",{parentName:"blockquote"},"Once an application is published, you will not be able to re-deploy it to ",(0,p.mdx)("inlineCode",{parentName:"p"},"Production"),". To do this, you will need to revoke and create a new approval request.")),(0,p.mdx)("h2",{id:"check-your-published-app-at-experience-cloud"},"Check your published app at Experience Cloud"),(0,p.mdx)("p",null,"After the approval, your app will be available at ",(0,p.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/"},"Adobe Experience Cloud")," in App Builder Apps section."),(0,p.mdx)("p",null,"Also, data about your extension will be added to ",(0,p.mdx)("em",{parentName:"p"},"Adobe App Registry")," and will be reachable for Adobe Products."),(0,p.mdx)("p",null,"This means, that the new functionality will be available, for example, in the AEM admin panel for ",(0,p.mdx)("strong",{parentName:"p"},"your organization"),".\n",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.312499999999998%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80b780dc41082272b8408bff189a9986/5530d/publishing-2.webp 320w","/uix/static/80b780dc41082272b8408bff189a9986/0c8fb/publishing-2.webp 640w","/uix/static/80b780dc41082272b8408bff189a9986/94b1e/publishing-2.webp 1280w","/uix/static/80b780dc41082272b8408bff189a9986/5a546/publishing-2.webp 1547w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uix/static/80b780dc41082272b8408bff189a9986/dd4a7/publishing-2.png 320w","/uix/static/80b780dc41082272b8408bff189a9986/0f09e/publishing-2.png 640w","/uix/static/80b780dc41082272b8408bff189a9986/bbbf7/publishing-2.png 1280w","/uix/static/80b780dc41082272b8408bff189a9986/8373c/publishing-2.png 1547w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/80b780dc41082272b8408bff189a9986/bbbf7/publishing-2.png",alt:"New functionality in AEM admin panel",title:"New functionality in AEM admin panel",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nMore details about publishing are described in ",(0,p.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/publish_app/"},"Publishing Your First App Builder Application"),"."),(0,p.mdx)("h2",{id:"enabling-extension-only-on-specific-aem-environments"},"Enabling extension only on specific AEM environments"),(0,p.mdx)("p",null,"At the moment any approved and published extension will be available on all AEM programs and environments within organisation."),(0,p.mdx)("p",null,"You can modify your extension to initialize itself only for specific AEM programs and/or environments by checking ",(0,p.mdx)("inlineCode",{parentName:"p"},"repo")," query parameter in the extension registration component."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},"// ExtensionRegistration component\nfunction ExtensionRegistration() {\n  const search = new URLSearchParams(window.location.search);\n  if (search.get('repo') != '<CURTOMER_AEM_HOST>') {\n    return; // skip extension registration if repo does not match desired one\n  }\n\n  const init = async () => {\n    const apis = await register({\n      id: extensionId,\n      methods: {\n        // Configure your Action Bar button here\n        ...\n")),(0,p.mdx)("p",null,"This code snippet demonstrates how to retrieve ",(0,p.mdx)("inlineCode",{parentName:"p"},"repo")," parameter and prevent extension registration if it does not match desired value."),(0,p.mdx)("h2",{id:"additional-resources"},"Additional Resources"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"../development-flow"},"UI Extensions Development Flow")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"../../"},"UI Extensibility Overview")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"../../services/aem-cf-console-admin/debug"},"Troubleshooting")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"../../overview/faq"},"FAQ"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-publication-index-md-b370ac2ffc7572d1382f.js.map