<script>




class Converteur {

    constructor() {
        this.decimal = '';
        this.hex = '';
        this.binary = ''
        this.BE = '0x';
        this.LE = '0x';
        this.varInt = '';
        this.message = '';
        this.hexLen = 0;
    }

    verify(newInput, strUser) {


        switch (strUser) {
            case '1':
                {
                    if (this.isBin(newInput)) {
                        this.binary = newInput;
                        this.decimal = this.convert.bin2dec(newInput);
                        this.hex = this.convert.bin2hex(newInput);
                        this.hexLen = this.hex.length;
                        var beLe = this.beAndLeNumbre(this.convert.bin2hex(newInput));
                        this.BE = beLe[0];
                        this.LE = beLe[1]
                        this.message = " Binary: " + this.binary + " Decimal: " + this.decimal + " Hex: " + this.hex;
                    } else { this.message = " Attention l'entre ne pas un numbre binaire!" }

                    return [this.decimal, this.hex, this.BE, this.LE, this.message, this.binary]
                    break;
                }

            case '2': {

                if (this.isNumeric(newInput)) {
                    this.binary = this.convert.dec2bin(newInput);
                    this.decimal = newInput;
                    this.hex = this.convert.dec2hex(newInput);
                    this.hexLen = this.hex.length;
                    var beLe = this.beAndLeNumbre(this.convert.dec2hex(newInput));
                    this.BE = beLe[0];
                    this.LE = beLe[1]
                    this.message = " Binary: " + this.binary + " Decimal: " + this.decimal + " Hex: " + this.hex;
                } else { this.message = " Attention l'entre ne pas un numbre decimal!" }

                return [this.decimal, this.hex, this.BE, this.LE, this.message, this.binary]
                break
            }

            case '3': {

                if (this.isHex(newInput)) {
                    this.binary = this.convert.hex2bin(newInput);
                    this.decimal = this.convert.hex2dec(newInput);
                    this.hex = newInput;
                    this.hexLen = this.hex.length;
                    var beLe = this.beAndLeNumbre(newInput);
                    this.BE = beLe[0];
                    this.LE = beLe[1]
                    this.message = " Binary: " + this.binary + " Decimal: " + this.decimal + " Hex: " + this.hex;
                } else {

                    this.message = " Attention l'entre ne pas un numbre Hexdicimal!";

                }
                console.log([this.decimal, this.hex, this.BE, this.LE, this.message, this.binary])
                return [this.decimal, this.hex, this.BE, this.LE, this.message, this.binary]

                break;
            }
            
        }





    }

    beAndLeNumbre(hex) {
        var beNumbre = '0x '
        var leNumbre = '0x '
        if (hex !== '') {
            var number = hex;
            if (number.length % 2 === 0) {
                number = number.match(/../g);
            } else {
                number = "0" + number
                number = number.match(/../g);
            }

            for (let i = 0; i < number.length; i++) {
                beNumbre = beNumbre  + number[i] + " ";
                leNumbre = leNumbre + number[number.length - (i + 1)] + " ";
            }

        }

        return [beNumbre, leNumbre]


    }

    isHex(newInput) {
        var a = parseInt(newInput, 16);
        return (a.toString(16) === newInput)
    }

    isNumeric(newInput) {
        var RE = /^-{0,1}\d*\.{0,1}\d+$/;
        return (RE.test(newInput));
    }

    isBin(testValue) {
        var test = testValue
        return (test.search(/^[10]+$/) != -1)


    }

    convert = {
        bin2dec: s => parseInt(s, 2).toString(10),
        bin2hex: s => parseInt(s, 2).toString(16),
        dec2bin: s => parseInt(s, 10).toString(2),
        dec2hex: s => parseInt(s, 10).toString(16),
        hex2bin: s => parseInt(s, 16).toString(2),
        hex2dec: s => parseInt(s, 16).toString(10)
    };
}





var decimal = document.getElementById('decNumbre');
var hex = document.getElementById('hexNumbre');
var BE = document.getElementById('beNumbre');
var LE = document.getElementById('leNumbre');
var message = document.getElementById('alertMessage');
var newInput = document.getElementById('newInput');
var bin = document.getElementById('binNumbre');
var e = document.getElementById("ddlViewBy");



newInput.addEventListener("input", function (event) {

    var strUser = e.options[e.selectedIndex].value;
    var input = document.getElementById('newInput').value
    var c = new Converteur();
    console.log(input);
    var result = c.verify(input, strUser);
    message.innerHTML = result[4];
    hex.innerHTML = result[1];
    decimal.innerHTML = result[0];
    BE.innerHTML = result[2];
    LE.innerHTML = result[3];
    bin.innerHTML = result[5]

    event.preventDefault();

}, false);





</script>