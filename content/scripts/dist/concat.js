/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

! function(t, e, i, n) {
    var a = e.document,
        o = t(a),
        r = t(e),
        s = Array.prototype,
        l = 1.41,
        c = true,
        u = 3e4,
        h = false,
        f = navigator.userAgent.toLowerCase(),
        d = e.location.hash.replace(/#\//, ""),
        p = e.location.protocol,
        g = Math,
        m = function() {},
        v = function() {
            return false
        },
        y = function() {
            var t = 3,
                e = a.createElement("div"),
                i = e.getElementsByTagName("i");
            do {
                e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->"
            } while (i[0]);
            return t > 4 ? t : a.documentMode || n
        }(),
        _ = function() {
            return {
                html: a.documentElement,
                body: a.body,
                head: a.getElementsByTagName("head")[0],
                title: a.title
            }
        },
        b = e.parent !== e.self,
        w = "data ready thumbnail loadstart loadfinish image play pause progress " + "fullscreen_enter fullscreen_exit idle_enter idle_exit rescale " + "lightbox_open lightbox_close lightbox_image",
        x = function() {
            var e = [];
            t.each(w.split(" "), function(t, i) {
                e.push(i);
                if (/_/.test(i)) {
                    e.push(i.replace(/_/g, ""))
                }
            });
            return e
        }(),
        T = function(e) {
            var i;
            if (typeof e !== "object") {
                return e
            }
            t.each(e, function(n, a) {
                if (/^[a-z]+_/.test(n)) {
                    i = "";
                    t.each(n.split("_"), function(t, e) {
                        i += t > 0 ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                    });
                    e[i] = a;
                    delete e[n]
                }
            });
            return e
        },
        k = function(e) {
            if (t.inArray(e, x) > -1) {
                return i[e.toUpperCase()]
            }
            return e
        },
        C = {
            youtube: {
                reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
                embed: function() {
                    return "http://www.youtube.com/embed/" + this.id
                },
                getUrl: function() {
                    return p + "//gdata.youtube.com/feeds/api/videos/" + this.id + "?v=2&alt=json-in-script&callback=?"
                },
                get_thumb: function(t) {
                    return t.entry.media$group.media$thumbnail[2].url
                },
                get_image: function(t) {
                    if (t.entry.yt$hd) {
                        return p + "//img.youtube.com/vi/" + this.id + "/maxresdefault.jpg"
                    }
                    return t.entry.media$group.media$thumbnail[3].url
                }
            },
            vimeo: {
                reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
                embed: function() {
                    return "http://player.vimeo.com/video/" + this.id
                },
                getUrl: function() {
                    return p + "//vimeo.com/api/v2/video/" + this.id + ".json?callback=?"
                },
                get_thumb: function(t) {
                    return t[0].thumbnail_medium
                },
                get_image: function(t) {
                    return t[0].thumbnail_large
                }
            },
            dailymotion: {
                reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
                embed: function() {
                    return p + "//www.dailymotion.com/embed/video/" + this.id
                },
                getUrl: function() {
                    return "https://api.dailymotion.com/video/" + this.id + "?fields=thumbnail_240_url,thumbnail_720_url&callback=?"
                },
                get_thumb: function(t) {
                    return t.thumbnail_240_url
                },
                get_image: function(t) {
                    return t.thumbnail_720_url
                }
            },
            _inst: []
        },
        I = function(e, i) {
            for (var n = 0; n < C._inst.length; n++) {
                if (C._inst[n].id === i && C._inst[n].type == e) {
                    return C._inst[n]
                }
            }
            this.type = e;
            this.id = i;
            this.readys = [];
            C._inst.push(this);
            var a = this;
            t.extend(this, C[e]);
            t.getJSON(this.getUrl(), function(e) {
                a.data = e;
                t.each(a.readys, function(t, e) {
                    e(a.data)
                });
                a.readys = []
            });
            this.getMedia = function(t, e, i) {
                i = i || m;
                var n = this;
                var a = function(i) {
                    e(n["get_" + t](i))
                };
                try {
                    if (n.data) {
                        a(n.data)
                    } else {
                        n.readys.push(a)
                    }
                } catch (o) {
                    i()
                }
            }
        },
        S = function(t) {
            var e;
            for (var i in C) {
                e = t && C[i].reg && t.match(C[i].reg);
                if (e && e.length) {
                    return {
                        id: e[2],
                        provider: i
                    }
                }
            }
            return false
        },
        A = {
            support: function() {
                var t = _().html;
                return !b && (t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen)
            }(),
            callback: m,
            enter: function(t, e, i) {
                this.instance = t;
                this.callback = e || m;
                i = i || _().html;
                if (i.requestFullscreen) {
                    i.requestFullscreen()
                } else if (i.msRequestFullscreen) {
                    i.msRequestFullscreen()
                } else if (i.mozRequestFullScreen) {
                    i.mozRequestFullScreen()
                } else if (i.webkitRequestFullScreen) {
                    i.webkitRequestFullScreen()
                }
            },
            exit: function(t) {
                this.callback = t || m;
                if (a.exitFullscreen) {
                    a.exitFullscreen()
                } else if (a.msExitFullscreen) {
                    a.msExitFullscreen()
                } else if (a.mozCancelFullScreen) {
                    a.mozCancelFullScreen()
                } else if (a.webkitCancelFullScreen) {
                    a.webkitCancelFullScreen()
                }
            },
            instance: null,
            listen: function() {
                if (!this.support) {
                    return
                }
                var t = function() {
                    if (!A.instance) {
                        return
                    }
                    var t = A.instance._fullscreen;
                    if (a.fullscreen || a.mozFullScreen || a.webkitIsFullScreen || a.msFullscreenElement && a.msFullscreenElement !== null) {
                        t._enter(A.callback)
                    } else {
                        t._exit(A.callback)
                    }
                };
                a.addEventListener("fullscreenchange", t, false);
                a.addEventListener("MSFullscreenChange", t, false);
                a.addEventListener("mozfullscreenchange", t, false);
                a.addEventListener("webkitfullscreenchange", t, false)
            }
        },
        E = [],
        D = [],
        $ = false,
        L = false,
        P = [],
        z = [],
        F = function(e) {
            z.push(e);
            t.each(P, function(t, i) {
                if (i._options.theme == e.name || !i._initialized && !i._options.theme) {
                    i.theme = e;
                    i._init.call(i)
                }
            })
        },
        H = function() {
            return {
                clearTimer: function(e) {
                    t.each(i.get(), function() {
                        this.clearTimer(e)
                    })
                },
                addTimer: function(e) {
                    t.each(i.get(), function() {
                        this.addTimer(e)
                    })
                },
                array: function(t) {
                    return s.slice.call(t, 0)
                },
                create: function(t, e) {
                    e = e || "div";
                    var i = a.createElement(e);
                    i.className = t;
                    return i
                },
                removeFromArray: function(e, i) {
                    t.each(e, function(t, n) {
                        if (n == i) {
                            e.splice(t, 1);
                            return false
                        }
                    });
                    return e
                },
                getScriptPath: function(e) {
                    e = e || t("script:last").attr("src");
                    var i = e.split("/");
                    if (i.length == 1) {
                        return ""
                    }
                    i.pop();
                    return i.join("/") + "/"
                },
                animate: function() {
                    var n = function(t) {
                        var i = "transition WebkitTransition MozTransition OTransition".split(" "),
                            n;
                        if (e.opera) {
                            return false
                        }
                        for (n = 0; i[n]; n++) {
                            if (typeof t[i[n]] !== "undefined") {
                                return i[n]
                            }
                        }
                        return false
                    }((a.body || a.documentElement).style);
                    var o = {
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        WebkitTransition: "webkitTransitionEnd",
                        transition: "transitionend"
                    }[n];
                    var r = {
                        _default: [.25, .1, .25, 1],
                        galleria: [.645, .045, .355, 1],
                        galleriaIn: [.55, .085, .68, .53],
                        galleriaOut: [.25, .46, .45, .94],
                        ease: [.25, 0, .25, 1],
                        linear: [.25, .25, .75, .75],
                        "ease-in": [.42, 0, 1, 1],
                        "ease-out": [0, 0, .58, 1],
                        "ease-in-out": [.42, 0, .58, 1]
                    };
                    var s = function(e, i, n) {
                        var a = {};
                        n = n || "transition";
                        t.each("webkit moz ms o".split(" "), function() {
                            a["-" + this + "-" + n] = i
                        });
                        e.css(a)
                    };
                    var l = function(t) {
                        s(t, "none", "transition");
                        if (i.WEBKIT && i.TOUCH) {
                            s(t, "translate3d(0,0,0)", "transform");
                            if (t.data("revert")) {
                                t.css(t.data("revert"));
                                t.data("revert", null)
                            }
                        }
                    };
                    var c, u, h, f, d, p, g;
                    return function(a, v, y) {
                        y = t.extend({
                            duration: 400,
                            complete: m,
                            stop: false
                        }, y);
                        a = t(a);
                        if (!y.duration) {
                            a.css(v);
                            y.complete.call(a[0]);
                            return
                        }
                        if (!n) {
                            a.animate(v, y);
                            return
                        }
                        if (y.stop) {
                            a.off(o);
                            l(a)
                        }
                        c = false;
                        t.each(v, function(t, e) {
                            g = a.css(t);
                            if (H.parseValue(g) != H.parseValue(e)) {
                                c = true
                            }
                            a.css(t, g)
                        });
                        if (!c) {
                            e.setTimeout(function() {
                                y.complete.call(a[0])
                            }, y.duration);
                            return
                        }
                        u = [];
                        h = y.easing in r ? r[y.easing] : r._default;
                        f = " " + y.duration + "ms" + " cubic-bezier(" + h.join(",") + ")";
                        e.setTimeout(function(e, n, a, o) {
                            return function() {
                                e.one(n, function(t) {
                                    return function() {
                                        l(t);
                                        y.complete.call(t[0])
                                    }
                                }(e));
                                if (i.WEBKIT && i.TOUCH) {
                                    d = {};
                                    p = [0, 0, 0];
                                    t.each(["left", "top"], function(t, i) {
                                        if (i in a) {
                                            p[t] = H.parseValue(a[i]) - H.parseValue(e.css(i)) + "px";
                                            d[i] = a[i];
                                            delete a[i]
                                        }
                                    });
                                    if (p[0] || p[1]) {
                                        e.data("revert", d);
                                        u.push("-webkit-transform" + o);
                                        s(e, "translate3d(" + p.join(",") + ")", "transform")
                                    }
                                }
                                t.each(a, function(t, e) {
                                    u.push(t + o)
                                });
                                s(e, u.join(","));
                                e.css(a)
                            }
                        }(a, o, v, f), 2)
                    }
                }(),
                removeAlpha: function(t) {
                    if (t instanceof jQuery) {
                        t = t[0]
                    }
                    if (y < 9 && t) {
                        var e = t.style,
                            i = t.currentStyle,
                            n = i && i.filter || e.filter || "";
                        if (/alpha/.test(n)) {
                            e.filter = n.replace(/alpha\([^)]*\)/i, "")
                        }
                    }
                },
                forceStyles: function(e, i) {
                    e = t(e);
                    if (e.attr("style")) {
                        e.data("styles", e.attr("style")).removeAttr("style")
                    }
                    e.css(i)
                },
                revertStyles: function() {
                    t.each(H.array(arguments), function(e, i) {
                        i = t(i);
                        i.removeAttr("style");
                        i.attr("style", "");
                        if (i.data("styles")) {
                            i.attr("style", i.data("styles")).data("styles", null)
                        }
                    })
                },
                moveOut: function(t) {
                    H.forceStyles(t, {
                        position: "absolute",
                        left: -1e4
                    })
                },
                moveIn: function() {
                    H.revertStyles.apply(H, H.array(arguments))
                },
                hide: function(e, i, n) {
                    n = n || m;
                    var a = t(e);
                    e = a[0];
                    if (!a.data("opacity")) {
                        a.data("opacity", a.css("opacity"))
                    }
                    var o = {
                        opacity: 0
                    };
                    if (i) {
                        var r = y < 9 && e ? function() {
                            H.removeAlpha(e);
                            e.style.visibility = "hidden";
                            n.call(e)
                        } : n;
                        H.animate(e, o, {
                            duration: i,
                            complete: r,
                            stop: true
                        })
                    } else {
                        if (y < 9 && e) {
                            H.removeAlpha(e);
                            e.style.visibility = "hidden"
                        } else {
                            a.css(o)
                        }
                    }
                },
                show: function(e, i, n) {
                    n = n || m;
                    var a = t(e);
                    e = a[0];
                    var o = parseFloat(a.data("opacity")) || 1,
                        r = {
                            opacity: o
                        };
                    if (i) {
                        if (y < 9) {
                            a.css("opacity", 0);
                            e.style.visibility = "visible"
                        }
                        var s = y < 9 && e ? function() {
                            if (r.opacity == 1) {
                                H.removeAlpha(e)
                            }
                            n.call(e)
                        } : n;
                        H.animate(e, r, {
                            duration: i,
                            complete: s,
                            stop: true
                        })
                    } else {
                        if (y < 9 && r.opacity == 1 && e) {
                            H.removeAlpha(e);
                            e.style.visibility = "visible"
                        } else {
                            a.css(r)
                        }
                    }
                },
                wait: function(n) {
                    i._waiters = i._waiters || [];
                    n = t.extend({
                        until: v,
                        success: m,
                        error: function() {
                            i.raise("Could not complete wait function.")
                        },
                        timeout: 3e3
                    }, n);
                    var a = H.timestamp(),
                        o, r, s, l = function() {
                            r = H.timestamp();
                            o = r - a;
                            H.removeFromArray(i._waiters, s);
                            if (n.until(o)) {
                                n.success();
                                return false
                            }
                            if (typeof n.timeout == "number" && r >= a + n.timeout) {
                                n.error();
                                return false
                            }
                            i._waiters.push(s = e.setTimeout(l, 10))
                        };
                    i._waiters.push(s = e.setTimeout(l, 10))
                },
                toggleQuality: function(t, e) {
                    if (y !== 7 && y !== 8 || !t || t.nodeName.toUpperCase() != "IMG") {
                        return
                    }
                    if (typeof e === "undefined") {
                        e = t.style.msInterpolationMode === "nearest-neighbor"
                    }
                    t.style.msInterpolationMode = e ? "bicubic" : "nearest-neighbor"
                },
                insertStyleTag: function(e, i) {
                    if (i && t("#" + i).length) {
                        return
                    }
                    var n = a.createElement("style");
                    if (i) {
                        n.id = i
                    }
                    _().head.appendChild(n);
                    if (n.styleSheet) {
                        n.styleSheet.cssText = e
                    } else {
                        var o = a.createTextNode(e);
                        n.appendChild(o)
                    }
                },
                loadScript: function(e, i) {
                    var n = false,
                        a = t("<scr" + "ipt>").attr({
                            src: e,
                            async: true
                        }).get(0);
                    a.onload = a.onreadystatechange = function() {
                        if (!n && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            n = true;
                            a.onload = a.onreadystatechange = null;
                            if (typeof i === "function") {
                                i.call(this, this)
                            }
                        }
                    };
                    _().head.appendChild(a)
                },
                parseValue: function(t) {
                    if (typeof t === "number") {
                        return t
                    } else if (typeof t === "string") {
                        var e = t.match(/\-?\d|\./g);
                        return e && e.constructor === Array ? e.join("") * 1 : 0
                    } else {
                        return 0
                    }
                },
                timestamp: function() {
                    return (new Date).getTime()
                },
                loadCSS: function(e, o, r) {
                    var s, l;
                    t("link[rel=stylesheet]").each(function() {
                        if (new RegExp(e).test(this.href)) {
                            s = this;
                            return false
                        }
                    });
                    if (typeof o === "function") {
                        r = o;
                        o = n
                    }
                    r = r || m;
                    if (s) {
                        r.call(s, s);
                        return s
                    }
                    l = a.styleSheets.length;
                    if (t("#" + o).length) {
                        t("#" + o).attr("href", e);
                        l--
                    } else {
                        s = t("<link>").attr({
                            rel: "stylesheet",
                            href: e,
                            id: o
                        }).get(0);
                        var c = t('link[rel="stylesheet"], style');
                        if (c.length) {
                            c.get(0).parentNode.insertBefore(s, c[0])
                        } else {
                            _().head.appendChild(s)
                        }
                        if (y && l >= 31) {
                            i.raise("You have reached the browser stylesheet limit (31)", true);
                            return
                        }
                    }
                    if (typeof r === "function") {
                        var u = t("<s>").attr("id", "galleria-loader").hide().appendTo(_().body);
                        H.wait({
                            until: function() {
                                return u.height() == 1
                            },
                            success: function() {
                                u.remove();
                                r.call(s, s)
                            },
                            error: function() {
                                u.remove();
                                i.raise("Theme CSS could not load after 20 sec. " + (i.QUIRK ? "Your browser is in Quirks Mode, please add a correct doctype." : "Please download the latest theme at http://galleria.io/customer/."), true)
                            },
                            timeout: 5e3
                        })
                    }
                    return s
                }
            }
        }(),
        O = function(e) {
            var i = ".galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;" + "margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}" + ".galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;" + "border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}";
            H.insertStyleTag(i, "galleria-videoicon");
            return t(H.create("galleria-videoicon")).html("<i></i>").appendTo(e).click(function() {
                t(this).siblings("img").mouseup()
            })
        },
        M = function() {
            var e = function(e, i, n, a) {
                var o = this.getOptions("easing"),
                    r = this.getStageWidth(),
                    s = {
                        left: r * (e.rewind ? -1 : 1)
                    },
                    l = {
                        left: 0
                    };
                if (n) {
                    s.opacity = 0;
                    l.opacity = 1
                } else {
                    s.opacity = 1
                }
                t(e.next).css(s);
                H.animate(e.next, l, {
                    duration: e.speed,
                    complete: function(t) {
                        return function() {
                            i();
                            t.css({
                                left: 0
                            })
                        }
                    }(t(e.next).add(e.prev)),
                    queue: false,
                    easing: o
                });
                if (a) {
                    e.rewind = !e.rewind
                }
                if (e.prev) {
                    s = {
                        left: 0
                    };
                    l = {
                        left: r * (e.rewind ? 1 : -1)
                    };
                    if (n) {
                        s.opacity = 1;
                        l.opacity = 0
                    }
                    t(e.prev).css(s);
                    H.animate(e.prev, l, {
                        duration: e.speed,
                        queue: false,
                        easing: o,
                        complete: function() {
                            t(this).css("opacity", 0)
                        }
                    })
                }
            };
            return {
                active: false,
                init: function(t, e, i) {
                    if (M.effects.hasOwnProperty(t)) {
                        M.effects[t].call(this, e, i)
                    }
                },
                effects: {
                    fade: function(e, i) {
                        t(e.next).css({
                            opacity: 0,
                            left: 0
                        });
                        H.animate(e.next, {
                            opacity: 1
                        }, {
                            duration: e.speed,
                            complete: i
                        });
                        if (e.prev) {
                            t(e.prev).css("opacity", 1).show();
                            H.animate(e.prev, {
                                opacity: 0
                            }, {
                                duration: e.speed
                            })
                        }
                    },
                    flash: function(e, i) {
                        t(e.next).css({
                            opacity: 0,
                            left: 0
                        });
                        if (e.prev) {
                            H.animate(e.prev, {
                                opacity: 0
                            }, {
                                duration: e.speed / 2,
                                complete: function() {
                                    H.animate(e.next, {
                                        opacity: 1
                                    }, {
                                        duration: e.speed,
                                        complete: i
                                    })
                                }
                            })
                        } else {
                            H.animate(e.next, {
                                opacity: 1
                            }, {
                                duration: e.speed,
                                complete: i
                            })
                        }
                    },
                    pulse: function(e, i) {
                        if (e.prev) {
                            t(e.prev).hide()
                        }
                        t(e.next).css({
                            opacity: 0,
                            left: 0
                        }).show();
                        H.animate(e.next, {
                            opacity: 1
                        }, {
                            duration: e.speed,
                            complete: i
                        })
                    },
                    slide: function(t, i) {
                        e.apply(this, H.array(arguments))
                    },
                    fadeslide: function(t, i) {
                        e.apply(this, H.array(arguments).concat([true]))
                    },
                    doorslide: function(t, i) {
                        e.apply(this, H.array(arguments).concat([false, true]))
                    }
                }
            }
        }();
    A.listen();
    t.event.special["click:fast"] = {
        propagate: true,
        add: function(i) {
            var n = function(t) {
                if (t.touches && t.touches.length) {
                    var e = t.touches[0];
                    return {
                        x: e.pageX,
                        y: e.pageY
                    }
                }
            };
            var a = {
                touched: false,
                touchdown: false,
                coords: {
                    x: 0,
                    y: 0
                },
                evObj: {}
            };
            t(this).data({
                clickstate: a,
                timer: 0
            }).on("touchstart.fast", function(i) {
                e.clearTimeout(t(this).data("timer"));
                t(this).data("clickstate", {
                    touched: true,
                    touchdown: true,
                    coords: n(i.originalEvent),
                    evObj: i
                })
            }).on("touchmove.fast", function(e) {
                var i = n(e.originalEvent),
                    a = t(this).data("clickstate"),
                    o = Math.max(Math.abs(a.coords.x - i.x), Math.abs(a.coords.y - i.y));
                if (o > 6) {
                    t(this).data("clickstate", t.extend(a, {
                        touchdown: false
                    }))
                }
            }).on("touchend.fast", function(n) {
                var o = t(this),
                    r = o.data("clickstate");
                if (r.touchdown) {
                    i.handler.call(this, n)
                }
                o.data("timer", e.setTimeout(function() {
                    o.data("clickstate", a)
                }, 400))
            }).on("click.fast", function(e) {
                var n = t(this).data("clickstate");
                if (n.touched) {
                    return false
                }
                t(this).data("clickstate", a);
                i.handler.call(this, e)
            })
        },
        remove: function() {
            t(this).off("touchstart.fast touchmove.fast touchend.fast click.fast")
        }
    };
    r.on("orientationchange", function() {
        t(this).resize()
    });
    i = function() {
        var s = this;
        this._options = {};
        this._playing = false;
        this._playtime = 5e3;
        this._active = null;
        this._queue = {
            length: 0
        };
        this._data = [];
        this._dom = {};
        this._thumbnails = [];
        this._layers = [];
        this._initialized = false;
        this._firstrun = false;
        this._stageWidth = 0;
        this._stageHeight = 0;
        this._target = n;
        this._binds = [];
        this._id = parseInt(g.random() * 1e4, 10);
        var l = "container stage images image-nav image-nav-left image-nav-right " + "info info-text info-title info-description " + "thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right " + "loader counter tooltip",
            c = "current total";
        t.each(l.split(" "), function(t, e) {
            s._dom[e] = H.create("galleria-" + e)
        });
        t.each(c.split(" "), function(t, e) {
            s._dom[e] = H.create("galleria-" + e, "span")
        });
        var u = this._keyboard = {
            keys: {
                UP: 38,
                DOWN: 40,
                LEFT: 37,
                RIGHT: 39,
                RETURN: 13,
                ESCAPE: 27,
                BACKSPACE: 8,
                SPACE: 32
            },
            map: {},
            bound: false,
            press: function(t) {
                var e = t.keyCode || t.which;
                if (e in u.map && typeof u.map[e] === "function") {
                    u.map[e].call(s, t)
                }
            },
            attach: function(t) {
                var e, i;
                for (e in t) {
                    if (t.hasOwnProperty(e)) {
                        i = e.toUpperCase();
                        if (i in u.keys) {
                            u.map[u.keys[i]] = t[e]
                        } else {
                            u.map[i] = t[e]
                        }
                    }
                }
                if (!u.bound) {
                    u.bound = true;
                    o.on("keydown", u.press)
                }
            },
            detach: function() {
                u.bound = false;
                u.map = {};
                o.off("keydown", u.press)
            }
        };
        var h = this._controls = {
            0: n,
            1: n,
            active: 0,
            swap: function() {
                h.active = h.active ? 0 : 1
            },
            getActive: function() {
                return s._options.swipe ? h.slides[s._active] : h[h.active]
            },
            getNext: function() {
                return s._options.swipe ? h.slides[s.getNext(s._active)] : h[1 - h.active]
            },
            slides: [],
            frames: [],
            layers: []
        };
        var d = this._carousel = {
            next: s.$("thumb-nav-right"),
            prev: s.$("thumb-nav-left"),
            width: 0,
            current: 0,
            max: 0,
            hooks: [],
            update: function() {
                var e = 0,
                    i = 0,
                    n = [0];
                t.each(s._thumbnails, function(a, o) {
                    if (o.ready) {
                        e += o.outerWidth || t(o.container).outerWidth(true);
                        var r = t(o.container).width();
                        e += r - g.floor(r);
                        n[a + 1] = e;
                        i = g.max(i, o.outerHeight || t(o.container).outerHeight(true))
                    }
                });
                s.$("thumbnails").css({
                    width: e,
                    height: i
                });
                d.max = e;
                d.hooks = n;
                d.width = s.$("thumbnails-list").width();
                d.setClasses();
                s.$("thumbnails-container").toggleClass("galleria-carousel", e > d.width);
                d.width = s.$("thumbnails-list").width()
            },
            bindControls: function() {
                var t;
                d.next.on("click:fast", function(e) {
                    e.preventDefault();
                    if (s._options.carouselSteps === "auto") {
                        for (t = d.current; t < d.hooks.length; t++) {
                            if (d.hooks[t] - d.hooks[d.current] > d.width) {
                                d.set(t - 2);
                                break
                            }
                        }
                    } else {
                        d.set(d.current + s._options.carouselSteps)
                    }
                });
                d.prev.on("click:fast", function(e) {
                    e.preventDefault();
                    if (s._options.carouselSteps === "auto") {
                        for (t = d.current; t >= 0; t--) {
                            if (d.hooks[d.current] - d.hooks[t] > d.width) {
                                d.set(t + 2);
                                break
                            } else if (t === 0) {
                                d.set(0);
                                break
                            }
                        }
                    } else {
                        d.set(d.current - s._options.carouselSteps)
                    }
                })
            },
            set: function(t) {
                t = g.max(t, 0);
                while (d.hooks[t - 1] + d.width >= d.max && t >= 0) {
                    t--
                }
                d.current = t;
                d.animate()
            },
            getLast: function(t) {
                return (t || d.current) - 1
            },
            follow: function(t) {
                if (t === 0 || t === d.hooks.length - 2) {
                    d.set(t);
                    return
                }
                var e = d.current;
                while (d.hooks[e] - d.hooks[d.current] < d.width && e <= d.hooks.length) {
                    e++
                }
                if (t - 1 < d.current) {
                    d.set(t - 1)
                } else if (t + 2 > e) {
                    d.set(t - e + d.current + 2)
                }
            },
            setClasses: function() {
                d.prev.toggleClass("disabled", !d.current);
                d.next.toggleClass("disabled", d.hooks[d.current] + d.width >= d.max)
            },
            animate: function(e) {
                d.setClasses();
                var i = d.hooks[d.current] * -1;
                if (isNaN(i)) {
                    return
                }
                s.$("thumbnails").css("left", function() {
                    return t(this).css("left")
                });
                H.animate(s.get("thumbnails"), {
                    left: i
                }, {
                    duration: s._options.carouselSpeed,
                    easing: s._options.easing,
                    queue: false
                })
            }
        };
        var p = this._tooltip = {
            initialized: false,
            open: false,
            timer: "tooltip" + s._id,
            swapTimer: "swap" + s._id,
            init: function() {
                p.initialized = true;
                var t = ".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;" + "opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";
                H.insertStyleTag(t, "galleria-tooltip");
                s.$("tooltip").css({
                    opacity: .8,
                    visibility: "visible",
                    display: "none"
                })
            },
            move: function(t) {
                var e = s.getMousePosition(t).x,
                    i = s.getMousePosition(t).y,
                    n = s.$("tooltip"),
                    a = e,
                    o = i,
                    r = n.outerHeight(true) + 1,
                    l = n.outerWidth(true),
                    c = r + 15;
                var u = s.$("container").width() - l - 2,
                    h = s.$("container").height() - r - 2;
                if (!isNaN(a) && !isNaN(o)) {
                    a += 10;
                    o -= r + 8;
                    a = g.max(0, g.min(u, a));
                    o = g.max(0, g.min(h, o));
                    if (i < c) {
                        o = c
                    }
                    n.css({
                        left: a,
                        top: o
                    })
                }
            },
            bind: function(e, n) {
                if (i.TOUCH) {
                    return
                }
                if (!p.initialized) {
                    p.init()
                }
                var a = function() {
                    s.$("container").off("mousemove", p.move);
                    s.clearTimer(p.timer);
                    s.$("tooltip").stop().animate({
                        opacity: 0
                    }, 200, function() {
                        s.$("tooltip").hide();
                        s.addTimer(p.swapTimer, function() {
                            p.open = false
                        }, 1e3)
                    })
                };
                var o = function(e, i) {
                    p.define(e, i);
                    t(e).hover(function() {
                        s.clearTimer(p.swapTimer);
                        s.$("container").off("mousemove", p.move).on("mousemove", p.move).trigger("mousemove");
                        p.show(e);
                        s.addTimer(p.timer, function() {
                            s.$("tooltip").stop().show().animate({
                                opacity: 1
                            });
                            p.open = true
                        }, p.open ? 0 : 500)
                    }, a).click(a)
                };
                if (typeof n === "string") {
                    o(e in s._dom ? s.get(e) : e, n)
                } else {
                    t.each(e, function(t, e) {
                        o(s.get(t), e)
                    })
                }
            },
            show: function(i) {
                i = t(i in s._dom ? s.get(i) : i);
                var n = i.data("tt"),
                    a = function(t) {
                        e.setTimeout(function(t) {
                            return function() {
                                p.move(t)
                            }
                        }(t), 10);
                        i.off("mouseup", a)
                    };
                n = typeof n === "function" ? n() : n;
                if (!n) {
                    return
                }
                s.$("tooltip").html(n.replace(/\s/, "&#160;"));
                i.on("mouseup", a)
            },
            define: function(e, i) {
                if (typeof i !== "function") {
                    var n = i;
                    i = function() {
                        return n
                    }
                }
                e = t(e in s._dom ? s.get(e) : e).data("tt", i);
                p.show(e)
            }
        };
        var m = this._fullscreen = {
            scrolled: 0,
            crop: n,
            active: false,
            prev: t(),
            beforeEnter: function(t) {
                t()
            },
            beforeExit: function(t) {
                t()
            },
            keymap: s._keyboard.map,
            parseCallback: function(e, i) {
                return M.active ? function() {
                    if (typeof e == "function") {
                        e.call(s)
                    }
                    var n = s._controls.getActive(),
                        a = s._controls.getNext();
                    s._scaleImage(a);
                    s._scaleImage(n);
                    if (i && s._options.trueFullscreen) {
                        t(n.container).add(a.container).trigger("transitionend")
                    }
                } : e
            },
            enter: function(t) {
                m.beforeEnter(function() {
                    t = m.parseCallback(t, true);
                    if (s._options.trueFullscreen && A.support) {
                        m.active = true;
                        H.forceStyles(s.get("container"), {
                            width: "100%",
                            height: "100%"
                        });
                        s.rescale();
                        if (i.MAC) {
                            if (!(i.SAFARI && /version\/[1-5]/.test(f))) {
                                s.$("container").css("opacity", 0).addClass("fullscreen");
                                e.setTimeout(function() {
                                    m.scale();
                                    s.$("container").css("opacity", 1)
                                }, 50)
                            } else {
                                s.$("stage").css("opacity", 0);
                                e.setTimeout(function() {
                                    m.scale();
                                    s.$("stage").css("opacity", 1)
                                }, 4)
                            }
                        } else {
                            s.$("container").addClass("fullscreen")
                        }
                        r.resize(m.scale);
                        A.enter(s, t, s.get("container"))
                    } else {
                        m.scrolled = r.scrollTop();
                        if (!i.TOUCH) {
                            e.scrollTo(0, 0)
                        }
                        m._enter(t)
                    }
                })
            },
            _enter: function(o) {
                m.active = true;
                if (b) {
                    m.iframe = function() {
                        var n, o = a.referrer,
                            r = a.createElement("a"),
                            s = e.location;
                        r.href = o;
                        if (r.protocol != s.protocol || r.hostname != s.hostname || r.port != s.port) {
                            i.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match.");
                            return false
                        }
                        m.pd = e.parent.document;
                        t(m.pd).find("iframe").each(function() {
                            var t = this.contentDocument || this.contentWindow.document;
                            if (t === a) {
                                n = this;
                                return false
                            }
                        });
                        return n
                    }()
                }
                H.hide(s.getActiveImage());
                if (b && m.iframe) {
                    m.iframe.scrolled = t(e.parent).scrollTop();
                    e.parent.scrollTo(0, 0)
                }
                var l = s.getData(),
                    c = s._options,
                    u = !s._options.trueFullscreen || !A.support,
                    h = {
                        height: "100%",
                        overflow: "hidden",
                        margin: 0,
                        padding: 0
                    };
                if (u) {
                    s.$("container").addClass("fullscreen");
                    m.prev = s.$("container").prev();
                    if (!m.prev.length) {
                        m.parent = s.$("container").parent()
                    }
                    s.$("container").appendTo("body");
                    H.forceStyles(s.get("container"), {
                        position: i.TOUCH ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1e4
                    });
                    H.forceStyles(_().html, h);
                    H.forceStyles(_().body, h)
                }
                if (b && m.iframe) {
                    H.forceStyles(m.pd.documentElement, h);
                    H.forceStyles(m.pd.body, h);
                    H.forceStyles(m.iframe, t.extend(h, {
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        position: "fixed",
                        zIndex: 1e4,
                        border: "none"
                    }))
                }
                m.keymap = t.extend({}, s._keyboard.map);
                s.attachKeyboard({
                    escape: s.exitFullscreen,
                    right: s.next,
                    left: s.prev
                });
                m.crop = c.imageCrop;
                if (c.fullscreenCrop != n) {
                    c.imageCrop = c.fullscreenCrop
                }
                if (l && l.big && l.image !== l.big) {
                    var f = new i.Picture,
                        d = f.isCached(l.big),
                        p = s.getIndex(),
                        g = s._thumbnails[p];
                    s.trigger({
                        type: i.LOADSTART,
                        cached: d,
                        rewind: false,
                        index: p,
                        imageTarget: s.getActiveImage(),
                        thumbTarget: g,
                        galleriaData: l
                    });
                    f.load(l.big, function(e) {
                        s._scaleImage(e, {
                            complete: function(e) {
                                s.trigger({
                                    type: i.LOADFINISH,
                                    cached: d,
                                    index: p,
                                    rewind: false,
                                    imageTarget: e.image,
                                    thumbTarget: g
                                });
                                var n = s._controls.getActive().image;
                                if (n) {
                                    t(n).width(e.image.width).height(e.image.height).attr("style", t(e.image).attr("style")).attr("src", e.image.src)
                                }
                            }
                        })
                    });
                    var v = s.getNext(p),
                        y = new i.Picture,
                        w = s.getData(v);
                    y.preload(s.isFullscreen() && w.big ? w.big : w.image)
                }
                s.rescale(function() {
                    s.addTimer(false, function() {
                        if (u) {
                            H.show(s.getActiveImage())
                        }
                        if (typeof o === "function") {
                            o.call(s)
                        }
                        s.rescale()
                    }, 100);
                    s.trigger(i.FULLSCREEN_ENTER)
                });
                if (!u) {
                    H.show(s.getActiveImage())
                } else {
                    r.resize(m.scale)
                }
            },
            scale: function() {
                s.rescale()
            },
            exit: function(t) {
                m.beforeExit(function() {
                    t = m.parseCallback(t);
                    if (s._options.trueFullscreen && A.support) {
                        A.exit(t)
                    } else {
                        m._exit(t)
                    }
                })
            },
            _exit: function(t) {
                m.active = false;
                var n = !s._options.trueFullscreen || !A.support,
                    a = s.$("container").removeClass("fullscreen");
                if (m.parent) {
                    m.parent.prepend(a)
                } else {
                    a.insertAfter(m.prev)
                }
                if (n) {
                    H.hide(s.getActiveImage());
                    H.revertStyles(s.get("container"), _().html, _().body);
                    if (!i.TOUCH) {
                        e.scrollTo(0, m.scrolled)
                    }
                    var o = s._controls.frames[s._controls.active];
                    if (o && o.image) {
                        o.image.src = o.image.src
                    }
                }
                if (b && m.iframe) {
                    H.revertStyles(m.pd.documentElement, m.pd.body, m.iframe);
                    if (m.iframe.scrolled) {
                        e.parent.scrollTo(0, m.iframe.scrolled)
                    }
                }
                s.detachKeyboard();
                s.attachKeyboard(m.keymap);
                s._options.imageCrop = m.crop;
                var l = s.getData().big,
                    c = s._controls.getActive().image;
                if (!s.getData().iframe && c && l && l == c.src) {
                    e.setTimeout(function(t) {
                        return function() {
                            c.src = t
                        }
                    }(s.getData().image), 1)
                }
                s.rescale(function() {
                    s.addTimer(false, function() {
                        if (n) {
                            H.show(s.getActiveImage())
                        }
                        if (typeof t === "function") {
                            t.call(s)
                        }
                        r.trigger("resize")
                    }, 50);
                    s.trigger(i.FULLSCREEN_EXIT)
                });
                r.off("resize", m.scale)
            }
        };
        var v = this._idle = {
            trunk: [],
            bound: false,
            active: false,
            add: function(e, n, a, o) {
                if (!e || i.TOUCH) {
                    return
                }
                if (!v.bound) {
                    v.addEvent()
                }
                e = t(e);
                if (typeof a == "boolean") {
                    o = a;
                    a = {}
                }
                a = a || {};
                var r = {},
                    s;
                for (s in n) {
                    if (n.hasOwnProperty(s)) {
                        r[s] = e.css(s)
                    }
                }
                e.data("idle", {
                    from: t.extend(r, a),
                    to: n,
                    complete: true,
                    busy: false
                });
                if (!o) {
                    v.addTimer()
                } else {
                    e.css(n)
                }
                v.trunk.push(e)
            },
            remove: function(e) {
                e = t(e);
                t.each(v.trunk, function(t, i) {
                    if (i && i.length && !i.not(e).length) {
                        e.css(e.data("idle").from);
                        v.trunk.splice(t, 1)
                    }
                });
                if (!v.trunk.length) {
                    v.removeEvent();
                    s.clearTimer(v.timer)
                }
            },
            addEvent: function() {
                v.bound = true;
                s.$("container").on("mousemove click", v.showAll);
                if (s._options.idleMode == "hover") {
                    s.$("container").on("mouseleave", v.hide)
                }
            },
            removeEvent: function() {
                v.bound = false;
                s.$("container").on("mousemove click", v.showAll);
                if (s._options.idleMode == "hover") {
                    s.$("container").off("mouseleave", v.hide)
                }
            },
            addTimer: function() {
                if (s._options.idleMode == "hover") {
                    return
                }
                s.addTimer("idle", function() {
                    v.hide()
                }, s._options.idleTime)
            },
            hide: function() {
                if (!s._options.idleMode || s.getIndex() === false) {
                    return
                }
                s.trigger(i.IDLE_ENTER);
                var e = v.trunk.length;
                t.each(v.trunk, function(t, i) {
                    var n = i.data("idle");
                    if (!n) {
                        return
                    }
                    i.data("idle").complete = false;
                    H.animate(i, n.to, {
                        duration: s._options.idleSpeed,
                        complete: function() {
                            if (t == e - 1) {
                                v.active = false
                            }
                        }
                    })
                })
            },
            showAll: function() {
                s.clearTimer("idle");
                t.each(v.trunk, function(t, e) {
                    v.show(e)
                })
            },
            show: function(e) {
                var n = e.data("idle");
                if (!v.active || !n.busy && !n.complete) {
                    n.busy = true;
                    s.trigger(i.IDLE_EXIT);
                    s.clearTimer("idle");
                    H.animate(e, n.from, {
                        duration: s._options.idleSpeed / 2,
                        complete: function() {
                            v.active = true;
                            t(e).data("idle").busy = false;
                            t(e).data("idle").complete = true
                        }
                    })
                }
                v.addTimer()
            }
        };
        var w = this._lightbox = {
            width: 0,
            height: 0,
            initialized: false,
            active: null,
            image: null,
            elems: {},
            keymap: false,
            init: function() {
                if (w.initialized) {
                    return
                }
                w.initialized = true;
                var e = "overlay box content shadow title info close prevholder prev nextholder next counter image",
                    n = {},
                    a = s._options,
                    o = "",
                    r = "position:absolute;",
                    l = "lightbox-",
                    c = {
                        overlay: "position:fixed;display:none;opacity:" + a.overlayOpacity + ";filter:alpha(opacity=" + a.overlayOpacity * 100 + ");top:0;left:0;width:100%;height:100%;background:" + a.overlayBackground + ";z-index:99990",
                        box: "position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",
                        shadow: r + "background:#000;width:100%;height:100%;",
                        content: r + "background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",
                        info: r + "bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",
                        close: r + "top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",
                        image: r + "top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",
                        prevholder: r + "width:50%;top:0;bottom:40px;cursor:pointer;",
                        nextholder: r + "width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",
                        prev: r + "top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",
                        next: r + "top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
                        title: "float:left",
                        counter: "float:right;margin-left:8px;"
                    },
                    u = function(e) {
                        return e.hover(function() {
                            t(this).css("color", "#bbb")
                        }, function() {
                            t(this).css("color", "#444")
                        })
                    },
                    h = {};
                var f = "";
                if (y > 7) {
                    f = y < 9 ? "background:#000;filter:alpha(opacity=0);" : "background:rgba(0,0,0,0);"
                } else {
                    f = "z-index:99999"
                }
                c.nextholder += f;
                c.prevholder += f;
                t.each(c, function(t, e) {
                    o += ".galleria-" + l + t + "{" + e + "}"
                });
                o += ".galleria-" + l + "box.iframe .galleria-" + l + "prevholder," + ".galleria-" + l + "box.iframe .galleria-" + l + "nextholder{" + "width:100px;height:100px;top:50%;margin-top:-70px}";
                H.insertStyleTag(o, "galleria-lightbox");
                t.each(e.split(" "), function(t, e) {
                    s.addElement("lightbox-" + e);
                    n[e] = w.elems[e] = s.get("lightbox-" + e)
                });
                w.image = new i.Picture;
                t.each({
                    box: "shadow content close prevholder nextholder",
                    info: "title counter",
                    content: "info image",
                    prevholder: "prev",
                    nextholder: "next"
                }, function(e, i) {
                    var n = [];
                    t.each(i.split(" "), function(t, e) {
                        n.push(l + e)
                    });
                    h[l + e] = n
                });
                s.append(h);
                t(n.image).append(w.image.container);
                t(_().body).append(n.overlay, n.box);
                u(t(n.close).on("click:fast", w.hide).html("&#215;"));
                t.each(["Prev", "Next"], function(e, a) {
                    var o = t(n[a.toLowerCase()]).html(/v/.test(a) ? "&#8249;&#160;" : "&#160;&#8250;"),
                        r = t(n[a.toLowerCase() + "holder"]);
                    r.on("click:fast", function() {
                        w["show" + a]()
                    });
                    if (y < 8 || i.TOUCH) {
                        o.show();
                        return
                    }
                    r.hover(function() {
                        o.show()
                    }, function(t) {
                        o.stop().fadeOut(200)
                    })
                });
                t(n.overlay).on("click:fast", w.hide);
                if (i.IPAD) {
                    s._options.lightboxTransitionSpeed = 0
                }
            },
            rescale: function(e) {
                var n = g.min(r.width() - 40, w.width),
                    a = g.min(r.height() - 60, w.height),
                    o = g.min(n / w.width, a / w.height),
                    l = g.round(w.width * o) + 40,
                    c = g.round(w.height * o) + 60,
                    u = {
                        width: l,
                        height: c,
                        "margin-top": g.ceil(c / 2) * -1,
                        "margin-left": g.ceil(l / 2) * -1
                    };
                if (e) {
                    t(w.elems.box).css(u)
                } else {
                    t(w.elems.box).animate(u, {
                        duration: s._options.lightboxTransitionSpeed,
                        easing: s._options.easing,
                        complete: function() {
                            var e = w.image,
                                n = s._options.lightboxFadeSpeed;
                            s.trigger({
                                type: i.LIGHTBOX_IMAGE,
                                imageTarget: e.image
                            });
                            t(e.container).show();
                            t(e.image).animate({
                                opacity: 1
                            }, n);
                            H.show(w.elems.info, n)
                        }
                    })
                }
            },
            hide: function() {
                w.image.image = null;
                r.off("resize", w.rescale);
                t(w.elems.box).hide().find("iframe").remove();
                H.hide(w.elems.info);
                s.detachKeyboard();
                s.attachKeyboard(w.keymap);
                w.keymap = false;
                H.hide(w.elems.overlay, 200, function() {
                    t(this).hide().css("opacity", s._options.overlayOpacity);
                    s.trigger(i.LIGHTBOX_CLOSE)
                })
            },
            showNext: function() {
                w.show(s.getNext(w.active))
            },
            showPrev: function() {
                w.show(s.getPrev(w.active))
            },
            show: function(n) {
                w.active = n = typeof n === "number" ? n : s.getIndex() || 0;
                if (!w.initialized) {
                    w.init()
                }
                s.trigger(i.LIGHTBOX_OPEN);
                if (!w.keymap) {
                    w.keymap = t.extend({}, s._keyboard.map);
                    s.attachKeyboard({
                        escape: w.hide,
                        right: w.showNext,
                        left: w.showPrev
                    })
                }
                r.off("resize", w.rescale);
                var a = s.getData(n),
                    o = s.getDataLength(),
                    l = s.getNext(n),
                    c, u, h;
                H.hide(w.elems.info);
                try {
                    for (h = s._options.preload; h > 0; h--) {
                        u = new i.Picture;
                        c = s.getData(l);
                        u.preload(c.big ? c.big : c.image);
                        l = s.getNext(l)
                    }
                } catch (f) {}
                w.image.isIframe = a.iframe && !a.image;
                t(w.elems.box).toggleClass("iframe", w.image.isIframe);
                t(w.image.container).find(".galleria-videoicon").remove();
                w.image.load(a.big || a.image || a.iframe, function(i) {
                    if (i.isIframe) {
                        var l = t(e).width(),
                            c = t(e).height();
                        if (i.video && s._options.maxVideoSize) {
                            var u = g.min(s._options.maxVideoSize / l, s._options.maxVideoSize / c);
                            if (u < 1) {
                                l *= u;
                                c *= u
                            }
                        }
                        w.width = l;
                        w.height = c
                    } else {
                        w.width = i.original.width;
                        w.height = i.original.height
                    }
                    t(i.image).css({
                        width: i.isIframe ? "100%" : "100.1%",
                        height: i.isIframe ? "100%" : "100.1%",
                        top: 0,
                        bottom: 0,
                        zIndex: 99998,
                        opacity: 0,
                        visibility: "visible"
                    }).parent().height("100%");
                    w.elems.title.innerHTML = a.title || "";
                    w.elems.counter.innerHTML = n + 1 + " / " + o;
                    r.resize(w.rescale);
                    w.rescale();
                    if (a.image && a.iframe) {
                        t(w.elems.box).addClass("iframe");
                        if (a.video) {
                            var h = O(i.container).hide();
                            e.setTimeout(function() {
                                h.fadeIn(200)
                            }, 200)
                        }
                        t(i.image).css("cursor", "pointer").mouseup(function(e, i) {
                            return function(n) {
                                t(w.image.container).find(".galleria-videoicon").remove();
                                n.preventDefault();
                                i.isIframe = true;
                                i.load(e.iframe + (e.video ? "&autoplay=1" : ""), {
                                    width: "100%",
                                    height: y < 8 ? t(w.image.container).height() : "100%"
                                })
                            }
                        }(a, i))
                    }
                });
                t(w.elems.overlay).show().css("visibility", "visible");
                t(w.elems.box).show()
            }
        };
        var x = this._timer = {
            trunk: {},
            add: function(t, i, n, a) {
                t = t || (new Date).getTime();
                a = a || false;
                this.clear(t);
                if (a) {
                    var o = i;
                    i = function() {
                        o();
                        x.add(t, i, n)
                    }
                }
                this.trunk[t] = e.setTimeout(i, n)
            },
            clear: function(t) {
                var i = function(t) {
                        e.clearTimeout(this.trunk[t]);
                        delete this.trunk[t]
                    },
                    n;
                if (!!t && t in this.trunk) {
                    i.call(this, t)
                } else if (typeof t === "undefined") {
                    for (n in this.trunk) {
                        if (this.trunk.hasOwnProperty(n)) {
                            i.call(this, n)
                        }
                    }
                }
            }
        };
        return this
    };
    i.prototype = {
        constructor: i,
        init: function(e, a) {
            a = T(a);
            this._original = {
                target: e,
                options: a,
                data: null
            };
            this._target = this._dom.target = e.nodeName ? e : t(e).get(0);
            this._original.html = this._target.innerHTML;
            D.push(this);
            if (!this._target) {
                i.raise("Target not found", true);
                return
            }
            this._options = {
                autoplay: false,
                carousel: true,
                carouselFollow: true,
                carouselSpeed: 400,
                carouselSteps: "auto",
                clicknext: false,
                dailymotion: {
                    foreground: "%23EEEEEE",
                    highlight: "%235BCEC5",
                    background: "%23222222",
                    logo: 0,
                    hideInfos: 1
                },
                dataConfig: function(t) {
                    return {}
                },
                dataSelector: "img",
                dataSort: false,
                dataSource: this._target,
                debug: n,
                dummy: n,
                easing: "galleria",
                extend: function(t) {},
                fullscreenCrop: n,
                fullscreenDoubleTap: true,
                fullscreenTransition: n,
                height: 0,
                idleMode: true,
                idleTime: 3e3,
                idleSpeed: 200,
                imageCrop: false,
                imageMargin: 0,
                imagePan: false,
                imagePanSmoothness: 12,
                imagePosition: "50%",
                imageTimeout: n,
                initialTransition: n,
                keepSource: false,
                layerFollow: true,
                lightbox: false,
                lightboxFadeSpeed: 200,
                lightboxTransitionSpeed: 200,
                linkSourceImages: true,
                maxScaleRatio: n,
                maxVideoSize: n,
                minScaleRatio: n,
                overlayOpacity: .85,
                overlayBackground: "#0b0b0b",
                pauseOnInteraction: true,
                popupLinks: false,
                preload: 2,
                queue: true,
                responsive: true,
                show: 0,
                showInfo: true,
                showCounter: true,
                showImagenav: true,
                swipe: "auto",
                theme: null,
                thumbCrop: true,
                thumbEventType: "click:fast",
                thumbMargin: 0,
                thumbQuality: "auto",
                thumbDisplayOrder: true,
                thumbPosition: "50%",
                thumbnails: true,
                touchTransition: n,
                transition: "fade",
                transitionInitial: n,
                transitionSpeed: 400,
                trueFullscreen: true,
                useCanvas: false,
                variation: "",
                videoPoster: true,
                vimeo: {
                    title: 0,
                    byline: 0,
                    portrait: 0,
                    color: "aaaaaa"
                },
                wait: 5e3,
                width: "auto",
                youtube: {
                    modestbranding: 1,
                    autohide: 1,
                    color: "white",
                    hd: 1,
                    rel: 0,
                    showinfo: 0
                }
            };
            this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial;
            if (a) {
                if (a.debug === false) {
                    c = false
                }
                if (typeof a.imageTimeout === "number") {
                    u = a.imageTimeout
                }
                if (typeof a.dummy === "string") {
                    h = a.dummy
                }
                if (typeof a.theme == "string") {
                    this._options.theme = a.theme
                }
            }
            t(this._target).children().hide();
            if (i.QUIRK) {
                i.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype.")
            }
            if (z.length) {
                if (this._options.theme) {
                    for (var o = 0; o < z.length; o++) {
                        if (this._options.theme === z[o].name) {
                            this.theme = z[o];
                            break
                        }
                    }
                } else {
                    this.theme = z[0]
                }
            }
            if (typeof this.theme == "object") {
                this._init()
            } else {
                P.push(this)
            }
            return this
        },
        _init: function() {
            var o = this,
                s = this._options;
            if (this._initialized) {
                i.raise("Init failed: Gallery instance already initialized.");
                return this
            }
            this._initialized = true;
            if (!this.theme) {
                i.raise("Init failed: No theme found.", true);
                return this
            }
            t.extend(true, s, this.theme.defaults, this._original.options, i.configure.options);
            s.swipe = function(t) {
                if (t == "enforced") {
                    return true
                }
                if (t === false || t == "disabled") {
                    return false
                }
                return !!i.TOUCH
            }(s.swipe);
            if (s.swipe) {
                s.clicknext = false;
                s.imagePan = false
            }! function(t) {
                if (!("getContext" in t)) {
                    t = null;
                    return
                }
                L = L || {
                    elem: t,
                    context: t.getContext("2d"),
                    cache: {},
                    length: 0
                }
            }(a.createElement("canvas"));
            this.bind(i.DATA, function() {
                if (e.screen && e.screen.width && Array.prototype.forEach) {
                    this._data.forEach(function(t) {
                        var i = "devicePixelRatio" in e ? e.devicePixelRatio : 1,
                            n = g.max(e.screen.width, e.screen.height);
                        if (n * i < 1024) {
                            t.big = t.image
                        }
                    })
                }
                this._original.data = this._data;
                this.get("total").innerHTML = this.getDataLength();
                var t = this.$("container");
                if (o._options.height < 2) {
                    o._userRatio = o._ratio = o._options.height
                }
                var n = {
                    width: 0,
                    height: 0
                };
                var a = function() {
                    return o.$("stage").height()
                };
                H.wait({
                    until: function() {
                        n = o._getWH();
                        t.width(n.width).height(n.height);
                        return a() && n.width && n.height > 50
                    },
                    success: function() {
                        o._width = n.width;
                        o._height = n.height;
                        o._ratio = o._ratio || n.height / n.width;
                        if (i.WEBKIT) {
                            e.setTimeout(function() {
                                o._run()
                            }, 1)
                        } else {
                            o._run()
                        }
                    },
                    error: function() {
                        if (a()) {
                            i.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:" + n.width + "px, height: " + n.height + "px.", true)
                        } else {
                            i.raise("Could not extract a stage height from the CSS. Traced height: " + a() + "px.", true)
                        }
                    },
                    timeout: typeof this._options.wait == "number" ? this._options.wait : false
                })
            });
            this.append({
                "info-text": ["info-title", "info-description"],
                info: ["info-text"],
                "image-nav": ["image-nav-right", "image-nav-left"],
                stage: ["images", "loader", "counter", "image-nav"],
                "thumbnails-list": ["thumbnails"],
                "thumbnails-container": ["thumb-nav-left", "thumbnails-list", "thumb-nav-right"],
                container: ["stage", "thumbnails-container", "info", "tooltip"]
            });
            H.hide(this.$("counter").append(this.get("current"), a.createTextNode(" / "), this.get("total")));
            this.setCounter("&#8211;");
            H.hide(o.get("tooltip"));
            this.$("container").addClass([i.TOUCH ? "touch" : "notouch", this._options.variation, "galleria-theme-" + this.theme.name].join(" "));
            if (!this._options.swipe) {
                t.each(new Array(2), function(e) {
                    var n = new i.Picture;
                    t(n.container).css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).prepend(o._layers[e] = t(H.create("galleria-layer")).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2
                    })[0]);
                    o.$("images").append(n.container);
                    o._controls[e] = n;
                    var a = new i.Picture;
                    a.isIframe = true;
                    t(a.container).attr("class", "galleria-frame").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 4,
                        background: "#000",
                        display: "none"
                    }).appendTo(n.container);
                    o._controls.frames[e] = a
                })
            }
            this.$("images").css({
                position: "relative",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            });
            if (s.swipe) {
                this.$("images").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 0,
                    height: "100%"
                });
                this.finger = new i.Finger(this.get("stage"), {
                    onchange: function(t) {
                        o.pause().show(t)
                    },
                    oncomplete: function(e) {
                        var i = g.max(0, g.min(parseInt(e, 10), o.getDataLength() - 1)),
                            n = o.getData(i);
                        t(o._thumbnails[i].container).addClass("active").siblings(".active").removeClass("active");
                        if (!n) {
                            return
                        }
                        o.$("images").find(".galleria-frame").css("opacity", 0).hide().find("iframe").remove();
                        if (o._options.carousel && o._options.carouselFollow) {
                            o._carousel.follow(i)
                        }
                    }
                });
                this.bind(i.RESCALE, function() {
                    this.finger.setup()
                });
                this.$("stage").on("click", function(i) {
                    var a = o.getData();
                    if (!a) {
                        return
                    }
                    if (a.iframe) {
                        if (o.isPlaying()) {
                            o.pause()
                        }
                        var r = o._controls.frames[o._active],
                            s = o._stageWidth,
                            l = o._stageHeight;
                        if (t(r.container).find("iframe").length) {
                            return
                        }
                        t(r.container).css({
                            width: s,
                            height: l,
                            opacity: 0
                        }).show().animate({
                            opacity: 1
                        }, 200);
                        e.setTimeout(function() {
                            r.load(a.iframe + (a.video ? "&autoplay=1" : ""), {
                                width: s,
                                height: l
                            }, function(t) {
                                o.$("container").addClass("videoplay");
                                t.scale({
                                    width: o._stageWidth,
                                    height: o._stageHeight,
                                    iframelimit: a.video ? o._options.maxVideoSize : n
                                })
                            })
                        }, 100);
                        return
                    }
                    if (a.link) {
                        if (o._options.popupLinks) {
                            var c = e.open(a.link, "_blank")
                        } else {
                            e.location.href = a.link
                        }
                        return
                    }
                });
                this.bind(i.IMAGE, function(e) {
                    o.setCounter(e.index);
                    o.setInfo(e.index);
                    var i = this.getNext(),
                        n = this.getPrev();
                    var a = [n, i];
                    a.push(this.getNext(i), this.getPrev(n), o._controls.slides.length - 1);
                    var r = [];
                    t.each(a, function(e, i) {
                        if (t.inArray(i, r) == -1) {
                            r.push(i)
                        }
                    });
                    t.each(r, function(e, i) {
                        var n = o.getData(i),
                            a = o._controls.slides[i],
                            r = o.isFullscreen() && n.big ? n.big : n.image || n.iframe;
                        if (n.iframe && !n.image) {
                            a.isIframe = true
                        }
                        if (!a.ready) {
                            o._controls.slides[i].load(r, function(e) {
                                if (!e.isIframe) {
                                    t(e.image).css("visibility", "hidden")
                                }
                                o._scaleImage(e, {
                                    complete: function(e) {
                                        if (!e.isIframe) {
                                            t(e.image).css({
                                                opacity: 0,
                                                visibility: "visible"
                                            }).animate({
                                                opacity: 1
                                            }, 200)
                                        }
                                    }
                                })
                            })
                        }
                    })
                })
            }
            this.$("thumbnails, thumbnails-list").css({
                overflow: "hidden",
                position: "relative"
            });
            this.$("image-nav-right, image-nav-left").on("click:fast", function(t) {
                if (s.pauseOnInteraction) {
                    o.pause()
                }
                var e = /right/.test(this.className) ? "next" : "prev";
                o[e]()
            }).on("click", function(t) {
                t.preventDefault();
                if (s.clicknext || s.swipe) {
                    t.stopPropagation()
                }
            });
            t.each(["info", "counter", "image-nav"], function(t, e) {
                if (s["show" + e.substr(0, 1).toUpperCase() + e.substr(1).replace(/-/, "")] === false) {
                    H.moveOut(o.get(e.toLowerCase()))
                }
            });
            this.load();
            if (!s.keepSource && !y) {
                this._target.innerHTML = ""
            }
            if (this.get("errors")) {
                this.appendChild("target", "errors")
            }
            this.appendChild("target", "container");
            if (s.carousel) {
                var l = 0,
                    c = s.show;
                this.bind(i.THUMBNAIL, function() {
                    this.updateCarousel();
                    if (++l == this.getDataLength() && typeof c == "number" && c > 0) {
                        this._carousel.follow(c)
                    }
                })
            }
            if (s.responsive) {
                r.on("resize", function() {
                    if (!o.isFullscreen()) {
                        o.resize()
                    }
                })
            }
            if (s.fullscreenDoubleTap) {
                this.$("stage").on("touchstart", function() {
                    var t, e, i, n, a, r, s = function(t) {
                        return t.originalEvent.touches ? t.originalEvent.touches[0] : t
                    };
                    o.$("stage").on("touchmove", function() {
                        t = 0
                    });
                    return function(l) {
                        if (/(-left|-right)/.test(l.target.className)) {
                            return
                        }
                        r = H.timestamp();
                        e = s(l).pageX;
                        i = s(l).pageY;
                        if (l.originalEvent.touches.length < 2 && r - t < 300 && e - n < 20 && i - a < 20) {
                            o.toggleFullscreen();
                            l.preventDefault();
                            return
                        }
                        t = r;
                        n = e;
                        a = i
                    }
                }())
            }
            t.each(i.on.binds, function(e, i) {
                if (t.inArray(i.hash, o._binds) == -1) {
                    o.bind(i.type, i.callback)
                }
            });
            return this
        },
        addTimer: function() {
            this._timer.add.apply(this._timer, H.array(arguments));
            return this
        },
        clearTimer: function() {
            this._timer.clear.apply(this._timer, H.array(arguments));
            return this
        },
        _getWH: function() {
            var e = this.$("container"),
                i = this.$("target"),
                n = this,
                a = {},
                o;
            t.each(["width", "height"], function(t, r) {
                if (n._options[r] && typeof n._options[r] === "number") {
                    a[r] = n._options[r]
                } else {
                    o = [H.parseValue(e.css(r)), H.parseValue(i.css(r)), e[r](), i[r]()];
                    if (!n["_" + r]) {
                        o.splice(o.length, H.parseValue(e.css("min-" + r)), H.parseValue(i.css("min-" + r)))
                    }
                    a[r] = g.max.apply(g, o)
                }
            });
            if (n._userRatio) {
                a.height = a.width * n._userRatio
            }
            return a
        },
        _createThumbnails: function(n) {
            this.get("total").innerHTML = this.getDataLength();
            var o, r, s, l, c = this,
                u = this._options,
                h = n ? this._data.length - n.length : 0,
                f = h,
                d = [],
                p = 0,
                g = y < 8 ? "http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif" : "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",
                m = function() {
                    var t = c.$("thumbnails").find(".active");
                    if (!t.length) {
                        return false
                    }
                    return t.find("img").attr("src")
                }(),
                v = typeof u.thumbnails === "string" ? u.thumbnails.toLowerCase() : null,
                _ = function(t) {
                    return a.defaultView && a.defaultView.getComputedStyle ? a.defaultView.getComputedStyle(r.container, null)[t] : l.css(t)
                },
                b = function(e, n, a) {
                    return function() {
                        t(a).append(e);
                        c.trigger({
                            type: i.THUMBNAIL,
                            thumbTarget: e,
                            index: n,
                            galleriaData: c.getData(n)
                        })
                    }
                },
                w = function(e) {
                    if (u.pauseOnInteraction) {
                        c.pause()
                    }
                    var i = t(e.currentTarget).data("index");
                    if (c.getIndex() !== i) {
                        c.show(i)
                    }
                    e.preventDefault()
                },
                x = function(e, n) {
                    t(e.container).css("visibility", "visible");
                    c.trigger({
                        type: i.THUMBNAIL,
                        thumbTarget: e.image,
                        index: e.data.order,
                        galleriaData: c.getData(e.data.order)
                    });
                    if (typeof n == "function") {
                        n.call(c, e)
                    }
                },
                T = function(e, i) {
                    e.scale({
                        width: e.data.width,
                        height: e.data.height,
                        crop: u.thumbCrop,
                        margin: u.thumbMargin,
                        canvas: u.useCanvas,
                        position: u.thumbPosition,
                        complete: function(e) {
                            var n = ["left", "top"],
                                a = ["Width", "Height"],
                                o, r, s = c.getData(e.index);
                            t.each(a, function(i, a) {
                                o = a.toLowerCase();
                                if (u.thumbCrop !== true || u.thumbCrop === o) {
                                    r = {};
                                    r[o] = e[o];
                                    t(e.container).css(r);
                                    r = {};
                                    r[n[i]] = 0;
                                    t(e.image).css(r)
                                }
                                e["outer" + a] = t(e.container)["outer" + a](true)
                            });
                            H.toggleQuality(e.image, u.thumbQuality === true || u.thumbQuality === "auto" && e.original.width < e.width * 3);
                            if (u.thumbDisplayOrder && !e.lazy) {
                                t.each(d, function(t, e) {
                                    if (t === p && e.ready && !e.displayed) {
                                        p++;
                                        e.displayed = true;
                                        x(e, i);
                                        return
                                    }
                                })
                            } else {
                                x(e, i)
                            }
                        }
                    })
                };
            if (!n) {
                this._thumbnails = [];
                this.$("thumbnails").empty()
            }
            for (; this._data[h]; h++) {
                s = this._data[h];
                o = s.thumb || s.image;
                if ((u.thumbnails === true || v == "lazy") && (s.thumb || s.image)) {
                    r = new i.Picture(h);
                    r.index = h;
                    r.displayed = false;
                    r.lazy = false;
                    r.video = false;
                    this.$("thumbnails").append(r.container);
                    l = t(r.container);
                    l.css("visibility", "hidden");
                    r.data = {
                        width: H.parseValue(_("width")),
                        height: H.parseValue(_("height")),
                        order: h,
                        src: o
                    };
                    if (u.thumbCrop !== true) {
                        l.css({
                            width: "auto",
                            height: "auto"
                        })
                    } else {
                        l.css({
                            width: r.data.width,
                            height: r.data.height
                        })
                    }
                    if (v == "lazy") {
                        l.addClass("lazy");
                        r.lazy = true;
                        r.load(g, {
                            height: r.data.height,
                            width: r.data.width
                        })
                    } else {
                        r.load(o, T)
                    }
                    if (u.preload === "all") {
                        r.preload(s.image)
                    }
                } else if (s.iframe && v !== null || v === "empty" || v === "numbers") {
                    r = {
                        container: H.create("galleria-image"),
                        image: H.create("img", "span"),
                        ready: true,
                        data: {
                            order: h
                        }
                    };
                    if (v === "numbers") {
                        t(r.image).text(h + 1)
                    }
                    if (s.iframe) {
                        t(r.image).addClass("iframe")
                    }
                    this.$("thumbnails").append(r.container);
                    e.setTimeout(b(r.image, h, r.container), 50 + h * 20)
                } else {
                    r = {
                        container: null,
                        image: null
                    }
                }
                t(r.container).add(u.keepSource && u.linkSourceImages ? s.original : null).data("index", h).on(u.thumbEventType, w).data("thumbload", T);
                if (m === o) {
                    t(r.container).addClass("active")
                }
                this._thumbnails.push(r)
            }
            d = this._thumbnails.slice(f);
            return this
        },
        lazyLoad: function(e, i) {
            var n = e.constructor == Array ? e : [e],
                a = this,
                o = 0;
            t.each(n, function(e, r) {
                if (r > a._thumbnails.length - 1) {
                    return
                }
                var s = a._thumbnails[r],
                    l = s.data,
                    c = function() {
                        if (++o == n.length && typeof i == "function") {
                            i.call(a)
                        }
                    },
                    u = t(s.container).data("thumbload");
                if (s.video) {
                    u.call(a, s, c)
                } else {
                    s.load(l.src, function(t) {
                        u.call(a, t, c)
                    })
                }
            });
            return this
        },
        lazyLoadChunks: function(t, i) {
            var n = this.getDataLength(),
                a = 0,
                o = 0,
                r = [],
                s = [],
                l = this;
            i = i || 0;
            for (; a < n; a++) {
                s.push(a);
                if (++o == t || a == n - 1) {
                    r.push(s);
                    o = 0;
                    s = []
                }
            }
            var c = function(t) {
                var n = r.shift();
                if (n) {
                    e.setTimeout(function() {
                        l.lazyLoad(n, function() {
                            c(true)
                        })
                    }, i && t ? i : 0)
                }
            };
            c(false);
            return this
        },
        _run: function() {
            var a = this;
            a._createThumbnails();
            H.wait({
                timeout: 1e4,
                until: function() {
                    if (i.OPERA) {
                        a.$("stage").css("display", "inline-block")
                    }
                    a._stageWidth = a.$("stage").width();
                    a._stageHeight = a.$("stage").height();
                    return a._stageWidth && a._stageHeight > 50
                },
                success: function() {
                    E.push(a);
                    if (a._options.swipe) {
                        var o = a.$("images").width(a.getDataLength() * a._stageWidth);
                        t.each(new Array(a.getDataLength()), function(e) {
                            var n = new i.Picture,
                                r = a.getData(e);
                            t(n.container).css({
                                position: "absolute",
                                top: 0,
                                left: a._stageWidth * e
                            }).prepend(a._layers[e] = t(H.create("galleria-layer")).css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 2
                            })[0]).appendTo(o);
                            if (r.video) {
                                O(n.container)
                            }
                            a._controls.slides.push(n);
                            var s = new i.Picture;
                            s.isIframe = true;
                            t(s.container).attr("class", "galleria-frame").css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 4,
                                background: "#000",
                                display: "none"
                            }).appendTo(n.container);
                            a._controls.frames.push(s)
                        });
                        a.finger.setup()
                    }
                    H.show(a.get("counter"));
                    if (a._options.carousel) {
                        a._carousel.bindControls()
                    }
                    if (a._options.autoplay) {
                        a.pause();
                        if (typeof a._options.autoplay === "number") {
                            a._playtime = a._options.autoplay
                        }
                        a._playing = true
                    }
                    if (a._firstrun) {
                        if (a._options.autoplay) {
                            a.trigger(i.PLAY)
                        }
                        if (typeof a._options.show === "number") {
                            a.show(a._options.show)
                        }
                        return
                    }
                    a._firstrun = true;
                    if (i.History) {
                        i.History.change(function(t) {
                            if (isNaN(t)) {
                                e.history.go(-1)
                            } else {
                                a.show(t, n, true)
                            }
                        })
                    }
                    a.trigger(i.READY);
                    a.theme.init.call(a, a._options);
                    t.each(i.ready.callbacks, function(t, e) {
                        if (typeof e == "function") {
                            e.call(a, a._options)
                        }
                    });
                    a._options.extend.call(a, a._options);
                    if (/^[0-9]{1,4}$/.test(d) && i.History) {
                        a.show(d, n, true)
                    } else if (a._data[a._options.show]) {
                        a.show(a._options.show)
                    }
                    if (a._options.autoplay) {
                        a.trigger(i.PLAY)
                    }
                },
                error: function() {
                    i.raise("Stage width or height is too small to show the gallery. Traced measures: width:" + a._stageWidth + "px, height: " + a._stageHeight + "px.", true)
                }
            })
        },
        load: function(e, n, a) {
            var o = this,
                r = this._options;
            this._data = [];
            this._thumbnails = [];
            this.$("thumbnails").empty();
            if (typeof n === "function") {
                a = n;
                n = null
            }
            e = e || r.dataSource;
            n = n || r.dataSelector;
            a = a || r.dataConfig;
            if (t.isPlainObject(e)) {
                e = [e]
            }
            if (t.isArray(e)) {
                if (this.validate(e)) {
                    this._data = e
                } else {
                    i.raise("Load failed: JSON Array not valid.")
                }
            } else {
                n += ",.video,.iframe";
                t(e).find(n).each(function(e, i) {
                    i = t(i);
                    var n = {},
                        r = i.parent(),
                        s = r.attr("href"),
                        l = r.attr("rel");
                    if (s && (i[0].nodeName == "IMG" || i.hasClass("video")) && S(s)) {
                        n.video = s
                    } else if (s && i.hasClass("iframe")) {
                        n.iframe = s
                    } else {
                        n.image = n.big = s
                    }
                    if (l) {
                        n.big = l
                    }
                    t.each("big title description link layer image".split(" "), function(t, e) {
                        if (i.data(e)) {
                            n[e] = i.data(e).toString()
                        }
                    });
                    if (!n.big) {
                        n.big = n.image
                    }
                    o._data.push(t.extend({
                        title: i.attr("title") || "",
                        thumb: i.attr("src"),
                        image: i.attr("src"),
                        big: i.attr("src"),
                        description: i.attr("alt") || "",
                        link: i.attr("longdesc"),
                        original: i.get(0)
                    }, n, a(i)))
                })
            }
            if (typeof r.dataSort == "function") {
                s.sort.call(this._data, r.dataSort)
            } else if (r.dataSort == "random") {
                this._data.sort(function() {
                    return g.round(g.random()) - .5
                })
            }
            if (this.getDataLength()) {
                this._parseData(function() {
                    this.trigger(i.DATA)
                })
            }
            return this
        },
        _parseData: function(e) {
            var i = this,
                a, o = false,
                r = function() {
                    var n = true;
                    t.each(i._data, function(t, e) {
                        if (e.loading) {
                            n = false;
                            return false
                        }
                    });
                    if (n && !o) {
                        o = true;
                        e.call(i)
                    }
                };
            t.each(this._data, function(e, o) {
                a = i._data[e];
                if ("thumb" in o === false) {
                    a.thumb = o.image
                }
                if (!o.big) {
                    a.big = o.image
                }
                if ("video" in o) {
                    var s = S(o.video);
                    if (s) {
                        a.iframe = new I(s.provider, s.id).embed() + function() {
                            if (typeof i._options[s.provider] == "object") {
                                var e = "?",
                                    n = [];
                                t.each(i._options[s.provider], function(t, e) {
                                    n.push(t + "=" + e)
                                });
                                if (s.provider == "youtube") {
                                    n = ["wmode=opaque"].concat(n)
                                }
                                return e + n.join("&")
                            }
                            return ""
                        }();
                        if (!a.thumb || !a.image) {
                            t.each(["thumb", "image"], function(t, e) {
                                if (e == "image" && !i._options.videoPoster) {
                                    a.image = n;
                                    return
                                }
                                var o = new I(s.provider, s.id);
                                if (!a[e]) {
                                    a.loading = true;
                                    o.getMedia(e, function(t, e) {
                                        return function(i) {
                                            t[e] = i;
                                            if (e == "image" && !t.big) {
                                                t.big = t.image
                                            }
                                            delete t.loading;
                                            r()
                                        }
                                    }(a, e))
                                }
                            })
                        }
                    }
                }
            });
            r();
            return this
        },
        destroy: function() {
            this.$("target").data("galleria", null);
            this.$("container").off("galleria");
            this.get("target").innerHTML = this._original.html;
            this.clearTimer();
            H.removeFromArray(D, this);
            H.removeFromArray(E, this);
            if (i._waiters.length) {
                t.each(i._waiters, function(t, i) {
                    if (i) e.clearTimeout(i)
                })
            }
            return this
        },
        splice: function() {
            var t = this,
                i = H.array(arguments);
            e.setTimeout(function() {
                s.splice.apply(t._data, i);
                t._parseData(function() {
                    t._createThumbnails()
                })
            }, 2);
            return t
        },
        push: function() {
            var t = this,
                i = H.array(arguments);
            if (i.length == 1 && i[0].constructor == Array) {
                i = i[0]
            }
            e.setTimeout(function() {
                s.push.apply(t._data, i);
                t._parseData(function() {
                    t._createThumbnails(i)
                })
            }, 2);
            return t
        },
        _getActive: function() {
            return this._controls.getActive()
        },
        validate: function(t) {
            return true
        },
        bind: function(t, e) {
            t = k(t);
            this.$("container").on(t, this.proxy(e));
            return this
        },
        unbind: function(t) {
            t = k(t);
            this.$("container").off(t);
            return this
        },
        trigger: function(e) {
            e = typeof e === "object" ? t.extend(e, {
                scope: this
            }) : {
                type: k(e),
                scope: this
            };
            this.$("container").trigger(e);
            return this
        },
        addIdleState: function(t, e, i, n) {
            this._idle.add.apply(this._idle, H.array(arguments));
            return this
        },
        removeIdleState: function(t) {
            this._idle.remove.apply(this._idle, H.array(arguments));
            return this
        },
        enterIdleMode: function() {
            this._idle.hide();
            return this
        },
        exitIdleMode: function() {
            this._idle.showAll();
            return this
        },
        enterFullscreen: function(t) {
            this._fullscreen.enter.apply(this, H.array(arguments));
            return this
        },
        exitFullscreen: function(t) {
            this._fullscreen.exit.apply(this, H.array(arguments));
            return this
        },
        toggleFullscreen: function(t) {
            this._fullscreen[this.isFullscreen() ? "exit" : "enter"].apply(this, H.array(arguments));
            return this
        },
        bindTooltip: function(t, e) {
            this._tooltip.bind.apply(this._tooltip, H.array(arguments));
            return this
        },
        defineTooltip: function(t, e) {
            this._tooltip.define.apply(this._tooltip, H.array(arguments));
            return this
        },
        refreshTooltip: function(t) {
            this._tooltip.show.apply(this._tooltip, H.array(arguments));
            return this
        },
        openLightbox: function() {
            this._lightbox.show.apply(this._lightbox, H.array(arguments));
            return this
        },
        closeLightbox: function() {
            this._lightbox.hide.apply(this._lightbox, H.array(arguments));
            return this
        },
        hasVariation: function(e) {
            return t.inArray(e, this._options.variation.split(/\s+/)) > -1
        },
        getActiveImage: function() {
            var t = this._getActive();
            return t ? t.image : n
        },
        getActiveThumb: function() {
            return this._thumbnails[this._active].image || n
        },
        getMousePosition: function(t) {
            return {
                x: t.pageX - this.$("container").offset().left,
                y: t.pageY - this.$("container").offset().top
            }
        },
        addPan: function(e) {
            if (this._options.imageCrop === false) {
                return
            }
            e = t(e || this.getActiveImage());
            var i = this,
                n = e.width() / 2,
                a = e.height() / 2,
                o = parseInt(e.css("left"), 10),
                r = parseInt(e.css("top"), 10),
                s = o || 0,
                l = r || 0,
                c = 0,
                u = 0,
                h = false,
                f = H.timestamp(),
                d = 0,
                p = 0,
                m = function(t, i, n) {
                    if (t > 0) {
                        p = g.round(g.max(t * -1, g.min(0, i)));
                        if (d !== p) {
                            d = p;
                            if (y === 8) {
                                e.parent()["scroll" + n](p * -1)
                            } else {
                                var a = {};
                                a[n.toLowerCase()] = p;
                                e.css(a)
                            }
                        }
                    }
                },
                v = function(t) {
                    if (H.timestamp() - f < 50) {
                        return
                    }
                    h = true;
                    n = i.getMousePosition(t).x;
                    a = i.getMousePosition(t).y
                },
                _ = function(t) {
                    if (!h) {
                        return
                    }
                    c = e.width() - i._stageWidth;
                    u = e.height() - i._stageHeight;
                    o = n / i._stageWidth * c * -1;
                    r = a / i._stageHeight * u * -1;
                    s += (o - s) / i._options.imagePanSmoothness;
                    l += (r - l) / i._options.imagePanSmoothness;
                    m(u, l, "Top");
                    m(c, s, "Left")
                };
            if (y === 8) {
                e.parent().scrollTop(l * -1).scrollLeft(s * -1);
                e.css({
                    top: 0,
                    left: 0
                })
            }
            this.$("stage").off("mousemove", v).on("mousemove", v);
            this.addTimer("pan" + i._id, _, 50, true);
            return this
        },
        proxy: function(t, e) {
            if (typeof t !== "function") {
                return m
            }
            e = e || this;
            return function() {
                return t.apply(e, H.array(arguments))
            }
        },
        getThemeName: function() {
            return this.theme.name
        },
        removePan: function() {
            this.$("stage").off("mousemove");
            this.clearTimer("pan" + this._id);
            return this
        },
        addElement: function(e) {
            var i = this._dom;
            t.each(H.array(arguments), function(t, e) {
                i[e] = H.create("galleria-" + e)
            });
            return this
        },
        attachKeyboard: function(t) {
            this._keyboard.attach.apply(this._keyboard, H.array(arguments));
            return this
        },
        detachKeyboard: function() {
            this._keyboard.detach.apply(this._keyboard, H.array(arguments));
            return this
        },
        appendChild: function(t, e) {
            this.$(t).append(this.get(e) || e);
            return this
        },
        prependChild: function(t, e) {
            this.$(t).prepend(this.get(e) || e);
            return this
        },
        remove: function(t) {
            this.$(H.array(arguments).join(",")).remove();
            return this
        },
        append: function(t) {
            var e, i;
            for (e in t) {
                if (t.hasOwnProperty(e)) {
                    if (t[e].constructor === Array) {
                        for (i = 0; t[e][i]; i++) {
                            this.appendChild(e, t[e][i])
                        }
                    } else {
                        this.appendChild(e, t[e])
                    }
                }
            }
            return this
        },
        _scaleImage: function(e, i) {
            e = e || this._controls.getActive();
            if (!e) {
                return
            }
            var n, a = function(e) {
                t(e.container).children(":first").css({
                    top: g.max(0, H.parseValue(e.image.style.top)),
                    left: g.max(0, H.parseValue(e.image.style.left)),
                    width: H.parseValue(e.image.width),
                    height: H.parseValue(e.image.height)
                })
            };
            i = t.extend({
                width: this._stageWidth,
                height: this._stageHeight,
                crop: this._options.imageCrop,
                max: this._options.maxScaleRatio,
                min: this._options.minScaleRatio,
                margin: this._options.imageMargin,
                position: this._options.imagePosition,
                iframelimit: this._options.maxVideoSize
            }, i);
            if (this._options.layerFollow && this._options.imageCrop !== true) {
                if (typeof i.complete == "function") {
                    n = i.complete;
                    i.complete = function() {
                        n.call(e, e);
                        a(e)
                    }
                } else {
                    i.complete = a
                }
            } else {
                t(e.container).children(":first").css({
                    top: 0,
                    left: 0
                })
            }
            e.scale(i);
            return this
        },
        updateCarousel: function() {
            this._carousel.update();
            return this
        },
        resize: function(e, i) {
            if (typeof e == "function") {
                i = e;
                e = n
            }
            e = t.extend({
                width: 0,
                height: 0
            }, e);
            var a = this,
                o = this.$("container");
            t.each(e, function(t, i) {
                if (!i) {
                    o[t]("auto");
                    e[t] = a._getWH()[t]
                }
            });
            t.each(e, function(t, e) {
                o[t](e)
            });
            return this.rescale(i)
        },
        rescale: function(e, a, o) {
            var r = this;
            if (typeof e === "function") {
                o = e;
                e = n
            }
            var s = function() {
                r._stageWidth = e || r.$("stage").width();
                r._stageHeight = a || r.$("stage").height();
                if (r._options.swipe) {
                    t.each(r._controls.slides, function(e, i) {
                        r._scaleImage(i);
                        t(i.container).css("left", r._stageWidth * e)
                    });
                    r.$("images").css("width", r._stageWidth * r.getDataLength())
                } else {
                    r._scaleImage()
                }
                if (r._options.carousel) {
                    r.updateCarousel()
                }
                var n = r._controls.frames[r._controls.active];
                if (n) {
                    r._controls.frames[r._controls.active].scale({
                        width: r._stageWidth,
                        height: r._stageHeight,
                        iframelimit: r._options.maxVideoSize
                    })
                }
                r.trigger(i.RESCALE);
                if (typeof o === "function") {
                    o.call(r)
                }
            };
            s.call(r);
            return this
        },
        refreshImage: function() {
            this._scaleImage();
            if (this._options.imagePan) {
                this.addPan()
            }
            return this
        },
        _preload: function() {
            if (this._options.preload) {
                var t, e, n = this.getNext(),
                    a;
                try {
                    for (e = this._options.preload; e > 0; e--) {
                        t = new i.Picture;
                        a = this.getData(n);
                        t.preload(this.isFullscreen() && a.big ? a.big : a.image);
                        n = this.getNext(n)
                    }
                } catch (o) {}
            }
        },
        show: function(n, a, o) {
            var r = this._options.swipe;
            if (!r && (this._queue.length > 3 || n === false || !this._options.queue && this._queue.stalled)) {
                return
            }
            n = g.max(0, g.min(parseInt(n, 10), this.getDataLength() - 1));
            a = typeof a !== "undefined" ? !!a : n < this.getIndex();
            o = o || false;
            if (!o && i.History) {
                i.History.set(n.toString());
                return
            }
            if (this.finger && n !== this._active) {
                this.finger.to = -(n * this.finger.width);
                this.finger.index = n
            }
            this._active = n;
            if (r) {
                var l = this.getData(n),
                    c = this;
                if (!l) {
                    return
                }
                var u = this.isFullscreen() && l.big ? l.big : l.image || l.iframe,
                    h = this._controls.slides[n],
                    f = h.isCached(u),
                    d = this._thumbnails[n];
                var p = {
                    cached: f,
                    index: n,
                    rewind: a,
                    imageTarget: h.image,
                    thumbTarget: d.image,
                    galleriaData: l
                };
                this.trigger(t.extend(p, {
                    type: i.LOADSTART
                }));
                c.$("container").removeClass("videoplay");
                var m = function() {
                    c._layers[n].innerHTML = c.getData().layer || "";
                    c.trigger(t.extend(p, {
                        type: i.LOADFINISH
                    }));
                    c._playCheck()
                };
                c._preload();
                e.setTimeout(function() {
                    if (!h.ready || t(h.image).attr("src") != u) {
                        if (l.iframe && !l.image) {
                            h.isIframe = true
                        }
                        h.load(u, function(e) {
                            p.imageTarget = e.image;
                            c._scaleImage(e, m).trigger(t.extend(p, {
                                type: i.IMAGE
                            }));
                            m()
                        })
                    } else {
                        c.trigger(t.extend(p, {
                            type: i.IMAGE
                        }));
                        m()
                    }
                }, 100)
            } else {
                s.push.call(this._queue, {
                    index: n,
                    rewind: a
                });
                if (!this._queue.stalled) {
                    this._show()
                }
            }
            return this
        },
        _show: function() {
            var a = this,
                o = this._queue[0],
                r = this.getData(o.index);
            if (!r) {
                return
            }
            var l = this.isFullscreen() && r.big ? r.big : r.image || r.iframe,
                c = this._controls.getActive(),
                u = this._controls.getNext(),
                h = u.isCached(l),
                f = this._thumbnails[o.index],
                d = function() {
                    t(u.image).trigger("mouseup")
                };
            a.$("container").toggleClass("iframe", !!r.isIframe).removeClass("videoplay");
            var p = function(o, r, l, c, u) {
                return function() {
                    var h;
                    M.active = false;
                    H.toggleQuality(r.image, a._options.imageQuality);
                    a._layers[a._controls.active].innerHTML = "";
                    t(l.container).css({
                        zIndex: 0,
                        opacity: 0
                    }).show();
                    t(l.container).find("iframe, .galleria-videoicon").remove();
                    t(a._controls.frames[a._controls.active].container).hide();
                    t(r.container).css({
                        zIndex: 1,
                        left: 0,
                        top: 0
                    }).show();
                    a._controls.swap();
                    if (a._options.imagePan) {
                        a.addPan(r.image)
                    }
                    if (o.iframe && o.image || o.link || a._options.lightbox || a._options.clicknext) {
                        t(r.image).css({
                            cursor: "pointer"
                        }).on("mouseup", function(r) {
                            if (typeof r.which == "number" && r.which > 1) {
                                return
                            }
                            if (o.iframe) {
                                if (a.isPlaying()) {
                                    a.pause()
                                }
                                var s = a._controls.frames[a._controls.active],
                                    l = a._stageWidth,
                                    c = a._stageHeight;
                                t(s.container).css({
                                    width: l,
                                    height: c,
                                    opacity: 0
                                }).show().animate({
                                    opacity: 1
                                }, 200);
                                e.setTimeout(function() {
                                    s.load(o.iframe + (o.video ? "&autoplay=1" : ""), {
                                        width: l,
                                        height: c
                                    }, function(t) {
                                        a.$("container").addClass("videoplay");
                                        t.scale({
                                            width: a._stageWidth,
                                            height: a._stageHeight,
                                            iframelimit: o.video ? a._options.maxVideoSize : n
                                        })
                                    })
                                }, 100);
                                return
                            }
                            if (a._options.clicknext && !i.TOUCH) {
                                if (a._options.pauseOnInteraction) {
                                    a.pause()
                                }
                                a.next();
                                return
                            }
                            if (o.link) {
                                if (a._options.popupLinks) {
                                    h = e.open(o.link, "_blank")
                                } else {
                                    e.location.href = o.link
                                }
                                return
                            }
                            if (a._options.lightbox) {
                                a.openLightbox()
                            }
                        })
                    }
                    a._playCheck();
                    a.trigger({
                        type: i.IMAGE,
                        index: c.index,
                        imageTarget: r.image,
                        thumbTarget: u.image,
                        galleriaData: o
                    });
                    s.shift.call(a._queue);
                    a._queue.stalled = false;
                    if (a._queue.length) {
                        a._show()
                    }
                }
            }(r, u, c, o, f);
            if (this._options.carousel && this._options.carouselFollow) {
                this._carousel.follow(o.index)
            }
            a._preload();
            H.show(u.container);
            u.isIframe = r.iframe && !r.image;
            t(a._thumbnails[o.index].container).addClass("active").siblings(".active").removeClass("active");
            a.trigger({
                type: i.LOADSTART,
                cached: h,
                index: o.index,
                rewind: o.rewind,
                imageTarget: u.image,
                thumbTarget: f.image,
                galleriaData: r
            });
            a._queue.stalled = true;
            u.load(l, function(e) {
                var s = t(a._layers[1 - a._controls.active]).html(r.layer || "").hide();
                a._scaleImage(e, {
                    complete: function(e) {
                        if ("image" in c) {
                            H.toggleQuality(c.image, false)
                        }
                        H.toggleQuality(e.image, false);
                        a.removePan();
                        a.setInfo(o.index);
                        a.setCounter(o.index);
                        if (r.layer) {
                            s.show();
                            if (r.iframe && r.image || r.link || a._options.lightbox || a._options.clicknext) {
                                s.css("cursor", "pointer").off("mouseup").mouseup(d)
                            }
                        }
                        if (r.video && r.image) {
                            O(e.container)
                        }
                        var l = a._options.transition;
                        t.each({
                            initial: c.image === null,
                            touch: i.TOUCH,
                            fullscreen: a.isFullscreen()
                        }, function(t, e) {
                            if (e && a._options[t + "Transition"] !== n) {
                                l = a._options[t + "Transition"];
                                return false
                            }
                        });
                        if (l in M.effects === false) {
                            p()
                        } else {
                            var u = {
                                prev: c.container,
                                next: e.container,
                                rewind: o.rewind,
                                speed: a._options.transitionSpeed || 400
                            };
                            M.active = true;
                            M.init.call(a, l, u, p)
                        }
                        a.trigger({
                            type: i.LOADFINISH,
                            cached: h,
                            index: o.index,
                            rewind: o.rewind,
                            imageTarget: e.image,
                            thumbTarget: a._thumbnails[o.index].image,
                            galleriaData: a.getData(o.index)
                        })
                    }
                })
            })
        },
        getNext: function(t) {
            t = typeof t === "number" ? t : this.getIndex();
            return t === this.getDataLength() - 1 ? 0 : t + 1
        },
        getPrev: function(t) {
            t = typeof t === "number" ? t : this.getIndex();
            return t === 0 ? this.getDataLength() - 1 : t - 1
        },
        next: function() {
            if (this.getDataLength() > 1) {
                this.show(this.getNext(), false)
            }
            return this
        },
        prev: function() {
            if (this.getDataLength() > 1) {
                this.show(this.getPrev(), true)
            }
            return this
        },
        get: function(t) {
            return t in this._dom ? this._dom[t] : null
        },
        getData: function(t) {
            return t in this._data ? this._data[t] : this._data[this._active]
        },
        getDataLength: function() {
            return this._data.length
        },
        getIndex: function() {
            return typeof this._active === "number" ? this._active : false
        },
        getStageHeight: function() {
            return this._stageHeight
        },
        getStageWidth: function() {
            return this._stageWidth
        },
        getOptions: function(t) {
            return typeof t === "undefined" ? this._options : this._options[t]
        },
        setOptions: function(e, i) {
            if (typeof e === "object") {
                t.extend(this._options, e)
            } else {
                this._options[e] = i
            }
            return this
        },
        play: function(t) {
            this._playing = true;
            this._playtime = t || this._playtime;
            this._playCheck();
            this.trigger(i.PLAY);
            return this
        },
        pause: function() {
            this._playing = false;
            this.trigger(i.PAUSE);
            return this
        },
        playToggle: function(t) {
            return this._playing ? this.pause() : this.play(t)
        },
        isPlaying: function() {
            return this._playing
        },
        isFullscreen: function() {
            return this._fullscreen.active
        },
        _playCheck: function() {
            var t = this,
                e = 0,
                n = 20,
                a = H.timestamp(),
                o = "play" + this._id;
            if (this._playing) {
                this.clearTimer(o);
                var r = function() {
                    e = H.timestamp() - a;
                    if (e >= t._playtime && t._playing) {
                        t.clearTimer(o);
                        t.next();
                        return
                    }
                    if (t._playing) {
                        t.trigger({
                            type: i.PROGRESS,
                            percent: g.ceil(e / t._playtime * 100),
                            seconds: g.floor(e / 1e3),
                            milliseconds: e
                        });
                        t.addTimer(o, r, n)
                    }
                };
                t.addTimer(o, r, n)
            }
        },
        setPlaytime: function(t) {
            this._playtime = t;
            return this
        },
        setIndex: function(t) {
            this._active = t;
            return this
        },
        setCounter: function(t) {
            if (typeof t === "number") {
                t++
            } else if (typeof t === "undefined") {
                t = this.getIndex() + 1
            }
            this.get("current").innerHTML = t;
            if (y) {
                var e = this.$("counter"),
                    i = e.css("opacity");
                if (parseInt(i, 10) === 1) {
                    H.removeAlpha(e[0])
                } else {
                    this.$("counter").css("opacity", i)
                }
            }
            return this
        },
        setInfo: function(e) {
            var i = this,
                n = this.getData(e);
            t.each(["title", "description"], function(t, e) {
                var a = i.$("info-" + e);
                if (!!n[e]) {
                    a[n[e].length ? "show" : "hide"]().html(n[e])
                } else {
                    a.empty().hide()
                }
            });
            return this
        },
        hasInfo: function(t) {
            var e = "title description".split(" "),
                i;
            for (i = 0; e[i]; i++) {
                if (!!this.getData(t)[e[i]]) {
                    return true
                }
            }
            return false
        },
        jQuery: function(e) {
            var i = this,
                n = [];
            t.each(e.split(","), function(e, a) {
                a = t.trim(a);
                if (i.get(a)) {
                    n.push(a)
                }
            });
            var a = t(i.get(n.shift()));
            t.each(n, function(t, e) {
                a = a.add(i.get(e))
            });
            return a
        },
        $: function(t) {
            return this.jQuery.apply(this, H.array(arguments))
        }
    };
    t.each(x, function(t, e) {
        var n = /_/.test(e) ? e.replace(/_/g, "") : e;
        i[e.toUpperCase()] = "galleria." + n
    });
    t.extend(i, {
        IE9: y === 9,
        IE8: y === 8,
        IE7: y === 7,
        IE6: y === 6,
        IE: y,
        WEBKIT: /webkit/.test(f),
        CHROME: /chrome/.test(f),
        SAFARI: /safari/.test(f) && !/chrome/.test(f),
        QUIRK: y && a.compatMode && a.compatMode === "BackCompat",
        MAC: /mac/.test(navigator.platform.toLowerCase()),
        OPERA: !!e.opera,
        IPHONE: /iphone/.test(f),
        IPAD: /ipad/.test(f),
        ANDROID: /android/.test(f),
        TOUCH: "ontouchstart" in a
    });
    i.addTheme = function(n) {
        if (!n.name) {
            i.raise("No theme name specified")
        }
        if (typeof n.defaults !== "object") {
            n.defaults = {}
        } else {
            n.defaults = T(n.defaults)
        }
        var a = false,
            o;
        if (typeof n.css === "string") {
            t("link").each(function(t, e) {
                o = new RegExp(n.css);
                if (o.test(e.href)) {
                    a = true;
                    F(n);
                    return false
                }
            });
            if (!a) {
                t(function() {
                    var r = 0;
                    var s = function() {
                        t("script").each(function(t, i) {
                            o = new RegExp("galleria\\." + n.name.toLowerCase() + "\\.");
                            if (o.test(i.src)) {
                                a = i.src.replace(/[^\/]*$/, "") + n.css;
                                e.setTimeout(function() {
                                    H.loadCSS(a, "galleria-theme-" + n.name, function() {
                                        F(n)
                                    })
                                }, 1)
                            }
                        });
                        if (!a) {
                            if (r++ > 5) {
                                //i.raise("No theme CSS loaded")
                            } else {
                                e.setTimeout(s, 500)
                            }
                        }
                    };
                    s()
                })
            }
        } else {
            F(n)
        }
        return n
    };
    i.loadTheme = function(n, a) {
        if (t("script").filter(function() {
                return t(this).attr("src") == n
            }).length) {
            return
        }
        var o = false,
            r;

        return i
    };
    i.get = function(t) {
        if (!!D[t]) {
            return D[t]
        } else if (typeof t !== "number") {
            return D
        } else {
            i.raise("Gallery index " + t + " not found")
        }
    };
    i.configure = function(e, n) {
        var a = {};
        if (typeof e == "string" && n) {
            a[e] = n;
            e = a
        } else {
            t.extend(a, e)
        }
        i.configure.options = a;
        t.each(i.get(), function(t, e) {
            e.setOptions(a)
        });
        return i
    };
    i.configure.options = {};
    i.on = function(e, n) {
        if (!e) {
            return
        }
        n = n || m;
        var a = e + n.toString().replace(/\s/g, "") + H.timestamp();
        t.each(i.get(), function(t, i) {
            i._binds.push(a);
            i.bind(e, n)
        });
        i.on.binds.push({
            type: e,
            callback: n,
            hash: a
        });
        return i
    };
    i.on.binds = [];
    i.run = function(e, n) {
        if (t.isFunction(n)) {
            n = {
                extend: n
            }
        }
        t(e || "#galleria").galleria(n);
        return i
    };
    i.addTransition = function(t, e) {
        M.effects[t] = e;
        return i
    };
    i.utils = H;
    i.log = function() {
        var i = H.array(arguments);
        if ("console" in e && "log" in e.console) {
            try {
                return e.console.log.apply(e.console, i)
            } catch (n) {
                t.each(i, function() {
                    e.console.log(this)
                })
            }
        } else {
            return e.alert(i.join("<br>"))
        }
    };
    i.ready = function(e) {
        if (typeof e != "function") {
            return i
        }
        t.each(E, function(t, i) {
            e.call(i, i._options)
        });
        i.ready.callbacks.push(e);
        return i
    };
    i.ready.callbacks = [];
    i.raise = function(e, i) {
        var n = i ? "Fatal error" : "Error",
            a = {
                color: "#fff",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1e5
            },
            o = function(e) {
                var o = '<div style="padding:4px;margin:0 0 2px;background:#' + (i ? "811" : "222") + ';">' + (i ? "<strong>" + n + ": </strong>" : "") + e + "</div>";
                t.each(D, function() {
                    var t = this.$("errors"),
                        e = this.$("target");
                    if (!t.length) {
                        e.css("position", "relative");
                        t = this.addElement("errors").appendChild("target", "errors").$("errors").css(a)
                    }
                    t.append(o)
                });
                if (!D.length) {
                    t("<div>").css(t.extend(a, {
                        position: "fixed"
                    })).append(o).appendTo(_().body)
                }
            };
        if (c) {
            o(e);
            if (i) {
                throw new Error(n + ": " + e)
            }
        } else if (i) {
            if ($) {
                return
            }
            $ = true;
            i = false;
            o("Gallery could not load.")
        }
    };
    i.version = l;
    i.getLoadedThemes = function() {
        return t.map(z, function(t) {
            return t.name
        })
    };
    i.requires = function(t, e) {
        e = e || "You need to upgrade Galleria to version " + t + " to use one or more components.";
        if (i.version < t) {
            i.raise(e, true)
        }
        return i
    };
    i.Picture = function(e) {
        this.id = e || null;
        this.image = null;
        this.container = H.create("galleria-image");
        t(this.container).css({
            overflow: "hidden",
            position: "relative"
        });
        this.original = {
            width: 0,
            height: 0
        };
        this.ready = false;
        this.isIframe = false
    };
    i.Picture.prototype = {
        cache: {},
        show: function() {
            H.show(this.image)
        },
        hide: function() {
            H.moveOut(this.image)
        },
        clear: function() {
            this.image = null
        },
        isCached: function(t) {
            return !!this.cache[t]
        },
        preload: function(e) {
            t(new Image).load(function(t, e) {
                return function() {
                    e[t] = t
                }
            }(e, this.cache)).attr("src", e)
        },
        load: function(n, a, o) {
            if (typeof a == "function") {
                o = a;
                a = null
            }
            if (this.isIframe) {
                var r = "if" + (new Date).getTime();
                var s = this.image = t("<iframe>", {
                    src: n,
                    frameborder: 0,
                    id: r,
                    allowfullscreen: true,
                    css: {
                        visibility: "hidden"
                    }
                })[0];
                if (a) {
                    t(s).css(a)
                }
                t(this.container).find("iframe,img").remove();
                this.container.appendChild(this.image);
                t("#" + r).load(function(i, n) {
                    return function() {
                        e.setTimeout(function() {
                            t(i.image).css("visibility", "visible");
                            if (typeof n == "function") {
                                n.call(i, i)
                            }
                        }, 10)
                    }
                }(this, o));
                return this.container
            }
            this.image = new Image;
            if (i.IE8) {
                t(this.image).css("filter", "inherit")
            }
            if (!i.IE && !i.CHROME && !i.SAFARI) {
                t(this.image).css("image-rendering", "optimizequality")
            }
            var l = false,
                c = false,
                u = t(this.container),
                f = t(this.image),
                d = function() {
                    if (!l) {
                        l = true;
                        e.setTimeout(function(t, e) {
                            return function() {
                                t.attr("src", e + (e.indexOf("?") > -1 ? "&" : "?") + H.timestamp())
                            }
                        }(t(this), n), 50)
                    } else {
                        if (h) {
                            t(this).attr("src", h)
                        } else {
                            i.raise("Image not found: " + n)
                        }
                    }
                },
                p = function(n, o, r) {
                    return function() {
                        var s = function() {
                            t(this).off("load");
                            n.original = a || {
                                height: this.height,
                                width: this.width
                            };
                            if (i.HAS3D) {
                                this.style.MozTransform = this.style.webkitTransform = "translate3d(0,0,0)"
                            }
                            u.append(this);
                            n.cache[r] = r;
                            if (typeof o == "function") {
                                e.setTimeout(function() {
                                    o.call(n, n)
                                }, 1)
                            }
                        };
                        if (!this.width || !this.height) {
                            ! function(e) {
                                H.wait({
                                    until: function() {
                                        return e.width && e.height
                                    },
                                    success: function() {
                                        s.call(e)
                                    },
                                    error: function() {
                                        if (!c) {
                                            t(new Image).load(p).attr("src", e.src);
                                            c = true
                                        } else {
                                            i.raise("Could not extract width/height from image: " + e.src + ". Traced measures: width:" + e.width + "px, height: " + e.height + "px.")
                                        }
                                    },
                                    timeout: 100
                                })
                            }(this)
                        } else {
                            s.call(this)
                        }
                    }
                }(this, o, n);
            u.find("iframe,img").remove();
            f.css("display", "block");
            H.hide(this.image);
            t.each("minWidth minHeight maxWidth maxHeight".split(" "), function(t, e) {
                f.css(e, /min/.test(e) ? "0" : "none")
            });
            f.load(p).on("error", d).attr("src", n);
            return this.container
        },
        scale: function(e) {
            var a = this;
            e = t.extend({
                width: 0,
                height: 0,
                min: n,
                max: n,
                margin: 0,
                complete: m,
                position: "center",
                crop: false,
                canvas: false,
                iframelimit: n
            }, e);
            if (this.isIframe) {
                var o = e.width,
                    r = e.height,
                    s, l;
                if (e.iframelimit) {
                    var c = g.min(e.iframelimit / o, e.iframelimit / r);
                    if (c < 1) {
                        s = o * c;
                        l = r * c;
                        t(this.image).css({
                            top: r / 2 - l / 2,
                            left: o / 2 - s / 2,
                            position: "absolute"
                        })
                    } else {
                        t(this.image).css({
                            top: 0,
                            left: 0
                        })
                    }
                }
                t(this.image).width(s || o).height(l || r).removeAttr("width").removeAttr("height");
                t(this.container).width(o).height(r);
                e.complete.call(a, a);
                try {
                    if (this.image.contentWindow) {
                        t(this.image.contentWindow).trigger("resize")
                    }
                } catch (u) {}
                return this.container
            }
            if (!this.image) {
                return this.container
            }
            var h, f, d = t(a.container),
                p;
            H.wait({
                until: function() {
                    h = e.width || d.width() || H.parseValue(d.css("width"));
                    f = e.height || d.height() || H.parseValue(d.css("height"));
                    return h && f
                },
                success: function() {
                    var i = (h - e.margin * 2) / a.original.width,
                        n = (f - e.margin * 2) / a.original.height,
                        o = g.min(i, n),
                        r = g.max(i, n),
                        s = {
                            "true": r,
                            width: i,
                            height: n,
                            "false": o,
                            landscape: a.original.width > a.original.height ? r : o,
                            portrait: a.original.width < a.original.height ? r : o
                        },
                        l = s[e.crop.toString()],
                        c = "";
                    if (e.max) {
                        l = g.min(e.max, l)
                    }
                    if (e.min) {
                        l = g.max(e.min, l)
                    }
                    t.each(["width", "height"], function(e, i) {
                        t(a.image)[i](a[i] = a.image[i] = g.round(a.original[i] * l))
                    });
                    t(a.container).width(h).height(f);
                    if (e.canvas && L) {
                        L.elem.width = a.width;
                        L.elem.height = a.height;
                        c = a.image.src + ":" + a.width + "x" + a.height;
                        a.image.src = L.cache[c] || function(t) {
                            L.context.drawImage(a.image, 0, 0, a.original.width * l, a.original.height * l);
                            try {
                                p = L.elem.toDataURL();
                                L.length += p.length;
                                L.cache[t] = p;
                                return p
                            } catch (e) {
                                return a.image.src
                            }
                        }(c)
                    }
                    var u = {},
                        d = {},
                        m = function(e, i, n) {
                            var o = 0;
                            if (/\%/.test(e)) {
                                var r = parseInt(e, 10) / 100,
                                    s = a.image[i] || t(a.image)[i]();
                                o = g.ceil(s * -1 * r + n * r)
                            } else {
                                o = H.parseValue(e)
                            }
                            return o
                        },
                        v = {
                            top: {
                                top: 0
                            },
                            left: {
                                left: 0
                            },
                            right: {
                                left: "100%"
                            },
                            bottom: {
                                top: "100%"
                            }
                        };
                    t.each(e.position.toLowerCase().split(" "), function(t, e) {
                        if (e === "center") {
                            e = "50%"
                        }
                        u[t ? "top" : "left"] = e
                    });
                    t.each(u, function(e, i) {
                        if (v.hasOwnProperty(i)) {
                            t.extend(d, v[i])
                        }
                    });
                    u = u.top ? t.extend(u, d) : d;
                    u = t.extend({
                        top: "50%",
                        left: "50%"
                    }, u);
                    t(a.image).css({
                        position: "absolute",
                        top: m(u.top, "height", f),
                        left: m(u.left, "width", h)
                    });
                    a.show();
                    a.ready = true;
                    e.complete.call(a, a)
                },
                error: function() {
                    i.raise("Could not scale image: " + a.image.src)
                },
                timeout: 1e3
            });
            return this
        }
    };
    t.extend(t.easing, {
        galleria: function(t, e, i, n, a) {
            if ((e /= a / 2) < 1) {
                return n / 2 * e * e * e + i
            }
            return n / 2 * ((e -= 2) * e * e + 2) + i
        },
        galleriaIn: function(t, e, i, n, a) {
            return n * (e /= a) * e + i
        },
        galleriaOut: function(t, e, i, n, a) {
            return -n * (e /= a) * (e - 2) + i
        }
    });
    i.Finger = function() {
        var n = g.abs;
        var r = i.HAS3D = function() {
            var e = a.createElement("p"),
                i, n = ["webkit", "O", "ms", "Moz", ""],
                o, r = 0,
                s = "transform";
            _().html.insertBefore(e, null);
            for (; n[r]; r++) {
                o = n[r] ? n[r] + "Transform" : s;
                if (e.style[o] !== undefined) {
                    e.style[o] = "translate3d(1px,1px,1px)";
                    i = t(e).css(n[r] ? "-" + n[r].toLowerCase() + "-" + s : s)
                }
            }
            _().html.removeChild(e);
            return i !== undefined && i.length > 0 && i !== "none"
        }();
        var s = function() {
            var t = "RequestAnimationFrame";
            return e.requestAnimationFrame || e["webkit" + t] || e["moz" + t] || e["o" + t] || e["ms" + t] || function(t) {
                e.setTimeout(t, 1e3 / 60)
            }
        }();
        var l = function(i, n) {
            this.config = {
                start: 0,
                duration: 500,
                onchange: function() {},
                oncomplete: function() {},
                easing: function(t, e, i, n, a) {
                    return -n * ((e = e / a - 1) * e * e * e - 1) + i
                }
            };
            this.easeout = function(t, e, i, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + i
            };
            if (!i.children.length) {
                return
            }
            var a = this;
            t.extend(this.config, n);
            this.elem = i;
            this.child = i.children[0];
            this.to = this.pos = 0;
            this.touching = false;
            this.start = {};
            this.index = this.config.start;
            this.anim = 0;
            this.easing = this.config.easing;
            if (!r) {
                this.child.style.position = "absolute";
                this.elem.style.position = "relative"
            }
            t.each(["ontouchstart", "ontouchmove", "ontouchend", "setup"], function(t, e) {
                a[e] = function(t) {
                    return function() {
                        t.apply(a, arguments)
                    }
                }(a[e])
            });
            this.setX = function() {
                var t = a.child.style;
                if (!r) {
                    t.left = a.pos + "px";
                    return
                }
                t.MozTransform = t.webkitTransform = t.transform = "translate3d(" + a.pos + "px,0,0)";
                return
            };
            t(i).on("touchstart", this.ontouchstart);
            t(e).on("resize", this.setup);
            t(e).on("orientationchange", this.setup);
            this.setup();
            ! function o() {
                s(o);
                a.loop.call(a)
            }()
        };
        l.prototype = {
            constructor: l,
            setup: function() {
                this.width = t(this.elem).width();
                this.length = g.ceil(t(this.child).width() / this.width);
                if (this.index !== 0) {
                    this.index = g.max(0, g.min(this.index, this.length - 1));
                    this.pos = this.to = -this.width * this.index
                }
            },
            setPosition: function(t) {
                this.pos = t;
                this.to = t
            },
            ontouchstart: function(t) {
                var e = t.originalEvent.touches;
                this.start = {
                    pageX: e[0].pageX,
                    pageY: e[0].pageY,
                    time: +new Date
                };
                this.isScrolling = null;
                this.touching = true;
                this.deltaX = 0;
                o.on("touchmove", this.ontouchmove);
                o.on("touchend", this.ontouchend)
            },
            ontouchmove: function(t) {
                var e = t.originalEvent.touches;
                if (e && e.length > 1 || t.scale && t.scale !== 1) {
                    return
                }
                this.deltaX = e[0].pageX - this.start.pageX;
                if (this.isScrolling === null) {
                    this.isScrolling = !!(this.isScrolling || g.abs(this.deltaX) < g.abs(e[0].pageY - this.start.pageY))
                }
                if (!this.isScrolling) {
                    t.preventDefault();
                    this.deltaX /= !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ? g.abs(this.deltaX) / this.width + 1.8 : 1;
                    this.to = this.deltaX - this.index * this.width
                }
                t.stopPropagation()
            },
            ontouchend: function(t) {
                this.touching = false;
                var e = +new Date - this.start.time < 250 && g.abs(this.deltaX) > 40 || g.abs(this.deltaX) > this.width / 2,
                    i = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
                if (!this.isScrolling) {
                    this.show(this.index + (e && !i ? this.deltaX < 0 ? 1 : -1 : 0))
                }
                o.off("touchmove", this.ontouchmove);
                o.off("touchend", this.ontouchend)
            },
            show: function(t) {
                if (t != this.index) {
                    this.config.onchange.call(this, t)
                } else {
                    this.to = -(t * this.width)
                }
            },
            moveTo: function(t) {
                if (t != this.index) {
                    this.pos = this.to = -(t * this.width);
                    this.index = t
                }
            },
            loop: function() {
                var t = this.to - this.pos,
                    e = 1;
                if (this.width && t) {
                    e = g.max(.5, g.min(1.5, g.abs(t / this.width)))
                }
                if (this.touching || g.abs(t) <= 1) {
                    this.pos = this.to;
                    t = 0;
                    if (this.anim && !this.touching) {
                        this.config.oncomplete(this.index)
                    }
                    this.anim = 0;
                    this.easing = this.config.easing
                } else {
                    if (!this.anim) {
                        this.anim = {
                            start: this.pos,
                            time: +new Date,
                            distance: t,
                            factor: e,
                            destination: this.to
                        }
                    }
                    var i = +new Date - this.anim.time;
                    var n = this.config.duration * this.anim.factor;
                    if (i > n || this.anim.destination != this.to) {
                        this.anim = 0;
                        this.easing = this.easeout;
                        return
                    }
                    this.pos = this.easing(null, i, this.anim.start, this.anim.distance, n)
                }
                this.setX()
            }
        };
        return l
    }();
    t.fn.galleria = function(e) {
        var n = this.selector;
        if (!t(this).length) {
            t(function() {
                if (t(n).length) {
                    t(n).galleria(e)
                } else {
                    i.utils.wait({
                        until: function() {
                            return t(n).length
                        },
                        success: function() {
                            t(n).galleria(e)
                        },
                        error: function() {
                            i.raise('Init failed: Galleria could not find the element "' + n + '".')
                        },
                        timeout: 5e3
                    })
                }
            });
            return this
        }
        return this.each(function() {
            if (t.data(this, "galleria")) {
                t.data(this, "galleria").destroy();
                t(this).find("*").hide()
            }
            t.data(this, "galleria", (new i).init(this, e))
        })
    };
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = i
    } else {
        e.Galleria = i;
        if (typeof define === "function" && define.amd) {
            define("galleria", ["jquery"], function() {
                return i
            })
        }
    }
}(jQuery, this);

