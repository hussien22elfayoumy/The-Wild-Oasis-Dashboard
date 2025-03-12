import { Outlet } from 'react-router-dom';
import Header from '../components/global/Header';
import Sidebar from '../components/global/SideBar';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-my-grey-50 overflow-auto p-5 pb-16 md:p-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
