//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @author by CTAPCKPIM
 * @title Helper for monitoring the price of 'YFI' token.
 * @notice Accepts and sets the value of the token in 'USD' through the script.
 */
contract HelperYFI {
    /**
     * All variables:
     *  {priceUSD} - price of the token;
     *  {addrYFI} - address of the token;
     */
    uint256 public priceUSD;
    address public addrYFI;

    //@dev Setting an address of the 'YFI' token in deploy;
    constructor(address _addrYFI) {
        addrYFI = _addrYFI;
    }

    //@dev Setting the price;
    function setPriceInUSD(uint256 _priceUSD) public {
        priceUSD = _priceUSD;
    }

    //@return `symbol` of the token;
    function returnSymbol() public view returns (string memory) {
        return IERC20Metadata(addrYFI).symbol();
    }

    //@return `name` of the token;
    function returnName() public view returns (string memory) {
        return IERC20Metadata(addrYFI).name();
    }
}
