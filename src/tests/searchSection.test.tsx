import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { appRouter } from '../routes/router';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import '@testing-library/jest-dom';

const SEARCH_WORD = 'SearchWord';
const getFromLocalStorage = (word: string): string => {
  return localStorage.getItem(word) || '';
};

describe('search section', () => {
  it('verifies saving search word to local storage', async () => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const searchBtn = await screen.findByTestId('submit-btn');
    const searchInput: HTMLInputElement =
      await screen.findByTestId('search-input');
    expect(searchBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchBtn);

    expect(getFromLocalStorage(SEARCH_WORD)).toEqual(searchInput.value);
  });
});
