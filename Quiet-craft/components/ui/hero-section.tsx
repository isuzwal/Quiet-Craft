export const HeroSection = () => {
  return (
    <div className="w-full  py-10 ">
      <div className="flex   py-10 justify-center items-center">
        <div
          className="inline-flex gap-2 px-4 py-1  group border justify-between items-center duration-300 ease-in-out transition-all text-foreground/70
           hover:text-foreground/60 hover:bg-neutral-100 dark:text-foreground/70
         dark:border-neutral-900  dark:hover:bg-neutral-900/70
         border-neutral-200 shadow-xs rounded-2xl"
        >
          <span className="text-sm">🎉</span>
          <span className="text-foreground/70 text-sm">{' | '}</span>
          <p className="text-sm font-medium  flex  gap-1 items-end ">
            Craft a your design
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
              className=" group-hover:text-neutral-600 group-hover:dark:text-neutral-100
              group-hover:translate-x-1 duration-300 ease-in-out transition-all
              
              lucide  lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>{' '}
        </div>
      </div>
    </div>
  );
};
