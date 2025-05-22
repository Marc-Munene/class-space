import { useState } from "react";
// import { useNavigate } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitting ...");

    // const goToSignUp = () => {
    //   navigate("/signup");
    // };
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <form
        // onSubmit={handleSubmit}
        className=" bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl p-8 w-full max-w-sm"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-blsck"> Login</h1>
          {/* <p className="text-lg text-gray-200">Please enter your credentials</p> */}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter email"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="Enter password"
            />
          </div>

          <div className="flex">
            <span className="flex items-center mr-5">
              <h5>Don't have an account?</h5>
            </span>

            <span
              className="flex items-center space-x-3 text-base text-blue-700 cursor-pointer"
              // onClick={goToSignUp}
            >
              sign Up
            </span>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-3 text-lg rounded-md placeholder:text-black cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
