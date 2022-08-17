const personDetails = [
  {
    firstName: "amresh",
    lastName: "prasad",
    age: 34,
    gender: "male",
  },
  {
    firstName: "mukesh",
    lastName: "patel",
    age: 24,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
  {
    firstName: "denish",
    lastName: "patel",
    age: 54,
    gender: "male",
  },
];


async function getuserdata(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
  gePersonDetils(data) }
   getuserdata();
   
function gePersonDetils(data) {
  console.log(data);
  const gettableBody = document.querySelector(".table-body");
  data.forEach((user) => {
    const row = document.createElement("tr");

    for (const key in user) {
      if (["id", "name", "username", "email"].includes(key)) {
        // console.log(user);
        const elm = user[key];
           //console.log(elm.address);

        // const elm1 = user[key];
        col = document.createElement("td");
        col.textContent = elm;
        row.appendChild(col);
      }
    }
    gettableBody.appendChild(row);
  });
}





const popbutton = document.querySelector(".add-button");
const selectdiv = document.querySelector(".popup");
popbutton.addEventListener("click", function () {
  selectdiv.classList.toggle("none");
});

const popbuttondelete = document.querySelector(".button-close");
popbuttondelete.addEventListener("click", function () {
  selectdiv.classList.toggle("none");
});





function myFunction() {
  let getbutton = document.querySelector(".none-record");
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  console.log(input);
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("myTable");
  console.log(table);
  tr = table.getElementsByTagName("tr");

  console.log(tr);
  let found = false;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    console.log(td);

    if (td) {
      txtValue = td.textContent || td.innerText;
      console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        found = true;
      } 
      else
       {
        tr[i].style.display = "none";
      }
    }
    if (found) {
      getbutton.style.display = "none";
    } else {
      getbutton.style.display = "";
    }
  }
}
