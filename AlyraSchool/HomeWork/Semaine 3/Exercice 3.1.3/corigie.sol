
pragma solidity 0.5.12;

contract Assemblee {
    address[] public membres;
    string[] public descriptionDecisions;
    uint[] public votesPour;
    uint[] public votesContre;

    function rejoindre() public {
       membres.push(msg.sender);
    }

    function estMembre(address utilisateur) public view returns (bool) {
        /*
            Il faut parcourir le tableau d'address des membres
            et vérifier si l'adresse de l'utilisateur reseignée exite alors return true
            sinon false
        */
        for (uint i = 0; i < membres.length; i++) {
            if (membres[i] == utilisateur) {
                return true;
            }
        }
        return false;
    }

    function proposerDecision(string memory description) public {
        // Vérifier si le msg.sender (celui qui fait l'appel à la fonction) est un membre
       if(estMembre(msg.sender)){
           // Ajouter la description de la décision proposée
           descriptionDecisions.push(description);
           // Initialiser les votes de la décision proposée
           votesPour.push(0);
           votesContre.push(0);
       }
    }

    /*
    * La fonction voter permet de voter à une décision donnée
    * @param indice indice de la décision pour laquelle on vote
    * @param value  valeur du vote (true: pour et false: contre)
    */
    function voter(uint indice,bool value) public {
        // Vérifier si le msg.sender (celui qui fait l'appel à la fonction) est un membre
        if(estMembre(msg.sender)){
            // si value == true, on incrémente le nombre des votes pour
            if(value){
                votesPour[indice] ++;
            }else{
                // sinon, on incrémente le nombre des votes contre
                votesContre[indice]++;
            }
        }
    }

    /**
     * La fonction comptabiliser retourne pour une décision proposée la différence entre les votes pour et les votes contre.
     * Le résultat est un nombre positif si les votes sont plutôt pour et négatif si le vote est plutôt contre.
     */
    function comptabiliser(uint indice) public view returns (int){
          return int(votesPour[indice] - votesContre[indice]);
    }

}
