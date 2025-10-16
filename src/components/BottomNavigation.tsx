
import { NavLink } from 'react-router-dom';
import { Home, Calendar, BarChart3, BookOpen, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/insights', icon: BarChart3, label: 'Insights' },
  { to: '/education', icon: BookOpen, label: 'Learn' },
  { to: '/profile', icon: User, label: 'Profile' },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center py-2 px-3 rounded-lg transition-colors',
                'text-muted-foreground hover:text-foreground',
                isActive && 'text-primary bg-primary/10'
              )
            }
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}