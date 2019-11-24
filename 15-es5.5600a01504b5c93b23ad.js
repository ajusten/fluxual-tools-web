(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"NF+v":function(n,e,r){"use strict";r.r(e);var t=r("8Y7J"),a='## What is Markdown?\r\n\r\nMarkdown is a markup language which simplifies the creation of HTML articles.  It uses a text language which is easy to write in any text editor.  Markdown is rendered or converted to HTML, and then can be viewed in a web browser like regular HTML.\r\n\r\n## Markdown Syntax Reference\r\n\r\n### Headers\r\n\r\nMarkdown makes it easy to add headers to structure content using the `#` prefix.  Add additional `#` characters to change the header level.\r\n\r\n```markdown\r\n# Header One\r\n## Header Two\r\n### Header Three\r\n#### Header Four\r\n##### Header Five\r\n###### Header Six\r\n```\r\n\r\n# Header One\r\n## Header Two\r\n### Header Three\r\n#### Header Four\r\n##### Header Five\r\n###### Header Six\r\n\r\n### Text Emphasis\r\n\r\nIt easy to bold, italicize, or strikethrough text.\r\n\r\n```markdown\r\n*italic*\r\n_italic_\r\n**bold**\r\n__bold__\r\n~~strikethrough~~\r\n```\r\n\r\n*italic*\r\n_italic_\r\n**bold**\r\n__bold__\r\n~~strikethrough~~\r\n\r\n### Links\r\n\r\nLinks can be created with Markdown.\r\n\r\n```markdown\r\n[my google link](https://google.com)\r\n[add a link title](https://google.com "title here")\r\n```\r\n\r\n[my google link](https://google.com)\r\n[add a link title](https://google.com "title here")\r\n\r\n### Images\r\n\r\nImages can be added to Markdown articles.\r\n\r\n```markdown\r\n![Image Label](https://via.placeholder.com/150)\r\n```\r\n\r\n![Image Label](https://via.placeholder.com/150)\r\n\r\n### Horizontal Rules\r\n\r\nHorizontal rules are an easy way to separate different sections in an article or content.\r\n\r\n```markdown\r\n---\r\n___\r\n***\r\n```\r\n\r\n---\r\n___\r\n***\r\n\r\n### Block Quotes\r\n\r\nBlock Quotes are an easy way to emphasize or highlight a quote. Block quotes can be nested.\r\n\r\n```markdown\r\n> Block Quote\r\n> Multiple Lines\r\n> > They can be nested\r\n> > > Multiple Times\r\n```\r\n\r\n> Block Quote\r\n> Multiple Lines\r\n> > They can be nested\r\n> > > Multiple Times\r\n\r\n### Lists\r\n\r\nIt is easy to create lists.\r\n\r\n```markdown\r\n* this\r\n* is\r\n* an unordered\r\n* list\r\n\r\n1. this\r\n2. is\r\n3. an ordered\r\n4. list\r\n```\r\n\r\n* this\r\n* is\r\n* an unordered\r\n* list\r\n\r\n1. this\r\n2. is\r\n3. an ordered\r\n4. list\r\n\r\n### Code Blocks\r\n\r\nCode blocks are good for showing source code.\r\n\r\n```markdown\r\n`inline code`\r\n\r\n# note, remove "\\"\r\n\\```html\r\n<html>\r\n    <head></head>\r\n    <body></body>\r\n</html>\r\n\\```\r\n```\r\n\r\n`inline code`\r\n\r\n```html\r\n<html>\r\n    <head></head>\r\n    <body></body>\r\n</html>\r\n```\r\n\r\n## When to use Markdown\r\n\r\nBelow are a few guidelines when Markdown might be the right solution.\r\n\r\n### Need for Fast Content Creation\r\n\r\nWhen writing content or articles, it is often more desirable to focus on the content itself, rather than the language.  Markdown is very simply to write, freeing the user from worrying about complex markup rules. Use Markdown when you would rather focus on the articles over markup language.\r\n\r\n### Improved Maintainability Over HTML\r\n\r\nHTML can be complex to write because it requires the use of tags.  Ensuring that tags are closed correctly, and attributes are correct can be time consuming.  To make matters worse, simple text editors make it very difficult to write HTML because they do not highlight the syntax. To create HTML effectively, an IDE with HTML features is often needed.\r\n\r\nMarkdown is much easier to write with it\'s simplified syntax.  Virtually any text editor can be used.\r\n\r\n### Easy Readability of Source Code\r\n\r\nMarkdown is very easy to read, even before it is converted into HTML.  When maintaing or updating existing Markdown files, this can help make the correct edits.\r\n\r\n## When to Avoid Markdown\r\n\r\nSee below for guidelines when Markdown may not be the right solution.\r\n\r\n### Tags or Constructs Not Available in Markdown\r\n\r\nNot every feature available in HTML is in Markdown.  You may need to fallback to HTML when a feature is not available in Markdown.  It should be noted that Markdown can be extended to add additional features.\r\n\r\n### Dynamic Content Features Needed\r\n\r\nMarkdown is mainly focused on static content--content that does not change once written.  Many apps or sites dynamically create and change the content, often pulling data from a database.  When these dynamic features are needed, it is often easier to just use HTML directly because many libaries and frameworks exist to render dynamic HTML content.\r\n',o='# Markdown Demo\r\n\r\n## Headers\r\n\r\nMarkdown makes it easy to add headers to structure content using the `#` prefix.  Add additional `#` characters to change the header level.\r\n\r\n# Header One\r\n## Header Two\r\n### Header Three\r\n#### Header Four\r\n##### Header Five\r\n###### Header Six\r\n\r\n## Text Emphasis\r\n\r\nIt easy to bold, italicize, or strikethrough text.\r\n\r\n*italic*\r\n_italic_\r\n**bold**\r\n__bold__\r\n~~strikethrough~~\r\n\r\n## Links\r\n\r\n[my google link](https://google.com)\r\n[add a link title](https://google.com "title here")\r\n\r\n## Images\r\n\r\n![Image Label](https://via.placeholder.com/150)\r\n\r\n## Horizontal Rules\r\n\r\nHorizontal rules can be used to separate different sections in an article or content.\r\n\r\n---\r\n___\r\n***\r\n\r\n## Block Quotes\r\n\r\nBlock Quotes are an easy way to emphasize or highlight a quote. Block quotes can be nested.\r\n\r\n> Block Quote\r\n> Multiple Lines\r\n> > They can be nested\r\n> > > Multiple Times\r\n\r\n## Lists\r\n\r\n* this\r\n* is\r\n* an unordered\r\n* list\r\n\r\n1. this\r\n2. is\r\n3. an ordered\r\n4. list\r\n\r\n## Code Blocks\r\n\r\nCode blocks are good for showing source code.\r\n\r\n`inline code`\r\n\r\n```html\r\n<html>\r\n    <head></head>\r\n    <body></body>\r\n</html>\r\n```',i=r("omGn"),l=function(){function n(n,e,r){var t=this;this.service=n,this.sanitizer=e,this.metadataService=r,this.result=null,this.raw=null,this.metadata=null,this.tool={id:"markdown-create",action:"Create",demo:{input:o},schema:(new i.a).textareaProperty("input",(function(n){return n.title("Markdown").description("Markdown Markup to Create HTML from").required()})).create(),onTransform:function(n){return t.service.compile(n.input,!0,{sanitize:!0})},documentation:a}}return n.prototype.ngOnInit=function(){this.metadata=this.metadataService.getTool(this.tool.id)},n.prototype.onResultChange=function(n){this.result=this.sanitizer.bypassSecurityTrustHtml(n),this.raw=n},n}(),s=function(){},d=r("t68o"),c=r("zbXB"),b=r("NcP4"),u=r("oMTq"),h=r("pMnS"),m=r("SVse"),g=r("s7LF"),F=r("/q54"),w=r("QQfA"),p=r("IP0z"),k=r("/Co4"),f=r("POq0"),y=r("Xd0L"),M=r("s6ns"),v=r("821u"),H=r("/HVE"),T=r("JjoW"),L=r("cUpR"),_=r("qJ5m"),x=r("Mz6y"),C=r("qgBN"),I=r("ZcxY"),z=r("IheW"),q=r("VDRc"),B=r("ura0"),N=r("Nhcz"),R=r("u9T3"),O=r("zMNK"),Q=r("hOhj"),j=r("Fwaw"),S=r("mkRZ"),A=r("igqZ"),J=r("r0V8"),W=r("kNGD"),E=r("5GAg"),V=r("5Bek"),D=r("c9fC"),P=r("HsOI"),G=r("Gi4r"),K=r("oapL"),Z=r("ZwOa"),X=r("elxJ"),Y=r("lT8R"),U=r("pBi1"),$=r("qJ50"),nn=r("rWV4"),en=r("02hT"),rn=r("Q+lL"),tn=r("BzsH"),an=r("KnIn"),on=r("IbkX"),ln=r("pKmL"),sn=r("iInd"),dn=r("dvZr"),cn=r("N02J"),bn=r("Nvuj"),un=r("x+0o"),hn=r("63OA"),mn=r("Rlre"),gn=r("omvX"),Fn=r("CY5v");r.d(e,"MarkdownCreateModuleNgFactory",(function(){return wn})),r.d(e,"RenderType_MarkdownCreateComponent",(function(){return pn})),r.d(e,"View_MarkdownCreateComponent_0",(function(){return kn})),r.d(e,"View_MarkdownCreateComponent_Host_0",(function(){return fn})),r.d(e,"MarkdownCreateComponentNgFactory",(function(){return yn}));var wn=t.sb(s,[],(function(n){return t.Eb([t.Fb(512,t.j,t.bb,[[8,[d.a,c.b,c.a,b.a,u.z,u.A,u.B,u.C,u.D,u.E,u.F,u.G,u.H,u.I,u.J,u.K,u.L,u.M,u.N,u.O,u.P,u.Q,u.R,u.S,u.c,u.d,u.e,u.f,u.g,u.h,u.i,u.j,u.k,u.l,u.m,u.n,u.o,u.p,u.q,u.r,u.s,u.t,u.u,u.v,u.w,u.x,u.y,h.a,yn]],[3,t.j],t.w]),t.Fb(4608,m.m,m.l,[t.t,[2,m.C]]),t.Fb(4608,g.z,g.z,[]),t.Fb(4608,g.g,g.g,[]),t.Fb(5120,t.b,(function(n,e){return[F.j(n,e)]}),[m.d,t.A]),t.Fb(4608,w.c,w.c,[w.i,w.e,t.j,w.h,w.f,t.q,t.y,m.d,p.b,[2,m.g]]),t.Fb(5120,w.j,w.k,[w.c]),t.Fb(5120,k.b,k.c,[w.c]),t.Fb(4608,f.c,f.c,[]),t.Fb(4608,y.b,y.b,[]),t.Fb(5120,M.b,M.c,[w.c]),t.Fb(135680,M.d,M.d,[w.c,t.q,[2,m.g],[2,M.a],M.b,[3,M.d],w.e]),t.Fb(4608,v.i,v.i,[]),t.Fb(5120,v.a,v.b,[w.c]),t.Fb(4608,y.a,y.w,[[2,y.f],H.a]),t.Fb(5120,T.a,T.b,[w.c]),t.Fb(4608,L.e,y.c,[[2,y.g],[2,y.l]]),t.Fb(5120,_.b,_.a,[[3,_.b]]),t.Fb(5120,x.a,x.b,[w.c]),t.Fb(4608,C.d,C.d,[]),t.Fb(5120,C.h,(function(){return[new C.l,new C.I]}),[]),t.Fb(4608,C.H,C.H,[]),t.Fb(4608,C.g,C.g,[C.h,C.H]),t.Fb(4608,I.c,I.c,[t.A,[2,z.a],L.b,I.d]),t.Fb(1073742336,m.c,m.c,[]),t.Fb(1073742336,g.y,g.y,[]),t.Fb(1073742336,g.l,g.l,[]),t.Fb(1073742336,g.u,g.u,[]),t.Fb(1073742336,F.c,F.c,[]),t.Fb(1073742336,p.a,p.a,[]),t.Fb(1073742336,q.i,q.i,[]),t.Fb(1073742336,B.b,B.b,[]),t.Fb(1073742336,N.a,N.a,[]),t.Fb(1073742336,R.a,R.a,[[2,F.g],t.A]),t.Fb(1073742336,y.l,y.l,[[2,y.d],[2,L.f]]),t.Fb(1073742336,H.b,H.b,[]),t.Fb(1073742336,y.v,y.v,[]),t.Fb(1073742336,y.t,y.t,[]),t.Fb(1073742336,y.q,y.q,[]),t.Fb(1073742336,O.g,O.g,[]),t.Fb(1073742336,Q.c,Q.c,[]),t.Fb(1073742336,w.g,w.g,[]),t.Fb(1073742336,k.e,k.e,[]),t.Fb(1073742336,j.c,j.c,[]),t.Fb(1073742336,S.e,S.e,[]),t.Fb(1073742336,A.f,A.f,[]),t.Fb(1073742336,f.d,f.d,[]),t.Fb(1073742336,J.d,J.d,[]),t.Fb(1073742336,J.c,J.c,[]),t.Fb(1073742336,W.e,W.e,[]),t.Fb(1073742336,M.g,M.g,[]),t.Fb(1073742336,E.a,E.a,[]),t.Fb(1073742336,v.j,v.j,[]),t.Fb(1073742336,V.c,V.c,[]),t.Fb(1073742336,D.c,D.c,[]),t.Fb(1073742336,P.e,P.e,[]),t.Fb(1073742336,G.c,G.c,[]),t.Fb(1073742336,K.c,K.c,[]),t.Fb(1073742336,Z.c,Z.c,[]),t.Fb(1073742336,y.x,y.x,[]),t.Fb(1073742336,y.n,y.n,[]),t.Fb(1073742336,X.d,X.d,[]),t.Fb(1073742336,T.d,T.d,[]),t.Fb(1073742336,Y.b,Y.b,[]),t.Fb(1073742336,U.d,U.d,[]),t.Fb(1073742336,U.c,U.c,[]),t.Fb(1073742336,$.e,$.e,[]),t.Fb(1073742336,_.c,_.c,[]),t.Fb(1073742336,nn.k,nn.k,[]),t.Fb(1073742336,x.c,x.c,[]),t.Fb(1073742336,C.N,C.N,[]),t.Fb(1073742336,C.f,C.f,[]),t.Fb(1073742336,C.m,C.m,[]),t.Fb(1073742336,C.e,C.e,[]),t.Fb(1073742336,y.m,y.m,[]),t.Fb(1073742336,en.b,en.b,[]),t.Fb(1073742336,rn.d,rn.d,[]),t.Fb(1073742336,tn.b,tn.b,[]),t.Fb(1073742336,I.b,I.b,[]),t.Fb(1073742336,an.a,an.a,[]),t.Fb(1073742336,on.b,on.b,[]),t.Fb(1073742336,ln.a,ln.a,[]),t.Fb(1073742336,sn.m,sn.m,[[2,sn.r],[2,sn.k]]),t.Fb(1073742336,s,s,[]),t.Fb(256,W.a,{separatorKeyCodes:[dn.f]},[]),t.Fb(256,y.e,y.i,[]),t.Fb(256,I.d,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[]),t.Fb(1024,sn.i,(function(){return[[{path:"",component:l}]]}),[])])})),pn=t.tb({encapsulation:2,styles:[],data:{}});function kn(n){return t.Qb(0,[(n()(),t.vb(0,0,null,null,16,"app-tool",[],null,[[null,"resultChange"]],(function(n,e,r){var t=!0;return"resultChange"===e&&(t=!1!==n.component.onResultChange(r)&&t),t}),cn.b,cn.a)),t.ub(1,114688,null,0,bn.a,[un.a,hn.a],{tool:[0,"tool"],metadata:[1,"metadata"]},{resultChange:"resultChange"}),(n()(),t.vb(2,0,null,0,14,"div",[["output",""]],null,null,null,null,null)),(n()(),t.vb(3,0,null,null,13,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,mn.d,mn.b)),t.ub(4,3325952,null,1,nn.f,[t.k,t.h,[2,nn.a],[2,gn.a]],null,null),t.Mb(603979776,1,{_tabs:1}),(n()(),t.vb(6,16777216,null,null,4,"mat-tab",[["label","HTML"]],null,null,null,mn.f,mn.a)),t.ub(7,770048,[[1,4]],2,nn.c,[t.O],{textLabel:[0,"textLabel"]},null),t.Mb(603979776,2,{templateLabel:0}),t.Mb(335544320,3,{_explicitContent:0}),(n()(),t.vb(10,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t.vb(11,16777216,null,null,5,"mat-tab",[["label","Raw HTML"]],null,null,null,mn.f,mn.a)),t.ub(12,770048,[[1,4]],2,nn.c,[t.O],{textLabel:[0,"textLabel"]},null),t.Mb(603979776,4,{templateLabel:0}),t.Mb(335544320,5,{_explicitContent:0}),(n()(),t.vb(15,0,null,0,1,"pre",[],null,null,null,null,null)),(n()(),t.Ob(16,null,["",""]))],(function(n,e){var r=e.component;n(e,1,0,r.tool,r.metadata),n(e,7,0,"HTML"),n(e,12,0,"Raw HTML")}),(function(n,e){var r=e.component;n(e,3,0,t.Hb(e,4).dynamicHeight,"below"===t.Hb(e,4).headerPosition),n(e,10,0,r.result),n(e,16,0,r.raw)}))}function fn(n){return t.Qb(0,[(n()(),t.vb(0,0,null,null,1,"ng-component",[],null,null,null,kn,pn)),t.ub(1,114688,null,0,l,[I.c,L.b,Fn.c],null,null)],(function(n,e){n(e,1,0)}),null)}var yn=t.rb("ng-component",l,fn,{},{},[])}}]);