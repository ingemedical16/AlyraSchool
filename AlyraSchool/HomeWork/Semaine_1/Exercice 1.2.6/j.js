
class Arbre {
constructor(valeur = null) {
if (valeur === null) {
  this.arbre = [undefined];
} else {
  this.arbre = [valeur];
}
}

ajouterNoeud(valeur) {
if (this.arbre[0] === undefined) {
  this.arbre[0] = valeur;
} else {
  this._ajouter(valeur, 0);
}
}

_ajouter(valeur, indice) {
let position;
if (valeur < this.arbre[indice]) {
  position = 2 * indice + 1;
} else {
  position = 2 * indice + 2;
}
this._ajusteTaille(position);
if (this.arbre[position] === undefined) {
  this.arbre[position] = valeur;
} else {
  this._ajouter(valeur, position);
}
}

_ajusteTaille(taille) {
taille = taille + 1
while (taille > this.arbre.length) {
  this.arbre.push(undefined);
}
}

trouverNoeud(valeur) {
return this._trouver(valeur, 0);
}

_trouver(valeur, indice) {

if (indice >= this.arbre.length) {
  return undefined;
} else {
  let noeud = this.arbre[indice];
  if (noeud === undefined) {
    return undefined;
  } else if (noeud === valeur) {
    return indice;
  } else if (noeud > valeur) {
    return this._trouver(valeur, 2 * indice + 1);
  } else {
    return this._trouver(valeur, 2 * indice + 2);
  }
}
}

supprimerNoeud(valeur) {
let indice = this.trouverNoeud(valeur);
if (this.arbre[indice] !== undefined) {
  this._supprimer(indice);
  return true;
} else {
  return false;
}
}

_supprimer(N) {
if (this.arbre[2*N+1] === undefined && this.arbre[2*N+2] === undefined) {
  this.arbre[N] = undefined;
} else if (this.arbre[2*N+1] === undefined) {
  this.arbre[N] = this.arbre[2*N+2];
  this.arbre[2*N+2] = undefined;
} else if (this.arbre[2*N+2] === undefined) {
  this.arbre[N] = this.arbre[2*N+1];
  this.arbre[2*N+1] = undefined;
} else {

  // Cas de deux enfants qui ont eux-même pas d'enfants. C'est un cas tres simplifie
  let gauche = 2*N+1;
  let droite = 2*N+2;

  if (this.arbre[N] - this.arbre[gauche] < this.arbre[droite] - this.arbre[N]) {
    this.arbre[N] = this.arbre[gauche];
    this.arbre[gauche] = undefined;
  } else {
    this.arbre[N] = this.arbre[droite];
    this.arbre[droite] = undefined;
  }
}
}

infixe(){
let parcours = [];
if(this.arbre[0] !== undefined) this._infixe(parcours, 0, 0);
return parcours;
}


_infixe(parcours, N, indice){
if(this.arbre[2*N+1] !== undefined) this._infixe(parcours, 2*N+1, indice + 1);

parcours.push(this.arbre[N]);

if(this.arbre[2*N+2] !== undefined)this._infixe(parcours, 2*N+2, indice + 1);

return parcours;
}

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





//test la class

var a = new Arbre();
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
