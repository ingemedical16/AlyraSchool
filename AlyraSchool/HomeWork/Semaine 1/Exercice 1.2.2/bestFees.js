class Transaction {

    constructor() {
       this.randFee = this.fee/this.taile
       this.transaction = [
           this.taile,
           this.fee,
           this.randFee
       ];
       
    }

    _ajoute(taile,fee){

        if(taile <= this.maxtaile || taile !== 0){
          
            this.taile= taile;
            this.fee = fee
            return this.transaction;
        }else {
            console.log("cette transaction a une gande taile");
            return false;
        }
    }

}

class BlockTr {

    constructor(taileBlocMax) {
        this.maxtaile = taileBlocMax;
        this.allTransactions;
        this.blockTaile = 0;
        this.blockFee = 0;
        this.blockTransactions = [[]]
    }

     

    ajouteTransaction(taile,fee){
        var s=new Transaction()
        var transa = s._ajoute(taile,fee);
        console.log(transa);

        if(transa && this.blockTaile + transa[0] <= this.maxtaile ){
            this.allTransactions.push(transa)
            this.blockTaile = this.blockTaile + transa[0]
        }


    }
    arangeTransaction(){

    }
}

block = new BlockTr(6000);
block.ajouteTransaction(2000,13000)
console.log(block)

console.log(block.blockTaile);