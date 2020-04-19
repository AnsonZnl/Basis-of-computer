// 队列：遵循 “先进先出” 的原则
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(elements) {
        this.items.push(elements)
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString())
    }
}
// let queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('Jack')
// queue.enqueue('Jahn')
// queue.enqueue('Camila')
// queue.dequeue()
// console.log(queue.size())
// queue.dequeue()
// queue.print()

// 优先队列：设置优先级，然后在正确的位置添加元素
// 假设 priority 越小优先级就越高
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(val) {
        if (this.isEmpty()) {
            this.items.push(val)
        } else {
            let index = this.items.findIndex(e => {
                return val.priority < e.priority
            })
            if (index == -1) {
                this.items.push(val)
            } else {
                this.items.splice(index, 0, val)
            }
        }
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(JSON.stringify(this.items))
    }
}
let priorityQueue = new PriorityQueue()
priorityQueue.enqueue({
    element: 'Jake',
    priority: 2
})
priorityQueue.enqueue({
    element: 'Jahn01',
    priority: 1
})
priorityQueue.enqueue({
    element: 'Jahn02',
    priority: 3
})
priorityQueue.enqueue({
    element: 'Jake',
    priority: 2
})
priorityQueue.enqueue({
    element: 'Jahn01',
    priority: 1
})
priorityQueue.enqueue({
    element: 'Jahn02',
    priority: 3
})
priorityQueue.enqueue({
    element: 'Jahn03',
    priority: 0
})
priorityQueue.print()

// 循环队列
function hotPotato(nameList, num){
    let queue = new Queue()
    nameList.forEach(e=>{
        queue.enqueue(e)
    })
    let eliminated = '';
    while(queue.size() > 1){
        for(let i = 0;i<num; i++){
            // 把队列的第一个元素移除，然后放在队列的尾部
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(`${eliminated}在击鼓传花游戏了被淘汰`)
    }
    return queue.dequeue()
}
let name = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(name, 7)
console.log(`胜利者 ${winner}`)