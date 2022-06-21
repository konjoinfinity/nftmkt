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
      accounts: ["12ad0d85aa74706f112de41bacdbee926da90ddd405d84d0ddac2e31f7ab5e43"] // your wallet private key
    },
    //polygon mainnet
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: ["12ad0d85aa74706f112de41bacdbee926da90ddd405d84d0ddac2e31f7ab5e43"]
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