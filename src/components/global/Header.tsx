import { Link } from 'react-router-dom';
import Logout from '../../features/auth/Logout';
import { useUser } from '../../features/auth/useUser';

export default function Header() {
  const { user } = useUser();
  return (
    <header className="bg-my-grey-0 border-my-grey-200 flex items-center justify-between border-b px-12 py-3">
      <div className="flex items-center gap-2">
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
      <Logout />
    </header>
  );
}
