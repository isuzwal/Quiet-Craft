export const CustomButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="flex items-center gap-1  cursor-pointer justify-center px-2 py-1 rounded-lg text-white text-sm bg-gradient-to-b from-[#E36323] to-[#DF5A18] border border-[#8c3d16] 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.33),0_0px_2px_rgba(252,96,16,0.95)]"
      >
        <span className="">Download for free</span>
      </button>
    </div>
  );
};
