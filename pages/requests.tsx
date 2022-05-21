import type { NextPage } from "next";
import Layout from "../components/ui/Layout";
import Rp from "../components/ui/RequestPage";

const LoginPage: NextPage = () => {
  return (
    <Layout
      pageTitle="Friend Requests"
      description="Messenger of the new era"
      siteName="Conversa"
    >
      <Rp />
    </Layout>
  );
};

export default LoginPage;
