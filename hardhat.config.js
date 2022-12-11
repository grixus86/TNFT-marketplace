require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString() 
const projectId = "0bf0a0337ec7428d856dad923ec16f91"


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://mainnet.infura.io/v3/${projectId}',
      accounts : [privateKey]
    },
    mainnet: {
      url: 'https://ropsten.infura.io/v3/${projectId}',
      accounts : [privateKey]
    },
  },
  solidity: "0.8.4",
};
