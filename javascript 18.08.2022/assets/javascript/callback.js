//any  function that is passed as an  argument  is call a call =back function

const asynchonous2 =() =>{
    setTimeout( () =>{
        asynchonous3()
        console.log( "function 2 is start"); //third
        for (let i = 0; i < 50; i++) {
            const element = i;
            console.log(element);  
        }

    },3000);
}

const asynchonous3 =() =>{
    setTimeout( () =>{
        console.log( "function 3 is start"); //third
        //   let number =[1,1,1,1,,2,5,8,6,8,4,1,56,8,7,6,7,9,4,8,9,,8,7,];
          for( let i=1 ; i<=50; i++){
            if(i%2==0){
                console.log(`this is even${i}`);
               }
              
            
          }
          
           

    },0);
}

const asynchonous1= () => {
    setTimeout( () =>{
        
        console.log(" function 1 is start"); // first
       
         asynchonous2(); 
        console.log(" function 1 is ending");// second
    },1000);

}
asynchonous1();
