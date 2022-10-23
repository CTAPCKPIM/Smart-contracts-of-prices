const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'Helper' contract with 'BNB' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperBNB = await Helper.deploy("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "BNB"); // address of the WAVAX
  await helperBNB.deployed();

  //deploy 'Helper' contract with 'CAKE' token;
  var HelperCAKE = await ethers.getContractFactory("Helper");
  const helperCAKE = await HelperCAKE.deploy("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "CAKE"); // address of the SPELL
  await helperCAKE.deployed();

  //deploy 'Helper' contract with 'STG' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperSTG = await Helper.deploy("0xB0D502E938ed5f4df2E681fE6E419ff29631d62b", "STG"); // address of the PTP
  await helperSTG.deployed();

  //address of contracts
  console.log("1) ", helperBNB.address);
  console.log("2) ", helperCAKE.address);
  console.log("3) ", helperSTG.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
