import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <NavLink to="not-found">Not Found</NavLink>
          </nav>
        </header>
        <ErrorBoundary>
          <Routes>
            <Route index element={<Home />} />
            <Route path="not-found" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
