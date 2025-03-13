import { HiMiniArrowLeftEndOnRectangle } from 'react-icons/hi2';
import Button from '../../components/global/Button';
import { useLogout } from './useLogout';

export default function Logout() {
  const { logoutMutation, isPending } = useLogout();
  return (
    <div>
      <Button
        disabled={isPending}
        onClick={() => logoutMutation()}
        variation="danger"
      >
        <HiMiniArrowLeftEndOnRectangle className="size-5" />
      </Button>
    </div>
  );
}
