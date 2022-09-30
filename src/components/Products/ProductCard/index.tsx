import Image from "next/image";
import styled from "styled-components";

import { Product } from "types/data";
import { getPriceWithOffer, getPriceFormatted } from "utils/helpers";
import defaultImage from '../../../assets/images/defaultImage.png';
import Button from "components/Button";
import { COLORS } from "utils/constants";

interface ProductCardProps {
    product: Product;
}


const Card = styled.div`
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.borderColor};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 10px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: -webkit-fill-available;
    justify-content: flex-start;
    padding: 16px;
    & > p {
        display: block;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }    
`;

const PricesContainer = styled.div`
    p {
        margin: 8px 0;
        text-align: center;
        &.oldPrice {
            text-decoration: line-through;
        }
        &.newPrice {
            color: ${(props) => props.theme.color};
        }
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    > button {
        width: fit-content;
        &.addButton {
            box-shadow: none;
            margin: 0 auto;
        }
        &.moreColorsButton {
            color: ${(props) => props.theme.color};
            margin: 0 auto 8px auto;
        }
    }
`;

const ImageContainer = styled.div`
    aspect-ratio: 4/5;
    position: relative;
    width: 100%;
    & > span > img {
        object-fit: cover;
    }
`;

const cardTheme = { borderColor: COLORS.primary, shadowColor: COLORS.shadow };
const pricesContainerTheme = { color: COLORS.error };
const ButtonsContainerTheme = { color: COLORS.gray };

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
    const renderPrices = (): React.ReactElement => (
        <PricesContainer theme={pricesContainerTheme}>
            {product.offerPercentage ? <>
                <p className="oldPrice">{getPriceFormatted(product.price)}</p>
                <p className="newPrice">{getPriceFormatted(getPriceWithOffer(product.price, product.offerPercentage))} {`(${product.offerPercentage}%)`}</p>
            </> : <p>{getPriceFormatted(product.price)}</p>}
        </PricesContainer>
    )
    
    return (
        <Card theme={cardTheme}>
            <ImageContainer>
                <Image src={product.image} placeholder="blur" blurDataURL={defaultImage?.src} layout="fill"/>
            </ImageContainer>
            <p>{product.name}</p>
            {renderPrices()}
            <ButtonsContainer theme={ButtonsContainerTheme}>
                {product.moreColors && <Button className="moreColorsButton" text={"más colores"} variant="text" onClick={() => null}/>}
                <Button className="addButton" text={"AÑADIR"} variant="contained" onClick={() => null}/>
            </ButtonsContainer>
        </Card>
    )
}

export default ProductCard;
