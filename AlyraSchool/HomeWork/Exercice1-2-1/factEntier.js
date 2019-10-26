let nombre = prompt("Entrez un entier naturel positif")
 
function factoriel(n) {
    if(n === 0) {
        return 1
    } else {
        res = 1;
        for(i = 2; i <= n; i++) {
            res *= i
        }
        return res
    }
}
console.log(num,"! = ", factoriel(nombre))