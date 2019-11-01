function isHex(newInput) {
    var a = parseInt(newInput, 16);
    return (a.toString(16) === newInput)
}


console.log(isHex('1233f'))
console.log(isHex(1233))
console.log(isHex('1233ffghj'))