/**
 * Galleria Classic Theme 2012-08-08
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */

(function($) {

/*global window, jQuery, Galleria */

Galleria.addTheme({
    name: 'classic',
    author: 'Galleria',
    css: 'assets/css/galleria.classic.css',
    defaults: {
        transition: 'slide',
        thumbCrop:  'height',

        // set this to false if you want to show the caption all the time:
        _toggleInfo: true
    },
    init: function(options) {

        Galleria.requires(1.4, 'This version of Classic theme requires Galleria 1.4 or later');

        // add some elements
        this.addElement('info-link','info-close');
        this.append({
            'info' : ['info-link','info-close']
        });

        // cache some stuff
        var info = this.$('info-link,info-close,info-text'),
            touch = Galleria.TOUCH;

        // show loader & counter with opacity
        this.$('loader,counter').show().css('opacity', 0.4);

        // some stuff for non-touch browsers
        if (! touch ) {
            this.addIdleState( this.get('image-nav-left'), { left:-50 });
            this.addIdleState( this.get('image-nav-right'), { right:-50 });
            this.addIdleState( this.get('counter'), { opacity:0 });
        }

        // toggle info
        if ( options._toggleInfo === true ) {
            info.bind( 'click:fast', function() {
                info.toggle();
            });
        } else {
            info.show();
            this.$('info-link, info-close').hide();
        }

        // bind some stuff
        this.bind('thumbnail', function(e) {

            if (! touch ) {
                // fade thumbnails
                $(e.thumbTarget).css('opacity', 0.6).parent().hover(function() {
                    $(this).not('.active').children().stop().fadeTo(100, 1);
                }, function() {
                    $(this).not('.active').children().stop().fadeTo(400, 0.6);
                });

                if ( e.index === this.getIndex() ) {
                    $(e.thumbTarget).css('opacity',1);
                }
            } else {
                $(e.thumbTarget).css('opacity', this.getIndex() ? 1 : 0.6).bind('click:fast', function() {
                    $(this).css( 'opacity', 1 ).parent().siblings().children().css('opacity', 0.6);
                });
            }
        });

        var activate = function(e) {
            $(e.thumbTarget).css('opacity',1).parent().siblings().children().css('opacity', 0.6);
        };

        this.bind('loadstart', function(e) {
            if (!e.cached) {
                this.$('loader').show().fadeTo(200, 0.4);
            }
            window.setTimeout(function() {
                activate(e);
            }, touch ? 300 : 0);
            this.$('info').toggle( this.hasInfo() );
        });

        this.bind('loadfinish', function(e) {
            this.$('loader').fadeOut(200);
        });
    }
});

}(jQuery));

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion="4.6.4",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ic?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Ic?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return isNaN(a)?b:a}function n(a,b){return m(+String(a).replace(b||"px",""))}function o(a){return/%$/.test(a)?n(a,"%"):e}function p(a,b){return m(o(a)/100*b,n(a))}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a}function r(a,b,c,d){return(a-(d||0))*(b+(c||0))}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[uc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),t(a))}function v(a,b){if(a.length){var c=a.data();Ic?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a)});return a.css(k(d)),d}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function x(a,b){return Math.round(a+(b-a)/1.5)}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"http://"),y.p}function z(a){var c=b.createElement("a");return c.href=a,c}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xc]=i[Zc]=i[Yc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight}function F(a){return!d.contains(b.documentElement,a)}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d)},c||100),G.i++}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:g,height:i,left:p(o.x,b.w-g),top:p(o.y,b.h-i)}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d}}return!0}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(cb(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function U(a){return!!a.getAttribute("disabled")}function V(a){return{tabindex:-1*a+"",disabled:a}}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c)})}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()}function Z(a){return a?">":"<"}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bd,y:q(a[1])||bd}}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qc,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ic?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_c,f)}function ab(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&ab.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Rb+" "+Qb),a.stop().addClass(Rb),b.stop().addClass(Qb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function bb(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function cb(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ed&&ed.type!==a.type&&gd||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,bb(a),l=ed=a,fd=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)))}function f(a){if(a.touches&&a.touches.length>1||Nc&&!a.isPrimary||fd!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();bb(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gd=!0,clearTimeout(hd),hd=setTimeout(function(){gd=!1},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}))}function i(){u.flow||setTimeout(function(){u.flow=!0},10)}function j(){u.flow&&setTimeout(function(){u.flow=!1},Pc)}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nc?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Ec.on("scroll",j),a.on("mousedown",e),Fc.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a)}),u}function db(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nc||a.addClass(ec)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nc||a.removeClass(ec),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pc,C=null,E=Qc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pc,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}))}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(cb(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D)}function eb(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Oc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Rc)),(b.onEnd||g)(a,b.shift?l:j)))}),i}function fb(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function gb(a){d.Fotorama.instances.push(a),fb()}function hb(a){d.Fotorama.instances.splice(a.index,1),fb()}var ib="fotorama",jb="fullscreen",kb=ib+"__wrap",lb=kb+"--css2",mb=kb+"--css3",nb=kb+"--video",ob=kb+"--fade",pb=kb+"--slide",qb=kb+"--no-controls",rb=kb+"--no-shadows",sb=kb+"--pan-y",tb=kb+"--rtl",ub=kb+"--only-active",vb=kb+"--no-captions",wb=kb+"--toggle-arrows",xb=ib+"__stage",yb=xb+"__frame",zb=yb+"--video",Ab=xb+"__shaft",Bb=ib+"__grab",Cb=ib+"__pointer",Db=ib+"__arr",Eb=Db+"--disabled",Fb=Db+"--prev",Gb=Db+"--next",Hb=ib+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=ib+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=ib+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=ib+"__active",Xb=ib+"__select",Yb=ib+"--hidden",Zb=ib+"--fullscreen",$b=ib+"__fullscreen-icon",_b=ib+"__error",ac=ib+"__loading",bc=ib+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=ib+"__grabbing",fc=ib+"__img",gc=fc+"--full",hc=ib+"__dot",ic=ib+"__thumb",jc=ic+"-border",kc=ib+"__html",lc=ib+"__video",mc=lc+"-play",nc=lc+"-close",oc=ib+"__caption",pc=ib+"__caption__wrap",qc=ib+"__spinner",rc='" tabindex="0" role="button',sc=d&&d.fn.jquery.split(".");if(!sc||sc[0]<1||1==sc[0]&&sc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tc={},uc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),vc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},wc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vc.ok=!0;else for(var xc=0,yc=wc.length;yc>xc;xc++)if(vc.prefix=wc[xc],"undefined"!=typeof b[vc.prefix+"CancelFullScreen"]){vc.ok=!0;break}vc.ok&&(vc.event=vc.prefix+"fullscreenchange",vc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},vc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},vc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var zc,Ac={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bc={top:"auto",left:"auto",className:""};!function(a,b){zc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Cc,Dc,Ec=d(a),Fc=d(b),Gc="quirks"===c.hash.replace("#",""),Hc=uc.csstransforms3d,Ic=Hc&&!Gc,Jc=Hc||"CSS1Compat"===b.compatMode,Kc=vc.ok,Lc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mc=!Ic||Lc,Nc=navigator.msPointerEnabled,Oc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pc=250,Qc=300,Rc=1400,Sc=5e3,Tc=2,Uc=64,Vc=500,Wc=333,Xc="$stageFrame",Yc="$navDotFrame",Zc="$navThumbFrame",$c="auto",_c=f([.1,0,.25,1]),ad=99999,bd="50%",cd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Tc,glimpse:0,fit:"contain",position:bd,thumbposition:bd,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Uc,thumbheight:Uc,thumbmargin:Tc,thumbborderwidth:Tc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dd={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1};var ed,fd,gd,hd;jQuery.Fotorama=function(a,e){function f(){d.each(yd,function(a,b){if(!b.i){b.i=me++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yd,ie),C(yd,{img:d.img,thumb:d.thumb},b.i,ie)}}})}function g(a){return Zd[a]||ie.fullScreen}function i(a){var b="keydown."+ib,c=ib+je,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fc.on(d,function(a){var b,c;Cd&&27===a.keyCode?(b=!0,md(Cd,!0,!0)):(ie.fullScreen||e.keyboard&&!ie.index)&&(27===a.keyCode?(b=!0,ie.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&ie.show({index:c,slow:a.altKey,user:!0})}),ie.index||Fc.off(b).on(b,"textarea, input, select",function(a){!Dc.hasClass(jb)&&a.stopPropagation()}),Ec.on(f,ie.resize)):(Fc.off(d),Ec.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(ib+" "+ke).append(qe).before(oe).before(pe),gb(ie)):(qe.detach(),oe.detach(),pe.detach(),a.html(ne.urtext).removeClass(ke),hb(ie)),i(b),j.f=b)}function m(){yd=ie.data=yd||P(e.data)||D(a),zd=ie.size=yd.length,!xd.ok&&e.shuffle&&O(yd),f(),Je=y(Je),zd&&j(!0)}function o(){var a=2>zd&&!e.enableifsingleframe||Cd;Me.noMove=a||Sd,Me.noSwipe=a||!e.swipe,!Wd&&se.toggleClass(Bb,!e.click&&!Me.noMove&&!Me.noSwipe),Nc&&qe.toggleClass(sb,!Me.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sc,1.5*Vd)}function u(){function a(a,c){b[a?"add":"remove"].push(c)}ie.options=e=R(e),Sd="crossfade"===e.transition||"dissolve"===e.transition,Md=e.loop&&(zd>2||Sd&&(!Wd||"slide"!==Wd)),Vd=+e.transitionduration||Qc,Yd="rtl"===e.direction,Zd=d.extend({},e.keyboard&&dd,e.keyboard);var b={add:[],remove:[]};zd>1||e.enableifsingleframe?(Nd=e.nav,Pd="top"===e.navposition,b.remove.push(Xb),we.toggle(!!e.arrows)):(Nd=!1,we.hide()),Rb(),Bd=new zc(d.extend(Ac,e.spinner,Bc,{direction:Yd?-1:1})),Gc(),Hc(),e.autoplay&&t(e.autoplay),Td=n(e.thumbwidth)||Uc,Ud=n(e.thumbheight)||Uc,Ne.ok=Pe.ok=e.trackpad&&!Mc,o(),ed(e,[Le]),Od="thumbs"===Nd,Od?(lc(zd,"navThumb"),Ad=Be,he=Zc,J(oe,d.Fotorama.jst.style({w:Td,h:Ud,b:e.thumbborderwidth,m:e.thumbmargin,s:je,q:!Jc})),ye.addClass(Lb).removeClass(Kb)):"dots"===Nd?(lc(zd,"navDot"),Ad=Ae,he=Yc,ye.addClass(Kb).removeClass(Lb)):(Nd=!1,ye.removeClass(Lb+" "+Kb)),Nd&&(Pd?xe.insertBefore(re):xe.insertAfter(re),wc.nav=!1,wc(Ad,ze,"nav")),Qd=e.allowfullscreen,Qd?(De.prependTo(re),Rd=Kc&&"native"===Qd):(De.detach(),Rd=!1),a(Sd,ob),a(!Sd,pb),a(!e.captions,vb),a(Yd,tb),a("always"!==e.arrows,wb),Xd=e.shadows&&!Mc,a(!Xd,rb),qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ke=d.extend({},e)}function x(a){return 0>a?(zd+a%zd)%zd:a>=zd?a%zd:a}function y(a){return h(a,0,zd-1)}function z(a){return Md?x(a):y(a)}function E(a){return a>0||Md?a-1:!1}function U(a){return zd-1>a||Md?a+1:!1}function $(){Me.min=Md?-1/0:-r(zd-1,Le.w,e.margin,Fd),Me.max=Md?1/0:-r(0,Le.w,e.margin,Fd),Me.snap=Le.w+e.margin}function bb(){Oe.min=Math.min(0,Le.nw-ze.width()),Oe.max=0,ze.toggleClass(Bb,!(Oe.noMove=Oe.min===Oe.max))}function cb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function fb(a,b,c,d){(!$d||"*"===$d&&d===Ld)&&(a=q(e.width)||q(a)||Vc,b=q(e.height)||q(b)||Wc,ie.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Ld&&"*"))}function Pb(a,b,c,f,g,h){cb(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fd(a,{index:b,src:w,frame:yd[b]})}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),n("load"),fb()):(k.trigger("f:error").removeClass(ac).addClass(_b),n("error")),m.state="error",!(zd>1&&yd[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,ie.splice(i,1))):(j[v]=w=y,Pb([i],b,c,f,g,!0))}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fb(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fc+(r?" "+gc:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Le,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(r?cc:dc)),"stage"===b?n("load"):(j.thumbratio===$c||!j.thumbratio&&e.thumbratio===$c)&&(j.thumbratio=u.measures.ratio,vd())},0)}function q(){var a=10;G(function(){return!fe||!a--&&!Mc},function(){p()})}if(k){var r=ie.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image,t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100)}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w}}})}function Qb(a){Ie.append(Bd.spin().el).appendTo(a)}function Rb(){Ie.detach(),Bd&&Bd.stop()}function Sb(){var a=Dd[Xc];a&&!a.data().state&&(Qb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Rb()}))}function ec(a){W(a,sd),X(a,function(){setTimeout(function(){Q(ye)},0),Rc({time:Vd,guessIndex:d(this).data().eq,minMax:Oe})})}function lc(a,b){cb(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kc+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(oc,N(pc,e.caption))).appendTo(f),e.video&&f.addClass(zb).append(Fe.clone()),X(i,function(){setTimeout(function(){Q(re)},0),pd({index:h.eq,user:!0})}),te=te.add(f)):"navDot"===b?(ec(i),Ae=Ae.add(f)):"navThumb"===b&&(ec(i),h.$wrap=f.children(":first"),Be=Be.add(f),e.video&&h.$wrap.append(Fe.clone()))}})}function sc(a,b,c,d){return a&&a.length&&I(a,b,c,d)}function tc(a){cb(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Re[Xc][i]=f.css(d.extend({left:Sd?0:r(b,Le.w,e.margin,Fd)},Sd&&l(0))),F(f[0])&&(f.appendTo(se),md(c.$video)),sc(h.$img,Le,j,k),sc(h.$full,Le,j,k)}})}function uc(a,b){if("thumbs"===Nd&&!isNaN(a)){var c=-a,f=-a+Le.nw;Be.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function(){return{h:Ud,w:g.w}},j=i(),k=yd[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sc(g.$img,j,l,m)||b&&Pb([h],"navThumb",i,l,m)})}}function wc(a,b,c){if(!wc[c]){var f="nav"===c&&Od,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yd.length;f>e;e++)if(c.data===yd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Ud*b.data.thumbratio)||Td;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),wc[c]=!0}}function xc(a){return a-Se>Le.w/3}function yc(a){return!(Md||Je+a&&Je-zd+a||Cd)}function Gc(){var a=yc(0),b=yc(1);ue.toggleClass(Eb,a).attr(V(a)),ve.toggleClass(Eb,b).attr(V(b))}function Hc(){Ne.ok&&(Ne.prevent={"<":yc(0),">":yc(1)})}function Lc(a){var b,c,d=a.data();return Od?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Le.w-c-10*e.thumbmargin}}function Oc(a){var b=Dd[he].data();_(Ce,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Rc(a){var b=yd[a.guessIndex][he];if(b){var c=Oe.min!==Oe.max,d=a.minMax||c&&Lc(Dd[he]),e=c&&(a.keep&&Rc.l?Rc.l:h((a.coo||Le.nw/2)-Lc(b).c,d.min,d.max)),f=c&&h(e,Oe.min,Oe.max),g=1.1*a.time;_(ze,{time:g,pos:f||0,onEnd:function(){uc(f,!0)}}),ld(ye,K(f,Oe.min,Oe.max)),Rc.l=e}}function Tc(){_c(he),Qe[he].push(Dd[he].addClass(Wb))}function _c(a){for(var b=Qe[a];b.length;)b.shift().removeClass(Wb)}function bd(a){var b=Re[a];d.each(Ed,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function cd(a){Fd=Gd=Je;var b=Dd[Xc];b&&(_c(Xc),Qe[Xc].push(b.addClass(Wb)),a||ie.show.onEnd(!0),v(se,0,!0),bd(Xc),tc(Ed),$(),bb())}function ed(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)})})}function fd(b,c){a.trigger(ib+":"+b,[ie,c])}function gd(){clearTimeout(hd.t),fe=1,e.stopautoplayontouch?ie.stopAutoplay():ce=!0}function hd(){fe&&(e.stopautoplayontouch||(id(),jd()),hd.t=setTimeout(function(){fe=0},Qc+Pc))}function id(){ce=!(!Cd&&!de)}function jd(){if(clearTimeout(jd.t),G.stop(jd.w),!e.autoplay||ce)return void(ie.autoplay&&(ie.autoplay=!1,fd("stopautoplay")));ie.autoplay||(ie.autoplay=!0,fd("startautoplay"));var a=Je,b=Dd[Xc].data();jd.w=G(function(){return b.state||a!==Je},function(){jd.t=setTimeout(function(){if(!ce&&a===Je){var b=Kd,c=yd[b][Xc].data();jd.w=G(function(){return c.state||b!==Kd},function(){ce||b!==Kd||ie.show(Md?Z(!Yd):Kd)})}},e.autoplay)})}function kd(){ie.fullScreen&&(ie.fullScreen=!1,Kc&&vc.cancel(le),Dc.removeClass(jb),Cc.removeClass(jb),a.removeClass(Zb).insertAfter(pe),Le=d.extend({},ee),md(Cd,!0,!0),rd("x",!1),ie.resize(),Pb(Ed,"stage"),Q(Ec,ae,_d),fd("fullscreenexit"))}function ld(a,b){Xd&&(a.removeClass(Ub+" "+Vb),b&&!Cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")))}function md(a,b,c){b&&(qe.removeClass(nb),Cd=!1,o()),a&&a!==Cd&&(a.remove(),fd("unloadvideo")),c&&(id(),jd())}function nd(a){qe.toggleClass(qb,a)}function od(a){if(!Me.flow){var b=a?a.pageX:od.x,c=b&&!yc(xc(b))&&e.click;od.p!==c&&re.toggleClass(Cb,c)&&(od.p=c,od.x=b)}}function pd(a){clearTimeout(pd.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;ie.setOptions({transition:e.clicktransition}),Wd=b,pd.t=setTimeout(function(){ie.show(a)},10)},0):ie.show(a)}function qd(a,b){var c=a.target,f=d(c);f.hasClass(mc)?ie.playVideo():c===Ee?ie.toggleFullScreen():Cd?c===He&&md(Cd,!0,!0):b?nd():e.click&&pd({index:a.shiftKey||Z(xc(a._x)),slow:a.altKey,user:!0})}function rd(a,b){Me[a]=Oe[a]=b}function sd(a){var b=d(this).data().eq;pd({index:b,slow:a.altKey,user:!0,coo:a._x-ye.offset().left})}function td(a){pd({index:we.index(this)?">":"<",slow:a.altKey,user:!0})}function ud(a){X(a,function(){setTimeout(function(){Q(re)},0),nd(!1)})}function vd(){if(m(),u(),!vd.i){vd.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Ld=L(a||c.hash.replace(/^#/,""),yd,0===ie.index||a,a)),Je=Fd=Gd=Hd=Ld=z(Ld)||0}if(zd){if(wd())return;Cd&&md(Cd,!0),Ed=[],bd(Xc),vd.ok=!0,ie.show({index:Je,time:0}),ie.resize()}else ie.destroy()}function wd(){return!wd.f===Yd?(wd.f=Yd,Je=zd-1-Je,ie.reverse(),!0):void 0}function xd(){xd.ok||(xd.ok=!0,fd("ready"))}Cc=d("html"),Dc=d("body");var yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie=this,je=d.now(),ke=ib+je,le=a[0],me=1,ne=a.data(),oe=d("<style></style>"),pe=d(N(Yb)),qe=d(N(kb)),re=d(N(xb)).appendTo(qe),se=(re[0],d(N(Ab)).appendTo(re)),te=d(),ue=d(N(Db+" "+Fb+rc)),ve=d(N(Db+" "+Gb+rc)),we=ue.add(ve).appendTo(re),xe=d(N(Ib)),ye=d(N(Hb)).appendTo(xe),ze=d(N(Jb)).appendTo(ye),Ae=d(),Be=d(),Ce=(se.data(),ze.data(),d(N(jc)).appendTo(ze)),De=d(N($b+rc)),Ee=De[0],Fe=d(N(mc)),Ge=d(N(nc)).appendTo(re),He=Ge[0],Ie=d(N(qc)),Je=!1,Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe={},Re={},Se=0,Te=[];
qe[Xc]=d(N(yb)),qe[Zc]=d(N(Mb+" "+Ob+rc,N(ic))),qe[Yc]=d(N(Mb+" "+Nb+rc,N(hc))),Qe[Xc]=[],Qe[Zc]=[],Qe[Yc]=[],Re[Xc]={},qe.addClass(Ic?mb:lb).toggleClass(qb,!e.controlsonstart),ne.fotorama=this,ie.startAutoplay=function(a){return ie.autoplay?this:(ce=de=!1,t(a||e.autoplay),jd(),this)},ie.stopAutoplay=function(){return ie.autoplay&&(ce=de=!0,jd()),this},ie.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Gd+1:"<"===b?Gd-1:"<<"===b?0:">>"===b?zd-1:b,b=isNaN(b)?L(b,yd,!0):b,b="undefined"==typeof b?Je||0:b,ie.activeIndex=Je=z(b),Id=E(Je),Jd=U(Je),Kd=x(Je+(Yd?-1:1)),Ed=[Je,Id,Jd],Gd=Md?b:Je;var c=Math.abs(Hd-Gd),d=w(a.time,function(){return Math.min(Vd*(1+(c-1)/12),2*Vd)}),f=a.overPos;a.slow&&(d*=10);var g=Dd;ie.activeFrame=Dd=yd[Je];var i=g===Dd&&!a.user;md(Cd,Dd.i!==yd[x(Fd)].i),lc(Ed,"stage"),tc(Mc?[Gd]:[Gd,E(Gd),U(Gd)]),rd("go",!0),i||fd("show",{user:a.user,time:d}),ce=!0;var j=ie.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cd(!0),i||fd("showend",{user:a.user}),!b&&Wd&&Wd!==e.transition)return ie.setOptions({transition:Wd}),void(Wd=!1);Sb(),Pb(Ed,"stage"),rd("go",!1),Hc(),od(),id(),jd()}};if(Sd){var k=Dd[Xc],l=Je!==Hd?yd[Hd][Xc]:null;ab(k,l,te,{time:d,method:e.transition,onEnd:j},Te)}else _(se,{pos:-r(Gd,Le.w,e.margin,Fd),overPos:f,time:d,onEnd:j});if(Gc(),Nd){Tc();var m=y(Je+h(Gd-Hd,-1,1));Rc({time:d,coo:m!==Je&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Je,keep:i}),Od&&Oc(d)}return be="undefined"!=typeof Hd&&Hd!==Je,Hd=Je,e.hash&&be&&!ie.eq&&H(Dd.id||Je+1),this},ie.requestFullScreen=function(){return Qd&&!ie.fullScreen&&(_d=Ec.scrollTop(),ae=Ec.scrollLeft(),Q(Ec),rd("x",!0),ee=d.extend({},Le),a.addClass(Zb).appendTo(Dc.addClass(jb)),Cc.addClass(jb),md(Cd,!0,!0),ie.fullScreen=!0,Rd&&vc.request(le),ie.resize(),Pb(Ed,"stage"),Sb(),fd("fullscreenenter")),this},ie.cancelFullScreen=function(){return Rd&&vc.is()?vc.cancel(b):kd(),this},ie.toggleFullScreen=function(){return ie[(ie.fullScreen?"cancel":"request")+"FullScreen"]()},T(b,vc.event,function(){!yd||vc.is()||Cd||kd()}),ie.resize=function(a){if(!yd)return this;var b=arguments[1]||0,c=arguments[2];ed(ie.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Le,c||ie.fullScreen||e]);var d=Le.width,f=Le.height,g=Le.ratio,i=Ec.height()-(Nd?ye.height():0);return q(d)&&(qe.addClass(ub).css({width:d,minWidth:Le.minwidth||0,maxWidth:Le.maxwidth||ad}),d=Le.W=Le.w=qe.width(),Le.nw=Nd&&p(e.navwidth,d)||d,e.glimpse&&(Le.w-=Math.round(2*(p(e.glimpse,d)||0))),se.css({width:Le.w,marginLeft:(Le.W-Le.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Le.h=Math.round(h(f,p(Le.minheight,i),p(Le.maxheight,i))),re.stop().animate({width:d,height:f},b,function(){qe.removeClass(ub)}),cd(),Nd&&(ye.stop().animate({width:Le.nw},b),Rc({guessIndex:Je,time:b,keep:!0}),Od&&wc.nav&&Oc(b)),$d=c||!0,xd())),Se=re.offset().left,this},ie.setOptions=function(a){return d.extend(e,a),vd(),this},ie.shuffle=function(){return yd&&O(yd)&&vd(),this},ie.destroy=function(){return ie.cancelFullScreen(),ie.stopAutoplay(),yd=ie.data=null,j(),Ed=[],bd(Xc),vd.ok=!1,this},ie.playVideo=function(){var a=Dd,b=a.video,c=Je;return"object"==typeof b&&a.videoReady&&(Rd&&ie.fullScreen&&ie.cancelFullScreen(),G(function(){return!vc.is()||c!==Je},function(){c===Je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xc]),qe.addClass(nb),Cd=a.$video,o(),we.blur(),De.blur(),fd("loadvideo"))})),this},ie.stopVideo=function(){return md(Cd,!0,!0),this},re.on("mousemove",od),Me=db(se,{onStart:gd,onMove:function(a,b){ld(re,b.edge)},onTouchEnd:hd,onEnd:function(a){ld(re);var b=(Nc&&!ge||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Le.w,e.margin,Fd);ie.show({index:c,time:Sd?Vd:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||qd(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:re}),Oe=db(ze,{onStart:gd,onMove:function(a,b){ld(ye,b.edge)},onTouchEnd:hd,onEnd:function(a){function b(){Rc.l=a.newPos,id(),jd(),uc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(ce=!0,_(ze,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Xd&&ld(ye,K(a.newPos,Oe.min,Oe.max))):b();else{var c=a.$target.closest("."+Mb,ze)[0];c&&sd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ye}),Ne=eb(re,{shift:!0,onEnd:function(a,b){gd(),hd(),ie.show({index:b,slow:a.altKey})}}),Pe=eb(ye,{onEnd:function(a,b){gd(),hd();var c=v(ze)+.25*b;ze.css(k(h(c,Oe.min,Oe.max))),Xd&&ld(ye,K(c,Oe.min,Oe.max)),Pe.prevent={"<":c>=Oe.max,">":c<=Oe.min},clearTimeout(Pe.t),Pe.t=setTimeout(function(){Rc.l=c,uc(c,!0)},Pc),uc(c)}}),qe.hover(function(){setTimeout(function(){fe||nd(!(ge=!0))},0)},function(){ge&&nd(!(ge=!1))}),M(we,function(a){Y(a),td.call(this,a)},{onStart:function(){gd(),Me.control=!0},onTouchEnd:hd}),we.each(function(){W(this,function(a){td.call(this,a)}),ud(this)}),W(Ee,ie.toggleFullScreen),ud(Ee),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ie[b]=function(){return yd=yd||[],"load"!==b?Array.prototype[b].apply(yd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(yd=P(arguments[0])),vd(),ie}}),vd()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cd,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";tc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(tc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n'},d(function(){d("."+ib+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);
/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
!function(t,n){function e(t){return"object"==typeof t}function o(t){return"string"==typeof t}function i(t){return"number"==typeof t}function a(t){return t===n}function r(){q=google.maps,A||(A={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:function(){var n={};return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "),function(t,e){n[e]=q[e]}),n}(),map:{mapTypeId:q.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(t,n){return a(t)?"gmap3_"+(n?Z+1:++Z):t}function u(t){var n,e=q.version.split(".");for(t=t.split("."),n=0;n<e.length;n++)e[n]=parseInt(e[n],10);for(n=0;n<t.length;n++){if(t[n]=parseInt(t[n],10),!e.hasOwnProperty(n))return!1;if(e[n]<t[n])return!1}return!0}function l(n,e,o,i,a){function r(e,i){e&&t.each(e,function(t,e){var r=n,s=e;R(e)&&(r=e[0],s=e[1]),i(o,t,function(t){s.apply(r,[a||o,t,u])})})}var s=e.td||{},u={id:i,data:s.data,tag:s.tag};r(s.events,q.event.addListener),r(s.onces,q.event.addListenerOnce)}function d(t){var n,e=[];for(n in t)t.hasOwnProperty(n)&&e.push(n);return e}function c(t,n){var e,o=arguments;for(e=2;e<o.length;e++)if(n in o[e]&&o[e].hasOwnProperty(n))return void(t[n]=o[e][n])}function p(n,e){var o,i,a=["data","tag","id","events","onces"],r={};if(n.td)for(o in n.td)n.td.hasOwnProperty(o)&&"options"!==o&&"values"!==o&&(r[o]=n.td[o]);for(i=0;i<a.length;i++)c(r,a[i],e,n.td);return r.options=t.extend({},n.opts||{},e.options||{}),r}function f(){if(A.verbose){var t,n=[];if(window.console&&z(console.error)){for(t=0;t<arguments.length;t++)n.push(arguments[t]);console.error.apply(console,n)}else{for(n="",t=0;t<arguments.length;t++)n+=arguments[t].toString()+" ";alert(n)}}}function g(t){return(i(t)||o(t))&&""!==t&&!isNaN(t)}function h(t){var n,o=[];if(!a(t))if(e(t))if(i(t.length))o=t;else for(n in t)o.push(t[n]);else o.push(t);return o}function v(n){return n?z(n)?n:(n=h(n),function(o){var i;if(a(o))return!1;if(e(o)){for(i=0;i<o.length;i++)if(t.inArray(o[i],n)>=0)return!0;return!1}return t.inArray(o,n)>=0}):void 0}function m(t,n,e){var i=n?t:null;return!t||o(t)?i:t.latLng?m(t.latLng):t instanceof q.LatLng?t:g(t.lat)?new q.LatLng(t.lat,t.lng):!e&&R(t)&&g(t[0])&&g(t[1])?new q.LatLng(t[0],t[1]):i}function y(t){var n,e;return!t||t instanceof q.LatLngBounds?t||null:(R(t)?2===t.length?(n=m(t[0]),e=m(t[1])):4===t.length&&(n=m([t[0],t[1]]),e=m([t[2],t[3]])):"ne"in t&&"sw"in t?(n=m(t.ne),e=m(t.sw)):"n"in t&&"e"in t&&"s"in t&&"w"in t&&(n=m([t.n,t.e]),e=m([t.s,t.w])),n&&e?new q.LatLngBounds(e,n):null)}function w(t,n,e,i,a){var r=e?m(i.td,!1,!0):!1,s=r?{latLng:r}:i.td.address?o(i.td.address)?{address:i.td.address}:i.td.address:!1,u=s?G.get(s):!1,l=this;s?(a=a||0,u?(i.latLng=u.results[0].geometry.location,i.results=u.results,i.status=u.status,n.apply(t,[i])):(s.location&&(s.location=m(s.location)),s.bounds&&(s.bounds=y(s.bounds)),M().geocode(s,function(o,r){r===q.GeocoderStatus.OK?(G.store(s,{results:o,status:r}),i.latLng=o[0].geometry.location,i.results=o,i.status=r,n.apply(t,[i])):r===q.GeocoderStatus.OVER_QUERY_LIMIT&&a<A.queryLimit.attempt?setTimeout(function(){w.apply(l,[t,n,e,i,a+1])},A.queryLimit.delay+Math.floor(Math.random()*A.queryLimit.random)):(f("geocode failed",r,s),i.latLng=i.results=!1,i.status=r,n.apply(t,[i]))}))):(i.latLng=m(i.td,!1,!0),n.apply(t,[i]))}function L(n,e,o,i){function a(){do s++;while(s<n.length&&!("address"in n[s]));return s>=n.length?void o.apply(e,[i]):void w(r,function(e){delete e.td,t.extend(n[s],e),a.apply(r,[])},!0,{td:n[s]})}var r=this,s=-1;a()}function b(t,n,e){var o=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){o||(o=!0,e.latLng=new q.LatLng(i.coords.latitude,i.coords.longitude),n.apply(t,[e]))},function(){o||(o=!0,e.latLng=!1,n.apply(t,[e]))},e.opts.getCurrentPosition):(e.latLng=!1,n.apply(t,[e]))}function x(t){var n,o=!1;if(e(t)&&t.hasOwnProperty("get")){for(n in t)if("get"!==n)return!1;o=!t.get.hasOwnProperty("callback")}return o}function M(){return V.geocoder||(V.geocoder=new q.Geocoder),V.geocoder}function I(){var t=[];this.get=function(n){if(t.length){var o,i,a,r,s,u=d(n);for(o=0;o<t.length;o++){for(r=t[o],s=u.length===r.keys.length,i=0;i<u.length&&s;i++)a=u[i],s=a in r.request,s&&(s=e(n[a])&&"equals"in n[a]&&z(n[a])?n[a].equals(r.request[a]):n[a]===r.request[a]);if(s)return r.results}}},this.store=function(n,e){t.push({request:n,keys:d(n),results:e})}}function P(){var t=[],n=this;n.empty=function(){return!t.length},n.add=function(n){t.push(n)},n.get=function(){return t.length?t[0]:!1},n.ack=function(){t.shift()}}function k(){function n(t){return{id:t.id,name:t.name,object:t.obj,tag:t.tag,data:t.data}}function e(t){z(t.setMap)&&t.setMap(null),z(t.remove)&&t.remove(),z(t.free)&&t.free(),t=null}var o={},i={},r=this;r.add=function(t,n,e,a){var u=t.td||{},l=s(u.id);return o[n]||(o[n]=[]),l in i&&r.clearById(l),i[l]={obj:e,sub:a,name:n,id:l,tag:u.tag,data:u.data},o[n].push(l),l},r.getById=function(t,e,o){var a=!1;return t in i&&(a=e?i[t].sub:o?n(i[t]):i[t].obj),a},r.get=function(t,e,a,r){var s,u,l=v(a);if(!o[t]||!o[t].length)return null;for(s=o[t].length;s;)if(s--,u=o[t][e?s:o[t].length-s-1],u&&i[u]){if(l&&!l(i[u].tag))continue;return r?n(i[u]):i[u].obj}return null},r.all=function(t,e,r){var s=[],u=v(e),l=function(t){var e,a;for(e=0;e<o[t].length;e++)if(a=o[t][e],a&&i[a]){if(u&&!u(i[a].tag))continue;s.push(r?n(i[a]):i[a].obj)}};if(t in o)l(t);else if(a(t))for(t in o)l(t);return s},r.rm=function(t,n,e){var a,s;if(!o[t])return!1;if(n)if(e)for(a=o[t].length-1;a>=0&&(s=o[t][a],!n(i[s].tag));a--);else for(a=0;a<o[t].length&&(s=o[t][a],!n(i[s].tag));a++);else a=e?o[t].length-1:0;return a in o[t]?r.clearById(o[t][a],a):!1},r.clearById=function(t,n){if(t in i){var r,s=i[t].name;for(r=0;a(n)&&r<o[s].length;r++)t===o[s][r]&&(n=r);return e(i[t].obj),i[t].sub&&e(i[t].sub),delete i[t],o[s].splice(n,1),!0}return!1},r.objGetById=function(t){var n,e;if(o.clusterer)for(e in o.clusterer)if((n=i[o.clusterer[e]].obj.getById(t))!==!1)return n;return!1},r.objClearById=function(t){var n;if(o.clusterer)for(n in o.clusterer)if(i[o.clusterer[n]].obj.clearById(t))return!0;return null},r.clear=function(t,n,e,i){var a,s,u,l=v(i);if(t&&t.length)t=h(t);else{t=[];for(a in o)t.push(a)}for(s=0;s<t.length;s++)if(u=t[s],n)r.rm(u,l,!0);else if(e)r.rm(u,l,!1);else for(;r.rm(u,l,!1););},r.objClear=function(n,e,a,r){var s;if(o.clusterer&&(t.inArray("marker",n)>=0||!n.length))for(s in o.clusterer)i[o.clusterer[s]].obj.clear(e,a,r)}}function B(n,e,i){function a(t){var n={};return n[t]={},n}function r(){var t;for(t in i)if(i.hasOwnProperty(t)&&!u.hasOwnProperty(t))return t}var s,u={},l=this,d={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};o(i)&&(i=a(i)),l.run=function(){for(var o,a;o=r();){if(z(n[o]))return s=o,a=t.extend(!0,{},A[o]||{},i[o].options||{}),void(o in d.latLng?i[o].values?L(i[o].values,n,n[o],{td:i[o],opts:a,session:u}):w(n,n[o],d.latLng[o],{td:i[o],opts:a,session:u}):o in d.geoloc?b(n,n[o],{td:i[o],opts:a,session:u}):n[o].apply(n,[{td:i[o],opts:a,session:u}]));u[o]=null}e.apply(n,[i,u])},l.ack=function(t){u[s]=t,l.run.apply(l,[])}}function j(){return V.ds||(V.ds=new q.DirectionsService),V.ds}function O(){return V.dms||(V.dms=new q.DistanceMatrixService),V.dms}function C(){return V.mzs||(V.mzs=new q.MaxZoomService),V.mzs}function E(){return V.es||(V.es=new q.ElevationService),V.es}function S(t){function n(){var t=this;return t.onAdd=function(){},t.onRemove=function(){},t.draw=function(){},A.classes.OverlayView.apply(t,[])}n.prototype=A.classes.OverlayView.prototype;var e=new n;return e.setMap(t),e}function T(n,o,i){function a(t){T[t]||(delete _[t].options.map,T[t]=new A.classes.Marker(_[t].options),l(n,{td:_[t]},T[t],_[t].id))}function r(){return(y=U.getProjection())?(P=!0,j.push(q.event.addListener(o,"zoom_changed",f)),j.push(q.event.addListener(o,"bounds_changed",f)),void h()):void setTimeout(function(){r.apply(B,[])},25)}function u(t){e(O[t])?(z(O[t].obj.setMap)&&O[t].obj.setMap(null),z(O[t].obj.remove)&&O[t].obj.remove(),z(O[t].shadow.remove)&&O[t].obj.remove(),z(O[t].shadow.setMap)&&O[t].shadow.setMap(null),delete O[t].obj,delete O[t].shadow):T[t]&&T[t].setMap(null),delete O[t]}function d(){var t,n,e,o,i,a,r,s,u=Math.cos,l=Math.sin,d=arguments;return d[0]instanceof q.LatLng?(t=d[0].lat(),e=d[0].lng(),d[1]instanceof q.LatLng?(n=d[1].lat(),o=d[1].lng()):(n=d[1],o=d[2])):(t=d[0],e=d[1],d[2]instanceof q.LatLng?(n=d[2].lat(),o=d[2].lng()):(n=d[2],o=d[3])),i=Math.PI*t/180,a=Math.PI*e/180,r=Math.PI*n/180,s=Math.PI*o/180,6371e3*Math.acos(Math.min(u(i)*u(r)*u(a)*u(s)+u(i)*l(a)*u(r)*l(s)+l(i)*l(r),1))}function c(){var t=d(o.getCenter(),o.getBounds().getNorthEast()),n=new q.Circle({center:o.getCenter(),radius:1.25*t});return n.getBounds()}function p(){var t,n={};for(t in O)n[t]=!0;return n}function f(){clearTimeout(m),m=setTimeout(h,25)}function g(t){var n=y.fromLatLngToDivPixel(t),e=y.fromDivPixelToLatLng(new q.Point(n.x+i.radius,n.y-i.radius)),o=y.fromDivPixelToLatLng(new q.Point(n.x-i.radius,n.y+i.radius));return new q.LatLngBounds(o,e)}function h(){if(!x&&!I&&P){var n,e,a,r,s,l,d,f,h,v,m,y=!1,b=[],B={},j=o.getZoom(),C="maxZoom"in i&&j>i.maxZoom,E=p();for(M=!1,j>3&&(s=c(),y=s.getSouthWest().lng()<s.getNorthEast().lng()),n=0;n<_.length;n++)!_[n]||y&&!s.contains(_[n].options.position)||w&&!w(D[n])||b.push(n);for(;;){for(n=0;B[n]&&n<b.length;)n++;if(n===b.length)break;if(r=[],k&&!C){m=10;do for(f=r,r=[],m--,d=f.length?s.getCenter():_[b[n]].options.position,s=g(d),e=n;e<b.length;e++)B[e]||s.contains(_[b[e]].options.position)&&r.push(e);while(f.length<r.length&&r.length>1&&m)}else for(e=n;e<b.length;e++)if(!B[e]){r.push(e);break}for(l={indexes:[],ref:[]},h=v=0,a=0;a<r.length;a++)B[r[a]]=!0,l.indexes.push(b[r[a]]),l.ref.push(b[r[a]]),h+=_[b[r[a]]].options.position.lat(),v+=_[b[r[a]]].options.position.lng();h/=r.length,v/=r.length,l.latLng=new q.LatLng(h,v),l.ref=l.ref.join("-"),l.ref in E?delete E[l.ref]:(1===r.length&&(O[l.ref]=!0),L(l))}t.each(E,function(t){u(t)}),I=!1}}var m,y,w,L,b,x=!1,M=!1,I=!1,P=!1,k=!0,B=this,j=[],O={},C={},E={},T=[],_=[],D=[],U=S(o,i.radius);r(),B.getById=function(t){return t in C?(a(C[t]),T[C[t]]):!1},B.rm=function(t){var n=C[t];T[n]&&T[n].setMap(null),delete T[n],T[n]=!1,delete _[n],_[n]=!1,delete D[n],D[n]=!1,delete C[t],delete E[n],M=!0},B.clearById=function(t){return t in C?(B.rm(t),!0):void 0},B.clear=function(t,n,e){var o,i,a,r,s,u=[],l=v(e);for(t?(o=_.length-1,i=-1,a=-1):(o=0,i=_.length,a=1),r=o;r!==i&&(!_[r]||l&&!l(_[r].tag)||(u.push(E[r]),!n&&!t));r+=a);for(s=0;s<u.length;s++)B.rm(u[s])},B.add=function(t,n){t.id=s(t.id),B.clearById(t.id),C[t.id]=T.length,E[T.length]=t.id,T.push(null),_.push(t),D.push(n),M=!0},B.addMarker=function(t,e){e=e||{},e.id=s(e.id),B.clearById(e.id),e.options||(e.options={}),e.options.position=t.getPosition(),l(n,{td:e},t,e.id),C[e.id]=T.length,E[T.length]=e.id,T.push(t),_.push(e),D.push(e.data||{}),M=!0},B.td=function(t){return _[t]},B.value=function(t){return D[t]},B.marker=function(t){return t in T?(a(t),T[t]):!1},B.markerIsSet=function(t){return Boolean(T[t])},B.setMarker=function(t,n){T[t]=n},B.store=function(t,n,e){O[t.ref]={obj:n,shadow:e}},B.free=function(){var n;for(n=0;n<j.length;n++)q.event.removeListener(j[n]);j=[],t.each(O,function(t){u(t)}),O={},t.each(_,function(t){_[t]=null}),_=[],t.each(T,function(t){T[t]&&(T[t].setMap(null),delete T[t])}),T=[],t.each(D,function(t){delete D[t]}),D=[],C={},E={}},B.filter=function(t){w=t,h()},B.enable=function(t){k!==t&&(k=t,h())},B.display=function(t){L=t},B.error=function(t){b=t},B.beginUpdate=function(){x=!0},B.endUpdate=function(){x=!1,M&&h()},B.autofit=function(t){var n;for(n=0;n<_.length;n++)_[n]&&t.extend(_[n].options.position)}}function _(t,n){var e=this;e.id=function(){return t},e.filter=function(t){n.filter(t)},e.enable=function(){n.enable(!0)},e.disable=function(){n.enable(!1)},e.add=function(t,e,o){o||n.beginUpdate(),n.addMarker(t,e),o||n.endUpdate()},e.getById=function(t){return n.getById(t)},e.clearById=function(t,e){var o;return e||n.beginUpdate(),o=n.clearById(t),e||n.endUpdate(),o},e.clear=function(t,e,o,i){i||n.beginUpdate(),n.clear(t,e,o),i||n.endUpdate()}}function D(n,e,o,i){var a=this,r=[];A.classes.OverlayView.call(a),a.setMap(n),a.onAdd=function(){var n=a.getPanes();e.pane in n&&t(n[e.pane]).append(i),t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(n,e){r.push(q.event.addDomListener(i[0],e,function(n){t.Event(n).stopPropagation(),q.event.trigger(a,e,[n]),a.draw()}))}),r.push(q.event.addDomListener(i[0],"contextmenu",function(n){t.Event(n).stopPropagation(),q.event.trigger(a,"rightclick",[n]),a.draw()}))},a.getPosition=function(){return o},a.setPosition=function(t){o=t,a.draw()},a.draw=function(){var t=a.getProjection().fromLatLngToDivPixel(o);i.css("left",t.x+e.offset.x+"px").css("top",t.y+e.offset.y+"px")},a.onRemove=function(){var t;for(t=0;t<r.length;t++)q.event.removeListener(r[t]);i.remove()},a.hide=function(){i.hide()},a.show=function(){i.show()},a.toggle=function(){i&&(i.is(":visible")?a.show():a.hide())},a.toggleDOM=function(){a.setMap(a.getMap()?null:n)},a.getDOMElement=function(){return i[0]}}function U(i){function r(){!b&&(b=M.get())&&b.run()}function d(){b=null,M.ack(),r.call(x)}function c(t){var n,e=t.td.callback;e&&(n=Array.prototype.slice.call(arguments,1),z(e)?e.apply(i,n):R(e)&&z(e[1])&&e[1].apply(e[0],n))}function g(t,n,e){e&&l(i,t,n,e),c(t,n),b.ack(n)}function v(n,e){e=e||{};var o=e.td&&e.td.options?e.td.options:0;S?o&&(o.center&&(o.center=m(o.center)),S.setOptions(o)):(o=e.opts||t.extend(!0,{},A.map,o||{}),o.center=n||m(o.center),S=new A.classes.Map(i.get(0),o))}function w(e){var o,a,r=new T(i,S,e),s={},u={},d=[],c=/^[0-9]+$/;for(a in e)c.test(a)?(d.push(1*a),u[a]=e[a],u[a].width=u[a].width||0,u[a].height=u[a].height||0):s[a]=e[a];return d.sort(function(t,n){return t>n}),o=s.calculator?function(n){var e=[];return t.each(n,function(t,n){e.push(r.value(n))}),s.calculator.apply(i,[e])}:function(t){return t.length},r.error(function(){f.apply(x,arguments)}),r.display(function(a){var c,p,f,g,h,v,y=o(a.indexes);if(e.force||y>1)for(c=0;c<d.length;c++)d[c]<=y&&(p=u[d[c]]);p?(h=p.offset||[-p.width/2,-p.height/2],f=t.extend({},s),f.options=t.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in h?h.x:h[0])||0,y:("y"in h?h.y:h[1])||0}},s.options||{}),g=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),f.options.pane="floatShadow",f.options.content=t(document.createElement("div")).width(p.width+"px").height(p.height+"px").css({cursor:"pointer"}),v=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),s.data={latLng:m(a),markers:[]},t.each(a.indexes,function(t,n){s.data.markers.push(r.value(n)),r.markerIsSet(n)&&r.marker(n).setMap(null)}),l(i,{td:s},v,n,{main:g,shadow:v}),r.store(a,g,v)):t.each(a.indexes,function(t,n){r.marker(n).setMap(S)})}),r}function L(n,e,o){var a=[],r="values"in n.td;return r||(n.td.values=[{options:n.opts}]),n.td.values.length?(v(),t.each(n.td.values,function(t,r){var s,u,d,c,f=p(n,r);if(f.options[o])if(f.options[o][0][0]&&R(f.options[o][0][0]))for(u=0;u<f.options[o].length;u++)for(d=0;d<f.options[o][u].length;d++)f.options[o][u][d]=m(f.options[o][u][d]);else for(u=0;u<f.options[o].length;u++)f.options[o][u]=m(f.options[o][u]);f.options.map=S,c=new q[e](f.options),a.push(c),s=I.add({td:f},e.toLowerCase(),c),l(i,{td:f},c,s)}),void g(n,r?a:a[0])):void g(n,!1)}var b,x=this,M=new P,I=new k,S=null;x._plan=function(t){var n;for(n=0;n<t.length;n++)M.add(new B(x,d,t[n]));r()},x.map=function(t){v(t.latLng,t),l(i,t,S),g(t,S)},x.destroy=function(t){I.clear(),i.empty(),S&&(S=null),g(t,!0)},x.overlay=function(n,e){var o=[],a="values"in n.td;return a||(n.td.values=[{latLng:n.latLng,options:n.opts}]),n.td.values.length?(D.__initialised||(D.prototype=new A.classes.OverlayView,D.__initialised=!0),t.each(n.td.values,function(a,r){var s,u,d=p(n,r),c=t(document.createElement("div")).css({border:"none",borderWidth:0,position:"absolute"});c.append(d.options.content),u=new D(S,d.options,m(d)||m(r),c),o.push(u),c=null,e||(s=I.add(n,"overlay",u),l(i,{td:d},u,s))}),e?o[0]:void g(n,a?o:o[0])):void g(n,!1)},x.marker=function(n){var e,o,a,r="values"in n.td,u=!S;return r||(n.opts.position=n.latLng||m(n.opts.position),n.td.values=[{options:n.opts}]),n.td.values.length?(u&&v(),n.td.cluster&&!S.getBounds()?void q.event.addListenerOnce(S,"bounds_changed",function(){x.marker.apply(x,[n])}):void(n.td.cluster?(n.td.cluster instanceof _?(o=n.td.cluster,a=I.getById(o.id(),!0)):(a=w(n.td.cluster),o=new _(s(n.td.id,!0),a),I.add(n,"clusterer",o,a)),a.beginUpdate(),t.each(n.td.values,function(t,e){var o=p(n,e);o.options.position=m(o.options.position?o.options.position:e),o.options.position&&(o.options.map=S,u&&(S.setCenter(o.options.position),u=!1),a.add(o,e))}),a.endUpdate(),g(n,o)):(e=[],t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.position=m(s.options.position?s.options.position:o),s.options.position&&(s.options.map=S,u&&(S.setCenter(s.options.position),u=!1),r=new A.classes.Marker(s.options),e.push(r),a=I.add({td:s},"marker",r),l(i,{td:s},r,a))}),g(n,r?e:e[0])))):void g(n,!1)},x.getroute=function(t){t.opts.origin=m(t.opts.origin,!0),t.opts.destination=m(t.opts.destination,!0),j().route(t.opts,function(n,e){c(t,e===q.DirectionsStatus.OK?n:!1,e),b.ack()})},x.getdistance=function(t){var n;for(t.opts.origins=h(t.opts.origins),n=0;n<t.opts.origins.length;n++)t.opts.origins[n]=m(t.opts.origins[n],!0);for(t.opts.destinations=h(t.opts.destinations),n=0;n<t.opts.destinations.length;n++)t.opts.destinations[n]=m(t.opts.destinations[n],!0);O().getDistanceMatrix(t.opts,function(n,e){c(t,e===q.DistanceMatrixStatus.OK?n:!1,e),b.ack()})},x.infowindow=function(e){var o=[],r="values"in e.td;r||(e.latLng&&(e.opts.position=e.latLng),e.td.values=[{options:e.opts}]),t.each(e.td.values,function(t,s){var u,d,c=p(e,s);c.options.position=m(c.options.position?c.options.position:s.latLng),S||v(c.options.position),d=new A.classes.InfoWindow(c.options),d&&(a(c.open)||c.open)&&(r?d.open(S,c.anchor||n):d.open(S,c.anchor||(e.latLng?n:e.session.marker?e.session.marker:n))),o.push(d),u=I.add({td:c},"infowindow",d),l(i,{td:c},d,u)}),g(e,r?o:o[0])},x.circle=function(n){var e=[],o="values"in n.td;return o||(n.opts.center=n.latLng||m(n.opts.center),n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.center=m(s.options.center?s.options.center:o),S||v(s.options.center),s.options.map=S,r=new A.classes.Circle(s.options),e.push(r),a=I.add({td:s},"circle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.getaddress=function(t){c(t,t.results,t.status),b.ack()},x.getlatlng=function(t){c(t,t.results,t.status),b.ack()},x.getmaxzoom=function(t){C().getMaxZoomAtLatLng(t.latLng,function(n){c(t,n.status===q.MaxZoomStatus.OK?n.zoom:!1,status),b.ack()})},x.getelevation=function(t){var n,e=[],o=function(n,e){c(t,e===q.ElevationStatus.OK?n:!1,e),b.ack()};if(t.latLng)e.push(t.latLng);else for(e=h(t.td.locations||[]),n=0;n<e.length;n++)e[n]=m(e[n]);if(e.length)E().getElevationForLocations({locations:e},o);else{if(t.td.path&&t.td.path.length)for(n=0;n<t.td.path.length;n++)e.push(m(t.td.path[n]));e.length?E().getElevationAlongPath({path:e,samples:t.td.samples},o):b.ack()}},x.defaults=function(n){t.each(n.td,function(n,o){A[n]=e(A[n])?t.extend({},A[n],o):o}),b.ack(!0)},x.rectangle=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.bounds=y(s.options.bounds?s.options.bounds:o),S||v(s.options.bounds.getCenter()),s.options.map=S,r=new A.classes.Rectangle(s.options),e.push(r),a=I.add({td:s},"rectangle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.polyline=function(t){L(t,"Polyline","path")},x.polygon=function(t){L(t,"Polygon","paths")},x.trafficlayer=function(t){v();var n=I.get("trafficlayer");n||(n=new A.classes.TrafficLayer,n.setMap(S),I.add(t,"trafficlayer",n)),g(t,n)},x.bicyclinglayer=function(t){v();var n=I.get("bicyclinglayer");n||(n=new A.classes.BicyclingLayer,n.setMap(S),I.add(t,"bicyclinglayer",n)),g(t,n)},x.groundoverlay=function(t){t.opts.bounds=y(t.opts.bounds),t.opts.bounds&&v(t.opts.bounds.getCenter());var n,e=new A.classes.GroundOverlay(t.opts.url,t.opts.bounds,t.opts.opts);e.setMap(S),n=I.add(t,"groundoverlay",e),g(t,e,n)},x.streetviewpanorama=function(n){n.opts.opts||(n.opts.opts={}),n.latLng?n.opts.opts.position=n.latLng:n.opts.opts.position&&(n.opts.opts.position=m(n.opts.opts.position)),n.td.divId?n.opts.container=document.getElementById(n.td.divId):n.opts.container&&(n.opts.container=t(n.opts.container).get(0));var e,o=new A.classes.StreetViewPanorama(n.opts.container,n.opts.opts);o&&S.setStreetView(o),e=I.add(n,"streetviewpanorama",o),g(n,o,e)},x.kmllayer=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s,d=p(n,o);S||v(),s=d.options,d.options.opts&&(s=d.options.opts,d.options.url&&(s.url=d.options.url)),s.map=S,r=u("3.10")?new A.classes.KmlLayer(s):new A.classes.KmlLayer(s.url,s),e.push(r),a=I.add({td:d},"kmllayer",r),l(i,{td:d},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.panel=function(n){v();var e,o,r=0,s=0,u=t(document.createElement("div"));u.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),n.opts.content&&(o=t(n.opts.content),u.append(o),i.first().prepend(u),a(n.opts.left)?a(n.opts.right)?n.opts.center&&(r=(i.width()-o.width())/2):r=i.width()-o.width()-n.opts.right:r=n.opts.left,a(n.opts.top)?a(n.opts.bottom)?n.opts.middle&&(s=(i.height()-o.height())/2):s=i.height()-o.height()-n.opts.bottom:s=n.opts.top,u.css({top:s,left:r,visibility:"visible"})),e=I.add(n,"panel",u),g(n,u,e),u=null},x.directionsrenderer=function(n){n.opts.map=S;var e,o=new q.DirectionsRenderer(n.opts);n.td.divId?o.setPanel(document.getElementById(n.td.divId)):n.td.container&&o.setPanel(t(n.td.container).get(0)),e=I.add(n,"directionsrenderer",o),g(n,o,e)},x.getgeoloc=function(t){g(t,t.latLng)},x.styledmaptype=function(t){v();var n=new A.classes.StyledMapType(t.td.styles,t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.imagemaptype=function(t){v();var n=new A.classes.ImageMapType(t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.autofit=function(n){var e=new q.LatLngBounds;t.each(I.all(),function(t,n){n.getPosition?e.extend(n.getPosition()):n.getBounds?(e.extend(n.getBounds().getNorthEast()),e.extend(n.getBounds().getSouthWest())):n.getPaths?n.getPaths().forEach(function(t){t.forEach(function(t){e.extend(t)})}):n.getPath?n.getPath().forEach(function(t){e.extend(t)}):n.getCenter?e.extend(n.getCenter()):"function"==typeof _&&n instanceof _&&(n=I.getById(n.id(),!0),n&&n.autofit(e))}),e.isEmpty()||S.getBounds()&&S.getBounds().equals(e)||("maxZoom"in n.td&&q.event.addListenerOnce(S,"bounds_changed",function(){this.getZoom()>n.td.maxZoom&&this.setZoom(n.td.maxZoom)}),S.fitBounds(e)),g(n,!0)},x.clear=function(n){if(o(n.td)){if(I.clearById(n.td)||I.objClearById(n.td))return void g(n,!0);n.td={name:n.td}}n.td.id?t.each(h(n.td.id),function(t,n){I.clearById(n)||I.objClearById(n)}):(I.clear(h(n.td.name),n.td.last,n.td.first,n.td.tag),I.objClear(h(n.td.name),n.td.last,n.td.first,n.td.tag)),g(n,!0)},x.get=function(e,i,a){var r,s,u=i?e:e.td;return i||(a=u.full),o(u)?(s=I.getById(u,!1,a)||I.objGetById(u),s===!1&&(r=u,u={})):r=u.name,"map"===r&&(s=S),s||(s=[],u.id?(t.each(h(u.id),function(t,n){s.push(I.getById(n,!1,a)||I.objGetById(n))}),R(u.id)||(s=s[0])):(t.each(r?h(r):[n],function(n,e){var o;u.first?(o=I.get(e,!1,u.tag,a),o&&s.push(o)):u.all?t.each(I.all(e,u.tag,a),function(t,n){s.push(n)}):(o=I.get(e,!0,u.tag,a),o&&s.push(o))}),u.all||R(r)||(s=s[0]))),s=R(s)||!u.all?s:[s],i?s:void g(e,s)},x.exec=function(n){t.each(h(n.td.func),function(e,o){t.each(x.get(n.td,!0,n.td.hasOwnProperty("full")?n.td.full:!0),function(t,n){o.call(i,n)})}),g(n,!0)},x.trigger=function(n){if(o(n.td))q.event.trigger(S,n.td);else{var e=[S,n.td.eventName];n.td.var_args&&t.each(n.td.var_args,function(t,n){e.push(n)}),q.event.trigger.apply(q.event,e)}c(n),b.ack()}}var A,q,Z=0,z=t.isFunction,R=t.isArray,V={},G=new I;t.fn.gmap3=function(){var n,e=[],o=!0,i=[];for(r(),n=0;n<arguments.length;n++)arguments[n]&&e.push(arguments[n]);return e.length||e.push("map"),t.each(this,function(){var n=t(this),a=n.data("gmap3");o=!1,a||(a=new U(n),n.data("gmap3",a)),1!==e.length||"get"!==e[0]&&!x(e[0])?a._plan(e):i.push("get"===e[0]?a.get("map",!0):a.get(e[0].get,!0,e[0].get.full))}),i.length?1===i.length?i[0]:i:this}}(jQuery);
/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
 
/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( Math.sqrt( (pX-cX)*(pX-cX) + (pY-cY)*(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = true;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = false;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = $.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type === "mouseenter"
            if (e.type === "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (!ob.hoverIntent_s) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);

/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */
(function($) {
	$.prettyPhoto = {version: '3.1.5'};
	
	$.fn.prettyPhoto = function(pp_settings) {
		pp_settings = jQuery.extend({
			hook: 'data-rel', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
			animation_speed: 'fast', /* fast/slow/normal */
			ajaxcallback: function() {},
			slideshow: 3000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			allow_expand: true, /* Allow the user to expand a resized image. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											<div class="pp_social">{pp_social}</div> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
		}, pp_settings);
		
		// Global variables accessible only by prettyPhoto
		var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
		
		// prettyPhoto container specific
		pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
		
		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		pp_slideshow;
		
		doresize = true, scroll_pos = _get_scroll();
	
		// Window/Keyboard events
		$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
		
		if(pp_settings.keyboard_shortcuts) {
			$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
				if(typeof $pp_pic_holder != 'undefined'){
					if($pp_pic_holder.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.prettyPhoto.changePage('previous');
								e.preventDefault();
								break;
							case 39:
								$.prettyPhoto.changePage('next');
								e.preventDefault();
								break;
							case 27:
								if(!settings.modal)
								$.prettyPhoto.close();
								e.preventDefault();
								break;
						};
						// return false;
					};
				};
			});
		};
		
		/**
		* Initialize prettyPhoto.
		*/
		$.prettyPhoto.initialize = function() {
			
			settings = pp_settings;
			
			if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
			
			// Find out if the picture is part of a set
			theRel = $(this).attr(settings.hook);
			galleryRegExp = /\[(?:.*)\]/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;
			
			// Put the SRCs, TITLEs, ALTs into an array.
			pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
			pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
			pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
			
			if(pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
			
			set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
			rel_index = (isSet) ? set_position : $("a["+settings.hook+"^='"+theRel+"']").index($(this));
			
			_build_overlay(this); // Build the overlay {this} being the caller
			
			if(settings.allow_resize)
				$(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
			
			
			$.prettyPhoto.open();
			
			return false;
		}


		/**
		* Opens the prettyPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.prettyPhoto.open = function(event) {
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = pp_settings;
				pp_images = $.makeArray(arguments[0]);
				pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (pp_images.length > 1) ? true : false;
				set_position = (arguments[3])? arguments[3]: 0;
				_build_overlay(event.target); // Build the overlay {this} being the caller
			}
			
			if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

			_checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
		
			$('.pp_loaderIcon').show();
		
			if(settings.deeplinking)
				setHashtag();
		
			// Rebuild Facebook Like Button with updated href
			if(settings.social_tools){
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 
				$pp_pic_holder.find('.pp_social').html(facebook_like_link);
			}
			
			// Fade the content in
			if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

			// Set the description
			if(typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != ""){
				$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
			}else{
				$pp_pic_holder.find('.pp_description').hide();
			}
			
			// Get the dimensions
			movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
			
			// If the size is % based, calculate according to window dimensions
			percentBased=false;
			if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
			if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
			
			// Fade the holder
			$pp_pic_holder.fadeIn(function(){
				// Set the title
				(settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');
				
				imgPreloader = "";
				skipInjection = false;
				
				// Inject the proper content
				switch(_getFileType(pp_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image();
						if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

						$pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

						imgPreloader.onload = function(){
							// Fit item to viewport
							pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

							_showContent();
						};

						imgPreloader.onerror = function(){
							alert('Image cannot be loaded. Make sure the path is correct and image exist.');
							$.prettyPhoto.close();
						};
					
						imgPreloader.src = pp_images[set_position];
					break;
				
					case 'youtube':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						
						// Regular youtube link
						movie_id = getParam('v',pp_images[set_position]);
						
						// youtu.be link
						if(movie_id == ""){
							movie_id = pp_images[set_position].split('youtu.be/');
							movie_id = movie_id[1];
							if(movie_id.indexOf('?') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('?')); // Strip anything after the ?

							if(movie_id.indexOf('&') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('&')); // Strip anything after the &
						}

						movie = 'http://www.youtube.com/embed/'+movie_id;
						(getParam('rel',pp_images[set_position])) ? movie+="?rel="+getParam('rel',pp_images[set_position]) : movie+="?rel=1";
							
						if(settings.autoplay) movie += "&autoplay=1";
					
						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;
				
					case 'vimeo':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						movie_id = pp_images[set_position];
						var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);
						
						movie = 'http://player.vimeo.com/video/'+ match[3] +'?title=0&amp;byline=0&amp;portrait=0';
						if(settings.autoplay) movie += "&autoplay=1;";
				
						vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
				
						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
					break;
				
					case 'quicktime':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
				
						toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;
				
					case 'flash':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

						filename = pp_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));
					
						toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;
				
					case 'iframe':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
				
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
					break;
					
					case 'ajax':
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport(movie_width,movie_height);
						doresize = true; // Reset the dimensions
					
						skipInjection = true;
						$.get(pp_images[set_position],function(responseHTML){
							toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
							$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
							_showContent();
						});
						
					break;
					
					case 'custom':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						toInject = settings.custom_markup;
					break;
				
					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
						myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport($(myClone).width(),$(myClone).height());
						doresize = true; // Reset the dimensions
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
					break;
				};

				if(!imgPreloader && !skipInjection){
					$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
				
					// Show content
					_showContent();
				};
			});

			return false;
		};

	
		/**
		* Change page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changePage = function(direction){
			currentGalleryPage = 0;
			
			if(direction == 'previous') {
				set_position--;
				if (set_position < 0) set_position = $(pp_images).size()-1;
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(pp_images).size()-1) set_position = 0;
			}else{
				set_position=direction;
			};
			
			rel_index = set_position;

			if(!doresize) doresize = true; // Allow the resizing of the images
			if(settings.allow_expand) {
				$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
			}

			_hideContent(function(){ $.prettyPhoto.open(); });
		};


		/**
		* Change gallery page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage) currentGalleryPage = 0;
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0) currentGalleryPage = totalPage;
			}else{
				currentGalleryPage = direction;
			};
			
			slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

			slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

			$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
		};


		/**
		* Start the slideshow...
		*/
		$.prettyPhoto.startSlideshow = function(){
			if(typeof pp_slideshow == 'undefined'){
				$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
			}else{
				$.prettyPhoto.changePage('next');	
			};
		}


		/**
		* Stop the slideshow...
		*/
		$.prettyPhoto.stopSlideshow = function(){
			$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
				$.prettyPhoto.startSlideshow();
				return false;
			});
			clearInterval(pp_slideshow);
			pp_slideshow=undefined;
		}


		/**
		* Closes prettyPhoto.
		*/
		$.prettyPhoto.close = function(){
			if($pp_overlay.is(":animated")) return;
			
			$.prettyPhoto.stopSlideshow();
			
			$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
			
			$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
			
			$pp_overlay.fadeOut(settings.animation_speed, function(){
				
				if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
				
				$(this).remove(); // No more need for the prettyPhoto markup
				
				$(window).unbind('scroll.prettyphoto');
				
				clearHashtag();
				
				settings.callback();
				
				doresize = true;
				
				pp_open = false;
				
				delete settings;
			});
		};
	
		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		function _showContent(){
			$('.pp_loaderIcon').hide();

			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
			if(projectedTop < 0) projectedTop = 0;

			$ppt.fadeTo(settings.animation_speed,1);

			// Resize the content holder
			$pp_pic_holder.find('.pp_content')
				.animate({
					height:pp_dimensions['contentHeight'],
					width:pp_dimensions['contentWidth']
				},settings.animation_speed);
			
			// Resize picture the holder
			$pp_pic_holder.animate({
				'top': 10,
                'position': 'fixed',
				'left': ((windowWidth/2) - (pp_dimensions['containerWidth']/2) < 0) ? 0 : (windowWidth/2) - (pp_dimensions['containerWidth']/2),
				width:pp_dimensions['containerWidth']
			},settings.animation_speed,function(){
				$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

				$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }
			
				if(settings.allow_expand) {
					if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
						$('a.pp_expand,a.pp_contract').show();
					}else{
						$('a.pp_expand').hide();
					}
				}
				
				if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
				
				settings.changepicturecallback(); // Callback!
				
				pp_open = true;
			});
			
			_insert_gallery();
			pp_settings.ajaxcallback();
		};
		
		/**
		* Hide the content...DUH!
		*/
		function _hideContent(callback){
			// Fade out the current picture
			$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
			$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
				$('.pp_loaderIcon').show();
				
				callback();
			});
		};
	
		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			(setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
		};
	
		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);
			
			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;

			if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;
			
				while (!fitting){
					if((pp_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 200);
						imageHeight = (height/width) * imageWidth;
					}else if((pp_containerHeight > windowHeight)){
						imageHeight = (windowHeight - 200);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					};

					pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
				};
			

				
				if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
					_fitToViewport(pp_containerWidth,pp_containerHeight)
				};
				
				_getDimensions(imageWidth,imageHeight);
			};
			
			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(pp_containerHeight),
				containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
				contentHeight:Math.floor(pp_contentHeight),
				contentWidth:Math.floor(pp_contentWidth),
				resized:resized
			};
		};
		
		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);
			
			// Get the details height, to do so, I need to clone it since it's invisible
			$pp_details = $pp_pic_holder.find('.pp_details');
			$pp_details.width(width);
			detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
			
			$pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $pp_details.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			$pp_details.remove();
			
			// Get the titles height, to do so, I need to clone it since it's invisible
			$pp_title = $pp_pic_holder.find('.ppt');
			$pp_title.width(width);
			titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
			$pp_title = $pp_title.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			
			// Get the container size, to resize the holder to the right dimensions
			pp_contentHeight = height + detailsHeight;
			pp_contentWidth = width;
			pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
			pp_containerWidth = width;
		}
	
		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.match(/\b.mov\b/i)){ 
				return 'quicktime';
			}else if(itemSrc.match(/\b.swf\b/i)){
				return 'flash';
			}else if(itemSrc.match(/\biframe=true\b/i)){
				return 'iframe';
			}else if(itemSrc.match(/\bajax=true\b/i)){
				return 'ajax';
			}else if(itemSrc.match(/\bcustom=true\b/i)){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			};
		};
	
		function _center_overlay(){
			if(doresize && typeof $pp_pic_holder != 'undefined') {
				scroll_pos = _get_scroll();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
				if(projectedTop < 0) projectedTop = 0;
				
				if(contentHeight > windowHeight)
					return;

				$pp_pic_holder.css({
					'top': 10,
                    'position': 'fixed',
                    'max-height': !!(windowHeight * .9),
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			};
		};
	
		function _get_scroll(){
			if (self.pageYOffset) {
				return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
			} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
				return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
			} else if (document.body) {// all other Explorers
				return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
			};
		};
	
		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();
			
			if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
		};
	
		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
				
				itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
				itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
				}else{
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
				};

				galleryWidth = itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				
				// Set the proper width to the gallery items
				$pp_gallery
					.css('margin-left',-((galleryWidth/2) + (navWidth/2)))
					.find('div:first').width(galleryWidth+5)
					.find('ul').width(fullGalleryWidth)
					.find('li.selected').removeClass('selected');
				
				goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

				$.prettyPhoto.changeGalleryPage(goToPage);
				
				$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
			}else{
				$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
				// $pp_gallery.hide();
			}
		}
	
		function _build_overlay(caller){
			// Inject Social Tool markup into General markup
			if(settings.social_tools)
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 

			settings.markup = settings.markup.replace('{pp_social}',''); 
			
			$('body').append(settings.markup); // Inject the markup
			
			$pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
			
			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < pp_images.length; i++) {
					if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
						classname = 'default';
						img_src = '';
					}else{
						classname = '';
						img_src = pp_images[i];
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				};
				
				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
				
				$pp_pic_holder.find('#pp_full_res').after(toInject);
				
				$pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
				
				$pp_gallery.find('.pp_arrow_next').click(function(){
					$.prettyPhoto.changeGalleryPage('next');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_gallery.find('.pp_arrow_previous').click(function(){
					$.prettyPhoto.changeGalleryPage('previous');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_pic_holder.find('.pp_content').hover(
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
					},
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
					});

				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				$pp_gallery_li.each(function(i){
					$(this)
						.find('a')
						.click(function(){
							$.prettyPhoto.changePage(i);
							$.prettyPhoto.stopSlideshow();
							return false;
						});
				});
			};
			
			
			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
				$pp_pic_holder.find('.pp_nav .pp_play').click(function(){
					$.prettyPhoto.startSlideshow();
					return false;
				});
			}
			
			$pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
			
			$pp_overlay
				.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(window).width()
					})
				.bind('click',function(){
					if(!settings.modal) $.prettyPhoto.close();
				});

			$('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });


			if(settings.allow_expand) {
				$('a.pp_expand').bind('click',function(e){
					// Expand the image
					if($(this).hasClass('pp_expand')){
						$(this).removeClass('pp_expand').addClass('pp_contract');
						doresize = false;
					}else{
						$(this).removeClass('pp_contract').addClass('pp_expand');
						doresize = true;
					};
				
					_hideContent(function(){ $.prettyPhoto.open(); });
			
					return false;
				});
			}
		
			$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
				$.prettyPhoto.changePage('previous');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
		
			$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
				$.prettyPhoto.changePage('next');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
			
			_center_overlay(); // Center it
		};

		if(!pp_alreadyInitialized && getHashtag()){
			pp_alreadyInitialized = true;
			
			// Grab the rel index to trigger the click on the correct element
			hashIndex = getHashtag();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
			hashRel = hashRel.substring(0,hashRel.indexOf('/'));

			// Little timeout to make sure all the prettyPhoto initialize scripts has been run.
			// Useful in the event the page contain several init scripts.
			setTimeout(function(){ $("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
		}
		
		return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};
	
	function getHashtag(){
		var url = location.href;
		hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)) : false;

		return hashtag;
	};
	
	function setHashtag(){
		if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
		location.hash = theRel + '/'+rel_index+'/';
	};
	
	function clearHashtag(){
		if ( location.href.indexOf('#prettyPhoto') !== -1 ) location.hash = "prettyPhoto";
	}
	
	function getParam(name,url){
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( url );
	  return ( results == null ) ? "" : results[1];
	}
	
})(jQuery);

var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.

!function(a,b,c){"use strict";var d=function(d,e){var f=!!b.getComputedStyle;f||(b.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var g,h,i,j,k,l,m=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},n=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},o=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},p=function(a,b){for(var c in b)a.setAttribute(c,b[c])},q=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},r=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},t=a.createElement("style"),u=a.documentElement,v=function(b,c){var d;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(d in c)this.options[d]=c[d];if(q(u,this.options.jsClass),this.wrapperEl=b.replace("#",""),a.getElementById(this.wrapperEl))this.wrapper=a.getElementById(this.wrapperEl);else{if(!a.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=a.querySelector(this.wrapperEl)}this.wrapper.inner=o(this.wrapper),h=this.options,g=this.wrapper,this._init(this)};return v.prototype={destroy:function(){this._removeStyles(),r(g,"closed"),r(g,"opened"),r(g,h.navClass),r(g,h.navClass+"-"+this.index),r(u,h.navActiveClass),g.removeAttribute("style"),g.removeAttribute("aria-hidden"),n(b,"resize",this,!1),n(b,"focus",this,!1),n(a.body,"touchmove",this,!1),n(i,"touchstart",this,!1),n(i,"touchend",this,!1),n(i,"mouseup",this,!1),n(i,"keyup",this,!1),n(i,"click",this,!1),h.customToggle?i.removeAttribute("aria-hidden"):i.parentNode.removeChild(i)},toggle:function(){j===!0&&(l?this.close():this.open())},open:function(){l||(r(g,"closed"),q(g,"opened"),q(u,h.navActiveClass),q(i,"active"),g.style.position=h.openPos,p(g,{"aria-hidden":"false"}),l=!0,h.open())},close:function(){l&&(q(g,"closed"),r(g,"opened"),r(u,h.navActiveClass),r(i,"active"),p(g,{"aria-hidden":"true"}),h.animate?(j=!1,setTimeout(function(){g.style.position="absolute",j=!0},h.transition+10)):g.style.position="absolute",l=!1,h.close())},resize:function(){"none"!==b.getComputedStyle(i,null).getPropertyValue("display")?(k=!0,p(i,{"aria-hidden":"false"}),g.className.match(/(^|\s)closed(\s|$)/)&&(p(g,{"aria-hidden":"true"}),g.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,p(i,{"aria-hidden":"true"}),p(g,{"aria-hidden":"false"}),g.style.position=h.openPos,this._removeStyles())},handleEvent:function(a){var c=a||b.event;switch(c.type){case"touchstart":this._onTouchStart(c);break;case"touchmove":this._onTouchMove(c);break;case"touchend":case"mouseup":this._onTouchEnd(c);break;case"click":this._preventDefault(c);break;case"keyup":this._onKeyUp(c);break;case"focus":case"resize":this.resize(c)}},_init:function(){this.index=c++,q(g,h.navClass),q(g,h.navClass+"-"+this.index),q(g,"closed"),j=!0,l=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var d=this;setTimeout(function(){d.resize()},20),m(b,"resize",this,!1),m(b,"focus",this,!1),m(a.body,"touchmove",this,!1),m(i,"touchstart",this,!1),m(i,"touchend",this,!1),m(i,"mouseup",this,!1),m(i,"keyup",this,!1),m(i,"click",this,!1),h.init()},_createStyles:function(){t.parentNode||(t.type="text/css",a.getElementsByTagName("head")[0].appendChild(t))},_removeStyles:function(){t.parentNode&&t.parentNode.removeChild(t)},_createToggle:function(){if(h.customToggle){var b=h.customToggle.replace("#","");if(a.getElementById(b))i=a.getElementById(b);else{if(!a.querySelector(b))throw new Error("The custom nav toggle you are trying to select doesn't exist");i=a.querySelector(b)}}else{var c=a.createElement("a");c.innerHTML=h.label,p(c,{href:"#","class":"nav-toggle"}),"after"===h.insert?g.parentNode.insertBefore(c,g.nextSibling):g.parentNode.insertBefore(c,g),i=c}},_closeOnNavClick:function(){if(h.closeOnNavClick){var a=g.getElementsByTagName("a"),b=this;s(a,function(c){m(a[c],"click",function(){k&&b.toggle()},!1)})}},_preventDefault:function(a){return a.preventDefault?(a.stopImmediatePropagation&&a.stopImmediatePropagation(),a.preventDefault(),a.stopPropagation(),!1):void(a.returnValue=!1)},_onTouchStart:function(a){Event.prototype.stopImmediatePropagation||this._preventDefault(a),this.startX=a.touches[0].clientX,this.startY=a.touches[0].clientY,this.touchHasMoved=!1,n(i,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(a){if(this._preventDefault(a),k&&!this.touchHasMoved){if("touchend"===a.type)return void this.toggle();var c=a||b.event;3!==c.which&&2!==c.button&&this.toggle()}},_onKeyUp:function(a){var c=a||b.event;13===c.keyCode&&this.toggle()},_transitions:function(){if(h.animate){var a=g.style,b="max-height "+h.transition+"ms";a.WebkitTransition=a.MozTransition=a.OTransition=a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<g.inner.length;b++)a+=g.inner[b].offsetHeight;var c="."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened{max-height:"+a+"px !important} ."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";t.styleSheet?t.styleSheet.cssText=c:t.innerHTML=c,c=""}},new v(d,e)};"undefined"!=typeof module&&module.exports?module.exports=d:b.responsiveNav=d}(document,window,0);
/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);

$(document).ready(function($) {
	"use strict";
	
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
    
	$(".site-toggle").click(function(e){
		e.preventDefault();
		
		var menu = $(".site-header");
		var button = $(".site-toggle");
		
		if( $(menu).is(":visible") ) {
			$(menu).animate({ "left": "-200px" }, 200, function(){
				$(menu).hide();
				$("body").removeClass("sidebar-on");
			});
			$(button).animate({ "left": "0px" }, 200);
		}
		else {
			$("body").addClass("sidebar-on");
			$(menu).show();
			$(menu).animate({"left": "0px"}, {duration: 200, queue: false});
			$(button).animate({"left": "200px"}, {duration: 200, queue: false});
		}
	});
	
	var siteToggle = function() {
		if ( windowWidth > 1199 ) {
			
			// Remove Styles
			$(".site-toggle, .site-header, .header-menu ul").removeAttr("style");
			
			// Remove Classes
			$(".header-menu li").removeClass("active");
			$("body").removeClass("sidebar-on");
			
		}
	};
	/*-- HEADER TOGGLE END--*/
    
    /*--- About Me ----*/
    $(window).one('album-loaded', function(){
        var $aboutMeImage = $('.about-me-img');
        $('<img src="/images/global/about-me.jpg" />').load(function(){
            $aboutMeImage.attr('src', "/images/global/about-me.jpg");
        });
    });
    
    
    
    /* -- Responsive Nav --*/
    var time = 0;
    var interval = setInterval(function(){
        if(time += 100 > 10000){
            clearInterval(interval);   
        }
        if(time += 100 > 10000 || document.getElementsByClassName("nav-collapse").length){
            clearInterval(interval);
            var navigation = responsiveNav(".nav-collapse", {
                animate: true,                    // Boolean: Use CSS3 transitions, true or false
                transition: 284,                  // Integer: Speed of the transition, in milliseconds
                label: "Menu",                    // String: Label for the navigation toggle
                insert: "after",                  // String: Insert the toggle before or after the navigation
                customToggle: "",                 // Selector: Specify the ID of a custom toggle
                closeOnNavClick: true,           // Boolean: Close the navigation when one of the links are clicked
                openPos: "relative",              // String: Position of the opened nav, relative or static
                navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
                navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
                jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
                init: function(){},               // Function: Init callback
                open: function(){},               // Function: Open callback
                close: function(){}               // Function: Close callback
              });
        }
        
    }, 100);
	
	
	
	/*-- BACK TOP --*/
	$(".site-back-top").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop: 0}, 800);
	});
	
	function backTop() {
		if ( $(window).scrollTop() > 40 && windowWidth > 480 ) {
			$(".site-back-top").fadeIn();
		}
		else{
			$(".site-back-top").fadeOut();
		}
	}
	/*-- BACK TOP END --*/
	
	/*-- GOOGLE MAP 1 --*/
