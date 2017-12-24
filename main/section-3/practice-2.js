'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(function(x) {
      let entry = objectB.value.includes(x.key);
      if(entry){
          x.count = threePlusOne(x.count)
      }
      return x;
  });;
}

function threePlusOne(x) {
    let q = parseInt(x / 3);
    return x - q;
}
