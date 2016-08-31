"use strict"

class Stack {
  constructor() {
    this._value = [];
    this._max = 5;
  }

  isEmpty() {
    if(this._value.length == 0) return true;
    return false;
  }

  isFull() {
    if(this._value.length == this._max) return true;
    return false;
  }

  peek() {
    return this._value[this._value.length];
  }

  push(x) {
    if(!this.isFull()){
      this._value[this._value.length] = x;
    }
    return "Already full";
  }

  pop() {
    if(!this.isEmpty()){
      let temp_value = [];
      let pop_value = null;
      for(let idx = 0; idx < this._value.length-1; idx++){
        temp_value[idx] = this._value[idx];
      }
      pop_value = this._value[this._value.length-1];
      this._value = temp_value;
      return `Pop Value ${pop_value}`;
    }
    return "Already empty";
  }
}

let my_stack = new Stack();

console.log(`The Stack is empty? ${my_stack.isEmpty()}`)

my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push("cool")

my_stack.push(15)
console.log(my_stack.peek());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(`The Stack is empty? ${my_stack.isEmpty()}`)

console.log(my_stack.pop());
