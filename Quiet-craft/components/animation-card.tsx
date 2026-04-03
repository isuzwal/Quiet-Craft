'use client';
import { MessageCircle, Plus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const AnimationCard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex justify-center items-center  px-2 py-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              filter: 'blur(10px)',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className=" flex flex-col h-[27rem] min-h-[27rem] p-4  max-w-80 w-full  border  rounded-lg bg-white shadow-[12px]  border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 "
          >
            <div className="flex flex-col gap-2 ">
              <h2 className="text-black text-[12px]   font-medium dark:text-neutral-200  font-sans">
                Organization UI Components
              </h2>
              <p className="text-[8px]  tracking-tight leading-normal  dark:text-neutral-400 text-neutral-600 font-sans  text-start">
                Clerk&apos;s UI components add turn-key simplicity to complex Organization
                management tasks.
              </p>
            </div>
            <div className=" mt-2 flex flex-col items-center gap-4 justify-center p-2">
              <button
                onClick={() => setOpen(false)}
                className="text-[8px]  flex gap-2 items-center font-sans px-2 py-1 bg-white dark:bg-neutral-800 dark:border-neutral-800/90 dark:text-neutral-300  shadow-[12px] rounded-md border border-neutral-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m21.47 20.829l-2.881-2.881a.572.572 0 0 0-.7-.084a6.854 6.854 0 0 1-7.081 0a.576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69a.57.57 0 0 0 .166.186a12 12 0 0 0 14.113 0a.58.58 0 0 0 .239-.423a.576.576 0 0 0-.172-.453m.002-17.668l-2.88 2.88a.569.569 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0-1.222 3.692a6.86 6.86 0 0 0 .978 3.764a.573.573 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405a.566.566 0 0 1 .232.418a.57.57 0 0 1-.168.448m-7.118 12.261a3.427 3.427 0 1 0 0-6.854a3.427 3.427 0 0 0 0 6.854"
                  />
                </svg>
                Quite Craft <X className="size-3" />
              </button>
            </div>
            <div className=" relative   bg-neutral-100/60 dark:bg-neutral-800/70  dark:border-neutral-800 border flex-1 flex     border-neutral-200  rounded-md ">
              {/*Motio here */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: 'blur(10px)',
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className=" absolute border-neutral-200 dark:border-e-neutral-900 inset-0 h-full w-full bg-white rounded-md dark:bg-neutral-950/80 divide-y  divide-neutral-200  dark:divide-neutral-800 "
              >
                <div className="p-4 gap-2  text-[10px] flex items-start">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-sm
               bg-white dark:bg-neutral-900 rounded-md flex items-center justify-center"
                  >
                    <MessageCircle className="size-4 dark:text-neutral-300 text-neutral-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9px] font-bold dark:text-neutral-300 text-neutral-800">
                      Quiet Craft Components{' '}
                    </p>
                    <p className="text-[8px] mt-0.5  dark:text-neutral-400 text-neutral-600">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="p-4 gap-2  text-[10px] flex items-start">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-sm
               bg-white dark:bg-neutral-900 rounded-md flex items-center justify-center"
                  >
                    <MessageCircle className="size-4 dark:text-neutral-300 text-neutral-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9px] font-bold dark:text-neutral-300 text-neutral-800">
                      Quiet Craft Components{' '}
                    </p>
                    <p className="text-[8px] mt-0.5  dark:text-neutral-400 text-neutral-600">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="p-4 gap-2  text-[10px] flex items-start">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-sm
               bg-white dark:bg-neutral-900 rounded-md flex items-center justify-center"
                  >
                    <MessageCircle className="size-4 dark:text-neutral-300 text-neutral-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9px] font-bold dark:text-neutral-300 text-neutral-800">
                      Quiet Craft Components{' '}
                    </p>
                    <p className="text-[8px] mt-0.5  dark:text-neutral-400 text-neutral-600">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="p-4 gap-2  text-[10px] flex items-start">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-sm
               bg-white dark:bg-neutral-900 rounded-md flex items-center justify-center"
                  >
                    <MessageCircle className="size-4 dark:text-neutral-300 text-neutral-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9px] font-bold dark:text-neutral-300 text-neutral-800">
                      Quiet Craft Components{' '}
                    </p>
                    <p className="text-[8px] mt-0.5  dark:text-neutral-400 text-neutral-600">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="p-4 gap-2  text-[10px] flex  justify-center items-center">
                  <div
                    className="h-5.5 w-5.5 flex-shrink-0 bg-gradient-to-br 
                shadow-sm
               bg-white dark:bg-neutral-900 rounded-md flex items-center justify-center"
                  >
                    <Plus className="size-3.5 dark:text-neutral-300 text-neutral-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] mt-0.5  dark:text-neutral-400 text-neutral-700">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>

              {/*Motio here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
