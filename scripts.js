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
            let newNode = new Node(x);
            newNode.next = oldHead;
            this.head = newNode;
        }
        stackDelete(){
            let oldHead = this.head;
            let newHead = this.head.next;
            delete this.head;
            this.head = newHead;
        }
        queueAdd(x){
            let newNode = new Node(x);
            this.getLast().next = newNode;
        }
        queueDelete(){
            let newHead = this.head.next;
            delete this.head;
            this.head = newHead;
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
    list1.stackAdd(12);

    console.log("First Node " + list1.getFirst().data);
    console.log("Last Node " + list1.getLast().data);
    list1.stackDelete();
    console.log("New First Node " + list1.getFirst().data);
    list1.queueAdd(87);
    console.log("New Last Node " + list1.getLast().data);
    list1.queueDelete();
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

function hash(){

    class HashTable{
        constructor(){
            this.table = new Array(127);
            this.size = 0;
        }
        _hash(key){
            let hash = 0;
            for (let i = 0; i < key.length; i++){
                hash += key.charCodeAt(i);
            }
            return hash % this.table.length;
        }
        set(key, value){
            const index = this._hash(key);
            this.table[index] = [key, value];
            this.size++;
        }
        get(key){
            const index = this._hash(key);
            return this.table[index];
        }
        remove(key){
            const index = this._hash(key);

            //Make sure you are in the correct array in this bucket and that the bucket isn't empty
            if(this.table[index] && thiss.table[index].length){
                this.table[index] = undefined;
                this.size--;
            }else{
                return false;
            }
            
        }
    }

    let hashTable = new HashTable();
    hashTable.set("Canada", 300);
    hashTable.set("France", 100);
    hashTable.set("Spain", 110);

    //Need collision detection and display function
}

hash();



// Graph