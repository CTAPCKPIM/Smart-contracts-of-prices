const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'HelperCRV' contract;
  const HelperCRV = await ethers.getContractFactory("HelperCRV");
  const helperCRV = await HelperCRV.deploy("0xD533a949740bb3306d119CC777fa900bA034cd52"); //address of the CRV token
  helperCRV.deployed();

  //deploy 'HelperWETH' contract;
  const HelperWETH = await ethers.getContractFactory("HelperWETH");
  const helperWETH = await HelperWETH.deploy("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"); //address of the WETH token
  helperWETH.deployed();

  //deploy 'HelperFARM' contract;
  const HelperFARM = await ethers.getContractFactory("HelperFARM");
  const helperFARM = await HelperFARM.deploy("0xa0246c9032bC3A600820415aE600c6388619A14D"); //address of the FARM token
  helperFARM.deployed();

  //address of contracts
  console.log("1) ", helperCRV.address);
  console.log("2) ", helperWETH.address);
  console.log("2) ", helperFARM.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
