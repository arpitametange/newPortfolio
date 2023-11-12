// (function(ele){
// console.log(ele);
// })(2)

// let a=(ele)=>{
// console.log(ele);
// }
// a(34)

// let arr=[2,3,4,2,3]
// arr.forEach((ele)=>{
// console.log(ele);
// })

// let arra=[12,13,14,15,16]
// let map=arra.filter(element =>{
//      return element%2==0
// })
// console.log(map);




// let mapEmployees=new Map()
// mapEmployees.set("empid",11)
// mapEmployees.set("arouta",12)
// mapEmployees.set("ankita",13)
// mapEmployees.set("empi",14)
// mapEmployees.set("jdfemp_i",15)
// mapEmployees.set("jejvia",16)
// mapEmployees.set("mpid",17)

// console.log("***********************map and filter************************");
// let array1 = [3, 4 ];
// let map1=array1.map((element)=>{
//       return element**2
// })
// console.log(map1);

// let filter=array1.filter((element,h1)=>{
//       return (element,h1)
// })
// console.log(filter);
// //*************************************************************** */
// console.log('*******************');

// let istrue=false
// let promise=new Promise((resolve,reject)=>{
//        if (istrue) {
//         resolve("this is the resolve")
//        }
//        else{
//         reject("this is the reject statement")
//        }
//       })


// promise.then((success)=>console.log(success,"this is the success statement"))
// .catch((failure)=>console.log(failure,"this is the failure"))
// .finally(()=>console.log("this is the default statement"))
// let str=["arpita","shalini","vilas",'barbie',"metange"]

// let array=[1,2,43,4,5,3,34,90]
// array.sort((c,b)=>{
//      return c>b?1:-1
// })
// console.log(array);
// array.reverse()
// console.log(array);

// console.log((74000+40000)/2);



// class Employee{
//       constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
//           this.emp_id=emp_id;
//           this.emp_name=emp_name;
//           this.emp_dept=emp_dept;
//           this.emp_salary=emp_salary;
//           this.emp_company=emp_company;
//       }
//   }
//   const emp_anil= new Employee(22,"Anil","IT",50000,'TCS')
//   const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro")
//   const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS")
//   const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy")
//   const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro")
//   const emp_viny= new Employee(88,"Vinayaka","IT", 75000, "TCS")
//   const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy")
//   delete emp_anil.emp_id
//   console.table(emp_anil);
  
//   let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
//   console.log("///////////////////////////////////sorting//////////////////////////////////////////");


// // 

//   console.log("***************************All employees from the 'TCS'****************************");
//   let empTcs=array_employees.filter((element)=> {
//       if (element.emp_company=="TCS") {
//           console.log(`Company Name: ${element.emp_company}, Employee Name: ${element.emp_name}`);  
//       } 
//   })
  
  
//   console.log("*************************Average salary of employee from company Wipro****************************");
//   let avg;
//   let avrg=array_employees.filter(element=> {
//       return element.emp_company=="Wipro" ||element.emp_company=="TCS"
//   }).reduce((element,value,index)=>{
//       element=  element.emp_salary+value.emp_salary
//       if (index==array_employees.length-1) {
//         avg=element.emp_salary/array_employees.length
//       }
//       return element
//   })
//   console.log(avg);
// //   let avrage;
// // //   avrage=avrg.length/avrg.emp_salary.length
// //   console.log(avrage);


// console.log("*************filter wipro and tcs");
// let gg=[1,2,3,[4,5],[34,[53]],32,45]
// let sum
//   let g=gg.map(element=>{
//    return element
//     } )
//     let rg=g.flat(2)
//     console.log(rg);
//     // let c=g.reduce((element,value,array)=>{
//     //     if (typeOf element!=NaN || value!=isNaN) {
//     //      return element.emp_salary+value.emp_salary   
//     //     }
//     // })
//     // console.log(c);
//     // let aver=c/g.length
//     // console.log(aver);



// // let r=g.reduce((element1,value1)=>{
// //     console.log( element1, value1);
   

// // })
// // let average1
// // average1=r/g.length
// // console.log(average1);

// console.log("**********k");
//   let ac=[20,11,49,25,37,49,9,90,60,2,19];
//   let d=[...new Set(ac)]
//   console.log(d);
//   let m=ac.filter(element=>{
//       return element%5==0
//   }).reduce((n,n1)=>{
//         return n+n1
//   })
//   console.log(m);

//   const arrayOfNames = ["Elon", "Ratan", "Billgates","PT Usha", "Murmu"];
// arrayOfNames.sort()
// console.log(arrayOfNames);
// arrayOfNames.reverse()
// console.log(arrayOfNames);


// const array5 = [5, 6, 3, 44, 104, 302, 15];// 
// array5.sort()
// console.log(array5);
// array5.sort((a,b)=>{
//      return a>b?1:-1
// })
// console.log(array5);
// array5.reverse()
// console.log(array5);

// let at=[1,[3],4,5]
// console.log(at);
// let ap=at.flatMap(element =>{
//     return element
// })
// console.log(ap);



// 5*4*3*2*1

//   let f=1
// for (let index = 1; index <=5; index++) {
//   f=f*index

// }
// console.log(f);

// console.log("thus is the factorial")
// let pu=[]
// function prime(num,end) {
//   let count=0
//   for (let index = num; count<end; index++) {
//         let  istrue=true
//     for (let number = 2; number < index; number++) {
//       if (index%number==0) {
//         istrue=false
//          break
//       }
//     }
//    if (istrue) {
//     pu.push(index)
//     count++
//    }

//   }
//   console.log(pu);
// }
// prime(3,10)


