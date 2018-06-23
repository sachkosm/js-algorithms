//A Fibonacci number is the sum of the two previous Fibonacci numbers.
var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));


//O(n)
function fibonacci(n){
  var fibo = [0, 1];
  if (n <= 2) return 1;
  for (var i = 2; i <=n; i++ ){
     fibo[i] = fibo[i-1]+fibo[i-2];
  }
 return fibo[n];
}
console.log(fibonacci(12))
