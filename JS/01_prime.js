// var n='12';
// num=+n;
// console.log(num);
// console.log(typeof (num));

var j=12;
var h=j.toString();
console.log(typeof j);
console.log( typeof h);

// console.log('prime no');
//divisible by 1 and itself

function prime (num) {
    // if (num<2) {
    //     return 'not'
    // }
    for (let index = 2; index < num; index++) {
        if (num%index==0 ) {
        return 'not prime'
    
           
        }       

    }
    return 'prime'
}
var p=prime(15);
console.log(p);

