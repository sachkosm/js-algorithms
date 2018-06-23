//Prime Factors
function primeFactors(n){
  let d = 2
  let factors =[]
  while(n > 2){
    if(n % d == 0) {
      factors.push(d)
      n = n /d
    }else{
      d++
    }
  }
  return factors
}
console.log(primeFactors(137))
console.log(primeFactors(138))
