import { Outlet } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import ItemDetails from '../components/ItemDetails/ItemDetails';
import NotFound from '../components/NotFound/NotFound';

export const appRouter = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'page/:page_id',
        element: <Home />,
        children: [{ path: 'details/:item_id', element: <ItemDetails /> }],
      },
    ],
    errorElement: <NotFound />,
  },
];
