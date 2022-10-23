const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'Helper' contract with 'WAVAX' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperWAVAX = await Helper.deploy("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "WAVAX"); // address of the WAVAX
  await helperWAVAX.deployed();

  //deploy 'Helper' contract with 'SPELL' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperSPELL = await Helper.deploy("0xCE1bFFBD5374Dac86a2893119683F4911a2F7814", "SPELL"); // address of the SPELL
  await helperSPELL.deployed();

  //deploy 'Helper' contract with 'PTP' token;
  var Helper = await ethers.getContractFactory("Helper");
  const helperPTP = await Helper.deploy("0x22d4002028f537599bE9f666d1c4Fa138522f9c8", "PTP"); // address of the PTP
  await helperPTP.deployed();

  //address of contracts
  console.log("1) ", helperWAVAX.address);
  console.log("2) ", helperSPELL.address);
  console.log("3) ", helperPTP.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
