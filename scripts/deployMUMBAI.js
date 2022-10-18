const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'HelperQUICK' contract;
  const HelperQUICK = await ethers.getContractFactory("HelperQUICK");
  const helperQUICK = await HelperQUICK.deploy("0x831753DD7087CaC61aB5644b308642cc1c33Dc13"); // address of the QUICK
  await helperQUICK.deployed();

  //deploy 'HelperORBS' contract;
  const HelperORBS = await ethers.getContractFactory("HelperORBS");
  const helperORBS = await HelperORBS.deploy("0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff"); // address of the ORBS
  await helperORBS.deployed();

  //deploy 'HelperWMATIC' contract;
  const HelperWMATIC = await ethers.getContractFactory("HelperWMATIC");
  const helperWMATIC = await HelperWMATIC.deploy("0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"); // address of the WMATIC
  await helperWMATIC.deployed();

  //address of contracts
  console.log("1) ", helperQUICK.address);
  console.log("2) ", helperORBS.address);
  console.log("2) ", helperWMATIC.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
