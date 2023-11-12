////object with object literals
let obj={
    name:"arpoita",
    last:"metange",
    show:function () {
        console.log(obj.name);
    }
}
obj.show()


///object with class

class Person{
     constructor(namee,id,no){
        this.namee=namee
        this.id=id
        this.no=no

     }
     show(){
        console.log(`${this.namee}`);
     }
}
let k=new Person("arpita",23,2343)
// console.log(k);
k.show()

function Peqrson(name,id) {
    this.name=name
    this.id=id
    this.show=function(){
        console.log(`${this.name} ${this.id}`);
    }
}
let ob=new Peqrson("apira",3)
ob.show()




console.log("******************");

let ne={
name:"arpita",
obj:{
    no:23
},
show1:function(){
console.log(this.obj.no);
}
}
ne.show1()

//************************************************ */
class Neww{
    constructor(no,id){
        this.no=no
        this.id
    }
    show(){
        console.log(`${this.no}`);
    }
}
let v=new Neww(12,343)
v.show()
//**************************************************************** */

function N(name,id){
this.name=name
this.id=id
this.showe=function(){
    console.log(`${this.name}`);
}
}
let j=new N("arprit",34)
j.showe()

let no=null

let t=+no
console.log(t);