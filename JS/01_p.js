// let object={
//     name:"arpita",
//     class:12,
//     show:function () {
//         console.log("this is the function");
//     }
// }
// object.show()
// // for (const key in object) {
// //     if (Object.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
// //         console.log(`${key}: ${element}`);
// //     }
// // }

// // let array=[object]
// // for (const iterator of array) {
// //   console.log(iterator);
// // }
// // const str="jdkjffk"
// // const a=[]
// // Object.freeze(a)
// // a.push(23)
// // console.log(a);

// // 
// let word="arpita mettange"
// let fa=1
// let count=0
// let spl=word.split("")
// for (let index = spl.length-1; index >=0; index--) {
//   const element = word.charAt(index)

//   if (element==" ") {
//    break
    
//   }
//   count=count+1
//   fa=fa*count
  
// }
    
// console.log(fa);  
    
    



// function name1(num) {
//     if (num<2) 
//      return `${num} is not prime`   
    
//   for (let index = 2; index < num; index++) {
//     if (num % index===0) {
//     return `11 is not a prime number`  
//   }
//   else if(num%num===0 && num%1===0){
//     return `${num}  prime no`;
//   }
//   }
// }

// var r=name1(2)
// console.log(r);

// console.log("my code");
// let num=4
//     for (let index = 2; index <num; index++) {
        
//     if (num % index===0) {
//         break
//     }
//  }
//  console.log(" prime"); 
        
    

// let a=10
// switch(a){
//   case 1:
//     console.log("this is not our a");
//     break;
//   case 18:
//     console.log("this is our case 10");
//     break
//     default:


//     console.log("this is the default");
//     break
// }
 
// // let objj={
// //   name:"arpiita",
// //   class:12
// // }
// // let array=[objj]

// // for (const key of array) {
// //  console.log(`${key.name} , ${key.class}`);
// //   }

// const bank1={
//       bankName:"SBI",
//       ifscCOde:2344,
//       obj:{
//         name:"arpita",
//         lastName:"metange"
//       },
//       show:function () {
//         console.log(` ${this.obj.name}`);
//       }
// }
// console.log("************************************************************");
// let object4={
//   id:123,
//   no:34490,
//   adrees:[2,3,4]
// }
// console.log(object4.adrees);
// console.log("assign");
// const m=Object.assign(bank1,object4)
// console.table(m);

// // console.table(Object.freeze(bank1.obj));
// // console.table(Object.freeze(bank1));
// console.table(bank1);
// bank1.bankName="dhk"
// bank1.obj.name="tina"
// console.table(bank1);
// console.log(Object.entries(bank1));
// console.log(Object.keys(bank1));
// let inn="bankName" in bank1
// console.log(inn);



// class Person{
//   constructor(name,city,lastName){
//       this.name=name
//       this.city=city
//       this.lastName=lastName
//       }
//       show() {
//         console.log(`name ${this.name} city ${this.city}`);
//       }
//   }  
// let obj=new Person("arpita","pune","metange")
// console.log(obj);
// obj.show()
// console.log("instance");
// const per=obj instanceof Person
// console.log(per);


// function Bank(name,location){
//     this.name=name;
//     this.location=location
//     this.show=function () {
//       console.log(`bank name :${this.name}, location${this.location}`);
//     }
// }
// let sbi=new Bank("sbi","pune")
// console.log(sbi);
// sbi.show()
// Bank.prototype.country="india"
// console.log(sbi.country);

// console.log("**********************************string************************************");
// ///////string
// let str="    this is the string"
// console.log(str.length);
// console.log(str.charAt(str.length-1));
// console.log(str.slice(str.length-6));
// console.log(str.indexOf("t"));
// console.log(str.includes("i"));
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split(","));
// console.log(str.trim());
// let str2="second string"
// console.log(str.concat(str2));

// ////simple function
// function name(num) {
//        console.log(num);
  
// }
// name(3)

// ////function expression

// let funName=function (num) {
//   return num
// }
// let result=funName(23)
// console.log(result);


