// 快速排序，复杂度：O(nlog2)
let arr = [5, 3, 2, 1];

quickSort(arr,0, arr.length-1)
console.log(arr)

function quickSort(array, left, right){
    let index;
    if(array.length > 1){
        index = partition(array, left, right);
        if(left < index - 1){
            quickSort(array, left, index-1)
        }
        if(index < right){
            quickSort(array, index, right)
        }
    }
}

function partition(array, left, right){
    let pivot = array[Math.floor((right + left) / 2)]
    let i = left;
    let j = right;
    while(i <= j){
        while(array[i] < pivot){ i++ }
        while(array[j] > pivot){ j-- }
        if(i <= j){
            swapQuickSort(array, i, j)
            i++;
            j--;
        }
    }
    return i;
}

function swapQuickSort(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2]
    array[index2] = aux;
}
