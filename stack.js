"use strict"

class Stack {
  constructor() {
    this.temp = [];
    this.MAX_SIZE = 10;
  }

  push(x) {
    if (this.temp.length < this.MAX_SIZE) {
      return this.temp.push(x);
    }
  }

  pop() {
    return this.temp.pop();
  }

  peek() {
    return this.temp[this.temp.length-1];
  }

  isEmpty() {
    if (this.temp.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.temp.length;
  }

  each() {
    for (var i = 0; i < this.temp.length; i++) {
      console.log(this.temp[i]);
    }
  }

  first() {
    return this.temp[this.temp.length-1];
  }

  last() {
    return this.temp[0];
  }

  isFull() {
    if (this.temp.length == this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
}

// Buat stack baru
let my_stack = new Stack();

// Cek apakah stack sudah ada isi atau kosong
console.log(`The stack is empty? ${my_stack.isEmpty()}`);

// Tambahkan tiga
my_stack.push("Javascript");
my_stack.push("is just so");
my_stack.push("cool");

// Karena stack menggunakan array,
// Kita bisa add tipe data apapun seperti string dan integer
my_stack.push(15);

// Lihat, kita menghapus data satu per satu
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

// Cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty? ${my_stack.isEmpty()}`);

// Coba hapus stack kosong, apakah yang terjadi?
console.log(my_stack.pop());

// Test lain
my_stack.push("1");
my_stack.push("2");
my_stack.push("3");
my_stack.push("4");
my_stack.push("5");
my_stack.push("6");
my_stack.push("7");
my_stack.push("8");
my_stack.push("9");
my_stack.push("10");
my_stack.push("11");
my_stack.push("12");
console.log(my_stack.size());
my_stack.each();
console.log(my_stack.first());
console.log(my_stack.last());
console.log(`The stack is full? ${my_stack.isFull()}`);
