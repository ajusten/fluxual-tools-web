(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AxX8:function(n,a,e){"use strict";e.r(a);var r=e("8Y7J"),b='## What is Converting a JSON Map to an Array?\r\n\r\nMany JSON documents are a map of key-value pairs.  This works well for quickly searching if a key exists by looking it up in the map.\r\n\r\nAn example JSON map:\r\n```javascript\r\n{\r\n  "one": "a",\r\n  "two": "b",\r\n  "three": "c"\r\n}\r\n```\r\n\r\nThis tool will quickly convert a map to an array, by converting each key-value pair to a JSON object.\r\n\r\nThe above map converted to an array:\r\n```javascript\r\n[\r\n  {\r\n    "key": "one",\r\n    "value": "a"\r\n  },\r\n  {\r\n    "key": "two",\r\n    "value": "b"\r\n  },\r\n  {\r\n    "key": "three",\r\n    "value": "c"\r\n  }\r\n]\r\n```\r\n\r\n## When to convert a JSON Map to an Array?\r\n\r\nSome tools or algorithms are designed to work on an array, such as converting JSON to CSV.  A conversion is needed when the JSON is a regular  mapped object.',t=e("omGn");class o{constructor(){this.tool={id:"json-map-to-array",action:"Convert",schema:(new t.a).textareaProperty("input",n=>n.title("JSON").description("JSON Map to Transform")).objectProperty("advanced",n=>n.title("Advanced").collapse().stringProperty("keyName",n=>n.title("Key Name").default("key").required()).stringProperty("valueName",n=>n.title("Value Name").default("value").required())).create(),onTransform:n=>{var a=JSON.parse(n.input);return JSON.stringify(Object.keys(a).map(e=>{var r={};return r[n.advanced.keyName]=e,r[n.advanced.valueName]=a[e],r}),null,2)},documentation:b}}}class c{}var l=e("t68o"),E=e("zbXB"),u=e("NcP4"),i=e("oMTq"),s=e("pMnS"),d=e("SVse"),p=e("s7LF"),m=e("/q54"),y=e("QQfA"),v=e("IP0z"),f=e("/Co4"),g=e("POq0"),h=e("Xd0L"),N=e("s6ns"),k=e("821u"),w=e("/HVE"),J=e("JjoW"),A=e("cUpR"),j=e("qJ5m"),q=e("Mz6y"),O=e("qgBN"),M=e("ZcxY"),S=e("IheW"),T=e("VDRc"),C=e("ura0"),x=e("Nhcz"),z=e("u9T3"),P=e("zMNK"),V=e("hOhj"),H=e("Fwaw"),B=e("mkRZ"),I=e("igqZ"),L=e("r0V8"),K=e("kNGD"),R=e("5GAg"),_=e("5Bek"),F=e("c9fC"),G=e("HsOI"),W=e("Gi4r"),Z=e("oapL"),D=e("ZwOa"),Q=e("elxJ"),X=e("lT8R"),Y=e("pBi1"),U=e("qJ50"),$=e("rWV4"),nn=e("02hT"),an=e("Q+lL"),en=e("BzsH"),rn=e("KnIn"),bn=e("pKmL"),tn=e("iInd"),on=e("dvZr"),cn=e("v9Ap"),ln=e("UxM3"),En=e("CY5v");e.d(a,"JsonMapToArrayModuleNgFactory",(function(){return un})),e.d(a,"RenderType_JsonMapToArrayComponent",(function(){return sn})),e.d(a,"View_JsonMapToArrayComponent_0",(function(){return dn})),e.d(a,"View_JsonMapToArrayComponent_Host_0",(function(){return pn})),e.d(a,"JsonMapToArrayComponentNgFactory",(function(){return mn}));var un=r.rb(c,[],(function(n){return r.Db([r.Eb(512,r.j,r.ab,[[8,[l.a,E.b,E.a,u.a,i.z,i.A,i.B,i.C,i.D,i.E,i.F,i.G,i.H,i.I,i.J,i.K,i.L,i.M,i.N,i.O,i.P,i.Q,i.R,i.S,i.c,i.d,i.e,i.f,i.g,i.h,i.i,i.j,i.k,i.l,i.m,i.n,i.o,i.p,i.q,i.r,i.s,i.t,i.u,i.v,i.w,i.x,i.y,s.a,mn]],[3,r.j],r.w]),r.Eb(4608,d.m,d.l,[r.t,[2,d.B]]),r.Eb(4608,p.z,p.z,[]),r.Eb(4608,p.g,p.g,[]),r.Eb(5120,r.b,(function(n,a){return[m.j(n,a)]}),[d.d,r.A]),r.Eb(4608,y.c,y.c,[y.i,y.e,r.j,y.h,y.f,r.q,r.y,d.d,v.b,[2,d.g]]),r.Eb(5120,y.j,y.k,[y.c]),r.Eb(5120,f.b,f.c,[y.c]),r.Eb(4608,g.c,g.c,[]),r.Eb(4608,h.b,h.b,[]),r.Eb(5120,N.b,N.c,[y.c]),r.Eb(135680,N.d,N.d,[y.c,r.q,[2,d.g],[2,N.a],N.b,[3,N.d],y.e]),r.Eb(4608,k.i,k.i,[]),r.Eb(5120,k.a,k.b,[y.c]),r.Eb(4608,h.a,h.w,[[2,h.f],w.a]),r.Eb(5120,J.a,J.b,[y.c]),r.Eb(4608,A.e,h.c,[[2,h.g],[2,h.l]]),r.Eb(5120,j.b,j.a,[[3,j.b]]),r.Eb(5120,q.a,q.b,[y.c]),r.Eb(4608,O.d,O.d,[]),r.Eb(5120,O.h,(function(){return[new O.l,new O.I]}),[]),r.Eb(4608,O.H,O.H,[]),r.Eb(4608,O.g,O.g,[O.h,O.H]),r.Eb(4608,M.c,M.c,[r.A,[2,S.a],A.b,M.d]),r.Eb(1073742336,d.c,d.c,[]),r.Eb(1073742336,p.y,p.y,[]),r.Eb(1073742336,p.l,p.l,[]),r.Eb(1073742336,p.u,p.u,[]),r.Eb(1073742336,m.c,m.c,[]),r.Eb(1073742336,v.a,v.a,[]),r.Eb(1073742336,T.i,T.i,[]),r.Eb(1073742336,C.b,C.b,[]),r.Eb(1073742336,x.a,x.a,[]),r.Eb(1073742336,z.a,z.a,[[2,m.g],r.A]),r.Eb(1073742336,h.l,h.l,[[2,h.d],[2,A.f]]),r.Eb(1073742336,w.b,w.b,[]),r.Eb(1073742336,h.v,h.v,[]),r.Eb(1073742336,h.t,h.t,[]),r.Eb(1073742336,h.q,h.q,[]),r.Eb(1073742336,P.g,P.g,[]),r.Eb(1073742336,V.c,V.c,[]),r.Eb(1073742336,y.g,y.g,[]),r.Eb(1073742336,f.e,f.e,[]),r.Eb(1073742336,H.c,H.c,[]),r.Eb(1073742336,B.e,B.e,[]),r.Eb(1073742336,I.f,I.f,[]),r.Eb(1073742336,g.d,g.d,[]),r.Eb(1073742336,L.d,L.d,[]),r.Eb(1073742336,L.c,L.c,[]),r.Eb(1073742336,K.e,K.e,[]),r.Eb(1073742336,N.g,N.g,[]),r.Eb(1073742336,R.a,R.a,[]),r.Eb(1073742336,k.j,k.j,[]),r.Eb(1073742336,_.c,_.c,[]),r.Eb(1073742336,F.c,F.c,[]),r.Eb(1073742336,G.e,G.e,[]),r.Eb(1073742336,W.c,W.c,[]),r.Eb(1073742336,Z.c,Z.c,[]),r.Eb(1073742336,D.c,D.c,[]),r.Eb(1073742336,h.x,h.x,[]),r.Eb(1073742336,h.n,h.n,[]),r.Eb(1073742336,Q.d,Q.d,[]),r.Eb(1073742336,J.d,J.d,[]),r.Eb(1073742336,X.b,X.b,[]),r.Eb(1073742336,Y.d,Y.d,[]),r.Eb(1073742336,Y.c,Y.c,[]),r.Eb(1073742336,U.e,U.e,[]),r.Eb(1073742336,j.c,j.c,[]),r.Eb(1073742336,$.k,$.k,[]),r.Eb(1073742336,q.c,q.c,[]),r.Eb(1073742336,O.N,O.N,[]),r.Eb(1073742336,O.f,O.f,[]),r.Eb(1073742336,O.m,O.m,[]),r.Eb(1073742336,O.e,O.e,[]),r.Eb(1073742336,h.m,h.m,[]),r.Eb(1073742336,nn.b,nn.b,[]),r.Eb(1073742336,an.d,an.d,[]),r.Eb(1073742336,en.b,en.b,[]),r.Eb(1073742336,M.b,M.b,[]),r.Eb(1073742336,rn.a,rn.a,[]),r.Eb(1073742336,bn.a,bn.a,[]),r.Eb(1073742336,tn.m,tn.m,[[2,tn.r],[2,tn.k]]),r.Eb(1073742336,c,c,[]),r.Eb(256,K.a,{separatorKeyCodes:[on.f]},[]),r.Eb(256,h.e,h.i,[]),r.Eb(256,M.d,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[]),r.Eb(1024,tn.i,(function(){return[[{path:"",component:o}]]}),[])])})),sn=r.sb({encapsulation:2,styles:[],data:{}});function dn(n){return r.Pb(0,[(n()(),r.ub(0,0,null,null,1,"app-transform-tool",[],null,null,null,cn.b,cn.a)),r.tb(1,114688,null,0,ln.a,[En.a],{tool:[0,"tool"]},null)],(function(n,a){n(a,1,0,a.component.tool)}),null)}function pn(n){return r.Pb(0,[(n()(),r.ub(0,0,null,null,1,"ng-component",[],null,null,null,dn,sn)),r.tb(1,49152,null,0,o,[],null,null)],null,null)}var mn=r.qb("ng-component",o,pn,{},{},[])}}]);