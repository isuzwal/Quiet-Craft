interface Childprops {
  children: React.ReactNode;
}
export const Screen = ({ children }: Childprops) => {
  return <div className="max-w-5xl   min-h-screen mx-auto w-full px-2 py-1.5 ">{children}</div>;
};
