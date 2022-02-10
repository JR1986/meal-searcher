import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Search from '../../../pages/index';

describe('Search', () => {
  it('renders the search box', () => {
    render(<Search />);

    const inputNode = screen.getByPlaceholderText('Search meal');

    expect(inputNode).toBeInTheDocument();
  });
});
