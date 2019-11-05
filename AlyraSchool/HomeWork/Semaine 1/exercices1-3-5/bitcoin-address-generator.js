const Bitcoin = require('bitcoin-address-generator');
 
Bitcoin.createWalletAddress(response => {
    console.log(response);
});