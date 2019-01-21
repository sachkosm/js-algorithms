//Split to convert to an array and sort
//Compare charachters that are next to each other
const allUniqueChars = (str) => {
    const charsArr = str.split('').sort()

    for (let i = 1; i < charsArr.length; i++) {
        if (charsArr[i] === charsArr[i - 1]){
            return false
        }
    }

    return true;
}




//Compare charachter searching from the back to front
const allUniqueChars = (str) => {

  for(let i =0; i< str.length; i++){
      if(str.lastIndexOf(str[i]) !== i){ //if found the same charachet at diferent position then has duplicate
        return false
      }
  }
  return true
}

let str = 'astyu'
console.log(allUniqueChars(str))
let str2 = 'astytu'
console.log(allUniqueChars(str2))




//Check if all characters in a strings are unique
var allUniqueChars = function(string) {

  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

console.log(allUniqueChars('astyu')) //true
console.log(allUniqueChars('astytu')) //false

//==================

function allUniqueChars2(s) {
  var ch = {}
  for(let i = 0; i < s.length; i++) {
    //console.log(s[i])
    if(ch[s[i]]) {
      return false;
    } else {
      ch[s[i]] = 1;
    }
  }
    return true; // if no match, return true
}

console.log(allUniqueChars2('astyu')) //true
console.log(allUniqueChars2('astytu')) //false
