const crypto = require("crypto")
const base58 = require("base-58");

function ripemd160(c){
    hash160 = crypto.createHash("ripemd160").update(c).digest("hex")
    return hash160
}

function sha256(chaine){
    hash256 = crypto.createHash("sha256").update(chaine).digest("hex")
    return hash256
}

function adresseBitcoin(clePublic){
    let hash160 = ripemd160(sha256(clePublic));
    let adresse = "0x00" +hash160 + sha256(sha256(Buffer.from("0x00" +hash160, "hex"))).substr(0,4)
    let adresse58 = base58.encode(Buffer.from(adresse));

    return 1+adresse58
}

console.log(adresseBitcoin("82883"))