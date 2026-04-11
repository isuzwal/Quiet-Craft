import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 – Page Not Found',
  description:
    'Sorry, the page you are looking for does not exist. You may have followed a broken link or mistyped the address.',
  robots: 'noindex',
};
export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center  w-full h-screen p-2">
      <div className=" max-w-5xl   relative w-full flex justify-center ">
        <div className=" absolute  inset-1/2 w-40 rouned-full  border border-neutral-950 shadow-[inset_1px_2px_2px_rgba(210,210,210,0.5)] " />
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className="text-9xl font-bold">404</span>
          <p className="text-sm  font-semibold ">it seems you got a little bit lost</p>
          <div className="flex flex-col gap-1 justify-center items-center w-full">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide cursor-pointer hover:text-neutral-300 duration-300  ease-in-out transition-all lucide-fingerprint-pattern-icon lucide-fingerprint-pattern"
              >
                <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                <path d="M2 12a10 10 0 0 1 18-6" />
                <path d="M2 16h.01" />
                <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
              </svg>
            </Link>
            <p className="text-foreground/40  mt-1 text-[12px] font-medium">Go back to homepage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
