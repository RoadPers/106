'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(item => {
    for(let b of collectionB){
      return b.includes(item);
    }
  });
}
