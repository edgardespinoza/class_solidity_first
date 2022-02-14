// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;
/**
  Contract Demo
 */
contract MyFirstContract{

    struct Product{
        uint price;
        uint stock;
        bool enabled;
    }

    event RegisterLog(address indexed _sender, address indexed _product, uint _stock, uint _price);

    address immutable _owner;

    constructor(){
        _owner = msg.sender;
    }

    modifier onlyOwner(){
        require (_owner == msg.sender, "NO OWNER");
        _;
    }

    mapping (address => Product) products;

    function addProduct(address _product, uint _price, uint _stock) onlyOwner external {
        Product memory prod = Product( _price, _stock, true);
        products[_product] = prod;  

        emit RegisterLog(msg.sender, _product, _stock, _price );
    }
   
    function getProduct(address _product) view external returns( Product memory){
        Product storage p = products[_product];
        return p;
    }

    function deleteProduct(address _product) onlyOwner external{
        delete products[_product];
    }
}