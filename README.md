
# List git tags 
   $ git checkout v1  // basic
   $ git checkout v2  // delete contracts and add smartContract Product.sol and testing


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
