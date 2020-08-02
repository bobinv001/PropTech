import React from 'react';
import { Box } from '../../common/Box';

const Footer: React.FC<React.PropsWithChildren<unknown>> = (props) => {
    return (
        <Box px={3} py={3} bg="near-black" color="white" as="footer">
            {props.children}
        </Box>
    );
};

export default Footer;
