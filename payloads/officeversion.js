
var ma = 1;
var mb = 1;
var mc = 1;
var md = 1;

try {
    ma = new ActiveXObject(&#34;SharePoint.OpenDocuments.4&#34;)
} catch (e) {}

try {
    mb = new ActiveXObject(&#34;SharePoint.OpenDocuments.3&#34;)
} catch (e) {}

try {
    mc = new ActiveXObject(&#34;SharePoint.OpenDocuments.2&#34;)
} catch (e) {}

try {
    md = new ActiveXObject(&#34;SharePoint.OpenDocuments.1&#34;)
} catch (e) {}

var a = typeof ma;
var b = typeof mb;
var c = typeof mc;
var d = typeof md;
var key = &#34;No Office Found&#34;;

if (a == &#34;object&#34; &amp;&amp; b == &#34;object&#34; &amp;&amp; c == &#34;object&#34; &amp;&amp; d == &#34;object&#34;) {
    key = &#34;Office 2010&#34;
}
if (a == &#34;number&#34; &amp;&amp; b == &#34;object&#34; &amp;&amp; c == &#34;object&#34; &amp;&amp; d == &#34;object&#34;) {
    key = &#34;Office 2007&#34;
}
if (a == &#34;number&#34; &amp;&amp; b == &#34;number&#34; &amp;&amp; c == &#34;object&#34; &amp;&amp; d == &#34;object&#34;) {
    key = &#34;Office 2003&#34;
}
if (a == &#34;number&#34; &amp;&amp; b == &#34;number&#34; &amp;&amp; c == &#34;number&#34; &amp;&amp; d == &#34;object&#34;) {
    key = &#34;Office Xp&#34;
}

new Image().src = &#39;http://remote.com/log.php?office_version=&#39;+encodeURI(key);


