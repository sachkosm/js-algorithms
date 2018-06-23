//Greatest Common Divisor
function greatestCommonDivisor(a, b) {
  let divisor = 2
  let greatestDivisor = 1;

  //if u pass a -ve number  - not finished
  if(a < 2 || b < 2) {
    return 1
  }
  while(a >= divisor && b >= divisor) {
    if(a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}
console.log(greatestCommonDivisor(14, 21))
console.log(greatestCommonDivisor(69, 169))



//recursive greatest common divisor
function greatestCommonDivisor(a, b){
   if(b == 0)
     return a;
   else
     return greatestCommonDivisor(b, a%b);
}
