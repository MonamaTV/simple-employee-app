import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "./components/Table";
import SearchForm from "./SearchForm";

export type Employee = {
  employeeId: string;
  name: string;
  surname: string;
  email: string;
  image: string;
  phone: string;
  position: string;
};

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [tempEmployees, setTempEmployees] = useState<Employee[]>([]);

  const [editState, setEditState] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [employee, setEmployee] = useState<Employee>({
    employeeId: "",
    name: "",
    email: "",
    image: "",
    position: "",
    phone: "",
    surname: "",
  });

  const validateUser = (employee: Employee) => {
    if (employee.name === "" || employee.name.length < 2)
      return "Enter a valid name";
    if (employee.surname === "" || employee.surname.length < 2)
      return "Enter a valid surname";
    if (employee.phone === "" || employee.phone.length !== 10)
      return "Enter a valid phone";
    if (employee.email === "" || employee.email.length < 2)
      return "Enter a  valid email";
    if (employee.position === "" || employee.position.length < 2)
      return "Enter a valid position";
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = employee.employeeId || uuidv4();

    const newEmployee: Employee = {
      ...employee,
      employeeId: id,
    };

    const isValid = validateUser(employee);
    if (isValid) {
      setError(isValid);
      return;
    }
    setError("");

    setEmployees([...employees, newEmployee]);

    // Clear the form
    setEmployee({
      employeeId: "",
      name: "",
      email: "",
      image: "",
      position: "",
      phone: "",
      surname: "",
    });
    
    setEditState(false);
  };

  const handleUserInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  const handleEmployeeDelete = (employeeId: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.employeeId !== employeeId)
    );
  };

  const handleEmployeeEdit = (employeeId: string) => {
    setEditState(true);
    const editEmployee = employees.find(
      (employee) => employee.employeeId === employeeId
    );
    if (!editEmployee) return;
    setEmployees(prevEmployees => prevEmployees.filter(employee => employee.employeeId != employeeId))
    setEmployee(editEmployee);
  };

  const handleUserImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const imgUrl = URL.createObjectURL(file);
      setEmployee({
        ...employee,
        image: imgUrl,
      });
    }
  };

  const handleSearchEmployee = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length === 0) {
      setEmployees([...tempEmployees]);
      return;
    }

    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.name.includes(value))
    );
  };

  return (
    <div className="bg-slate-900 flex flex-row py-10 justify-center h-screen w-screen">
      <div className="lg:container mx-auto flex-col flex lg:flex-row text-white">
        <div className="w-full lg:w-1/3 my-4 px-4">
          <h3 className="font-semibold text-xl">
            {editState ? "Edit" : "Add"} employee
          </h3>
          <Form
            handleUserImageInput={handleUserImageInput}
            handleFormSubmission={handleFormSubmission}
            handleUserInput={handleUserInput}
            employee={employee}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="w-full lg:w-2/3 my-4 px-4 border border-slate-700 shadow p-5">
          <h3 className="font-semibold text-xl">Employees</h3>
          <SearchForm handleSearchEmployee={handleSearchEmployee} />
          <Table
            handleDelete={handleEmployeeDelete}
            handleEdit={handleEmployeeEdit}
            employees={employees}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
