(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"v",(function(){return r})),n.d(t,"s",(function(){return c})),n.d(t,"y",(function(){return i})),n.d(t,"z",(function(){return a})),n.d(t,"x",(function(){return o})),n.d(t,"t",(function(){return s})),n.d(t,"r",(function(){return u})),n.d(t,"u",(function(){return l})),n.d(t,"w",(function(){return b})),n.d(t,"B",(function(){return m})),n.d(t,"D",(function(){return f})),n.d(t,"C",(function(){return p})),n.d(t,"A",(function(){return d})),n.d(t,"E",(function(){return O})),n.d(t,"q",(function(){return E})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return j})),n.d(t,"a",(function(){return T})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return k})),n.d(t,"i",(function(){return g})),n.d(t,"F",(function(){return h})),n.d(t,"e",(function(){return R})),n.d(t,"j",(function(){return C})),n.d(t,"n",(function(){return x})),n.d(t,"m",(function(){return L})),n.d(t,"l",(function(){return S})),n.d(t,"o",(function(){return B})),n.d(t,"k",(function(){return M})),n.d(t,"p",(function(){return A}));var r="onClickNumber",c="onClickDot",i="onClickSign",a="onClickSimpleOperator",o="onClickResult",s="onClickMain",u="onClickComplexes",l="onClickMemory",b="onClickPercent",m="simpleMinus",f="simplePlus",p="simpleMultiply",d="simpleDivision",O="simpleResult",E="notOperator",N="mainBackspace",_="mainClear",j="mainClearLast",T="complexesDivisionX",y="complexesSqrX",v="complexesSqrtX",k="\u0414\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u043e\u043b\u044c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e",g=16,h=280,R=50,C="memoryClear",x="memoryRead",L="memoryPlus",S="memoryMinus",B="memorySave",M="memoryList",A={BEGIN_MODE:0,FIRST_OPERATOR:1,MULTIPLE_ACTION:2,LAST_NUMBER:3,AFTER_RESULT:4}},,function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"j",(function(){return i})),n.d(t,"i",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"m",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"l",(function(){return O})),n.d(t,"b",(function(){return E}));var r=n(0),c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=m(t).map((function(e){return("number"===typeof e||O(e)?a(e):o(e))||e}));return r.filter((function(e){return""!==e}))},i=function(e){return u(parseFloat(e.replace(",",".")))},a=function(e){return e.toString().replace(".",",")},o=function(e){var t="";switch(e){case r.E:t="=";break;case r.D:t="+";break;case r.B:t="-";break;case r.C:t="\xd7";break;case r.A:t="\xf7";break;default:t=""}return t},s=function(e,t,n){var c=0;switch(n){case r.D:c=u(e+t);break;case r.B:c=u(e-t);break;case r.C:c=u(e*t);break;case r.A:c=u(e/t)}return c.toString().replace(".",",")},u=function(e){return 1*e.toFixed(17)},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=!1;return e.includes(",")&&(n=!1,c=!0),c&&e.length===r.i+1?e:c||e.length!==r.i?n?t.toString()?"".concat(e.toString(),",").concat(t):e:"0"===e?"".concat(t):t.toString()?"".concat(e).concat(t):"".concat(e):e},b=function(e,t){return"".concat(t,"( ").concat(a(e).trim()," )")},m=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return n>0?t.reduce((function(t,r){return t.concat(Array.isArray(r)?e(r,n-1):r)}),[]):t.slice()},f=function(e,t){return O(e)?e:a(t)},p=function(e,t,n){var r="",i="";return e.length>1&&e.length%2?(r=e.slice(0,-1),i=b(e.pop(),n)):(r=e,i=b(a(t),n)),c(r,i)},d=function(e){var t={};switch(e){case r.a:t={cOperation:function(e){return 1/e},wrapText:"1/"};break;case r.c:t={cOperation:function(e){return Math.pow(e,2)},wrapText:"sqr"};break;case r.b:t={cOperation:function(e){return Math.sqrt(e)},wrapText:"\u221a"};break;default:throw Error("Unknown typeOperation received")}return t},O=function(e){return void 0!==e&&isNaN(e)&&-1===["+","-","\xd7","\xf7","=","simpleMinus","simplePlus","simpleMultiply","simpleDivision","simpleResult"].indexOf(e)},E=function(e){var t=e.split(",");if(isNaN(t[0]))throw new Error("Received data is not number");var n=!1;parseInt(t[0])<0&&(n=!0,t[0]=t[0].slice(1));for(var r=t[0].length,c="",i=r-1;i>=0;i--)c+=(r-i)%3?t[0][i]:"".concat(t[0][i]," ");var a=c.split("").reverse();return t[0]=a.join("").trim(),"".concat(n?"-":"").concat(t.join(","))}},function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(25),c=n(0),i=n(15),a=n(16),o=n(17),s=n(18),u=n(19),l=n(20),b=n(21),m=n(22),f=n(23),p={displayText:"0",firstNumber:0,lastNumber:0,mode:c.p.BEGIN_MODE,firstOperator:c.q,onDot:!1,percentNumber:NaN,divisionByZeroBlocking:!1,arrMemory:[],arrLogText:[],numberIsWrapped:!1};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(e.divisionByZeroBlocking&&(e=Object(r.a)({},p)),e.divisionByZeroBlocking=!1,t.type){case c.x:e=Object(u.a)(e);break;case c.t:e=Object(l.a)(e,t);break;case c.s:e=Object(o.a)(e);break;case c.y:e=Object(i.a)(e);break;case c.v:e=Object(a.a)(e,t);break;case c.z:e=Object(s.a)(e,t);break;case c.r:e=Object(b.a)(e,t);break;case c.w:e=Object(m.a)(e);break;case c.u:e=Object(f.a)(e,t)}return e}}).call(this,n(11))},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e){var t=e.displayText,n=e.firstNumber,i=e.lastNumber,a=e.mode,o=e.firstOperator,s=(e.onDot,e.arrMemory),u=e.arrLogText,l=e.percentNumber,b=e.numberIsWrapped;if(!1,a<r.p.FIRST_OPERATOR)void 0!==u[0]&&isNaN(u[0])&&(u=Object(c.c)(Object(c.m)(u[0],"negate"))),n*=-1,t=Object(c.i)(n);else if(a===r.p.FIRST_OPERATOR)a=r.p.LAST_NUMBER,i=-1*n,u=Object(c.c)(n,o,Object(c.m)(t,"negate")),t=Object(c.i)(i);else if(a===r.p.MULTIPLE_ACTION)i=-1*Object(c.j)(t),u=Object(c.k)(u,t,"negate"),t=Object(c.i)(i);else if(a===r.p.AFTER_RESULT){n=-1*Object(c.j)(t);var m=u.length>1?t:u[0];u=Object(c.c)(" ".concat(Object(c.m)(m,"negate")," ")),t=Object(c.i)(n)}else a===r.p.LAST_NUMBER&&(u=Object(c.k)(u,i,"negate"),i*=-1,t=Object(c.i)(i));return{displayText:t,firstNumber:n,lastNumber:i,mode:a,firstOperator:o,onDot:!1,arrMemory:s,arrLogText:u,percentNumber:l,numberIsWrapped:b}}},function(e,t,n){"use strict";var r=n(0),c=n(2),i=n(3);t.a=function(e,t){var n=e.displayText,a=e.firstNumber,o=e.lastNumber,s=e.mode,u=e.firstOperator,l=e.onDot,b=e.arrMemory,m=e.arrLogText,f=e.percentNumber,p=e.numberIsWrapped,d=(t.type,t.value);return s===r.p.AFTER_RESULT?(a=d,o=i.b.lastNumber,s=i.b.mode,u=i.b.firstOperator,m=i.b.arrLogText,n=Object(c.e)("",d,l)):s===r.p.FIRST_OPERATOR?(n=Object(c.e)(o.toString(),d,l),o=Object(c.j)(n),s=r.p.LAST_NUMBER):s===r.p.MULTIPLE_ACTION?(m.length%2&&isNaN(Object(c.j)(m[m.length-1]))?(n=(o=d).toString(),m=Object(c.c)(m.slice(0,-1))):(n=Object(c.e)(o.toString(),d,l),o=Object(c.j)(n)),s=r.p.LAST_NUMBER):s===r.p.LAST_NUMBER?p?(n=Object(c.i)(d),o=d,Object(c.l)(m[m.length-1])&&m.pop()):(n=Object(c.e)(n,d,l),o=Object(c.j)(n)):u===r.E?(a=d,n=Object(c.i)(a),u=r.q):p?(n=Object(c.i)(d),a=d):(n=Object(c.e)(n,d,l),a=Object(c.j)(n)),{displayText:n,firstNumber:a,lastNumber:o,mode:s,firstOperator:u,onDot:l=!1,arrMemory:b,arrLogText:m,percentNumber:f,numberIsWrapped:p=!1}}},function(e,t,n){"use strict";var r=n(0),c=n(3);t.a=function(e){var t=e.displayText,n=e.firstNumber,i=e.lastNumber,a=e.mode,o=e.firstOperator,s=e.onDot,u=e.arrMemory,l=e.arrLogText,b=e.percentNumber,m=e.numberIsWrapped;return a===r.p.AFTER_RESULT?(t=c.b.displayText,n=c.b.firstNumber,i=c.b.lastNumber,a=c.b.mode,o=c.b.firstOperator,s=c.b.onDot,l=c.b.arrLogText,b=c.b.percentNumber):a!==r.p.FIRST_OPERATOR&&a!==r.p.MULTIPLE_ACTION||(i=0,t="0",a=r.p.LAST_NUMBER),t.includes(",")||(s=!0,t="".concat(t,",")),{displayText:t,firstNumber:n,lastNumber:i,mode:a,firstOperator:o,onDot:s,arrMemory:u,arrLogText:l,percentNumber:b,numberIsWrapped:m}}},function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e,t){var n=e.displayText,i=e.firstNumber,a=e.lastNumber,o=e.mode,s=e.firstOperator,u=(e.onDot,e.arrMemory),l=e.arrLogText,b=e.numberIsWrapped,m=(e.percentNumber,t.type,t.value);if(!1,o<r.p.MULTIPLE_ACTION){n=Object(c.i)(i);var f="";f=o===r.p.FIRST_OPERATOR&&l.length?l.slice(0,-1):Object(c.a)(l[0],i),l=Object(c.c)(f,m),o=r.p.FIRST_OPERATOR}else if(o===r.p.AFTER_RESULT){var p=l.length?Object(c.a)(l[0],i):i;l=Object(c.c)(p,m),o=r.p.FIRST_OPERATOR}else if(o!==r.p.MULTIPLE_ACTION)if(n=Object(c.f)(i,a,s),i=Object(c.j)(n),o===r.p.LAST_NUMBER){var d=l,O=a;l.length%2&&(d=l.slice(0,-1),O=Object(c.a)(l[l.length-1],a)),l=Object(c.c)(d,O,m),o=r.p.MULTIPLE_ACTION}else l=Object(c.c)(l,i,m,a,m),o=r.p.FIRST_OPERATOR;return{displayText:n,firstNumber:i,lastNumber:a=0,mode:o,firstOperator:s=m,onDot:!1,arrMemory:u,arrLogText:l,percentNumber:i,numberIsWrapped:b}}},function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e){var t=e.displayText,n=e.firstNumber,i=e.lastNumber,a=e.mode,o=e.firstOperator,s=e.onDot,u=e.arrMemory,l=e.arrLogText,b=e.percentNumber,m=e.numberIsWrapped,f=e.divisionByZeroBlocking;if(a>r.p.FIRST_OPERATOR&&o!==r.E)if((!i&&a<r.p.LAST_NUMBER||a===r.p.MULTIPLE_ACTION)&&(i=Object(c.j)(t),a=r.p.LAST_NUMBER),t=Object(c.f)(n,i,o),a===r.p.AFTER_RESULT)l=Object(c.c)(n,o,i,r.E),b=n=Object(c.j)(t);else if(a===r.p.LAST_NUMBER&&o===r.A&&0===i)t=r.d,f=!0;else{var p=l,d=i;l.length>1&&l.length%2?(p=l.slice(0,-1),d=Object(c.a)(l[l.length-1],i)):1===l.length&&(p=[l[0],Object(c.g)(o)],d=Object(c.i)(i)),l=Object(c.c)(p,d,r.E),n=Object(c.j)(t),a=r.p.AFTER_RESULT,b=n}else a===r.p.FIRST_OPERATOR?(i=Object(c.j)(t),t=Object(c.f)(n,i,o),l=Object(c.c)(Object(c.a)(l[0],n),o,i,r.E),n=Object(c.j)(t),a=r.p.AFTER_RESULT,b=n):(o=r.E,l=Object(c.c)(n,0===n?"":r.E),b=n);return{displayText:t,firstNumber:n,lastNumber:i,mode:a,firstOperator:o,onDot:s,arrMemory:u,arrLogText:l,percentNumber:b,divisionByZeroBlocking:f,numberIsWrapped:m}}},function(e,t,n){"use strict";var r=n(0),c=n(2),i=n(3);t.a=function(e,t){var n=e.displayText,a=e.firstNumber,o=e.lastNumber,s=e.mode,u=e.firstOperator,l=e.onDot,b=e.arrMemory,m=e.arrLogText,f=e.percentNumber,p=e.numberIsWrapped;t.type;switch(t.value){case r.g:n=i.b.displayText,a=i.b.firstNumber,o=i.b.lastNumber,s=i.b.mode,u=i.b.firstOperator,m=i.b.arrLogText,f=i.b.percentNumber,l=i.b.onDot;break;case r.h:s===r.p.BEGIN_MODE||s===r.p.AFTER_RESULT?(a=i.b.firstNumber,o=i.b.lastNumber,s=i.b.mode,u=i.b.firstOperator,m=i.b.arrLogText,f=i.b.percentNumber):o=i.b.lastNumber,n=i.b.displayText;break;case r.f:"0"!==n&&(s<r.p.AFTER_RESULT?(n=n.slice(0,-1)||"0",s<r.p.LAST_NUMBER?a=Object(c.j)(n):o=Object(c.j)(n)):(a=Object(c.j)(n),m=[]))}return{displayText:n,firstNumber:a,lastNumber:o,mode:s,firstOperator:u,onDot:l,arrMemory:b,arrLogText:m,percentNumber:f,numberIsWrapped:p}}},function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e,t){var n=e.displayText,i=e.firstNumber,a=e.lastNumber,o=e.mode,s=e.firstOperator,u=e.onDot,l=e.arrMemory,b=e.arrLogText,m=e.percentNumber,f=(e.numberIsWrapped,e.divisionByZeroBlocking),p=(t.type,t.value),d=Object(c.d)(p),O=d.cOperation,E=d.wrapText;return o<r.p.FIRST_OPERATOR?(b=Object(c.c)(Object(c.m)(Object(c.a)(b[0],i),E)),0===i?(n=r.d,f=!0):(i=O(i),n=Object(c.i)(i))):o===r.p.FIRST_OPERATOR?(b=Object(c.c)(b,Object(c.m)(i,E)),0===i?(n=r.d,f=!0):(a=O(i),n=Object(c.i)(a),o=r.p.LAST_NUMBER)):o===r.p.LAST_NUMBER?(b=Object(c.k)(b,a,E),0===a?(n=r.d,f=!0):(a=O(a),n=Object(c.i)(a))):o===r.p.MULTIPLE_ACTION?(b=Object(c.k)(b,n,E),0===Object(c.j)(n)?(n=r.d,f=!0):(a=O(Object(c.j)(n)),n=Object(c.i)(a))):o===r.p.AFTER_RESULT&&(b=b.length>1?[Object(c.m)(i,E)]:[Object(c.m)(b[0],E)],0===i?(n=r.d,f=!0):(i=O(i),n=Object(c.i)(i))),!0,{displayText:n,firstNumber:i,lastNumber:a,mode:o,firstOperator:s,onDot:u,arrMemory:l,arrLogText:b,percentNumber:m,numberIsWrapped:!0,divisionByZeroBlocking:f}}},function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e){var t=e.displayText,n=e.firstNumber,i=e.lastNumber,a=e.mode,o=e.firstOperator,s=(e.onDot,e.arrMemory),u=e.arrLogText,l=e.percentNumber,b=e.numberIsWrapped;return!1,a===r.p.BEGIN_MODE?(n=0,t=Object(c.i)(n),u=Object(c.c)(n)):a===r.p.FIRST_OPERATOR?(i=Object(c.h)(n*(l/100)),a=r.p.LAST_NUMBER,u=Object(c.c)(u,i),t=Object(c.i)(i),l=n,b=!0):a===r.p.LAST_NUMBER?(i=Object(c.h)(i*(l/100)),u=Object(c.c)(u.length%2?u.slice(0,-1):u,i),t=Object(c.i)(i),b=!0):a===r.p.AFTER_RESULT&&(t=Object(c.i)(Object(c.h)(Object(c.j)(t)*(l/100))),n=Object(c.j)(t),u=Object(c.c)(t)),{displayText:t,firstNumber:n,lastNumber:i,mode:a,firstOperator:o,onDot:!1,arrMemory:s,arrLogText:u,percentNumber:l,numberIsWrapped:b}}},function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e,t){var n=e.displayText,i=e.firstNumber,a=e.lastNumber,o=e.mode,s=e.firstOperator,u=e.onDot,l=e.arrMemory,b=e.arrLogText,m=e.percentNumber,f=e.numberIsWrapped;t.type;switch(f=!0,t.value){case r.j:l=[],f=!1;break;case r.n:var p=l[l.length-1];n=Object(c.i)(p),o===r.p.BEGIN_MODE||o===r.p.AFTER_RESULT?i=p:o===r.p.MULTIPLE_ACTION?(a=p,o=r.p.LAST_NUMBER):a=p;break;case r.m:l.length?l[l.length-1]+=Object(c.j)(n):l.push(Object(c.j)(n));break;case r.l:l.length?l[l.length-1]-=Object(c.j)(n):l.push(Object(c.j)(n));break;case r.o:l.push(Object(c.j)(n));break;case r.k:break;default:throw new Error("Unknown type memory option in the servantMemory ")}return o===r.p.AFTER_RESULT&&(b=[]),{displayText:n,firstNumber:i,lastNumber:a,mode:o,firstOperator:s,onDot:u,arrMemory:l,arrLogText:b,percentNumber:m,numberIsWrapped:f}}},function(e,t,n){"use strict";var r=n(1),c=n.n(r);function i(){return c.a.createElement("header",null,c.a.createElement("div",{className:"full_width",id:"control_panel"},c.a.createElement("h1",{className:"label_ctrl_panel"},"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),c.a.createElement("fieldset",{id:"field_controls"},c.a.createElement("button",{className:"main_controls min_btn",disabled:!0}),c.a.createElement("button",{className:"main_controls max_btn",disabled:!0}),c.a.createElement("button",{className:"main_controls close_btn",disabled:!0}))),c.a.createElement("div",{className:"full_width",id:"dashboard"},c.a.createElement("button",{className:"subtitle_controls menu_btn",disabled:!0}),c.a.createElement("h2",{className:"subitile_ordinary"},"\u041e\u0431\u044b\u0447\u043d\u044b\u0439"),c.a.createElement("button",{className:"subtitle_controls stick_btn",disabled:!0}),c.a.createElement("button",{className:"subtitle_controls journal_btn",disabled:!0})))}var a=n(5),o=n(4),s=n(2),u=n(0);var l=Object(o.b)((function(e){return{rawText:e.displayText,logText:e.arrLogText.join(" ")}}),null)((function(e){var t=e.rawText,n=e.logText,i=Object(s.b)(t),o=c.a.createRef(),l=Object(r.useState)(0),b=Object(a.a)(l,2),m=b[0],f=b[1],p=Object(r.useState)({right:0,textAlign:"right"}),d=Object(a.a)(p,2),O=d[0],E=d[1],N=Object(r.useState)(!1),_=Object(a.a)(N,2),j=_[0],T=_[1],y=Object(r.useState)(0),v=Object(a.a)(y,2),k=v[0],g=v[1],h=Object(r.useState)(0),R=Object(a.a)(h,2),C=R[0],x=R[1],L=Object(r.useState)(null),S=Object(a.a)(L,2),B=S[0],M=S[1],A=Object(r.useState)(null),I=Object(a.a)(A,2),w=I[0],U=I[1];Object(r.useEffect)((function(){var e=o.current.children[1].firstChild.firstChild.firstChild,t=o.current.children[1].firstChild.firstChild;if(e.offsetWidth>u.F){var n=t.style.fontSize.substr(0,2),r=Math.ceil(n*(u.F/e.offsetWidth));t.style.fontSize="".concat(r,"px")}else if(e.textContent.length>10&&e.offsetWidth<u.F){var c=t.style.fontSize.substr(0,2),i=Math.ceil(c/(e.offsetWidth/u.F));t.style.fontSize="".concat(i<u.e?i:u.e,"px")}else e.textContent.length<10&&(t.style.fontSize="".concat(u.e,"px"));if(M(o.current.children[0].firstChild),B&&(U(o.current.children[0].children[2]),w)){var a=o.current.children[0].children[1].firstChild,s=o.current.children[0].children[1];g(o.current.parentNode.offsetWidth-B.offsetWidth-w.offsetWidth-4),x(a.offsetWidth),s.style.width="".concat(k,"px"),!j&&C>k?(B.style.visibility="visible",!1===j&&(f(C-k),a.style.right="".concat(C-k,"px"),a.style.textAlign="left")):(!j||C<k)&&(a.style.right="0px",a.style.textAlign="right",w.style.visibility="hidden",B.style.visibility="hidden",T(!1))}}),[f,o,B,w,j,C,k,x,g]);var F=function(e){var t=m+(e?100:-100);t<=0?(t=0,B.style.visibility="hidden"):B.style.visibility="visible",t+k>=C?(t=C-k,w.style.visibility="hidden"):w.style.visibility="visible",E({right:"".concat(t,"px"),textAlign:"left"}),f(t),j||T(!0)};return c.a.createElement("section",{className:"full_width",ref:o},c.a.createElement("div",{className:"full_width story_calc"},c.a.createElement("button",{className:"progress_arrows left_progress_arrow",onClick:function(){return F(0)}}),c.a.createElement("p",{className:"progress_content"},c.a.createElement("span",{className:"span_log_text",style:O},n)),c.a.createElement("button",{className:"progress_arrows right_progress_arrow",onClick:function(){return F(1)}})),c.a.createElement("div",{className:"full_width viewer_panel",id:"viewer"},c.a.createElement("blockquote",null,c.a.createElement("p",{className:"outputWindow"},c.a.createElement("span",null,i)))))})),b=Object(o.b)((function(e){return{divisionByZeroBlocking:e.divisionByZeroBlocking}}),(function(e){return{clickNumber:function(t){e({type:u.v,value:t})},clickSymbol:function(t){e(t?{type:u.s}:{type:u.y})}}}))((function(e){var t=e.clickNumber,n=e.clickSymbol,r=e.divisionByZeroBlocking;return c.a.createElement("fieldset",{className:"fieldset_num_btns"},c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(7)}},"7"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(8)}},"8"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(9)}},"9"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(4)}},"4"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(5)}},"5"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(6)}},"6"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(1)}},"1"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(2)}},"2"),c.a.createElement("button",{className:"input_btns nmr_btns",onClick:function(){return t(3)}},"3"),c.a.createElement("button",{className:"input_btns nmr_btns btn_plus_minus",disabled:r,onClick:function(){return n()}}),c.a.createElement("button",{className:"input_btns nmr_btns",id:"btn_zerro",onClick:function(){return t(0)}},"0"),c.a.createElement("button",{className:"input_btns nmr_btns",id:"btn_dote",disabled:r,onClick:function(){return n(".")}},","))})),m=Object(o.b)((function(e){return{divisionByZeroBlocking:e.divisionByZeroBlocking}}),(function(e){return{onClick:function(t){e({type:u.z,value:t})}}}))((function(e){var t=e.onClick,n=e.divisionByZeroBlocking;return c.a.createElement("fieldset",{className:"fieldset_simple_btns"},c.a.createElement("button",{className:"input_btns btn_division",disabled:n,onClick:function(){return t(u.A)}}),c.a.createElement("button",{className:"input_btns btn_multiply",disabled:n,onClick:function(){return t(u.C)}}),c.a.createElement("button",{className:"input_btns btn_minus",disabled:n,onClick:function(){return t(u.B)}}),c.a.createElement("button",{className:"input_btns btn_plus",disabled:n,onClick:function(){return t(u.D)}}))})),f=Object(o.b)(null,(function(e){return{onClick:function(){e({type:u.x})}}}))((function(e){var t=e.onClick;return c.a.createElement("fieldset",null,c.a.createElement("button",{className:"input_btns btn_result",onClick:function(){return t()}}))})),p=Object(o.b)((function(e){return{divisionByZeroBlocking:e.divisionByZeroBlocking}}),(function(e){return{onClick:function(t){e({type:u.w,value:null})}}}))((function(e){var t=e.onClick,n=e.divisionByZeroBlocking;return c.a.createElement("fieldset",{className:"fieldset_percent"},c.a.createElement("button",{className:"input_btns btn_percent",disabled:n,onClick:function(){return t()}},"%"))})),d=Object(o.b)(null,(function(e){return{onClick:function(t){e({type:u.t,value:t})}}}))((function(e){return c.a.createElement("fieldset",{className:"main_btns"},c.a.createElement("button",{className:"input_btns",onClick:function(){return e.onClick(u.h)}},"CE"),c.a.createElement("button",{className:"input_btns",onClick:function(){return e.onClick(u.g)}},"C"),c.a.createElement("button",{className:"input_btns btn_backspace",onClick:function(){return e.onClick(u.f)}}))})),O=Object(o.b)((function(e){return{divisionByZeroBlocking:e.divisionByZeroBlocking,memoryEngaged:!e.arrMemory.length}}),(function(e){return{onClick:function(t){e({type:u.u,value:t})}}}))((function(e){var t=e.onClick,n=e.divisionByZeroBlocking,r=e.memoryEngaged;return c.a.createElement("fieldset",{className:"input_fieldsets"},c.a.createElement("button",{className:"mm_btns",disabled:n||r,onClick:function(){return t(u.j)}},"MC"),c.a.createElement("button",{className:"mm_btns",disabled:n||r,onClick:function(){return t(u.n)}},"MR"),c.a.createElement("button",{className:"mm_btns",disabled:n,onClick:function(){return t(u.m)}},"M+"),c.a.createElement("button",{className:"mm_btns",disabled:n,onClick:function(){return t(u.l)}},"M-"),c.a.createElement("button",{className:"mm_btns",disabled:n,onClick:function(){return t(u.o)}},"MS"),c.a.createElement("button",{className:"mm_btns",disabled:n||r||!0,onClick:function(){return t(u.k)}},"M",c.a.createElement("sup",{className:"down_arrow"},"\u25bc")))})),E=Object(o.b)((function(e){return{divisionByZeroBlocking:e.divisionByZeroBlocking}}),(function(e){return{onClick:function(t){e({type:u.r,value:t})}}}))((function(e){var t=e.onClick,n=e.divisionByZeroBlocking;return c.a.createElement("fieldset",{className:"fieldset_complexes_btns",disabled:!1},c.a.createElement("button",{className:"input_btns btn_one_x",disabled:n,onClick:function(){return t(u.a)}}),c.a.createElement("button",{className:"input_btns btn_x2",disabled:n,onClick:function(){return t(u.c)}}),c.a.createElement("button",{className:"input_btns btn_2x",disabled:n,onClick:function(){return t(u.b)}}))})),N=function(){return c.a.createElement("section",{className:"full_width input_section"},c.a.createElement(O,null),c.a.createElement("section",{className:"input_fieldsets"},c.a.createElement(p,null),c.a.createElement(d,null),c.a.createElement(E,null),c.a.createElement(b,null),c.a.createElement(m,null),c.a.createElement(f,null)))};t.a=function(){return c.a.createElement("main",{role:"main",className:"App active"},c.a.createElement(i,null),c.a.createElement(l,null),c.a.createElement(N,null))}},,function(e,t,n){e.exports=n(27)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(1),r=n.n(t),c=n(7),i=n.n(c),a=(n(32),n(24)),o=n(14),s=n(4),u=n(3),l=n(6),b=Object(l.b)(u.a);i.a.render(r.a.createElement(s.a,{store:b},r.a.createElement(r.a.StrictMode,null,r.a.createElement(a.a,null))),document.getElementById("root")),o.a()}.call(this,n(11))},,,,,function(e,t,n){}],[[26,1,2]]]);
//# sourceMappingURL=main.ee19d2ff.chunk.js.map