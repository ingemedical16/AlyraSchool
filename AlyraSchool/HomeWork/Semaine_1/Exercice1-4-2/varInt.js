// npm install varint@5.0.0
var varint = require('varint')

var bytes = varint.encode(50000) // === [0xAC, 0x02]
console.log(bytes)
console.log(varint.decode(bytes)) // 300
varint.decode.bytes // 2 (the last decode() call required 2 bytes)