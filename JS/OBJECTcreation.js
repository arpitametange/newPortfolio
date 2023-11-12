console.log("NORMAL OBJECT == OBJECT CREATION WITH THE HELP OF OBJECT LITERALS");

const obj1={
    name1:"arpita",
    class:12,
    obj:{
        n:"jdfkd",
        k:"kdkjf"
    }
}
console.log(obj1);
///when u want to access the obj within object we use 'this' this.objectname.property
const kew={
    name:"ankita",
h:{
    namw:"kamkels"
}
,
show:function () {
    console.log(`this is the funct ${obj1.name}`);
},
d:function () {
    console.log(`${this.h.namw}`);
}
}
kew.show()
kew.d()





console.log("use  of 'class' for making the object");
class cls{
        constructor(name,id,lastname){
            this.name=name;
            this.id=id;
            this.lastname=lastname;
        }
    }
    const obj7=new cls("arpita",34,"metange");
    console.log(obj7);
    const obj2=new cls("amrita",34,"guptta")
    // console.log(obj2);
    
            
        
    
    class Totoal{
        constructor(){
            console.log("this is the constructor without argument");
        }
    }
    let totalobj=new Totoal()
    // console.log(totalobj);

console.log("*********************asisngment**************************");
let bank_sbi={
    no:23,
    registraiontionNo:234355,
    UanNo:"djfkdjf234"
}

let bank_location={
    street:"kotarifh",
    city:"ahamdabad",
    pin_code:44232
}


let cloned=Object.assign({},bank_sbi,bank_location)
console.table(cloned);

let objectliterals={
    home_loan_interest:9,
    personal_loan_interest:3,
    due_interest:39
}

let sbi_details=Object.assign(bank_location,bank_sbi,objectliterals)
console.table(sbi_details);


console.log('////////////////without function////////////////////');

for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(`${key} : ${element}`);
        
    }
}

console.log('//////////////with function////////////////');

function fun(p) {
    for (const key in p) {
        if (Object.hasOwnProperty.call(p,key)) {
            const element = p[key];
        console.log(` ${key} : ${element}`);
            
        }
    }
    
}
fun(sbi_details)


///////////////object creation with the help of the constructor function
function Object1(name1,classr,lastname){
       this.name1=name1;
       this.classr=classr;
       this.lastname=lastname;
       this.show=function () {
        console.log(`${this.classr}`);
       }
}
let ro=new Object1("arpita","viser","metagnee")
console.log(ro);
ro.show()
Object1.prototype.new="apirjtna"
console.log( ro.new);

///bult in object
const le=new Date()
console.log(le);
console.log(le.getDate());  //gives the date only
console.log(le.getDay());  //gives the day of week
console.log(le.getFullYear()); //gives the year
console.log(le.toDateString());  //we get day name month name date year
console.log(le.toTimeString()); //we get the time hr:min:sec
console.log(le.getHours()); // current hr
console.log(le.getMilliseconds());
console.log(le.getMinutes());
console.log(le.getSeconds());
console.log(le.getMilliseconds());
console.log(le.getMonth());







// let mapEmployees=new Map()
// mapEmployees.set(22,emp_anil)
// mapEmployees.set(33,emp_radha)
// mapEmployees.set(55,emp_rishi)
// mapEmployees.set(66,emp_sonali)
// mapEmployees.set(77,emp_monika)
// mapEmployees.set(88,emp_viny)
// mapEmployees.set(99,emp_mahi)

console.log("***********************Log Employees Id and details with help of for each************************");
// mapEmployees.forEach(function(element,value){
//     console.log(`${value} ===> Name: ${element}, Department: ${element.emp_dept}, Company: ${element.emp_company}, Salary: ${element.emp_salary}`);
// })


let obje={
    new:"apore",
     value:{
        value:undefined,
        new:Symbol(),
        ke:function () {
        console.log("fjd");
        }
}
}
let c=JSON.parse(JSON.stringify(obje))
console.log(obje.value);






