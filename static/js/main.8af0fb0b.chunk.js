(this["webpackJsonptailwindreact-app"]=this["webpackJsonptailwindreact-app"]||[]).push([[0],{21:function(t,e,i){},39:function(t,e,i){"use strict";i.r(e);var c=i(1),s=i(0),o=i(15),a=i.n(o),n=(i(21),i(4)),r=i(3),l=i(6),m=i.n(l),p={firstname:"LINENG",lastname:"CAO",fullname:"\u66f9\u6587\u65af",links:[{title:"Blog",link:"./blog/",name:"Blog"},{title:"Resume",link:"./res/resume/Resume_02_04_2021.pdf",name:"Resume"},{title:"Github",link:"//github.com/vincecao",name:"Github"},{title:"Linkedin",link:"//linkedin.com/in/lineng-vince-cao-36b693121",name:"Linkedin"},{title:"COVID19-Statstic",link:"//covid-19-statistics.vercel.app/",name:"COVID-Statstic"},{title:"instagram/__viiiince",link:"//instagram.com/__viiiince/",name:"Instagram"},{title:"flickr/SAABLANCIAS",link:"//flickr.com/photos/saablancias/",name:"Flickr"}]},u=["https://live.staticflickr.com/65535/50329165341_739d843a7b_k_d.jpg","https://live.staticflickr.com/65535/50328491533_d8918c8ab4_o_d.jpg","https://live.staticflickr.com/65535/50329162171_30c34f5889_o_d.jpg","https://live.staticflickr.com/65535/49943793377_eb81ddd256_o_d.jpg","https://live.staticflickr.com/65535/49943497971_fe037384a5_o_d.jpg","https://i.imgur.com/62pgNU6.jpg","https://i.imgur.com/hUCdEb8.jpg","https://i.imgur.com/rOGCe60.jpg","https://i.imgur.com/fWSxZNa.jpg","https://i.imgur.com/qg1d4YU.jpg","https://i.imgur.com/yat3XyC.jpg","https://i.imgur.com/2DOPYty.jpg","https://i.imgur.com/LaJivMa.jpg","https://i.imgur.com/oi0XkP0.jpg","https://i.imgur.com/gBLxYmN.jpg","https://i.imgur.com/vpJRDbw.jpg","https://i.imgur.com/k2LklSY.jpg","https://i.imgur.com/1QOaeFq.jpg","https://i.imgur.com/e6N9Mlr.jpg","https://i.imgur.com/BvBvQWo.jpg","https://i.imgur.com/rfcJQOf.jpg","https://i.imgur.com/A2weQZ9.jpg","https://i.imgur.com/4SLolwu.jpg","https://i.imgur.com/JMp93rB.jpg","https://i.imgur.com/8xwEAXO.jpg","https://i.imgur.com/9O87yjO.jpg","https://i.imgur.com/7ja03ns.jpg","https://i.imgur.com/KsUJW8Q.jpg","https://i.imgur.com/pMrtiHo.jpg","https://i.imgur.com/4t4poeT.jpg","https://i.imgur.com/kGAj3Xv.jpg","https://i.imgur.com/rsLege5.jpg"],g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_USER_ID,j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PHOTOSETS_ID,h=function(){return new Promise((function(t,e){return m.a.get("https://www.flickr.com/services/rest/",{params:{method:"flickr.photosets.getPhotos",api_key:g,user_id:d,photoset_id:j,extras:"url_h",format:"json",nojsoncallback:1}}).then((function(t){return t.data})).then((function(i){if(i.photoset.photo){var c=i.data.photoset.photo.map((function(t){return t.url_h}));t({status:"success",msg:"getPhotoSetsPromise",data:c})}else e({status:"error",msg:"getPhotoSetsPromise Error: no photo find"})})).catch((function(e){console.log(e),t({status:"success",msg:"error, use backup",data:u})}))}))},f=function(){var t=Object(s.useState)([]),e=Object(n.a)(t,2),i=e[0],o=e[1],a=Object(s.useState)(0),l=Object(n.a)(a,2),m=l[0],u=l[1],g=Object(s.useState)(!1),d=Object(n.a)(g,2),j=d[0],f=d[1];Object(s.useEffect)((function(){h().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.data&&o(t.data)}))}),[]),Object(s.useEffect)((function(){i.length>0&&setTimeout((function(){m+1===i.length?u(0):u((function(t){return t+1}))}),7e3)}),[i,m]);var _=p.firstname,b=p.lastname,O=p.fullname,v=p.links;return Object(c.jsxs)("div",{className:"relative h-screen",children:[Object(c.jsx)(r.a,{exitBeforeEnter:!0,children:Object(c.jsx)(r.b.img,{initial:{opacity:0},animate:{opacity:.9,transition:{duration:1}},exit:{opacity:0,transition:{duration:1}},src:i[m],className:"absolute h-screen min-w-full object-cover"},"image-".concat(m))}),Object(c.jsx)("div",{className:"absolute top-0 bottom-0 left-0 right-0 border-4 border-white ".concat(j?"backdrop-blur":"")}),Object(c.jsx)("div",{className:"absolute w-full h-screen",children:Object(c.jsx)(r.a,{exitBeforeEnter:!0,children:Object(c.jsxs)(r.b.div,{initial:{color:"#000000"},animate:{color:"#ffffff",transition:{duration:1}},exit:{color:"#000000",transition:{duration:1}},className:"text-shadow w-full h-full font-index p-6 antialiased leading-10 tracking-widest",children:[Object(c.jsxs)("div",{className:"mt-20 mx-auto text-center mb-10",children:[Object(c.jsxs)("p",{className:"",children:[_," ",b]}),Object(c.jsx)("p",{className:"",children:" / "}),Object(c.jsx)("p",{className:"text-4xl font-body",children:O})]}),Object(c.jsx)("div",{className:"flex flex-col md:flex-row w-full text-center m-auto justify-center items-center",children:v.map((function(t,e){return Object(c.jsx)("div",{children:Object(c.jsxs)(r.b.div,{whileHover:{scale:1.2,transition:{duration:.2}},onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:[Object(c.jsx)("p",{className:"inline italic",children:"/"}),Object(c.jsx)("a",{className:"mr-5 italic",title:t.title,href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.name})]})},t.link)}))})]},"text-".concat(m))})}),Object(c.jsx)("div",{className:"absolute top-0 mt-5 left-0 ml-5",children:Object(c.jsx)(r.b.img,{initial:{x:-100},animate:{x:0,transition:{delay:1}},src:"/assets/avatar.png",alt:"avatar",className:"rounded-full w-12 h-12 shadow-md"})})]})};a.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8af0fb0b.chunk.js.map