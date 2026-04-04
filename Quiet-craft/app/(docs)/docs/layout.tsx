'use client';

import { AppSidebar } from '@/components/ui/app.sidebar';
import { SidebarProvider, SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

import { Moon, SidebarClose, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex  justify-center items-center  min-h-screen  border w-full">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main className="flex-1 min-w-0 flex flex-col w-full">
          <StickyNava theme={theme} handleTheme={handleTheme} />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}

interface Props {
  theme?: string;
  handleTheme: () => void;
}
const StickyNava = ({ theme, handleTheme }: Props) => {
  const { toggleSidebar, isMobile, openMobile, open } = useSidebar();
  const isOpen = isMobile ? openMobile : open;
  return (
    <nav className="  px-6  max-w-7xl  w-full mx-auto  sm:py-2 py-1.5  sticky top-0   z-50  backdrop-blur-xl    flex justify-between ">
      <div className="flex items-center  w-full    gap-1.5 justify-between">
        <div className="flex  items-center gap-6">
          {!isOpen && (
            <button
              className="cursor-pointer flex items-center justify-center w-6.5 h-6.5 rounded-md border-2 border-neutral-200 dark:border-neutral-800 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800"
              onClick={toggleSidebar}
            >
              <SidebarClose className="size-4.5 dark:text-neutral-400 text-neutral-600" />
            </button>
          )}
        </div>
        <button
          onClick={handleTheme}
          className=" px-2 py-2   cursor-pointer w-8  flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
        </button>
      </div>
    </nav>
  );
};
