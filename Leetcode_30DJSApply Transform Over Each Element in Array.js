/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [] //to store the new array
    for(let i = 0; i<arr.length; i++) //iterating throught array
    {
        result.push(fn(arr[i], i)) //transforming the array elements
    }
    return result; //returning result
};
