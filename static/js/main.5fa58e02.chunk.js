(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,r){e.exports={nav:"Header_nav__1Gnqj",navActive:"Header_navActive__3IAwS",bar:"Header_bar__1XH3V",navItem:"Header_navItem__3l07v",active:"Header_active__3s8Hq"}},11:function(e,t,r){e.exports={someClass:"Greeting_someClass__2GUYx",error:"Greeting_error__30HSa",errorMessage:"Greeting_errorMessage__2vQcj",totalUsers:"Greeting_totalUsers__1LPWs",button:"Greeting_button__dRfJl",inputStyleStandart:"Greeting_inputStyleStandart__1H9NM"}},17:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__2FDkW",errorInput:"SuperInputText_errorInput__2h48s",error:"SuperInputText_error__i44qV"}},22:function(e,t,r){e.exports={default:"SuperButton_default__2HL2K",red:"SuperButton_red__3lxIE"}},23:function(e,t,r){e.exports={blue:"HW4_blue__10Owz",column:"HW4_column__2xT12",testSpanError:"HW4_testSpanError__3KNnw"}},24:function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__1BxkW",spanClassName:"SuperCheckbox_spanClassName__3UxJ0"}},28:function(e,t,r){e.exports={App:"App_App__236HU"}},35:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r.n(a),c=r(27),s=r.n(c),i=(r(35),r(28)),o=r.n(i),l=r(4),j=r(9),u=r(45),d=r(46),b=r(10),x=r.n(b),h=r(1);var O=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),r=t[0],n=t[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:r?x.a.nav:x.a.navActive,children:[Object(h.jsx)(j.b,{to:"/pre-junior",activeClassName:x.a.active,children:"Pre-Junior"}),Object(h.jsx)(j.b,{to:"/junior",activeClassName:x.a.active,children:"Junior"}),Object(h.jsx)(j.b,{to:"/juniorplus",activeClassName:x.a.active,children:"Junior+"}),Object(h.jsx)("div",{className:x.a.bar,onClick:function(){n(!r)},children:r?Object(h.jsx)(u.a,{}):Object(h.jsx)(d.a,{})})]})})},f=r(8),m=r.n(f);var _=function(e){return Object(h.jsxs)("div",{className:m.a.box,children:[Object(h.jsx)("img",{src:e.avatar,className:m.a.avatar}),Object(h.jsx)("div",{className:m.a.messageContent,children:Object(h.jsxs)("div",{className:m.a.textContent,children:[Object(h.jsx)("div",{className:m.a.name,children:e.name}),Object(h.jsx)("div",{className:m.a.message,children:e.message}),Object(h.jsx)("div",{className:m.a.date,children:e.time})]})})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",g="some text",C="22:00";var N=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(h.jsx)(_,{avatar:p,name:v,message:g,time:C}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},k=r(6),y=r.n(k),S=r(12),w=r(13),A=r(22),H=r.n(A),I=function(e){var t=e.red,r=e.className,a=Object(w.a)(e,["red","className"]),n="".concat(t?H.a.red:H.a.default," ").concat(r);return Object(h.jsx)("button",Object(S.a)({className:n},a))};var M=function(e){return Object(h.jsxs)("div",{className:y.a.affairs,children:[Object(h.jsx)("div",{className:y.a.affairItem,children:e.affair.name+" "}),Object(h.jsxs)("div",{className:"high"===e.affair.priority?y.a.red:"low"===e.affair.priority?y.a.yellow:"middle"===e.affair.priority?y.a.blue:"",children:["[",e.affair.priority,"]"]}),Object(h.jsx)(I,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.button,children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(h.jsx)(M,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsx)(I,{className:"all"===e.filter?y.a.categoryColor:"",onClick:function(){e.setFilter("all")},children:"All"}),Object(h.jsx)(I,{className:"high"===e.filter?y.a.categoryColor:"",onClick:function(){e.setFilter("high")},children:"High"}),Object(h.jsx)(I,{className:"middle"===e.filter?y.a.categoryColor:"",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(h.jsx)(I,{className:"low"===e.filter?y.a.categoryColor:"",onClick:function(){e.setFilter("low")},children:"Low"})]})},U=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(a.useState)(U),t=Object(l.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)("all"),s=Object(l.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"high"===t&&(e=e.filter((function(e){return"high"===e.priority}))),"low"===t&&(e=e.filter((function(e){return"low"===e.priority}))),"middle"===t&&(e=e.filter((function(e){return"middle"===e.priority}))),e}(r,i);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)(T,{data:j,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},E=r(30),G=r(11),P=r.n(G),W=r(17),F=r.n(W),B=function(e){e.type;var t=e.onChange,r=e.onChangeText,a=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(F.a.error," ").concat(i||""),j="".concat(c?F.a.errorInput:F.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:j},o)),c&&Object(h.jsx)("span",{className:l,children:c})]})},q=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,c=e.totalUsers,s=n?P.a.error:P.a.inputStyleStandart;return Object(h.jsxs)("div",{className:P.a.someClass,children:[Object(h.jsx)(B,{value:t,onChange:r,className:s}),Object(h.jsx)(I,{className:P.a.button,onClick:a,children:"Add"}),Object(h.jsx)("span",{className:P.a.totalUsers,children:c}),Object(h.jsx)("span",{className:P.a.errorMessage,children:n})]})},K=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),u=j[0],d=j[1],b=t.length;return Object(h.jsx)(q,{name:s,setNameCallback:function(e){i(e.currentTarget.value),""===e.currentTarget.value.trim()?d("Name Required"):d("")},addUser:function(){""!==s.trim()&&(r(s.trim()),i(""),alert("Hello ".concat(s.trim(),"!")))},error:u,totalUsers:b})},V=r(47);var X=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),r=t[0],n=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(K,{users:r,addUserCallback:function(e){n([{_id:Object(V.a)(),name:e}].concat(Object(E.a)(r)))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},R=r(23),L=r.n(R),Q=r(24),Y=r.n(Q),z=function(e){e.type,e.onChange;var t=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),n=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Y.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:c},n)),a&&Object(h.jsx)("span",{className:Y.a.spanClassName,children:a})]})};var D=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),r=t[0],n=t[1],c=r?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:L.a.column,children:[Object(h.jsx)(B,{value:r,onChangeText:n,onEnter:s,error:c}),Object(h.jsx)(B,{className:L.a.blue}),Object(h.jsx)(I,{children:"default"}),Object(h.jsx)(I,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(I,{disabled:!0,children:"disabled"}),Object(h.jsx)(z,{checked:j,onChangeChecked:u,children:"some text "}),Object(h.jsx)(z,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var Z=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(N,{}),Object(h.jsx)(J,{}),Object(h.jsx)(X,{}),Object(h.jsx)(D,{})]})};var $=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"404"}),Object(h.jsx)("div",{children:"Page not found!"}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ee=r(3),te=function(){return Object(h.jsx)("div",{children:"Junior"})},re=function(){return Object(h.jsx)("div",{children:"Junior+"})},ae="/pre-junior",ne="/junior",ce="/juniorplus";var se=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(ee.d,{children:[Object(h.jsx)(ee.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(ee.a,{to:ae})}}),Object(h.jsx)(ee.b,{path:ae,render:function(){return Object(h.jsx)(Z,{})}}),Object(h.jsx)(ee.b,{path:ne,render:function(){return Object(h.jsx)(te,{})}}),Object(h.jsx)(ee.b,{path:ce,render:function(){return Object(h.jsx)(re,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(h.jsx)(ee.b,{render:function(){return Object(h.jsx)($,{})}})]})})};var ie=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(se,{})]})})};var oe=function(){return Object(h.jsxs)("div",{className:o.a.App,children:[Object(h.jsx)("div",{children:"react homeworks:"}),Object(h.jsx)(ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,r){e.exports={affairs:"Affairs_affairs__1HjiV",affairItem:"Affairs_affairItem__17g8b",red:"Affairs_red__2e4Gx",yellow:"Affairs_yellow__N4CMl",blue:"Affairs_blue__39c-X",button:"Affairs_button__QoPoE",categoryColor:"Affairs_categoryColor__1nj1v"}},8:function(e,t,r){e.exports={message:"Message_message__2P8vp",box:"Message_box__1cePn",avatar:"Message_avatar__1pAXo",messageContent:"Message_messageContent__27OUV",textContent:"Message_textContent__2lw-n",name:"Message_name__3RVJn",date:"Message_date__2bNfC"}}},[[42,1,2]]]);
//# sourceMappingURL=main.5fa58e02.chunk.js.map