//https://eth-goerli.g.alchemy.com/v2/XxdRZnIheokAbingMAocQY68Vp4Pa3Rm
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/XxdRZnIheokAbingMAocQY68Vp4Pa3Rm",
      accounts: [
        "4c77315602e83f01333a5f8ed797cfc068248a42a53c0ca24461ce2b49f857f8",
      ],
    },
  },
};
