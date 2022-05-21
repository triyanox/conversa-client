import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { ChatProvider } from "../hooks/Chat";

const MainPage = () => {
  return (
    <section className="pt-28 w-full flex flex-col lg:flex-row items-center justify-center gap-4 px-8  md:px-12">
      <ChatProvider>
        <Sidebar />
        <Chat />
      </ChatProvider>
    </section>
  );
};

export default MainPage;
