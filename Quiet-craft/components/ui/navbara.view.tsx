'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function NavBara() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={` px-1 sm:px-6 sm:py-4 py-1.5  sticky top-0 w-full boder z-50  backdrop-blur-2xl  ${scrolled ? 'shadow-xs   ' : null}   flex justify-between `}
    >
      <div className="flex  items-center gap-6  justify-between   max-w-[22rem]  w-full">
        <Link
          href={'/'}
          className=" text-xl   font-sans font-semibold tracking-tighter font-inter  text-neutral-800 dark:text-neutral-200 cursor-pointer"
        >
          Quiet Craft
        </Link>
        <div className=" hidden sm:flex gap-2 items-center">
          <Link
            href={'/showcase'}
            className="text-sm   inline-flex whitespace-nowrap font-semibold font-sans hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
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
          className=" px-2 py-2 hover:dark:bg-neutral-900 hover:dark:border-neutral-900  hover:bg-neutral-100 hover:border-neutral-100 ease-in-out duration-300 transition-all rounded-lg w-8  flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <Sun className="size-4 dark:text-neutral-300 text-neutral-700" />
          ) : (
            <Moon className="size-4  dark:text-neutral-300 text-neutral-700" />
          )}
        </button>
      </div>
    </nav>
  );
}
export default NavBara;
