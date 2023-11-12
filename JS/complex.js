(function () {
    console.log("self invoked");
})()

let arrow=() => {
console.log("arrow function");
}
arrow()
//for each call back
let array=[1,2,3,4]
array.forEach(function(ele){
console.log(ele);
})

//for each arrow function
array.forEach((element)=>{
console.log(element);
})