// 普通链表
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;//其实就是最外层的对象引用
    }
    append(element){
        let node = new Node(element)
        let current;
        if(this.head === null){// 列表中添加第一个元素
            this.head = node;
        }else{
            current = this.head;
            // 只要当前的元素存在next，就把他的next赋给上一个元素
            while(current.next){
                current = current.next
            }
            // 一直找到current.next = null的,也就是最后一项，因为最后一项的 next 总是 null ，循环结束。
            current.next = node;
        }
        this.length++; // 更新length 长度
    }
    // 在任意位置插入一个元素
    insert(position, element){
        if(position >= 0 && position <= this.length){
            let node = new Node(element);
            let current = this.head;
            let previous;
            let index = 0;
            if(position === 0){
                // 在第一个位置添加
                node.next = current;
                this.head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }else{
            return false;
        }
    }
    // 移除给定位置的元素
    removeAt(position){
        // 检查值 是否越界
        if(position >-1 && position < this.length){
            let current = this.head;
            let previous;
            let index = 0;
            if(position === 0){
                // 移除第一项
                this.head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                // 将previous与current的下一项链接起来，跳过current，从而移除它；
                previous.next = current.next
            }
            this.length--;
            return current.element;
        }else{
            return null;
        }
    }
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index)
    }
    // 接受一个元素的值，如果知道就返回他的位置，否则就返回-1
    indexOf(element){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.element === element){
                return index;
            }
            index++;
            current = current.next
        }
        return -1
    }
    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length
    }
    getHead(){
        return this.head;
    }
    toString(){
        let current = this.head;
        let string = '';
        while(current){
            string += ',' + current.element;
            current = current.next
        }
        return string.slice(1)
    }
    print(){
        console.log(JSON.stringify(this.head));
    }
}

let node = new LinkedList()
// node.append(1)
// node.append(2)
// node.append(3)
// node.append(4)
// // node.removeAt(2);
// node.insert(4, 5);
// node.print()
// console.log(node.size())
// console.log(node.toString())


// 双向链表
// 链表是双向的，一个链向下一个元素，另一个链向前一个元素。
class DoublyLinkedlist{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    Node(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
    insert(postion, element){
        // 检查越界值
        if(position >= 0 && position <= this.length){
            let node = new this.Node(element),
                current = head,
                previous,
                index = 0;
            if(postion === 0){// 在第一个位置添加
                if(!this.head){ // head 为空，表示这是个空链表，添加的第一个元素
                    this.head = node;
                    this.tail = node;
                }else{
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            }else if(position === this.length){ // 在最后一个位置添加
                current = tail; // 把尾部设为当前元素
                current.next = node; // 把当前元素的next = node
                node.prev = current; // 把node.prev = 当前
                tail = node; // 把node作为tail
            }else{ // 在链表中间 插入
                while(index++ < position){ 
                    // 循环找到 当前位置元素 
                    previous = current;
                    current = current.next;
                }
                // 改变指针
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
                this.length++;
                return true;
            }
        }else{
            return false;
        }
    }
    removeAt(position){
        if(position >= 0 && position < this.length){
            let current = head,
                previous,
                index = 0;
            if(position === 0){ // 删除第一个
                this.head = current.next;
                if(this.length == 1){
                    this.tail = null;
                }else{
                    this.head.prev = null;
                }
            }else if(position === this.length){ // 删除最后一个
                current = this.tail;
                this.tail = current.prev;
                this.next = null;
            }else{ // 删除中间随机一个
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                // 将previous与current的下一项链接起来，跳过current
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return current.element;
        }else{
            return null;
        }
    }
}

// 循环链表
// head.prev = tail.next
// 每个元素不仅链向下一个元素和上一个元素，而且头部和尾部的元素也相连，形成一个闭环。
class CircularLinkedList{
    constructor(element){

    }
    insert(position, element){

    }
    removeAt(position){

    }
}