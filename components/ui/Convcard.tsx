import { useUser } from "../hooks/User";
import { useChat } from "../hooks/Chat";

type ConvProps = {
  _id: string;
  members: string[];
  membersNames: string[];
  membersEmails: string[];
  messages: string[];
  totalMessages: number;
  lastMessage: string;
  lastMessageTimeStamp: string;
  lastMessageSender: string;
};

const Convcard = (props: ConvProps) => {
  const { setFriend, setIsActive } = useChat();
  const { name, _id, email } = useUser();

  const otherMemberName = props.membersNames.find(
    (member) => member !== name
  ) as string;
  const otherMemberId = props.members.find(
    (member) => member !== _id
  ) as string;
  const otherMemberEmail = props.membersEmails.find(
    (member) => member !== email
  ) as string;

  const handleChat = () => {
    setIsActive(true);
    setFriend({
      friendId: otherMemberId,
      friendName: otherMemberName,
      friendEmail: otherMemberEmail,
    });
  };

  return (
    <button
      onClick={handleChat}
      className="w-full px-6 py-2 flex flex-col justify-center items-start bg-zinc-200 dark:bg-zinc-800 rounded-lg gap-1"
    >
      <h1 className="text-lg font-bold md:text-xl">{otherMemberName}</h1>
      <h1 className="text-md md:text-lg">{props.lastMessage.slice(0, 20)}</h1>
    </button>
  );
};

export default Convcard;
