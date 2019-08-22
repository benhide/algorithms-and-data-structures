const mainDiv = document.getElementById("main");
mainDiv.innerHTML = "Main Div Test";

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
    this.count = 0;
  }
}

class LinkedListNode {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  addFirst() {}
  addLast() {}
  removeFirst() {}
  removeLast() {}
}

const node1 = new Node(3, null);
const node2 = new Node(5, null);
const node3 = new Node(8, null);

node1.next = node2;
node2.next = node3;

function conLogNode(node) {
  while (node !== null) {
    console.log(
      "Node value:" + node.value + " - Next node: " + JSON.stringify(node.next)
    );
    node = node.next;
  }
}

conLogNode(node1);
