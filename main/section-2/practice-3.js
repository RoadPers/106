'use strict';

module.exports = function summarySameElements(collection) {
    var expandedArray = expand(collection)
    return summarize(expandedArray);
}

function summarize(arr) {
    return arr.reduce(function (result, char) {
        let entry = result.find( e => e.name == char )
        if(entry) {
            entry.summary++
        }else {
            result.push({name: char, summary: 1})
        }
        return result
    }, [])
}

function expand(arr) {
    return arr.reduce(function (result, str) {
        if(str.length == 1) {
            result.push(str);
        }else {
            let {name, summary} = split(str);
            for (let i = 0; i < summary; i++) {
                result.push(name);
            }
        }
        return result;
    }, [])
}

function split(str) {
    let re = /-|:|\[|\]/
    let arr = str.split(re)
    return {name: arr[0], summary: parseInt(arr[1], 10)}
}