const path = require("path");

module.exports = {
  networks: {
      development: {
        host: '127.0.0.1',
        port: 9545,
        network_id: '*' // Match any network id
      },
      ropsten:  {
          network_id: 3,
          host: "127.0.0.1",
          port:  8545,
          gas:   290000000
     
     }
  },
  contracts_build_directory: path.join(__dirname, "client/src/contracts")
};