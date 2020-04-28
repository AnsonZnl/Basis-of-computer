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