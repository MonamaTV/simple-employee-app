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
            className="transition-all delay-100 duration-300 h-10 hover:text-slate-600 group relative"
            key={employee.employeeId}
          >
            <td>{employee.employeeId.slice(0, 10) + "..."}</td>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.salary}</td>
            <td className="flex flex-row items-center">
              {employee.gender}

              <div>
                {" "}
                <span className="flex h-full items-center text-xs  right-20 group-hover:display">
                  Edit
                </span>
                <span className="flex flex-row bg-red-400 py-1 items-center text-xs  right-10 group-hover:display">
                  Delete
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
