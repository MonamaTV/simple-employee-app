import Form from "./components/Form";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "./components/Table";
import SearchForm from "./SearchForm";
import { getEmployees } from "./services";

export type Employee = {

  id: string;
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

  const ref = useRef<HTMLTableSectionElement | null>(null);

  const [editState, setEditState] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [employee, setEmployee] = useState<Employee>({
    id: "",
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
      return "Enter a valid phone. Must be 10 in length";
    if (employee.email === "" || employee.email.length < 2)
      return "Enter a  valid email";
    if (employee.position === "" || employee.position.length < 2)
      return "Enter a valid position";
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = employee.id || uuidv4();

    const newEmployee: Employee = {
      ...employee,
      id: id,
    };

    const isValid = validateUser(employee);
    if (isValid) {
      setError(isValid);
      return;
    }
    setError("");

    setEmployees([...employees, newEmployee]);
    setTempEmployees([...employees, newEmployee]);

    // Clear the form
    setEmployee({
      id: "",
      name: "",
      email: "",
      image: "",
      position: "",
      phone: "",
      surname: "",
    });

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
      prevEmployees.filter((employee) => employee.id !== employeeId)
    );
  };

  const handleEmployeeEdit = (employeeId: string) => {
    setEditState(true);
    const editEmployee = employees.find(
      (employee) => employee.id === employeeId
    );
    if (!editEmployee) return;
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id != employeeId)
    );
    setEmployee(editEmployee);
  };

  const handleUserImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
     try {
      const file = event.target.files[0];
      const imgUrl = URL.createObjectURL(file);
      setEmployee({
        ...employee,
        image: imgUrl,
      });
     } catch (error) {
      console.log(error)
     }
    }
  };

  const handleSearchEmployee = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length === 0 || value === "") {
      setEmployees([...tempEmployees]);
      return;
    }

    setEmployees(
      tempEmployees.filter((emp) => emp.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    );
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getEmployees();
        setEmployees(employees)
      } catch (error) {
        setEmployees([])
      }
    }

    fetchEmployees()
  }, []);

  return (
    <div className="bg-slate-900 flex flex-row py-10 justify-center h-screen w-screen">
      <div className="container lg:container mx-auto flex-col flex xl:flex-row text-white">
        <div className="w-full lg:w-2/3 xl:w-1/3 my-4 px-4">
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
        <div className="w-full xl:w-2/3 my-4 px-4 border border-slate-700 shadow p-5">
          <h3 className="font-semibold text-xl">Employees</h3>
          <SearchForm handleSearchEmployee={handleSearchEmployee} />
          <Table
            ref={ref}
            handleDelete={handleEmployeeDelete}
            employees={employees}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
