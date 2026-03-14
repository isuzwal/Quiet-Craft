'use client';
import Link from 'next/link';
import { Sidebar, SidebarContent, SidebarGroupContent, SidebarHeader, useSidebar } from './sidebar';
import { PanelLeftIcon, SidebarClose } from 'lucide-react';
import { ScrollArea } from './scroll-area';
import { Separator } from './separator';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './button';
export function AppSidebar() {
  const { setOpen, setOpenMobile } = useSidebar();
  const mobile = useIsMobile();

  return (
    <Sidebar
      side={mobile ? 'right' : 'left'}
      className="bg-black/95 backdrop-blur-md w-[16rem] z-20"
    >
      <SidebarHeader>
        <div className=" w-full    ">
          <div className="  flex  flex-col gap-3 justify-start items-start  px-4  py-1.5 ">
            <div className="w-full text-xl   justify-between items-center flex  font-sans font-semibold tracking-tighter font-inter  text-neutral-800 dark:text-neutral-200 ">
              <span>Quiet Craft</span>
              {mobile ? (
                <button
                  className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-md border-1.5 border-neutral-700 text-neutral-400 bg-neutral-800"
                  onClick={() => setOpenMobile(false)}
                >
                  <SidebarClose className="size-4.5" />
                </button>
              ) : (
                <button
                  className="cursor-pointer flex items-center justify-center w-6 h-6 rounded-md border-1.5 border-neutral-700 text-neutral-400 bg-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  <SidebarClose className="size-4.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </SidebarHeader>

      <ScrollArea className="h-full w-full  px-2 py-2 mt-1.5">
        <div className="flex   justify-start">
          <Link
            href="/docs"
            className="text-[14px]  gap-2   inline-flex font-semibold whitespace-nowrap font-sans font-inter dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-900
             hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
             cursor-pointer duration-300 transition-all ease-in-out px-4 py-1 justify-center  items-center rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-list-start"
              aria-hidden="true"
            >
              <path d="M3 5h6"></path>
              <path d="M3 12h13"></path>
              <path d="M3 19h13"></path>
              <path d="m16 8-3-3 3-3"></path>
              <path d="M21 19V7a2 2 0 0 0-2-2h-6"></path>
            </svg>
            <span>Introduction</span>
          </Link>
        </div>
      </ScrollArea>
    </Sidebar>
  );
}
