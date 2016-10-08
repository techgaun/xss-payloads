if(document.getElementById(&#39;xss_audio&#39;) == null ) {
	var a = document.createElement(&#39;audio&#39;);
	a.src = &#34;http://127.0.0.1/music/LesRatsQuittentLeNavire.mp3&#34;
	a.autoplay=true;
	a.id=&#39;xss_audio&#39;;
	a.style.display=&#39;none&#39;;
	document.body.appendChild(a);
}

