import React, { useState } from "react";
import { docreateuserwithemailandpassword } from "../firebase/Auth";
import { Link, Navigate } from "react-router-dom";
import { SignInPage } from "@toolpad/core/SignInPage";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useAuth } from "../context/Authcontext";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isregester, setIsregester] = useState(false);
  const { islogedin } = useAuth();
  const onsubmit = async (e) => {
    setIsLoading(true);
    if (!isregester) {
      setIsregester(true);
      await docreateuserwithemailandpassword(email, password).catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
    }
  };
  if (islogedin) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <AppProvider>
        <SignInPage
          providers={[{ id: "credentials", name: "Email and Password" }]}
          signIn={onsubmit}
          error={error}
          slotProps={{
            title: {
              children: "Welcome to Our Service",
            },
            emailField: {
              label: "Email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true,
            },
            passwordField: {
              label: "Password",
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              required: true,
            },
            submitButton: {
              children: isloading ? "Signing In..." : "Sign In",
              disabled: isloading,
            },
          }}
          sx={{
            margin: "auto",
            padding: 4,
          }}
        />
      </AppProvider>
    </div>
  );
}
