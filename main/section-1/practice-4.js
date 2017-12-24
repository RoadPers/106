'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(object => objectB.value.includes(object.key)).map(object => object.key);
}
