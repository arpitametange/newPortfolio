function amstrong(number){
    const digit=number.toString().split('')
    const order=digit.length
    let sum=digit.reduce((acc,digits) =>
      acc+Math.pow(parseInt(digits),order),0);
  if (sum === number) {
     console.log(number,'amstrong number');
   }
   else{
   console.log(number,'not amstrong number');
   }
   }
   amstrong(9474)