function displaySuite(array){
    for (let i=0; i<array.length;i++){
        console.log(array[i])

    }
}


/*function drawSuiteEnhanced(array){
    for (let i=0; i<array.length;i++){
        out =">"
        if(i==0){
            for (let j=0; i<array[i];j++){
                out +="o"
            }
        }else{
            for (let k=0; i<array[i-1];k++){
                out +="0"
            }
            for (let l=0; i<array[i]-array[i-1];l++){
                out +="0"
            }

        }

        console.log(out)
    }

}*/
let s = [1, 3, ]
console.log(displaySuite(s))
