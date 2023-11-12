var a=100; //200
var b=200; //300
var c=300;  //100


var temp=a;
a=b;
b=c;
c=temp;

console.log(a,b,c)



console.table('thsi ')
var g=null;
var r;
console.log(typeof(g),typeof(r));

var r=9;
var e=10;
var t=89;
var temp1=r;
r=e;
e=t;
t=temp1
console.log(r,e,t);

//without using third variable
let w=10
let e=11
w=w+e
e=w-e
w=w-e
console.log(w,e);

//sum two array
let arrray=[1,0,2,3,4]
let array2=[3,5,6,7,8,13]
var sum=arrray.map((element,inddex)=>{
    return element+array2[inddex]
})
console.log(sum);