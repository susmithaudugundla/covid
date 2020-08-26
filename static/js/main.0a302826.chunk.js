(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{184:function(e,t,a){e.exports=a(370)},189:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(58),o=a.n(l),c=(a(189),a(59)),i=a(10),s=a(38),u=a.n(s),m=a(60),p=a(29),d=a(30),h=a(36),E=a(31),v=a(37),f=(a(66),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).change=function(){a.getCountryInfo(a.individual)},a.individual=e.country,a.getCountryInfo=e.countryInfo,a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card",onClick:this.change},r.a.createElement("img",{src:this.individual.flag,alt:"Country-flag"}),r.a.createElement("h4",null,this.individual.name),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"population: ",r.a.createElement("span",{className:"span-bold"},this.individual.population))),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Region: ",r.a.createElement("span",{className:"span-bold"},this.individual.region))),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Capital: ",r.a.createElement("span",{className:"span-bold"},this.individual.capital))))}}]),t}(r.a.Component)),g=Object(i.f)(f),y=a(61),b=a.n(y),C=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).region=function(e){"all"===e.target.value?a.setState({dataEl:a.tempCountries}):a.setState({dataEl:a.tempCountries.filter((function(t){return t.region===e.target.value}))})},a.nameSearch=function(e){if(13===e.keyCode){for(var t=[],n=e.target.value.toLowerCase(),r=0;r<a.tempCountries.length;r++){a.tempCountries[r].name.toLowerCase().includes(n)&&t.push(a.tempCountries[r])}a.atleastOneCountry=!0,a.setState({dataEl:t})}},a.getCountryInfo=function(e){a.props.history;a.props.history.push("/countriesId/:".concat(e.alpha3Code)),a.props.history.location.state=e},a.state={dataEl:[],darkmode:!1},a.tempCountries=[],a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.tempCountries=a,this.setState({dataEl:a}),this.atleastOneCountry=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(this.state.dataEl),console.log(this.props.history),0===this.state.dataEl.length?this.atleastOneCountry?r.a.createElement("div",{className:"body-background"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text",placeholder:"search for a country...",onKeyDown:this.nameSearch}),r.a.createElement("select",{id:"region",onChange:this.region,name:"region"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Asia"},"Asia"),r.a.createElement("option",{value:"Africa"},"Africa"),r.a.createElement("option",{value:"Americas"},"Americas"),r.a.createElement("option",{value:"Europe"},"Europe"),r.a.createElement("option",{value:"Oceania"},"Oceania")))):r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:b.a,alt:"Loading"})):r.a.createElement("div",{className:"body-background"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text",placeholder:"search for a country...",onKeyDown:this.nameSearch}),r.a.createElement("select",{id:"region",onChange:this.region,name:"region"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Asia"},"Asia"),r.a.createElement("option",{value:"Africa"},"Africa"),r.a.createElement("option",{value:"Americas"},"Americas"),r.a.createElement("option",{value:"Europe"},"Europe"),r.a.createElement("option",{value:"Oceania"},"Oceania"))),r.a.createElement("div",{className:"display-property"},this.state.dataEl.map((function(t,a){return r.a.createElement(g,{countryInfo:e.getCountryInfo,country:t,key:t.name})}))))}}]),t}(r.a.Component),N=Object(i.f)(C),D=a(14),O=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={covidData:covid19.data(),countryDetails:a.props.history.location.state},a.loadingData=!1,a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.history.location.state,this.loadingData=!0,this.setState({covidData:this.state.covidData.filter((function(e){return e.country_iso3===t.alpha3Code})).groupByDate()});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.loadingData?r.a.createElement("div",{className:"country-info"},r.a.createElement("button",{onClick:this.props.history.goBack},"Back"),r.a.createElement("div",{className:"covid-details"},r.a.createElement("div",{className:"w-five img-center"},r.a.createElement("img",{src:this.state.countryDetails.flag,alt:"Country-flag"})),r.a.createElement("div",{className:"w-four"},r.a.createElement("div",{className:"covid-details margin-0"},r.a.createElement("div",{className:"w-four"},r.a.createElement("h4",null,this.state.countryDetails.name),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Native Name : ")," ",this.state.countryDetails.nativeName),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Population : ")," ",this.state.countryDetails.population),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Region : ")," ",this.state.countryDetails.region),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Sub Region : ")," ",this.state.countryDetails.subregion),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Capital : ")," ",this.state.countryDetails.capital)),r.a.createElement("div",{className:"w-four"},r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Top Level Domain : ")," ",this.state.countryDetails.topLevelDomain[0]),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Currencies : ")," ",this.state.countryDetails.currencies[0].name),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Languages : ")," ",this.state.countryDetails.languages.map((function(e){return e.name}))))),r.a.createElement("h3",null,"Covid-19 Report"),r.a.createElement(D.d,{width:500,height:300,data:this.state.covidData,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(D.a,{strokeDasharray:"3 3"}),r.a.createElement(D.f,{dataKey:"date"}),r.a.createElement(D.g,null),r.a.createElement(D.e,null),r.a.createElement(D.b,null),r.a.createElement(D.c,{type:"monotone",dataKey:"deaths",stroke:"#f0190a",activeDot:{r:8}}),r.a.createElement(D.c,{type:"monotone",dataKey:"recovered",stroke:"#05a608"}),r.a.createElement(D.c,{type:"monotone",dataKey:"confirmed",stroke:"#1753d4"}))))):r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:b.a,alt:"Loading"}))}}]),t}(n.PureComponent),k=Object(i.f)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/countriesId/:countryId"},r.a.createElement(k,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(N,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a.p+"static/media/index.77eb48c3.svg"},66:function(e,t,a){}},[[184,1,2]]]);
//# sourceMappingURL=main.0a302826.chunk.js.map