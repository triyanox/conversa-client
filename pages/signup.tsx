import type { NextPage } from "next";
import Layout from "../components/ui/Layout";
import Signup from "../components/ui/Signup";

const SignupPage: NextPage = () => {
  return (
    <Layout
      pageTitle="Conversa - Signup"
      description="Messenger of the new era"
      siteName="Conversa"
    >
      <Signup />
    </Layout>
  );
};

export default SignupPage;
