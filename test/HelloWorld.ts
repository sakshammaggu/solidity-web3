import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("HelloWorld", function() {
    // Define a fixture to deploy the HelloWorld contract
    async function deployHelloWorldFixture() {
        const HelloWord=await hre.ethers.getContractFactory("HelloWorld");
        const helloWorld=await HelloWord.deploy();
        return {helloWorld};
    }

    describe ("Deployment", function() {
        it("Should set the correct initial string", async function () {
            const { helloWorld } = await loadFixture(deployHelloWorldFixture);
      
            // Check the initial value of myString
            expect(await helloWorld.myString()).to.equal("Hello World");
        });
    });
});