/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = []; // ith ek empty array kelay
    for(let i = 0; i<arr.length; i++) //full array through iterate krun jr if chi condition true asel tr mg filteredArr madhe elements add kele
    {
        if(fn(arr[i], i))
        {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr //ani ithe filtered array return kela
};
