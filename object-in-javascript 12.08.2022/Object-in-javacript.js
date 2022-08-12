// what is object :The Object type represents one of JavaScript's data types. It is used to store various keyed 
//collections and more complex entities and aslo perfom mathod in java script

//object in javascript :      object.create()
                      //      Object.assign()
                            //   Object.keys()
                            //   Object.values()
                            //   Object.entries()
                            //   Object.freeze()
                            //   Object.hasOwn()
                            //   Object.is()
                            //   Object.defineProperties()
                            //   Object.defineProperty()
                            //   Object.fromEntries()
                            //   Object.seal()
                            //   Object.isSealed()
                            //   Object.isFrozen()
                            //   Object.isExtensible()
                            //   Object.getOwnPropertyDescriptor()
                            //   Object.getOwnPropertyDescriptors()
                            //   Object.getOwnPropertyNames()
                            //   bject.getOwnPropertySymbols()
                            //   Object.getPrototypeOf()
                            //   Object.prototype.hasOwnProperty()
                            //   Object.values()
                            //   bject.prototype.valueOf()
                            //   Object.prototype.toString()
                            //   Object.prototype.toLocaleString()
                            //   Object.prototype.__defineGetter__()
                            //   Object.prototype.__defineSetter__()
                            //   bject.prototype.__lookupGetter__()
                            //   Object.prototype.__lookupSetter__()
                            //Object.prototype.constructor


//object
  // create obeject
  const person ={
    name :"amresh",
    age:23,
    gender:"male",
  } 
  // update properties in person 
    let modify=person.age =25; 
       //  console.log(modify);


    // add a propertis in persone
    let addnewpropertis=person.firstName="prasad"; // add a propertis in persone
     //console.log(person);  
     // console.log(person)// access full object

      //in operator return true or false 
      // console.log("gender" in person);

       // access all propertis for in loop
       for(let key in person){
        //console.log(key);//  all  propertis value
       // console.log(key +" " + person[key]);//  all  propertis value
       }

   // result name :"amresh",  age:23, gender:"male",
   //console.log(person.name)// access single object

    // result name :"amresh",
    //console.log(person.fathername)// access  single object but not in person propertis that time result undifine
    //result = undifine

// 1 object.create()


// ========================== object mathod ==========================================

// Object.create  is add a data in prototype donot change a data in prototype 

const person1 = {
    name :"amresh",
    age:23,
    gender:"male"
  } 
  //console.log(person1);
  const child =Object.create(person1)
  child.age=3;
  //console.log(child)
  // =============================================  object.assign ===============================

  // object.assign mathod  this  mathod add a one object to anothore object  but second object is overide  a propertis in first object 

   let object={}
  //console.log(object);
   let object2 ={
    name :"amresh",
    age:24,
    gender:"male",
   } 
        //=================== hasWon mathod ==================================
  //console.log(Object.hasOwn(object2, 'gender')); // hasWon mathod using to check properties available or not return true or false

  //=================================== Object.keys =======================
  //console.log(Object.keys(object2)); // this mathod using to  get all properties name

  //========================================== Object.values ===========================
  //console.log(Object.values(object2)); // this mathod using to  get all properties value

  
   Object.assign(object,object2)
  //console.log(object);
  

  // ==========================  Object.entries() ==============================================

  ///Object.entries()  this is provided  key and value

//    const object3 = {
//     name :"amresh",
//     age:24,
//     gender:"male",
//     };
//     for (const [key, value] of Object.entries(object3)) {
//     // console.log(`${key}: ${value}`);
//     }

//======================================== Object.defineProperties() =========================================

 // Object.defineProperties() The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object
          //  more properties difine in single object
//  const object1 = {};
//  Object.defineProperties(object1, {
//    name: {
//      value: "42",
//    },
//    property2: {
//     value: 41,
//    }
//  });
//  //console.log(object1.property2)  

// =======================================  Object.defineProperty()  ====================================

 //Object.defineProperty() is only one propertes define

//  const object1 = {};
//  Object.defineProperty(object1, 
//     'property1', {
//    value: "amresh",
//    writable: false
//  });
//  console.log(object1.property1)  


 
// ======================================  Object.freeze()  =======================================

//Object.freeze() method freezes an object  do not change the propertesi or value

//   const obj = {
//     age: 42
//    };
//     Object.freeze(obj);
//     obj.age=34; // do not change
//     console.log(obj);



//===============================================   Object.seal()  ================================================
    //Object.seal() this mathod   did not delete or add  only update a properties or value
    // Object.seal()
    // const object1 = {
       
    //     firstName:"amresh",
    //     age: 42
    //   };
      
    //   Object.seal(object1);
    //   object1.age = 33; // update propertis 
    //   console.log(object1.age);
    
    //   delete object1.age; // cannot delete when sealed
    //   console.log(object1.age);
  

  //  ===================================  json in javascript   =======================================================

   // JSON.stringify
   // stringify convert object to string

//    let jsonObject ={
//     name :"amresh",
//     age:24,
//     gender:"male",
//   } 
//   const stringify = JSON.stringify(jsonObject);

//  // console.log(stringify);
//   // JSON.parse convertconvert string to object
//       const per=JSON.parse(stringify);
//   // console.log(per)





