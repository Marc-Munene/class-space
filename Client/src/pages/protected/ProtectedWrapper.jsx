import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../../store/AuthStore";
import { useEffect } from "react";

const ProtectedWrapper = () => {
  const { isLoggedIn, setUser } = useAuthStore((state) => state);
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

        if (!response.ok) {
          navigate("/");
        }

        const { data } = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };

    if (!isLoggedIn) {
      getUser();
    }
  }, []);
  return <Outlet />;
};

export { ProtectedWrapper };
