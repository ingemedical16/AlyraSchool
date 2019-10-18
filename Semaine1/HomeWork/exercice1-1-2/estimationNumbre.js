let userInput = process.argv[2];
    let solution = Math.round(Math.random()*100);
    console.log("permieur nobre estime est  : " + solution)

function estimation(solution,userInput){
    
    if ( solution === userInput){
        console.log(solution+ " a estime correctment");
    }else if (solution < userInput){
        console.log(solution +" est une estimation plus petit");
        solution = solution + (Math.round(Math.random()*(userInput-solution)));
        estimation(solution,userInput);

    }else if (solution > userInput){
        console.log(solution +" est une estimation plus grand");
        solution = solution - (Math.round(Math.random()*(solution-userInput)));
        estimation(solution,userInput);
    }else {
        console.log(solution + " est l'estimation corecte");
    }

}

console.log(estimation(solution,userInput));


