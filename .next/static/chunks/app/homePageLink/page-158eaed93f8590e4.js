(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{7810:function(e,a,s){Promise.resolve().then(s.bind(s,930))},5747:function(e,a,s){"use strict";var t=s(7437),c=s(2265),n=s(4033),l=s(6820),i=s.n(l);s(1534);var o=s(2173);a.Z=()=>{(0,n.useRouter)();let[e,a]=(0,c.useState)(["Cliente 1","Cliente 2","Cliente 3"]),[s,l]=(0,c.useState)(""),[r,d]=(0,c.useState)(""),[u,h]=(0,c.useState)(!1),[x,m]=(0,c.useState)(!1),[p,j]=(0,c.useState)(0),[g,v]=(0,c.useState)({nombres:"",apellido_P:"",apellido_M:"",edad:""}),f=(e,a)=>{e.preventDefault(),j(a.id_cliente),console.log(p)},b=async()=>{try{await o.Z.get("http://50.16.134.143:3300/clientes",{withCredentials:!0}).then(e=>{console.log(e);let s=e.data.data;a(s),console.log(s)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};(0,c.useEffect)(()=>{b().then(e=>console.log("Clientes cargados"))},[g]);let N=()=>{h(!1)},C=()=>{m(!1)};return(0,t.jsxs)("div",{className:"query-container",children:[(0,t.jsxs)("div",{className:"user",children:[(0,t.jsx)("h2",{children:"Agregar citas"}),(0,t.jsxs)("h2",{children:["Hola, ","Jhair Alejandro Cruz Palacios"]})]}),(0,t.jsx)("div",{className:"center-container",children:(0,t.jsx)("div",{className:"contenedorForm",children:(0,t.jsxs)("form",{className:"form",children:[(0,t.jsx)("p",{className:"title",children:"Ingrese los datos de la cita"}),(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{className:"input",type:"text",placeholder:"",required:"",value:s,onChange:e=>l(e.target.value)}),(0,t.jsx)("span",{children:"Motivo"})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{className:"input",type:"date",placeholder:"xx/xx/xxxx",required:"",value:r,onChange:e=>d(e.target.value)}),(0,t.jsx)("span",{children:"Fecha"})]}),(0,t.jsx)("button",{type:"button",className:"submit",onClick:()=>{m(!1),h(!0)},children:"Seleccionar Cliente"}),(0,t.jsx)("button",{onClick:e=>{e.preventDefault();try{o.Z.post("http://50.16.134.143:3300/citas",{motivo:s,fecha:r,id_cliente:p},{withCredentials:!0}).then(e=>{console.log(e),i().fire("Exito","Su cita se a guardado","success")}).catch(e=>{console.log(e),i().fire("Error","Su cita no se a guardado","error")})}catch(e){console.log(e)}},className:"submit",children:"Agregar Cita"}),(0,t.jsx)("button",{type:"button",className:"submit",onClick:()=>{h(!1),m(!0)},children:"Agregar Cliente"}),u&&(0,t.jsx)("div",{className:"modal-container",children:(0,t.jsxs)("div",{className:"modal-content1",children:[(0,t.jsx)("span",{className:"modal-close1",onClick:N,children:"\xd7"}),(0,t.jsx)("p",{children:"Lista de clientes"}),(0,t.jsx)("ul",{children:e.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("li",{children:e.nombre},a),(0,t.jsx)("button",{onClick:a=>f(a,e),children:"Seleccionar"})]},a))}),(0,t.jsx)("button",{type:"button",onClick:()=>{C()},children:"Aceptar"})]})}),x&&(0,t.jsx)("div",{className:"modal-container",children:(0,t.jsxs)("div",{className:"modal-content1",children:[(0,t.jsx)("span",{className:"modal-close1",onClick:C,children:"\xd7"}),(0,t.jsx)("h2",{children:"Agregar Cliente"}),(0,t.jsx)("label",{children:"Nombres:"}),(0,t.jsx)("input",{type:"text",value:g.nombres,onChange:e=>{v({...g,nombres:e.target.value})}}),(0,t.jsx)("label",{children:"Apellido Paterno:"}),(0,t.jsx)("input",{type:"text",value:g.apellidoPaterno,onChange:e=>{v({...g,apellidoPaterno:e.target.value})}}),(0,t.jsx)("label",{children:"Apellido Materno:"}),(0,t.jsx)("input",{type:"text",value:g.apellidoMaterno,onChange:e=>{v({...g,apellidoMaterno:e.target.value})}}),(0,t.jsx)("label",{children:"Edad:"}),(0,t.jsx)("input",{type:"text",value:g.edad,onChange:e=>{v({...g,edad:e.target.value})}}),(0,t.jsx)("button",{type:"button",onClick:()=>{try{o.Z.post("http://50.16.134.143:3300/clientes",g,{withCredentials:!0}).then(e=>{console.log(e),i().fire("Exito","Su cliente se a guardado","success"),j(e.data.id)}).catch(e=>{console.log(e),i().fire("Error","Su cliente no se a guardado","error")})}catch(e){console.log(e)}N()},children:"Aceptar"})]})})]})})})]})}},9585:function(e,a,s){"use strict";s.r(a);var t=s(7437);s(9720),s(8578);var c=s(6691),n=s.n(c),l=s(8613);a.default=()=>{async function e(){try{let e=await fetch("/assets/pdf/guiaUser.pdf"),a=await e.blob();(0,l.saveAs)(a,"Guia de usuario Aura.pdf"),alert("Descarga completada")}catch(e){console.error("Error al descargar el PDF:",e),alert("Hubo un error al descargar el PDF")}}return(0,t.jsxs)("div",{className:"guide-container",children:[(0,t.jsxs)("div",{className:"container-guide0",children:[(0,t.jsxs)("div",{className:"textWelcolme",children:[(0,t.jsx)("h1",{className:"titleWelcome",children:"Bienvenido a la Gu\xeda de Usuario"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:"spanHola",children:"\xa1Hola!"})," Bienvenido a nuestra gu\xeda de usuario. Estamos encantados de tenerte aqu\xed. Esta p\xe1gina est\xe1 dise\xf1ada para proporcionarte informaci\xf3n detallada y tutoriales en video que te ayudar\xe1n a aprovechar al m\xe1ximo nuestro software."]}),(0,t.jsx)("p",{children:"Explora las secciones a continuaci\xf3n para encontrar respuestas a tus preguntas y descubrir consejos \xfatiles. Siempre estamos trabajando para mejorar tu experiencia, as\xed que revisa regularmente para obtener actualizaciones y nuevos tutoriales."})]}),(0,t.jsx)("div",{className:"imgWelcome",children:(0,t.jsx)(n(),{className:"imageWelcome",src:"/assets/4155601.jpg",alt:"img de ayuda",width:500,height:300})})]}),(0,t.jsx)("div",{className:"container-guide1",children:(0,t.jsxs)("div",{className:"textWelcolme2",children:[(0,t.jsx)("h2",{className:"titleWelcome2",children:"Explora nuestros Videos"}),(0,t.jsx)("p",{children:"Aqu\xed encontrar\xe1s una colecci\xf3n de videos que hemos preparado para guiarte en el uso de nuestro software. Desde funciones b\xe1sicas hasta consejos avanzados, estos videos te ser\xe1n \xfatiles para aprovechar al m\xe1ximo todas las caracter\xedsticas que ofrecemos."}),(0,t.jsx)("p",{children:"\xa1No dudes en explorar y aprender! Si tienes alguna pregunta espec\xedfica, tambi\xe9n puedes consultar nuestra secci\xf3n de preguntas frecuentes o contactarnos directamente."}),(0,t.jsxs)("div",{className:"cardsVideos",children:[(0,t.jsxs)("div",{className:"cardvideo",children:[(0,t.jsxs)("video",{className:"card-image",controls:!0,children:[(0,t.jsx)("source",{src:"/assets/videos/prueba.mp4",type:"video/mp4"}),"!UPS\xa1 al parecer tu navegador no soporta el  video."]}),(0,t.jsx)("p",{className:"card-title",children:"titulo del tutorial"}),(0,t.jsx)("p",{className:"card-body",children:"Descripcion del tutorial"}),(0,t.jsxs)("p",{className:"footer",children:["Version de Aura ",(0,t.jsx)("span",{className:"by-name",children:"1.0"})," de ",(0,t.jsx)("span",{className:"date",children:"18/11/23"})]})]}),(0,t.jsxs)("div",{className:"cardvideo",children:[(0,t.jsxs)("video",{className:"card-image",controls:!0,children:[(0,t.jsx)("source",{src:"/assets/videos/prueba.mp4",type:"video/mp4"}),"!UPS\xa1 al parecer tu navegador no soporta el  video."]}),(0,t.jsx)("p",{className:"card-title",children:"titulo del tutorial"}),(0,t.jsx)("p",{className:"card-body",children:"Descripcion del tutorial"}),(0,t.jsxs)("p",{className:"footer",children:["Version de Aura ",(0,t.jsx)("span",{className:"by-name",children:"1.0"})," de ",(0,t.jsx)("span",{className:"date",children:"18/11/23"})]})]}),(0,t.jsxs)("div",{className:"cardvideo",children:[(0,t.jsxs)("video",{className:"card-image",controls:!0,children:[(0,t.jsx)("source",{src:"/assets/videos/prueba.mp4",type:"video/mp4"}),"!UPS\xa1 al parecer tu navegador no soporta el  video."]}),(0,t.jsx)("p",{className:"card-title",children:"titulo del tutorial"}),(0,t.jsx)("p",{className:"card-body",children:"Descripcion del tutorial"}),(0,t.jsxs)("p",{className:"footer",children:["Version de Aura ",(0,t.jsx)("span",{className:"by-name",children:"1.0"})," de ",(0,t.jsx)("span",{className:"date",children:"18/11/23"})]})]})]})]})}),(0,t.jsxs)("div",{className:"container-guide0",children:[(0,t.jsx)("div",{className:"imgWelcome",children:(0,t.jsx)(n(),{className:"imageWelcome",src:"/assets/4.jpg",alt:"img de ayuda",width:500,height:300})}),(0,t.jsxs)("div",{className:"textWelcolme",children:[(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:"Si no has encontrado la informaci\xf3n que necesitas, te invitamos a descargar nuestro manual de usuario. En \xe9l, encontrar\xe1s detalles detallados y respuestas a las preguntas m\xe1s frecuentes. \xa1Esperamos que te sea de ayuda"})}),(0,t.jsxs)("button",{onClick:e,className:"buttondes",type:"button",children:[(0,t.jsx)("span",{class:"button__text",children:"Descargar"}),(0,t.jsx)("span",{class:"button__icon",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35 35",id:"bdd05811-e15d-428c-bb53-8661459f9307","data-name":"Layer 2",className:"svg",children:[(0,t.jsx)("path",{d:"M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"}),(0,t.jsx)("path",{d:"M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"}),(0,t.jsx)("path",{d:"M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"})]})})]})]})]})]})}},930:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return N}});var t=s(7437),c=s(2265),n=s(4033);s(7216),s(833);var l=s(6820),i=s.n(l),o=s(2173),r=s(7965),d=s.n(r),u=()=>{let e=(0,n.useRouter)(),[a,s]=(0,c.useState)(0),[l,r]=(0,c.useState)(!1),[u,h]=(0,c.useState)({nombres:"",apellidoPaterno:"",apellidoMaterno:"",edad:""}),[x,m]=(0,c.useState)([]),[p,j]=(0,c.useState)(1),[g,v]=(0,c.useState)(0),f=new(d())("85de58124b369482bbb6",{cluster:"us2"}),b=async()=>{try{await o.Z.get("http://50.16.134.143:3300/clientes?page="+p+"&&limit=6",{withCredentials:!0}).then(e=>{console.log(e);let a=e.data.data,s=e.data.totalPages;m(a),v(s),console.log(a)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};function N(){r(!1)}async function C(){try{AxiosDefault.withCredentials,await o.Z.post("http://50.16.134.143:3300/clientes",{nombre:u.nombres,apellido_P:u.apellidoPaterno,apellido_M:u.apellidoMaterno,edad:u.edad},{withCredentials:!0}).then(async e=>{console.log(e)}).catch(async e=>{console.log(e)}),await o.Z.post("http://50.16.134.143:3300/message",{message:"Se ha registrado un nuevo cliente",username:"Admin"},{withCredentials:!0}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}catch(e){console.log(e),await i().fire({icon:"error",title:"Error",text:"Error al registrar cliente"})}N()}return(0,c.useEffect)(()=>{let e=f.subscribe("clientes");e.bind("agregar",e=>{i().fire({icon:"success",title:"Success",text:e.message})}),b().then(e=>console.log("Clientes cargados"))},[p]),(0,t.jsxs)("div",{className:"container-pacientes",children:[(0,t.jsxs)("div",{className:"group",children:[(0,t.jsx)("svg",{className:"icon","aria-hidden":"true",viewBox:"0 0 24 24",children:(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})}),(0,t.jsx)("input",{placeholder:"Search",type:"search",className:"input"})]}),(0,t.jsx)("div",{className:"container-cards",children:x.slice(a,a+6).map(a=>(0,t.jsx)("div",{className:"section_our_solution",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:(0,t.jsx)("div",{className:"our_solution_category",children:(0,t.jsx)("div",{className:"solution_cards_box",children:(0,t.jsxs)("div",{className:"solution_card",children:[(0,t.jsx)("div",{className:"hover_color_bubble"}),(0,t.jsx)("div",{className:"so_top_icon",children:a.fotografia?(0,t.jsx)("img",{src:a.fotografia,alt:"..."}):(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",viewBox:"0 0 512 512",height:"50",id:"Layer_1",children:(0,t.jsxs)("g",{children:[(0,t.jsxs)("g",{children:[(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#fae19e",d:"m47.478 452.317 295.441 19.76c5.511.369 10.277-3.8 10.645-9.31l28.393-424.517c.369-5.511-3.8-10.276-9.31-10.645l-295.441-19.76c-5.511-.369-10.276 3.8-10.645 9.31l-28.394 424.517c-.368 5.511 3.8 10.277 9.311 10.645z"})}),(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{children:(0,t.jsx)("g",{children:(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#fff9e9",d:"m17.5 504.177h226.14l79.96-79.605v-355.86c0-5.523-4.477-10-10-10h-296.1c-5.523 0-10 4.477-10 10v425.466c0 5.522 4.477 9.999 10 9.999z"})}),(0,t.jsx)("path",{fill:"#fff4d6",d:"m313.601 58.712h-40c5.523 0 10 4.477 10 10v355.861l-.258 40.078 40.258-40.078v-355.861c0-5.523-4.477-10-10-10z"})]})})}),(0,t.jsx)("path",{fill:"#ffeec2",d:"m243.64 504.177v-70.253c0-5.523 4.477-10 10-10h69.96z"})]})]}),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{fill:"#fed23a",d:"m468.636 248.58-33.372.165v-50.826c0-9.183 7.463-16.662 16.673-16.708h.007c9.217-.046 16.693 7.371 16.693 16.562v50.807z"}),(0,t.jsx)("path",{fill:"#54b1ff",d:"m451.96 504.177c-10.362-10.277-16.196-24.263-16.208-38.857l-.062-73.973c0-.644.524-1.169 1.171-1.173l30.038-.149c.647-.003 1.171.517 1.171 1.161l.062 74.079c.012 14.531-5.749 28.472-16.015 38.756z"}),(0,t.jsx)("path",{fill:"#fdf385",d:"m451.959 469.333h-.01c-14.434.072-26.14-11.542-26.14-25.935v-213.527c0-6.778 5.477-12.283 12.255-12.316l27.626-.137c6.826-.034 12.378 5.49 12.378 12.316v213.436c0 14.38-11.687 26.091-26.109 26.163z"}),(0,t.jsx)("path",{fill:"#faee6e",d:"m465.69 217.417-23.769.118c6.037.79 10.708 5.94 10.708 12.198v213.437c0 9.823-5.455 18.397-13.507 22.87 3.79 2.115 8.164 3.317 12.826 3.293h.01c14.422-.072 26.109-11.783 26.109-26.163v-213.436c.001-6.826-5.551-12.351-12.377-12.317z"}),(0,t.jsx)("path",{fill:"#54b1ff",d:"m491.274 247.925-71.615.355c-7.305.036-13.226 5.968-13.226 13.248 0 7.281 5.921 13.153 13.226 13.117l58.389-.29v77.489c0 7.281 5.921 13.153 13.226 13.117 7.305-.036 13.226-5.968 13.226-13.248v-90.672c0-7.28-5.922-13.152-13.226-13.116z"}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#3da7ff",d:"m491.274 247.925-38.441.188-.167 26.311 25.381-.067v77.489c0 7.281 5.921 13.153 13.226 13.117 7.305-.036 13.226-5.968 13.226-13.248v-90.672c.001-7.282-5.921-13.154-13.225-13.118z"})})]})]}),(0,t.jsxs)("g",{fill:"#060606",children:[(0,t.jsx)("path",{d:"m373.147 20.122-295.44-19.761c-9.631-.638-17.984 6.665-18.629 16.293l-2.311 34.557h-39.267c-9.649 0-17.5 7.851-17.5 17.5v425.466c0 9.649 7.851 17.5 17.5 17.5h226.141c1.96 0 3.902-.801 5.292-2.185l34.138-33.987c.347.074.701.133 1.065.157l58.282 3.898c9.302.614 18.005-6.952 18.629-16.293l28.393-424.515c.639-9.528-6.766-17.993-16.293-18.63zm-122.006 465.902v-52.1c0-1.378 1.122-2.5 2.5-2.5h51.9zm94.939-23.757c-.244 1.51-1.131 2.286-2.66 2.327l-46.28-3.096 31.752-31.611c1.414-1.407 2.209-3.32 2.209-5.315v-355.86c0-9.649-7.851-17.5-17.5-17.5h-77.993c-9.697 0-9.697 15 0 15h77.993c1.379 0 2.5 1.122 2.5 2.5v347.712h-62.46c-9.649 0-17.5 7.851-17.5 17.5v62.753h-218.641c-1.378 0-2.5-1.122-2.5-2.5v-425.465c0-1.378 1.122-2.5 2.5-2.5h178.168c9.697 0 9.697-15 0-15h-123.868l2.244-33.556c.244-1.511 1.131-2.286 2.661-2.327l295.44 19.76c1.511.244 2.287 1.131 2.328 2.661z"}),(0,t.jsx)("path",{d:"m267.827 237.047h-204.553c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h204.553c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"}),(0,t.jsx)("path",{d:"m267.827 289.332h-204.553c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h204.553c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"}),(0,t.jsx)("path",{d:"m55.774 192.262c0 4.142 3.358 7.5 7.5 7.5h204.553c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-204.553c-4.142 0-7.5 3.358-7.5 7.5z"}),(0,t.jsx)("path",{d:"m91.807 139.977c0 4.142 3.358 7.5 7.5 7.5h132.487c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-132.487c-4.142 0-7.5 3.358-7.5 7.5z"}),(0,t.jsx)("path",{d:"m194.755 438.787c-13.489.036-26.978.065-40.467.086-4.534.007-9.067.013-13.6.016-8.215.006-13.75-1.643-15.59-10.679-1.556-7.64-12.364-6.613-14.464 0-5.19 16.337-13.774 9.936-18.582-1.053-4.797-10.963-6.027-23.233-8.122-34.9-1.54-8.573-14.506-6.17-14.732 1.994-.298 10.751-1.302 21.331-4.031 31.758-2.815 10.758-7.034 21.097-11.222 31.376-3.651 8.961 10.867 12.816 14.464 3.988 3.711-9.108 7.427-18.266 10.193-27.714 5.14 12.36 15.774 26.34 30.927 18.101 2.819-1.533 5.452-3.712 7.763-6.253 7.88 9.106 19.609 8.388 30.584 8.375 15.627-.02 31.254-.054 46.881-.095 9.649-.025 9.667-15.025-.002-15z"}),(0,t.jsx)("path",{d:"m505.932 246.439c-3.897-3.878-9.255-5.867-14.695-6.014l-5.668.028v-10.719c0-6.529-3.878-13.427-9.433-16.862v-15.098c0-31.069-48.372-30.934-48.372.146v15.1c-5.659 3.498-9.455 9.741-9.455 16.852v10.982c-24.966 1.7-25.037 39.745.028 41.232.16 33.575.152 66.6-.028 100.737-.049 9.414 14.949 9.966 15 .079.18-34.166.188-67.22.029-100.823l37.211-.185s-.048 110.848-.048 160.784c0 24.338-37.219 24.5-37.219-.253l.013-13.677c.585-9.68-14.387-10.583-14.973-.904v12.834c0 11 3.402 20.316 9.988 26.869.586 15.693 7.198 30.878 18.369 41.956 3.205 3.18 7.642 2.208 10.744-.182 11.365-11.385 17.769-26.394 18.169-42.414 4.951-4.931 9.908-9.896 9.908-26.896l.006-68.351c12.97 3.689 26.494-6.348 26.494-19.946v-90.672c0-5.523-2.155-10.709-6.068-14.603zm-72.623-5.727v-10.841c0-2.219 1.523-4.08 3.573-4.633l30.025-.149c.84.208 1.615.605 2.243 1.231.915.911 1.419 2.123 1.419 3.414v10.794zm18.671-52c4.604 0 9.155 4.514 9.155 9.062v12.166l-18.372.091v-12.111c.001-5.053 4.133-9.183 9.217-9.208zm-.011 303.901c-3.487-4.942-6.009-10.531-7.417-16.406 2.322.503 4.674.765 7.027.765 2.627 0 5.253-.326 7.839-.957-1.374 5.964-3.892 11.587-7.449 16.598zm45.031-140.899c0 7.101-11.452 7.66-11.452.131 0 0 .013-70.974.021-77.48.005-4.196-3.483-7.509-7.558-7.509l-58.389.29c-7.242 0-7.073-11.331.074-11.366l71.615-.355c3.463.295 5.359 2.168 5.688 5.617v90.672z"})]})]})})}),(0,t.jsx)("div",{class:"solu_title",children:(0,t.jsx)("div",{children:a.nombre+" "+a.apellido_paterno})}),(0,t.jsxs)("div",{className:"solu_description",children:[(0,t.jsx)("p",{children:a.edad}),(0,t.jsx)("button",{onClick:()=>{var s;return s=a.id_cliente,void e.push("/contenidoClienteLink?id=".concat(s))},class:"read_more_btn",type:"button",children:"Ver informacion"})]})]})})})})})},a.id))}),(0,t.jsxs)("div",{className:"pagination-buttons",children:[(0,t.jsx)("button",{className:"btns-sig-atr",onClick:function(){p>1&&j(p-1)},children:"Atr\xe1s"}),(0,t.jsx)("button",{className:"btns-sig-atr",onClick:function(){p<g&&j(p+1)},children:"Siguiente"})]}),(0,t.jsx)("div",{className:"btn-add",children:(0,t.jsxs)("button",{onClick:function(){r(!0)},className:"add",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125",stroke:"#fffffff",strokeWidth:"2"}),(0,t.jsx)("path",{d:"M17 15V18M17 21V18M17 18H14M17 18H20",stroke:"#fffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),"                    "]}),"ADD CLIENT"]})}),l&&(0,t.jsx)("div",{className:"modal-container",children:(0,t.jsxs)("div",{className:"modal-content1",children:[(0,t.jsx)("span",{className:"modal-close1",onClick:N,children:"\xd7"}),(0,t.jsx)("h2",{children:"Agregar Cliente"}),(0,t.jsx)("label",{children:"Nombre:"}),(0,t.jsx)("input",{type:"text",value:u.nombres,onChange:function(e){/\d/.test(e.target.value)||h({...u,nombres:e.target.value})}}),(0,t.jsx)("label",{children:"Apellido Paterno:"}),(0,t.jsx)("input",{type:"text",value:u.apellidoPaterno,onChange:function(e){/\d/.test(e.target.value)||h({...u,apellidoPaterno:e.target.value})}}),(0,t.jsx)("label",{children:"Apellido Materno:"}),(0,t.jsx)("input",{type:"text",value:u.apellidoMaterno,onChange:function(e){/\d/.test(e.target.value)||h({...u,apellidoMaterno:e.target.value})}}),(0,t.jsx)("label",{children:"Edad:"}),(0,t.jsx)("input",{type:"text",value:u.edad,onChange:function(e){/^\d+$/.test(e.target.value)&&h({...u,edad:e.target.value})}}),(0,t.jsx)("button",{type:"button",onClick:C,children:"Aceptar"})]})})]})};s(2738);var h=()=>{(0,n.useRouter)();let[e,a]=(0,c.useState)(""),[s,l]=(0,c.useState)(0),[i,r]=(0,c.useState)(1),[d,u]=(0,c.useState)(1),[h,x]=(0,c.useState)([]),m=async()=>{try{o.Z.get("http://50.16.134.143:3300/citas?page=".concat(i,"&&limit=12")).then(e=>{console.log(e);let a=e.data.data;for(let e in a)o.Z.get("http://50.16.134.143:3300/clientes/".concat(a[e].id_cliente)).then(s=>{console.log(s),a[e].cliente=s.data.cliente,console.log(a[e]),console.log(a[e].cliente),console.log(a[e].cliente.nombre)}).catch(e=>{console.log(e)});x(a);let s=e.data.totalPages;u(s)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};return(0,c.useEffect)(()=>{m().then(e=>console.log(h))},[]),(0,t.jsxs)("div",{className:"citas-contenedor",children:[(0,t.jsxs)("div",{className:"seccion-usuario",children:[(0,t.jsx)("h2",{children:"Citas disponibles "}),(0,t.jsxs)("h2",{children:["Hola, ","Jhair Alejandro Cruz Palacios"]})]}),(0,t.jsx)("div",{className:"contenedor-tarjetas",children:(null==h?void 0:h.length)>0&&h.slice(s,s+9).map((e,a)=>{var s,c;return(0,t.jsxs)("div",{className:"tarjeta-notificacion",children:[(0,t.jsx)("div",{className:"brillo-tarjeta"}),(0,t.jsx)("div",{className:"bordo-brillo-tarjeta"}),(0,t.jsxs)("div",{className:"titulo-notificacion",children:["Motivo: ",h[a].motivo]}),(0,t.jsxs)("div",{className:"cuerpo-notificacion",children:["Fecha: ",e.fecha_cita]}),(0,t.jsxs)("div",{className:"titulo-notificacion",children:["Nombre: ",null===(s=h[a].cliente)||void 0===s?void 0:s.nombre]}),(0,t.jsxs)("div",{className:"cuerpo-notificacion",children:["Edad: ",null===(c=h[a].cliente)||void 0===c?void 0:c.edad]})]},a)})}),(0,t.jsxs)("div",{className:"pagination-button",children:[s>0&&(0,t.jsx)("button",{className:"btns-sig-atr",onClick:function(){l(s-9)},children:"Atr\xe1s"}),s+9<10&&(0,t.jsx)("button",{className:"btns-sig-atr",onClick:function(){l(s+9)},children:"Siguiente"})]})]})},x=s(5747);s(1810),s(8538);var m=s(6278),p=s(1674),j=()=>(0,t.jsx)("div",{className:"calendario-container",children:(0,t.jsx)(m.Z,{plugins:[p.Z],initialView:"dayGridMonth"})});s(9082);var g=()=>{let e=(0,n.useRouter)(),[a,s]=(0,c.useState)(null),[l,r]=(0,c.useState)("Manuel Arturo"),[d,u]=(0,c.useState)("backend developer"),[h,x]=(0,c.useState)("Worker"),[m,p]=(0,c.useState)(!1),[j,g]=(0,c.useState)(l),[v,f]=(0,c.useState)(d),[b,N]=(0,c.useState)(h),[C,y]=(0,c.useState)(0),k=async()=>{try{await o.Z.get("http://50.16.134.143:3300/usuarios/cookie",{withCredentials:!0}).then(e=>{console.log(e);let a=e.data.id;y(a)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};return(0,c.useEffect)(()=>{k().then(e=>console.log("Id cargado"))},[]),(0,t.jsxs)("div",{className:"container-Configuracion",children:[(0,t.jsx)("h1",{className:"titulo",children:"configuracion del perfil"}),(0,t.jsxs)("div",{className:"centered-card",children:[(0,t.jsx)("div",{className:"carduser",children:(0,t.jsxs)("div",{className:"card-info",children:[(0,t.jsx)("div",{className:"card-avatar"}),(0,t.jsx)("div",{className:"card-title",children:l}),(0,t.jsx)("div",{className:"card-subtitle",children:d}),(0,t.jsx)("div",{className:"card-subtitle",children:h})]})}),(0,t.jsxs)("div",{className:"card-btns",children:[(0,t.jsx)("button",{onClick:function(){i().fire({title:"\xbfEst\xe1s seguro?",text:"Esta acci\xf3n eliminar\xe1 tu cuenta con toda tu informaci\xf3n. \xbfEst\xe1s seguro de que deseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, eliminar",cancelButtonText:"Cancelar"}).then(a=>{if(a.isConfirmed){try{o.Z.delete("http://50.16.134.143:3300/usuarios/".concat(C)).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}i().fire("Gracias por probar nuestro software","","success"),setTimeout(()=>{e.push("/contentLink")},2e3)}})},className:"btnOption",children:"Eliminar Cuenta"}),(0,t.jsx)("button",{onClick:function(){p(!0)},className:"btnOption",children:"Modificar Cuenta"})]}),m&&(0,t.jsxs)("div",{className:"edit-popup",children:[(0,t.jsx)("input",{type:"text",value:j,onChange:e=>g(e.target.value)}),(0,t.jsx)("input",{type:"text",value:v,onChange:e=>f(e.target.value)}),(0,t.jsx)("input",{type:"text",value:b,onChange:e=>N(e.target.value)}),(0,t.jsx)("button",{onClick:function(){r(j),u(v),x(b);try{o.Z.patch("http://50.16.134.143:3300/usuarios/".concat(C),{nombre:j,correo:v,password:b}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}p(!1)},children:"Guardar Cambios"})]})]})]})},v=s(9585),f=s(6691),b=s.n(f),N=()=>{let e=(0,n.useRouter)(),[a,s]=(0,c.useState)(null);function l(e){switch(e){case"pacientes":s((0,t.jsx)(u,{}));break;case"citas":s((0,t.jsx)(h,{}));break;case"expedientes":break;case"addCitas":s((0,t.jsx)(x.Z,{}));break;case"calendario":s((0,t.jsx)(j,{}));break;case"configuracion":s((0,t.jsx)(g,{}));break;case"guiaUsuario":s((0,t.jsx)(v.default,{}));break;default:s(null)}}return(0,c.useEffect)(()=>{l("pacientes")},[]),(0,t.jsxs)("div",{className:"container-home",children:[(0,t.jsxs)("section",{className:"section-left",children:[(0,t.jsx)(b(),{className:"imgLogo",src:"/assets/Aura-logo2.png",alt:"AURA-logo.png",width:800,height:500}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("form",{className:"botonesPrincipales",children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"radio",defaultChecked:!0}),(0,t.jsx)("span",{onClick:()=>{l("pacientes")},children:"Clientes"})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"radio"}),(0,t.jsx)("span",{onClick:()=>{l("citas")},children:"Citas"})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"radio"}),(0,t.jsx)("span",{onClick:()=>{l("addCitas")},children:"Agregar cita"})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{type:"radio",name:"radio"}),(0,t.jsx)("span",{onClick:()=>{l("guiaUsuario")},children:"Guia de Usuario"})]}),(0,t.jsxs)("label",{className:"inferior",children:[(0,t.jsx)("input",{type:"radio",name:"radio"}),(0,t.jsx)("span",{onClick:()=>{l("configuracion")},children:"Configuracion"})]}),(0,t.jsxs)("label",{className:"inferior",children:[(0,t.jsx)("input",{type:"radio",name:"radio"}),(0,t.jsx)("span",{onClick:function(){i().fire({title:"\xbfEst\xe1s seguro?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, cerrar sesion",cancelButtonText:"Cancelar"}).then(a=>{a.isConfirmed&&(i().fire("Adios :)","","success"),setTimeout(()=>{e.push("/contentLink")},2e3))})},children:"Cerrar Sesion"})]})]})})]}),(0,t.jsx)("div",{className:"separator"}),(0,t.jsx)("section",{className:"section-right",children:a})]})}},1534:function(){},1810:function(){},2738:function(){},833:function(){},9082:function(){},9720:function(){},7216:function(){},8578:function(){}},function(e){e.O(0,[554,630,691,340,491,971,864,744],function(){return e(e.s=7810)}),_N_E=e.O()}]);