(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8613:function(e,a,s){var t,n;void 0!==(n="function"==typeof(t=function(){"use strict";function a(e,a,s){var t=new XMLHttpRequest;t.open("GET",e),t.responseType="blob",t.onload=function(){i(t.response,a,s)},t.onerror=function(){console.error("could not download file")},t.send()}function t(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch(e){}return 200<=a.status&&299>=a.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(s){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof s.g&&s.g.global===s.g?s.g:void 0,o=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,s,o){var i=r.URL||r.webkitURL,c=document.createElement("a");s=s||e.name||"download",c.download=s,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?n(c):t(c.href)?a(e,s,o):n(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(c.href)},4e4),setTimeout(function(){n(c)},0))}:"msSaveOrOpenBlob"in navigator?function(e,s,r){if(s=s||e.name||"download","string"!=typeof e){var o;navigator.msSaveOrOpenBlob((void 0===(o=r)?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),s)}else if(t(e))a(e,s,r);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){n(i)})}}:function(e,s,t,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return a(e,s,t);var i="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||o)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,p=u.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});r.saveAs=i.saveAs=i,e.exports=i})?t.apply(a,[]):t)&&(e.exports=n)},5233:function(e,a,s){Promise.resolve().then(s.bind(s,9585))},9585:function(e,a,s){"use strict";s.r(a);var t=s(7437);s(9720),s(8578);var n=s(6691),r=s.n(n),o=s(8613);a.default=()=>{async function e(){try{let e=await fetch("/assets/pdf/guiaUser.pdf"),a=await e.blob();(0,o.saveAs)(a,"Guia de usuario Aura.pdf"),alert("Descarga completada")}catch(e){console.error("Error al descargar el PDF:",e),alert("Hubo un error al descargar el PDF")}}return(0,t.jsxs)("div",{className:"guide-container",children:[(0,t.jsxs)("div",{className:"container-guide0",children:[(0,t.jsxs)("div",{className:"textWelcolme",children:[(0,t.jsx)("h1",{className:"titleWelcome",children:"Bienvenido a la Gu\xeda de Usuario"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:"spanHola",children:"\xa1Hola!"})," Bienvenido a nuestra gu\xeda de usuario. Estamos encantados de tenerte aqu\xed. Esta p\xe1gina est\xe1 dise\xf1ada para proporcionarte informaci\xf3n detallada y tutoriales en video que te ayudar\xe1n a aprovechar al m\xe1ximo nuestro software."]}),(0,t.jsx)("p",{children:"Explora las secciones a continuaci\xf3n para encontrar respuestas a tus preguntas y descubrir consejos \xfatiles. Siempre estamos trabajando para mejorar tu experiencia, as\xed que revisa regularmente para obtener actualizaciones y nuevos tutoriales."})]}),(0,t.jsx)("div",{className:"imgWelcome",children:(0,t.jsx)(r(),{className:"imageWelcome",src:"/assets/4155601.jpg",alt:"img de ayuda",width:500,height:300})})]}),(0,t.jsx)("div",{className:"container-guide1",children:(0,t.jsxs)("div",{className:"textWelcolme2",children:[(0,t.jsx)("h2",{className:"titleWelcome2",children:"Explora nuestros Videos"}),(0,t.jsx)("p",{children:"Aqu\xed encontrar\xe1s una colecci\xf3n de videos que hemos preparado para guiarte en el uso de nuestro software. Desde funciones b\xe1sicas hasta consejos avanzados, estos videos te ser\xe1n \xfatiles para aprovechar al m\xe1ximo todas las caracter\xedsticas que ofrecemos."}),(0,t.jsx)("p",{children:"\xa1No dudes en explorar y aprender! Si tienes alguna pregunta espec\xedfica, tambi\xe9n puedes consultar nuestra secci\xf3n de preguntas frecuentes o contactarnos directamente."}),(0,t.jsxs)("div",{className:"cardsVideos",children:[(0,t.jsxs)("div",{className:"cardvideo",children:[(0,t.jsxs)("video",{className:"card-image",controls:!0,children:[(0,t.jsx)("source",{src:"/assets/videos/prueba.mp4",type:"video/mp4"}),"!UPS\xa1 al parecer tu navegador no soporta el  video."]}),(0,t.jsx)("p",{className:"card-title",children:"titulo del tutorial"}),(0,t.jsx)("p",{className:"card-body",children:"Descripcion del tutorial"}),(0,t.jsxs)("p",{className:"footer",children:["Version de Aura ",(0,t.jsx)("span",{className:"by-name",children:"1.0"})," de ",(0,t.jsx)("span",{className:"date",children:"18/11/23"})]})]}),(0,t.jsxs)("div",{className:"cardvideo",children:[(0,t.jsxs)("video",{className:"card-image",controls:!0,children:[(0,t.jsx)("source",{src:"/assets/videos/prueba.mp4",type:"video/mp4"}),"!UPS\xa1 al parecer tu navegador no soporta el  video."]}),(0,t.jsx)("p",{className:"card-title",children:"titulo del tutorial"}),(0,t.jsx)("p",{className:"card-body",children:"Descripcion del tutorial"}),(0,t.jsxs)("p",{className:"footer",children:["Version de Aura ",(0,t.jsx)("span",{className:"by-name",children:"1.0"})," de ",(0,t.jsx)("span",{className:"date",children:"18/11/23"})]})]}),(0,t.jsxs)("div",{className:"cardvideo",children:[(0,t.jsxs)("video",{className:"card-image",controls:!0,children:[(0,t.jsx)("source",{src:"/assets/videos/prueba.mp4",type:"video/mp4"}),"!UPS\xa1 al parecer tu navegador no soporta el  video."]}),(0,t.jsx)("p",{className:"card-title",children:"titulo del tutorial"}),(0,t.jsx)("p",{className:"card-body",children:"Descripcion del tutorial"}),(0,t.jsxs)("p",{className:"footer",children:["Version de Aura ",(0,t.jsx)("span",{className:"by-name",children:"1.0"})," de ",(0,t.jsx)("span",{className:"date",children:"18/11/23"})]})]})]})]})}),(0,t.jsxs)("div",{className:"container-guide0",children:[(0,t.jsx)("div",{className:"imgWelcome",children:(0,t.jsx)(r(),{className:"imageWelcome",src:"/assets/4.jpg",alt:"img de ayuda",width:500,height:300})}),(0,t.jsxs)("div",{className:"textWelcolme",children:[(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:"Si no has encontrado la informaci\xf3n que necesitas, te invitamos a descargar nuestro manual de usuario. En \xe9l, encontrar\xe1s detalles detallados y respuestas a las preguntas m\xe1s frecuentes. \xa1Esperamos que te sea de ayuda"})}),(0,t.jsxs)("button",{onClick:e,className:"buttondes",type:"button",children:[(0,t.jsx)("span",{class:"button__text",children:"Descargar"}),(0,t.jsx)("span",{class:"button__icon",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 35",id:"bdd05811-e15d-428c-bb53-8661459f9307","data-name":"Layer 2",className:"svg",children:[(0,t.jsx)("path",{d:"M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"}),(0,t.jsx)("path",{d:"M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"}),(0,t.jsx)("path",{d:"M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"})]})})]})]})]})]})}},9720:function(){},8578:function(){},622:function(e,a,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=s(2265),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var t,r={},l=null,d=null;for(t in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(d=a.ref),a)o.call(a,t)&&!c.hasOwnProperty(t)&&(r[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===r[t]&&(r[t]=a[t]);return{$$typeof:n,type:e,key:l,ref:d,props:r,_owner:i.current}}a.Fragment=r,a.jsx=l,a.jsxs=l},7437:function(e,a,s){"use strict";e.exports=s(622)}},function(e){e.O(0,[691,971,864,744],function(){return e(e.s=5233)}),_N_E=e.O()}]);