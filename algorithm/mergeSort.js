const {
    checkArray,
    swap
} = require('./util')
let arr = [5, 4, 3, 2, 1]
// 归并排序，复杂度O(nlog2)
//1. 《JavaScript描述数据结构和算法》
function mergeSortRec(array) {
    let length = array.length;
    if (length === 1) return array; // 终止条件
    let mid = Math.floor(length / 2); // 取中位数
    let left = array.slice(0, mid); // 取左段
    let right = array.slice(mid, length); // 取右段
    return merge(mergeSortRec(left), mergeSortRec(right)) // 继续分割为小数组
}

function merge(left, right) {
    let result = []; // 结果数组
    let il = 0; // left 的 index
    let ir = 0; // right 的 index
    while (il < left.length && ir < right.length) { // 如果如果left 数组的项是否比right数组项小
        left[il] < right[ir] ? result.push(left[il++]) : result.push(right[ir++])
    }
    while (il < left.length) { // 将所有的剩余项添加到归并数组中
        result.push(left[il++])
    }
    while (ir < right.length) { // 将所有的剩余项添加到归并数组中
        result.push(right[ir++])
    }
    return result;
}
let resultArr = mergeSortRec(arr)
console.log(resultArr)





// 2. 前端进阶之道
// function sort(array) {
//     checkArray(array)
//     mergeSort(array, 0, array.length - 1)
//     return array
//   }

// function mergeSort(array, left, right) {
//     // 左右索引相同说明已经只有一个数
//     if (left === right) return
//     // 等同于 `left + (right - left) / 2`
//     // 相比 `(left + right) / 2` 来说更加安全，不会溢出
//     // 使用位运算是因为位运算比四则运算快
//     let mid = parseInt(left + ((right - left) >> 1))
//     mergeSort(array, left, mid)
//     mergeSort(array, mid + 1, right)

//     let help = []
//     let i = 0
//     let p1 = left
//     let p2 = mid + 1
//     while (p1 <= mid && p2 <= right) {
//       help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
//     }
//     while (p1 <= mid) {
//       help[i++] = array[p1++]
//     }
//     while (p2 <= right) {
//       help[i++] = array[p2++]
//     }
//     for (let i = 0; i < help.length; i++) {
//       array[left + i] = help[i]
//     }
//     return array
//   }
// let arrSort = sort(arr)
// console.log(arrSort)