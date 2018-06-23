//String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring
//of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
//call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").


//COmbine the second string to itslef and then check if the first string is a substring
var stringRotation = function(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  return (string2 + string2).includes(string1); // one call of isSubString
};

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
