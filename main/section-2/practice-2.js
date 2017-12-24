'use strict';

module.exports = function countSameElements(collection) {
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