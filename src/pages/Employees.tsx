import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { Employee, deleteEmployee, getEmployees } from "../api/services";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getEmployees();
        setEmployees(employees);
      } catch (error) {
        setEmployees([]);
      }
    };

    fetchEmployees();
  }, []);


  const handleDeleteEmployee = async (employeeId: string) => {
    try {
        const response = await deleteEmployee(employeeId);
        // If successful, delete it from the UI
        if(response) {
            setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.id !== employeeId)
          );
        }

    } catch (error) {
        
    }
  }

  const handleSearchEmployee = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setEmployees(
      employees.filter((emp) =>
        emp.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div className="relative bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen">
      <div className="w-full xl:w-2/3">
        <Link to="/" className="text-red-400 px-3 py-1 left-0">
          Go Back
        </Link>
        <div className="text-white w-full my-4 px-2 md:px-4 p-5 border border-slate-700 shadow ">
        <h3 className="font-semibold text-2xl text-white">Employees</h3>
          <SearchForm handleSearchEmployee={handleSearchEmployee} />
          <Table employees={employees} handleDelete={handleDeleteEmployee} />
        </div>
      </div>
    </div>
  );
};

export default Employees;
