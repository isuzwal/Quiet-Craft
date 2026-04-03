interface ChildreProps {
  children: React.ReactNode;
}
export const CardContainer = ({ children }: ChildreProps) => {
  return (
    <div className="flex justify-center w-full ">
      <div className=" max-w-2xl  w-full mx-auto min-h[30rem] rounded-md h-[30rem] dark:bg-neutral-950/90 border dark:border-neutral-900  border-gray-100 bg-gray-50 flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
