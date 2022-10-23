//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

/**
 * @author by CTAPCKPIM
 * @title Helper for monitoring the price of tokens.
 * @notice Accepts and sets the value of the token in 'USD' through the script.
 */
contract Helper {
    /**
     * All variables:
     *  {priceUSD} - price of the token;
     *  {nameToken} - name of the token;
     *  {addrToken} - address of the token;
     */
    uint256 public priceUSD;
    string public nameToken;
    address public addrToken;

    //@dev Setting an address of the token in deploy;
    constructor(address _addrToken, string memory _nameToken) {
        addrToken = _addrToken;
        nameToken = _nameToken;
    }

    //@dev Setting the price;
    function setPriceInUSD(uint256 _priceUSD) public {
        priceUSD = _priceUSD;
    }

    //@return `symbol` of the token;
    function returnSymbol() public view returns (string memory) {
        return IERC20Metadata(addrToken).symbol();
    }

    //@return `name` of the token;
    function returnName() public view returns (string memory) {
        return IERC20Metadata(addrToken).name();
    }
}
