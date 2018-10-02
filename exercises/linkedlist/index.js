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
        // this.head = new Node(data, this.head);
        this.insertAt(data, 0);
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
        // return this.head;
        return this.getAt(0)
    }
    getLast(){
        // let node = this.head;
        // if(!node){
        //     return null;
        // }
        // while(node){
        //     if(!node.nex){
        //         return node;
        //     }
        //     node = node.next;
        // }
        return this.getAt(this.size()-1);
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
        const previous = this.getAt(index-1);
        if(!previous || !previous.next){
            return;
        }
        previous = previos.next.next;
    }
    insertAt(index, data){
        // TODO 
        if(!this.head){
            return this.head = new Node(data);
        }
        if(index ===0){
            // We pass the old this.head on the right side and set it to the new this.head
            this.head = new Node(data, this.head);
            return;
        }
        // if it returns a null value then set it equal to getLast()
        const previous = this.getAt(index-1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
    forEach(fn){
        let node = this.head;
        let counter = 0;
        while (node){
            fn(node, counter);
            node = node.next;
            counter ++;
        }
    }
    // generator function
    *[Symbol.iterator](){
        let node = this.head;
        while (node){
            yield node;
            node = node.next;
        }
    }
}


module.exports = { Node, LinkedList };
