import type { NextPage } from "next";
import AddFriend from "../components/ui/AddFriend";
import Layout from "../components/ui/Layout";

const AddFriends: NextPage = () => {
  return (
    <Layout
      pageTitle="Add a Friend"
      description="Messenger of the new era"
      siteName="Conversa"
    >
      <AddFriend />
    </Layout>
  );
};

export default AddFriends;
