(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(4),o=n.n(i),a=(n(10),n(2)),u=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),u=o[0],j=o[1],d=Object(r.useState)(""),l=Object(a.a)(d,2),h=l[0],f=l[1];return Object(r.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){e.Countries?(e.Countries.sort((function(e,t){return t.NewConfirmed-e.NewConfirmed})),s(e.Countries)):f(e.Message)}))}),[s]),Object(c.jsxs)(c.Fragment,{children:[function(){if(h.length>0)return Object(c.jsx)("div",{children:h})}(),Object(c.jsx)("input",{type:"text",value:u,onChange:function(e){var t=e.target.value;j(t)},placeholder:"search for a country..."}),Object(c.jsx)("div",{className:"countriesContainer",children:n.map((function(e,t){if(0===u.length||e.Country.startsWith(u.charAt(0).toUpperCase()+u.slice(1)))return Object(c.jsxs)("div",{className:"countryContainer",children:[Object(c.jsx)("div",{className:"flag flag-icon-background flag-icon-".concat(e.CountryCode.toLowerCase())}),Object(c.jsxs)("div",{className:"countryInfo",children:[Object(c.jsx)("div",{children:e.Country}),Object(c.jsxs)("div",{children:["New Confirmed: ",e.NewConfirmed]}),Object(c.jsxs)("div",{children:["Total Confirmed: ",e.TotalConfirmed]}),Object(c.jsxs)("div",{children:["New Deaths: ",e.NewDeaths]}),Object(c.jsxs)("div",{children:["Total Deaths: ",e.TotalDeaths]})]})]},"country-".concat(t))}))})]})};n(11);var j=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(u,{})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.db8f3561.chunk.js.map