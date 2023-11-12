let j=[{namew:'a',starus:'f'},
{namew:'b',starus:'p'},
{namew:'c',starus:'p'},
{namew:'d',starus:'f'}]
let filter=j.filter(res=> res.starus==='p').map(res=>res.namew)
console.log(filter);