(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8477)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,o=n(2648).Z,l=n(1598).Z,i=n(7273).Z,a=l(n(7294)),s=o(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=o(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,o,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&i(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:p,placeholder:h,loading:g,srcString:v,config:y,unoptimized:x,loader:b,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:E,onLoad:C,onError:S}=e,N=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},N,n,{width:l,height:o,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:g,style:r({},u,d),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,h,w,j,_,x))},[v,h,w,j,_,S,x,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,w,j,_,x)},onError:e=>{E(!0),"blur"===h&&_(!0),S&&S(e)}})))}),y=a.forwardRef((e,t)=>{let n,o;var l,{src:m,sizes:y,unoptimized:x=!1,priority:b=!1,loading:w,className:j,quality:_,width:E,height:C,fill:S,style:N,onLoad:O,onLoadingComplete:P,placeholder:R="empty",blurDataURL:M,layout:k,objectFit:z,objectPosition:I,lazyBoundary:L,lazyRoot:T}=e,A=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=a.useContext(d.ImageConfigContext),B=a.useMemo(()=>{let e=p||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[D]),U=A,W=U.loader||f.default;delete U.loader;let Z="__next_img_default"in W;if(Z){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let q=W;W=e=>{let{config:t}=e,n=i(e,["config"]);return q(n)}}if(k){"fill"===k&&(S=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];F&&(N=r({},N,F));let G={responsive:"100vw",fill:"100vw"}[k];G&&!y&&(y=G)}let H="",K=g(E),V=g(C);if("object"==typeof(l=m)&&(h(l)||void 0!==l.src)){let J=h(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,o=J.blurHeight,M=M||J.blurDataURL,H=J.src,!S){if(K||V){if(K&&!V){let X=K/J.width;V=Math.round(J.height*X)}else if(!K&&V){let $=V/J.height;K=Math.round(J.width*$)}}else K=J.width,V=J.height}}let Q=!b&&("lazy"===w||void 0===w);((m="string"==typeof m?m:H).startsWith("data:")||m.startsWith("blob:"))&&(x=!0,Q=!1),B.unoptimized&&(x=!0),Z&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(x=!0);let[Y,ee]=a.useState(!1),[et,en]=a.useState(!1),er=g(_),eo=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:I}:{},et?{}:{color:"transparent"},N),el="blur"===R&&M&&!Y?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:K,heightInt:V,blurWidth:n,blurHeight:o,blurDataURL:M}),'")')}:{},ei=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:i,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let l=/(^|\s)(1?\d?\d)vw/g,i=[];for(let a;a=l.exec(n);a)i.push(parseInt(a[2]));if(i.length){let s=.01*Math.min(...i);return{widths:o.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let c=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:c,kind:"x"}}(t,o,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,r)=>"".concat(a({config:t,src:n,quality:l,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:a({config:t,src:n,quality:l,width:s[u]})}}({config:B,src:m,unoptimized:x,width:K,quality:er,sizes:y,loader:W}),ea=m,es={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:U.crossOrigin},ec=a.useRef(O);a.useEffect(()=>{ec.current=O},[O]);let eu=a.useRef(P);a.useEffect(()=>{eu.current=P},[P]);let ed=r({isLazy:Q,imgAttributes:ei,heightInt:V,widthInt:K,qualityInt:er,className:j,imgStyle:eo,blurStyle:el,loading:w,config:B,fill:S,unoptimized:x,placeholder:R,loader:W,srcString:ea,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:en},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},ed,{ref:t})),b?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},es))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),i=n(1003),a=n(7795),s=n(4465),c=n(2692),u=n(8245),d=n(9246),f=n(227),p=n(3468);let h=new Set;function g(e,t,n,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:h,children:v,prefetch:y,passHref:x,replace:b,shallow:w,scroll:j,locale:_,onClick:E,onMouseEnter:C,onTouchStart:S,legacyBehavior:N=!1}=e,O=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let P=!1!==y,R=l.default.useContext(c.RouterContext),M=l.default.useContext(u.AppRouterContext),k=null!=R?R:M,z=!R,{href:I,as:L}=l.default.useMemo(()=>{if(!R){let e=m(a);return{href:e,as:h?m(h):e}}let[t,n]=i.resolveHref(R,a,!0);return{href:t,as:h?i.resolveHref(R,h):n||t}},[R,a,h]),T=l.default.useRef(I),A=l.default.useRef(L);N&&(r=l.default.Children.only(n));let D=N?r&&"object"==typeof r&&r.ref:t,[B,U,W]=d.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(A.current!==L||T.current!==I)&&(W(),A.current=L,T.current=I),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[L,D,I,W,B]);l.default.useEffect(()=>{k&&U&&P&&g(k,I,L,{locale:_})},[L,I,U,_,P,null==R?void 0:R.locale,k]);let q={ref:Z,onClick(e){N||"function"!=typeof E||E(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,n,r,o,a,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?l.default.startTransition(h):h()}(e,k,I,L,b,w,j,_,z,P)},onMouseEnter(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),k&&(P||!z)&&g(k,I,L,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),k&&(P||!z)&&g(k,I,L,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||x||"a"===r.type&&!("href"in r.props)){let F=void 0!==_?_:null==R?void 0:R.locale,G=(null==R?void 0:R.isLocaleDomain)&&f.getDomainLocale(L,F,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);q.href=G||p.addBasePath(s.addLocale(L,F,null==R?void 0:R.defaultLocale))}return N?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},O,q),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,d]=r.useState(!1),[f,p]=r.useState(null);r.useEffect(()=>{if(l){if(!c&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),i.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(r)}},[f,c,n,t,u]);let h=r.useCallback(()=>{d(!1)},[]);return[p,u,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l}=e,i=r||t,a=o||n,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},8477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893);n(4744),n(7294);var o=n(1664),l=n.n(o),i=n(5675),a=n.n(i);let s=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("div",{className:"w-300 h-auto p-4 bg-[#333333] flex flex-col ",children:[(0,r.jsx)("div",{className:"flex flex-row items-center",children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsxs)("div",{className:"flex align-middle justify-between items-center",children:[(0,r.jsx)(a(),{src:"/soy-logo.svg",alt:"Radar da Soja",width:60,height:20}),(0,r.jsx)("p",{className:"text-center mx-8 my-8 text-white text-lg font-bold lg:flex md:flex phone:hidden",children:"Radar da Soja"})]})})}),(0,r.jsxs)("div",{className:"flex flex-col place-items-start",children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsxs)("div",{className:"my-4 p-3 flex align-middle justify-between items-center",children:[(0,r.jsx)(a(),{src:"/dash-icon.svg",alt:"Radar da Soja",width:20,height:20}),(0,r.jsx)("p",{className:"mx-4 text-white lg:flex md:flex phone:hidden",children:"Dashboard"})]})}),(0,r.jsx)(l(),{href:"/news",children:(0,r.jsxs)("div",{className:"my-4 p-3 flex align-middle justify-between items-center",children:[(0,r.jsx)(a(),{src:"/news-icon.svg",alt:"Radar da Soja",width:20,height:20}),(0,r.jsx)("p",{className:"mx-4 text-white lg:flex md:flex phone:hidden",children:"Not\xedcias"})]})}),(0,r.jsx)(l(),{href:"/for-you",children:(0,r.jsxs)("div",{className:"my-4 p-3 flex align-middle justify-between items-center",children:[(0,r.jsx)(a(),{src:"/for-you-icon.svg",alt:"Radar da Soja",width:20,height:20}),(0,r.jsx)("p",{className:"mx-4 text-white lg:flex md:flex phone:hidden",children:"Para voc\xea"})]})})]})]}),(0,r.jsx)("main",{className:"w-full",children:t})]})};function c(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(s,{children:(0,r.jsx)(t,{...n})})}},4744:function(){},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);