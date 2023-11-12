function palindrom(str) {
    let store=""
    for (let index = str.length-1; index >=0; index--) {
       store= store+str.charAt(index)    
    }
    let  lowercase1=store.toLowerCase()
    let  lowercase2=str.toLowerCase()

    if (lowercase1==lowercase2) {
      return "palindrom"
   }
   else{
     return "not palindrom"
   }
  }
  let r=palindrom("mam")
  console.log(r);


 
  
function palin(str){
  var len=str.length
  var mid=Math.floor(len/2)
  for (let index = 0; index < mid; index++) {
     if(str[index]!==str[len-1-index]){
      return 'not palindrom'
     }
    
  }
  return 'palindrom'
}
  
  let on=palin('mam')
  console.log(on);

//////chat GPT
function isPalindrome(inputStr) {
  // Remove spaces and convert the string to lowercase
  const cleanedStr = inputStr.replace(/\s/g, '').toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:

if (isPalindrome('mam')) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}  











