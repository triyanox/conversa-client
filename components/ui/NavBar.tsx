import NextLink from "next/link";
import { useRouter } from "next/router";
import SwitchTheme from "./SwitchTheme";
import { useUser } from "../hooks/User";
import cn from "classnames";
import { Fragment } from "react";
interface NavItems {
  href: string;
  text: string;
}

function NavItem({ href, text }: NavItems) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-zinc-900 dark:text-zinc-200"
            : "font-normal text-black dark:text-white",
          "inline-block rounded-lg p-1 text-lg md:text-xl transition-all hover:bg-gray-200 dark:hover:bg-zinc-800 sm:px-3 sm:py-2"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const NavBar = () => {
  const handleLogout = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const { loggedIn } = useUser();

  return (
    <section className="fixed w-full z-50">
      <nav className="w-full backdrop-blur-2xl flex justify-between items-center py-2 px-8 md:px-12 ">
        <NextLink href="/">
          <a className="text-lg md:text-xl text-black dark:text-white font-bold cursor-pointer">
            Conversa
          </a>
        </NextLink>
        <div className="flex w-full flex-row justify-end items-center gap-4 ">
          {!loggedIn ? (
            <Fragment>
              <NavItem href="/signup" text="Sign Up" />
              <NavItem href="/login" text="Log In" />
            </Fragment>
          ) : (
            <button
              onClick={handleLogout}
              className="inline-block rounded-lg p-1
           font-bold text-zinc-900 transition-all hover:bg-gray-200 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:px-3 sm:py-2"
            >
              <span className="capsize">Log Out</span>
            </button>
          )}

          <SwitchTheme />
        </div>
      </nav>
    </section>
  );
};
export default NavBar;
