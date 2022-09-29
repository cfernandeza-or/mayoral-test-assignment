import styled from 'styled-components';

import { DEVICE } from "utils/constants";
import { SortOption } from 'types/data';
import ColumnsController from "./ColumnsController";
import SearchBar from "components/SearchBar";
import Dropdown from 'components/Dropdown';

interface ProductsHeaderProps {
    columns: number;
    maxColumns: number;
    minColumns: number;
    sortOptions: SortOption[];
    onChangeColumns (columns: number): void;
    onSearch (content: string): void;
}

const SearchContainer = styled.div`
    align-items: center;
    column-gap: 16px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
    margin-bottom: 24px;
    width: 100%;

    & > div:first-of-type {
        width: 50%;
    }

    @media ${DEVICE.tablet} { 
        border-bottom: 1px solid #e0e0e0;
        flex-direction: column-reverse;
        max-width: 800px;
        padding-bottom: 32px;
        row-gap: 16px;

        & > div:first-of-type {
            width: 100%;
        }
    }
`;

const DropdownContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
    width: 100%;
`;

const ProductsHeader = ({columns, minColumns, maxColumns, sortOptions, onSearch, onChangeColumns}: ProductsHeaderProps): JSX.Element => {
    
    return (
        <div>
            <SearchContainer>
                <SearchBar onSearch={onSearch}/>
                <ColumnsController onChangeColumns={onChangeColumns} columns={columns} minColumns={minColumns} maxColumns={maxColumns}/>
            </SearchContainer>
            <DropdownContainer>
                <Dropdown options={sortOptions}/>
            </DropdownContainer>
        </div>
    )
}

export default ProductsHeader;