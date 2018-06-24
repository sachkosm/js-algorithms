var o = {
  one: 1,
  two: 2,
  tree: {
    in1: "str",
    in2: {
      sec: 345
    },
    in3: {
      sec: {
        to: 555,
        ht: 222
      }
    }
  },
  func: function() {
    return tree
  }
}

const loopNestedObj = (obj) => {
  Object.entries(obj).forEach(([key, val]) => {
    if(val && typeof val === 'object') {
      console.log(key)
      loopNestedObj(val); // recurse.
    }
    else {
      console.log(key, val); // or do something with key and val.
    }
  });
  return ''
};

console.log(loopNestedObj(o))
