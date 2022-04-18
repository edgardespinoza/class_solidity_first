# first class solidity
 - see [concepts blockchain](https://demoblockchain.org/hash)
 - see [scan blocks](https://www.blockchain.com/explorer?view=btc)
 - go [gitpod](https://www.gitpod.io/)

 ## List git tags 
 -  $ git checkout v1  // basic
 -  $ git checkout v2  // delete contracts and add smartContract Product.sol and testing
 -  $ git checkout v3  // add network binance tests

## Setting up Truffle
1. install [nodejs](https://nodejs.org/en/)

    ```powershell
    $  npm install -g truffle
    ```

2. see the version
    ```powershell
    $ truffle version
    ```
 ___

## create project

1. install dependencies
    ```powershell
    $  npm i
    ```

2.  compile
    ```powershell
    $ truffle compile --all
    ```

3.  test 
    ```powershell
    $ truffle test
    ```

4.  develop
    ```powershell
    $  truffle develop
    ```

    ```powershell
    $ truffle migrate
    ```

    if you need reset add  --reset

---

# testnet with Binance

1. get tokens faucet [Binance BNB](https://testnet.binance.org/faucet-smart)

2. validate tokens in [testnet Binance](https://testnet.bscscan.com/)

3. install hd-wallet
    ```powershell
    $ npm install @truffle/hdwallet-provider
    ```

4. In the file `truffle-config.js` add

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

4. deploy contract to binance 
    ```powershell
    $ truffle migrate --reset --network bscTestnet
    ```
---
