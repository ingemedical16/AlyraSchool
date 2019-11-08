pragma solidity ^0.5.11;

contract ControleDesVotes{
  address[] public membres;
  mapping(address => bool) private _dejavote;
  string[] public descriptionDecisions;
  uint[] public votesPour;
  uint[] public votesContre;
  uint256 private _biddingTime = 604800;
  uint256[] private dely;
  bool[]  public decision;
  event Decision(string indexed descriptionDecisions, bool indexed decision);

  function ajouterMembres() public {
    require(!estMembre(msg.sender),"Vous etez deja membre!");
     membres.push(msg.sender);
     _dejavote[msg.sender]= false;
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
         dely.push(_startVoter());
     }
  }

  /*
  * La fonction voter permet de voter à une décision donnée
  * @param indice indice de la décision pour laquelle on vote
  * @param value  valeur du vote (true: pour et false: contre)
  */
  function voter(uint indice,bool value) public {
      // Vérifier si le msg.sender (celui qui fait l'appel à la fonction) est un membre
      if(estMembre(msg.sender) && _dejavote[msg.sender]== false){
        _dejavote[msg.sender]= true;
          // si value == true, on incrémente le nombre des votes pour
          if(value){
              votesPour[indice] ++;
          }else{
              // sinon, on incrémente le nombre des votes contre
              votesContre[indice]++;
          }
      }
  }
  function _startVoter() internal returns (uint256){
    uint256 dely = now + _biddingTime;
    return dely;
  }
  function _stopVoter(uint indice) internal returns(bool){
    if (dely[indice]>= now){
      int result = comptabiliser(indice);
      if (result > 0){
        decision[indice] = true;
      }else{
        decision[indice] = false;
      }

      return true;
      emit Decision(descriptionDecisions[indice],decision[indice]);
    }else{
      return false;
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
