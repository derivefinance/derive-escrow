const RewardEscrow = artifacts.require("RewardEscrow"); 
const DeriveEscrow = artifacts.require("DeriveEscrow"); 

module.exports = async function(deployer) {
  await deployer.deploy(RewardEscrow)
  await deployer.deploy(DeriveEscrow)
}