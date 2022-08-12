import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2000000,
      gasPrice: 30000000000,
     },
   },
   etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
