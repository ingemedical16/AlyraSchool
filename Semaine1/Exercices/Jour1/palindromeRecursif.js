function palindrome(mot) {
    if((mot.length == 0)|| (mot.length == 1)){
        return true
    } else {
        if (mot[0] == mot[mot.length-1]){    
        return palindrome(mot.substring(1,mot.length-1)) 
        }else
        return false
    }
    
}
function estPalindrome(chaine) {
    if (palindrome(chaine)){
        console.log(chaine, "est un palindrome") 
    }else {
        console.log(chaine, "n'est pas un palindrome") 
    }
     
    
}
estPalindrome("A")
estPalindrome("BOB") 
estPalindrome("ANNA") 
estPalindrome("ESOPE RESTE ICI ET SE REPOSE")