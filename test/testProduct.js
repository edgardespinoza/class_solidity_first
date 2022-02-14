const Product = artifacts.require('Product');

contract('Product', () => {

    let contract = null;
    before(async () => {
         contract = await Product.deployed();
    });

    it('Should add Product', async() => {
        
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const tx = await contract.addProduct(address, 1000, 12);
        console.log(tx);
        assert.notEqual(tx, null);
      
    });

    it('Should get Product', async() => {
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const item = await contract.getProduct(address);

        console.log(item);

        assert(item);
    });

    it('Should delete Product', async() => {
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const tx = await contract.deleteProduct(address);
        console.log(tx);
        assert.notEqual(tx, null);
    });
});