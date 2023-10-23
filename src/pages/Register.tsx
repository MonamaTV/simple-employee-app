import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigation = useNavigate();

  const handleUserInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      navigation("/employees");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-4 text-center space-y-4 bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen text-white">
      <h2 className="text-2xl font-bold">CodeTribe Employee Management App</h2>
      <div className="w-full lg:w-1/3 xl:w-1/3 flex flex-col space-y-3">
        <form onSubmit={handleFormSubmission}>
          <Input
            handleUserInput={handleUserInput}
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <Input
            handleUserInput={handleUserInput}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            handleUserInput={handleUserInput}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Register;
