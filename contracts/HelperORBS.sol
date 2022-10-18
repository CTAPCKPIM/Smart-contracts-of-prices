//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @author by CTAPCKPIM
 * @title Helper for monitoring the price of 'ORBS' token.
 * @notice Accepts and sets the value of the token in 'USD' through the script.
 */
contract HelperORBS {
    /**
     * All variables:
     *  {priceUSD} - price of the token;
     *  {addrORBS} - address of the token;
     */
    uint256 public priceUSD;
    address public addrORBS;

    //@dev Setting an address of the 'ORBS' token in deploy;
    constructor(address _addrORBS) {
        addrORBS = _addrORBS;
    }

    //@dev Setting the price;
    function setPriceInUSD(uint256 _priceUSD) public {
        priceUSD = _priceUSD;
    }

    //@return `symbol` of the token;
    function returnSymbol() public view returns (string memory) {
        return IERC20Metadata(addrORBS).symbol();
    }

    //@return `name` of the token;
    function returnName() public view returns (string memory) {
        return IERC20Metadata(addrORBS).name();
    }
}
