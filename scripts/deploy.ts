import { ethers } from "hardhat";

async function main() {
  const DogtronicNFT = await ethers.getContractFactory("Dogtronic");
  const dogtronicNft = await DogtronicNFT.deploy();

  await dogtronicNft.deployed();

  console.log("Dogtronic NFT contract deployed to:", dogtronicNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
