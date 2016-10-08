var AttackAPI = {
	version: &#39;0.1&#39;,
	author: &#39;Petko Petkov (architect)&#39;,
	homepage: &#39;http://www.gnucitizen.org&#39;};

AttackAPI.PortScanner = {};
AttackAPI.PortScanner.scanPort = function (callback, target, port, timeout) {
	var timeout = (timeout == null)?100:timeout;
	var img = new Image();
	
	img.onerror = function () {
		if (!img) return;
		img = undefined;
		callback(target, port, &#39;open&#39;);
	};
	
	img.onload = img.onerror;
	img.src = &#39;http://&#39; + target + &#39;:&#39; + port;
	
	setTimeout(function () {
		if (!img) return;
		img = undefined;
		callback(target, port, &#39;closed&#39;);
	}, timeout);
};
AttackAPI.PortScanner.scanTarget = function (callback, target, ports, timeout)
{
	for (index = 0; index &lt; ports.length; index++)
		AttackAPI.PortScanner.scanPort(callback, target, ports[index], timeout);
};

