require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // polygon testnet
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.privateKey] // your wallet private key
    },
    //polygon mainnet
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};