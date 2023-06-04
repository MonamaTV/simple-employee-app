import { ChangeEvent } from "react";

type InputTypes = {
  placeholder: string;
  name: string;
  handleUserInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, name, handleUserInput }: InputTypes) => {
  return (
    <input
      name={name}
      onChange={handleUserInput}
      className="block px-3 py-2 text-sm bg-slate-700 outline-none w-full my-2 text-slate-200"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
