import{e as n}from"./chunk-OQ56LEPH.js";import{aa as o,ja as a}from"./chunk-USJSRBLR.js";var p=(()=>{let t=class t{constructor(){this.http=a(n)}getAllJobs(){return this.http.get("/jobs")}getDetailedJob(e){return this.http.get(`/jobs/${e}`)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var d=(()=>{let t=class t{constructor(){this.localKey="favoriteJobs"}getFavorites(){let e=localStorage.getItem(this.localKey);return e?JSON.parse(e):[]}setFavorite(e){if(!this.hasFavorite(e)){let r=this.getFavorites();e.favorite=!0,r.push(e),localStorage.setItem(this.localKey,JSON.stringify(r))}}removeFavorite(e){if(this.hasFavorite(e)){let s=this.getFavorites().filter(c=>c.id!==e.id);localStorage.setItem(this.localKey,JSON.stringify(s))}}hasFavorite(e){return this.getFavorites().find(s=>s.id===e.id)!=null}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{p as a,d as b};