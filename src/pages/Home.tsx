import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-4 bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen text-white space-x-3">
        <h2 className="text-2xl font-bold">CodeTribe Employee Management App</h2>
        <div className="w-full lg:w-1/3 xl:w-1/3 flex flex-col gap-y-2">
          <Link to="/add" className="text-center w-full block text-sm px-3 py-3 bg-orange-400">Add New Employee</Link>
          <Link to="/employees" className="text-center w-full block text-sm px-3 py-3 bg-slate-400">View Employees</Link>
        </div>
    </div>
  );
};

export default Home;
