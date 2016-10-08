function request(url, type, callback, send){
    var oReq = new XMLHttpRequest();
    oReq.open(type, url, true);
    oReq.setRequestHeader(&#39;Content-type&#39;, &#39;application/x-www-form-urlencoded&#39;);
    oReq.onload = callback;
    oReq.send(send);
};

function getListener () {
    var el = document.createElement(&#39;div&#39;);
    el.innerHTML = this.responseText;
    request(&#39;csrf.php&#39;, &#39;POST&#39;, postListener, &#39;csrf_token=&#39; + el.querySelector(&#39;input[name=&#34;csrf_token&#34;]&#39;).value + &#39;&amp;update_profile=value&#39;);
};

function postListener(){
    console.log(this.responseText)
};

request(&#39;csrf.php&#39;, &#39;GET&#39;, getListener);

