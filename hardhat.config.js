require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {},
        rinkeby: {
            url: "https://eth-rinkeby.alchemyapi.io/v2/yCegcSRJFfk6jIEc1a5wVz68ww94NMcc",
            accounts: ["e0ad52de2328ca7a474e6b15d5306398fab24eadb2905f9c5d4ef16e2bb37637"]
        }
    },
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 40000
    }
}