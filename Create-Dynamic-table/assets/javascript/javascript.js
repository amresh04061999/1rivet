const personDetails =[
    {
        firstName:"amresh",
        lastName:"prasad",
        age:34,
        gender:"male"
    },
    {
        firstName:"mukesh",
        lastName:"patel",
        age:24,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
    {
        firstName:"denish",
        lastName:"patel",
        age:54,
        gender:"male"
    },
];

gePersonDetils(personDetails);

function gePersonDetils(data){
    const gettableBody =document.querySelector(".table-body");
    data.forEach((user)=> {
        const row=document.createElement("tr");
             
        for(const key in user){
            if(["firstName","lastName","age","gender"].includes(key)){
                const elm=user[key];
                col =document.createElement("td");
                col.textContent=elm;
               
                 row.appendChild(col);
            }
        }
        gettableBody.appendChild(row);
    });
}


 const popbutton = document.querySelector(".add-button");
  const selectdiv = document.querySelector(".popup");
  popbutton.addEventListener ('click', function(){
    selectdiv.classList.toggle("none");
   });
   const popbuttondelete = document.querySelector(".button-close");
  
  popbuttondelete.addEventListener ('click', function(){
    selectdiv.classList.toggle("none");
   });

   


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


// $(document).ready(function () {
//     $("#myInput").keyup(function () {
//         var input, filter, table, tr, td, i, txtValue;
//             input = document.getElementById("myInput");
//             filter = input.value.toUpperCase();
//             table = document.getElementById("myTable");
//             tr = table.getElementsByTagName("tr");
//       // Loop through all table rows, and hide those who don't match the search query

//       $("#myTable tr:not('.no-records')").filter(function () {
//         for (i = 0; i < tr.length; i++) {
//           td = $(tr[i]).find('td')[0];
//           if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//               tr[i].style.display = "";
//             }
//             else {
//               tr[i].style.display = "none";
//             }
//           }
//         }
//         var trSel = $("#myTable tr:not('.no-records, .table-heading'):visible");
//         // Check for number of rows & append no records found row
//         if (trSel.length == 0) {

//           $("#myTable").find('.no-records').show();
//         }
//         else {
//           $("#myTable").find('.no-records').hide();
//         }
//       });


//     });

//   })