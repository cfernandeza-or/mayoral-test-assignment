import { PRODUCTS } from "../db/products";
import { Product } from "types/data";
import { isSubStringNormalized } from "../utils/helpers";

// Add 1s delay to simulate a query
export const getProducts = (): Promise<Product[]> => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTS);
        }, 500);
    });

interface FilterProps {
    name: string;
}

export const getFilteredProducts = ({ name }: FilterProps): Promise<Product[]> => 
    new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = PRODUCTS.filter((product) => isSubStringNormalized(product.name, name)) || [];
            resolve(filteredProducts);
        }, 500);
    });
