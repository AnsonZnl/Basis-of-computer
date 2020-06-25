class ArrayList{
    constructor(){
        this.array = [];
        this.swap = (index1, index2)=>{
            var aux = index1;
            this.array[index1] = this.array[index2]
            this.array[index2] = aux;
        }
        this.createNonSortedArray = (size)=>{
            // 创建一个指定长度的数组
            
        }
    }
    insert(item){
        this.array.push(item)
    }
    toString(){
        return this.array.join()
    }
    bubbleSort(){
        // 冒泡排序
        var length = array.length;
        for(var i = 0; i<length; i++){
            for(var j=0; j<length; j++){
                if(this.array[j] > this.array[j+1]){
                    this.swap(j, j+1)
                }
            }
        }
    }
}

