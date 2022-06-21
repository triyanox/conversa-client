import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../components/hooks/User";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps, router }: AppProps) {
  const NextRouter = useRouter();
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    link: "",
    isDemo: true,
    iat: 0,
    loggedIn: false,
  });
  useEffect(() => {
    try {
      let jwt: any = localStorage.getItem("token");
      let decoded: {
        _id: string;
        name: string;
        email: string;
        link: string;
        isDemo: boolean;
        iat: number;
        loggedIn: boolean;
      } = jwtDecode(jwt);
      setUser({
        _id: decoded._id,
        name: decoded.name,
        email: decoded.email,
        link: decoded.link,
        isDemo: decoded.isDemo,
        iat: decoded.iat,
        loggedIn: true,
      });
      if (
        NextRouter.pathname === "/login" ||
        NextRouter.pathname === "/signup"
      ) {
        window.location.replace("/");
      }
    } catch {
      if (
        NextRouter.pathname !== "/login" &&
        NextRouter.pathname !== "/" &&
        NextRouter.pathname !== "/signup"
      ) {
        window.location.replace("/login");
      }
      setUser({ ...user, loggedIn: false });
    }
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transformOrigin: "50% 50%" }}
        exit={{ opacity: 0, transformOrigin: "center" }}
        transition={{
          duration: 0.5,
          damping: 300,
          ease: "easeInOut",
          stiffness: 300,
        }}
      >
        <UserContext.Provider value={user}>
          <NextThemesProvider attribute="class">
            <SWRConfig>
              <Component {...pageProps} />{" "}
            </SWRConfig>
          </NextThemesProvider>
        </UserContext.Provider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
