

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,'TCS')
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro")
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS")
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy")
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro")
const emp_viny= new Employee(88,"Vinayaka","IT", 75000, "TCS")
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy")


let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.log("*****************employee salary descending");
let empsalary=array_employees.sort((a,b)=>{
          let q=a.emp_salary
          let w=b.emp_salary
          if (q>w) {
            return 1
          }
          if (q<w) {
            return -1
          }
          return 0
})
empsalary.forEach(element => {
    console.log(element);
});





let empdpt=array_employees.sort((a,b)=>{
    let ad=a.emp_dept.toLowerCase()
    let bd=b.emp_dept.toLowerCase()
    if (ad>bd) {
        return 1
    }
    if (ad<bd) {
        return -1
    }
    return 0

})
console.log("/////////////departent");
empdpt.forEach(element=>console.log(element) )

let empid=array_employees.sort()
empid.forEach(element=>{
    console.log(element);
})
console.log("'''''''''''''''''''''''''''''''''");
let s=array_employees.sort((a,b)=>{
        let fa=a.emp_name.toLowerCase()
        let fb=b.emp_name.toLowerCase()
        if (fa>fb) {
            return 1
        }  
        if (fa<fb) {
           return -1
            
        }
           return 0
    
    })
s.forEach(element=>{
    console.log(element);
})

var arr =[1,2,2,4,5,4,7,8,7,3,6];
let highestno=arr[0]
for (let index = 1; index < arr.length; index++) {
    if (arr[i]>highestno) {
        highestno=arr[i]
    }
    
}
console.log(highestno);

///custom sorting logic

function arraySort(arr)
{ 
    for (let i = 0; i < arr.length; i++) {
     for (let j = i+1;j < arr.length; j++) {
         if(arr[i] > arr[j])
         {
            let temp=0;
            temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
         }
     }    
    }
    return arr;
}

let result = arraySort([100,11,22,44,5,1,9,99,90]);
console.log("sorted array", result);
console.log('second highest number: ', result[result.length-2])


/***** */


let array = [100,123,887,1,0,2,3,4];

for (let i = 0; i < array.length; i++) {
for (let j = i+1; j < array.length; j++) {
      if (array[i]>array[j]) {
          let temp=array[i]
          array[i]=array[j]
          array[j]=temp
      }
     
}
}
console.log(array);    