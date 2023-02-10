"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[9308],{1181:function(a,e,t){t.d(e,{Z:function(){return g}});var l=t(6252),c=t.p+"img/nodata.ac65178d.svg";const n=a=>((0,l.dD)("data-v-74e50aab"),a=a(),(0,l.Cn)(),a),s={class:"nodata"},i=n((()=>(0,l._)("img",{src:c,alt:"無資料"},null,-1))),o=n((()=>(0,l._)("p",null,"目前沒有資料",-1))),r=[i,o];function u(a,e){return(0,l.wg)(),(0,l.iD)("div",s,r)}var d=t(3744);const v={},p=(0,d.Z)(v,[["render",u],["__scopeId","data-v-74e50aab"]]);var g=p},9799:function(a,e,t){t.d(e,{Z:function(){return k}});var l=t(6252),c=t(3577);const n=a=>((0,l.dD)("data-v-6d50fb3a"),a=a(),(0,l.Cn)(),a),s={class:"c-header"},i={class:"navbar ui-navbar"},o={class:"navbar-nav"},r=n((()=>(0,l._)("a",{class:"nav-link"},[(0,l._)("i",{class:"fa fa-chevron-left"})],-1))),u=[r],d={class:"navbar-brand"},v={class:"navbar-nav"},p={class:"nav-item"},g={class:"nav-link"};function h(a,e,t,n,r,h){return(0,l.wg)(),(0,l.iD)("header",s,[(0,l._)("nav",i,[(0,l._)("ul",o,[(0,l._)("li",{class:"nav-item",onClick:e[0]||(e[0]=(...a)=>n.backTo&&n.backTo(...a))},u)]),(0,l._)("h1",d,(0,c.zw)(t.title),1),(0,l._)("ul",v,[(0,l._)("li",p,[(0,l._)("a",g,[(0,l._)("i",{class:(0,c.C_)(n.iconCode),onClick:e[1]||(e[1]=(...a)=>n.goto&&n.goto(...a))},[(0,l._)("span",null,(0,c.zw)(n.text),1)],2)])])])])])}t(7658);var _=t(2201),f=t(4477),y={props:{title:String,right:String,path:String,backToPath:String},setup(a){const e=(0,f.s6)(),t=e.goto,l=(0,_.tv)();let c="",n="";const s=a.right?a.right:"";"add"==s&&(c="fa fa-plus",n=" 新增"),"map"==s&&(c="fas fa-map-marker-alt",n=" 地圖"),"text"==s&&(c="far fa-list-ul",n=" 列表"),"search"==s&&(c="far fa-search",n=" 搜尋");const i=()=>{"search"==a.path?console.log("search"):l.push({path:a.path})},o=()=>{if("-1"==a.backToPath)try{t("back")}catch(e){console.log(e),l.back()}else a.backToPath?l.push({path:a.backToPath}):l.push({path:"/home"})};return{iconCode:c,text:n,backTo:o,goto:i}}},w=t(3744);const b=(0,w.Z)(y,[["render",h],["__scopeId","data-v-6d50fb3a"]]);var k=b},9192:function(a,e,t){t.r(e),t.d(e,{default:function(){return V}});var l=t(6252),c=t(3577);const n={class:"newCourse"},s={class:"c-main"},i={class:"course-container"},o={class:"card-body"},r=["onClick"],u={class:"card-title"},d={class:"card-date"},v={class:"card-organize"},p={class:"card-location"},g={class:"card-hour"};function h(a,e,t,h,_,f){const y=(0,l.up)("Header"),w=(0,l.up)("CitySelect"),b=(0,l.up)("NoData");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(y,{title:"最新課程",backToPath:"/course/index"}),(0,l._)("div",n,[(0,l._)("section",s,[(0,l.Wm)(w,{onCityIdx:h.updateCityIdx,onAreaIdx:h.updateAreaIdx},null,8,["onCityIdx","onAreaIdx"]),0==h.total?((0,l.wg)(),(0,l.j4)(b,{key:0})):(0,l.kq)("",!0),(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.courseData,(a=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:a.id},[(0,l._)("div",o,[(0,l._)("a",{onClick:e=>h.goto(`/course/info/${a.courseId}`),class:"card-link"},[(0,l._)("div",u,(0,c.zw)(a.name),1),(0,l._)("div",d,"課程日期 : "+(0,c.zw)(a.startDate.slice(0,10))+" ~ "+(0,c.zw)(a.endDate.slice(0,10)),1),(0,l._)("div",v,"培訓單位 : "+(0,c.zw)(a.organizer),1),(0,l._)("div",p,"縣市地區 : "+(0,c.zw)(a.address),1),(0,l._)("div",g,"訓練時數 : "+(0,c.zw)(a.hours),1)],8,r)])])))),128))])])])],64)}t(7658);var _=t(9799),f=t(9963);const y=a=>((0,l.dD)("data-v-14849fac"),a=a(),(0,l.Cn)(),a),w={class:"ui-tab selectArea"},b={class:"row"},k={class:"col"},I=y((()=>(0,l._)("option",{selected:""},"請選擇縣市",-1))),C=["value"],m={class:"col"},x=y((()=>(0,l._)("option",{selected:""},"請選擇鄉鎮市區",-1))),D=["value"];function H(a,e,t,n,s,i){return(0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",b,[(0,l._)("div",k,[(0,l.wy)((0,l._)("select",{class:"form-control form-select","onUpdate:modelValue":e[0]||(e[0]=a=>n.city=a),onChange:e[1]||(e[1]=(...a)=>n.changeCityIdx&&n.changeCityIdx(...a))},[I,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.cityAreaData,(a=>((0,l.wg)(),(0,l.iD)("option",{value:a.id,key:a.id},(0,c.zw)(a.city_name),9,C)))),128))],544),[[f.bM,n.city]])]),(0,l._)("div",m,[(0,l.wy)((0,l._)("select",{class:"form-control form-select","onUpdate:modelValue":e[2]||(e[2]=a=>n.area=a),onChange:e[3]||(e[3]=(...a)=>n.changeAreaIdx&&n.changeAreaIdx(...a))},[x,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.areaList,(a=>((0,l.wg)(),(0,l.iD)("option",{value:a.id,key:a.id},(0,c.zw)(a.area_name),9,D)))),128))],544),[[f.bM,n.area]])])])])}var A=t(2262),z=t(1830),T=t(4477),Z={props:{},setup(a,{emit:e}){const t=(0,T.ce)();let c=(0,A.iH)([]),n=(0,A.iH)("請選擇縣市"),s=(0,A.iH)("請選擇鄉鎮市區"),i=(0,A.iH)(8),o=(0,A.iH)(),r=((0,A.iH)([]),(0,A.iH)([]));const u=a=>{i.value=a.target.value},d=a=>{o.value=a.target.value},v=()=>{e("cityIdx",i)},p=()=>{e("areaIdx",o)};return(0,l.bv)((async()=>{void 0==t.cityAreaList?(c.value=await(0,z.t3)(),c.value=c.value.data,t.cityAreaList=c.value):c.value=t.cityAreaList,n.value=8,i.value=8,r.value=c?.value?.[i.value-1]?.areas})),(0,l.YP)((()=>i.value),(async()=>{r.value=c?.value?.[i.value-1]?.areas,v()})),(0,l.YP)((()=>o.value),(async()=>{p()})),{cityAreaData:c,city:n,area:s,areaList:r,changeCityIdx:u,changeAreaIdx:d}}},P=t(3744);const L=(0,P.Z)(Z,[["render",H],["__scopeId","data-v-14849fac"]]);var S=L,Y=t(1181),K=(t(1557),t(2201)),M=t(2863),N={setup(){const a=(0,K.tv)();let e=(0,A.iH)([]),t=(0,A.iH)(0),c=((0,A.iH)(8),(0,A.iH)(null),(0,A.iH)({page:1,limit:10,cityId:null,areaId:null})),n=null;const s=async a=>{c.value.cityId=a.value,c.value.areaIdx=null,e.value=await(0,z.pp)(c.value),t.value=e.value.data.total,e.value=e.value.data.list},i=async a=>{c.value.areaIdx=a.value,e.value=await(0,z.pp)(c.value),t.value=e.value.data.total,e.value=e.value.data.list};(0,l.bv)((async()=>{e.value=await(0,z.pp)(c.value),t.value=e.value.data.total,e.value=e.value.data.list,n=setInterval((()=>{(0,M.CL)()&&t.value>0&&e.value.length<t.value&&o()}),500)}));const o=async()=>{c.value.page+=1;let a=(0,A.iH)();a.value=await(0,z.pp)(c.value),e.value=e.value.concat(a.value.data.list)};(0,l.Ah)((()=>clearInterval(n)));const r=e=>{a.push({path:e})};return{updateCityIdx:s,updateAreaIdx:i,courseData:e,total:t,goto:r}},components:{Header:_.Z,CitySelect:S,NoData:Y.Z}};const U=(0,P.Z)(N,[["render",h],["__scopeId","data-v-4f75613f"]]);var V=U}}]);
//# sourceMappingURL=9308.0757091b.js.map