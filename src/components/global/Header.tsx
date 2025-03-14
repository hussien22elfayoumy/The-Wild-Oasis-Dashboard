import { Link } from 'react-router-dom';
import Logout from '../../features/auth/Logout';
import { useUser } from '../../features/auth/useUser';
import Button from './Button';
import { useTheme } from '../../contexts/ThemeContext';
import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2';
import { LuPanelRightClose, LuPanelRightOpen } from 'react-icons/lu';
import { useSidebar } from '../../contexts/SidebarContext';

export default function Header() {
  const { user } = useUser();
  const { toggleDarkMode, darkMode } = useTheme();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <header className="bg-my-grey-0 border-my-grey-200 flex items-center justify-between border-b px-12 py-3 ps-5">
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer transition-all"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <LuPanelRightOpen className="size-8" />
          ) : (
            <LuPanelRightClose className="size-8" />
          )}
        </button>
        <div className="border-my-brand-600 size-10 overflow-hidden rounded-full border-2">
          <img
            src={user?.user_metadata?.avatar || 'default-user.jpg'}
            className="h-full w-full object-cover"
            alt={`Avatar for the user`}
          />
        </div>
        <span className="hover:text-my-brand-600 font-medium capitalize transition-colors">
          <Link to="/account">{user?.user_metadata?.fullName}</Link>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={toggleDarkMode}>
          {darkMode ? (
            <HiMiniSun className="size-5" />
          ) : (
            <HiMiniMoon className="size-5" />
          )}
        </Button>
        <Logout />
      </div>
    </header>
  );
}
