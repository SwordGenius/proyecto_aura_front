(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[900],{260:function(e,s,t){Promise.resolve().then(t.bind(t,8857))},8857:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var c=t(7437),n=t(2265),a=t(4033);t(6595);var i=t(6691),l=t.n(i),o=t(6820),r=t.n(o);t(1396);var d=t(2173),u=e=>{let{id:s}=e,t=(0,a.useRouter)(),[i,o]=(0,n.useState)(""),[u,h]=(0,n.useState)("Mantenimiento de pc"),[x,m]=(0,n.useState)(!1),[g,j]=(0,n.useState)(u),[f,N]=(0,n.useState)({nombre:"",edad:"",notas:""}),p=async()=>{try{let e=await d.Z.get("http://50.16.134.143:3300/clientes/".concat(s)),t=e.data.cliente;console.log(t),t.notas="",N(t)}catch(e){console.log(e)}};return(0,n.useEffect)(()=>{p().then(e=>console.log("cliente cargado"))},[u]),(0,c.jsxs)("div",{className:"container-cliente",children:[(0,c.jsx)("button",{onClick:function(){t.push("/homePageLink")},className:"custom-button",children:"Regresar"}),(0,c.jsx)("div",{className:"card-information",children:(0,c.jsxs)("div",{className:"cardCliente",children:[(0,c.jsx)("div",{className:"card__img",children:(0,c.jsx)(l(),{src:"/assets/client.svg",alt:" cliente.png",width:800,height:500})}),(0,c.jsxs)("div",{className:"card__descr-wrapper",children:[(0,c.jsx)("p",{className:"card__title",children:f.nombre}),x?(0,c.jsx)("input",{type:"text",value:g,onChange:e=>j(e.target.value)}):(0,c.jsx)("p",{className:"card__descr",children:f.edad}),(0,c.jsxs)("div",{className:"card__links",children:[(0,c.jsx)("div",{children:x?(0,c.jsx)("a",{onClick:function(){h(g);try{f.edad=g,N(f),console.log(f),d.Z.patch("http://50.16.134.143:3300/clientes/".concat(s),f).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),r().fire("Exito","Su edad se a guardado","success")}catch(e){console.log(e),r().fire("Error","Su edad no se a guardado","error")}m(!1)},className:"link",children:"Guardar Cambios"}):(0,c.jsx)("a",{onClick:function(){m(!0)},className:"link",children:"Modificar Edad"})}),(0,c.jsx)("div",{children:(0,c.jsx)("a",{onClick:function(){r().fire({title:"\xbfEst\xe1s seguro?",text:"Esta acci\xf3n eliminar\xe1 la cuenta del cliente. \xbfEst\xe1s seguro de que deseas continuar?",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, eliminar",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&(console.log(s),d.Z.delete("http://50.16.134.143:3300/clientes/".concat(s),{withCredentials:!0}).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),r().fire("Cliente eliminado","","success"),setTimeout(()=>{t.push("/homePageLink")},2e3))})},className:"link",children:"Eliminar"})})]})]})]})}),(0,c.jsxs)("div",{className:"content-container",children:[(0,c.jsx)("div",{className:"card-text",children:(0,c.jsxs)("form",{className:"notes",children:[(0,c.jsx)("div",{className:"title",children:"Notas de tu cliente"}),(0,c.jsx)("textarea",{placeholder:"Your message",value:i,onChange:e=>{o(e.target.value)}}),(0,c.jsx)("div",{className:"conBtn",children:(0,c.jsx)("button",{onClick:function(e){e.preventDefault();try{f.notas=i,N(f),console.log(f),d.Z.patch("http://50.16.134.143:3300/clientes/".concat(s),f).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),r().fire("Exito","Su nota se a guardado","success")}catch(e){console.log(e),r().fire("Error","Su nota no se a guardado","error")}},children:"Guardar Nota"})})]})}),(0,c.jsxs)("div",{className:"folders",children:[(0,c.jsxs)("div",{className:"cardDocumentos",children:[(0,c.jsxs)("div",{className:"card-details",children:[(0,c.jsx)("p",{className:"text-title",children:"Documentos"}),(0,c.jsx)("p",{className:"text-body",children:"Aqui puedes ver todos los documentos de tu cliente"})]}),(0,c.jsx)("button",{onClick:function(){t.push("/documentosLink?id=".concat(s))},className:"card-button",children:"Ver"})]}),(0,c.jsxs)("div",{className:"cardDocumentos",children:[(0,c.jsxs)("div",{className:"card-details",children:[(0,c.jsx)("p",{className:"text-title",children:"Historial"}),(0,c.jsx)("p",{className:"text-body",children:"Aqui puedes ver el historial de trabajo con tu cliente"})]}),(0,c.jsx)("button",{onClick:function(){t.push("/historial?id=".concat(s))},className:"card-button",children:"Ver"})]})]})]})]})};function h(){let e=(0,a.useSearchParams)();return(0,c.jsx)(u,{id:e.get("id")})}},6595:function(){}},function(e){e.O(0,[630,691,340,396,971,864,744],function(){return e(e.s=260)}),_N_E=e.O()}]);