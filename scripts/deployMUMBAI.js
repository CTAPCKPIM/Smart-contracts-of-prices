const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'Helper' contract with 'QUICK' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperQUICK = await Helper.deploy("0x831753DD7087CaC61aB5644b308642cc1c33Dc13", "QUICK"); // address of the QUICK
  await helperQUICK.deployed();

  //deploy 'Helper' contract with 'ORBS' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperORBS = await Helper.deploy("0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff", "ORBS"); // address of the ORBS
  await helperORBS.deployed();

  //deploy 'Helper' contract with 'WMATIC' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperWMATIC = await Helper.deploy("0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "WMATIC"); // address of the WMATIC
  await helperWMATIC.deployed();

  //address of contracts
  console.log("1) ", helperQUICK.address);
  console.log("2) ", helperORBS.address);
  console.log("3) ", helperWMATIC.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
