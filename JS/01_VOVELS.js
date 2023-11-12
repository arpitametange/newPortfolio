var fun=function(str){
    var count=0;
    for (let index = 0; index < str.length; index++) {
        var chr=str.charAt(index)
        if (chr=str.includes['a','e'] ) {
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

    