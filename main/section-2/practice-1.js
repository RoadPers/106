'use strict';

module.exports = function (collection) {
    return collection.reduce(function (result, char) {
        let entry = result.find( e => e.key == char )
        if(entry) {
            entry.count++
        }else {
            result.push({key: char, count: 1})
        }
        return result
    }, [])
}