let str = "This is Javascript code" ; 
  const arrStr = function(string){
  const wordsSplit = string.split(' ');
  return wordsSplit; 
}
let strWord = arrStr(str) ; 

strWord = strWord.map ( word =>  {
  let wordLength = word.length ; 
  let char = '' ; 

  for (var i = wordLength-1 ; i >= 0 ; i--) {
    // char += word[i] ; 
    const element = word[i];
    char = char + element
  }
  return char ; 
}
)

console.log(strWord.join(' '));



// let str="this is the js string"
let split=str.split(' ')

let newElement=split.map((word)=>{
 let store=''
 for (let index = word.length-1; index >=0; index--) {
         let element=word[index]
         store=store+element
 }
 return store

}

)
console.log(newElement.join(" "));

///short method
// let str='this is the string'
let reverse=str.split("").reverse().join("")
let r=reverse.split(" ").reverse().join(' ')
console.log(r);