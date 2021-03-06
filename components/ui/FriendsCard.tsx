import { useChat } from "../hooks/Chat";
import Avatar from "./Avatar";

type FriendProp = {
  friend: {
    friendId: string;
    friendName: string;
    friendEmail: string;
  };
  Clicked: (isOpen: boolean) => void;
};

type WithAccept = {
  Friend: {
    _id: string;
    name: string;
    email: string;
  };
  accept: (id: string) => void;
};

const FriendsCard = (props: FriendProp) => {
  const { setIsActive, setFriend } = useChat();
  const handleChat = () => {
    props.Clicked(false);
    setIsActive(true);
    setFriend({
      friendId: props.friend.friendId,
      friendName: props.friend.friendName,
      friendEmail: props.friend.friendEmail,
    });
  };
  return (
    <button
      onClick={handleChat}
      className="w-full px-4  py-2 flex flex-row justify-start items-center bg-zinc-100 dark:bg-zinc-900 rounded-lg gap-8"
    >
      <Avatar name={props.friend.friendName} />
      <h1>{props.friend.friendName}</h1>
    </button>
  );
};
export default FriendsCard;

export const FriendsCardWithAccept = (props: WithAccept) => {
  return (
    <div className="w-full px-4 md:px-8  py-3 flex flex-row justify-between items-center bg-zinc-100 dark:bg-zinc-900 rounded-2xl ">
      <div className="flex justify-start items-center gap-8">
        <Avatar name={props.Friend.name} />
        <h1 className="text-xl md:text-2xl font-bold">{props.Friend.name}</h1>
      </div>
      <button
        className="py-2 px-4 md:px-8 rounded-xl text-lg md:text-xl font-bold text-white dark:text-black bg-black dark:bg-white"
        onClick={() => {
          props.accept(props.Friend._id);
        }}
      >
        Accept
      </button>
    </div>
  );
};
