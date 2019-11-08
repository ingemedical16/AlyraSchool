pragma solidity ^0.5.11;

contract Membres {
  address[]  membres;

  function estMembre(address utilisateur) public view returns (bool) {
    //...
     for (uint i=0; i<membres.length; i=i+1) {
        require(membres[i] == utilisateur);
        return true;
     }

    }
}
