//Check for Prime
function isPrime(n){
  let d = 2
  while(n > d){
    if(n % d == 0) {
      return false
    }else{
      d++
    }
  }
  return true
}
console.log(isPrime(137))
console.log(isPrime(138))
