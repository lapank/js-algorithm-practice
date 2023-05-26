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
        getFirst(){
            return this.head;
        }
        getLast(){
            let lastNode = this.head;
            while(lastNode.next){
                lastNode = lastNode.next;
            }
            return lastNode;
            }
        stackAdd(x){
            let oldHead = this.head;
            console.log("oldHead " + oldHead.data);
            let newNode = new Node(x);
            console.log("newNode " + newNode.data);
            newNode.next = oldHead;
            console.log("newNode next " + newNode.next.data);
            this.head = newNode;
            console.log("listHead " + this.head.data);
        }
        stackDelete(){
            let oldHead = this.head;
            let newHead = this.head.next;
            delete this.head;
            this.head = newHead;
        }
        queueAdd(){}
        queueDelete(){}

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
    list1.stackAdd(12);

    console.log("First Node " + list1.getFirst().data);
    console.log("Last Node " + list1.getLast().data);
    list1.stackDelete();
    console.log("New First Node " + list1.getFirst().data);

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

function stack(){
    class Stack{
        constructor(){
            this.data = [];
        }
        push(){
            this.data
        }
        pop(){

        }
        reverse(){

        }
        isEmpty(){

        }
        print(){

        }
        size(){

        }
    }
}
// Hash Table

// Graph