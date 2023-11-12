////map 
let mapq=new Map()
mapq.set("One",1)   //adding the element in map , we use set
mapq.set("two",2)
mapq.set("three",1)//when value is same still it crate new key and value
mapq.set("two",3)//when key is same to existing one and value is different then it takes new/updated value
console.log(mapq);
//delete 
mapq.delete("one")
console.log(mapq);
console.log("size of map");
console.log(mapq.size);

//for accessing the values in map
console.log(mapq.get("two")); 
console.log(mapq.get("two")); 
////to get keys and values
let key=mapq.keys()
let value=mapq.values()
console.log(key,value); //keys and values
for (const iterator of key) {
    const ele=mapq.get(iterator)
    console.log(`${iterator}, ${ele}`);
    
}
console.log(mapq.has("One"));///it check whether it present in map or not

//set==does not allow duplicate
let set=new Set()
set.add("arpita")//for adding the element to set = we use the add
set.add("metange")
set.add("new value")
set.add("old value")


console.log(set);
//delete
set.delete("arpita")
console.log(set);

let v=set.values() //for getting the value
console.log(v);

///size of set
console.log(set.size);
//for iterating the set
for (const iterator of set ) {
    console.log(iterator);
}

//When we want to add the array in set means when we want array with no duplicate value
let array=[2,3,4,4]
let newseet=[...new Set(array)]
console.log(newseet);

//for deleting all the elements
set.clear()
console.log(set);
