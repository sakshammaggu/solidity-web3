// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;
import "hardhat/console.sol";

contract Counter {
    string public name;
    uint public count;

    constructor (string memory _name, uint _initialCount) {
        name=_name;
        count=_initialCount;
    }

    function incrementCount() public returns (uint newCount) {
        count++;
        console.log("Incremented count: ", count);
        return count;
    }

    function decrementCount() public returns (uint newCount) {
        count--;
        console.log("Decremented count: ", count);
        return count;
    }

    function getCounter() public view returns (uint) {
        console.log("count: ", count);
        return count;
    }

    function getName() public view returns (string memory currName) {
        console.log("name: ", name);
        return name;
    }

    function setName(string memory _newName) public returns (string memory newName) {
        name=_newName;
        console.log("new name: ", name);
        return name;
    }
}