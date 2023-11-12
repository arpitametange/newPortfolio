function occurenes(str,letter){
let count=0
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    if (element==letter) {
        count+=1
    }
    
}
return count


}
let occ=occurenes('arpitaa','a')
console.log(occ);


let a='madam'
for (let index = 0; index < a.length; index++) {
    let count=0
    let char=a[index]
    for (let i = 0; i < a.length; i++) {
        if (char==a[i]) {
            count++
        }
        
    }
console.log(char+'='+count);    
}