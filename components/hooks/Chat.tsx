import { createContext, useContext, useState } from "react";

type ChatContextType = {
  friend: {
    friendId: string;
    friendName: string;
    friendEmail: string;
  };
  isActive: boolean;
  setFriend: (friend: {
    friendId: string;
    friendName: string;
    friendEmail: string;
  }) => void;
  setIsActive: (isActive: boolean) => void;
};

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatContext");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [friend, setFriend] = useState<{
    friendId: string;
    friendName: string;
    friendEmail: string;
  }>({
    friendId: "",
    friendName: "",
    friendEmail: "",
  });

  const [isActive, setIsActive] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        friend,
        isActive,
        setFriend,
        setIsActive,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
