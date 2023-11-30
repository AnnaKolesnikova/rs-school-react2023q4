import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRouter } from './routes/router';

const router = createBrowserRouter(appRouter);

export default function App() {
  return <RouterProvider router={router} />;
}
