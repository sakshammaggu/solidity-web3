import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { expect } from 'chai';
import hre from 'hardhat';

describe ("Counter", function() {
    async function deployCounterFixture() {
        const name="My Counter";
        const count=10;
        const [owner, otherAccount] = await hre.ethers.getSigners();    // Contracts are deployed using the first signer/account by default
        const CounterFactory=await hre.ethers.getContractFactory("Counter");    // get a contract factory
        const counter=await CounterFactory.deploy(name, count); // deploy counter
        return {counter, name, count, owner, otherAccount};
    }

    describe ("Deployment", function() {
        it("Should set the right name and count", async function () {
            const {counter, name, count }=await loadFixture(deployCounterFixture);
            expect(await counter.name()).to.equal(name);
            expect(await counter.count()).to.equal(count);
        })
    })

    describe ("Counting", function() {
        it("Should increment the count", async function() {
            const {counter, count}=await loadFixture(deployCounterFixture);
            await counter.incrementCount(); // Increment the count
            expect(await counter.getCounter()).to.equal(count+1);   // Expect the new count to be incremented by 1
        })

        it ("Should decrement the count", async function() {
            const {counter, count}=await loadFixture(deployCounterFixture);
            await counter.decrementCount(); // decrement the count
            expect(await counter.getCounter()).to.equal(count-1);   // Expect the new count to be decremented by 1
        })
    })

    describe ("Manage Name", function(){
        it("Should get the name", async function() {
            const {counter, name}=await loadFixture(deployCounterFixture);
            expect(await counter.getName()).to.equal(name);
        })

        it("Should set the name", async function() {
            const {counter}=await loadFixture(deployCounterFixture);
            const newName="New Counter";
            await counter.setName(newName);
            expect(await counter.getName()).to.equal(newName);
        })
    })
});