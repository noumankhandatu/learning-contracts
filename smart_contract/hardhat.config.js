require("@nomiclabs/hardhat-waffle");
// working on test network here
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/3A-p6ljKwKSVvnkBwPAhBm-jdoA0kJS2",
      accounts: [
        "56f45dd0a8afde453aa72e2976c5b6e5e02597244703ee498e8b10aeb736ddd7",
      ],
    },
  },
};
// 1:32
