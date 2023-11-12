//////traverrse using 'for' in string
let str="this is the string"
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    console.log(element);
    
}
//////traverrse using 'for' in array

let array=[23,34,55,4]
for(let index=0;index<array.length; index++){
    const element=array[index]
    console.log(element);
}

for(let i of array){
    console.log(i);
}

//////traverrse using 'for in' into object

let obj={
    name:"arpita",
    schoolnale:"smtrt"
}

for(let i in obj){
    const el=obj[i]
    console.log(i,el);
}


///"for in" in array
const f=['apple',"grapes",'pineapple']
f[1]="anin"
f.push("elemnt")
for(let i in f){
    console.log(f[i]);
}