//	$(".google-map-1").width("100%").height("330px").gmap3({
//		map:{
//			options: {
//			center:[39.9860562,-105.2399903],
//			zoom: 12,
//			scrollwheel: false,
//			mapTypeId: google.maps.MapTypeId.ROADMAP
//		}
//		},
//		marker:{
//			latLng:[39.9860562,-105.2399903]
//		}
//	});
	/*-- GOOGLE MAP 1 END --*/
	

    
    document.hideLoader = function(){
		$(".site-loader").delay(500).fadeOut("slow");
		backTop();
    }

    
	$(window).resize(function() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		
		siteToggle();
		backTop();
	});
	/*-- WINDOW RESIZE END --*/
});
Function.getClassName = function() {
	return "Function";
};


/* Extend from another prototyped Function */
Function.prototype.Extend = function(superClass) {
	this.prototype = new superClass();

	this.prototype.getSuperClass = function() {
		return superClass;
	};
	this.getSuperClass = this.prototype.getSuperClass;
	return this;
};

/*
The Super method allows us to do the constructor (or any super call) chaining more easily.  It looks like this:

var A = function() {
  this.value = ["1"]
}

var B = function() {
  B.Super(this);
  this.value.push("2");
}

Super calls for non constructor methods look like:
Class.Super(this, "methodName", arguments);
*/

