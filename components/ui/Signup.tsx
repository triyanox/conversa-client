import { useState } from "react";
import EmailInput from "../Inputs/Email";
import NameInput from "../Inputs/Name";
import PasswordInput from "../Inputs/Password";
import * as user from "../../lib/user";
import { toast, Toaster } from "react-hot-toast";
import { SubmitButton } from "./Buttons";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signup = user.createUser(data);
    try {
      await signup;
      toast.success("Successfully signed up, redirecting...");
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
        Signup
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-16 justify-center items-center flex gap-4 flex-col w-full"
      >
        <NameInput form={data} setForm={setData} />
        <EmailInput form={data} setForm={setData} />
        <PasswordInput form={data} setForm={setData} />
        <SubmitButton text="Signup" />
      </form>
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </section>
  );
};

export default Signup;
