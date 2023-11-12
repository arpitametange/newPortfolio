// let newSet=new Set()
// newSet.add(1)
// newSet.add(3)
// newSet.add(4)
// newSet.add(8)
// console.log(newSet);
// console.log(newSet.size);
// newSet.delete(1)
// console.log(newSet);
// console.log(newSet.has(3));
// for (const iterator of newSet) {
//     console.log(iterator);
// }
// console.log(newSet.keys());
// newSet.clear()
// console.log(newSet);
// //////
// let array=[1,2,3,4,2,2]
// let arraySet=new Set()
// for (const iterator of array) {
//     arraySet.add(iterator)
// }
// console.log(arraySet);
// /////////////
// let spread=[...new Set(array)]
// console.log(spread);
// ///////////////map
// let newMap=new Map()
// newMap.set("One",1)
// newMap.set("two",2)
// newMap.set("three",3)
// newMap.set("four",4)
// console.log(newMap.get("One"));
// newMap.delete("One")
// console.table(newMap);
// console.log(newMap.size);
// console.log(newMap.has("two"));
// console.log(newMap.values());
// console.log(newMap.keys());

// // const key=newMap.keys()
// for (const iterator of newMap.keys()) {
//     let getmethod=newMap.get(iterator)
//     console.log(iterator,getmethod);
    
// }

// let str="arpita metange name"
// console.log(str.split(","));
// let arrlenght=[1,2,4,5]
// arrlenght.length=5
// let join=arrlenght.join("/")
// console.log(join);

// let no=10
// no1=no
// no=11
// console.log(no);
// console.log(no1);



// let obj1=obj
// obj.city="amravati"
// console.log(obj);
// console.log(obj1);
// let spred={...obj}
// console.log(spred);
// spred.number=234
// console.log(spred);
// let nested={
//     no:23,
//     id:24,
//     numbers:{
//         firstno:1,
//         secondno:2
//     }
// }
// let f={...nested}
// nested.third=3
// console.table(f);
// console.table(nested);




// let json=JSON.parse(JSON.stringify(nested))
// console.log(json);

// json.numbers.forth=4
// console.table(json);
// console.table(nested);

// //0 1 1 2 3 5 8
// let first=0

// let second=1
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// sum=first+second


// function year(arg) {
//     if (arg%100==0 && arg%400==0 || arg%100!=0 && arg%4==0) {
//         console.log(` ${arg} is the leap year`);
//     } else {
//       console.log("not leap year");   
//     }

// }
// year(2021)
// year(1999)
// year(1600)
// console.log("******************");
// let number1=[1,2,3,4,5,6,7]
// let store=[]
// for (let index = 0; index < number1.length; index=index+1) {
//     const element = number1[index];
//     if (index%2!=0) {
//        store.push(element)  
//     }
// }
// console.log(store);


// for (let index = 0; index < 20; index=index+2) {
//     console.log(index);
    
// }

// for (let index = 1; index < 20; index=index+2) {
//     console.log(index);

// }

// function even(arg) {
//     if (arg%2==0) {
//     console.log("even");
//     } else {
//         console.log("odd");
//     }
// }
// even(12)
// even(3)

// let num=12
// if (num%2==0) {
//     console.log("even");
    
// } else {
//     console.log("odd");
// }

// let i=new Map()
// for (let index = 5; index <=50; index=index+5) {
//     i.set(index)   
// }
// console.log(i);

// var js="ladkjf"
// console.log(js);


// function funname(arp){
// console.log(`${arp}"function with  argument and no return"`);
// return "return value"
// }
// var r=funname(12)
// console.log(r);

// function funname(arp){
//     console.log("this is the no argument with no return value")
//     return "this is the return value"
//    }
// let retu=funname(12)
// console.log(retu)

