"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[2900],{3393:function(a,t,s){s.d(t,{Z:function(){return I}});s(7658);var l=s(6252),i=s(3577);const c=a=>((0,l.dD)("data-v-c7be6040"),a=a(),(0,l.Cn)(),a),e={class:"c-footer"},n={class:"row ui-tabbar"},r={key:0,class:"col"},o=c((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-search"})],-1))),u=c((()=>(0,l._)("div",{class:"tab-title"},"搜尋資料",-1))),d=[o,u],b={key:1,class:"col"},v=c((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-search"})],-1))),k=c((()=>(0,l._)("div",{class:"tab-title"},"搜尋工作",-1))),h=[v,k],_={class:"col"},p=c((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-calendar"})],-1))),f=c((()=>(0,l._)("div",{class:"tab-title"},"簽到打卡",-1))),m=[p,f],g={class:"col"},C=c((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"fas fa-home-lg"})],-1))),w=c((()=>(0,l._)("div",{class:"tab-title"},"回首頁",-1))),T=[C,w],$={class:"col"},D=c((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-question-circle"})],-1))),Z=c((()=>(0,l._)("div",{class:"tab-title"},"常見問題",-1))),q=[D,Z],L={class:"col"},y=c((()=>(0,l._)("div",{class:"tab-img"},[(0,l._)("i",{class:"far fa-user"})],-1))),F=c((()=>(0,l._)("div",{class:"tab-title"},"會員專區",-1))),P=[y,F];function H(a,t,s,c,o,u){return(0,l.wg)(),(0,l.iD)("footer",e,[(0,l._)("div",n,["purple"==c.model?((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("a",{onClick:t[0]||(t[0]=t=>a.$router.push({path:"/caregiver/list"})),class:(0,i.C_)(c.classList[0])},d,2)])):(0,l.kq)("",!0),"pink"==c.model?((0,l.wg)(),(0,l.iD)("div",b,[(0,l._)("a",{onClick:t[1]||(t[1]=t=>a.$router.push({path:"/work/list"})),class:(0,i.C_)(c.classList[0])},h,2)])):(0,l.kq)("",!0),(0,l._)("div",_,[(0,l._)("a",{onClick:t[2]||(t[2]=t=>a.$router.push({path:"/schedule/list"})),class:(0,i.C_)(c.classList[1])},m,2)]),(0,l._)("div",g,[(0,l._)("a",{onClick:t[3]||(t[3]=t=>a.$router.push({path:"/home"})),class:"tab-link"},T)]),(0,l._)("div",$,[(0,l._)("a",{onClick:t[4]||(t[4]=t=>a.$router.push({path:"/faq"})),class:(0,i.C_)(c.classList[2])},q,2)]),(0,l._)("div",L,[(0,l._)("a",{onClick:t[5]||(t[5]=t=>a.$router.push({path:"/member"})),class:(0,i.C_)(c.classList[3])},P,2)])])])}var S=s(2262),x={setup(){const a="pink",t=(0,S.iH)(["tab-link","tab-link","tab-link","tab-link"]),s=location.href,l=s.split("/");return l.includes("caregiver")||l.includes("work")?t.value=["tab-link active","tab-link","tab-link","tab-link"]:l.includes("schedule")?t.value=["tab-link","tab-link active","tab-link","tab-link"]:l.includes("faq")?t.value=["tab-link","tab-link","tab-link active","tab-link"]:l.includes("member")&&(t.value=["tab-link","tab-link","tab-link","tab-link active"]),{classList:t,model:a}}},W=s(3744);const z=(0,W.Z)(x,[["render",H],["__scopeId","data-v-c7be6040"]]);var I=z},9799:function(a,t,s){s.d(t,{Z:function(){return C}});var l=s(6252),i=s(3577);const c=a=>((0,l.dD)("data-v-6d50fb3a"),a=a(),(0,l.Cn)(),a),e={class:"c-header"},n={class:"navbar ui-navbar"},r={class:"navbar-nav"},o=c((()=>(0,l._)("a",{class:"nav-link"},[(0,l._)("i",{class:"fa fa-chevron-left"})],-1))),u=[o],d={class:"navbar-brand"},b={class:"navbar-nav"},v={class:"nav-item"},k={class:"nav-link"};function h(a,t,s,c,o,h){return(0,l.wg)(),(0,l.iD)("header",e,[(0,l._)("nav",n,[(0,l._)("ul",r,[(0,l._)("li",{class:"nav-item",onClick:t[0]||(t[0]=(...a)=>c.backTo&&c.backTo(...a))},u)]),(0,l._)("h1",d,(0,i.zw)(s.title),1),(0,l._)("ul",b,[(0,l._)("li",v,[(0,l._)("a",k,[(0,l._)("i",{class:(0,i.C_)(c.iconCode),onClick:t[1]||(t[1]=(...a)=>c.goto&&c.goto(...a))},[(0,l._)("span",null,(0,i.zw)(c.text),1)],2)])])])])])}s(7658);var _=s(2201),p=s(4477),f={props:{title:String,right:String,path:String,backToPath:String},setup(a){const t=(0,p.s6)(),s=t.goto,l=(0,_.tv)();let i="",c="";const e=a.right?a.right:"";"add"==e&&(i="fa fa-plus",c=" 新增"),"map"==e&&(i="fas fa-map-marker-alt",c=" 地圖"),"text"==e&&(i="far fa-list-ul",c=" 列表"),"search"==e&&(i="far fa-search",c=" 搜尋");const n=()=>{"search"==a.path?console.log("search"):l.push({path:a.path})},r=()=>{if("-1"==a.backToPath)try{s("back")}catch(t){console.log(t),l.back()}else a.backToPath?l.push({path:a.backToPath}):l.push({path:"/home"})};return{iconCode:i,text:c,backTo:r,goto:n}}},m=s(3744);const g=(0,m.Z)(f,[["render",h],["__scopeId","data-v-6d50fb3a"]]);var C=g},2900:function(a,t,s){s.r(t),s.d(t,{default:function(){return b}});var l=s(6252),i=s(9963);const c={class:"careRecipient"};function e(a,t,s,e,n,r){const o=(0,l.up)("Header"),u=(0,l.up)("router-view"),d=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l.wy)((0,l.Wm)(o,{title:"服務需求資料",right:"add",path:"/requirement/add",backToPath:"/home"},null,512),[[i.F8,a.$route.meta.showHeader]]),(0,l.Wm)(u),(0,l.wy)((0,l.Wm)(d,null,null,512),[[i.F8,a.$route.meta.showFooter]])])}var n=s(9799),r=s(3393),o={setup(){return{}},components:{Header:n.Z,Footer:r.Z}},u=s(3744);const d=(0,u.Z)(o,[["render",e]]);var b=d}}]);
//# sourceMappingURL=2900.96ab5b8c.js.map