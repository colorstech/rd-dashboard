(this["webpackJsonprd-dashboard"]=this["webpackJsonprd-dashboard"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(17),s=n.n(i),a=(n(24),n(25),n(5)),d=n(6),j=n(19),l=n(18),h=n(8),o=n.n(h),b=new(function(){function e(){Object(a.a)(this,e)}return Object(d.a)(e,[{key:"getMonthly",value:function(){return o.a.get("http://localhost:1009/api/monthlyYearSeverity")}},{key:"getYearly",value:function(){return o.a.get("http://localhost:1009/api/yearlySeverity")}}]),e}()),u=n(0),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={cves:[]},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getYearly().then((function(t){e.setState({cves:t.data})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Yearly CVE Severities Table"}),Object(u.jsxs)("table",{className:"table table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Year"}),Object(u.jsx)("td",{children:"Low"}),Object(u.jsx)("td",{children:"Medium"}),Object(u.jsx)("td",{children:"High"}),Object(u.jsx)("td",{children:"Critical"})]})}),Object(u.jsx)("tbody",{children:this.state.cves.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[" ",e.year]}),Object(u.jsxs)("td",{children:[" ",e.low]}),Object(u.jsxs)("td",{children:[" ",e.medium]}),Object(u.jsxs)("td",{children:[" ",e.high]}),Object(u.jsxs)("td",{children:[" ",e.critical]})]})}))})]})]})}}]),n}(r.a.Component);var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{children:["CVE Analysis ",Object(u.jsx)(O,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.278a6aac.chunk.js.map