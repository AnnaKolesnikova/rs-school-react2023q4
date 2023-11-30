import {
  BrowserRouter,
  //   RouterProvider,
  //   createMemoryRouter,
} from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { appRouter as routes } from '../routes/router';
import ItemCard from '../components/ItemCard/ItemCard';
import { characterDataMock } from './utils/utils';

describe('item card', () => {
  it('renders card data correctly', async () => {
    const mockItem = characterDataMock[0];
    render(
      <BrowserRouter>
        <ItemCard {...mockItem} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    const img: HTMLImageElement = screen.getByRole('img');
    expect(img.src).toEqual(mockItem.image);
  });
});
