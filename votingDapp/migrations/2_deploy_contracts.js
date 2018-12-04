var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var VoteToken = artifacts.require("./VoteToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(VoteToken);
};
