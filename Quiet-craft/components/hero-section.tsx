'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
export const HeroSection = () => {
  return (
    <div className="w-full  py-10 ">
      <div className="flex flex-col gap-4   py-10 justify-center items-center">
        <button
          // href="/craft"
          className="inline-flex  gap-2 group px-4 py-1.5 relative justify-between items-center duration-300 ease-in-out transition-all text-foreground/70 hover:text-foreground/60 hover:bg-neutral-100 dark:text-foreground/70
          dark:hover:bg-neutral-950/80 shadow-xs rounded-2xl"
        >
          <span className=" absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-blue-400 via-neutral-200 to-red-400 opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-[1px] rounded-2xl  bg-white dark:bg-neutral-900  pointer-events-none " />
          <span className="text-sm z-10">🎉</span>
          <span className="text-foreground/70 text-sm z-10">{' | '}</span>
          <p className="text-sm font-medium z-10 flex gap-1 items-end">
            Personal UI Experiments
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" group-hover:text-neutral-600 group-hover:dark:text-neutral-100 group-hover:translate-x-1 transition-all duration-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </button>
        <div className="w-full flex flex-col mt-4 text-center gap-1 justify-center items-center ">
          <div className="max-w-xl flex flex-col gap-1 w-full mx-auto ">
            <h1 className="font-medium  text-2xl sm:text-4xl dark:text-secondary-foreground/90  text-primary text-shadow-accent-foreground tracking-tighter   ">
              A personal collection of UI experiments and interface ideas
            </h1>
            <p className="text-[13px] mt-1.5 sm:mt-0 tracking-tight font-medium text-center text-neutral-600 dark:text-neutral-400 ">
              Quiet Craft is my playground where I explore modern UI components, layouts and small
              design experiments while learning and building.
            </p>
          </div>
        </div>

        <div className="flex  sm:flex-row flex-col gap-3 items-center mt-2  py-2 px-1.5">
          <motion.button
            whileHover="hover"
            initial="rest"
            className="relative overflow-hidden text-[14px] group px-4 py-0.5 bg-primary text-background font-medium cursor-pointer rounded-md border"
          >
            <Link href="/docs">
              <div className="relative h-5 overflow-hidden">
                <motion.span
                  variants={{
                    rest: { y: '0%' },
                    hover: { y: '-100%' },
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="block"
                >
                  Explore Docs
                </motion.span>

                <motion.span
                  variants={{
                    rest: { y: '100%' },
                    hover: { y: '0%' },
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  See Docs
                </motion.span>
              </div>
            </Link>
          </motion.button>
          <Link
            href="/docs/animation-card"
            className="text-[14px] px-4 py-0.5  font-medium cursor-pointer dark:bg-neutral-950 rounded-md border dark:border-neutral-900/80  "
          >
            Explore Components
          </Link>
        </div>
      </div>
    </div>
  );
};
