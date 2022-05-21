import type { NextPage } from "next";
import Layout from "../components/ui/Layout";
import SettingsPage from "../components/ui/SettingsPage";

const LoginPage: NextPage = () => {
  return (
    <Layout
      pageTitle="Settings"
      description="Messenger of the new era"
      siteName="Conversa"
    >
      <SettingsPage />
    </Layout>
  );
};

export default LoginPage;
