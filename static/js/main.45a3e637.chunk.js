(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(0),i=a.n(n),r=a(13),o=a.n(r),s=a(84),l=a(173),j=a(17),d=a(156),b=a(179),u=a(172),h=a(171),O=a(83),m=a.n(O),p=a(170),g=a(47),x=a(24),f=a(109),C=a(159),y=a(174),v=a(32);a(98),a(102);v.a.initializeApp({apiKey:"AIzaSyDr8Zix9phP7yKXnd47btENUXyXQvA3Eec",authDomain:"mdmundonotes.firebaseapp.com",projectId:"mdmundonotes",storageBucket:"mdmundonotes.appspot.com",messagingSenderId:"1019982159986",appId:"1:1019982159986:web:c7098cc516c4fa26faa2eb"});var k=v.a.database(),N=new v.a.auth.GoogleAuthProvider;N.addScope("profile"),N.addScope("email");var S=new v.a.auth.GithubAuthProvider,T=new v.a.auth.TwitterAuthProvider,w=function(){return Object(c.jsx)(f.a,{fullWidth:!0,variant:"text",color:"secondary",onClick:function(){v.a.auth().signOut()},children:"Log out"})},I=Object(d.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),A=function(){var e=Object(x.a)(v.a.auth()),t=Object(j.a)(e,3),a=t[0],i=(t[1],t[2],Object(n.useState)("")),r=Object(j.a)(i,2),o=r[0],s=r[1],l=Object(n.useState)(""),d=Object(j.a)(l,2),b=d[0],u=d[1],h=Object(n.useState)(""),O=Object(j.a)(h,2),m=O[0],p=O[1],g=Object(n.useState)(""),N=Object(j.a)(g,2),S=N[0],T=N[1],A=Object(n.useState)(!1),P=Object(j.a)(A,2),B=P[0],D=P[1],F=Object(n.useState)(!1),L=Object(j.a)(F,2),W=L[0],z=L[1],M=I();return Object(c.jsxs)("form",{className:M.form,onSubmit:function(e){e.preventDefault(),D(!o),z(!b),p(o?"":"Title can not be empty."),T(b?"":"Body can not be empty."),o&&b&&(k.ref("users/".concat(null===a||void 0===a?void 0:a.uid,"/notes")).push({title:o,body:b,importance:2,createdAt:v.a.database.ServerValue.TIMESTAMP}),s(""),u(""))},noValidate:!0,children:[Object(c.jsx)(y.a,{value:o,onChange:function(e){return s(e.target.value)},error:B,helperText:m,variant:"outlined",margin:"normal",fullWidth:!0,id:"title",label:"Title",name:"title",autoComplete:"off",autoFocus:!0}),Object(c.jsx)(y.a,{value:b,onChange:function(e){return u(e.target.value)},error:W,helperText:S,variant:"outlined",margin:"normal",fullWidth:!0,name:"body",label:"Body",type:"body",id:"body",autoComplete:"off",multiline:!0}),Object(c.jsxs)(C.a,{container:!0,spacing:1,className:M.submit,children:[Object(c.jsx)(C.a,{item:!0,xs:9,children:Object(c.jsx)(f.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",children:"Add Note"})}),Object(c.jsx)(C.a,{item:!0,xs:3,children:Object(c.jsx)(w,{})})]})]})},P=a(21),B=a(158),D=a(110),F=a(76),L=a(175),W=a(80),z=a.n(W),M=a(81),E=a.n(M),G=a(79),H=a.n(G),U=a(165),X=a(161),J=a(162),K=a(164),V=a(163),Z=a(178),Q=a(77),q=a.n(Q),R=a(82),Y=a.n(R),$=a(56),_=a(57),ee=a(59),te=a(58),ae=a(160),ce=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(1.5),padding:e.spacing(.5),display:"flex",overflow:"auto",flexDirection:"column"},italic:{fontStyle:"italic",fontSize:e.spacing(1)},high:{color:e.palette.getContrastText($.a[900]),backgroundColor:$.a[900]},significant:{color:e.palette.getContrastText(_.a[800]),backgroundColor:_.a[800]},neutral:{color:e.palette.getContrastText(ee.a[600]),backgroundColor:ee.a[600]},reduced:{color:e.palette.getContrastText(te.a[500]),backgroundColor:te.a[500]},low:{color:e.palette.getContrastText(ae.a[300]),backgroundColor:ae.a[300]},break:{wordBreak:"break-all"},item:{minHeight:e.spacing(18)}}})),ne=function(e){var t=e.note,a=Object(x.a)(v.a.auth()),n=Object(j.a)(a,3),i=n[0],r=(n[1],n[2],ce());return Object(c.jsx)(D.a,{className:r.paper,children:Object(c.jsxs)(X.a,{className:r.item,children:[Object(c.jsx)(J.a,{children:Object(c.jsx)(b.a,{className:r[["high","significant","neutral","reduced","low"][t.importance]],children:!!t.checked&&Object(c.jsx)(q.a,{})})}),Object(c.jsx)(V.a,{disableTypography:!0,children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{variant:"body1",className:r.break,children:t.title}),t.body.split("\n").map((function(e,t){return Object(c.jsx)(g.a,{color:"textSecondary",variant:"body1",className:r.break,children:e||"\xa0"},t)})),Object(c.jsx)(g.a,{color:"textSecondary",variant:"caption",className:r.italic,children:Object(L.a)(t.createdAt)})]})}),Object(c.jsx)(K.a,{children:Object(c.jsxs)(C.a,{container:!0,direction:"column",justify:"space-around",alignItems:"center",children:[Object(c.jsx)(C.a,{item:!0,xs:4,children:Object(c.jsx)(Z.a,{title:"Delete",placement:"right",children:Object(c.jsx)(U.a,{onClick:function(){return k.ref("users/".concat(i.uid,"/notes/").concat(t.key)).remove()},children:Object(c.jsx)(H.a,{})})})}),Object(c.jsx)(C.a,{item:!0,xs:4,children:Object(c.jsx)(Z.a,{title:t.checked?"Uncheck":"Check",placement:"right",children:Object(c.jsx)(U.a,{onClick:function(e){return k.ref("users/".concat(i.uid,"/notes/").concat(t.key)).update({checked:!t.checked})},children:t.checked?Object(c.jsx)(z.a,{}):Object(c.jsx)(E.a,{})})})}),Object(c.jsx)(C.a,{item:!0,xs:4,children:Object(c.jsx)(Z.a,{title:"Tag",placement:"right",children:Object(c.jsx)(U.a,{onClick:function(){k.ref("users/".concat(i.uid,"/notes/").concat(t.key)).update({importance:(t.importance+1)%5})},children:Object(c.jsx)(Y.a,{})})})})]})})]})})},ie=a(168),re=a(166),oe=a(167),se=Object(d.a)((function(e){return{progress:{display:"block",margin:"auto"},card:{marginTop:e.spacing(6)},title:{marginBottom:e.spacing(3)}}})),le=function(e){var t=se();return Object(c.jsx)(re.a,{className:t.card,children:Object(c.jsxs)(oe.a,{children:[Object(c.jsx)(g.a,{className:t.title,variant:"subtitle2",display:"block",align:"center",gutterBottom:!0,children:e.text}),Object(c.jsx)(ie.a,{className:t.progress,variant:"indeterminate",size:"2.2rem"})]})})},je=Object(d.a)((function(e){return{list:{width:"100%"},paper:{marginTop:e.spacing(1.5),padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},grid:{paddingTop:e.spacing(2)}}})),de=function(){var e=Object(x.a)(v.a.auth()),t=Object(j.a)(e,3),a=t[0],n=(t[1],t[2],Object(F.a)(k.ref("users/".concat(a.uid,"/notes")))),i=Object(j.a)(n,3),r=i[0],o=i[1],s=(i[2],je());return Object(c.jsx)(c.Fragment,{children:o?Object(c.jsx)(le,{text:"Loading Notes"}):0===r.length?Object(c.jsx)(C.a,{item:!0,className:s.grid,children:Object(c.jsx)(B.a,{className:s.list,children:Object(c.jsx)(D.a,{className:s.paper,children:Object(c.jsx)(g.a,{variant:"body2",display:"block",color:"textSecondary",children:"There is no note here."})})})}):Object(c.jsx)(C.a,{item:!0,className:s.grid,children:Object(c.jsx)(B.a,{className:s.list,children:r.map((function(e){return Object(c.jsx)(ne,{note:Object(P.a)({key:e.key},e.val())},e.key)}))})})})},be=a(169),ue=a(54),he=function(e){return Object(c.jsx)(ue.a,Object(P.a)(Object(P.a)({},e),{},{children:Object(c.jsx)("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})}))},Oe=function(e){return Object(c.jsx)(ue.a,Object(P.a)(Object(P.a)({},e),{},{children:Object(c.jsx)("path",{d:"M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"})}))},me=function(e){return Object(c.jsx)(ue.a,Object(P.a)(Object(P.a)({},e),{},{children:Object(c.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}))},pe=a(177),ge=Object(d.a)((function(e){return{login:{marginTop:e.spacing(7)}}})),xe=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),s=o[0],l=o[1],d=ge();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(be.a,{className:d.login,fullWidth:!0,orientation:"vertical",variant:"text",size:"large",children:[Object(c.jsx)(f.a,{startIcon:Object(c.jsx)(Oe,{}),onClick:function(){v.a.auth().signInWithPopup(N).catch((function(e){i(e.message),l(!0)}))},children:"Sign in with Google"}),Object(c.jsx)(f.a,{startIcon:Object(c.jsx)(he,{}),onClick:function(){v.a.auth().signInWithPopup(T).catch((function(e){i(e.message),l(!0)}))},children:"Sign in with Twitter"}),Object(c.jsx)(f.a,{startIcon:Object(c.jsx)(me,{viewBox:"0 0 16 16"}),onClick:function(){v.a.auth().signInWithPopup(S).catch((function(e){i(e.message),l(!0)}))},children:"Sign in with Github"})]}),Object(c.jsx)(pe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,onClose:function(){l(!1)},autoHideDuration:4e3,message:a||"An error occurred."})]})},fe=function(){return Object(c.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Created by ",Object(c.jsx)(p.a,{color:"inherit",href:"https://github.com/mdmundo",children:"Edmundo Paulino"}),"."]})},Ce=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},upper:{display:"flex",flexDirection:"column",alignItems:"center"},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}})),ye=function(){var e=Object(x.a)(v.a.auth()),t=Object(j.a)(e,3),a=t[0],n=t[1],i=(t[2],Ce());return Object(c.jsxs)("div",{className:i.root,children:[Object(c.jsx)(h.a,{}),Object(c.jsxs)(u.a,{component:"main",className:i.main,maxWidth:"xs",children:[Object(c.jsxs)("div",{className:i.upper,children:[Object(c.jsx)(b.a,{className:i.avatar,children:Object(c.jsx)(m.a,{})}),Object(c.jsx)(g.a,{component:"h1",variant:"h3",children:"Notes"})]}),a?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(A,{}),Object(c.jsx)(de,{})]}):n?Object(c.jsx)(le,{text:"Loading User"}):Object(c.jsx)(xe,{})]}),Object(c.jsx)("footer",{className:i.footer,children:Object(c.jsx)(u.a,{children:Object(c.jsx)(fe,{})})})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))},ke=Object(s.a)({palette:{primary:{dark:"rgb(17, 82, 147)",light:"rgb(71, 145, 219)",main:"#1976d2"},secondary:{dark:"rgb(154, 0, 54)",light:"rgb(227, 51, 113)",main:"rgb(220, 0, 78)"}}});o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l.a,{theme:ke,children:Object(c.jsx)(ye,{})})}),document.getElementById("root")),ve()}},[[108,1,2]]]);
//# sourceMappingURL=main.45a3e637.chunk.js.map