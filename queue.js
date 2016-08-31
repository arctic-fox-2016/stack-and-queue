class queue{
  constructor(x){
    if (typeof x == "object") {
       this.myData = x;
    } else {
      this.myData = [];
    };

    this.maxSize = 5;
  }

  push(x){
    if ( this.isFull() == true ) {
      console.log("Queue is full!");
    } else {
      this.myData.push(x);
    }
  }

  shift(){
    return this.myData.shift()
  }

  peek() {
    return this.myData[this.myData.length-1];
  }

  isFull(){
    if (this.myData.length == this.maxSize) {
      return true
    } else {
      return false
    }
  }

  isEmpty(){
    if (this.myData.length == 0){
      return true
    } else {
      return false
    }
  }

}

let my_queue = new queue()

console.log(`The queue is empty? ${my_queue.isEmpty()}`)

my_queue.push("Data 1");
my_queue.push("Data 2");
my_queue.push("Data 3");
my_queue.push("Data 4");
my_queue.push("Data 5");
my_queue.push("Data 6");

console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())


console.log(`The queue is empty? ${my_queue.isEmpty()}`)

console.log(my_queue.shift())
