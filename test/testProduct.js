const Product = artifacts.require('Product.sol');

contract('Product', () => {

    let contract = null;
    before(async () => {
         contract = await Product.deployed();
    });

    it('Should add Product', async() => {
        const storage = await Product.new();
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        await storage.addProduct(address, 1000, 12);
        const value = await storage.getProduct(address);
        console.log(`address: ${value}`);
        assert(value);
    });

    it('Should delete Product', async() => {
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const tx = await contract.deleteProduct(address);
        console.log(tx);
        assert.notEqual(tx, null);
    });

    it('Should get Product', async() => {
        const address = '0xCb00A4F3BAdE60CB898D2C1B004bB653da4232e2';
        const value = await contract.getProduct(address);
        assert(value);
    });
});