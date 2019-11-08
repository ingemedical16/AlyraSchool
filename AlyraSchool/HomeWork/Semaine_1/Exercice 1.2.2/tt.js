class Transaction {

    constructor(taile, fee) {
       this.transaction = [taile,fee,fee/taile];
    }
}

class BlockTr {

    constructor(taileBlocMax) {
        this.maxtaile = taileBlocMax;
        this.blockTaile = 0;
        this.blockFee = 0;
        this.blockTransactions = [[]]
    }

    ajouterTransaction(taile, fee) {
        
        if (taile >= this.maxtaile) {
            console.log("this transaction a une Taile tres grands");
            return false
        } else 
        
        {
            var newTransaction = new Transaction(taile, fee);
            if (this.blockTransactions.length === 1) {
                this.blockTransactions = newTransaction.transaction;
                this.blockTaile = newTransaction.transaction[0];
                this.blockFee = newTransaction.transaction[1];
            } else {

                if (this.blockTaile < this.maxtaile) {

                    this.blockTaile = this.blockTaile + newTransaction.transaction[0]
                    this.blockFee = this.blockFee + newTransaction.transaction[1];
                    this.blockTransactions.push(newTransaction.transaction);

                    for (var i = 0; i < this.blockTransactions.length; i++) {
                        
                        if (( this.blockTransactions[i][2]< this.blockTransactions[i + 1])[2]) {
                            var x = this.blockTransactions[i];
                            this.blockTransactions[i] = this.blockTransactions[i + 1];
                            this.blockTransactions[i + 1] = x;

                        }
                    }
                }else 
                {
                    var len = this.blockTransactions.length
                    if (newTransaction.transaction[2] >this.blockTransactions[len-1][2]){
                        var test = this.blockTaile - this.blockTransactions[len-1][2] + newTransaction.transaction[2];
                        if (test<this.maxtaile){
                            reponse = prompt(" la block est en taile maximal tu veut remplace la transaction:\n " +this.blockTransactions[len-i] + "\n oui ou non [y/n]");
                            if (reponse === y){
                                this.blockTransactions.pop();
                                this.blockTransactions.push(newTransaction.transaction);
                                for (var i = 0; i < this.blockTransactions.length; i++) {
                        
                                    if (( this.blockTransactions[i][2]< this.blockTransactions[i + 1])[2]) {
                                        var x = this.blockTransactions[i];
                                        this.blockTransactions[i] = this.blockTransactions[i + 1];
                                        this.blockTransactions[i + 1] = x;
            
                                    }
                                }

                            }else{ console.log("pas de changment au block")}
                        }
                    }

                }

            }

        }
        return "liste de transaction: \n" + this.blockTransactions+ "\n la taile de block: " +
         this.blockTaile + "\n total Pourboire (satoshis) : " + this.blockFee
    }
}


var block = new BlockTr(6000);

// ===================== les transaction==============
// Taille (octets):          2000    6000    800     700     1200    1000    1300     60
//
// Pourboire (satoshis):    13000    9000   2000    1500     3500    2800    5000   1500

console.log(block.ajouterTransaction(2000,13000));
console.log(block.ajouterTransaction(6000,9000));
console.log(block.ajouterTransaction(800,2000));
console.log(block.ajouterTransaction(700,1500));
console.log(block.ajouterTransaction(1200,3500));
console.log(block.ajouterTransaction(1000,2800));
console.log(block.ajouterTransaction(1300,5000));
console.log(block.ajouterTransaction(60,1500));

console.log(block)