"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[3806],{3393:function(a,s,t){t.d(s,{Z:function(){return F}});t(7658);var l=t(6252),c=t(3577);const i=a=>((0,l.dD)("data-v-c7be6040"),a=a(),(0,l.Cn)(),a),e={class:"c-footer"},n={class:"row ui-tabbar"},r={key:0,class:"col"},o=i((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-search"})],-1))),u=i((()=>(0,l._)("div",{class:"tab-title"},"搜尋資料",-1))),b=[o,u],d={key:1,class:"col"},v=i((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-search"})],-1))),k=i((()=>(0,l._)("div",{class:"tab-title"},"搜尋工作",-1))),_=[v,k],h={class:"col"},p=i((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-calendar"})],-1))),f=i((()=>(0,l._)("div",{class:"tab-title"},"簽到打卡",-1))),g=[p,f],m={class:"col"},C=i((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"fas fa-home-lg"})],-1))),w=i((()=>(0,l._)("div",{class:"tab-title"},"回首頁",-1))),D=[C,w],T={class:"col"},Z=i((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-question-circle"})],-1))),L=i((()=>(0,l._)("div",{class:"tab-title"},"常見問題",-1))),$=[Z,L],q={class:"col"},H=i((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-user"})],-1))),P=i((()=>(0,l._)("div",{class:"tab-title"},"會員專區",-1))),S=[H,P];function x(a,s,t,i,o,u){return(0,l.wg)(),(0,l.iD)("footer",e,[(0,l._)("div",n,["purple"==i.model?((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("a",{onClick:s[0]||(s[0]=s=>a.$router.push({path:"/caregiver/list"})),class:(0,c.C_)(i.classList[0])},b,2)])):(0,l.kq)("",!0),"pink"==i.model?((0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("a",{onClick:s[1]||(s[1]=s=>a.$router.push({path:"/work/list"})),class:(0,c.C_)(i.classList[0])},_,2)])):(0,l.kq)("",!0),(0,l._)("div",h,[(0,l._)("a",{onClick:s[2]||(s[2]=s=>a.$router.push({path:"/schedule/list"})),class:(0,c.C_)(i.classList[1])},g,2)]),(0,l._)("div",m,[(0,l._)("a",{onClick:s[3]||(s[3]=s=>a.$router.push({path:"/home"})),class:"tab-link"},D)]),(0,l._)("div",T,[(0,l._)("a",{onClick:s[4]||(s[4]=s=>a.$router.push({path:"/faq"})),class:(0,c.C_)(i.classList[2])},$,2)]),(0,l._)("div",q,[(0,l._)("a",{onClick:s[5]||(s[5]=s=>a.$router.push({path:"/member"})),class:(0,c.C_)(i.classList[3])},S,2)])])])}var y=t(2262),I={setup(){const a="pink",s=(0,y.iH)(["tab-link","tab-link","tab-link","tab-link"]),t=location.href,l=t.split("/");return l.includes("caregiver")||l.includes("work")?s.value=["tab-link active","tab-link","tab-link","tab-link"]:l.includes("schedule")?s.value=["tab-link","tab-link active","tab-link","tab-link"]:l.includes("faq")?s.value=["tab-link","tab-link","tab-link active","tab-link"]:l.includes("member")&&(s.value=["tab-link","tab-link","tab-link","tab-link active"]),{classList:s,model:a}}},W=t(3744);const z=(0,W.Z)(I,[["render",x],["__scopeId","data-v-c7be6040"]]);var F=z},9799:function(a,s,t){t.d(s,{Z:function(){return C}});var l=t(6252),c=t(3577);const i=a=>((0,l.dD)("data-v-6d50fb3a"),a=a(),(0,l.Cn)(),a),e={class:"c-header"},n={class:"navbar ui-navbar"},r={class:"navbar-nav"},o=i((()=>(0,l._)("a",{class:"nav-link"},[(0,l._)("i",{class:"fa fa-chevron-left"})],-1))),u=[o],b={class:"navbar-brand"},d={class:"navbar-nav"},v={class:"nav-item"},k={class:"nav-link"};function _(a,s,t,i,o,_){return(0,l.wg)(),(0,l.iD)("header",e,[(0,l._)("nav",n,[(0,l._)("ul",r,[(0,l._)("li",{class:"nav-item",onClick:s[0]||(s[0]=(...a)=>i.backTo&&i.backTo(...a))},u)]),(0,l._)("h1",b,(0,c.zw)(t.title),1),(0,l._)("ul",d,[(0,l._)("li",v,[(0,l._)("a",k,[(0,l._)("i",{class:(0,c.C_)(i.iconCode),onClick:s[1]||(s[1]=(...a)=>i.goto&&i.goto(...a))},[(0,l._)("span",null,(0,c.zw)(i.text),1)],2)])])])])])}t(7658);var h=t(2201),p=t(4477),f={props:{title:String,right:String,path:String,backToPath:String},setup(a){const s=(0,p.s6)(),t=s.goto,l=(0,h.tv)();let c="",i="";const e=a.right?a.right:"";"add"==e&&(c="fa fa-plus",i=" 新增"),"map"==e&&(c="fas fa-map-marker-alt",i=" 地圖"),"text"==e&&(c="far fa-list-ul",i=" 列表"),"search"==e&&(c="far fa-search",i=" 搜尋");const n=()=>{"search"==a.path?console.log("search"):l.push({path:a.path})},r=()=>{if("-1"==a.backToPath)try{t("back")}catch(s){console.log(s),l.back()}else a.backToPath?l.push({path:a.backToPath}):l.push({path:"/home"})};return{iconCode:c,text:i,backTo:r,goto:n}}},g=t(3744);const m=(0,g.Z)(f,[["render",_],["__scopeId","data-v-6d50fb3a"]]);var C=m},3806:function(a,s,t){t.r(s),t.d(s,{default:function(){return b}});var l=t(6252);const c={class:"help"};function i(a,s,t,i,e,n){const r=(0,l.up)("Header"),o=(0,l.up)("router-view"),u=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{title:"使用教學"}),(0,l._)("div",c,[(0,l.Wm)(o)]),(0,l.Wm)(u)],64)}var e=t(9799),n=t(3393),r={setup(){return{}},components:{Header:e.Z,Footer:n.Z}},o=t(3744);const u=(0,o.Z)(r,[["render",i],["__scopeId","data-v-4cc594c5"]]);var b=u}}]);
//# sourceMappingURL=3806.9ddf866c.js.map