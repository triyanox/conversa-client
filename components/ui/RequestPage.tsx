import useSWR from "swr";
import * as http from "../../lib/http";
import config from "../../config/production.json";
import Loader from "./Loader";
import { FriendsCardWithAccept } from "./FriendsCard";
import * as user from "../../lib/user";
import toast, { Toaster } from "react-hot-toast";

const endPoint = `${config.baseUrl}/users/friends/requests`;
const fetcher = (url: string) => http.default.get(url).then((res) => res.data);

const Rp = () => {
  const { data, error } = useSWR(endPoint, fetcher, {
    refreshInterval: 3000,
  });
  const handleAccept = async (id: string) => {
    const res = user.acceptFriendRequest(id);
    try {
      await res;
      toast.success("Friend added!");
    } catch (e: any) {
      toast.error(e.response.data);
    }
  };

  return (
    <section className="min-h-screen pt-28 flex flex-col items-center justify-start px-8 md:px-16">
      <h1 className="text-3xl mt-12 py-2 md:text-4xl text-black dark:text-white">
        Friend Requests
      </h1>
      <p className="mt-4">Your friend requests will be shown here</p>
      {!data && !error && (
        <div className="flex mt-16 flex-col h-full justify-center items-center gap-8 px-4">
          <Loader />
        </div>
      )}
      {data && !error && (
        <div className="flex pt-12 flex-col w-full md:w-2/3 justify-start items-center gap-2 px-4">
          {data.map(
            (friend: {
              _id: string;
              name: string;
              email: string;
              link: string;
              Picture: string;
            }) => (
              <FriendsCardWithAccept accept={handleAccept} Friend={friend} />
            )
          )}
        </div>
      )}
      {error && (
        <div className="flex font-bold text-lg md:text-xl flex-col h-full justify-center items-center gap-8 mt-16 px-4">
          <p className="text-red-500 text-center">{error.message} !</p>
        </div>
      )}
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </section>
  );
};
export default Rp;
