
// async keyword with function always return promises

// let promise = new Promise((resolve,rejct)=>{
//     setTimeout(()=>{
//        resolve('data Recived')
//     },3000)
// })

// async function getdata(){
//    let response=await promise;
//    console.log(response)
// }

// getdata()

// example 1 with  Promise

let result1=document.getElementById('result1');
let result2=document.getElementById('result2');

dell={
    Brand:'dell',
    Harddisk:'2 tb',
    color:'red'
}

let buylaptop = new Promise((resolve,rejct)=>{
    setTimeout(()=>{
       resolve(dell)
    },3000)
})

// promiss 
function fetch1(){
    // result1.innerText='fetching data';
    buylaptop.then(res =>{
        // console.log(res)
        result1.innerText=JSON.stringify(res);
    })
}


// example 2 with  async await
async function fetch2(){
     result2.innerText='fetching data';
     let data =await buylaptop;
    // console.log(data)
     result2.innerText=JSON.stringify(data);
}

// example 3 with  fetch api
// fetch data using promiss

// fatch  data in json server using fetch mathod
let buylaptop2=fetch('https://jsonplaceholder.typicode.com/users').then(response=>
    response.json())

// create fetch data  using promises

// function fetch3(){
//     result3.innerText='fetching data';
//     // prommiss using to fetch 
//     buylaptop2.then(res =>{   // console.log(res)
//         result3.innerText=JSON.stringify(res);
//     })

// }

// fetch data using async or await
async function fetch3(){
    result3,innerText='fetching data';
    let res = await buylaptop2;
    console.log(res)
    result3.innerText=JSON.stringify(res);




}
