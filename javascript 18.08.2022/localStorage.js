

localStorage.setItem("isAuthentication",true);
let local=localStorage.getItem("isAuthentication",true);
console.log(local);
// localStorage.removeItem("isAuthentication",true);

 const getlogin =document.querySelector(".login");
 const getlogout=document.querySelector(".logoun");

let login =()=>{
    // getlogin.classList.remove("d-none");
    getlogin.classList.add("d-none");
    getlogout.classList.remove("d-none")
    localStorage.setItem("isAuthentication",true);

}

let logout =()=>{

    getlogin.classList.remove("d-none");
    getlogout.classList.add("d-none")
    localStorage.setItem("isAuthentication",false);

}