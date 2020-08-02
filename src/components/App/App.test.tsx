import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('renders active and inactive tabs', () => {
    const { getByText } = render(<App />);

    const activeTab = getByText(/active/i);
    expect(activeTab).toBeInTheDocument();

    const favouriteTab = getByText(/favourite/i);
    expect(favouriteTab).toBeInTheDocument();
});
