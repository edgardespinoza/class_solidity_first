# first class solidity
 - see [concepts blockchain](https://demoblockchain.org/hash)
 - see [scan blocks](https://www.blockchain.com/explorer?view=btc)
 - go [gitpod](https://www.gitpod.io/)

 ## List git tags 
 -  $ git checkout v1  // basic
 -  $ git checkout v2  // delete contracts and add smartContract Product.sol and testing
 -  $ git checkout v3  // add network binance tests

## ๐ฉ  Setting up Truffle
1. install [nodejs](https://nodejs.org/en/)

    ```bash
    npm install -g truffle
    ```

2. ๐  see the version
    ```bash
    truffle version
    ```

 3. ๐ get dependencies
    ```sh
    npm i
    ```

4. ๐ช install hd-wallet
    ```bash
    $ npm install @truffle/hdwallet-provider
    ```

5.  ```bash
    $ npm install @openzeppelin/contracts
    $ npm install --save-dev @openzeppelin/truffle-upgrades
    $ npm install @openzeppelin/contracts-upgradeable
    ```
 ___

## ๐๏ธ Build Smart Contract 

1.  ๐งญ compile
    ```bash
    truffle compile --all
    ```

2. ๐งช test 
    ```bash
    truffle test
    ```

3. ๐ท๏ธ develop
    ```bash
    truffle develop
    ```

4.  ๐ deploy  
    ```bash
     truffle migrate
    ```

    if you need reset add  --reset

---

# testnet with Binance

1. ๐ฐ get tokens faucet [Binance BNB](https://testnet.binance.org/faucet-smart)

2. โ validate tokens in [testnet Binance](https://testnet.bscscan.com/)



4. โ๏ธ In the file `truffle-config.js` add

create file ".secret" with the privatekey ethereum 

    ```js
    //add code
    const HDWalletProvider = require('@truffle/hdwallet-provider');
    const fs = require('fs');
    const privateKeys = fs.readFileSync(".secret").toString().trim();
    
    module.exports = {
        networks: {
            bscTestnet: {
                networkCheckTimeout: 10000, 
                provider: () => new HDWalletProvider(privateKeys,  `https://data-seed-prebsc-1-s1.binance.org:8545/`),
                network_id: 97,     
                confirmations: 10,
                timeoutBlocks: 2000,  
                skipDryRun: true
            }
        }
        // more code
    }
    // more code
}
```

4. ๐ deploy  contract to binance 
    ```bash
    $ truffle migrate --reset --network bscTestnet
    ```
---
