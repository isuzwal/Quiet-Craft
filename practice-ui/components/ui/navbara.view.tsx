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
    <nav className=" sticky top-0 w-full boder z-50 backdrop-blur-2xl   flex justify-between px-2 py-1.5 mt-1">
      <div className="flex  items-center gap-2  justify-between   max-w-[20rem] w-full">
        <Link
          href={'/'}
          className=" text-lg md:text-xl  font-sans font-semibold font-inter tracking-tight text-neutral-800 dark:text-neutral-200 cursor-pointer"
        >
          Quiet Craft
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href={'/showcase'}
            className="text-[14px] font-medium font-inter font-sans  hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
             dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-700 dark:hover:border-neutral-900 dark:hover:bg-neutral-900 cursor-pointer duration-300 transition-all ease-in-out px-2 py-0.5 justify-center flex items-center rounded-md"
          >
            Showcase
          </Link>
          <Link
            href={'/collections'}
            className="text-[14px] font-semibold font-sans font-inter dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-700 dark:hover:border-neutral-900 dark:hover:bg-neutral-900
             hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
            cursor-pointer duration-300 transition-all ease-in-out px-2 py-0.5 justify-center flex items-center rounded-md"
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
