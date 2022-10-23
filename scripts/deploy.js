const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy first 'Helper' contract with 'CRV' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperCRV = await Helper.deploy("0xD533a949740bb3306d119CC777fa900bA034cd52", "CRV"); //address of the CRV token
  await helperCRV.deployed();

  //deploy second 'HelperWETH' contract with 'WETH' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperWETH = await Helper.deploy("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "WETH"); //address of the WETH token
  await helperWETH.deployed();

  //deploy third 'Helper' contract with 'FARM' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperFARM = await Helper.deploy("0xa0246c9032bC3A600820415aE600c6388619A14D", "FARM"); //address of the FARM token
  await helperFARM.deployed();

  //address of contracts
  console.log("1) ", helperCRV.address);
  console.log("2) ", helperWETH.address);
  console.log("3) ", helperFARM.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
