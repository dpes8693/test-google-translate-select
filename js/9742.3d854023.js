"use strict";(self["webpackChunknubk_cli"]=self["webpackChunknubk_cli"]||[]).push([[9742],{8019:function(a,s,l){l.d(s,{D:function(){return t}});const t=()=>{const a="input:not(input[type = checkbox], input[type = radio], input[type = file], input[readonly], input[disabled])",s=document.querySelectorAll(a);s.forEach((a=>{a.addEventListener("focus",(()=>{document.body.classList.add("fixfixed")})),a.addEventListener("blur",(()=>{document.body.classList.remove("fixfixed")}))}))}},3393:function(a,s,l){l.d(s,{Z:function(){return F}});l(7658);var t=l(6252),e=l(3577);const o=a=>((0,t.dD)("data-v-c7be6040"),a=a(),(0,t.Cn)(),a),r={class:"c-footer"},i={class:"row ui-tabbar"},n={key:0,class:"col"},c=o((()=>(0,t._)("div",{class:"tab-img"},[(0,t._)("i",{class:"far fa-search"})],-1))),d=o((()=>(0,t._)("div",{class:"tab-title"},"搜尋資料",-1))),u=[c,d],w={key:1,class:"col"},p=o((()=>(0,t._)("div",{class:"tab-img"},[(0,t._)("i",{class:"far fa-search"})],-1))),v=o((()=>(0,t._)("div",{class:"tab-title"},"搜尋工作",-1))),b=[p,v],_={class:"col"},h=o((()=>(0,t._)("div",{class:"tab-img"},[(0,t._)("i",{class:"far fa-calendar"})],-1))),k=o((()=>(0,t._)("div",{class:"tab-title"},"簽到打卡",-1))),f=[h,k],m={class:"col"},P=o((()=>(0,t._)("div",{class:"tab-img"},[(0,t._)("i",{class:"fas fa-home-lg"})],-1))),y=o((()=>(0,t._)("div",{class:"tab-title"},"回首頁",-1))),g=[P,y],C={class:"col"},D=o((()=>(0,t._)("div",{class:"tab-img"},[(0,t._)("i",{class:"far fa-question-circle"})],-1))),q=o((()=>(0,t._)("div",{class:"tab-title"},"常見問題",-1))),S=[D,q],x={class:"col"},H=o((()=>(0,t._)("div",{class:"tab-img"},[(0,t._)("i",{class:"far fa-user"})],-1))),L=o((()=>(0,t._)("div",{class:"tab-title"},"會員專區",-1))),A=[H,L];function U(a,s,l,o,c,d){return(0,t.wg)(),(0,t.iD)("footer",r,[(0,t._)("div",i,["purple"==o.model?((0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("a",{onClick:s[0]||(s[0]=s=>a.$router.push({path:"/caregiver/list"})),class:(0,e.C_)(o.classList[0])},u,2)])):(0,t.kq)("",!0),"pink"==o.model?((0,t.wg)(),(0,t.iD)("div",w,[(0,t._)("a",{onClick:s[1]||(s[1]=s=>a.$router.push({path:"/work/list"})),class:(0,e.C_)(o.classList[0])},b,2)])):(0,t.kq)("",!0),(0,t._)("div",_,[(0,t._)("a",{onClick:s[2]||(s[2]=s=>a.$router.push({path:"/schedule/list"})),class:(0,e.C_)(o.classList[1])},f,2)]),(0,t._)("div",m,[(0,t._)("a",{onClick:s[3]||(s[3]=s=>a.$router.push({path:"/home"})),class:"tab-link"},g)]),(0,t._)("div",C,[(0,t._)("a",{onClick:s[4]||(s[4]=s=>a.$router.push({path:"/faq"})),class:(0,e.C_)(o.classList[2])},S,2)]),(0,t._)("div",x,[(0,t._)("a",{onClick:s[5]||(s[5]=s=>a.$router.push({path:"/member"})),class:(0,e.C_)(o.classList[3])},A,2)])])])}var Z=l(2262),$={setup(){const a="pink",s=(0,Z.iH)(["tab-link","tab-link","tab-link","tab-link"]),l=location.href,t=l.split("/");return t.includes("caregiver")||t.includes("work")?s.value=["tab-link active","tab-link","tab-link","tab-link"]:t.includes("schedule")?s.value=["tab-link","tab-link active","tab-link","tab-link"]:t.includes("faq")?s.value=["tab-link","tab-link","tab-link active","tab-link"]:t.includes("member")&&(s.value=["tab-link","tab-link","tab-link","tab-link active"]),{classList:s,model:a}}},T=l(3744);const V=(0,T.Z)($,[["render",U],["__scopeId","data-v-c7be6040"]]);var F=V},9799:function(a,s,l){l.d(s,{Z:function(){return P}});var t=l(6252),e=l(3577);const o=a=>((0,t.dD)("data-v-6d50fb3a"),a=a(),(0,t.Cn)(),a),r={class:"c-header"},i={class:"navbar ui-navbar"},n={class:"navbar-nav"},c=o((()=>(0,t._)("a",{class:"nav-link"},[(0,t._)("i",{class:"fa fa-chevron-left"})],-1))),d=[c],u={class:"navbar-brand"},w={class:"navbar-nav"},p={class:"nav-item"},v={class:"nav-link"};function b(a,s,l,o,c,b){return(0,t.wg)(),(0,t.iD)("header",r,[(0,t._)("nav",i,[(0,t._)("ul",n,[(0,t._)("li",{class:"nav-item",onClick:s[0]||(s[0]=(...a)=>o.backTo&&o.backTo(...a))},d)]),(0,t._)("h1",u,(0,e.zw)(l.title),1),(0,t._)("ul",w,[(0,t._)("li",p,[(0,t._)("a",v,[(0,t._)("i",{class:(0,e.C_)(o.iconCode),onClick:s[1]||(s[1]=(...a)=>o.goto&&o.goto(...a))},[(0,t._)("span",null,(0,e.zw)(o.text),1)],2)])])])])])}l(7658);var _=l(2201),h=l(4477),k={props:{title:String,right:String,path:String,backToPath:String},setup(a){const s=(0,h.s6)(),l=s.goto,t=(0,_.tv)();let e="",o="";const r=a.right?a.right:"";"add"==r&&(e="fa fa-plus",o=" 新增"),"map"==r&&(e="fas fa-map-marker-alt",o=" 地圖"),"text"==r&&(e="far fa-list-ul",o=" 列表"),"search"==r&&(e="far fa-search",o=" 搜尋");const i=()=>{"search"==a.path?console.log("search"):t.push({path:a.path})},n=()=>{if("-1"==a.backToPath)try{l("back")}catch(s){console.log(s),t.back()}else a.backToPath?t.push({path:a.backToPath}):t.push({path:"/home"})};return{iconCode:e,text:o,backTo:n,goto:i}}},f=l(3744);const m=(0,f.Z)(k,[["render",b],["__scopeId","data-v-6d50fb3a"]]);var P=m},9742:function(a,s,l){l.r(s),l.d(s,{default:function(){return G}});l(7658);var t=l(6252),e=l(9963);const o=a=>((0,t.dD)("data-v-339ba288"),a=a(),(0,t.Cn)(),a),r={class:"password"},i={ref:"form"},n={class:"mb-3"},c=o((()=>(0,t._)("label",{class:"form-label"},[(0,t.Uk)("舊密碼"),(0,t._)("span",{class:"star"},"*")],-1))),d={key:0,class:"passwordArea"},u=o((()=>(0,t._)("i",{class:"far fa-eye"},null,-1))),w=[u],p={key:1,class:"passwordArea"},v=o((()=>(0,t._)("i",{class:"far fa-eye-slash"},null,-1))),b=[v],_={class:"mb-3"},h=o((()=>(0,t._)("label",{class:"form-label"},[(0,t.Uk)("新密碼"),(0,t._)("span",{class:"star"},"*")],-1))),k={key:0,class:"passwordArea"},f=o((()=>(0,t._)("i",{class:"far fa-eye"},null,-1))),m=[f],P={key:1,class:"passwordArea"},y=o((()=>(0,t._)("i",{class:"far fa-eye-slash"},null,-1))),g=[y],C={class:"mb-3"},D=o((()=>(0,t._)("label",{class:"form-label"},[(0,t.Uk)("確認密碼"),(0,t._)("span",{class:"star"},"*")],-1))),q={key:0,class:"passwordArea"},S=o((()=>(0,t._)("i",{class:"far fa-eye"},null,-1))),x=[S],H={key:1,class:"passwordArea"},L=o((()=>(0,t._)("i",{class:"far fa-eye-slash"},null,-1))),A=[L],U={class:"mt-4b btn-container"},Z={class:"row"},$={class:"col"},T={class:"col"};function V(a,s,l,o,u,v){const f=(0,t.up)("Header"),y=(0,t.up)("Footer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(f,{title:"變更密碼",backToPath:"/member"}),(0,t._)("div",r,[(0,t._)("form",i,[(0,t._)("div",n,[c,0==o.isShowPassword?((0,t.wg)(),(0,t.iD)("div",d,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",placeholder:"請輸入舊密碼","onUpdate:modelValue":s[0]||(s[0]=a=>o.inputData.oldPassword=a),required:""},null,512),[[e.nr,o.inputData.oldPassword]]),(0,t._)("a",{class:"nav-link",onClick:s[1]||(s[1]=(...a)=>o.showPassword&&o.showPassword(...a))},w)])):(0,t.kq)("",!0),1==o.isShowPassword?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"請輸入舊密碼","onUpdate:modelValue":s[2]||(s[2]=a=>o.inputData.oldPassword=a),required:""},null,512),[[e.nr,o.inputData.oldPassword]]),(0,t._)("a",{class:"nav-link",onClick:s[3]||(s[3]=(...a)=>o.showPassword&&o.showPassword(...a))},b)])):(0,t.kq)("",!0)]),(0,t._)("div",_,[h,0==o.isShowPassword2?((0,t.wg)(),(0,t.iD)("div",k,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",placeholder:"請輸入新密碼","onUpdate:modelValue":s[4]||(s[4]=a=>o.inputData.newPassword=a),pattern:"^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$",title:"最少6個字元，需有英文及數字",required:""},null,512),[[e.nr,o.inputData.newPassword]]),(0,t._)("a",{class:"nav-link",onClick:s[5]||(s[5]=(...a)=>o.showPassword2&&o.showPassword2(...a))},m)])):(0,t.kq)("",!0),1==o.isShowPassword2?((0,t.wg)(),(0,t.iD)("div",P,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"請輸入新密碼","onUpdate:modelValue":s[6]||(s[6]=a=>o.inputData.newPassword=a),pattern:"^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$",title:"最少6個字元，需有英文及數字",required:""},null,512),[[e.nr,o.inputData.newPassword]]),(0,t._)("a",{class:"nav-link",onClick:s[7]||(s[7]=(...a)=>o.showPassword2&&o.showPassword2(...a))},g)])):(0,t.kq)("",!0)]),(0,t._)("div",C,[D,0==o.isShowPassword3?((0,t.wg)(),(0,t.iD)("div",q,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",placeholder:"請再次輸入新密碼","onUpdate:modelValue":s[8]||(s[8]=a=>o.newPassword2=a),required:""},null,512),[[e.nr,o.newPassword2]]),(0,t._)("a",{class:"nav-link",onClick:s[9]||(s[9]=(...a)=>o.showPassword3&&o.showPassword3(...a))},x)])):(0,t.kq)("",!0),1==o.isShowPassword3?((0,t.wg)(),(0,t.iD)("div",H,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"請再次輸入新密碼","onUpdate:modelValue":s[10]||(s[10]=a=>o.newPassword2=a),required:""},null,512),[[e.nr,o.newPassword2]]),(0,t._)("a",{class:"nav-link",onClick:s[11]||(s[11]=(...a)=>o.showPassword3&&o.showPassword3(...a))},A)])):(0,t.kq)("",!0)]),(0,t._)("div",U,[(0,t._)("div",Z,[(0,t._)("div",$,[(0,t._)("button",{class:"btn btn-outline-primary",type:"button",onClick:s[12]||(s[12]=(...a)=>o.save&&o.save(...a))},"儲存資料")]),(0,t._)("div",T,[(0,t._)("button",{class:"btn btn-outline-primary",type:"button",onClick:s[13]||(s[13]=s=>a.$router.push({path:"/member"}))},"取消返回")])])])],512)]),(0,t.Wm)(y)],64)}var F=l(2262),z=l(9799),N=l(3393),E=l(2201),I=l(1557),W=l(1830),j=l(8019),M={setup(){const a=(0,E.tv)(),s=(0,F.qj)({oldPassword:"",newPassword:""}),l=(0,F.iH)(""),e=(0,F.iH)(""),o=(0,F.iH)(null),r=async t=>{t.preventDefault(),o.value.reportValidity()&&(s.oldPassword==s.newPassword?(0,I.FN)("新密碼與舊密碼不可相同"):s.newPassword!=l.value?(0,I.FN)("新密碼不相符，請重新輸入"):(e.value=await(0,W.mM)(s),e.value.message&&(0,I.FN)("密碼錯誤，請重新輸入"),e.value.message||((0,I.FN)("密碼已修改"),a.push({path:"/member"})),s.oldPassword="",s.newPassword="",l.value=""))};(0,t.bv)((()=>{(0,j.D)()}));let i=(0,F.iH)(0),n=(0,F.iH)(0),c=(0,F.iH)(0);const d=()=>{i.value=0==i.value?1:0},u=()=>{n.value=0==n.value?1:0},w=()=>{c.value=0==c.value?1:0};return{inputData:s,save:r,form:o,newPassword2:l,isShowPassword:i,isShowPassword2:n,isShowPassword3:c,showPassword:d,showPassword2:u,showPassword3:w}},components:{Header:z.Z,Footer:N.Z}},Y=l(3744);const B=(0,Y.Z)(M,[["render",V],["__scopeId","data-v-339ba288"]]);var G=B}}]);
//# sourceMappingURL=9742.3d854023.js.map