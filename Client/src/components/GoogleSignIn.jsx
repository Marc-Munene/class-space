import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      // Send the credential to your backend for verification
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ token: credentialResponse.credential }),
        }
      );

      if (response.ok) {
        toast.success("Google sign-in successful");
        navigate("/dashboard");
      } else {
        toast.error("Google sign-in failed");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to sign in with Google");
    }
  };

  const handleError = () => {
    toast.error("Google sign-in failed!");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      shape="pill"
      theme="outline"
      size="large"
    />
  );
};

export { GoogleSignIn };