Function.prototype.Super = function(context, methodName, args) {
	if (null != methodName) {
		var method = this.getSuperClass().prototype[methodName];
	}
	else {
		var method = this.getSuperClass();
	}

	if (!args) {
		return method.call(context);
	}
	else {
		return method.apply(context, args);
	}
};

/*
Function.Implements
It takes either an instanciated object or a functor, and a list of properties/methods and add
them to the calling functor.  Be careful not to apply methods that call other methods/object in
the passed functor/object that do not exist in the calling functor.
*/
Function.prototype.Implements = function(obj, members) {
	if(typeof obj == "function") {
		obj = obj.prototype;
	}
	var tObj = {}
	for(var i = 0, len = members.length; i < len; ++i) {
		tObj[members[i]] = obj[members[i]] || null;
	}
	var o = WSDOM.Util.copyObject(tObj);
	for(var i in o) {
		this.prototype[i] = o[i];
	}
};

/* Used to be 'hitch'.  Now it works right. */
Function.prototype.Context = function(obj) {
	var fnReference = this;
	return function () {
		return typeof fnReference == "function" ? fnReference.apply(obj, arguments) : obj[fnReference].apply(obj, arguments);
	};
};
/* Use to get WSDOM.Events - like control w/ jQuery Events */
Function.prototype.eventContext = function(obj, oArgs){
	
	var fnReference = this; 
	oArgs = oArgs || {};
	var fHandler = function () { 
		return  fnReference.apply(obj, [arguments[0], this, oArgs.data]);
	};
	
	if(oArgs.delay){
			fHandler =  function(){ 
				var innerFnRef = this;
				var args = arguments;
				setTimeout(function()	{ return  fnReference.apply(obj, [args[0], innerFnRef, oArgs.data]);}, oArgs.delay);
			}
	}
	return fHandler;
}
Function.prototype.EmptyFunction = function() {};;
var Module = function () {};

