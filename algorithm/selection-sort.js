const {
    checkArray,
    swap
} = require('./util')
let arr = [5, 4, 3, 2, 1]

// 选择排序
function selection(arr) {
    checkArray()
    let len = arr.length
    for (var i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        swap(arr, i, minIndex)
    }
    return arr;
}