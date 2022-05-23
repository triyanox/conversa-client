import toast, { Toaster } from "react-hot-toast";
import EmailInput from "../Inputs/Email";
import NameInput from "../Inputs/Name";
import PasswordInput from "../Inputs/Password";
import { SubmitButton, SubmitButtonDel } from "./Buttons";
import * as user from "../../lib/user";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/User";

const SettingsPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const update = await user.updateUser(data);
      localStorage.setItem("token", update);
      toast.success("Successfully updated, redirecting...");
      setTimeout(() => {
        window.location.replace("/");
      }, 2000);
    } catch (ex: any) {
      toast.error(ex.response.data);
    }
  };

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const deleteUser = user.deleteUser();
    try {
      await deleteUser;
      localStorage.removeItem("token");
      toast.success("Successfully deleted, redirecting...");
      setTimeout(() => {
        window.location.replace("/");
      }, 2000);
    } catch (ex: any) {
      toast.error(ex.response.data);
    }
  };

  return (
    <section className=" pt-28 pb-44  flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-3xl mt-12 py-2 md:text-4xl text-black dark:text-white">
        Update your account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-8 justify-center items-center flex gap-8 flex-col w-full"
      >
        <NameInput form={data} setForm={setData} />
        <EmailInput form={data} setForm={setData} />
        <PasswordInput form={data} setForm={setData} />
        <SubmitButton text="Update" />
      </form>
      <h1 className="text-3xl mt-16 py-2 md:text-4xl text-black dark:text-white">
        Delete your account
      </h1>
      <form
        onSubmit={handleDelete}
        className="mt-8 justify-center items-center flex gap-8 flex-col w-full"
      >
        <SubmitButtonDel text="Delete" />
      </form>
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </section>
  );
};
export default SettingsPage;
