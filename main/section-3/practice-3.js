'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let expandedArray = expand(collectionA);
    let list = summarize(expandedArray);
    return deal(list, objectB);
}
function deal(collectionA, objectB) {
    return collectionA.map(function (x) {
        let entry = objectB.value.includes(x.key);
        if (entry) {
            x.count = threePlusOne(x.count)
        }
        return x;
    });
}

function threePlusOne(x) {
    let q = parseInt(x / 3);
    return x - q;
}

function countSameElements(collection) {
    var expandedArray = expand(collection)
    return summarize(expandedArray);
}

function summarize(arr) {
    return arr.reduce(function (result, char) {
        let entry = result.find( e => e.key == char )
        if(entry) {
            entry.count++
        }else {
            result.push({key: char, count: 1})
        }
        return result
    }, [])
}

function expand(arr) {
    return arr.reduce(function (result, str) {
        if(str.length == 1) {
            result.push(str);
        }else {
            let {key, count} = split(str);
            for (let i = 0; i < count; i++) {
                result.push(key);
            }
        }
        return result;
    }, [])
}

function split(str) {
    let arr = str.split('-')
    return {key: arr[0], count: parseInt(arr[1], 10)}
}
