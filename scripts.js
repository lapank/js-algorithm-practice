// Arrays

function makeArray(){
    let myArray = [3,4,5];
    console.log(myArray);
}

// Linked Lists

function linkedList(){

    class LinkedList {
        constructor(head){
            this.head = head;
        }
    }

    class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }

    let node1 = new Node(3);
    let node2 = new Node(7);
    node1.next = node2;

    let list1 = new LinkedList(node1);

    console.log(list1.head.next.data);
}

// Hash Table

// Graph