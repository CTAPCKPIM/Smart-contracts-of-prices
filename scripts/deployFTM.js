const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'Helper' contract with 'SPIRIT' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperSPIRIT = await Helper.deploy("0x5cc61a78f164885776aa610fb0fe1257df78e59b", "SPIRIT"); // address of the SPIRIT
  await helperSPIRIT.deployed();

  //deploy 'Helper' contract with 'WFTM' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperWFTM = await Helper.deploy("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83", "WFTM"); // address of the WFTM
  await helperWFTM.deployed();

  //deploy 'Helper' contract with 'YFI' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperYFI = await Helper.deploy("0x29b0da86e484e1c0029b56e817912d778ac0ec69", "YFI"); // address of the YFI
  await helperYFI.deployed();

  //address of contracts
  console.log("1) ", helperSPIRIT.address);
  console.log("2) ", helperWFTM.address);
  console.log("3) ", helperYFI.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
