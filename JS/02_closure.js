let f=2
function nested(pa) {
    let f1=12
    console.log("nessted");
   var fun1= function () {
        console.log("inner funciton");
        console.log(f);
        console.log(f1);
    }
      return fun1
}
nested()()
nested()
// ne()
console.log("***********************************Higher Order Function********************************************");
function funclosure(arg) {
  console.log("this is the complere");  //first will print this
        arg()
   return function innerfunction() {  
    console.log("this is the inner function of funclosure");
  }

}
function argumentfunciton() {
  console.log("copy it function");
}
let result=funclosure(argumentfunciton);
result() 


console.log("********************************************************************************");







///HOISTING
// fu() // we cant access it beacause it not hosted
fun2() //we can access it because it hosted means its declaraion goes to upside 
// console.log(keysword);//let does not hosted it gives error
console.log(variable); //hosting it shows declaration of element
var variable=12
let keysword=23

function fun2() {
  console.log(fun2);
}


let fu=function () {
 console.log("funciotn with expression"); 
}

city="pune"
console.log(city);
var city;

//////////setTimeout//////////////

function new1() {
  console.log("new function");
}
// setTimeout(new1, 4000);


function un() {
  return function namee() {
    console.log("this is the name");
  }
}
let r=un()
r()
