"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[9408],{6186:function(t,a,e){function n(){const t=navigator.userAgent.toLowerCase()||"";let a=navigator.platform.toLowerCase()||"";return a.indexOf("linux")>-1&&t.indexOf("android")>-1&&(a="android"),(a.indexOf("iphone")>-1||a.indexOf("ipad")>-1)&&(a="ios",console.log=function(t){window.webkit.messageHandlers.logger.postMessage(t)}),a}function i(t={}){let a=n()||"";if("android"==a)window.ExtCall.postMessage(t);else{if("ios"!=a)throw new Error(a);window.webkit.messageHandlers.ExtCall.postMessage(t)}}e.d(a,{H6:function(){return d},VU:function(){return u},sX:function(){return s}});const s={openNewWebView:c,replaceSetting:l,goBack:r,toBrowser:o};function c(t=""){const a=JSON.stringify({function:"popWebview",url:t});i(a)}function l(t="",a=""){const e=JSON.stringify({function:"changeProjectSettingURL",userid:t,url:a});i(e)}function o(t=""){const a=JSON.stringify({function:"toBrowser",url:t});i(a)}function r(){const t=JSON.stringify({function:"goBack"});i(t)}const u={lineLogin(t="",a=""){const e=JSON.stringify({function:"lineLogin",channel_id:t,callback:a});i(e)},appleLogin(t=""){const a=JSON.stringify({function:"appleLogin",callback:t});i(a)}},d={startGPS(t=""){const a=JSON.stringify({function:"startGPS",callback:t});i(a)},stopGPS(){const t=JSON.stringify({function:"stopGPS"});i(t)},getCurrentLocation(t=""){const a=JSON.stringify({function:"getCurrentLocation",callback:t});i(a)},getUserLocationHistory(t=""){const a=JSON.stringify({function:"getUserLocationHistory",callback:t});i(a)}}},4988:function(t,a,e){e.d(a,{Cq:function(){return l},Qr:function(){return f},Ux:function(){return r},b$:function(){return c},g7:function(){return g},hB:function(){return v},nN:function(){return o},nV:function(){return p},vL:function(){return d},vW:function(){return _},yv:function(){return h}});e(7658);var n=e(6186),i=e(1830),s=e(4477);const c=t=>"string"==typeof t.message?t.message:"other error",l=t=>{for(let a=0;a<24;a++)t.push({id:a,time:`${a}:00`}),t.push({id:a+1,time:`${a}:30`})},o=()=>{const t=location.href,a=t.split("/"),e=a[a.length-1];return{urlId:e}},r=()=>{const t=location.href,a=t.split("/"),e=a[a.length-2];return{urlId:e}},u=t=>[t.getFullYear(),t.getMonth()+1,t.getDate()],d=t=>t<10?"0"+t:t,f=t=>{let a=JSON.parse(JSON.stringify(t)),e={},n="";return a.forEach((t=>{t.start=new Date(t.start.replace(/-/g,"/")),t.end=new Date(t.end.replace(/-/g,"/")),t.info=u(t.start),e[`${t.info[0]}/${t.info[1]}`]?e[`${t.info[0]}/${t.info[1]}`].push(t.info[2]):e[`${t.info[0]}/${t.info[1]}`]=[t.info[2]]})),n=a[0]?.start.getHours()==a[0]?.end.getHours()?`${a[0]?.start.getHours()}:${d(a[0]?.start.getMinutes())} ~ ${a[0]?.end.getHours()}:${d(a[0]?.end.getMinutes())}(24小時)`:`${a[0]?.start.getHours()}:${d(a[0]?.start.getMinutes())} ~ ${a[0]?.end.getHours()}:${d(a[0]?.end.getMinutes())}`,{newDates:a,info:e,time:n}},v=t=>{let a=JSON.parse(JSON.stringify(t)),e={},n="";return a.forEach((t=>{t.start=new Date(t.start.replace(/-/g,"/")),t.end=new Date(t.end.replace(/-/g,"/")),t.info=u(t.start),e[`${t.info[0]}/${t.info[1]}`]?e[`${t.info[0]}/${t.info[1]}`].push([t.info[2],t.isDone]):e[`${t.info[0]}/${t.info[1]}`]=[[t.info[2],t.isDone]]})),n=a[0]?.start.getHours()==a[0]?.end.getHours()?"全天(24小時)":`${a[0]?.start.getHours()}:${d(a[0]?.start.getMinutes())} ~ ${a[0]?.end.getHours()}:${d(a[0]?.end.getMinutes())}`,{newDates:a,info:e,time:n}},g=t=>{let a=[],e=[],n={},i=[];return t?.length>0&&t.forEach((t=>a.push(t.split("-")))),a.forEach((t=>{let a=`${t[0]}/${t[1]}`;e.push(a),n[a]?n[a].push(t[2]):n[a]=[t[2]]})),e=e.filter(((t,a)=>e.indexOf(t)===a)),1==e.length&&i.push(`${e?.[0]}/${n?.[e?.[0]]?.join("、")}`),e.length>1&&i.push(`${e?.[1]}/${n?.[e?.[1]]?.join("、")}`),{monthInfo:e,dayInfo:n,dateInfo:i}},p=(t,a)=>{let e={};return a.forEach((a=>{let n=parseInt(a.substring(1,3))-1,i=parseInt(a.substring(3,5))-1,s=parseInt(a.substring(5,7))-1;Object.keys(e).includes(t[n].name)||Object.keys(e).includes(t[n].data[i].name)?e[t[n].data[i].name].push(t[n].data[i].data[s]):e[t[n].data[i].name]=[t[n].data[i].data[s]]})),e},h=()=>{try{window.ExtCallStartGPS=()=>!0,n.H6.startGPS("ExtCallStartGPS")}catch(t){}},_=()=>{const t=(0,s.fG)();if(0==t.userPosition.cityId)try{window.ExtCallGetCurrentLocation=async(a,e,n)=>{if("string"===typeof a&&a?.length>6){const a=await(0,i.MP)({longitude:n,latitude:e});console.log("apiGetPosition已發送/"+a.data.defaultPlace.cityName+"/"+a.data.defaultPlace.townName),t.userPosition.cityId=a.data.defaultPlace.cityId,t.userPosition.areaId=a.data.defaultPlace.areaId,t.userPosition.cityId_2=a.data.longTermCare2Place.cityId,t.userPosition.areaId_2=a.data.longTermCare2Place.areaId,console.log(t.userPosition.cityId+"/"+t.userPosition.areaId+"/"+t.userPosition.cityId_2+"/"+t.userPosition.areaId_2)}},n.H6.getCurrentLocation("ExtCallGetCurrentLocation")}catch(a){console.log("電腦版不支援 extCall GPS")}}},3393:function(t,a,e){e.d(a,{Z:function(){return z}});e(7658);var n=e(6252),i=e(3577);const s=t=>((0,n.dD)("data-v-c7be6040"),t=t(),(0,n.Cn)(),t),c={class:"c-footer"},l={class:"row ui-tabbar"},o={key:0,class:"col"},r=s((()=>(0,n._)("div",{class:"tab-img"},[(0,n._)("i",{class:"far fa-search"})],-1))),u=s((()=>(0,n._)("div",{class:"tab-title"},"搜尋資料",-1))),d=[r,u],f={key:1,class:"col"},v=s((()=>(0,n._)("div",{class:"tab-img"},[(0,n._)("i",{class:"far fa-search"})],-1))),g=s((()=>(0,n._)("div",{class:"tab-title"},"搜尋工作",-1))),p=[v,g],h={class:"col"},_=s((()=>(0,n._)("div",{class:"tab-img"},[(0,n._)("i",{class:"far fa-calendar"})],-1))),b=s((()=>(0,n._)("div",{class:"tab-title"},"簽到打卡",-1))),k=[_,b],m={class:"col"},w=s((()=>(0,n._)("div",{class:"tab-img"},[(0,n._)("i",{class:"fas fa-home-lg"})],-1))),y=s((()=>(0,n._)("div",{class:"tab-title"},"回首頁",-1))),C=[w,y],$={class:"col"},P=s((()=>(0,n._)("div",{class:"tab-img"},[(0,n._)("i",{class:"far fa-question-circle"})],-1))),I=s((()=>(0,n._)("div",{class:"tab-title"},"常見問題",-1))),S=[P,I],D={class:"col"},H=s((()=>(0,n._)("div",{class:"tab-img"},[(0,n._)("i",{class:"far fa-user"})],-1))),N=s((()=>(0,n._)("div",{class:"tab-title"},"會員專區",-1))),O=[H,N];function L(t,a,e,s,r,u){return(0,n.wg)(),(0,n.iD)("footer",c,[(0,n._)("div",l,["purple"==s.model?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("a",{onClick:a[0]||(a[0]=a=>t.$router.push({path:"/caregiver/list"})),class:(0,i.C_)(s.classList[0])},d,2)])):(0,n.kq)("",!0),"pink"==s.model?((0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("a",{onClick:a[1]||(a[1]=a=>t.$router.push({path:"/work/list"})),class:(0,i.C_)(s.classList[0])},p,2)])):(0,n.kq)("",!0),(0,n._)("div",h,[(0,n._)("a",{onClick:a[2]||(a[2]=a=>t.$router.push({path:"/schedule/list"})),class:(0,i.C_)(s.classList[1])},k,2)]),(0,n._)("div",m,[(0,n._)("a",{onClick:a[3]||(a[3]=a=>t.$router.push({path:"/home"})),class:"tab-link"},C)]),(0,n._)("div",$,[(0,n._)("a",{onClick:a[4]||(a[4]=a=>t.$router.push({path:"/faq"})),class:(0,i.C_)(s.classList[2])},S,2)]),(0,n._)("div",D,[(0,n._)("a",{onClick:a[5]||(a[5]=a=>t.$router.push({path:"/member"})),class:(0,i.C_)(s.classList[3])},O,2)])])])}var x=e(2262),T={setup(){const t="pink",a=(0,x.iH)(["tab-link","tab-link","tab-link","tab-link"]),e=location.href,n=e.split("/");return n.includes("caregiver")||n.includes("work")?a.value=["tab-link active","tab-link","tab-link","tab-link"]:n.includes("schedule")?a.value=["tab-link","tab-link active","tab-link","tab-link"]:n.includes("faq")?a.value=["tab-link","tab-link","tab-link active","tab-link"]:n.includes("member")&&(a.value=["tab-link","tab-link","tab-link","tab-link active"]),{classList:a,model:t}}},J=e(3744);const E=(0,J.Z)(T,[["render",L],["__scopeId","data-v-c7be6040"]]);var z=E},9799:function(t,a,e){e.d(a,{Z:function(){return w}});var n=e(6252),i=e(3577);const s=t=>((0,n.dD)("data-v-6d50fb3a"),t=t(),(0,n.Cn)(),t),c={class:"c-header"},l={class:"navbar ui-navbar"},o={class:"navbar-nav"},r=s((()=>(0,n._)("a",{class:"nav-link"},[(0,n._)("i",{class:"fa fa-chevron-left"})],-1))),u=[r],d={class:"navbar-brand"},f={class:"navbar-nav"},v={class:"nav-item"},g={class:"nav-link"};function p(t,a,e,s,r,p){return(0,n.wg)(),(0,n.iD)("header",c,[(0,n._)("nav",l,[(0,n._)("ul",o,[(0,n._)("li",{class:"nav-item",onClick:a[0]||(a[0]=(...t)=>s.backTo&&s.backTo(...t))},u)]),(0,n._)("h1",d,(0,i.zw)(e.title),1),(0,n._)("ul",f,[(0,n._)("li",v,[(0,n._)("a",g,[(0,n._)("i",{class:(0,i.C_)(s.iconCode),onClick:a[1]||(a[1]=(...t)=>s.goto&&s.goto(...t))},[(0,n._)("span",null,(0,i.zw)(s.text),1)],2)])])])])])}e(7658);var h=e(2201),_=e(4477),b={props:{title:String,right:String,path:String,backToPath:String},setup(t){const a=(0,_.s6)(),e=a.goto,n=(0,h.tv)();let i="",s="";const c=t.right?t.right:"";"add"==c&&(i="fa fa-plus",s=" 新增"),"map"==c&&(i="fas fa-map-marker-alt",s=" 地圖"),"text"==c&&(i="far fa-list-ul",s=" 列表"),"search"==c&&(i="far fa-search",s=" 搜尋");const l=()=>{"search"==t.path?console.log("search"):n.push({path:t.path})},o=()=>{if("-1"==t.backToPath)try{e("back")}catch(a){console.log(a),n.back()}else t.backToPath?n.push({path:t.backToPath}):n.push({path:"/home"})};return{iconCode:i,text:s,backTo:o,goto:l}}},k=e(3744);const m=(0,k.Z)(b,[["render",p],["__scopeId","data-v-6d50fb3a"]]);var w=m},9408:function(t,a,e){e.r(a),e.d(a,{default:function(){return Q}});var n=e(6252),i=e(3577);const s=t=>((0,n.dD)("data-v-132d26e0"),t=t(),(0,n.Cn)(),t),c={class:"careRecipientInfo"},l={class:"main"},o={class:"title"},r={class:"main1"},u=s((()=>(0,n._)("div",{class:"title1"},"性別",-1))),d={class:"content1"},f={class:"main1"},v=s((()=>(0,n._)("div",{class:"title1"},"年齡",-1))),g={class:"content1"},p={class:"main1"},h=s((()=>(0,n._)("div",{class:"title1"},"身高",-1))),_={class:"content1"},b={class:"main1"},k=s((()=>(0,n._)("div",{class:"title1"},"體重",-1))),m={class:"content1"},w={class:"main1"},y=s((()=>(0,n._)("div",{class:"title1"},"關係",-1))),C={class:"content1"},$={class:"main2"},P=s((()=>(0,n._)("div",{class:"title2"},"行動能力",-1))),I={class:"content2"},S={class:"main2"},D=s((()=>(0,n._)("div",{class:"title2"},"照顧地點",-1))),H={class:"content2"},N=s((()=>(0,n._)("hr",{class:"divider"},null,-1))),O={class:"main"},L=s((()=>(0,n._)("div",{class:"title"},"病症",-1))),x={key:0},T={class:"title2"},J={class:"content2"},E={key:1},z=s((()=>(0,n._)("div",{class:"main2"},[(0,n._)("div",{class:"title2"},"無病症資料")],-1))),G=[z],M=s((()=>(0,n._)("hr",{class:"divider"},null,-1))),q={class:"btnArea"};function j(t,a,e,s,z,j){const F=(0,n.up)("Header"),Z=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(F,{title:"資料內容",backToPath:"/careRecipient/list"}),(0,n._)("div",l,[(0,n._)("div",o,(0,i.zw)(s.data.name),1),(0,n._)("div",r,[u,(0,n._)("div",d,(0,i.zw)("Female"==s.data.gender?"女性":"男性"),1)]),(0,n._)("div",f,[v,(0,n._)("div",g,(0,i.zw)(s.data.age)+"歲",1)]),(0,n._)("div",p,[h,(0,n._)("div",_,(0,i.zw)(s.data.height)+"公分",1)]),(0,n._)("div",b,[k,(0,n._)("div",m,(0,i.zw)(s.data.weight)+"公斤",1)]),(0,n._)("div",w,[y,(0,n._)("div",C,(0,i.zw)(s.data.relationship),1)]),(0,n._)("div",$,[P,(0,n._)("div",I,(0,i.zw)(s.abilityToActInfo.join("、")),1)]),(0,n._)("div",S,[D,(0,n._)("div",H,(0,i.zw)(s.servicePlaceInfo),1)])]),N,(0,n._)("div",O,[L,s.data?.disease?.length>0?((0,n.wg)(),(0,n.iD)("div",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.data.disease,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"main2",key:t.id},[(0,n._)("div",T,(0,i.zw)(t.diseaseName),1),(0,n._)("div",J,(0,i.zw)(t.symptom.join("、")),1)])))),128))])):(0,n.kq)("",!0),0==s.data?.disease?.length?((0,n.wg)(),(0,n.iD)("div",E,G)):(0,n.kq)("",!0)]),M,(0,n._)("div",q,[(0,n._)("button",{type:"button",class:"btn btn-outline-primary",onClick:a[0]||(a[0]=t=>s.goto(`/careRecipient/edit/${s.urlId}`))},"修改資料"),(0,n._)("button",{type:"button",class:"btn btn-outline-primary",onClick:a[1]||(a[1]=(...t)=>s.deleteData&&s.deleteData(...t))},"刪除資料")]),(0,n.Wm)(Z)])}e(7658);var F=e(9799),Z=e(3393),W=e(2262),A=e(2201),B=e(1557),R=e(1830),U=e(4988),V={setup(){const t=(0,A.tv)(),a=(0,W.iH)([]),e=(0,U.nN)().urlId;let i=[],s=(0,W.iH)("");const c=a=>{t.push({path:a})},l=async()=>{const t=await(0,B.qW)("確定刪除此筆資料");if(1==t){let t=await(0,R.eO)({id:e});if(t.status)(0,B.FN)("資料已刪除"),c("/careRecipient/list");else{const a=t.message||"錯誤";(0,B.FN)(a)}}};return(0,n.wF)((async()=>{try{a.value=await(0,R.uT)({id:e}),a.value=a.value.data,a.value.abilityToAct.forEach((function(t,a){i.push(t.name)})),1==a.value.servicePlace.placeType.id?s.value=a.value.servicePlace.city.name+a.value.servicePlace.area.name:s.value=a.value.servicePlace.city.name+a.value.servicePlace.area.name+a.value.servicePlace.place.address}catch(t){console.log(t)}})),{data:a,abilityToActInfo:i,servicePlaceInfo:s,goto:c,urlId:e,deleteData:l}},components:{Header:F.Z,Footer:Z.Z}},Y=e(3744);const K=(0,Y.Z)(V,[["render",j],["__scopeId","data-v-132d26e0"]]);var Q=K}}]);
//# sourceMappingURL=9408.7f15b7cf.js.map