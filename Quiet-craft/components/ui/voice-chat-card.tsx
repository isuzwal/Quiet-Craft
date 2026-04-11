'use client';
import { ChevronDown, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Avatar, AvatarImage } from './avatar';

export const VoiceChart = () => {
  const [open, setOpen] = useState(true);

  interface Props {
    link: string;
  }
  const FirstImage: Props[] = [
    {
      link: '/images/isuzwal.jpeg',
    },
    {
      link: '/images/first.jpeg',
    },
    {
      link: '/images/second.jpeg',
    },
    {
      link: '/images/wife.jpeg',
    },
    {
      link: '/images/isuzwal.jpeg',
    },
    {
      link: '/images/1.jpeg',
    },
    {
      link: '/images/second.jpeg',
    },
    {
      link: '/images/wife.jpeg',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto w-full flex justify-center py-6">
      <motion.div layout className="w-72 overflow-hidden">
        {/* Header */}
        {open && (
          <div className="p-2 shadow-xs  border-[1.5px] dark:border-neutral-900 flex items-center justify-center dark:bg-neutral-950 bg-slate-100 border-slate-200 rounded-t-2xl">
            <h1 className="text-sm font-sans text-center font-medium text-neutral-700/90 dark:text-neutral-300/90 flex-1">
              Voice Chat
            </h1>
            <button
              onClick={() => setOpen(!open)}
              className="flex cursor-pointer justify-center items-center rounded-md dark:text-neutral-300/90 text-neutral-800/90 w-4.5 h-4.5 bg-slate-200/70 dark:bg-neutral-900/70"
            >
              <X className="size-3 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>
        )}
        <motion.div
          layout
          initial={false}
          animate={{
            width: open ? '18rem' : '14rem',
            padding: open ? '' : '0px',
            borderRadius: open ? '' : '26px',
          }}
          transition={{
            duration: 0.35,
            ease: 'easeInOut',
          }}
          className=" rounded-b-md w-full dark:bg-neutral-950 dark:border-neutral-900 shadow-xs bg-neutral-100 border-neutral-200 border  "
        >
          <div className="px-3 py-2  flex flex-wrap gap-2  ">
            <div className=" flex  gap-2">
              {FirstImage.slice(0, 4).map((src, i) => (
                <Avatar key={i}>
                  <AvatarImage src={src.link} />
                </Avatar>
              ))}
              {open ? null : (
                <div className="flex items-center gap-0.5 ">
                  <span className="text-sm font-sans font-semibold dark:text-neutral-300 text-neutral-800">
                    +{FirstImage.slice(4, 8).length}
                  </span>
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex    cursor-pointer  items-center text-sm "
                  >
                    <ChevronDown className="size-4.5 dark:text-neutral-400 text-neutral-800/90" />
                  </button>
                </div>
              )}
            </div>
            {open && (
              <>
                {FirstImage.slice(4, 8).map((src, i) => (
                  <Avatar key={i}>
                    <AvatarImage src={src.link} />
                  </Avatar>
                ))}
              </>
            )}
          </div>
          {open && (
            <div className="flex  flex-col justify-center items-center gap-1.5 py-1 ">
              <button className=" max-w-[14rem] w-full px-2 py-1.5 text-[13px] font-sans font-medium dark:text-neutral-300/90 text-neutral-800/90 border-[1.5px] bg-slate-100 border-slate-200 dark:bg-neutral-900  dark:border-neutral-900/20 flex justify-center items-center rounded-md">
                Join Now
              </button>
              <p className="text-xs text-neutral-500 text-center font-medium">
                Mic will be muted initially{' '}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface ChildreProps {
  children: React.ReactNode;
}
export const VoiceCardContainer = ({ children }: ChildreProps) => {
  return (
    <div className="flex justify-center w-full ">
      <div className="w-full mx-auto  h-[32rem] rounded-md  dark:bg-neutral-950/90 border dark:border-neutral-900  border-gray-200 bg-gray-100 flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
