(()=>{var e={};e.id=409,e.ids=[409],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},4300:e=>{"use strict";e.exports=require("buffer")},2081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3590:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>r.a,__next_app__:()=>x,originalPathname:()=>h,pages:()=>u,routeModule:()=>p,tree:()=>d});var a=t(3137),i=t(4647),n=t(4183),r=t.n(n),c=t(1775),o={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);t.d(s,o);let l=a.AppPageRouteModule,d=["",{children:["homePageLink",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8707)),"C:\\Users\\sword\\WebstormProjects\\proyecto_aura_front\\src\\app\\homePageLink\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9197)),"C:\\Users\\sword\\WebstormProjects\\proyecto_aura_front\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\sword\\WebstormProjects\\proyecto_aura_front\\src\\app\\homePageLink\\page.js"],h="/homePageLink/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new l({definition:{kind:i.x.APP_PAGE,page:"/homePageLink/page",pathname:"/homePageLink",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6316:(e,s,t)=>{Promise.resolve().then(t.bind(t,1213))},1213:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>C});var a=t(80),i=t(9885),n=t(7114);t(9434),t(4639);var r=t(9322),c=t.n(r),o=t(4997),l=t(2068),d=t.n(l);let u=()=>{let e=(0,n.useRouter)(),[s,t]=(0,i.useState)(0),[r,l]=(0,i.useState)(!1),[u,h]=(0,i.useState)({nombres:"",apellidoPaterno:"",apellidoMaterno:"",edad:""}),[x,p]=(0,i.useState)([]),[m,j]=(0,i.useState)(1),[g,f]=(0,i.useState)(0),v=new(d())("85de58124b369482bbb6",{cluster:"us2"}),b=async()=>{try{await o.Z.get("http://50.16.134.143:3300/clientes?page="+m+"&&limit=6",{withCredentials:!0}).then(e=>{console.log(e);let s=e.data.data,t=e.data.totalPages;p(s),f(t),console.log(s)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};function C(){l(!1)}async function N(){try{AxiosDefault.withCredentials,await o.Z.post("http://50.16.134.143:3300/clientes",{nombre:u.nombres,apellido_P:u.apellidoPaterno,apellido_M:u.apellidoMaterno,edad:u.edad},{withCredentials:!0}).then(async e=>{console.log(e)}).catch(async e=>{console.log(e)}),await o.Z.post("http://50.16.134.143:3300/message",{message:"Se ha registrado un nuevo cliente",username:"Admin"},{withCredentials:!0}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}catch(e){console.log(e),await c().fire({icon:"error",title:"Error",text:"Error al registrar cliente"})}C()}return(0,i.useEffect)(()=>{let e=v.subscribe("clientes");e.bind("agregar",e=>{c().fire({icon:"success",title:"Success",text:e.message})}),b().then(e=>console.log("Clientes cargados"))},[m]),(0,a.jsxs)("div",{className:"container-pacientes",children:[(0,a.jsxs)("div",{className:"group",children:[a.jsx("svg",{className:"icon","aria-hidden":"true",viewBox:"0 0 24 24",children:a.jsx("g",{children:a.jsx("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})}),a.jsx("input",{placeholder:"Search",type:"search",className:"input"})]}),a.jsx("div",{className:"container-cards",children:x.slice(s,s+6).map(s=>a.jsx("div",{className:"section_our_solution",children:a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-lg-12 col-md-12 col-sm-12",children:a.jsx("div",{className:"our_solution_category",children:a.jsx("div",{className:"solution_cards_box",children:(0,a.jsxs)("div",{className:"solution_card",children:[a.jsx("div",{className:"hover_color_bubble"}),a.jsx("div",{className:"so_top_icon",children:s.fotografia?a.jsx("img",{src:s.fotografia,alt:"..."}):a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",viewBox:"0 0 512 512",height:"50",id:"Layer_1",children:(0,a.jsxs)("g",{children:[(0,a.jsxs)("g",{children:[(0,a.jsxs)("g",{children:[a.jsx("g",{children:a.jsx("path",{fill:"#fae19e",d:"m47.478 452.317 295.441 19.76c5.511.369 10.277-3.8 10.645-9.31l28.393-424.517c.369-5.511-3.8-10.276-9.31-10.645l-295.441-19.76c-5.511-.369-10.276 3.8-10.645 9.31l-28.394 424.517c-.368 5.511 3.8 10.277 9.311 10.645z"})}),(0,a.jsxs)("g",{children:[a.jsx("g",{children:a.jsx("g",{children:(0,a.jsxs)("g",{children:[a.jsx("g",{children:a.jsx("path",{fill:"#fff9e9",d:"m17.5 504.177h226.14l79.96-79.605v-355.86c0-5.523-4.477-10-10-10h-296.1c-5.523 0-10 4.477-10 10v425.466c0 5.522 4.477 9.999 10 9.999z"})}),a.jsx("path",{fill:"#fff4d6",d:"m313.601 58.712h-40c5.523 0 10 4.477 10 10v355.861l-.258 40.078 40.258-40.078v-355.861c0-5.523-4.477-10-10-10z"})]})})}),a.jsx("path",{fill:"#ffeec2",d:"m243.64 504.177v-70.253c0-5.523 4.477-10 10-10h69.96z"})]})]}),(0,a.jsxs)("g",{children:[a.jsx("path",{fill:"#fed23a",d:"m468.636 248.58-33.372.165v-50.826c0-9.183 7.463-16.662 16.673-16.708h.007c9.217-.046 16.693 7.371 16.693 16.562v50.807z"}),a.jsx("path",{fill:"#54b1ff",d:"m451.96 504.177c-10.362-10.277-16.196-24.263-16.208-38.857l-.062-73.973c0-.644.524-1.169 1.171-1.173l30.038-.149c.647-.003 1.171.517 1.171 1.161l.062 74.079c.012 14.531-5.749 28.472-16.015 38.756z"}),a.jsx("path",{fill:"#fdf385",d:"m451.959 469.333h-.01c-14.434.072-26.14-11.542-26.14-25.935v-213.527c0-6.778 5.477-12.283 12.255-12.316l27.626-.137c6.826-.034 12.378 5.49 12.378 12.316v213.436c0 14.38-11.687 26.091-26.109 26.163z"}),a.jsx("path",{fill:"#faee6e",d:"m465.69 217.417-23.769.118c6.037.79 10.708 5.94 10.708 12.198v213.437c0 9.823-5.455 18.397-13.507 22.87 3.79 2.115 8.164 3.317 12.826 3.293h.01c14.422-.072 26.109-11.783 26.109-26.163v-213.436c.001-6.826-5.551-12.351-12.377-12.317z"}),a.jsx("path",{fill:"#54b1ff",d:"m491.274 247.925-71.615.355c-7.305.036-13.226 5.968-13.226 13.248 0 7.281 5.921 13.153 13.226 13.117l58.389-.29v77.489c0 7.281 5.921 13.153 13.226 13.117 7.305-.036 13.226-5.968 13.226-13.248v-90.672c0-7.28-5.922-13.152-13.226-13.116z"}),a.jsx("g",{children:a.jsx("path",{fill:"#3da7ff",d:"m491.274 247.925-38.441.188-.167 26.311 25.381-.067v77.489c0 7.281 5.921 13.153 13.226 13.117 7.305-.036 13.226-5.968 13.226-13.248v-90.672c.001-7.282-5.921-13.154-13.225-13.118z"})})]})]}),(0,a.jsxs)("g",{fill:"#060606",children:[a.jsx("path",{d:"m373.147 20.122-295.44-19.761c-9.631-.638-17.984 6.665-18.629 16.293l-2.311 34.557h-39.267c-9.649 0-17.5 7.851-17.5 17.5v425.466c0 9.649 7.851 17.5 17.5 17.5h226.141c1.96 0 3.902-.801 5.292-2.185l34.138-33.987c.347.074.701.133 1.065.157l58.282 3.898c9.302.614 18.005-6.952 18.629-16.293l28.393-424.515c.639-9.528-6.766-17.993-16.293-18.63zm-122.006 465.902v-52.1c0-1.378 1.122-2.5 2.5-2.5h51.9zm94.939-23.757c-.244 1.51-1.131 2.286-2.66 2.327l-46.28-3.096 31.752-31.611c1.414-1.407 2.209-3.32 2.209-5.315v-355.86c0-9.649-7.851-17.5-17.5-17.5h-77.993c-9.697 0-9.697 15 0 15h77.993c1.379 0 2.5 1.122 2.5 2.5v347.712h-62.46c-9.649 0-17.5 7.851-17.5 17.5v62.753h-218.641c-1.378 0-2.5-1.122-2.5-2.5v-425.465c0-1.378 1.122-2.5 2.5-2.5h178.168c9.697 0 9.697-15 0-15h-123.868l2.244-33.556c.244-1.511 1.131-2.286 2.661-2.327l295.44 19.76c1.511.244 2.287 1.131 2.328 2.661z"}),a.jsx("path",{d:"m267.827 237.047h-204.553c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h204.553c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"}),a.jsx("path",{d:"m267.827 289.332h-204.553c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h204.553c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"}),a.jsx("path",{d:"m55.774 192.262c0 4.142 3.358 7.5 7.5 7.5h204.553c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-204.553c-4.142 0-7.5 3.358-7.5 7.5z"}),a.jsx("path",{d:"m91.807 139.977c0 4.142 3.358 7.5 7.5 7.5h132.487c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-132.487c-4.142 0-7.5 3.358-7.5 7.5z"}),a.jsx("path",{d:"m194.755 438.787c-13.489.036-26.978.065-40.467.086-4.534.007-9.067.013-13.6.016-8.215.006-13.75-1.643-15.59-10.679-1.556-7.64-12.364-6.613-14.464 0-5.19 16.337-13.774 9.936-18.582-1.053-4.797-10.963-6.027-23.233-8.122-34.9-1.54-8.573-14.506-6.17-14.732 1.994-.298 10.751-1.302 21.331-4.031 31.758-2.815 10.758-7.034 21.097-11.222 31.376-3.651 8.961 10.867 12.816 14.464 3.988 3.711-9.108 7.427-18.266 10.193-27.714 5.14 12.36 15.774 26.34 30.927 18.101 2.819-1.533 5.452-3.712 7.763-6.253 7.88 9.106 19.609 8.388 30.584 8.375 15.627-.02 31.254-.054 46.881-.095 9.649-.025 9.667-15.025-.002-15z"}),a.jsx("path",{d:"m505.932 246.439c-3.897-3.878-9.255-5.867-14.695-6.014l-5.668.028v-10.719c0-6.529-3.878-13.427-9.433-16.862v-15.098c0-31.069-48.372-30.934-48.372.146v15.1c-5.659 3.498-9.455 9.741-9.455 16.852v10.982c-24.966 1.7-25.037 39.745.028 41.232.16 33.575.152 66.6-.028 100.737-.049 9.414 14.949 9.966 15 .079.18-34.166.188-67.22.029-100.823l37.211-.185s-.048 110.848-.048 160.784c0 24.338-37.219 24.5-37.219-.253l.013-13.677c.585-9.68-14.387-10.583-14.973-.904v12.834c0 11 3.402 20.316 9.988 26.869.586 15.693 7.198 30.878 18.369 41.956 3.205 3.18 7.642 2.208 10.744-.182 11.365-11.385 17.769-26.394 18.169-42.414 4.951-4.931 9.908-9.896 9.908-26.896l.006-68.351c12.97 3.689 26.494-6.348 26.494-19.946v-90.672c0-5.523-2.155-10.709-6.068-14.603zm-72.623-5.727v-10.841c0-2.219 1.523-4.08 3.573-4.633l30.025-.149c.84.208 1.615.605 2.243 1.231.915.911 1.419 2.123 1.419 3.414v10.794zm18.671-52c4.604 0 9.155 4.514 9.155 9.062v12.166l-18.372.091v-12.111c.001-5.053 4.133-9.183 9.217-9.208zm-.011 303.901c-3.487-4.942-6.009-10.531-7.417-16.406 2.322.503 4.674.765 7.027.765 2.627 0 5.253-.326 7.839-.957-1.374 5.964-3.892 11.587-7.449 16.598zm45.031-140.899c0 7.101-11.452 7.66-11.452.131 0 0 .013-70.974.021-77.48.005-4.196-3.483-7.509-7.558-7.509l-58.389.29c-7.242 0-7.073-11.331.074-11.366l71.615-.355c3.463.295 5.359 2.168 5.688 5.617v90.672z"})]})]})})}),a.jsx("div",{class:"solu_title",children:a.jsx("div",{children:s.nombre+" "+s.apellido_paterno})}),(0,a.jsxs)("div",{className:"solu_description",children:[a.jsx("p",{children:s.edad}),a.jsx("button",{onClick:()=>{var t;return t=s.id_cliente,void e.push(`/contenidoClienteLink?id=${t}`)},class:"read_more_btn",type:"button",children:"Ver informacion"})]})]})})})})})},s.id))}),(0,a.jsxs)("div",{className:"pagination-buttons",children:[a.jsx("button",{className:"btns-sig-atr",onClick:function(){m>1&&j(m-1)},children:"Atr\xe1s"}),a.jsx("button",{className:"btns-sig-atr",onClick:function(){m<g&&j(m+1)},children:"Siguiente"})]}),a.jsx("div",{className:"btn-add",children:(0,a.jsxs)("button",{onClick:function(){l(!0)},className:"add",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true",children:[a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125",stroke:"#fffffff",strokeWidth:"2"}),a.jsx("path",{d:"M17 15V18M17 21V18M17 18H14M17 18H20",stroke:"#fffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),"                    "]}),"ADD CLIENT"]})}),r&&a.jsx("div",{className:"modal-container",children:(0,a.jsxs)("div",{className:"modal-content1",children:[a.jsx("span",{className:"modal-close1",onClick:C,children:"\xd7"}),a.jsx("h2",{children:"Agregar Cliente"}),a.jsx("label",{children:"Nombre:"}),a.jsx("input",{type:"text",value:u.nombres,onChange:function(e){/\d/.test(e.target.value)||h({...u,nombres:e.target.value})}}),a.jsx("label",{children:"Apellido Paterno:"}),a.jsx("input",{type:"text",value:u.apellidoPaterno,onChange:function(e){/\d/.test(e.target.value)||h({...u,apellidoPaterno:e.target.value})}}),a.jsx("label",{children:"Apellido Materno:"}),a.jsx("input",{type:"text",value:u.apellidoMaterno,onChange:function(e){/\d/.test(e.target.value)||h({...u,apellidoMaterno:e.target.value})}}),a.jsx("label",{children:"Edad:"}),a.jsx("input",{type:"text",value:u.edad,onChange:function(e){/^\d+$/.test(e.target.value)&&h({...u,edad:e.target.value})}}),a.jsx("button",{type:"button",onClick:N,children:"Aceptar"})]})})]})};t(3984);let h=()=>{(0,n.useRouter)();let[e,s]=(0,i.useState)(""),[t,r]=(0,i.useState)(0),[c,l]=(0,i.useState)(1),[d,u]=(0,i.useState)(1),[h,x]=(0,i.useState)([]),p=async()=>{try{o.Z.get(`http://50.16.134.143:3300/citas?page=${c}&&limit=12`).then(e=>{console.log(e);let s=e.data.data;for(let e in s)o.Z.get(`http://50.16.134.143:3300/clientes/${s[e].id_cliente}`).then(t=>{console.log(t),s[e].cliente=t.data.cliente,console.log(s[e]),console.log(s[e].cliente),console.log(s[e].cliente.nombre)}).catch(e=>{console.log(e)});x(s);let t=e.data.totalPages;u(t)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};return(0,i.useEffect)(()=>{p().then(e=>console.log(h))},[]),(0,a.jsxs)("div",{className:"citas-contenedor",children:[(0,a.jsxs)("div",{className:"seccion-usuario",children:[a.jsx("h2",{children:"Citas disponibles "}),(0,a.jsxs)("h2",{children:["Hola, ","Jhair Alejandro Cruz Palacios"]})]}),a.jsx("div",{className:"contenedor-tarjetas",children:h?.length>0&&h.slice(t,t+9).map((e,s)=>(0,a.jsxs)("div",{className:"tarjeta-notificacion",children:[a.jsx("div",{className:"brillo-tarjeta"}),a.jsx("div",{className:"bordo-brillo-tarjeta"}),(0,a.jsxs)("div",{className:"titulo-notificacion",children:["Motivo: ",h[s].motivo]}),(0,a.jsxs)("div",{className:"cuerpo-notificacion",children:["Fecha: ",e.fecha_cita]}),(0,a.jsxs)("div",{className:"titulo-notificacion",children:["Nombre: ",h[s].cliente?.nombre]}),(0,a.jsxs)("div",{className:"cuerpo-notificacion",children:["Edad: ",h[s].cliente?.edad]})]},s))}),(0,a.jsxs)("div",{className:"pagination-button",children:[t>0&&a.jsx("button",{className:"btns-sig-atr",onClick:function(){r(t-9)},children:"Atr\xe1s"}),t+9<10&&a.jsx("button",{className:"btns-sig-atr",onClick:function(){r(t+9)},children:"Siguiente"})]})]})};var x=t(9404);t(8018),t(6648);var p=t(5724),m=t(5414);let j=()=>a.jsx("div",{className:"calendario-container",children:a.jsx(p.Z,{plugins:[m.Z],initialView:"dayGridMonth"})});t(7859);let g=()=>{let e=(0,n.useRouter)(),[s,t]=(0,i.useState)(null),[r,l]=(0,i.useState)("Manuel Arturo"),[d,u]=(0,i.useState)("backend developer"),[h,x]=(0,i.useState)("Worker"),[p,m]=(0,i.useState)(!1),[j,g]=(0,i.useState)(r),[f,v]=(0,i.useState)(d),[b,C]=(0,i.useState)(h),[N,k]=(0,i.useState)(0),y=async()=>{try{await o.Z.get("http://50.16.134.143:3300/usuarios/cookie",{withCredentials:!0}).then(e=>{console.log(e);let s=e.data.id;k(s)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};return(0,i.useEffect)(()=>{y().then(e=>console.log("Id cargado"))},[]),(0,a.jsxs)("div",{className:"container-Configuracion",children:[a.jsx("h1",{className:"titulo",children:"configuracion del perfil"}),(0,a.jsxs)("div",{className:"centered-card",children:[a.jsx("div",{className:"carduser",children:(0,a.jsxs)("div",{className:"card-info",children:[a.jsx("div",{className:"card-avatar"}),a.jsx("div",{className:"card-title",children:r}),a.jsx("div",{className:"card-subtitle",children:d}),a.jsx("div",{className:"card-subtitle",children:h})]})}),(0,a.jsxs)("div",{className:"card-btns",children:[a.jsx("button",{onClick:function(){c().fire({title:"\xbfEst\xe1s seguro?",text:"Esta acci\xf3n eliminar\xe1 tu cuenta con toda tu informaci\xf3n. \xbfEst\xe1s seguro de que deseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, eliminar",cancelButtonText:"Cancelar"}).then(s=>{if(s.isConfirmed){try{o.Z.delete(`http://50.16.134.143:3300/usuarios/${N}`).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}c().fire("Gracias por probar nuestro software","","success"),setTimeout(()=>{e.push("/contentLink")},2e3)}})},className:"btnOption",children:"Eliminar Cuenta"}),a.jsx("button",{onClick:function(){m(!0)},className:"btnOption",children:"Modificar Cuenta"})]}),p&&(0,a.jsxs)("div",{className:"edit-popup",children:[a.jsx("input",{type:"text",value:j,onChange:e=>g(e.target.value)}),a.jsx("input",{type:"text",value:f,onChange:e=>v(e.target.value)}),a.jsx("input",{type:"text",value:b,onChange:e=>C(e.target.value)}),a.jsx("button",{onClick:function(){l(j),u(f),x(b);try{o.Z.patch(`http://50.16.134.143:3300/usuarios/${N}`,{nombre:j,correo:f,password:b}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}m(!1)},children:"Guardar Cambios"})]})]})]})};var f=t(4503),v=t(2451),b=t.n(v);let C=()=>{let e=(0,n.useRouter)(),[s,t]=(0,i.useState)(null);function r(e){switch(e){case"pacientes":t(a.jsx(u,{}));break;case"citas":t(a.jsx(h,{}));break;case"expedientes":break;case"addCitas":t(a.jsx(x.Z,{}));break;case"calendario":t(a.jsx(j,{}));break;case"configuracion":t(a.jsx(g,{}));break;case"guiaUsuario":t(a.jsx(f.default,{}));break;default:t(null)}}return(0,i.useEffect)(()=>{r("pacientes")},[]),(0,a.jsxs)("div",{className:"container-home",children:[(0,a.jsxs)("section",{className:"section-left",children:[a.jsx(b(),{className:"imgLogo",src:"/assets/Aura-logo2.png",alt:"AURA-logo.png",width:800,height:500}),a.jsx("div",{className:"container",children:(0,a.jsxs)("form",{className:"botonesPrincipales",children:[(0,a.jsxs)("label",{children:[a.jsx("input",{type:"radio",name:"radio",defaultChecked:!0}),a.jsx("span",{onClick:()=>{r("pacientes")},children:"Clientes"})]}),(0,a.jsxs)("label",{children:[a.jsx("input",{type:"radio",name:"radio"}),a.jsx("span",{onClick:()=>{r("citas")},children:"Citas"})]}),(0,a.jsxs)("label",{children:[a.jsx("input",{type:"radio",name:"radio"}),a.jsx("span",{onClick:()=>{r("addCitas")},children:"Agregar cita"})]}),(0,a.jsxs)("label",{children:[a.jsx("input",{type:"radio",name:"radio"}),a.jsx("span",{onClick:()=>{r("guiaUsuario")},children:"Guia de Usuario"})]}),(0,a.jsxs)("label",{className:"inferior",children:[a.jsx("input",{type:"radio",name:"radio"}),a.jsx("span",{onClick:()=>{r("configuracion")},children:"Configuracion"})]}),(0,a.jsxs)("label",{className:"inferior",children:[a.jsx("input",{type:"radio",name:"radio"}),a.jsx("span",{onClick:function(){c().fire({title:"\xbfEst\xe1s seguro?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, cerrar sesion",cancelButtonText:"Cancelar"}).then(s=>{s.isConfirmed&&(c().fire("Adios :)","","success"),setTimeout(()=>{e.push("/contentLink")},2e3))})},children:"Cerrar Sesion"})]})]})})]}),a.jsx("div",{className:"separator"}),a.jsx("section",{className:"section-right",children:s})]})}},8707:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var a=t(8144),i=t(7536);let n=(0,i.createProxy)(String.raw`C:\Users\sword\WebstormProjects\proyecto_aura_front\src\app\components\HomePage.js`),{__esModule:r,$$typeof:c}=n,o=n.default;function l(){return a.jsx(o,{})}},8018:()=>{},3984:()=>{},4639:()=>{},7859:()=>{},9434:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[683,669,866,451,322,578,349,185,865,404],()=>t(3590));module.exports=a})();