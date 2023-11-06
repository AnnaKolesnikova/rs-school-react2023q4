import { NavLink, Outlet } from 'react-router-dom';
import './RootLayout.scss';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
