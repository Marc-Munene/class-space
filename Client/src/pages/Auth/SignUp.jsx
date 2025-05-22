import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center text-base"
      style={{
        backgroundImage: "url('/signup.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <form
        //   onSubmit={handleSubmit}
        className="bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl py-3 px-5 w-full max-w-md"
      >
        <div className="text-center mb-3">
          <h1 className="text-3xl font-semibold text-black">Sign Up</h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium"> Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="johndoe@gmail.com"
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
              placeholder="12345"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg text-gray-700 font-medium">
              Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="p-3 border border-black rounded-md placeholder:text-black focus:border-blue-500 outline-none shadow-sm transition-all duration-300"
              placeholder="12345"
            />
          </div>

          <div className="flex items-center  mr-6 mt-3">
            <button
              to={"/"}
              className="text-md flex items-center text-blue-700 cursor-pointer"
            >
              {/* <HiArrowLongLeft /> */}
              Login
            </button>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white p-3 text-lg rounded-md placeholder:text-black cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export { SignUp };
