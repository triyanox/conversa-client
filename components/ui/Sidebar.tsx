import { useUser } from "../hooks/User";
import { AvatarWithLink } from "./Avatar";
import { MdOutlineAddCircle } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

import { RiChat1Fill } from "react-icons/ri";
import FriendListModal from "./FriendListModal";
import RecentConv from "./RecentConv";

type FrindsType = {
  friendId: string;
  friendName: string;
  friendEmail: string;
}[];

const Sidebar = () => {
  let [isOpen, setIsOpen] = useState(false);

  const { name } = useUser();
  return (
    <div className="w-full lg:w-2/5 lg:h-screen lg:bg-zinc-100 lg:dark:bg-zinc-900 rounded-lg flex flex-row lg:flex-col gap-4">
      <div className="flex  w-full lg:w-auto flex-row justify-between items-center gap-8 px-6 lg:px-4 py-4">
        <AvatarWithLink link="/settings" name={name} />
        <div className="flex flex-row justify-start items-center gap-2">
          <Link href="/add">
            <a className="active:scale-95 transition-all duration-200">
              <MdOutlineAddCircle className="text-3xl md:text-4xl" />
            </a>
          </Link>
          <Link href="/requests">
            <a className="active:scale-95 transition-all duration-200">
              <IoMdMailUnread className="text-3xl md:text-4xl" />
            </a>
          </Link>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="active:scale-95  transition-all duration-200"
          >
            <RiChat1Fill className="text-3xl md:text-4xl" />
          </button>
        </div>
      </div>
      <RecentConv />

      <FriendListModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Sidebar;
