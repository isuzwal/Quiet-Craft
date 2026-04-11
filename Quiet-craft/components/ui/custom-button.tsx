'use client';
import { CheckCircle, Ellipsis, Plus, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

type Stage = 'idle' | 'adding' | 'added';

export const CustomButton = () => {
  const [stage, setStage] = useState<Stage>('idle');

  const handleClick = () => {
    if (stage !== 'idle') return;
    setStage('adding');
    setTimeout(() => setStage('added'), 1500);
    setTimeout(() => setStage('idle'), 2500);
  };

  return (
    <div className=" w-full   h-full items-center grid grid-cols-2 lg:grid-cols-4 ">
      <div className="flex   items-center justify-center">
        <button
          className="flex items-center gap-1  cursor-pointer justify-center px-2 py-1 rounded-lg text-white text-sm bg-gradient-to-b from-[#E36323] to-[#DF5A18] border border-[#8c3d16] 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.33),0_0px_2px_rgba(252,96,16,0.95)]"
        >
          <span className="">Download for free</span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          className=" relative  cursor-pointer text-xs font-sans font-medium  gap-1.5 w-fit whitespace-nowrap  items-center overflow-hidden inline-flex  border border-dashed dark:border-neutral-800 border-neutral-400 px-2 py-1 rounded-md  bg-slate-100 text-neutral-800/90  dark:text-neutral-300/90 dark:bg-neutral-900"
        >
          <motion.p>Hover me </motion.p>
          <motion.span
            variants={{
              rest: { opacity: 0, x: -5, width: 0 },
              hover: { opacity: 1, x: 4, width: 'auto' },
            }}
            transition={{ duration: 0.25 }}
            className=""
          >
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none">
                <path
                  fill="#ffef5e"
                  d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"
                />
                <path
                  fill="#fff9bf"
                  d="M12 4.826a11.8 11.8 0 0 1 10.994 7.517c0-.114.006-.228.006-.343a11 11 0 1 0-21.994.343A11.8 11.8 0 0 1 12 4.826"
                />
                <path
                  stroke="#191919"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"
                />
                <path
                  stroke="#191919"
                  d="M6.739 10.326a.24.24 0 0 1 0-.478m.001.478a.24.24 0 0 0 0-.478m10.52.478a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478"
                />
                <path
                  fill="#ff808c"
                  stroke="#191919"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.705 15.348a.957.957 0 0 1 .927 1.194a4.782 4.782 0 0 1-9.264 0a.956.956 0 0 1 .927-1.194z"
                />
              </g>
            </svg>
          </motion.span>
        </motion.button>
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          onClick={handleClick}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="  min-w-[120px] text-[12px] font-medium border bg-background shadow-xs  px-4 py-1 rounded-md dark:border-neutral-900/55 border-neutral-200  cursor-pointer text-neutral-700 dark:text-secondary-foreground/70"
        >
          <AnimatePresence mode="wait">
            {stage == 'idle' && (
              <motion.span
                key="idle"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: -3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  x: 6,
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex gap-1 items-center justify-center"
              >
                <Plus className="size-4" />
                <span>Add to card</span>
              </motion.span>
            )}
            {stage === 'adding' && (
              <motion.p
                key="adding"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  x: 10,
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex gap-1 items-center justify-center relative"
              >
                <motion.span
                  className="absolute"
                  initial={{
                    opacity: 1,
                    x: -10,
                    y: -10,
                    scale: 1,
                  }}
                  animate={{
                    opacity: [1, 1, 0],
                    x: [-12, -3, 0],
                    y: [-10, -4, 2],
                    scale: [0.9, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeIn',
                    times: [0, 0.5, 1],

                    delay: 0.2,
                  }}
                >
                  <Ellipsis className="size-3" />
                </motion.span>
                <ShoppingCart className="size-4 text-neutral-500" />
              </motion.p>
            )}
            {stage === 'added' && (
              <motion.span
                key="added"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: -3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  y: 6,
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex gap-1 items-center justify-center  "
              >
                <span>Added</span>
                <CheckCircle className="size-3 " />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      {/*Aniamtion button*/}
      <div className="flex items-center justify-center">
        <motion.button
          className="text-[12px]  px-5 py-0.5  font-medium cursor-pointer dark:bg-neutral-950 rounded-md border dark:border-neutral-900/80  text-neutral-700 dark:text-secondary-foreground/70
          dark:shadow-[inset_0px_2px_4px_rgba(45,35,40,0.5),_inset_0_-2px_4px_rgba(35,35,40,0.5)] 
          shadow-[inset_0_1px_2px_rgba(10,5,3,0.05),_inset_0_-1px_2px_rgba(8,2,6,0.03)]"
          whileHover="hover"
          initial="rest"
        >
          <div className=" h-5  overflow-hidden relative">
            <motion.span
              variants={{
                rest: { y: '0%' },
                hover: { y: '-100%' },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="block"
            >
              Subscribe
            </motion.span>

            <motion.span
              variants={{
                rest: { y: '0%' },
                hover: { y: '-100%' },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className=" block  "
            >
              Follow me
            </motion.span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};
