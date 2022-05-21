import { useTheme } from "next-themes";
import { WiMoonFull } from "react-icons/wi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      whileTap={{ scale: 0.7, rotate: -30, elevation: 10 }}
      transition={{ duration: 0.3, damping: 10 }}
    >
      {mounted && (
        <button
          aria-label="Light Theme"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="cursor-pointer flex justify-center items-center text-3xl text-black transition-all duration-500 active:rotate-90 dark:text-white"
        >
          <WiMoonFull />
        </button>
      )}
    </motion.div>
  );
};

export default SwitchTheme;
