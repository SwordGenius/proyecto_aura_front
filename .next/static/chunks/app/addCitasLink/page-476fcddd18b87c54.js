(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[251],{3640:function(e,t,l){Promise.resolve().then(l.bind(l,7757))},7757:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return s}});var a=l(7437),n=l(5747);function s(){return(0,a.jsx)(n.Z,{})}},5747:function(e,t,l){"use strict";var a=l(7437),n=l(2265),s=l(4033),o=l(6820),c=l.n(o);l(1534);var i=l(2173);t.Z=()=>{(0,s.useRouter)();let[e,t]=(0,n.useState)(["Cliente 1","Cliente 2","Cliente 3"]),[l,o]=(0,n.useState)(""),[r,d]=(0,n.useState)(""),[u,h]=(0,n.useState)(!1),[x,p]=(0,n.useState)(!1),[j,g]=(0,n.useState)(0),[m,v]=(0,n.useState)({nombres:"",apellido_P:"",apellido_M:"",edad:""}),C=(e,t)=>{e.preventDefault(),g(t.id_cliente),console.log(j)},b=async()=>{try{await i.Z.get("http://50.16.134.143:3300/clientes",{withCredentials:!0}).then(e=>{console.log(e);let l=e.data.data;t(l),console.log(l)}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};(0,n.useEffect)(()=>{b().then(e=>console.log("Clientes cargados"))},[m]);let f=()=>{h(!1)},N=()=>{p(!1)};return(0,a.jsxs)("div",{className:"query-container",children:[(0,a.jsxs)("div",{className:"user",children:[(0,a.jsx)("h2",{children:"Agregar citas"}),(0,a.jsxs)("h2",{children:["Hola, ","Jhair Alejandro Cruz Palacios"]})]}),(0,a.jsx)("div",{className:"center-container",children:(0,a.jsx)("div",{className:"contenedorForm",children:(0,a.jsxs)("form",{className:"form",children:[(0,a.jsx)("p",{className:"title",children:"Ingrese los datos de la cita"}),(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{className:"input",type:"text",placeholder:"",required:"",value:l,onChange:e=>o(e.target.value)}),(0,a.jsx)("span",{children:"Motivo"})]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{className:"input",type:"date",placeholder:"xx/xx/xxxx",required:"",value:r,onChange:e=>d(e.target.value)}),(0,a.jsx)("span",{children:"Fecha"})]}),(0,a.jsx)("button",{type:"button",className:"submit",onClick:()=>{p(!1),h(!0)},children:"Seleccionar Cliente"}),(0,a.jsx)("button",{onClick:e=>{e.preventDefault();try{i.Z.post("http://50.16.134.143:3300/citas",{motivo:l,fecha:r,id_cliente:j},{withCredentials:!0}).then(e=>{console.log(e),c().fire("Exito","Su cita se a guardado","success")}).catch(e=>{console.log(e),c().fire("Error","Su cita no se a guardado","error")})}catch(e){console.log(e)}},className:"submit",children:"Agregar Cita"}),(0,a.jsx)("button",{type:"button",className:"submit",onClick:()=>{h(!1),p(!0)},children:"Agregar Cliente"}),u&&(0,a.jsx)("div",{className:"modal-container",children:(0,a.jsxs)("div",{className:"modal-content1",children:[(0,a.jsx)("span",{className:"modal-close1",onClick:f,children:"\xd7"}),(0,a.jsx)("p",{children:"Lista de clientes"}),(0,a.jsx)("ul",{children:e.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("li",{children:e.nombre},t),(0,a.jsx)("button",{onClick:t=>C(t,e),children:"Seleccionar"})]},t))}),(0,a.jsx)("button",{type:"button",onClick:()=>{N()},children:"Aceptar"})]})}),x&&(0,a.jsx)("div",{className:"modal-container",children:(0,a.jsxs)("div",{className:"modal-content1",children:[(0,a.jsx)("span",{className:"modal-close1",onClick:N,children:"\xd7"}),(0,a.jsx)("h2",{children:"Agregar Cliente"}),(0,a.jsx)("label",{children:"Nombres:"}),(0,a.jsx)("input",{type:"text",value:m.nombres,onChange:e=>{v({...m,nombres:e.target.value})}}),(0,a.jsx)("label",{children:"Apellido Paterno:"}),(0,a.jsx)("input",{type:"text",value:m.apellidoPaterno,onChange:e=>{v({...m,apellidoPaterno:e.target.value})}}),(0,a.jsx)("label",{children:"Apellido Materno:"}),(0,a.jsx)("input",{type:"text",value:m.apellidoMaterno,onChange:e=>{v({...m,apellidoMaterno:e.target.value})}}),(0,a.jsx)("label",{children:"Edad:"}),(0,a.jsx)("input",{type:"text",value:m.edad,onChange:e=>{v({...m,edad:e.target.value})}}),(0,a.jsx)("button",{type:"button",onClick:()=>{try{i.Z.post("http://50.16.134.143:3300/clientes",m,{withCredentials:!0}).then(e=>{console.log(e),c().fire("Exito","Su cliente se a guardado","success"),g(e.data.id)}).catch(e=>{console.log(e),c().fire("Error","Su cliente no se a guardado","error")})}catch(e){console.log(e)}f()},children:"Aceptar"})]})})]})})})]})}},1534:function(){}},function(e){e.O(0,[630,340,971,864,744],function(){return e(e.s=3640)}),_N_E=e.O()}]);