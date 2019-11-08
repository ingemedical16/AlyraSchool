pragma solidity ^0.5.12;

contract Administrateurs {
  mapping (address => bool) private _admins;//mapping les admins
  mapping (address => bool) public membres; // mapping des membres
  mapping (address => int) private _blame;
  struct Decision {
      string description; // description de la décision
      bool statue;
  }
 Decision[] public decisions; // tableau des décisions

  constructor() public {
    _admins[msg.sender] = true;
    membres[msg.sender] = true;
  }



  function ajouterMembres() public {
    require(!membres[msg.sender], "Vous êtes déjà membre !");
    membres[msg.sender] = true;
  }




 function setAdmin(address newAdmin) public {
  require(_admins[msg.sender], "Vous êtes pas un Admin!");

  if(membres[newAdmin]){
    _admins[newAdmin]=true;
  }else{
    membres[newAdmin]=true;
    _admins[newAdmin]=true;
  }
}

 function demissionner() public {
  require(_admins[msg.sender],"Vous êtes pas un Admin!");
  _admins[msg.sender] = false;

}
 function proposerDecision(string memory description) public {
    // Vérifier si le msg.sender (celui qui fait l'appel à la fonction) est un membre
    require(membres[msg.sender], "L'utilisateur n'est pas un membre !");
    // Initialiser une décision et l'ajouter au tableau
    decisions.push(Decision(description, false));
}

function setDecision(uint indice, bool decision) public {
  require(_admins[msg.sender],"Vous êtes pas un Admin!");
  if(decision){
    decisions[indice].statue = true;
  }else{
    delete decisions[indice];
  }
}
  function blameMembers(address membre) public {
    require(_admins[msg.sender],"Vous êtes pas un Admin!");
    require(membres[membre], "Vous êtes déjà expulsé !");
    _blame[membre] +=1;
    if(_blame[membre]>1){
      membres[membre] = false;
    }

  }
}
/**
Celui qui déploie le smart contract est le premier administrateur.

Il peut nommer un administrateur

Un administrateur peut démissionner

Une proposition de décision peut être fermée par un administrateur

(optionnel) Un administrateur peut donner un blâme à un membre. Au deuxième blâme,
celui-ci est expulsé.

(Optionnel) Pour transformer notre assemblée en démocratie, les administrateurs
sont élus par une décision. Modifiez la structure Décision pour prendre en compte ce cas.
**/
