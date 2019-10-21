const crypto = require("crypto");


function minage(block,cible){
    let nonce=0;
   do {
        nonce = nonce + 1;
        entre = block + nonce;
        minre = hach(entre);
        
    }while(minre >= cible)
    return nonce

    
}

//Fonction hach
function hach(chaine){
  let b = Buffer.from(chaine);
  let hex = crypto.createHash("sha256").update(b).digest("hex")
  let h = hex.slice(0,8);
  return parseInt(h,16)
}



console.log(minage("Bonjour! Alyra! g",100000));

