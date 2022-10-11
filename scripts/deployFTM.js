const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'HelperSPIRIT' contract;
  const HelperSPIRIT = await ethers.getContractFactory("HelperSPIRIT");
  const helperSPIRIT = await HelperSPIRIT.deploy("'0x5cc61a78f164885776aa610fb0fe1257df78e59b'"); // address of the SPIRIT
  await helperSPIRIT.deployed();

  //deploy 'HelperWFTM' contract;
  const HelperWFTM = await ethers.getContractFactory("HelperWFTM");
  const helperWFTM = await HelperWFTM.deploy("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83"); // address of the WFTM
  await helperWFTM.deployed();

  //deploy 'HelperYFI' contract;
  const HelperYFI = await ethers.getContractFactory("HelperYFI");
  const helperYFI = await HelperYFI.deploy("0x29b0da86e484e1c0029b56e817912d778ac0ec69"); // address of the YFI
  await helperYFI.deployed();

  //address of contracts
  console.log("1) ", helperSPIRIT.address);
  console.log("2) ", helperWFTM.address);
  console.log("2) ", helperYFI.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
