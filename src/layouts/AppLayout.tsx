import { Outlet } from 'react-router-dom';
import Sidebar from '../components/global/SideBar';
import Logout from '../features/auth/Logout';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <header className="bg-my-grey-0 border-my-grey-200 border-b px-12 py-5">
        <Logout />
      </header>
      <Sidebar />
      <main className="bg-my-grey-50 overflow-auto p-5 pb-16 md:p-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
