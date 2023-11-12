// // console.log("****************This is the first step**************");
// // function stringHandsOn(){
//         console.log("    Hey you are doing good,keep it up   ");
//         console.log("****************This is the second step**************");


//         // var lengthstring="    Hey you are doing good,keep it up   "
//         // console.log("length of string is :",lengthstring.length);
//         // console.log("****************This is the third step**************");
//         // console.log('After removing leading and trailing extra spaces');
//         // var trimstr=lengthstring.trim ()
//         // console.log(trimstr);
//         // console.log("****************This is the fourth step**************");
//         // console.log("Length of the spaces removed :",lengthstring.length- trimstr.length);
        
//         // console.log("****************This is the fifth step**************");
//         // console.log("first and last character ",trimstr.charAt(0),trimstr.charAt(trimstr.length-1));
        
//         // console.log("****************This is the sixth step**************");
//         // var totalwords=trimstr.split(" ")
//         console.log("Total words in a string is:",totalwords.length);
        
//         console.log("****************This is the seventh step**************");
//         var indexOfGood=trimstr.indexOf("good");
//         console.log("This is the index of good:",indexOfGood);
        
//         console.log("****************This is the eigth step**************");
//         var sub=trimstr.substring(22);
//         console.log("using substring method: ",sub);
//         var slicestr=trimstr.slice(22);
//         console.log("using slice method: ",slicestr);
        
//         console.log("****************This is the ninth step**************");
//         var endswith=trimstr.endsWith("up");
//         console.log("string ends with up:", endswith);
        
//         console.log("****************This is the tenth step**************");
        
//         var startswith=trimstr.startsWith("Hey");
//         console.log("string starts with hey:", startswith);
        
        
        
// }
// stringHandsOn();



let a=100;
let b='arjdkfd';
console.log(b.endsWith('d'));



var str='arpita metnae'
var  t=0;
for (let index = str.length-1; index >=0; index--) {
    var r= str.indexOf("a")
    if (r==' ') {
        break;
    }
    t=t+1
   
}
console.log(t);



var fun=function(str){
    var count=0;
    for (let index = 0; index < str.length; index++) {
        var chr=str.charAt(index)
        if (chr=='a' || chr=='e' || chr=='i' || chr=='o' || chr=='u' || chr=='A' || chr=='E' || chr=='I' || chr=='O' || chr=='U' ) {
            count=count+1;            
        }
        
    }
    return count;
}
var store=fun("JavaScript is the language Of Internet");
console.log(`The vowels present in string "JavaScript is the language Of Internet" is : ${store}`);
var store1=fun("I am Angular Developer");
console.log(`The vowels present in string "I am Angular Developer" is : ${store1}`);
var store2=fun("Hard work and commitment is the key of success");
console.log(`The vowels present in string "Hard work and commitment is the key of success" is : ${store2}`);




function lastWordCharsCount(total) {
    var  countchr=0
     for (let index = total.length-1; index >=0; index--) {
         var chrtotal=total.charAt(index)
         countchr=countchr+1;
         if (chrtotal==" ") {
            
             break;
         } 
            
     }
     return countchr;
 }
 
 var totalchr=lastWordCharsCount("JavaScript is the language Of Internet");
 console.log(`Total characters available in last word of the string = "JavaScript is the language Of Internet" is : ${totalchr}`);
