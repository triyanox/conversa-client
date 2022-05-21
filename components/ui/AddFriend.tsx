import { SubmitButton } from "./Buttons";
import { useState } from "react";
import EmailInput from "../Inputs/Email";
import * as user from "../../lib/user";
import toast, { Toaster } from "react-hot-toast";

const AddFriend = () => {
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const add = user.addFriend(data.email);
    try {
      await add;
      toast.success("Friend added!");
    } catch (ex: any) {
      toast.error(ex.response.data);
    }
  };

  return (
    <section className=" pt-28 pb-44  flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-3xl mt-12 py-2 md:text-4xl text-black dark:text-white">
        Add a friend
      </h1>
      <p className="mt-4 text-center">
        Add a friend by entering their email address. They will be notified
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-16 justify-center px-8 items-center flex gap-8 mb-4 flex-col w-full"
      >
        <EmailInput form={data} setForm={setData} />
        <SubmitButton text="Add" />
      </form>
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </section>
  );
};

export default AddFriend;
