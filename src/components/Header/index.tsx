import React from 'react';
import { Box } from '../../common/Box';
import { Text } from '../../common/Text';

const Header: React.FC<React.PropsWithChildren<unknown>> = (props) => {
    return (
        <Box px={3} py={4} bg="brand-color" as="header">
            <Text color="white">{props.children}</Text>
        </Box>
    );
};

export default Header;
