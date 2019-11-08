pragma solidity ^0.5.11;

contract VoterEtComptabiliser{
  int[] votePour;
  int[] voteContre;

  function voter(uint indice, bool value) public {
    if (value == true){
      votePour[indice] +=1;
    }else if(value == false){
      voteContre[indice] +=1;
    }

  }

  function comptabiliser(uint indice) public view returns (int){
    int resultat =  votePour[indice] - voteContre[indice];
    return resultat;

  }
}
