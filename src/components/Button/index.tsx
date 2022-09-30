import { Button as BaseButton } from "@mui/material";
import styled from "@emotion/styled";

import { COLORS } from "utils/constants";

const CustomButton = styled(BaseButton)<{backgroundColor: string; backgroundColorHover: string;}>`
    text-transform: none;
    &.MuiButton-contained {
        background-color: ${(props) => props.backgroundColor};
        &:hover {
            background-color: ${(props) => props.backgroundColorHover};
        }
    }
`;

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    endIcon?: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    startIcon?: React.ReactNode;
    text?: string;
    variant: 'text' | 'contained' | 'outlined';
}

const Button = ({ className, disabled, endIcon, onClick, startIcon, text, variant }: ButtonProps): JSX.Element => (
    <CustomButton 
        backgroundColor={COLORS.primaryDark}
        backgroundColorHover={COLORS.primaryDarken}
        className={className} 
        variant={variant} 
        onClick={onClick} 
        startIcon={startIcon} 
        endIcon={endIcon} 
        disabled={disabled}
    >
        {text}
    </CustomButton>
)

export default Button;