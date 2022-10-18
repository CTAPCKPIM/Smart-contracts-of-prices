//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @author by CTAPCKPIM
 * @title Helper for monitoring the price of 'CAKE' token.
 * @notice Accepts and sets the value of the token in 'USD' through the script.
 */
contract HelperCAKE {
    /**
     * All variables:
     *  {priceUSD} - price of the token;
     *  {addrCAKE} - address of the token;
     */
    uint256 public priceUSD;
    address public addrCAKE;

    //@dev Setting an address of the 'CAKE' token in deploy;
    constructor(address _addrCAKE) {
        addrCAKE = _addrCAKE;
    }

    //@dev Setting the price;
    function setPriceInUSD(uint256 _priceUSD) public {
        priceUSD = _priceUSD;
    }

    //@return `symbol` of the token;
    function returnSymbol() public view returns (string memory) {
        return IERC20Metadata(addrCAKE).symbol();
    }

    //@return `name` of the token;
    function returnName() public view returns (string memory) {
        return IERC20Metadata(addrCAKE).name();
    }
}
