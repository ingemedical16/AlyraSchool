class Arbre {
    constructor(valeur = null) {
        this.arbre=[]
      if (valeur === null) {
        this.arbre[0] = undefined;
      } else {
        this.arbre = [valeur];
      }
    }
  
    //Méthode pour ajouter un noeud
    ajouterNoeud(valeur) {
      var n = this.indexLastelement(this.arbre);

      if(n>0){
      var parentN = Math.floor((n + 1) / 2)-1 ;
      var filsgIndex = 2*parentN +1
      var filsdIndex = 2*parentN +2
      var parent = this.arbre[parentN];
      var filsg = this.arbre[filsgIndex]
      var filsd = this.arbre[filsdIndex]
      }else{
        var parentN=0;
      }

      if (this.arbre[parentN] === undefined) {
        this.arbre[parentN] = valeur;
        this.arbre[filsgIndex]=undefined;
        this.arbre[filsdIndex]=undefined;
      } else{
        if(valeur<parent){
          if(this.arbre[filsgIndex]===undefined)
          this.arbre[filsgIndex]=valeur;
          this.arbre[filsgIndex*2+1]= undefined;
          this.arbre[filsgIndex*2+2]
        }
        
      
       
      }
    

   
    }

    indexLastelement(inp){
      var size = inp.length;
      return size
    }

  
    //Méthode pour trouver une valeur donnée dans un arbre binaire de recherche
    trouverNoeud(valeur) {
    }
  
    //Méthode pour supprimer un noeud
    supprimerNoeud(valeur) {
      let indice = this.trouverNoeud(valeur);
      if (this.arbre[indice] !== undefined) {
        this._supprimer(indice);
        return true;
      } else {
        return false;
      }
    }
  
    //Méthode pour afficher l’arbre selon un parcours infixe
    //Cette méthode doit retournée un tableau contenant la valeur des noeuds
    infixe(){
      var contenu = this.popUndefined();
      console.log(contenu)
      var len = contenu.length;
      for (var i =0;i<len;i++){
        while(contenu[i]>contenu[i+1]){
          var temp = contenu[i+1];
          contenu[i+1]=contenu[i];
          contenu[i]= temp;
        }
      }
      return contenu
    }

    popUndefined(){
      var resulte = this.arbre
      while(resulte[resulte.length-1] ===undefined ){
        resulte.pop();
        //console.log(resulte)
        //console.log(this.arbre)
      }return resulte
    }
    
    //Méthode pour afficher la valeur d'un noeud à partir de sa valeur
    // Affiche la valeur du noeud et la valeur de ses deux enfants et de son parent
    printNoeud(valeur){
      let N = this.trouverNoeud(valeur);
      
      var out = "Noeud " + this.arbre[N] + ":  L";
      this.arbre[2*N+1] === undefined ? out += "-" : out += this.arbre[2*N+1];
      out += " R";
      this.arbre[2*N+2] === undefined ? out += "-" : out += this.arbre[2*N+2];
      out += " P";
      this.arbre[Math.floor((N-1)/2)] === undefined ? out += "-" : out += this.arbre[Math.floor((N-1)/2)];
        
      console.log(out);
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



console.log(a.infixe()); //[ 10, 11, 12, 13, 14, 18, 21, 24, 30, 31, 32, 33, 35, 40, 46 ]
//console.log(a.printNoeud(30));
