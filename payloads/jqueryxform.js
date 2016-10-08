    jQuery &amp;&amp; jQuery.fn.extend({&#39;xform&#39;:function(action){
        form = this[0];
        form.old_action=form.action,form.old_target=form.target,form.action=action;
        var iframe = jQuery(&#39;
&#39;)[0];
        ($(&#39;body&#39;)[0]||$(&#39;html&#39;)[0]).appendChild(iframe);
        form.target=iframe.name;
        setTimeout(function(){
          $(iframe).bind(&#39;load&#39;,function(){
            form.action=form.old_action,form.target=form.old_target,form.onsubmit=null,form.submit();
          });
        },30);
    }});
    &lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;

