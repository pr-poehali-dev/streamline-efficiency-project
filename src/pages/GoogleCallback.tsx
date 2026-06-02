import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "@/components/extensions/google-auth/useGoogleAuth";

const AUTH_URL = "https://functions.poehali.dev/6173a44c-9687-4598-a813-c9df202dd34a";

export default function GoogleCallback() {
  const navigate = useNavigate();
  const auth = useGoogleAuth({
    apiUrls: {
      authUrl: `${AUTH_URL}?action=auth-url`,
      callback: `${AUTH_URL}?action=callback`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
    },
  });

  useEffect(() => {
    auth.handleCallback().then((success) => {
      if (success) {
        navigate("/");
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold tracking-tighter mb-4">...</div>
        <p className="text-sm uppercase tracking-widest">Входим через Google</p>
        {auth.error && (
          <p className="mt-4 text-red-600 text-sm">{auth.error}</p>
        )}
      </div>
    </main>
  );
}
