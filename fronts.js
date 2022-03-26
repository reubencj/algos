class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  // constructor, other methods, removed for brevity
  constructor() {
    this.head = null;
  }

  addFront(value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.head = new_node;
      return this;
    }

    new_node.next = this.head;

    this.head = new_node;
    return this;
  }

  removehead() {
    if (!this.head) {
      console.log("No head");
      return this;
    }
    this.head = this.head.next;

    return this;
  }

  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }
  //contains

  contians(value) {
    let result = false;

    let runner = this.head;

    while (runner !== null) {
      if (runner.data == value) {
        result = true;
        return result;
      }
      runner = runner.next;
    }

    return result;
  }

  //length

  length() {
    let runner = this.head;
    let counter = 0;
    while (runner !== null) {
      counter++;
      runner = runner.next;
    }

    return counter;
  }
}

let ls = new SLL().addFront("Hello");
ls.addFront("I'm in the front now");
ls.addFront("No I am");

console.log(ls);
console.log(ls.length("Hello"));
