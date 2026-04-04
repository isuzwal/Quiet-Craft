'use client';
import Link from 'next/link';
import { Sidebar, SidebarHeader, useSidebar } from './sidebar';
import { SidebarClose } from 'lucide-react';
import { ScrollArea } from './scroll-area';
import { DocsLink } from '@/config/docs';

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="dark:bg-black/95  bg-gray-100   border-transparent backdrop-blur-md w-[16rem] z-20">
      <SidebarHeader>
        <div className=" w-full">
          <div className="  flex  flex-col gap-3 justify-start items-start  px-4  py-1.5 ">
            <div className="w-full text-xl   justify-between items-center flex  font-sans font-semibold tracking-tighter font-inter  text-neutral-800 dark:text-neutral-200 ">
              <Link href="/">Quiet Craft</Link>
              <button
                className="cursor-pointer flex items-center justify-center w-6.5 h-6.5 rounded-md border-2 border-neutral-200 shadow-[12px] dark:border-neutral-800 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800"
                onClick={toggleSidebar}
              >
                <SidebarClose className="size-4.5 dark:text-neutral-400 text-neutral-600" />
              </button>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <ScrollArea className="h-full w-full  px-2 py-2 mt-1.5">
        <div>
          <Link
            href="/docs "
            className="text-[14px]  gap-2 w-full  inline-flex font-semibold whitespace-nowrap  font-sans dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-800 dark:hover:border-neutral-900 dark:hover:bg-neutral-900
             hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
             cursor-pointer duration-300 transition-all ease-in-out px-3 py-1 justify-start  items-start rounded-lg"
          >
            <span>Introduction</span>
          </Link>
        </div>
        <div className="w-full  mt-4  p-2  font-semibold whitespace-nowrap  dark:text-neutral-300  text-neutral-800">
          <h1 className="text-[14px] font-sans text-start ">Components</h1>
          <div className="flex flex-col gap-2  mt-2 ">
            {DocsLink.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className=" w-full    rounded-lg  hover:dark:bg-neutral-900  hover:dark:border-neutral-900 text-[12px] font-sans  duration-300 ease-in-out transition-all  px-2 py-1.5 hover:bg-neutral-200/60 hover:border-neutral-100 shadow-[12px] dark:text-neutral-400 text-neutral-700 text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
    </Sidebar>
  );
}
