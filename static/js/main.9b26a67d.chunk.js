(this["webpackJsonpcasino-react"]=this["webpackJsonpcasino-react"]||[]).push([[0],{114:function(e,n,t){},118:function(e,n){},120:function(e,n){},153:function(e,n){},154:function(e,n){},199:function(e,n,t){"use strict";t.r(n);var a=t(4),o=t.n(a),c=t(84),r=t.n(c),s=(t(96),t(85));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return f}));var a=t(86),o=t(87),c=t(89),r=t(90),s=t(4),i=t.n(s),l=t(26),u=t.n(l),h=t(88),g=t.n(h),d=(t(114),t(27));t(116),t(198);u.a.PhonePe.loggingEnabled=!0;var f=function(n){Object(r.a)(s,n);var t=Object(c.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={grantToken:""},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var n=this,t="";u.a.PhonePe.PhonePe.build(u.a.PhonePe.Constants.Species.web).then((function(a){a.fetchAuthToken().then((function(a){n.setState({grantToken:a.grantToken}),t=a.grantToken,console.log("Grant token data received = "+JSON.stringify(a)),alert(a);var o="41941159-fd68-4dee-b11e-ac2d0783b2b1";console.log(t,"grantToken");var c=new e(JSON.stringify({grantToken:t})).toString("base64");console.log(c,"base64String");var r=Object(d.sha256)(c+"/v3/service/auth/access"+o);console.log(r,"hashDigest");var s=Object(d.sha256)("/v3/service/userdetails"+o);console.log(s,"hashDigest1")})).catch((function(e){console.log("Error occurred while fetching the grant token: "+e),alert(e)}))}))}},{key:"doAction",value:function(){var e=Object(d.sha256)("YERACiNupdd/9GmmAvcq0A==/v3/service/auth/access41941159-fd68-4dee-b11e-ac2d0783b2b1");console.log(e,"hashDigest")}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Edit ",i.a.createElement("code",null,"src/App.js")," and save to reload."),i.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),s}(s.Component)}).call(this,t(3).Buffer)},88:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},91:function(e,n,t){e.exports=t(199)},96:function(e,n,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.9b26a67d.chunk.js.map