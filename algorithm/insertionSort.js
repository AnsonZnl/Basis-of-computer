const {
    swap,
    checkArray
} = require('./util')
let arr = [5, 3, 2, 1]
// 插入排序
function insertion(arr) {
    checkArray()
    let len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            swap(arr, j, j + 1)
        }
    }
    return arr;
}

let arrSort = insertion(arr)
console.log(arrSort)