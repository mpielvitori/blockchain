/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');
require('@nomiclabs/hardhat-ethers');

const { MNEMONIC } = require('./.secrets.js');

module.exports = {
  networks: {
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`, // Cambia la URL según la red de Polygon que desees usar
      accounts: { mnemonic: MNEMONIC },
      saveDeployments: true,
    },
  },
  solidity: '0.8.0',
  paths: {
    sources: './contracts',
    tests: './tests',
    cache: './cache',
    artifacts: './artifacts',
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
