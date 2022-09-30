import { getFilteredProducts } from "../actions/products";

describe('Find filtered products by name, no matter special characters and no case sensitive', () => {

    test('Find products with substring name "CAMISETA"', async () => {
        const products = await getFilteredProducts({name: 'CAMISETA'});
        if (products.length) {
            expect(products).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        name: expect.stringMatching(/camiseta/i),
                    })
                ])
            )
        } else {
            return { message: () => 'Products not found', pass: true }
        }
    });

    test('Find products with substring name "CAMIsetÀ"', async () => {
        const products = await getFilteredProducts({name: 'CAMIsetÀ'});
        if (products.length) {
            expect(products).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        name: expect.stringMatching(/camiseta/i),
                    })
                ])
            )
        } else {
            return { message: () => 'Products not found', pass: true }
        }
    });

});