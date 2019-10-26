function conversionHexToDecimal(entre)
{

 dec= parseInt(entre,16);
    return dec;

}
function conversionDecimalToHex(decimal){
    let hex = decimal;

    if (hex < 0)
  {
    hex = (0xFFFFFFFF + hex + 1).toUpperCase();
  }else {
      hex = (hex.toString(16)).toUpperCase();
  }
  return hex;
}





console.log(conversionHexToDecimal("C921"));
console.log(conversionDecimalToHex(495));