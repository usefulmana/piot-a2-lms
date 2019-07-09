(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(140)},113:function(e,t,a){},114:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),l=a.n(o),c=(a(113),a(114),a(17)),s=a(33),i=a(5),m=a(6),u=a(8),h=a(7),b=a(9),d=a(35),p=a.n(d),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),sessionStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement(c.b,{to:"/login",className:"nav-link"},"Login"),r.a.createElement("p",{className:"mt-2"},"Please Log In to Use This Website"))),t=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"",onClick:this.logOut.bind(this),className:"nav-link"},"Logout"),r.a.createElement("p",{className:"mt-2"},"You are logged in"),r.a.createElement(c.b,{to:"/dashboard"},"Dashboard")));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Home"),sessionStorage.usertoken?t:e))}}]),t}(n.Component),f=Object(s.g)(E),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mx-auto"}))}}]),t}(n.Component),v=a(32),O=a(12),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={username:"",password:"",error:""},e.onChange=e.onChange.bind(Object(O.a)(e)),e.onSubmit=e.onSubmit.bind(Object(O.a)(e)),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return p.a.post("http://127.0.0.1:5000/login",{username:e.username,password:e.password}).then(function(e){return sessionStorage.setItem("usertoken",e.data),e.data}).catch(function(e){console.log(e)})}({username:this.state.username,password:this.state.password}).then(function(e){e.error?t.setState({error:e.error}):t.props.history.push("/dashboard")})}},{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.setState({authenticated:!1}),this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text-center mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"test",className:"form-control",name:"username",placeholder:"Enter email",value:this.state.username,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign in"),r.a.createElement("h1",{style:{color:"red"}},this.state.error)))))}}]),t}(n.Component),j=a(87),k=(a(139),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).toggle=function(){e.setState({modal:!e.state.modal})},e.state={title:"",author:"",ISBN:"",published_date:new Date},e.onChange=e.onChange.bind(Object(O.a)(e)),e.onSubmit=e.onSubmit.bind(Object(O.a)(e)),e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e){this.setState({published_date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.published_date.getFullYear()+":"+(this.state.published_date.getMonth()+1)+":"+this.state.published_date.getDate(),a={title:this.state.title,author:this.state.author,ISBN:this.state.ISBN,published_date:t},n=JSON.stringify(a);p.a.post("http://127.0.0.1:5000/books",n,{headers:{"Content-Type":"application/json"}}).then(function(e){return alert("Success!")}).then(function(e){return window.location.reload()})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",onChange:this.onChange,class:"form-control",name:"title",placeholder:"Title",autoFocus:!0,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Author"),r.a.createElement("input",{type:"text",onChange:this.onChange,class:"form-control",name:"author",placeholder:"Author",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ISBN"},"ISBN"),r.a.createElement("input",{type:"text",onChange:this.onChange,class:"form-control",name:"ISBN",placeholder:"ISBN",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Published Date"),r.a.createElement("br",null),r.a.createElement(j.a,{selected:this.state.published_date,onChange:this.handleChange,required:!0})),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit")))}}]),t}(n.Component)),N=a(106),S=a.n(N),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={pageOfItems:[]},a.onChangePage=a.onChangePage.bind(Object(O.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"handleDelete",value:function(e){if(window.confirm("This transaction is irreversible. Are you sure?")){p.a.delete("".concat("http://127.0.0.1:5000/books","/").concat(e),{headers:{"Content-Type":"application/json"}}).then(function(e){return alert("Success!")}).then(function(e){return window.location.reload()})}else alert("Transaction cancelled")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Author"),r.a.createElement("th",{scope:"col"},"Published Date"),r.a.createElement("th",{scope:"col"},"ISBN"),r.a.createElement("th",{scope:"col"},"Action(s)"))),r.a.createElement("tbody",null,this.state.pageOfItems.map(function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.author),r.a.createElement("td",null,t.published_date),r.a.createElement("td",null,t.ISBN),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:e.handleDelete.bind(e,t.id)}," Delete ")))}))),r.a.createElement("div",{className:"text-center"},r.a.createElement(S.a,{items:this.props.data,onChangePage:this.onChangePage,pageSize:10})))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={query:""},e.onChange=e.onChange.bind(Object(O.a)(e)),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Title, Author, ISBN...",name:"query",id:"search",required:!0,onChange:this.onChange}),r.a.createElement(c.b,{to:{pathname:"/search/".concat(this.state.query),state:"flushDeal"}},r.a.createElement("span",{className:"input-group-append"},r.a.createElement("button",{class:"btn btn-search my-2 my-sm-0 ",type:"submit"})))))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={books:[],form_on:!1},e.toggle_form=e.toggle_form.bind(Object(O.a)(e)),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchBooks()}},{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){}},{key:"toggle_form",value:function(){this.setState({form_on:!this.state.form_on})}},{key:"fetchBooks",value:function(){var e=this;fetch("http://127.0.0.1:5000/books").then(function(e){return e.json()}).then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/reports"},"View Reports")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary mb-2 mt-3",onClick:this.toggle_form}," ","Add Book"," "),this.state.form_on?r.a.createElement(k,null):null),r.a.createElement("br",null),r.a.createElement("div",{className:"mb-3"},r.a.createElement(w,null)),r.a.createElement("div",{className:"text-center"},r.a.createElement(C,{data:this.state.books})))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={books:[]},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchBooks()}},{key:"fetchBooks",value:function(){var e=this;fetch("".concat("http://127.0.0.1:5000/books/others","/").concat(this.props.match.params.query)).then(function(e){return e.json()}).then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement(C,{data:this.state.books})))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:"http://127.0.0.1:5000/daily",alt:"Daily chart"}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Daily"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:"http://127.0.0.1:5000/weekly",alt:"Weekly chart"}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Weekly")))))}}]),t}(n.Component),B=a(107),_=function(e){var t=e.component,a=Object(B.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return null!=sessionStorage.getItem("usertoken")?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var F=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("h1",{className:"text-center mt-5"},"Library Management System"),r.a.createElement(f,null),r.a.createElement("hr",{className:"w-50"})),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:g}),r.a.createElement(s.b,{exact:!0,path:"/login",component:y}),r.a.createElement(_,{exact:!0,path:"/dashboard",component:I}),r.a.createElement(_,{exact:!0,path:"/reports",component:D}),r.a.createElement(_,{path:"/search/:query?",component:function(e){return r.a.createElement(x,Object.assign({timestamp:(new Date).toString()},e))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.d28a1be0.chunk.js.map