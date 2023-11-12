
  
function name(num) {
  switch(num){
    case 1:
      console.log("one statement true");
     
     case 2 :
      console.log("seocnd statemn ");
      
      
    }
}
name(1)

function fa(params) {
  let f=1
  for (let index = params; index >=1; index--) {  //5*4*3*2
    f=f*index
    
  }
  console.log(f);
}
fa(6)
let strf="arpita mentange apnir ladnfkl"
let count=0;
let f=1
if ( last=strf.split(" ")) {
  for (let index =last.length-1; index >=0; index--) {
    count=count+1
    f=f*count
  }
  console.log(f);

}

let s=strf.split(' ')
console.log(s.length);
let f1=1
let n=6
for (let index = 1; index <= n; index++) {
f1=f1*index
  
}
console.log(f1);

function name1(num) {
  for (let index = 2; index < num; index++) {
    if (num % index==0) {
    return `15 is not a prime number`
    
  }    
  }
  return `${num}  prime no`;
  }

name1(15)
var r=name1(15)
console.log(r);