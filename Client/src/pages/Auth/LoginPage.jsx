import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/AuthStore";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("submitting ...");

    const formData = {
      email,
      password,
    };

    const loginSuccess = await login(formData);

    if (loginSuccess) {
      toast.success("Login Successfull");

      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className=" bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl p-8 w-full max-w-sm"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-blsck"> Login</h1>
          {/* <p className="text-lg text-gray-200">Please enter your credentials</p> */}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-2 border border-black rounded-md focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter email"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-700 font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-2 border border-black rounded-md focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter password"
            />
          </div>

          <div className="flex">
            <span className="flex items-center mr-5">
              <h5>Don't have an account?</h5>
            </span>

            <Link
              to={"/signup"}
              className="flex items-center space-x-3 text-base text-blue-700 cursor-pointer"
            >
              <span className="flex items-center gap-1">
                signUp <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-2 text-base rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
