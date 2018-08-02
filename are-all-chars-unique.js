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
