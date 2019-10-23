let crypto = require('crypto');
class ArbreDeMerkle {
    constructor(feuilles){
        this.feuilles = feuilles
        this.arbre= [[]]
        for (let f of feuilles) {
            //
            this.arbre[0].push(this.sha256(f));
        }
       //this.profondeurMax = Math.ceil(Math.log2(this.feuilles))
        for (let i = 0;  this.arbre[i].length >1; i++) {
            this.arbre[i+1]=[];
            for (let j=0;j<this.arbre[i].length; j+=2){

            }
            
            
        }
        
    }
    sha256(chaine){//sha2

        let buf =Buffer.from(chaine,'utf8');
        return crypto.createHash("sha256").update(buf).digest();
    }
    
    hachage(hashA,hashB){
        let concatention=[];
        if(hashB === undefined)
        concatention = hashB;
        concatention = Buffer.concat([hashA,hashB]);
        return crypto.createHash("sha256").update(concatention).digest();

    }
    afficher(){
        console.log(this.feuilles)
        console.log(this.arbre)
    }

    
}

erable = new ArbreDeMerkle(["AA","BB","CC","DD"])
erable.afficher();