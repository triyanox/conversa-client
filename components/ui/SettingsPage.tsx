import toast, { Toaster } from "react-hot-toast";
import EmailInput from "../Inputs/Email";
import NameInput from "../Inputs/Name";
import PasswordInput from "../Inputs/Password";
import { SubmitButton, SubmitButtonDel } from "./Buttons";
import * as user from "../../lib/user";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const SettingsPage = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

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
    <section className=" pt-4 pb-44  flex flex-col items-center justify-center px-8 md:px-16">
      <h1 className="text-3xl font-bold mt-16 py-2 md:text-4xl text-black dark:text-white">
        Update your account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 justify-center items-center flex gap-4 flex-col w-full"
      >
        <NameInput form={data} setForm={setData} />
        <EmailInput form={data} setForm={setData} />
        <PasswordInput form={data} setForm={setData} />
        <SubmitButton text="Update" />
      </form>
      <h1 className="text-3xl mt-16 mb-4 font-bold py-2 md:text-4xl text-black dark:text-white">
        Delete your account
      </h1>

      <SubmitButtonDel onClick={openModal} text="Delete" />

      <Toaster
        toastOptions={{
          position: "bottom-right",
        }}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-blur-xl" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-black">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold py-2 leading-6 text-red-500 dark:text-red-600"
                >
                  Delete Account
                </Dialog.Title>

                <div className="mt-4 flex flex-col items-start justify-center gap-1 text-md md:text-lg">
                  When you delete your account, all of your data will be
                  permanently deleted.
                </div>

                <div className="mt-8 flex items-start justify-start gap-2">
                  <button
                    type="button"
                    className="text-md trasmition-all inline-flex justify-center rounded-2xl bg-zinc-900 px-12 py-2 text-sm font-medium text-white duration-300 hover:bg-zinc-700 active:scale-95 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 md:text-lg"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-md trasmition-all inline-flex justify-center rounded-2xl bg-red-500 px-12 py-2 text-sm font-medium text-black duration-300 hover:bg-red-700 active:scale-95 dark:bg-red-700 dark:text-white dark:hover:bg-red-500 md:text-lg"
                    onClick={() => handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};
export default SettingsPage;
