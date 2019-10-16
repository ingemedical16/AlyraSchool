/*Les lapins de Fibonacci

* Au premier mois, il y a une paire de lapins ;
* Les lapins ne procréent qu'à partir du troisième mois
* Chaque mois, toute paire susceptible de procréer engendre effectivement
* une nouvelle paire de lapereaux
* Les lapins ne meurent jamais
*/


function fibonacci(n){
    let lapins = []
    for (let i=0; i<n;i++){
        if(i==0 || i==1){
            lapins[i]=1

        }else {
            lapins[i]=lapins[i-1] + lapins[i-2]
        }
    }
    
    return lapins
}



console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))
