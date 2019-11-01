const Client = require('bitcoin-core');

const batch = [
    { method: 'foobar', parameters: [] },
    { method: 'getnewaddress', parameters: [] }
  ]
  
  new Client().command(batch).then(([address, error]) => console.log(address, error));
  // => `mkteeBFmGkraJaWN5WzqHCjmbQWVrPo5X3, { [RpcError: Method not found] message: 'Method not found', name: 'RpcError', code: -32601 }