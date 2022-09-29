import { isSubStringNormalized, sortProductsByPrice } from '../utils/helpers';
import { Product } from '../types/data';

test('Sort ascending products by price', () => {
    const initialProducts: Product[] = [
        { id: 1, name: 'p1', price: 100, offerPercentage: 20, image: '', moreColors: true },
        { id: 2, name: 'p2', price: 110, offerPercentage: 20, image: '', moreColors: true },
        { id: 3, name: 'p3', price: 100, offerPercentage: 25, image: '', moreColors: true },
        { id: 4, name: 'p4', price: 100, offerPercentage: 40, image: '', moreColors: true },
        { id: 5, name: 'p5', price: 30, offerPercentage: 0, image: '', moreColors: true },
    ];
    const resultProductsAsc: Product[] = [
        { id: 5, name: 'p5', price: 30, offerPercentage: 0, image: '', moreColors: true },
        { id: 4, name: 'p4', price: 100, offerPercentage: 40, image: '', moreColors: true },
        { id: 3, name: 'p3', price: 100, offerPercentage: 25, image: '', moreColors: true },
        { id: 1, name: 'p1', price: 100, offerPercentage: 20, image: '', moreColors: true },
        { id: 2, name: 'p2', price: 110, offerPercentage: 20, image: '', moreColors: true },
    ]
    expect(sortProductsByPrice(initialProducts, "asc")).toStrictEqual(resultProductsAsc);
});

test('Sort descending products by price', () => {
    const initialProducts: Product[] = [
        { id: 1, name: 'p1', price: 100, offerPercentage: 20, image: '', moreColors: true },
        { id: 2, name: 'p2', price: 110, offerPercentage: 20, image: '', moreColors: true },
        { id: 3, name: 'p3', price: 100, offerPercentage: 25, image: '', moreColors: true },
        { id: 4, name: 'p4', price: 100, offerPercentage: 40, image: '', moreColors: true },
        { id: 5, name: 'p5', price: 30, offerPercentage: 0, image: '', moreColors: true },
    ];
    const resultProductsDesc: Product[] = [
        { id: 2, name: 'p2', price: 110, offerPercentage: 20, image: '', moreColors: true },
        { id: 1, name: 'p1', price: 100, offerPercentage: 20, image: '', moreColors: true },
        { id: 3, name: 'p3', price: 100, offerPercentage: 25, image: '', moreColors: true },
        { id: 4, name: 'p4', price: 100, offerPercentage: 40, image: '', moreColors: true },
        { id: 5, name: 'p5', price: 30, offerPercentage: 0, image: '', moreColors: true },
    ]
    expect(sortProductsByPrice(initialProducts, "desc")).toStrictEqual(resultProductsDesc);
});

test('String A contains string B, no matter special characters', () => {
    expect(isSubStringNormalized('África', 'africa')).toBeTruthy();
    expect(isSubStringNormalized('Ámerica del sur', 'america')).toBeTruthy();
    expect(isSubStringNormalized('Ámerica del sur', 'america del norte')).toBeFalsy();
})