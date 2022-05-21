import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useChat } from "../hooks/Chat";
import MessageInput from "../Inputs/Message";
import Avatar from "./Avatar";
import { FiSend } from "react-icons/fi";
import io from "socket.io-client";
import * as conversation from "../../lib/conversation";
import { useUser } from "../hooks/User";
import { MessageCardReciver, MessageCardSender } from "./MessageCard";
import { CloseButton, DeleteButton } from "./Buttons";
import socketConfig from "../../config/socket.json";
import DelPopUp from "./DeletePopUp";
import toast, { Toaster } from "react-hot-toast";

const socket = io(socketConfig.socketUrl);

type MessageList = {
  sender: string;
  receiver: string;
  message: string;
};

const Chat = () => {
  let [isOpen, setIsOpen] = useState(false);

  const openDelPopUp = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleDeleteConv = async () => {
    try {
      await conversation.deleteConversation(roomId);
      setFriend({
        friendName: "",
        friendId: "",
        friendEmail: "",
      });
      setIsActive(false);
      closeModal();
      toast.success("Conversation deleted!");
    } catch (ex: any) {
      toast.error(ex.response.data);
      closeModal();
    }
  };

  const { friend, setFriend, isActive, setIsActive } = useChat();
  const { _id, name } = useUser();
  const chatBox = useRef<HTMLDivElement>(null);
  const [messageList, setMessageList] = useState<MessageList[]>([]);
  const [data, setData] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    if (isActive) {
      conversation.getConversation(_id, friend.friendId).then((res) => {
        setMessageList(res.data.messages);
        if (roomId !== "") {
          socket.emit("leave", roomId);
        }
        if (roomId !== res.data.roomId) {
          setRoomId(res.data._id);
          socket.emit("join", res.data._id);
        }
      });
      scrollBottom();
    }
  }, [friend]);

  useEffect(() => {
    const listener = (data: {
      room: string;
      sender: string;
      receiver: string;
      message: string;
    }) => {
      setMessageList((prevState) => [...prevState, data]);
      scrollBottom();
    };
    socket.on("message", listener);
    return () => {
      socket.off("message", listener);
    };
  }, [socket]);

  useLayoutEffect(() => {
    if (chatBox.current) {
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }
  }, [messageList]);

  const hanldeSend = async () => {
    const newData = {
      room: roomId,
      sender: _id,
      receiver: friend.friendId,
      message: data,
    };
    const sent = conversation.postMessage(newData);
    try {
      await sent;
      setData("");
      socket.emit("message", newData);
    } catch {}
  };

  const scrollBottom = () => {
    if (chatBox.current) {
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }
  };

  const handleClose = () => {
    setIsActive(false);
    setFriend({
      friendId: "",
      friendName: "",
      friendEmail: "",
    });
    setData("");
    setMessageList([]);
  };

  return (
    <section className="w-full h-3/5  md:py-0 md:h-screen flex lg:bg-zinc-100 lg:dark:bg-zinc-900 rounded-lg flex-row items-center justify-center px-4 md:px-8">
      {!isActive && (
        <div className="w-full py-16 justify-center gap-4 items-center flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-center text-black dark:text-white">
            Currently you have no active chats
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white">
            Start a chat !
          </h2>
        </div>
      )}
      {isActive && (
        <div className="w-full text-xl md:text-2xl h-full justify-center  items-center flex flex-col">
          <div className="flex px-4 md:px-8 rounded-xl z-10 shadow-xl  py-4 mt-4 justify-between items-center bg-zinc-200 dark:bg-zinc-800 w-full gap-4">
            <div className="w-full flex justify-start items-center gap-4">
              <Avatar name={friend.friendName} />
              {/* <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                {friend.friendName}
              </h1> */}
            </div>
            <div className="w-full flex justify-end items-center gap-4">
              <DeleteButton handleDelete={openDelPopUp} />
              <CloseButton handleClose={handleClose} />
            </div>
          </div>
          <div
            ref={chatBox}
            className="md:h-full h-screen rounded-xl overflow-y-auto px-3 md:px-4 lg:px-8 w-full block flex-col justify-center py-4 items-center  "
          >
            {messageList.map(
              (message: {
                sender: string;
                receiver: string;
                message: string;
              }) =>
                message.sender === _id ? (
                  <MessageCardSender user={name} message={message.message} />
                ) : (
                  <MessageCardReciver
                    user={friend.friendName}
                    message={message.message}
                  />
                )
            )}
            {messageList.length === 0 && (
              <h1 className="text-xl text-center py-16 md:text-2xl font-bold text-black dark:text-white">
                You have no messages yet
              </h1>
            )}
          </div>
          <div
            className={`
          ${isOpen ? "hidden" : ""}
          shadow-xl  sticky lg:relative z-50 bottom-4 transition-all duration-300 lg:bottom-auto flex px-4 md:px-8 rounded-xl mb-6 py-2  justify-between items-center bg-zinc-200 dark:bg-zinc-800 w-full gap-4`}
          >
            <MessageInput setForm={setData} form={data} />
            <button
              onClick={hanldeSend}
              className="text-4xl active:scale-90 duration-300 transition-all"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
      <DelPopUp
        handleDelete={handleDeleteConv}
        convId={roomId}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </section>
  );
};

export default Chat;
