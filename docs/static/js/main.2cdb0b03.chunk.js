(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(4),l=t(7),o=t(5),i=t(8),c=t(1),s=t(0),m=t.n(s),u=t(6),d=t.n(u);t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){var a=e.partidas.map(function(e,a){return m.a.createElement("span",{className:"border rounded m-1",key:a},e)});return m.a.createElement("div",null,m.a.createElement("h6",null,e.t\u00edtulo),m.a.createElement("div",{className:"d-flex flex-wrap"},a))}function p(e){var a=e.quadros.map(function(e){return m.a.createElement(h,{key:e.t\u00edtulo,"t\xedtulo":e.t\u00edtulo,partidas:e.partidas})});return m.a.createElement("div",{className:"card card-body my-2"},m.a.createElement("h5",{className:"card-title mb-0"},e.n\u00famero," - ",e.nome),m.a.createElement("div",{className:"card-text"},m.a.createElement("div",null,m.a.createElement("strong",null,"Tarifa:")," ",e.tarifa),m.a.createElement("div",null,m.a.createElement("strong",null,"Munic\xedpio:")," ",e.munic\u00edpio),m.a.createElement("div",null,m.a.createElement("strong",null,"Empresa:")," ",e.empresa),a))}function f(e){var a=e.linhas.map(function(e){return m.a.createElement(p,{key:e.n\u00famero,"n\xfamero":e.n\u00famero,nome:e.nome,"munic\xedpio":e.munic\u00edpio,tarifa:e.tarifa,empresa:e.empresa,quadros:e.quadros})});return m.a.createElement("div",null,a)}var v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(c.a)(Object(c.a)(t))),t.state={linhas:e.linhas},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({linhas:this.props.linhas.filter(function(a){var t=a.nome.toLowerCase(),n=e.target.value.toLowerCase();return t.includes(n)})})}},{key:"render",value:function(){return m.a.createElement("div",{className:"h-100"},m.a.createElement("header",null,m.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},m.a.createElement("div",{className:"navbar-brand"},m.a.createElement("span",{role:"img","aria-label":"\xd4"},"\ud83d\ude8d"),"nibus Meu"),m.a.createElement("form",{className:"form-inline col-6 col-sm-auto p-0"},m.a.createElement("input",{className:"form-control data-hj-whitelist",type:"search",placeholder:"Sua linha \ud83d\udd0e",onChange:this.handleChange})))),m.a.createElement("main",{className:"container my-2"},m.a.createElement(f,{linhas:this.state.linhas})),m.a.createElement("footer",{className:"bg-primary"},m.a.createElement("div",{className:"container text-light text-center"},"Desenvolvido por ",m.a.createElement("a",{className:"text-light",href:"https://gleiderr.github.io",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"underline"}},"Gleider Costa"))))}}]),a}(m.a.Component);fetch("./der.json").then(function(e){return e.json()}).then(function(e){d.a.render(m.a.createElement(v,{linhas:e}),document.getElementById("root")),console.log(e),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2cdb0b03.chunk.js.map