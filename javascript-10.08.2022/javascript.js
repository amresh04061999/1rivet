//pop
//pop() mathod. this mathod using to delete element in array ( ending point)
const book = ["amresh", "shivam", "manish", "mukesh"];
//             0       1         2         3
book.pop(); //  one time used this mathod delete mukesh ending  point and anothor time delete manish
//  console.log(book);

//shift() mathod. this mathod using to delete element in arry ( starting  point)
let book1 = ["amresh", "shivam", "manish", "mukesh"];
//             0       1         2         3
book1.shift(); //  one time used this mathod delete amresh ending  point and anothor time delete shivam
//console.log(book1);

// push() mathod this mathod using to add element in arry ( ending point)
let book2 = ["amresh", "shivam", "manish", "mukesh"];
//             0       1         2         3
book2.push("ravi", "raj"); // add a rakesh element in array end point
//   console.log(book2);

// unshift() mathod. this mathod using to add element in arry ( starting point)
let book3 = ["amresh", "shivam", "manish", "mukesh"];
//             0       1         2         3
book3.unshift("rakesh", "rahul"); // add a rakesh rahul element in array starting point
//   console.log(book3);

//slice() mathod. this mathod using to delete any element in arry  like const position or number of delete positon
let book4 = [
  "amresh",
  "shivam",
  "manish",
  "mukesh",
  "rakesh",
  "rahul",
  "pankaj",
];
//             0       1         2         3
varibale2 = book4.slice(2, -2);
//console.log(varibale2);

//split() mathod this mothod using  to split a text convert to array.
let text = "this is a randoms text";
splittext = text.split("s"); // split a text in array,using backspace ,any allphabete,;
//console.log(splittext);

//indexOf() mathod this mothod using find postion of array
let book5 = [
  "amresh",
  "shivam",
  "manish",
  "mukesh",
  "rakesh",
  "rahul",
  "pankaj",
];
//             0       1         2       4
bookposition = book5.indexOf("manish");
//console.log(bookposition);

// concat() mathod this mothod using to join  two or more  array
let bookcont = ["amresh", "shivam", "manish", "mukesh"];
let bookcont1 = ["ramesh", "rakesh", 8];
let bookcont2 = [9, 10, 8];
//             0       1         2
concatarray = bookcont.concat(bookcont1, bookcont2); //
//console.log(concatarray);

// incliude value found in array that time return true else false (boolean value return)
let bookinclue = ["amresh", "shivam", "manish", "mukesh"];
let bookinclue1 = [1, 2, 5, 6];
includebooleandata = bookinclue.includes("mukesh");
includebooleandata1 = bookinclue1.includes(4);
//console.log(includebooleandata);
//console.log(includebooleandata1);

//filter
let datas = [
  "ram",
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let valuefilter = (document.getElementById("value").innerHTML =
  datas.filter(lengthFlter));
//console.log(valuefilter);

function lengthFlter(datas) {
  let length = datas.length;
  return length > 6;
}
//console.log(result);

// find mathod this mathod using to find the value in given array
const array = [5, 2, 8, 10, 18, 19, 20, 8];
const found = array.find((item) => item > 5);
//console.log(found);

// entries()
const array1 = ["a", "b", "c", "d", "h"];
const value1 = array1.entries();
for (let x of value1) {
  document.getElementById("demo1").innerHTML += x + "<br>";
}

//map() this mathod create a new array by only calling the condition  provided fuction in every element
let array3 = [1, 2, 3, 4, 5, 6, 7, 8];
// add one to every element
let add = array3.map((num) => num + 2); //
//console.log(add);

//every
let array5 = [1, 2, 3, 4, 5, 6, 7, 8];
//at all  element is greter than
let large = array5.every((num) => num <= 7);
//console.log(large);

// some() this mathod check if at least one of arrays item pass the condition if passed its return true otherwise false
let array6 = [1, 2, 3, 4, 5, 6, 7, 8];
//at least one element is greter than
let some = array6.some((num) => num > 9); //
//console.log(some);

// // reduce() this mathod  reduce in single value
 let array8 =[1,2,3,4,5,6,7,8]
 let add1 =array8.reduce((total,value) => total+value,0) 
console.log(add1);



