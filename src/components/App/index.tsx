import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';
import Header from '../Header';
import ListingsContainer from '../../containers/Listings';

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <Header>LISTINGS MANAGEMENT</Header>
            <main>
                <ListingsContainer />
            </main>
        </ThemeProvider>
    );
};

export default App;
