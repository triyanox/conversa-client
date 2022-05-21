import Link from "next/link";
const Footer = () => {
  return (
    <footer className="dark:text-bright-gray-50 w-full mb-4 mt-8 md:mt-16 text-zinc-800 dark:text-zinc-200 px-8 md:px-12">
      <div className="w-full flex flex-row items-center justify-center md:justify-start px-5 py-8 ">
        <h1 className=" hidden sm:flex items-center font-medium text-zinc-800 dark:text-zinc-200 justify-start">
          <span className="text-lg md:text-xl">Conversa</span>
        </h1>
        <p className="text-md mt-4 text-zinc-800 dark:text-zinc-200 sm:ml-4 sm:mt-0 sm:border-l-2 sm:py-2 sm:pl-4">
          Conversa © 2022 — Made By
          <a
            href="https://achaq.codes"
            className="ml-2 font-bold"
            rel="noopener noreferrer"
            target="_blank"
          >
            Achaq
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
