'use client';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app.sidebar';
import { PanelLeftIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarOpenButton />
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <div className="h-12 w-full flex justify-between items-center px-2 border-b">
            <span className="text-sm ml-6.5 font-medium">Hello</span>
            <MobileSidebarButton />
          </div>
          <main className="flex-1 p-2">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// sideabr Desktop open sideabr
export function SidebarOpenButton() {
  const { setOpen, state } = useSidebar();
  const isMobile = useIsMobile();

  if (!isMobile && state === 'collapsed') {
    return (
      <div className="fixed left-2 top-3 z-10 ">
        <button
          className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-md border-1.5 border-neutral-700 text-neutral-400 bg-neutral-800"
          onClick={() => setOpen(true)}
        >
          <PanelLeftIcon className="size-4.5" />
        </button>
      </div>
    );
  }

  return null;
}

// for mobile sidebar
export function MobileSidebarButton() {
  const { setOpenMobile } = useSidebar();
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <button
      className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-md border border-neutral-700 text-neutral-400 bg-neutral-800"
      onClick={() => setOpenMobile(true)}
    >
      <PanelLeftIcon className="size-4.5" />
    </button>
  );
}
