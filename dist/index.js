!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Aeolus=t():e.Aeolus=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=new class{constructor(){}toDate(e){let t="";const n=e.toString().length;switch(!0){case n>0&&n<15:t=e.split("");const r=[];return t.forEach((e,n)=>{switch(n){case 3:case 5:"undefined"!==String(t[n+1])?r.push(e,"-"):r.push(e);break;case 7:"undefined"!==String(t[n+1])?r.push(e," "):r.push(e);break;case 9:case 11:"undefined"!==String(t[n+1])?r.push(e,":"):r.push(e);break;default:r.push(e)}}),r.join("");case 42===n:return t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds());default:return e}}toNoSpaceDate(e){return this.toDate(e).replace(/[\s|\:|\-]/g,"")}};var o=new class{initialsCapital(e){const t=e.toLowerCase().split(""),n=[];return t.map((e,t)=>{switch(t){case 0:n.push(e.toUpperCase());break;default:n.push(e)}}),n.join("")}};t.default={DateTransform:r,StringTransform:o}}])});