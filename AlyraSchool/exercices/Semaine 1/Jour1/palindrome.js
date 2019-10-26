function palinddrome(chaine){
    let size = chaine.length
    for (let i=0 ;i < Math.floor(size/2);i++){
        //console.log(i, chaine[i])
        if (chaine[i] != chaine[size-(i+1)]){
            return false

        }
    }
    return true
}

console.log(palinddrome("ANNA"))
console.log(palinddrome("ANkNA"))
console.log(palinddrome("ANkONA"))