// function swap(ar,arr,co){
//    console.log(ar+arr+co); 
// }
// swap( "virrat","anushka","college")   
// let str1="arpita"
// console.log(str1.charAt(2))
// console.log(str1.indexOf("a"))
// console.log(str1.toUpperCase())
// console.log(str1.toLowerCase())
// let str3="   concate is"
// console.log(str1.concat(str3))
// console.log(str3.trim())
// console.log(str1.split(""));
// console.log(str1.replace("ar","a"));


// let r=0
// let b=1
// sum=(r+1)+(b+1)
// console.log(sum);

let arrayPrime=[]
var isprime;
function prime(num){
for (let index = 2; index <= num; index++) {   //2....30
    isprime=1;
    for(let j=2;j<index;j++){          ///2...29 
     if (index%j===0) {       //2%2 ==0 2%3==0.
    isprime=0
    break;
     }
    }
    if( isprime===1) {
    arrayPrime.push(index)
    }    
}
console.log(arrayPrime);
}
prime(30)

// let ispime;
// let store=[]
// function prime(num) {
//   for (let index = 2; index <=num; index++) { //2...20 check
//        ispime=0
//        for(let i=2; i<index;i++) {  //2..<num
//         if (index%i===0) {
//           ispime=1
//           break;
//         } 
//     }
//         if (ispime===0) {
//         store.push(index)
//         }
//        }  
//        console.log(store);
//   }
 

// prime(30)

//fibonacci
let store=[]
var a=0
var b=1
store.push(a)
store.push(b)
for (let index = 0; index <=10; index++) {
    let temp=a+b
    store.push(temp)
    a=b
    b=temp
}
console.log(store);


let vacant=[]
let c1=0
let d1=1
vacant.push(c1)
vacant.push(d1)
for (let index = 0; index <=10; index++) {
  let temp=c1+d1
  vacant.push(temp)
  c=d1
  d1=temp  
  
}
console.log(vacant);

let str="   thisi is tthe string"

let str2="12"
let r=+str2
console.log(typeof r);
console.log(1>2?"true":"false");
let h=0
switch(h)
{
case 1:
 console.log("this is the one")
break;
case 2:
console.log("this is the to")
 break;
default:
console.log("this ")
 break;
}



let st="this is the string"

console.log(typeof(NaN) );

function Person(name,id){

  this.name=name;
  this.id=id;
  this.show=function(){
  console.log(`${this.id} ${this.name}`)
}}

let object={
  name:"dfj",
  id:12,
  no:23
}
let p1={...object}
console.log(p1);

console.log(  object instanceof Person);
console.log('*********');
let array=[12,23,90,34]
array.forEach(element=>{
  return element
})
let objectt={
  name:"arppota",
 id:12
}
console.log('***********');
let obj=Object.assign({},objectt)
console.log(obj);
let set=new Set()
set.add("jkd")
set.add("arpit")
console.log(set)
set.delete("arpit")
console.log(set.size)
let d=[2,3,2,3,23]
let du=[...new Set(d)]
console.log(du);
  

let map=new Map()
map.set("value",12)
map.set("add",13)
map.set("new",90)
let o=map.get("value")
console.log(o)
map.delete("add")
console.log(map.keys())
console.log("for each");
map.forEach((element,index)=>{
   console.log(index,element);
})



  let arowo=() => {
    console.log("this is the arrow function")
    }
  arowo()
    
    
    
    
  let arrow=(arg,arg2)=>{
    let sum=arg+arg2
   return sum
}
let result=arrow(1,2)
console.log(result)


let ap=["nehda","ankita","zerjk","qdkfj","wejkd"]
console.log(ap.sort());
let sort=ap.sort((a,b)=>{
return a<b?1:-1
})
console.log(sort);











let outer=11

function neww(arg){
  arg()
  return function fu(){
      console.log("returnd");
  }
}
let n=neww(show)
n()


function show(){
 console.log("this is the show")
}




function facto(num){
let count=0
let f=1
let s;
if (s=num.split(" ")) {
for (let index = 0; index <s.length; index++) {
  count=count+1
  f=f*count
}  
}
console.log(f);
}
facto("Revision is the mother of Success")

