let currying=(a)=>{
    return (b)=>{
         return (c)=>{
              return a+b+c
         }
    }
}
let t=currying(2)(2)(2)
console.log(t);


let name={
     f:'arpita',
     l:'metnage',
     show:function(){
          console.log(this.f,this.l);
     }
}

let name2={
     f:'ankita',
     l:'sharma'
}
name.show.call(name2)  //call method

///////////////////

let objee={
     a:'arpita',
     b:'ankita00'
}
let secondmethod=function(hometown,state){
console.log(this.a,this.b,hometown,state);
}
secondmethod.call(objee,'delhi','maharsthra')  //call method ==here we directly pass in comma separated


//the difference btw call and apply method is the how we pass the argument == it is in array

secondmethod.apply(objee,['mumbai','delhi'])


//bind method bind the object with function and returns us the copy of the object, also not called directly
let bindmethod=secondmethod.bind(objee,'parel','mahareashtra')
console.log(bindmethod); //gives the funciton
bindmethod()