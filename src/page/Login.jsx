import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SignInPage } from "@toolpad/core/SignInPage";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  dosigninwithemailandpassword,
  dosignwithgoogle,
} from "../firebase/Auth";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // To handle loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track user login
  const navigate = useNavigate(); // Navigation hook

  const handleSignIn = async (provider, formData) => {
    setError("");
    setIsLoading(true);

    try {
      if (provider.id === "google") {
        await dosignwithgoogle();
      } else if (provider.id === "credentials") {
        const { email, password } = formData;
        await dosigninwithemailandpassword(email, password);
      }
      setIsLoggedIn(true); // Mark user as logged in
      navigate("/home"); // Redirect to home page
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <AppProvider>
      <SignInPage
        providers={[
          { id: "google", name: "Google" },
          { id: "credentials", name: "Email and Password" },
        ]}
        signIn={handleSignIn}
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
            children: isLoading ? "Signing In..." : "Sign In",
            disabled: isLoading,
          },
        }}
        sx={{
          margin: "auto",
          padding: 4,
        }}
      />
    </AppProvider>
  );
}
