// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // holesky: {
    //   url: process.env.BLOCKCHAIN_RPC_URL || process.env.BLOCKCHAIN_RPC_URL,
    //   accounts:
    //     process.env.WALLET_PRIVATE_KEY !== undefined
    //       ? [process.env.WALLET_PRIVATE_KEY]
    //       : [],
    //   chainId: 17000,
    // },
  },
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    cache: "./cache",
    tests: "./test",
  },
};
