(this["webpackJsonpmedical-store"]=this["webpackJsonpmedical-store"]||[]).push([[0],{180:function(e,t,r){},305:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(19),c=r.n(n),s=(r(180),r(36)),i=r(23),o=r(2),d=r(342),l=r(361),u=r(343),j=r(37),b=r(63),p=r(7),O=r.n(p),m=r(16),h="AUTH_CHECK",x="AUTH_ERROR",v="LOGOUT",f="LOAD_STORES",g="STORES_ERROR",y="STORE_TYPES",_="STORE_TYPES_ERROR",E="ADD_STORE",S="DELETE_STORE",R="DELETE_STORE_ERROR",w="UPDATE_STORE",N="LOAD_MEDS",M="MEDS_ERROR",C="ADD_MEDS",T="MED_TYPES",D="MED_TYPES_ERROR",k="DELETE_MED",A="DELETE_MED_ERROR",L="UPDATE_MED",q="SET_ALERT",G="REMOVE_ALERT",U="RESET_ALERTS",P=function(){var e;return null===(e=localStorage)||void 0===e?void 0:e.AUTH},F=r(75),V=r.n(F),I={baseURL:"https://medical-store-project.herokuapp.com/api/",headers:{"Content-Type":"application/json"}},B=V.a.create(I);B.interceptors.request.use((function(e){var t=P();return t?e.headers.Authorization="Token ".concat(t):delete e.headers.Authorization,e}),(function(e){return Promise.reject(e)})),B.interceptors.response.use((function(e){return e}),(function(e){if(e.response)return 401===e.response.status&&localStorage.clear(),Promise.reject(e)}));var H=r(365),Y=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4e3;return function(a){var n=Object(H.a)();a({type:q,payload:{msg:e,type:t,id:n}}),setTimeout((function(){return a({type:G,payload:n})}),r)}},z=r(15),W=r(20),X=W.c().shape({username:W.d().required(),password:W.d().required()}),$=/^\d{10}$/,J=function(e){var t=e?{}:{password:W.d().required("Password is a required field").min(6,"Password must be between 6 to 10 characters").max(10,"Password must be between 6 to 10 characters")};return W.c().shape(Object(o.a)(Object(o.a)({store_name:W.d().required("Store name is a required field").min(3,"Store name must be at least 5 characters").max(60,"Store name must not be greater than 60 characters"),username:W.d().required("Username is a required field").min(3,"Username must be at least 3 characters").max(45,"Username must not be greater than 45 characters")},t),{},{store_email_id:W.d().email("Invalid Email").notRequired(),mobile_number:W.d().matches($,{message:"Phone number is not valid",excludeEmptyString:!0}),store_registration_no:W.d().matches(/^(|.{5,})$/,"Registration Number must be at least 5 characters").max(60,"Registration Number must not be more than 60 characters").nullable(),store_license:W.d().required("Store license is a required field").nullable(),store_type_id:W.d().required("Store type is a required field"),address_1:W.d().required("Address 1 is a required field"),address_2:W.d().notRequired()}))},K=new Date;K.setFullYear(K.getFullYear()+2);var Q=W.c().shape({medicine_name:W.d().required("Medicine name is a required field").min(3,"Medicine name must be at least 5 characters").max(60,"Medicine name must not be more than 60 characters"),medicine_price:W.b().required("Medicine price is a required field").min(1,"Medicine price must be greater than or equal to 1").max(999.99,"Medicine price must be less than or equal to 999.99").nullable(!0).transform((function(e){return isNaN(e)?void 0:e})),medicine_details:W.d().matches(/^(|.{10,})$/,"Medicine details must have atleast 10 characters").max(100,"Medicine details must not be more than 60 characters").nullable(),medicine_quantity:W.b().integer("Medicine quantity must be an integer").min(1,"Medicine quantity must be less than or equal to 99").max(99,"Medicine quantity must be less than or equal to 99").nullable(!0).transform((function(e){return isNaN(e)?void 0:e})),medicine_type_id:W.d().required("Medicine type is a required field"),store_id:W.d().required("Store is a required field"),medicine_expiry_date:W.a().required().min(K,"Expiry date should be atleast 2 years from today").nullable().typeError("Invalid expiry date")}),Z=r(1),ee=function(e){var t=e.error;return Object(Z.jsx)("span",{className:"text-danger",children:t})},te=r(101),re=r.n(te),ae=r(363),ne=r(4),ce=r.n(ne);ae.a.propTypes={alerts:ce.a.arrayOf(ce.a.shape({msg:ce.a.string,type:ce.a.string,id:ce.a.number}))};var se=function(e){var t=e.alerts;return null===t||void 0===t?void 0:t.map((function(e){return Object(Z.jsx)(ae.a,{variant:e.type,children:Object(Z.jsx)("span",{children:e.msg})},e.id)}))},ie=function(){var e,t,r=Object(z.c)((function(e){return e.alertReducer}))||[],a=Object(i.g)(),n=Object(z.b)(),c=Object(j.d)({resolver:Object(b.a)(X)}),s=c.register,p=c.handleSubmit,x=c.formState.errors;return Object(Z.jsxs)("div",{className:"login_container",children:[Object(Z.jsx)("center",{children:Object(Z.jsx)(re.a,{})}),Object(Z.jsx)("h1",{children:"Medical Store Management"}),Object(Z.jsx)(d.a,{className:"form_container",children:Object(Z.jsxs)(l.a,{onSubmit:p((function(e){n(function(e,t){return function(){var r=Object(m.a)(O.a.mark((function r(a){var n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B.post("store/login/",e);case 3:c=r.sent.data.token,localStorage.setItem("AUTH",c),a({type:h}),t.push("/stores"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0.response&&404===r.t0.response.status&&a(Y(null===(n=r.t0.response.data)||void 0===n?void 0:n.MSG,"danger"));case 12:case"end":return r.stop()}var c}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(e,a))})),children:[Object(Z.jsx)(se,{alerts:r}),Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(Z.jsx)(l.a.Label,{children:"Username"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",placeholder:"Enter username"},s("username"))),Object(Z.jsx)(ee,{error:null===(e=x.username)||void 0===e?void 0:e.message})]}),Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(Z.jsx)(l.a.Label,{children:"Password"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"password",placeholder:"Password"},s("password"))),Object(Z.jsx)(ee,{error:null===(t=x.password)||void 0===t?void 0:t.message})]}),Object(Z.jsx)("center",{children:Object(Z.jsx)(u.a,{type:"submit",children:"Login"})})]})})]})},oe=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.get("medicine/");case 3:r=e.sent,t({type:N,payload:r.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:M});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},de=function(e,t,r){return function(){var t=Object(m.a)(O.a.mark((function t(a){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:k,payload:e}),t.prev=1,t.next=4,B.delete("medicine/",{data:e});case 4:c=t.sent,a(Y(null===(n=c.data)||void 0===n?void 0:n.MSG,"success")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0&&(a({type:A,payload:r}),a(Y("Operation Failed !","danger")));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},le=r(351),ue=r(347),je=r(348),be=r(349),pe=r(109),Oe=r(350),me=r(362),he=r(344),xe=r(364),ve=r(345),fe=r(346),ge=r(166),ye=r.n(ge),_e=r(165),Ee=r.n(_e),Se=[{title:"Logout",icon:Object(Z.jsx)(Ee.a,{}),href:"/",canClick:!0},{title:"Manage Store",icon:Object(Z.jsx)(ye.a,{}),href:"/stores"},{title:"Manage Medicine",icon:Object(Z.jsx)(re.a,{}),href:"/medicines"}],Re=function(){var e=Object(z.b)(),t=Object(i.g)(),r=function(){e(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.get("store/logout/");case 3:r({type:v}),localStorage.clear(),e.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&console.log(t.t0.response);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(he.a,{children:Se.map((function(e){return e.canClick?Object(Z.jsxs)(xe.a,{button:!0,onClick:r,children:[Object(Z.jsx)(ve.a,{children:e.icon}),Object(Z.jsx)(fe.a,{primary:e.title})]},e.title):Object(Z.jsxs)(xe.a,{button:!0,component:s.b,to:e.href,children:[Object(Z.jsx)(ve.a,{children:e.icon}),Object(Z.jsx)(fe.a,{primary:e.title})]},e.title)}))})})},we=function(e){return function(t){return function(r){var a=Me();return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("div",{className:a.root,children:[Object(Z.jsx)(ue.a,{}),Object(Z.jsx)(je.a,{position:"fixed",className:a.appBar,children:Object(Z.jsx)(be.a,{children:Object(Z.jsx)(pe.a,{variant:"h6",noWrap:!0,children:e.title})})}),Object(Z.jsxs)(me.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left",children:[Object(Z.jsx)("div",{className:a.toolbar}),Object(Z.jsx)(Oe.a,{}),Object(Z.jsx)(Re,{})]}),Object(Z.jsxs)("main",{className:a.content,children:[Object(Z.jsx)("div",{className:a.toolbar}),Object(Z.jsx)(t,Object(o.a)({},r))]})]})})}}},Ne=240,Me=Object(le.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(Ne,"px)"),marginLeft:Ne,backgroundColor:"#0364C0"},drawer:{width:Ne,flexShrink:0},drawerPaper:{width:Ne},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}})),Ce=function(e,t){return{title:"Action",render:function(r){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(u.a,{onClick:function(){return e(r)},style:{marginRight:"20px"},children:"Edit"}),Object(Z.jsx)(u.a,{className:"red-btn",onClick:function(){return t(r)},children:"Delete"})]})}}},Te=function(e,t){return[Ce(e,t),{title:"Medicine Name",render:function(e){return Object(Z.jsx)("span",{children:e.medicine_name})}},{title:"Medicine Price",render:function(e){return Object(Z.jsxs)("span",{children:["Rs. ",e.medicine_price]})}},{title:"Expiry Date",render:function(e){return Object(Z.jsx)("span",{children:e.medicine_expiry_date})}},{title:"Medicine Type",render:function(e){return Object(Z.jsx)("span",{children:e.medicine_type_id_label})}},{title:"Store Name",render:function(e){return Object(Z.jsx)("span",{children:e.store_id_label})}}]},De=r(26),ke=r(352),Ae=function(){return Object(Z.jsx)("div",{className:"text-center",children:Object(Z.jsx)(ke.a,{animation:"border",variant:"primary",size:"lg"})})},Le=r(168),qe=r.n(Le),Ge=r(10),Ue=r(354),Pe=r(357),Fe=r(358),Ve=r(353),Ie=r(355),Be=r(356),He=r(307),Ye=r(360),ze=function(e){var t=e.show,r=e.handleClose,a=e.handleDelete;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(Ye.a,{show:t,onHide:r,centered:!0,children:[Object(Z.jsx)(Ye.a.Header,{closeButton:!0,children:Object(Z.jsx)(Ye.a.Title,{children:"Warning"})}),Object(Z.jsx)(Ye.a.Body,{children:"Are you sure you want to delete the record?"}),Object(Z.jsxs)(Ye.a.Footer,{children:[Object(Z.jsx)(u.a,{variant:"secondary",onClick:r,children:"No"}),Object(Z.jsx)(u.a,{className:"red-btn",onClick:a,children:"Confirm"})]})]})})},We=Object(Ge.a)((function(e){return{head:{backgroundColor:"#0364C0",color:e.palette.common.white,fontSize:16},body:{fontSize:14}}}))(Fe.a),Xe=Object(Ge.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Be.a),$e=Object(le.a)({table:{minWidth:700}}),Je=function(e){var t=e.cols,r=e.data,a=e.handleDelete,n=e.show,c=e.handleClose,s=$e();return Object(Z.jsxs)(Ve.a,{component:He.a,children:[Object(Z.jsxs)(Ue.a,{className:s.table,"aria-label":"customized table",children:[Object(Z.jsx)(Ie.a,{children:Object(Z.jsx)(Be.a,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(Z.jsx)(We,{children:e.title},t)}))})}),Object(Z.jsx)(Pe.a,{children:null===r||void 0===r?void 0:r.map((function(e){return Object(Z.jsx)(Xe,{children:null===t||void 0===t?void 0:t.map((function(t){return Object(Z.jsx)(We,{children:t.render(e)},t.title)}))},e.id)}))})]}),Object(Z.jsx)(ze,{show:n,handleClose:c,handleDelete:a})]})},Ke=function(e){var t=e.data,r=e.loading,n=e.href,c=e.readAction,o=e.tableConfig,d=e.deleteAction,l=e.btnLabel,j=Object(a.useState)(!1),b=Object(De.a)(j,2),p=b[0],O=b[1],m=Object(a.useState)({}),h=Object(De.a)(m,2),x=h[0],v=h[1],f=Object(i.g)(),g=Object(z.b)(),y=Object(z.c)((function(e){return e.alertReducer}))||[];return Object(a.useEffect)((function(){return 0===t.length?g(c()):console.log("USING CACHED DATA FROM REDUX"),function(){g({type:U})}}),[]),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(s.b,{to:n,children:Object(Z.jsxs)(u.a,{className:"add-btn",children:[Object(Z.jsx)(qe.a,{})," ",l]})}),r?Object(Z.jsx)(Ae,{}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(se,{alerts:y}),Object(Z.jsx)(Je,{cols:o((function(e){f.push({pathname:"".concat(n),state:{record:e,update:!0}})}),(function(e){O(!0),v(e)})),data:t,show:p,handleDelete:function(){g(d(x,f,t)),O(!1)},handleClose:function(){return O(!1)}})]})]})},Qe=we({title:"Manage Medicine"})((function(){var e=Object(z.c)((function(e){return e.medReducer}))||{},t=e.meds,r=e.loading;return Object(Z.jsx)(Ke,{data:t,loading:r,href:"/add-medicine",readAction:oe,tableConfig:Te,deleteAction:de,btnLabel:"Add Medicine"})})),Ze=r(359),et=r(164),tt=r(169),rt=r.n(tt),at=function(e){var t=e.href;return Object(Z.jsxs)("div",{style:{float:"right"},children:[Object(Z.jsx)(s.b,{to:t,children:Object(Z.jsx)(u.a,{variant:"primary",type:"button",style:{marginRight:"30px"},children:"Back"})}),Object(Z.jsx)(u.a,{variant:"primary",type:"submit",children:"Save"})]})},nt=we({title:"Add Medicine"})((function(e){var t,r,n,c,s,u,p,h=e.location.state||{},x=h.record,v=h.update,g=Object(z.c)((function(e){return e.alertReducer}))||[],y=(Object(z.c)((function(e){return e.medReducer}))||{}).medTypes,_=(Object(z.c)((function(e){return e.storeReducer}))||{}).stores,E=Object(i.g)(),S=Object(z.b)(),R=Object(j.d)({resolver:Object(b.a)(Q)}),w=R.register,N=R.handleSubmit,M=R.formState.errors,D=R.reset;return Object(a.useEffect)((function(){0===y.length||0===_.length?V.a.all([B.get("medicine/types/"),B.get("store/")]).then(V.a.spread((function(e,t){console.log("DATA FETCHED FROM SERVER"),S({type:T,payload:e.data}),S({type:f,payload:t.data}),D({medicine_type_id:null===x||void 0===x?void 0:x.medicine_type_id,store_id:null===x||void 0===x?void 0:x.store_id})}))).catch((function(e){return console.log(e)})):console.log("USING CACHED DATA FROM REDUX")}),[]),Object(Z.jsxs)(d.a,{children:[Object(Z.jsx)(se,{alerts:g}),Object(Z.jsxs)(l.a,{onSubmit:N((function(e){var t=Object(o.a)(Object(o.a)({},e),{},{medicine_expiry_date:rt()(e.medicine_expiry_date).format("YYYY-MM-DD")});S(v?function(e,t){return function(){var r=Object(m.a)(O.a.mark((function r(a){var n,c,s;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B.put("medicine/",e);case 3:s=r.sent,a({type:L,payload:null===(n=s.data)||void 0===n?void 0:n.RECORD}),a(Y(null===(c=s.data)||void 0===c?void 0:c.MSG,"success")),t.push("/medicines"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0&&a(Y("Operation Failed !","success"));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(Object(o.a)(Object(o.a)({},t),{},{id:null===x||void 0===x?void 0:x.id}),E):function(e,t){return function(){var r=Object(m.a)(O.a.mark((function r(a){var n,c,s;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B.post("medicine/",e);case 3:s=r.sent,a({type:C,payload:null===(n=s.data)||void 0===n?void 0:n.RECORD}),a(Y(null===(c=s.data)||void 0===c?void 0:c.MSG,"success")),t.push("/medicines"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0&&a(Y("Operation Failed !","danger"));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,E))})),children:[Object(Z.jsxs)(Ze.a,{children:[Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(Z.jsxs)(l.a.Label,{children:["Medicine Name ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===x||void 0===x?void 0:x.medicine_name},w("medicine_name"))),Object(Z.jsx)(ee,{error:null===(t=M.medicine_name)||void 0===t?void 0:t.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(Z.jsxs)(l.a.Label,{children:["Medicine Price ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"number",step:".01",defaultValue:null===x||void 0===x?void 0:x.medicine_price},w("medicine_price"))),Object(Z.jsx)(ee,{error:null===(r=M.medicine_price)||void 0===r?void 0:r.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(Z.jsx)(l.a.Label,{children:"Medicine Details"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===x||void 0===x?void 0:x.medicine_details},w("medicine_details"))),Object(Z.jsx)(ee,{error:null===(n=M.medicine_details)||void 0===n?void 0:n.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(Z.jsx)(l.a.Label,{children:"Medicine Quantity"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"number",defaultValue:null===x||void 0===x?void 0:x.medicine_quantity},w("medicine_quantity"))),Object(Z.jsx)(ee,{error:null===(c=M.medicine_quantity)||void 0===c?void 0:c.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Medicine Type ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Z.jsxs)(l.a.Select,Object(o.a)(Object(o.a)({"aria-label":"Default select example",name:"medicine_type_id",defaultValue:null===x||void 0===x?void 0:x.medicine_type_id},w("medicine_type_id")),{},{children:[Object(Z.jsx)("option",{value:"",children:"Select Medicine Type..."}),null===y||void 0===y?void 0:y.map((function(e){return Object(Z.jsx)("option",{value:e.id,children:e.medicine_type_name},e.id)}))]})),Object(Z.jsx)(ee,{error:null===(s=M.medicine_type_id)||void 0===s?void 0:s.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Store ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Z.jsxs)(l.a.Select,Object(o.a)(Object(o.a)({"aria-label":"Default select example",defaultValue:null===x||void 0===x?void 0:x.store_id},w("store_id")),{},{children:[Object(Z.jsx)("option",{value:"",children:"Select Store..."}),null===_||void 0===_?void 0:_.map((function(e){return Object(Z.jsx)("option",{value:e.id,children:e.store_name},e.id)}))]})),Object(Z.jsx)(ee,{error:null===(u=M.store_id)||void 0===u?void 0:u.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(Z.jsxs)(l.a.Label,{children:["Medicine Expiry Date ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"date",defaultValue:null===x||void 0===x?void 0:x.medicine_expiry_date},w("medicine_expiry_date"))),Object(Z.jsx)(ee,{error:null===(p=M.medicine_expiry_date)||void 0===p?void 0:p.message})]})})]}),Object(Z.jsx)(at,{href:"/medicines"})]})]})})),ct=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.get("store/");case 3:r=e.sent,t({type:f,payload:r.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:g});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},st=function(e,t,r){return function(){var t=Object(m.a)(O.a.mark((function t(a){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:S,payload:e}),t.prev=1,t.next=4,B.delete("store/",{data:e});case 4:c=t.sent,a(Y(null===(n=c.data)||void 0===n?void 0:n.MSG,"success")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0&&(console.log(t.t0.response),a({type:R,payload:r}),a(Y("Operation Failed !","danger")));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},it=function(e,t,r){return[Ce(e,t),{title:"Store Name",render:function(e){return Object(Z.jsx)("span",{children:e.store_name})}},{title:"Username",render:function(e){return Object(Z.jsx)("span",{children:e.username})}},{title:"Store License",render:function(e){return Object(Z.jsx)("span",{children:0===e.store_license?"Retail Drug Licence":"Wholesale Drug Licence"})}},{title:"Store Type",render:function(e){return Object(Z.jsx)("span",{children:e.store_type_label})}}]},ot=we({title:"Manage Store"})((function(){var e=Object(z.c)((function(e){return e.storeReducer}))||{},t=e.stores,r=e.loading;return Object(Z.jsx)(Ke,{data:t,loading:r,href:"/add-store",readAction:ct,tableConfig:it,deleteAction:st,btnLabel:"Add Store"})})),dt=we({title:"Add Store"})((function(e){var t,r,n,c,s,u,p,h,x,v=e.location.state||{},f=v.record,g=v.update,S=(Object(z.c)((function(e){return e.storeReducer}))||{}).storeTypes,R=Object(z.c)((function(e){return e.alertReducer}))||[],N=Object(z.b)(),M=Object(i.g)(),C=Object(j.d)({resolver:Object(b.a)(J(g))}),T=C.register,D=C.handleSubmit,k=C.formState.errors,A=C.reset;return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FETCHING STORE TYPES...."),e.prev=1,e.next=4,B.get("store/types/");case 4:t=e.sent,N({type:y,payload:t.data}),A({store_type_id:null===f||void 0===f?void 0:f.store_type_id}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),N({type:_});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();0===S.length?e():console.log("USING CACHED STORE TYPES FROM REDUX")}),[]),Object(Z.jsxs)(d.a,{children:[Object(Z.jsx)(se,{alerts:R}),Object(Z.jsxs)(l.a,{onSubmit:D((function(e){N(g?function(e,t){return function(){var r=Object(m.a)(O.a.mark((function r(a){var n,c,s,i,o;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B.put("store/",e);case 3:s=r.sent,a({type:w,payload:null===(n=s.data)||void 0===n?void 0:n.RECORD}),a(Y(null===(c=s.data)||void 0===c?void 0:c.MSG,"success")),t.push("/stores"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0&&(console.log(r.t0.response),400===(null===(i=r.t0.response)||void 0===i?void 0:i.status)?(null===(o=r.t0.response)||void 0===o?void 0:o.data.username)&&a(Y(r.t0.response.data.username,"danger")):a(Y("Operation Failed !","danger")));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(Object(o.a)(Object(o.a)({},e),{},{id:null===f||void 0===f?void 0:f.id}),M):function(e,t){return function(){var r=Object(m.a)(O.a.mark((function r(a){var n,c,s;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B.post("store/",e);case 3:s=r.sent,a({type:E,payload:null===(n=s.data)||void 0===n?void 0:n.RECORD}),a(Y(null===(c=s.data)||void 0===c?void 0:c.MSG,"success")),t.push("/stores"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0&&400===r.t0.response.status&&r.t0.response.data.username&&a(Y(r.t0.response.data.username,"danger"));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(e,M))})),children:[Object(Z.jsxs)(Ze.a,{children:[Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Store Name ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===f||void 0===f?void 0:f.store_name},T("store_name"))),Object(Z.jsx)(ee,{error:null===(t=k.store_name)||void 0===t?void 0:t.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Username ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===f||void 0===f?void 0:f.username},T("username"))),Object(Z.jsx)(ee,{error:null===(r=k.username)||void 0===r?void 0:r.message})]})}),!g&&Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Password ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"password",defaultValue:null===f||void 0===f?void 0:f.password},T("password"))),Object(Z.jsx)(ee,{error:null===(n=k.password)||void 0===n?void 0:n.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsx)(l.a.Label,{children:"Email Id"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===f||void 0===f?void 0:f.store_email_id},T("store_email_id"))),Object(Z.jsx)(ee,{error:null===(c=k.store_email_id)||void 0===c?void 0:c.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsx)(l.a.Label,{children:"Mobile Number"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===f||void 0===f?void 0:f.mobile_number},T("mobile_number"))),Object(Z.jsx)(ee,{error:null===(s=k.mobile_number)||void 0===s?void 0:s.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsx)(l.a.Label,{children:"Registration No"}),Object(Z.jsx)(l.a.Control,Object(o.a)({type:"text",defaultValue:null===f||void 0===f?void 0:f.store_registration_no},T("store_registration_no"))),Object(Z.jsx)(ee,{error:null===(u=k.store_registration_no)||void 0===u?void 0:u.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{children:[Object(Z.jsxs)(l.a.Label,{children:["Store License ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Z.jsxs)(l.a.Group,{children:[Object(Z.jsx)(l.a.Check,Object(o.a)({inline:!0,label:"Retail Drug License",type:"radio",value:0,defaultChecked:0===(null===f||void 0===f?void 0:f.store_license)},T("store_license"))),Object(Z.jsx)(l.a.Check,Object(o.a)({inline:!0,label:"Wholesale Drug License",type:"radio",value:1,defaultChecked:1===(null===f||void 0===f?void 0:f.store_license)},T("store_license")))]}),Object(Z.jsx)(ee,{error:null===(p=k.store_license)||void 0===p?void 0:p.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Store Type ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Z.jsxs)(l.a.Select,Object(o.a)(Object(o.a)({"aria-label":"Default select example",defaultValue:null===f||void 0===f?void 0:f.store_type_id},T("store_type_id")),{},{children:[Object(Z.jsx)("option",{value:"",children:"Select Store Type..."}),null===S||void 0===S?void 0:S.map((function(e){return Object(Z.jsx)("option",{value:e.id,children:e.type_name},e.id)}))]})),Object(Z.jsx)(ee,{error:null===(h=k.store_type_id)||void 0===h?void 0:h.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsxs)(l.a.Label,{children:["Address 1 ",Object(Z.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Z.jsx)(l.a.Control,Object(o.a)({as:"textarea",rows:3,defaultValue:null===f||void 0===f?void 0:f.address_1},T("address_1"))),Object(Z.jsx)(ee,{error:null===(x=k.address_1)||void 0===x?void 0:x.message})]})}),Object(Z.jsx)(et.a,{lg:6,children:Object(Z.jsxs)(l.a.Group,{className:"mb-3",children:[Object(Z.jsx)(l.a.Label,{children:"Address 2"}),Object(Z.jsx)(l.a.Control,Object(o.a)({as:"textarea",rows:3,defaultValue:null===f||void 0===f?void 0:f.address_2},T("address_2")))]})})]}),Object(Z.jsx)(at,{href:"/stores"})]})]})})),lt=r(6),ut=["component"],jt=function(e){var t=e.component,r=Object(lt.a)(e,ut),a=Object(z.c)((function(e){return e.authReducer}))||{},n=a.loading,c=a.isAuthenticated;return Object(Z.jsx)(i.b,Object(o.a)(Object(o.a)({},r),{},{render:function(e){return n?Object(Z.jsx)("div",{className:"fs-loader",children:Object(Z.jsx)(Ae,{})}):c?Object(Z.jsx)(t,Object(o.a)({},e)):Object(Z.jsx)(i.a,{to:{pathname:"/",authenticated:!1}})}}))},bt=function(){var e=Object(z.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.get("store/auth-check/");case 3:t({type:h}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0&&t({type:x});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("storage",(function(){P()||e({type:x})}))}),[e]),Object(Z.jsx)(s.a,{children:Object(Z.jsxs)(i.d,{children:[Object(Z.jsx)(i.b,{path:"/",component:ie,exact:!0}),Object(Z.jsx)(jt,{path:"/stores",component:ot}),Object(Z.jsx)(jt,{path:"/add-store",component:dt}),Object(Z.jsx)(jt,{path:"/medicines",component:Qe}),Object(Z.jsx)(jt,{path:"/add-medicine",component:nt})]})})},pt=(r(304),r(62)),Ot={isAuthenticated:!1,loading:!0},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{isAuthenticated:!0,loading:!1};case x:case v:return Object(o.a)(Object(o.a)({},e),{},{user:null,isAuthenticated:!1,loading:!1});default:return e}},ht=r(12),xt={stores:[],loading:!0,storeTypes:[]},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(o.a)(Object(o.a)({},e),{},{stores:t.payload,loading:!1});case g:return Object(o.a)(Object(o.a)({},e),{},{loading:!1});case y:return Object(o.a)(Object(o.a)({},e),{},{storeTypes:t.payload,loading:!1});case _:return Object(o.a)(Object(o.a)({},e),{},{loading:!1});case E:return Object(o.a)(Object(o.a)({},e),{},{stores:[].concat(Object(ht.a)(e.stores),[t.payload])});case w:return Object(o.a)(Object(o.a)({},e),{},{stores:e.stores.map((function(e){return e.id===t.payload.id?t.payload:e}))});case S:return Object(o.a)(Object(o.a)({},e),{},{stores:e.stores.filter((function(e){return e.id!==t.payload.id}))});case R:return Object(o.a)(Object(o.a)({},e),{},{stores:t.payload});default:return e}},ft={meds:[],loading:!0,medTypes:[]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(o.a)(Object(o.a)({},e),{},{meds:t.payload,loading:!1});case M:return Object(o.a)(Object(o.a)({},e),{},{loading:!1});case T:return Object(o.a)(Object(o.a)({},e),{},{medTypes:t.payload,loading:!1});case D:return Object(o.a)(Object(o.a)({},e),{},{loading:!1});case C:return Object(o.a)(Object(o.a)({},e),{},{meds:[].concat(Object(ht.a)(e.meds),[t.payload])});case L:return Object(o.a)(Object(o.a)({},e),{},{meds:e.meds.map((function(e){return e.id===t.payload.id?t.payload:e}))});case k:return Object(o.a)(Object(o.a)({},e),{},{meds:e.meds.filter((function(e){return e.id!==t.payload.id}))});case A:return Object(o.a)(Object(o.a)({},e),{},{meds:t.payload});default:return e}},yt=[],_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return[].concat(Object(ht.a)(e),[t.payload]);case G:return e.filter((function(e){return e.id!==t.payload}));case U:return[];default:return e}},Et=Object(pt.combineReducers)({authReducer:mt,storeReducer:vt,medReducer:gt,alertReducer:_t}),St=function(e,t){return t.type===v&&(e=void 0),Et(e,t)},Rt=r(170),wt=r(171),Nt=Object(wt.composeWithDevTools)(Object(pt.applyMiddleware)(Rt.a)),Mt=Object(pt.createStore)(St,Nt);c.a.render(Object(Z.jsx)(z.a,{store:Mt,children:Object(Z.jsx)(bt,{})}),document.getElementById("root"))}},[[305,1,2]]]);
//# sourceMappingURL=main.5deff944.chunk.js.map