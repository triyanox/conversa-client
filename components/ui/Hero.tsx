import main from "../../assets/main.svg";

import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="md:h-screen pt-16 md:mt-0  flex flex-col-reverse items-center justify-center md:flex-row px-12">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            translateX: 0,
            opacity: 1,
            transformOrigin: "bottom",
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: "easeInOut",
            },
          },
          hidden: {
            translateX: -100,
            opacity: 0,
            transformOrigin: "bottom",
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: "easeInOut",
            },
          },
        }}
        className="w-full justify-center items-start flex gap-2 flex-col"
      >
        <h1 className="text-3xl mb-4 md:text-4xl font-bold text-black dark:text-white">
          Conversa
        </h1>
        <h2 className="text-2xl mb-2 md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
          Welcome to Messenger of the new Era
        </h2>
        <h3 className="text-lg mb-4 md:text-xl text-zinc-600 dark:text-zinc-400">
          Making the world a better place by connecting people and providing the
          best chatting experience for everyone.
        </h3>
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            translateY: 0,
            scale: 1,
            opacity: 1,
            transformOrigin: "bottom",
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: "easeInOut",
            },
          },
          hidden: {
            translateY: 100,
            scale: 0.6,
            opacity: 0.2,
            transformOrigin: "bottom",
            transition: {
              duration: 0.5,
              dump: 0.8,
              stiffness: 100,
              ease: "easeInOut",
            },
          },
        }}
        className="w-full py-8 md:py-0 flex justify-center items-center "
      >
        <Image src={main} alt="dark" width={400} height={400} />
      </motion.div>
    </section>
  );
};

export default Hero;
