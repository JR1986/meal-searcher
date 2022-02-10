import React from 'react';
import { render } from '@testing-library/react';
import Search from '../../../pages/index';

it('renders search page', () => {
  const { container } = render(<Search />);
  expect(container).toMatchSnapshot();
});
