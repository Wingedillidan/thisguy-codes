(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),s=(n(14),n(2)),c=n(3),l=n(5),u=n(4),m=n(6),d=n(1),v=(n(16),"active"),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={horizontals:n.generateSpans(25,1),transitionClass:v,animCounter:1},n.bump=n.bump.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"generateSpans",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],o=0;o<e;o++)n.push(a.createElement("span",{key:o+t}));return n}},{key:"bumpReset",value:function(){}},{key:"bump",value:function(){var e=this,t=this.state.animCounter;t>=25?t=0:t+=1,this.setState({transitionClass:"",horizontals:this.generateSpans(25,1+t),animCounter:t},function(){e.setState({transitionClass:v,horizontals:e.generateSpans(25,0+t)}),setTimeout(e.bump,500)})}},{key:"render",value:function(){var e=this.state,t=e.horizontals,n=e.transitionClass;return a.createElement("div",{className:"backdrop"},this.generateSpans(3),a.createElement("div",{className:"horizon"},a.createElement("div",{className:"verticals-left"},this.generateSpans(10)),a.createElement("div",{className:"verticals-center"},a.createElement("span",null),a.createElement("span",null)),a.createElement("div",{className:"verticals-right"},this.generateSpans(10)),a.createElement("div",{className:"horizontals ".concat(n)},t)),a.createElement("h1",{className:"title"},"THIS GUY"))}}]),t}(a.Component),p=(n(18),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loaded:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",function(){return e.setState({loaded:!0})})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("load",function(){return e.setState({loaded:!0})})}},{key:"render",value:function(){return this.state.loaded?o.a.createElement(h,null):o.a.createElement("div",null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.a5683e28.chunk.js.map