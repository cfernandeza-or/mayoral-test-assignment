import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

const LoadingComponent = styled(CircularProgress)`
    margin: 60px auto;
`;
    
const Loading = () => (
    <LoadingComponent />
)

export default Loading;