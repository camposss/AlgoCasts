// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next= null){
        this.data = data;
        this.next = next;
    }
    
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    size(){
        let counter = 0;
        let node = this.head;

        // Magic
        while(node){
            counter ++;
            node = node.next;
        }
        return counter;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        let node = this.head;
        if(!node){
            return null;
        }
        while(node){
            if(!node.nex){
                return node;
            }
            node = node.next;
        }
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        let node = this.head.next;
    }
    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            return this.head = null;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next){
            previous = node; 
            node = node.next;
        }
        previous.next = null;
    }
    insertLast(data){
        const last = this.getLast();
        // empty chain
        if(last){
            last.next = new Node(data);
        }else{
            this.head.next = new Node(data);
        }
    }
    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter ===index){
                return node;
            }
            counter ++;
            node = node.next;
        }
        // you asked for index that doesnt exist or greater than size
        return null;
    }
    removeAt(index){
        if(!this.head){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        const previous = getAt(index-1);
        if(!previous || !previous.next){
            return;
        }
        previous = previos.next.next;
    }
    insertAt(){
        // TODO 
    }
}

module.exports = { Node, LinkedList };
