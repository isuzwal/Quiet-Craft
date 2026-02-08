import Link from 'next/link';

export function AppSidebar() {
  return (
    <div className=" h-full w-[12rem]   ">
      <div className="  flex  flex-col gap-3 justify-start items-start  px-5  py-1.5 ">
        <h1 className="dark:text-neutral-500 text-neutral-600 text-[12px]  font-semibold">
          Getting Started
        </h1>
        <Link
          href="/components/introduction"
          className="text-[12px] inline-flex font-semibold whitespace-nowrap font-sans font-inter dark:text-neutral-300 dark:hover:text-neutral-200 text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-900
             hover:bg-neutral-200/80 hover:border-neutral-200 hover:text-neutral-600
            cursor-pointer duration-300 transition-all ease-in-out px-3 py-1 justify-center  items-center rounded-lg"
        >
          Introduction
        </Link>
      </div>
    </div>
  );
}
