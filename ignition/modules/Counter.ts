import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CounterModule=buildModule("CounterModule", (m)=>{
    const name="My Counter";
    const count=10;
    const counterName = m.getParameter("name", name);
    const initialCount = m.getParameter("count", count);
    const counter = m.contract("Counter", [counterName, initialCount]);
    return { counter };
});

export default CounterModule;