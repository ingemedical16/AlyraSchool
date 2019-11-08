// Exercice 1.3.5 :Génèrer une adresse type bitcoin   genererAdresseBitcoin.js
/*
Écrire un programme qui génère une adresse type bitcoin à partir d’une clé publique

# Choisir la clé publique aléatoirement

# Calculer le hash SHA 256 puis RIPEMD160 (voir librairies dans le cours), on appelle ce résultat hash160 

#Ajouter l’identifiant (0x00) au début, et le contrôle à la fin (4 premiers octets du sha256(sha256(0x00 + hash160)) )

Convertir le nombre en base 58

NB: Les opérations doivent se faire sur la représentation binaire des nombres (bytes, buffer...)
*/

const crypto = require("crypto")
const RIPEMD160 = require('ripemd160')

//Pseudo fonction de hachage
function pseudohachage(chaine) {
    condensat=0
    for (let i = 0; i < chaine.length; i++) {
      console.log(chaine.charCodeAt(i))
      condensat =(condensat + chaine.charCodeAt(i) * 10**(i+1)) % (2**256)
    }
    return condensat.toString(16)
  }
  //Fonction sha 256 
function sha256(chaine){
    hash = crypto.createHash("sha256").update(chaine).digest("hex")
    return hash
  
  }
 // hash160
//console.log("Condensat:", pseudoHachage(process.argv[2]))
function hash160(entree){
    entreeBuffer = Buffer.from(entree)
    hash = crypto.createHash("sha256").update(entreeBuffer).digest()
    hash160 = new RIPEMD160().update(hash).digest("hex")
    return hash160
}

// Ajouter l’identifiant (0x00) au début, et le contrôle à la fin (4 premiers octets du sha256(sha256(0x00 + hash160)) )

function ajouterIdentiant(entre){
hash160 = hash160(entre)
sha = sha256(0x00 + hash160)
adress = sha256(sha)
return adress
}

//console.log(hash160(process.argv[2]))
console.log(ajouterIdentiant(process.argv[2]))

