//The async and await keywords are also introduced in ES6 and provide a more readable and synchronous-like way to write asynchronous code. When a function is declared with the async keyword, it always returns a promise. Inside an async function, you can use the await keyword to pause the execution of the function until a promise is resolved or rejected. This allows you to write asynchronous code in a more sequential and readable manner, without the need for explicit chaining of .then() and .catch() methods.



async function getdata(){
    let promise=new Promise((resolve,reject)=>{
         setTimeout(() => {
              resolve('this is the resolve')

         }, 2000);
    })
    let s=await promise
    console.log(s);
}

getdata()


//generator
function * generator(){
    let i=0
    yield 1
    yield 2
}
let gen=generator()
console.log(gen.next());   //value 1 done false
console.log(gen.next()); //value 1 done false
console.log(gen.next());  // /value undefined done true