/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const KEY = process.env.SECRET_KEY;
// Providers
const ETH_PROV = process.env.ETH_PROV_API;
const FTM_PROV = process.env.FTM_PROV_API;
const MUM_PROV = process.env.MUM_PROV_API;
const AVAX_PROV = process.env.AVAX_PROV_API;
const BSC_PROV = process.env.BSC_;
// Keys of scans
const ETHERSCAN = process.env.ETHERSCAN_API_KEY;
const FTMSCAN = process.env.FTMSCAN_API_KEY;
const MUMBAI = process.env.MUMBAI_API_KEY;
const AVAX = process.env.AVAX_API_KEY;
const BSC = process.env.BSC_API_KEY;

module.exports = {
  solidity: "0.8.1",

  networks: {
    mainnet: {
      url: ETH_PROV,
      accounts: [KEY],
    },
    ftmTestnet: {
      url: FTM_PROV,
      accounts: [KEY],
    },
    polygonMumbai: {
      url: MUM_PROV,
      accounts: [KEY],
    },
    avalancheFujiTestnet: {
      url: AVAX_PROV,
      accounts: [KEY],
    },
    bscTestnet: {
      url: BSC_PROV,
      accounts: [KEY],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN,
      ftmTestnet: FTMSCAN,
      polygonMumbai: MUMBAI,
      avalancheFujiTestnet: AVAX,
      bscTestnet: BSC,
    },
  },
};
