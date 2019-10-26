const Client = require('bitcoin-core');
const client = new Client({ 
  network: 'regtest', 
  username: 'user', 
  password: 'PASSWORD', 
  port: 18443 
});

console.log(client.command('help'))