(this["webpackJsonpchat-ui"]=this["webpackJsonpchat-ui"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),s=n.n(r),o=(n(16),n(1)),c=n(2),l=n(3),u=n(4),h=n(10),p=n(5),d=n(6),f=n(9),v=(n(17),new(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).ws=void 0,e.inbox=null,e.ws=new WebSocket("wss://raja.aut.bme.hu/chat"),e.ws.addEventListener("open",(function(){})),e.ws.addEventListener("message",(function(t){var n,a=JSON.parse(t.data);switch(a.type){case"error":alert(a.message);break;case"login":e.inbox=a.inbox,e.dispatch("login");break;case"message":var i=a.channelId;null===(n=e.inbox.conversations.find((function(e){return e.channelId===i})))||void 0===n||n.lastMessages.push(a.message),e.dispatch("message",i,a.message);break;case"conversationAdded":e.inbox.conversations.push(a.conversation),e.dispatch("conversation",a.conversation.channelId)}})),e}return Object(c.a)(n,[{key:"addEventListener",value:function(e,t,a){Object(d.a)(Object(p.a)(n.prototype),"addEventListener",this).call(this,e,t,a)}},{key:"removeAllEventListener",value:function(e){Object(d.a)(Object(p.a)(n.prototype),"removeAllEventListener",this).call(this,e)}},{key:"sendPacket",value:function(e){this.ws.send(JSON.stringify(e))}}]),n}(function(){function e(){Object(o.a)(this,e),this.listeners=[]}return Object(c.a)(e,[{key:"addEventListener",value:function(e,t,n){this.listeners.push({type:e,listener:t,obj:n})}},{key:"removeEventListener",value:function(e,t){this.listeners.splice(this.listeners.findIndex((function(n){return n.type===e&&n.listener===t})),1)}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i,r=Object(f.a)(this.listeners.filter((function(t){return t.type===e})));try{for(r.s();!(i=r.n()).done;){var s,o=i.value;(s=o.listener).call.apply(s,[o.obj].concat(n))}}catch(c){r.e(c)}finally{r.f()}}},{key:"removeAllEventListener",value:function(e){if(!e)throw new Error("Must specify object");this.listeners=this.listeners.filter((function(t){return t.obj!==e}))}}]),e}()))),m=(n(18),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={value:e.props.value,focus:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e,t=this,n={};return this.props.autofocus&&(n.autoFocus=!0),this.props.onEnter&&(n.onKeyDown=function(e){13===e.keyCode&&t.props.onEnter()}),i.a.createElement("div",{className:"text-input"},i.a.createElement("input",Object.assign({type:null!==(e=this.props.type)&&void 0!==e?e:"text",value:this.state.value,onChange:function(e){var n,a;t.setState({value:e.target.value}),null===(n=(a=t.props).onChange)||void 0===n||n.call(a,e.target.value)},onBlur:function(){return t.setState({focus:!1})},onFocus:function(){return t.setState({focus:!0})}},n)),i.a.createElement("div",{className:"focus-indicator"}),i.a.createElement("label",{className:this.state.value||this.state.focus?"subsided":""},this.props.placeholder))}}]),n}(a.Component)),g=(a.Component,function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",displayName:"",register:!1},e.textInput=i.a.createRef(),e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"login"},i.a.createElement("img",{src:"logo512.png",width:"256"}),i.a.createElement(m,{type:"email",placeholder:"Email (someone@example.com)",value:this.state.email,onChange:function(t){return e.email(t)},autofocus:!0,onEnter:function(){return e.onClick()}}),i.a.createElement(m,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t})},onEnter:function(){return e.onClick()}}),this.state.register&&i.a.createElement(m,{type:"text",ref:this.textInput,placeholder:"Display Name (Agent Smith)",value:this.state.displayName,onChange:function(t){return e.setState({displayName:t})},onEnter:function(){return e.onClick()}}),i.a.createElement("button",{type:"button",onClick:function(){return e.onClick()}},this.state.register?"Register":"Login"),i.a.createElement("p",null,this.state.register?"Switch back to ":"Have no account yet? Go and ",i.a.createElement("a",{href:"",onClick:function(t){t.preventDefault(),e.setState({register:!e.state.register})}},this.state.register?"Login":"Register")),i.a.createElement("button",{type:"button",onClick:function(){return e.onClick()}},"Login"),i.a.createElement("a",{href:"https://www.google.hu/search?q=privacy"},"Privacy Policy"))}},{key:"email",value:function(e){var t;this.state.register&&"BI3ULX"===e&&(null===(t=this.textInput.current)||void 0===t||t.setState({value:"Bal\xe1zs"}),this.setState(Object(h.a)({},this.state,{displayName:"Bal\xe1zs"})));this.setState({email:e})}},{key:"onClick",value:function(){this.state.register?v.sendPacket({type:"register",email:this.state.email,password:this.state.password,displayName:this.state.displayName,staySignedIn:!1}):v.sendPacket({type:"login",email:this.state.email,password:this.state.password,staySignedIn:!1})}}]),n}(a.Component)),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(g,null))}}]),n}(a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.5f554db6.chunk.js.map