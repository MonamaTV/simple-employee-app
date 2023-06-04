import { Employee } from "../App";

const Table = ({ employees }: { employees: Employee[] }) => {
  return (
    <table className="my-2 w-full border-separate border-spacing-y-3 border-spacing-x-0">
      <thead className="hidden md:table-header-group  bg-slate-700  w-full text-center px-5 h-14">
        <tr className=" font-semibold">
          <th className=" font-bold text-sm">Employee id</th>
          <th className=" font-bold text-sm">First name</th>
          <th className=" font-bold text-sm">Last name</th>
          <th className=" font-bold text-sm">Salary</th>
          <th className=" font-bold text-sm">Gender</th>
        </tr>
      </thead>
      <tbody className="text-center px-5  [&>*:nth-child(even)]:bg-slate-500">
        {employees.map((employee) => (
          <tr
            className="h-10 hover:opacity-25 peer-first:block"
            key={employee.employeeId}
          >
            <td>{employee.employeeId.slice(0, 10) + "..."}</td>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.salary}</td>
            <td>{employee.gender}</td>
            <button className="hidden peer">Edit</button>
            <button className="hidden peer">Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
