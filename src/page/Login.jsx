import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import {
  dosigninwithemailandpassword,
  dosignwithgoogle,
} from "../firebase/Auth";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signinwithgoogle = async () => {
    try {
      await dosignwithgoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await dosigninwithemailandpassword(email, password);
      setIsLoading(true);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppProvider>
      {error && (
        <Alert
          variant="filled"
          severity="error"
          sx={{
            mr: 2,
            width: "20%",
            position: "absolute",
            top: 80,
            right: 10,
          }}
        >
          {error}
        </Alert>
      )}
      <Container maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 3,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "transparent",
          }}
        >
          <Typography variant="h5" component="h1" textAlign="center">
            Sign in
          </Typography>
          <Typography variant="h8" component="h1" textAlign="center">
            please Sign in to continue
          </Typography>
          <Button onClick={signinwithgoogle} size="medium" fullWidth>
            <img
              className="mr-2 size-8"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />{" "}
            continue with google
          </Button>
          <TextField
            name="email"
            label="Email"
            type="email"
            value={email}
            sx={{ mt: 2 }}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            value={password}
            sx={{ mt: 2 }}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#00B0FF",
              borderRadius: 2,
              color: "#E0E0E0",
            }}
            disabled={isLoading}
          >
            sign in
          </Button>
        </Box>
      </Container>
      <Typography variant="body2" textAlign={"center"} mt={2}>
        i have no account {""}
        <Link to="/regester" className="hover:underline">
          Sign up
        </Link>
      </Typography>
    </AppProvider>
  );
}
