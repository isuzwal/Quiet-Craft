import { useAnimate, motion, stagger } from "motion/react";
import React, { useEffect } from "react";

export const TextAnimation = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Hello it me uzwal  intorvort ,be with  own place .F**K  the this world !";
  useEffect(() => {
    animationtext();
  });
  const animationtext = () => {
    animate(
      "p",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 1,
        ease: "easeInOut",
        delay: stagger(0.05),
      }
    );
  };
  return (
    <div
      ref={scope}
      className="max-w-2xl mx-auto w-full flex  justify-center items-center text-white"
    >
      {text.split("").map((word, idx) => (
        <motion.p
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          className="inline-block text-2xl  font-semibold"
          key={word + idx}
        >
          {word} &nbsp;
        </motion.p>
      ))}
    </div>
  );
};
