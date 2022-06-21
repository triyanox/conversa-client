import { SubmitButton } from "./Buttons";
import { useState } from "react";
import EmailInput from "../Inputs/Email";
import PasswordInput from "../Inputs/Password";
import * as auth from "../../lib/auth";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = auth.login(data);
    try {
      await login;
      toast.success("Successfully logged in, redirecting...");
      setTimeout(() => {
        window.location.replace("/");
      }, 2000);
    } catch (ex: any) {
      toast.error(ex.response.data);
    }
  };

  return (
    <section className=" pt-4 pb-24  flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-3xl font-bold mt-12 py-2 md:text-4xl text-black dark:text-white">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-16 justify-center px-8 items-center flex gap-4 mb-4 flex-col w-full"
      >
        <EmailInput form={data} setForm={setData} />
        <PasswordInput form={data} setForm={setData} />
        <SubmitButton text="Login" />
      </form>
      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
    </section>
  );
};

export default Login;
