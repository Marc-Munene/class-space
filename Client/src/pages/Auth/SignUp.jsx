import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("passwords don't match!");
      return;
    }

    const formData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Sign Up Successful");
        navigate("/login");
      } else {
        toast.error("something went wrong, please try again!");
      }
    } catch (error) {
      toast.error("something went wrong, please try again!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-base"
      style={{
        backgroundImage: "url('/Class-space.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-sm "
      >
        <div className="text-center mb-3">
          <h1 className="text-2xl font-semibold text-black">Sign Up</h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-700 font-extrabold ">
              {" "}
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="p-2 border border-black rounded-md focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-700 font-extrabold ">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-2 border border-black rounded-md focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="johndoe@gmail.com"
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
              placeholder="12345"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="p-2 border border-black rounded-md focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="12345"
            />
          </div>

          <div className="flex">
            <span className="flex items-center mr-5">
              <h5>Have an account?</h5>
            </span>

            <Link
              to={"/login"}
              className="flex items-center space-x-3 text-base text-blue-700 cursor-pointer"
            >
              <span className="flex items-center gap-1">
                {" "}
                Login <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-2 text-base rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export { SignUp };
