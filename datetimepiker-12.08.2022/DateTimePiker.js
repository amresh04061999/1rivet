
function selectchange(){

  let  select=document.getElementById("slelect");
  let output= select.options[select.selectedIndex].value;
  
    let date  = new Date();
    //   let day   = date.getDate();
    //   let month = date.getMonth()+1; 
    //   let year  =  date.getFullYear();
    //   let hours = date.getHours();
    //   let minutes =date.getMinutes();
    //   let second   = date.getSeconds();
    //  let dateq= (day + " / " + month + " / " + year +"  " +"," + hours + " : " + minutes + " : " + second );

           let  i= date.toLocaleString("en-US",{ timeZone:"Asia/Kolkata"});
            let  u = date.toLocaleString("en-US",{ timeZone:"america/New_york"});

           if(output == 'I'){
               let indai= document.getElementById("datetime").innerHTML=i;  
            }
           else if(output == 'U'){
                  document.getElementById("datetime").innerHTML=u;
              } 
}

setInterval(selectchange,1000);

  // setInterval(() =>{
  //   let date  = new Date();
  //   let day   = date.getDate();
  //   let month = date.getMonth()+1; 
  //   let year  =  date.getFullYear();
  //   let hours = date.getHours();
  //   let minutes =date.getMinutes();
  //   let second   = date.getSeconds();
  //  let d = document.getElementById("date").innerHTML= (day + " / " + month + " / " + year );

  //            let ampm = document.getElementById("ampm");
  //            if (hours >=12){
  //              ampm.innerHTML="PM";
   
  //            } else {
  //              ampm.innerHTML ="AM"
  //            } 

  //            let date1 =("   "+ hours + " : " + minutes + " : " + second);
  //           let s = document.getElementById("time").innerHTML= date1;
  //            },1000);
   
  //       function autoupdate(){
  //        let var2 = new Date().toLocaleString("en-US",{ timeZone:"america/New_york"});
  //        let cel = document.getElementById("USDATE").innerHTML=var2;
  //      }
  //         setInterval(autoupdate,1000)
   
    