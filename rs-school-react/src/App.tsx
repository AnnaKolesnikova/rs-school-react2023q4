import './App.scss';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layouts/root/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
