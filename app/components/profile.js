import UAuth from "@uauth/js";
import { useEffect, useState } from "react";

const uauth = new UAuth({
  clientID: process.env.clientID || "b5cf3299-1a6f-4aed-af56-0a18f6635532",
  redirectUri: process.env.redirectUri || "https://7wjcfz-3000.csb.app/",
  scope: "openid wallet messaging:notifications:optional",
});

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  // Check to see if the user is inside the cache
  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Login with a popup and save the user
  const handleLogin = () => {
    setLoading(true);
    if (!uauth) {
      return;
    }

    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  // Logout and delete user
  const handleLogout = () => {
    setLoading(true);
    if (!uauth) {
      return;
    }

    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    console.error(error);
    return <>{String(error.stack)}</>;
  }

  if (user) {
    return (
      <>
        <h2 className="mx-auto py-2">Logged In ID: {user.sub}</h2>
        <p className="text-xs mx-auto">{user.wallet_address}</p>
        <button
          onClick={handleLogout}
          className="btn btn-block btn-secondary font-bold uppercase"
        >
          <svg height="2em" viewBox="0 0 40 40">
            <path
              d="M38.3333 3.90803V16.5517L1.66666 31.4942L38.3333 3.90803Z"
              className="fill-blue-400"
            />
            <path
              d="M31.4583 3.33333V25.1724C31.4583 31.5203 26.3281 36.6667 20 36.6667C13.6719 36.6667 8.54166 31.5203 8.54166 25.1724V15.977L15.4167 12.1839V25.1724C15.4167 26.2394 15.8392 27.2626 16.5913 28.0171C17.3434 28.7716 18.3635 29.1954 19.4271 29.1954C20.4907 29.1954 21.5108 28.7716 22.2629 28.0171C23.015 27.2626 23.4375 26.2394 23.4375 25.1724V7.75862L31.4583 3.33333Z"
              className="fill-blue-800"
            />
          </svg>
          Logout
        </button>
      </>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="btn btn-block btn-secondary font-bold uppercase"
    >
      <svg height="2em" viewBox="0 0 40 40">
        <path
          d="M38.3333 3.90803V16.5517L1.66666 31.4942L38.3333 3.90803Z"
          className="fill-blue-400"
        />
        <path
          d="M31.4583 3.33333V25.1724C31.4583 31.5203 26.3281 36.6667 20 36.6667C13.6719 36.6667 8.54166 31.5203 8.54166 25.1724V15.977L15.4167 12.1839V25.1724C15.4167 26.2394 15.8392 27.2626 16.5913 28.0171C17.3434 28.7716 18.3635 29.1954 19.4271 29.1954C20.4907 29.1954 21.5108 28.7716 22.2629 28.0171C23.015 27.2626 23.4375 26.2394 23.4375 25.1724V7.75862L31.4583 3.33333Z"
          className="fill-blue-800"
        />
      </svg>
      Login with <span className="text-blue-800">Unstoppable</span>
    </button>
  );
};

export default Profile;
