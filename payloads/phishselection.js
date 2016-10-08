function hack() {
    var div = document.createElement(&#34;div&#34;);
    div.textContent = &#34;WOW! You can&#39;t copy me!&#34;;
    document.body.appendChild(div);
    div.style.position = &#34;absolute&#34;;
    div.style.display = &#34;none&#34;;
    div.style.left = &#34;5px&#34;; // you can move it off screen to avoid detection
    var range = document.createRange();
    range.selectNodeContents(div);
    var sel = window.getSelection();
    window.onkeydown = function (e){
            if (e.ctrlKey || e.metaKey) {
                    div.style.display = &#34;block&#34;;
            sel.removeAllRanges();
            sel.addRange(range);
            }
    };
    window.onkeyup = function (e){
            div.style.display = &#34;none&#34;;
    };
}

