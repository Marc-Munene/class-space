import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#004e92] to-[#00c6a3] text-white min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          Find and Book Classrooms Instantly
        </h1>
        <p className="text-lg mb-6">
          No more wandering—ClassSpace helps students and reps discover
          available rooms in real-time for discussions, CATs, or emergency
          sessions.
        </p>
        <Link to={"/login"}>
          <button
            to={"/login"}
            className="bg-white text-[#004e92] hover:bg-[#e0f7f4] font-semibold px-6 py-3 rounded-2xl transition shadow-lg transform transform-fill duration-300 ease-in-out hover:scale-[1.06]"
          >
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export { Hero };
