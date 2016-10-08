document.write(&#39;&lt;P&gt;&#39;+navigator.appName+&#39;&lt;/P&gt;&#39;);
document.write(&#39;&lt;P&gt;&#39;+navigator.appVersion+&#39;&lt;/P&gt;&#39;);
document.write(&#39;&lt;P&gt;&#39;+navigator.platform+&#39;&lt;/P&gt;&#39;);
document.write(&#39;&lt;P&gt;&#39;+navigator.userAgent+&#39;&lt;/P&gt;&#39;);
	   
var plugins = navigator.plugins;
var mimeTypes = navigator.mimeTypes
	   
document.write(&#39;&lt;P&gt;&#39;);
for (i=0;i&lt;plugins.length;i++) {
   var plugin = plugins[i];
   document.write(&#39;&lt;B&gt;&#39;+plugin.name+&#39;&lt;/B&gt;&lt;BR&gt;&#39;);
   document.write(plugin.filename+&#39; - &#39;+plugin.description+&#39;&lt;BR&gt;&#39;);
   for(j=0;j&lt;plugin.length;j++) {
      var mimetype = plugin[j];
      document.write(mimetype.type);
      if(mimetype.description) {
         document.write(&#39; : &#39;+mimetype.description);
      }
      if(mimetype.suffixes) {
         document.write(&#39; - extentions: &#39;+mimetype.suffixes);
      }
      document.write(&#39;&lt;BR&gt;&#39;);
   }
			
}
document.write(&#39;&lt;/P&gt;&#39;);

