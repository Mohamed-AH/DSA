/* arrays */
/* const arr = [1, 2, 3, "vi"];
arr.push(4);
arr.unshift(0)
arr.shift()
arr.pop()
for (const a of arr) {
  console.log(a);
} */
/* Objects */
/* 
const obj = {
  name: "hburg",
  age: 25,
  "key-three": true,
  sayMyname: function(){
  console.log(this.name)
  }
  
};
 
obj.hobby = "foot"
delete obj.hobby
// obj.sayMyname()
console.log(Object.entries(obj)) */
/* Set */
/* 
const set = new Set([1,2,3])

for(const item of set){
  console.log(item)
}

set.add(6)
set.add(5)
set.add(4)
console.log("bre")
for(const item of set){
  console.log(item)
} */
/* map */
/* 
const map = new Map([['a',1],['b',2]])
map.set('c',3)
console.log(map.has('a'))
for (const [key,val] of map){
  console.log(key+":",val)
} */
/* stack */
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Example usage
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // Output: 10 20 30
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30

console.log(stack.printStack()); // Output: 10 20
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.printStack());
// Queue
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());

// Queue using object

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front == 0;
  }

  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());
