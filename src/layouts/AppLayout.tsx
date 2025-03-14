import { Outlet } from 'react-router-dom';
import Header from '../components/global/Header';
import Sidebar from '../components/global/SideBar';
import { useSidebar } from '../contexts/SidebarContext';

export default function AppLayout() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`bg-my-grey-0 grid h-screen ${isSidebarOpen ? 'grid-cols-[18rem_1fr] transition-all duration-300' : 'grid-cols-[0rem_1fr] transition-all duration-300'} grid-rows-[auto_1fr]`}
    >
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
