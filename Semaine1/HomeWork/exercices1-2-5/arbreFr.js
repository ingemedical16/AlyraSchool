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

arb.ajouter(6)
arb.ajouter(3)
arb.ajouter(7)
arb.ajouter(1)
arb.ajouter(4)
arb.ajouter(9)

let racine = arb.getRacineNoeud()
//console.log(racine)
arb.enOrdre(racine)
arb.postOrdre(racine)
arb.preOrdre(racine)
