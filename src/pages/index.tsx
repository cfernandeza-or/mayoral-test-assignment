import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import styled from 'styled-components';

import { Product } from "types/data";
import { getProducts, getFilteredProducts } from '../actions/products';
import Products from "components/Products";
import { DEVICE } from "utils/constants";

interface HomePageProps {
  products: Product[];
}

const HomeContainer = styled.div`
  padding: 32px;

  @media ${DEVICE.mobileL} { 
    padding: 16px;
  }
`;

const HomePage: NextPage = ({ products }: HomePageProps) => {
  const [ filteredProducts, setFilteredProducts ] = useState<Product[]>([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [ products ]);

  const handleSearch = (content: string) => {
    setLoading(true);
    getFilteredProducts({ name: content })
      .then(setFilteredProducts)
      .finally(() => setLoading(false));
  }

  return (
    <HomeContainer>
      <Products onSearch={handleSearch} products={filteredProducts} loading={loading}/>
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products: Product[] = await getProducts();
  return {
    props: {
      products
    }
  };
}

export default HomePage;
