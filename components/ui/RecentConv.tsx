import { IoMdRefresh } from "react-icons/io";
import useSWR from "swr";
import config from "../../config/production.json";
import * as http from "../../lib/http";
import Convcard from "./Convcard";
import Loader from "./Loader";

const RecentConv = () => {
  const endPoint = `${config.baseUrl}/conversation/recent`;
  const fetcher = (url: string) =>
    http.default.get(url).then((res) => res.data);
  const { data, error } = useSWR(endPoint, fetcher, {
    refreshInterval: 1000,
  });
  return (
    <section className="w-full hidden lg:block h-full mt-2 rounded-2xl  py-4 px-2 text-left align-middle  transition-all">
      <div className="text-xl md:text-2xl flex justify-between items-center font-bold py-2 px-4 mb-4 leading-6 text-zinc-900 dark:text-zinc-100">
        Recent Conversations
      </div>

      {!data && !error && (
        <div className="flex flex-col h-full justify-center items-center gap-8 px-4">
          <Loader />
        </div>
      )}
      {data && !error && (
        <div className="flex mt-8 h-full overflow-auto flex-col w-full justify-start items-center gap-2 px-4">
          {data &&
            data.map(
              (conv: {
                _id: string;
                members: string[];
                membersNames: string[];
                membersEmails: string[];
                messages: string[];
                totalMessages: number;
                lastMessage: string;
                lastMessageTimeStamp: string;
                lastMessageSender: string;
              }) => <Convcard {...conv} />
            )}
        </div>
      )}
      {error && (
        <div className="flex flex-col h-full justify-center items-center gap-8 px-4">
          <h3 className="text-lg md:text-xl text-black dark:text-white font-bol mb-4">
            No Conversations found
          </h3>
          <p className="text-center text-zinc-500">{error.message}</p>
        </div>
      )}
    </section>
  );
};

export default RecentConv;
