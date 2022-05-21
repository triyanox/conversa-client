import type { NextPage } from "next";
import Layout from "../components/ui/Layout";
import Login from "../components/ui/Login";

const LoginPage: NextPage = () => {
  return (
    <Layout
      pageTitle="Conversa - Login"
      description="Messenger of the new era"
      siteName="Conversa"
    >
      <Login />
    </Layout>
  );
};

export default LoginPage;
