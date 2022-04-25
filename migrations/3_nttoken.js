const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const NTToken = artifacts.require('NTToken');

module.exports = async function (deployer) {
  const instance = await deployProxy(NTToken, { deployer });
  console.log('Deployed', instance.address);
};