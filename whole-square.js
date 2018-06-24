// an integer p is whole square if it is a square of some integer Q: ie if P= Q2

//given 2 integers, a and b (range, inclusive), returns number of whole squares within the interval.

// example: given a=4 and b=17, function should return 3 because there are 3 squares of integers in the interval (4-17), 4 = 2s2, 9 = 3s2 and 16 = 4s2

// function squares(a,b){
// 	count = 0;
// 	for(var i = a; i<=b; i++){
// 		if(Math.sqrt(i) % 1 === 0){
// 		//console.log(Math.sqrt(i));
// 			count ++;
// 		}
// 	}
// 	return count;
// }

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    countSquare =0;

    //Loop the range
    for(let i=A; i < =B; i++){

        if(Math.sqrt(i) %1 === 0){

            countSquare++;
        }

    }

    return countSquare;
    
}

console.log(solution(4,17))
