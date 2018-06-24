// In base -2. integers are represented by siquesce of bits in the follwing way.
// Bits are ordered from the least to the most significant.
// SequensceB of N bits represents the number
// sum{ B[i]*(-2) --on power I )  fro = 0..N-1 }
// The empty sequence represents 0

// return the shortest sequence of bits representing X +1
// [1,0,1] ( X = 5) return [...]

function int_of_base_neg2(a) {
  var count = a.length;
  var result = 0;
  for(let i = 0; i < count; i++) {
      console.log(Math.pow(-2, i))
    result += (a[i]+1) * Math.pow(-2, i);
    console.log(result)
  }

  return result;
}

function base_neg2_of_int(n) {
  var result = [];
  while(n !== 0) {
    var remainder = parseInt(n % -2);
    var n = parseInt(n / -2);

    if(remainder < 0) {
      remainder += 2;
      n += 1;
    }

    result.push(remainder)
  }

  return result;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  var int = int_of_base_neg2(A);
  var neg_int = -int;
  var result = base_neg2_of_int(int);

  return result;

}
var A = [1, 0, 1]
var r = solution(A)
console.log(r)
