import { useEffect, useState, useRef } from "react";
import styled from '@emotion/styled'
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon} from '@mui/icons-material';

import { COLORS } from '../../utils/constants';

interface SearchProps {
    onSearch (content: string): void;
}

const SearchBarComponent = styled(TextField)<{ theme:{ borderColor: string }}>`
    & .MuiOutlinedInput-root {
        border-radius: 8px;
        padding-left: 8px;

        &:hover fieldset {
            border-color: ${(props) => props.theme.borderColor};
        }

        &.Mui-focused fieldset {
            border-color: ${(props) => props.theme.borderColor};
        }

        input {
            padding: 8px;
        }
    }
`;
    
const SearchBarTheme = { borderColor: COLORS.primary };

const SearchBar = ({ onSearch }: SearchProps) => {
    const [ text, setText ] = useState('');
    const [ prevText, setPrevText ] = useState('');
    const timeoutRef = useRef(null);

    // Add delay to search after the user stops typing. Make a search if 
    // the user has been typing, to know it, text or prevText must have characters
    // If both are empty, means is the first render, so avoid onSearch
    useEffect(() => {
        if(text || prevText) {
            timeoutRef.current = setTimeout(() => {
                onSearch(text);
            }, 500);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [ text ]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText((prev) => {
            setPrevText(prev);
            return e.target.value
        });
    }
    
    const inputProps = {
        startAdornment: (
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
        ),
    }
    return (
        <SearchBarComponent 
            theme={SearchBarTheme}
            variant="outlined" 
            onChange={handleChange} 
            placeholder="Buscar" 
            value={text}
            InputProps={inputProps}
        />
    )
}

export default SearchBar;