// ///anonymous function
// // function (num) {
// //   console.log(num);
// // }


// let a1=10
// b=a1++
// console.log(`value of a ${a1}`);//11
// console.log(`value of b ${b}`);//10
// let d=10
// c=d--
// console.log(`value of d ${d}`);//9
// console.log(`value of c ${c}`)//10
// let a5=11
// let a4=10
// if (a4%2==0) {
//   console.log("even");
// }

// // console.log(a4%2==0?"even":"odd"); 

// //2/2 
// //3/2 
// // 4/2 4/3 
// //5/2 5/3 5/4
// // 6/2 6/3 6/4
// // 7/2 7/3 7/4 7/5 7/6 
// //first ten prime no  2
// let isp;
// let s=[]
// function p(num) {
//   for (let index = 2; index <= num; index++) {
//         isp=0
//     for (let i = 2; i <index; i++) {
//      if (index%i===0) {
//        isp=1
//        break
//      }
//      }
//      if (isp===0) {
//       s.push(index)
//      }
//     }
//     console.log(s);
//     }
// p(9)
// let put=[]
// let t=0
// let h=1
// put.push(t)
// put.push(h)
// for (let index = 0; index <=8; index++) {
//        let temp2=t+h
//        put.push(temp2)
//        t=h
//        h=temp2
// }
// console.log(put);

let arrayPrime=[]
var isprime;
var count=0
function prime(startvalue,totalprime){
for (let num = startvalue; count<totalprime; count++) {   
    isprime=1;
    for(let j=2;j<num;j++){          
     if (num%j===0) {       
    isprime=0
    break;
     }
    }

    if( isprime===1) {
      count++
    arrayPrime.push(num)
    }    
    num++
}
console.log(arrayPrime);
}
prime(2,50)





let array=[]
function name(arg,arg1) {
  let count1=0;
for (let number=arg; count1<arg1; number++){

let isprime=true;

for (let index = 2; index <number; index++) {
    if (number%index==0) {
        isprime=false;
        break;
    }  
}
if (isprime) {
    array.push(number)
    count1=count1+1;
}
}
console.log(array);
}
name(2,10)



function fabSeries(fabTerm){
  let array1=[]
  let first = 0;
  let second = 1;
  let next = 0;
  for (let index = 1; index <= fabTerm; index++) {
    array1.push(first)
    next = first + second; 
    first = second;
    second = next;  
  }
}
fabSeries(7);


const number=15;
let a=0 ,b=1,temp=0 ;
for (let index = 1; index <=number; index++) {
    console.log(a);
    temp =a+b ;
    a=b;
    b=temp;   
}

console.log("********************palindrom************************");
function palindrom(str) {
  

for (let index = 0; index<(str.length/2); index++) {
  if (str[index] ==([str.length-1])) {
    return "not plind"
  }
 else{
  return "palondrom"
 }
}

}
let result=palindrom("mam")
console.log(result);


function outer() {
  console.log("This is outer function");
  let fun=function inner() {
    console.log("inner");
  }
  fun()
}
outer();   


console.log("******************************************************************");
let mapp=new Map()
mapp.set("nam","arpita")
console.log(mapp);
console.log(mapp.values());
// mapp.delete("nam")
console.log(mapp.has("two"));
mapp.set("id",12)
mapp.set("no",129)
mapp.set("value",1223)
mapp.set("idd",12)
console.log(mapp);
for (const iterator of mapp.keys()) {
  let element=mapp.get(iterator)
  console.log(iterator,element);
}

let sett=new Set()
sett.add("arpita")
sett.add("komal")
sett.add("aish")
console.log(sett);
sett.delete("arpita")
console.log(sett);
// sett.clear()
for (const iterator of sett) {
  console.log(iterator);
  
}
let arrayy=[1,2,3,4,1,2]
let set1=[...new Set(arrayy)]
console.log(set1);

let co=[]
for (let index =10; index >= 0; index--) {
  co=co+"*" 

}
console.log(co+"*");



//********************************
