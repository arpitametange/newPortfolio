function addition(str){
    let temp='';
     let addition=0;
     let strFormat = /^[a-z\s]+$/;
     for(let i=0 ;i< str.length;i++)
       {
       if (!strFormat.test(str[i]))
         {
            for(let j=i;j< str.length;j++)
             {
               if(!strFormat.test(str[i]))
                  {
                    temp= temp.concat(''+str[i]);       
                    // console.log(temp);
                     i++;
                  }
                else
                  {      
                    addition = addition + parseInt(temp);
                    //console.log('*',addition);
                    temp='';
                    break;
                  }
            }
         }
     }
     addition = addition + parseInt(temp);
    return addition;
   }
   
   let name ='name1string1arju4ds3';
   let result =addition(name);
   console.log('addtion string result',result);
   