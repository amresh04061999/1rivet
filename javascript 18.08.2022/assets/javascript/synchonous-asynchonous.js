// synchonous request block the client untile operation completes .
// its is work one by one complete a tast

const synchonous2 =() =>{
    console.log( "function 2 is start"); //second
}

const synchonous1= () =>{
    console.log(" function 1 is start"); // first
    synchonous2();
    console.log(" function 1 is ending");// last

}
synchonous1();



//asynchonous request dose not  block the client untile operation completes .
// its is not a  work one by one its process 
// at the time user can perfome another operation not wait 
const asynchonous2 =() =>{
    setTimeout( () =>{
        console.log( "function 2 is start"); //third
    },3000);
}

const asynchonous1= () => {
    setTimeout( () =>{
        console.log(" function 1 is start"); // first
        for (let i = 0; i < 50; i++) {
            const element = [i];
            console.log(element);  
        }
        asynchonous2(); 
        console.log(" function 1 is ending");// second
    },1000);

}
asynchonous1();

