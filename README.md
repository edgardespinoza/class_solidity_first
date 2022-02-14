
# Setting up Truffle
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
    ```sh
    $ mkdir firstContract
    $ cd firstContract
    ```
2. create project truffle
    ```sh
    $ npm init -y
    ```

    ```sh
    $ truffle init
    ```
## compile project
    ```sh
    $ sudo truffle compile
    ```
## deploy contract  
   before run
   
    ```sh
    $ sudo truffle develop
    ```

    ```sh
    $ truffle migrate
    ```

    if you need reset 
    ```sh
    $ truffle migrate --reset
    ```
##  test
    ```sh
    $ truffle test
    ```
