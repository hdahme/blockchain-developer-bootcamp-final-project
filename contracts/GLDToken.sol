// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () ERC20("Gold Token", "GLD") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}
