import{a as D,b as U}from"./chunk-KPIPPA6R.js";import{a as N,b as R,d as A,j as V,k as $,n as z}from"./chunk-OQ56LEPH.js";import{$a as E,B as x,Pa as d,Ra as l,Sa as J,Ta as a,U as y,Ua as s,Va as P,Wa as F,Xa as j,Y as M,Ya as w,Z as O,ab as c,bb as I,d as _,e as u,f as C,fb as f,gb as k,hb as g,ja as p,jb as T,lb as L,o as h,u as b,wa as S,za as r}from"./chunk-USJSRBLR.js";function q(n,o){if(n&1){let e=w();a(0,"span",7),E("click",function(){M(e);let i=c().$implicit,t=c();return O(i.favorite?t.removeClassAndFavorite(i):t.favoriteJobsService.setFavorite(i))}),s()}if(n&2){let e=c().$implicit;I("id","star-",e.id,""),l("ngClass",e.favorite?"active-star":"")}}var B=n=>["/jobs",n];function G(n,o){if(n&1&&(F(0),a(1,"div",1)(2,"div",2),P(3,"img",3),a(4,"a",4),f(5),s(),d(6,q,1,2,"span",5),s(),a(7,"div",6)(8,"span"),f(9),s(),a(10,"span"),f(11),s()()(),j()),n&2){let e=o.$implicit,v=c();r(3),l("src",e.companyLogo,S)("alt",e.companyName+" logo"),r(),l("routerLink",L(7,B,e.id)),r(),k(e.title),r(),J(6,v.showStar?6:-1),r(3),g("Company: ",e.companyName,""),r(2),g("Reference: ",e.reference,"")}}var re=(()=>{var o;let e=class e{constructor(){u(this,o,void 0);this.job=p(D),this.favoriteJobsService=p(U),C(this,o,p(V)),this.allJobs=[],this.showStar=!0}ngOnInit(){let i=this.favoriteJobsService.getFavorites();this.allJobs.length>0||this.job.getAllJobs().pipe(x(()=>(_(this,o).navigate(["error"]),h)),b(t=>(t.forEach(m=>{i.findIndex(Y=>m.id===Y.id)!==-1&&(m.favorite=!0)}),t))).subscribe(t=>{this.allJobs=t})}removeClassAndFavorite(i){i.favorite=!1,this.favoriteJobsService.removeFavorite(i)}};o=new WeakMap,e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y({type:e,selectors:[["app-job"]],inputs:{allJobs:"allJobs",showStar:"showStar"},standalone:!0,features:[T],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"job-shell"],[1,"logo-title"],[3,"src","alt"],[3,"routerLink"],["class","icon-star",3,"id","ngClass"],[1,"company-reference"],[1,"icon-star",3,"id","ngClass","click"]],template:function(t,m){t&1&&d(0,G,12,9,"ng-container",0),t&2&&l("ngForOf",m.allJobs)},dependencies:[A,N,R,z,$],styles:[".job-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column}.job-shell[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{cursor:pointer}.job-shell[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:flex;margin-left:auto}.logo-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:flex;margin-left:auto}.logo-title[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:25px}img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:1rem}.company-reference[_ngcontent-%COMP%], .logo-title[_ngcontent-%COMP%]{display:flex;flex-direction:row}.company-reference[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{margin-left:1rem}.company-reference[_ngcontent-%COMP%]{margin-bottom:1rem}"]});let n=e;return n})();export{re as a};
