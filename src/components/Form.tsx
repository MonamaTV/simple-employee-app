import { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

type FormTypes = {
  handleFormSubmission: (event: React.FormEvent<HTMLFormElement>) => void;
  handleUserInput: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const Form = ({ handleFormSubmission, handleUserInput }: FormTypes) => {
  return (
    <form onSubmit={handleFormSubmission}>
      <Input
        handleUserInput={handleUserInput}
        placeholder="Employee first name"
        name="name"
      />
      <Input
        handleUserInput={handleUserInput}
        placeholder="Employee last name"
        name="surname"
      />
      <Input
        handleUserInput={handleUserInput}
        placeholder="Employee salary"
        name="salary"
      />
      {/* <Input
        handleUserInput={handleUserInput}
        placeholder="Employee gender"
        name="gender"
      /> */}
      <Select name="gender" handleUserInput={handleUserInput} />
      <Button />
    </form>
  );
};

export default Form;
