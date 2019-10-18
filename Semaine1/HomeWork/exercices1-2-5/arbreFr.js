class Noeud {
    constructor(val) {
        this.valeur = val;
        this.gauche = null;
        this.droite = null;
        this.parent = null;
    }

    // Affiche la valeur du noeud et la valeur de ses deux enfants et de son parent
    toString() {
        var out = "Noeud " + this.valeur + ":  L";

        this.gauche === null ? out += "-" : out += this.gauche.valeur;
        out += " R";

        this.droite === null ? out += "-" : out += this.droite.valeur;
        out += " P";

        this.parent === null ? out += "-" : out += this.parent.valeur;
        log(out);
    }
}
class Arbre {
    constructor() {
        this.racine = null;
    }

    //Méthode pour trouver une valeur donnée dans un arbre binaire de recherche
    trouverNoeud(noeud, valeur) {
        if (noeud === null) {
            return null;
        } else if (valeur < noeud.valeur) {
            return this.trouverNoeud(noeud.gauche, valeur);
        } else if (valeur > noeud.valeur) {
            return this.trouverNoeud(noeud.droite, valeur)
        } else {
            return noeud
        }
    }

    //Méthode pour ajouter un noeud
    ajouterNoeud(valeur) {
        var nouNoeud = new Noeud(valeur);
        if (this.racine === null) {
            this.racine = nouNoeud;
        } else {
            this.insertNoeud(this.racine, nouNoeud)
        }
    }
    insertNoeud(noeud, nouNoeud) {
        if (nouNoeud.valeur < noeud.valeur) {
            // if left is null insert node here 
            if (noeud.gauche === null)
                noeud.gauche = nouNoeud;
            else

                // if left is not null recurr until 
                // null is found 
                this.insertNoeud(noeud.gauche, nouNoeud);
        }

        // if the data is more than the node 
        // data move right of the tree 
        else {
            // if right is null insert node here 
            if (noeud.droite === null)
                noeud.droite = nouNoeud;
            else

                // if right is not null recurr until 
                // null is found 
                this.insertNoeud(noeud.droite, nouNoeud);
        }
    }



    //Méthode pour supprimer un noeud
    supprimerNoeud(valeur) {
        this.racine = this.supNoueud(this.racine, valeur)
    }
    supNoueud(noeud, valeur) {
        if (noeud === null) {
            return null;
        } else if (valeur < noeud.valeur) {
            noeud.gauche = this.supNoueud(noeud.gauche, valeur);
            return noeud;
        } else if (valeur < noeud.valeur) {
            noeud.gauche = this.supNoueud(noeud.gauche, valeur);
            return noeud;
        }
        else {
            if (noeud.gauche === null && noeud.droite === null) {
                noeud = null;
                return noeud;
            } else if (noeud.gauche === null) {
                noeud = noeud.droite;
                return noeud;
            } else if (noeud.droite === null) {
                noeud = noeud.gauche;
                return noeud;
            }
        }

    }

    //Méthode pour afficher l’arbre selon un parcours infixe
    //Cette méthode doit retournée un tableau contenant la valeur des noeuds
    infixe() {
       let  noeud = this.getRacineNoeud();
       this.enOrdre(noeud);
       
    }
    enOrdre(noeud){
        if (noeud !== null) {
            this.enOrdre(noeud.gauche)
            console.log(noeud.valeur)
            this.enOrdre(noeud.droite)
        }
    }

    
    getRacineNoeud(){
        return this.racine
    
}
}
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

console.log(a.infixe());
var noeud = a.trouverNoeud(24);
noeud !== undefined ? console.log("La valeur " + noeud.valeur + " appartient à l'arbre.") : console.log("La valeur 24 n'appartient à l'arbre.");
