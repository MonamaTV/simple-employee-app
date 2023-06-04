import { ChangeEvent } from "react";

type InputTypes = {
  placeholder: string;
  name: string;
  handleUserInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Select = () => {
  return (
    <select className="block px-3 py-2 text-sm bg-slate-700 outline-none w-full my-2 text-slate-200">
      <option value="Male">Male</option>
      <option value="Male">Female</option>
      <option value="Male">Other</option>
    </select>
  );
};

export default Select;
