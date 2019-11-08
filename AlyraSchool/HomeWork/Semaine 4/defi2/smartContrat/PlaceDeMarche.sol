pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;


contract PlaceDeMarche {

  enum Etat {OUVERTE,ENCOURS,FERMEE};
  mapping (address => uint256)  reputation;
  mapping (address => string)  name;
  mapping (address => bool)  addressBannies; // address bannies true adress bannies false
  struct Demande {
    uint256 remuneration;
    uint256 delai;
    string description;
    Etat etatDemande;
    uint256 minReputation;
    address[] candidats;
}

}

/**Définir une structure de données pour chaque demande qui comprend:

La rémunération (en wei)

Le délai à compter de l’acceptation (en secondes)

Une description de la tâche à mener (champ texte)

L’état de la demande : OUVERTE, ENCOURS, FERMEE

[Aide: Penser aux énumérations enum Choix { A, B, C }]

Définir une réputation minimum pour pouvoir postuler

Une liste de candidats**/
