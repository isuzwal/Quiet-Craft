'use client';

import Link from 'next/link';

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
          <div className="max-w-2xl flex flex-col gap-1 w-full mx-auto ">
            <h1 className="font-medium text-2xl dark:text-secondary-foreground/90  text-primary text-shadow-accent-foreground tracking-tighter leading-normal  w-full mx-auto max-w-2xl">
              A personal collection of UI experiments and interface ideas
            </h1>
            <p className="text-[13px] mt-1.5 sm:mt-0 tracking-tight font-medium text-center text-neutral-600 dark:text-neutral-400 ">
              Quiet Craft is my playground where I explore modern UI components, layouts and small
              design experiments while learning and building.
            </p>
          </div>
        </div>

        <div className="flex  sm:flex-row flex-col gap-6 items-center mt-2  py-2 px-1.5">
          <div className="flex gap-0.5 items-center  ">
            <h1 className="dark:text-secondary-foreground/80 text-primary/90 font-medium text-[15px]">
              Build with
            </h1>
            <div className="flex items-center gap-0.5">
              <div className=" cursor-pointer relative h-6 w-6  overflow-hidden  border-neutral-800 rounded-full flex justify-center items-center">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#00bcd4"
                    d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6"
                  />
                  <path fill="#00bcd4" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2" />
                  <path
                    fill="#00bcd4"
                    d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z"
                  />
                  <path
                    fill="#00bcd4"
                    d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"
                  />
                </svg>
              </div>
              <div className=" cursor-pointer  relative h-6 w-6  overflow-hidden  border-neutral-800 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#38bdf8"
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  />
                </svg>
              </div>
              <div className=" cursor-pointer relative h-6 w-6  overflow-hidden  border-neutral-800 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 12L4 4v16L20 4v16l-4-4" />
                    <path d="m20 12l-8 8l-4-4" />
                  </g>
                </svg>
              </div>
              <div className="  cursor-pointer relative  h-5.5 w-5.5  overflow-hidden  border-neutral-800 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full mb-0.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
                  />
                </svg>
              </div>
            </div>
          </div>

          <Link
            href="/docs"
            className="text-[14px] px-4 py-0.5 bg-primary  text-background font-medium cursor-pointer rounded-md border "
          >
            Browse Craft
          </Link>
        </div>
      </div>
    </div>
  );
};
