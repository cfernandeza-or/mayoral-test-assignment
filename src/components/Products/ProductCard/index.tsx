import Image from "next/image";
import styled from "styled-components";

import { Product } from "types/data";
import { getPriceWithOffer, getPriceFormatted } from "utils/helpers";
import defaultImage from '../../../assets/images/defaultImage.png';
import Button from "components/Button";

interface ProductCardProps {
    product: Product;
}

const Card = styled.div`
    border-radius: 4px;
    border: 1px solid #84c2f5;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 10px;
    color: #504F4F;
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
    & > div {
        > p {
            margin: 8px 0;
            text-align: center;
            &.oldPrice {
                text-decoration: line-through;
            }
            &.newPrice {
                color: #cc0000;
            }
        }
    }
    > button {
        width: fit-content;
        &.addButton {
            box-shadow: none;
            margin: auto auto 0 auto;
        }
        &.moreColorsButton{
            margin: 0 auto 8px auto;
            color: #504F4F;
        }
    }
`;

const ImageContainer = styled.div`
    aspect-ratio: 4/5;
    position: relative;
    width: 100%;
    & > span > img {
        object-fit: contain;
    }
`;

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
    const renderPrices = (): React.ReactElement => (
        <div>
            {product.offerPercentage ? <>
                <p className="oldPrice">{getPriceFormatted(product.price)}</p>
                <p className="newPrice">{getPriceFormatted(getPriceWithOffer(product.price, product.offerPercentage))} {`(${product.offerPercentage}%)`}</p>
            </> : <p>{getPriceFormatted(product.price)}</p>}
        </div>
    )
    
    return (
        <Card>
            <ImageContainer>
                <Image src={product.image} placeholder="blur" blurDataURL={defaultImage?.src} layout="fill"/>
            </ImageContainer>
            <p>{product.name}</p>
            {renderPrices()}
            {product.moreColors && <Button className="moreColorsButton" text={"más colores"} variant="text" onClick={() => null}/>}
            <Button className="addButton" text={"AÑADIR"} variant="contained" onClick={() => null}/>
        </Card>
    )
}

export default ProductCard;
