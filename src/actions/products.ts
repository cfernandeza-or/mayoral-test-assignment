import { Product } from "types/data";

const BASE_PRODUCTS_URL = 'http://localhost:5000/products';

export const getProducts = (): Promise<Product[]> => 
    new Promise((resolve, reject) => {
        fetch(BASE_PRODUCTS_URL, { method: 'GET' })
            .then((products) => {
                resolve(products.json());
            })
            .catch(reject)
    });

interface FilterProps {
    name: string;
}

export const getFilteredProducts = ({ name }: FilterProps): Promise<Product[]> => 
    new Promise((resolve, reject) => {
        fetch(`${BASE_PRODUCTS_URL}?name_like=${name}`, { method: 'GET' })
            .then((products) => {
                resolve(products.json());
            })
            .catch((reject));
    });
