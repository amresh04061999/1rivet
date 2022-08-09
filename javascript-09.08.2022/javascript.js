
//pop
//pop() mathod. this mathod using to delete element in array ( ending point)
const book =["amresh","shivam","manish","mukesh"];
//             0       1         2         3
 book.pop();//  one time used this mathod delete mukesh ending  point and anothor time delete manish
//  console.log(book);


//shift() mathod. this mathod using to delete element in arry ( starting  point)
let book1 =["amresh","shivam","manish","mukesh"];
//             0       1         2         3
 book1.shift();//  one time used this mathod delete amresh ending  point and anothor time delete shivam
 //console.log(book1);


 // push() mathod this mathod using to add element in arry ( ending point)
let book2 =["amresh","shivam","manish","mukesh"];
//             0       1         2         3
 book2.push("ravi","raj");// add a rakesh element in array end point
//   console.log(book2);

// unshift() mathod. this mathod using to add element in arry ( starting point)
 let book3=["amresh","shivam","manish","mukesh"];
//             0       1         2         3
 book3.unshift("rakesh","rahul");// add a rakesh element in array starting point
//   console.log(book3);

// splice() mathod. this mathod using to delete any element in arry  like const position or number of delete positon
 let book4 =["amresh","shivam","manish","mukesh"];
//             0       1         2         3
 book4.splice(1,1);
 //  1 position ,number of delete position 1 that time delete only shivam
 // but we have given delete postion 2 that time shivam or manish both are delete
 console.log(book4);


