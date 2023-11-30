import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { appRouter } from '../routes/router';

describe('', () => {
  beforeEach(() => {
    const router = createMemoryRouter(appRouter);
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });

  it('renders characters cards', async () => {
    const cards = await screen.getByTestId('items-list').children;
    expect(cards.length > 0).toBe(true);
  });
});
