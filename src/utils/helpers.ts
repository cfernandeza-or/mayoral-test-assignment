import { Product } from "types/data";

// Normalize string without accents and special characters
// export const normalizeString = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Return true if string1 contains string2 without accents and special characters
// export const isSubStringNormalized = (str1: string, str2: string): boolean => normalizeString(str1).toLowerCase()?.includes(normalizeString(str2)?.toLowerCase());

// Return the price with percentage
export const getPriceWithOffer = (price: number, percentage: number): number => price - (price * percentage / 100);

// Return the price formatted in euros
export const getPriceFormatted = (price: number): string => new Intl.NumberFormat('es-EU', {
    style: 'currency',
    currency: 'EUR',
}).format(price);

// Compare two values to do a sort array.
const compareTwoPrices = (a: number, b: number): number => {
    if (a > b) {
      return 1;
    } if (b > a) {
      return -1;
    }
    return 0;
  };

export const sortProductsByPrice = (products: Product[], type: 'asc' | 'desc'): Product[] => (
    products.sort((a, b) => {
        const priceB = a.offerPercentage ? getPriceWithOffer(a.price, a.offerPercentage) : a.price;
        const priceA = b.offerPercentage ? getPriceWithOffer(b.price, b.offerPercentage) : b.price;
        if(type === 'asc') {
            return compareTwoPrices(priceB, priceA)
        } 
        return compareTwoPrices(priceA, priceB);
    })
)