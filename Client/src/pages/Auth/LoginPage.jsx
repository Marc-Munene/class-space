import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/AuthStore";
import { toast } from "sonner";
import { GoogleSignIn } from "../../components/GoogleSignIn";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("submitting ...");

    setLoading(true);

    const formData = {
      email,
      password,
    };

    // Basic input validation
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const loginSuccess = await login(formData);

      if (loginSuccess) {
        toast.success("Login Successfull");

        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen  flex items-center justify-center relative "
      style={{
        backgroundImage: "url('/Class-space.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}
      {/* form container */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-sm "
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-blsck"> Login</h1>
          {/* <p className="text-lg text-gray-200">Please enter your credentials</p> */}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-700 font-extrabold ">
              Email
            </label>
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
            <label className="text-base text-gray-700 font-extrabold ">
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
            className={`bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-2 text-base rounded-md cursor-pointer transition-transform duration-300 shadow-md ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
          {/* Divider */}
          <div className="text-center text-gray-600">or</div>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleSignIn />
          </div>
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
