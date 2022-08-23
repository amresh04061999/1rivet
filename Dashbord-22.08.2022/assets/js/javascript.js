  
  // button toggle
  let toggle = document.querySelector(".toggle");
  let  navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  
  toggle.onclick=function(){
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    
  }
// api manual
  const buydata =[
    {
        Item:"Skippy peanut butter 160z",
        Date:"07.nov,8:35 pm",
        Type:"discarded",
        EstCost:"$40.25",
        Last:"agust",
        List:"Gerocry",
        Auto:"no",
        BuyNow:"n/a"
    },
    {
        Item:"Skippy peanut butter 160z",
        Date:"07.nov,8:35 pm",
        Type:"discarded",
        EstCost:"$40.25",
        Last:"agust",
        List:"Gerocry",
        Auto:"no",
        BuyNow:"n/a"
    },
    {
        Item:"Skippy peanut butter 160z",
        Date:"07.nov,8:35 pm",
        Type:"discarded",
        EstCost:"$40.25",
        Last:"agust",
        List:"Gerocry",
        Auto:"no",
        BuyNow:"n/a"
    },
    {
        Item:"Skippy peanut butter 160z",
        Date:"07.nov,8:35 pm",
        Type:"want",
        EstCost:"$40.25",
        Last:"agust",
        List:"Gerocry",
        Auto:"no",
        BuyNow:"n/a"
    },
    {
        Item:"Skippy peanut butter 160z",
        Date:"07.nov,8:35 pm",
        Type:"discarded",
        EstCost:"$40.25",
        Last:"agust",
        List:"Gerocry",
        Auto:"no",
        BuyNow:"n/a"
    },
    {
        Item:"Skippy peanut butter 160z",
        Date:"07.nov,8:35 pm",
        Type:"want",
        EstCost:"$40.25",
        Last:"agust",
        List:"Gerocry",
        Auto:"no",
        BuyNow:"n/a"
    },
  ]

// getdata
    getData(buydata);
    function getData(data) {
        const tblBody = document.querySelector("#myTable");
            data.forEach((user) => {
            const tblRow = document.createElement('tr');
            for (const item in user) {
                const tblColumn = document.createElement('td');
                const value = user[item];

                if(item=="Type"){
                  const span=document.createElement("span");
                  span.classList.add('badge');
                  span.textContent= user[item];

                  if( user[item] == "discarded"){

                    span.classList.add('badge-danger');
                  }
                  if(user[item]=="want")
                  {
                      span.classList.add('badge-success');
                  }
                  tblColumn.appendChild(span)
                }
                else{
                  tblColumn.textContent = value;
                }
                
                tblRow.appendChild(tblColumn);
            }
            tblBody.appendChild(tblRow);
        });
    }




    // filte
function myFunction() {
    let getbutton = document.querySelector(".none-record");
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    //console.log(input);
    filter = input.value.toUpperCase();
    //console.log(filter);
    table = document.getElementById("myTable");
    //console.log(table);
    tr = table.getElementsByTagName("tr");
  
   // console.log(tr);
    let found = false;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
     // console.log(td);
  
      if (td) {
        txtValue = td.textContent || td.innerText;
        //console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          found = true;
        } else {
          tr[i].style.display = "none";
        }
      }
      if (found) {
        getbutton.classList.add("none")
      } else {
        getbutton.classList.remove("none")
      }
    }
  }