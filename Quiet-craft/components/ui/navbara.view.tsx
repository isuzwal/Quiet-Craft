'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

function NavBara() {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <nav className=" sticky top-0 w-full boder z-50 backdrop-blur-2xl   flex justify-between px-2 py-2 mt-2">
      <div className="flex  items-center gap-6  justify-between   max-w-[22rem]  w-full">
        <Link
          href={'/'}
          className=" text-xl   font-sans font-semibold font-inter tracking-tight text-neutral-800 dark:text-neutral-200 cursor-pointer"
        >
          Quiet Craft
        </Link>
        <div className=" hidden sm:flex gap-2 items-center">
          <Link
            href={'/showcase'}
            className="text-sm   inline-flex whitespace-nowrap font-medium font-inter font-sans  hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
             dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-700 dark:hover:border-neutral-900 dark:hover:bg-neutral-900 cursor-pointer duration-300 transition-all ease-in-out px-4 py-1 justify-center  items-center rounded-lg"
          >
            Showcase
          </Link>
          <Link
            href={'/collections'}
            className="text-sm inline-flex font-semibold whitespace-nowrap font-sans font-inter dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-700 dark:hover:border-neutral-900 dark:hover:bg-neutral-900
             hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
            cursor-pointer duration-300 transition-all ease-in-out px-4 py-1 justify-center  items-center rounded-lg"
          >
            Collections
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handleTheme}
          className=" cursor-pointer ease-in-out duration-300 transition-all rounded-md w-10 h-6 flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </nav>
  );
}
export default NavBara;
