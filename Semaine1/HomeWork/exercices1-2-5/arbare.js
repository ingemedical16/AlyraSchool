// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class 
class BinarySearchTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }

    // function to be implemented 
    // insert(data) 
    // helper method which creates a new node to 
    // be inserted and calls insertNode 
    insert(data) {
        // Creating a node and initailising 
        // with data 
        var newNode = new Node(data);

        // root is null then node will 
        // be added to the tree and made root. 
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the 
            // tree and add the node 
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data 
    insertNode(node, newNode) {
        // if the data is less than the node 
        // data move left of the tree 
        if (newNode.data < node.data) {
            // if left is null insert node here 
            if (node.left === null)
                node.left = newNode;
            else

                // if left is not null recurr until 
                // null is found 
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node 
        // data move right of the tree 
        else {
            // if right is null insert node here 
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recurr until 
                // null is found 
                this.insertNode(node.right, newNode);
        }
    }

    // remove(data)
    // helper method that calls the 
    // removeNode with a given data 
    remove(data) {
        // root is re-initialized with 
        // root of a modified tree. 
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a 
    // given data 
    // it recurrs over the tree to find the 
    // data and removes it 
    removeNode(node, key) {

        // if the root is null then tree is 
        // empty 
        if (node === null)
            return null;

        // if data to be delete is less than 
        // roots data then move to left subtree 
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        // if data to be delete is greater than 
        // roots data then move to right subtree 
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // if data is similar to the root's data 
        // then delete this node 
        else {
            // deleting node with no children 
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one children 
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }



    // Helper function 
    // findMinNode() 
    // finds the minimum node in tree 
    // searching starts from given node 
    findMinNode(node) {
        // if left of a node is null 
        // then it must be minimum node 
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    // getRootNode() 
    // returns root of the tree 
    getRootNode() {
        return this.root;
    }

    // inorder(node) 
    // Performs inorder traversal of a tree 
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // preorder(node)
    // Performs preorder traversal of a tree	 
    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // postorder(node) 
    // Performs postorder traversal of a tree 
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // search(node, data) 
    // search for a node with given data 
    search(node, data) {
        // if trees is empty return null 
        if (node === null)
            return null;

        // if data is less than node's data 
        // move left 
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data 
        // move left 
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data 
        // return node 
        else
            return node;
    }

} 

// create an object for the BinarySearchTree 
var BST = new BinarySearchTree(); 

// Inserting nodes to the BinarySearchTree 
BST.insert(6); 
BST.insert(3);
BST.insert(7);
BST.insert(1);   
BST.insert(4); 
BST.insert(9); 

//	                	 6
//		               /   \ 
//	                  3     7 
//	                 / \     \ 
//	                1   4     9
						

var root = BST.getRootNode(); 
//console.log(root);

console.log("infixe donne 1 3 4 6 7 9"); 
 
BST.inorder(root); 
			
console.log("Postfixe donne 1 4 3 9 7 6"); 
BST.postorder(root); 
console.log("Préfixe donne 6 3 1 4 7 9"); 
BST.preorder(root); 



//

//

//
