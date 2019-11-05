class Noeud {
    constructor (data) {
    this.valeur = data
    this.gauche = null
    this.droit = null
    }
}
    

class Arbare {
    constructor(){
        this.racine = null
    }
    // function ajouter data  qui  apple une function ajouter noude
    ajouter(data){
        var nouNoeud = new Noeud(data)
        if(this.racine === null){
            this.racine = nouNoeud
        }else{
            this.ajouterNoeud(this.racine,nouNoeud)
        }
    }
    ajouterNoeud(noeud,nouNoeud){
        if(nouNoeud.data < noeud.data){
            if (noeud.gauche === null){
                noeud.gauche = nouNoeud
            }else{
                this.ajouterNoeud(noeud.gauche,nouNoeud)
            }
        }else{
            if(noeud.droit === null){
                noeud.droit = nouNoeud
            }else {
                this.ajouterNoeud(noeud.droit,nouNoeud)
            }
        }
    }

    supprimer(data){
        this.racine = this.supprimerNoeud(this.racine,data)
    }
    supprimerNoeud(noeud,key){
        if (noeud ===null){
            return null
        }else if(key < noeud.data){
            noeud.gauche = this.supprimerNoeud(noeud.gauche,key)
            return noeud

        }else if(key > noeud.data){
            noeud.droit = this.supprimerNoeud(noeud.droit,key)
            return noeud
        }else{
            if(noeud.gauche === null && noeud.droit === null){
                noeud = null
                return noeud
            }
            if (noeud.gauche === null){
                noeud = noeud.droit 
                return noeud

            }else if(noeud.droit === null){
                noeud = noeud.gauche 
                return noeud
            }
            aux = this.trouverMinNoeud(noeud.droit)
            noeud.data = aux.data

            noeud.droit = this.supprimerNoeud(noeud.data,aux.data)
            return noeud
        }

    }

    trouverMinNoeud(noeud){
        if(noeud.gauche === null){
            return noeud
        }else {
            return this.trouverMinNoeud(noeud.gauche)
        }

    }
    getRacineNoeud(){
        return this.racine
    }
    enOrdre(noeud){
        if(noeud !== null){
            this.enOrdre(noeud.gauche)
            console.log(noeud.data)
            this.enOrdre(noeud.droit)
        }

    }

    preOrdre(noeud){
        if(noeud !== null){
        console.log(noeud.data)
        this.preOrdre(noeud.gauche)
        this.preOrdre(noeud.droit)
        }

    }

    postOrdre(noeud){
        if(noeud !== null){
            this.postOrdre(noeud.gauche)
            this.postOrdre(noeud.droit)
            console.log(noeud.data)
        }
    }
    chercher(noeud,data){
        if(noeud === null){
            return null
        }else if (data < noeud.data){
            return this.chercher(noeud.gauche,data)
        }else if (data > noeud.data){
            return this.chercher(noeud.droit,data)
        }else {
            return noeud

        }
    }

}


// cree un objet Arbare

let arb = new Arbare()

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


let racine = arb.getRacineNoeud()
//console.log(racine)
arb.enOrdre(racine)
arb.postOrdre(racine)
arb.preOrdre(racine)
