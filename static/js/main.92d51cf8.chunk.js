(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),s=a.n(i),c=a(6),o=a(7),u=a(46),l=a(9),p=a(10),d=a(12),h=a(11),v=a(13),m=(a(59),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={term:"",key:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.ticker!==a.state.term&&a.props.selectTicker(a.state.term)},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Bar"},r.a.createElement("div",{className:"SearchBar"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("h3",null,"Search Ticker Symbol"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),t}(r.a.Component)),E=Object(c.b)(function(e){return{ticker:e.selectedTicker}},{selectTicker:function(e){return{type:"TICKER_SELECTED",payload:e}},selectKey:function(e){return{type:"KEY_SELECTED",payload:e}}})(m),f=(a(60),a(31)),b=a.n(f),w=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"DateSelector"},r.a.createElement("div",{className:"startDate"},r.a.createElement("h3",null,"Start Date"),r.a.createElement(b.a,{onChange:function(t){return e.props.selectDate(t,"STARTDATE_SELECTED")},value:this.props.startDate})),r.a.createElement("div",{className:"endDate"},r.a.createElement("h3",null,"End Date"),r.a.createElement(b.a,{onChange:function(t){return e.props.selectDate(t,"ENDDATE_SELECTED")},value:this.props.endDate})))}}]),t}(r.a.Component),D=Object(c.b)(function(e){return{startDate:e.startDate,endDate:e.endDate}},{selectDate:function(e,t){return{type:t,payload:e}}})(w),g=a(32),k=a.n(g),y=a(47),T=a(17),j=(a(92),a(5)),S=a(48),O=a(49),C=a.n(O).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datatables/WIKI/"}),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getTickerData=function(){var e=Object(y.a)(k.a.mark(function e(t,n,r,i,s,c,o,u,l,p){var d,h;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!c||c===t&&o===n&&u===r&&i===l&&s===p){e.next=10;break}return d={ticker:c,api_key:"jpSK4_2GpyEo2xcMRxhv","qopts.columns":"date,close,volume"},o&&(d["date.gte"]=o),u&&(d["date.lte"]=u),e.next=6,C.get("/PRICES.json",{params:d});case 6:h=e.sent,a.setState({data:h.data,previousTicker:a.props.ticker,previousStart:a.props.start,previousEnd:a.props.end,previousWidth:l,previousHeight:p}),a.renderChart("close"),a.renderChart("volume");case 10:case"end":return e.stop()}},e)}));return function(t,a,n,r,i,s,c,o,u,l){return e.apply(this,arguments)}}(),a.renderChart=function(e){var t="close"===e?1:2,n=100,r=100,i=100,s=100,c=a.state.height/2,o=.8*a.state.width,u=j.i("%Y-%m-%d"),l=j.g().range([0,o]),p=j.f().range([c,0]),d=j.d().x(function(e){return l(e[0])}).y(function(e){return p(e[1])});j.h("#svg").select("svg").remove();var h=j.h("#svg").append("svg").attr("width",o+s+r).attr("height",c+n+i).append("g").attr("transform","translate("+s+","+n+")"),v=a.state.data.datatable.data.map(function(e){return[u(e[0]),e[t]]});l.domain(j.c(v,function(e){return e[0]})),p.domain([0,j.e(v,function(e){return e[1]})]),h.append("path").data([v]).attr("class","line").attr("d",d),h.append("g").attr("transform","translate(0,"+c+")").call(j.a(l)),h.append("g").call(j.b(p))},a.state={previousTicker:a.props.ticker,previousStart:a.props.start,previousEnd:a.props.end,data:[],width:window.innerWidth,height:window.innerHeight,previousWidth:window.innerWidth,previousHeight:window.innerHeight},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(T.a)(Object(T.a)(a))),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",Object(S.debounce)(this.updateWindowDimensions,1e3))}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){this.getTickerData(this.state.previousTicker,this.state.previousStart,this.state.previousEnd,this.state.previousWidth,this.state.previousHeight,this.props.ticker,this.props.start,this.props.end,this.state.width,this.state.height);var e=this.props.ticker?"Closing Prices for: "+this.props.ticker:"Enter a ticker and api key to start";return r.a.createElement("h1",null,e)}}]),t}(r.a.Component),L=Object(c.b)(function(e){return{ticker:e.selectedTicker,start:e.startDate,end:e.endDate}})(W),_=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(E,null),r.a.createElement(D,null),r.a.createElement(L,null),r.a.createElement("div",{id:"svg"}))},x=Object(o.c)({selectedTicker:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TICKER_SELECTED":return t.payload;default:return e}},selectedKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"KEY_SELECTED":return t.payload;default:return e}},startDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STARTDATE_SELECTED":return t.payload;default:return e}},endDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ENDDATE_SELECTED":return t.payload;default:return e}}}),K=Object(o.d)(x,Object(o.a)(u.a));s.a.render(r.a.createElement(c.a,{store:K},r.a.createElement(_,null)),document.querySelector("#root"))},50:function(e,t,a){e.exports=a(112)},59:function(e,t,a){},60:function(e,t,a){},92:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.92d51cf8.chunk.js.map