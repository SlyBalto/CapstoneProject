import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTitle from './PageTitle';

// tests if the titleText is displayed
test('renders the PageTitle with the correct titleText', () => {
    const testTitle = 'Test Page Title';
    render(<PageTitle titleText={testTitle} />);

    // Checks if titleText is displayed in the <h1> element
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
});