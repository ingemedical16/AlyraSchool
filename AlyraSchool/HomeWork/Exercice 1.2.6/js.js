class ListNode {

    constructor(data) {
        this.data = data
        this.next = null

    }
}

class BinaryTreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Arbre {
    constructor(data = null) {
        this.head = null;
        this.root = null;
    }

    ajouterNoeud(new_data) {
        var new_node = new ListNode(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }

    convertList2Binary() {
        var q = [];
        if (this.head === null) {
            this.root = null
        } else {
            return
        }

        this.root = BinaryTreeNode(this.head.data)
        q.push(this.root)
        this.head = this.head.next;

        while (self.head) {

            //# 2.a) Take the parent node from the q and 
            //# and remove it from q 
            parent = q.pop(0) //# Front of queue 

            //# 2.c) Take next two nodes from the linked list. 
            //# We will add them as children of the current 
            //# parent node in step 2.b. 
            //# Push them into the queue so that they will be 
            //# parent to the future node 
            var leftChild = null
            var rightChild = null

            leftChild = BinaryTreeNode(this.head.data)
            q.push(leftChild)
            this.head = this.head.next
            if (this.head) {
                rightChild = BinaryTreeNode(this.head.data)
                q.push(rightChild)
                this.head = this.head.next
            }
            //#2.b) Assign the left and right children of parent 
            parent.left = leftChild
            parent.right = rightChild
        }

    }

    infixe(){
        let affichage = []
        if (this.left)
        affichage = this.left.infixe()
      affichage = affichage.concat([this.data])
      if (this.right)
        affichage = affichage.concat(this.right.infixe())
      return affichage
    }
}



//test

let a = new Arbre();
a.ajouterNoeud(30);
a.ajouterNoeud(18);
a.ajouterNoeud(24);
a.ajouterNoeud(11);
a.ajouterNoeud(33);
a.ajouterNoeud(13);
a.ajouterNoeud(40);
a.ajouterNoeud(46);
a.ajouterNoeud(14);
a.ajouterNoeud(21);
a.ajouterNoeud(12);
a.ajouterNoeud(10);
a.ajouterNoeud(31);
a.ajouterNoeud(35);
a.ajouterNoeud(32);



console.log(a.infixe()); //[ 10, 11, 12, 13, 14, 18, 21, 24, 30, 31, 32, 33, 35, 40, 46 ]
//console.log(a.printNoeud(30));