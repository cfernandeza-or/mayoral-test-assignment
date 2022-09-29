import { Button as BaseButton } from "@mui/material";
import styled from "@emotion/styled";

const CustomButton = styled(BaseButton)({
    textTransform: 'none',
});

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