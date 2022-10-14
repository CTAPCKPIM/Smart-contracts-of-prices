/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const KEY = process.env.SECRET_KEY;
const ETHERSCAN = process.env.ETHERSCAN_API_KEY;
const FTMSCAN = process.env.FTMSCAN_API_KEY;

module.exports = {
  solidity: "0.8.1",

  networks: {
    mainnet: {
      url: "https://goerli.infura.io/v3/ded5ffb90fc547529254973ad8341755",
      accounts: [KEY],
    },
     ftmTestnet: {
      url: "https://fantom-testnet.blastapi.io/54420425-7b5d-4ff9-85b2-456a574bd98c",
      accounts: [KEY],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN,
       ftmTestnet: FTMSCAN,
    }
  }
};
