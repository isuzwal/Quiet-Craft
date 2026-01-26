import { Geist, Geist_Mono, Inter } from "next/font/google";
import { cn } from "./utils";

const InterFont = Inter({
  variable:"--font-inter",
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


const FontMono=Geist_Mono({
  subsets:["latin"],
  variable:"--font-mono"
})

const FontSans=Geist({
  variable:"--font-sans",
   subsets:["latin"]
})

export const  fontVariables=cn(
    InterFont.variable,
    FontMono.variable,
    FontSans.variable
)