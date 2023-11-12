


let ar=["jdk","dkjf","oew"]
console.log(ar.sort());
let t=ar.sort((a,b)=>{
 return a>b?1:-1
})
console.log(t);
console.log(ar.sort());
let r1=ar.reduce((elemnt,value)=>{
    return elemnt*value
})
console.log(r1);

let object={
    ne:'djf',
    id:12
}

 
let set=new Set()
set.add("new")
set.delete("new")
console.log(set.size);

let map=new Map()
map.set("proi",23)
map.set("ndk",23)
map.set("we",13)
map.forEach((element,value)=>{
    console.log(element,value);
})
console.log(map);
function prime(value) {
    for (let index = 2; index < value; index++) {
        // isprime=true
        if (value%index==0) {
            // isprime=false
            return "not prime"
        }
        
    }
        return "prime"
        

}
let r=prime(12)
console.log(r);