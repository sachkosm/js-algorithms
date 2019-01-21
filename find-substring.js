//Array subset using Map() - find if an array is a subset of another array
const isArraySubset = (superset, subset) => {
    if (subset.length > superset.length) {
        return false;
    }

    const count = new Map();

    for (let i = 0; i < superset.length; i++) {
        const currentItem = superset[i]
        if (!count.has(currentItem)) {
            count.set(currentItem, 1)
        } else {
            count.set(currentItem, count.get(currentItem) + 1)
        }
    }

    for (let i = 0; i < subset.length; i++) {
        const currentItem = subset[i]

        if (!count.has(currentItem)) {
            return false
        }

        count.set(currentItem, count.get(currentItem) - 1)

        if (count.get(currentItem) === 0) {
            count.delete(currentItem);
        }

    }

    return true

}



// How can you match substring of a sting?

function subStringFinder(str, subStr){
  var idx = 0,
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;

   for(; i<len; i++){

      if(str[i] == subStr[j])
         j++;
      else
         j = 0;

      //check starting point or a match
      if(j == 0)
        idx = i;
      else if (j == subLen)
        return idx;
  }

  return -1;
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'))

console.log(subStringFinder('abbcdabbbbbck', 'bck'))
