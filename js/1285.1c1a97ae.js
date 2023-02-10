"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[1285],{9799:function(a,e,t){t.d(e,{Z:function(){return k}});var i=t(6252),s=t(3577);const l=a=>((0,i.dD)("data-v-6d50fb3a"),a=a(),(0,i.Cn)(),a),c={class:"c-header"},r={class:"navbar ui-navbar"},n={class:"navbar-nav"},o=l((()=>(0,i._)("a",{class:"nav-link"},[(0,i._)("i",{class:"fa fa-chevron-left"})],-1))),u=[o],d={class:"navbar-brand"},v={class:"navbar-nav"},p={class:"nav-item"},h={class:"nav-link"};function f(a,e,t,l,o,f){return(0,i.wg)(),(0,i.iD)("header",c,[(0,i._)("nav",r,[(0,i._)("ul",n,[(0,i._)("li",{class:"nav-item",onClick:e[0]||(e[0]=(...a)=>l.backTo&&l.backTo(...a))},u)]),(0,i._)("h1",d,(0,s.zw)(t.title),1),(0,i._)("ul",v,[(0,i._)("li",p,[(0,i._)("a",h,[(0,i._)("i",{class:(0,s.C_)(l.iconCode),onClick:e[1]||(e[1]=(...a)=>l.goto&&l.goto(...a))},[(0,i._)("span",null,(0,s.zw)(l.text),1)],2)])])])])])}t(7658);var _=t(2201),y=t(4477),g={props:{title:String,right:String,path:String,backToPath:String},setup(a){const e=(0,y.s6)(),t=e.goto,i=(0,_.tv)();let s="",l="";const c=a.right?a.right:"";"add"==c&&(s="fa fa-plus",l=" 新增"),"map"==c&&(s="fas fa-map-marker-alt",l=" 地圖"),"text"==c&&(s="far fa-list-ul",l=" 列表"),"search"==c&&(s="far fa-search",l=" 搜尋");const r=()=>{"search"==a.path?console.log("search"):i.push({path:a.path})},n=()=>{if("-1"==a.backToPath)try{t("back")}catch(e){console.log(e),i.back()}else a.backToPath?i.push({path:a.backToPath}):i.push({path:"/home"})};return{iconCode:s,text:l,backTo:n,goto:r}}},b=t(3744);const w=(0,b.Z)(g,[["render",f],["__scopeId","data-v-6d50fb3a"]]);var k=w},1545:function(a,e,t){t.d(e,{Z:function(){return I}});var i=t(6252),s=t(3577),l=t(9963);const c=a=>((0,i.dD)("data-v-72b7ff12"),a=a(),(0,i.Cn)(),a),r={class:"ui-tab selectArea"},n={class:"row"},o={class:"col"},u=c((()=>(0,i._)("option",{selected:""},"請選擇縣市",-1))),d=["value"],v={class:"col"},p=c((()=>(0,i._)("option",{selected:""},"請選擇鄉鎮市區",-1))),h=["value"];function f(a,e,t,c,f,_){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",n,[(0,i._)("div",o,[(0,i.wy)((0,i._)("select",{class:"form-control form-select","onUpdate:modelValue":e[0]||(e[0]=a=>c.city=a),onChange:e[1]||(e[1]=(...a)=>c.changeCityIdx&&c.changeCityIdx(...a))},[u,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.cityAreaData,(a=>((0,i.wg)(),(0,i.iD)("option",{value:a.id,key:a.id},(0,s.zw)(a.city_name),9,d)))),128))],544),[[l.bM,c.city]])]),(0,i._)("div",v,[(0,i.wy)((0,i._)("select",{class:"form-control form-select","onUpdate:modelValue":e[2]||(e[2]=a=>c.area=a),onChange:e[3]||(e[3]=(...a)=>c.changeAreaIdx&&c.changeAreaIdx(...a))},[p,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.areaList,(a=>((0,i.wg)(),(0,i.iD)("option",{value:a.id,key:a.id},(0,s.zw)(a.area_name),9,h)))),128))],544),[[l.bM,c.area]])])])])}var _=t(2262),y=t(1830),g=t(4477),b={props:{},setup(a,{emit:e}){const t=(0,g.ce)(),s=(0,g.fG)();let l=(0,_.iH)([]),c=(0,_.iH)("請選擇縣市"),r=(0,_.iH)("請選擇鄉鎮市區"),n=(0,_.iH)(0),o=(0,_.iH)(0),u=((0,_.iH)([]),(0,_.iH)([]));const d=a=>{n.value=a.target.value},v=a=>{o.value=a.target.value},p=()=>{e("cityIdx",n)},h=()=>{e("areaIdx",o)};return(0,i.bv)((async()=>{void 0==t.cityAreaList?(l.value=await(0,y.t3)(),l.value=l.value.data,t.cityAreaList=l.value):l.value=t.cityAreaList,0==s.userPosition.cityId?(c.value=1,n.value=1):(c.value=s.userPosition.cityId,n.value=s.userPosition.cityId),u.value=l?.value?.[n.value-1]?.areas})),(0,i.YP)((()=>n.value),(async()=>{u.value=l?.value?.[n.value-1]?.areas,p()})),(0,i.YP)((()=>o.value),(async()=>{h()})),{cityAreaData:l,city:c,area:r,areaList:u,changeCityIdx:d,changeAreaIdx:v}}},w=t(3744);const k=(0,w.Z)(b,[["render",f],["__scopeId","data-v-72b7ff12"]]);var I=k},1285:function(a,e,t){t.r(e),t.d(e,{default:function(){return D}});var i=t(6252),s=t(3577);const l=a=>((0,i.dD)("data-v-fedef3ac"),a=a(),(0,i.Cn)(),a),c={class:"hospital"},r={class:"c-main"},n={class:"resource-container"},o={class:"card-header"},u=["href"],d=l((()=>(0,i._)("i",{class:"far fa-link"},null,-1))),v=[d],p={class:"card-body"},h=["href"],f={class:"card-title"},_={class:"card-text"};function y(a,e,t,l,d,y){const g=(0,i.up)("Header"),b=(0,i.up)("CitySelecter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(g,{title:"醫院",right:"map",path:"/map/hospitalMap"}),(0,i._)("div",c,[(0,i._)("section",r,[(0,i.Wm)(b,{onCityIdx:l.updateCityIdx,onAreaIdx:l.updateAreaIdx},null,8,["onCityIdx","onAreaIdx"]),(0,i._)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.hospitalData,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"card",key:a.properties?.id},[(0,i._)("div",o,[(0,i._)("a",{href:a.properties?.website,class:"card-link"},v,8,u)]),(0,i._)("div",p,[(0,i._)("a",{href:a.properties?.website,class:"card-link"},[(0,i._)("div",f,(0,s.zw)(a.properties?.name),1),(0,i._)("div",_,(0,s.zw)(a.properties?.city.name)+" "+(0,s.zw)(a.properties?.area.name)+" "+(0,s.zw)(a.properties?.address),1)],8,h)])])))),128))])])])],64)}var g=t(9799),b=t(1545),w=t(1557),k=t(2262),I=t(1830),m={setup(){let a=(0,k.iH)([]),e=(0,k.iH)(0),t=(0,k.iH)(0);const s=a=>{e.value=a.value},l=a=>{t.value=a.value};return(0,i.YP)((()=>e.value),(async()=>{a.value=await(0,I.oR)({cityId:e.value}),a.value=a.value.data})),(0,i.YP)((()=>t.value),(async()=>{a.value=await(0,I.bc)({cityId:e.value,areaId:t.value}),0==a.value.data.length?((0,w.FN)("該區域無資料"),a.value=[]):a.value=a.value.data})),{hospitalData:a,updateCityIdx:s,updateAreaIdx:l}},components:{Header:g.Z,CitySelecter:b.Z}},C=t(3744);const x=(0,C.Z)(m,[["render",y],["__scopeId","data-v-fedef3ac"]]);var D=x}}]);
//# sourceMappingURL=1285.1c1a97ae.js.map