(function(){

	Module.prototype.eventTypes = function () {

		return ['initialized'];
	};

	Module.prototype.$ = function (selector) {

		return this.$element.find(selector);
	};

	Module.prototype.init = function (el) {

		if (el) {

			if (typeof el === 'string') { this.selector = el; }

			this.$element = $(el).first();

		} else if (this.selector) {

			this.$element = $(this.selector).first();
		}

		if (!this.guid) {

			this.guid = guid();
			this.events = {};
			var eventTypes = this.eventTypes();
			for (var i = 0; i < eventTypes.length; i++) {

				this.events[eventTypes[i]] = eventTypes[i] + '.' + this.guid;
			}
		}
        
        $(".site-loader").delay(500).fadeOut("slow");

		this.initListeners();

		// inits shared by all modules go here

		this.emit(this.events.initialized);
	};

	Module.prototype.registerModule = function (moduleName, moduleFunc, moduleSelector) {

		if (!moduleFunc || !moduleSelector) { return; }

		var $module = this.$element.find(moduleSelector).first();

		if (!$module.length) { return; }

		if (!this[moduleName]) {

			this[moduleName] = new moduleFunc();
			this[moduleName].selector = moduleSelector;
		}
		
		this[moduleName].init($module);
	};

	Module.prototype.initListeners = function () {};

	Module.prototype.on = function(type, callback, capture) {
	
		this.$element.on(type, callback);
	};

	Module.prototype.off = function (type, callback, capture) {

		this.$element.off(type, callback);
	};

	Module.prototype.emit = function (type, data) {

		this.$element.trigger(type, data);
	};

})();


