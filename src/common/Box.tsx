import styled, { CSSObject } from 'styled-components';
import {
    space,
    layout,
    color,
    flexbox,
    fontSize,
    position,
    border,
    SpaceProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    PositionProps,
    DisplayProps,
    BorderProps,
} from 'styled-system';

export type BoxProps = { css?: CSSObject } & SpaceProps &
    LayoutProps &
    ColorProps &
    FlexboxProps &
    DisplayProps &
    PositionProps &
    BorderProps;

export const Box = styled.div<BoxProps>(
    {
        boxSizing: 'border-box',
    },
    space,
    color,
    fontSize,
    flexbox,
    position,
    border,
    layout,
    (props) => props.css
);
