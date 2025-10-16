
import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <main className="container mx-auto px-4 py-6 max-w-md">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}