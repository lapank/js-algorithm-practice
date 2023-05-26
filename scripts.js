// Arrays

function makeArray(){
    let myArray = [3,4,5];
    console.log(myArray);
}
makeArray();

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
linkedList();

// Tree

// Queue

function queue(){
    class Queue{
        constructor(){
            this.data = [];
        }
        enqueue(x){
            this.data.push(x);
        }
        dequeue(){
            if(this.isEmpty() == true){
                console.log("The queue is empty");
            }else{
                this.data.shift();  
            }
        }
        isEmpty(){
            return this.data.length == 0;
        }
    }
}
queue();

// Stack

// Hash Table

// Graph