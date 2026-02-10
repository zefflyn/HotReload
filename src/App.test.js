// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HotReload title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HotReload/i);
    expect(titleElement).toBeInTheDocument();
});
