const readline = require('readline')

let solution = Math.round(Math.random()*100);

const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Devinez le nombre entre 1 et 100")

rli.on('line', (userinput) => {
    dif = Math.abs((solution-userinput));
    if(dif <= 5){
        reponse = " :la réponse est très proche"
    }else if (6>= dif && dif <10){
        reponse = " :la réponse est  proche"
    }else {
        reponse = " :la réponse est très loin"
    }
    if (userinput < solution){
        console.log("C'est plus que "+ userinput + reponse + " " + dif)
    }
    else if (userinput > solution) {
        console.log("C'est moins que "+ userinput + reponse + " " + dif)
    } 
    else if (userinput == solution){
        rli.close()
        console.log("Vous avez gagné!")
    } 
    else {
        console.log("Entrée illisible")
    }
})
