import  { useMemo } from 'react';
import styled from "styled-components";
import { RemoveRounded as RemoveRoundedIcon, AddRounded as AddRoundedIcon} from '@mui/icons-material';

import Button from '../../../Button';
import { COLORS } from 'utils/constants';

interface ColumnsController {
    columns: number;
    maxColumns: number;
    minColumns: number;
    onChangeColumns (columns: number): void;
}

const ColumnsControllerContainer = styled.div`
    display: flex;
    column-gap: 8px;
    & > button {
        padding: 0;
        > span {
            color: ${(props) => props.theme.color};
            margin: 0;
            > *:nth-of-type(1) {
                font-size: 50px;
            }
        }
    }
`;

const columnsControllerContainerTheme = { color: COLORS.grayLight };

const ColumnsController = ({ columns, minColumns, maxColumns, onChangeColumns }: ColumnsController): JSX.Element => {
    const disabledRemoveButton = useMemo(() => columns <= minColumns, [columns, minColumns])
    const disabledAddButton = useMemo(() => columns >= maxColumns, [columns, maxColumns])

    const removeColumn = () => onChangeColumns(columns - 1);
    const addColumn = () => onChangeColumns(columns + 1);

    return (
        <ColumnsControllerContainer theme={columnsControllerContainerTheme}>
            <Button startIcon={<RemoveRoundedIcon/>} onClick={removeColumn} variant="text" disabled={disabledRemoveButton}/>
            <Button startIcon={<AddRoundedIcon/>} onClick={addColumn} variant="text" disabled={disabledAddButton}/>
        </ColumnsControllerContainer>
    )
}

export default ColumnsController;