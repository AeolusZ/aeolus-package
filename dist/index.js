!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Aeolus=t():e.Aeolus=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=new class{constructor(){}toDate(e){let t="";const r=e.toString().length;switch(!0){case r>0&&r<15:t=e.split("");const n=[];return t.forEach((e,r)=>{switch(r){case 3:case 5:"undefined"!==String(t[r+1])?n.push(e,"-"):n.push(e);break;case 7:"undefined"!==String(t[r+1])?n.push(e," "):n.push(e);break;case 9:case 11:"undefined"!==String(t[r+1])?n.push(e,":"):n.push(e);break;default:n.push(e)}}),n.join("");case 42===r:return t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds());default:return e}}toNoSpaceDate(e){return this.toDate(e).replace(/[\s|\:|\-]/g,"")}};var o=new class{arrayDeduplication(e){if(e===[])return e;const t=[];return e.forEach(e=>{console.log(e),-1===t.indexOf(e)&&t.push(e)}),t}twoSum(e,t){for(let r=0;r<e.length;r++)for(let n=r+1;n<e.length;n++)if(e[r]+e[n]===t)return[r,n];return[]}maxNum(e){if(e===[])return 0;let t=0;return e.forEach(e=>{e>t&&(t=e)}),t}sortStringArray(e){for(let t=0;t<e.length;t++)for(let r=t+1;r<e.length;r++)if(e[t].length<e[r].length){let n=e[t];e[t]=e[r],e[r]=n}else if(e[t].length===e[r].length&&e[t]<e[r]){let n=e[t];e[t]=e[r],e[r]=n}return e}longestCommonSubString(e){if(0===e.length)return"";const t=this.sortStringArray(e),r=l.subString(t[t.length-1]);for(let n=0;n<r.length;n++){let o=0;for(let e=0;e<t.length;e++)-1!==t[e].indexOf(r[n])&&o++;if(o===e.length)return r[n]}return""}longestCommonPrefix(e){if(0===e.length)return"";const t=this.sortStringArray(e),r=l.allPrefix(t[t.length-1]);for(let n=0;n<r.length;n++){let o=0;for(let e=0;e<t.length;e++)0===t[e].indexOf(r[n])&&o++;if(o===e.length)return r[n]}return""}quickSort(e){if(e.length<=1)return e;for(var t=Math.floor(e.length/2),r=e.splice(t,1)[0],n=[],o=[],l=0;l<e.length;l++)e[l]<r?n.push(e[l]):o.push(e[l]);return this.quickSort(n).concat([r],this.quickSort(o))}selectMinDiff(e,t){if(0===e.length||0===t.length)return"输入数组不能为空";if(this.quickSort(e).toString()===this.quickSort(t).toString())return 0;let r=[];for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r.push(Math.abs(e[n]-t[o]));return this.quickSort(r)[0]}removeDuplicates(e){if(e.length===[])return 0;let t={};for(let r=0;r<e.length;r++)void 0===t[e[r]]?t[e[r]]=1:(e.splice(r,1),r--);return e.length}removeElement(e,t){if(0===e.length)return 0;if(""===t)return e.length;for(let r=0;r<e.length;r++)e[r]===t&&(e.splice(r,1),r--);return e.length}};var l=new class{initialsCapital(e){const t=e.toLowerCase().split(""),r=[];return t.map((e,t)=>{switch(t){case 0:r.push(e.toUpperCase());break;default:r.push(e)}}),r.join("")}lengthOfLongestSubstring(e){if(""===e)return 0;const t=e.split(""),r=[];for(let e=0;e<t.length;e++){const n=[];for(let r=e;r<t.length&&-1===n.indexOf(t[r]);r++)n.push(t[r]);r.push(n.length)}return o.maxNum(r)}subString(e){if(""===e)return[];let t=[];for(let r=0;r<e.length;r++)for(let n=r;n<e.length;n++){let o=e.substring(r,n+1);t.push(o)}return o.sortStringArray(t)}allPrefix(e){if(""===e)return[];let t=[];for(let r=0;r<e.length;r++){let n=e.substring(0,r+1);t.push(n)}return o.sortStringArray(t)}isValid(e){if(console.log(e),""===e)return!0;let t=e.split("");for(let e=0;e<t.length;e++)if("("===t[e]&&")"===t[e+1]||"["===t[e]&&"]"===t[e+1]||"{"===t[e]&&"}"===t[e+1])return t.splice(e,2),console.log(t),this.isValid(t.join(""));return!1}romanToInt(e){const t={I:1,IV:4,V:5,IX:9,X:10,XL:40,L:50,XC:90,C:100,CD:400,D:500,CM:900,M:1e3};if(""===e)return 0;let r=[];for(let t=0;t<e.length;t++)switch(e[t]){case"I":if("V"===e[t+1]||"X"===e[t+1]){let n=e[t].concat(e[t+1]);r.push(n),t++}else r.push(e[t]);break;case"X":if("L"===e[t+1]||"C"===e[t+1]){let n=e[t].concat(e[t+1]);r.push(n),t++}else r.push(e[t]);break;case"C":if("D"===e[t+1]||"M"===e[t+1]){let n=e[t].concat(e[t+1]);r.push(n),t++}else r.push(e[t]);break;default:r.push(e[t])}let n=0;return r.forEach(e=>{n+=t[e]}),n}strStr(e,t){if(""===t)return 0;let r=0,n=0,o=0;for(let l=0;l<e.length;l++)if(console.log(l),e[l]===t[r]){if(n=l,o++,++r===t.length)return n=n-r+1}else n=0,r=0,0!==o&&(console.log(l,o),l-=o,o=0);return-1}};var s=new class{isOverflow(e){const t=Math.pow(2,31);return e>=t-1||e<=-t?0:e}reverseNumber(e){Math.pow(2,31);const t=e.toString().split("");switch(t[0]){case"-":return t.shift(),t.reverse(),this.isOverflow(-t.join(""));default:return"0"===t[t.length-1]?(t.pop(),t.reverse()):t.reverse(),this.isOverflow(t.join(""))}}isPalindrome(e){if(0===e)return!0;if(e<0)return!1;if(e>0){const t=e.toString().split("");for(let e=0,r=t.length-1;e<=r;e++,r--)if(t[e]!==t[r])return!1;return!0}}};var u=new class{toReversePolish(e){const t={"#":0,"(":1,"+":2,"-":2,"*":3,"/":3,")":4};if(""===e)return[];let r=[],n=[];const o=e.split(" ");for(let e=0;e<o.length;e++)switch(o[e]){case"(":n.push(o[e]);break;case")":for(;"("!==n[n.length-1];)r.push(n.pop());n.pop();break;case"+":case"-":case"*":case"/":if(t[o[e]]>t[n[n.length-1]])n.push(o[e]);else{for(;t[n[n.length-1]]>=t[o[e]];)r.push(n.pop());n.push(o[e])}break;default:r.push(o[e])}if(0!==n.length)for(let e=n.length-1;e>=0;e--)r.push(n[e]);return r}evalRPN(e){if(0===e.length)return 0;let t=[];for(let r=0;r<e.length;r++)switch(e[r]){case"+":let n=Number(t.pop())+Number(t.pop());t.push(n);break;case"-":let o=Number(t.pop()),l=Number(t.pop())-o;t.push(l);break;case"*":let s=Number(t.pop())*Number(t.pop());t.push(s);break;case"/":let u=Number(t.pop()),i=Number(t.pop()),f=parseInt(i/u);t.push(f);break;default:t.push(e[r])}return t[0]}};t.default={DateTransform:n,StringTransform:l,ArrayTransform:o,NumberTransform:s,ExpressionTransfrom:u}}])});