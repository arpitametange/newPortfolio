function factorialOfNum(num) {
   
    if (num==null || num==0 || num==NaN ) {
        
        console.log(`${num} , please enter the valid number`);   
        return NaN    
        
    }  else {  
         var count=1;
          for (let index = num; index >=1; index--) {
     
           count=count*index;
           
       }
       return count;
       
      
}
}
let firstnum=factorialOfNum(7);
console.log(`The factorial of 5 is ${firstnum}`);
console.log("---------------------------------------------------------------------");