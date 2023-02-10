"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[6264],{6186:function(t,n,e){function a(){const t=navigator.userAgent.toLowerCase()||"";let n=navigator.platform.toLowerCase()||"";return n.indexOf("linux")>-1&&t.indexOf("android")>-1&&(n="android"),(n.indexOf("iphone")>-1||n.indexOf("ipad")>-1)&&(n="ios",console.log=function(t){window.webkit.messageHandlers.logger.postMessage(t)}),n}function o(t={}){let n=a()||"";if("android"==n)window.ExtCall.postMessage(t);else{if("ios"!=n)throw new Error(n);window.webkit.messageHandlers.ExtCall.postMessage(t)}}e.d(n,{H6:function(){return d},VU:function(){return l},sX:function(){return i}});const i={openNewWebView:r,replaceSetting:s,goBack:u,toBrowser:c};function r(t=""){const n=JSON.stringify({function:"popWebview",url:t});o(n)}function s(t="",n=""){const e=JSON.stringify({function:"changeProjectSettingURL",userid:t,url:n});o(e)}function c(t=""){const n=JSON.stringify({function:"toBrowser",url:t});o(n)}function u(){const t=JSON.stringify({function:"goBack"});o(t)}const l={lineLogin(t="",n=""){const e=JSON.stringify({function:"lineLogin",channel_id:t,callback:n});o(e)},appleLogin(t=""){const n=JSON.stringify({function:"appleLogin",callback:t});o(n)}},d={startGPS(t=""){const n=JSON.stringify({function:"startGPS",callback:t});o(n)},stopGPS(){const t=JSON.stringify({function:"stopGPS"});o(t)},getCurrentLocation(t=""){const n=JSON.stringify({function:"getCurrentLocation",callback:t});o(n)},getUserLocationHistory(t=""){const n=JSON.stringify({function:"getUserLocationHistory",callback:t});o(n)}}},8019:function(t,n,e){e.d(n,{D:function(){return a}});const a=()=>{const t="input:not(input[type = checkbox], input[type = radio], input[type = file], input[readonly], input[disabled])",n=document.querySelectorAll(t);n.forEach((t=>{t.addEventListener("focus",(()=>{document.body.classList.add("fixfixed")})),t.addEventListener("blur",(()=>{document.body.classList.remove("fixfixed")}))}))}},4988:function(t,n,e){e.d(n,{Cq:function(){return s},Qr:function(){return f},Ux:function(){return u},b$:function(){return r},g7:function(){return p},hB:function(){return g},nN:function(){return c},nV:function(){return h},vL:function(){return d},vW:function(){return v},yv:function(){return y}});e(7658);var a=e(6186),o=e(1830),i=e(4477);const r=t=>"string"==typeof t.message?t.message:"other error",s=t=>{for(let n=0;n<24;n++)t.push({id:n,time:`${n}:00`}),t.push({id:n+1,time:`${n}:30`})},c=()=>{const t=location.href,n=t.split("/"),e=n[n.length-1];return{urlId:e}},u=()=>{const t=location.href,n=t.split("/"),e=n[n.length-2];return{urlId:e}},l=t=>[t.getFullYear(),t.getMonth()+1,t.getDate()],d=t=>t<10?"0"+t:t,f=t=>{let n=JSON.parse(JSON.stringify(t)),e={},a="";return n.forEach((t=>{t.start=new Date(t.start.replace(/-/g,"/")),t.end=new Date(t.end.replace(/-/g,"/")),t.info=l(t.start),e[`${t.info[0]}/${t.info[1]}`]?e[`${t.info[0]}/${t.info[1]}`].push(t.info[2]):e[`${t.info[0]}/${t.info[1]}`]=[t.info[2]]})),a=n[0]?.start.getHours()==n[0]?.end.getHours()?`${n[0]?.start.getHours()}:${d(n[0]?.start.getMinutes())} ~ ${n[0]?.end.getHours()}:${d(n[0]?.end.getMinutes())}(24小時)`:`${n[0]?.start.getHours()}:${d(n[0]?.start.getMinutes())} ~ ${n[0]?.end.getHours()}:${d(n[0]?.end.getMinutes())}`,{newDates:n,info:e,time:a}},g=t=>{let n=JSON.parse(JSON.stringify(t)),e={},a="";return n.forEach((t=>{t.start=new Date(t.start.replace(/-/g,"/")),t.end=new Date(t.end.replace(/-/g,"/")),t.info=l(t.start),e[`${t.info[0]}/${t.info[1]}`]?e[`${t.info[0]}/${t.info[1]}`].push([t.info[2],t.isDone]):e[`${t.info[0]}/${t.info[1]}`]=[[t.info[2],t.isDone]]})),a=n[0]?.start.getHours()==n[0]?.end.getHours()?"全天(24小時)":`${n[0]?.start.getHours()}:${d(n[0]?.start.getMinutes())} ~ ${n[0]?.end.getHours()}:${d(n[0]?.end.getMinutes())}`,{newDates:n,info:e,time:a}},p=t=>{let n=[],e=[],a={},o=[];return t?.length>0&&t.forEach((t=>n.push(t.split("-")))),n.forEach((t=>{let n=`${t[0]}/${t[1]}`;e.push(n),a[n]?a[n].push(t[2]):a[n]=[t[2]]})),e=e.filter(((t,n)=>e.indexOf(t)===n)),1==e.length&&o.push(`${e?.[0]}/${a?.[e?.[0]]?.join("、")}`),e.length>1&&o.push(`${e?.[1]}/${a?.[e?.[1]]?.join("、")}`),{monthInfo:e,dayInfo:a,dateInfo:o}},h=(t,n)=>{let e={};return n.forEach((n=>{let a=parseInt(n.substring(1,3))-1,o=parseInt(n.substring(3,5))-1,i=parseInt(n.substring(5,7))-1;Object.keys(e).includes(t[a].name)||Object.keys(e).includes(t[a].data[o].name)?e[t[a].data[o].name].push(t[a].data[o].data[i]):e[t[a].data[o].name]=[t[a].data[o].data[i]]})),e},y=()=>{try{window.ExtCallStartGPS=()=>!0,a.H6.startGPS("ExtCallStartGPS")}catch(t){}},v=()=>{const t=(0,i.fG)();if(0==t.userPosition.cityId)try{window.ExtCallGetCurrentLocation=async(n,e,a)=>{if("string"===typeof n&&n?.length>6){const n=await(0,o.MP)({longitude:a,latitude:e});console.log("apiGetPosition已發送/"+n.data.defaultPlace.cityName+"/"+n.data.defaultPlace.townName),t.userPosition.cityId=n.data.defaultPlace.cityId,t.userPosition.areaId=n.data.defaultPlace.areaId,t.userPosition.cityId_2=n.data.longTermCare2Place.cityId,t.userPosition.areaId_2=n.data.longTermCare2Place.areaId,console.log(t.userPosition.cityId+"/"+t.userPosition.areaId+"/"+t.userPosition.cityId_2+"/"+t.userPosition.areaId_2)}},a.H6.getCurrentLocation("ExtCallGetCurrentLocation")}catch(n){console.log("電腦版不支援 extCall GPS")}}},5765:function(t,n,e){e.d(n,{Z:function(){return w}});var a=e(6252),o=e(3577);const i=t=>((0,a.dD)("data-v-7303a0ce"),t=t(),(0,a.Cn)(),t),r={class:"c-header c-header-3"},s={class:"navbar ui-navbar"},c={class:"navbar-nav"},u={class:"nav-link"},l=i((()=>(0,a._)("h1",{class:"navbar-brand"},null,-1))),d=i((()=>(0,a._)("ul",{class:"navbar-nav"},[(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{href:"javascript:void(0);",class:"nav-link"})])],-1)));function f(t,n,e,i,f,g){return(0,a.wg)(),(0,a.iD)("header",r,[(0,a._)("nav",s,[(0,a._)("ul",c,[(0,a._)("li",{class:"nav-item",onClick:n[0]||(n[0]=(...t)=>i.btnClick&&i.btnClick(...t))},[(0,a._)("a",u,[(0,a._)("i",{class:(0,o.C_)(i.iconCode)},null,2),(0,a.Uk)((0,o.zw)(i.text),1)])])]),l,d])])}e(7658);var g=e(2201),p=e(4477),h={props:{left:String,path:String,clickFun:Function},setup(t){const n=(0,p.s6)(),e=n.goto,a=(0,g.tv)();let o="",i="";const r=t.left?t.left:"";"chevronArrow"==r?o="fa fa-chevron-left":(o="far fa-arrow-left",i="上一步");const s=()=>{if("-1"==t.path)try{e("back")}catch(n){console.log(n),a.back()}else t.path?a.push({path:t.path}):t.clickFun?t.clickFun():a.push({path:"/home"})};return{iconCode:o,text:i,btnClick:s}}},y=e(3744);const v=(0,y.Z)(h,[["render",f],["__scopeId","data-v-7303a0ce"]]);var w=v},9295:function(t,n,e){e.d(n,{Z:function(){return l}});var a=e(6252);const o={class:"testStyle2"};function i(t,n,e,i,r,s){const c=(0,a.up)("v-calendar");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(c,{"min-date":new Date,"is-expanded":"","from-page":{month:i.month,year:i.year},attributes:i.attrs,onDayclick:i.dayclick},null,8,["min-date","from-page","attributes","onDayclick"])])}e(7658);var r=e(2262),s={props:{date_p:Array},setup(t,{emit:n}){const e=new Date,o=e.getFullYear(),i=e.getMonth()+1,s=(0,r.iH)([]);t.date_p&&(s.value=s.value.concat(t.date_p));const c=(0,r.iH)([{highlight:{color:"purple",fillMode:"light"},dates:s}]),u=t=>{const n=t.id;let a=new Date(e);a.setDate(a.getDate()-1);let o=new Date(n);o<a||(s.value.includes(t.id)?s.value=s.value.filter((n=>n!=t.id)):s.value.push(t.id))},l=()=>{n("updateWorkDate",s.value),console.log(s.value)};return(0,a.YP)((()=>s.value.length),(()=>{l()})),{attrs:c,dayclick:u,year:o,month:i}}},c=e(3744);const u=(0,c.Z)(s,[["render",i],["__scopeId","data-v-044c529e"]]);var l=u}}]);
//# sourceMappingURL=6264.e66e51c1.js.map