var guid = function(){
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

var time = 0;
var interval = setInterval(function(){
    if(time += 100 > 10000){
        clearInterval(interval);   
    }
    if(time += 100 > 10000 || document.getElementsByClassName("nav-collapse").length){
        clearInterval(interval);
        var navigation = responsiveNav(".nav-collapse", {
            animate: true,                    // Boolean: Use CSS3 transitions, true or false
            transition: 284,                  // Integer: Speed of the transition, in milliseconds
            label: "Menu",                    // String: Label for the navigation toggle
            insert: "after",                  // String: Insert the toggle before or after the navigation
            customToggle: "",                 // Selector: Specify the ID of a custom toggle
            closeOnNavClick: true,           // Boolean: Close the navigation when one of the links are clicked
            openPos: "relative",              // String: Position of the opened nav, relative or static
            navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
            navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
            jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
            init: function(){},               // Function: Init callback
            open: function(){},               // Function: Open callback
            close: function(){}               // Function: Close callback
          });
    }

}, 100);

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

$(document).ready(function(){
    $('.load-image').each(function(e){
        var $this = $(this),
            src = $this.data('src'),
            url = "",
            $parent = $this.parent(),
            width = $parent.width();
        
        var count = 0;
        while(!width && count++ < 3){
            $parent = $this.parent();
            width = $parent.width();
            console.log(count, width);
        }
        if(!width){
            width = $(window).width();
        }
        
        console.log('widnow', width);
        
        url = src.format("c_scale,w_" + width);
        
        if (url) {
            var img = new Image();
            img.style.display = "none";
            img.onload = function() {
                $(this).fadeIn(1000);
            };
            $this.replaceWith(img);
            $(img).addClass('img');
            img.src = url;
        }
                
        
        
    });
});


$.fn.await = function(maxTime, $el, fn){
    var counter = new Date(new Date().getTime() + maxTime);
    var interval = setInterval(function(){
        if(new Date().getTime() > counter.getTime()){
            clearInterval(interval);
        }
        if($(this).find($el).length){
            clearInterval(interval);
            fn($($el));
        }
    }, 1000);
};
	
(function(){
    var menuResize = function() {
        if ( window.innerWidth > 1199 ) {

            // Remove Mobile Menu Events
            $(".header-menu *").unbind();

            // Actions Desktop
            $(".header-menu .sub").hoverIntent({
                timeout: 100, // milliseconds delay before onMouseOut
                over: function(){
                    $(this).addClass("active");
                    $(this).children("ul").slideDown("fast");
                }, 
                out: function(){
                    $(this).removeClass("active");
                    $(this).children("ul").slideUp("fast");
                }
            });
        }
        else {

            // Remove Desktop Menu Events
            $(".header-menu *").unbind();

            // Actions Mobile
            $(".header-menu .sub > a").click(function(e){
                e.preventDefault();

                $(".header-menu li ul").slideUp("normal");
                $(".header-menu li").removeClass("active");

                var element = $(this).siblings("ul");

                if ( element.is(":visible") ) {
                    element.slideUp("normal");
                    $(this).parent().removeClass("active");
                }
                else {
                    element.slideDown("normal");
                    $(this).parent().addClass("active");
                }
            });
        }
    };
    menuResize();
    $(window).on('resize', menuResize);
})();

$(".site-toggle").click(function(e){
    e.preventDefault();

    var menu = $(".site-header");
    var button = $(".site-toggle");

    if( $(menu).is(":visible") ) {
        $(menu).animate({ "left": "-200px" }, 200, function(){
            $(menu).hide();
            $("body").removeClass("sidebar-on");
        });
        $(button).animate({ "left": "0px" }, 200);
    }
    else {
        $("body").addClass("sidebar-on");
        $(menu).show();
        $(menu).animate({"left": "0px"}, {duration: 200, queue: false});
        $(button).animate({"left": "200px"}, {duration: 200, queue: false});
    }
});


var Home = function(){};

Home.Extend(Module);


(function(){
    Home.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        var windowDimensions = {
            height : $(window).height()
        };
        
        this.$element.find(".rslides").responsiveSlides({
            timeout:5000
        });
        
        if(Galleria){
            Galleria.loadTheme('./scripts/behavior/libs/galleria.classic.js');
        }
        
        return this;
    }
})();

var home = new Home().init('.home-page');

var Contact = function(){};

Contact.Extend(Module);


(function(){
    Contact.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        var $submit = this.$element.find('.data-form button:submit');
        
        var $form = this.$element.find('.data-form form');
        
        $submit.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            var data = $form.find('input, textarea').serialize();
            $.ajax({
                url: './contact',
                data: JSON.stringify({
                    name: $form.find('[name="name"]').val(),
                    email: $form.find('[name="email"]').val(),
                    message: $form.find('[name="message"]').val(),
                }),
                method: "POST",
                contentType:"application/json; charset=utf-8",
            }).done(function(res){
                 $form.find('textarea').val(res);
            });
        });
        
    }
})();

var contact = new Contact().init('#contact');
var Gallery = function(){};
Gallery.Extend(Module);

(function(){
    
    Gallery.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        return this;
    }
    
})();

var gallery = new Gallery().init("#works-detail");

