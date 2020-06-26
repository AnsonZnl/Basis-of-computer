function checkArray(arr) {
    if (!arr || arr.length <= 2) return
}

function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
}

module.exports={
    checkArray,
    swap
}