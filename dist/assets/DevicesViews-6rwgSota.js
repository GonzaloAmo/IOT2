import{u as g,r as y,c as u,a as s,t as p,w as k,b as v,v as D,d as S,e as m,o as r}from"./index-230J_n8a.js";import{initializeApp as z}from"https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";import{getFirestore as x,onSnapshot as w,doc as _,updateDoc as A}from"https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";import"https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";const B={apiKey:"AIzaSyAIHg3pBYmMN4ArBrm-o-cvkLqB7e5Xn7Q",authDomain:"iotgonzalo-11160.firebaseapp.com",projectId:"iotgonzalo-11160",storageBucket:"iotgonzalo-11160.appspot.com",messagingSenderId:"113712851434",appId:"1:113712851434:web:a765d65d9ffa99bd4e2a93",measurementId:"G-WV2W02Q3JP"},I=z(B),h=x(I),N=(l,a,e,n,c)=>w(_(h,l,a,e,n),c),b=(l,a,e,n,c)=>A(_(h,l,a,e,n),c),V={class:"container"},C={class:"title"},E={key:0,class:"content"},j={class:"subtitle"},M={class:"form"},U={key:0,class:"form-group"},L=s("button",{type:"submit",class:"submit-button sensor-button"},"Update Sensor",-1),Q={key:1,class:"form-group"},W={class:"subtitle"},q=["checked"],F=s("label",{for:"deviceStatus",class:"label"},"Activar/Desactivar",-1),G=s("button",{type:"submit",class:"submit-button ejecutor-button"},"Update Executer",-1),R={__name:"DevicesViews",setup(l){const a=g(),e=y(null);N("espacios",a.params.id,"Devices",a.params.device,async i=>{e.value={id:i.id,...i.data()}});const n=async(i,t,o)=>{try{e.value&&e.value.name?(console.log("Antes de la actualización:",e.value),await b("espacios",i,"Devices",t,o),console.log("Después de la actualización:",e.value)):console.error("Nombre del dispositivo no disponible")}catch(d){console.error("Error durante la actualización:",d)}},c=async(i,t,o)=>{try{e.value&&e.value.name?(console.log("Antes de la actualización:",e.value),await b("espacios",i,"Devices",t,o),console.log("Después de la actualización:",e.value)):console.error("Nombre del dispositivo no disponible")}catch(d){console.error("Error durante la actualización:",d)}},f=()=>{e.value.device==="sensor"?n(a.params.id,e.value.id,{name:e.value.name}):c(a.params.id,e.value.id,e.value)};return(i,t)=>(r(),u("div",V,[s("h1",C,p(e.value?e.value.name:"Loading..."),1),e.value?(r(),u("div",E,[s("h2",j,p(e.value.type),1),s("div",M,[s("form",{onSubmit:k(f,["prevent"])},[e.value.device==="sensor"?(r(),u("div",U,[v(s("input",{type:"text",id:"deviceName","onUpdate:modelValue":t[0]||(t[0]=o=>e.value.name=o),class:"input"},null,512),[[D,e.value.name]]),L])):e.value.device==="ejecutor"?(r(),u("div",Q,[s("h2",W,p(e.value.status),1),v(s("input",{type:"checkbox",id:"deviceStatus",checked:e.value.status,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.status=o),onClick:t[2]||(t[2]=o=>e.value.status=!e.value.status),class:"checkbox"},null,8,q),[[S,e.value.status]]),F,G])):m("",!0)],32)])])):m("",!0)]))}};export{R as default};