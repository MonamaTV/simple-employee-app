import { forwardRef } from "react";
import { Employee } from "../App";

type TableTypes = {
  employees: Employee[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}


const Table = forwardRef(function({ employees, handleDelete, handleEdit }: TableTypes, ref: any ){
  return (
    <table  className="my-2 w-full border-separate border-spacing-y-3 border-spacing-x-0">
      <thead className="hidden xl:table-header-group  bg-slate-700  w-full text-center px-5 h-14">
        <tr className=" font-semibold">
          <th className=" font-bold text-s  m"></th>
          <th className=" font-bold text-sm">Employee id</th>
          <th className=" font-bold text-sm">First name</th>
          <th className=" font-bold text-sm">Last name</th>
          <th className=" font-bold text-sm">Phone</th>
          <th className=" font-bold text-sm">Email</th>
          <th className=" font-bold text-sm">Position</th>
          <th className=" font-bold text-sm">Action</th>
        </tr>
      </thead>
      <tbody ref={ref}   className="text-center px-5  [&>*:nth-child(even)]:bg-slate-800" >
        {employees.map((employee) => (
          <tr
            className="transition-all delay-400 duration-700 h-10 hover:bg-slate-800 group relative"
            key={employee.employeeId}
          >
            <td className="text-center flex items-center flex-col"><img className="rounded-full w-12 first-letter:" src={employee.image} alt="avatar"/></td>
            <td className="hidden md:table-cell">{employee.employeeId.slice(0, 10) + "..."}</td>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.phone}</td>
            <td >
              {employee.email}
            </td>
            <td >
              {employee.position}
            </td>
            <td> 
              <div className="flex flex-row justify-center space-x-3" >
                <button onClick={() => handleEdit(employee.employeeId)} className=" bg-green-600 px-3 py-1 text-xs group-hover:display">
                  Edit
                </button>
                <button onClick={() => handleDelete(employee.employeeId)} className=" bg-red-600 px-3 py-1 text-xs  group-hover:display">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default Table;
