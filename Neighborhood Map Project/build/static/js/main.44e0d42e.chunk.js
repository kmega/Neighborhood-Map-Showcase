(this["webpackJsonpNeighborhood-Map-by-Charles-Szelazek"]=this["webpackJsonpNeighborhood-Map-by-Charles-Szelazek"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),i=t.n(r),l=t(11),c=t(8),s=t(9),u=t(12),m=t(10),h=t(13),g=t(4),p=(t(6),Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDujre2Xf7QiP1NgyfN2_LEUTXMRduASww"})((function(e){var n=e.google,t=e.places,a=e.query,r=e.clickedMarker,i=e.currentPlace,l=e.details,c=e.markerShowing,s=e.markerId,u=e.error;return(o.a.createElement(g.Map,{google:n,initialCenter:{lat:40.71154990146508,lng:-73.96724191368207},zoom:13,style:{height:"100%",width:"100%"}},t.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>=0})).map((function(t){return o.a.createElement(g.Marker,{key:t.name,name:t.name,position:t.position,onClick:e.markerInfo.bind(void 0),ref:s,animation:n.maps.Animation.DROP})})),o.a.createElement(g.InfoWindow,{visible:c,marker:r,onClose:e.defaultSetup},o.a.createElement("section",null,o.a.createElement("h1",{className:"name"}," ",i.name," ")," "," ",!0===u?o.a.createElement("div",{tabIndex:2}," 404 NOT FOUND - Please check your internet connection. "):Object.keys(l).length>0?o.a.createElement("section",{tabIndex:2},o.a.createElement("p",{tabIndex:2}," ",o.a.createElement("strong",null," Address : "),l.location.address1," "),o.a.createElement("p",{tabIndex:2}," ",o.a.createElement("strong",null," City: "),l.location.city,", ",l.location.country),o.a.createElement("p",{tabIndex:2}," ",o.a.createElement("strong",null," Rating: "),l.rating),o.a.createElement("p",{tabIndex:2}," ",o.a.createElement("strong",null," Reviews: "),l.review_count)):o.a.createElement("strong",null," ... ")))))}))),f=function(e){var n=e.places,t=e.query,a=e.toggle,r=e.showSearchBox;return o.a.createElement("nav",{id:"nav",className:a}," ",o.a.createElement("div",{className:"fa fa-th-list",onClick:r,onKeyPress:r,role:"button",tabIndex:1})," ",o.a.createElement("input",{"aria-labelledby":"Searching Box",role:"search",type:"text",placeholder:"Searching Box",className:"searching-box",value:t,onChange:function(n){return e.changeQuery(n.target.value)},tabIndex:2})," ",o.a.createElement("ul",{role:"menu",className:"place-list"}," ",n.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>=0})).map((function(n){return o.a.createElement("li",{role:"menuitem",tabIndex:3,className:"place",key:n.name,onClick:e.showShop.bind(void 0,n.name),onKeyPress:e.showShop.bind(void 0,n.name)},n.name," ")}))))},d=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).state={places:[{name:"Lakou Cafe",position:{lat:40.67200489142444,lng:-73.93059745430946}},{name:"Coffee Project New York",position:{lat:40.72708904158265,lng:-73.98938208818436}},{name:"Bibble & Sip",position:{lat:40.76290379577729,lng:-73.98533597588539}},{name:"Polo Caffe",position:{lat:40.66620985314623,lng:-73.97861033678055}},{name:"Brooklyn Roasting Company",position:{lat:40.70425544458103,lng:-73.98635789752007}},{name:"Absolute Coffee",position:{lat:40.68819415095485,lng:-73.98763731122017}},{name:"Voyager Espresso",position:{lat:40.70881201448755,lng:-74.00669708848}},{name:"Rebel Coffee",position:{lat:40.73783173312936,lng:-74.00475785136223}},{name:"12 Corners Coffee",position:{lat:40.713863322507656,lng:-73.99040803313255}},{name:"Bluestone Lane",position:{lat:40.73579226932857,lng:-74.00089278817177}},{name:"dot & line",position:{lat:40.684141611296226,lng:-73.98362472653389}},{name:"Blank Slate Tea",position:{lat:40.745300087727664,lng:-73.98437574505806}},{name:"Laughing Man Coffee & Tea",position:{lat:40.71727266255551,lng:-74.01012495160103}}],markers:[],clickedMarker:{},currentPlace:"",details:{},query:"",toggle:"",error:!1},t.onMarkerClick=function(e,n){t.setState({markerShowing:!0,currentPlace:e,clickedMarker:n,details:{}}),n.setAnimation(1);fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude="+e.position.lat+"&longitude="+e.position.lng,{headers:{Authorization:"Bearer vb8fpMmb4nk4mJ56e54L_meXsAmltZnPO4yWkCANzfxxzo5mlJD2tJ4XBU3LF-0yMEEnXLZH-QJM22W3Xa1RsE8a0bgFRF1kbPZoc6Z2pZxa7hkfj2yKEySqrhZkW3Yx"}}).then((function(e){return e.json()})).catch((function(){return t.setState({error:!0})})).then((function(e){t.setState({details:e.businesses[0]})})),setTimeout((function(){n.setAnimation(0)}),2e3)},t.defaultSetup=function(){t.setState({details:{},markerShowing:!1,clickedMarker:0})},t.showShop=function(e){t.onMarkerClick(t.state.markers.filter((function(n){return n.props.name===e}))[0].props,t.state.markers.filter((function(n){return n.props.name===e}))[0].marker)},t.markerId=function(e){0!==e&&t.setState((function(n){return{markers:[].concat(Object(l.a)(n.markers),[e])}}))},t.showMenu=function(){""===t.state.toggle?t.setState({toggle:"open"}):t.setState({toggle:""})},t.changeQuery=function(e){t.setState({query:e})},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state,n=e.toggle,t=e.query,a=e.clickedMarker,r=e.currentPlace,i=e.places,l=e.details,c=e.markerShowing,s=e.error;return o.a.createElement("section",{role:"application",tabIndex:1}," "," ",o.a.createElement(f,{toggle:n,showSearchBox:this.showMenu,query:t,changeQuery:this.changeQuery.bind(this),places:i,showShop:this.showShop})," ",o.a.createElement(p,{query:t,places:i,markerInfo:this.onMarkerClick,clickedMarker:a,currentPlace:r,details:l,defaultSetup:this.defaultSetup,markerShowing:c,markerId:this.markerId,error:s})," ")}}]),n}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(d,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Neighborhood-Map",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Neighborhood-Map","/service-worker.js");k?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):b(e)}))}}()},6:function(e,n,t){}},[[14,1,2]]]);
//# sourceMappingURL=main.44e0d42e.chunk.js.map