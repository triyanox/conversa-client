import { ChangeEvent } from "react";
type Props = {
  setForm: (form: any) => void;
  form: string;
};

const MessageInput = (props: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return props.setForm(e.target.value);
  };

  return (
    <input
      className="w-full rounded-lg text-black dark:text-white bg-transparent  px-3 py-4 text-xl md:text-2xl font-medium  outline-none focus:scale-[102%]   focus:placeholder:invisible dark:focus:placeholder:text-zinc-900 transition-all duration-200 "
      value={props.form}
      onChange={handleChange}
      type="text"
      placeholder="Type a message !"
    />
  );
};

export default MessageInput;
