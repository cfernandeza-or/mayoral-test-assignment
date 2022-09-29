import { Product } from "types/data";
import { isSubStringNormalized } from "utils/helpers";

const PRODUCTS = [
    {
        id: 1,
        name: "Camisa manga larga de cuadros",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camisa-manga-larga-de-cuadros-para-nino-ecofriends_id_12-55113-700-M-4.JPG?v=20220726074341",
        price: 35,
        offerPercentage: 0,
        moreColors: true,
    },
    {
        id: 2,
        name: "Camisa manga larga a rayas",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camisa-manga-larga-a-rayas-para-nino-ecofriends_id_12-55111-700-M-4.JPG?v=20220524074635",
        price: 20,
        offerPercentage: 15,
        moreColors: true,
    },
    {
        id: 3,
        name: "Camisa manga larga lisa",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camisa-manga-larga-para-nino-ecofriends_id_12-00146-030-M-4.JPG?v=20220711095207",
        price: 31,
        offerPercentage: 0,
        moreColors: true,
    },
    {
        id: 4,
        name: "Camisa manga larga con pajarita",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camisa-manga-larga-con-pajarita-para-nino-ecofriends_id_12-04184-060-M-4.JPG?v=20220624075301",
        price: 19,
        offerPercentage: 20,
        moreColors: false,
    },
    {
        id: 5,
        name: "Camisa manga larga con estampado",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camisa-manga-larga-a-rayas-con-estampado-para-nino-ecofriends_id_12-55102-700-M-4.JPG?v=20220707065039",
        price: 22,
        offerPercentage: 20,
        moreColors: true,
    },
    {
        id: 6,
        name: "Camisa manga larga con estampado",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camisa-manga-larga-con-mini-estampado-para-nino-ecofriends_id_12-55101-700-M-4.JPG?v=20220711095206",
        price: 27,
        offerPercentage: 20,
        moreColors: true,
    },
    {
        id: 7,
        name: "Camiseta manga larga",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camiseta-manga-larga-para-nino-ecofriends_id_12-00173-053-L-4.JPG?v=20220524074631",
        price: 30,
        offerPercentage: 20,
        moreColors: true,
    },
    {
        id: 8,
        name: "Camisa manga larga",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camiseta-manga-larga-con-grafismo-para-nino-ecofriends_id_12-04021-059-M-4.JPG?v=20220707065049",
        price: 30,
        offerPercentage: 20,
        moreColors: true,
    },
    {
        id: 9,
        name: "Camiseta manga larga",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camiseta-manga-larga-con-grafica-coche-para-nino-ecofriends_id_12-04010-049-M-4.JPG?v=20220711095201",
        price: 30,
        offerPercentage: 20,
        moreColors: true,
    },
    {
        id: 10,
        name: "Camiseta manga larga",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camiseta-manga-larga-con-aplique-para-nino-ecofriends_id_12-55022-700-M-4.JPG?v=20220520084806",
        price: 30,
        offerPercentage: 20,
        moreColors: true,
    },
    {
        id: 11,
        name: "Camiseta manga larga",
        image: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camiseta-manga-larga-con-grafica-coche-para-nino-ecofriends_id_12-04010-050-M-4.JPG?v=20220711095207",
        price: 30,
        offerPercentage: 20,
        moreColors: true,
    },
]

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
