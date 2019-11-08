class Arbre {
    constructor(valeur = undefined) {
      if (valeur === undefined) {
        this.racin = undefined;
      } else {
        this.racin = valeur;
      }
        this.arbre = [] ;
        this.n= 1;

        this.q=[];
    }


  //Méthode pour ajouter un noeud
  ajouterNoeud(valeur) {
    if(this.racin === undefined){
      this.racin = valeur;
      this.arbre[0] = valeur;
      this.arbre[1]= undefined;
      this.arbre[2]= undefined;
    }else
      {
        this.ajouter(valeur);


      }
  }
  ajouter(valeur){
    var index = this.getIndex();
    if(valeur < this.arbre[index[0]]){
      if(this.arbre[index[1]]===undefined){
        this.arbre[index[1]] = valeur;
        this.arbre[2*index[1]+1]=undefined;
        this.arbre[2*index[1]+2]=undefined;
        this.n = 1;
      }else{
        this.n = 2*index[1]+1;
        this.ajouter(valeur);
      }

    }else if(valeur > this.arbre[index[0]]) {
      if(this.arbre[index[2]]===undefined){
        this.arbre[index[2]] = valeur;
        this.arbre[2*index[2]+1]=undefined;
        this.arbre[2*index[2]+2]=undefined;
        this.n = 1;
      }else{
        this.n = 2*index[2]+1;
        this.ajouter(valeur);

    }
  }
}
getIndex()
{
  var p = Math.floor((this.n + 1) / 2)-1 ;
  var g = 2*p +1;
  var d = 2*p +2;

  return [p,g,d];
}
getLasteIndex(){
  var size = this.arbre.length ;
//  console.log(size);
  return size;
}

  //Méthode pour trouver une valeur donnée dans un arbre binaire de recherche
  trouverNoeud(valeur) {
    var abc = this.arbre;
    //console.log(abc);
    let indice = abc.indexOf(valeur);

    return indice;
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
  _supprimer(indice){
    var g = 2*indice +1;
    var d = 2*indice +2;;
    if(this.arbre[g] === undefined && this.arbre[d]=== undefined){
      delete this.arbre[indice];
      delete this.arbre[g];
      delete this.arbre[d];
    }else if(this.arbre[g] !== undefined){
      this.arbre[indice] = this.arbre[g];
      this.arbre[g] = undefined;
    }else if(this.arbre[d] !== undefined){
      this.arbre[indice] = this.arbre[d];
      this.arbre[d] = undefined;

  }
}

  //Méthode pour afficher l’arbre selon un parcours infixe
  //Cette méthode doit retournée un tableau contenant la valeur des noeuds
  infixe(){
    var arry = []
    var len = this.getLasteIndex();
    var ind = this.getIndex();
    //console.log(ind);
    if(ind[2]< len){
    if(this.arbre[ind[1]]!== undefined){
    this.n = 2*ind[1]+1;
    this.infixe();
    }
    arry = arry.concat(this.arbre[ind[0]])
    //console.log(arry);
    if(arry[0] !== undefined){
     this.q.push(arry[0]);
    //  console.log(this.q);
    }
    this.n = 2*ind[2]+1;
    this.infixe();

  }
  return this.q
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
console.log(a.printNoeud(13));
console.log(a.supprimerNoeud(13));
console.log(a.printNoeud(13));
console.log(a.printNoeud(12));
