import { Product } from "../types/data";
import axiosClient from "../utils/axios";

interface GetProductsResponse {
    data: Product[];
}

export const getProducts = (): Promise<Product[]> => 
    new Promise((resolve, reject) => {
        axiosClient.get('/products')
            .then((response: GetProductsResponse ) => {
                resolve(response.data);
            })
            .catch(reject)
    });

interface FilterProps {
    name: string;
}

export const getFilteredProducts = ({ name }: FilterProps): Promise<Product[]> => 
    new Promise((resolve, reject) => {
        axiosClient.get(`/products?name_like=${name}`)
            .then((response: GetProductsResponse) => {
                resolve(response.data);
            })
            .catch((reject));
    });
