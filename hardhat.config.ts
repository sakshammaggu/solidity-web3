import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localganache: {
      url: process.env.PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY ?? '']
    }
  }
};

export default config;
