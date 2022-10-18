const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  //deploy 'HelperWAVAX' contract;
  const HelperWAVAX = await ethers.getContractFactory("HelperWAVAX");
  const helperWAVAX = await HelperWAVAX.deploy("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"); // address of the WAVAX
  await helperWAVAX.deployed();

  //deploy 'HelperSPELL' contract;
  const HelperSPELL = await ethers.getContractFactory("HelperSPELL");
  const helperSPELL = await HelperSPELL.deploy("0xCE1bFFBD5374Dac86a2893119683F4911a2F7814"); // address of the SPELL
  await helperSPELL.deployed();

  //deploy 'HelperPTP' contract;
  const HelperPTP = await ethers.getContractFactory("HelperPTP");
  const helperPTP = await HelperPTP.deploy("0x22d4002028f537599bE9f666d1c4Fa138522f9c8"); // address of the PTP
  await helperPTP.deployed();

  //address of contracts
  console.log("1) ", helperWAVAX.address);
  console.log("2) ", helperSPELL.address);
  console.log("2) ", helperPTP.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
