function conversion(number){
    let entree= number;

    if (number < 0)
  {
    number = (0xFFFFFFFF + number + 1).toUpperCase();
  }else {
      number = (number.toString(16)).toUpperCase();
  }

  let sizeNr = number.length;
    if(sizeNr % 2 == 0){
        number=number.match(/../g);
    }else{
        number= "0"+number
        number=number.match(/../g); 
    }

    let BE = LE = "0x "
    let varInt = "0x FE "

for (let i=0;i<number.length;i++){
    BE = BE + number[i] + " ";
    LE = LE + number[number.length-(i+1)] + " ";
}
varInt = varInt + LE + " 00";
return (entree +"  : => "+ BE + " conversion big endian \n" + "\t: => "+ LE +
" conversion little endian\n"+ "\t: => "+ varInt + " notation variable");


  

}

 
console.log(conversion(466321));
console.log(conversion(5466321));
console.log(conversion(4661));
