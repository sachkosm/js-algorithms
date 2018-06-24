var o = {
  one: 1,
  two: 2,
  tree: {
    in1: "in2",
    in2: { t:2, y:4 }
  },
  func: function() {
    return tree
  }
}


var traversObj = function(o) {

  if(!o) {return}

  for(var prop in o) {
    if(o.hasOwnProperty(prop)) {
      if(typeof o[prop] === 'object') {
        console.log(prop)
        traversObj(o[prop])
      } else {
        console.log(prop + ':' + o[prop])
      }
    }
  }
  return ''
}

console.log(traversObj(o))
