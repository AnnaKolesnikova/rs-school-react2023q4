import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import ItemDetails from '../components/ItemDetails/ItemDetails';

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
  },
];
