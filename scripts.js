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
            if(this.isEmpty()){
                console.log("The queue is empty");
            }else{
                this.data.shift();  
            }
        }
        front(){
            if(this.isEmpty()){
                console.log("The queue is empty");
            }else{
              return this.data[0];  
            }
        }
        isEmpty(){
            return this.data.length == 0;
        }
        printQueue(){
            if(this.isEmpty()){
                console.log("The queue is empty");
            }else{
              return this.data.toString();  
            }
        }
        size(){
            return this.data.length;
        }
    }

    let queue1 = new Queue();
    queue1.enqueue("dogs");

    console.log(queue1.printQueue());
    
    queue1.enqueue("cats");
    queue1.enqueue("frogs");
    queue1.enqueue("ponies");

    console.log(queue1.printQueue());

    queue1.dequeue();

    console.log(queue1.printQueue());

    console.log(queue1.size());

}
queue();

// Stack

// Hash Table

// Graph