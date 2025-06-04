import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../../store/AuthStore";
import { useEffect, useState } from "react";

const ProtectedWrapper = () => {
  const { isLoggedIn, setUser } = useAuthStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        if (response.ok) {
          const { data } = await response.json();
          setUser(data);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    if (!isLoggedIn) {
      setIsLoading(true);
      getUser();
    }
  }, []);

  return isLoggedIn ? (
    <Outlet />
  ) : isLoading ? (
    <div className="flex items-center h-screen justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-DeepBlue"></div>
    </div>
  ) : null;
};

export { ProtectedWrapper };
