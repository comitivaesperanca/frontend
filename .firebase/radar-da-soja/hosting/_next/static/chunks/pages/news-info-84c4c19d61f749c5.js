(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{1858:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news-info",function(){return n(7021)}])},5606:function(e,t,n){"use strict";n.d(t,{u:function(){return i}});var a=n(5893);n(7294);var s=n(3148),l=n(5430);function i(e){let t={labels:["Positivo","Neutro","Negativo"],datasets:[{label:"Sentimentos",data:[e.positive,e.neutral,e.negative],backgroundColor:["rgba(163, 214, 156)","rgba(229, 229, 229)","rgba(247, 182, 196)"],borderColor:["rgba(163, 214, 156, 1)","rgba(229, 229, 229, 1)","rgba(247, 182, 196, 1)"],borderWidth:1}]},n={plugins:{legend:{position:"bottom"},title:{text:e.title,display:!0}},maintainAspectRatio:!1,responsive:!0};return(0,a.jsx)(l.by,{data:t,options:n})}s.kL.register(s.qi,s.u,s.De)},1645:function(e,t,n){"use strict";n.d(t,{T:function(){return a},s:function(){return s}});let a="http://20.75.107.170/",s="http://20.75.5.40/"},7021:function(e,t,n){"use strict";n.r(t);var a=n(5893),s=n(7294);n(5675);var l=n(1163),i=n(5606),r=n(7826),o=n(3253),d=n.n(o),c=n(7219),u=n(1645),x=n(2920);n(7134);var m=n(9008),h=n.n(m);let g={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},b=()=>{let[e,t]=(0,s.useState)(""),[n,o]=(0,s.useState)(!1),[m,b]=(0,s.useState)("bg-grey-200"),[f,p]=(0,s.useState)(0),v=(0,l.useRouter)(),[j,w]=s.useState(!1);function y(){w(!1)}let N=async function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let{id:e}=v.query;try{fetch(u.T+"news/".concat(e),{method:"GET"}).then(e=>e.json()).then(e=>{var n;t(e.entity),o(!1),b((0,r.Vu)(null===(n=e.entity)||void 0===n?void 0:n.finalSentiment))})}catch(n){o(!1)}},S=async()=>{let{id:e}=v.query;try{fetch(u.T+"news/SaveSuggestedSentiment?newsId=".concat(e,"&sentiment=").concat((0,r.xy)(f)),{method:"POST"}).then(e=>e.json()).then(e=>{o(!1),x.Am.success("Uma nova sugest\xe3o de sentimento para esta not\xedcia foi enviada.")})}catch(t){x.Am.error(t),o(!1)}y()};(0,s.useEffect)(()=>{o(!0),N()},[]);let C=()=>{w(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h(),{children:[(0,a.jsx)("title",{children:"Radar da Soja - Visualizar Not\xedcia"}),(0,a.jsx)("meta",{name:"description",content:"Radar da Soja"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/soy-logo.svg"}),(0,a.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[(0,a.jsx)("div",{className:"h-[100px] flex justify-between items-center px-4 pt-4 bg-white-100 w-full border-b-2 border-[#CCCCCC]",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"font-bold text-xl",children:"Seja bem-vindo, Investidor"}),(0,a.jsx)("p",{className:"text-[#575353]",children:'Voc\xea est\xe1 na tela "Visualizar not\xedcia"'})]})}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("div",{className:"w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto",children:(0,a.jsxs)("div",{className:"grid lg:grid-cols-7 gap-8 p-4",children:[(0,a.jsx)("div",{className:"lg:col-span-2 col-span-1 bg-white flex justify-between",children:(0,a.jsxs)("div",{className:"flex flex-col w-full ",children:[(0,a.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"T\xedtulo:"}),(0,a.jsx)("input",{className:"enabled:hover:border-gray-400 disabled:opacity-75 w-full h-[43px] border p-4 rounded-lg",disabled:!0,defaultValue:null==e?void 0:e.title})]})}),(0,a.jsx)("div",{className:"lg:col-span-2 bg-white flex",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Data e hora da publica\xe7\xe3o:"}),(0,a.jsx)("input",{className:"enabled:hover:border-gray-400 disabled:opacity-75 lg:w-[200px] sm:w-full h-[43px] border p-4 rounded-lg",disabled:!0,value:new Date(null==e?void 0:e.publicationDate).toLocaleString()})]})}),(0,a.jsx)("div",{className:"lg:col-span-3 col-span-1 bg-white flex justify-between",children:(0,a.jsxs)("div",{className:"flex flex-col w-full ",children:[(0,a.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Fonte:"}),(0,a.jsx)("input",{className:"enabled:hover:border-gray-400 disabled:opacity-75 lg:w-[200px] sm:w-full h-[43px] border p-4 rounded-lg",disabled:!0,defaultValue:null==e?void 0:e.source})]})})]})}),(0,a.jsxs)("div",{className:"flex lg:flex-row phone:flex-col w-full py-4 justify-around",children:[(0,a.jsxs)("div",{className:"w-full lg:w-[100%] h-[390px] lg:m-0 md:m-auto phone:m-auto p-4 border rounded-lg bg-white",children:[(0,a.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Conte\xfado da not\xedcia:"}),(0,a.jsx)("textarea",{id:"message",rows:"8",className:"block p-2.5 w-full h-[330px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",placeholder:"...",disabled:!0,value:null==e?void 0:e.newsContent})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"lg:w-[100%] h-[390px] border rounded-lg bg-white lg:my-0 md:my-0 phone:my-2 lg:mx-0 md:mx-auto phone:mx-auto",children:(0,a.jsx)(i.u,{title:"Sentimentos do texto",positive:null==e?void 0:e.positiveSentiment,negative:null==e?void 0:e.negativeSentiment,neutral:null==e?void 0:e.neutralSentiment})}),(0,a.jsx)("div",{className:"lg:w-[100%] h-[100px] p-4 my-2 border rounded-lg bg-white flex justify-center items-center",children:(0,a.jsxs)("div",{className:"flex justify-center flex-col",children:[(0,a.jsx)("h1",{className:"text-[#575353] font-bold mb-2 text-sm",children:"Sentimento predominante da not\xedcia:"}),(0,a.jsx)("span",{className:"".concat(m," text-[#575353] font-bold px-4 border rounded m-auto"),children:(0,r.vd)(e.finalSentiment)})]})}),(0,a.jsx)("div",{className:"lg:w-[100%] h-14 p-4 flex justify-center items-center cursor-pointer",children:(0,a.jsx)("button",{className:"text-[#575353] font-bold px-4 border rounded m-auto bg-white hover:bg-green-200",onClick:C,children:"Reclassificar sentimento"})}),(0,a.jsxs)(d(),{isOpen:j,onRequestClose:y,style:g,contentLabel:"Example Modal",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center lg:w-[400px] md:w-[200px] phone:md:w-[200px]",children:[(0,a.jsxs)("div",{className:"flex justify-between font-bold",children:[(0,a.jsx)("h1",{children:"Sentimento atual"}),(0,a.jsx)("h1",{children:"Sentimento desejado"})]}),(0,a.jsxs)("div",{className:"flex bg-grey-200 justify-around items-center my-4",children:[(0,a.jsx)("span",{className:"".concat(m," text-[#575353] font-bold px-4 border rounded "),children:(0,r.vd)(e.finalSentiment)}),(0,a.jsx)(c.Rgz,{size:27}),(0,a.jsxs)("select",{id:"sentimentWanted",name:"sentimentWanted",value:f,onChange:e=>{p(e.currentTarget.value)},className:"h-[30px] p-[2px] border rounded-lg bg-white",children:[(0,a.jsx)("option",{value:"0",children:"Sentimento"}),(0,a.jsx)("option",{value:"1",children:"Positivo"}),(0,a.jsx)("option",{value:"2",children:"Neutro"}),(0,a.jsx)("option",{value:"3",children:"Negativo"})]})]})]}),(0,a.jsxs)("div",{className:"flex items-center bg-green-red justify-center",children:[(0,a.jsx)("button",{className:"bg-transparent text-[#575353] font-semibold py-0 px-4 border border-[#575353] rounded h-[30px]",onClick:y,children:"Cancelar"}),(0,a.jsx)("button",{className:"bg-[#A3D69C] text-[#575353] font-bold ml-10 py-0 px-4 border rounded h-[30px]",onClick:S,children:"Confimar"})]})]})]}),(0,a.jsx)(x.Ix,{})]})]})]})]})};t.default=b},7826:function(e,t,n){"use strict";n.d(t,{UT:function(){return d},Vu:function(){return r},YV:function(){return s},p6:function(){return a},vd:function(){return l},xy:function(){return i}});let a=e=>{var t=new Date(e);return t.toLocaleString(),t=new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(t)},s=e=>["Domingo","Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado"][new Date(e).getDay()],l=e=>{switch(e){case"Positiva":return"Positivo";case"Negativa":return"Negativo";default:return"Neutro"}},i=e=>{switch(e){case"1":return"Positiva";case"2":return"Negativa";default:return"Neutra"}},r=e=>{switch(e){case"Positiva":return"bg-green-200";case"Negativa":return"bg-red-200";default:return"bg-gray-200"}},o=e=>{switch(e){case 1:return"positive";case 2:return"negative";default:return"neutral"}},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";var s="";if(""!=e&&(s+="&search=".concat(e)),""!=t&&(s+="&source=".concat(t)),""!=n){var l=new Date(n);l.toISOString(),s+="&date=".concat(l)}return""!=a&&(s+="&sentiment=".concat(o(a))),s}}},function(e){e.O(0,[196,763,219,913,774,888,179],function(){return e(e.s=1858)}),_N_E=e.O()}]);