//  function name(num) {
//   let z=0
//   let x=1
//   let store=[]
  
//   for (let index = 1; index <=num; index++) {
//     store.push(z)
//     let  sum3=z+x
//           z=x
//           x=sum3
//   }
//   console.log(store)
//  }
//  name(7)

//  function leap(yr) {
//   if (yr%100==0 && yr%400==0 || yr%100!=0 && yr%4==0) {
//     console.log(`${yr}  leap yr`);
//   }
//   else{
//     console.log(`${yr} not leap yr`);
//   }
//  }
// leap(2020)
// leap(1600)
// leap(2023)

// let e=100
// let r=200
// let t=300
// let temp=e
// e=r
// r=t
// t=temp

// console.log(e,r,t);


// (function(){
// console.log("this is the selfed invoked")
// })()

// let newmap=new Map()
// newmap.set("this is ht",12)
// newmap.set("strin",18)
// console.log(newmap);
// console.log(newmap.get("strin"));
// newmap.delete("strin")
// console.log(newmap);
// for(let ke of newmap.keys()){
//        let elment=newmap.get(ke)
//        console.log(ke,elment);
// }
// newmap.forEach((elemen,key)=>{
//   console.log(key,elemen);
// })

// let newSet=new Set()
// newSet.add("arpita")
// newSet.add(12)
// newSet.add(14)
// newSet.add("ankita")
// console.log(newSet);
// console.log(newSet.has(12));
// for(let key of newSet){
//   console.log(key);
// }

// // console.log("/*/*/*/*/*/*/*///*//////*/**/*/******//**/*/");
// // console.log("*************self invoking")
// (function(){
// console.log("this ");
// })()




// console.log("*************highet orerder")
// function outer(fun){
// fun()
//     return function(){
// console.log("this is the return function")
// }

// }

// function call(){
// console.log("this is the cll")
// }

// let r2=outer(call)
// r2()
// console.log("*************ccall back***********")
// function callbakc(n){
//        n()
// }
// function add(){
//   console.log("callback funtion")
// }
// callbakc(add)

// console.log("*************arrow funciont***********")
// let r1=()=>{
// console.log("arrow funciont")
// }
// r1()

// console.log("*************for each ***********")
// ar=[1,2,3,2,44]
// ar.forEach(element=>{
// console.log(element)
// })



// let mapmethod=ar.map(element=>{
//          return element+1
// })
// console.log(mapmethod)

// let filter1=ar.filter((n1)=>{
//           return n1%2==0
// })
// console.log(filter1)

// let reduse=ar.reduce((n,n1)=>{
//        return n+n1
// })

// console.log(reduse)

// function n(a,b,c=10){
//   console.log(a,b,c)
// }
// n(1,23)

// let newobject={
//   namew:"arpita",
//   id:12,
//   no:20
// }
// let {namew,id,no}=newobject
// console.log(namew,id,no);
// let arrray=[1,2,12]
// let [n1,n2,n3,m1=10]=arrray
// console.log(n1,n2,n3,m1);



// console.log("sir");


// let average
// const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
// let l=arrayNumbers.reduce((n1,n2,index)=>{
//          n1=n1+n2
//          if (index==arrayNumbers.length-1) {
//             average=n1/arrayNumbers.length
//          }
//          return n1
// })
let store=[]
let total
let a=0
let b=1
for (let index = 0; index <= 10; index++) {
  store.push(a)
  total=a+b
  a=b
  b=total

  
}
console.log(store);

let obj={
    name:"aepita",
     id:12,
     no:122,
     show:function(){
console.log(obj.name)
}
}
obj.show()

class Peron{

    constructor(name,id){
     this.name=name; 
      this.id=id;
      }
     show(){
console.log(this.name)
}
}

let obj2=new Peron("aarpita",12)
obj2.show()


function Non(name,id){
    this.name=name;
   this.id=id
  this.show=function(){
console.log(this.name)

}
}
let obj3=new Non("aprit",12)
obj3.show()



istrue=true



let a1=()=>{
  console.log("this is the arrow funcitton")
  }
  a1()
  const array = [2, 3, 4, 5, 9];
array.forEach(element=>{
console.log(element)
})




let obj1={
       name:"komal",
       id:12
}
let obj9={
       name1:"arpita",
       id1:13
}
let merged=Object.assign({},obj1,obj9)
console.log(merged);
let s={...obj1,...obj9}
console.log(s);
let array1=[1,7,4,5]
let ar=[1,2,4,5]
let a2=Object.assign([],array1,ar)
console.log(a2);
let r=[...ar,...array1]
console.log(r);







let f=1
for(let i=1;i<=5;i++){
  f=f*i
}
console.log(f)





// function fabSeries(fabTerm){
//   let first = 0;
//   let second = 1;
//   let next = 0;
//   for (let index = 1; index <= fabTerm; index++) {
//    console.log(first);   
//     next = first + second; 
//     first = second;
//     second = next;  
//   }
// }
// fabSeries(7);
// console.log(a);
// console.log(store1)


const student ={
  name: "Komal",
  id : 25,
  obj:{
    n:"kjdf"
  },
  show1: function(){
  console.log(student.obj.n)
  }}
  student.show1()

class Person{
  constructor(id){
    this.id=id
  }
  show(){
    console.log(`${this.id}`);
  }
}
let newpjbect=new Person(12)
let newpjbect2=new Person(13)
console.log(newpjbect);





function factorial(num) {
  let p=1
for (let index = 1; index <= num; index++) {
   p=p*index
  
}
 console.log(p);
}
factorial(7)

console.log(1+NaN);  
console.log(0/0);
console.log(+"dkj");

function fun(){
  console.log('this is he ufnl');
}
fun()
