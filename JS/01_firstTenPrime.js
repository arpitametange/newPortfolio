let array=[]
function name(arg,arg1) {
  let count1=0;
for (let number=arg; count1<arg1; number++){
let isprime=true;
for (let index = 2; index <number; index++) {
    if (number%index==0) {
        isprime=false;
        break;
    }  
}
if (isprime) {
    array.push(number)
    count1=count1+1;
}
}
console.log(array);
}
name(2,10)

//is check no from 2 to 10 
function newwfunction(firstno,secondno) {
    let add=[]
    let count=0
    for (let index = firstno; index < secondno; index++) {
        let is=true
        for (let i = 2; i < index; i++) {
        if (index%i==0) {
            is=false;
            break;
        }
        }
        if (is) {
            add.push(index)
            count=count+1
        }
    }
    console.log(add);
}

newwfunction(2,10)
console.log("*******************");


function fibanocci(num) {
    let add=[]
    let firstno=0
    let secondno=1
    add.push(firstno)
    add.push(secondno)
    for (let index = 0; index < num; index++) {
        let sum=firstno+secondno
        add.push(sum)
        firstno=secondno
        secondno=sum  
    }
    console.log(add);   
       
}
fibanocci(7)

////for checking one number
function prime(n) {
    for (let index = 2; index < n; index++) {
        if (n%index==0) {
            return "not prime"
        }
    }
    return "prime"
}
let result=prime(12)
console.log(result);



