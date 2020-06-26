// 顺序搜索（仿照Array.findIndex）
function sequentialSearch(array,item){
    let len = array.length
    for(var i = 0; i<len; i++){
        if(item == array[i]){
            return i
        }
    }
    return -1;
}
let arr = [1,2,3,4,5]
let index = sequentialSearch(arr, 2)
console.log(index);//1