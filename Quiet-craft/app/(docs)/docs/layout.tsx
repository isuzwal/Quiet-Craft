'use client';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  mx-auto max-w-7xl min-h-screen w-full">
      <main className=" p-2">{children}</main>
    </div>
  );
}
