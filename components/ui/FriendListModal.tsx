import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useSWR from "swr";
import FriendsCard from "./FriendsCard";
import config from "../../config/production.json";
import * as http from "../../lib/http";
import Loader from "./Loader";
import SearchInput from "../Inputs/Search";
import { IoMdRefresh } from "react-icons/io";

const endPoint = `${config.baseUrl}/users/friends`;
const fetcher = (url: string) => http.default.get(url).then((res) => res.data);

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type FrindsType = {
  friendId: string;
  friendName: string;
  friendEmail: string;
}[];

function FriendListModal(props: Props) {
  const { data, error } = useSWR(endPoint, fetcher);
  const [results, setResults] = useState<FrindsType>([]);
  const handleRefrech = () => {
    setResults([]);
  };
  function closeModal() {
    props.setIsOpen(false);
  }

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-2xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-4/5 items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-3/4 max-w-md transform overflow-auto mt-48 rounded-2xl bg-white dark:bg-black py-6 px-2 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl md:text-2xl flex justify-between items-center font-bold py-2 px-4 mb-4 leading-6 text-zinc-900 dark:text-zinc-100"
                >
                  Friends
                  <button
                    className=" active:rotate-180 text-3xl transition-all duration-300"
                    onClick={handleRefrech}
                  >
                    <IoMdRefresh />
                  </button>
                </Dialog.Title>
                <div className=" flex-row justify-start items-center gap-8 px-4 py-2">
                  <SearchInput friends={data} setResults={setResults} />
                </div>
                {!data && !error && (
                  <div className="flex flex-col h-full justify-center items-center gap-8 px-4">
                    <Loader />
                  </div>
                )}
                {data && !error && (
                  <div className="flex mt-8 flex-col w-full justify-start items-center gap-2 px-4">
                    {results.length > 0
                      ? results.map((friend) => (
                          <FriendsCard Clicked={props.setIsOpen} {...friend} />
                        ))
                      : data.map(
                          (friend: {
                            friendId: string;
                            friendName: string;
                            friendEmail: string;
                          }) => (
                            <FriendsCard
                              Clicked={props.setIsOpen}
                              {...friend}
                            />
                          )
                        )}
                  </div>
                )}
                {error && (
                  <div className="flex flex-col h-full justify-center items-center gap-8 px-4">
                    <h3 className="text-lg md:text-xl text-black dark:text-white font-bol mb-4">
                      No friends found
                    </h3>
                    <p className="text-center text-zinc-500">{error.message}</p>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default FriendListModal;
