var new1={
    name:"arpit99a",
    keu:"anikta"
}
//two ways to access
///dot and bracket
console.log(new1.name);
console.log(new1['keu'])




//simple object which can store the key and values as pairs
var obj={
    name:"arpita",
    lastname:"metange",
    no:23

}
////for in loop///
for(let i in obj){
    if (Object .hasOwnProperty.call(obj,i)) { 
    var element=obj[i];
    console.log(i,element);
    }
}

//it will disply keys in array
var ele=Object.keys(obj) 
console.log(ele);

//it will pring values in array
var ele=Object.values(obj)
console.log(ele);

//it will print both in array form
var ele=Object.entries(obj)
console.log(ele);

//to access it we use []
console.log(ele[0]);  //access 0th eleemnt
console.log(`ele[0][0] ${ele[0][0]}`); 

// for in//
console.log("////////for  in////");
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}


console.log("//////////in operator///////////");
var nameisavailable="name" in obj
console.log(nameisavailable);


console.log(`type of no is ${typeof obj.no}`);
obj.number=2343 //we should not write updating and deleting in console
delete obj. number //deleting
console.table(obj)

////object inside object
var obj={
    name:"arpita",
    lastname:"metange",
    no:23,
    adress:{
        lane:3,
        nagar:"samara" 
    }
}
console.log(obj.adress);
obj.adress.nagar='amni'
console.log(`the nagar is updated ${obj.adress.nagar}`);
console.log(obj.adress);


////function inside object
var obj={
    name:"ankita",
    address:"samara nagar",
    function:function () {
              console.log("this is the function");

    }

}
obj.function() //for acccesssing the function




///array inside object

var obj={
      name:"arpita",
      no:23,
      lastname:'metange',
      array:[1,2,3,4,5]
}
//accesing all element
console.log(obj.array); 

//for accesing last element
console.log(obj.array[obj.array.length-1]); 


console.log(obj.array[0]); //for accesing firrst elment
console.log('adding');
let k=obj.array.splice(2,1,22)//adding in between the array
console.log(obj.array[2]);

obj.array[0]=90;  //updating value 
console.log(obj.array);

////how to get the values and keys in one line like this = 
// Address is: Street undefined, City pune, PIN 34
//we use this and return inside the function

var obj={
    name:"arpita",
    obj2:{
       lane:3,
       nagar:"samara"
    },
    objinoneline:function () {
      return `${this.obj2.lane} ${this.obj2.nagar}`
    }   
}
var re=obj.objinoneline()
console.log(re);