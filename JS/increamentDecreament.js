console.log("Incremenet operator");
let a=10
 let b=a++ //increment operator first assign to a then assign to b 
 //here it update the a and it gives a's intial value to b
 console.log(`value of a ${a}`);  //11
 console.log(`value of b ${b}`);//10
 let c=b++
 console.log(`value of b ${b}`); //11  updated value
 console.log(`value of c ${c}`);// 10  it takes b intial vlue (before updated value)
 let c1=b++
 console.log(`value of b ${b}`); //12
 console.log(`value of c ${c1}`);// 11
 let r=b++
 console.log(`value of b ${b}`);  //13
 console.log(`value of r ${r}`);//12



 let t=1
 let tr=++t //asign firstly to everyone
 console.log(`value of t ${t}`);  //2
 console.log(`value of tr ${tr}`);  //2
 let w=++tr
 console.log(`value of tr ${tr}`);  //3
 console.log(`value of w ${w}`);//3

console.log('Decreament operator');
let k=13
let l=k--
console.log(`vlaue of k ${k}`); //12
console.log(`vlaue of l ${l}`);//13
let g=l--
console.log(`value of g ${g}`);//13
console.log(`value of k ${l}`);//12

 let a1=11
 let b1=--a1
 console.log(`value of a ${a1}`);  //10
 console.log(`value of b ${b1}`);//10
 c=--b1
 console.log(`value of b ${b1}`); //9
 console.log(`value of c ${c}`);// 9


//interview que 
let x=10  
let y=x++     
let z=--x
console.log(6>5>4);