let Show=() => {
    console.log("this is the arrow function");
}
Show()

let ar=(n,b) =>{
console.log(n+b);
}
ar(1,2)

let re=() => {
    return "arpita"
}
let ret=re()
console.log(ret);


////////deconstructting  object

let obj={
    name:"arpita",
    id:12,
    no:97993
}

let {name,id,no,city="amravati" }=obj
console.log(` name:${name} no:${no} city ${city}`);


////////destructring  array
let array=[1,22]
let [n1,n2,n3,n4=1]=array
console.log(` ${n1} ${n2} ${n3} ${n4}`);


////FUNCTION DEFAULT PARAMETER

function h (a,a2,a3=0) {
    console.log(a,a2,a3);
}
h(1,2,3)


///SELF INVOKE FUNCTION

// (function () {
//     console.log("self invoke funciton");
// })()

//REST PARAMETER

let express=function (a,b,c,...d) {
    console.log(a,b,c,d);
}
express(1,2,3,4,4,44,55,44)


let obj4={
    name1:"arpita",
    id1:12
}
let {name1,id1}=obj4
console.log(`${name1} ${id1}`);