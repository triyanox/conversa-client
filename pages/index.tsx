import type { NextPage } from "next";
import { useUser } from "../components/hooks/User";
import Hero from "../components/ui/Hero";
import Layout from "../components/ui/Layout";
import MainPage from "../components/ui/Main";

const Home: NextPage = () => {
  const { loggedIn, name } = useUser();

  return (
    <Layout
      pageTitle={loggedIn ? `Conversa | ${name}` : "Home"}
      description="Conversa is a modern, open-source, and free messaging app"
    >
      {loggedIn ? <MainPage /> : <Hero />}
    </Layout>
  );
};

export default Home;
