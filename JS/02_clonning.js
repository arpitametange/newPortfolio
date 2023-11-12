var str="string"
let clonestr=str  //it make deep copy of it 
clonestr="cloneone" //means when we change in clone varible their is no effect on original
console.log(str);
console.log(clonestr);//it only change one variable...
//in primitive type varible automatically does the deep clonning,it create two separate copy 


//in non-primitive type varible automatically does the shallow clonning,it create two different reference variable and both pointing towards the same object

let obj={
    name1:"apitta",
    id:23
}

//SHALLOW CLONE/COPY
let show=obj //this is the object thats why it create the shallow copy automatically and if we change one other one also change because both reference variable point towards one object
obj.new="new"///this property will added to both the reference variable
console.log(show);
console.log(obj);

////DEEP CLONE/COPY
let spread={...obj} ///it will create the deep copy of obj in== spread :so that if we change one obj it will not affect other one
spread.am="aait"//its only added to spread
console.log(spread);
console.log(obj);

///IN NESTED OBJECT WE USE THE JSON 
//Because spread operator will not create the deep copy of nested object
//it will share the same nested object to both reference variable
let nestedobj={
    name:"anikan",
    no:343,
    ne:{
        hi:'greet',
        number:343
    }
    }
let spredcopy={...nestedobj}
nestedobj.ne.hi="hellow"
console.table(spredcopy);/////value is upated to hellow in both the referece variable
console.table(nestedobj);

///JSON OPERATOR FOR NESTED OBJECT
console.log("JSON OPERATOR FOR NESTED OBJEC")
let j=JSON.parse(JSON.stringify(nestedobj)) 
j.ne.hi="how are you"
console.table(j);
console.table(nestedobj);

let arr=["arpita","aniaka"]
console.log(arr);
console.log([...arr]);
let i=[1,3,4,4]
let t=i.join("&")
console.log(typeof(t))
t.length=9
console.log(t[9]);

const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruits.splice(4,0,"new")
console.log(arraySeasonalFruits);



  
 
