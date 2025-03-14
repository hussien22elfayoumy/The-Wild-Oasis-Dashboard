import { createContext, useContext, useEffect, useState } from 'react';

type SidebarCtx = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};
const SidebarContext = createContext<SidebarCtx>({
  isSidebarOpen: true,
  toggleSidebar: () => {},
});

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isSidebarOpen) return;
      if (window.innerWidth < 768) {
        if (isSidebarOpen) setIsSidebarOpen(false);
      } else {
        if (isSidebarOpen) return;
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ctxValue = {
    isSidebarOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={ctxValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);

  return ctx;
}
