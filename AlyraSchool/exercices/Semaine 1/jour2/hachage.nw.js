const crypto = require("crypto")

//Pseudo fonction de hachage
function pseudohachage(chaine) {
  condensat=0
  for (let i = 0; i < chaine.length; i++) {
    console.log("charCode "+ chaine.charCodeAt(i))
    condensat =(condensat + chaine.charCodeAt(i) * 10**(i+1)) % (2**256)
  }
  return condensat.toString(16)
}


//Fonction sha 256 
function sha256(chaine){
  console.log("\n# Fonction SHA-256")
  console.log("Entree:\t",chaine)
  console.log("Digest:\t",crypto.createHash("sha256").update(chaine).digest())
  hex = crypto.createHash("sha256").update(chaine).digest("hex")
  console.log("Hex:\t",hex)
  return hex

}

// Fonction qui fait un condensat de condensat
function doubleHachage(entree){
  entreeBuffer  = Buffer.from(entree)
  hash = crypto.createHash("sha256").update(entreeBuffer).digest()
  doubleHash = crypto.createHash("sha256").update(hash).digest()
  return doubleHash
}

// Fonction qui produit une clé d’une phrase en prenant les 4 premiers octets du condensat 
function cleDeVerification(message){
  hash = crypto.createHash("sha256").update(message).digest("hex")
  cle = hash.substring(0,8)
  return cle
}

// Fonction qui vérifie un message avec sa clé
function verification(message,cle){
  console.log("\n# Fonction de vérification de la clé")
  console.log("Message:",message,"  Cle: ",cle)
  verif = cleDeVerification(message) == cle
  console.log("->", verif )
  return verif
}
console.log("Condensat:", pseudohachage(process.argv[2]))

console.log(sha256(process.argv[2]))
console.log(doubleHachage(process.argv[2]))

