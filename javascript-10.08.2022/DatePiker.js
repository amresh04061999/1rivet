
        window.onload= function(){
            let date= new Date();
            let day = date.getDate();
            let month =date.getMonth()+1;
            let year = date.getFullYear();
            let second=date.getSeconds();
            let mint =date.getMinutes();
            let houre =date.getHours();
     
          var1 = document.getElementById("demo").innerHTML=(day + "/ " + month + "/ " + year + " "+ houre +":" + mint + ":"+ second );
        }     
       
    // var1 = document.getElementById("demo").innerHTML=date;
        
        let var2 = new Date().toLocaleString("en-US",{ timeZone:"america/New_york"});
    
        let cel = document.getElementById("demo1").innerHTML=var2;
      
        

      