# List git tags 
 -  $ git checkout v1  // basic
 -  $ git checkout v2  // delete contracts and add smartContract Product.sol and testing
 -  $ git checkout v3  // add network binance tests

## Setting up Truffle
1. install [nodejs](https://nodejs.org/en/)

    ```sh
    $ sudo npm install -g truffle
    ```

2. see the version
    ```sh
    $ truffle version
    ```
 ___

## create project

1. Create directory
    ```
    $ mkdir firstContract
    $ cd firstContract
    ```
2. create project truffle

    ```
    $ npm init -y
    ```

    ```
    $ truffle init
    ```

## compile project
    ```
    $ sudo truffle compile --all
    ```

## deploy contract  
   before run
   
    ```
    $ sudo truffle develop
    ```

    ```
    $ truffle migrate
    ```

    if you need reset 
    ```
    $ truffle migrate --reset
    ```

##  test
    ```
    $ truffle test
    ```

---

# testnet with Binance

1. get tokens faucet [Binance BNB](https://testnet.binance.org/faucet-smart)

2. validate tokens in [testnet Binance](https://testnet.bscscan.com/)

3. install hdwallet
    ```
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
    ```

4. deploy 
    ```
    $ sudo truffle migrate --reset --network bscTestnet
    ```
---
# ERC20

1. Install [OppenZeppeling](https://docs.openzeppelin.com/contracts/4.x/)
   ```
    $ npm install @openzeppelin/contracts
   ```
2. view [wizard ERC20](https://wizard.openzeppelin.com/)
   
3. modify parameters in bscTestnet see file `truffle-config.js`

4. deploy 
    ```
    $ sudo truffle migrate --reset --network bscTestnet
    ```

5. view contract address in console for example:
   > contract address:    0x3867ED1E0f9DBD136E1E3D897BBd732196588d9F

---

6. Compile solcjs
    ```
    solcjs --optimize --bin --abi --include-path node_modules/ --base-path . ./contracts/MyERC20.sol -o dist
    ```