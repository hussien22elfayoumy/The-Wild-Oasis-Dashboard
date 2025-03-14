// import Uploader from '../../data/Uploader';
import { useSidebar } from '../../contexts/SidebarContext';
import Logo from './Logo';
import MainNav from './MainNav';

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();
  return (
    <aside
      className={`bg-my-grey-0 border-my-grey-200 row-span-full flex flex-col gap-8 border-r py-8 transition-all duration-400 ${isSidebarOpen ? 'p-8' : ''}`}
    >
      <Logo />
      <MainNav />

      {/*  TODO: Remove later */}
      {/* <Uploader /> */}
    </aside>
  );
}
