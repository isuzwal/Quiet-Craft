import Image from 'next/image';

export const CardUserProfile = () => {
  return (
    <div className=" border flex justify-center items-center p-4">
      <div className="w-64 h-95  border-3 rounded-3xl p-2.5 bg-white/90 dark:bg-white/80 opacity-80 backdrop-blur-[1px]  border-neutral-200/80 ">
        {/* <div className="rounded-[12px] h-full p-1 bg-background border ">
          <div className="w-full border  h-24 relative rounded-[8px] overflow-hidden ">
            <Image src="/images/1.jpeg" alt="cover_image" fill className="h-full w-full  " />
          </div>
        </div> */}
      </div>
    </div>
  );
};
