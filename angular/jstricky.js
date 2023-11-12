console.log(1 +'2'+'2'); //122
console.log(1+ +'2'+'2'); //32 
console.log(1+ -'1'+'2');  //02
console.log(+'1'+'1'+'2'); //112
console.log('a'-'b'+'2'); //nan2
console.log('a'-'b'+2); //nan
console.log(+'1'+1); //2

console.log("******************************************************************************");
console.log('anss'); //
 let s = 1 + + '1' //2
console.log(s,'2');
// let a =+ 1  + '1'  //11
// console.log(a,'11');
let b = + '1' + 1  //2
console.log(b,'2');
let c = "2" + + "2"  //22
console.log(c,'22');
let r = + + "1" + 1  //2
console.log(r,'2');
let e =   +"2"+ + "2"  //4
console.log(e,'4');
console.log(1 +'2'+'2'); // output 122
console.log(1+ +'2'+'2');//32
console.log(1+ -'1'+'2');//02
console.log(+'1'+'1'+'2');//112
console.log('a'-'b'+'2','=== nan2');//N a-b 2 A =ab2
console.log('a'-'b'+2,'==>nan');//a-b+2
console.log(+'1'+1,'==>2');//2
console.log(1 + -"1",'==>0');//0
console.log(-'1'+'2','==>-12');//-12
console.log(-'1'+'2'+ 1,'==>-121' );//-121
console.log(-'1'+ + '2'+"1",'==>11');//11
console.log('next anss ==');
let x = 10;
let y = x++
let z = ++x
console.log(x,y,z);
console.log('----------------------------------------------------------------------------------------------------');
console.log(0.1 + 0.2 == 0.3);//false
console.log(3>2>1);//0
console.log(('b'+'a'+ + 'a' + 'a').toLowerCase());
let q = 10;
let t = q--
let  j= --q
console.log(q,t,j); 9 10 9
var aa= 10
var bb = aa--
var cc =++ aa
console.log(aa,bb,cc);
var aa= 10
var bb = aa++
var cc =aa++
console.log(aa,bb,cc);