// 栈：遵循 “后进先出” 的原则
class Stack {
    constructor() {
        this.stack = []
    }
    push(item) {
        this.stack.push(item)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return this.stack.length === 0
    }
    clear() {
        this.stack = []
    }
    size() {
        return this.stack.length;
    }
    print() {
        console.log(this.stack.toString());
    }
}

// 把任何数值转换为二级制
function baseConverter(decNumber, base) {
    let remStack = new Stack(),
        rem,
        binaryString = '',
        digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base)
    }
    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()];
    }
    return binaryString;
}

let result = baseConverter(10, 2)
console.log(result)
// 1010