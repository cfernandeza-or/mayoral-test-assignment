import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { SortOption } from 'types/data';
import { DEVICE } from 'utils/constants';

interface DropdownProps {
    options: SortOption[];
}

const DropdownContainer = styled.div`
    position: relative;

    & .MuiButtonGroup-root {
        > button:first-of-type {
            text-transform: none;
        }
    }

    & .MuiPopperUnstyled-root {
        width: 100%;
        translate: 0;
        left: 0;
        ul {
            padding: 0; 
            > li {
                font-size: 0.875rem;
                padding: 8px 16px;
            }
        }
    }

    @media ${DEVICE.tablet} { 
        & .MuiButtonGroup-root {
            > button {
                padding: 6px 8px;
                &:last-of-type {
                    padding: 0px;
                    align-items: center;
                    min-width: 32px;
                    > svg {
                        height: 24px;
                        width: 24px;
                    }
                }
            }
        }

        & .MuiPopperUnstyled-root {
            > ul > li > span {
                min-height: none;
            }
        }
    }
`;

const Dropdown = ({ options }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const anchorRef = useRef<HTMLDivElement>(null);
  
    const handleClick = () => {
      options[selectedIndex].onClick();
    };
  
    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
      setSelectedIndex(index);
      options[index].onClick();
      setOpen(false);
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event: Event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }
  
      setOpen(false);
    };

    return (
        <DropdownContainer>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                <Button onClick={handleClick}>{`Ordenar: ${options[selectedIndex].label}`}</Button>
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                    transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                >
                    <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                            <MenuItem
                                key={index}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                            {option.label}
                            </MenuItem>
                        ))}
                        </MenuList>
                    </ClickAwayListener>
                    </Paper>
                </Grow>
                )}
            </Popper>
        </DropdownContainer>
    )
}   

export default Dropdown;