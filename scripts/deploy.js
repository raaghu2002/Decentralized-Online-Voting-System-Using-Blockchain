const hre = require("hardhat");

async function main() {
  const VotingOrganization = await hre.ethers.getContractFactory(
    "VotingOrganization"
  );
  const voting = await VotingOrganization.deploy();

  await voting.deployed();

  console.log("CONTRACT_ADDRESS:", voting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
