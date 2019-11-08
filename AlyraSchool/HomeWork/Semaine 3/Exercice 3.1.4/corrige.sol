pragma solidity 0.5.12;

contract Assemblee {

    // Structure Decision
    struct Decision {
        string description; // description de la décision
        uint votesPour; // nombre des votres pour
        uint votesContre; // nombre des votes contre
        mapping (address => bool) aVote; // mapping sur les address qui ont voté ou pas
        uint dateFin; // la date fin d'un vote
    }

    mapping (address => bool) public membres; // mapping des membres
    Decision[] public decisions; // tableau des décisions


    /*
    *   rejoindre permet à un untilisateur de rejoindre l'assemblée
    */
    function rejoindre() public {
        require(!membres[msg.sender], "Vous êtes déjà membre !");
        membres[msg.sender] = true;
    }

    function proposerDecision(string memory description) public {
        // Vérifier si le msg.sender (celui qui fait l'appel à la fonction) est un membre
        require(membres[msg.sender], "L'utilisateur n'est pas un membre !");
        // Initialiser une décision et l'ajouter au tableau
        decisions.push(Decision(description, 0, 0, now + 7 days));
    }

    /*
    * La fonction voter permet de voter à une décision donnée
    * @param indice indice de la décision pour laquelle on vote
    * @param value  valeur du vote (true: pour et false: contre)
    */
    function voter(uint indice, bool value) public {
        // Vérifier si l'indice indiqué est correcte
        require(indice < decisions.length && indice >= 0, "Vérifiez l'indice indiqué !");
        // Vérifier si le msg.sender (celui qui fait l'appel à la fonction) est un membre
        require(membres[msg.sender], "L'utilisateur n'est pas un membre !");
        // Vérifier si l'utilisateur a déjà voté
        require(!decisions[indice].aVote[msg.sender], "L'utilisateur a déjà voté !");
        // Vérifier si le vote n'est pas terminé
        require(decisions[indice].dateFin > now, "Le vote pour cette décision est terminé !");
        // Mettre à jour le mapping du vote
        decisions[indice].aVote[msg.sender] = true;
        // si value == true, on incrémente le nombre des votes pour
        if(value){
            decisions[indice].votesPour++;
        }else{
            // sinon, on incrémente le nombre des votes contre
            decisions[indice].votesContre++;
        }
    }

    /**
     * La fonction comptabiliser retourne pour une décision proposée la différence entre les votes pour et les votes contre.
     * Le résultat est un nombre positif si les votes sont plutôt pour et négatif si le vote est plutôt contre.
     */
    function comptabiliser(uint indice) public view returns (int){
          return int(decisions[indice].votesPour - decisions[indice].votesContre);
    }

}
