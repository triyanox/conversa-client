import Head from "next/head";
import NavBar from "./NavBar";
import { ReactNode } from "react";
import Footer from "./Footer";
import { useUser } from "../hooks/User";

const Layout = (props: {
  pageTitle?: string;
  siteName?: string;
  description?: string;
  children?: ReactNode;
  preview?: string;
}) => {
  const { loggedIn } = useUser();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="follow, index" />
        <title>{props.pageTitle}</title>
        <meta
          name="description"
          content="Conversa - Messenger of the new Era"
        />
        <meta name="author" content="Mohamed Achaq" />
        <meta
          property="og:site_name"
          content={props.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={props.pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={props.description}
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="Mohamed Achaq,Conversa, HTML, CSS, JavaScript, React, Typescript, NodeJs, Python"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://conversa.achaq.codes/" />
        <meta
          property="og:title"
          content="Conversa - Messenger of the new Era"
        />
        <meta
          property="og:description"
          content="Conversa - Messenger of the new Era"
        />
      </Head>

      <NavBar />
      {props.children}
      {!loggedIn && <Footer />}
    </>
  );
};
export default Layout;
