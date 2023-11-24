import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { appRouter } from '../routes/router';
import { store } from '../state/store';
import '@testing-library/jest-dom';

describe('', () => {
  beforeEach(() => {
    const router = createMemoryRouter(appRouter);

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });

  it('', async () => {
    const card = await screen.findAllByTestId('item-card');
    fireEvent.click(card[0]);
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeInTheDocument();
    });
  });
});
