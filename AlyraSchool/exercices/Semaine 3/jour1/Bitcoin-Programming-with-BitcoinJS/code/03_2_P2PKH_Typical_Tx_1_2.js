const bitcoin = require('bitcoinjs-lib')
const { alice, bob } = require('./wallets.json')
const network = bitcoin.networks.regtest

// Signer
const keyPairAlice1 = bitcoin.ECPair.fromWIF(alice[1].wif, network)

// Change address
const keyPairAlice2 = bitcoin.ECPair.fromWIF(alice[2].wif, network)
const p2pkhAlice2 = bitcoin.payments.p2pkh({pubkey: keyPairAlice2.publicKey, network})

// Recipient
const keyPairBob1 = bitcoin.ECPair.fromWIF(bob[1].wif, network)
const p2pkhBob1 = bitcoin.payments.p2pkh({pubkey: keyPairBob1.publicKey, network})

const txb = new bitcoin.TransactionBuilder(network)
txb.addInput('562264f432f57a604a864248030bdfa400c074ead9a8ce0633a31927266c4726', 0)
txb.addOutput(p2pkhBob1.address, 5e7) // the actual "spend"
txb.addOutput(p2pkhAlice2.address, 499e5) // Alice's change

txb.sign(0, keyPairAlice1)

const tx = txb.build()
console.log('tx.toHex()  ', tx.toHex())