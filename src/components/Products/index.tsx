import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Product, SortOption } from "types/data";
import { WINDOW_SCREEN_SIZE } from 'utils/constants';
import ProductCard from "./ProductCard";
import ProductsHeader from './ProductsHeader';
import Loading from '../Loading';
import { sortProductsByPrice } from 'utils/helpers';

interface ProductsProps {
    loading: boolean;
    products: Product[];
    onSearch (content: string): void;
}

const ProductsContainer = styled.div`
    display: flex;
    row-gap: 16px;
    flex-direction: column;
`;

const TextNoProducts = styled.p`
    margin: 64px auto;
    max-width: 500px;
    text-align: center;
    width: 100%;
`;

const ProductList = styled.div<{columns: number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, minmax(calc(${props => 100 / props.columns}% - 16px), auto));
    grid-gap: 16px;
`;

const Products = ({ onSearch, products, loading }: ProductsProps): JSX.Element => {
    const [ sortedProducts, setSortedProducts ] = useState(products);
    const [ columns, setColumns ] = useState(3);
    const [ minColumns, setMinColumns ] = useState(2);
    const [ maxColumns, setMaxColumns ] = useState(3);

    useEffect(() => {
        setSortedProducts(products);
    }, [products]);

    useEffect(() => {
        const onResize = () => {
            if(window.innerWidth > WINDOW_SCREEN_SIZE.laptopL) {
                setColumns(5);
                setMaxColumns(5)
                setMinColumns(3)
            } else if (window.innerWidth > WINDOW_SCREEN_SIZE.laptop) {
                setColumns(4);
                setMaxColumns(5)
                setMinColumns(3)
            } else if (window.innerWidth > WINDOW_SCREEN_SIZE.tablet) {
                setColumns(3);
                setMaxColumns(5)
                setMinColumns(3)
            } else if (window.innerWidth > WINDOW_SCREEN_SIZE.mobileL) {
                setColumns(2)
                setMaxColumns(3)
                setMinColumns(2)
            } else {
                setColumns(1)
                setMaxColumns(2)
                setMinColumns(1)
            }
        }
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])

    const sortPriceDescending = (productsToSort: Product[]): Product[] => sortProductsByPrice(productsToSort, 'desc');
    const sortPriceAscending = (productsToSort: Product[]): Product[] => sortProductsByPrice(productsToSort, 'asc');

    const sortOptions: SortOption[] = [
        {label: 'Precio ascendente', onClick: () => setSortedProducts([...sortPriceAscending(sortedProducts)])}, 
        {label: 'Precio descendiente', onClick: () => setSortedProducts([...sortPriceDescending(sortedProducts)])},
    ];

    return (
        <ProductsContainer>
            <ProductsHeader onSearch={onSearch} columns={columns} onChangeColumns={setColumns} sortOptions={sortOptions} minColumns={minColumns} maxColumns={maxColumns}/>
            {loading ? <Loading/> : 
                <> {sortedProducts?.length ? 
                    <ProductList columns={columns}>
                        {sortedProducts.map((product) => (
                            <ProductCard product={product} key={product.id}/>
                        ))}
                    </ProductList> 
                : <TextNoProducts>No se ha encontrado ningún producto</TextNoProducts> }
                </>
            }
        </ProductsContainer>
    )
}

export default Products;