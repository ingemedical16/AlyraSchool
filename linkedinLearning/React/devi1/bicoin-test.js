const Client = require('bitcoin-core');
const client = new Client({ 
  network: 'regtest', 
  username: 'ingmedical16', 
  password: 'pass1234', 
  port: 28332 
});


client.getInfo().then((help) => console.log(help));