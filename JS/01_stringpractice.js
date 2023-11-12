// var r="this and their"
// console.log(r.replace("this","that"));
// console.log(r.toUpperCase());
//  var soac="    arpita   metange  "
//  console.log(soac);
//  console.log(soac.trim());

//  function stringBasics(){
//     console.log(`My dream company is : google, tcs`);
//  }
//  stringBasics()

//   var urhobby='exploring'
//   var urhobby2='football';
//   console.log(`my hobies are ${urhobby} ${urhobby2}`);
//   var l1=urhobby.length;
//   var l2=urhobby2.length;
//   console.log(l1+l2);

//   var num1=10;
//   var num2='10'
//   var r=num1===num2;
//   console.log(r);
//   var s=`thsi dev is the dev`
//   console.log(s.charCodeAt(0));
//   console.log(s.length);



function sumofchr(myHobby1,myHobby2,myHobby3){
    console.log(myHobby1,myHobby2,myHobby3);

    var sum=myHobby1.length+myHobby2.length+myHobby3.length;
    return sum;
}
var total=sumofchr('reading',"writing",'playing');
console.log("Total length of three variable :" ,total);

// var name1="arpita METANGE";
// console.log(name1.toLowerCase()); 
// console.log(name1.toUpperCase()); 

// console.log(typeof name1);

// function greaterNumber(num1, num2){
//     var result = num1>num2 ? num1 : num2;
//      console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
//  }
//  greaterNumber(10, -10);
//  greaterNumber(800, 899);

//  var number="12"
//  var n2=+number;
//  console.log(typeof(n2));
 
//  var num=10;
//  console.log(typeof (num));
function fun(){
    console.log('this is the function')
  }
  // fun();
  
  // function fun1(a){
  //    console.log(a)
  // }
  // fun1(2);
  
  // function fun3(){
  //  var re=1+2;
  //   return re;
  // }
  // var r=fun3()
  // console.log(r)
  
//   function fun4(a,b){
//      var r=a+b;
//      return r
//   }
//   var result=fun4(2,3);
//   console.log(result)
  
// var str='mettnage  ';
// console.log(str.charAt(3));
// console.log(str.indexOf("a"));
// console.log(str.trim());
// console.log(str.lastIndexOf('a'));
// console.log(str.replace('ar' ,'ap'));
// console.log(str.toUpperCase());
// console.log(str.length)
// console.log(str.split(''));
// console.log(str.split(','));
// console.log(str.split(' '));
// console.log(str.slice(0,3))
// console.log(str.substring(3));
// console.log(`this shf ? :vs`);
// var r=exp1? exp2:exp3;


var a="3"-"8";
console.log(a);

// var num=10-'this';
// console.log(num);

// var g=23
// var f=g.toString()
// console.log(typeof f);

function voteEligiility(age){

  if (age<0 || age==undefined || age==null || age==0 || age>100) {
      console.log(`Invalid age ${age}, plz provide a valid age`);
  }
  else{
      
  if (age>18) {
      console.log(`Congratualations your age is ${age} and  you are eligible for voting`);
  }
  else{
      console.log(`your age is ${age} you are not eligible for voting`);
  }
 
  }


}

voteEligiility(45);

voteEligiility(17);

voteEligiility(8);

voteEligiility(20);

voteEligiility(-10);

voteEligiility(200);

voteEligiility(0);

voteEligiility(undefined);

voteEligiility(null);


console.log(`------------------------------------------Grade System --------------------------------------`);


// function gradeCalculation(marks){

//   if(marks>=90 && marks<=100){
//       console.log(`Funtastic marks : ${marks}, your grade is A+.`);
//   }
//   else if(marks>=75 && marks <89){
//       console.log(`Excellent marks : ${marks}, your grade is A.`);

//   }
//   else if(marks>=50 && marks <74){
//       console.log(`Good marks : ${marks}, your grade is B.`);
//   }
//   else if(marks>=35 && marks <=49){
//       console.log(`marks is : ${marks}, your grade is C, Need to improvment.`);

//   }
//   else if(marks>=1 && marks <34){
//       console.log(` marks : ${marks}, your grade is fail.`);

//   }
//   else if(marks<=0 || marks >= 101 || marks==null || marks==undefined || marks==NaN || (marks != typeof number) || (marks== typeof String)){
//       console.log(`Invalid marks : ${marks}, please provide a valid number.`);

//   }
// }

// gradeCalculation(90);
// gradeCalculation(98);
// gradeCalculation(80);
// gradeCalculation(0);
// gradeCalculation(150);
// gradeCalculation(-7);
// gradeCalculation(35);
// gradeCalculation(29);
// gradeCalculation(64);
// gradeCalculation(49);
// gradeCalculation("91");
// gradeCalculation("Eighty");
// gradeCalculation(NaN);
// gradeCalculation(null);



// var a="two";
// {
// var a='this'
// console.log(`${a} this s the this`)
// }
// console.log(`${a} it is stwoo`)
//n%i==0 
//2%1==0
// for (let index = 100; index<=10 ; index=index-10) {
//     console.log(index);
    
// }
//  prompt=input('enter the no');
// for (let index = 2; index<=n/2 ; index++) {
//     if ((n%1)==0) {
//         console.log('prime');
//     }
// }


// // for (let i = 3; i<=30 ; i=i+3) {
// //     console.log(`thhis si sthe jkjfdkf ${i}`);
    
// // }



// var a="arpita metangea"
// console.log(a.length-1);


// var reverseString = function(str){
//     var reverse = ""; // wo
//     for (let index = str.length-1 ; index >= 0; index--) { // 9 
//        var charAt1 = str.charAt(index);
//        reverse = reverse + charAt1; // "w"+"o" ==> "wo"
//     }
//     return reverse;
// }
// var result = reverseString("Do it anyhow"); 
// console.log(`Reverse String is: ${result}`);


// var stringnew=function(s){
// var store=0;
// for (let index = 0; index < s.length; index++) {
//     var st=s.charAt(index)
//     if (st=='a'|| st=='e' || st=='i'|| st=='o'|| st=='u') {
//         store=store+1;  
    
//     }
// return store;
    
// }
// var n=stringnew('arpitaeai');
// console.log(`this is the no ${n}`);
// // return store;
// }
// // var n=stringnew('arpitametangeA');
// // console.log(n);


// // console.log('vovels');

// // var ger="";
// // var l=function(){
// //     for (let index = 0; index < l.length; index++) {

// //    if (split('aeiou')) {
// //     var chr=l.charAt(index)
// //     ger=ger+1;
// //    }
// //    return ger
// // }
// // }
// // var j=ger


var str = "a am Angular  champ";
var count =0;
for (let index = 0; index < str.length; index++) 
{
    var char = str.charAt(index);
    if (char =='a'|| char=='e'|| char=='u' || char=='i' || char=='A') {
        count = count + 1;
    }
    
}
console.log("Total number of vowels is: ", count);








var fun=function (para) {
    var count=0;
    for (let index = 0; index < para.length; index++) {
        var str=para.charAt(index)
        if (str=='a' || str=='e' || str=='i') {
            count=count+1;
    
        }
    
    }
    return count; 
}
var call=fun('arpitae');
console.log(`bowels in arpitae ${call}`);









