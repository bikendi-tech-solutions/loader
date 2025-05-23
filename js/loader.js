/*
 * loaderJs v3.2.2
 * (c) 2024 Akor Victor
 * loaderJs library for animeJs
 * Released under the MIT license
 * EXAMPLE
 *               style:{
                    1:{ // or "1,2" or so for multiple target
                        bg:"#FC1460",
                        bd:"#FC1460"
                    },
                    2:{
                        bg:"#5A87FF",
                        bd:"#5A87FF"
                    },
                    3:{
                        bg:"#18FD91",
                        bd:'#18FD91'
                    },
                    4:{
                        bg:"#FBF38C",
                        bd:'#FBF38C'
                    }
                },
                only:"fill", // or border
                size:"20", // meaning height and width 20px
                color:"#fff", // text color
                fill:"#000", // general or default fill color
                border:"#000" // general or default border color


                },
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var i={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},M={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},j=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],l={CSS:{},springs:{}};function C(n,e,t){return Math.min(Math.max(n,e),t)}function u(n,e){return-1<n.indexOf(e)}function o(n,e){return n.apply(null,e)}var w={arr:function(n){return Array.isArray(n)},obj:function(n){return u(Object.prototype.toString.call(n),"Object")},pth:function(n){return w.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||w.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return w.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return w.hex(n)||w.rgb(n)||w.hsl(n)},key:function(n){return!i.hasOwnProperty(n)&&!M.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function d(n){n=/\(([^)]+)\)/.exec(n);return n?n[1].split(",").map(function(n){return parseFloat(n)}):[]}function c(r,t){var n=d(r),e=C(w.und(n[0])?1:n[0],.1,100),a=C(w.und(n[1])?100:n[1],.1,100),o=C(w.und(n[2])?10:n[2],.1,100),n=C(w.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/e),i=o/(2*Math.sqrt(a*e)),c=i<1?u*Math.sqrt(1-i*i):0,s=i<1?(i*u-n)/c:-n+u;function f(n){var e=t?t*n/1e3:n,e=i<1?Math.exp(-e*i*u)*(+Math.cos(c*e)+s*Math.sin(c*e)):(1+s*e)*Math.exp(-e*u);return 0===n||1===n?n:1-e}return t?f:function(){var n=l.springs[r];if(n)return n;for(var e=0,t=0;;)if(1===f(e+=1/6)){if(16<=++t)break}else t=0;return n=e*(1/6)*1e3,l.springs[r]=n}}function q(e){return void 0===e&&(e=10),function(n){return Math.ceil(C(n,1e-6,1)*e)*(1/e)}}var H=function(b,e,M,t){if(0<=b&&b<=1&&0<=M&&M<=1){var x=new Float32Array(11);if(b!==e||M!==t)for(var n=0;n<11;++n)x[n]=k(.1*n,b,M);return function(n){return b===e&&M===t||0===n||1===n?n:k(r(n),e,t)}}function r(n){for(var e=0,t=1;10!==t&&x[t]<=n;++t)e+=.1;var r=e+.1*((n-x[--t])/(x[t+1]-x[t])),a=O(r,b,M);if(.001<=a){for(var o=n,u=r,i=b,c=M,s=0;s<4;++s){var f=O(u,i,c);if(0===f)return u;u-=(k(u,i,c)-o)/f}return u}if(0===a)return r;for(var l,d,p=n,h=e,g=e+.1,m=b,v=M,y=0;0<(l=k(d=h+(g-h)/2,m,v)-p)?g=d:h=d,1e-7<Math.abs(l)&&++y<10;);return d}};function r(n,e){return 1-3*e+3*n}function k(n,e,t){return((r(e,t)*n+(3*t-6*e))*n+3*e)*n}function O(n,e,t){return 3*r(e,t)*n*n+2*(3*t-6*e)*n+3*e}e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===e&&(e=.5);var t=C(n=void 0===n?1:n,1,10),r=C(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(n,e){t[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(t).forEach(function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}});var e,t,s=e;function P(n,e){if(w.fnc(n))return n;var t=n.split("(")[0],r=s[t],a=d(n);switch(t){case"spring":return c(n,e);case"cubicBezier":return o(H,a);case"steps":return o(q,a);default:return o(r,a)}}function a(n){try{return document.querySelectorAll(n)}catch(n){}}function I(n,e){for(var t,r=n.length,a=2<=arguments.length?e:void 0,o=[],u=0;u<r;u++)u in n&&(t=n[u],e.call(a,t,u,n))&&o.push(t);return o}function f(n){return n.reduce(function(n,e){return n.concat(w.arr(e)?f(e):e)},[])}function p(n){return w.arr(n)?n:(n=w.str(n)?a(n)||n:n)instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n]}function h(n,e){return n.some(function(n){return n===e})}function g(n){var e,t={};for(e in n)t[e]=n[e];return t}function x(n,e){var t,r=g(n);for(t in n)r[t]=(e.hasOwnProperty(t)?e:n)[t];return r}function D(n,e){var t,r=g(n);for(t in e)r[t]=(w.und(n[t])?e:n)[t];return r}function V(n){var e,t,r,a,o,u,i;return w.rgb(n)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=n))?"rgba("+e[1]+",1)":t:w.hex(n)?(e=(e=n).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"):w.hsl(n)?(t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t=n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(t[1],10)/360,u=parseInt(t[2],10)/100,i=parseInt(t[3],10)/100,t=t[4]||1,0==u?r=a=o=i:(r=c(u=2*i-(i=i<.5?i*(1+u):i+u-i*u),i,n+1/3),a=c(u,i,n),o=c(u,i,n-1/3)),"rgba("+255*r+","+255*a+","+255*o+","+t+")"):void 0;function c(n,e,t){return t<0&&(t+=1),1<t&&--t,t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}}function B(n){n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(n)return n[1]}function m(n,e){return w.fnc(n)?n(e.target,e.id,e.total):n}function v(n,e){return n.getAttribute(e)}function y(n,e,t){var r,a,o;return h([t,"deg","rad","turn"],B(e))?e:(r=l.CSS[e+t],w.und(r)?(a=document.createElement(n.tagName),(n=n.parentNode&&n.parentNode!==document?n.parentNode:document.body).appendChild(a),a.style.position="absolute",a.style.width=100+t,o=100/a.offsetWidth,n.removeChild(a),n=o*parseFloat(e),l.CSS[e+t]=n):r)}function $(n,e,t){var r;if(e in n.style)return r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0",t?y(n,e,t):e}function b(n,e){return w.dom(n)&&!w.inp(n)&&(!w.nil(v(n,e))||w.svg(n)&&n[e])?"attribute":w.dom(n)&&h(j,e)?"transform":w.dom(n)&&"transform"!==e&&$(n,e)?"css":null!=n[e]?"object":void 0}function W(n){if(w.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function X(n,e,t,r){var a=u(e,"scale")?1:0+(u(a=e,"translate")||"perspective"===a?"px":u(a,"rotate")||u(a,"skew")?"deg":void 0),o=W(n).get(e)||a;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?y(n,o,r):o}function T(n,e,t,r){switch(b(n,e)){case"transform":return X(n,e,r,t);case"css":return $(n,e,t);case"attribute":return v(n,e);default:return n[e]||0}}function E(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=B(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function Y(n,e){var t;return w.col(n)?V(n):/\s/g.test(n)?n:(t=(t=B(n))?n.substr(0,n.length-t.length):n,e?t+e:t)}function F(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function Z(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);0<a&&(r+=F(e,o)),e=o}return r}function G(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return 2*Math.PI*v(n,"r");case"rect":return 2*v(t=n,"width")+2*v(t,"height");case"line":return F({x:v(t=n,"x1"),y:v(t,"y1")},{x:v(t,"x2"),y:v(t,"y2")});case"polyline":return Z(n);case"polygon":return e=n.points,Z(n)+F(e.getItem(e.numberOfItems-1),e.getItem(0))}var e,t}function Q(n,e){var e=e||{},n=e.el||function(n){for(var e=n.parentNode;w.svg(e)&&w.svg(e.parentNode);)e=e.parentNode;return e}(n),t=n.getBoundingClientRect(),r=v(n,"viewBox"),a=t.width,t=t.height,e=e.viewBox||(r?r.split(" "):[0,0,a,t]);return{el:n,viewBox:e,x:+e[0],y:+e[1],w:a,h:t,vW:e[2],vH:e[3]}}function z(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Y(w.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:w.str(n)||e?r.split(t):[]}}function A(n){return I(n?f(w.arr(n)?n.map(p):p(n)):[],function(n,e,t){return t.indexOf(n)===e})}function _(n){var t=A(n);return t.map(function(n,e){return{target:n,id:e,total:t.length,transforms:{list:W(n)}}})}function R(e){for(var t=I(f(e.map(function(n){return Object.keys(n)})),function(n){return w.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),a={},n=0;n<t.length;n++)!function(n){var r=t[n];a[r]=e.map(function(n){var e,t={};for(e in n)w.key(e)?e==r&&(t.value=n[e]):t[e]=n[e];return t})}(n);return a}function J(n,e){var t,r=[],a=e.keyframes;for(t in e=a?D(R(a),e):e)w.key(t)&&r.push({name:t,tweens:function(n,t){var e,r=g(t),a=(/^spring/.test(r.easing)&&(r.duration=c(r.easing)),w.arr(n)&&(2===(e=n.length)&&!w.obj(n[0])?n={value:n}:w.fnc(t.duration)||(r.duration=t.duration/e)),w.arr(n)?n:[n]);return a.map(function(n,e){n=w.obj(n)&&!w.pth(n)?n:{value:n};return w.und(n.delay)&&(n.delay=e?0:t.delay),w.und(n.endDelay)&&(n.endDelay=e===a.length-1?t.endDelay:0),n}).map(function(n){return D(n,r)})}(e[t],n)});return r}function K(i,c){var s;return i.tweens.map(function(n){var n=function(n,e){var t,r={};for(t in n){var a=m(n[t],e);w.arr(a)&&1===(a=a.map(function(n){return m(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(n,c),e=n.value,t=w.arr(e)?e[1]:e,r=B(t),a=T(c.target,i.name,r,c),o=s?s.to.original:a,u=w.arr(e)?e[0]:o,a=B(u)||B(a),r=r||a;return w.und(t)&&(t=o),n.from=z(u,r),n.to=z(E(t,u),r),n.start=s?s.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=P(n.easing,n.duration),n.isPath=w.pth(e),n.isPathTargetInsideSVG=n.isPath&&w.svg(c.target),n.isColor=w.col(n.from.original),n.isColor&&(n.round=1),s=n})}var U={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){var o;r.list.set(e,t),e!==r.last&&!a||(o="",r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o)}};function nn(n,u){_(n).forEach(function(n){for(var e in u){var t=m(u[e],n),r=n.target,a=B(t),o=T(r,e,a,n),t=E(Y(t,a||B(o)),o),a=b(r,e);U[a](r,e,t,n.transforms,!0)}})}function en(n,e){return I(f(n.map(function(o){return e.map(function(n){var e,t,r=o,a=b(r.target,n.name);if(a)return t=(e=K(n,r))[e.length-1],{type:a,property:n.name,animatable:r,tweens:e,duration:t.end,delay:e[0].delay,endDelay:t.endDelay}})})),function(n){return!w.und(n)})}function tn(n,e){function t(n){return n.timelineOffset||0}var r=n.length,a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var rn=0;var N,S=[],an=("undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){L.suspendWhenDocumentHidden&&(n()?N=cancelAnimationFrame(N):(S.forEach(function(n){return n._onDocumentVisibility()}),an()))}),function(){!(N||n()&&L.suspendWhenDocumentHidden)&&0<S.length&&(N=requestAnimationFrame(on))});function on(n){for(var e=S.length,t=0;t<e;){var r=S[t];r.paused?(S.splice(t,1),e--):(r.tick(n),t++)}N=0<t?requestAnimationFrame(on):void 0}function n(){return document&&document.hidden}function L(n){var c,s=0,f=0,l=0,d=0,p=null;function h(n){var e=window.Promise&&new Promise(function(n){return p=n});return n.finished=e}e=x(i,n=n=void 0===n?{}:n),t=J(r=x(M,n),n),n=_(n.targets),r=tn(t=en(n,t),r),a=rn,rn++;var e,t,r,a,k=D(e,{id:a,children:[],animatables:n,animations:t,duration:r.duration,delay:r.delay,endDelay:r.endDelay});h(k);function g(){var n=k.direction;"alternate"!==n&&(k.direction="normal"!==n?"normal":"reverse"),k.reversed=!k.reversed,c.forEach(function(n){return n.reversed=k.reversed})}function m(n){return k.reversed?k.duration-n:n}function o(){s=0,f=m(k.currentTime)*(1/L.speed)}function v(n,e){e&&e.seek(n-e.timelineOffset)}function y(e){for(var n=0,t=k.animations,r=t.length;n<r;){for(var a=t[n],o=a.animatable,u=a.tweens,i=u.length-1,c=u[i],i=(i&&(c=I(u,function(n){return e<n.end})[0]||c),C(e-c.start-c.delay,0,c.duration)/c.duration),s=isNaN(i)?1:c.easing(i),f=c.to.strings,l=c.round,d=[],p=c.to.numbers.length,h=void 0,g=0;g<p;g++){var m=void 0,v=c.to.numbers[g],y=c.from.numbers[g]||0,m=c.isPath?function(e,t,n){function r(n){return e.el.getPointAtLength(1<=t+(n=void 0===n?0:n)?t+n:0)}var a=Q(e.el,e.svg),o=r(),u=r(-1),i=r(1),c=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}(c.value,s*v,c.isPathTargetInsideSVG):y+s*(v-y);!l||c.isColor&&2<g||(m=Math.round(m*l)/l),d.push(m)}var b=f.length;if(b)for(var h=f[0],M=0;M<b;M++){f[M];var x=f[M+1],w=d[M];isNaN(w)||(h+=x?w+x:w+" ")}else h=d[0];U[a.type](o.target,a.property,h,o.transforms),a.currentValue=h,n++}}function b(n){k[n]&&!k.passThrough&&k[n](k)}function u(n){var e=k.duration,t=k.delay,r=e-k.endDelay,a=m(n);if(k.progress=C(a/e*100,0,100),k.reversePlayback=a<k.currentTime,c){var o=a;if(k.reversePlayback)for(var u=d;u--;)v(o,c[u]);else for(var i=0;i<d;i++)v(o,c[i])}!k.began&&0<k.currentTime&&(k.began=!0,b("begin")),!k.loopBegan&&0<k.currentTime&&(k.loopBegan=!0,b("loopBegin")),a<=t&&0!==k.currentTime&&y(0),(r<=a&&k.currentTime!==e||!e)&&y(e),t<a&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,b("changeBegin")),b("change"),y(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,b("changeComplete")),k.currentTime=C(a,0,e),k.began&&b("update"),e<=n&&(f=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(s=l,b("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&g()):(k.paused=!0,k.completed||(k.completed=!0,b("loopComplete"),b("complete"),!k.passThrough&&"Promise"in window&&(p(),h(k)))))}return k.reset=function(){var n=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===n,k.remaining=k.loop,c=k.children;for(var e=d=c.length;e--;)k.children[e].reset();(k.reversed&&!0!==k.loop||"alternate"===n&&1===k.loop)&&k.remaining++,y(k.reversed?k.duration:0)},k._onDocumentVisibility=o,k.set=function(n,e){return nn(n,e),k},k.tick=function(n){u(((l=n)+(f-(s=s||l)))*L.speed)},k.seek=function(n){u(m(n))},k.pause=function(){k.paused=!0,o()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,S.push(k),o(),an())},k.reverse=function(){g(),k.completed=!k.reversed,o()},k.restart=function(){k.reset(),k.play()},k.remove=function(n){cn(A(n),k)},k.reset(),k.autoplay&&k.play(),k}function un(n,e){for(var t=e.length;t--;)h(n,e[t].animatable.target)&&e.splice(t,1)}function cn(n,e){var t=e.animations,r=e.children;un(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;un(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return L.version="3.2.2",L.speed=1,L.suspendWhenDocumentHidden=!0,L.running=S,L.remove=function(n){for(var e=A(n),t=S.length;t--;)cn(e,S[t])},L.get=T,L.set=nn,L.convertPx=y,L.path=function(n,e){var t=w.str(n)?a(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:Q(t),totalLength:G(t)*(r/100)}}},L.setDashoffset=function(n){var e=G(n);return n.setAttribute("stroke-dasharray",e),e},L.stagger=function(n,e){var i=(e=void 0===e?{}:e).direction||"normal",c=e.easing?P(e.easing):null,s=e.grid,f=e.axis,l=e.from||0,d="first"===l,p="center"===l,h="last"===l,g=w.arr(n),m=g?parseFloat(n[0]):parseFloat(n),v=g?parseFloat(n[1]):0,y=B(g?n[1]:n)||0,b=e.start||0+(g?m:0),M=[],x=0;return function(n,e,t){if(d&&(l=0),p&&(l=(t-1)/2),h&&(l=t-1),!M.length){for(var r,a,o,u=0;u<t;u++)s?(r=p?(s[0]-1)/2:l%s[0],a=p?(s[1]-1)/2:Math.floor(l/s[0]),r=r-u%s[0],a=a-Math.floor(u/s[0]),o=Math.sqrt(r*r+a*a),"x"===f&&(o=-r),M.push(o="y"===f?-a:o)):M.push(Math.abs(l-u)),x=Math.max.apply(Math,M);c&&(M=M.map(function(n){return c(n/x)*x})),"reverse"===i&&(M=M.map(function(n){return f?n<0?-1*n:-n:Math.abs(x-n)}))}return b+(g?(v-m)/x:m)*(Math.round(100*M[e])/100)+y}},L.timeline=function(u){var i=L(u=void 0===u?{}:u);return i.duration=0,i.add=function(n,e){var t=S.indexOf(i),r=i.children;function a(n){n.passThrough=!0}-1<t&&S.splice(t,1);for(var o=0;o<r.length;o++)a(r[o]);t=D(n,x(M,u)),t.targets=t.targets||u.targets,n=i.duration,t.autoplay=!1,t.direction=i.direction,t.timelineOffset=w.und(e)?n:E(e,n),a(i),i.seek(t.timelineOffset),e=L(t),a(e),r.push(e),n=tn(r,u);return i.delay=n.delay,i.endDelay=n.endDelay,i.duration=n.duration,i.seek(0),i.reset(),i.autoplay&&i.play(),i},i},L.easing=P,L.penner=s,L.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},L});


class LoaderJs {
    html = "";
    constructor(...args) {
        
        this.number = 1;
        this.css = {};
        var excludeNumber = {
            1 :"1",
            2 :"2",
            8 :"8"
        };
        var  number = this.number;

        // Process user-provided arguments dynamically
        for (let arg of args) {
            if (typeof arg === 'number') {
                this.number = arg;
                number = this.number;
            } else if (typeof arg === 'object' && arg !== null && !Array.isArray(arg)) {
                this.css = arg;

            } else {
                console.warn(`Unexpected argument type: ${typeof arg}. Argument ignored.`);
            }
        }


        this.choice = this.number;


        let choices = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight'
        };


        if (!choices[this.choice]) {
            console.log('Invalid choice!');
            return;
        }

        this.functionName = choices[this.choice];


        let renderChoice = choices[this.choice];
        if (typeof this[renderChoice] === 'function') {
            this.choiceName = choices[this.choice];
            this[renderChoice](); 
        } else {
            console.log(`Method "${renderChoice}" is not implemented yet.`);
        }

        this.renderCss(this.css);
    }

    renderCss(obj = {}){

        var one = '#FC1460';
        var two = '#5A87FF';
        var three = '#18FD91';
        var four = '#FBF38C';
        var only = "all";
        var borderone = '#FC1460';
        var bordertwo = '#5A87FF';
        var borderthree = '#18FD91';
        var borderfour = '#FBF38C';
        var border = false;
        var bg = "#000000bd";
        var none = "#00000000";
        var textFill = "#000";
        var borderwidth = "4px";
        var fill = false;
        var excludeFill = {};
        var excludeBorder = {};
        var customsize = '';
        

        for (let key in obj) {
            switch(key){
                case"style":
                    
                    if(typeof obj[key] !== "object"){
                        continue;
                    }

                    var style = obj[key];

                    var newStyle = {};
                    var hasTwo = false;
                    for (let key in style) {
                        if (key.includes(",")) {
                            hasTwo = true;
                          const keys = key.split(",");
                          const lastKey = keys[keys.length - 1];
                        
                          keys.forEach(k => {
                            newStyle[k] = style[key];
                          });
                
                        }
                    }
                    
                    if(hasTwo){
                        style = newStyle;
                    }

                    for(let key in style){
                        
                        if(typeof style[key] !== "object"){
                            continue;
                        }

                        var opt = style[key];
                        var num = key;

                        for(let key in opt){
                            switch(num){
                                case"1":
                                    if(opt["bg"]){
                                        excludeFill["one"] = "yes";
                                        one = opt["bg"];
                                    }
                                    if(opt["bd"]){
                                        excludeBorder["one"] = "yes";
                                        borderone = opt["bd"];
                                    }
                                break;
                                case"2":

                                    if(opt["bg"]){
                                        excludeFill["two"] = "yes";
                                        two = opt["bg"];
                                    }
                                    if(opt["bd"]){
                                        excludeBorder["two"] = "yes";
                                        bordertwo = opt["bd"];
                                    }

                                break;
                                case"3":

                                    if(opt["bg"]){
                                        excludeFill["three"] = "yes";
                                        three = opt["bg"];
                                    }
                                    if(opt["bd"]){
                                        excludeBorder["three"] = "yes";
                                        borderthree = opt["bd"];
                                    }

                                break;
                                case"4":

                                    if(opt["bg"]){
                                        excludeFill["four"] = "yes";
                                        four = opt["bg"];
                                    }
                                    if(opt["bd"]){
                                        excludeBorder["four"] = "yes";
                                        borderfour = opt["bd"];
                                    }

                                break;
                            }
                        }

                        

                    }
                    

                    
                break;
                case'border':
                    border = obj[key];
                break;
                case'size':
                    customsize = "height: "+obj[key]+"px !important;";
                    customsize += "width: "+obj[key]+"px !important;";
                   // console.log(customsize);
                break;
                case 'fill':
                    fill = obj[key];
                break;
                case 'color':
                    textFill = obj[key];
                break;
                case 'only':
                    only = obj[key];
                break;
                default:
                    console.warn(`Invalid CSS property: ${key}. Property ignored.`);
            }
        }


        if(only == "border"){

            one = none;
            two = none;
            three = none;
            four = none;
            
        }
        else if(only == "fill"){

            borderone = none;
            bordertwo = none;
            borderthree = none;
            borderfour = none;
            
        }

        if(border ){
            if(!excludeBorder["one"]){
                borderone = border;
            }
            
            if(!excludeBorder["two"]){
                bordertwo = border;
            }
            if(!excludeBorder["three"]){
                borderthree = border;
            }
            if(!excludeBorder["four"]){
                borderfour = border;
            }
        }

        if(fill){
            if(!excludeFill["one"]){
                one = fill;
            }
            if(!excludeFill["two"]){
                two = fill;
            }
            if(!excludeFill["three"]){
                three = fill;
            }
            if(!excludeFill["four"]){
                four = fill;
            }
        }

        let css = `
                <style>
                            /*general*/
                                :root{
                                    --one:${one};
                                    --two:${two};
                                    --three:${three};
                                    --four:${four};
                                    --borderone:${borderone};
                                    --bordertwo:${bordertwo};
                                    --borderthree:${borderthree};
                                    --borderfour:${borderfour};
                                    --textFill:${textFill};
                                    --borderwidth:${borderwidth};
                                    --bg:${bg};

                                }

                                *{
                                    box-sizing: border-box;
                                    margin: 0;
                                    padding: 0;
                                }

                                .loaderJs.center{
                                    display: flex;
                                    justify-content: center;
                                    position: absolute;
                                    left: 0;
                                    height: 100%;
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background-color: #000000bd;
                                    z-index: 999999999;
                                }
                            /*general*/


                            /*one*/

                                .loaderJs.one  .circle {
                                    display: inline-block;
                                    width: 32px;
                                    height: 32px;
                                    border-radius: 50%;
                                    margin: 0 var(--borderwidth);
                                }
                                
                                .loaderJs.one  .circle-1 {
                                    background-color:var(--one);
                                    border: var(--borderwidth) solid var(--borderone);
                                }

                                .loaderJs.one .circle-2 {
                                    background-color:var(--two);
                                    border: var(--borderwidth) solid var(--bordertwo);
                                }

                                .loaderJs.one .circle-3 {
                                    background-color:var(--three);
                                    border: var(--borderwidth) solid var(--borderthree);
                                }

                                .loaderJs.one .circle-4 {
                                    background-color:var(--four);
                                    border: var(--borderwidth) solid var(--borderfour);
                                }
                            /*one*/

                            /*two*/
                                .loaderJs.two .circle {
                                    width: 50px;
                                    height: 50px;
                                    display: inline-block;
                                    border-radius: 50%;
                                    margin: 0 (50px / 3);
                                    box-shadow: 0 -5px 5px 1px rgba(0,0,0,0.2);
                                }

                                .loaderJs.two  .circle-1 {
                                    background-color: var(--one);
                                    border: var(--borderwidth) solid var(--borderone);
                                    background: linear-gradient(tint(#ffc300, -100%), tint(#ffc300, 20%));
                                }

                                .loaderJs.two .circle-2 {
                                    background-color: var(--two);
                                    border: var(--borderwidth) solid var(--bordertwo);
                                    background: linear-gradient(tint(#ff004b, -10%), tint(#ff004b, 30%));
                                }

                            /*two*/

                            /*three*/

                            .loaderJs.three .item3{
                                width:100%;
                                height:100%;
                                display:grid;
                                place-items:center;
                               .loaderJs svg{
                                    fill:var(--one);
                                    circle:nth-child(1){
                                        fill:var(--one);
                                        stroke:var(--borderone);
                                        filter:drop-shadow(0 0 5px #1d355788)
                                        }
                                    }
                                    circle:nth-child(2){
                                        fill:var(--two);
                                        stroke:var(--bordertwo);
                                        filter:drop-shadow(0 0 5px #1d355788)
                                        }
                                    }
                                    circle:nth-child(3){
                                        fill: var(--three);
                                        stroke:var(--borderthree);
                                        filter:drop-shadow(0 0 5px #1d355788)
                                        }
                                    }
                                        
                            }

                            /*three*/

                            /*four*/


                            .loaderJs.four .item1{
                                width:100%;
                                height:100%;
                                display:grid;
                                place-items:center;
                            }
                            .loaderJs.four .item1 svg {
                                fill: var(--one);
                            }

                            .loaderJs.four .item1 circle:nth-child(1) {
                                fill: var(--one);
                                stroke: var(--borderone);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }

                            .loaderJs.four .item1 circle:nth-child(2) {
                                fill: var(--two);
                                stroke: var(--bordertwo);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }
                            .loaderJs.four .item1 circle:nth-child(3) {
                                fill: var(--three);
                                stroke: var(--borderthree);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }
                            .loaderJs.four .item1 circle:nth-child(4) {
                                fill: var(--four);
                                stroke: var(--borderfour);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }
                            .loaderJs.four .item1 circle:nth-child(5) {
                                fill: var(--one);
                                stroke: var(--borderone);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }

                            .loaderJs.four .item1 circle:nth-child(6) {
                                fill: var(--two);
                                stroke: var(--bordertwo);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }
                            .loaderJs.four .item1 circle:nth-child(7) {
                                fill: var(--three);
                                stroke: var(--borderthree);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }
                            .loaderJs.four .item1 circle:nth-child(8) {
                                fill: var(--four);
                                stroke: var(--borderfour);
                                filter: drop-shadow(0 0 5px #1d355788);
                            }

                            /*four*/

                            /*five*/

                            .loaderJs.five .item4{
                                width:100%;
                                height:100%;
                                display:grid;
                                place-items:center;
                            }
                                .loaderJs.five .item svg {
                                    fill: var(--one);
                                }
                                .loaderJs.five .item circle:nth-child(1) {
                                    fill: var(--one);
                                    stroke: var(--borderone);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.five .item circle:nth-child(2) {
                                    fill: var(--two);
                                    stroke: var(--bordertwo);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }
                            /*five*/

                            /*six*/


                            .loaderJs.six .item5{
                                width:100%;
                                height:100%;
                                display:grid;
                                place-items:center;
                                position:relative;
                                &::after{
                                    position:absolute;
                                    top:50%;
                                    left:50%;
                                    transform:translate(-50% , -50%);
                                    content:'Dev';
                                    font-weight:600;
                                    font-size:20px;
                                    color:var(--textFill);
                                    font-family:'Montserrat Alternates',sans-serif
                                }
                            }
                               .loaderJs svg{
                                    position:relative;
                                    fill:var(--one);
                                }
                                .loaderJs.six .item circle:nth-child(1) {
                                    fill: var(--one);
                                    stroke: var(--borderone);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.six .item circle:nth-child(2) {
                                    fill: var(--two);
                                    stroke: var(--bordertwo);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.six .item circle:nth-child(3) {
                                    fill: var(--three);
                                    stroke: var(--borderthree);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.six .item circle:nth-child(4) {
                                    fill: var(--four);
                                    stroke: var(--borderfour);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }


                            /*six*/

                            /*seven*/

                            .loaderJs.seven .item6{
                                    width:100%;
                                    height:100%;
                                    display:grid;
                                    place-items:center;
                                 .loaderJs   svg{
                                        fill:var(--one);
                                        path{
                                            fill:var(--two)
                                        }
                                    }
                                }

                               .loaderJs svg{
                                    position:relative;
                                    fill:var(--one);
                                }
                                .loaderJs.seven .item path:nth-child(1) {
                                    fill: var(--one);
                                    stroke: var(--borderone);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.seven .item path:nth-child(2) {
                                    fill: var(--two);
                                    stroke: var(--bordertwo);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.seven .item path:nth-child(3) {
                                    fill: var(--three);
                                    stroke: var(--borderthree);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }

                                .loaderJs.seven .item path:nth-child(4) {
                                    fill: var(--four);
                                    stroke: var(--borderfour);
                                    filter: drop-shadow(0 0 5px #1d355788);
                                }


                            /*seven*/



                            /*eight*/

                            .loaderJs.eight .box{
                                height: 50px;
                                width: 50px;
                                border-radius: 50%;
                                margin: 0 var(--borderwidth);
                            }
                            .loaderJs.eight .box1{
                                background-color: var(--one);
                                border: var(--borderwidth) solid var(--borderone);
                            }
                            .loaderJs.eight .box2{
                                background-color: var(--two);
                                border: var(--borderwidth) solid var(--bordertwo);

                            }
                            .loaderJs.eight .box3{
                                background-color: var(--three);
                                border: var(--borderwidth) solid var(--borderthree);

                            }

                            .loaderJs .circle, .box, svg{
                                ${customsize}
                            }
                </style>
        `;
        document.body.insertAdjacentHTML('afterbegin', css);
    }
    one(){
        let html = `
            <div class="center one loaderJs">
                <div class="circle circle-1 tag"></div>
                <div class="circle circle-2 tag"></div>
                <div class="circle circle-3 tag"></div>
                <div class="circle circle-4 tag"></div>
            </div>`;

        this.render(html);

    }

    two(){
        let html = `
            <div class="two center loaderJs">
                <div class="circles">
                    <div class="circle circle-1 tag"></div>
                    <div class="circle circle-2 tag"></div>
                </div>
            </div>
        `;
        this.render(html);
    }

    three(){
        let html = `
        <div class="three center loaderJs">
            <div class="item item3">
                <svg id="thirdSVG" width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <circle class="third-circles tag" cx="59" cy="153" r="31" stroke="black" stroke-width="10" />
                    <circle class="third-circles tag" cx="153" cy="153" r="31" stroke="black" stroke-width="10" /> 
                    <circle class="third-circles tag" cx="247" cy="153" r="31" stroke="black" stroke-width="10" /> 
                </svg>
            </div>
        </div>
        `;
        this.render(html);
    }
    four() {
        let html = `
            <div class="four center loaderJs">
                <div class="item item1"> 
                    <svg id="firstSVG" width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <circle class="first-circles circle1 tag" cx="153" cy="73" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles circle2 tag" cx="208.833" cy="95.5" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles tag" cx="233" cy="153" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles tag" cx="208.833" cy="208.833" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles tag" cx="153" cy="233" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles tag" cx="96.3333" cy="208.833" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles tag" cx="73" cy="153" r="20" stroke="black" stroke-width="7" />
                        <circle class="first-circles tag" cx="95.5" cy="97.1667" r="20" stroke="black" stroke-width="7" />
                    </svg>
                </div> 
            </div>
        `;
        this.render(html);
    }

    five(){
        let html = `
        <div class="five center loaderJs">
            <div class="item item4">
                <svg width="306" id="fourthSVG" height="306" viewBox="0 0 306 306" fill="#01131a" xmlns="http://www.w3.org/2000/svg" > 
                    <circle class="fourth-circles tag" cx="112" cy="153" r="35" stroke="black" stroke-width="8" />
                    <circle class="fourth-circles tag" cx="209" cy="153" r="35" stroke="black" stroke-width="8" /> 
                </svg>
            </div>
         </div>
         `;
        this.render(html);
    }

    six(){
        let html = `
        <div class="six center loaderJs">
            <div class="item item5"> 
                <svg id="fifthSVG" width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <circle class="fifth-circles tag" cx="153" cy="153" r="55" stroke="black" stroke-width="2" />
                    <circle class="fifth-circles tag" cx="153" cy="153" r="55" stroke="black" stroke-width="2" /> 
                    <circle class="fifth-circles tag" cx="153" cy="153" r="55" stroke="black" stroke-width="2" /> 
                    <circle class="fifth-circles tag" cx="153" cy="153" r="55" stroke="black" stroke-width="2" /> 
                </svg>
            </div>
        </div>
        `;
        this.render(html);
    }

    seven(){
        let html = `
        <div class="seven center loaderJs">
            <div class="item item6"> 
                <svg id="sixthSVG" width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <path class="sixth-rect1 tag" d="M190.032 87.9865L218.032 87.9865V162.987H190.032V87.9865Z" fill="#E1EFFF" stroke="black" stroke-width="6" />
                    <path class="sixth-rect2 tag" d="M218.698 189.191V217.191H143.698V189.191H218.698Z" fill="#E1EFFF" stroke="black" stroke-width="6" />
                    <path class="sixth-rect3 tag" d="M88.0325 142.987L116.032 142.987L116.032 217.987H88.0325L88.0325 142.987Z" fill="#E1EFFF" stroke="black" stroke-width="6" />
                    <path class="sixth-rect4 tag" d="M163.032 87.9865V115.987L88.0325 115.987L88.0325 87.9865L163.032 87.9865Z" fill="#E1EFFF" stroke="black" stroke-width="6" />
                </svg>
            </div>
        </div>
        `;

        this.render(html);
    }

    eight() {

        let html = `
            <div class="eight center loaderJs">
                <div class="box box1 tag"></div>
                <div class="box box2 tag"></div>
                <div class="box box3 tag"></div>
            </div>
        `;
        this.render(html);
    }

    render(html) {

        //document.body.innerHTML = html;
        document.body.insertAdjacentHTML('afterbegin',html);
        // Ensure Anime.js is loaded before using it and also get the choice
    }



    show(){

        if (typeof anime === 'undefined') {
            console.log('Anime.js library is not loaded.');
            return;
        }

        let elements;

        //alert(this.functionName);
        switch(this.functionName){
            case"one":
            
                    var circle1 = anime ({
                    targets: ['.circle-1'],
                    translateY: -24,
                            translateX: 52,
                            direction: 'alternate',
                    loop: true,
                    elasticity: 400,
                            easing: 'easeInOutElastic',
                        duration: 1600,
                            delay: 800,
                    });

                    var circle2 = anime ({
                    targets: ['.circle-2'],
                    translateY: 24,
                            direction: 'alternate',
                    loop: true,
                    elasticity: 400,
                            easing: 'easeInOutElastic',
                        duration: 1600,
                            delay: 800,
                    });

                    var circle3 = anime ({
                    targets: ['.circle-3'],
                    translateY: -24,
                            direction: 'alternate',
                    loop: true,
                    elasticity: 400,
                            easing: 'easeInOutElastic',
                        duration: 1600,
                            delay: 800,
                    });

                    var circle4 = anime ({
                    targets: ['.circle-4'],
                    translateY: 24,
                            translateX: -52,
                            direction: 'alternate',
                    loop: true,
                    elasticity: 400,
                            easing: 'easeInOutElastic',
                        duration: 1600,
                            delay: 800,
                    });
        
                
            break;
            case"two":
                var circle = anime ({
                    targets: ['.two .circles'],
                    rotate: 180,
                    duration: 1600,
                    loop: true,
                    elasticity: 600,
                    easing: 'easeOutElastic',
                    delay: function(el, index) {
                        return index * 80;
                    },
                });
            break;
            case"three":
                elements=document.querySelectorAll(".third-circles");
                let curEl=elements[0];
                anime({
                    targets:curEl,
                    translateX:170,
                    loop:true
                    ,duration:700,
                    easing:"easeInOutBack",
                    r:[31,40,31],
                });
                anime({
                    loop:true,
                    targets:[elements[1],
                    elements[2]],
                    translateX:-190/2,
                    easing:"easeInOutBack",
                    duration:700,
                });
            break;
            case"four":
                const firstTL= anime.timeline({
                    duration:1000/8,
                    complete:function(){
                        firstTL.restart();
                    },
                    easing:"easeOutSine",
                });
                elements = document.querySelectorAll(".first-circles");
                for(let el of elements){
                    firstTL.add({
                        begin:()=>{
                            anime({targets:el,
                                strokeWidth:[10,9,9,10],
                                r:[20,0,20],
                                opacity:[1,0,1],
                                delay:anime.stagger(1000/8),
                                duration:1000,
                                easing:"easeOutSine",
                            });},
                        });
                    }
            break;
            case"five":
                elements=document.querySelectorAll(".fourth-circles");
                let leftEl=elements[0];
                let rightEl=elements[1];
                anime({
                    targets:leftEl,
                    translateX:100,
                    loop:true,
                    easing:"easeInOutSine",
                    r:[35,25,35,35],
                    duration:1000,});
                anime({
                    targets:rightEl,
                    translateX:-100,
                    loop:true,
                    easing:"easeInOutSine",
                    r:[35,55,35,35],
                    duration:1000,});
            break;
            case"six":
                const fifthTL=anime.timeline({
                    duration:3000,
                    complete:function(){
                        fifthTL.restart();
                    },
                    easing:"easeOutSine",
                });
                
                elements=document.querySelectorAll(".fifth-circles");
                for(let el of elements){
                    fifthTL.add({
                        begin:()=>{
                            anime({
                                targets:[elements[1],
                                elements[2],
                                elements[3]],
                                r:[55,95],
                                opacity:[1,0],
                                delay:anime.stagger(1500/4),
                                duration:1500,
                                easing:"easeOutSine",
                            });
                        },
                    });
                    anime({
                        targets:elements[0],
                        r:60,
                        delay:1250,
                        duration:250,
                        loop:true,
                        easing:"linear",
                        direction:"alternate",
                    });
                }

            break;
            case"seven":
                const sixthTL=anime.timeline({
                    loop:true
                    ,easing:"easeInOutSine",
                    duration:2000,
                });
                sixthTL.add({
                    targets:".sixth-rect1",
                    translateY:54,
                    duration:500,
                }).add({
                    targets:".sixth-rect2",
                    translateX:-54,
                    duration:500,
                },0).add({
                    targets:".sixth-rect3",
                    translateY:-54,
                    duration:500,
                },0).add({
                    targets:".sixth-rect4",
                    translateX:54,
                    duration:500,
                    endDelay:200,},0
                );
                sixthTL.add({
                    targets:"#sixthSVG",
                    duration:500,rotate:135,
                    endDelay:200,
                });
                sixthTL.add({
                    targets:".sixth-rect2",
                    translateX:0,
                    duration:500,
                }).add({
                    targets:".sixth-rect4",
                    translateX:0,
                    duration:500,
                    endDelay:200,
                },"-=500");
                sixthTL.add({
                    targets:".sixth-rect1",
                    translateY:0,duration:500,
                }).add({
                    targets:".sixth-rect4",
                    translateX:54,
                    duration:500,
                },"-=500");
                sixthTL.add({
                    targets:".sixth-rect3",
                    translateY:0,
                    duration:500,
                },"-=500").add({
                    targets:".sixth-rect2",
                    translateX:-54,
                    duration:500,
                    endDelay:200,
                },"-=500");
                sixthTL.add({
                    targets:".sixth-rect1",
                    translateY:54,
                    duration:500,
                }).add({
                    targets:".sixth-rect3",
                    translateY:-54,
                    duration:500,
                    endDelay:200,
                },"-=500");
                sixthTL.add({
                    targets:"#sixthSVG",
                    duration:500,
                    rotate:270,
                    endDelay:200,
                });
                sixthTL.add({targets:".sixth-rect1",
                    translateY:0,
                    duration:500,
                }).add({targets:".sixth-rect2",
                    translateX:0,
                    duration:500,
                },"-=500").add({
                    targets:".sixth-rect3",
                    translateY:0,
                    duration:500,
                },"-=500").add({
                    targets:".sixth-rect4",
                    translateX:0,
                    duration:500,
                    endDelay:200,
                },"-=500");
            break
            case"eight":
                anime({
                    targets: '.center .box',
                    translateY: 50,
                    delay: function (box, i, l) {return i * 200;},
                    direction: 'alternate',
                    loop: true,
                    duration: 1000,
                    /*easing: function (el, i, total) {
                        return function (t) {
                            // Reverse the speed scaling: higher index moves slower
                            const adjustedIndex = total - i; // Reverse the index
                            const speed = Math.pow(Math.sin(t * adjustedIndex), total);
                            return speed;
                        };
                    }*/
                    /*easing: function(el, i, total) {
                        return function(t) {
                          return Math.pow(Math.sin(t * (i + 1)), total);
                        }
                    }*/
                    easing: 'easeInOutElastic'
                });
            break;
            default: console.log(this.functionName+' not loaded in animate switch');
        }
    }

    hide(){
        document.querySelector(".loaderJs").style.display='none';
    }

}