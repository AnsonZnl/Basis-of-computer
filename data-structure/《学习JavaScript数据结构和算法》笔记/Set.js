// 使用对象来模拟集合 Set

class MySet{
    constructor(){
        this.items = {};
    }
    has(val){
        return this.items.hasOwnProperty(val)
    }
    add(val){
        if(!this.has(val)){
            this.items[val +''] = val;
            return true;
        }else{
            return false;
        }
    }
    remove(val){
        if(this.has(val)){
            delete this.items[val];
            return true;
        }else{  
            return false
        }
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }
    values(){
        return Object.keys(this.items)
    }
    union(otherSet){
        let unionSet = new MySet();
        let values = this.values();
        for(var i=0; i< values.length; i++){
            unionSet.add(values[i])
        }
        values = otherSet.values();
        for(var i=0; i< values.length; i++){
            unionSet.add(values[i])
        }
        return unionSet;
     }
}

// let set1 = new MySet();
// set1.add(1)
// set1.add(2)
// set1.add(3)
// set1.add(4)
// set1.remove(3)
// console.log(set1.values())

// 集合操作
/**
 * 并集：对于给定两个集合，返回一个包含两个集合中所有元素的新集合。
 * 交集：对于给定两个集合，返回一个包含两个集合中共有元素的新集合
 * 差集：对于给定两个集合，返回一个所有存在于第一个集合且不存在与第二个集合的元素的新集合
 * 子集：对于给定两个集合，验证一个集合，是否是另一个元素的子集。
 */

 // 并集
 /**
  *   union(otherSet){
        let unionSet = new MySet();
        let values = this.values();
        for(var i=0; i< values.length; i++){
            unionSet.add(values[i])
        }
        values = otherSet.values();
        for(var i=0; i< values.length; i++){
            unionSet.add(values[i])
        }
        return unionSet;
     }
  * 
  */

let setA= new MySet();
setA.add(1)
setA.add(2)
setA.add(3)

let setB= new MySet();
setB.add(3)
setB.add(4)
setB.add(5)
let unionAB = setA.union(setB)
console.log(unionAB.values())