import { Navigate } from 'react-router-dom';
import { useUser } from '../../features/auth/useUser';
import Spinner from './Spinner';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // render spinner while this is happen
  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  //  if no user return to login
  if (!isAuthenticated && !isLoading) return <Navigate to="/login" />;

  // if user go to app
  if (isAuthenticated) return children;
}
