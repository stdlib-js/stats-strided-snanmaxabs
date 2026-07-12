"use strict";var t=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=t(function(B,m){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(a,r,e,q){var u,s,i,n;if(a<=0)return NaN;if(a===1||e===0)return v(r[q]);for(s=q,n=0;n<a&&(i=r[s],i!==i);n++)s+=e;if(n===a)return NaN;for(u=v(i),n+=1,n;n<a;n++)s+=e,i=v(r[s]),!j(i)&&i>u&&(u=i);return u}m.exports=l
});var c=t(function(C,x){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=f();function k(a,r,e){return _(a,r,e,R(a,e))}x.exports=k
});var y=t(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),O=f();E(b,"ndarray",O);p.exports=b
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),o,d=h(g(__dirname,"./native.js"));w(d)?o=z:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
