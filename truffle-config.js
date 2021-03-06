const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = `${}`;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 5777
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${INFURA_ID}`);
      },
      network_id: 4,
      gas: 29970000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
