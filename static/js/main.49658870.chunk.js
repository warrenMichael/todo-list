(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),i=a.n(l),c=(a(15),a(16),function(e){var t=e.className,a=void 0===t?"":t,n=e.headerText;return o.a.createElement("header",{className:"todo-header ".concat(a)},o.a.createElement("h1",{className:"hdr"},n))}),m=a(4),s=a(5),r=a(7),d=a(6),u=a(1),p=a(8),h=(a(17),function(e){var t=e.className,a=void 0===t?"":t,n=e.clearAll;return o.a.createElement("div",{className:"clear-all-btn-wrapper ".concat(a)},o.a.createElement("button",{className:"clear-all-btn",onClick:n},"Clear all items"))}),v=(a(18),function(e){var t=e.className,a=void 0===t?"":t,n=e.handleCompletedCheckbox,l=e.id,i=e.isCompleted,c=e.removeItem,m=e.text;return o.a.createElement("div",{className:"todo-list-item ".concat(a," ").concat(i?"completed":"")},o.a.createElement("div",{className:"todo-item-text"},m),o.a.createElement("div",{className:"todo-options"},o.a.createElement("form",null,o.a.createElement("label",null,o.a.createElement("input",{className:"completed-checkbox-input",checked:i,name:"completed",onChange:n.bind(void 0,l),type:"checkbox"}),o.a.createElement("span",{className:"completed-input-label"},"Completed"))),c&&o.a.createElement("button",{className:"btn-remove",onClick:c.bind(void 0,l)},"\xd7 Remove this Item")))}),x=(a(19),function(e){var t=e.className,a=void 0===t?"":t,n=e.handleViewOptions;return o.a.createElement("div",{className:"view-options ".concat(a)},o.a.createElement("button",{className:"view-option-item all",onClick:n.bind(void 0,"")},"All"),o.a.createElement("button",{className:"view-option-item uncompleted",onClick:n.bind(void 0,"uncompleted")},"Uncompleted"),o.a.createElement("button",{className:"view-option-item completed",onClick:n.bind(void 0,"completed")},"Completed"))}),b=(a(20),function(e){var t=e.className,a=void 0===t?"":t,n=e.labelText,l=void 0===n?"Add to-do item":n,i=e.onSubmitHandler;return o.a.createElement("form",{className:"add-item-container ".concat(a),onSubmit:i},o.a.createElement("label",null,o.a.createElement("span",{className:"add-item-label"},l),o.a.createElement("input",{className:"add-item-text-input",type:"text",name:"new-todo"})),o.a.createElement("input",{className:"add-item-submit",type:"submit",value:"Submit"}))}),f=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},E=(a(21),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={itemView:"",todoItems:[]},a.addItem=a.addItem.bind(Object(u.a)(a)),a.clearAll=a.clearAll.bind(Object(u.a)(a)),a.handleCompletedCheckbox=a.handleCompletedCheckbox.bind(Object(u.a)(a)),a.handleViewOptions=a.handleViewOptions.bind(Object(u.a)(a)),a.removeItem=a.removeItem.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"addItem",value:function(e){e.preventDefault();var t={id:f(),isCompleted:!1,text:e.target.querySelector('[name="new-todo"]').value},a=this.state.todoItems.concat([t]);this.setState({todoItems:a}),localStorage.setItem("todoItems",JSON.stringify(a)),e.target.querySelector('[name="new-todo"]').value=""}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todoItems"));this.setState({todoItems:e})}},{key:"clearAll",value:function(){this.setState({todoItems:[]}),localStorage.setItem("todoItems",JSON.stringify([]))}},{key:"handleCompletedCheckbox",value:function(e){var t=this.state.todoItems.map(function(t){return e===t.id&&(t.isCompleted=!t.isCompleted),t});this.setState({todoItems:t}),localStorage.setItem("todoItems",JSON.stringify(t))}},{key:"handleViewOptions",value:function(e){this.setState({itemView:e})}},{key:"removeItem",value:function(e){var t=this.state.todoItems.filter(function(t){return t.id!==e});this.setState({todoItems:t}),localStorage.setItem("todoItems",JSON.stringify(t))}},{key:"render",value:function(){var e=this,t=this.state.todoItems;return o.a.createElement("div",{className:"todo-list ".concat(this.state.itemView)},o.a.createElement(x,{className:this.state.itemView,handleViewOptions:this.handleViewOptions}),o.a.createElement(h,{clearAll:this.clearAll}),!this.state.todoItems.length&&o.a.createElement("p",{className:"no-tasks-text"},"Currently you have no to-do tasks. Add some more or take a breather."),t.map(function(t){return o.a.createElement(v,{handleCompletedCheckbox:e.handleCompletedCheckbox,id:t.id,isCompleted:t.isCompleted,key:"".concat(t.id),removeItem:e.removeItem,text:t.text})}),o.a.createElement(b,{onSubmitHandler:this.addItem}))}}]),t}(o.a.Component)),I=function(){return o.a.createElement("div",{className:"todo-list-application"},o.a.createElement(c,{headerText:"My TO-DO List"}),o.a.createElement("main",{role:"main"},o.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.49658870.chunk.js.map