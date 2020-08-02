import styled from 'styled-components';
import { compose, space, color, typography, TypographyProps, SpaceProps, ColorProps } from 'styled-system';

export const Text = styled.span<SpaceProps & ColorProps & TypographyProps>`
    ${compose(space, color, typography)}
`;
