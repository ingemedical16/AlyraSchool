function conversion(number){
    let entree= number;

    if (number < 0)
  {
    number = (0xFFFFFFFF + number + 1).toUpperCase();
  }else {
      number = (number.toString(16)).toUpperCase();
  }
  console.log(number);

  let sizeNr = number.length;
    if(sizeNr % 2 == 0){
        number=number.match(/../g);
    }else{
        number= "0"+number
        number=number.match(/../g); 
    }
console.log(number);
    let BE = LE = "0x "

for (let i=0;i<number.length;i++){
    BE = BE + number[i] + " ";
    LE = LE + number[number.length-(i+1)] + " ";
}

return (entree +"  : => "+ BE + " conversion big endian \n" + "\t: => "+ LE +" conversion little endian");


  

}

 
console.log(conversion(466321));
console.log(conversion(5466321));
console.log(conversion(4661));
