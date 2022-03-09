require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path:__dirname+'/.env'})

if(!process.env.PRIVATE_KEY){
  throw new Error("PRIVATE_KEY was not provided in .env")
}
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
dotenv({ path: resolve(__dirname, "../.env") });

module.exports = {
  solidity: "0.8.3",
  networks:{
    rinkeby:{
      url: "process.env.JSON_RPC",
      accounts:[
        process.env.PRIVATE_KEY.startsWith("0x")
        ? process.env.PRIVATE_KEY : 
        process.env.PRIVATE_KEY,
      ]
    }
  }
};
