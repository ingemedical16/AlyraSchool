const bitcoin = require('bitcoinjs-lib')
const { alice, bob } = require('./wallets.json')
const network = bitcoin.networks.regtest

// Signer
const keyPairAlice1 = bitcoin.ECPair.fromWIF(alice[1].wif, network)

// Recipient
const keyPairBob1 = bitcoin.ECPair.fromWIF(bob[1].wif, network)
const p2pkhBob1 = bitcoin.payments.p2pkh({pubkey: keyPairBob1.publicKey, network})

const txb = new bitcoin.TransactionBuilder(network)
txb.addInput('1cf4c20d5f1500d83a5c47332f7dd9f0b67f26085804427d538a647611fad57e', 0)
txb.addOutput(p2pkhBob1.address, 999e5)

txb.sign(0, keyPairAlice1)

const tx = txb.build()
console.log('tx.toHex()  ', tx.toHex())