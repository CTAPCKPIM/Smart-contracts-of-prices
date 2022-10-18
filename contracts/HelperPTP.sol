//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @author by CTAPCKPIM
 * @title Helper for monitoring the price of 'PTP' token.
 * @notice Accepts and sets the value of the token in 'USD' through the script.
 */
contract HelperPTP {
    /**
     * All variables:
     *  {priceUSD} - price of the token;
     *  {addrPTP} - address of the token;
     */
    uint256 public priceUSD;
    address public addrPTP;

    //@dev Setting an address of the 'PTP' token in deploy;
    constructor(address _addrPTP) {
        addrPTP = _addrPTP;
    }

    //@dev Setting the price;
    function setPriceInUSD(uint256 _priceUSD) public {
        priceUSD = _priceUSD;
    }

    //@return `symbol` of the token;
    function returnSymbol() public view returns (string memory) {
        return IERC20Metadata(addrPTP).symbol();
    }

    //@return `name` of the token;
    function returnName() public view returns (string memory) {
        return IERC20Metadata(addrPTP).name();
    }
}
