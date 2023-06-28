const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const nftContract = await hre.ethers.deployContract("CryptoDevs", [
    "0x3315267a9CfCeF2Ea47988bD5f7eDA4715a4A705",
  ]);

  await nftContract.waitForDeployment();

  console.log("NFT contract Address: ", nftContract.target);

  await sleep(30 * 1000);

  await hre.run("verify:verify", {
    address: nftContract.target,
    constructorArguments: ["0x3315267a9CfCeF2Ea47988bD5f7eDA4715a4A705"],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
