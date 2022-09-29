export interface Product {
    id: number,
    image: string;
    moreColors: boolean;
    name: string;
    offerPercentage: number;
    price: number;
}

export interface SortOption {
    label: string;
    onClick: any;
}