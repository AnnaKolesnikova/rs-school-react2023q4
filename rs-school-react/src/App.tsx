import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';

const router = createBrowserRouter([
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
