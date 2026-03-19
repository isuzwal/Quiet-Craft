'use client';

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
      className={` max-w-7xl mx-auto  sm:py-2 py-1.5  sticky top-0 w-full boder z-50  backdrop-blur-2xl  ${scrolled ? '   ' : null}   flex justify-between `}
    >
      <div className="flex items-center  w-full    gap-1.5 justify-between">
        <div className="flex  items-center gap-6">
          <Link
            href={'/'}
            className="   text-xl   font-sans font-semibold tracking-tighter font-inter  text-neutral-800 dark:text-neutral-200 cursor-pointer"
          >
            Quiet Craft
          </Link>
        </div>
        <button
          onClick={handleTheme}
          className=" px-2 py-2 hover:dark:bg-neutral-900 hover:dark:border-neutral-900  hover:bg-neutral-100 hover:border-neutral-100 ease-in-out duration-300 transition-all rounded-lg w-8  flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 15 15"
              fill="currentColor"
              className="h-5 w-5 text-white"
            >
              <title>Circle Theme</title>
              <path
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 15 15"
              fill="currentColor"
              className="h-5 w-5 text-black"
            >
              <title>Circle Theme</title>
              <path
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
export default NavBara;
