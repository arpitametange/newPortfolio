-

let nearra=[1,2,3,4,3,4,2,3]
let unique=[]
nearra.forEach(elem=>{
    if (unique.includes(elem)===false) {
        unique.push(elem)
    }
})
console.log(unique);




var arr = [1, 2, 3, 4, 7, 7, 9];


//unique + vowels
let countt=0
let emput=[]
let strincout='TCS the Indian IT Giant Company'
for (let index = strincout.length-1; index >=0; index--) {
    const element = strincout.charAt(index)
if ((element=='a' || element=='e'|| element=='i' || element=='o' || element=='u' || element=='A') && (emput.includes(element)===false)) {
    emput.push(element)
    countt++
}
}
console.log(countt);
console.log(emput);


///event index vovels
// let countt=0
// let emput=[]
// let strincout='TCS the Indian IT Giant Company'
// for (let index = strincout.length-1; index >=0; index--) {
//     const element = strincout.charAt(index)
// if ((element=='a' || element=='e'|| element=='i' || element=='o' || element=='u' || element=='A') && (index%2==0)) {
//     emput.push(element)
//     countt++
// }
// }
// console.log(countt);
// console.log(emput);













// var dNo;
// let arr=[1,2,3,4,5,4,3,9]
// for (var i = 0; i < arr.length; i++)
//  {
//   for (var j = i + 1; j < arr.length; j++) 
//  {
//     if (arr[i]==arr[j])
//  {
//       dNo=arr[i];

//   }
//   }
//   }
// console.log(dNo);

