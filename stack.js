"use strict"

class Stack {
  constructor() {
    this.chapter = [];
  }
  push(x) {
    this.chapter.push(x)

  }

  pop() {
    return this.chapter.pop()
  }

  peek() {
    this.chapter.peek()
  }

  isEmpty() {
    if (this.chapter.length==0){
      return  true
    }
    else {
      return false
    }
  }

}
let my_stack = new Stack ()
// //cek
console.log(`The stack is empty?${my_stack.isEmpty()}`);
// //tambah tiga
my_stack.push("JavaScript")
my_stack.push("is just so")
my_stack.push("cool")
console.log(my_stack.isEmpty());
// //add
my_stack.push(15)
// //lihat
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
// //cek lagi
console.log(`The stack is empty?${my_stack.isEmpty()}`);
// //coba hapus
console.log(my_stack.pop());
