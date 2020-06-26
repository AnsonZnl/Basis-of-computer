const {checkArray, swap} = require('./util')
let arr = [5, 4, 3, 2, 1]

 // 冒泡排序 复杂度是O(n^2)
 function bubbleSort(arr) {
     checkArray()
     var length = arr.length;
     for (var i = 0; i < length; i++) {
         for (var j = 0; j < length - 1; j++) {
             if (arr[j] > arr[j + 1]) {
                 swap(arr, j, j + 1)
             }
         }
     }
 }
 bubbleSort(arr)
 console.log(arr)
 //[1,2,3,4,5]

 // 优化后
 //  function bubbleSort(arr) {
 //     // 冒泡排序
 //     var length = arr.length;
 //     for (var i = 0; i < length; i++) {
 //         for (var j = 0; j < length - 1 - i; j++) {
 // 如果内循环减去外循环中以跑过的论述，就可以避免内循环中所有不必要的比较了
 //             if (arr[j] > arr[j + 1]) {
 //                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
 //             }
 //         }
 //     }
 // }