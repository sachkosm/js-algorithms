//Palindrom check
var s = "abcdcdba"
if(s.split('').join() == s.split('').reverse().join()){
  console.log(true)
}else{
  console.log(false)
}


//Another way

var s='ASDaEGEDSA'
function checkPalindrom(s){
  return s.split('').join('') == s.split('').reverse().join('') ? true : false
}
console.log(checkPalindrom(s))
