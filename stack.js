"use strict"

class Stack {

  constructor() {
    this.data = []
    this.MAX_SIZE = 5
  }

  push(x) {
    if(this.data.length === this.MAX_SIZE){
      console.log("data is full")
    } else{
    this.data.push(x)
  }
  }

  pop() {
    if(this.isEmpty()){
      console.log("data is empty")
  } else{
    return this.data.pop()
  }
  }

  peek() {
    if(this.isEmpty()){
      console.log("data is empty")
  } else{
    console.log(this.data[this.data.length-1])
  }

  }

  isEmpty() {
    if(this.data.length === 0) {
      return true
    } else{
      return false
    }
  }
  size(){
    return this.data.length
  }
  each(){

  }
  first(){
    if(this.isEmpty()){
    return this.data[0]
  } else{
    console.log("data is empty")
  }
  }
  last(){
    if(this.isEmpty()){
    return this.data[this.data.length-1]
  } else{
    console.log("data is empty")
  }
  }
  isFull(){
    if (this.data.length === this.MAX_SIZE) {
      return true
    }
  }
}
let my_stack = new Stack()
console.log(`The stack is empty?`+my_stack.isEmpty());
my_stack.push("JavaScript")
my_stack.push("is just so")
my_stack.push("cool")
my_stack.push(15)
my_stack.push(15)
my_stack.push(15)

console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(`The stack is empty?`+my_stack.isEmpty());
console.log(my_stack.pop());
