interface Childprops {
  children: React.ReactNode;
}
export const Screen = ({ children }: Childprops) => {
  return <div className=" max-w-7xl  min-h-screen mx-auto w-full ">{children}</div>;
};
