// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
    add(data){
        // just push new node into the children array
        this.children.push(new Node(data));
    }
    remove(data){
        this.children = this.children.filter(node=>{
            // return all the nodes not equal not data arg
            return node.data !== data;
        })
    }
}

class Tree {
    constructor(){
        this.root = null;  
    }
    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            // take out first value
            const node = arr.shift();
            // take out all the elements and push them one by one, using SPREAD operator
            arr.push(...node.children);
            fn(node);
        }
    }
    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            // add the children to the beginning of the array
            arr.unshift(...node.children);
            fn(node);
        }
    }
}


module.exports = { Tree, Node };
