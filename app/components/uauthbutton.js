"use client";
import UAuth from "@uauth/js";
import React, { useEffect, useState } from "react";

const uauth = new UAuth({
  clientID: process.env.clientID || "b5cf3299-1a6f-4aed-af56-0a18f6635532",
  redirectUri: "https://7wjcfz-3000.csb.app/",
  scope: "openid wallet messaging:notifications:optional",
});

export default function UAuthButton() {
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();
      console.log(authorization);
      window.alert(authorization.accessToken);
    } catch (error) {
      console.log("Error", error);
    }
  };
  const logout = async () => {
    try {
      const authorization = await uauth.Disconnect();
      console.log(authorization);
      window.alert(authorization.accessToken);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      {uauth.user() ? (
        <>
          <button
            onClick={login}
            className="btn btn-secondary font-bold uppercase"
          >
            Connect
          </button>
        </>
      ) : (
        <>
          <button
            onClick={logout}
            className="btn btn-primary font-bold uppercase"
          >
            Disconnect
          </button>
          <p>Logout</p>
          <pre className="text-center">{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
