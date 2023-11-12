function lastWordCharsCount(total) {
    var  countchr="";
     for (let index = total.length-1; index >=0; index--) {
         var chrtotal=total.charAt(index)
         if (chrtotal==" ") {
            
             break;
         } 
         countchr=countchr+chrtotal;      
     }
     return countchr;
 }
 
 var totalchr=lastWordCharsCount("JavaScript is the language Of Internet");
 console.log(`Total characters available in last word of the string = "JavaScript is the language Of Internet" is : ${totalchr}`);
 var totalchr1=lastWordCharsCount("I am Angular Developer");
 console.log(`Total characters available in last word of the string = "I am Angular Developer" is : ${totalchr1}`);
 var totalchr2=lastWordCharsCount("Hard work and commitment is the key of success");
 console.log(`Total characters available in last word of the string = "Hard work and commitment is the key of success" is : ${totalchr2}`);
 
//////////while loop

 let i=0
 while(i<=10){
    console.log(i);
    i++
 }

 let array2=[1,2,443,4,3,6]
 let index=0;
 while (index<array2.length) {
   console.log(array2[index]);  
   index++
 }

 let obj={
    name:"arpita",
    class:"12th"
}
let inn=[obj]         ////arrray
console.log("for in use");

for (const key in inn) {
        const element = inn[key];
        console.log(element);
}
console.log("adding in object == for object we always use for...in");
obj.lastname='deshmihc'
console.log(obj);
Object.freeze(obj)
obj.lastname='d'
console.log(obj);
let obj1={
     nam:"arnii"
}
obj1.nam="arpita232"
console.log(obj1);
Object.freeze(obj1)  
obj1.k="arpita23299"
console.log(obj1);

console.log("for of loop");
const array=[1,2,4,7]
for (const iterator of array) {
    console.log(iterator);
}

console.log("for in loop");

let object2={
    name:"apita",
    no:2345
}
for(let u in object2){
    if(Object.hasOwnProperty.call(object2,u)){
        const element=object2[u]
        console.log(u,element);
    }
}

console.log("use for...of loop");
let array1=[2,3,4,3,33,44,22]
for(let i of array1){
    console.log(i);
}





