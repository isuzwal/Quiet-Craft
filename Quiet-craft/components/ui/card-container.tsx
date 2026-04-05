interface ChildreProps {
  children: React.ReactNode;
}
export const CardContainer = ({ children }: ChildreProps) => {
  return (
    <div className="flex justify-center w-full ">
      <div className="w-full mx-auto  h-[32rem] rounded-md  dark:bg-neutral-950/90 border dark:border-neutral-900  border-gray-200 bg-gray-100 flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
