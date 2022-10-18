const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'HelperBNB' contract;
  const HelperBNB = await ethers.getContractFactory("HelperBNB");
  const helperBNB = await HelperBNB.deploy("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"); // address of the WAVAX
  await helperBNB.deployed();

  //deploy 'HelperCAKE' contract;
  const HelperCAKE = await ethers.getContractFactory("HelperCAKE");
  const helperCAKE = await HelperCAKE.deploy("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"); // address of the SPELL
  await helperCAKE.deployed();

  //deploy 'HelperSTG' contract;
  const HelperSTG = await ethers.getContractFactory("HelperSTG");
  const helperSTG = await HelperSTG.deploy("0xB0D502E938ed5f4df2E681fE6E419ff29631d62b"); // address of the PTP
  await helperSTG.deployed();

  //address of contracts
  console.log("1) ", helperBNB.address);
  console.log("2) ", helperCAKE.address);
  console.log("2) ", helperSTG.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
