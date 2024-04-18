(function(){"use strict";var e={1555:function(e,n,t){var r=t(5130),a=t(6768);const s={id:"app"},o={class:"header"},i={class:"side-bar"},l={class:"main-content"};function c(e,n,t,r,c,u){const d=(0,a.g2)("HeaderComponent"),p=(0,a.g2)("SiderBar"),f=(0,a.g2)("MainLayout");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",o,[(0,a.bF)(d)]),(0,a.Lk)("div",i,[(0,a.bF)(p)]),(0,a.Lk)("div",l,[(0,a.bF)(f)])])}const u={class:"main-layout"};function d(e,n,t,r,s,o){return(0,a.uX)(),(0,a.CE)("div",u,[((0,a.uX)(),(0,a.Wv)((0,a.$y)(o.currentContentComponent)))])}const p=e=>((0,a.Qi)("data-v-67bbe197"),e=e(),(0,a.jt)(),e),f=p((()=>(0,a.Lk)("h2",null,"原神",-1))),m=p((()=>(0,a.Lk)("p",null,"欢迎来到原神页面！",-1))),h=[f,m];function v(e,n,t,r,s,o){return(0,a.uX)(),(0,a.CE)("div",null,h)}var Z={name:"YuanShen"},E=t(1241);const b=(0,E.A)(Z,[["render",v],["__scopeId","data-v-67bbe197"]]);var k=b;function L(e,n,t,r,s,o){return(0,a.uX)(),(0,a.CE)("div",null," this is Star Rail ")}var w={name:"StarRail"};const y=(0,E.A)(w,[["render",L]]);var I=y;function B(e,n){return(0,a.uX)(),(0,a.CE)("div",null," this is ZZZ ")}const S={},U=(0,E.A)(S,[["render",B]]);var j=U,A={name:"MainLayout",components:{GenshinImpact:k,StarRail:I,ZenlessZoneZero:j},computed:{currentContentComponent(){const e={"/Genshin-Impact":"GenshinImpact","/Star-Rail":"StarRail","/Zenless-Zone-Zero":"ZenlessZoneZero"};return e[this.$route.path]||"GenshinImpact"}}};const g=(0,E.A)(A,[["render",d]]);var R=g,J=t(4232),O="data:image/png;base64,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";const W=e=>((0,a.Qi)("data-v-4975e1a3"),e=e(),(0,a.jt)(),e),M={class:"header"},F=W((()=>(0,a.Lk)("img",{src:O},null,-1))),x=W((()=>(0,a.Lk)("div",{class:"logo"},[(0,a.Lk)("div",{class:"nav-item"},"Web For Star")],-1))),Y={class:"nav"},G={class:"action",style:{display:"flex","margin-left":"auto"}},T=W((()=>(0,a.Lk)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",crossorigin:"anonymous",referrerpolicy:"no-referrer"},null,-1))),C=W((()=>(0,a.Lk)("span",{class:"icon"},null,-1))),X=W((()=>(0,a.Lk)("button",{class:"nav-item login-btn"},[(0,a.Lk)("span",{class:"icon"}),(0,a.eW)(" 登录 ")],-1))),D=W((()=>(0,a.Lk)("h2",null,"注册",-1))),N=W((()=>(0,a.Lk)("button",{type:"submit"},"注册",-1)));function q(e,n,t,s,o,i){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",M,[F,x,(0,a.Lk)("div",Y,[(0,a.bF)(l,{to:"/Genshin-Impact",class:(0,J.C4)({"nav-item":!0,active:"/Genshin-Impact"===e.$route.path})},{default:(0,a.k6)((()=>[(0,a.eW)("原神")])),_:1},8,["class"]),(0,a.bF)(l,{to:"/Star-Rail",class:(0,J.C4)({"nav-item":!0,active:"/Star-Rail"===e.$route.path})},{default:(0,a.k6)((()=>[(0,a.eW)("崩坏星穹铁道")])),_:1},8,["class"]),(0,a.bF)(l,{to:"/Zenless-Zone-Zero",class:(0,J.C4)({"nav-item":!0,active:"/Zenless-Zone-Zero"===e.$route.path})},{default:(0,a.k6)((()=>[(0,a.eW)("绝区零")])),_:1},8,["class"])]),(0,a.Lk)("div",G,[T,(0,a.Lk)("button",{class:"nav-item register-btn",onClick:n[0]||(n[0]=(...e)=>i.openRegisterModal&&i.openRegisterModal(...e))},[C,(0,a.eW)(" 注册 ")]),X]),o.isRegisterModalOpen?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"modal",onClick:n[6]||(n[6]=(0,r.D$)(((...e)=>i.closeRegisterModal&&i.closeRegisterModal(...e)),["self"]))},[(0,a.Lk)("div",{class:"modal-content",onClick:n[5]||(n[5]=(0,r.D$)((()=>{}),["stop"]))},[D,(0,a.Lk)("form",{onSubmit:n[4]||(n[4]=(0,r.D$)(((...e)=>i.submitRegistration&&i.submitRegistration(...e)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{type:"text",placeholder:"用户名或邮箱","onUpdate:modelValue":n[1]||(n[1]=e=>o.username=e),required:""},null,512),[[r.Jo,o.username]]),(0,a.bo)((0,a.Lk)("input",{type:"password",placeholder:"密码","onUpdate:modelValue":n[2]||(n[2]=e=>o.password=e),required:""},null,512),[[r.Jo,o.password]]),(0,a.bo)((0,a.Lk)("input",{type:"password",placeholder:"确认密码","onUpdate:modelValue":n[3]||(n[3]=n=>e.confirmPassword=n),required:""},null,512),[[r.Jo,e.confirmPassword]]),N],32)])])):(0,a.Q3)("",!0)])}var Q=t(8355),V={name:"PageHeader",data(){return{isRegisterModalOpen:!1,username:"",password:"",confirmPassworld:""}},methods:{openRegisterModal(){this.isRegisterModalOpen=!0},closeRegisterModal(){this.isRegisterModalOpen=!1,this.resetForm()},resetForm(){this.username="",this.password="",this.confirmPassword=""},async submitRegistration(){if(this.password===this.confirmPassword)try{const e=await Q.A.post("http://47.102.116.125:8080/register",{username:this.username,password:this.password});switch(e.status){case 201:alert("注册成功啦，请登录哦");break;case 400:case 409:alert("注册失败啦，呜呜呜，提示信息："+e.data.error);break;default:alert("注册过程中发生错误，请稍后再试试")}}catch(e){console.error("注册失败",e),alert("注册过程中发生网络或其他未知错误，请稍后再试试")}else alert("两次输入的密码不一致，请重新输入!")}}};const H=(0,E.A)(V,[["render",q],["__scopeId","data-v-4975e1a3"]]);var P=H;const z={class:"sider-bar"};function K(e,n,t,r,s,o){return(0,a.uX)(),(0,a.CE)("div",z,[((0,a.uX)(),(0,a.Wv)((0,a.$y)(o.currentSiderBar)))])}const _={class:"siderbar"},$={class:"sidebar-item"},ee={class:"sidebar-item"};function ne(e,n,t,r,s,o){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",_,[(0,a.Lk)("div",$,[(0,a.bF)(i,{to:"/Genshin-Impact"},{default:(0,a.k6)((()=>[(0,a.eW)("抽卡查询")])),_:1})]),(0,a.Lk)("div",ee,[(0,a.bF)(i,{to:"/Genshin-Impact"},{default:(0,a.k6)((()=>[(0,a.eW)("抽卡预测")])),_:1})])])}var te={name:"SiderBarForGI"};const re=(0,E.A)(te,[["render",ne],["__scopeId","data-v-187c2e5d"]]);var ae=re;const se={class:"siderbar"},oe={class:"sidebar-item"},ie={class:"sidebar-item"};function le(e,n,t,r,s,o){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",se,[(0,a.Lk)("div",oe,[(0,a.bF)(i,{to:"/Star-Rail"},{default:(0,a.k6)((()=>[(0,a.eW)("抽卡查询1")])),_:1})]),(0,a.Lk)("div",ie,[(0,a.bF)(i,{to:"/Star-Rail"},{default:(0,a.k6)((()=>[(0,a.eW)("抽卡预测1")])),_:1})])])}var ce={name:"SiderBarForSR"};const ue=(0,E.A)(ce,[["render",le],["__scopeId","data-v-fcde6210"]]);var de=ue;const pe={class:"siderbar"},fe={class:"sidebar-item"},me={class:"sidebar-item"};function he(e,n,t,r,s,o){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",pe,[(0,a.Lk)("div",fe,[(0,a.bF)(i,{to:"/Zenless-Zone-Zero"},{default:(0,a.k6)((()=>[(0,a.eW)("抽卡查询2")])),_:1})]),(0,a.Lk)("div",me,[(0,a.bF)(i,{to:"/Zenless-Zone-Zero"},{default:(0,a.k6)((()=>[(0,a.eW)("抽卡预测2")])),_:1})])])}var ve={name:"SiderBarForZZZ"};const Ze=(0,E.A)(ve,[["render",he],["__scopeId","data-v-0bdf67ee"]]);var Ee=Ze,be={name:"SiderBar",components:{GenshinImpactSideBar:ae,StarRailSideBar:de,ZenlessZoneZeroSideBar:Ee},computed:{currentSiderBar(){const e={"/Genshin-Impact":"GenshinImpactSideBar","/Star-Rail":"StarRailSideBar","/Zenless-Zone-Zero":"ZenlessZoneZeroSideBar"};return e[this.$route.path]||"GenshinImpactSideBar"}}};const ke=(0,E.A)(be,[["render",K],["__scopeId","data-v-5f0a2c32"]]);var Le=ke,we={components:{HeaderComponent:P,MainLayout:R,SiderBar:Le}};const ye=(0,E.A)(we,[["render",c]]);var Ie=ye,Be=t(1387);const Se=[{path:"/",component:R,children:[{path:"",redirect:"/Genshin-Impact"},{path:"/Genshin-Impact",component:k,meta:{title:"GenshinImpact"}},{path:"/Star-Rail",component:I,meta:{title:"StarRail"}},{path:"/Zenless-Zone-Zero",component:j,meta:{title:"ZenlessZoneZero"}}]}],Ue=(0,Be.aE)({history:(0,Be.Bt)(),routes:Se});var je=Ue;const Ae=(0,r.Ef)(Ie);Ae.use(je),Ae.mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var s=n[r]={exports:{}};return e[r].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,a,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,s,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(l)var u=l(t)}for(n&&n(r);c<o.length;c++)s=o[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},r=self["webpackChunkweb_for_star"]=self["webpackChunkweb_for_star"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1555)}));r=t.O(r)})();
//# sourceMappingURL=app.17cbc8be.js.map