(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(15),o=t.n(a),c=t(6),u=t(4),i=t(0),d=function(e){var n=e.id,t=e.name,r=e.number,a=e.handleDelete;return Object(i.jsxs)("div",{children:[t," ",r,Object(i.jsx)("button",{onClick:function(){return a(n)},children:"delete"})]})},l=function(e){var n=e.filter,t=e.handleChangeFilter;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.newName,t=e.handleChange,r=e.newNumber,a=e.handleAddNumber,o=e.handleSubmit;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:t})]}),Object(i.jsxs)("div",{children:["number:",Object(i.jsx)("input",{value:r,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",onClick:o,children:"add"})})]})},b=function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},h=t(3),f=t.n(h),j="/api/persons",m={getAll:function(){return f.a.get(j).then((function(e){return e.data}))},create:function(e){return f.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return f.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return f.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))}},p=function(){var e=Object(r.useState)(""),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),h=Object(u.a)(o,2),f=h[0],j=h[1],p=Object(r.useState)(""),O=Object(u.a)(p,2),v=O[0],w=O[1],g=Object(r.useState)(null),x=Object(u.a)(g,2),C=x[0],N=x[1];Object(r.useEffect)((function(){m.getAll().then((function(e){N(e)}))}),[]);var k=function(e){return C.find((function(n){return n.name.toUpperCase()===e.toUpperCase()}))},y=function(e){var n=function(e){return C.find((function(n){return n.id===e})).name}(e);console.log(n),window.confirm("you really want to remove the entry ".concat(n,"?"))&&(m.deletePerson(e).then((function(){N(C.filter((function(n){return n.id!==e})))})),j(""),a(""))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(l,{filter:v,handleChangeFilter:function(e){w(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(s,{newName:t,handleChange:function(e){a(e.target.value)},newNumber:f,handleAddNumber:function(e){j(e.target.value),console.log("adding new number, ".concat(f))},handleSubmit:function(e){if(e.preventDefault(),""===t||""===f)window.alert("both name and number can NOT be empty, please input");else if(k(t)){console.log("argument newName passed to function handleSubmit is ".concat(t)),console.log("argument newNumber passed to function handleSubmit is ".concat(f));var n=k(t);console.log(n.number),f===n.number?(o=t,window.alert("".concat(o.toUpperCase()," is already added to the phonebook"))):window.confirm("".concat(n.name," already added to the phonebook. Do you want to update \n              the phone number with ").concat(f,"?"))&&function(e,n){var r=Object(c.a)(Object(c.a)({},e),{},{number:n});m.update(e.id,r).then((function(e){N(C.map((function(n){return n.name!==t?n:e})))})),a(""),j("")}(n,f)}else{var r={name:b(t),number:f};console.log("new Person is ",r),m.create(r).then((function(e){N(C.concat(e)),a(""),j("")}))}var o}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsxs)("div",{children:[""===v&&null!==C&&C.map((function(e){return Object(i.jsx)(d,{name:e.name,number:e.number,id:e.id,handleDelete:y},e.id)})),""!==v&&null!==C&&function(e){return C.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())}))}(v).map((function(e){return Object(i.jsx)(d,{name:e.name,number:e.number,id:e.id,handleDelete:y})}))]})]})};o.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.858903a5.chunk.js.map