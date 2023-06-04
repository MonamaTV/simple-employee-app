import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "./components/Table";

export type Employee = {
  employeeId: string;
  name: string;
  surname: string;
  salary: string | number;
  gender: "Female" | "Male" | "Other";
};

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [employee, setEmployee] = useState<Employee>({
    employeeId: "",
    name: "",
    gender: "Male",
    surname: "",
    salary: "",
  });

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = uuidv4();
    const newEmployee: Employee = {
      ...employee,
      employeeId: id,
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleUserInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <div className="bg-slate-900 flex flex-row py-10 justify-center h-screen w-screen">
      <div className="container mx-auto flex flex-row text-white">
        <div className="w-1/3 m-4">
          <Form
            handleFormSubmission={handleFormSubmission}
            handleUserInput={handleUserInput}
          />
        </div>
        <div className="w-2/3 m-4">
          <h3 className="font-semibold text-xl">Employees</h3>
          <Table employees={employees} />
        </div>
      </div>
    </div>
  );
};

export default App;
