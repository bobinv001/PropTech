import styled from 'styled-components';
import {
    gridGap,
    gridColumnGap,
    gridRowGap,
    gridColumn,
    gridRow,
    gridAutoFlow,
    gridAutoColumns,
    gridAutoRows,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridArea,
    GridProps,
} from 'styled-system';

export const Grid = styled.div<GridProps>(
    { display: 'grid' },
    gridGap,
    gridColumnGap,
    gridRowGap,
    gridColumn,
    gridRow,
    gridAutoFlow,
    gridAutoColumns,
    gridAutoRows,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridArea
);
