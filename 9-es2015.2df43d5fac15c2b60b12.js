(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1fYD":function(e,t,n){e.exports=function(){var e,t,n,r=(t=[Object,Function,Array,String,Boolean,Number,Date,RegExp,Error],n=t.length,function(e){for(var r=0;r<n;r++)if(t[r]===e)return!0;return!1}),a=(e={}.toString,function(t){var n=e.call(t).slice(8,-1);if(null==t)return n.toLowerCase();var a=i(t);return a&&!r(a)?a.name:n});function i(e){return null==e?e:e.constructor}function o(e,t){return(i(t)===String?a:i)(e)===t}function u(e,t){return e instanceof t}function s(e,t){if(!o(t,Array))throw"Second argument to .any() should be array";for(var n=0;n<t.length;n++)if(o(e,t[n]))return!0;return!1}var c=function(e,t){return 1==arguments.length?i(e):o(t,Array)?s(e,t):o(e,t)};return c.instance=u,c.string=a,c.of=i,c.is=o,c.any=s,c.extension=function(e,t){return u(e.prototype,t)},c}()},"Aw/l":function(e,t,n){var r=n("1fYD"),a=n("rL1p"),i={boolean:"String",string:"String",number:"Int32",date:"Date",timestamp:"DateTime",object:"Nested",regexp:"String",undefined:"String",null:"String"},o=function(e,t){return["  ",e," ",t,","].join("")};e.exports=function(e,t,n){return"string"!=typeof e&&(t=e,e="generic"),n||(n=null),function e(t,n,u){var s,c,b,p,l=n.tableName,f=n.parentTableName,m=n.parentTableId,E=n.parentTableIdType,d=Object.keys(t),y=[],g=[],h=null,T="string";y.push(function(e){return["CREATE TABLE ",e," ("].join("")}(l)),f&&y.push(o(f+"_"+m,i[E]));for(var N=0;N<d.length;N++)("id"===d[N].toLowerCase()||d[N].toLowerCase().indexOf("_id")>-1)&&(t[s=d[N]]=t[d[N]],d[N]=s,h=d[N],T=typeof t[d[N]]);for(h||y.push(o(h="id",i[T=E||T])),N=0;N<d.length;N++)if("date"!=(p=(b=t[c=d[N]])instanceof Date?"date":r.string(b).toLowerCase())||u||(u=c),"undefined"!==p&&(p=a.isTimestamp(b)?"timestamp":p),"function"!==p)if("object"!==p||b.length)if("object"!==p&&"array"!==p)y.push(o(c,i[p]));else{if("object"==typeof b[0]){g.push(""),g.push(e(b[0],{parentTableName:l,parentTableId:h,parentTableIdType:T,tableName:l+"_"+c}).join(""));continue}g.push(""),g.push(e({value:typeof b[0]},{parentTableName:l,parentTableId:h,parentTableIdType:T,tableName:l+"_"+c}).join(""))}else g.push(""),g.push(e(b,{parentTableName:l,parentTableId:h,parentTableIdType:T,tableName:l+"_"+c}).join(""));return y[y.length-1]=a.arrayLastItem(y).substr(0,a.arrayLastItem(y).length-1),y.push(function(e,t){return t?[") ENGINE = MergeTree(",t,", (",e,", ",t,"), 8192);"].join(""):[") ENGINE = Memory;"].join("")}(h,u)),y.concat(g)}(t,{tableName:e},n).join("")}},IYS3:function(e,t,n){var r=n("rL1p");function a(e){return Array.isArray(e)?"REPEATED":"NULLABLE"}function i(e){if(Array.isArray(e))return i(e[0]);if(e instanceof Date)return"TIMESTAMP";if("object"==typeof e)return"RECORD";if("boolean"==typeof e)return"BOOLEAN";if("string"==typeof e){if(r.isDateString(e))return"DATE";if(r.isTimestamp(e))return"TIMESTAMP"}return isNaN(e)?"STRING":Number.isInteger(parseFloat(e))?"INTEGER":"FLOAT"}e.exports=function(e){return function e(t){return Object.keys(t).map((function(n){var r=t[n],o={name:n,type:i(t[n]),mode:a(t[n])};return"RECORD"===o.type&&(o.fields=e("REPEATED"===o.mode?r[0]:r)),o}))}(e)}},JeW5:function(e,t,n){t.generic=n("NekS"),t.mongoose=n("yhns"),t.bigquery=n("IYS3"),t.mysql=n("TQoY"),t.json=n("TR5Q"),t.clickhouse=n("Aw/l")},NekS:function(e,t,n){var r=n("1fYD"),a=n("rL1p");e.exports=function e(t,n){for(var i in n=n||{},t){var o=t[i],u=r.string(o).toLowerCase();"undefined"===u&&(u="null"),"string"===u&&a.isDate(o)&&(u="date"),"object"!==u?n[i]={type:u}:(n[i]=e(t[i]),n[i].type=u)}return n}},TQoY:function(e,t,n){var r=n("1fYD"),a=n("rL1p"),i={boolean:"BOOLEAN",string:"TEXT",number:"INT",date:"DATE",timestamp:"TIMESTAMP",regexp:"TEXT",undefined:"TEXT",null:"TEXT"},o=function(e,t){return["  ",e," ",t,","].join("")};e.exports=function(e,t){return"string"!=typeof e&&(t=e,e="generic"),function e(t,n){var u,s,c,b,p=n.tableName,l=n.parentTableName,f=n.parentTableId,m=n.parentTableIdType,E=Object.keys(t),d=[],y=[],g=null,h="string";d.push(function(e){return["CREATE TABLE ",e," ("].join("")}(p)),l&&d.push(o(l+"_"+f,i[m]));for(var T=0;T<E.length;T++)("id"===E[T].toLowerCase()||E[T].toLowerCase().indexOf("_id")>-1)&&(t[u=E[T]]=t[E[T]],E[T]=u,g=E[T],h=typeof t[E[T]]);for(g||d.push(o(g="id",i[h=m||h])),T=0;T<E.length;T++)if("undefined"!==(b=(c=t[s=E[T]])instanceof Date?"date":r.string(c).toLowerCase())&&(b=a.isTimestamp(c)?"timestamp":b),"function"!==b)if("object"!==b||c.length)if("object"!==b&&"array"!==b)d.push(o(s,i[b]));else{if("object"==typeof c[0]){y.push(""),y.push(e(c[0],{parentTableName:p,parentTableId:g,parentTableIdType:h,tableName:p+"_"+s}).join("\n"));continue}y.push(""),y.push(e({value:typeof c[0]},{parentTableName:p,parentTableId:g,parentTableIdType:h,tableName:p+"_"+s}).join("\n"))}else y.push(""),y.push(e(c,{parentTableName:p,parentTableId:g,parentTableIdType:h,tableName:p+"_"+s}).join("\n"));return d.push(function(e){return["  PRIMARY KEY (",e,"),"].join("")}(g)),l&&d.push(["  FOREIGN KEY (",l+"_id",") REFERENCES ",l,"(",f,"),"].join("")),d[d.length-1]=a.arrayLastItem(d).substr(0,a.arrayLastItem(d).length-1),d.push(");"),d.concat(y)}(t,{tableName:e}).join("\n")}},TR5Q:function(e,t,n){var r=n("1fYD");function a(e){return"date"===r.string(e).toLowerCase()?"date-time":null}function i(e){var t=r.string(e).toLowerCase();return"date"===t?"string":"regexp"===t?"string":"function"===t?"string":t}function o(e,t,n){var r,a,i;e=Object.keys(e),n=n||[];for(var o=0,u=(t=Object.keys(t)).length;o<u;o++)i=e.indexOf(r=t[o]),a=n.indexOf(r),-1===i?-1!==a&&n.splice(a,1):-1===a&&n.push(r);return n}function u(e,t,n){var c,b,p;n&&t?t={items:t}:((t=t||{}).type=i(e),t.items=t.items||{},p=t.items.type||null);for(var l=0,f=e.length;l<f;l++){var m=i(e[l]),E=a(e[l]);if(p&&m!==p){t.items.oneOf=[],b=!0;break}p=m,c=E}if(!b&&p?(t.items.type=p,c&&(t.items.format=c)):b&&"object"!==p&&(t.items={oneOf:[{type:p}],required:t.items.required}),void 0!==t.items.oneOf||"object"===p)for(var d=0,y=e.length;d<y;d++){var g,h=e[d],T=i(h),N=a(h);if("object"===T?(t.items.properties&&(t.items.required=o(t.items.properties,h,t.items.required)),g=s(h,b?{}:t.items.properties,!0)):"array"===T?g=u(h,b?{}:t.items.properties,!0):((g={}).type=T,N&&(g.format=N)),b){var j=r.string(h).toLowerCase(),v={};g.type||"object"!==j||(v.properties=g,v.type="object",g=v),t.items.oneOf.push(g)}else{if("object"!==t.items.type)continue;t.items.properties=g}}return n?t.items:t}function s(e,t,n){for(var r in n&&t?t={properties:t}:((t=t||{}).type=i(e),t.properties=t.properties||{}),e){var o=e[r],c=i(o),b=a(o);if("object"!==(c="undefined"===c?"null":c))if("array"!==c)if(t.properties[r]){var p=t.properties[r],l=Array.isArray(p.type);l&&p.type.indexOf(c)<0&&p.type.push(c),l||p.type===c||(p.type=[p.type,c])}else t.properties[r]={},t.properties[r].type=c,b&&(t.properties[r].format=b);else t.properties[r]=u(o,t.properties[r]);else t.properties[r]=s(o,t.properties[r])}return n?t.properties:t}e.exports=function(e,t){var n,a={$schema:"http://json-schema.org/draft-04/schema#"};return"string"!=typeof e?(t=e,e=void 0):a.title=e,a.type=r.string(t).toLowerCase(),"object"===a.type&&(n=s(t),a.type=n.type,a.properties=n.properties),"array"===a.type&&(n=u(t),a.type=n.type,a.items=n.items,a.title&&(a.items.title=a.title,a.title+=" Set")),a}},f7CR:function(e,t,n){"use strict";n.r(t);var r=n("8Y7J"),a=n("JeW5"),i=n.n(a),o="",u=n("omGn"),s=n("CY5v");class c{constructor(){this.tool={id:"json-to-schema",action:"Create Schema",demo:{name:"CountryData",input:JSON.stringify(s.a,null,3)},schema:(new u.a).stringProperty("name",e=>e.title("Name").default("default").description("Name of schema to create").required()).textareaProperty("input",e=>e.title("JSON").description("JSON to create schema from").required()).create(),onTransform:e=>{var t=i.a.json(e.name,JSON.parse(e.input));return JSON.stringify(t,null,3)},documentation:o}}}class b{}var p=n("t68o"),l=n("zbXB"),f=n("NcP4"),m=n("oMTq"),E=n("pMnS"),d=n("SVse"),y=n("s7LF"),g=n("/q54"),h=n("QQfA"),T=n("IP0z"),N=n("/Co4"),j=n("POq0"),v=n("Xd0L"),I=n("s6ns"),L=n("821u"),S=n("/HVE"),w=n("JjoW"),A=n("cUpR"),O=n("qJ5m"),D=n("Mz6y"),C=n("qgBN"),x=n("ZcxY"),R=n("IheW"),k=n("VDRc"),q=n("ura0"),J=n("Nhcz"),M=n("u9T3"),_=n("zMNK"),B=n("hOhj"),Y=n("Fwaw"),P=n("mkRZ"),F=n("igqZ"),z=n("r0V8"),G=n("kNGD"),H=n("5GAg"),Q=n("5Bek"),K=n("c9fC"),V=n("HsOI"),X=n("Gi4r"),W=n("oapL"),Z=n("ZwOa"),U=n("elxJ"),$=n("lT8R"),ee=n("pBi1"),te=n("qJ50"),ne=n("rWV4"),re=n("02hT"),ae=n("Q+lL"),ie=n("BzsH"),oe=n("KnIn"),ue=n("pKmL"),se=n("iInd"),ce=n("dvZr"),be=n("v9Ap"),pe=n("UxM3");n.d(t,"JsonToSchemaModuleNgFactory",(function(){return le})),n.d(t,"RenderType_JsonToSchemaComponent",(function(){return fe})),n.d(t,"View_JsonToSchemaComponent_0",(function(){return me})),n.d(t,"View_JsonToSchemaComponent_Host_0",(function(){return Ee})),n.d(t,"JsonToSchemaComponentNgFactory",(function(){return de}));var le=r.rb(b,[],(function(e){return r.Db([r.Eb(512,r.j,r.ab,[[8,[p.a,l.b,l.a,f.a,m.z,m.A,m.B,m.C,m.D,m.E,m.F,m.G,m.H,m.I,m.J,m.K,m.L,m.M,m.N,m.O,m.P,m.Q,m.R,m.S,m.c,m.d,m.e,m.f,m.g,m.h,m.i,m.j,m.k,m.l,m.m,m.n,m.o,m.p,m.q,m.r,m.s,m.t,m.u,m.v,m.w,m.x,m.y,E.a,de]],[3,r.j],r.w]),r.Eb(4608,d.m,d.l,[r.t,[2,d.B]]),r.Eb(4608,y.z,y.z,[]),r.Eb(4608,y.g,y.g,[]),r.Eb(5120,r.b,(function(e,t){return[g.j(e,t)]}),[d.d,r.A]),r.Eb(4608,h.c,h.c,[h.i,h.e,r.j,h.h,h.f,r.q,r.y,d.d,T.b,[2,d.g]]),r.Eb(5120,h.j,h.k,[h.c]),r.Eb(5120,N.b,N.c,[h.c]),r.Eb(4608,j.c,j.c,[]),r.Eb(4608,v.b,v.b,[]),r.Eb(5120,I.b,I.c,[h.c]),r.Eb(135680,I.d,I.d,[h.c,r.q,[2,d.g],[2,I.a],I.b,[3,I.d],h.e]),r.Eb(4608,L.i,L.i,[]),r.Eb(5120,L.a,L.b,[h.c]),r.Eb(4608,v.a,v.w,[[2,v.f],S.a]),r.Eb(5120,w.a,w.b,[h.c]),r.Eb(4608,A.e,v.c,[[2,v.g],[2,v.l]]),r.Eb(5120,O.b,O.a,[[3,O.b]]),r.Eb(5120,D.a,D.b,[h.c]),r.Eb(4608,C.d,C.d,[]),r.Eb(5120,C.h,(function(){return[new C.l,new C.I]}),[]),r.Eb(4608,C.H,C.H,[]),r.Eb(4608,C.g,C.g,[C.h,C.H]),r.Eb(4608,x.c,x.c,[r.A,[2,R.a],A.b,x.d]),r.Eb(1073742336,d.c,d.c,[]),r.Eb(1073742336,y.y,y.y,[]),r.Eb(1073742336,y.l,y.l,[]),r.Eb(1073742336,y.u,y.u,[]),r.Eb(1073742336,g.c,g.c,[]),r.Eb(1073742336,T.a,T.a,[]),r.Eb(1073742336,k.i,k.i,[]),r.Eb(1073742336,q.b,q.b,[]),r.Eb(1073742336,J.a,J.a,[]),r.Eb(1073742336,M.a,M.a,[[2,g.g],r.A]),r.Eb(1073742336,v.l,v.l,[[2,v.d],[2,A.f]]),r.Eb(1073742336,S.b,S.b,[]),r.Eb(1073742336,v.v,v.v,[]),r.Eb(1073742336,v.t,v.t,[]),r.Eb(1073742336,v.q,v.q,[]),r.Eb(1073742336,_.g,_.g,[]),r.Eb(1073742336,B.c,B.c,[]),r.Eb(1073742336,h.g,h.g,[]),r.Eb(1073742336,N.e,N.e,[]),r.Eb(1073742336,Y.c,Y.c,[]),r.Eb(1073742336,P.e,P.e,[]),r.Eb(1073742336,F.f,F.f,[]),r.Eb(1073742336,j.d,j.d,[]),r.Eb(1073742336,z.d,z.d,[]),r.Eb(1073742336,z.c,z.c,[]),r.Eb(1073742336,G.e,G.e,[]),r.Eb(1073742336,I.g,I.g,[]),r.Eb(1073742336,H.a,H.a,[]),r.Eb(1073742336,L.j,L.j,[]),r.Eb(1073742336,Q.c,Q.c,[]),r.Eb(1073742336,K.c,K.c,[]),r.Eb(1073742336,V.e,V.e,[]),r.Eb(1073742336,X.c,X.c,[]),r.Eb(1073742336,W.c,W.c,[]),r.Eb(1073742336,Z.c,Z.c,[]),r.Eb(1073742336,v.x,v.x,[]),r.Eb(1073742336,v.n,v.n,[]),r.Eb(1073742336,U.d,U.d,[]),r.Eb(1073742336,w.d,w.d,[]),r.Eb(1073742336,$.b,$.b,[]),r.Eb(1073742336,ee.d,ee.d,[]),r.Eb(1073742336,ee.c,ee.c,[]),r.Eb(1073742336,te.e,te.e,[]),r.Eb(1073742336,O.c,O.c,[]),r.Eb(1073742336,ne.k,ne.k,[]),r.Eb(1073742336,D.c,D.c,[]),r.Eb(1073742336,C.N,C.N,[]),r.Eb(1073742336,C.f,C.f,[]),r.Eb(1073742336,C.m,C.m,[]),r.Eb(1073742336,C.e,C.e,[]),r.Eb(1073742336,v.m,v.m,[]),r.Eb(1073742336,re.b,re.b,[]),r.Eb(1073742336,ae.d,ae.d,[]),r.Eb(1073742336,ie.b,ie.b,[]),r.Eb(1073742336,x.b,x.b,[]),r.Eb(1073742336,oe.a,oe.a,[]),r.Eb(1073742336,ue.a,ue.a,[]),r.Eb(1073742336,se.m,se.m,[[2,se.r],[2,se.k]]),r.Eb(1073742336,b,b,[]),r.Eb(256,G.a,{separatorKeyCodes:[ce.f]},[]),r.Eb(256,v.e,v.i,[]),r.Eb(256,x.d,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[]),r.Eb(1024,se.i,(function(){return[[{path:"",component:c}]]}),[])])})),fe=r.sb({encapsulation:2,styles:[],data:{}});function me(e){return r.Pb(0,[(e()(),r.ub(0,0,null,null,1,"app-transform-tool",[],null,null,null,be.b,be.a)),r.tb(1,114688,null,0,pe.a,[s.c],{tool:[0,"tool"]},null)],(function(e,t){e(t,1,0,t.component.tool)}),null)}function Ee(e){return r.Pb(0,[(e()(),r.ub(0,0,null,null,1,"ng-component",[],null,null,null,me,fe)),r.tb(1,49152,null,0,c,[],null,null)],null,null)}var de=r.qb("ng-component",c,Ee,{},{},[])},rL1p:function(e,t){var n=/\d{4}-\d{2}-\d{2}/;t.isNumber=function(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)},t.isDate=function(e){return"Invalid Date"!==new Date(e).toString()&&!isNaN(new Date(e))},t.isTimestamp=function(e){return e.length>18&&!isNaN(new Date(e).getTime())},t.isDateString=function(e){return e.match(n)},t.arrayLastItem=function(e){return e[e.length-1]}},yhns:function(e,t,n){var r=n("1fYD"),a=n("rL1p");function i(e){switch(e){case"array":return"Array";case"buffer":return"Buffer";case"boolean":return"Boolean";case"date":return"Date";case"number":return"Number";case"string":return"String";case"objectid":return"ObjectId";case"null":case"undefined":case"regexp":default:return"Mixed"}}e.exports=function e(t,n){for(var o in n=n||{},t){var u=t[o],s=null,c=null,b=null;if(u instanceof Buffer&&(b="buffer"),null!=u&&void 0!==u.toString&&u.toString().match(/^[0-9a-fA-F]{24}$/)&&(b="objectid"),b||(b=r.string(u).toLowerCase()),"string"===b&&a.isDate(u)&&(b="date"),"object"===b)n[o]=e(t[o]);else{if("undefined"===b&&(b="null"),"array"===b&&u.length){s=b,b=void 0;for(var p=0,l=u.length;p<l;p++){if(c=r.string(u[p]).toLowerCase(),b&&c!==b){b="mixed";break}b=c}}n[o]=s&&"array"===s?{type:[i(b)]}:{type:i(b)}}}return n}}}]);