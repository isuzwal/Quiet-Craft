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
      className={` max-w-7xl mx-auto  px-1.5  sm:py-2 py-1.5  sticky top-0 w-full boder z-50  backdrop-blur-2xl  ${scrolled ? '   ' : null}   flex justify-between `}
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
          className=" px-2 py-2   cursor-pointer w-8  flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
        </button>
      </div>
    </nav>
  );
}
export default NavBara;
