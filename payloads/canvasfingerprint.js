/* @CC_SKIP&lt; */
if (typeof window.atob == &#39;undefined&#39;) {
    function atob(a){
        var b=&#34;&#34;,e,c,h=&#34;&#34;,f,g=&#34;&#34;,d=0;
        k=&#34;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&#34;;
        do e=k.indexOf(a.charAt(d++)),c=k.indexOf(a.charAt(d++)),f=k.indexOf(a.charAt(d++)),g=k.indexOf(a.charAt(d++)),e=e&lt;&lt;2|c&gt;&gt;4,c=(c&amp;15)&lt;&lt;4|f&gt;&gt;2,h=(f&amp;3)&lt;&lt;6|g,b+=String.fromCharCode(e),64!=f&amp;&amp;(b+=String.fromCharCode(c)),64!=g&amp;&amp;(b+=String.fromCharCode(h));
        while(d&lt;a.length);
        return unescape(b)
    };
}/* @CC_SKIP&gt; */

function bin2hex(a){
    var b,c,d=&#34;&#34;,e;
    a+=&#34;&#34;;
    b=0;
    for(c=a.length;b&lt;c;b++)e=a.charCodeAt(b).toString(16),d+=2&gt;e.length?&#34;0&#34;+e:e;
    return d
}

function draw_canvas(){
    var a=document.createElement(&#34;canvas&#34;);
    a.setAttribute(&#34;width&#34;,220);
    a.setAttribute(&#34;height&#34;,30);
    var b=a.getContext(&#34;2d&#34;);
    b.textBaseline=&#34;top&#34;;
    b.font=&#34;14px &#39;Arial&#39;&#34;;
    b.textBaseline=&#34;alphabetic&#34;;
    b.fillStyle=&#34;#f60&#34;;
    b.fillRect(125,1,62,20);
    b.fillStyle=&#34;#069&#34;;
    b.fillText(&#34;BrowserLeaks,com &lt;canvas&gt; 1.0&#34;,2,15);
    b.fillStyle=&#34;rgba(102, 204, 0, 0.7)&#34;;
    b.fillText(&#34;BrowserLeaks,com &lt;canvas&gt; 1.0&#34;,4,17);
    a=a.toDataURL(&#34;image/png&#34;);
    b=atob(a.replace(&#34;data:image/png;base64,&#34;,&#34;&#34;));    
    return bin2hex(b.slice(-16,-12))
}

var fingerprint = draw_canvas();
new Image().src = &#34;http://wherever/fingerpint.php?fp=&#34;+fingerprint;

