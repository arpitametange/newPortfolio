console.log("***********************////practice//////**************************");
str=[12,34,23,1]
function sort(arg) {
    arg.sort((a,b)=>{
     return  a>b?1:-1
    }
)}
sort(str)