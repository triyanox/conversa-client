export const SubmitButton = (props: { text: string }) => {
  return (
    <button
      className="w-[360px] active:scale-90 transition-all duration-300 mt-4 md:w-[400px] rounded-lg bg-black dark:bg-white text-white dark:text-black py-3"
      type="submit"
    >
      {props.text}
    </button>
  );
};

export const SubmitButtonDel = (props: { text: string }) => {
  return (
    <button
      className="w-[360px] active:scale-90 transition-all duration-300 mt-4 md:w-[400px] rounded-lg bg-red-800 dark:bg-red-600 text-white dark:text-black py-3"
      type="submit"
    >
      {props.text}
    </button>
  );
};

import { IoIosExit } from "react-icons/io";

export const CloseButton = (props: { handleClose: () => void }) => {
  return (
    <button
      onClick={props.handleClose}
      className=" flex justify-center items-center  rounded-full font-bold text-4xl  active:scale-90 duration-300 transition-all text-black  dark:text-white"
    >
      <IoIosExit />
    </button>
  );
};

import { MdDelete } from "react-icons/md";
export const DeleteButton = (props: { handleDelete: () => void }) => {
  return (
    <button
      onClick={props.handleDelete}
      className=" flex justify-center items-center  rounded-full font-bold text-4xl  active:scale-90 duration-300 transition-all text-black  dark:text-white"
    >
      <MdDelete />
    </button>
  );
};
