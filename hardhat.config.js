// https://eth-goerli.g.alchemy.com/v2/B6rrxgVP_t1xK1SSFcHMdvXW-CvBJHh-

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/B6rrxgVP_t1xK1SSFcHMdvXW-CvBJHh-",
      accounts: [
        "fce27d2fb45e90ea1b288b0613649ce334013e6e71baa26460153c969502985d",
      ],
    },
  },
};
