//promises are used to handle asynchoronus operationin java script the are easy to manage when dealing with multiple  anynchronous  
//operation whre call backs and create  callbackhell  leading to unmanageable code
//a promiseia a object  that keep track about whether a certain event has  happend  already or not


 //syntax 
//  let promissk = new Promise(function(resolve,reject){
//     if(condition){
//           resolve("pass")
//     }
//     else{
//          reject("fail")
//     }
//  });

//  promissk.then(fulfill)
 
//  promissk.catch(unfulfil)

//  let fulfill =(result) =>{
//     console.log(result)
//  }
//  let unfulfil =(result) =>{
//     console.log(result)

//  }

const pro =new Promise(function(resolve,reject){

   let c= 2 * 3;
    if(c){
        resolve(`this is true ${c}`);
    }else{
        reject(`this is false ${c}`);
    }
})


let t =(result)=> {
    console.log(result);
}

let f =(result)=> {
    console.log(result);
}
pro.then(t);
pro.catch(f);
