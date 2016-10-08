        with(document){
          for(i in links){
            links[i].onclick=function(){
                  location.replace(this.href); 
                  return false;
                }
          }
        }
    
