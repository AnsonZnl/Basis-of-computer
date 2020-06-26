function binarySeach(array, item) {
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array[mid]
        if (element < item) {
            low = mid + 1
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid
        }
    }
    return -1
}
let arr = [1,2,3,4,5,6]
let index = binarySeach(arr, 2)
console.log(index)//1