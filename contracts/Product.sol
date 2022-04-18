// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;
/**
  Contract Demo
 */
contract Product{

    struct Item{
        uint price;
        uint stock;
        bool enabled;
    }

    event addItem(address indexed _sender, address indexed _item, uint _stock, uint _price);

    address immutable _owner;

    constructor(){
        _owner = msg.sender;
    }

    modifier onlyOwner(){
        require (_owner == msg.sender, "NO OWNER");
        _;
    }

    mapping (address => Item) items;

    function addProduct(address _item, uint _price, uint _stock) onlyOwner external {
        Item memory prod = Item( _price, _stock, true);
        items[_item] = prod;  

        emit addItem(msg.sender, _item, _stock, _price );
    }
   
    function getProduct(address _item) view external returns( Item memory){
        Item storage p = items[_item];
        return p;
    }

    function deleteProduct(address _item) onlyOwner external{
        delete items[_item];
    }
}