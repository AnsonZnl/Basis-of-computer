/**
 * 字典
 * 字典和集合很相像，集合是以[值, 值]的形式储存的。字典则是以[键, 值]的形式来储存元素的，字典也称为 “映射”
 * 字典储存的是[键, 值]对，其中键名是用来查询特定元素的，
 * 
 */
class myMap {
    constructor() {
        let items = {}
    }
    set(key, value) {
        this.items[key] = value
    }
    remove(key) {
        if (this.items[key]) {
            delete items[key]
            return true
        }
        return false
    }
    has(key) {
        return key in this.items
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined
    }
    values() {
        let values = []
        for (let i in this.items) {
            if (!this.items.hasOwnProperty(i)) {
                values.push(this.items[i])
            }
        }
        return values;
    }
    clear() {
        this.items = {}
    }
    keys() {
        return this.items.keys()
    }
    size() {
        return Object.keys(this.items).length
    }
    getItems() {
        return this.items;
    }
}

// 散列表
// 散列算法的作用是尽可能快的在数据结构中找到一个值
class HashTable{
    constructor(){
        this.table = []
    }
    loseloseHashCode(key){
        let hash = 0;
        for(let i= 0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        // console.log(hash)
        return hash % 37
    }
    put(key, value){
        let position = this.loseloseHashCode(key);
        console.log(position + '-' + key)
        this.table[position] = value
    }
    get(key){
        return thia.table(this.loseloseHashCode(key))
    }
    remove(key){
        this.table[this.loseloseHashCode(key)] = undefined
    }
}
let hash = new HashTable()
hash.put('Gandalf0', 'gandalf@email.com0')
hash.put('Gandalf1', 'gandalf@email.com1')
hash.put('Gandalf2', 'gandalf@email.com2')
console.log(JSON.stringify(hash))