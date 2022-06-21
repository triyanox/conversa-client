import { AnimatePresence, motion } from "framer-motion";

type CardProps = {
  message: string;
  user: string;
};

export const MessageCardSender = (props: CardProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transformOrigin: "bottom",
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          dump: 0.9,
          ease: "easeInOut",
          stiffness: 100,
          elapsed: 1,
        }}
        className="w-full my-2 flex justify-end items-center"
      >
        <div className="max-w-xs md:max-w-md px-4 md:px-8 py-2 md:py-4 flex flex-col justify-center items-start gap-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-2xl ">
          {/* <h2 className="text-lg font-bold md:text-xl lg:text-2xl text-black dark:text-white ">
            {props.user}
          </h2> */}
          <h1 className="text-lg lg:text-xl">{props.message}</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const MessageCardReciver = (props: CardProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transformOrigin: "bottom",
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          dump: 0.9,
          ease: "easeInOut",
          stiffness: 100,
          elapsed: 1,
        }}
        className="w-full flex my-2 justify-start items-center"
      >
        <div className="  max-w-xs md:max-w-md px-4 md:px-8 py-2 md:py-4 flex flex-col justify-center items-start gap-1 bg-cyan-100 dark:bg-cyan-900 text-black  dark:text-white rounded-2xl ">
          {/* <h2 className="text-lg font-bold md:text-xl lg:text-2xl text-zinc-900 dark:text-zinc-50 ">
            {props.user}
          </h2> */}
          <h1 className="text-lg lg:text-xl">{props.message}</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
