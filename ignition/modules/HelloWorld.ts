import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const HelloWorldModule=buildModule("HelloWord", (m) => {
    // Create a new instance of the HelloWorld contract

    const HelloWorld=m.contract("HelloWorld", [], {
        // ... No constructor parameters needed for HelloWorld
    })
    
    return {HelloWorld};
});

export default HelloWorldModule;