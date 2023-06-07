import React, { useEffect, useState } from "react";
import { Employee } from "../App";
import { v4 as uuidv4 } from "uuid";
import Form from "../components/Form";
import { getEmployee, postEmployee, updateEmployee } from "../services";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const [error, setError] = useState<string>("");
  const navigation = useNavigate();
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState<Employee>({
    id: "",
    name: "",
    email: "",
    image: "",
    position: "",
    phone: "",
    surname: "",
  });

  const handleFormSubmission = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    

    const newEmployee: Employee = {
      ...employee,
      id: employee.id,
    };

    const isValid = validateUser(employee);
    if (isValid) {
      setError(isValid);
      return;
    }
    setError("");

    try {
      const response = await updateEmployee(employee.id, newEmployee);
      if (!response) {
        setError("Failed to update employee");
      }
      navigation("/employees");
    } catch (error) {
      setError("Something went wrong! Please try again");
    }

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
        console.log(error);
      }
    }
  };

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


  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employee = await getEmployee(employeeId);
        setEmployee(employee);
      } catch (error) {
      }
    };

    fetchEmployee();
  }, []);

  return (
    <div className="bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen">
      <div className="w-full lg:w-2/3 xl:w-1/3">
      <Link to="/" className="text-red-400 px-3 py-1">Go Back</Link>
      <div className="border border-slate-700 shadow p-5 w-full my-4 px-4">
        <h3 className="font-semibold text-2xl text-white">Update employee</h3>
        <Form
          handleUserImageInput={handleUserImageInput}
          handleFormSubmission={handleFormSubmission}
          handleUserInput={handleUserInput}
          employee={employee}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      </div>
    </div>
  );
};

export default EditEmployee;