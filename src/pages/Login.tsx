import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="px-4 text-center space-y-4 bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen text-white">
      <h2 className="text-2xl font-bold">CodeTribe Employee Management App</h2>
      <div className="w-full lg:w-1/3 xl:w-1/3 flex flex-col space-y-3">
        <form>
          <Input
            handleUserInput={() => {}}
            name="email"
            type="email"
            value=""
            placeholder="Enter your email"
          />
          <Input
            handleUserInput={() => {}}
            name="password"
            type="password"
            value=""
            placeholder="Enter your password"
          />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Login;
