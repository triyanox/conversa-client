import { useState } from "react";

type SearchProps = {
  friends: {
    friendId: string;
    friendName: string;
    friendEmail: string;
  }[];
  setResults: (results: any) => void;
};

const SearchInput = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const filterFriends =
    props.friends &&
    props.friends.filter((friend) => {
      return friend.friendName
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    props.setResults(filterFriends);
    if (e.target.value === "") {
      props.setResults(props.friends);
    }
  };

  return (
    <input
      className="text-black w-full rounded-lg dark:text-white bg-zinc-100 dark:bg-zinc-900 px-3 py-3 text-lg font-medium  outline-none   focus:placeholder:invisible dark:focus:placeholder:text-zinc-900 transition-all duration-200"
      type="name"
      placeholder="Search"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
