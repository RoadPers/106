'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(function(x) {
      let entry = objectB.value.includes(x.key);
      if(entry){
          x.count--;
      }
      return x;
  });
}
