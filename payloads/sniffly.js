/**
 * @fileoverview This file loads a bunch of HSTS domains and times how long it
 * takes for them to be redirected from HTTP to HTTPS. Based on that, it
 * decides whether the domain is a previously-noted HSTS domain or not.
 * @author yan 

 * @license MIT
 * @version 0.2.0
 */

// Timing in milliseconds above which a network request probably occurred.
// TODO: Determine this dynamically from the distribution of response times.
var TIMING_UPPER_THRESHOLD = 5;
// Timing in milliseconds below which a request time is probably a measurement
// fluke.
var TIMING_LOWER_THRESHOLD = -10;
// Timing allowance for a synchronous image load, which we use to confirm
// positive results in Chrome.
var TIMING_CONFIRM_THRESHOLD = 20;

// Use an arbitrary static preloaded HSTS host for timing calibration
var BENCHMARK_HOST = &#39;http://torproject.org/&#39;;
// Initial timing calibration offset. This gets recalculated every other fetch.
var OFFSET = 0;

var visitedElem = document.getElementById(&#39;visited&#39;);
var notVisitedElem = document.getElementById(&#39;not_visited&#39;);
var disclaimer = document.getElementById(&#39;disclaimer&#39;);
var isFirefox = (window.navigator.userAgent.indexOf(&#39;Firefox&#39;) !== -1);
var visited = []; // list of hosts that are potentially visited

// Edit this based on scraper results.
var hosts =
[&#39;http://www.npmjs.com/&#39;,
&#39;http://savecrypto.org/&#39;,
&#39;http://www.xoom.com/&#39;,
&#39;http://atom.io/&#39;,
&#39;http://angel.co/&#39;,
&#39;http://vine.co/&#39;,
&#39;http://www.oculus.com/en-us/&#39;,
&#39;http://www.hackerrank.com/&#39;,
&#39;http://noscript.net/&#39;,
&#39;http://www.sixt.com/&#39;,
&#39;http://www.crazydomains.com.au/&#39;,
&#39;http://www.yola.com/&#39;,
&#39;http://www.mailerlite.com/&#39;,
&#39;http://giustizia.it/&#39;,
&#39;http://notepad-plus-plus.org/&#39;,
&#39;http://www.unfranchise.com.tw&#39;,
&#39;http://www.ing-diba.de/&#39;,
&#39;http://www.adreactor.com/&#39;,
&#39;http://meduza.io/&#39;,
&#39;http://www.wealthfront.com/&#39;,
&#39;http://mail.live.com/default.aspx&#39;,
&#39;http://muabannhanh.com/&#39;,
&#39;http://upjers.com/&#39;,
&#39;http://www.rabobank.nl/&#39;,
&#39;http://www.ing.nl/&#39;,
&#39;http://www.kickstarter.com/&#39;,
&#39;http://creativemarket.com/&#39;,
&#39;http://pinterest.com/&#39;,
&#39;http://www.ashampoo.com/en/usd&#39;,
&#39;http://www.sofort.com/&#39;,
&#39;http://www.xing.com/&#39;,
&#39;http://podio.com/&#39;,
&#39;http://www.servis24.cz/&#39;,
&#39;http://www.galeria-kaufhof.de/&#39;,
&#39;http://www.kocpc.com.tw/&#39;,
&#39;http://www.commbank.com.au/&#39;,
&#39;http://recyclix.com/&#39;,
&#39;http://www.usajobs.gov/&#39;,
&#39;http://briian.com/&#39;,
&#39;http://www.vultr.com/&#39;,
&#39;http://about.gitlab.com/&#39;,
&#39;http://www.tanga.com&#39;,
&#39;http://wanelo.com/&#39;,
&#39;http://herokuapp.com/&#39;,
&#39;http://unsplash.com/&#39;,
&#39;http://ria.com/&#39;,
&#39;http://www.missguided.co.uk/&#39;,
&#39;http://lever.co/&#39;,
&#39;http://venmo.com/&#39;,
&#39;http://ello.co/&#39;,
&#39;http://www.template.net/&#39;,
&#39;http://www.digid.nl/&#39;,
&#39;http://qiwi.ru/&#39;,
&#39;http://www.instacart.com/&#39;,
&#39;http://www.touchofmodern.com/&#39;,
&#39;http://roadtrippers.com/&#39;,
&#39;http://www.freshdesignweb.com/&#39;,
&#39;http://www.fnb.co.za&#39;,
&#39;http://www.graphicsprings.com/&#39;,
&#39;http://www.patreon.com/&#39;,
&#39;http://hotwords.com/&#39;,
&#39;http://www.cryptsy.com/&#39;,
&#39;http://vitalsource.com/&#39;,
&#39;http://pass.yandex.ua/&#39;,
&#39;http://www.yammer.com/&#39;,
&#39;http://ixquick.com/&#39;,
&#39;http://sbis.ru/&#39;,
&#39;http://www.ecosia.org/&#39;,
&#39;http://www.freecycle.org/&#39;,
&#39;http://pass.yandex.by/&#39;,
&#39;http://www.mailjet.com/&#39;,
&#39;http://www.yugster.com/&#39;,
&#39;http://tinypng.com/&#39;,
&#39;http://nest.com/&#39;,
&#39;http://kat.cr/&#39;,
&#39;http://www.practo.com/&#39;,
&#39;http://c9.io/&#39;,
&#39;http://beget.ru/&#39;,
&#39;http://startpage.com/&#39;,
&#39;http://www.bet-at-home.com/&#39;,
&#39;http://tripcase.com/&#39;,
&#39;http://www.douglas.de/&#39;,
&#39;http://yande.re/post&#39;,
&#39;http://www.bookbub.com/&#39;,
&#39;http://www.swarmapp.com/&#39;,
&#39;http://www.woorank.com/&#39;,
&#39;http://paytm.com/&#39;,
&#39;http://www.payza.com/&#39;,
&#39;http://www.instapaper.com/&#39;,
&#39;http://wikitech.wikimedia.org/&#39;,
&#39;http://www.ipko.pl/&#39;,
&#39;http://www.straighttalk.com/wps/portal/home&#39;,
&#39;http://heroku.com/&#39;,
&#39;http://www.privat24.ua&#39;,
&#39;http://zimbra.free.fr/&#39;,
&#39;http://www.blueapron.com/&#39;,
&#39;http://secure.logmein.com/&#39;,
&#39;http://adblockplus.org/&#39;,
&#39;http://www.udemy.com/&#39;,
&#39;http://tribalwars2.com/&#39;,
&#39;http://sparkfun.com/&#39;,
&#39;http://www.sparebank1.no/bank/&#39;,
&#39;http://spotify.com/&#39;,
&#39;http://creditkarma.com/&#39;,
&#39;http://www.paxum.com/payment/phrame.php&#39;,
&#39;http://jamberrynails.net/&#39;,
&#39;http://fotolia.com/&#39;,
&#39;http://stacksocial.com/&#39;,
&#39;http://www.cms.gov/&#39;,
&#39;http://iconfinder.com/&#39;,
&#39;http://www.expireddomains.net/&#39;,
&#39;http://navalny.com/&#39;,
&#39;http://privatbank.ua/&#39;,
&#39;http://www.englishforums.com/&#39;,
&#39;http://www.hushmail.com/&#39;,
&#39;http://www.pingdom.com/&#39;,
&#39;http://www.zomato.com/&#39;,
&#39;http://icook.tw/&#39;,
&#39;http://www.office.com/&#39;,
&#39;http://groupme.com/&#39;,
&#39;http://wikimedia.org/&#39;,
&#39;http://dapulse.com/&#39;,
&#39;http://www.cuelinks.com/&#39;,
&#39;http://www.attracta.com/&#39;,
&#39;http://www.outlook.com/owa/&#39;,
&#39;http://www.dnb.no/&#39;,
&#39;http://www.lotterypost.com/&#39;,
&#39;http://bitcoin.org/&#39;,
&#39;http://href.li/&#39;,
&#39;http://skandiabanken.no/&#39;,
&#39;http://foursquare.com/&#39;,
&#39;http://www.usa.gov/&#39;,
&#39;http://www.bitgold.com/&#39;,
&#39;http://quizlet.com/&#39;,
&#39;http://www.alipay.com&#39;,
&#39;http://yadi.sk/&#39;,
&#39;http://duckduckgo.com/&#39;,
&#39;http://www.dashlane.com/&#39;,
&#39;http://www.ozbargain.com.au/&#39;,
&#39;http://www.ricardo.ch/&#39;,
&#39;http://www.fakku.net/&#39;,
&#39;http://www.mturk.com/&#39;,
&#39;http://www.national-lottery.co.uk/&#39;,
&#39;http://www.onthebeach.co.uk/&#39;,
&#39;http://www.icloud.com/&#39;,
&#39;http://www.zenefits.com/&#39;,
&#39;http://code.org/&#39;,
&#39;http://www.chapters.indigo.ca/&#39;,
&#39;http://www.dntx.com/&#39;,
&#39;http://www.slsp.sk/&#39;,
&#39;http://www.raise.com/&#39;,
&#39;http://cinematrix.net/&#39;,
&#39;http://www.baifubao.com/&#39;,
&#39;http://blogun.ru/&#39;,
&#39;http://videostripe.com/&#39;,
&#39;http://typekit.com/&#39;,
&#39;http://www.splitwise.com/&#39;,
&#39;http://www.eobot.com&#39;,
&#39;http://login.microsoftonline.com/&#39;,
&#39;http://www.xero.com/&#39;,
&#39;http://www.rakuten-sec.co.jp/&#39;,
&#39;http://www.creativecow.net/&#39;,
&#39;http://sweb.ru/&#39;,
&#39;http://www.seroundtable.com/&#39;,
&#39;http://www.hipchat.com/&#39;,
&#39;http://subscribe.free.fr/&#39;,
&#39;http://topvisor.ru/&#39;,
&#39;http://www.avforums.com/&#39;,
&#39;http://www.travelodge.co.uk&#39;,
&#39;http://opendns.com/&#39;,
&#39;http://www.pcloud.com/&#39;,
&#39;http://www.akiba-online.com/&#39;,
&#39;http://www.instamojo.com/&#39;,
&#39;http://www.commsec.com.au/&#39;,
&#39;http://assembla.com/&#39;,
&#39;http://www.bukalapak.com/&#39;,
&#39;http://www.docusign.net/&#39;,
&#39;http://www.hotslogs.com/&#39;,
&#39;http://www.consorsbank.de/home&#39;,
&#39;http://www.searchlock.com/&#39;,
&#39;http://madmimi.com/&#39;,
&#39;http://www.bawagpsk.com/BAWAGPSK/PK&#39;,
&#39;http://www.crunchbase.com/&#39;,
&#39;http://www.maketecheasier.com/&#39;,
&#39;http://session.wikispaces.com/1/auth/auth&#39;,
&#39;http://witkit.com/&#39;,
&#39;http://pixabay.com/&#39;,
&#39;http://www.mygreatlakes.org/&#39;,
&#39;http://ncore.cc/&#39;,
&#39;http://www.hpconnected.com/&#39;,
&#39;http://payeer.com/&#39;,
&#39;http://join.me/&#39;,
&#39;http://www.gamefly.com/&#39;,
&#39;http://bitcoinwisdom.com/&#39;,
&#39;http://land.nrw/&#39;,
&#39;http://www.saddahaq.com/&#39;,
&#39;http://www.quantcast.com/&#39;,
&#39;http://www.behance.net/&#39;,
&#39;http://xapo.com/&#39;,
&#39;http://fabric.io/&#39;,
&#39;http://www.dollarphotoclub.com/&#39;,
&#39;http://mandrillapp.com/&#39;,
&#39;http://moodle.org/&#39;,
&#39;http://imp.free.fr/&#39;,
&#39;http://www.pebble.com/&#39;,
&#39;http://www.periscope.tv/&#39;,
&#39;http://generalassemb.ly/&#39;,
&#39;http://login.szn.cz/&#39;,
&#39;http://www.lyft.com/&#39;,
&#39;http://www.mql5.com/&#39;,
&#39;http://www.wrike.com/&#39;,
&#39;http://www.fanfiction.net&#39;,
&#39;http://www.box.com/&#39;,
&#39;http://www.test.de/&#39;,
&#39;http://calendar.sunrise.am&#39;,
&#39;http://www.djangoproject.com/&#39;,
&#39;http://qiwi.com/&#39;,
&#39;http://adlure.net/&#39;,
&#39;http://www.stitchfix.com/&#39;,
&#39;http://www.bankofthewest.com/&#39;,
&#39;http://roem.ru/&#39;,
&#39;http://www.carthrottle.com/&#39;,
&#39;http://pass.yandex.kz/&#39;,
&#39;http://gumroad.com/&#39;,
&#39;http://www.hosteurope.de/&#39;,
&#39;http://www.canva.com/&#39;,
&#39;http://www.usbank.com/&#39;,
&#39;http://evernote.com/&#39;,
&#39;http://secure.actblue.com/&#39;,
&#39;http://myspace.com/&#39;,
&#39;http://www.jbhifi.com.au&#39;,
&#39;http://www.physicsforums.com/&#39;,
&#39;http://www.abnamro.nl/nl/index.html&#39;,
&#39;http://twittercommunity.com/&#39;,
&#39;http://wikileaks.org/&#39;,
&#39;http://www.chmail.ir/&#39;,
&#39;http://mail.ru&#39;,
&#39;http://www.victoriassecret.com/&#39;,
&#39;http://www.firstnational.com/&#39;,
&#39;http://www.dominos.co.uk/&#39;,
&#39;http://www.indiblogger.in/&#39;,
&#39;http://www.zendesk.com/&#39;,
&#39;http://www.hypovereinsbank.de/&#39;,
&#39;http://www.openshift.com/&#39;,
&#39;http://buffer.com/&#39;,
&#39;http://what.cd/&#39;,
&#39;http://hide.me/&#39;,
&#39;http://trello.com/&#39;,
&#39;http://www.comodo.com/&#39;,
&#39;http://twilio.com/&#39;,
&#39;http://www.alternate.de/&#39;,
&#39;http://telegram.org/&#39;,
&#39;http://www.manageengine.com/&#39;,
&#39;http://unsw.edu.au/&#39;,
&#39;http://www.flipkey.com/&#39;,
&#39;http://www.popads.net/&#39;,
&#39;http://myworkday.com/&#39;,
&#39;http://www.meneame.net/&#39;,
&#39;http://popcorntime.io/&#39;,
&#39;http://iqoption.com/&#39;,
&#39;http://www.tumblr.com/&#39;,
&#39;http://www.reddit.com/&#39;,
&#39;http://www.petfinder.com/&#39;,
&#39;http://www.messenger.com/&#39;,
&#39;http://www.digitalpoint.com/&#39;,
&#39;http://www.blibli.com/&#39;,
&#39;http://namu.wiki/&#39;,
&#39;http://launchpad.net/&#39;,
&#39;http://www.blognone.com/&#39;,
&#39;http://www.ing.be/en/retail/Pages/index.aspx&#39;,
&#39;http://acrobat.com/&#39;,
&#39;http://mbank.pl/&#39;,
&#39;http://www.fasttech.com/&#39;,
&#39;http://www.post.ch/de&#39;,
&#39;http://gyazo.com/&#39;,
&#39;http://packagecontrol.io/&#39;,
&#39;http://vimeo.com/&#39;,
&#39;http://www.airbnb.es/&#39;,
&#39;http://www.airbnb.it/&#39;,
&#39;http://www.airbnb.fr/&#39;,
&#39;http://www.airbnb.co.kr/&#39;,
&#39;http://www.airbnb.de/&#39;,
&#39;http://www.airbnb.co.uk/&#39;,
&#39;http://www.airbnb.com.au/&#39;,
&#39;http://www.airbnb.ca/&#39;,
&#39;http://www.airbnb.co.in/&#39;,
&#39;http://www.airbnb.com.br/&#39;,
&#39;http://www.airbnb.ru/&#39;,
&#39;http://www.centrum24.pl/centrum24-web/login&#39;,
&#39;http://coursera.org/&#39;,
&#39;http://ellislab.com/&#39;,
&#39;http://www.udacity.com/&#39;,
&#39;http://bitcointalk.org/&#39;,
&#39;http://uwaterloo.ca/&#39;,
&#39;http://vc.ru/&#39;,
&#39;http://tjournal.ru/&#39;,
&#39;http://www.biblegateway.com/&#39;,
&#39;http://www.themuse.com&#39;,
&#39;http://att.yahoo.com/&#39;,
&#39;http://www.yahoo.com/&#39;,
&#39;http://ficbook.net/&#39;,
&#39;http://www.ameriprise.com/&#39;,
&#39;http://www.here.com/&#39;,
&#39;http://www.rocketlawyer.com/&#39;,
&#39;http://exmo.com/&#39;,
&#39;http://skladchik.com/&#39;,
&#39;http://healthunlocked.com/&#39;,
&#39;http://www.upwork.com/&#39;,
&#39;http://www.thegioididong.com/&#39;,
&#39;http://fermasosedi.ru/&#39;,
&#39;http://www.thegrommet.com/&#39;,
&#39;http://www.freelancer.com/&#39;,
&#39;http://www.freelancer.in/&#39;,
&#39;http://klout.com/&#39;,
&#39;http://www.veikkaus.fi/&#39;,
&#39;http://www.lucidchart.com/&#39;,
&#39;http://www.opensuse.org/&#39;,
&#39;http://monitorbacklinks.com/&#39;,
&#39;http://www.5giay.vn/&#39;,
&#39;http://noncombatant.org/&#39;,
&#39;http://nonfreesoftware.org/&#39;,
&#39;http://hackpad.com/&#39;,
&#39;http://meta.discourse.org/&#39;,
&#39;http://devinegan.com/&#39;,
&#39;http://ongardie.net/&#39;,
&#39;http://titanous.com/&#39;,
&#39;http://www.funkthat.com&#39;,
&#39;http://nelhage.com/&#39;,
&#39;http://yawnbox.com/&#39;,
&#39;http://rednerd.com&#39;,
&#39;http://smbmarketplace.cisco.com/&#39;,
&#39;http://www.cloudflare.com/&#39;,
&#39;http://letsencrypt.org/&#39;,
&#39;http://helloworld.letsencrypt.org/&#39;,
&#39;http://hoffman-andrews.com/&#39;,
&#39;http://jdkasten.com/&#39;,
&#39;http://jhalderm.com/&#39;,
&#39;http://jve.linuxwall.info/&#39;
];

/**
 * Gets hostname from URL.
 */
function getHost_(url) {
  return url.replace(&#39;http://&#39;, &#39;&#39;).split(/\/|\?/)[0];
}

/**
 * Our CSP policy (HTTP-only images) causes this to fire whenever the img src
 * redirects to HTTPS, either by HSTS (307) or plain old redirects (301/302).
 * @param {number} start Time when the image load started
 * @param {string} host The host that fired the error
 * @private
 */
function onImgError_(start, host) {
  var time = new Date().getTime() - start;
  if (host === BENCHMARK_HOST) {
    // This is just a calibration measurement so update the offset time.
    OFFSET = time;
  } else {
    // We need to subtract offset, otherwise hosts that are further down on the
    // page seem to have higher load times because of the time that it took for
    // the DOM to load.
    display(host, time - OFFSET, OFFSET);
  }
}


/**
 * Double-check whether hosts have been visited by trying synchronous image
 * loads, which have cleaner timing profiles. I find this helps reduce the
 * false positive rate in Chrome. AFAICT, the async image-load sniffing method
 * works great in Firefox so this isn&#39;t necessary there.
 * @param {function(string, number)} callback Gets called when img error fires.
 * @param {function()} finished Called when all loads are done.
 * @private
 */
function confirmVisited_(callback, finished) {
  var initial; // initial time
  var img = new Image();
  var timeouts = []; // array of timeout IDs
  var hostsDone = [];
  var dummySrc = &#39;http://example.com/&#39;; // URL for timer initialization
  function clearTimeouts_() {
    // Clear existing timeouts
    timeouts.forEach(function(id) {
      window.clearTimeout(id);
    });
    timeouts = [];
  }
  function doNext_() {
    if (visited.length === 0) {
      finished();
      return;
    }
    // Shift instead of pop since we are pushing hosts into the array while
    // this is running
    var host = visited.shift();
    initial = new Date().getTime();
    var src = &#39;http://&#39; + host + &#39;/?&#39; + initial.toString();
    img.src = src;
    // Abort after 20ms since positive results should take less time anyway
    timeouts.push(window.setTimeout(img.onerror.bind({src: src}),
                                    TIMING_CONFIRM_THRESHOLD));
  }
  img.onerror = function() {
    if (this.src !== dummySrc) {
      clearTimeouts_();
      var host = getHost_(this.src);
      if (hostsDone.indexOf(host) !== -1) {
        // We might have called the callback for this host already.
        console.log(&#39;already done, skipping&#39;, host);
      } else {
        hostsDone.push(host);
        callback(host, new Date().getTime() - initial);
      }
    } else {
      console.log(&#39;initialized timer using&#39;, this.src);
    }
    doNext_();
  };
  img.onload = function() {
    // Should never happen but add a callback in case so it doesn&#39;t block the
    // rest of the image requests from being sent.
    console.log(&#39;UNEXPECTEDLY LOADED&#39;, this.src);
    doNext_();
  };
  // Set the image source initially to a dummy URL b/c the first load seems to
  // always take a long time no matter what.
  img.src = &#39;http://example.com/&#39;;
}

/**
 * Times how long a request takes by loading it as an img src and waiting for
 * the error to fire. I would use XHR here but it turns out CORS errors fire
 * before CSP.
 * @param {string} host
 */
function timeRequest(host) {
  var img = new Image();
  img.onerror = onImgError_.bind(this, new Date().getTime(), host);
  // Add random params so we don&#39;t hit the cache
  img.src = host + &#39;?&#39; + Math.random().toString().substring(2);
}

/**
 * Measures the calibration drift so we have a better estimate of how long
 * a resource fetch actually took. Since we expect the time T to fetch a
 * preloaded STS host to be ~constant, the fact that it changes indicates
 * that our timing is getting skewed by some amount, probably due to DOM
 * processing. Correct for the skew by subtracting T from measurements that
 * happen shortly after.
 */
function calibrateTime() {
  timeRequest(BENCHMARK_HOST);
}

/**
 * Display the results.
 * @param {string} url
 * @param {number} time
 * @param {number} offset
 */
function display(url, time, offset) {
  var li = document.createElement(&#39;li&#39;);
  var host = getHost_(url);
  li.id = host;
  li.appendChild(document.createTextNode(host));
  if (time &lt; TIMING_UPPER_THRESHOLD &amp;&amp; time &gt; TIMING_LOWER_THRESHOLD) {
    if (!isFirefox) {
      // If we are in Chrome, hide the results for now because the false
      // positive rate is really high until confirmVisited_() is called.
      li.style.color = &#39;lightgray&#39;;
    }
    visitedElem.appendChild(li);
    visited.push(host);
  } else {
    notVisitedElem.appendChild(li);
  }
}

if (!isFirefox) {
  // Chrome needs to do an extra timing confirmation step for results to be not
  // shitty. Wait 3 seconds for the async loads to mostly finish, then try one
  // synchrous load for each potentially-visited host.
  disclaimer.style.display = &#39;&#39;;
  window.setTimeout(function() {
    confirmVisited_(function(host, t) {
      if (!disclaimer.done_) {
        disclaimer.style.color = &#39;orange&#39;;
        disclaimer.innerText = &#39;Removing false positives . . .&#39;;
        disclaimer.done_ = true;
      }
      var elem = document.getElementById(host);
      if (!elem) {
        console.warn(&#39;No element found&#39;, host);
        return;
      }
      if (t &lt;= TIMING_CONFIRM_THRESHOLD / 2) {
        console.log(&#39;showing&#39;, host, t);
        elem.style.color = &#39;&#39;;
      } else {
        console.log(&#39;hiding&#39;, host, t);
        elem.style.display = &#39;none&#39;;
        notVisitedElem.appendChild(elem);
      }
    }, function() {
      disclaimer.style.color = &#39;green&#39;;
      disclaimer.innerText = &#39;Done!&#39;;
      saveCrypto_(!notVisitedElem.querySelector(&#39;#savecrypto\\.org&#39;));
    });
  }, 3000);
} else {
  window.setTimeout(function() {
    saveCrypto_(visitedElem.querySelector(&#39;#savecrypto\\.org&#39;));
  }, 3000);
}

/**
 * Tell the user to sign this awesome petition if they haven&#39;t visited it!
 * Thank them if they have!
 * @param {Boolean} signed
 * @private
 */
function saveCrypto_(signed) {
  var text = signed ? &#39;PS: Thanks for signing 
savecrypto.org
! &lt;3&#39; :
    &#39;PS: Tell Obama to support strong encryption! Sign the petition at 
savecrypto.org
.&#39;;
  disclaimer.style.display = &#39;&#39;;
  disclaimer.style.color = &#39;blue&#39;;
  disclaimer.innerHTML = text;
}

// Main loop
hosts.forEach(function(host) {
  calibrateTime();
  timeRequest(host);
});

