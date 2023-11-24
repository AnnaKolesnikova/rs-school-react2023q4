import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { appRouter as routes } from '../routes/router';

describe('not found page', () => {
  it('shows up when the route is invalid', async () => {
    const invalidRoute = '/invalid-route';
    const router = createMemoryRouter(routes, {
      initialEntries: [invalidRoute],
    });

    render(<RouterProvider router={router} />);
    expect(screen.findByText(/We cannot find any characters/));
  });
});
