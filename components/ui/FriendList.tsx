import Avatar from "./Avatar";
import FriendsCard from "./FriendsCard";

type Props = {
  friends?: {
    friendId: string;
    friendName: string;
    friendEmail: string;
  }[];
};
const FriendList = ({ friends }: Props) => {
  return (
    <div className="flex mt-8 flex-col w-full justify-start items-center gap-2 px-4">
      {friends && friends.map((friend) => <FriendsCard {...friend} />)}
    </div>
  );
};

export default FriendList;
