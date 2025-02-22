import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export default function MainNav() {
  const navLinks = [
    {
      to: '/dashboard',
      icon: <HiOutlineHome className="text-my-grey-400 h-6 w-6" />,
      label: 'Home',
    },
    {
      to: '/bookings',
      icon: <HiOutlineCalendarDays className="text-my-grey-400 h-6 w-6" />,
      label: 'Bookings',
    },
    {
      to: '/cabins',
      icon: <HiOutlineHomeModern className="text-my-grey-400 h-6 w-6" />,
      label: 'Cabins',
    },
    {
      to: '/users',
      icon: <HiOutlineUsers className="text-my-grey-400 h-6 w-6" />,
      label: 'Users',
    },
    {
      to: '/settings',
      icon: <HiOutlineCog6Tooth className="text-my-grey-400 h-6 w-6" />,
      label: 'Settings',
    },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className="text-my-grey-600 hover:bg-my-grey-50 hover:text-my-grey-800 flex items-center gap-3 rounded-lg p-3 text-base font-medium transition-all"
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
