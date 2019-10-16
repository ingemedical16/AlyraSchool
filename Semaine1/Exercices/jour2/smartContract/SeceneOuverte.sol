//0x11DE4A4B35Ef97B958EA70aC790c4DFe0d8BfF46
pragma solidity ^0.5.11;


contract SeceneOuverte {
    string[12] passagesArtistes;
    uint creneauxLibres = 12;
    uint tour;
   
    function sInscrire(string memory _nomDArtiste) public { 
        if (creneauxLibres > 0) { 
            passagesArtistes[12-creneauxLibres] = _nomDArtiste;
            creneauxLibres = creneauxLibres-1;
        }
    }

    function passerArtisteSuivant() public {
        tour += 1;
    }

    function getTour() public view returns (uint) {
        return tour;
    }

    function artisteEncoure() public view returns (string memory) {
        return passagesArtistes[tour-1];
    }

    function artisteSuivante() public view returns (string memory) {

        return passagesArtistes[tour-1];
    }
}